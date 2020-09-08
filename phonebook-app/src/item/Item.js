import React from 'react';


function Item(props) {
    return (
        <div className="col-9"> 
            <div className="row justify-content-center py-5">
                <div className="col-6">
                    <p className="h4">{props.item.content}</p>
                    <p className="text-muted">{props.item.number}</p>
                </div>
                <div className="col-3 text-center py-3">
                    <i className="fas fa-trash fa-lg hovering-effect" onClick={(e) => {e.stopPropagation(); props.onDeleteItem(props.item);}}></i>
                </div>
            </div>   
        </div>   
    )
}

export default Item;
