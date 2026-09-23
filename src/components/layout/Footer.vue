<template>
    <footer>
        <div class="lhs">
            <h1>ADAM GOVIER</h1>
            <p>
                <a href="mailto:adam@adamgovier.co.uk">adam@adamgovier.co.uk</a><br/>
            </p>
            <p>
                <a href="/legal/privacy-policy">Privacy Policy</a>
            </p>

        </div>
        <div class="socials">
            <Socials />
        </div>
    </footer>
</template>

<style>
    footer {
      width: 100%;
      margin-top: 10vh;

      height: 25vh;
      background-color: rgba(255,255,255, 0.95); /* Slight tint makes it easier on eyes */
      color: black;

      display: flex;
      justify-content: space-between;
      padding: 0% 5%;
      align-items: center;
    }

    footer .lhs > p {
        margin-top: 20px;
    }

    footer a {
        color: black;
        text-decoration: none;
        text-align: left;
        text-wrap: no-wrap;
    }

    footer h1 {
        font-weight: normal;
        font-size: 26px;
        text-align: left;

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
    }
</style>

<script>
import Socials from "./nav/common/Socials.vue";

export default {
  components: {
      Socials
  }
}
</script>