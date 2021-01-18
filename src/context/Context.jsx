import { createContext, useState } from "react";

export const Context = createContext();

const ContextProvider = ({ children }) => {
    
  const productos = [
    {
        id: 11,
        nombre: 'vela 1',
        descripcion:"",
        precio: 240,
        cantidad: 1
    },

    {
        id: 12,
        nombre: 'vela 2',
        descripcion:"",
        precio: 240,
        cantidad: 2
    }
  ]

    const [items, setItems] = useState({
      itemsArr: productos,
      totalQty: 3
    });
   
    
    const deleteItem = (itm) => {
      const index = items.itemsArr.findIndex(
        (find) => find.id === itm.id
      );
      const arr = items.itemsArr;
      arr.splice(index, 1);
      setItems({
        itemsArr: arr,
        totalQty: items.totalQty - itm.cantidad
      });
    };


    const clear = () => {
      setItems({
        itemsArr: [],
        totalQty: 0
      });
    };
  
    const addToCart = (itm, qty) => {
      items.itemsArr.filter((prod) => prod.id === itm.id).length === 0? 
      notInCart(itm,qty)
      : isInCart(itm, qty);
    };
    
    const notInCart = (itm,qty)=>{
      setItems({
        itemsArr: [
          ...items.itemsArr,
          {
            id: itm.id,
            nombre: itm.nombre,
            descripcion:itm.descripcion,
            precio: itm.precio,
            cantidad: qty
        }
        ],
        totalQty: items.totalQty + qty
      })
    }

    const isInCart = (itm,qty) => {
      const index = items.itemsArr.findIndex(
        (find) => find.id === itm.id
      );
      const arr = items.itemsArr;
      arr[index].cantidad = arr[index].cantidad+qty
      setItems({
        ...items,
        totalQty: items.totalQty + qty
      });
    };

    return (
      <Context.Provider
        value={{
          items,
          setItems,
          addToCart,
          deleteItem,
          clear
        }}
      >
        {children}
      </Context.Provider>
    );
  };
  
  export default ContextProvider;
