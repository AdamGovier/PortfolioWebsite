<template>
    <div class="microNav">
        <div class="menuIcon" @click="showNavigation = true">
            <img :src="Icon.src.toString()" />
        </div>
        <Logo/>
    </div>

    <Transition name="fade">
        <Naviagtion v-if="showNavigation" @close="showNavigation = false;" />
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
        height: 45px;
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

<script lang="ts" setup>
import Naviagtion from "./minimised/Naviagtion.vue";
import Logo from "./common/Logo.vue";
import { watch } from 'vue';
import { useRoute } from 'vue-router';
import { ref } from 'vue';
import Icon from "../../../assets/images/icons/Cross.png";

const showNavigation = ref(false);

const route = useRoute();
watch(
  () => route?.fullPath ?? "",
  () => {
    showNavigation.value = false;
  }
);
</script>