<template>
    <section>
        <Header/>

        <Panel id="panel_more_control" :image="require('../../assets/images/Projects/BolusCalc/ControlDemo.gif')">
            <template v-slot:header>
                More control. Little effort.
            </template>

            <template v-slot:content>
                <p>
                    Bolus Calculator grants you powerful features to fine tune your diabetes control.
                </p>

                <br/>

                <ul>
                    <li>Never take a double dosage again with the built in diary.</li>
                    <li>Lower high blood sugars with ease with tailored correction doses.</li>
                    <li>Time sensitive? Bolus Calculator allows you to precisely define time ranges for particular dose ratios.</li>
                    <li>Prevent hypoglycaemia/hyperglycaemia when participating in particular activities with the modifier panel.</li>
                </ul>

                <br/>

                <p>
                    Bolus Calculator was designed where possible to apply logic from publicly available NHS documents to its algorithms. Some examples of the resources I have used are listed below.
                </p>

                <br/>
                    
                <ul>
                    <li><a target="_blank" href="https://www.nhstayside.scot.nhs.uk/OurServicesA-Z/DiabetesOutThereDOTTayside/PROD_263751/index.htm">Adjusting Insulin</a></li>
                    <li><a target="_blank" href="https://alderhey.nhs.uk/application/files/5315/1731/2400/High_blood_glucose_levels_without_ketones.pdf">How to manage high blood glucose levels.</a></li>
                    <li><a target="_blank" href="https://www.yorkhospitals.nhs.uk/seecmsfile/?id=5394">Sick day rules for patients on basal bolus regime.</a></li>
                </ul>
            </template>
        </Panel>

        <Panel id="panel_carb_counting" :image="require('../../assets/images/Projects/BolusCalc/CarbCounting.png')">
            <template v-slot:header>
                Carb counting. Made easy.
            </template>

            <template v-slot:content>
                <p>
                    Streamline carbohydrate counting without loosing accuracy.

                    "Hotshots" allow you to:
                </p>

                <br>

                <ul>
                    <li>Record your meals so you won't have to repeat the calculation next time.</li>
                    <li>Search a range of online food databases for nutritional information.</li>
                    <li>Share your recorded meals & food items with other Bolus Calculator users.</li>
                </ul>

                <br/>

                <p>
                    The "Hotshots" feature of Bolus Calculator is developer friendly; do you wish to utilise an API that isn't already supported?
                    Not a problem. Bolus Calculators modular design makes it simple to implement.

                </p>

                <br>

                <a target="_blank" class="info-link" href="https://medium.com/@adamgovier/adding-custom-apis-to-bolus-calculator-2a8ad80ad074">Adding custom APIs to Bolus Calculator.</a>
            </template>
        </Panel>

        <Panel id="panel_privacy" :image="require('../../assets/images/Projects/BolusCalc/DataPage.png')">
            <template v-slot:header>
                Privacy is everything.
                <br/>
                You own your data.
            </template>

            <template v-slot:content>
                <p>
                    With the exception of nutritional data shared through Hotshots, which requires your explicit consent, 
                    Bolus Calculator does not share any of your data.
                    Your data is stored on your local device.
                </p>

                <br/>

                <p>
                    Additionally, Bolus Calculator allows you to export data as a PDF report, or a JSON file that contains all of your raw, unformatted data.
                </p>

                <br/>

                <p>
                    In the future, a Bolus Calculator companion app may be implemented, enabling you to share your data with your family, friends, and medical professionals. With end-to-end encryption, this data will be distributed safely.
                </p>

                <br/>

                <p>
                    Bolus Calculator is open and transparent; all of the source code for its products and services is available on <a href="https://github.com/stars/AdamGovier/lists/bolus-calculator">GitHub</a>.
                </p>
            </template>
        </Panel>

        <ContentBlock style="margin-top: 10%;" heading="PROVEN FEEDBACK">
            <p>
                “ Hi Adam thanks for the app it has made my day so much easier using the app I can't thank you enough for the great app all the best “ - Wayne. 
            </p>

            <br/>

            <p>
                Wayne is using a very early version of Bolus Calculator that I created in 2018 while I was still at school.
                This remark caused me to revise Bolus Calculator in the beginning of 2021, therefore I am looking forward to show him this significant advancement.
            </p>
        </ContentBlock>

        <ContentBlock heading="TECHNICAL">
            <p>
                The front-end of Bolus Calculator is created with Vue 3 and launched on mobile devices using Capacitor. 
                On the front end, data is kept using the local-storage API.

            </p>

            <br/>

            <p>
                Nutritional information is transmitted to a back-end node.js server. 
                Then a MongoDB database is used to store this data on this server.                
            </p>
            
            <br>

            <p>
                 The Bolus Calculator application uses the back-end 
                as an interface for serving and obtaining nutritional data.
                It also has an admin panel created using Vue 2 and Vuetify. The admin interface enables the management of Hotshots (nutritional data) and, in the future, a support ticket system.
            </p>
        </ContentBlock>

        <ContentBlock heading="ROADMAP">
            <p>
                The Bolus Calculator is a personal project of mine that is currently exclusively developed and maintained by me.
                Because I can only devote a finite amount of time to this project, the application's development takes a lengthy amount of time.
            </p>

            <br/>

            <p>
                However, this is what I would like to achieve in the coming months and years:
            </p>

            <br>

            <ul>
                <li>Rigorously test the front-end & back-end.</li>
                <li>Release a production build.</li>
                <li>Create a plugin market for the Bolus Calculator app.</li>
                <li>Develop a companion app, where family, friends, and medical professionals can monitor your data and be alerted in an emergency.</li>
                <li>Implement a clinic view so medical professionals can monitor and provide input on your diabetes managment.</li>
            </ul>
        </ContentBlock>
    </section>
</template>

<script>
import Header from "@/components/pages/projects/BolusCalcFull/Header.vue";
import Panel from "@/components/pages/projects/BolusCalcFull/Panel.vue";
import ContentBlock from "@/components/pages/projects/BolusCalcFull/ContentBlock.vue";

export default {
    components: {
        Header,
        Panel,
        ContentBlock
    }
}
</script>
