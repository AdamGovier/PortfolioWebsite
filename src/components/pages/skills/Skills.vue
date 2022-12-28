<template>
    <div id="skills">
        <div class="blurb">
            <h1>Skills</h1>
            <p>Technical Skills.</p>
        </div>

        <div id="skillsHolder">
            <Skill title="JavaScript" type="Language" :image="require('@/assets/images/skills/JavaScript.png')" />
            <Skill title="HTML" type="Markup" :image="require('@/assets/images/skills/HTML.png')" />
            <Skill title="CSS" type="Styling" :image="require('@/assets/images/skills/CSS.png')" />
            <Skill title="Node.js" type="Servers" :image="require('@/assets/images/skills/Node.png')" />
            <Skill title="MongoDB" type="Database" :image="require('@/assets/images/skills/MongoDB.png')" />
            <Skill title="Capacitor.js" type="Mobile Apps" :image="require('@/assets/images/skills/Capacitor.png')" />
            <Skill title="Vue.js" type="Framework" :image="require('@/assets/images/skills/Vue.png')" />
            <Skill title="Java" type="Language" :image="require('@/assets/images/skills/Java.png')" />
            <Skill title="SQL (MYSQL)" type="Database" :image="require('@/assets/images/skills/SQL.png')" />
            <Skill title="$ PHP" type="Language" :image="require('@/assets/images/skills/PHP.png')" />
            <Skill title="Figma" type="UI Design" :image="require('@/assets/images/skills/Figma.png')" />
            <Skill title="Postman" type="API Testing" :image="require('@/assets/images/skills/Postman.png')" />
            <Skill title="Git" type="Source Control" :image="require('@/assets/images/skills/Git.png')" />
            <Skill title="Puppeteer" type="E2E Testing" :image="require('@/assets/images/skills/Puppeteer.png')" />
            <Skill title="Charles Proxy" type="Debugging" :image="require('@/assets/images/skills/CharlesProxy.svg')" />
        </div>
    </div>
</template>

<style>
    #skillsHolder {
        display: grid;
        gap: var(--margin-xlarge);
        grid-template-columns: repeat(5, 1fr);
    }

    #skills {
        margin: var(--margin-large) 0;
        height: 100%;

        display: grid;
        grid-auto-flow: column;
        align-items: center;
        grid-template-columns: 1.25fr 4fr;
        opacity: 0.25;
        transition: all 1s ease-out;
    }

    #skills .blurb p {
        font-style: normal;
        font-size: 18px;

        color: var(--sub-text-colour);
    }

    #skills .blurb h1 {
        font-style: normal;
        font-weight: 700;
    }

    @media screen and (max-width: 1300px) {
        #skillsHolder {
            grid-template-columns: repeat(4, 1fr);
            gap: var(--margin-medium);
        }
    }


    @media screen and (max-width: 850px) {
        #skills {
            display: flex;
            flex-direction: column;
            align-items: center;

            margin-bottom: 15%;
        }

        #skills .blurb p {
            display: none;
        }

        #skills .blurb {
            text-align: center;
            margin-top: 25%;
        }

        #skillsHolder {
            grid-template-columns: repeat(2, 1fr);
            gap: var(--margin-medium);
            margin-top: 15%;
        }
    }
</style>

<script>
import Skill from "./components/Skill.vue";
import Animations from "@/scripts/Animations.js";

export default {
    components: {
        Skill
    },
    mounted() {
        Animations.registerScrollController('#skills', 'fade-in');
    }
}
</script>