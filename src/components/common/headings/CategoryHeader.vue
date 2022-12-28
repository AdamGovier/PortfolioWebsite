<template>
    <h4 class="catHeader">// {{ value }} //</h4>
</template>

<style scoped>
    .catHeader {
        width: 0; /* Depopulate Y axis */
        margin-left: auto;

        writing-mode: vertical-lr;

        position: absolute;
        right: 8%;
        top: 85%;

        font-family: "Arial";
        text-transform: uppercase;
        font-weight: lighter;
        white-space: nowrap;
        letter-spacing: 5px;
    }

    @media screen and (max-width: 850px) {
        .catHeader {
            writing-mode:initial;
            position: static;
            margin: 0;
            margin-bottom: 8%;
            padding-top: 8%;
            width: auto;
            text-align: center;
            opacity: 0.25;
        }
    }
</style>

<script>
import Animations from "@/scripts/Animations.js";

export default {
    props: ['value']
}
</script>
