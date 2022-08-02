<template>
    <div class="hero" :style="bgImage"></div>
</template>

<style>
    .projectHolder .hero {
        width: 50vw;
        height: 80vh;
        margin-lefT: 5vw;

        background-color: slategray;
        background-size: cover;
        background-position: 50% 0;

        border: 2px solid var(--brand-colour);
    }

    @media (max-width: 850px) {
        .projectHolder .hero {
            width: 100%;
            height: 40vh;
            margin: 0;
            border: none;
        }
    }
</style>

<script>
export default {
    props: ['image'],
    computed: {
        bgImage() {
            return `background-image: url('${this.image}')`;
        }
    }
}
</script>