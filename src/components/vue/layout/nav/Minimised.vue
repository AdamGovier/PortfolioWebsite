<template>
    <div>
        <div @click="showNavigation = true">
            <img :src="Icon.src.toString()" />
        </div>
        <Logo/>
    </div>

    <Transition name="fade">
        <Naviagtion v-if="showNavigation" @close="showNavigation = false;" />
    </Transition>
</template>



<script lang="ts" setup>
import Naviagtion from "./minimised/Naviagtion.vue";
import Logo from "./common/Logo.vue";
import { ref } from 'vue';
import Icon from "../../../../assets/images/icons/Cross.png";

const showNavigation = ref(false);
</script>
