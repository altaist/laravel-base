<template>
    <div class="q-px-md">
        <page-header
            :title="title"
            :left-btn-icon="leftBtnIcon"
            :left-btn-route="leftBtnRoute"
            :left-btn-go-back="leftBtnGoBack"
            :right-btn-icon="rightBtnIcon"
            :right-btn-route="rightBtnRoute"

            @click:left="emit('click:header:left')"
            @click:right="emit('click:header:right')"
            />

        <page-container>
            <slot/>
        </page-container>

        <page-footer 
            v-if="footerText"
            :title="footerText"

            @click:left="emit('click:footer:left')"
            @click:right="emit('click:footer:right')"

        />
    </div>
</template>
<script setup>
import PageContainer from '@/components/shared/PageContainer.vue';


const props = defineProps({
    title: {
        type: String,
        default: ''
    },
    footerText: {
        type: String,
        default: ''
    },

    leftBtnIcon: {
        type: String,
        default: "fa-solid fa-home"
    },
    leftBtnRoute: {
        type: String
    },
    leftBtnGoBack: {
        type: Boolean,
        default: true
    },

    rightBtnIcon: {
        type: String,
        default: 'fa-solid fa-user'
    },
    rightBtnRoute: {
        type: String,
        default: 'dashboard'
    },
});

const emit = defineEmits(['click:header:left', 'click:header:right', 'click:header:title', 'click:footer:left', 'click:footer:right', 'click:footer:title']);

const model = defineModel({
    type: String,
});

</script>
