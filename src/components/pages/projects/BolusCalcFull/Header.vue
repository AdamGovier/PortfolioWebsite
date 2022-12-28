<template>
    <header>
        <h1>Bolus Calculator</h1>
        <p>Powerful tool that easily allows you to manage your diabetes. free of charge.</p>
    </header>
    <div id="hero"></div>
    <!-- <img src="@/assets/images/Projects/BolusCalc/Mockups.png"/> -->
    <div id="overview">
        <div>
            <h5>TYPE</h5>
            <p>Mobile Application</p>
        </div>
        <div>
            <h5>KEY TECHNOLOGIES</h5>
            <ul>
                <li>Vue.js</li>
                <li>Capacitor</li>
                <li>Node.js</li>
                <li>MongoDB</li>
            </ul>
        </div>
        <h5 class="mobile-header">Description</h5>
        <p>
            Managing your blood sugars is difficult and sometimes overwhelming. 
            Similar solutions that are on the market are usually overly complicated, at an expense or ineffective. 
            Bolus Calculator aims to provide accurate diabetes control without expense or confusion.
            <br/><br/>
            <a class="info-link" href="https://github.com/stars/AdamGovier/lists/bolus-calculator">Discover Bolus Calculator on GitHub.</a>
        </p>
    </div>
</template>

<style scoped>
    header {
        padding: 4% 0;
    }

    header > p {
        margin-top: 2%;
    }

    #hero {
        background-image: url('../../../../assets/images/Projects/BolusCalc/Mockups.png');
        background-size: cover;
        width: 100%;
        aspect-ratio: 16/9;
    }

    #overview {
        margin: 2.5% 0;
        display: inline-grid;
        grid-template-columns: repeat(3, 1fr);
    }

    #overview > p {
        line-height: 150%;
        width: 100%;
    }

    .mobile-header {
        display: none;
    }

    div > h5 {
        margin-bottom: 2%;
    }

    @media only screen and (max-width: 850px) {
        #overview {
            margin-top: 10%;
            grid-template-columns: repeat(2, 1fr);
        }

        #overview > div:nth-child(2) {
            text-align: end;
        }

        #overview > div:nth-child(2) > ul {
            list-style: none;
        }

        #overview > p {
            margin-top: 2.5%;
            grid-column: span 2;
        }
        
        .mobile-header {
            margin-top: 10%;
            display: block;
        }

        header {
            padding: 10% 0;
        }

        #hero {
            width: 100%;
            height: 35vh;
            background-position: center;
        }
    }
</style>