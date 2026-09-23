<template>
    <footer>
        <div class="lhs">
            <h2>Adam Govier</h2>
            <a class="email" href="mailto:contact@adamgovier.co.uk">contact@adamgovier.co.uk</a>
            <a class="privacy" href="/legal/privacy-policy">Privacy Policy</a>
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
      min-height: 280px;
      box-sizing: border-box;
      background-color: rgba(255,255,255, 0.95);
      color: black;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 60px 5%;
    }

    footer .lhs {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
    }

    footer a {
        color: black;
        text-decoration: none;
        text-align: left;
    }

    footer h2 {
        margin: 0;
        font-family: "ITC Avant Garde Gothic LT";
        font-size: 34px;
        text-align: left;
        text-transform: uppercase;
    }

    footer .email {
        margin-top: 26px;
        padding-bottom: 5px;
        border-bottom: 1px solid #a7a7a7;
        font-family: Arial;
        font-size: 20px;
    }

    footer .privacy {
        margin-top: 24px;
        color: #686868;
        font-family: Arial;
        font-size: 14px;
    }


    footer .socials a {
        margin: 5px;
    }

    @media screen and (max-width: 850px) {
        footer {
            min-height: 250px;
            padding: 40px 6.5%;
        }

        footer h2 {
            font-size: 26px;
        }

        footer .email {
            font-size: 16px;
        }

        footer .socials i {
            font-size: 26px;
            margin: 7px;
        }

        footer .socials {
            display: flex;
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
