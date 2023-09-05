<script setup>
document.title = "Home";
import ButtonComponent from "@/components/buttons/button-1.vue";
</script>

<template>
  <main class="main">
    <div class="main-container">
      <div class="main-div">
        <h1>Tic Tac Toe</h1>
      </div>
      <div class="main-div main-btns">
        <ButtonComponent
          class="btn-main"
          buttonText="Jugar con Robot"
          ruta="play-robot"
        />
        <ButtonComponent
          class="btn-main"
          buttonText="Jugar con compañero"
          ruta="play-friend"
        />
      </div>
      <div class="main-div main-footer">
        <div>
          <p>Desarrollado por: Rohyller Pereira</p>
        </div>
        <div class="flex">
          <a
            class="a-img"
            href="https://rohyllerp.github.io/briefcase/"
            target="_blank"
          >
            <img src="@/assets/img/portafolio.png" alt="portafolio" />
          </a>
          <a class="a-img" href="https://github.com/RohyllerP" target="_blank">
            <img src="@/assets/img/github.png" alt="github" />
          </a>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
.flex {
  display: flex;
}
.a-img {
  cursor: pointer;
}
.main .main-container {
  display: flex;
  flex-direction: column;
  height: 100vh;
}
.main .main-div {
  margin-top: auto;
}
.main .main-container h1 {
  font-family: "Kalam", cursive;
  font-size: 5.5em;
  color: white;
  word-spacing: 15px;
  display: flex;
  justify-content: center;
}
.main .main-btns {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.main-footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 40px;
}
.main-footer p {
  color: white;
  font-size: 17px;
}
.main-footer img {
  width: 40px;
  height: 40px;
  margin: 0px 10px;
}
@media screen and (max-width: 568px) {
  .main .main-container h1 {
    font-size: 3.5em;
  }
  .main-footer {
    flex-direction: column;
  }
  .main-footer > div {
    padding: 10px;
  }
}
@media screen and (max-width: 420px) {
  .main-footer {
    padding: 20px 10px;
  }
}
@media screen and (max-width: 360px) {
  .main .main-container h1 {
    font-size: 2.7em;
  }
  .main-footer p {
    font-size: 14px;
  }
  .main-footer img {
    width: 35px;
    height: 35px;
  }
}
</style>