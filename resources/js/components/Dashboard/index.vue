<template>
    <div class="container">

        <VRow>
            <VCol>
                <VCard>
                    <VCardTitle>Widget "Default"</VCardTitle>
                    <VCardText>card text</VCardText>
                    <VCardActions>
                        <VBtn text>Click</VBtn>
                    </VCardActions>
                </VCard>
            </VCol>
            <VCol>
                <VCard>
                    <VCardTitle>Widget "Default"</VCardTitle>
                    <VCardText>Aperiam dolorem dolores doloribus fugit nesciunt quae voluptas voluptate. </VCardText>
                    <VCardActions>
                        <VBtn text>Click</VBtn>
                    </VCardActions>
                </VCard>
            </VCol>
        </VRow>
        <VRow>
            <VCol>
                <VCard>
                    <VCardTitle>Widget GeoLocation Statistic</VCardTitle>
                    <VCardText>
                        <p>Eum libero, necessitatibus? Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet, ex!</p>
                    </VCardText>
                    <VCardActions>
                        <VBtn text>Click</VBtn>
                    </VCardActions>
                </VCard>
            </VCol>
        </VRow>
        <VRow>
            <VCol>
                <VCard>
                    <VCardTitle>Widget title</VCardTitle>
                    <VCardText>Lorem ipsum dolor sit amet, consectetur adipisicing elit. </VCardText>
                    <VCardActions>
                        <VBtn text>Click</VBtn>
                    </VCardActions>
                </VCard>
            </VCol>
            <VCol>
                    <VCard>
                        <VCardTitle>Widget "Default"</VCardTitle>
                        <VCardText>card text</VCardText>
                        <VCardActions>
                            <VBtn text>Click</VBtn>
                        </VCardActions>
                    </VCard>
            </VCol>
            <VCol>
                <VCard>
                    <VCardTitle>Widget "Default"</VCardTitle>
                    <VCardText>card text</VCardText>
                    <VCardActions>
                        <VBtn text>Click</VBtn>
                    </VCardActions>
                </VCard>
            </VCol>
        </VRow>

    </div>
</template>
<style>
    .dashboard {
        width: 100%;
        padding: 0 2rem 0 1rem;
    }
</style>
<script>
    export default {
        name: 'dashboard-component',
        mounted() {
            console.log('Component mounted.')
        }
    }
</script>
