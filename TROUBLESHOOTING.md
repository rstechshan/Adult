# Troubleshooting Guide

Common issues and solutions for the Shanaka Technic Blogger theme.

## Installation Issues

### Theme Won't Upload

**Error: "We were unable to process your upload"**

**Solutions:**
1. Ensure the XML file is not corrupted
2. Check file size is under 1MB (Blogger limit)
3. Try using Edit HTML method instead:
   - Theme → Edit HTML
   - Select all (Ctrl+A)
   - Paste theme.xml content
   - Save

**Error: "XML parsing error"**

**Solutions:**
1. Verify you downloaded the complete file
2. Don't edit in Word or rich text editors
3. Use a plain text editor (Notepad++, VS Code)
4. Check for missing `<` or `>` characters

### Theme Looks Broken After Upload

**Symptoms:** No styling, plain HTML

**Solutions:**
1. **Clear browser cache:**
   - Chrome: Ctrl+Shift+Delete → Clear browsing data
   - Or hard refresh: Ctrl+F5

2. **Check if CSS loaded:**
   - Right-click → Inspect
   - Look for errors in Console tab
   - Check Network tab for failed CSS loads

3. **Verify theme saved properly:**
   - Theme → Edit HTML
   - Check if your CSS is present in `<style>` tag

## YouTube Integration Issues

### Subscriber Count Shows "0"

**Possible Causes:**
1. API key not configured
2. Channel ID incorrect
3. YouTube API not enabled
4. API quota exceeded

**Solutions:**

**1. Verify API Key:**
```javascript
// In theme.xml, check CONFIG section
youtubeApiKey: 'AIzaSy...' // Should start with AIzaSy
```

**2. Check Channel ID:**
- Should start with `UC`
- Get from: https://www.youtube.com/account_advanced

