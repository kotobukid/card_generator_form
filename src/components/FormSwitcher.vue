<template lang="pug">
    .form-switcher
        select(v-model="template")
            option(value="weapon") 武具
            option(value="trap") トラップ

        weapon-form(v-if="template === 'weapon'")
        trap-form(v-if="template === 'trap'")
</template>

<script lang="ts">
import {Component, Prop, Vue} from 'vue-property-decorator';
import WeaponForm from "./WeaponForm.vue";
import TrapForm from "./TrapForm.vue";
import {ContentType} from "../types";

@Component({
    components: {
        'weapon-form': WeaponForm,
        'trap-form': TrapForm
    }
})
export default class FormSwitcher extends Vue {
    @Prop() private msg!: string;

    template: ContentType = 'weapon';
}
</script>

<style scoped lang="less">
</style>
