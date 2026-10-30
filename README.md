# NovaTech Electronics Store (Next.js SSR + SSG)

A student midterm project demonstrating an electronics e-commerce frontend with 10 sample products, product detail pages, a shopping cart, checkout, and a printable/downloadable HTML invoice.

## Requirements
- Node.js 20.9 or newer
- npm

## Run locally
1. Extract this project folder.
2. Open a terminal inside `electronics-midterm`.
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start development mode:
   ```bash
   npm run dev
   ```
5. Open http://localhost:3000

To test a production build:
```bash
npm run build
npm start
```

## Rendering modes
- **SSG:** `app/page.tsx` exports `dynamic = 'force-static'`. The product catalog is generated as static HTML during the build.
- **SSR:** `app/products/[id]/page.tsx` exports `dynamic = 'force-dynamic'`. Product detail pages are rendered by the server for each request.
- **Client interaction:** The cart and checkout use React client components and `localStorage`. The demo checkout does not process real payments or store orders on a server.
- **Invoice:** After checkout, the invoice is displayed at `/invoice`. Use **Download invoice.html** to save a standalone HTML file or **Print / Save PDF** to print it.

## Sample products
The 10 products and their sample prices are in `app/lib/products.ts`.

## Publish to a public GitHub repository
1. Create a new repository on https://github.com/new, for example `novatech-electronics-midterm`. Set visibility to **Public**. Do not initialize with a README if you already use this one.
2. In a terminal inside the project folder, run:
   ```bash
   git init
   git add .
   git commit -m "Build NovaTech electronics store"
   git branch -M main
   git remote add origin https://github.com/YOUR-USERNAME/novatech-electronics-midterm.git
   git push -u origin main
   ```
3. Replace `YOUR-USERNAME` with your GitHub username. Submit the resulting repository URL.

## Deploy to Vercel
1. Push the project to GitHub.
2. Visit https://vercel.com and sign in with GitHub.
3. Select **Add New → Project**, then import the public repository.
4. Keep the detected Next.js framework and default build settings.
5. Click **Deploy**. When it finishes, open the provided `https://...vercel.app` URL and test all pages.

## Midterm demo checklist
- Home/catalog shows 10 products.
- Open a product detail page and explain why it is SSR.
- Explain that the catalog is SSG.
- Add multiple products to the cart, adjust quantities, and remove an item.
- Complete checkout with sample customer information.
- Show the invoice, download `invoice-ORDERNUMBER.html`, and demonstrate print/save as PDF.
- Show the public GitHub repository and deployed website.

## Limitations
This is a frontend demonstration. The cart and last invoice are stored in the current browser's local storage. There is no database, authentication, real inventory, payment gateway, or server-side order persistence. Do not use real customer or payment data.
