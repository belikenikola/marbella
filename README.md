# Marbella Bay Apartments

Marketing website for Marbella Bay Apartments — a 176-unit community at 6155 Sienna Trails, Beaumont, TX.

## Tech Stack

- **Framework:** Next.js 16 (App Router) with React 19
- **Styling:** Tailwind CSS v4
- **Animations:** Framer Motion
- **Email:** Resend
- **Listings:** AppFolio embed widget

## Getting Started

```bash
npm install
cp .env.example .env.local   # then fill in RESEND_API_KEY
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Environment Variables

| Variable | Description |
|---|---|
| `RESEND_API_KEY` | Resend API key for contact form emails |
| `CONTACT_EMAIL` | Recipient email for form submissions |

## Deployment

```bash
npm run build
npm start
```
