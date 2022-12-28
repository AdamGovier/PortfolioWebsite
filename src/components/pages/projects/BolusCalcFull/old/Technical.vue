<template>
    <section id="technical">
        <h3>Technical</h3>
        <p>
            Currently the applications front-end is developed with the JavaScript framework Vue.js and is styled with custom made CSS.
            The application is deployed onto mobile devices using Capacitor which provides a bridge between web technologies and native moible features.
        </p>
        <p>
            The backend is using Node.js as it's runtime environment and MongoDB to store relevant data. Currently only nutritional data from users is stored within the database. 
        </p>
        <p class="desktop">
            Below is a small overview of the technologies used.
        </p>
        <div id="tech" class="desktop">
            <TechItem iconSrc="Node.png" name="Node.js" />
            <TechItem iconSrc="Vue.png" name="Vue.js 3" />
            <TechItem iconSrc="Capacitor.png" name="Capacitor" />
            <TechItem iconSrc="MongoDB.png" name="MongoDB" />
        </div>
    </section>
</template>

<style scoped>
    #technical {
        margin-top: 3%;
        margin: 5%;
    }

    #tech {
        margin-top: 10%;
        display: flex;
        justify-content: space-around;
    }

    @media screen and (max-width: 850px) {
        #technical p {
            margin-top: 3%;
        }

        .desktop {
            display: none !important;
        }
    }
</style>

<script>
import TechItem from "./ProjectSkill.vue";

export default {
    components: {
        TechItem
    }
}
</script>