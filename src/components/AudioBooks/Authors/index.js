import React from 'react';
import './style.css';

const Authors = (props) => {

    function onClickHandler(artistName){
        props.parentCallBack(artistName);
    }
    return(
        <div className="authors-custom bg-dark text-light rounded" id={props.data.id} onClick={onClickHandler.bind(this, props.data.name)} ><li className="authors-link-custom">{props.data.name}</li></div>
    );
}
export default Authors;