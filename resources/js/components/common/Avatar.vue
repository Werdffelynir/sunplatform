<template id="default-template">

    <div class="text-center">
        <VAvatar size="130">
            <img :src="avatar" alt="avatar">
            <div class="update-images" v-bind:style="{ display: displayToggle }" v-on:click="update"><span>change</span></div>
        </VAvatar>
        <div v-if="fileIsError" class="errors-messages">
            <div v-for="type in fileErrorTypes">
                <div v-if="type === 'types'">
                    types - Lorem ipsum dolor sit amet.
                </div >
                <div v-if="type === 'size'">
                    size - Lorem ipsum dolor sit amet.
                </div >
            </div>
        </div>

    </div>

</template>
<style>
    .update-images{
        width: 114px;
        height: 70px;
        background-color: #00000040;
        border-bottom-left-radius: 56px;
        border-bottom-right-radius: 56px;
        position: absolute;
        top: 64px;
        cursor: pointer;
    }
    .update-images span {
        cursor: pointer;
        position: relative;
        top: -8px;
    }
    .errors-messages {
        padding-top: 50px;
        color: red;
    }
</style>
<script>
    import avatarImages from '../../../assets/images/avatar.png';
    import createVirtualForm from "../../utils/virtualform";

    export default {
        template: '#avatar-template',

        name: 'avatar-component',

        props: ['uploader'],

        mounted() {
            console.log('Component mounted.')
        },
        data() {
            return {
                fileIsError: false,
                fileErrorTypes: [],
                displayToggle: 'block'
            }
    },
        computed: {
            avatar() {
                return this.$store.getters['profile/user'].avatar || avatarImages;
            }

        },
        methods: {
            update() {
                const form = createVirtualForm();


                form.selectFile((files, err, errTypes) => {
                    // const form = new FormData();
                    // form.append('file', JSON.stringify(files));
                    this.fileIsError = err;
                    this.fileErrorTypes = errTypes;


                    const reader = new FileReader();
                    if (!err) {
                        reader.onloadend = () => {

                            this.$store.commit('profile/addUser', {
                                avatar: reader.result,
                            });

                        };
                    };
                    reader.readAsDataURL(files[0]);
                    // this.displayToggle = 'none'
                    console.log(err, errTypes, files);
                })




            }
        }
    }
</script>
