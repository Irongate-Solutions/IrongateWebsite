# Irongate Solutions Website - Complete Implementation Specification

## Project Overview
Static marketing website for Irongate Solutions using Astro 4.x, TypeScript, and Tailwind CSS. All forms integrate with N8N webhooks for backend processing. Content managed through markdown and JSON files for easy updates.

## Technical Architecture

### Core Stack
- **Framework**: Astro 4.x with TypeScript (strict mode)
- **Styling**: Tailwind CSS with custom design tokens
- **Deployment**: Netlify (with environment variables for N8N endpoints)
- **Forms**: Client-side submission to N8N webhooks
- **Content**: Markdown files + JSON data files

### Directory Structure
```
irongate-solutions/
├── src/
│   ├── layouts/
│   │   └── BaseLayout.astro
│   ├── components/
│   │   ├── Header.astro
│   │   ├── Footer.astro
│   │   ├── ServiceCard.astro
│   │   ├── CaseStudyCard.astro
│   │   ├── ContactForm.astro
│   │   ├── EmailCapture.astro
│   │   ├── ContactCTA.astro
│   │   └── StructuredData.astro
│   ├── pages/
│   │   ├── index.astro
│   │   ├── services.astro
│   │   ├── work.astro
│   │   ├── about.astro
│   │   ├── contact.astro
│   │   ├── privacy.astro
│   │   └── terms.astro
│   ├── content/
│   │   ├── services/
│   │   │   ├── integration.md
│   │   │   ├── development.md
│   │   │   └── analytics.md
│   │   └── case-studies/
│   │       ├── enterprise-integration.md
│   │       ├── custom-platform.md
│   │       └── data-pipeline.md
│   ├── data/
│   │   ├── company.json
│   │   └── navigation.json
│   ├── styles/
│   │   └── global.css
│   └── types/
│       └── index.ts
├── public/
│   └── assets/
│       ├── logo.svg
│       ├── favicon.ico
│       ├── favicon-16x16.png
│       ├── favicon-32x32.png
│       ├── apple-touch-icon.png
│       ├── og-image.png
│       └── README.md
├── .env.example
├── astro.config.mjs
├── tailwind.config.mjs
├── tsconfig.json
└── package.json
```

## Configuration Files

### package.json
```json
{
  "name": "irongate-solutions",
  "type": "module",
  "version": "1.0.0",
  "scripts": {
    "dev": "astro dev",
    "start": "astro dev",
    "build": "astro build",
    "preview": "astro preview",
    "astro": "astro",
    "lint": "eslint src",
    "type-check": "tsc --noEmit"
  },
  "dependencies": {
    "astro": "^4.0.0",
    "@astrojs/tailwind": "^5.0.0",
    "@astrojs/sitemap": "^3.0.0",
    "tailwindcss": "^3.4.0"
  },
  "devDependencies": {
    "@types/node": "^20.0.0",
    "typescript": "^5.3.0",
    "@typescript-eslint/parser": "^6.0.0",
    "@typescript-eslint/eslint-plugin": "^6.0.0",
    "eslint": "^8.0.0"
  }
}
```

### astro.config.mjs
```javascript
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://irongatesolutions.com',
  integrations: [
    tailwind(),
    sitemap({
      filter: (page) => !page.includes('/admin')
    })
  ],
  compressHTML: true,
  build: {
    inlineStylesheets: 'auto'
  }
});
```

### tsconfig.json
```json
{
  "extends": "astro/tsconfigs/strict",
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@components/*": ["src/components/*"],
      "@layouts/*": ["src/layouts/*"],
      "@data/*": ["src/data/*"],
      "@types/*": ["src/types/*"],
      "@content/*": ["src/content/*"]
    },
    "jsx": "react-jsx",
    "skipLibCheck": true,
    "resolveJsonModule": true
  }
}
```

