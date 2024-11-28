import React, { Component } from 'React'


                                         // MENUS + VISUAL

        const burgerMenu = document.getElementById('burger-menu');
        const navMenu = document.getElementById('nav-menu');
        const navPoints = document.getElementById('nav-points');
            const BlackLine = document.getElementById('black-line');
            const SecondBlackLine = document.getElementById('second-black-line');

        burgerMenu.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        navPoints.classList.toggle('active');
        burgerMenu.classList.toggle('active');
            BlackLine.classList.toggle('active');
            SecondBlackLine.classList.toggle('active');
        });

    const burgerCheckmark = document.getElementById ('burger-menu-catalogue');
    const dropdownContent = document.getElementById ('dropdown-content');
    const burgerCheckmarkS = document.getElementById ('burger-menu-catalogue-sorting');
    const dropdownSorting = document.getElementById ('dropdown-sorting');

    burgerCheckmark.addEventListener('click', () => {
burgerCheckmark.classList.toggle('active');
dropdownContent.classList.toggle('active');
});
    burgerCheckmarkS.addEventListener('click', () => {
burgerCheckmarkS.classList.toggle('active');
dropdownSorting.classList.toggle('active');
});


document.querySelector('.checkmark-image').addEventListener('click', function() {
const checkmark = document.querySelector('.check');
checkmark.style.transform = checkmark.style.transform === 'rotate(90deg)' ? 'rotate(0deg)' : 'rotate(90deg)';
});

document.getElementById('search-button').addEventListener('click', () => {
const query = document.getElementById('search-input').value.trim();
const resultsList = document.getElementById('results-list');



                                    // SEARCH SYSTEM 

// Очистити старі результати
resultsList.innerHTML = '';

if (query) {
    // Сюди можна додати реальний алгоритм пошуку
    const mockResults = [
        `Result for "${query}" - Item 1`,
        `Result for "${query}" - Item 2`,
        `Result for "${query}" - Item 3`
    ];

    mockResults.forEach(result => {
        const listItem = document.createElement('li');
        listItem.textContent = result;
        resultsList.appendChild(listItem);
    });
} else {
    const noResult = document.createElement('li');
    noResult.textContent = 'Please enter a valid search term.';
    resultsList.appendChild(noResult);
}
});


 function filterOption(option) {
console.log("Вибрана опція: " + option);
}



export class Categories extends Component {
    constructor(props) {
        super(props)
        this.state = {
            categories: [
            {
                key: 'all',
                name: 'Всі елементи'
            },
                {
                    key: 'Shoes',
                    name: 'Взуття'
                },
                {
                    key: 'Upper',
                    name: 'Верхній одяг'
                },
                {
                    key: 'Accesories',
                    name: 'Аксесуари та інше'
                },
                {
                    key: 'Headwear',
                    name: 'Головні убори'
                },
                {
                    key: 'Pants',
                    name: 'Нижній одяг'
                }
            ]
        }
    }
    render() {
        return  (
            <div className='categories'>
                {this.state.categories.map(el => (
                    <div key={el.key}>{el.key}</div>
                ))}
            </div>
        )
    }
}

export default Categories