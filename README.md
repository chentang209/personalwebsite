# Michael Yang's Personal Website

This is the personal website of Michael Yang, showcasing his portfolio and app showcase.

## Features

- Responsive design that works on all devices
- Modern UI with smooth animations
- App showcase section
- Contact form
- SEO optimized
- Dark/Light mode support

## Tech Stack

- [Next.js](https://nextjs.org/) - React framework
- [TypeScript](https://www.typescriptlang.org/) - Type checking
- [Tailwind CSS](https://tailwindcss.com/) - Styling
- [Framer Motion](https://www.framer.com/motion/) - Animations
- [Vercel](https://vercel.com/) - Hosting & Deployment

## Getting Started

First, install the dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

Then, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Deployment

### Prerequisites

1. [Vercel](https://vercel.com) account
2. [GitHub](https://github.com/) account (optional, for continuous deployment)

### Deploy to Vercel

1. Push your code to a GitHub repository (optional but recommended)
2. Go to [Vercel](https://vercel.com) and sign in with your GitHub account
3. Click on "New Project"
4. Import your GitHub repository or drag and drop your project folder
5. Vercel will automatically detect it's a Next.js app
6. Click "Deploy"
7. Once deployed, you can set up a custom domain in the Vercel dashboard

### Environment Variables

No environment variables are required for basic deployment. However, if you want to use the contact form, you'll need to set up an email service like SendGrid or Nodemailer.

## Custom Domain Setup

1. Go to your Vercel project settings
2. Navigate to "Domains"
3. Enter your domain (e.g., www.michaelyanghang.com)
4. Follow the instructions to verify domain ownership
5. Update your domain's DNS settings as instructed by Vercel

## SEO

The website includes:
- `robots.txt`
- `sitemap.xml`
- Meta tags
- Semantic HTML

## License

This project is open source and available under the [MIT License](LICENSE).