### tailwind.config.mjs
```javascript
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        charcoal: '#36454F',
        'charcoal-light': '#4A5A66',
        copper: '#B87333',
        'copper-dark': '#9E5F2B',
        linen: '#FAF0E6',
        'linen-dark': '#F5E6D3'
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        heading: ['Montserrat', 'system-ui', '-apple-system', 'sans-serif']
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.3s ease-out'
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }
        },
        slideUp: {
          '0%': { transform: 'translateY(10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' }
        }
      }
    }
  },
  plugins: []
}
```

### .env.example
```bash
# N8N Webhook Endpoints
PUBLIC_N8N_CONTACT_WEBHOOK=https://your-n8n-instance.com/webhook/contact
PUBLIC_N8N_EMAIL_WEBHOOK=https://your-n8n-instance.com/webhook/email-capture

# Analytics (stub for future)
PUBLIC_ANALYTICS_ID=

# Site Configuration
PUBLIC_SITE_URL=https://irongatesolutions.com
PUBLIC_COMPANY_EMAIL=contact@irongatesolutions.com
```

## Type Definitions

### src/types/index.ts
```typescript
export interface NavigationItem {
  label: string;
  href: string;
  external?: boolean;
}

export interface Service {
  title: string;
  slug: string;
  description: string;
  features: string[];
  technologies: string[];
}

export interface CaseStudy {
  title: string;
  slug: string;
  client: string;
  challenge: string;
  solution: string;
  outcome: string;
  technologies: string[];
  metrics?: {
    label: string;
    value: string;
  }[];
}

export interface CompanyInfo {
  name: string;
  founded: number;
  tagline: string;
  email: string;
  phone?: string;
  address?: {
    street?: string;
    city: string;
    state: string;
    zip: string;
  };
  socials?: {
    linkedin?: string;
    github?: string;
  };
}

export interface FormSubmission {
  name: string;
  email: string;
  company?: string;
  message?: string;
  source: string;
  timestamp: string;
}
```

## Data Files

### src/data/company.json
```json
{
  "name": "Irongate Solutions",
  "founded": 2024,
  "tagline": "Enterprise Integration & Custom Development",
  "email": "contact@irongatesolutions.com",
  "address": {
    "city": "Minneapolis",
    "state": "MN",
    "zip": "55401"
  },
  "philosophy": {
    "title": "Built for the Long Term",
    "description": "We engineer solutions that scale with your business, not against it. Every integration, every line of code, every data pipeline is designed with maintainability and evolution in mind."
  }
}
```

### src/data/navigation.json
```json
{
  "main": [
    { "label": "Home", "href": "/" },
    { "label": "Services", "href": "/services" },
    { "label": "Work", "href": "/work" },
    { "label": "About", "href": "/about" },
    { "label": "Contact", "href": "/contact" }
  ],
  "footer": [
    { "label": "Services", "href": "/services" },
    { "label": "Work", "href": "/work" },
    { "label": "About", "href": "/about" },
    { "label": "Contact", "href": "/contact" },
    { "label": "Privacy", "href": "/privacy" },
    { "label": "Terms", "href": "/terms" }
  ]
}
```

## Component Specifications

