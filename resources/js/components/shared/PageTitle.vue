<template>
    <div class="text-h2" @click="emit('page-title-click')">
        <slot/>
    </div>
</template>
<script setup>

const emit = defineEmits(['page-title-click']);
</script>
