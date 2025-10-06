# Installation Guide - Shanaka Technic Theme

Complete step-by-step guide to install and configure the Shanaka Technic Blogger theme.

## Prerequisites

Before installing the theme, ensure you have:
- A Blogger account (free at blogger.com)
- A blog created on Blogger
- Admin access to your blog
- Basic understanding of Blogger dashboard

## Installation Steps

### Step 1: Backup Your Current Theme

**IMPORTANT**: Always backup your existing theme before making changes!

1. Log in to [Blogger.com](https://www.blogger.com)
2. Select your blog from the dashboard
3. Click **Theme** in the left sidebar
4. Click the **Dropdown arrow** (⋮) next to "Customize"
5. Select **Backup/Restore** > **Download theme**
6. Save the XML file to your computer

### Step 2: Download Shanaka Technic Theme

#### Option A: Download from GitHub
1. Visit the [GitHub repository](https://github.com/rstechshan/Adult)
2. Click the green **Code** button
3. Select **Download ZIP**
4. Extract the ZIP file
5. Locate the `theme.xml` file

#### Option B: Clone via Git
```bash
git clone https://github.com/rstechshan/Adult.git
cd Adult
```

### Step 3: Upload Theme to Blogger

1. In Blogger dashboard, go to **Theme**
2. Click the **Dropdown arrow** (⋮) next to "Customize"
3. Select **Restore** > **Upload**
4. Click **Choose File** and select `theme.xml`
5. Click **Upload**
6. Blogger will show a preview of the theme
7. Click **Confirm** to apply the theme

**Alternative Method - Direct HTML Edit:**
1. Go to **Theme** > **Edit HTML**
2. Select all existing code (Ctrl+A / Cmd+A)
3. Delete it
4. Open `theme.xml` in a text editor
5. Copy all contents
6. Paste into the Blogger HTML editor
7. Click **Save theme**

### Step 4: Initial Configuration

After installation, configure these essential settings:

#### A. Blog Information
1. Go to **Settings** > **Basic**
2. Update **Title**: "Shanaka Technic" (or your name)
3. Update **Description**: Add a compelling description
4. Click **Save settings**

#### B. Privacy Settings
1. Go to **Settings** > **Privacy**
2. Set **Blog Readers**: Public (or your preference)
3. Enable **Visible to search engines**: Yes
4. Click **Save settings**

#### C. Post Settings
1. Go to **Settings** > **Posts**
2. Set **Post Template**: Optional template
3. Enable **Show Email Post Button**: Your preference
4. Click **Save settings**

### Step 5: Configure YouTube Integration

#### Get YouTube API Key
1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project:
   - Click **Select a project** > **New Project**
   - Name: "Shanaka Technic Blog"
   - Click **Create**
3. Enable YouTube Data API v3:
   - Click **Enable APIs and Services**
   - Search for "YouTube Data API v3"
   - Click **Enable**
4. Create API Key:
   - Go to **Credentials**
   - Click **Create Credentials** > **API Key**
   - Copy the API key (save it securely)
5. Restrict API Key (recommended):
   - Click on the API key to edit
   - Under **API restrictions**, select **Restrict key**
   - Choose **YouTube Data API v3**
   - Under **Application restrictions**, select **HTTP referrers**
   - Add your blog URL: `*.blogspot.com/*` or your custom domain
   - Click **Save**

#### Get YouTube Channel ID
1. Go to [YouTube Studio](https://studio.youtube.com)
2. Click **Settings** (gear icon)
3. Click **Channel** > **Advanced settings**
4. Copy your **Channel ID**

OR

1. Visit `https://www.youtube.com/account_advanced`
2. Copy the **Channel ID** shown

#### Update Theme Configuration
1. In Blogger, go to **Theme** > **Edit HTML**
2. Press Ctrl+F (Cmd+F on Mac) and search for: `CONFIG`
3. Find this section (around line 1300):
```javascript
const CONFIG = {
  youtubeApiKey: 'YOUR_YOUTUBE_API_KEY_HERE',
  youtubeChannelId: 'YOUR_CHANNEL_ID_HERE',
  socialCountsEndpoint: 'YOUR_SOCIAL_COUNTS_API_ENDPOINT',
  featuredVideoId: 'dQw4w9WgXcQ',
};
```
4. Replace with your actual values:
```javascript
const CONFIG = {
  youtubeApiKey: 'AIzaSyAbc123...',  // Your actual API key
  youtubeChannelId: 'UCabc123...',    // Your actual channel ID
  socialCountsEndpoint: '',             // Leave empty for now
  featuredVideoId: 'YOUR_VIDEO_ID',   // ID from youtube.com/watch?v=ID
};
```
5. Click **Save theme**

### Step 6: Update Social Media Links

1. In **Theme** > **Edit HTML**, search for: `floating-social`
2. Update the social media URLs:
```xml
<aside class='floating-social'>
  <a href='https://youtube.com/@yourchannelname'>▶️</a>
  <a href='https://facebook.com/yourpagename'>👍</a>
  <a href='https://instagram.com/yourprofile'>📷</a>
  <a href='https://twitter.com/yourhandle'>🐦</a>
  <a href='https://tiktok.com/@yourprofile'>🎵</a>
</aside>
```
3. Click **Save theme**

### Step 7: Verify Installation

1. **Visit Your Blog**: Click "View blog" to see your site
2. **Check Dark Mode**: Click the moon icon in the header
3. **Test Mobile Menu**: Resize browser or use mobile device
4. **Verify YouTube Data**: Check if subscriber count loads
5. **Test Navigation**: Click on menu links
6. **Check Responsiveness**: Test on different devices

## Post-Installation Checklist

- [ ] Theme uploaded and applied successfully
- [ ] Blog title and description updated
- [ ] YouTube API key configured
- [ ] Channel ID entered correctly
- [ ] Social media links updated
- [ ] Dark/light mode toggle working
- [ ] Mobile menu functioning
- [ ] Images loading correctly
- [ ] Blog posts displaying in grid
- [ ] Footer newsletter form present
- [ ] Responsive design working on mobile

## Common Installation Issues

### Issue: Theme Won't Upload
**Solution:**
- Ensure the XML file is not corrupted
- Try the Edit HTML method instead
- Check file size (Blogger limit: 1MB for themes)
- Remove any comments or extra whitespace

### Issue: Styling Looks Broken
**Solution:**
- Clear browser cache (Ctrl+Shift+Delete)
- Hard refresh the page (Ctrl+F5)
- Check if JavaScript is enabled
- Verify no custom CSS conflicts

### Issue: YouTube Section Not Loading
**Solution:**
- Verify API key is correct (no extra spaces)
- Ensure YouTube Data API v3 is enabled
- Check channel ID format (should start with UC)
- Open browser console to check for errors

### Issue: Dark Mode Not Working
**Solution:**
- Check if localStorage is enabled in browser
- Try in incognito/private mode
- Clear browser cookies
- Verify JavaScript is not blocked

## Next Steps

After successful installation:
1. Read [CUSTOMIZATION.md](CUSTOMIZATION.md) for styling changes
2. Create your first blog post
3. Add gadgets/widgets as needed
4. Configure comments settings
5. Set up Google Analytics (optional)
6. Submit sitemap to Google Search Console

## Getting Help

If you encounter issues:
1. Check the [Troubleshooting section](#common-installation-issues) above
2. Review the main [README.md](README.md)
3. Search existing [GitHub Issues](https://github.com/rstechshan/Adult/issues)
4. Open a new issue with detailed description

## Rollback Instructions

If you need to revert to your old theme:
1. Go to **Theme** in Blogger
2. Click **Dropdown arrow** (⋮) > **Backup/Restore**
3. Click **Choose File** and select your backup XML
4. Click **Upload**
5. Confirm the restoration

---

**Congratulations!** 🎉 Your Shanaka Technic theme is now installed and configured.

Next: [Customize Your Theme →](CUSTOMIZATION.md)
