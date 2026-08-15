import {Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs} from "react/jsx-runtime";
function _createMdxContent(props) {
  const _components = {
    blockquote: "blockquote",
    h2: "h2",
    li: "li",
    ol: "ol",
    p: "p",
    ...props.components
  };
  return _jsxs(_Fragment, {
    children: [_jsx(_components.h2, {
      children: "核心机制：灵弓成长"
    }), "\n", _jsx(_components.p, {
      children: "灭却师是 VV: ULTIMATUM 的远程种族。保持距离、积累灵子资源，并解锁能够改变清怪与打 Boss 方式的圣文字技能。"
    }), "\n", _jsx(_components.h2, {
      children: "推荐路线"
    }), "\n", _jsxs(_components.ol, {
      children: ["\n", _jsx(_components.li, {
        children: "先熟悉远程普攻，再投入专精技能树。"
      }), "\n", _jsx(_components.li, {
        children: "至少保留一个位移技能，应对敌人贴脸。"
      }), "\n", _jsx(_components.li, {
        children: "跟随灭却师任务线，解锁灵弓升级。"
      }), "\n", _jsx(_components.li, {
        children: "了解自己的玩法后再进行技能与圣文字重置。"
      }), "\n"]
    }), "\n", _jsxs(_components.blockquote, {
      children: ["\n", _jsx(_components.p, {
        children: "远程路线更适合学习 Boss 招式，但在近身战里仍然需要保持走位。"
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
