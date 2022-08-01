<template>
    <h1 id="Logo">GO<br/>VIER</h1>
</template>

<style scoped>
    #Logo {
        text-align: center;
        font-family: "ITC Avant Garde Gothic Std";
        color: var(--brand-colour);
        font-size: 36px;
    }

    @media (max-width: 850px) {
        #Logo {
            background-color: black;
            height: 80px;
            width: 80px;

            font-size: 24px;

            display: flex;
            justify-content: center;
            align-items: center;
        }
    }

</style>