<template>
  <div class="pagination">
    <div
      v-for="pageNumber in totalPages"
      @click="this.$emit('update:page', pageNumber)"
    >
      <div class="page" :class="{
        active: pageNumber == page
      }">{{ pageNumber }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "my-pagination",
  props: {
    page: {
      type: Number,
      default: 1,
    },
    totalPages: Number,
  },
  methods: {},
};
</script>

<style scoped>
.pagination {
  display: flex;
  align-items: center;
  gap: 20px;
  height: 100px;
}
.page{
  width: 30px;
  height: 30px;
  border: 2px solid #ccc;
  border-radius: 4px;
  color: #aaa;
  display: flex;
  align-items: center;
  justify-content: center;
}

.active {
    color:black;
    border: 2px solid #007BFF;
}
</style>
