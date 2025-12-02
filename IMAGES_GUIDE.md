# Images & Assets Guide

## 📁 Directory Structure

```
src/
└── assets/
    ├── images/
    │   ├── logo.png
    │   ├── hero.jpg
    │   ├── feature-icon.svg
    │   └── icons/
    │       ├── home.svg
    │       ├── about.svg
    │       └── contact.svg
    ├── fonts/
    │   ├── CustomFont.woff2
    │   └── CustomFont.ttf
    └── README.md (this file)

public/
└── images/
    └── (fallback public images, if needed)
```

---

## 🖼️ Method 1: Import Images (RECOMMENDED)

**Best for:** Production builds, optimized bundling, webpack optimization

### Step 1: Save your image
Place image in `src/assets/images/logo.png`

### Step 2: Import at the top of your component
```jsx
import logo from '../assets/images/logo.png';
```

### Step 3: Use in JSX
```jsx
<img 
  src={logo} 
  alt="Company logo" 
  style={{ width: '200px' }}
/>
```

### Complete Example
```jsx
import React from 'react';
import logo from '../assets/images/logo.png';
import heroBg from '../assets/images/hero.jpg';

function Home() {
  return (
    <div>
      <img src={logo} alt="Company logo" />
      <img src={heroBg} alt="Hero section" />
    </div>
  );
}
export default Home;
```

---

## 🖼️ Method 2: SVG as React Component

**Best for:** Icons, logos, scalable graphics

### Import as Component
```jsx
import { ReactComponent as HomeIcon } from '../assets/images/icons/home.svg';

function Navigation() {
  return (
    <div>
      <HomeIcon style={{ width: '24px', height: '24px' }} />
    </div>
  );
}
```

---

## 🖼️ Method 3: CSS Background Image

**Best for:** Hero sections, decorative backgrounds

### In CSS file
```css
.hero-section {
  background-image: url('../assets/images/hero.jpg');
  background-size: cover;
  background-position: center;
  height: 400px;
}
```

### Or in Component with Inline Styles
```jsx
import heroImg from '../assets/images/hero.jpg';

function Hero() {
  return (
    <div style={{
      backgroundImage: `url(${heroImg})`,
      backgroundSize: 'cover',
      height: '400px'
    }}>
      Content here
    </div>
  );
}
```

---

## 🖼️ Method 4: Relative Path in Public Folder

**Best for:** Images that change frequently, external content

### Save image in `public/images/my-image.png`

### Use directly
```jsx
<img src="/images/my-image.png" alt="Description" />
```

**Note:** This method bypasses webpack optimization, so use sparingly.

---

## 🎨 Image Optimization Tips

1. **Use appropriate formats:**
   - `PNG` - Transparency needed
   - `JPG` - Photos, complex images
   - `WebP` - Modern browsers, best compression
   - `SVG` - Icons, logos, scalable graphics

2. **Compress images:**
   - Use tools like [TinyPNG](https://tinypng.com/) or [ImageOptim](https://imageoptim.com/)
   - Reduce file sizes before adding to project

3. **Responsive images:**
   ```jsx
   <img 
     src={logo}
     alt="Logo"
     style={{
       maxWidth: '100%',
       height: 'auto'
     }}
   />
   ```

4. **Lazy loading:**
   ```jsx
   <img 
     src={largeImage}
     alt="Description"
     loading="lazy"
   />
   ```

---

## 🔤 Custom Fonts

### Step 1: Add fonts to `src/assets/fonts/`

### Step 2: Import in CSS or component
```css
@font-face {
  font-family: 'CustomFont';
  src: url('../assets/fonts/CustomFont.woff2') format('woff2');
}

body {
  font-family: 'CustomFont', sans-serif;
}
```

---

## 📝 Common Import Paths

From `src/pages/Home.js`:
```jsx
// Image in assets
import logo from '../assets/images/logo.png';

// Image in assets/icons
import homeIcon from '../assets/images/icons/home.svg';
```

From `src/components/Header.js`:
```jsx
// Image in assets
import logo from '../assets/images/logo.png';

// Image in assets/icons
import menuIcon from '../assets/images/icons/menu.svg';
```

From `src/components/subdir/Item.js`:
```jsx
// Image in assets (go up 3 levels)
import logo from '../../assets/images/logo.png';
```

---

## ✅ Best Practices

✓ Always use `import` for better optimization
✓ Store images in `src/assets/images/`
✓ Use descriptive alt text for accessibility
✓ Compress images before adding
✓ Use SVG for icons
✓ Responsive: Use `maxWidth: '100%'` for mobile compatibility
✓ Avoid using `public/` for project assets
