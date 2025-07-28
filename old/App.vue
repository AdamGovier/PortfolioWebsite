<template>
    <Nav/>
    <router-view></router-view>
    <Footer/>
</template>

<script>
import Nav from "@/components/common/navigation/Nav.vue";
import Footer from "@/components/pages/Footer.vue";

export default {
    components: {
        Nav,
        Footer
    }
}
</script>