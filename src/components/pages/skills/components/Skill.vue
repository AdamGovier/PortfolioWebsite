<template>
    <div>
        <div class="header">
            <h1>{{ type }}</h1>
        </div>
        <div class="skill">
            <img :src="image" />
            <h1>{{ title }}</h1>
        </div>
    </div>
</template>

<style scoped>
    .header {
        width: 100%;
        text-align: center;
        background-color: var(--brand-colour);
        padding: 6px 0;
        border-radius: 15px 15px 0 0;
    }

    .header > h1 {
        font-weight: 200;
        font-size: 17px;
        white-space: nowrap;
    }

    .skill {
        width: 100%;
        aspect-ratio: 1 / 1; /* Supported in all modern browsers https://developer.mozilla.org/en-US/docs/Web/CSS/aspect-ratio#browser_compatibility */

        background-color: #121212;
        border-radius: 0 0 15px 15px;

        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        margin: 0 auto;
    }

    .skill img {
        width: 40%;
    }

    .skill h1 {
        margin-top: 12.5%;
        font-family: 'ITC Avant Garde Gothic Std';
        font-style: normal;
        font-weight: 500;
        font-size: 19.5px;
        text-align: center;
    }

    @media screen and (max-width: 1300px) {
        .skill {
            width: 100%;
        }

        .skill h1 {
            font-size: 15px;
        }
    }
</style>

<script>
export default {
    props: ['title', 'image', 'type']
}
</script>