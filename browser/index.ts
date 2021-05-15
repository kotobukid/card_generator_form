import Vue from "vue";
import MainApp from '../src/components/MainApp.vue';

require('../less/common.less');

window.onload = () => {
    new Vue({
        el: "#main",
        components: {
            'main-app': MainApp
        },
        data() {
            return {
                message: 'vue sfc'
            };
        },
        computed: {},
        methods: {}
    });
};

console.log('index.js is loaded.')