# TaskFlow - AI-Powered Task Management Landing Page

A modern, responsive landing page built with Next.js and Tailwind CSS, showcasing an AI-powered task management platform.

## 🚀 Live Demo

- **Deployed Link**: 
- **Repository**: 

## 📋 Assignment Requirements

This project was built as part of the AutoBotWa frontend developer selection process and fulfills all requirements:

### Required Sections ✅
- ✅ **Hero Section** - Engaging headline, subtext, and dual CTA buttons
- ✅ **Features Section** - 6 comprehensive features with icons and descriptions
- ✅ **Testimonials** - 3 customer testimonials with ratings and credentials
- ✅ **Pricing Section** - 3 pricing tiers (Starter, Professional, Enterprise)
- ✅ **Footer** - Complete with navigation, company info, and social links

### Tech Stack ✅
- ✅ **Next.js** (v16.0.3) - React framework with App Router
- ✅ **Tailwind CSS** (v4.1.9) - Utility-first CSS framework
- ✅ **Vercel v0** - Used for UI component generation and design system

## 🎨 Vercel v0 Usage

The following components and sections were built using Vercel v0:

1. **UI Component Library** - All components in `components/ui/` folder including:
   - Button, Card, Badge, Avatar components
   - Form elements (Input, Select, Checkbox, etc.)
   - Dialog, Sheet, Popover components
   - Navigation and layout components

2. **Landing Page Sections** - Generated initial structure and styling for:
   - Hero section with gradient text and animated backgrounds
   - Feature cards with hover effects and icon animations
   - Testimonial cards with star ratings
   - Pricing cards with highlighted "Popular" badge
   - Responsive navigation bar

3. **Design System** - v0 helped establish:
   - Color scheme using oklch color space
   - Consistent spacing and typography
   - Responsive breakpoints and mobile-first approach
   - Dark theme with purple-blue accent colors

4. **Tailwind Configuration** - v0's recommended setup for:
   - Custom CSS variables for theming
   - Utility classes for gradients and animations
   - Component variants and states

## 🛠️ Tech Stack Details

- **Framework**: Next.js 16.0.3 (App Router)
- **Styling**: Tailwind CSS 4.1.9
- **UI Components**: shadcn/ui (v0-generated)
- **Icons**: Lucide React
- **Package Manager**: pnpm
- **TypeScript**: Yes

## 📦 Installation

```bash
# Install pnpm if you haven't already
npm install -g pnpm

# Install dependencies
pnpm install

# Run development server
pnpm dev

# Build for production
pnpm build

# Start production server
pnpm start
```

## 🌐 Development

The development server runs on `http://localhost:3000` by default.

```bash
pnpm dev
```

## 📁 Project Structure

```
├── app/
│   ├── globals.css          # Global styles and Tailwind config
│   ├── layout.tsx           # Root layout with theme provider
│   └── page.tsx             # Main landing page
├── components/
│   ├── ui/                  # Reusable UI components (v0-generated)
│   └── theme-provider.tsx   # Dark/light theme provider
├── lib/
│   └── utils.ts             # Utility functions
├── public/                  # Static assets
├── next.config.mjs          # Next.js configuration
├── tailwind.config.ts       # Tailwind CSS configuration
├── tsconfig.json            # TypeScript configuration
└── package.json             # Dependencies and scripts
```

## ✨ Features

### Hero Section
- Eye-catching gradient headline
- Compelling value proposition
- Dual CTA buttons with hover effects
- Social proof metrics (10K+ teams, 4.9★ rating, 99.9% uptime)
- Animated background with grid pattern and gradient orbs

### Features Section
- 6 feature cards with animated icons
- Hover effects on cards
- Responsive grid layout (3 columns desktop, 1 column mobile)

### Testimonials
- 3 customer testimonials with 5-star ratings
- Customer names and job titles
- Card-based layout with consistent styling

### Pricing
- 3 pricing tiers with clear feature lists
- "Popular" badge on recommended plan
- Checkmark icons for included features
- CTA buttons for each tier

### Footer
- 5-column layout with navigation links
- Company info and branding
- Social media links
- Copyright and legal links

## 🎨 Design Features

- **Responsive Design**: Mobile-first approach with breakpoints for tablets and desktops
- **Dark Theme**: Modern dark color scheme with purple-blue accents
- **Animations**: Smooth transitions and hover effects throughout
- **Typography**: Clean, readable font hierarchy
- **Accessibility**: Semantic HTML and proper contrast ratios

## 🔧 Customization

### Colors
Edit the color variables in `app/globals.css`:
```css
:root {
  --background: oklch(0.08 0 0);
  --accent: oklch(0.7 0.15 260);
  /* ... other colors */
}
```

### Content
Update the content in `app/page.tsx` to customize:
- Company name and branding
- Feature descriptions
- Testimonials
- Pricing tiers
- Footer links

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px
