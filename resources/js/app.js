import '../css/app.css';
import './bootstrap';

import { createInertiaApp } from '@inertiajs/vue3';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { createApp, h } from 'vue';
import { ZiggyVue } from '../../vendor/tightenco/ziggy';
import {ProjectPlugin} from '@/plugins/project';

const appName = import.meta.env.VITE_APP_NAME || 'Laravel';
window.TWA = window.Telegram ? window.Telegram.WebApp : null;
window.debug = (...t) => console.log(...t);
window.redirect =  (path) => window.location = path;

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) =>
        resolvePageComponent(
            `./pages/${name}.vue`,
            import.meta.glob('./pages/**/*.vue'),
        ),
    setup({ el, App, props, plugin }) {
        const app = createApp({ render: () => h(App, props) })
            .use(plugin)
            .use(ZiggyVue)
            .use(ProjectPlugin);

        return app.mount(el);

    },
    progress: {
        color: '#4B5563',
    },
});
