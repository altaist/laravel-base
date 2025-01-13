<template>
    <div style="position: fixed; bottom: 0; width: 100%;">
        <div class="q-pa-md">
            <div class="row">
                <div class="col"><btn :label="t('footer.btn_code')" @click="emit('click:code')"/></div>
                <div class="col text-center"><btn :label="t('footer.btn_social')"/></div>
                <div class="col text-right"><btn :label="t('footer.btn_share')"/></div>
            </div>
        </div>
    </div>
</template>
<script setup>
const props = defineProps({
    label: {
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
