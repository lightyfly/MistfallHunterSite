import {Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs} from "react/jsx-runtime";
function _createMdxContent(props) {
  const _components = {
    blockquote: "blockquote",
    h2: "h2",
    li: "li",
    ol: "ol",
    p: "p",
    strong: "strong",
    ...props.components
  };
  return _jsxs(_Fragment, {
    children: [_jsx(_components.h2, {
      children: "核心机制：进化与特性"
    }), "\n", _jsx(_components.p, {
      children: "虚的成长由进化阶段、归刃节点和特性系统组成。提交路线前，先想清楚自己的战斗距离与成长方向。"
    }), "\n", _jsx(_components.h2, {
      children: "进化清单"
    }), "\n", _jsxs(_components.ol, {
      children: ["\n", _jsx(_components.li, {
        children: "从基础虚开始，先熟悉移动与攻击节奏。"
      }), "\n", _jsxs(_components.li, {
        children: ["在按下 ", _jsx(_components.strong, {
          children: "L"
        }), " 进化前，确认下一阶段的全部要求。"]
      }), "\n", _jsx(_components.li, {
        children: "选择与自己战斗距离匹配的特性。"
      }), "\n", _jsx(_components.li, {
        children: "具备足够生存能力后，再挑战归刃节点。"
      }), "\n"]
    }), "\n", _jsxs(_components.blockquote, {
      children: ["\n", _jsx(_components.p, {
        children: "虚适合喜欢实验的玩家，但错误的特性组合会让中期成长速度变慢。"
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
