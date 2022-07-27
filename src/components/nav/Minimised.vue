<template>
    <div class="microNav">
        <div class="menuIcon" @click="showNaviagtion = true">
            <img src="../../assets/Cross.png" />
        </div>
        <Logo/>
    </div>

    <Transition name="fade">
        <Naviagtion v-if="showNaviagtion" @close="showNaviagtion = false;" />
    </Transition>
</template>

<style scoped>
    .microNav {
        background-color: black; 
        display: none; 
        justify-content: space-between; 
        align-items: center;

        height: 100%;
        border-bottom: solid rgb(10,10,10) 2px;
    }

    .microNav .menuIcon img {
        transform: rotate(135deg);
        width: 45px;
        margin-left: 10px;
    }

    .fade-enter-active, .fade-leave-active {
        transition: 0.25s ease;
    }

    .fade-enter-from, .fade-leave-to {
        opacity: 0;
    }

    @media (max-width: 850px) {
        .microNav {
            display: flex;
        }
    } 
</style>

<script>
import Naviagtion from "./minimised/Naviagtion.vue";
import Logo from "./minimised/Logo.vue";

export default {
    components: {
        Naviagtion,
        Logo
    },
    data() {
        return {
            showNaviagtion: false
        }
    },
}
</script>