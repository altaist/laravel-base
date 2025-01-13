<template>
    <div class="q-px-md">
        <page-header
            :title="title"
            :show-back-btn="showBackBtn"
            :show-profile-btn="showBackBtn"
            />

        <page-container>
            <slot/>
        </page-container>

        <page-footer :title="footer" v-if="footer"/>
    </div>
</template>
<script setup>

const props = defineProps({
    title: {
        type: String,
        default: ''
    },
    footer: {
        type: String,
        default: ''
    },

    showBackBtn: {
        type: Boolean,
        default: true
    },
    showProfileBtn: {
        type: Boolean,
        default: true
    },
});

const emit = defineEmits(['click']);
const model = defineModel({
    type: String,
});

</script>
