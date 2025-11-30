// Theme Toggle Functionality
const themeToggle = document.querySelector('.theme-toggle');
const themeIcon = document.querySelector('.theme-icon');
const html = document.documentElement;

// Check for saved theme preference or default to light mode
const currentTheme = localStorage.getItem('theme') || 'light';
html.setAttribute('data-theme', currentTheme);
updateThemeIcon(currentTheme);

// Toggle theme function
function toggleTheme() {
    const currentTheme = html.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    html.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateThemeIcon(newTheme);
}

// Update theme icon
function updateThemeIcon(theme) {
    if (theme === 'dark') {
        themeIcon.textContent = '🌙';
    } else {
        themeIcon.textContent = '☀';
    }
}

// Add click event listener
themeToggle.addEventListener('click', toggleTheme);

// Smooth scrolling for navigation links (if needed)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 20;
            document.querySelector('.main-content').scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Console welcome message
console.log(`
🚀 Welcome to Rahul Jha's Portfolio!
📧 Contact: jharahul968@gmail.com
🔗 GitHub: https://github.com/jharahul968
💼 LinkedIn: https://www.linkedin.com/in/jharahul968/
`);
