<template>
    <section :class="{ landingPage: this.isLandingPage }" :style="overrideWidth">
        <slot></slot>
    </section>
</template>

<style>
    section {
        width: var(--content-width);
        height: 100%;
    }

    .landingPage {
         height: 64%;
    }

    @media screen and (max-width: 850px) {
        .landingPage {
            height: calc(100% - var(--navBar-mobile-height) - 35%);
        }
        
        section {
            width: var(--content-mobile-width);
            height: auto;
        }
    }
</style>

<script>
export default {
    props: ['isLandingPage', 'overrideWidth'],
    computed: {
        overrideWidth() {
            return this.overrideWidth ? `width: ${this.overrideWidth};` : "";
        }
    }
}
</script>
