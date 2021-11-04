import React,{useState} from "react";

function Item({ name, category }) {

  const [inCart, setinCart] = useState(false)

  function handleClick(){
       setinCart(!inCart)
  }

  const changeLiClass = inCart ? "in-cart" : "" ;
  return (
    <li className={changeLiClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className={!inCart ? "add" : "remove"}onClick = {handleClick}> {inCart ? "Remove From Cart" : "Add to Cart"}</button>
    </li>
  );
}

export default Item;
