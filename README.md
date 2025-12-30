# Venkatesh Periyathambi - CV Website

A modern, responsive CV/portfolio website with dark/light mode toggle, hosted on GitHub Pages.

## 🚀 Features

- ✅ **Fully Responsive Design** - Works perfectly on desktop, tablet, and mobile
- 🌙 **Dark/Light Mode Toggle** - Persists user preference with localStorage
- ⚡ **Fast & Lightweight** - Pure HTML, CSS, and JavaScript (no frameworks)
- 📱 **Mobile Navigation** - Animated hamburger menu for small screens
- 🎯 **Smooth Scrolling** - Elegant navigation between sections
- ♿ **Accessibility First** - ARIA labels, semantic HTML, keyboard navigation
- 🔍 **SEO Optimized** - Meta tags, proper heading hierarchy
- 🖨️ **Print-Friendly** - Clean PDF export from browser
- 🚀 **Free Hosting** - GitHub Pages with automatic deployment

## 📁 Project Structure

```
your-repo/
├── index.html      # Main HTML file with all content
├── styles.css      # Responsive styling with theme variables
├── script.js       # JavaScript for interactivity
├── README.md       # This file
└── .gitignore      # Git ignore file
```

## 🛠️ Setup & Deployment

### Option 1: Quick Setup on GitHub Pages

