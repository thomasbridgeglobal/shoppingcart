<template>
    <div>
        <ul>
            <li v-for="product in products" :key="product.id">
                {{ product.title }}, price: {{ product.price }}- qty {{ product.qty }}
            </li>
        </ul>

    </div>
</template>

<script>
export default{
    name: 'ShoppingCart',
    computed: {
        products(){
            return this.$store.getters.cartItems
        }
    }
}
</script>