<template>
    <VSnackbar top :multi-line="true" v-model="snackbarx" >
        <h2>
            <span v-if="errorMessages" class="red--text">{{ errorMessages }}</span>
            <span v-if="successMessages">{{ successMessages }}</span>
        </h2>
        <VBtn color="pink" text @click="onClick">Close</VBtn>
    </VSnackbar>
</template>

<script>
    export default {
        name: "Error",
        props: {
            onClick: Function,
            errorMessages: String,
            successMessages: String,
            datatosnack: Boolean
    },
        data: function () {
            return {
                snackbarx: this.datatosnack
            }
        },
        methods: {

        }
    }
</script>

<style scoped>

</style>
