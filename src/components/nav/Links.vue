<template>
    <a href="" class="active">About</a>
    <a href="">Portfolio</a>
    <a href="">Skills</a>
    <a href="">Contact</a>
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