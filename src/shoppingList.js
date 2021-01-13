import React, { useEffect, useState } from 'react'
import firebase from './firebase'
import './ShoppingList.css'

export default function ShoppingList() {

    const [ shopItems, setShopItems ] = useState({});
    
    useEffect(() => {
        const shoppingRef = firebase.database().ref('ShoppingList');
        shoppingRef.on('value', (snapshot) => {
            const data = snapshot.val();

            setShopItems(data);
        });
    }, []);

    const deleteTheList = (id) => {
        const shoppingRef = firebase.database().ref('ShoppingList').child(id);
            shoppingRef.remove();
    }

    var tifOptions = [];
    
    if(shopItems != null) {
        Object.keys(shopItems).forEach(function(key) {
            tifOptions.push(<option value={key}>{shopItems[key]}</option>);
        });
    }
    
        return (

            <div className="PreviousList">
                {
                    tifOptions.length > 0 && 
                    tifOptions.map((shoppingList, index) => {
                        return (
                            <div className="shoppingList">
                                <div className="shoppingListItems">
                                {
                                    shoppingList.props.children.length > 0 && 
                                    shoppingList.props.children.map((item, index) => {
                                        return (
                                            <div>
                                                <p>Item: {item.shoppingListInput}
                                                <br></br> Q: {item.quantity}</p>
                                            </div>
                                        )
                                    })
                                }
                                </div>
                                <div className="shoppingListButton">
                                    <button className="listBtn" onClick={ () => deleteTheList(shoppingList.props.value)}>x</button>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        )
}