<template>
    <div style="position: fixed; bottom: 0; width: 100%;">
        <div class="q-pa-md">
            <div class="row">
                <div class="col"></div>
                <div class="col text-center">{{ title }}</div>
                <div class="col text-right"></div>
            </div>
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
    icon: {
        type: String,
        default: undefined
    },

});

const emit = defineEmits(['click:code', 'click:social', 'click:share']);

</script>
