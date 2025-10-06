# Customization Guide - Shanaka Technic Theme

Learn how to customize every aspect of the Shanaka Technic Blogger theme to match your brand and preferences.

## Table of Contents
- [Color Scheme](#color-scheme)
- [Typography](#typography)
- [Layout & Spacing](#layout--spacing)
- [Header Customization](#header-customization)
- [Hero Section](#hero-section)
- [Content Sections](#content-sections)
- [Footer](#footer)
- [Adding Custom Sections](#adding-custom-sections)
- [Advanced Customization](#advanced-customization)

## Color Scheme

### Modifying CSS Variables

The theme uses CSS custom properties (variables) for easy color customization. Find these in the `<style id='critical-css'>` section:

```css
:root {
  /* Background Colors */
  --primary-bg: #0b0f17;           /* Main dark background */
  --secondary-bg: #151a24;         /* Slightly lighter background */
  
  /* Glass Effects */
  --glass-tint-light: rgba(255, 255, 255, 0.06);
  --glass-tint-medium: rgba(255, 255, 255, 0.12);
  --glass-tint-dark: rgba(0, 0, 0, 0.18);
  
  /* Accent Colors */
  --accent-1: #00e5ff;             /* Neon cyan */
  --accent-2: #8b5cf6;             /* Electric purple */
  --accent-gradient: linear-gradient(135deg, var(--accent-1) 0%, var(--accent-2) 100%);
  
  /* Text Colors */
  --text-main: #e6eef6;            /* Primary text */
  --text-secondary: #a8b5c7;       /* Secondary text */
  --text-muted: #6b7789;           /* Muted text */
}
```

### Light Mode Colors

Customize light mode by modifying the `[data-theme="light"]` selector:

```css
[data-theme="light"] {
  --primary-bg: #f5f7fa;
  --secondary-bg: #ffffff;
  --text-main: #1a2332;
  --text-secondary: #4a5568;
  --text-muted: #718096;
}
```

### Popular Color Schemes

#### Blue & Orange
```css
--accent-1: #3b82f6;  /* Blue */
--accent-2: #f97316;  /* Orange */
```

#### Green & Teal
```css
--accent-1: #10b981;  /* Green */
--accent-2: #14b8a6;  /* Teal */
```

#### Pink & Purple
```css
--accent-1: #ec4899;  /* Pink */
--accent-2: #a855f7;  /* Purple */
```

#### Red & Yellow
```css
--accent-1: #ef4444;  /* Red */
--accent-2: #f59e0b;  /* Yellow */
```

## Typography

### Changing Fonts

The theme uses Google Fonts. To change fonts:

1. **Choose fonts** from [Google Fonts](https://fonts.google.com)

2. **Update the Google Fonts link** in `<head>`:
```xml
<link href='https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;600;700&amp;family=Montserrat:wght@300;400;500;600;700;800&amp;display=swap' rel='stylesheet'/>
```

3. **Update CSS variables**:
```css
--font-primary: 'Roboto', sans-serif;
--font-secondary: 'Montserrat', sans-serif;
```

### Font Size Adjustments

Modify font sizes for different elements:

```css
/* Base font size - affects all rem units */
html {
  font-size: 16px;  /* Increase to 18px for larger text */
}

/* Specific elements */
.hero-content h1 {
  font-size: clamp(2rem, 5vw, 4rem);  /* Adjust max size */
}

.section-title {
  font-size: 2.5rem;  /* Make section titles larger */
}

body {
  line-height: 1.8;  /* Increase line spacing */
}
```

### Font Weight Variations

```css
.blog-card-title {
  font-weight: 700;  /* Bold */
}

.hero-content h1 {
  font-weight: 900;  /* Extra bold */
}
```

## Layout & Spacing

### Container Width

Change the maximum width of content:

```css
.container {
  max-width: 1400px;  /* Default: 1280px */
}

.header-container {
  max-width: 1400px;  /* Match container width */
}
```

### Border Radius

Adjust roundness of elements:

```css
:root {
  --radius: 16px;      /* Default: 12px */
  --radius-sm: 12px;   /* Default: 8px */
  --radius-lg: 24px;   /* Default: 16px */
}
```

### Spacing Scale

Modify the spacing utilities:

```css
:root {
  --space-1: 0.25rem;
  --space-2: 0.5rem;
  --space-3: 1rem;
  --space-4: 1.5rem;
  --space-5: 2rem;
  --space-6: 3rem;
}
```

### Section Padding

```css
.section {
  padding: 4rem 0;  /* Default: 3rem 0 */
}

.hero-section {
  padding: 140px 1.5rem 5rem;  /* Adjust top padding */
}
```

## Header Customization

### Logo/Title Styling

```css
.site-logo {
  font-size: 1.75rem;        /* Larger logo */
  font-weight: 800;          /* Bolder */
  letter-spacing: -0.02em;   /* Tighter spacing */
}
```

### Navigation Links

```css
.nav-link {
  padding: 0.75rem 1.5rem;   /* More padding */
  font-size: 1rem;           /* Larger text */
  text-transform: uppercase; /* Uppercase links */
  letter-spacing: 0.05em;    /* Spaced letters */
}
```

### Header Height

```css
.site-header {
  padding: 1.5rem 0;  /* Taller header */
}

main {
  padding-top: 90px;  /* Adjust to match header height */
}
```

### Sticky Header Behavior

To make header hide on scroll down:

```javascript
// Add to the scroll event listener
window.addEventListener('scroll', () => {
  const currentScroll = window.pageYOffset;
  
  if (currentScroll > lastScroll && currentScroll > 100) {
    header.style.transform = 'translateY(-100%)';
  } else {
    header.style.transform = 'translateY(0)';
  }
  
  lastScroll = currentScroll;
});
```

## Hero Section

### Background Effects

Modify the gradient effects:

```css
.hero-bg {
  background: 
    radial-gradient(circle at 30% 40%, rgba(0, 229, 255, 0.15) 0%, transparent 50%),
    radial-gradient(circle at 70% 70%, rgba(139, 92, 246, 0.15) 0%, transparent 50%),
    radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.02) 0%, transparent 80%);
}
```

### Hero Text

Edit in the HTML:

```xml
<div class='hero-content'>
  <h1>Your Custom Heading</h1>
  <p>Your custom description text goes here.</p>
  <div class='hero-cta'>
    <button class='btn-primary'>Your CTA</button>
    <button class='btn-secondary'>Secondary CTA</button>
  </div>
</div>
```

### Hero Cards

Customize the 3D card stack:

```css
.hero-card {
  padding: 2.5rem;           /* More padding */
  box-shadow: var(--shadow-strong);  /* Stronger shadow */
}

.hero-card:nth-child(1) {
  transform: translateZ(0) rotateY(-8deg);  /* More rotation */
}
```

## Content Sections

### Subscriber Card

```css
.subscriber-card {
  padding: 3rem;             /* More padding */
  background: var(--accent-gradient);  /* Gradient background */
}

.subscriber-count {
  font-size: 4rem;           /* Larger number */
}
```

### Social Metrics Cards

```css
.metric-card {
  padding: 2rem;             /* More padding */
  text-align: left;          /* Left-aligned */
}

.metric-card:hover {
  transform: translateY(-4px) scale(1.02);  /* More dramatic hover */
}
```

### Blog Grid

Change column count:

```css
.blog-grid {
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));  /* Wider cards */
  gap: 2.5rem;  /* More gap */
}
```

### Carousel Settings

```css
.carousel-item {
  flex: 0 0 calc(25% - 0.75rem);  /* 4 items visible */
}

@media (max-width: 1024px) {
  .carousel-item {
    flex: 0 0 calc(33.333% - 0.667rem);  /* 3 items on tablet */
  }
}
```

## Footer

### Footer Layout

```css
.footer-content {
  grid-template-columns: 2fr 1fr 1fr 1.5fr;  /* Custom column widths */
}
```

### Footer Colors

```css
.site-footer {
  background: linear-gradient(to top, var(--primary-bg), var(--secondary-bg));
  border-top: 2px solid var(--accent-1);  /* Colored border */
}
```

### Newsletter Form

```css
.newsletter-form {
  flex-direction: column;  /* Stack vertically */
}

.newsletter-input {
  padding: 1rem 1.25rem;   /* Larger input */
  font-size: 1rem;
}
```

## Adding Custom Sections

### Basic Section Template

```xml
<section class='section' id='custom-section'>
  <div class='container'>
    <h2 class='section-title'>Section Title</h2>
    
    <div class='blog-grid'>
      <!-- Your content here -->
    </div>
  </div>
</section>
```

### Full-Width Section

```xml
<section class='section' style='background: var(--secondary-bg);'>
  <div class='container'>
    <h2 class='section-title'>Full Width Section</h2>
    <!-- Content -->
  </div>
</section>
```

### Image + Text Section

```xml
<section class='section'>
  <div class='container'>
    <div style='display: grid; grid-template-columns: 1fr 1fr; gap: 3rem; align-items: center;'>
      <div>
        <h2>Section Heading</h2>
        <p>Description text here...</p>
        <button class='btn-primary'>Call to Action</button>
      </div>
      <div>
        <img src='image-url.jpg' alt='Description' style='border-radius: var(--radius-lg);'/>
      </div>
    </div>
  </div>
</section>
```

### Testimonial Section

```xml
<section class='section'>
  <div class='container'>
    <h2 class='section-title'>What People Say</h2>
    
    <div class='blog-grid'>
      <div class='blog-card glass'>
        <div class='blog-card-content'>
          <p>"Amazing content! I've learned so much."</p>
          <div style='margin-top: 1rem; font-weight: 600;'>- John Doe</div>
        </div>
      </div>
      <!-- More testimonials -->
    </div>
  </div>
</section>
```

## Advanced Customization

### Custom Animations

Add custom keyframe animations:

```css
@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-20px); }
}

.floating-element {
  animation: float 3s ease-in-out infinite;
}
```

### Particle Background

Add animated particles to hero:

```javascript
// Add after DOMContentLoaded
const heroSection = document.querySelector('.hero-section');
for (let i = 0; i < 50; i++) {
  const particle = document.createElement('div');
  particle.style.cssText = `
    position: absolute;
    width: 2px;
    height: 2px;
    background: rgba(255,255,255,0.3);
    border-radius: 50%;
    left: ${Math.random() * 100}%;
    top: ${Math.random() * 100}%;
    animation: twinkle ${2 + Math.random() * 3}s infinite;
  `;
  heroSection.querySelector('.hero-bg').appendChild(particle);
}
```

### Custom Hover Effects

```css
.custom-hover-effect {
  position: relative;
  overflow: hidden;
}

.custom-hover-effect::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: var(--accent-gradient);
  opacity: 0.1;
  transition: left 0.3s;
}

.custom-hover-effect:hover::before {
  left: 100%;
}
```

### Glassmorphism Intensity

Adjust blur and transparency:

```css
.glass {
  background: rgba(255, 255, 255, 0.08);  /* More transparent */
  backdrop-filter: blur(10px);             /* More blur */
}
```

### Dark Mode Transition

Smooth color transitions:

```css
*, *::before, *::after {
  transition: background-color 0.3s, color 0.3s, border-color 0.3s;
}
```

## Mobile-Specific Customization

### Mobile Font Sizes

```css
@media (max-width: 768px) {
  html {
    font-size: 14px;  /* Smaller base size */
  }
  
  .hero-content h1 {
    font-size: 2rem;
  }
  
  .section-title {
    font-size: 1.75rem;
  }
}
```

### Mobile Spacing

```css
@media (max-width: 768px) {
  .section {
    padding: 2rem 0;
  }
  
  .container {
    padding: 0 1rem;
  }
}
```

## Performance Considerations

### Reduce Animations

For better performance on lower-end devices:

```css
@media (max-width: 768px) {
  * {
    animation: none !important;
    transition: none !important;
  }
}
```

### Optimize Images

- Use WebP format with JPG fallback
- Implement proper lazy loading
- Compress images before upload

```xml
<picture>
  <source srcset="image.webp" type="image/webp">
  <img src="image.jpg" alt="Description" loading="lazy">
</picture>
```

## Testing Your Customizations

1. **Test on Multiple Devices**
   - Desktop (1920x1080, 1366x768)
   - Tablet (768x1024)
   - Mobile (375x667, 414x896)

2. **Test Dark/Light Modes**
   - Verify color contrast
   - Check readability

3. **Test Browsers**
   - Chrome, Firefox, Safari, Edge
   - Mobile browsers

4. **Performance Test**
   - Use Lighthouse in Chrome DevTools
   - Target 90+ score

## Backup & Version Control

Before making major customizations:
1. **Download current theme** via Blogger
2. **Save local copy** with version number
3. **Test changes** on a backup blog first
4. **Document changes** you make

## Need Help?

- Check [README.md](README.md) for general info
- Review [INSTALLATION.md](INSTALLATION.md) for setup
- Open an [issue on GitHub](https://github.com/rstechshan/Adult/issues)

---

**Happy Customizing!** 🎨

Your theme, your way. Make it uniquely yours!
