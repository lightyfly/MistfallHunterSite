import {Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs} from "react/jsx-runtime";
function _createMdxContent(props) {
  const _components = {
    a: "a",
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
      children: "Build information status"
    }), "\n", _jsx(_components.p, {
      children: "The research brief confirms that Mistfall Hunter includes weapon stances, talent trees, gem affixes, and active skills. It does not provide a verified class-by-class build table."
    }), "\n", _jsx(_components.h3, {
      children: "What is safe to say"
    }), "\n", _jsxs(_components.ul, {
      children: ["\n", _jsxs(_components.li, {
        children: ["There are ", _jsx(_components.strong, {
          children: "6 playable classes"
        }), " listed on the official Steam page."]
      }), "\n", _jsx(_components.li, {
        children: "Build recommendations depend on the class names, skill details, and balance data."
      }), "\n", _jsxs(_components.li, {
        children: ["Class-specific build routes are ", _jsx(_components.strong, {
          children: "待确认"
        }), " until an official source verifies the required details."]
      }), "\n"]
    }), "\n", _jsxs(_components.p, {
      children: ["Do not spend resources based on an unverified build list. Check the ", _jsx(_components.a, {
        href: "https://mistfallhunter.com/",
        children: "official website"
      }), " and ", _jsx(_components.a, {
        href: "https://www.youtube.com/@MistfallHunter",
        children: "official YouTube channel"
      }), " for future source material."]
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
