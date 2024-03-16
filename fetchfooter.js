var mainElement = document.querySelector('#main-content');

fetch('footer.html')
  .then(response => response.text())
  .then(html => mainElement.insertAdjacentHTML('afterend', html));