### src/layouts/BaseLayout.astro
```astro
---
import Header from '@components/Header.astro';
import Footer from '@components/Footer.astro';
import StructuredData from '@components/StructuredData.astro';
import '../styles/global.css';

export interface Props {
  title: string;
  description: string;
  ogImage?: string;
  noIndex?: boolean;
}

const { 
  title, 
  description, 
  ogImage = '/assets/og-image.png',
  noIndex = false 
} = Astro.props;

const canonicalURL = new URL(Astro.url.pathname, Astro.site);
---

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>{title} | Irongate Solutions</title>
  <meta name="description" content={description}>
  
  {noIndex && <meta name="robots" content="noindex, nofollow">}
  
  <link rel="canonical" href={canonicalURL}>
  <link rel="icon" type="image/x-icon" href="/assets/favicon.ico">
  <link rel="apple-touch-icon" href="/assets/apple-touch-icon.png">
  
  <!-- Open Graph -->
  <meta property="og:title" content={title}>
  <meta property="og:description" content={description}>
  <meta property="og:image" content={ogImage}>
  <meta property="og:url" content={canonicalURL}>
  <meta property="og:type" content="website">
  
  <!-- Twitter -->
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content={title}>
  <meta name="twitter:description" content={description}>
  <meta name="twitter:image" content={ogImage}>
  
  <!-- Fonts -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Montserrat:wght@600;700;800&display=swap" rel="stylesheet">
  
  <!-- Analytics Stub -->
  <script>
    // Analytics initialization stub
    window.analyticsReady = false;
    window.trackEvent = (category, action, label) => {
      if (window.analyticsReady && window.gtag) {
        window.gtag('event', action, {
          event_category: category,
          event_label: label
        });
      }
    };
  </script>
  
  <StructuredData />
</head>
<body class="bg-linen text-charcoal min-h-screen flex flex-col">
  <Header />
  <main class="flex-grow">
    <slot />
  </main>
  <Footer />
</body>
</html>
```

### src/components/Header.astro
```astro
---
import navigation from '@data/navigation.json';

const currentPath = Astro.url.pathname;
---

<header class="sticky top-0 z-50 bg-white shadow-sm">
  <nav class="container mx-auto px-6 py-4">
    <div class="flex justify-between items-center">
      <a href="/" class="flex items-center space-x-2">
        <img src="/assets/logo.svg" alt="Irongate Solutions" class="h-10 w-auto">
      </a>
      
      <!-- Desktop Navigation -->
      <ul class="hidden md:flex space-x-8">
        {navigation.main.map((item) => (
          <li>
            <a 
              href={item.href}
              class={`font-medium transition-colors hover:text-copper ${
                currentPath === item.href ? 'text-copper' : 'text-charcoal'
              }`}
              aria-current={currentPath === item.href ? 'page' : undefined}
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
      
      <!-- Mobile Menu Button -->
      <button 
        id="mobile-menu-toggle"
        class="md:hidden p-2"
        aria-label="Toggle navigation menu"
        aria-expanded="false"
      >
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
        </svg>
      </button>
    </div>
    
    <!-- Mobile Navigation -->
    <div id="mobile-menu" class="hidden md:hidden mt-4 pb-4">
      <ul class="space-y-4">
        {navigation.main.map((item) => (
          <li>
            <a 
              href={item.href}
              class={`block font-medium transition-colors hover:text-copper ${
                currentPath === item.href ? 'text-copper' : 'text-charcoal'
              }`}
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  </nav>
</header>

<script>
  const toggle = document.getElementById('mobile-menu-toggle');
  const menu = document.getElementById('mobile-menu');
  
  toggle?.addEventListener('click', () => {
    const isOpen = menu?.classList.contains('hidden');
    if (isOpen) {
      menu?.classList.remove('hidden');
      toggle.setAttribute('aria-expanded', 'true');
    } else {
      menu?.classList.add('hidden');
      toggle.setAttribute('aria-expanded', 'false');
    }
  });
</script>
```

