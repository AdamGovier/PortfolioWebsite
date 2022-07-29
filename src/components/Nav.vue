<template>
    <nav>
        <NavFullsize/>
        <NavMinimised/>
    </nav>
</template>

<style>
    nav {
        width: var(--content-width);
        height: var(--navBar-height);
    }

    * {
        margin-block: 0;
    }

    #Logo {
        text-align: center;
        font-family: "ITC Avant Garde Gothic Std";
        color: var(--brand-colour);
        font-size: 36px;
    }

    nav a.active {
        text-decoration: underline;
        text-underline-offset: 10px;
        cursor: default;
    }

    nav a {
        color: white;
        text-decoration: none;
        font-size: 22px;
        font-weight: lighter;
        
        transition: .25s;
    }

    nav a:hover:not(a.active) {
        color: lightgreen;
    }

    @media screen and (max-width: 850px) {
        nav {
            width: 100vw;
            height: var(--navBar-mobile-height);
        }
    }
</style>

<script>
import NavFullsize from "./nav/Fullsize.vue";
import NavMinimised from "./nav/Minimised.vue";

export default {
    components: {
        NavFullsize,
        NavMinimised
    }
}
</script>