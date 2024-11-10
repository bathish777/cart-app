import React, { useContext, useEffect, useReducer, createContext } from "react";
import CartItems from "../staticData/Data"; // Ensure this is the correct data import
import Reducer from "./Reducer";
import CartItem from "../component/cart/CartItem"; // Ensure this is the correct component import

const url = "https://course-api.com/react-useReducer-cart-project";
const AppContext = createContext();

const initialState = {
    loading: false,
    cart: CartItems, 
    total: 0,
    amount: 0,
};

const AppProvider = ({ children }) => {
    const [state, dispatch] = useReducer(Reducer, initialState);

    const clearCart = () => {
        dispatch({ type: 'CLEAR_CART' });
    };

    const remove = (id) => {
        dispatch({ type: 'REMOVE', payload: id });
    };

    const fetchData = async () => {
        dispatch({ type: 'LOADING' });
        try {
            const response = await fetch(url);
            const cart = await response.json();
            dispatch({ type: 'DISPLAY_ITEMS', payload: cart });
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    const toggleAmount = ( id,type) => {
        dispatch({ type: "TOGGLE_AMOUNT", payload: { id, type } });
    };

    useEffect(() => {
        fetchData();
    }, []);

    useEffect(() => {
        dispatch({ type: "GET_TOTALS" });
    }, [state.cart]);

    return (
        <AppContext.Provider
            value={{
                ...state,
                clearCart,
                remove,
                fetchData,
                toggleAmount,
            }}
        >
            {children}
        </AppContext.Provider>
    );
};

export const useGlobalContext = () => {
    return useContext(AppContext);
};

export { AppContext, AppProvider };
