<template>
    <footer>
        <h1>ADAM GOVIER</h1>
        <a href="mailto:adam@adamgovier.co.uk">adam@adamgovier.co.uk</a>
        <div class="socials">
            <Socials />
        </div>
    </footer>
</template>

<style>
    footer {
        width: 100%;

        height: 25%;
        background-color: rgba(255,255,255, 0.95); /* Slight tint makes it easier on eyes */
        color: black;

        display: flex;
        justify-content: space-around;
        align-items: center;
    }

    footer > a {
        font-size: 20px;
        text-align: center;
    }

    footer a {
        color: black;
        text-decoration: none;
    }

    footer h1 {
        font-weight: normal;
        font-size: 26px;
        text-align: center;

    }

    footer .socials a {
        margin: 5px;
    }

    @media screen and (max-width: 850px) {
        footer {
            overflow: hidden;
        }

        footer h1 {
            width: 20vw;
            font-size: 16px;
            /* display: none; */
        }

        footer > a {
            width: 30vw;
            text-align: center;
            font-size: 16px;
        }

        footer .socials i {
            font-size: 30px;
            margin: 5px;
        }

        footer h1 {
            display: none;
        }

        footer .socials {
            display: flex;
            flex-direction: column;
        }
    }

    @media screen and (min-width: 850px) {
        footer i {
            font-size: 30px;
            margin: 10px;
        }

        footer a:hover {
            color: var(--brand-colour);
        }
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