import {Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs} from "react/jsx-runtime";
function _createMdxContent(props) {
  const _components = {
    blockquote: "blockquote",
    h2: "h2",
    h3: "h3",
    li: "li",
    ol: "ol",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...props.components
  };
  return _jsxs(_Fragment, {
    children: [_jsx(_components.h2, {
      children: "Core Mechanic: Evolution and Traits"
    }), "\n", _jsx(_components.p, {
      children: "Hollow progression is built around evolution stages, Resurreccion milestones, and a trait system that rewards players who plan their route before committing."
    }), "\n", _jsx(_components.h2, {
      children: "Evolution Checklist"
    }), "\n", _jsxs(_components.ol, {
      children: ["\n", _jsx(_components.li, {
        children: "Start from the base Hollow form and learn the movement kit."
      }), "\n", _jsxs(_components.li, {
        children: ["Track the requirements for the next evolution before pressing ", _jsx(_components.strong, {
          children: "L"
        }), "."]
      }), "\n", _jsx(_components.li, {
        children: "Pick traits that support your intended combat range."
      }), "\n", _jsx(_components.li, {
        children: "Aim for Resurreccion when your build has enough survivability to complete the challenge."
      }), "\n"]
    }), "\n", _jsxs(_components.blockquote, {
      children: ["\n", _jsx(_components.p, {
        children: "Hollow is the most flexible race for players who enjoy experimenting, but the wrong trait combination can make the mid-game feel slower."
      }), "\n"]
    }), "\n", _jsx(_components.h3, {
      children: "Pros"
    }), "\n", _jsxs(_components.ul, {
      children: ["\n", _jsx(_components.li, {
        children: "Broad evolution path with meaningful trait choices."
      }), "\n", _jsx(_components.li, {
        children: "Strong identity for players who want a monster-form fantasy."
      }), "\n", _jsx(_components.li, {
        children: "Good long-term build variety."
      }), "\n"]
    }), "\n", _jsx(_components.h3, {
      children: "Cons"
    }), "\n", _jsxs(_components.ul, {
      children: ["\n", _jsx(_components.li, {
        children: "Progression has more branching requirements than Shinigami."
      }), "\n", _jsx(_components.li, {
        children: "Trait decisions can be expensive to undo."
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
