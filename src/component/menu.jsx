// import main commponent
import React, { Component } from 'react';

// import commponent
import Prodact from './prodact';

const Menu = (props) => {
    return ( 
        <section className='menu py-5'>
            <div className="container">
                <h1>Menu</h1>
                <table>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                        <th></th>
                    </tr>
                    <Prodact prodacts = {props.prodacts} onclick = {props.onclick} />
                </table>
            </div>
        </section>
    );
}

export default Menu;