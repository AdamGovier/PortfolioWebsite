<template>
    <div class="pageContainer">
        <div class="projectHolder">
            <div class="hero">

            </div>
            <div class="blurb">
                <h4 class="type">mobile app</h4>
                <h1 class="title">Bolus Calculator</h1>
                <p class="desc">A mobile application that helps better manage my diabetes control which is planned to be distributed to other diabetics around the world for free!</p>
                <a class="actionAnchor">
                    Find Out More
                </a>
            </div>
        </div>
    </div>
</template>

<style scoped>
    .pageContainer {
        height: 100%;

        display: flex;
        justify-content: center;
        align-items: center;
    }

    .projectHolder {
        display: flex;
        align-items: center;
    }

    .projectHolder .hero {
        width: 50vw;
        height: 80vh;
        margin-lefT: 5vw;

        background-color: slategray;
        background-image: url('../../../assets/images/Mockups.png');
        background-size: cover;
        background-position: 50% 0;

        border: 2px solid var(--brand-colour);
    }

    .projectHolder .blurb {
        width: 30vw;
        min-height: 42.5vh;

        position: relative;
        right: 5vw;

        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: 1fr 1.25fr 1fr 1.5fr;
        align-items: center;

        background-color: white;
        color: black;
    }

    .projectHolder .blurb .title {
        font-family: 'ITC Avant Garde Gothic LT';
        font-weight: 700;
        font-size: 40px;
    }

    .projectHolder .blurb .type {
        font-weight: 300;
        font-size: 21px;
        line-height: 104.02%;
    }

    .projectHolder .blurb .desc {
        font-family: "Arial";
        font-style: medium;
        font-weight: 300;
        font-size: 20px;
        line-height: 157.52%;
    }

    .projectHolder .blurb .actionAnchor {
        color:white;
        font-family: 'ITC Avant Garde Gothic Std';
        font-style: normal;
        font-weight: 500;
        font-size: 20px;
        padding: 10px 0;
        text-align: center;
        background: black;

    }

    .projectHolder .blurb > * {
        width: 80%;
        margin: 0 auto;
    }
</style>

<script>
export default {
    mounted() {
        // proof of concept function
        document.querySelector(".projectHolder").style.opacity = 0.15;
        window.addEventListener("scroll", () => {
            const transitionHeight = document.querySelector("#app").clientHeight / 2;
            const currentYaxis = document.documentElement.scrollTop;

            const calculatedOpacity = (currentYaxis / transitionHeight) ?? 0;

            const startOpacity = 0.15;

            document.querySelector(".projectHolder").style.opacity = Math.max(startOpacity, calculatedOpacity)
            console.log(transitionHeight, currentYaxis, calculatedOpacity);
        })

    }
}
</script>