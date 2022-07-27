<template>
    <Nav/>
    <Page :isLandingPage="true">
        <Introduction/>
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

    @font-face {
        font-family: "ITC Avant Garde Gothic Std";
        src: url("./assets/fonts/itcavantgardestd-md.otf");
    }

    body,html {
        height: 100%;
        width: 100%;
    }

    body {
        margin: 0;
        padding: 0;

        font-family: "ITC Avant Garde Gothic Std";
        color: white;
        background-color: black;
    }

    div#app {
        height: 100%;
        width:100%;
        display: flex;
        flex-direction: column;
        align-items: center;
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

export default {
    components: {
        Page,
        Nav,
        Introduction
    }
}
</script>
