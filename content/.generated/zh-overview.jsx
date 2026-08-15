import {Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs} from "react/jsx-runtime";
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h2: "h2",
    li: "li",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...props.components
  };
  return _jsxs(_Fragment, {
    children: [_jsx(_components.h2, {
      children: "已确认信息"
    }), "\n", _jsxs(_components.p, {
      children: ["官方 Steam 页面列出 Mistfall Hunter 有 ", _jsx(_components.strong, {
        children: "6 个可玩职业"
      }), "。"]
    }), "\n", _jsxs(_components.p, {
      children: ["调研资料还提到第三人称黑暗奇幻 PvPvE 撤离 ARPG、", _jsx(_components.strong, {
        children: "双武器姿态"
      }), "、", _jsx(_components.strong, {
        children: "天赋树"
      }), "、", _jsx(_components.strong, {
        children: "宝石词缀"
      }), "与", _jsx(_components.strong, {
        children: "主动技能"
      }), "。"]
    }), "\n", _jsx(_components.h2, {
      children: "待核验信息"
    }), "\n", _jsxs(_components.ul, {
      children: ["\n", _jsxs(_components.li, {
        children: ["具体职业名称：", _jsx(_components.strong, {
          children: "待确认"
        }), "。"]
      }), "\n", _jsxs(_components.li, {
        children: ["逐职业技能清单与平衡数值：", _jsx(_components.strong, {
          children: "待确认"
        }), "。"]
      }), "\n", _jsxs(_components.li, {
        children: ["推荐职业配装：", _jsx(_components.strong, {
          children: "待确认"
        }), "。"]
      }), "\n"]
    }), "\n", _jsxs(_components.p, {
      children: ["请以", _jsx(_components.a, {
        href: "https://store.steampowered.com/app/3282300/Mistfall_Hunter/",
        children: "官方 Steam 页面"
      }), "与官方频道为准。相关资料完成核验后，本页再继续补充。"]
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
