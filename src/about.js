function loadAbout() {
  const content = document.getElementById('content');
  content.innerHTML = '';

  const headline = document.createElement('h1');
  headline.textContent = 'About Us';

  const copy = document.createElement('p');
  copy.textContent = 'The Odin Restaurant has been a cornerstone of the community since 2013. We pride ourselves on our commitment to quality, sourcing the freshest local ingredients to create unforgettable culinary experiences. Our passion for food is matched only by our dedication to providing exceptional service in a warm and inviting atmosphere.';

  content.appendChild(headline);
  content.appendChild(copy);
}

export { loadAbout };
