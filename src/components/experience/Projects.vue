<template>
  <div class="spacer">
    <h2 class="title">Notable Projects</h2>
    <h5 class="text-small sub-text" style="margin-top: var(--margin-small);">A showcase of projects undertaken in academic and personal contexts.</h5>

    <div class="projects-grid">
      <Project :thumbnail="GovierLogo" title="Portfolio." status="V1 2023 | V2 2025">
          <p class="text-black">
            Personal site, developed originally as a Vue standalone application. Recently in 2025 migrated to Astro + Vue for extended capabilities.
          </p>
      </Project>

      <Project :thumbnail="CrimsonLogo" title="Crimson." status="2025 | Awarded A Grade">
          <p class="text-black">
            Crimson is a research project exploring a bespoke prototype full-stack framework that automates backend code generation from front-end components, aiming to simplify and streamline web application development.
          </p>
      </Project>

      <Project :thumbnail="BolusCalcLogo" title="Bolus Calc." status="2018 - 2023 | Retired / Legacy">
          <p class="text-black">
            A mobile application that aimed to help better manage my diabetes control. Bolus Calculator is featureful but requires serious and stringent testing to be realeased to the general public as a medical application. 
          </p>
      </Project>
    </div>
  </div>
</template>

<style>
.projects-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-column-gap: var(--margin-medium);
  justify-content: space-between;

  margin-top: var(--margin-large);

  min-height: 60dvh;
}

@media (min-width: 1401px) {
  .projects-grid {
    grid-template-columns: repeat(4, 1fr);
  }
}

@media (max-width: 1400px) and (min-width: 801px) {
  .projects-grid {
    grid-template-columns: repeat(2, 1fr);
    min-height: 40dvh;
  }
}

@media (max-width: 800px) {
  .projects-grid {
    grid-template-columns: 1fr;
    grid-column-gap: 0;
  }
}
</style>

<script lang="ts" setup>
import Project from "./Project.vue";
import CrimsonLogo from "../../assets/images/projects/Crimson.webp";
import BolusCalcLogo from "../../assets/images/projects/BolusCalc.webp";
import GovierLogo from "../../assets/images/projects/Govier.webp";
</script>