<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <header>
    <img alt="Śląski Maker Space" class="logo" src="@/assets/logo.svg" width="300" height="125" />

    <div class="wrapper">
      <HelloWorld msg="My już w KATO!" />

      <nav>
        <RouterLink to="/">Wizja</RouterLink>
        <RouterLink to="/about">Więcej</RouterLink>
        <RouterLink to="/contact">Kontakt</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
  -webkit-filter: drop-shadow(1px 1px 2px hsla(244, 100%, 50%, 0.896));
  filter: drop-shadow(1px 1px 2px hsla(244, 100%, 50%, 0.896));
  /* Similar syntax to box-shadow */
}

nav {
  width: 100%;
  font-size: 24px;
  text-align: center;
  margin-top: 2rem;
  padding: 20px;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;

  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
