# Save Decor - Styling Guide

## Design System

### Colors
- **Primary Blue**: `#2563eb` (blue-600)
- **Primary Dark**: `#1e40af` (blue-700)
- **Text Primary**: `#1a1a1a` (gray-900)
- **Text Secondary**: `#6b7280` (gray-600)
- **Background**: `#ffffff` (white)
- **Background Alt**: `#f9fafb` (gray-50)
- **Border**: `#e5e7eb` (gray-200)

### Typography
- **Font Family**: System fonts (-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', etc.)
- **Headings**: Bold, clean, modern
  - H1: `text-5xl md:text-6xl lg:text-7xl font-bold`
  - H2: `text-3xl md:text-4xl font-bold`
  - H3: `text-2xl md:text-3xl font-bold`
- **Body Text**: `text-base` (16px) with `leading-relaxed`
- **Small Text**: `text-sm` (14px)

### Spacing
- **Section Padding**: `py-24` (96px vertical)
- **Container**: `max-w-7xl mx-auto px-6 lg:px-8`
- **Grid Gap**: `gap-8` or `gap-16` for larger sections

### Components

#### Buttons
- **Primary**: `bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700`
- **Secondary**: `border-2 border-gray-900 text-gray-900 font-medium rounded-md hover:bg-gray-900 hover:text-white`
- **Padding**: `px-8 py-4` for large buttons, `px-6 py-3` for medium

#### Cards
- **Style**: Clean with subtle borders
- **Border**: `border border-gray-200`
- **Hover**: `hover:border-blue-600`
- **Rounded**: `rounded-lg` (8px)
- **Shadow**: Minimal or none, rely on borders

#### Images
- **Rounded**: `rounded-lg` (8px)
- **Aspect Ratio**: Maintain consistent ratios across sections

### Layout Principles
1. **Clean & Minimal**: Focus on content, minimal decorative elements
2. **Consistent Spacing**: Use Tailwind's spacing scale consistently
3. **Subtle Interactions**: Smooth transitions, hover states
4. **Mobile First**: Responsive design with mobile-first approach
5. **Typography Hierarchy**: Clear distinction between heading levels

### Sections Order
1. Header (Fixed)
2. Hero Section
3. Trusted Brands Section
4. About Section
5. Services Section
6. Portfolio Section
7. Testimonials Section
8. Footer

### Images Required
Place these images in `/public` folder:
- `/logo.png` - Main logo (dark)
- `/logo-white.png` - White logo for footer
- `/hero-image.jpg` - Hero section image
- `/about-company.jpg` - About section image
- `/retail-deck.jpg` - Trusted brands featured image
- Service images: `/service-*.jpg`
- Portfolio images: `/portfolio-*.jpg`
- `/testimonial-placeholder.jpg` - Testimonial avatars

### Best Practices
- Use semantic HTML
- Maintain accessibility (ARIA labels, alt text)
- Optimize images (Next.js Image component)
- Keep animations subtle and purposeful
- Test on multiple screen sizes
