<template>
    <VContainer>
        <VRow class="no-gutters">
            <VCol>
    <VSwitch
        v-model="switcher"
        class="ma-2"
        :label="`Active: ${switcher.toString().toUpperCase()}`"
    ></VSwitch>
            </VCol>
            <VCol>
    <VTextField
        label="TYPE"
        single-line
        outlined
        hide-details
    ></VTextField>
            </VCol>
            <VCol cols="1">
                <VBtn  class="mx-2" tile fab dark color="indigo">
                    <v-icon dark>mdi-plus</v-icon>
                </VBtn>
            </VCol>
            <VCol cols="2">
                <VOverflowBtn
                    class="my-1"
                    :items="dropdown_list"
                    label="DROPDOWN"
                ></VOverflowBtn>
            </VCol>
        </VRow>
        <VRow class="mt-10">
            <VCol cols="4">
                <VTextField
                    label="NAME"
                    single-line
                    outlined
                    hide-details
                ></VTextField>
            </VCol>
        </VRow>
        <VRow>
            <VCol cols="4">
                <VTextField
                    label="TITLE"
                    single-line
                    outlined
                    hide-details
                ></VTextField>
            </VCol>
        </VRow>
        <VRow>
            <VCol cols="9">
                <v-textarea
                    filled
                    auto-grow
                    label="BODY"
                    rows="1"
                    row-height="150"
                ></v-textarea>
            </VCol>
        </VRow>
        <VRow class="no-gutters">
            <VCol cols="4">
                <VTextField
                    label="CUSTOM OPTION"
                    single-line
                    outlined
                    hide-details
                ></VTextField>
            </VCol>
            <VCol cols="1">
                <VBtn  class="mx-2" tile fab dark color="indigo">
                    <v-icon dark>mdi-plus</v-icon>
                </VBtn>
            </VCol>
        </VRow>
        <VRow class="d-flex justify-center mt-10">
           <VCol cols="2">
                <VBtn large block color="error">Delete</VBtn>
           </VCol>
            <VCol cols="2">
                <VBtn large block color="success">Save</VBtn>
            </VCol>
        </VRow>

    </VContainer>
</template>

<script>
    export default {
        name: "editor-component",
        data() {
            return {
                switcher: false,
                dropdown_list: ['One', 'Two', 'Three']
            }
        }
    }
</script>

<style scoped>

</style>
