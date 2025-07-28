<template>
  <div id="projects">
      <div class="blurb">
          <h1>Projects</h1>
          <p>Personal Projects</p>
      </div>

      <div id="projects-container">
        <div class="project-container">
          <img :src="CrimsonLogo.src.toString()" />
        </div>
      </div>
  </div>
</template>

<style>
#projects {
  margin-top: var(--margin-large);
  display: flex;
  align-items: center;
}

#projects .blurb {
  flex: 1;
}

#projects-container {
  height: 60dvh;
  border-radius: 25px;
  display: grid;
  gap: var(--margin-large);
  grid-template-columns: repeat(2, 1fr);
  flex: 2;
}

.project-container {
  height: 100%;
  background-color: var(--secondary);
}

.project-container {
  padding: 10%;
}
</style>

<script setup lang="ts">
import CrimsonLogo from "../../assets/images/projects/Crimson.png";
</script>