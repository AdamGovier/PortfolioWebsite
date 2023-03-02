// Holds all the information for the main page e.g. About, Portfolio, Skills, Contact.

<template>
    <Page :isLandingPage="true">
        <Introduction/>
    </Page>

    <!-- ID's for scrolling on router anchor click -->

    <Page id="portfolio">
        <BolusCalcProj/>
        <EasyGPT/>
    </Page>
    
    <Page id="Skills">
        <Skills/>
    </Page>

    <Contact/>
</template>

<script>
import Page from "@/components/common/Page.vue";
import Introduction from "@/components/pages/Introduction.vue";
import BolusCalcProj from "@/components/pages/projects/BolusCalcProj.vue";
import EasyGPT from "@/components/pages/projects/EasyGPT.vue";
import Skills from "@/components/pages/skills/Skills.vue";
import Contact from "@/components/common/Contact.vue";

export default {
    components: {
        Page,
        Introduction,
        BolusCalcProj,
        EasyGPT,
        Skills,
        Contact
    }
}
</script>