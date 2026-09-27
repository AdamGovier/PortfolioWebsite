<template>
    <footer>
        <div>
            <h2>Adam Govier</h2>
            <a href="mailto:contact@adamgovier.co.uk">contact@adamgovier.co.uk</a>
            <a href="/legal/privacy-policy">Privacy Policy</a>
        </div>
        <div>
            <Socials />
        </div>
    </footer>
</template>



<script>
import Socials from "./nav/common/Socials.vue";

export default {
  components: {
      Socials
  }
}
</script>
