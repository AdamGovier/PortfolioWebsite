<template>
    <!-- <nav></nav> -->
    <Nav/>
    <Page :isLandingPage="true">
        <Introduction/>
    </Page>
    <Page>
        <BolusCalcProj/>
    </Page>
</template>

<style>
    :root {
        --brand-colour: #58AE15;
        --content-width: 80vw;
        --content-mobile-width: 90vw;
        --navBar-height: 20%;
        --navBar-mobile-height: 12.5%;
    }

    ::-webkit-scrollbar {
        width: 0.5em;
    }
    
    ::-webkit-scrollbar-thumb {
        background-color: rgb(25,25,25);
        opacity: 0.5;
        height: 7px !important;
    }

    @font-face {
        font-family: "ITC Avant Garde Gothic Std";
        src: url("./assets/fonts/itcavantgardestd-md.otf");
    }

    @font-face {
        font-family: 'ITC Avant Garde Gothic LT';
        src: url("./assets/fonts/ITC Avant Garde Gothic LT Bold.otf");
    }

    html, body {
        margin: 0;
        height: 100%;
    }

    body {
        font-family: "ITC Avant Garde Gothic Std";
        color: white;
        background-color: black;
    }

    #app {
        height: 100%;
    }

    #app > * {
        margin: 0 auto;
    }

    a {
        color: white;
        font-weight: lighter;
        transition: .25s;
    }
</style>

<script>
import Page from "./components/Page.vue";
import Nav from "./components/Nav.vue";
import Introduction from "./components/sections/Introduction.vue";
import BolusCalcProj from "./components/sections/projects/BolusCalcProj.vue"

export default {
    components: {
        Page,
        Nav,
        Introduction,
        BolusCalcProj
    }
}
</script>
