<template>
    <div class="panel" :id="id">
        <img :src="image" />
        <div class="allContentContainer">
            <h2>
                <slot name="header"></slot>
            </h2>

            <div class="content"> 
                <slot name="content"></slot>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['image', 'id']
}
</script>

<style>
    .panel {
        margin-top: 12.5%;
        display: flex;
        justify-content: space-around;
        align-items: center;
    }

    .panel img {
        height: 80vh;
    }

    .panel .allContentContainer {
        width: 40%;
    }

    .panel .content {
        margin-top: 5%;
        line-height: 180%;
    }

    @media only screen and (max-width: 850px) { 
        .panel {
            margin-top: 25%;
            flex-direction: column;
        }

        .panel .allContentContainer {
            margin-top: 10%;
            width: auto;
        }
    }
</style>