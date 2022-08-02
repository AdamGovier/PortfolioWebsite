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
        height: 100%;

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

    .projectHolder.fade-in {
        opacity: 1;
    }

    @media (max-width: 850px) {
        .projectHolder {
            width: 100%;
            flex-direction: column;
        }
    }
</style>

<script>
// NPM Packages
import ScrollMagic from "scrollmagic";

export default {
    props: ["projectID"],
    mounted() {
        const scrollController = new ScrollMagic.Controller();

        const scene = new ScrollMagic.Scene({
            triggerElement: `.projectHolder[data-id='${this.projectID}']`
        }).setClassToggle(`.projectHolder[data-id='${this.projectID}']`, 'fade-in')
        .addTo(scrollController);

        const scene2 = new ScrollMagic.Scene({
            triggerElement: `.projectHolder[data-id='${this.projectID}']`
        }).setClassToggle(`.projectHolder[data-id='${this.projectID}'] .blurb`, 'y-in')
        .addTo(scrollController);
    }
}
</script>