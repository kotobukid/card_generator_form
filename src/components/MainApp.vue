<template lang="pug">
    .main_app
        span(v-text="message")
</template>

<script lang="ts">
import Component from "vue-class-component";
import {Prop, Vue} from "vue-property-decorator";
@Component
export default class MainApp extends Vue {
    @Prop({default: ""})
    readonly message!: string;
}
</script>

<style lang="less" scoped>
.main_app {
    color: green;
}
</style>