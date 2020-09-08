import React from 'react';
import ItemsAll from '../../items-all/ItemsAll';

function Body (props) {
    return (
        <div class="col-12">    
            <ItemsAll items={props.items} onDeleteItem={props.onDeleteItem}></ItemsAll>
        </div>
    )
}

export default Body