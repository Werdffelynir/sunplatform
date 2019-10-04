<template id="service-toolbar-template">
    <div class="toolbar d-flex justify-space-between mb-2">
        <div class="toolbar-title">
            <span>{{title}}</span>
        </div>
        <div class="toolbar-actions">
            <slot />
        </div>
    </div>
</template>
<style>
    .toolbar-title span {
        font-size: 36px;
        font-family: "Nunito", "Roboto", sans-serif;
        padding-left: 10px;
    }
    .toolbar-actions {
        font-size: 30px;
        padding-left: 10px;
        padding-right: 20px;
    }
</style>
<script>

    export default {
        template: '#service-toolbar-template',
        name: 'service-toolbar-component',
        props: ['title'],
        mounted() {},
        data() {
            return {}
        },
        computed: {},
        methods: {}
    }
</script>
