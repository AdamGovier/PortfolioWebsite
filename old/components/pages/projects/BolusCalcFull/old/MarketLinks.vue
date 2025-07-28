<template>
    <div class="marketLinks">
        <a class="marketLink">
            <img src="@/assets/images/Projects/Shared/MarketLinks/AppStore.svg" alt="">
        </a>
        <a class="marketLink">
            <img src="@/assets/images/Projects/Shared/MarketLinks/google-play-badge.png" alt="">
        </a>
    </div>
</template>

<style>
    .marketLinks {
        margin-top: 3%;
    }

    .marketLink:not(:first-child) {
        margin-left: 16px;
    }

    .marketLink {
        cursor: pointer;
        opacity: 0.8;
    }

    .marketLink > img {
        height: 55px;
    }

    .marketLink:hover {
        background-color: var(--brand-colour);
        border-radius: 10px;
        opacity: 1;

    }
</style>