import {Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs} from "react/jsx-runtime";
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h2: "h2",
    li: "li",
    p: "p",
    ul: "ul",
    ...props.components
  };
  return _jsxs(_Fragment, {
    children: [_jsx(_components.h2, {
      children: "配装资料状态"
    }), "\n", _jsx(_components.p, {
      children: "官方描述确认了武器姿态、天赋树、宝石词缀和主动技能，但没有发布一套官方认可、适用于所有职业的配装。已收集的配装攻略可以作为起点，不能当作当前版本必胜方案或固定伤害结果。测试时应一次只改一个选择，并把撤离风险一起考虑。"
    }), "\n", _jsx(_components.h2, {
      children: "已收集的配装方向"
    }), "\n", _jsxs(_components.ul, {
      children: ["\n", _jsx(_components.li, {
        children: "**Blackarrow：**攻略常用 Barbed Arrow、Bloodfly Arrow 与 Lightning Arrow，也提到 Rapid Arrows、Sky Piercer 和 Frostblight Bomb。"
      }), "\n", _jsx(_components.li, {
        children: "**Withered Knight：**Greatsword 被描述为偏单人反制，Polearm and Shield 被描述为三人小队前排；资料提到 Parry、Radiant Retribution、Javelin Thrust、Spear Barrage 与 Intervene。"
      }), "\n", _jsx(_components.li, {
        children: "**Shadowstrix：**资料列出 Dagger 与 Dual Blades，以及 Flash Stride、Shadow Stride、Spinning Slash、Phantom Shift、Shadow Strike 和可选的 Smoke Bomb。"
      }), "\n", _jsx(_components.li, {
        children: "**Seer：**Reverent 是支援方向，Blasphemer 是更激进的替代方向；资料提到 Rune Pillars、Healing Art 与 Wind Surge。"
      }), "\n", _jsx(_components.li, {
        children: "**Mercenary：**Hammer 偏直接压制，Sword and Shield 偏防守前排；资料列出 Skull Crusher、Earth Shaker、Hammer Dash、Shield Dash 与 Shield Slam。"
      }), "\n"]
    }), "\n", _jsx(_components.h2, {
      children: "如何使用这些配装参考"
    }), "\n", _jsxs(_components.p, {
      children: ["收集到的资料没有提供统一的数值配装表或官方认可的导入格式。请把其中出现的技能、天赋与词缀方向视为标注来源的起点，并将配装分享字符串与兑换码分开。后续平衡或配装公告请以", _jsx(_components.a, {
        href: "https://mistfallhunter.com/",
        children: "官网"
      }), "和", _jsx(_components.a, {
        href: "https://www.youtube.com/@MistfallHunter",
        children: "官方 YouTube"
      }), "为准。"]
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
