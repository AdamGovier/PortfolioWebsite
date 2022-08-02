<template>
    <CategoryHeader value="2022 Portfolio" />
    <Project projectID="BolusCalc">
        <Hero :image="require('../../../assets/images/Mockups.png')"/>
        <Blurb type="mobile app" title="Bolus Calculator" href="/BolusCalc">
            A mobile application that helps better manage my diabetes control which is planned 
            to be distributed to other diabetics around the world for free!
        </Blurb>
    </Project>
</template>

<script>
// Project Components
import Project from "./components/Project.vue";
import Hero from "./components/Hero.vue";
import Blurb from "./components/Blurb.vue";

// Other Components
import CategoryHeader from "../../common/headings/CategoryHeader.vue";

export default {
    components: {
        Project,
        Hero,
        Blurb,

        CategoryHeader
    }
}
</script>