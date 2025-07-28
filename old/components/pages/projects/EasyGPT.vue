<template>
    <Project projectID="easyGPT" style="margin-top: 10%;">
        <Hero :image="require('../../../assets/images/Projects/easyGPT/Thumbnail.png')"/>
        <Blurb type="npm package" title="easyGPT" href="/Projects/BolusCalculator">
            <template v-slot:content>
                easygpt - the ChatGPT API wrapper - makes integrating natural language processing into your projects a breeze. Generate accurate and relevant responses to any prompt with ease and streamline your development process. Try easygpt today! 🤖💬
            </template>
            <template v-slot:footer>
                <MasterLink title="Use easyGPT" extHref="https://www.npmjs.com/package/easygpt" />
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
import MasterLinkVue from './components/ProjectActions/MasterLink.vue';

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