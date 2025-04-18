let themeToggle = document.querySelector('.themeToggle');
const currentTheme = document.body.className;

const toggle = () => {
    if (currentTheme === 'light') {
        document.documentElement.body.className = 'light';
    } else {
        document.body.className = 'light';
    }
}