import Vuex from 'vuex'
import Vue from 'vue'

import shop from '@/api/shop'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        products: [],
        cart: [] // [{id: '', quantity: '0'}
    },

    mutations: {
        setProducts(state, products) {
            state.products = products
        },

        pushProductionCart(state, id) {
            state.cart.push({
                id,
                qty: 1
            })
        },

        incrementItemQuantity(state, cartItem) {
            cartItem.qty++
        },

        decrementProductQuantity(state, product) {
            product.inventory--
        }
    },

    getters: {
        getAvailableProducts(state){
            return state.products.filter(item => item.inventory > 0)
        },

        cartItems(state){
            return state.cart.map((item) => {
                const product = state.products.find(product => product.id === item.id)
                return {
                    id: product.id,
                    title: product.title,
                    price: product.price,
                    qty: item.qty
                }
            });
        },

        cartTotal(state, getters){
            return getters.cartItems.reduce((total, product) => total + product.price * product.qty), 0)
        }

    },

    actions: {
        fetchProducts(context){
            return new Promise((resolve) => {
                shop.getProducts(products => {
                    context.commit('setProducts', products)
                    resolve()
                })
            })
        },

        addItemToCart(context, product){
            if(product.inventory > 0){
                const cartItem = context.state.cart.find(item => item.id === product.id)
                if(!cartItem) {
                    context.commit('pushProductionCart', product.id)
                }
                else {
                    context.commit('incrementItemQuantity', cartItem)
                }
                context.commit('decrementProductQuantity', product)
            }
        }
    }
})