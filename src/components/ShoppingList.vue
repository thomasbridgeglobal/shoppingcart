<template>
    <div>
        <h1>Shopping list</h1>
        <img src="giphy.gif" v-if="loading" />
        <ul v-else>
            <li v-for="product in products" :key="product.id">{{ product.title }}, qty {{ product.inventory }}
                <button @click="addItemToCart(product)">add to cart</button>
            </li>
        </ul>
    </div>
</template>
<script>
export default{
    name: 'ShoppingList',
    data() {
        return {
            loading: true
        }
    },
    computed: {
        products(){
            return this.$store.getters.getAvailableProducts
        }
    },
    created(){
        this.$store.dispatch('fetchProducts').then(() => {
            this.loading = false
        })
    },
    methods: {
        addItemToCart(product){
            this.$store.dispatch('addItemToCart', product)
        }
    }
}
</script>