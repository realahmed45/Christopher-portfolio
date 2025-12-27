# Christopher Sagehorn - Design Portfolio

A clean, modern, Apple-inspired portfolio website showcasing product design and UI/UX work. Built with HTML, CSS, and vanilla JavaScript for easy editing and maintenance.

## 🌐 Live Site

- **GitHub Pages**: [https://yourusername.github.io/portfolio](https://yourusername.github.io/portfolio)
- **Alternative**: Can also be hosted on Vercel, Netlify, or any static hosting service

## 📁 File Structure

```
christopher-portfolio/
├── index.html              # Homepage with all projects
├── css/
│   ├── style.css          # Main styles (homepage)
│   └── project.css        # Project page styles
├── js/
│   ├── main.js            # Homepage interactions
│   └── lightbox.js        # Image viewing functionality
├── projects/               # Individual project pages
│   ├── bishop-ranch.html
│   ├── website-banner.html
│   ├── logo-redesign.html
│   ├── filam-logo.html
│   └── social-media.html
├── images/                 # Your project images (add yours here)
│   └── [Add your images here]
└── README.md              # This file
```

## 🎨 Color Palette

The site uses a blue color scheme inspired by Christopher's LinkedIn profile:

- **Primary Blue**: `#0071E3` (main accent color)
- **Dark Blue**: `#004D99` (hover states)
- **Light Blue**: `#E8F4FF` (backgrounds)
- **Black**: `#1D1D1F` (text)
- **Gray**: Various shades for text and backgrounds

### Badge Colors:
- Project 1: Blue `#4A90E2`
- Project 2: Green `#10B981`
- Project 3: Teal `#14B8A6`
- Project 4: Purple `#8B5CF6`
- Project 5: Pink `#EC4899`

## 📝 How to Edit Content

### Editing the Homepage (`index.html`)

#### Update Your Name & Bio:
1. Open `index.html`
2. Find the hero section (around line 30)
3. Edit these sections:

```html
<h1 class="hero-title">Christopher Sagehorn</h1>
<p class="hero-subtitle">Product Design & UI/UX Design Student at UC Davis</p>
<p class="hero-description">Your custom description here...</p>
```

#### Update Contact Links:
Find the contact section (around line 150) and update:

```html
<a href="https://www.linkedin.com/in/your-profile/" target="_blank">Connect on LinkedIn</a>
<a href="mailto:your-email@example.com">Email Me</a>
```

### Editing Project Pages

Each project page follows the same structure. To edit a project:

1. Open the project file (e.g., `projects/bishop-ranch.html`)
2. Update these sections:

#### Project Title & Description:
```html
<h1 class="project-page-title">Your Project Title</h1>
<p class="project-page-subtitle">Your project description...</p>
```

#### Project Meta Information:
```html
<div class="meta-item">
    <span class="meta-label">Client</span>
    <span class="meta-value">Client Name</span>
</div>
```

#### Challenge Section:
```html
<h2 class="project-section-title">The Challenge</h2>
<p class="project-text">Describe the problem you were solving...</p>
```

#### Solution Section:
```html
<h2 class="project-section-title">The Solution</h2>
<p class="project-text">Explain how you solved it...</p>
```

#### Deliverables:
```html
<div class="deliverable-item">
    <div class="deliverable-icon">✓</div>
    <p class="deliverable-text">What you delivered</p>
</div>
```

## 🖼️ Adding Images

### Step 1: Prepare Your Images
- Save images in the `images/` folder
- Use descriptive names: `bishop-ranch-layout-1.jpg`
- Recommended formats: JPG for photos, PNG for graphics
- Optimize images for web (under 500KB each)

### Step 2: Replace Image Placeholders

Find this placeholder in project pages:

```html
<div class="image-placeholder">
    <p class="placeholder-text">Project graphics will be added here</p>
</div>
```

Replace with:

```html
<img src="../images/your-image-name.jpg" 
     alt="Description of image" 
     class="project-image">
```

### Step 3: Add Multiple Images

For multiple images in a grid:

```html
<div class="image-grid">
    <img src="../images/image-1.jpg" alt="Description" class="project-image">
    <img src="../images/image-2.jpg" alt="Description" class="project-image">
    <img src="../images/image-3.jpg" alt="Description" class="project-image">
</div>
```

### Lightbox Feature
Images with class `project-image` automatically open in a lightbox when clicked. No additional code needed!

## ➕ Adding a New Project

### Step 1: Create a New HTML File

1. Copy an existing project file (e.g., `bishop-ranch.html`)
2. Rename it (e.g., `new-project.html`)
3. Update all content as described in "Editing Project Pages"

### Step 2: Add to Homepage

Open `index.html` and add a new project card:

```html
<div class="project-card" data-project="6">
    <div class="project-number">
        <span class="number-badge blue">6</span>
    </div>
    <div class="project-info">
        <div class="project-meta">
            <span class="project-tag">Your Tag</span>
            <span class="project-date">Timeline</span>
        </div>
        <h3 class="project-title">Project Title</h3>
        <p class="project-org">Client Name</p>
        <p class="project-excerpt">Brief description...</p>
        <a href="projects/new-project.html" class="project-link">View project →</a>
    </div>
</div>
```

### Step 3: Update Stats

Update the homepage stats (around line 40):

```html
<span class="stat-number">6</span>  <!-- Change from 5 to 6 -->
<span class="stat-label">Projects</span>
```

## 🎨 Customizing Colors

To change colors, edit `css/style.css` at the top:

```css
:root {
    --primary-blue: #0071E3;     /* Your main color */
    --dark-blue: #004D99;        /* Darker version */
    --light-blue: #E8F4FF;       /* Light background */
    
    /* Project badge colors */
    --badge-blue: #4A90E2;
    --badge-green: #10B981;
    /* ... add more as needed */
}
```

## 🚀 Deployment Guide

### Option 1: GitHub Pages (Recommended)

1. Create a GitHub account if you don't have one
2. Create a new repository named `portfolio` (or any name)
3. Upload all files to the repository
4. Go to Settings → Pages
5. Select branch: `main`
6. Select folder: `/ (root)`
7. Click Save
8. Your site will be live at `https://yourusername.github.io/portfolio`

### Option 2: Vercel

1. Go to [vercel.com](https://vercel.com)
2. Sign in with GitHub
3. Click "New Project"
4. Import your repository
5. Click "Deploy"
6. Done! Your site is live

### Option 3: Netlify

1. Go to [netlify.com](https://netlify.com)
2. Drag and drop your entire folder
3. Done! Your site is live

## 🔧 Common Customizations

### Changing Fonts

The site uses:
- **Playfair Display** for headings (elegant serif)
- **Inter** for body text (clean sans-serif)

To change fonts, update the Google Fonts link in HTML files:

```html
<link href="https://fonts.googleapis.com/css2?family=YourFont&display=swap" rel="stylesheet">
```

Then update CSS:

```css
--font-serif: 'YourFont', serif;
--font-sans: 'YourFont', sans-serif;
```

### Adjusting Spacing

Edit these variables in `css/style.css`:

```css
--spacing-sm: 1rem;    /* Small spacing */
--spacing-md: 2rem;    /* Medium spacing */
--spacing-lg: 4rem;    /* Large spacing */
--spacing-xl: 6rem;    /* Extra large spacing */
```

### Changing Container Width

```css
--container-width: 1200px;  /* Max width of content */
```

## 📱 Mobile Optimization

The site is fully responsive and optimized for:
- 📱 Mobile phones (320px+)
- 📱 Tablets (768px+)
- 💻 Laptops (1024px+)
- 🖥️ Desktops (1440px+)

No additional work needed - it's already responsive!

## ✅ Best Practices

### Images
- Keep files under 500KB
- Use JPG for photos, PNG for graphics
- Use descriptive filenames
- Always add alt text for accessibility

### Text
- Keep project descriptions concise (2-3 paragraphs)
- Use clear, straightforward language
- Proofread everything before publishing

### Updates
- Test on mobile after making changes
- Check all links work
- View in different browsers (Chrome, Safari, Firefox)

## 🆘 Troubleshooting

### Images Not Showing
- Check file path is correct (use `../images/` from project pages)
- Verify image file exists in the `images/` folder
- Check filename spelling and capitalization

### CSS Not Loading
- Clear browser cache (Ctrl+Shift+R or Cmd+Shift+R)
- Check CSS file paths are correct
- Verify CSS files exist in `css/` folder

### Broken Links
- Use relative paths: `projects/project-name.html` not `/projects/`
- Check spelling of filenames
- Ensure all linked files exist

## 📞 Need Help?

If you need assistance:
1. Double-check this README
2. Look at existing project pages as examples
3. Test changes locally before deploying
4. Contact your developer for major changes

## 📄 License

This portfolio is custom-built for Christopher Sagehorn. Feel free to customize it to your needs!

---

**Built with ❤️ for Christopher Sagehorn**  
*Product Design & UI/UX Design Student, UC Davis*
