// import main Componet
import React, { Component } from "react";
import { Routes, Route } from "react-router-dom";

// import component
import Header from "./component/header";
import Menu from "./component/menu";
import Prodact from './component/prodact';
import PageNotFound from './component/404';
import Shoping from "./component/shop";

class App extends Component {
    state = { 
        prodacts: [
            {id: 1, name: "Meat", price: 40, cunt: 0, sell: false},
            {id: 2, name: "grilled meet", price: 50, cunt: 0, sell: false},
            {id: 3, name: "Grilled chicken", price: 30, cunt: 0, sell: false},
            {id: 4, name: "Fried Fish", price: 35, cunt: 0, sell: false},
            {id: 5, name: "Grilled Fish", price: 45, cunt: 0, sell: false},
            {id: 6, name: "Pepsi", price: 7, cunt: 0, sell: false},
            {id: 7, name: "coca cola", price: 7, cunt: 0, sell: false},
            {id: 8, name: "tea", price: 5, cunt: 0, sell: false},
            {id: 9, name: "coffee", price: 10, cunt: 0, sell: false}
        ]
    }

    clikedHandil = (element) => {

        // clone 
        const ProdactsClone = this.state.prodacts

        // deap clone
        const prodactClicked = ProdactsClone.filter( (prodact) => prodact === element)[0];

        // edit 
        (prodactClicked.sell !== true) ? prodactClicked.sell = true : prodactClicked.sell = false

        // set 
        this.setState({ prodacts: ProdactsClone })

    }

    shopingSell = () => {

        const prods = this.state.prodacts.filter( (pro) => pro.sell === true);

        return prods;

    }

    addNumber = (element) => {

        const prodacts = this.state.prodacts;

        const prodact = prodacts.filter( (prodact) => prodact === element)[0];

        prodact.cunt++

        this.setState({ prodacts })
    }

    menusNumber = (element) => {

        const prodacts = this.state.prodacts;

        const prodact = prodacts.filter( (prodact) => prodact === element)[0];

        if (prodact.cunt > 0) {

            prodact.cunt--
        }

        this.setState({ prodacts })
    }

    removeProdact = (element) => {

        const prodacts = this.state.prodacts;

        const prodact = prodacts.filter( (prodact) => prodact === element)[0];

        prodact.sell = false;
        
        this.setState({ prodacts })
    }

    render() { 
        return (
            <React.Fragment>
                <Header />
                <Routes>
                    <Route path="/" element={<Menu prodacts = {this.state.prodacts} onclick = { this.clikedHandil }/>} />
                    <Route path="/menu" element={<Menu prodacts = {this.state.prodacts} onclick = { this.clikedHandil }/>} />
                    <Route path="/shop" element={<Shoping
                            ProdactsSelling = { this.shopingSell() }
                            onAdd           = { this.addNumber }
                            onmenus         = { this.menusNumber }
                            onRemove        = { this.removeProdact }
                    />} />
                    <Route path="*" element={<PageNotFound />} />
                </Routes>
            </React.Fragment>
        )
    }
}

export default App;