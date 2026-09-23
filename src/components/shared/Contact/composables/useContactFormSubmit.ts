import * as EmailValidator from "email-validator";
import { reactive, ref } from "vue";
import { toastConfiguration } from "../../../../constants/toastConstants";
import { feedbackMessages } from "../../../../constants/feedbackMessages";


export function useContactFormSubmit() {
    const inputs = reactive({
        name: "",
        email: "",
        message: ""
    });

    const emailSentStatus = ref(false);
    const emailSentStatusMsg = ref("");

    function hideStatusAfterDelay() {
        setTimeout(() => {
            emailSentStatus.value = false;
        }, toastConfiguration.toastDisplayDurationDefault);
    }

    async function submitForm() {
        emailSentStatus.value = true;

        if (!EmailValidator.validate(inputs.email)) {
            emailSentStatusMsg.value = "Error sending. Invalid email address.";
            hideStatusAfterDelay();
            return;
        }

        emailSentStatusMsg.value = "Sending.. Please wait.";

        try {
            const response = await fetch("https://postto.dev/api/v1/send/ep_oTAYioPjgPo3fX9T", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                },
                body: JSON.stringify({
                    name: inputs.name,
                    email: inputs.email,
                    message: inputs.message
                })
            });

            emailSentStatusMsg.value = response.ok
                ? feedbackMessages.contact.success.sent
                : feedbackMessages.contact.errors.fallbackErrorMessage;
        } catch (error) {
            console.error(error);
            emailSentStatusMsg.value = feedbackMessages.contact.errors.fallbackErrorMessage;
        } finally {
            hideStatusAfterDelay();
        }
    }

    return {
        inputs,
        emailSentStatus,
        emailSentStatusMsg,
        submitForm
    };
}
