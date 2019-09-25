<template>
    <div class="container service">


        <div class="items">
            <h2>Your Services</h2>

            <span v-for="i in (new Array(3).fill(0))">
                <VCard class="item">
                    <VCardTitle><span class="icon active"></span>Database (MySql)</VCardTitle>
                    <VCardText>This database is associated with domain [http://site-domain.com]</VCardText>
                    <VCardActions>
                        <VBtn text>Off</VBtn>
                        <VBtn text>Edit</VBtn>
                    </VCardActions>
                </VCard>
            </span>
        </div>


        <div class="items">
            <h2>Services add</h2>
                <span v-for="i in (new Array(8).fill(0))">
                <VList two-line subheader>
                    <VListItem>
                    <VListItemContent>
                        <VListItemTitle>Service name</VListItemTitle>
                        <VListItemSubtitle>Change your Google+ profile or some.</VListItemSubtitle>
                    </VListItemContent>
                    </VListItem>
                </VList>
                <VDivider></VDivider>
            </span>
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
        name: 'services-component',
        mounted() {
            console.log('Component mounted.')
        }
    }
</script>
