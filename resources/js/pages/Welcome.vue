<template>
    <page-layout 
        title="Приложение"
        footer-text="Контакты"
        :left-btn-go-back="true"
        @click:header:left="onHomeClick"
        >

        <page-section title="Добро пожаловать!">
            Мы всем тут рады
        </page-section>
        
        <page-section title="О сервисе">
            Немного о нас
        </page-section>

        <block color="text-white" bg-color="bg-accent" title="Важная информация">В этом блоке отображается важная информация</block>

    </page-layout>
</template>
<script setup>
import { Head, Link } from '@inertiajs/vue3';

defineProps({

});

const onHomeClick = () => {
}

</script>
