<template>
    <section id="introduction">
        <h2>Bolus Calculator</h2>
        <p>
            Managing your blood sugars can be difficult and overwhelming. 
            Similar solutions are on the market but they are usually overly complicated, at an expense or ineffective. 
            Bolus Calculator aims to provide accurate diabetes control without expense or confusion.
        </p>
        <p>
            <a href="https://github.com/stars/AdamGovier/lists/bolus-calculator">View on GitHub</a>
        </p>
        <!-- <MarketLinks/> -->
    </section>
</template>

<style scoped>
    #introduction {
        margin-top: 5%;
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
            margin: 5%;
        }

        #introduction p {
            width: auto;
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