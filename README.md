# SAIL Website

A premium, fully responsive landing page for **SAIL**, an AI-driven user onboarding and software intelligence platform.

## 🚀 Features

### Navbar Component
- **Clean, minimalist design** that floats over the hero section
- **Responsive navigation** with Product, Pricing, and Resources links
- **Dynamic background** that becomes semi-transparent on scroll
- **CTA buttons**: Sign in (ghost) and Build Agent (primary)
- **Mobile-friendly** with hamburger menu

### Hero Section
- **Full viewport height** (100vh) design
- **Center-left aligned** text content
- **Premium typography** with the headline "From confused to power user. Instantly."
- **Background element** ready for unicord.studio interactive integration
- **Responsive design** across all breakpoints

## 🛠️ Technology Stack

- **Next.js 15** with App Router
- **TypeScript** for type safety
- **Tailwind CSS** for styling
- **ShadCN UI** components
- **Radix UI** primitives

## 📱 Responsive Design

The components are fully responsive across all major breakpoints:
- **Desktop**: Full navigation with all elements visible
- **Tablet**: Optimized spacing and typography
- **Mobile**: Mobile-first approach with collapsible navigation

## 🎨 Design Features

- **Smooth animations** and transitions
- **Glassmorphism effects** on scroll
- **Premium color scheme** with CSS custom properties
- **Accessibility-first** approach with proper ARIA labels
- **Performance optimized** with minimal JavaScript

## 🚀 Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Run the development server:
   ```bash
   npm run dev
   ```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📁 Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Main page with Navbar + Hero
│   └── globals.css         # Global styles and CSS variables
├── components/
│   ├── ui/
│   │   └── button.tsx      # ShadCN Button component
│   ├── Navbar.tsx          # Navigation component
│   └── Hero.tsx            # Hero section component
└── lib/
    └── utils.ts            # Utility functions
```

## 🔧 Customization

### Colors
The design uses CSS custom properties defined in `globals.css` for easy theming.

### Typography
Fonts are configured through Google Fonts (Geist Sans and Geist Mono) with CSS variables.

### Components
All components are built with ShadCN UI patterns and can be easily customized through the `className` prop or by modifying the component variants.

## 🌟 Next Steps

The background element in the Hero section is ready for integration with [unicord.studio](http://unicord.studio) interactive backgrounds. Simply target the `#unicord-background` element to add your interactive content.

## 📄 License

This project is private and proprietary to SAIL.
