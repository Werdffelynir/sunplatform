<template id="default-template">

    <div class="text-center">
        <VAvatar size="130">
            <img :src="avatar" alt="avatar">
            <div class="update-images" v-bind:style="{ display: displayToggle }" v-on:click="update"><span>change</span></div>
        </VAvatar>
        <div v-if="fileIsError" class="errors-messages">
            <div v-for="type in fileErrorTypes">
                <div v-if="type === 'types'">Error with file type</div >
                <div v-if="type === 'size'">Error with file size</div >
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
    import createVirtualForm from "../../util/virtualform";
    import {getterWith, getterWithModule} from '../../store/getterWith';
    import {GET_USER} from '../../store/Profile/getters';
    import {commitWith, commitWithModule} from '../../store/commitWith';
    import {SET_USER} from '../../store/Profile/mutations';

    export default {
        template: '#avatar-template',
        name: 'avatar-component',
        props: ['uploader'],
        mounted() {
            console.log('Component mounted.')
            console.log(this.avatar)
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
                const profile = getterWithModule('profile', GET_USER);
                if (profile && profile.avatar) {
                    const img = new Image();
                    img.src = profile.avatar;
                    return img.src;
                } else
                    return avatarImages;
            }
        },
        methods: {
            update() {
                const reader = new FileReader();
                const form = createVirtualForm();
                form.selectFile((files, err, errTypes) => {
                    this.fileIsError = err;
                    this.fileErrorTypes = errTypes;
                    if (!err) {
                        reader.onloadend = () => {
                            commitWithModule('profile', SET_USER, {
                                avatar: reader.result,
                            });
                        };
                    }
                    reader.readAsDataURL(files[0]);
                })
            }
        }
    }
</script>
