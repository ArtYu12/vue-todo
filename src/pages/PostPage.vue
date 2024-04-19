<template>
    <div class="app_buttons">
      <my-button @click="active = true">Создать пост</my-button>
      <my-select
        v-model:optionValue="filter"
        :defaultValue="`Выберите фильтр`"
        :options="options"
      ></my-select>
    </div>
    <my-input v-model:title="search" placeholder="Найти" v-focus />
    <my-dialog v-model:show="active">
      <form-create @createLesson="createLesson" />
    </my-dialog>
    <lessons-list :lessons="sortedSearchLessons" @deleteLesson="deleteLesson" />

    <h2>Посты</h2>
    <div v-if="isLoading === false">
      <posts-list :posts="posts" v-show="posts !== null && posts.length > 0" />
      <!-- my-pagination v-model:page="page" :totalPages="totalPages" /-->
    </div>
    <div v-else="isLoading === true">Загрузка</div>
    <div v-if="totalPages > 0" v-intersection="{loadMorePosts: loadMorePosts,page:page,totalPages:totalPages}" class="observer"></div>
  </template>
  
  <script>
  import lessons from "@/components/lessons-list.vue";
  import form from "@/components/form.vue";
  import postsList from "@/components/post-list.vue";
  import axios from "axios";
  
  export default {
    components: {
      LessonsList: lessons,
      FormCreate: form,
      PostsList: postsList,
    },
    data() {
      return {
        lessons: [
          { id: 1, title: "Урок 1" },
          { id: 2, title: "Урок 2" },
          { id: 3, title: "Урок 3" },
          { id: 4, title: "Урок 1" },
          { id: 5, title: "Урок 2" },
          { id: 6, title: "Урок 3" },
        ],
        posts: null,
        active: false,
        isLoading: false,
        filter: "",
        totalPages: 0,
        limit: 10,
        page: 1,
        search: "",
        options: [{ title: "Имя", value: "title" }],
      };
    },
    methods: {
      createLesson(post) {
        console.log(post);
        this.lessons.push(post);
      },
      deleteLesson(id) {
        console.log(id);
        this.lessons = this.lessons.filter((o) => o.id !== id);
      },
      async getPosts(page, limit) {
        try {
          this.page += 1
          this.isLoading = true;
          const res = await axios.get(
            "https://jsonplaceholder.typicode.com/todos",
            {
              params: {
                _limit: limit,
                _page: page,
              },
            }
          );
          this.totalPages = Math.ceil(res.headers["x-total-count"] / this.limit);
          this.posts = res.data;
        } catch (e) {
          console.log(e);
        } finally {
          this.isLoading = false;
        }
      },
      async loadMorePosts(page = this.page, limit = this.limit) {
        try {
          this.page += 1
          const res = await axios.get(
            "https://jsonplaceholder.typicode.com/todos",
            {
              params: {
                _limit: limit,
                _page: page,
              },
            }
          );
          this.posts = [...this.posts, ...res.data]
        } catch (e) {
          console.log(e);
        }
      },
    },
    mounted() {
      this.getPosts(this.page, this.limit);
  
     /* */
    },
    computed: {
      sortedLessons() {
        return [...this.lessons].sort((a, b) =>
          a[this.filter]?.localeCompare(b[this.filter])
        );
      },
      sortedSearchLessons() {
        return this.sortedLessons.filter((i) =>
          i.title.toLowerCase().includes(this.search.toLowerCase())
        );
      },
    },
    watch: {
      /*page(newValue) {
        this.getPosts(newValue, this.limit);
      },*/
    },
  };
  </script>
  
  <style>
  .app_buttons {
    display: flex;
    align-items: center;
    gap: 15px;
  }
  
  .observer {
    height: 30px;
    background-color: green;
  }
  </style>
  