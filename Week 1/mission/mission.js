const themeSelector = document.querySelector('#themeSelector');
const body = document.body;
const logo = document.querySelector('#logo');

function changeTheme() {
  const selected = themeSelector.value;
  if (selected === 'dark') {
    body.classList.add('dark');
    logo.src = 'byui-logo_white.png';
  } else {
    body.classList.remove('dark');
    logo.src = 'byui-logo_blue.webp';
  }
}

themeSelector.addEventListener('change', changeTheme);
