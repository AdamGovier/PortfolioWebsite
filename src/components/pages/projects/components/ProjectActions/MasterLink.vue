<template>
    <router-link v-if="href" class="actionAnchor" :to="href">
        {{title}}
    </router-link>

    <a v-if="extHref" class="actionAnchor" :href="extHref" target=”_blank”>
        {{title}}
    </a>
</template>

<script>
export default {
    props: ['href', 'title', 'extHref']
}
</script>

<style scoped>

.actionAnchor {
        font-family: 'ITC Avant Garde Gothic Std';
        font-style: normal;
        font-weight: 500;
        font-size: 20px;

        text-align: center;
        text-decoration: none;

        padding: 10px 0;
        background: black;
        color:white;
}

</style>