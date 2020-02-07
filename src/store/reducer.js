import * as actionTypes from "./actions";

const initialState = {
  ingredients: {
    salad: 0,
    bacon: 0,
    cheese: 0,
    meat: 0
  },
  totalPrice: 4
};

const INGREDIENT_PRICES = {
  salad: 0.5,
  cheese: 0.4,
  meat: 1.3,
  bacon: 0.7
};

const reduser = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_INGREDIENTS:
      return {
        ...state,
        ingredients: {
          ...state.ingredients,
          [action.igredientName]: state.ingredients[action.igredientName] + 1
        },
        totalPrice: state.totalPrice + INGREDIENT_PRICES[action.igredientName]
      };
    case actionTypes.REMOVE_INGREDIENTS:
      return {
        ...state,
        ingredients: {
          ...state.ingredients,
          [action.igredientName]: state.ingredients[action.igredientName] - 1
        },
        totalPrice: state.totalPrice - INGREDIENT_PRICES[action.igredientName]
      };
    default:
      return state;
  }
};

export default reduser;
