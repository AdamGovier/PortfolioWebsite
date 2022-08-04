<template>
    <div class="blurb">
        <h4 class="type">{{ type }}</h4>
        <h1 class="title">{{ title }}</h1>
        <p class="desc">
            <slot></slot>
        </p>
        <a class="actionAnchor" :href="href">
            Find Out More
        </a>
    </div>
</template>

<style>
    .projectHolder .blurb {
        width: 30vw;
        padding: 60px 0;

        position: relative;
        right: 4.5vw;

        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 20px 0;

        background-color: white;
        color: black;
    }

    .projectHolder .blurb .title {
        font-family: 'ITC Avant Garde Gothic LT';
        font-weight: 700;
        font-size: 40px;
    }

    .projectHolder .blurb .type {
        font-weight: 300;
        font-size: 21px;
        line-height: 104.02%;
    }

    .projectHolder .blurb .desc {
        font-family: "Arial";
        font-style: medium;
        font-weight: 300;
        font-size: 20px;
        line-height: 157.52%;
    }

    .projectHolder .blurb .actionAnchor {
        font-family: 'ITC Avant Garde Gothic Std';
        font-style: normal;
        font-weight: 500;
        font-size: 20px;

        text-align: center;
        text-decoration: none;

        padding: 10px 0;
        background: black;
        color:white;
    }

    .projectHolder .blurb > * {
        width: 80%;
        margin: 0 auto;
    }

    @media (max-width: 850px) {
        .projectHolder .blurb {
            position: static;
            height: auto;

            width: 100%;
            padding: 20px 0;
            margin: 0;

            display: flex;
            flex-direction: column;
            gap: 20px 0;

        }
    }
</style>

<script>
export default {
    props: ['type', 'title', 'href']   
}
</script>