<template>
    <div class="navbar">
        <my-button @click="$router.push(`/`)">Главная</my-button>
        <my-button @click="$router.push(`/lessons`)">Уроки</my-button>
        <my-button @click="$router.push(`/store`)">Store</my-button>
        <my-button @click="$router.push(`/compositions`)">Composition</my-button>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.navbar {
    display: flex;
    align-items: center;
    gap:10px;
    padding: 10px;
    width:100%;
    background-color: rgb(234, 234, 234);
    margin-bottom: 15px;
}
</style>