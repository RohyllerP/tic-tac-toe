<script setup>
import {
  reactive,
  ref,
  onMounted,
  watch,
  computed,
  onUnmounted,
} from "vue";
let firstFirst = reactive([
  [{ id: "1x1" }, { id: "1x2" }, { id: "1x3" }],
  [{ id: "2x1" }, { id: "2x2" }, { id: "2x3" }],
  [{ id: "3x1" }, { id: "3x2" }, { id: "3x3" }],
]);

// cambiar variables por redimensión
let lineasFirst = reactive({
  lineaVerticalFirst: {
    left: "0%",
    top: "0px",
    display: "none",
    rotate: "0deg",
    height: "520px",
    tpTp: false,
    tpBm: false,
    tpMe: false,
    dR: false,
    dL: false
  },
});


// defineExpose
const list = ref([]);
defineExpose({ list, lineasFirst });

//  emit
const emit = defineEmits(["handleClick"]);
const changeVal = (event) => {
  emit("handleClick", event);
};
</script> 
<template>
  <div>
    <div class="linea"></div>
    <div class="line-div">
      <div class="line-div-1">
        <div
          ref="list"
          class="p-div-line"
          :id="item.id"
          @click="changeVal"
          v-for="(item, index) in firstFirst[0]"
          :key="index"
        >
          <img class="img-line" alt="" />
        </div>
      </div>
      <div class="line-div-2">
        <div
          ref="list"
          class="p-div-line"
          :id="item.id"
          @click="changeVal"
          v-for="(item, index) in firstFirst[1]"
          :key="index"
        >
          <img class="img-line" alt="" />
        </div>
      </div>
      <div class="line-div-3">
        <div
          ref="list"
          class="p-div-line"
          :id="item.id"
          @click="changeVal"
          v-for="(item, index) in firstFirst[2]"
          :key="index"
        >
          <img class="img-line" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
/* linea */
.linea {
  position: relative;
}
.linea:before {
  content: "";
  position: absolute;
  background: black;
  left: v-bind("lineasFirst.lineaVerticalFirst.left");
  top: v-bind("lineasFirst.lineaVerticalFirst.top");
  display: v-bind("lineasFirst.lineaVerticalFirst.display");
  transform: rotate(v-bind("lineasFirst.lineaVerticalFirst.rotate"));
  width: 10px;
  height: v-bind("lineasFirst.lineaVerticalFirst.height");
  z-index: 999;
}
.line-div {
  display: grid;
  grid-template-columns: repeat(3, 170px);
  grid-column-gap: 0px;
  grid-row-gap: 0px;
}

.p-div-line {
  display: flex;
  justify-content: flex-end;
  position: relative;
  padding-top: 100px;
}
.p-div-line .img-line {
  width: 80px;
  position: absolute;
  top: 10px;
  right: 35px;
}
.line-div-1 > div:first-of-type,
.line-div-2 > div:first-of-type,
.line-div-1 > div:nth-of-type(2),
.line-div-2 > div:nth-of-type(2) {
  border-right: 10px solid white;
  border-bottom: 10px solid white;
}
.line-div-1 > div:nth-of-type(3),
.line-div-2 > div:nth-of-type(3) {
  border-right: 10px solid white;
}
.line-div-3 > div:first-child,
.line-div-3 > div:nth-of-type(2) {
  border-bottom: 10px solid white;
}
@media screen and (max-width: 680px) {
  .line-div {
    grid-template-columns: repeat(3, 150px);
  }
  .p-div-line .img-line {
    right: 28px;
  }
  .linea:before {
    top: v-bind("lineasFirst.lineaVerticalFirst.tpTp ? "-180px" : lineasFirst.lineaVerticalFirst.tpBm ? "46px" : lineasFirst.lineaVerticalFirst.tpMe ? "-68px"  : lineasFirst.lineaVerticalFirst.dR ? "-85px" : lineasFirst.lineaVerticalFirst.dL ? "-66px" : lineasFirst.lineaVerticalFirst.top");
    height: v-bind("lineasFirst.lineaVerticalFirst.tpTp || lineasFirst.lineaVerticalFirst.tpBm || lineasFirst.lineaVerticalFirst.tpMe  || lineasFirst.lineaVerticalFirst.dR || lineasFirst.lineaVerticalFirst.dL ? "455px" : lineasFirst.lineaVerticalFirst.height");
    left: calc(v-bind("lineasFirst.lineaVerticalFirst.left") - 3px);
  }
}
@media screen and (max-width: 532px) {
  .line-div {
    grid-template-columns: repeat(3, 130px);
  }
  .linea:before{
    top: v-bind("lineasFirst.lineaVerticalFirst.tpTp ? "-150px" : lineasFirst.lineaVerticalFirst.tpBm ? "76px" : lineasFirst.lineaVerticalFirst.tpMe ? "-38px" : lineasFirst.lineaVerticalFirst.dR ? "-65px" : lineasFirst.lineaVerticalFirst.dL ? "-51px" : lineasFirst.lineaVerticalFirst.top");
    height: v-bind("lineasFirst.lineaVerticalFirst.tpTp || lineasFirst.lineaVerticalFirst.tpBm || lineasFirst.lineaVerticalFirst.tpMe  ? "395px" : lineasFirst.lineaVerticalFirst.dR || lineasFirst.lineaVerticalFirst.dL ? "415px" : lineasFirst.lineaVerticalFirst.height");
    transform: rotate(v-bind("lineasFirst.lineaVerticalFirst.dR ? "130deg" : lineasFirst.lineaVerticalFirst.dL ? "-130deg"  : lineasFirst.lineaVerticalFirst.rotate"));
  }
  .p-div-line .img-line {
    right: 15px;
  }
}
@media screen and (max-width: 430px) {
  .line-div {
    grid-template-columns: repeat(3, 105px);
  }
  .linea:before{
    top: v-bind("lineasFirst.lineaVerticalFirst.tpTp ? "-105px" : lineasFirst.lineaVerticalFirst.tpBm ? "104px" : lineasFirst.lineaVerticalFirst.tpMe ? "0px" : lineasFirst.lineaVerticalFirst.dR ? "-40px" : lineasFirst.lineaVerticalFirst.dL ? "-35px" : lineasFirst.lineaVerticalFirst.top");
    height: v-bind("lineasFirst.lineaVerticalFirst.tpTp || lineasFirst.lineaVerticalFirst.tpBm || lineasFirst.lineaVerticalFirst.tpMe  || lineasFirst.lineaVerticalFirst.dR || lineasFirst.lineaVerticalFirst.dL ? "382px" : lineasFirst.lineaVerticalFirst.height");
    transform: rotate(v-bind("lineasFirst.lineaVerticalFirst.dR ? "130deg" : lineasFirst.lineaVerticalFirst.dL ? "-135deg"  : lineasFirst.lineaVerticalFirst.rotate"));
  }
  .p-div-line .img-line {
    width: 70px;
    top: 40px;
    right: 14px;
  }
}
</style>