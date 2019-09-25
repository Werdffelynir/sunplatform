<template id="default-template">
    <div class="container">
        <slot></slot>
    </div>
</template>
<script>
    import '../../sass/components/default.scss';

    export default {
        template: '#default-template',
        name: 'default-component',
        mounted() {
            console.log('Component mounted.')
        }
    }
</script>
