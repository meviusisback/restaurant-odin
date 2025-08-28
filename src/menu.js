function loadMenu() {
  const content = document.getElementById('content');
  content.innerHTML = '';

  const headline = document.createElement('h1');
  headline.textContent = 'Our Menu';

  const menuItem1 = document.createElement('div');
  menuItem1.classList.add('menu-item');
  const itemName1 = document.createElement('h2');
  itemName1.textContent = 'Classic Burger';
  const itemDesc1 = document.createElement('p');
  itemDesc1.textContent = 'A juicy beef patty with lettuce, tomato, onion, and our special sauce.';
  menuItem1.appendChild(itemName1);
  menuItem1.appendChild(itemDesc1);

  const menuItem2 = document.createElement('div');
  menuItem2.classList.add('menu-item');
  const itemName2 = document.createElement('h2');
  itemName2.textContent = 'Pasta Carbonara';
  const itemDesc2 = document.createElement('p');
  itemDesc2.textContent = 'Spaghetti with a creamy egg sauce, pancetta, and parmesan cheese.';
  menuItem2.appendChild(itemName2);
  menuItem2.appendChild(itemDesc2);
  
  const menuItem3 = document.createElement('div');
  menuItem3.classList.add('menu-item');
  const itemName3 = document.createElement('h2');
  itemName3.textContent = 'Margherita Pizza';
  const itemDesc3 = document.createElement('p');
  itemDesc3.textContent = 'Classic pizza with fresh mozzarella, tomatoes, and basil.';
  menuItem3.appendChild(itemName3);
  menuItem3.appendChild(itemDesc3);

  content.appendChild(headline);
  content.appendChild(menuItem1);
  content.appendChild(menuItem2);
  content.appendChild(menuItem3);
}

export { loadMenu };
