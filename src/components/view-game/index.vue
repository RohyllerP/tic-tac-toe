<script setup>
import Linea from "@/components/lineas/linea-1.vue";
import { ref, provide, watch, reactive, onMounted } from "vue";
import Swal from "sweetalert2";

let aux = ref(false);
let nameOne = ref(localStorage.getItem("firstJugador") ?? "");
let nameTwo = ref(localStorage.getItem("secondJugador") ?? "");
let score = ref(localStorage.getItem("score-1") ?? 0);
let scoreTwo = ref(localStorage.getItem("score-2") ?? 0);
let content = ref();

if (nameOne.value != "" && nameTwo.value != "") {
  aux.value = true;
}

// obtener contexto de ref de componente
provide("class", "img-file");

// array para validacion de ganador
let tridimensionArray = reactive([
  [
    { id: "1x1", valor: 0 },
    { id: "1x2", valor: 0 },
    { id: "1x3", valor: 0 },
  ],
  [
    { id: "2x1", valor: 0 },
    { id: "2x2", valor: 0 },
    { id: "2x3", valor: 0 },
  ],
  [
    { id: "3x1", valor: 0 },
    { id: "3x2", valor: 0 },
    { id: "3x3", valor: 0 },
  ],
]);
// funcion para validacion
function encontrarPosicion(id) {
  for (let i = 0; i < tridimensionArray.length; i++) {
    const fila = tridimensionArray[i];
    for (let j = 0; j < fila.length; j++) {
      const elemento = fila[j];
      if (elemento.id === id) {
        return [i, j];
      }
    }
  }
}

// click componente
let auxImg = ref(true);
let imgUrl = ref("../src/assets/img/circulo.svg");
watch(auxImg, () => {
  imgUrl.value = auxImg.value
    ? "../src/assets/img/circulo.svg"
    : "../src/assets/img/close.svg";
});

let auxVal = ref(true);

