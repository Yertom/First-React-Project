import Products from "../products"

let newArrProducts = JSON.parse(window.localStorage.getItem('cartContent'));
let newArrPrices = JSON.parse(window.localStorage.getItem('listOfPrices'));
const initialState = {
    cartContent: newArrProducts,
    listOfPrices: newArrPrices,
    menuIsOpen: false,
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {

        case "ADD_PRODUCT": {
            const newArr = Array.from(state.cartContent);
            let notInArr = true;
            newArr.forEach((item) => {
                if (item.id == action.id) {
                    notInArr = false;
                }
            });
            if (notInArr) {
                let newProduct = Products.find((item) => {
                    if (item.id == action.id) {
                        return item;
                    }
                });
                newArr.push(newProduct);
            }
            window.localStorage.setItem('cartContent', JSON.stringify(newArr));

            newArrPrices = Array.from(state.listOfPrices);

            let isNotContain = true;

            newArrPrices.forEach((item) => {
                if (item.id == action.id) {
                    isNotContain = false;
                }
            });

            if (isNotContain) {
                newArrPrices.push({
                    price: action.price.slice(1),
                    id: action.id,
                    mult: 1,
                });
            }

            window.localStorage.setItem('listOfPrices', JSON.stringify(newArrPrices));

            return {
                ...state,
                cartContent: newArr,
                listOfPrices: newArrPrices,
            };
        }
        case "ADD_PRICE": {
            let isNotContain = true;
            let newArr = Array.from(state.listOfPrices);

            newArr.forEach((item) => {
                if (item.id == action.id && !isNaN(+action.mul) && action.mul <= 999) {
                    isNotContain = false;
                    item.mult = Math.round(action.mul);
                }
            });

            if (isNotContain && !isNaN(+action.mul) && action.mul <= 999) {
                newArr.push({
                    price: action.price.slice(1),
                    id: action.id,
                    mult: Math.round(action.mul),
                })
            }
            window.localStorage.setItem('listOfPrices', JSON.stringify(newArr));
            return {
                ...state,
                listOfPrices: newArr,
            }
        }

        case "DELETE_PRODUCT": {
            let newArrProducts = Array.from(state.cartContent);
            let newArrPrices = Array.from(state.listOfPrices);
            newArrProducts = newArrProducts.filter((item) => {
                return item.id != action.id
            });
            newArrPrices = newArrPrices.filter((item) => {
                return item.id != action.id
            });
            window.localStorage.setItem('cartContent', JSON.stringify(newArrProducts));
            window.localStorage.setItem('listOfPrices', JSON.stringify(newArrPrices));
            return {
                ...state,
                cartContent: newArrProducts,
                listOfPrices: newArrPrices,
            };
        }

        case "CLEAR_STORE": {
            window.localStorage.setItem('cartContent', JSON.stringify([]));
            window.localStorage.setItem('listOfPrices', JSON.stringify([]));
            return {
                ...state,
                cartContent: [],
                listOfPrices: [],
            };
        }
        case "OPEN_MENU": {
            return {
                ...state,
                menuIsOpen: !state.menuIsOpen,
            };
        }

        default:
            return state;
    }
};

export default rootReducer;



