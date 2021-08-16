import axios from 'axios';
import {
    ADD_TO_CART,
    REMOVE_FROM_CART
} from './types';


export function addToCart(cartValue) {
    return {
        type: ADD_TO_CART,
        payload: cartValue
    }
}

export function removeFromCart(cartValue) {
    return {
        type: REMOVE_FROM_CART,
        payload: cartValue
    }
}