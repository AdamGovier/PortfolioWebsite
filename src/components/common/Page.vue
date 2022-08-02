<template>
    <section :class="{ landingPage: this.isLandingPage }">
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
        }
    }
</style>

<script>
export default {
    props: ['isLandingPage'],
    mounted() {
        console.log(this.isLandingPage)
    }
}
</script>
