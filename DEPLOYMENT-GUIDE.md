# Portfolio Deployment Guide
## For Christopher Sagehorn

---

## 🚀 Quick Start - Deploy in 10 Minutes

Follow these steps to get your portfolio live on GitHub Pages (FREE hosting):

### Step 1: Get Your Files
1. Download the `christopher-portfolio` folder you received
2. Unzip it if it's in a ZIP file
3. You should see: `index.html`, `css/`, `js/`, `projects/`, `README.md`

### Step 2: Create GitHub Account
1. Go to [github.com](https://github.com)
2. Click "Sign up"
3. Choose a username (e.g., "christophersagehorn")
4. Complete the registration

### Step 3: Create a Repository
1. Once logged in, click the "+" in the top right
2. Select "New repository"
3. Name it: `portfolio` (or any name you like)
4. Make it **Public**
5. **Don't** check "Add a README file"
6. Click "Create repository"

### Step 4: Upload Your Files
1. On the repository page, click "uploading an existing file"
2. Drag ALL files and folders from your `christopher-portfolio` folder
3. This includes:
   - `index.html`
   - `css/` folder
   - `js/` folder
   - `projects/` folder
   - `README.md`
4. Add a commit message: "Initial portfolio upload"
5. Click "Commit changes"

### Step 5: Enable GitHub Pages
1. In your repository, click "Settings"
2. Scroll down and click "Pages" in the left sidebar
3. Under "Source", select branch: **main**
4. Keep folder as **/ (root)**
5. Click "Save"
6. Wait 2-3 minutes

### Step 6: Visit Your Live Site!
Your site will be live at:
```
https://YOUR-USERNAME.github.io/portfolio
```

For example, if your username is `christophersagehorn`:
```
https://christophersagehorn.github.io/portfolio
```

---

## 📸 Adding Your Project Graphics

You received placeholder sections in each project. Here's how to add your actual graphics:

### Prepare Your Images
1. Create an `images` folder in your portfolio directory
2. Add all your project graphics there
3. Name them clearly:
   - `bishop-ranch-1.jpg`
   - `bishop-ranch-2.jpg`
   - `csag-banner-before.jpg`
   - `csag-banner-after.jpg`
   - etc.

### Update Each Project Page

Open a project file (e.g., `projects/bishop-ranch.html`)

Find this section:
```html
<div class="image-placeholder">
    <p class="placeholder-text">Project graphics will be added here</p>
</div>
```

Replace with:
```html
<img src="../images/bishop-ranch-1.jpg" alt="Bishop Ranch Digital Billboard Layout 1" class="project-image">
```

For multiple images:
```html
<div class="image-grid">
    <img src="../images/bishop-ranch-1.jpg" alt="Layout variation 1" class="project-image">
    <img src="../images/bishop-ranch-2.jpg" alt="Layout variation 2" class="project-image">
    <img src="../images/bishop-ranch-3.jpg" alt="Final billboard design" class="project-image">
</div>
```

### Upload Images to GitHub
1. Go to your repository on GitHub
2. Click on the `images` folder (or create it if it doesn't exist)
3. Click "Add file" → "Upload files"
4. Drag your images
5. Commit changes

---

## 🔄 Updating Your Portfolio After This Quarter

When you complete your upcoming courses and have new work to add:

### Add a New Project

1. Copy an existing project file (e.g., `bishop-ranch.html`)
2. Rename it (e.g., `3d-design-project.html`)
3. Update all content:
   - Project title
   - Description
   - Client/context
   - Challenge section
   - Solution section
   - Deliverables
   - Tools used
   - Images

4. Add the project to your homepage (`index.html`)

Find the projects section and add:
```html
<div class="project-card" data-project="6">
    <div class="project-number">
        <span class="number-badge blue">6</span>
    </div>
    <div class="project-info">
        <div class="project-meta">
            <span class="project-tag">3D Design</span>
            <span class="project-date">Winter 2025</span>
        </div>
        <h3 class="project-title">Your New Project Title</h3>
        <p class="project-org">DES 050 - UC Davis</p>
        <p class="project-excerpt">Brief description of what you created...</p>
        <a href="projects/3d-design-project.html" class="project-link">View project →</a>
    </div>
</div>
```

5. Update the stats at the top:
```html
<span class="stat-number">6</span>  <!-- Change from 5 to 6 -->
```

---

## 🛠️ Common Updates

### Update Your LinkedIn Link
In `index.html`, find:
```html
<a href="https://www.linkedin.com/in/christopher-sagehorn-1b8bb12a7/" target="_blank">
```
Replace with your current LinkedIn URL if it changes.

### Update Your Email
In `index.html`, find:
```html
<a href="mailto:hello@christophersagehorn.com">Email Me</a>
```
Update with your preferred email address.

### Update Your About Section
In `index.html`, find the "Design Philosophy" section:
```html
<p class="about-text">I'm a Product Design and UI/UX Design student...</p>
```
Update this as you progress through your courses.

---

## 🎨 Color Customization

All colors are defined in one place: `css/style.css` at the very top.

To change the blue theme to another color:

1. Open `css/style.css`
2. Find these lines (around line 15-20):
```css
:root {
    --primary-blue: #0071E3;     /* Change this! */
    --dark-blue: #004D99;        /* And this! */
    --light-blue: #E8F4FF;       /* And this! */
}
```

3. Replace with your new colors:
```css
:root {
    --primary-blue: #FF6B35;     /* Example: Orange */
    --dark-blue: #CC5529;        
    --light-blue: #FFF4F0;       
}
```

Save the file and the entire site will update!

---

## 📱 Testing Your Changes

Before uploading changes to GitHub:

1. **Open `index.html` in your browser**
   - Right-click the file
   - Select "Open with" → Your web browser
   - Navigate through all pages
   - Check all links work
   - View on mobile (press F12, toggle device toolbar)

2. **Check common issues:**
   - All images load?
   - All links work?
   - Colors look good?
   - Text is readable?
   - Mobile version looks good?

---

## 🆘 Troubleshooting

### My site isn't loading on GitHub Pages
- Wait 3-5 minutes after enabling GitHub Pages
- Make sure `index.html` is in the root folder
- Check Settings → Pages is set to "main" branch and "/ (root)"

### Images aren't showing
- Check the path: should be `../images/filename.jpg` for project pages
- Verify image files are in the `images/` folder
- Check filename spelling (case-sensitive!)

### Changes aren't showing
- Clear your browser cache (Ctrl+Shift+R or Cmd+Shift+R)
- Wait a few minutes for GitHub to rebuild

### Layout looks broken
- Make sure you didn't delete any CSS files
- Check that all HTML tags are closed properly
- Look for typos in class names

---

## 📞 Next Steps for Hiring Again

When you're ready to add your new coursework:

1. Gather all new project materials:
   - Project descriptions
   - Images/graphics
   - Tools used
   - Client/context information

2. Decide on project structure:
   - Which projects to add?
   - What's the story for each?
   - What makes each project unique?

3. Contact your developer:
   - Share project materials
   - Discuss timeline
   - Review updates together

---

## ✅ Checklist: Before Going Live

- [ ] All project pages have content (no "lorem ipsum")
- [ ] All placeholder images are replaced with real graphics
- [ ] Email and LinkedIn links are correct
- [ ] All links between pages work
- [ ] Site looks good on mobile
- [ ] Proofread all text
- [ ] Test in different browsers
- [ ] Custom domain set up (if applicable)

---

## 🎓 Current Portfolio Status

**Included Projects:**
1. Bishop Ranch Digital Billboard
2. Website Banner Redesign (CSAG)
3. Logo Redesign (CSAG)
4. FilAm Teen Council Logo System
5. Un/Do Mindset Social Media Design

**Ready for Future Projects:**
- DES 050 - Three-Dimensional Design
- DES 111 - Coding for Designers
- DES 198 - AI and Design
- DES 112 - UI/UX Design Principles

---

**Questions?** Refer to the main `README.md` file for detailed instructions, or contact your developer for support.

Good luck with your applications! 🚀
