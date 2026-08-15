import {Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs} from "react/jsx-runtime";
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h2: "h2",
    p: "p",
    strong: "strong",
    ...props.components
  };
  return _jsxs(_Fragment, {
    children: [_jsx(_components.h2, {
      children: "官方描述确认的范围"
    }), "\n", _jsx(_components.p, {
      children: "Xbox Wire 官方描述确认 Mistfall Hunter 有 6 个职业、每个职业两种武器姿态、天赋树、宝石词缀、主动技能、单人玩法和三人小队。它还将游戏描述为第三人称 PvPvE 撤离 ARPG：玩家要对抗腐化生物和敌对 Gyldhunter，并带着战利品返回。官方描述没有提供完整的逐职业平衡表。"
    }), "\n", _jsx(_components.h2, {
      children: "已收集资料列出的职业名称"
    }), "\n", _jsx(_components.p, {
      children: "职业调研资料列出 Blackarrow、Mercenary、Seer、Shadowstrix、Sorcerer 与 Withered Knight，并分别将其描述为远程弓手、直接近战、支援与魔法、潜行刺杀、法术施放和带防御反制的近战职业。这些是标注来源的定位摘要，不代表某个职业一定是绝对最强。"
    }), "\n", _jsx(_components.h2, {
      children: "如何使用这些定位"
    }), "\n", _jsxs(_components.p, {
      children: ["选择你能稳定重复决策循环的职业：Blackarrow 的远程与风筝、Mercenary 的近身压制、Seer 的支援或魔法、Shadowstrix 的埋伏时机、Sorcerer 的法术资源管理，或 Withered Knight 的招架与保护。调研攻略还描述了不同武器路线，因此职业名称不等于唯一配装。技能数值、冷却、解锁条件与当前平衡仍然", _jsx(_components.strong, {
        children: "待确认"
      }), "。"]
    }), "\n", _jsx(_components.h2, {
      children: "来源边界"
    }), "\n", _jsxs(_components.p, {
      children: ["6 个职业及功能范围以官方平台描述为准；具体职业名、武器路线、天赋、词缀与推荐来自已收集的第三方职业资料，更新后需要重新核验。可参考", _jsx(_components.a, {
        href: "https://store.steampowered.com/app/3282300/Mistfall_Hunter/",
        children: "官方 Steam 页面"
      }), "和", _jsx(_components.a, {
        href: "https://news.xbox.com/en-us/2026/06/15/mistfall-hunter-june-playtest-xbox/",
        children: "Xbox 官方概览"
      }), "。"]
    })]
  });
}
export default function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = props.components || ({});
  return MDXLayout ? _jsx(MDXLayout, {
    ...props,
    children: _jsx(_createMdxContent, {
      ...props
    })
  }) : _createMdxContent(props);
}
