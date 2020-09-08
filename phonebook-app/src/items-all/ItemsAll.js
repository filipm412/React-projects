import React from 'react';
import Item from '../item/Item';

function ItemsAll(props) {
    return (
        <div className="row">
            {props.items.map(function (value, index) {
                return <Item key={index} item={value} onItemClick={props.onItemClick} onDeleteItem={props.onDeleteItem} ></Item>
            })}
        </div>
    );
}

export default ItemsAll;
