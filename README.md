# BOLDNOOK — Headless WordPress Fashion Platform

Premium fashion destination for Nigeria. Built with Next.js 15, TypeScript, and Vanilla CSS.

## 🚀 Getting Started

1.  **Clone & Install**:
    ```bash
    git clone https://github.com/gosmartops/boldnook.git
    cd boldnook
    npm install
    ```

2.  **Environment Variables**:
    The project is currently connected to a **Live WordPress Backend** on TasteWP.
    
    Check `.env.local`:
    ```bash
    WORDPRESS_API_URL="https://stuffhen.s3-tastewp.com/graphql"
    ```

3.  **Live WordPress Admin**:
    - **URL**: [https://stuffhen.s3-tastewp.com/wp-admin](https://stuffhen.s3-tastewp.com/wp-admin)
    - **User**: `admin`
    - **Pass**: `aa76OHb7Z7E`
    
    *Note: This is a temporary instance for development.*

3.  **Run Development Server**:
    ```bash
    npm run dev
    ```

## 🔌 Transitioning to Live WordPress

When you are ready to connect a real WordPress site:

1.  **WordPress Setup**:
    - Install the [WPGraphQL](https://wordpress.org/plugins/wp-graphql/) plugin.
    - Install [WooCommerce](https://woocommerce.com/) (optional, if selling products).
    - Install [WPGraphQL for WooCommerce](https://wordpress.org/plugins/wp-graphql-woocommerce/).

2.  **Update Endpoint**:
    Change `WORDPRESS_API_URL` in your Vercel settings or `.env.local`:
    ```bash
    WORDPRESS_API_URL="https://your-live-wp-site.com/graphql"
    ```

3.  **Authentication**:
    If your endpoint requires authentication for certain queries, add `WORDPRESS_AUTH_REFRESH_TOKEN` to your environment variables.

## 🎨 Design System

- **Typography**: Bebas Neue (Headlines), DM Sans (Body).
- **Styling**: Vanilla CSS with a custom utility system in `src/app/globals.css`.
- **Mock Data**: Pre-populated in `src/lib/mock-data.ts` based on brand copy.

## 📦 Project Structure

- `src/app`: App Router pages and API routes.
- `src/components`: Reusable UI components (ProductCard, StyleFeed, etc.).
- `src/lib`: API clients and data utilities.
- `public`: Static assets and brand imagery.

---
© 2026 Boldnook Ltd. Made in Nigeria.
