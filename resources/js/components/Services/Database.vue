<template>
    <VCard class="item">
        <VCardTitle><span class="icon active"></span>Database (MySql)</VCardTitle>
        <VCardText>This database is associated with domain [http://site-domain.com]</VCardText>
        <VCardActions>
            <VBtn text>Off</VBtn>
            <VBtn text>Edit</VBtn>
        </VCardActions>
    </VCard>
</template>
<style>
</style>
<script>
    export default {
        name: 'database-component',
        mounted() {
            console.log('Component "Database.vue" mounted.')
        }
    }
</script>
