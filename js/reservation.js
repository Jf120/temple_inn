let location = document.querySelector("#location");
let roomType = document.querySelector("#room-type");

location.addEventListener("change", function() {
    
    let img = document.querySelector("#destination");
    img.src = `images/temples/${location.value}.jpg`;

    console.log(location.value);
    console.log(roomType.value)
    if (location.value != "" && roomType.value != "") {
        document.querySelector("#price").innerHTML = 'false';
    }

});

roomType.addEventListener("change", function() {
    console.log(roomType);
    let room = document.querySelector("#roomType");
    room.innerHTML = `Room type: ${roomType.value}`;
    if (location.value != "" && roomType.value != "") {
        document.querySelector("#price").innerHTML = `Total: $${calcPrice().toFixed(2)}`;
    }
});

function calcPrice() {
    return Math.random(0.1, 1) * 100;
}


import * as main from './main.js';

main.setDate();
main.navBar();
