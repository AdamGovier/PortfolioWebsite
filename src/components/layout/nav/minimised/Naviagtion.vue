<template>
    <div id="minimisedNavPanel">
        <img id="closeBtn" :src="Cross.src" @click="$emit('close');" />
        <h1>GO<br/>VIER</h1>
        <div>
            <Links/>
        </div>
        <div>
            <Socials/>
        </div>
    </div>
</template>



<script lang="ts" setup>
import Links from "../common/Links.vue";
import Socials from "../common/Socials.vue";
import Logo from "../common/Logo.vue";

import Cross from "../../../../assets/images/icons/Cross.png";
</script>