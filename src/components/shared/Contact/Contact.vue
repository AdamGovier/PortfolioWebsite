<template>
    <Teleport to="body">
        <Modal :showModal="emailSentStatus" :message="emailSentStatusMsg" />
    </Teleport>
    <div id="contact" class="spacer">
        <div>
            <h1>Contact</h1>
        </div>
        <form @submit.prevent="submitForm">
            <input type="text" name="_hp" style="display:none" tabindex="-1" autocomplete="off">
            <div class="inputContainer">
                <label for="Name">Your Name</label>
                <input id="Name" v-model="inputs.name" name="Name" type="text" />
            </div>
            <div class="inputContainer">
                <label for="Email">E-mail</label>
                <input id="Email" v-model="inputs.email" name="Email" type="email" />
            </div>
            <div class="inputContainer">
                <label for="Message">Message</label>
                <textarea id="Message" v-model="inputs.message" name="Message" rows="5" />
            </div>

            <div style="margin-top:10%; width: 100%; display: flex; justify-content: space-between; align-items: center;">
                <a href="/legal/privacy-policy" style="white-space: nowrap; font-size: 12px;">Privacy Policy</a>
                <button type="submit" style="margin-top: 0; padding-right: 0;">Submit</button>
            </div>
        </form>
    </div>
</template>

<script setup lang="ts">
import Modal from "../Modal.vue";
import { useContactFormSubmit } from "./composables/useContactFormSubmit";

const {
    inputs,
    emailSentStatus,
    emailSentStatusMsg,
    submitForm
} = useContactFormSubmit();
</script>

<style>
    #contact form button {
        margin-top: 10%;
        padding: 3% 10%;

        color: white;
        font-size: 22px;
        cursor: pointer;

        background: transparent;
        border: none;
        border-bottom: 2px solid var(--brand-colour);
    }

    #contact form button:hover {
        border-bottom: 2px solid var(--link-hover-alt-colour);
    }

    #contact .inputContainer input, textarea {
        width: 30vw;
    }

    input:-webkit-autofill,
    input:-webkit-autofill:hover,
    input:-webkit-autofill:focus,
    input:-webkit-autofill:active {
        transition: background-color 5000s ease-in-out 0s;
    }

    input:-webkit-autofill{
        -webkit-text-fill-color: white !important;
    }

    #contact .inputContainer input:focus,textarea:focus {
        outline: none;
    }

    #contact {
      transition: all 2s ease-out;
      height: 75%;
      width: var(--content-width);

      display: flex;
      justify-content: space-between;
      align-items: center;

      z-index: 3;
  }

    #contact > h1 {
        font-style: normal;
        font-weight: normal;
    }

    @media screen and (max-width: 850px) {
        #contact {
            flex-direction: column;
            justify-content: space-around;
            padding-bottom: 20%;
            padding-top: 10%;
        }

        #contact h1 {
            font-style: normal;
            font-weight: 700;
            margin: 10%;
        }

        form {
            width: 100%;
        }

        form .inputContainer {
            width: 100%;
        }

        form .inputContainer input, textarea {
            padding: 15px 0 !important;
            width: 100% !important;
        }
    }

    @media screen and (max-height: 650px){
        #contact {
            padding-bottom: 35vh; /* Stop footer and contact colliding on very small screens */
        }
    }
</style>
