<template>
    <div class="content-block">
        <h2>{{ heading }}</h2>
        <div class="content">
            <slot></slot>
        </div>
    </div>
</template>

<style>
    .content-block {
        margin-top: 5%;
    }

    .content-block .content {
        margin-top: 2.5%;
    }

    @media only screen and (max-width: 850px) { 
        .content-block .content {
            margin-top: 5%;
        }

        .content-block {
            margin-top: 15%;
        }
    }
</style>

<script>
export default {
    props: ['heading']
}
</script>