
export const initialState = {
    basket: [],
    user: null,
};

export const getBasketTotal = (basket) => basket?.reduce((amount, item) => item.price + amount, 0)


const reducer = (state, action) => {
    switch (action.type) {
        case "ADD_TO_BASKET":
            //logic for adding item into basket
            return {
                ...state,
                basket: [...state.basket, action.item]
            };



        case "EMPTY_BASKET":
            return {
                ...state,
                basket: []
            }

        case "REMOVE_FROM_BASKET":
            //logic for removing item from basket

            //we cloned the basket
            let newBasket = [...state.basket]
            const index = state.basket.findIndex((basketitem) => basketitem.id === action.id)

            if (index >= 0) {
                //item exists in basket,remove it
                newBasket.splice(index, 1)
            } else {
                console.warn(`Can't remove product (id:${action.id}) as nolonger exist`)
            }
            return { ...state, basket: newBasket }
        case "SET_USER":
            return {
                ...state,
                user: action.user
            }

        default:
            return state;
    }
};


export default reducer;


