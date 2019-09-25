<template>
    <div class="container">
        <h2>Profile settings</h2>

        <VCard :color="item.color" dark>
            <VListItem three-line>
                <VListItemContent class="align-self-start">
                    <VListItemTitle class="headline mb-2" v-text="item.fullname"></VListItemTitle>

                    email <VListItemSubtitle v-text="item.email"></VListItemSubtitle>

                    company <VListItemSubtitle v-text="item.company"></VListItemSubtitle>


                    <VCardTitle>SILVER: Access permissions</VCardTitle>
                    <VCardText>Aperiam dolorem dolores doloribus fugit nesciunt quae voluptas voluptate. </VCardText>


                    <VCardActions>
                        <VBtn text>Edit</VBtn>
                    </VCardActions>

                </VListItemContent>

                <VListItemAvatar size="125" tile>
                    <v-img :src="item.src"></v-img>
                </VListItemAvatar>
            </VListItem>
        </VCard>

    </div>
</template>
<script>

    import avatar from './../../assets/images/avatar.png';

    export default {
        name: 'profile-component',
        mounted() {
            console.log('Component mounted.')
        },
        data() {
            return {
                item: {
                    color: 'gray',
                    src: avatar,
                    company: 'Company name',
                    email: 'useremail@email.com',
                    fullname: 'User Full Name',
                }
            };
        }
    }
</script>
