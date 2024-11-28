
                                    // SEARCH SYSTEM 
/* Очистити старі результати
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