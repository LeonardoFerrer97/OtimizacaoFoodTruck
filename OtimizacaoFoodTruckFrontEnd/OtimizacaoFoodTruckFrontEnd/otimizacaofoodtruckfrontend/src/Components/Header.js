import React, { Component } from 'react';
import '../Styles/Header.css';
class Header extends Component {
    render() {
        return <div className='Header'>
            <p className='HeaderText'>
                {this.props.isRestricao ? this.props.isCapitalGiro ? 'Capital de giro': 'Demanda de cada cachorro quente': !this.props.isPreco ? 'Preco ingredientes por quilo' :  'Quantidade ingredientes usados em cada cachorro quente'}
            </p>
        </div>
    }
}

export default Header;
