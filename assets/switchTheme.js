const localTheme = localStorage.getItem('isNightTheme') === 'true';

document.documentElement.setAttribute('data-theme', localTheme);
document.getElementById('theme-toggle').checked = localTheme;

function switchTheme() {
  const toggleIsChecked = document.getElementById('theme-toggle').checked;
  document.documentElement.setAttribute('data-theme', toggleIsChecked);
  localStorage.setItem('isNightTheme', toggleIsChecked);
}
