<template>
    <div class="dialog" v-if="show === true" @click="hideDialog">
      <div class="dialog__content" @click.stop>
        <slot></slot>
      </div>
    </div>
</template>

<script>
import toggleMixin from '@/mixins/toggleMixin';

export default {
    name: "my-dialog",
    mixins:[toggleMixin]
}
</script>

<style scoped>
.dialog {
  top:0;
  bottom:0;
  left:0;
  right:0;
  position: fixed;
  background-color: rgba(0,0,0,0.4);
  display: flex;
  align-items: center;
  justify-content: center;
  
}

.dialog__content {
  background-color: white;
  border-radius: 12px;
  min-height: 200px;
  min-width: 360px;
  padding: 15px;
}

</style>