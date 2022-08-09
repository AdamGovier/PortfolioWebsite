<template>
    <router-link to="/">About</router-link>
    <router-link to="/#portfolio" class="active">Portfolio</router-link>
    <router-link to="/#skills">Skills</router-link>
    <router-link to="/#contact">Contact</router-link>
</template>

<style scoped>
    @media (max-width: 550px) {
        a {
            margin: 15px 0;
            font-size: 36px;
        }

        a:nth-of-type(1) {
            margin-top: 0;
            text-underline-offset: 18px;
        }

        a:nth-of-type(2) {
            margin-top: 30px;
        }
    }
</style>