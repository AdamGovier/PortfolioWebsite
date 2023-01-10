<template>
    <section id="starterContent">
        <div id="introduction">
            <h5>Hello!</h5>
            <h1 id="profile">
                My name is <span id="profileName">Adam</span>,<br/>
                I’m a 
                <span id="profileRole">
                    Software Dev<span id="profileLongWordForm">eloper</span>
                </span><br/>
                based in <span id="profileLocation"> Scotland</span>.
            </h1>
            <p id="profilePortfolioAdvertisment">View my projects & skills <a href="#portfolio">below</a>.</p>
        </div>
        <div id="profileContainer">
            <div class="halfShield"></div>
            <div class="halfShield" id="profile">

            </div>
        </div>
    </section>
</template>

<style>
    #starterContent {
        display: flex;
        justify-content: space-around;
        align-items: center;
        gap: 125px;

        height: 67.5%;
    }

    #introduction > h5 {
        margin-bottom: var(--margin-medium);
        font-size: var(--font-body-medium);
    }

    #profile {
        font-weight: normal;
        white-space: nowrap;
        width: 300px;
        padding-right: 1vw;
        margin-block-end: 0;
        margin-bottom: var(--margin-large);
    }

    #profileName {
        font-weight: bold;
    }

    #profileRole {
        font-weight: bold;
        color: var(--brand-colour);
    }

    #profileLocation {
        font-weight: bold;
    }

    #profilePortfolioAdvertisment {
        margin-block-start: 0;
        margin-bottom: var(--margin-xlarge);

        font-weight: bold;
    }

    #profileContainer {
        width: 20vw;
        height: 70vh;
        margin-left: 5vw;

        transition: 2s;

        display: flex;
        justify-content: center;
        align-items: center;
    }

    #profileContainer:hover {
        margin-left: 10vh;
    }

    #profileContainer .halfShield {
        height: 57.5%;
        width:  30.5%;
        background-color: gray;
        outline: solid 4px rgba(255,255,255,0.15);
    }
    
    #profileContainer .halfShield:nth-of-type(1) {
        background: rgb(0,0,0);
        background: linear-gradient(175deg, rgba(0,0,0,1) 5%, rgba(100,100,100,0.75) 30%, rgba(0,0,0,1) 90%);
        border-radius: 0 0 0 150px;
        position: relative;
        left: 0px;
        
        transition: 2s;
    }

    #profileContainer .halfShield:nth-of-type(2) {
        background-image: url('../../assets/images/ProfilePhoto.jpg');
        background-size: cover;
        background-position-x: 47%;
        border-radius: 55px 0 175px 0;
        margin-top: 20px;

        height: 75%;
        width: 48.5%;
        
        z-index: 2;
        transition: 2s;
    }

    #profileContainer:hover .halfShield:nth-of-type(1) {
        background-color: #58AE15;
        opacity: 0;
        left: 25%;
    }

    #profileContainer:hover .halfShield:nth-of-type(2) {
        height: 90%;
        width: 12.5vw;
        border-radius: 0;
    }

    @media screen and (max-width: 1250px) and (min-width: 850px) {
        #profile {
            width: auto;
        }

        #profileContainer {
            display: none !important;
        }
    }

    @media only screen and (max-width: 1250px) {
        #profileContainer .halfShield:nth-of-type(2) {
            width: 90%;
        }
    }

    @media only screen and (max-width: 850px) {
        #starterContent {
            align-items: flex-start;
            height: 40vh;
            margin-top: 18.5vh;
        }

        #introduction > h1 {
            font-family: Arial;
            font-weight: lighter;
            margin-bottom: 18px;
            text-align: center;
        }

        #profilePortfolioAdvertisment {
            text-align:  center;
        }

        #profile {
            text-align: center;
            line-height: 129.52%;
        }

        #profileLongWordForm {
            display: none;
        }

        #profileName {
            font-weight: bold;
        }

        #profileRole {
            font-weight: bold;
            color: var(--brand-colour);
        }
    }

    @media screen and (max-width: 850px) {
        #profileContainer {
            display: none;
        }
    }
    
    @media only screen and (max-height: 850px) {
        #profileContainer:hover .halfShield:nth-of-type(2) {
            height: 90%;
        }
    }

    @media only screen and (max-width: 1150px) {
        #profileContainer:hover p {
            margin-left: 25.5vw;
            white-space: nowrap;
        }

        #profileContainer:hover .halfShield:nth-of-type(2) {
            width: 20vw;
        }
    } 
</style>

<script>
    import Typed from "typed.js";

    export default {
        mounted() {
            // const typed = new Typed('#profileRole', {
            //     strings: ['Web Developer', 'App Developer'],
            //     typeSpeed: 50,
            //     backSpeed: 50,
            //     backDelay: 1000,
            //     startDelay: 1000,
            //     loop: true,
            //     showCursor: false
            // });
        }
    }
</script>