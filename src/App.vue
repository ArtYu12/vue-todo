<template>
     <navbar />
    <router-view></router-view>
</template>

<script>
import Navbar from './components/navbar.vue';


export default {
    components:{
        Navbar
    }
}
</script>

<style>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
</style>
