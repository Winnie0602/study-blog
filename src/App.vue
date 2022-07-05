<template>
  <div class="backGround">
      <img src="./assets/img/laptop-g81a208c27_1920.jpg" alt="img" class="backGround-img">
      <div class="whiteBoard">
        <router-view/>
      </div>
  </div>  
</template>

<style>
*{
  padding:0;
  margin:0;
  box-sizing: border-box;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.backGround{
  background-color: #D7726A;
  height:100vh;
  display: flex;
  justify-content:space-between ;
}
.backGround-img{
  width:45vw;
  height:100vh;
  object-fit:cover;
}
.whiteBoard{
  background-color: white;
  align-items: center;
  margin: 20px 15px;
  width:90%;
  padding: 50px;
  border-radius: 0.3rem;
  overflow: scroll;
  
}
</style>
