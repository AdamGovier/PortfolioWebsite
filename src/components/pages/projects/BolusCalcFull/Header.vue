<template>
    <header>
        <div class="container">
            <img :src="require('../../../../assets/images/Projects/BolusCalc/AppHomeScreen.png')" />
            <!-- <img src="@/assets/images/Projects/BolusCalc/AppHomeScreen.png" alt=""> -->
        </div>
    </header>
</template>

<style scoped>
    header img {
        position: absolute;
        left: 10%;
        width: 20%;
    }

    header {
        height: 15%;
        display: flex;
        justify-content: center;
    }

    .container {
        width: 80%;
        display: flex;
        justify-content: flex-end;
    }

    @media screen and (min-width: 1950px) {
        header img {
            width: 16%;
        }
    }

    @media screen and (min-width: 2600px) {
        header img {
            width: 10%;
        }
    }

    @media screen and (max-width: 850px) {
        header {
            display: block;
            height: auto;
        }

        header img {
            position: initial;
            width: auto;
            height: 55vh;
        }

        .container {
            display: flex;
            justify-content: center;
            width: 100%;
            padding-bottom: 5%;
        }
    }
</style>