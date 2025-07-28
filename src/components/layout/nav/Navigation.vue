<template>
  <nav>
      <NavFullsize/>
      <!-- <NavMinimised/> -->
  </nav>
</template>

<style>
    * {
        margin-block: 0;
    }

    html[data-theme="light"] nav {
      padding-bottom: 2%;
      border-bottom: 2px solid var(--accent);
    }

    nav a.active {
        text-decoration: underline;
        text-underline-offset: 10px;
        cursor: default;
    }

    nav a {
        color: var(--text-colour);
        text-decoration: none;
        font-size: 22px;
        font-weight: lighter;
        
        transition: .25s;
    }

    nav a:hover:not(a.active) {
        color: var(--accent);
    }
</style>

<script lang="ts" setup>
import NavFullsize from "./Fullsize.vue";
// import NavMinimised from "./Minimised.vue";
</script>