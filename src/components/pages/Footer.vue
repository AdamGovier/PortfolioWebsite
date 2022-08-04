<template>
    <div class="contact">
    </div>
    <footer>
        <h1>ADAM GOVIER</h1>
        <a href="">adam@govier-web.co.uk</a>
        <div>
            <Socials />
        </div>
    </footer>
</template>

<style>
    .contact {
        height: 75%;
        width: 100%;
        /* background-color: red; */
    }

    footer {
        bottom: 0;
        width: 100%;

        height: 25%;
        background-color: white;
        color: black;

        display: flex;
        justify-content: space-around;
        align-items: center;
    }

    footer a {
        color: black;
        text-decoration: none;
    }

    footer a {
        color: black !important;
    }
</style>

<script>
import Socials from "../common/navigation/common/Socials.vue";

export default {
    components: {
        Socials
    }
}
</script>