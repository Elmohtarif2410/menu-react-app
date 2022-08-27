import React, { Component } from 'react';

const Prodact = (props) => {

    const prodacts = props.prodacts;
    const clikedHandil = props.onclick;
    

    return (
        <React.Fragment>
            {
                prodacts.map((prodact) => {

                    // if (prodact.sell === true) {
                    //     const style = {color: "white", background: "#777"}
                    // }

                    return (
                        <tr>
                            <td>{prodact.name}</td>
                            <td>{prodact.price}</td>
                            <td >
                                <span className='add' style={(prodact.sell === true) ? {color: "white", background: "#777"} : null} onClick={() => clikedHandil(prodact)}>+</span>
                            </td>
                        </tr>
                    )
                })
            }
        </React.Fragment>
    );
}

export default Prodact;