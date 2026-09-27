<template>
  <div>
    <h2>Notable Projects</h2>
    <h5>A showcase of projects undertaken in academic and personal contexts.</h5>

    <div>
      <Project href="/blog/2025/portfolio-v2-launch" :thumbnail="GovierLogo" title="Portfolio." status="2023 – Present">
          <p>
            Personal website, originally developed as a standalone Vue application in 2023. Gradually migrated to Astro + Vue throughout 2025 and 2026 to extend functionality.
          </p>
      </Project>

      <Project href="/blog/2025/Crimson-Overview" :thumbnail="CrimsonLogo" title="Crimson." status="2025 | Awarded A Grade">
          <p>
            Crimson is a research project exploring a bespoke prototype full-stack framework that automates backend code generation from front-end components, aiming to simplify and streamline web application development.
          </p>
      </Project>

      <Project href="/blog/2026/Bolus-Calc-Overview" :thumbnail="BolusCalcLogo" title="Bolus Calc." status="2018 - 2023 | Retired / Legacy">
          <p>
            A mobile application that aimed to help better manage my diabetes control. Bolus Calculator is featureful but requires serious and stringent testing to be released to the general public as a medical application. 
          </p>
      </Project>
    </div>
  </div>
</template>



<script lang="ts" setup>
import Project from "./Project.vue";
import CrimsonLogo from "../../../assets/images/projects/Crimson.webp";
import BolusCalcLogo from "../../../assets/images/projects/BolusCalc.webp";
import GovierLogo from "../../../assets/images/projects/Govier.webp";
</script>
