import {Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs} from "react/jsx-runtime";
function _createMdxContent(props) {
  const _components = {
    blockquote: "blockquote",
    h2: "h2",
    h3: "h3",
    li: "li",
    ol: "ol",
    p: "p",
    ul: "ul",
    ...props.components
  };
  return _jsxs(_Fragment, {
    children: [_jsx(_components.h2, {
      children: "Core Mechanic: Spirit Weapon Progression"
    }), "\n", _jsx(_components.p, {
      children: "Quincy is the ranged race in VV: ULTIMATUM. Build pressure from a distance, gather spirit resources, and unlock Schrift abilities that change how your build handles groups and bosses."
    }), "\n", _jsx(_components.h2, {
      children: "Recommended Route"
    }), "\n", _jsxs(_components.ol, {
      children: ["\n", _jsx(_components.li, {
        children: "Learn the ranged basic attacks before investing in a specialized tree."
      }), "\n", _jsx(_components.li, {
        children: "Keep a movement skill available for enemy gap closers."
      }), "\n", _jsx(_components.li, {
        children: "Follow the Quincy quest chain to unlock your spirit weapon upgrades."
      }), "\n", _jsx(_components.li, {
        children: "Save rerolls until you know which Schrift synergies fit your preferred range."
      }), "\n"]
    }), "\n", _jsxs(_components.blockquote, {
      children: ["\n", _jsx(_components.p, {
        children: "Quincy is forgiving while learning boss patterns, but positioning still matters in close-quarters encounters."
      }), "\n"]
    }), "\n", _jsx(_components.h3, {
      children: "Pros"
    }), "\n", _jsxs(_components.ul, {
      children: ["\n", _jsx(_components.li, {
        children: "Reliable ranged pressure and safer early boss attempts."
      }), "\n", _jsx(_components.li, {
        children: "Schrift choices create clear build identities."
      }), "\n", _jsx(_components.li, {
        children: "Strong route for players who prefer kiting and target priority."
      }), "\n"]
    }), "\n", _jsx(_components.h3, {
      children: "Cons"
    }), "\n", _jsxs(_components.ul, {
      children: ["\n", _jsx(_components.li, {
        children: "Less forgiving when enemies collapse on your position."
      }), "\n", _jsx(_components.li, {
        children: "Some upgrades require a longer resource loop before they pay off."
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
