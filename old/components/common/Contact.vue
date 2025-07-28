<template>
    <Modal :showModal="emailSentStatus" :message="emailSentStatusMsg" />
    <div id="contact">
        <h1>Contact</h1>
        <form>
            <div class="inputContainer">
                <label for="Name">Your Name</label>
                <input v-model="inputs.name" name="Name" type="text"/>
            </div>
            <div class="inputContainer">
                <label for="Email">E-mail</label>
                <input v-model="inputs.email" name="Email" type="email"/>
            </div>
            <div class="inputContainer">
                <label for="Message">Message</label>
                <textarea rows="5" v-model="inputs.message" name="Message" type="text"/>
            </div>

            <div style="width: 100%; display: flex; justify-content: flex-end;">
                <button type="button" @click="submitForm();">Submit</button>
            </div>
        </form>
    </div>
</template>

<script>
import Modal from "./Modal.vue";
import Animations from "@/scripts/Animations.js";
import * as EmailValidator from 'email-validator';

export default {
    components: {
        Modal
    },
    data() {
        return {
            inputs: {
                name: undefined,
                email: undefined,
                message: undefined
            },
            emailSentStatus: false,
            emailSentStatusMsg: ""
        }
    },
    mounted() {
        Animations.registerScrollController('#contact', "fade-in")
    },
    methods: {
        submitForm() {
            const formData = new FormData();

            formData.append("Name", this.inputs.name);
            formData.append("Email", this.inputs.email);
            formData.append("Message", this.inputs.message);

            this.emailSentStatus = true;

            // If invalid email.
            if(!EmailValidator.validate(this.inputs.email)) {
                this.emailSentStatusMsg = "Error sending. Invalid email address.";
                // Hide pop up, and cancel send.
                return setTimeout(() => this.emailSentStatus = false, 4000);
            }

            this.emailSentStatusMsg = "Sending.. Please wait."

            fetch('https://formbold.com/s/9k2P6', {
                 method: 'POST',
                 body: formData
            })
            .then((response) => {
                if(response.status == 200) {
                    this.emailSentStatusMsg = "Your message has successfully been sent, please expect to receive a reply within a few days.";
                } else {
                    this.emailSentStatusMsg = "An unknown error has occurred. Please email me directly at adam@govier-web.co.uk";
                    // Don't hide message if error as user will need time to copy the above email into their client.
                }
            }).catch(error => {
                console.log(error);
                this.emailSentStatusMsg = "An unknown error has occurred. Please email me directly at adam@govier-web.co.uk";
            }).finally(() => {
                    // Hide message after 4s.
                    setTimeout(() => this.emailSentStatus = false, 4000);
            });
        }
    }
}
</script>

<style>
    #contact {
        margin-top: 10%;
    }

    #contact .inputContainer {
        display: flex;
        flex-direction: column;

        margin-top: 5%;
    }

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

    #contact .inputContainer label {
        font-family: Arial;
        font-style: normal;
        font-weight: 200;
        font-size: 32px;
    }

    #contact .inputContainer input, textarea {
        width: 30vw;
        padding: 10px;

        border: none;
        border-bottom: 2px solid gray;
        background: transparent;

        color: white;
        font-family: Arial;
        font-size: 18px;
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
        opacity: 0.25;
        transition: all 2s ease-out;
        height: 75%;
        width: var(--content-width);

        display: flex;
        justify-content: space-between;
        align-items: center;
        /* background-color: red; */
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