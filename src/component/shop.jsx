import React, { Component } from 'react';

class Shoping extends Component {

    calcPrice = () => {

        let price = 0;

        if (this.props.ProdactsSelling.length !== 0) {

            this.props.ProdactsSelling.forEach(prodact => {
                
                price += prodact.price * prodact.cunt;
            })

        }

        return price
    }

    render () {
        return ( 
            <section className="shoping">
                <div className="container">
                    <h1> Shoping page </h1>
                    <div className="d-flex justify-content-around flex-wrap">
                        {
                            

                                (this.props.ProdactsSelling.length !== 0) ? 

                                    this.props.ProdactsSelling.map( (prod, ind) => {
        
                                            return (
                                                <article className="prodact w-25 text-center px-2 mb-4">
                                                    <h3 className='mb-3 bg-light p-2'>{prod.name}</h3>
                                                    <span className='btn btn-primary d-block mb-3'>{prod.cunt}</span>
                                                    <div className="d-flex justify-content-around border p-2">
                                                        <button className='btn btn-success btn-sm ' onClick={() => this.props.onAdd(prod)} >+</button>
                                                        <button className='btn btn-success btn-sm ' onClick={() => this.props.onmenus(prod)} >-</button>
                                                        <button className='btn btn-danger btn-sm' onClick={() => this.props.onRemove(prod)} >remove</button>
                                                    </div>
                                                </article>
                                            )
        
                                        })
                                : <h2> Not Found Prodact</h2>
                            
                        }           
                    </div>

                    <div className="price">
                        <h3>total price:</h3>
                        <span>
                            { this.calcPrice() }
                        </span>
                    </div>
                </div>
            </section>
            
        )
    }
}

export default Shoping;

/*onClick={() => this.addNumber(ind)*/