<template>
    <div class="fullsize">
        <div class="leftside">
            <h1 id="Logo">GO<br/>VIER</h1>

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
        margin-left: 15%;
    }

    #mainNavigation a {
        margin: 0 20px;
    }

    i {
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
import Links from "./Links.vue";
import Socials from "./Socials.vue";

export default {
    components: {
        Links,
        Socials
    }
}
</script>