<script setup>
import {ref} from 'vue';
defineProps({
    ruta: {
      type: String,
      default: "",
      required: true
    },
    buttonText: {
      type: String,
      default: 'Haz clic aquí'
    },
    tipo:{
      type: String,
      default: 'button'
    },
    tamano:{
      type: String,
      default: "250px"
    }
})
// emit
const emit = defineEmits(['handleClick']);
const changeVal = (event) =>{
  emit('handleClick', event);
}
</script>
<template>
    <button class="btn-component" :type="tipo" @click="changeVal">
        <router-link :to="{name: ruta}">{{ buttonText }}</router-link>
    </button>
</template>
<style scoped>
a{
  color: white;
  text-decoration: none;
  padding: 5px 17px;
  border-radius: 5px;
  background-color: var(--btn-bg);
  border: 1px solid transparent;
  color: white;
  font-weight: 500;
  font-size: 16px;
  cursor: pointer;
  transition: all .3s ease-in-out;
  display: inline-block;
  width: 50vw;
}
.btn-component {
  background-color: transparent;
  border: 0px;
  margin: 15px 15px;
}
a:hover{
  background-color: var(--btn-bg-light);
}
</style>