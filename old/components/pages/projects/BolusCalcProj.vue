<template>
    <CategoryHeader value="2023 Portfolio" />
    <Project projectID="BolusCalc">
        <Hero :image="require('../../../assets/images/Projects/BolusCalc/Mockups.png')"/>
        <Blurb type="mobile app" title="Bolus Calculator" href="/Projects/BolusCalculator">
            <template v-slot:content>
                I've created a mobile application that helps better manage my diabetes control. In the future, it will be distributed to other diabetics worldwide. Now here comes the good part... It's completely free!
            </template>
            <template v-slot:footer>
                <MasterLink title="Find Out More" href="/Projects/BolusCalculator" />
            </template>
        </Blurb>
    </Project>
</template>

<script>
// Project Components
import Project from "./components/Project.vue";
import Hero from "./components/Hero.vue";
import Blurb from "./components/Blurb.vue";
import MasterLink from "./components/ProjectActions/MasterLink.vue";

// Other Components
import CategoryHeader from "../../common/headings/CategoryHeader.vue";

export default {
    components: {
        Project,
        Hero,
        Blurb,
        MasterLink,

        CategoryHeader
    }
}
</script>