<template lang="pug">
    .buttons
        span.button(v-for="i in items_splitted" v-text="i" :key="i" @click="changed(i)")
        span.button.clear(v-if="!omit_clear" @click="changed('')") クリア
</template>

<script lang="ts">
import {Component, Prop, Vue} from 'vue-property-decorator';
import _ from 'lodash';

@Component({})
export default class AssistButtons extends Vue {
    @Prop({default: ''}) private items!: string;
    @Prop({default: ''}) private name!: string;
    @Prop({default: false}) private omit_clear!: boolean;

    get items_splitted(): string[] {
        return _.map(this.items.split(','), (i: string) => {
            return i.replace(/^[\s]*/g, '').replace(/[\s]*$/g, '');
        });
    }

    changed(value: string): void {
        this.$emit('value-changed', {
            key: this.name,
            value
        })
    }
}
</script>

<style scoped lang="less">
@import "../assets/stylesheets/_buttons";

.buttons {
    margin: 3px 0;
}


</style>
