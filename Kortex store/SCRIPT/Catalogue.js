import React, { Component } from 'React'

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
                    key: 'shoes',
                    name: 'Взуття'
                },
                {
                    key: 'upper',
                    name: 'Верхній одяг'
                },
                {
                    key: 'accesories',
                    name: 'Аксесуари та інше'
                },
                {
                    key: 'headwear',
                    name: 'Головні убори'
                },
                {
                    key: 'pants',
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