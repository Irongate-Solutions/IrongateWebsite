# Required Assets for Irongate Solutions Website

This directory contains all static assets for the website. Assets are organized by type and referenced directly from markdown content files.

## Directory Structure

```
assets/
├── icons/
│   ├── integration.svg
│   ├── development.svg
│   └── analytics.svg
├── services/
│   ├── integration-thumb.jpg
│   ├── development-thumb.jpg
│   └── analytics-thumb.jpg
├── case-studies/
│   ├── healthcare-thumb.jpg
│   ├── healthcare-hero.jpg
│   ├── manufacturing-thumb.jpg
│   ├── manufacturing-hero.jpg
│   ├── ecommerce-thumb.jpg
│   └── ecommerce-hero.jpg
├── logo.svg (✓ exists)
├── favicon.ico (✓ exists)
├── favicon-16x16.png (✓ exists)
├── favicon-32x32.png (✓ exists)
├── apple-touch-icon.png (needed)
└── og-image.png (needed)
```

## Essential Files (Required for Launch)
- [x] logo.svg - Company logo (preferably under 10KB)
- [x] favicon.ico - 16x16 and 32x32 favicon
- [x] favicon-16x16.png - 16x16 PNG version
- [x] favicon-32x32.png - 32x32 PNG version
- [ ] apple-touch-icon.png - 180x180 for iOS devices
- [ ] og-image.png - 1200x630 Open Graph image for social sharing

## Service Icons & Thumbnails
Icons are displayed on service cards (12x12 rem). Thumbnails are optional larger images (full-width on card).

- [x] icons/integration.svg - Icon for System Integration service
- [x] icons/development.svg - Icon for Custom Development service
- [x] icons/analytics.svg - Icon for Data & Analytics service
- [x] services/integration-thumb.jpg - Thumbnail for integration service
- [x] services/development-thumb.jpg - Thumbnail for development service
- [x] services/analytics-thumb.jpg - Thumbnail for analytics service

## Case Study Images
Thumbnails appear on case study cards (full-width, 192px height). Hero images can be used on individual case study detail pages.

- [ ] case-studies/healthcare-thumb.jpg - Healthcare case study card image
- [ ] case-studies/healthcare-hero.jpg - Healthcare case study hero image
- [ ] case-studies/manufacturing-thumb.jpg - Manufacturing case study card image
- [ ] case-studies/manufacturing-hero.jpg - Manufacturing case study hero image
- [ ] case-studies/ecommerce-thumb.jpg - E-commerce case study card image
- [ ] case-studies/ecommerce-hero.jpg - E-commerce case study hero image

## Image Specifications

### Icons (SVG)
- Format: SVG
- Size: Optimized, < 5KB each
- Colors: Use charcoal (#36454F) or copper (#B87333) to match brand
- Dimensions: Square aspect ratio, scalable

### Service Thumbnails
- Format: JPG or WebP
- Dimensions: 800x600px (4:3 aspect ratio)
- File size: < 150KB optimized
- Content: Abstract or relevant technical imagery

### Case Study Images
- **Thumbnails**: 800x600px (4:3), < 150KB, JPG/WebP
- **Hero Images**: 1600x900px (16:9), < 250KB, JPG/WebP
- Content: Project screenshots, diagrams, or relevant imagery (with client approval)

### Brand Assets
- **Logo**: SVG, < 10KB, transparent background
- **Favicon**: ICO + PNG formats for compatibility
- **OG Image**: 1200x630px, < 100KB, include company name and tagline

## Color Reference
- Charcoal: #36454F
- Charcoal Light: #4A5A66
- Copper: #B87333
- Copper Dark: #9E5F2B
- Linen: #FAF0E6
- Linen Dark: #F5E6D3

## Referencing Assets in Content

### In Markdown Frontmatter
```yaml
---
title: System Integration
icon: /assets/icons/integration.svg
thumbnail: /assets/services/integration-thumb.jpg
---
```

### In Markdown Content
```markdown
![System diagram](/assets/services/integration-diagram.svg)
```

### In Astro Components
```astro
{icon && <img src={icon} alt={title} class="w-12 h-12" />}
```

## Placeholder Generation
Until final assets are ready, use placeholders:
1. **Icons**: Simple SVG shapes or Font Awesome icons
2. **Thumbnails**: Use placeholder services like placehold.co or unsplash
3. **OG Image**: Charcoal background with white company name text

## Asset Optimization Checklist
- [ ] Compress all JPG/PNG images (use tools like TinyPNG, ImageOptim)
- [ ] Optimize SVGs (use SVGO)
- [ ] Ensure proper alt text for all images
- [ ] Test image loading on slow connections
- [ ] Verify images display correctly on mobile devices
