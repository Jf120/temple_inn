// set current year in footer
const currentDate = new Date();
document.querySelector('#year').textContent = currentDate.getFullYear();

const apiKey = "6d8bed17e78d94b0f60b75c0e90d68fa";
let slideIndex = 1;
let weatherIndex = 0
let citiesList = document.querySelectorAll(".container .mySlides img");
getWeather(weatherIndex);
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
    resetList();
    getWeather(weatherIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    
    slides[slideIndex-1].style.display = "block";
}

const list = document.querySelector(".ajax-section .cities");

function getWeather(n) {

    if (n > citiesList.length - 1) {weatherIndex = 0}
    if (n < 0) {weatherIndex = citiesList.length-1}

    console.log(weatherIndex);

    //ajax here
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${citiesList[weatherIndex].alt}&appid=${apiKey}&units=metric`;

    fetch(url)
    .then(response => response.json())
    .then(data => {
        const { main, name, sys, weather } = data;
        const icon = `https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/${
        weather[0]["icon"]
        }.svg`;

        const li = document.createElement("li");
        li.classList.add("city");
        const markup = `
        <h2 class="city-name" data-name="${name},${sys.country}">
            <span>${name}</span>
            <sup>${sys.country}</sup>
        </h2>
        <div class="city-temp">${Math.round(main.temp)}<sup>°C</sup></div>
        <figure>
            <img class="city-icon" src="${icon}" alt="${
        weather[0]["description"]
        }">
            <figcaption>${weather[0]["description"]}</figcaption>
        </figure>
        `;
        li.innerHTML = markup;
        list.appendChild(li);
    })
};

function resetList() {
    list.innerHTML = "";
};