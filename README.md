# PDFUE

Free PDF and photo tools that run entirely in your browser. There is no backend and no upload, so your files never leave your device.

Live site: https://pdfue.com

## Tools (19)

**Organize:** Merge PDF, Split PDF, Rotate PDF, Organize PDF
**Edit:** Edit PDF, Watermark PDF, Sign PDF
**Compress:** Compress PDF/Images
**Convert:** Word to PDF, PDF to Word, PDF to Excel, Excel to PDF, JPG to PDF, HTML to PDF, PDF to PDF/A
**Security:** Protect PDF (AES-256), Unlock PDF
**Image tools:** PDF to JPG, Photo Collage

## Features

- 100% client-side: files are processed in the browser only
- Light and dark theme, fully responsive
- Real AES-256 encryption and decryption via qpdf-wasm
- Blog, sitemap, SEO metadata and JSON-LD included
- Security: strict CSP, security headers (`_headers`, `vercel.json`), escaped file names, sandboxed iframes

## Tech

Plain HTML, CSS and JavaScript. No build step.
Libraries: pdf.js, pdf-lib, JSZip, SheetJS, html2canvas, jsPDF, mammoth, qpdf-wasm (vendored in `assets/vendor`).

## Run locally

    npx serve .

## Deploy

Works on any static host (Vercel, Netlify, Cloudflare Pages, GitHub Pages).
Security headers are set via `vercel.json` (Vercel) or `_headers` (Netlify/Cloudflare).

## Known limits

- PDF to Word/Excel extract text and tables; scanned PDFs are not OCR'd.
- PDF to PDF/A is best-effort (no font embedding or colour-space conversion).

## Credits

Developed by Kamran Badar.
