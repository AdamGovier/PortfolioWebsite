<template>
    <nav class="desktop">
        <div id="navLeftSide">
            <h1>GO<br/>VIER</h1>
            <div id="navLinks">
                <a href="">About</a>
                <a href="">Work</a>
                <a href="">Skills</a>
                <a href="">Contact</a>
            </div>
        </div>
        <div>
            <a href=""><i class="fa-brands fa-linkedin-in"></i></a>
            <a href=""><i class="fa-brands fa-github"></i></a>
        </div>
    </nav>
    <nav class="mobile">
        <h1 @click="contextMenu= true;">GO<br/>VIER</h1>
        <div v-if="contextMenu" id="contextMenu">

        </div>
    </nav>
</template>

<script>
export default {
    data() {
        return {
            contextMenu: false
        } 
    }
}
</script>

<style scoped>
    nav {
        width: 100%;
        display: flex;
        justify-content: space-around;

    }

    nav.desktop {
        position: fixed;
        align-items: center;
        height: 200px;
        gap: 100px
    }

    nav.mobile {

    }

    #contextMenu {
        position: fixed;
        top: 0;
        left: 0;
        height: 100%;
        width: 100vw;
        background-color: white;
    }

    #navLeftSide {
        display: flex;
        align-items: center;
    }

    h1 {
        text-align: center;
        color: #58AE15;
        font-size: 36px;
    }

    .desktop h1 {
        margin-right: 52.5px;
    }

    #navLinks {
        margin-top: 10px;
    }

    a {
        color: white;
        margin: 27.5px;
        text-decoration: none;
        font-size: 20px;
        font-weight: lighter;
    }

    i {
        font-size: 30px;
        margin-top: 10px;
    }

    @media only screen and (max-width: 500px) {
        .desktop {
            display: none;
        }
    }

    @media only screen and (min-width: 500px) {
        .mobile {
            display: none;
        }
    }
</style>