### src/components/ContactForm.astro
```astro
---
export interface Props {
  source: string;
}

const { source } = Astro.props;
const webhookUrl = import.meta.env.PUBLIC_N8N_CONTACT_WEBHOOK;
---

<form id="contact-form" class="space-y-6" data-source={source}>
  <div>
    <label for="name" class="block text-sm font-medium mb-2">Name</label>
    <input
      type="text"
      id="name"
      name="name"
      required
      class="w-full px-4 py-2 border border-charcoal/20 rounded-md focus:ring-2 focus:ring-copper focus:border-copper"
    >
  </div>
  
  <div>
    <label for="email" class="block text-sm font-medium mb-2">Email</label>
    <input
      type="email"
      id="email"
      name="email"
      required
      class="w-full px-4 py-2 border border-charcoal/20 rounded-md focus:ring-2 focus:ring-copper focus:border-copper"
    >
  </div>
  
  <div>
    <label for="company" class="block text-sm font-medium mb-2">Company (Optional)</label>
    <input
      type="text"
      id="company"
      name="company"
      class="w-full px-4 py-2 border border-charcoal/20 rounded-md focus:ring-2 focus:ring-copper focus:border-copper"
    >
  </div>
  
  <div>
    <label for="message" class="block text-sm font-medium mb-2">Message</label>
    <textarea
      id="message"
      name="message"
      rows="4"
      required
      class="w-full px-4 py-2 border border-charcoal/20 rounded-md focus:ring-2 focus:ring-copper focus:border-copper"
    ></textarea>
  </div>
  
  <button
    type="submit"
    class="w-full bg-copper text-white font-medium py-3 px-6 rounded-md hover:bg-copper-dark transition-colors"
  >
    Send Message
  </button>
  
  <div id="form-status" class="hidden text-sm"></div>
</form>

<script define:vars={{ webhookUrl }}>
  const form = document.getElementById('contact-form');
  const status = document.getElementById('form-status');
  
  form?.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const formData = new FormData(form);
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      company: formData.get('company') || '',
      message: formData.get('message'),
      source: form.dataset.source,
      timestamp: new Date().toISOString()
    };
    
    try {
      status.textContent = 'Sending...';
      status.classList.remove('hidden', 'text-red-600', 'text-green-600');
      
      const response = await fetch(webhookUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });
      
      if (response.ok) {
        status.textContent = 'Message sent successfully!';
        status.classList.add('text-green-600');
        form.reset();
        
        // Track event
        window.trackEvent('Contact', 'FormSubmit', form.dataset.source);
      } else {
        throw new Error('Submission failed');
      }
    } catch (error) {
      status.textContent = 'Error sending message. Please try again or email directly.';
      status.classList.add('text-red-600');
    }
  });
</script>
```

### src/components/StructuredData.astro
```astro
---
import company from '@data/company.json';

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": company.name,
  "url": import.meta.env.PUBLIC_SITE_URL,
  "email": company.email,
  "foundingDate": company.founded.toString(),
  "description": company.tagline,
  "address": {
    "@type": "PostalAddress",
    "addressLocality": company.address.city,
    "addressRegion": company.address.state,
    "postalCode": company.address.zip,
    "addressCountry": "US"
  },
  "sameAs": []
};
---

<script type="application/ld+json" set:html={JSON.stringify(structuredData)} />
```

## Content Files (Markdown)

### src/content/services/integration.md
```markdown
---
title: System Integration
slug: integration
order: 1
---

## The Challenge
Enterprise systems rarely communicate effectively. Data silos, incompatible formats, and legacy constraints create operational friction that compounds daily.

## Our Approach
We map your data flows, identify integration points, and build robust pipelines that handle edge cases. No magical thinking—just solid engineering that accounts for real-world complexity.

## Typical Engagement
- Week 1-2: System audit and data mapping
- Week 3-4: Integration architecture design
- Week 5-8: Implementation and testing
- Week 9+: Monitoring and optimization

## Technology Stack
- **Message Brokers**: RabbitMQ, Apache Kafka, AWS SQS
- **ETL/ELT**: Apache NiFi, Airbyte, custom Python pipelines
- **API Gateways**: Kong, AWS API Gateway, custom middleware
- **Databases**: PostgreSQL, MongoDB, Redis, Snowflake
```