**3. Enable YouTube Data API v3:**
- Go to [Google Cloud Console](https://console.cloud.google.com/)
- APIs & Services → Library
- Search "YouTube Data API v3"
- Click Enable

**4. Check Browser Console:**
- Press F12 → Console tab
- Look for error messages
- Common errors:
  - `403 Forbidden` = API key issue
  - `400 Bad Request` = Invalid channel ID
  - `429 Too Many Requests` = Quota exceeded

### Videos Not Loading

**Solutions:**
1. Check API key is valid
2. Verify channel ID is correct
3. Check browser console for errors
4. Test API manually:
```
https://www.googleapis.com/youtube/v3/channels?part=statistics&id=YOUR_CHANNEL_ID&key=YOUR_API_KEY
```
5. If demo videos show, API key is the issue

## Dark Mode Issues

### Dark Mode Toggle Not Working

**Solutions:**
1. **Check if JavaScript is enabled:**
   - Browser settings → Allow JavaScript

2. **Clear localStorage:**
```javascript
// In browser console (F12)
localStorage.clear();
location.reload();
```

3. **Verify toggle button exists:**
   - Inspect element
   - Look for `id="themeToggle"`

### Dark Mode Doesn't Persist

**Cause:** Browser blocking localStorage

**Solutions:**
1. Check browser privacy settings
2. Allow cookies and site data
3. Try different browser
4. Check incognito mode (some block localStorage)

## Mobile Menu Issues

### Hamburger Menu Not Opening

**Solutions:**
1. **Clear cache** (Ctrl+Shift+Delete)
2. **Check JavaScript errors:**
   - F12 → Console
   - Look for errors

3. **Verify menu toggle exists:**
```xml
<button id='menuToggle'>...</button>
```

4. **Test on different mobile device**

### Menu Stays Open

**Solution:**
- Click outside menu area to close
- Refresh page
- Check for JavaScript errors in console

## Responsive Design Issues

### Layout Broken on Mobile

**Solutions:**
1. **Check viewport meta tag:**
```xml
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

2. **Test in different browsers:**
   - Chrome mobile
   - Safari iOS
   - Firefox mobile

3. **Check CSS media queries:**
   - Search for `@media (max-width: 768px)`
   - Ensure they're present

### Images Overflowing

**Solutions:**
1. Images should have:
```css
img {
  max-width: 100%;
  height: auto;
}
```

2. Add to problem images:
```xml
<img style="max-width: 100%; height: auto;" src="...">
```

## Performance Issues

### Slow Loading

**Solutions:**
1. **Optimize images:**
   - Use WebP format
   - Compress before upload
   - Max width: 1920px

2. **Enable lazy loading:**
```xml
<img loading="lazy" src="...">
```

3. **Check Lighthouse score:**
   - Chrome DevTools → Lighthouse
   - Target: 90+ score

### Animations Laggy

**Solutions:**
1. **Reduce motion for low-end devices:**
```css
@media (max-width: 768px) {
  * {
    animation: none !important;
  }
}
```

2. **Disable backdrop-filter on mobile:**
```css
@media (max-width: 768px) {
  .glass {
    backdrop-filter: none;
  }
}
```

## Blog Posts Not Showing

### Blog Grid Empty

**Solutions:**
1. **Check if posts exist:**
   - Posts → Published

2. **Verify widget section:**
```xml
<b:section id='blog-posts'>
  <b:widget id='Blog1' type='Blog'>
```

3. **Check widget visibility:**
   - Layout → Blog Posts widget
   - Click "Edit"
   - Ensure "Visible" is checked

### Post Images Not Loading

**Solutions:**
1. **Use featured images:**
   - Edit post → Add image
   - Blogger will set as featured

2. **Check image URLs:**
   - Should be https://
   - Not blocked by CORS

## SEO Issues

### Not Appearing in Google

**Solutions:**
1. **Enable search engines:**
   - Settings → Privacy
   - "Visible to search engines": Yes

2. **Submit sitemap:**
   - https://yourblog.blogspot.com/sitemap.xml
   - Submit to Google Search Console

3. **Check robots.txt:**
   - Settings → Search preferences
   - Enable custom robots.txt if needed

### Social Cards Not Working

**Solutions:**
1. **Verify Open Graph tags:**
```xml
<meta property="og:title" content="...">
<meta property="og:image" content="...">
```

2. **Test with tools:**
   - Facebook: [Sharing Debugger](https://developers.facebook.com/tools/debug/)
   - Twitter: [Card Validator](https://cards-dev.twitter.com/validator)

## Styling Issues

### Colors Not Changing

**Solutions:**
1. **Check CSS variable syntax:**
```css
:root {
  --accent-1: #00e5ff; /* Semicolon required */
}
```

2. **Clear cache after changes**
3. **Verify variable is used:**
```css
.element {
  color: var(--accent-1); /* Not --accent-1: value */
}
```

### Fonts Not Loading

**Solutions:**
1. **Check Google Fonts link:**
```xml
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">
```

2. **Verify font-family:**
```css
font-family: 'Inter', sans-serif; /* Quotes around font name */
```

3. **Check browser console for 404 errors**

## Browser-Specific Issues

### Safari Issues

**Backdrop-filter not working:**
```css
backdrop-filter: blur(10px);
-webkit-backdrop-filter: blur(10px); /* Add webkit prefix */
```

### Firefox Issues

**Smooth scroll not working:**
```css
html {
  scroll-behavior: smooth;
}
```

### Internet Explorer

**Theme may not work fully:**
- IE11 not fully supported
- Recommend modern browsers
- Basic functionality should work

## Getting More Help

### Before Asking for Help

1. ✅ Check browser console for errors (F12)
2. ✅ Try in different browser
3. ✅ Clear cache and cookies
4. ✅ Test in incognito mode
5. ✅ Verify you're using latest theme version

### Where to Get Help

1. **Check documentation:**
   - [README.md](README.md)
   - [INSTALLATION.md](INSTALLATION.md)
   - [CUSTOMIZATION.md](CUSTOMIZATION.md)

2. **Search existing issues:**
   - [GitHub Issues](https://github.com/rstechshan/Adult/issues)

3. **Open new issue:**
   - Include browser & version
   - Share error messages from console
   - Provide blog URL (if public)
   - Describe steps to reproduce

4. **Blogger Help:**
   - [Blogger Help Center](https://support.google.com/blogger)
   - [Blogger Community](https://support.google.com/blogger/community)

## Debugging Tips

### Using Browser DevTools

**Open DevTools:**
- Windows/Linux: F12 or Ctrl+Shift+I
- Mac: Cmd+Option+I

**Useful tabs:**
- **Console**: See JavaScript errors
- **Network**: Check file loading
- **Elements**: Inspect HTML/CSS
- **Application**: Check localStorage

### Common Console Errors

**"Uncaught ReferenceError: $ is not defined"**
- jQuery not loaded (theme doesn't use jQuery)

**"Failed to fetch"**
- Network/CORS issue
- Check API endpoint

**"localStorage is not defined"**
- Browser blocking localStorage
- Check privacy settings

### Testing Changes Safely

1. **Use browser DevTools:**
   - Edit CSS live
   - Test before saving

2. **Keep backup:**
   - Download theme before changes
   - Save as theme-v1.xml, theme-v2.xml

3. **Test on backup blog:**
   - Create test blog
   - Apply theme there first

---

**Still having issues?** Open an [issue on GitHub](https://github.com/rstechshan/Adult/issues) with:
- Browser and version
- Error messages from console
- Steps to reproduce
- Screenshots if applicable