#### Step 1: Create GitHub Repository
1. Go to [github.com/new](https://github.com/new)
2. **Important:** Name repository `<your-username>.github.io`
   - Example: `venkatesh.github.io`
3. Choose "Public" visibility
4. Click "Create repository"

#### Step 2: Upload Files
1. In your repository, click "Add file" → "Upload files"
2. Drag and drop these files:
   - `index.html`
   - `styles.css`
   - `script.js`
3. Click "Commit changes"

#### Step 3: Enable GitHub Pages (may already be enabled)
1. Go to repository **Settings** → **Pages**
2. Under "Source", select `main` branch and `/root` folder
3. Click "Save"
4. Your site will be live at `https://<your-username>.github.io`

**That's it!** Your website is now live. 🎉

---

### Option 2: Local Development + Git Push

#### Step 1: Clone Repository
```bash
git clone https://github.com/your-username/your-username.github.io.git
cd your-username.github.io
```

#### Step 2: Add Files
Copy these files to your local repository:
- `index.html`
- `styles.css`
- `script.js`

#### Step 3: Push to GitHub
```bash
git add .
git commit -m "Add CV website"
git push origin main
```

Your site is now live!

---

## 🎨 Customization

### Update Personal Information
Edit `index.html` and update:

```html
<h1 class="hero-title">Your Name</h1>
<p class="hero-subtitle">Your Title</p>
<p class="hero-description">Your tagline...</p>
```

### Update Contact Links
Search for email, LinkedIn, and GitHub URLs:

```html
<a href="mailto:your.email@example.com">...</a>
<a href="https://linkedin.com/in/your-profile">...</a>
<a href="https://github.com/your-username">...</a>
```

### Add Profile Photo
1. Save your image as `profile.jpg` in repository
2. Replace avatar placeholder in `index.html`:
```html
<div class="avatar-placeholder">
    <img src="profile.jpg" alt="Profile Photo">
</div>
```

### Customize Colors
Edit CSS variables in `styles.css`:

```css
:root {
    --color-primary: #0f766e;        /* Main brand color */
    --color-primary-light: #14b8a6;  /* Hover state */
    --color-accent: #f59e0b;         /* Accent color */
}
```

### Update Experience & Skills
- Edit the experience section in `index.html` with your roles
- Update the skills grid with your competencies
- Add/remove education entries as needed

---

## 🌐 Using a Custom Domain (Optional)

### Step 1: Register Domain
Purchase a domain from services like:
- GoDaddy
- Namecheap
- Google Domains

### Step 2: Configure GitHub
1. Go to repository **Settings** → **Pages**
2. Under "Custom domain", enter `yourdomain.com`
3. Click "Save"

### Step 3: Configure DNS
Point your domain's DNS records to GitHub:

**For `yourdomain.com` (Apex Domain):**
```
Type: A
Name: @
Value: 185.199.108.153
```

Add all 4 A records:
- `185.199.108.153`
- `185.199.109.153`
- `185.199.110.153`
- `185.199.111.153`

**For `www.yourdomain.com`:**
```
Type: CNAME
Name: www
Value: yourdomain.github.io
```

GitHub will auto-enable HTTPS (requires 24 hours for DNS propagation).

---

## 📱 Browser Support

- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

---

## ♿ Accessibility Features

- **Semantic HTML5** - Proper heading hierarchy
- **ARIA Labels** - Screen reader support
- **Keyboard Navigation** - Full keyboard accessibility
- **Color Contrast** - WCAG AA compliant (4.5:1 ratio)
- **Focus Indicators** - Visible focus states
- **Alt Text** - Image descriptions

---

## 🔍 SEO Optimization

- Meta description for search results
- Open Graph tags for social sharing
- Structured heading hierarchy
- Mobile-friendly viewport configuration
- Fast load times (100+ Lighthouse score)

---

## 🚀 Performance Tips

### Optimize Images
- Compress images before adding
- Use WebP format when possible
- Lazy load images with `data-src` attribute

### Minify Assets (Optional)
- Minify CSS: Use [CSS Minifier](https://www.toptal.com/developers/cssminifier)
- Minify JS: Use [JS Minifier](https://www.toptal.com/developers/javascript-minifier)

### Enable Caching
GitHub Pages automatically handles caching.

---

## 🔐 Security

- ✅ HTTPS enabled by default
- ✅ No server-side code execution
- ✅ Static files only (no vulnerability risks)
- ✅ Regular GitHub security scanning

---

## 📊 Analytics (Optional)

Add Google Analytics to track visitors:

```html
<!-- Add to <head> section of index.html -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_ID');
</script>
```

Replace `GA_ID` with your Google Analytics ID.

---

## 🎯 Tips for Job Hunting

1. **Prominent Contact Info** - Make it easy for recruiters to reach you
2. **Quantified Results** - Use metrics (45% TCO reduction, 3x performance)
3. **Key Projects** - Highlight impactful work with specific outcomes
4. **Skills Section** - Match job descriptions for ATS parsing
5. **Mobile-Friendly** - Recruiters often browse on phones
6. **Fast Loading** - First impression matters
7. **Professional Design** - Shows attention to detail

---

## 🐛 Troubleshooting

### Site not showing after push?
- Wait 5-10 minutes for GitHub to deploy
- Go to **Settings** → **Pages** and check the source
- Clear browser cache (Ctrl+Shift+Delete)

### Custom domain not working?
- DNS changes can take 24-48 hours to propagate
- Check DNS records at [whatsmydns.net](https://www.whatsmydns.net)

### Styling looks wrong?
- Check browser DevTools Console for errors
- Clear CSS cache with Ctrl+F5
- Verify `styles.css` is in the root directory

### Dark mode not working?
- Check if JavaScript is enabled
- Clear localStorage: `localStorage.clear()`
- Check browser console for JS errors

---

## 📧 Support & Questions

For issues with GitHub Pages, see:
- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [GitHub Pages Troubleshooting](https://docs.github.com/en/pages/getting-started-with-github-pages/about-github-pages)

---

## 📄 License

This website template is open source. Feel free to use and modify for your own portfolio.

---

## 🎓 Resources Used

- **Fonts:** System fonts (no external CDN needed for speed)
- **Icons:** Font Awesome 6.4.0
- **Hosting:** GitHub Pages (Free)
- **Domain:** Optional (Custom domain setup included)

---

## ✨ Next Steps

1. ✅ Customize content with your information
2. ✅ Upload to GitHub Pages
3. ✅ Share with recruiters and connections
4. ✅ Monitor traffic with Google Analytics
5. ✅ Update regularly with new achievements

---

**Happy coding! 🚀**

Built with ❤️ for Data & AI professionals
