<template lang="pug">
    #app
        form-switcher
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';
import FormSwitcher from './FormSwitcher.vue';

@Component({
    components: {
        'form-switcher': FormSwitcher,
    },
})
export default class App extends Vue {
}
</script>

<style lang="less">
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
}
</style>