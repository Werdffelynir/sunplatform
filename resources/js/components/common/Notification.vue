<template>

    <VSnackbar top :multi-line="true" v-model="show">
        <h2 class="red--text">{{notificationMessage}}</h2>
        <VBtn color="pink" text @click="show = !show">Close</VBtn>
    </VSnackbar>
</template>

<script>
    export default {
        name: "Notification",
        props: ['error', 'message'],
        data: function () {
            return {
               show: false
            }
        },
        computed: {
            notificationMessage() {
                this.show = true;
                // if(this.message) this.show = true;
                return this.message;
            }
        }
    }
</script>

<style scoped>

</style>
