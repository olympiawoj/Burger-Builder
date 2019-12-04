export const ADD_INGREDIENT = 'ADD_INGREDIENT'
export const REMOVE_INGREDIENT = 'REMOVE_INGREDIENT'
export const SET_INGREDIENTS = "SET_INGREDIENTS"
export const FETCH_INGREDIENTS_FAILED = "FETCH_INGREDIENTS_FAILED"

export const PURCHASE_BURGER_START = "PURCHASE_BURGER_START"
//we want to start submitting this
//then we also need actions for the success & failure cases
export const PURCHASE_BURGER_SUCCESS = "PURCHASE_BURGER_SUCCESS"
export const PURCHASE_BURGER_FAIL = "PURCHASE_BURGER_FAIL"
//New action type - purchaseINIT will be dispatched w/e we load the checkout page 
export const PURCHASE_INIT = "PURCHASE_INIT"

//Order actionTypes
export const FETCH_ORDERS_START = "FETCH_ORDERS_START"
export const FETCH_ORDERS_SUCCESS = "FETCH_ORDERS_SUCCESS"
export const FETCH_ORDERS_FAIL = "FETCH_ORDERS_FAIL"


//Auth actionTypes
export const AUTH_START = "AUTH_START"
export const AUTH_SUCCESS = "AUTH_SUCCESS"
export const AUTH_FAIL = "AUTH_FAIL"
export const AUTH_LOGOUT = "AUTH_LOGOUT"
export const SET_AUTH_REDIRECT_PATH = "SET_AUTH_REDIRECT_PATH"