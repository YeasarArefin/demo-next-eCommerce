import { product } from '@/types/types';
import { createSlice } from '@reduxjs/toolkit';

const initialState: { cart: product[] } = {
    cart: []
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            state.cart.push(action.payload)
        },
        increaseCartQuantity: (state, action) => {
            const product = state.cart.filter((product) => product.id === action.payload)[0];
            product.quantity = (product?.quantity ?? 0) + 1
        },
        decreaseCartQuantity: (state, action) => {
            const product = state.cart.filter((product) => product.id === action.payload)[0];
            if ((product?.quantity ?? 1) > 1) {
                product.quantity = (product?.quantity ?? 1) - 1
            }
        },
        removeFromCart: (state, action) => {
            state.cart = state.cart.filter((product) => product.id !== action.payload)
        }
    },
})

export const { addToCart, increaseCartQuantity, decreaseCartQuantity, removeFromCart } = cartSlice.actions
export default cartSlice.reducer





/* const localStorageCart: product[] = JSON.parse(localStorage.getItem('cart') || '{}')

const initialState: { cart: product[] } = {
    cart: localStorageCart || []
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            state.cart.push(action.payload)

            if (localStorage.getItem('cart') === null) {
                localStorage.setItem('cart', JSON.stringify([]));
            }

            localStorage.setItem('cart', JSON.stringify([...localStorageCart, action.payload]))
        },
        increaseCartQuantity: (state, action) => {
            const product = state.cart.filter((product) => product.id === action.payload)[0];
            product.quantity += 1
        },
        decreaseCartQuantity: (state, action) => {
            const product = state.cart.filter((product) => product.id === action.payload)[0];
            if (product.quantity > 1) {
                product.quantity -= 1
            }
        },
        removeFromCart: (state, action) => {
            state.cart = state.cart.filter((product) => product.id !== action.payload)
            const newLocalCart = localStorageCart.filter((product) => product.id !== action.payload)
            localStorage.setItem('cart', JSON.stringify(newLocalCart))
        }
    },
})

export const { addToCart, increaseCartQuantity, decreaseCartQuantity, removeFromCart } = cartSlice.actions
export default cartSlice.reducer */