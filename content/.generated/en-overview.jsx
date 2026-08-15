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
      children: "Officially confirmed"
    }), "\n", _jsxs(_components.p, {
      children: ["The official Steam page lists ", _jsx(_components.strong, {
        children: "6 playable classes"
      }), " for Mistfall Hunter."]
    }), "\n", _jsxs(_components.p, {
      children: ["The research brief also describes a dark fantasy third-person PvPvE extraction ARPG with ", _jsx(_components.strong, {
        children: "dual weapon stances"
      }), ", ", _jsx(_components.strong, {
        children: "talent trees"
      }), ", ", _jsx(_components.strong, {
        children: "gem affixes"
      }), ", and ", _jsx(_components.strong, {
        children: "active skills"
      }), "."]
    }), "\n", _jsx(_components.h2, {
      children: "Details awaiting verification"
    }), "\n", _jsxs(_components.ul, {
      children: ["\n", _jsxs(_components.li, {
        children: ["Individual class names: ", _jsx(_components.strong, {
          children: "待确认"
        }), "."]
      }), "\n", _jsxs(_components.li, {
        children: ["Class-by-class skill lists and balance values: ", _jsx(_components.strong, {
          children: "待确认"
        }), "."]
      }), "\n", _jsxs(_components.li, {
        children: ["Recommended class builds: ", _jsx(_components.strong, {
          children: "待确认"
        }), "."]
      }), "\n"]
    }), "\n", _jsxs(_components.p, {
      children: ["Use the official ", _jsx(_components.a, {
        href: "https://store.steampowered.com/app/3282300/Mistfall_Hunter/",
        children: "Steam store page"
      }), " and the official game channels as the source of truth. This page will be expanded after those details can be verified."]
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
