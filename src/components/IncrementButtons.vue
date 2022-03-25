<template lang="pug">
    .buttons
        span.button(@click="increment(-10)") -10
        span.button(@click="increment(-5)") -5
        span.button(@click="increment(-1)") -1
        span.button.clear(@click="set_value(0)") 0
        span.button(@click="increment(1)") +1
        span.button(@click="increment(5)") +5
        span.button(@click="increment(10)") +10

</template>

<script lang="ts">
import {Component, Prop, Vue} from 'vue-property-decorator';

@Component({})
export default class IncrementButtons extends Vue {
    @Prop() private value!: string;
    @Prop() private name!: string;

    set_value(value: number): void {
        this.$emit('value-changed', {
            key: this.name,
            value: `${value}`
        });
    }

    increment(delta: number): void {
        try {
            const value_n = Number(this.value)
            this.$emit('value-changed', {
                key: this.name,
                value: `${value_n + delta}`
            });
        } catch (e) {
            this.$emit('value-changed', {
                key: this.name,
                value: `${delta}`
            });
        }
    }
}
</script>

<style scoped lang="less">
@import "../assets/stylesheets/_buttons";

.buttons {
    margin: 3px 0;
}

</style>
