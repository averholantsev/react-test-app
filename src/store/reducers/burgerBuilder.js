import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../utility";

const initialState = {
  ingredients: null,
  totalPrice: 4,
  error: false,
  building: false
};

const INGREDIENT_PRICES = {
  salad: 0.5,
  cheese: 0.4,
  meat: 1.3,
  bacon: 0.7
};

const addIngredients = (state, action) => {
  const addUpdatedIngredient = {
    [action.igredientName]: state.ingredients[action.igredientName] + 1
  };
  const addUpdatedIngredients = updateObject(
    state.ingredients,
    addUpdatedIngredient
  );
  const addUpdatedState = {
    ingredients: addUpdatedIngredients,
    totalPrice: state.totalPrice + INGREDIENT_PRICES[action.igredientName],
    building: true
  };
  return updateObject(state, addUpdatedState);
};

const removeIngredients = (state, action) => {
  const updatedIngredient = {
    [action.igredientName]: state.ingredients[action.igredientName] - 1
  };
  const updatedIngredients = updateObject(state.ingredients, updatedIngredient);
  const updatedState = {
    ingredients: updatedIngredients,
    totalPrice: state.totalPrice - INGREDIENT_PRICES[action.igredientName],
    building: true
  };
  return updateObject(state, updatedState);
};

const setIngredients = (state, action) => {
  return updateObject(state, {
    ingredients: {
      salad: action.ingredients.salad,
      bacon: action.ingredients.bacon,
      cheese: action.ingredients.cheese,
      meat: action.ingredients.meat
    },
    totalPrice: 4,
    error: false,
    building: false
  });
};

const fetchIngredientsFailed = state => {
  return updateObject(state, {
    error: true
  });
};

const reduser = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_INGREDIENTS:
      return addIngredients(state, action);
    case actionTypes.REMOVE_INGREDIENTS:
      return removeIngredients(state, action);
    case actionTypes.SET_INGREDIENTS:
      return setIngredients(state, action);
    case actionTypes.FETCH_INGREDIENTS_FAILED:
      return fetchIngredientsFailed(state);
    default:
      return state;
  }
};

export default reduser;
