<template>
    <section id="outcome">
        <div id="content">
            <h3>Future Prospects</h3>
            <p>
                In late 2023, Bolus Calculator is scheduled to be released to the general public on the <a href="https://www.apple.com/uk/app-store/">App Store</a> and the <a href="https://play.google.com/store/apps">Google Play Store</a>.
            </p>
            <p>
                Further into the future, a series of connected mobile & web applications may be introduced. Such as:
                <ul>
                    <li>Bolus Calculator - Companion App</li>
                    <p>Allow your carers or close family and friends to keep an eye on your diabetes management and be notified in case of emergency.</p>
                    <li>Bolus Calculator - Clinic View</li>
                    <p>Permit medical professionals from your clinic to view your diabetes management, comment on it, and modify the parameters of your bolus calculators app.</p>
                </ul>
            </p>
        </div>
        <div id="thumb"></div>
    </section>
</template>

<style scoped>
    ul > p {
        font-size: var(--font-body-small) !important;
    }

    ul > li:first-child {
        margin-top: 3%;
    }

    ul > li:not(:first-child) {
        margin-top: 2%;
    }

    #outcome {
        margin-top: 10%;
        min-height: 80vh;

        display: flex;
    }

    #thumb {
        background-image: url("../../../../assets/images/Projects/BolusCalc/SidePhoto.png");
        background-size: cover;
        width: 32.5%;
    }

    #content {
        flex: 1;
        padding: 5%;
    }
    
    p {
        width: 80%;
    }

    @media screen and (max-width: 850px) {
        #thumb {
            display: none;
        }

        #content {
            padding: 5%;
        }

        #content p {
            width: 100%;
        }

        #content p:nth-child(3) {
            margin-top: 10%;
        }

        #outcome {
            margin-top: 8%;
            width: 100%;
            min-height: auto;
        }

        ul {
            margin-top: 5%;
        }
    }
</style>