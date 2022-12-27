//este es mi componente que contiene un saludo inicial
import React from 'react';
import itemlistcontainer from './itemlistcontainer.css'

const ItemListContainer = (props) => {
return (
<div>
<h1>{props.greeting}</h1>
</div>
);
}

export default ItemListContainer;