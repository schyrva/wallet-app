# Wallet App

A modern web application for tracking and managing financial transactions. Built with Next.js and designed with a clean, mobile-first approach.

![Wallet App Screenshot](public/screenshot.png)

## Features

- **Transaction Management**: View and track all financial transactions
- **Card Balance Tracking**: Monitor your card balance and available credit
- **Points System**: Track daily points accumulation
- **Responsive Design**: Optimized for both mobile and desktop use
- **Clean Code Architecture**: Well-structured codebase with proper separation of concerns

## Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/)
- **UI Components**: [Radix UI](https://www.radix-ui.com/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **State Management**: React Hooks
- **Date Handling**: [date-fns](https://date-fns.org/)
- **Icons**: [Lucide React](https://lucide.dev/guide/packages/lucide-react)
- **Code Quality**: ESLint, Prettier, Husky, lint-staged

## Getting Started

### Prerequisites

- Node.js 18.x or higher
- npm or pnpm

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/schyrva/wallet-app.git
   cd wallet-app
   ```

2. Install dependencies:

   ```bash
   npm install
   # or
   pnpm install
   ```

3. Run the development server:

   ```bash
   npm run dev
   # or
   pnpm dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## Project Structure

```
wallet-app/
├── app/                  # Next.js app directory
│   ├── globals.css       # Global styles
│   ├── layout.tsx        # Root layout component
│   ├── page.tsx          # Home page
│   └── transaction/      # Transaction details page
├── components/           # React components
│   ├── ui/               # UI components
│   ├── card-balance-block.tsx
│   ├── daily-points-block.tsx
│   ├── no-payment-due-block.tsx
│   ├── transaction-icon.tsx
│   ├── transaction-item.tsx
│   ├── transactions-list.tsx
│   └── theme-provider.tsx
├── hooks/                # Custom React hooks
│   ├── use-card-balance.ts
│   ├── use-daily-points.ts
│   ├── use-mobile.tsx
│   ├── use-toast.ts
│   └── use-transactions.ts
├── lib/                  # Utility libraries
│   └── utils.ts
├── public/               # Static assets
├── types/                # TypeScript type definitions
├── utils/                # Utility functions
│   ├── calculations.ts
│   ├── formatters.ts
│   └── mock-data.ts
├── .eslintrc.json       # ESLint configuration
├── .gitignore           # Git ignore configuration
├── .prettierrc          # Prettier configuration
├── components.json      # Shadcn/ui components configuration
├── next.config.mjs      # Next.js configuration
├── package.json         # Project dependencies
├── postcss.config.mjs   # PostCSS configuration
├── tailwind.config.ts   # Tailwind configuration
└── tsconfig.json        # TypeScript configuration
```

## Code Quality

This project uses:

- **ESLint**: For code linting
- **Prettier**: For consistent code formatting
- **Husky**: For Git hooks to ensure code quality
- **lint-staged**: To run linters on staged files before committing

## Development Practices

- **Component Structure**: Follows a functional component pattern with proper separation of concerns
- **Hooks Pattern**: Custom hooks for reusable logic
- **TypeScript**: Strong typing throughout the application
- **Consistent Styling**: Tailwind classes with a consistent design system

## Deployment

The application can be deployed to Vercel with a single click:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/your-username/wallet-app)

## Author

**Stanislav Chyrva**

- Email: stanislav.chyrva@gmail.com
- LinkedIn: [Stanislav Chyrva](https://www.linkedin.com/in/stanislav-chyrva-3a3b24347/)

## License

[MIT](./LICENSE)
