# Shanaka Technic - Modern 3D Blogger Theme

A production-ready, modern Blogger theme featuring glassmorphism effects, 3D transforms, YouTube integration, and comprehensive social media features.

![Theme Preview](https://via.placeholder.com/1200x600/0b0f17/00e5ff?text=Shanaka+Technic+Theme)

## ✨ Features

### Visual Design
- **Modern Glassmorphism UI** with backdrop blur effects
- **3D CSS Transforms** for depth and interactivity
- **Neon Gradient Accents** (Cyan #00e5ff + Purple #8b5cf6)
- **Dark/Light Mode** with persistent localStorage preference
- **Responsive Design** optimized for all devices (320px - 1366px+)
- **Variable Typography** using Inter and Poppins fonts

### Interactive Components
- **Fixed Glass Header** with smooth scroll effects
- **Hero Section** with layered 3D card stack
- **YouTube Integration** via YouTube Data API v3
  - Live subscriber count with animated counter
  - Latest video uploads carousel
  - Featured video embed
  - Playlist sections
- **Social Metrics Dashboard** with animated follower counts
- **Product Gallery** carousel with touch support
- **Podcast/Audio** player section
- **Blog Grid** with social share buttons
- **Floating Social Bar** for quick access to profiles
- **Newsletter Signup** form in footer

### Technical Highlights
- **Single XML File** - Complete Blogger template
- **Inline Critical CSS** for fast initial render
- **Lazy Loading Images** for better performance
- **Smooth Animations** with reduced motion support
- **SEO Optimized** with structured data (JSON-LD)
- **Accessibility Ready** (WCAG AA compliant)
- **Mobile-First** responsive breakpoints

## 📦 Installation

### Method 1: Upload via Blogger Dashboard

1. **Download the Theme**
   ```bash
   git clone https://github.com/rstechshan/Adult.git
   cd Adult
   ```

2. **Go to Blogger Dashboard**
   - Navigate to your blog at `blogger.com`
   - Click on **Theme** in the left sidebar
   - Click the **Dropdown arrow** (⋮) next to "Customize"
   - Select **Restore** > **Upload**

3. **Upload theme.xml**
   - Choose the `theme.xml` file
   - Click **Upload**
   - Confirm the upload

4. **Configure the Theme**
   - See [Configuration Guide](#-configuration) below

### Method 2: Edit HTML Directly

1. Go to **Theme** > **Edit HTML**
2. Copy the entire contents of `theme.xml`
3. Paste into the HTML editor (replacing existing code)
4. Click **Save theme**

## ⚙️ Configuration

### YouTube API Setup

1. **Get YouTube API Key**
   - Go to [Google Cloud Console](https://console.cloud.google.com/)
   - Create a new project or select existing
   - Enable **YouTube Data API v3**
   - Go to **Credentials** > **Create Credentials** > **API Key**
   - Copy your API key

2. **Get YouTube Channel ID**
   - Go to your YouTube channel
   - Click on your profile picture > **Settings** > **Advanced settings**
   - Copy your Channel ID
   - OR visit: `https://www.youtube.com/account_advanced`

3. **Update Theme Configuration**
   - In Blogger, go to **Theme** > **Edit HTML**
   - Find the `CONFIG` object in the JavaScript section (around line 1300)
   - Replace placeholder values:
   ```javascript
   const CONFIG = {
     youtubeApiKey: 'YOUR_ACTUAL_API_KEY',
     youtubeChannelId: 'YOUR_ACTUAL_CHANNEL_ID',
     socialCountsEndpoint: 'YOUR_API_ENDPOINT', // Optional
     featuredVideoId: 'YOUR_VIDEO_ID',
   };
   ```

### Social Media Links

Update the social media links in the floating social bar:
- Find the `<aside class='floating-social'>` section
- Replace `href` attributes with your actual social media URLs:
```xml
<a href='https://youtube.com/@yourchannel'>▶️</a>
<a href='https://facebook.com/yourpage'>👍</a>
<a href='https://instagram.com/yourprofile'>📷</a>
<a href='https://twitter.com/yourhandle'>🐦</a>
<a href='https://tiktok.com/@yourprofile'>🎵</a>
```

### Color Customization

Modify CSS variables at the top of the `<style>` section:
```css
:root {
  --primary-bg: #0b0f17;        /* Main background */
  --accent-1: #00e5ff;          /* Cyan accent */
  --accent-2: #8b5cf6;          /* Purple accent */
  --text-main: #e6eef6;         /* Primary text */
  --radius: 12px;               /* Border radius */
  --blur: 6px;                  /* Glassmorphism blur */
}
```

### Blog Title & Branding

The theme automatically uses your blog's title from Blogger settings:
1. Go to **Settings** > **Basic**
2. Update **Title** and **Description**
3. These will automatically appear in the header and meta tags

## 📚 File Structure

```
Adult/
├── theme.xml               # Main Blogger template (complete theme)
├── README.md              # This file
├── INSTALLATION.md        # Detailed installation guide
├── CUSTOMIZATION.md       # Theme customization guide
├── assets/
│   ├── css/
│   │   └── extended.css   # Optional external CSS
│   ├── js/
│   │   ├── youtube.js     # YouTube API integration
│   │   ├── carousel.js    # Carousel functionality
│   │   └── theme.js       # Additional theme scripts
│   ├── icons/
│   │   └── social/        # SVG social media icons
│   └── images/
│       └── demo/          # Demo/placeholder images
└── docs/
    ├── API_SETUP.md       # API configuration guide
    └── TROUBLESHOOTING.md # Common issues and solutions
```

## 🎨 Customization

### Changing Fonts

The theme uses Google Fonts (Inter & Poppins). To change:
1. Find the Google Fonts link in `<head>`
2. Replace with your preferred fonts
3. Update CSS variables:
```css
--font-primary: 'YourFont', sans-serif;
--font-secondary: 'YourHeadingFont', sans-serif;
```

### Adding Custom Sections

Add new content sections in the `<main>` element:
```xml
<section class='section'>
  <div class='container'>
    <h2 class='section-title'>Your Section Title</h2>
    <!-- Your content here -->
  </div>
</section>
```

### Modifying the Hero Section

Edit the hero content in the `<section class='hero-section'>`:
- Change heading and description text
- Update CTA button labels and actions
- Customize hero card stack items

## 🚀 Performance Optimization

The theme includes several performance optimizations:

### Already Implemented
- ✅ Inline critical CSS
- ✅ Lazy loading for images
- ✅ Deferred JavaScript execution
- ✅ CDN fonts with preconnect
- ✅ Optimized CSS animations
- ✅ Reduced motion support

### Additional Recommendations
1. **Enable HTTPS** on your blog
2. **Compress Images** before uploading (use TinyPNG)
3. **Use WebP Format** for better compression
4. **Enable Blogger's** built-in image optimization
5. **Minimize Gadgets** - only add essential widgets

## 📱 Browser Support

### Fully Supported
- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

### Graceful Degradation
- Older browsers receive simpler styling
- Core functionality remains accessible
- Progressive enhancement for modern features

## ♿ Accessibility

WCAG AA compliant features:
- ✅ Keyboard navigation support
- ✅ ARIA labels on interactive elements
- ✅ Sufficient color contrast ratios
- ✅ Focus indicators on all focusable elements
- ✅ Reduced motion preferences respected
- ✅ Semantic HTML structure
- ✅ Alt text support for images

## 🔒 Security

- No external dependencies loaded from untrusted sources
- API keys configured server-side (not exposed in frontend)
- All external links use `rel="noopener"` for security
- Content Security Policy compatible

## 📈 SEO Features

- ✅ Structured data (JSON-LD) for rich snippets
- ✅ Open Graph tags for social sharing
- ✅ Twitter Card meta tags
- ✅ Semantic HTML5 elements
- ✅ Optimized meta descriptions
- ✅ Fast loading times for better rankings

## 🐛 Troubleshooting

### YouTube Data Not Loading
1. Verify your API key is correct
2. Ensure YouTube Data API v3 is enabled
3. Check browser console for errors
4. Verify channel ID is correct

### Dark Mode Not Persisting
- Check if browser allows localStorage
- Try clearing browser cache
- Ensure JavaScript is enabled

### Mobile Menu Not Working
- Verify JavaScript is loading correctly
- Check for JavaScript errors in console
- Ensure no conflicting scripts

### Images Not Lazy Loading
- Modern browsers required for IntersectionObserver
- Fallback loads all images immediately
- Check if `loading="lazy"` attribute is present

## 📞 Support

For issues and questions:
- **GitHub Issues**: [Open an issue](https://github.com/rstechshan/Adult/issues)
- **Documentation**: Check INSTALLATION.md and CUSTOMIZATION.md
- **Blogger Forum**: [Blogger Help Community](https://support.google.com/blogger/community)

## 📄 License

This theme is open source and available under the MIT License.

## 🙏 Credits

- **Fonts**: Google Fonts (Inter, Poppins)
- **Icons**: Emoji (Unicode)
- **Inspiration**: Modern glassmorphism UI trends

## 📝 Changelog

### Version 1.0.0 (2024)
- Initial release
- Complete Blogger theme with all features
- YouTube Data API integration
- Dark/light mode toggle
- Responsive design
- Glassmorphism effects
- Social media integration
- Blog post grid with share buttons
- Floating social bar
- Newsletter signup form

---

**Made with ❤️ for the tech community**

For more information, visit [Shanaka Technic](https://github.com/rstechshan/Adult)
