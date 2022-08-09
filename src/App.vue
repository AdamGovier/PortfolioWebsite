<template>
    <Nav/>
    <router-view></router-view>
    <!-- <Footer/> -->
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
        position: fixed;
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

    html {
        scroll-behavior: smooth;
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

    /* Animations */

    .fade-in {
        opacity: 1 !important;
    }
</style>

<script>
import Nav from "@/components/common/navigation/Nav.vue";
import Footer from "@/components/pages/Footer.vue";

export default {
    components: {
        Nav,
        Footer
    }
}
</script>