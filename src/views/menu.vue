<script setup>
document.title = "Home";
</script>

<template>
  <main class="main">
    <div class="main-container">
      <div class="main-div">
        <h1>Tic Tac Toe</h1>
      </div>
      <div class="main-div main-btns">
        <div>
          <button class="btn-main">
            <router-link :to="{name: 'robot'}">Jugar con Robot</router-link>
          </button>
        </div>
        <div>
          <button class="btn-main">
            <router-link :to="{name: 'friend'}">Jugar con compañero</router-link>
          </button>
        </div>
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
            <img
              src="@/assets/img/portafolio.png"
              alt="portafolio"
            />
          </a>
          <a class="a-img" href="https://github.com/RohyllerP" target="_blank">
            <img
              src="@/assets/img/github.png"
              alt="github"
            />
          </a>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
a{
  color: white;
  text-decoration: none;
}
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
.main-btns .btn-main {
  padding: 7px 23px;
  border-radius: 5px;
  background-color: var(--btn-bg);
  border: 1px solid transparent;
  margin: 15px 0px;
  color: white;
  font-weight: 500;
  font-size: 18px;
  width: 250px;
  cursor: pointer;
  transition: all .3s ease-in-out
}
.main-btns .btn-main:hover{
  background-color: var(--btn-bg-light);
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
  .main-btns .btn-main {
    padding: 4px 18px;
    font-weight: 400;
    font-size: 15px;
  }
}
@media screen and (max-width: 420px) {
  .main-footer {
    padding: 20px 10px;
  }

  .main-btns .btn-main {
    padding: 3px 15px;
    font-weight: 400;
    font-size: 13px;
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