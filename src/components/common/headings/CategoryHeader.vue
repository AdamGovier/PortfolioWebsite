<template>
    <h1 class="catHeader">// {{ value }} //</h1>
</template>

<style>
    .catHeader {
        width: 0; /* Depopulate Y axis */
        margin-left: auto;

        z-index: 5;
        transform: rotate(90deg);

        position: relative;
        top: 60px;

        font-family: "Arial";
        text-transform: uppercase;
        font-weight: lighter;
        white-space: nowrap;
        letter-spacing: 5px;
    }
</style>

<script>
export default {
    props: ['value']
}
</script>
