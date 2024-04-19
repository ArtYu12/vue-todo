<template>
  <form class="form" @submit.prevent>
      <h2>Создать пост</h2>
      <my-input v-focus v-model:title.trim="post.title" @change="this.error = ''" placeholder="Название урока" />
      <my-button @click="createLesson">Добавить</my-button>
      <div>{{ this.error }}</div>
  </form>
</template>

<script>

export default {
  props: {},
  data() {
    return {
      post: {
        title: "",
      },
      error:""
    };
  },
  methods: {
    createLesson() {
      if(this.post.title === "") return this.error = "Введите название урока"
      this.post.id = Date.now();
      this.$emit("createLesson", this.post);
      this.post = {
        title: "",
      };
    },
  },
};
</script>

<style></style>
//v-bind:value="post.title" @change="post.title = $event.target.value"
