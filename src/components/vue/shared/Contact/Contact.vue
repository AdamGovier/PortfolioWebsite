<template>
    <Teleport to="body">
        <Modal :showModal="emailSentStatus" :message="emailSentStatusMsg" />
    </Teleport>
    <div id="contact">
        <div>
            <h1>Contact</h1>
        </div>
        <form @submit.prevent="submitForm">
            <input type="text" name="_hp" tabindex="-1" autocomplete="off">
            <div>
                <label for="Name">Your Name</label>
                <input id="Name" v-model="inputs.name" name="Name" type="text" />
            </div>
            <div>
                <label for="Email">E-mail</label>
                <input id="Email" v-model="inputs.email" name="Email" type="email" />
            </div>
            <div>
                <label for="Message">Message</label>
                <textarea id="Message" v-model="inputs.message" name="Message" rows="5" />
            </div>

            <div>
                <a href="/legal/privacy-policy">Privacy Policy</a>
                <button type="submit">Submit</button>
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
