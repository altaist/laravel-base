<template>
    <q-btn :label="label" @click="emit('click')" flat :color="color"/>
</template>
<script setup>

const props = defineProps({
    label: {
        type: String,
        default: ''
    },
    color: {
        type: String,
        default: 'deep-orange'
    },
});
const emit = defineEmits(['click']);
</script>
