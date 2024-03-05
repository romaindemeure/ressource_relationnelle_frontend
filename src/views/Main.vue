<template>  
    <Header/>
    <Main/>
    <Footer/>
</template>

<style>
</style>

<script>

import Main from '../components/Main.vue';
import Header from '../components/Header.vue';
import Footer from '../components/Footer.vue';

export default {
    components: {
        Main,
        Header,
        Footer
    }
}
</script>