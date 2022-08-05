<template>
    <div id="minimisedNavPanel">
        <img id="closeBtn" src="../../../../assets/images/Cross.png" @click="this.$emit('close');" />
        <img src="../../../../assets/images/MobileProfilePhoto.jpg" class="portraitImg">
        <div style="display: flex; flex-direction: column;">
            <Links/>
        </div>
        <div style="padding: 50px 0;">
            <Socials/>
        </div>
    </div>
</template>

<style scoped>
    #minimisedNavPanel {
        width: 100%;
        height: 100%;

        background-color: black;

        position: fixed;
        top: 0;
        left: 0;

        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;

        z-index: 3;
    }


    .portraitImg {
        height: 150px; 
        border-radius: 10px;
        margin: 10px;
    }

    footer {
        margin-bottom: 10%;
    }

    #closeBtn {
        margin-top: 5%;
    }

/* 
    #minimisedNavPanel {
        width: 100%;
        height: 100%;

        background-color: black;

        position: fixed;
        top: 0;
        left: 0;

        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
    }

    main {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    main > img:nth-child(1) {
        margin-bottom: 30px;
    }

    main, footer {
        margin: 10% 0;
    }

    i {
        color: white;
    }

    #minimisedNavPanel h1[data-id="Logo"] {
        background-color: transparent;
        font-size: 28px;
    } */
</style>

<script>
import Links from "../common/Links.vue";
import Socials from "../common/Socials.vue";

export default {
    components: {
        Links,
        Socials
    },
    mounted() {

    }
}
</script>