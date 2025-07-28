<template>
    <div>
        <img :src="require(`@/assets/images/skills/${iconSrc}`)" :alt="`${name} icon`">
        <p>{{ name }}</p>
    </div>
</template>

<script>
export default {
    props: ['iconSrc', 'name']
}
</script>

<style scoped>
    div {
        text-align: center;;
    }

    div > img {
        width: 100px;
    }
</style>