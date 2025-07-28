// Top Level Component for Projects and should wrap around child project components also in this folder.

<template>
    <div class="pageContainer">
        <div class="projectHolder" :data-id="projectID">
            <slot></slot>
        </div>
    </div>
</template>

<style>
    .pageContainer {
        margin-top: 3%;
        height: 100%;
        width: var(--content-width);

        display: flex;
        justify-content: center;
        align-items: center;
    }


    .projectHolder {
        display: flex;
        align-items: center;

        opacity: 0.25;
        transition: all 1s ease-out;
    }

    @media (max-width: 850px) {
        .projectHolder {
            width: 100%;
            flex-direction: column;
        }

        .pageContainer {
            width: 100%;
            margin-top: 20% !important;
        }
    }
</style>

<script>
import Animations from "@/scripts/Animations.js";

export default {
    props: ["projectID"],
    mounted() {
        Animations.registerScrollController(`.projectHolder[data-id='${this.projectID}']`, 'fade-in');
    }
}
</script>