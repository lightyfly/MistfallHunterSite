import {Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs} from "react/jsx-runtime";
function _createMdxContent(props) {
  const _components = {
    h2: "h2",
    h3: "h3",
    li: "li",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...props.components
  };
  return _jsxs(_Fragment, {
    children: [_jsx(_components.h2, {
      children: "配装资料状态"
    }), "\n", _jsx(_components.p, {
      children: "调研资料确认了双武器姿态、天赋树、宝石词缀和主动技能，但没有提供逐职业核验过的配装表。"
    }), "\n", _jsx(_components.h3, {
      children: "当前可以确认"
    }), "\n", _jsxs(_components.ul, {
      children: ["\n", _jsxs(_components.li, {
        children: ["官方 Steam 页面列出 ", _jsx(_components.strong, {
          children: "6 个可玩职业"
        }), "。"]
      }), "\n", _jsx(_components.li, {
        children: "配装建议取决于职业名称、技能细节与平衡数据。"
      }), "\n", _jsxs(_components.li, {
        children: ["具体职业配装路线仍然", _jsx(_components.strong, {
          children: "待确认"
        }), "。"]
      }), "\n"]
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
