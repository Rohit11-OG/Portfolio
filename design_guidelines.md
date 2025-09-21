# Portfolio Website Design Guidelines

## Design Approach
**Reference-Based Approach**: Drawing inspiration from modern developer portfolios like those on GitHub Pages, Vercel, and Netlify, with emphasis on clean layouts and professional presentation suitable for a Computer Engineering/Data Science student.

## Core Design Elements

### Color Palette
**Dark Theme Primary**:
- Background: 220 15% 8% (deep dark blue-gray)
- Surface: 220 15% 12% (elevated dark surface)
- Text Primary: 0 0% 95% (near white)
- Text Secondary: 220 10% 70% (muted gray)

**Accent Colors**:
- Primary Accent: 200 100% 60% (bright blue for CTAs and highlights)
- Success/Tech: 150 60% 55% (modern green for skills badges)

**Light Mode**:
- Background: 0 0% 98% (soft white)
- Surface: 0 0% 100% (pure white)
- Text Primary: 220 15% 15% (dark blue-gray)

### Typography
- **Primary Font**: Inter (Google Fonts) - clean, modern sans-serif
- **Code/Technical Font**: JetBrains Mono for any code snippets or technical elements
- **Hierarchy**: 
  - Hero name: text-5xl font-bold
  - Section headings: text-3xl font-semibold
  - Subheadings: text-xl font-medium
  - Body text: text-base font-normal

### Layout System
**Spacing**: Use Tailwind units of 4, 6, 8, 12, 16, 24 for consistent rhythm
- Container max-width: max-w-6xl mx-auto
- Section padding: py-16 px-6
- Component spacing: space-y-8 for major elements, space-y-4 for related items

### Component Library

**Navigation**:
- Fixed header with blur backdrop (backdrop-blur-md)
- Smooth scroll anchor links
- Light/dark mode toggle in top-right
- Mobile hamburger menu

**Cards & Containers**:
- Experience/Education cards: rounded-xl with subtle border and shadow
- Project cards: hover-lift effect with rounded corners
- Skills badges: pill-shaped with category-based colors

**Buttons**:
- Primary CTAs: solid blue with rounded-lg
- Secondary actions: outline style with subtle hover states
- Social icons: circular with subtle background

**Timeline Elements**:
- Left-aligned date badges for education/experience
- Connecting lines for visual flow
- Clean, minimal design avoiding over-decoration

## Section-Specific Guidelines

### Header/Hero
- Full viewport height with centered content
- Professional photo placeholder (circular, 200px diameter)
- Prominent name display with gradient text effect on accent
- Concise headline with role and focus area
- Subtle background pattern or gradient overlay

### Skills Section
- Grid layout with category groupings
- Badge-style pills with icons from Heroicons
- Hover effects revealing proficiency or experience level
- Organized into: Languages, Frameworks, Tools, Technologies

### Projects Section
- Grid layout (2-3 columns on desktop, 1 on mobile)
- Each card shows: title, brief description, tech stack badges, GitHub link
- Subtle animations on hover
- "View All Projects" CTA linking to GitHub

### Contact Section
- Clean, minimal design with social media icons
- Email contact form option
- Professional headshot consideration
- Clear call-to-action for collaboration

## Images
- **Professional Photo**: Circular headshot in hero section, 200px diameter
- **Project Thumbnails**: Optional screenshots or icons for featured projects, 16:9 aspect ratio
- **Background Elements**: Subtle geometric patterns or gradients, never overpowering
- **No Large Hero Image**: Focus on clean typography and personal photo rather than large background imagery

## Interactions & Animations
- Smooth scroll between sections (scroll-behavior: smooth)
- Subtle hover effects on cards and buttons
- Fade-in animations for sections on scroll (minimal, professional)
- Loading states for any dynamic content
- Focus indicators for accessibility

## Responsive Behavior
- Mobile-first approach with careful breakpoint consideration
- Collapsible navigation on mobile
- Stacked layouts on smaller screens
- Touch-friendly button sizes (minimum 44px)
- Readable typography scaling across devices

This design emphasizes professionalism, readability, and modern web standards while showcasing technical competency through clean implementation.