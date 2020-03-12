<template>
  <div class="home">
    <router-link to="/math">
      <button class="math"></button>
    </router-link>
    <router-link to="/english">
      <button class="english"></button>
    </router-link>
    <router-link to="/politics">
      <button class="politics"></button>
    </router-link>
    <router-link to="/specialized-course">
      <button class="specialized-course"></button>
    </router-link>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home",
  components: {}
};
</script>

<style lang="scss" scoped>
.home {
  padding: 20px;
  display: flex;
  width: 100vw;
  height: 100vh;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
}

button {
  width: 35vw;
  height: 45vh;
  cursor: pointer;
  border: solid black 2px;
}

button:hover {
  border-color: rgba(42, 30, 150, 0.6);
}

button.english {
  background: url(../assets/english.png);
  background-size: 100% 100%;
  background-repeat: no-repeat;
}

button.math {
  background: url(../assets/math.png);
  background-size: 100% 100%;
  background-repeat: no-repeat;
}

button.politics {
  background: url(../assets/politics.png);
  background-size: 100% 100%;
  background-repeat: no-repeat;
}

button.specialized-course {
  background: url(../assets/specialized-course.png);
  background-size: 100% 100%;
  background-repeat: no-repeat;
}
</style>
