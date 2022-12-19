<template>
    <div id="introduction">
        <h2>Bolus Calculator</h2>
        <p>
            Managing your blood sugars can be difficult and overwhelming. 
            Similar solutions are on the market but they are usually overly complicated, expensive or ineffective. 
            Bolus Calculator aims to provide accurate diabetes control without expense or confusion.
        </p>
        <!-- <MarketLinks/> -->
    </div>
</template>

<style scoped>
    #introduction {
        margin-top: 4%;
        width: 95%;
        width: 100%;
    }

    #introduction > * {
        margin-left: 34%;
    }

    #introduction p {
        width: 55%;
    }

    @media screen and (max-width: 850px) {
        #introduction {
            width: 100%;
        }

        #introduction > * {
            margin: 10%;
        }

        #introduction p {
            width: auto;
            font-size: 20px;
        }
    }
</style>

<script>
import MarketLinks from "./MarketLinks.vue";

export default {
    components: {
        MarketLinks
    }
}
</script>