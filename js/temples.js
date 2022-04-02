// Fetch data from the JSON file
fetch('./js/temples.json').then(function (response) {
    return response.json();
}).then(function (jsonObject) {
    const temples = jsonObject['temples'];
    temples.forEach(displayTemples);
});


function displayTemples(temple) {
    // Create elements to add to the document
    let card = document.createElement('div');
    let name = document.createElement('h3');
    let image = document.createElement('img');
    let address = document.createElement('p');
    let phone = document.createElement('p');
    let announced = document.createElement('p');
    let dedicated = document.createElement('p');
    let like = document.createElement('img');

    // Add address, phone, and website to the card
    name.textContent = temple.name;
    address.textContent = temple.address;
    address.setAttribute('class', 'address-text');
    phone.textContent = `Telephone: ${temple.telephone}`;
    announced.textContent = `Date of announcement: ${temple.announced}`;
    dedicated.textContent = `Date it was dedicated: ${temple.dedicated}`;

    // Build the image attributes by using the setAttribute method for the src, alt, and loading attribute values.
    image.setAttribute('src', temple.image);
    image.setAttribute('alt', `image of ${temple.name}`);
    image.setAttribute('loading', 'lazy');
    image.setAttribute('class', 'temple-img');
    
    if (localStorage.getItem(`${temple.name}`) === 'liked') {
        like.setAttribute('src', './images/heart-full.png')
        } else {
            like.setAttribute('src', './images/heart.ico');
        }
    
    like.setAttribute('alt', `Like button for ${temple.name}`);
    like.setAttribute('class', 'like');
    like.setAttribute('id', `${temple.name}`);
    like.setAttribute('onclick', `like('${temple.name}')`);

    // Add/append to the section(card)
    card.setAttribute('class', "temple");
    card.appendChild(name);
    card.appendChild(image);
    card.appendChild(address);
    card.appendChild(phone);
    card.appendChild(announced);
    card.appendChild(dedicated);
    card.appendChild(like);

    // Add/append the existing HTML div with the cards class with the section(card)
    document.querySelector('section.temples').appendChild(card);
}

window.like = function (id) {
    localStorage.setItem(id, 'liked');
    let likeButton = document.getElementById(id);
    if (likeButton.getAttribute('src') === './images/heart-full.png') {
        likeButton.setAttribute('src', './images/heart.ico');
        localStorage.setItem(id, '');
    } else {
        likeButton.setAttribute('src', './images/heart-full.png');
    }
}


import * as main from './main.js';

main.setDate();
main.navBar();