# Content Creator - One Day Agency Clone

A Next.js and Tailwind CSS clone of the One Day Agency website.

## Getting Started

First, install the dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Features

- Modern Next.js 14 with App Router
- Tailwind CSS for styling with custom color accents
- Video background support in Hero section
- Responsive design
- Mobile-friendly navigation
- Color accents throughout (Orange, Blue, Green, Purple, Yellow)
- Logo support with fallback to text
- All major sections from the original website

## Project Structure

```
├── app/
│   ├── layout.tsx      # Root layout with Navbar and Footer
│   ├── page.tsx        # Home page
│   └── globals.css     # Global styles with Tailwind
├── components/
│   ├── Navbar.tsx      # Navigation component
│   ├── Hero.tsx        # Hero section
│   ├── Services.tsx    # Services showcase
│   ├── Clients.tsx     # Clients grid
│   ├── Testimonials.tsx # Client testimonials
│   ├── CaseStudies.tsx # Case studies section
│   ├── LatestNews.tsx  # News section
│   ├── FAQ.tsx         # FAQ accordion
│   ├── CTA.tsx         # Call-to-action
│   └── Footer.tsx      # Footer component
└── public/             # Static assets
```

## Technologies

- **Next.js 14** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first CSS framework

