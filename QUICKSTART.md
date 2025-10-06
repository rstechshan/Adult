# Quick Start Guide

Get your Shanaka Technic theme up and running in 5 minutes!

## 1. Upload Theme (2 minutes)

1. Go to [blogger.com](https://www.blogger.com)
2. Select your blog
3. Click **Theme** → **⋮** → **Restore** → **Upload**
4. Choose `theme.xml` and click **Upload**
5. Confirm the upload

✅ **Done!** Your theme is now live.

## 2. Basic Configuration (3 minutes)

### Update Blog Info
1. Go to **Settings** → **Basic**
2. Update **Title**: "Shanaka Technic" (or your name)
3. Update **Description**: Your blog description
4. Click **Save**

### Configure YouTube (Optional)
1. Get your YouTube API key from [Google Cloud Console](https://console.cloud.google.com/)
2. Get your Channel ID from [YouTube Studio](https://studio.youtube.com)
3. Go to **Theme** → **Edit HTML**
4. Search for `CONFIG` (Ctrl+F)
5. Replace:
```javascript
youtubeApiKey: 'YOUR_API_KEY_HERE',
youtubeChannelId: 'YOUR_CHANNEL_ID_HERE',
```
6. Click **Save theme**

### Update Social Links
1. In **Theme** → **Edit HTML**
2. Search for `floating-social`
3. Update URLs:
```xml
<a href='https://youtube.com/@yourchannel'>▶️</a>
<a href='https://facebook.com/yourpage'>👍</a>
```
4. Click **Save theme**

## 3. Test Your Theme

- ✅ Visit your blog
- ✅ Click the moon icon to test dark mode
- ✅ Test mobile menu (resize browser)
- ✅ Check if YouTube data loads (if configured)

## Common First Steps

### Change Colors
Edit CSS variables in **Theme** → **Edit HTML**:
```css
:root {
  --accent-1: #00e5ff;  /* Your color */
  --accent-2: #8b5cf6;  /* Your color */
}
```

### Add First Blog Post
1. Go to **Posts** → **New Post**
2. Add title, content, and image
3. Click **Publish**
4. Check your homepage

### Customize Navigation
Find the `<nav class='main-nav'>` section and edit:
```xml
<a class='nav-link' href='#videos'>Videos</a>
<a class='nav-link' href='/p/about.html'>About</a>
```

## Need Help?

- 📖 Full docs: [README.md](README.md)
- 🔧 Detailed setup: [INSTALLATION.md](INSTALLATION.md)
- 🎨 Styling guide: [CUSTOMIZATION.md](CUSTOMIZATION.md)

## Next Steps

1. ✅ Add more blog posts
2. ✅ Customize colors to match your brand
3. ✅ Configure Google Analytics (optional)
4. ✅ Set up comments (Settings → Posts)
5. ✅ Submit sitemap to Google Search Console

---

**That's it!** 🎉 You're ready to start blogging with style.
