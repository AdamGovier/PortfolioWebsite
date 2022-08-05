<template>
    <div class="modal" :class="{ showModal }">
        <p>{{ message }}</p>
    </div>
</template>

<style>
    .modal {
        position: fixed;
        text-align: center;
        width: calc(100% - 30px);
        padding: 30px;
        background-color: #121212;
        color: white;
        top: 0;
        transition: all 1s ease-out;
        opacity: 0;
        visibility: hidden;
    }

    .showModal {
        opacity: 1;
        visibility: visible;
    }

    @media (max-width: 850px) {
        .modal {
            text-align: left;
        }
    }
</style>

<script>
export default {
    props: ['showModal', 'message']
}
</script>