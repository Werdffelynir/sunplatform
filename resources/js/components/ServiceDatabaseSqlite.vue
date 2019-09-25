<template>
    <div class="container service">


        <div class="items">
            <VCard class="item">
                <VCardTitle><span class="icon active"></span>Database (Sqlite)</VCardTitle>
                <VCardText>This database is associated with domain [http://site-domain.com]</VCardText>
                <VCardActions>
                    <VBtn text>Off</VBtn>
                    <VBtn text>Edit</VBtn>
                </VCardActions>
            </VCard>
        </div>

    </div>
</template>
<style>
    .service h2 {

    }
    .service .items {
        margin: 0rem 0 2rem;
    }

    .service .item {
        margin-bottom: 1rem;
    }
    .service .icon {
        width: 24px;
        height: 24px;
        border-radius: 50%;
        margin-right: 1rem;
    }
    .service .active {
        background: orange;
    }
</style>
<script>
    export default {
        name: 'services-database-sqlite-component',
        mounted() {
            console.log('Component mounted.')
        }
    }
</script>
