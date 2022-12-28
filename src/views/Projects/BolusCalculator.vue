<template>
    <Header />

    <main id="projectContents">
        <Introduction />
        <Outcome />
        <Technical />
    </main>
</template>

<style>
    main#projectContents {
        min-height: 65%;
        background-color: white;
        color: black;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    main#projectContents a {
        color: black;
    }

    main#projectContents > * {
        width: 80%;
    }

    main#projectContents h2 {
        font-size: 48px;
    }

    main#projectContents p {
        font-family: Arial;
        margin-top: 2%;
        color: rgb(15,15,15);

        font-size: 25px;
        line-height: 180%;
    }
</style>

<script>
import Header from "@/components/pages/projects/BolusCalcFull/Header.vue";
import Introduction from "@/components/pages/projects/BolusCalcFull/Introduction.vue";
import Outcome from "@/components/pages/projects/BolusCalcFull/Outcome.vue"
import Technical from "@/components/pages/projects/BolusCalcFull/Technical.vue";

export default {
    components: {
        Header,
        Introduction,
        Outcome,
        Technical
    }
}
</script>
