export declare type ContentType = 'weapon' | 'trap' | 'skill';


export declare type SourceWeapon = {
    template: 'weapon',
} & RawSourceWeapon;

export declare type RawSourceWeapon = {
    name: string, //名前：テストソード
    type: string, // 種別：長剣
    level: string, // レベル：1
    weight: string, // 重量：8
    hit_adjust: string, // 命中修正：-1
    attack: string, // 攻撃力：+[CL+7]
    initiative_adjust: string, // 行動修正：-1
    range: string, // 射程：至近
    equip_part: string, // 装備部位：片
    price: string, // 価格：12000
    appraisal: string, // 鑑定値：16
    text: string, // 効果：パッシブ。この武器を使用した白兵攻撃のダメージに+2Dする。
    description: string// 解説：
};

export declare type SourceTrap = {
    template: 'trap'
} & RawSourceTrap;

export declare type RawSourceTrap = {
    name: string, // 名前：
    structure: string,// 構造：[物理/魔術]
    level: string, // レベル：[数列]
    customize: string,// カスタマイズ：[○/×]
    condition: string, // 条件：[トリガー/エンチャント/コンテニュ]型
    detection: string, // 探知値：[数列/－]
    dismiss: string, // 解除値：[数列/－]
    target: string, // 対象：
    range: string, // 射程：
    text: string, // 効果：
    description: string
}