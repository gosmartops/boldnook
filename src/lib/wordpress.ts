const API_URL = process.env.WORDPRESS_API_URL;

export async function fetchAPI(query: string, { variables }: { variables?: any } = {}) {
  if (!API_URL) {
    throw new Error("WORDPRESS_API_URL is not defined");
  }

  const headers: { [key: string]: string } = { "Content-Type": "application/json" };

  if (process.env.WORDPRESS_AUTH_REFRESH_TOKEN) {
    headers["Authorization"] = `Bearer ${process.env.WORDPRESS_AUTH_REFRESH_TOKEN}`;
  }

  const res = await fetch(API_URL, {
    method: "POST",
    headers,
    body: JSON.stringify({
      query,
      variables,
    }),
  });

  const json = await res.json();
  if (json.errors) {
    console.error(json.errors);
    throw new Error("Failed to fetch API");
  }
  return json.data;
}

export async function getPosts() {
  const data = await fetchAPI(
    `
    query AllPosts {
      posts(first: 20, where: { orderby: { field: DATE, order: DESC } }) {
        nodes {
          title
          excerpt
          slug
          date
          featuredImage {
            node {
              sourceUrl
            }
          }
          author {
            node {
              name
            }
          }
        }
      }
    }
  `
  );
  return data?.posts?.nodes;
}

export async function getProducts() {
  // Assuming WooCommerce is installed on WP
  const data = await fetchAPI(
    `
    query AllProducts {
      products(first: 20) {
        nodes {
          id
          name
          slug
          description
          image {
            sourceUrl
          }
          ... on SimpleProduct {
            price
            regularPrice
            salePrice
          }
        }
      }
    }
  `
  );
  return data?.products?.nodes;
}
