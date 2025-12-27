# Quick Reference Guide
## Christopher Sagehorn Portfolio

---

## 🎯 Most Common Tasks

### 1. Add Project Images

**Location:** Any project page (`projects/*.html`)

**Find this:**
```html
<div class="image-placeholder">
```

**Replace with:**
```html
<img src="../images/your-image.jpg" alt="Description" class="project-image">
```

---

### 2. Update Contact Info

**File:** `index.html`  
**Line:** ~155

```html
<!-- Update these links -->
<a href="https://www.linkedin.com/in/YOUR-PROFILE/">Connect on LinkedIn</a>
<a href="mailto:YOUR-EMAIL@example.com">Email Me</a>
```

---

### 3. Change Colors

**File:** `css/style.css`  
**Line:** ~15-20

```css
:root {
    --primary-blue: #0071E3;    /* Main color */
    --dark-blue: #004D99;       /* Hover color */
    --light-blue: #E8F4FF;      /* Background */
}
```

---

### 4. Add a New Project

**Step 1:** Copy existing project file  
**Step 2:** Rename it  
**Step 3:** Update content  
**Step 4:** Add to homepage `index.html`:

```html
<div class="project-card" data-project="6">
    <div class="project-number">
        <span class="number-badge blue">6</span>
    </div>
    <div class="project-info">
        <div class="project-meta">
            <span class="project-tag">Tag</span>
            <span class="project-date">Date</span>
        </div>
        <h3 class="project-title">Title</h3>
        <p class="project-org">Client</p>
        <p class="project-excerpt">Description...</p>
        <a href="projects/new-project.html" class="project-link">View project →</a>
    </div>
</div>
```

**Step 5:** Update stats (change 5 to 6)

---

### 5. Edit Project Content

**Any project page:**

```html
<!-- Title -->
<h1 class="project-page-title">Your Title</h1>

<!-- Description -->
<p class="project-page-subtitle">Your description...</p>

<!-- Client -->
<span class="meta-value">Client Name</span>

<!-- Timeline -->
<span class="meta-value">Dates</span>

<!-- Challenge -->
<h2 class="project-section-title">The Challenge</h2>
<p class="project-text">Your text...</p>

<!-- Solution -->
<h2 class="project-section-title">The Solution</h2>
<p class="project-text">Your text...</p>
```

---

## 📁 File Locations

| What | Where |
|------|-------|
| Homepage | `index.html` |
| Main styles | `css/style.css` |
| Project styles | `css/project.css` |
| Project pages | `projects/*.html` |
| Images | `images/` (create this folder) |
| Instructions | `README.md` |
| Deployment | `DEPLOYMENT-GUIDE.md` |

---

## 🎨 Badge Colors

Use these colors for project badges:

```html
<span class="number-badge blue">1</span>     <!-- Blue #4A90E2 -->
<span class="number-badge green">2</span>    <!-- Green #10B981 -->
<span class="number-badge teal">3</span>     <!-- Teal #14B8A6 -->
<span class="number-badge purple">4</span>   <!-- Purple #8B5CF6 -->
<span class="number-badge pink">5</span>     <!-- Pink #EC4899 -->
```

---

## 🔗 Important Links

- **GitHub:** https://github.com
- **GitHub Pages Docs:** https://pages.github.com
- **Font Awesome (icons):** https://fontawesome.com
- **Google Fonts:** https://fonts.google.com

---

## ⚡ Quick Deploy to GitHub Pages

```bash
1. Create GitHub account
2. Create new repository (name: portfolio)
3. Upload all files
4. Settings → Pages
5. Source: main branch, / (root)
6. Save
7. Wait 2-3 minutes
8. Visit: https://USERNAME.github.io/portfolio
```

---

## 🐛 Common Issues & Fixes

| Problem | Solution |
|---------|----------|
| Images not showing | Check path: `../images/` and filename |
| Colors not changing | Edit `css/style.css`, clear cache |
| Links broken | Check spelling, use relative paths |
| Site not live | Wait 5 min, check GitHub Pages settings |
| Mobile looks bad | Should work automatically, clear cache |

---

## 📋 Pre-Launch Checklist

```
□ All placeholder text replaced
□ All images added
□ Links tested (click everything)
□ Mobile view checked
□ Email/LinkedIn updated
□ Typos checked
□ Tested in Chrome, Safari, Firefox
```

---

## 🎓 Future Updates

**When adding coursework:**

1. Prepare materials (images, descriptions)
2. Copy existing project page
3. Update all content
4. Add to homepage
5. Test everything
6. Upload to GitHub

**Courses to add:**
- DES 050 - 3D Design
- DES 111 - Coding for Designers
- DES 198 - AI and Design
- DES 112 - UI/UX Principles

---

## 💡 Tips

- **Test locally first** before uploading to GitHub
- **Save often** when editing
- **Keep backups** of your original files
- **Use descriptive names** for images
- **Optimize images** (under 500KB each)
- **Clear cache** to see changes (Ctrl+Shift+R)

---

**Need more help?** Check `README.md` for detailed instructions!
