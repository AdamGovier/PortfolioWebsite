<template>
    <section id="starterContent">
        <div id="introduction">
            <h1>Hello!</h1>
            <p id="profile">
                My name is <span id="profileName">Adam</span>,<br/>
                and I’m a 
                <span id="profileRole">
                    Web Dev<span id="profileLongWordForm">eloper</span><br/>
                </span>
                based in <span id="profileLocation">Aberdeen</span>.
            </p>
            <p id="profilePortfolioAdvertisment">View my projects & skills <a href="">below</a>.</p>
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

        height: 65vh;
    }

    #introduction > h1 {
        font-family: Arial;
        margin-bottom: 18px;
    }

    #profile {
        font-size: 55px;
        font-family: arial, sans-serif;
        font-weight: normal;
        white-space: nowrap;

        padding-right: 1vw;
        margin-block-end: 0;
        margin-bottom: 35px;
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
        font-size: 15px;
        margin-bottom: 60px;

        font-family: Arial;
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
        background-color: red;
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
        background-image: url('../../assets/ProfilePhoto.jpg');
        background-size: cover;
        background-position-x: 47%;
        border-radius: 55px 0 175px 0;
        margin-top: 20px;

        height: 75%;
        width: 48.5%;
        
        z-index: 3;

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

    @media only screen and (max-width: 1250px) {
        #profile {
            font-size: 35px;
        }

        #profileContainer .halfShield:nth-of-type(2) {
            width: 90%;
        }
    }

    @media only screen and (max-width: 850px) {
        #starterContent {
            align-items: flex-start;
            height: 40vh;
            margin-top: 45%;
        }

        #introduction > h1 {
            font-family: Arial;
            font-weight: lighter;
            font-size: 20px;
            margin-bottom: 18px;
            text-align: center;
        }

        #profilePortfolioAdvertisment {
            text-align:  center;
        }

        #profile {
            font-size: 36px;
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

    /*
    #profileContainer > p {
        transform: rotate(90deg);
        text-align: center;

        opacity: 0;
        transition: 1s;

        position: absolute;
        right: 40px;

        text-transform: uppercase;
        font-family: Arial;
        font-weight: normal;
        font-size: 40px;
        
        -webkit-text-stroke-width: 2px;
        color: white;
    }

    #profileContainer:hover p {
        opacity: 1;
    } */
</style>