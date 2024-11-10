import CartItem from "../component/cart/CartItem"


const  reducer =(state,action)=>{
    if(action.type === 'CLEAR_CART'){
        return {...state,cart:[]}
    }
    if(action.type === 'REMOVE'){
        return {
            ...state,
            cart:state.cart.filter((CartItem)=>
                CartItem.id !== action.payload),
            }}
            if(action.type === "GET_TOTALS"){
                let { total,amount}= state.cart.reduce(
                    (cartTotal,CartItem)=>{
                        const {price,amount} = CartItem
                        const itemTotal=price * amount

                        cartTotal.total +=itemTotal
                        cartTotal.amount +=amount
                        return cartTotal
                    },
                    {
                        total:0,
                        amount:0,
                    }

                )
                total=parseFloat(total.toFixed(2))
                return {...state,total,amount}
            }
            

            if(action.type === 'LOADING'){
                return {
                    ...state,
                    loading:true,
                }
            }

            if(action.type === "DISPLAY_ITEMS"){
                return {
                    ...state,cart:action.payload, loading:false
                }
            }
            if (action.type === "TOGGLE_AMOUNT") {
                let tempCart = state.cart.map((CartItem) => {
                    if (CartItem.id === action.payload.id) {
                        if (action.payload.type === "inc") {
                            return { ...CartItem, amount: CartItem.amount + 1 };
                        }
                        if (action.payload.type === "dec") {
                            return { ...CartItem, amount: CartItem.amount > 0 ? CartItem.amount - 1 : 0 };
                        }
                    }
                    return CartItem;
                });
            
                return { ...state, cart: tempCart };
            }
            
        }
        
        export default reducer
