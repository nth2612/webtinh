var mainElement = document.querySelector('#main-content');

fetch('header.html')
  .then(response => response.text())
  .then(html => mainElement.insertAdjacentHTML('beforebegin', html));
