<template lang="pug">
    .weapon_form
        form
            .buttons
                span.use_assist(@click="toggle_assist" :class="use_assist ? 'active': ''") 入力アシスト
            table
                colgroup
                    col(style="width: 150px;")
                    col(style="width: 300px;")
                tr
                    th 名称
                    td
                        input(type="text" :value="item.name")
                tr
                    th 構造
                    td
                        input(type="text" :value="item.structure")
                        assist-buttons(v-if="use_assist" name="structure" items="物理,魔術" @value-changed="value_changed")
                tr
                    th レベル
                    td
                        input(type="text" :value="item.level")
                        increment-buttons(v-if="use_assist" @value-changed="value_changed" name="level" :value="item.level")
                tr
                    th カスタマイズ
                    td
                        input(type="text" :value="item.customize")
                        assist-buttons(v-if="use_assist" name="customize" items="○,☓" @value-changed="value_changed")
                tr
                    th 条件
                    td
                        input(type="text" :value="item.condition")
                        assist-buttons(v-if="use_assist" name="condition" items="トリガー,エンチャント,コンティニュ" @value-changed="value_changed" :omit_clear="true")
                tr
                    th  探知値
                    td
                        input(type="text" :value="item.detection")
                        increment-buttons(v-if="use_assist" @value-changed="value_changed" name="detection" :value="item.detection")
                tr
                    th 解除値
                    td
                        input(type="text" :value="item.dismiss")
                        increment-buttons(v-if="use_assist" @value-changed="value_changed" name="dismiss" :value="item.dismiss")
                tr
                    th  対象
                    td
                        input(type="text" :value="item.target")
                        assist-buttons(v-if="use_assist" name="target" items="単体,範囲" @value-changed="value_changed")
                tr
                    th  射程
                    td
                        input(type="text" :value="item.range")
                        increment-buttons(v-if="use_assist" @value-changed="value_changed" name="range" :value="item.range")
                tr
                    th  効果
                    td
                        textarea(:value="item.text")
                tr
                    th  解説
                    td
                        textarea(:value="item.description")
            .buttons
                span.button(@click="submit") 生成
</template>

<script lang="ts">
import {Component, Prop, Vue} from 'vue-property-decorator';
import {SourceWeapon, RawSourceWeapon, SourceTrap, RawSourceTrap} from "../types";
import AssistButtons from "./AssistButtons.vue";
import IncrementButtons from "./IncrementButtons.vue";
import axios, {AxiosResponse} from "axios";

@Component({
    components: {
        'assist-buttons': AssistButtons,
        'increment-buttons': IncrementButtons
    }
})
export default class TrapForm extends Vue {
    item: SourceTrap = {
        template: 'trap',
        name: '', // 名前：
        structure: '物理',// 構造：[物理/魔術]
        level: '1', // レベル：[数列]
        customize: '○',// カスタマイズ：[○/×]
        condition: 'トリガー', // 条件：[トリガー/エンチャント/コンテニュ]型
        detection: '', // 探知値：[数列/－]
        dismiss: '', // 解除値：[数列/－]
        target: '単体', // 対象：
        range: '', // 射程：
        text: '', // 効果：
        description: ''
    }

    value_change(key: keyof RawSourceTrap, value: string): void {
        this.item[key] = value;
    }

    value_changed(info: { key: keyof RawSourceTrap, value: string }) {
        this.value_change(info.key, info.value);
    }

    use_assist: boolean = true;

    toggle_assist(): void {
        this.use_assist = !this.use_assist;
    }

    submit(): void {
        axios.post('/generate_image.json', {source: this.item}).then((res: AxiosResponse<{ success: boolean }>) => {
            console.log(res.data.success);
        });
    }
}
</script>

<style scoped lang="less">
@import "../assets/stylesheets/_buttons";

.buttons {
    margin: 3px 0;
}

span.use_assist {
    .common_button();

    &.active {
        background-color: pink;
    }
}
</style>
