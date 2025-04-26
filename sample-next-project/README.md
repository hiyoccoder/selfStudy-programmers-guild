This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Deployment Status

This project is deployed on Vercel. You can access the live site at:
[https://self-study-programmers-guild.vercel.app](https://self-study-programmers-guild.vercel.app)

### Deployment Process

1. Push your changes to the main branch
2. Vercel automatically detects the changes and triggers a new deployment
3. The deployment process includes:
   - Building the Next.js application
   - Running tests (if configured)
   - Deploying to Vercel's global edge network

### Environment Variables

Make sure to set up the following environment variables in your Vercel project settings if needed:

- `NEXT_PUBLIC_*` variables for client-side usage
- Server-side environment variables for API keys and secrets

### Monitoring

You can monitor your deployment status and performance through the Vercel dashboard.
