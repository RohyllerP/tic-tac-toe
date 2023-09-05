<script setup>
defineProps({
    buttonText: {
      type: String,
      default: 'Haz clic aquí'
    },
    tipo:{
      type: String,
      default: 'button'
    },
})
// emit
const emit = defineEmits(['reload']);
const changeVal = (event) =>{
  emit('reload', event);
}
</script>

<template>
    <button class="btn-component" :type="tipo" @click="changeVal">
        <p>{{ buttonText }}</p>
    </button>
</template>
<style scoped>
p{
  color: white;
  text-decoration: none;
  padding: 5px 17px;
  border-radius: 5px;
  background-color: var(--btn-bg);
  border: 1px solid transparent;
  margin: 15px 0px;
  color: white;
  font-weight: 500;
  font-size: 16px;
  cursor: pointer;
  transition: all .3s ease-in-out;
  width: 30vw;
}
.btn-component {
  background-color: transparent;
  border: 0px;
}
a:hover{
  background-color: var(--btn-bg-light);
}
</style>