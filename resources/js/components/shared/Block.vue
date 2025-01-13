<template>
    <div :class="['text-center text-h6 q-my-lg q-pa-md q-py-lg vertical-middle', 'rounded', color, text]" :style="'min-height:' + height">
        <slot/>
    </div>
</template>
<script setup>

const props = defineProps({
    title: {
        type: String,
        default: ''
    },
    color: {
        type: String,
        default: 'bg-deep-orange-3'
    },
    text: {
        type: String,
        default: 'text-white'
    },
    height: {
        type: String,
        default: '100px'
    }
});
const emit = defineEmits(['click']);
</script>
