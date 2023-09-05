<script setup>
import ButtonComponent from "@/components/buttons/button-1.vue";
import ButtonTwo from "@/components/buttons/button-2.vue";
import { ref, reactive, watch } from "vue";
import Swal from "sweetalert2";
let firstJugador = ref("");
let secondJugador = ref("");
let aux = ref(true);
let friendBtn = ref("");

function handleKey(event) {
  if (firstJugador.value.length > 19 || secondJugador.value.length > 19) {
    aux.value = false;
    styleObject.styles.border = "1px solid red";
    styleObject.styles.borderTwo = "1px solid red";
    if (event.keyCode !== 8) {
      Swal.fire({
        position: "center",
        icon: "error",
        title: "Superó los 20 caracteres",
        timer: 2000,
      });
    }
  } else {
    styleObject.styles.border = "1px solid white";
    styleObject.styles.borderTwo = "1px solid black";
  }
}
const styleObject = reactive({
  styles: {
    border: "1px solid white",
    borderTwo: "1px solid black",
  },
});

const handleClick = () => {
  if (firstJugador.value == "") {
    Swal.fire({
      position: "center",
      icon: "error",
      title: "El primer jugador está vacio",
      timer: 2000,
    });
    return false;
  }
  if (secondJugador.value == "") {
    Swal.fire({
      position: "center",
      icon: "error",
      title: "El segundo jugador está vacio",
      timer: 2000,
    });
    return false;
  }
  if (!aux) {
    alert("max de caracteres en los jugadores ");
    return false;
  }
  return true;
};
watch([firstJugador, secondJugador], () => {
  if (firstJugador.value != "" || secondJugador.value != "") {
    friendBtn.value = "";
  }
  if (firstJugador.value === secondJugador.value) {
    friendBtn.value = "";
    setTimeout(() => {
      Swal.fire({
        position: "center",
        icon: "error",
        title: "Los jugadores no pueden ser iguales",
        timer: 2000,
      });
    }, 1000);
  } 
  if(firstJugador.value != "" && secondJugador.value != ""  &&  (firstJugador.value !== secondJugador.value)){
    localStorage.setItem("firstJugador", firstJugador.value);
    localStorage.setItem("secondJugador", secondJugador.value);
    localStorage.setItem("score-1", "0");
    localStorage.setItem("score-2", "0");
    friendBtn.value = "game-friend";
  }
});
</script> 
<template>
  <div class="contain">
    <header class="header">
      <router-link to="/">Inicio</router-link>
    </header>
    <main class="main">
      <form id="form" class="form" @submit.prevent="">
        <div class="form-div">
          <div>
            <label for="first-jugador">Ingresa el nombre del 1 jugador</label>
            <input
              class="input"
              type="text"
              id="first-jugador"
              v-model="firstJugador"
              @keyup="handleKey"
              maxlength="19"
              autocomplete="off"
            />
          </div>
          <hr />
          <div>
            <label for="second-jugador">Ingresa el nombre del 2 jugador</label>
            <input
              class="input"
              type="text"
              id="second-jugador"
              v-model="secondJugador"
              @keyup="handleKey"
              maxlength="19"
              autocomplete="off"
            />
          </div>
        </div>
        <div class="btn-div">
          <div>
            <ButtonComponent
              @click="handleClick"
              buttonText="Entrar"
              tipo="button"
              :ruta="friendBtn"
              class="btn"
            />
          </div>
          <div>
            <ButtonComponent
              tipo="button"
              buttonText="Última jugada"
              ruta="game-last"
              class="btn"
            />
          </div>
        </div>
      </form>
    </main>
  </div>
</template>

<style>
.btn a {
  width: 30vw;
}
.a-oculto {
  display: none;
}
.error {
  color: red;
  font-size: 13px;
  padding-top: 5px;
}
.contain {
  display: flex;
  flex-direction: column;
  height: 100vh;
  padding: 25px 40px;
}

.main {
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
}

.form .form-div {
  display: flex;
  justify-content: space-between;
  color: white;
}
.form .form-div div {
  display: flex;
  flex-direction: column;
  padding-top: 20px;
  padding-bottom: 50px;
}

.form .btn-div {
  display: flex;
  justify-content: space-around;
  padding-top: 2.5em;
}
.form .input {
  background-color: transparent;
  border: v-bind("styleObject.styles.border");
  transition: all 0.2s ease-in-out;
  margin-top: 13.5px;
  padding: 4.5px 10px;
  color: white;
}

.form .input:focus {
  outline: none;
  border: v-bind("styleObject.styles.borderTwo");
}

a {
  color: white;
  font-weight: 500;
  font-size: 18px;
  text-decoration: none;
}
@media screen and (max-width: 768px) {
  hr {
    display: none;
  }
  .form .form-div {
    display: block;
  }
}
@media screen and (max-width: 420px) {
  .form .btn-div {
    display: block;
  }
  .form .btn-div button {
    width: 100%;
  }
  .form .btn-div {
    padding: 0px;
  }
  .form label {
    font-size: 14px;
  }
  .contain {
    padding: 25px 20px;
  }
  .btn {
    position: relative;
    left: -15px;
  }
  .btn a {
    width: 80vw;
  }
}
</style>