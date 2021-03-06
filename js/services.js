import * as main from './main.js';

main.setDate();
main.navBar();

window.specializedServices = function () {
    let list = document.querySelector('.specialized');
    let title = document.querySelector('#services-title');
    let img = document.querySelector('#services');
    img.src = './images/services.jpg';
    img.style.display = 'block';
    title.innerHTML = 'Specialized Services';
    let form = document.querySelector('#services-form');
    form.style.display = 'none';

    document.querySelectorAll('.rooms').forEach(function (e) {
        e.style.display = 'none';
    });

    let markup = `<li>
        <h3>Free access to changing rooms and bathroom facilities for temple patrons who have traveled far and need to change to and from church clothes</h3>
        </li>
        <li>
            <h3>A playroom and low-cost, short-term babysitting services for the children of patrons</h3>
        </li>
        <li>
            <h3>Long-term stay accommodations in kitchenette suites for full-time temple missionaries</h3>
        </li>
        <li>
            <h3>Temple history themed reception and sitting area</h3>
        </li>
        <li>
            <h3>A wedding reception hall that can be easily customized with a simple catering menu and kitchen access for food preparation and serving</h3>
        </li>
        <li>
            <h3>Family history consultation and family ordinance card service</h3>
        </li>
        <li>
            <h3>A family search center that supports family search and ordinance work</h3>
        </li>`
    list.innerHTML = markup;
};

window.receptionServices = function () {
    let list = document.querySelector('.specialized');
    let img = document.querySelector('#services');
    let title = document.querySelector('#services-title');
    title.innerHTML = 'Reception Services';
    img.src = 'images/reception.jpg';
    img.style.display = 'block';
    let form = document.querySelector('#services-form');
    form.style.display = 'none';

    document.querySelectorAll('.rooms').forEach(function (e) {
        e.style.display = 'none';
    });

    let markup = `<li>
        <h3>Six magnificent indoor and outdoor settings available for your ceremony and reception</h3>
        </li>
        <li>
            <h3>Pamper yourselves at two extraordinary on-site spas that specialize in wedding services</h3>
        </li>
        <li>
            <h3>Guests have access to a huge array of activities including archery, fishing, hiking, biking, and golf to fill out your wedding weekend</h3>
        </li>
        <li>
            <h3>Multiple outdoor ceremony sites include sweeping views of the stunning red rock formations, a creekside lawn, and a private garden</h3>
        </li>
        <li>
            <h3>A wedding reception hall that can be easily customized with a simple catering menu and kitchen access for food preparation and serving</h3>
        </li>
        <h3>Catering: In-house</h3>
        <h3>Price: $$ ??? $$$</h3>        `
    list.innerHTML = markup;
};

window.missionaryServices = function () {
    let list = document.querySelector('.specialized');
    let imgList = document.querySelector('.services-img');
    let img = document.querySelector('#services');
    img.style.display = 'none'; 
    let title = document.querySelector('#services-title');
    title.innerHTML = 'Full Time Temple <br> Missionary Services';
    
    if (document.querySelectorAll('.rooms').length > 0) {
        document.querySelectorAll('.rooms').forEach(function (e) {
            e.style.display = 'block';
        });
    } else {
        let single = document.createElement('img');
        single.src = 'images/rooms/single.jpg';
        single.className = 'rooms';

        let double = document.createElement('img');
        double.src = 'images/rooms/double.jpg';
        double.className = 'rooms';

        let king = document.createElement('img');
        king.src = 'images/rooms/king.jpg';
        king.className = 'rooms';

        imgList.style.flexDirection = 'column';

        imgList.appendChild(single);
        imgList.appendChild(double);
        imgList.appendChild(king);
    }
    


    

    let form = document.querySelector('#services-form');
    form.style.display = 'flex';

    let markup = `<li>
        <h3>Single Room: A comfortable bed for two, with own bath, cable tv, a desk, and a closet.</h3>
        </li>
        <li>
            <h3>Double Room: Double beds, fits four, with own bath, cable tv, two desks and a larger closet.</h3>
        </li>
        <li>
            <h3>King Room: A King orthopedic mattress for two, own bath with jacuzzi, larger closet, desk, and 55' LED TV.</h3>
        </li>`
    list.innerHTML = markup;
};

