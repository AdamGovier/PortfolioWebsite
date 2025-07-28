<template>
    <div class="fullsize">
        <div class="leftside">
            <Logo/>

            <div id="mainNavigation">
                <Links/>
            </div>
        </div>
        <div class="rightside">
            <Socials/>
        </div>
    </div>
</template>

<style>
    .leftside {
        display: flex;
        align-items: center;
    }

    #mainNavigation {
        margin-left: 12.5%;
    }

    #mainNavigation a {
        margin: 0 20px;
    }

    nav i {
        font-size: 35px;
        
        margin: 0 16.5px;
        margin-top: 10px;
    }

    .fullsize {
        height: 100%;

        display: flex;
        justify-content: space-between;
        align-items: center;
        overflow-x: hidden;
    }

    @media (max-width: 1050px) {
        #mainNavigation {
            margin-left: 5% !important;
        }
    }

    @media (max-width: 850px) {
        .fullsize {
            display:none;
        }
    }
</style>

<script>
import Links from "./common/Links.vue";
import Socials from "./common/Socials.vue";
import Logo from "./minimised/Logo.vue";

export default {
    components: {
        Links,
        Socials,
        Logo
    }
}
</script>