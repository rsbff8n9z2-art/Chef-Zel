# Chef Zel - Premium Culinary Experience

## 📋 Project Overview

**Chef Zel** is a modern, responsive website for a premium culinary brand built with **vanilla HTML, CSS, and JavaScript**. It's optimized for all devices and ready for immediate deployment.

### 🏗️ Technology Stack
- **HTML5** - Semantic markup
- **CSS3** - Modern styling with CSS Variables and Flexbox/Grid
- **JavaScript (ES6+)** - Interactive features and smooth scrolling
- **Responsive Design** - Mobile-first approach

**Deployment Platform:** GitHub Pages (perfect for static sites)

---

## 📁 Project Structure

```
Chef-Zel/
├── index.html                 # Main homepage
├── README.md                  # This file
├── .gitignore                 # Git ignore rules
├── assets/
│   ├── css/
│   │   ├── styles.css        # Main stylesheet
│   │   └── responsive.css    # Mobile responsive styles
│   ├── js/
│   │   └── main.js           # Interactive JavaScript
│   ├── images/               # Image assets (placeholder)
│   └── fonts/                # Custom fonts (optional)
└── docs/                      # Documentation
    └── DEPLOYMENT.md          # Deployment guide
```

---

## 🚀 Quick Start

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)
- Git installed on your machine
- A GitHub account

### Running Locally

1. **Clone the repository:**
   ```bash
   git clone https://github.com/rsbff8n9z2-art/Chef-Zel.git
   cd Chef-Zel
   ```

2. **Open in browser (Option A - Simple):**
   - Double-click `index.html` to open directly in your browser
   - Or right-click → "Open with" → Select your browser

3. **Using a Local Server (Option B - Recommended):**
   ```bash
   # Using Python 3
   python -m http.server 8000
   
   # Or using Python 2
   python -m SimpleHTTPServer 8000
   
   # Or using Node.js (if installed)
   npx http-server
   ```
   Then open: `http://localhost:8000`

---

## ✨ Features

✅ **Fully Responsive** - Looks great on desktop, tablet, and mobile devices  
✅ **No Dependencies** - Pure HTML, CSS, and JavaScript (no frameworks)  
✅ **Fast Loading** - Minimal file sizes, optimized performance  
✅ **Smooth Animations** - Professional scroll effects and transitions  
✅ **Mobile Menu** - Hamburger menu for mobile devices  
✅ **Contact Form** - Client-side validation ready for integration  
✅ **SEO Optimized** - Meta tags and semantic HTML  
✅ **Accessibility** - WCAG compliant with keyboard navigation  
✅ **Dark Mode Support** - Prefers-color-scheme media query  
✅ **Production Ready** - Minified and optimized assets  

---

## 📱 Sections

### 1. **Navigation Bar**
- Sticky header with smooth scrolling
- Mobile hamburger menu
- Active link indicator

### 2. **Hero Section**
- Eye-catching gradient background
- Call-to-action button
- Mobile optimized

### 3. **About Section**
- Brand story and credentials
- Light background for contrast

### 4. **Recipes Section**
- Responsive grid layout
- Cards with hover animations
- Easy to customize

### 5. **Services Section**
- Three core service offerings
- Icon-ready design
- Hover effects

### 6. **Contact Section**
- Professional contact form
- Form validation
- Ready for email integration

### 7. **Footer**
- Social media links
- Copyright information
- Dark theme

---

## 🛠️ Customization Guide

### Change Colors
Edit `/assets/css/styles.css` - Update CSS variables:
```css
:root {
    --primary-color: #d4714d;      /* Main accent color */
    --secondary-color: #2c3e50;    /* Dark color */
    --accent-color: #f39c12;       /* Highlight color */
}
```

### Add Images
1. Add image files to `/assets/images/`
2. Update `index.html` img src attributes:
   ```html
   <img src="assets/images/your-image.jpg" alt="Description">
   ```

### Update Content
Edit `index.html` directly:
- Change recipe names, descriptions
- Update service offerings
- Modify contact form fields