### src/content/case-studies/enterprise-integration.md
```markdown
---
title: Multi-System Integration for Regional Healthcare Network
slug: enterprise-integration
client: Healthcare Network (NDA)
industry: Healthcare
duration: 4 months
---

## Challenge
A regional healthcare network operated seven different systems across their facilities: separate EMR systems, billing platforms, and inventory management tools. Data reconciliation required 40+ hours weekly of manual work, with frequent errors impacting billing accuracy.

## Solution
Designed and implemented a centralized integration hub using Apache Kafka for message streaming and custom Python services for data transformation. Built standardized APIs for each legacy system, enabling real-time data synchronization while maintaining HIPAA compliance throughout.

## Technical Implementation
- Deployed Kafka cluster with 99.99% uptime SLA
- Created 23 custom data transformation pipelines
- Implemented HL7 FHIR standard for healthcare data exchange
- Built monitoring dashboard with Grafana for real-time system health

## Outcome
- Reduced manual data entry by 95% (from 40 hours to 2 hours weekly)
- Improved billing accuracy from 87% to 99.3%
- Decreased patient record retrieval time from 15 minutes to 30 seconds
- Saved $1.2M annually in operational costs

## Technologies
PostgreSQL, Apache Kafka, Python, Docker, Kubernetes, HL7 FHIR, Redis, Grafana
```

## Page Templates

### src/pages/index.astro
```astro
---
import BaseLayout from '@layouts/BaseLayout.astro';
import ServiceCard from '@components/ServiceCard.astro';
import CaseStudyCard from '@components/CaseStudyCard.astro';
import EmailCapture from '@components/EmailCapture.astro';
import company from '@data/company.json';

const services = [
  {
    title: "System Integration",
    description: "Connect disparate systems into cohesive workflows that actually work.",
    slug: "integration"
  },
  {
    title: "Custom Development",
    description: "Purpose-built solutions when off-the-shelf falls short.",
    slug: "development"
  },
  {
    title: "Data & Analytics",
    description: "Transform raw data into actionable intelligence.",
    slug: "analytics"
  }
];

const caseStudies = [
  {
    title: "Healthcare Network Integration",
    problem: "Seven systems, zero communication",
    outcome: "$1.2M annual savings",
    slug: "enterprise-integration"
  },
  {
    title: "Custom Manufacturing Platform",
    problem: "Excel-based production tracking",
    outcome: "60% faster order processing",
    slug: "custom-platform"
  },
  {
    title: "Real-time Analytics Pipeline",
    problem: "Week-old reports driving daily decisions",
    outcome: "Sub-minute data freshness",
    slug: "data-pipeline"
  }
];
---

<BaseLayout 
  title="Enterprise Integration & Custom Development"
  description="We build the technical infrastructure that lets your business operate at scale."
>
  <!-- Hero Section -->
  <section class="bg-white py-20">
    <div class="container mx-auto px-6">
      <div class="max-w-3xl">
        <h1 class="font-heading text-5xl font-bold text-charcoal mb-6">
          We fix what's broken between your systems
        </h1>
        <p class="text-xl text-charcoal-light mb-8">
          {company.tagline}. No consultancy theater, no vendor lock-in. Just solid technical work that scales.
        </p>
        <a href="/contact" class="inline-block bg-copper text-white font-medium py-3 px-8 rounded-md hover:bg-copper-dark transition-colors">
          Start a Conversation
        </a>
      </div>
    </div>
  </section>
  
  <!-- Philosophy Section -->
  <section class="py-16">
    <div class="container mx-auto px-6">
      <div class="max-w-3xl mx-auto text-center">
        <h2 class="font-heading text-3xl font-bold mb-6">{company.philosophy.title}</h2>
        <p class="text-lg text-charcoal-light">{company.philosophy.description}</p>
      </div>
    </div>
  </section>
  
  <!-- Services Section -->
  <section class="bg-white py-20">
    <div class="container mx-auto px-6">
      <h2 class="font-heading text-3xl font-bold text-center mb-12">What We Do</h2>
      <div class="grid md:grid-cols-3 gap-8">
        {services.map(service => (
          <ServiceCard {...service} />
        ))}
      </div>
    </div>
  </section>
  
  <!-- Case Studies Section -->
  <section class="py-20">
    <div class="container mx-auto px-6">
      <h2 class="font-heading text-3xl font-bold text-center mb-12">Recent Work</h2>
      <div class="grid md:grid-cols-3 gap-8">
        {caseStudies.map(study => (
          <CaseStudyCard {...study} />
        ))}
      </div>
    </div>
  </section>
  
  <!-- Email Capture Section -->
  <section class="bg-charcoal text-white py-16">
    <div class="container mx-auto px-6">
      <div class="max-w-2xl mx-auto text-center">
        <h2 class="font-heading text-3xl font-bold mb-4">Stay Updated</h2>
        <p class="mb-8">Technical insights and case studies. No sales pitches.</p>
        <EmailCapture source="homepage-footer" />
      </div>
    </div>
  </section>
</BaseLayout>
```

