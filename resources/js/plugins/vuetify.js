import Vue from 'vue';
import Vuetify, {
    VApp,
    VNavigationDrawer,
    VContent,
    VDivider,
    VFooter,
    VCard,
    VCardTitle,
    VCardText,
    VChip,
    VCardActions,
    VContainer,
    VRow,
    VCol,
    VBtn,
    VRating,
    VToolbar,
    VToolbarItems,
    VToolbarTitle,
    VSubheader,
    VStepper,
    VSpacer,
    VMenu,
    VMenuTransition,
    VAppBar,
    VAppBarNavIcon,
    VIcon,
    VList,
    VListItem,
    VListItemIcon,
    VListItemContent,
    VListItemSubtitle,
    VListItemTitle,
    VListItemAvatar,
    VAvatar,
    VHover,
    VImg,
    VForm,
    VInput,
    VTextField,
    VTextarea,
    VCheckbox,
    VSwitch,
} from 'vuetify/lib';
import 'vuetify/dist/vuetify.css';
import '@mdi/font/css/materialdesignicons.css';

import colors from 'vuetify/lib/util/colors';

import {
    Ripple
} from 'vuetify/lib/directives';


Vue.use(Vuetify, {
    components: {
        VApp,
        VNavigationDrawer,
        VContent,
        VDivider,
        VFooter,
        VCard,
        VCardTitle,
        VCardText,
        VCardActions,
        VChip,
        VContainer,
        VRow,
        VCol,
        VBtn,
        VRating,
        VToolbar,
        VToolbarItems,
        VToolbarTitle,
        VSubheader,
        VStepper,
        VSpacer,
        VMenu,
        VMenuTransition,
        VAppBar,
        VAppBarNavIcon,
        VList,
        VListItem,
        VIcon,
        VListItemIcon,
        VListItemContent,
        VListItemSubtitle,
        VListItemTitle,
        VListItemAvatar,
        VAvatar,
        VHover,
        VImg,
        VForm,
        VInput,
        VTextField,
        VTextarea,
        VCheckbox,
        VSwitch,
    },
    directives: {
        Ripple,
    },
});

export default new Vuetify({
    icons: {
        iconfont: 'mdi',
    },
    theme: {
        themes: {
            light: {
                primary: colors.grey.darken1,
                secondary: colors.grey.lighten4,
                accent: colors.indigo.base,
            },
            dark: {
                primary: colors.grey.darken1,
                secondary: colors.grey.lighten4,
                accent: colors.indigo.base,
            },
        },
        dark: true,
    },
})
