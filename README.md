# Rahul Jha - Portfolio Website

A clean, minimalistic portfolio website showcasing software engineering experience and AI/ML projects.

## 🚀 Features

- **Responsive Design**: Optimized for all devices and screen sizes
- **Modern UI**: Clean, minimalistic design perfect for professional portfolios
- **Fast Loading**: Optimized performance with minimal dependencies
- **SEO Optimized**: Proper meta tags and semantic HTML
- **Accessibility**: WCAG compliant with screen reader support
- **Print Friendly**: Optimized for PDF generation

## 📋 Sections

1. **Hero Section** - Introduction and social links
2. **About** - Personal statement and technical skills
3. **Experience** - Work history with timeline layout
4. **Projects** - Academic and personal projects showcase
5. **Education** - Academic background and achievements
6. **Honors & Awards** - Competition wins and recognitions
7. **Contact** - Professional contact information

## 🛠️ Technologies Used

- **HTML5** - Semantic markup
- **CSS3** - Modern styling with CSS Grid and Flexbox
- **JavaScript (ES6+)** - Interactive features and animations
- **Font Awesome** - Icons
- **Google Fonts** - Typography (Inter font family)

## 📁 Project Structure

```
portfolio/
├── index.html          # Main HTML file
├── styles.css          # CSS styles
├── script.js           # JavaScript functionality
└── README.md           # Project documentation
```

## 🚀 Deployment to GitHub Pages

### Method 1: Automatic Deployment (Recommended)

1. **Push to GitHub Repository**
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio commit"
   git branch -M main
   git remote add origin https://github.com/yourusername/your-repo-name.git
   git push -u origin main
   ```

2. **Enable GitHub Pages**
   - Go to your repository on GitHub
   - Navigate to **Settings** → **Pages**
   - Under **Source**, select **Deploy from a branch**
   - Choose **main** branch and **/(root)** folder
   - Click **Save**

3. **Your site will be available at**: `https://yourusername.github.io/your-repo-name`

### Method 2: Using GitHub Actions (Advanced)

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v2
    
    - name: Deploy to GitHub Pages
      uses: peaceiris/actions-gh-pages@v3
      with:
        github_token: ${{ secrets.GITHUB_TOKEN }}
        publish_dir: ./
```

## 🎨 Customization

### Colors
Edit the CSS custom properties in `styles.css`:

```css
:root {
    --primary-color: #2563eb;      /* Main brand color */
    --primary-dark: #1d4ed8;       /* Darker shade */
    --secondary-color: #64748b;    /* Secondary text */
    --accent-color: #f59e0b;       /* Accent color */
    /* ... other variables */
}
```

### Content
- Update personal information in `index.html`
- Modify project descriptions and achievements
- Add or remove sections as needed

### Styling
- Modify `styles.css` for layout changes
- Add custom animations in `script.js`
- Update fonts by changing the Google Fonts import

## 📱 Responsive Breakpoints

- **Desktop**: 1200px and above
- **Tablet**: 768px - 1199px
- **Mobile**: Below 768px
- **Small Mobile**: Below 480px

## 🔧 Performance Optimizations

- **Minimal Dependencies**: Only essential external resources
- **Optimized Images**: WebP format with fallbacks
- **Lazy Loading**: Images load as needed
- **Debounced Events**: Smooth scrolling performance
- **CSS Grid/Flexbox**: Modern layout techniques

## ♿ Accessibility Features

- **Semantic HTML**: Proper heading hierarchy
- **ARIA Labels**: Screen reader support
- **Keyboard Navigation**: Full keyboard accessibility
- **Skip Links**: Quick navigation for assistive technology
- **Color Contrast**: WCAG AA compliant

## 📄 Print Styles

The website includes optimized print styles for PDF generation:
- Removes navigation and interactive elements
- Optimizes layout for paper format
- Maintains readability and structure

## 🔍 SEO Features

- **Meta Tags**: Proper title, description, and keywords
- **Open Graph**: Social media sharing optimization
- **Structured Data**: Schema markup for better search results
- **Semantic HTML**: Search engine friendly markup

## 📞 Contact Information

- **Email**: jharahul968@gmail.com
- **LinkedIn**: [jharahul968](https://www.linkedin.com/in/jharahul968/)
- **GitHub**: [jharahul968](https://github.com/jharahul968)

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Feel free to fork this project and customize it for your own portfolio. If you find any bugs or have suggestions, please open an issue or submit a pull request.

---

**Built with ❤️** 