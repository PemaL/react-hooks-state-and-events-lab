import React,{useState} from "react";
import Item from "./Item";

function ShoppingList({ items }) {

  const [selectedCategory, setSelectedCategory] = useState("All")

 function handleChange(e){
  setSelectedCategory(e.target.value)   
}

const filteredItems = items.filter(item =>{
  return selectedCategory === "All" || item.category === selectedCategory
})
  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select onChange = {handleChange} name="filter">
          <option >Filter by category</option>
          <option >Produce</option>
          <option >Dairy</option>
          <option >Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {filteredItems.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