### Add Social Media Links
Update footer in `index.html`:
```html
<a href="https://facebook.com/yourpage" class="social-link">Facebook</a>
```

---

## 📤 Deployment to GitHub Pages

### Step 1: Prepare Your Repository
```bash
# Initialize git (if not already done)
git init

# Add all files
git add .

# Commit changes
git commit -m "Initial commit: Chef Zel website"
```

### Step 2: Push to GitHub
```bash
# Add remote origin (replace with your GitHub username)
git remote add origin https://github.com/rsbff8n9z2-art/Chef-Zel.git

# Push to main branch
git branch -M main
git push -u origin main
```

### Step 3: Enable GitHub Pages
1. Go to your repository on GitHub
2. Click **Settings** → **Pages**
3. Under "Source", select **main** branch
4. Select **/root** folder
5. Click **Save**

### Step 4: Access Your Site
Your website will be live at:
```
https://rsbff8n9z2-art.github.io/Chef-Zel/
```

**Note:** It may take 1-2 minutes for changes to appear online.

---

## 🔗 Custom Domain (Optional)

1. In **Settings** → **Pages** → Add your custom domain
2. Update DNS records at your domain provider:
   - Add CNAME record pointing to `rsbff8n9z2-art.github.io`
   - Or add A records (see GitHub docs)
3. Verify and enable HTTPS

---

## 📝 Form Integration

The contact form validates client-side. To send emails, integrate with:

- **Formspree** - Easy 3-step setup (recommended)
- **EmailJS** - JavaScript library
- **Basin** - Free form backend
- **Getform** - Professional option

Example with Formspree:
```html
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
  <!-- form fields -->
</form>
```

---

## 🔒 Security Checklist

✅ No API keys in code  
✅ No hardcoded secrets  
✅ No personal information  
✅ Form validation implemented  
✅ No external tracking (optional: add analytics separately)  

---

## ⚡ Performance Tips

- Images are optimized (replace placeholder images with compressed versions)
- CSS is minified and organized
- JavaScript is lightweight
- Uses CSS Grid/Flexbox (hardware accelerated)
- Minimal HTTP requests

**Lighthouse Score Target:** 90+ on all metrics

---

## 🐛 Troubleshooting

### Site not loading from GitHub Pages?
- Wait 1-2 minutes after pushing
- Clear browser cache (Ctrl+Shift+Delete)
- Check repository is public
- Verify branch is set to `main`

### Images not showing?
- Check image paths are relative: `assets/images/...`
- Ensure file names match exactly (case-sensitive)
- Verify images are in the correct folder

### Mobile menu not working?
- Check browser console for JavaScript errors
- Ensure `main.js` is linked in `index.html`
- Try a different browser

---

## 📊 Browser Compatibility

| Browser | Version | Support |
|---------|---------|---------|
| Chrome | 90+ | ✅ Full |
| Firefox | 88+ | ✅ Full |
| Safari | 14+ | ✅ Full |
| Edge | 90+ | ✅ Full |
| IE 11 | - | ⚠️ Limited |

---

## 📄 License

This project is open source and available for personal and commercial use.

---

## 👤 Author

**Chef Zel**  
Premium Culinary Experience  
[GitHub](https://github.com/rsbff8n9z2-art)

---

## 📞 Support & Next Steps

1. **Customize Content** - Update recipe details, services
2. **Add Your Images** - Replace placeholder images
3. **Connect Email** - Integrate form with Formspree/EmailJS
4. **Add Analytics** - (Optional) Google Analytics
5. **SEO Optimization** - Update meta descriptions
6. **Mobile Testing** - Test on real devices

---

## 🎯 Future Enhancements

- Blog section with recipe posts
- Recipe search and filtering
- Image gallery with lightbox
- Testimonials section
- Newsletter signup
- Online booking system
- Payment integration
- CMS integration (Contentful, Sanity)

---

**Last Updated:** June 2026  
**Status:** ✅ Production Ready
