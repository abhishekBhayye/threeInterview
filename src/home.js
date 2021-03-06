import React, { Component } from 'react'
import firebase from "./firebase";

import './Home.css'
import ShoppingList from './shoppingList'

export default class Home extends Component { 
    state = { 
        shoppingListArray: [],
        shoppingListInput: "",
        quantity: null
    }

    onChangeHandler = (e) => {
        this.setState({
            [ e.target.name ] : e.target.value
        })
    }

    onAddHandler = () => {
        
        const shoppingListArray = [...this.state.shoppingListArray];

        const item = {
            shoppingListInput: this.state.shoppingListInput,
            quantity: this.state.quantity
        };

        shoppingListArray.push(item);

        this.setState({
            shoppingListArray: shoppingListArray,
            shoppingListInput: "",
            quantity: null
        }, ()=> {
        });
    }

    onSubmitHandler = (e) => {
        
        e.preventDefault();

        const shoppingList = firebase.database().ref("ShoppingList");

        shoppingList.push(this.state.shoppingListArray);

        this.setState({
            shoppingListArray: []
        })

    }

    render() {
        return (
            <div className="Home">

                <div className="introVideo">
                    <video autoPlay loop>
                        <source src="threeIntro.mp4" type="video/mp4"/>
                        Your browser does not support the video tag.
                    </video>
                </div>

                <p className="shopItemsHeader">Add Items To Your Shopping List</p>

                <div className="Shopping-list">
                    
                    <form className="list" onSubmit={(e) => this.onSubmitHandler(e) }>
                        
                        <div className="addNewItem">                        
                            <input type="text" name="shoppingListInput" placeholder="Item Name" onChange={(e) => this.onChangeHandler(e) } />
                            <input type="number" name="quantity" placeholder="Quantity" onChange={(e) => this.onChangeHandler(e) } />
                            <button type="button" className="addItemButton" onClick={() => this.onAddHandler() }>Add Item</button> 
                        </div>

                        <div className="inner-List">   
                            <div className="tableHeader">
                                <p>Name of the Item</p>
                                <p>Quantity</p>
                            </div>          
                                {
                                    this.state.shoppingListArray.length > 0 && this.state.shoppingListArray.map((item, index) => {
                                        return (
                                            <div className="listItems">
                                               <p>{item.shoppingListInput}</p>
                                               <p>{item.quantity}</p> 
                                            </div>

                                        )
                                    })
                                }
                        </div>
                        <button type="submit" className=" btn btn-primary addListBtn">Save List</button>

                    </form>

                </div>

                <div className="Previous-list">
                    <p className="shopItemsHeader"> Manage Your Shopping Lists Here</p> 
                    <ShoppingList/>
                </div>

                
            </div>
        )
    }
}
