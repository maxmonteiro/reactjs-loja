import React, { Component } from 'react'
import Product from './Product'

export default class ProductList extends Component {
    render() {
        return (
            <div>
                <h3>LISTA DE PRODUTOS</h3>
                <Product />
            </div>
        )
    }
}
