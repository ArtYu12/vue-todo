<template>
    <input :value="title"  @input="updateInput" type="text"/>
</template>

<script>
export default {
    name: "my-input",
    props:{
      title:[String, Number],
    },
    methods:{
      updateInput(e) {
        this.$emit("update:title",e.target.value)
      }
    }
    
}
</script>

<style scoped>
input {
  font-size: 16px;
  padding: 10px 20px;
  margin: 10px 0;
  display: block;
  width: 100%; /* или другой подходящий размер */
  border: none;
  border: 2px solid #ccc;
  border-radius: 4px; /* Слегка закругленные углы для современного вида */
  box-sizing: border-box; /* Чтобы padding не увеличивал размер элемента */
  transition: border-color 0.3s, box-shadow 0.3s;
}

/* Стиль инпута при фокусировке */
input:focus {
  outline: none;
  border-color: #007BFF; /* Синий цвет границы при фокусе */
  box-shadow: 0 0 8px rgba(0, 123, 255, 0.2); /* Слегка размытая тень для акцента */
}

/* Стиль плейсхолдера */
::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
  color: #aaa;
  opacity: 1; /* Firefox */
}

:-ms-input-placeholder { /* Internet Explorer 10-11 */
  color: #aaa;
}

::-ms-input-placeholder { /* Microsoft Edge */
  color: #aaa;
}

</style>