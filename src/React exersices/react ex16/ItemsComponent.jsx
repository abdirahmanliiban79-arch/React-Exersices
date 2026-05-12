import { useContext } from "react";
import ItemsContext from "./ItemsContext";

const ItemsComponent =()=>{

    const { items,setItems} = useContext(ItemsContext);

    const AddCart = (name,price)=>{
        const newCart = {
            id: Date.now(), name, price
        }
        setItems([...items, newCart])
    }

   const HandleDelete = (id) => {
  const filteredItems = items.filter((item) => item.id !== id);
  setItems(filteredItems);
};


    return(
        <div style={{padding:"20px"}}>

            <h1>Product</h1>
            <div> 
            <h3>
                Widget 
                <p>Price: 19.99$</p>
            </h3>
            <button onClick={()=> AddCart('Widget', 19.99)}>Add Cart</button>
            </div>
            <div> 
            <h3>
                Gadget 
                <p>Price: 29.99$</p>
            </h3>
            <button onClick={()=> AddCart('Gadget', 29.99)}>Add Cart</button>
            </div>

            <hr />

            <h2>Cart Summary</h2>
            <p>Total items : {items.length}</p>

            <ul>
                {
                    items.map((item)=> (
                        <li key={item.id}>
                            {item.name} : {item.price}
                            <button onClick={()=> HandleDelete(item.id)}>Delete</button>
                        </li>
                    ))
                }
            </ul>

        </div>
        
    )
}

export default ItemsComponent;