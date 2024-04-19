<template>
    <button>
        <slot></slot>
    </button>
</template>

<script>
export default {
    name: "my-button",
    props:{
        value: {
            type:String
        }
    }
    
}
</script>

<style scoped>
/* Стиль для красивой кнопки */
button {
  background-color: #007BFF; /* Синий цвет фона */
  color: white; /* Белый текст */
  padding: 10px 25px; /* Вертикальные и горизонтальные отступы */
  font-size: 16px; /* Размер шрифта */
  border: none; /* Убираем границу */
  border-radius: 5px; /* Слегка закруглённые углы */
  cursor: pointer; /* Курсор в виде руки, указывающий на интерактивность */
  transition: background-color 0.3s, box-shadow 0.3s; /* Анимация фона и тени */
  text-decoration: none; /* Убираем подчёркивание, если кнопка - это ссылка */
}

/* Стиль для кнопки при наведении */
button:hover {
  background-color: #0056b3; /* Темно-синий цвет фона при наведении */
  box-shadow: 0 8px 15px rgba(0,123,255,.5); /* Размытая тень вокруг кнопки */
}

/* Стиль для кнопки при фокусировке */
button:focus {
  outline: none; /* Убираем контур при фокусе, добавляем при необходимости */
}

/* Стиль для кнопки при нажатии (активного состояния) */
button:active {
  background-color: #004094; /* Ещё более тёмный синий при нажатии */
  box-shadow: 0 5px 10px rgba(0,123,255,.5); /* Более короткая тень */
}

</style>