// reload
const reload = () => {
  for (let i = 0; i < content.value.list.length; i++) {
    content.value.list[i].children[0].removeAttribute("src");
  }
  auxVal.value = true;
  content.value.lineasFirst.lineaVerticalFirst.display = "none";
  auxImg.value = !auxImg.value;
  content.value.lineasFirst.lineaVerticalFirst.left = "0%";
  content.value.lineasFirst.lineaVerticalFirst.tpTp = false;
  content.value.lineasFirst.lineaVerticalFirst.tpBm = false;
  content.value.lineasFirst.lineaVerticalFirst.tpMe = false;
  content.value.lineasFirst.lineaVerticalFirst.ltTp = false;
  content.value.lineasFirst.lineaVerticalFirst.ltMe = false;
  content.value.lineasFirst.lineaVerticalFirst.ltBm = false;
  content.value.lineasFirst.lineaVerticalFirst.dR = false;
  content.value.lineasFirst.lineaVerticalFirst.dL = false;
};
const auxName = ref(nameOne.value);
const messageValidar = () => {
  auxName.value =
    auxName.value == nameOne.value ? nameTwo.value : nameOne.value;
  if (auxName.value == nameOne.value) {
    localStorage.setItem("score-1", ++score.value);
  } else {
    localStorage.setItem("score-2", ++scoreTwo.value);
  }
  auxVal.value = false;
  const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    padding: "20px",
    timer: 2500,
    timerProgressBar: true,
  });

  Toast.fire({
    icon: "success",
    title: "Ganador: " + auxName.value,
  });
  setTimeout(() => {
    reload();
  }, 2500);
};
const changeVal = (event) => {
  const posicion = encontrarPosicion(event.target.id);
  if (auxVal.value) {
    if (!event.target.firstChild.hasAttribute("src")) {
      auxName.value =
        auxName.value == nameOne.value ? nameTwo.value : nameOne.value;
      auxImg.value = !auxImg.value;
      event.target.firstChild.src = imgUrl.value;
      tridimensionArray[posicion[0]][posicion[1]].valor = 1;
      imgUrl.value == "../src/assets/img/circulo.svg"
        ? (tridimensionArray[posicion[0]][posicion[1]].valor = 1)
        : (tridimensionArray[posicion[0]][posicion[1]].valor = 2);
    } else {
      return true;
    }
  }
  (() => {
    // Validación por columnas
    for (let fila of tridimensionArray) {
      if (
        fila[0].valor !== 0 &&
        fila[0].valor === fila[1].valor &&
        fila[1].valor === fila[2].valor
      ) {
        switch (fila[0].id) {
          case "1x1":
            content.value.lineasFirst.lineaVerticalFirst.left = "16%";
            content.value.lineasFirst.lineaVerticalFirst.ltTp = true;
            break;
          case "2x1":
            content.value.lineasFirst.lineaVerticalFirst.left = "49%";
             content.value.lineasFirst.lineaVerticalFirst.ltMe = true;
            break;
          case "3x1":
            content.value.lineasFirst.lineaVerticalFirst.left = "84%";
            content.value.lineasFirst.lineaVerticalFirst.ltBm = true;
            break;
        }
        content.value.lineasFirst.lineaVerticalFirst.display = "block";
        content.value.lineasFirst.lineaVerticalFirst.height = "320px";
        content.value.lineasFirst.lineaVerticalFirst.rotate = "0deg";
        content.value.lineasFirst.lineaVerticalFirst.top = "0px";
        for (let i = 0; i < tridimensionArray.length; i++) {
          for (let j = 0; j < tridimensionArray[i].length; j++) {
            tridimensionArray[i][j].valor = 0;
          }
        }
        messageValidar();
        return true;
      }
    }

    // Validación por filas
    for (let i = 0; i < tridimensionArray.length; i++) {
      if (
        tridimensionArray[0][i].valor !== 0 &&
        tridimensionArray[0][i].valor === tridimensionArray[1][i].valor &&
        tridimensionArray[1][i].valor === tridimensionArray[2][i].valor
      ) {
        switch (tridimensionArray[0][i].id) {
          case "1x1":
            content.value.lineasFirst.lineaVerticalFirst.top = "-205px";
            content.value.lineasFirst.lineaVerticalFirst.tpTp = true;
            break;
          case "1x2":
            content.value.lineasFirst.lineaVerticalFirst.top = "-100px";
            content.value.lineasFirst.lineaVerticalFirst.tpMe = true;
            break;
          case "1x3":
            content.value.lineasFirst.lineaVerticalFirst.top = "20px";
            content.value.lineasFirst.lineaVerticalFirst.tpBm = true;
            break;
        }
        content.value.lineasFirst.lineaVerticalFirst.height = "520px";
        content.value.lineasFirst.lineaVerticalFirst.left = "50%";
        content.value.lineasFirst.lineaVerticalFirst.rotate = "90deg";
        content.value.lineasFirst.lineaVerticalFirst.display = "block";
        for (let i = 0; i < tridimensionArray.length; i++) {
          for (let j = 0; j < tridimensionArray[i].length; j++) {
            tridimensionArray[i][j].valor = 0;
          }
        }
        messageValidar();
        return true;
      }
    }

    // Validación por diagonal principal
    if (
      tridimensionArray[0][0].valor !== 0 &&
      tridimensionArray[0][0].valor === tridimensionArray[1][1].valor &&
      tridimensionArray[1][1].valor === tridimensionArray[2][2].valor
    ) {
      content.value.lineasFirst.lineaVerticalFirst.dR = true;
      content.value.lineasFirst.lineaVerticalFirst.height = "520px";
      content.value.lineasFirst.lineaVerticalFirst.left = "45%";
      content.value.lineasFirst.lineaVerticalFirst.top = "-111px";
      content.value.lineasFirst.lineaVerticalFirst.rotate = "125deg";
      content.value.lineasFirst.lineaVerticalFirst.display = "block";
      for (let i = 0; i < tridimensionArray.length; i++) {
        for (let j = 0; j < tridimensionArray[i].length; j++) {
          tridimensionArray[i][j].valor = 0;
        }
      }
      messageValidar();
      return true;
    }

    // Validación por diagonal secundaria
    if (
      tridimensionArray[0][2].valor !== 0 &&
      tridimensionArray[0][2].valor === tridimensionArray[1][1].valor &&
      tridimensionArray[1][1].valor === tridimensionArray[2][0].valor
    ) {
      content.value.lineasFirst.lineaVerticalFirst.dL = true;
      content.value.lineasFirst.lineaVerticalFirst.height = "520px";
      content.value.lineasFirst.lineaVerticalFirst.left = "48%";
      content.value.lineasFirst.lineaVerticalFirst.top = "-100px";
      content.value.lineasFirst.lineaVerticalFirst.rotate = "-123deg";
      content.value.lineasFirst.lineaVerticalFirst.display = "block";
      for (let i = 0; i < tridimensionArray.length; i++) {
        for (let j = 0; j < tridimensionArray[i].length; j++) {
          tridimensionArray[i][j].valor = 0;
        }
      }
      messageValidar();
      return true;
    }
  })();
};
</script>

<template>
  <div class="div-a">
    <router-link to="/friend">Regresar</router-link>
  </div>
  <div class="div-main" v-if="aux">
    <div class="players">
      <h3>Turno de: {{ auxName }}</h3>
    </div>
    <div class="linea">
      <Linea ref="content" @handleClick="changeVal" />
    </div>
    <div class="footer">
      <div class="score">
        <p>Score {{ nameOne }}: {{ score }}</p>
      </div>
      <div class="score">
        <p>Score {{ nameTwo }}: {{ scoreTwo }}</p>
      </div>
    </div>
  </div>
  <div v-else>
    <h1 class="title-not">No hay jugadores registrados, regresa al menú</h1>
  </div>
</template>

<style scoped>
.title-not {
  color: white;
  padding-left: 30px;
}
.footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 30px;
  padding-right: 80px;
  gap: 40px;
}

.score {
  width: 50px;
  padding-left: 30px;
  font-size: 21px;
  color: white;
}
h3 {
  font-size: 30px;
  color: white;
  font-weight: 300;
  margin-bottom: 40px;
  margin-top: 10px;
}
.div-a {
  padding-left: 30px;
  padding-top: 20px;
}
.linea {
  display: flex;
  justify-content: center;
}
.players {
  display: flex;
  justify-content: center;
}
@media screen and (max-width: 600px) {
  .score > p {
    font-size: 15px;
  }
}
@media screen and (max-width: 400px) {
}
</style>