## Required Assets

### public/assets/README.md
```markdown
# Required Assets for Irongate Solutions Website

Place the following files in this directory:

## Essential Files (Required for Launch)
- [ ] logo.svg - Company logo (preferably under 10KB)
- [ ] favicon.ico - 16x16 and 32x32 favicon
- [ ] favicon-16x16.png - 16x16 PNG version
- [ ] favicon-32x32.png - 32x32 PNG version
- [ ] apple-touch-icon.png - 180x180 for iOS devices
- [ ] og-image.png - 1200x630 Open Graph image for social sharing

## Specifications
- **Logo**: SVG format, optimized, single color or matches brand colors
- **Favicon**: Include both ICO and PNG formats for compatibility
- **OG Image**: Should include company name and tagline, use brand colors
- **File sizes**: Keep all images optimized (logo <10KB, OG image <100KB)

## Color Reference
- Charcoal: #36454F
- Copper: #B87333
- Linen: #FAF0E6

## Placeholder Generation
Until final assets are ready, generate placeholders:
1. Logo: Simple text "IG" in Montserrat font
2. Favicon: Copper square with white "I"
3. OG Image: Charcoal background with white/copper text
```

## Deployment Instructions

### Initial Setup
```bash
# 1. Initialize project
npm create astro@latest irongate-solutions -- --template empty --typescript --tailwind
cd irongate-solutions

# 2. Install dependencies
npm install

# 3. Copy all specification files into project structure

# 4. Set up environment variables
cp .env.example .env.local
# Edit .env.local with actual N8N webhook URLs

# 5. Run development server
npm run dev
```

### Netlify Deployment
```bash
# 1. Build locally to test
npm run build

# 2. Initialize Git repository
git init
git add .
git commit -m "Initial commit"

# 3. Push to GitHub
git remote add origin [your-repo-url]
git push -u origin main

# 4. In Netlify Dashboard:
# - Connect GitHub repository
# - Build command: npm run build
# - Publish directory: dist
# - Add environment variables from .env.example

# 5. Configure custom domain in Netlify DNS settings
```

## Post-Launch Checklist

- [ ] Test all forms with actual N8N webhooks
- [ ] Verify structured data with Google Rich Results Test
- [ ] Submit sitemap to Google Search Console
- [ ] Test all responsive breakpoints
- [ ] Run Lighthouse audit (target 95+ all metrics)
- [ ] Configure SSL certificate (automatic with Netlify)
- [ ] Set up uptime monitoring
- [ ] Document N8N webhook configurations
- [ ] Create backup of all content files
- [ ] Schedule weekly analytics review process

## Content Update Process

1. **Services**: Edit markdown files in `src/content/services/`
2. **Case Studies**: Edit markdown files in `src/content/case-studies/`
3. **Company Info**: Update `src/data/company.json`
4. **Navigation**: Modify `src/data/navigation.json`
5. Push changes to trigger automatic rebuild on Netlify

This specification provides complete implementation details. All placeholder content is marked and ready for replacement with actual data. The architecture supports your growth trajectory while maintaining simplicity for the MVP launch.