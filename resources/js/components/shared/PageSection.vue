<template>
    <div class="q-mb-xl" :style="'min-height:' + height">
        <div class="q-my-md" v-if="title">
            <section-title @click="emit('click:title')">{{ title }}</section-title>
        </div>
        <div class="q-my-md">
            <slot />
        </div>
    </div>
</template>
<script setup>

const props = defineProps({
    title: {
        type: String,
        default: ''
    },
    height: {
        type: String,
        default: ''
    }
});
const emit = defineEmits(['click:title']);
</script>
