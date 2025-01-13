<template>
    <div class="q-pa-md">
        <div class="row">
            <div class="col" v-if="showBackBtn"><btn label="<" @click="history.back()"/></div>
            <div class="col" v-if="showAppIcon"><span>{{ icon }}</span></div>
            <div class="col text-center"><page-title>{{ title }}</page-title></div>
            <div class="col text-right"><btn :icon="profile" @click="emit('header-profile-click')"/></div>
        </div>
    </div>
</template>
<script setup>
const props = defineProps({
    title: {
        type: String
    },
    color: {
        type: String,
        default: 'primary'
    },
    showBackBtn: {
        type: Boolean,
        default: true
    },
    showProfileBtn: {
        type: Boolean,
        default: true
    },


    appIcon: {
        type: String,
    },
    profileIcon: {
        type: String,
    },

});

const emit = defineEmits(['click:profile', 'click:lang', 'click:wallet']);


</script>
