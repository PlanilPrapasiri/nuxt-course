export default {
    // Global page headers: https://go.nuxtjs.dev/config-head
    head: {
        title: 'Living mobile demo',
        htmlAttrs: {
            lang: 'en'
        },
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: '' }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
        ]
    },

    // Global CSS: https://go.nuxtjs.dev/config-css
    css: [],

    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    plugins: [
        // TODO: Add Element UI
        '~/plugins/element-ui.js',
        {
            src: '~/plugins/data-table.js',
            ssr: false
        }
        // TODO: Add Element UI Datataaable with no SSR

    ],

    // Auto import components: https://go.nuxtjs.dev/config-components
    components: true,

    // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
    buildModules: [],

    // Modules: https://go.nuxtjs.dev/config-modules
    modules: [
        // TODO : Install proxy and Axios
        '@nuxtjs/proxy',
        '@nuxtjs/axios'
    ],

    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: {},
    proxy: {
        // TODO: Proxy API to /API
        '/api': 'http://localhost:3001'
    }
}