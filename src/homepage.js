
import odinLogo from './odin-logo.svg';

function loadHomepage() {
  const content = document.getElementById('content');

  // Clear existing content
  content.innerHTML = '';

  const headline = document.createElement('h1');
  headline.textContent = 'Welcome to The Odin Restaurant';

  const heroImage = document.createElement('img');
  heroImage.src = odinLogo;
  heroImage.alt = 'The Odin Project Logo';
  heroImage.style.width = '50%';

  const copy = document.createElement('p');
  copy.textContent = 'Serving the best food since 2013. Our mission is to provide a world-class dining experience with a focus on quality ingredients and exceptional service.';

  content.appendChild(headline);
  content.appendChild(heroImage);
  content.appendChild(copy);
}

export { loadHomepage };
