<template>
    <div>
        <div>
            <Logo/>

            <div id="mainNavigation">
                <Links/>
            </div>
        </div>
        <div>
          <Socials/>
        </div>
    </div>
</template>



<script lang="ts" setup>
import Links from "./common/Links.vue";
import Socials from "./common/Socials.vue";
import Logo from "./common/Logo.vue";
import ToggleThemeButton from "../../inputs/ToggleThemeButton.vue";
</script>