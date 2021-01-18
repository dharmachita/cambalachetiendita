import { createContext, useState } from "react";

export const Context = createContext();

const ContextProvider = ({ children }) => {
    
  const productos = [
    {
        id: 1,
        nombre: 'vela 1',
        precio: 240,
        cantidad: 1
    },

    {
        id: 2,
        nombre: 'vela 2',
        precio: 240,
        cantidad: 2
    }
  ]

    const [items, setItems] = useState({
      items: productos,
      cantidadAgregar: 0,
      totalQty: 0
    });
   
    
    const deleteItem = (itm,qty) => {
      const index = items.items.findIndex(
        (find) => find.producto.id === itm.id
      );
      const arr = items.items;
      arr.splice(index, 1);
      setItems({
        items: arr,
        totalQty: items.totalQty - qty,
        cantidadAgergar: 0
      });
    };


    const clear = () => {
      setItems({
        items: [],
        cantidadAgregar: 0,
        totalQty: 0
      });
    };
  
    const addToCart = (item) => {
      items.items.filter((prod) => prod.producto.id === item.id).length === 0
        ? setItems({
            ...items,
            items: [
              ...items.items,
              { producto: item, cantidad: items.cantidadAgregar }
            ],
            totalQty: items.totalQty + items.cantidadAgregar
          })
        : isInCart(item);
    };
  
    const isInCart = (item) => {
      const index = items.items.findIndex(
        (find) => find.producto.id === item.id
      );
      const arr = items.items;
      arr[index] = {
        ...arr[index],
        cantidad: arr[index].cantidad + items.cantidadAgregar
      };
      setItems({
        ...items,
        items: arr,
        totalQty: items.totalQty + items.cantidadAgregar
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
