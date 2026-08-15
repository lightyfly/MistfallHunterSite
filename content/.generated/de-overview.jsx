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
      children: "Offiziell bestätigt"
    }), "\n", _jsxs(_components.p, {
      children: ["Die offizielle Steam-Seite nennt ", _jsx(_components.strong, {
        children: "6 spielbare Klassen"
      }), " für Mistfall Hunter."]
    }), "\n", _jsxs(_components.p, {
      children: ["Der Recherchebrief beschreibt außerdem ein düsteres Third-Person-PvPvE-Extraction-ARPG mit ", _jsx(_components.strong, {
        children: "Waffenhaltungen"
      }), ", ", _jsx(_components.strong, {
        children: "Talentbäumen"
      }), ", ", _jsx(_components.strong, {
        children: "Edelstein-Affixen"
      }), " und ", _jsx(_components.strong, {
        children: "aktiven Skills"
      }), "."]
    }), "\n", _jsx(_components.h2, {
      children: "Details zu bestätigen"
    }), "\n", _jsxs(_components.ul, {
      children: ["\n", _jsxs(_components.li, {
        children: ["Einzelne Klassennamen: ", _jsx(_components.strong, {
          children: "zu bestätigen"
        }), "."]
      }), "\n", _jsxs(_components.li, {
        children: ["Skill-Listen und Balancewerte pro Klasse: ", _jsx(_components.strong, {
          children: "zu bestätigen"
        }), "."]
      }), "\n", _jsxs(_components.li, {
        children: ["Empfohlene Klassen-Builds: ", _jsx(_components.strong, {
          children: "zu bestätigen"
        }), "."]
      }), "\n"]
    }), "\n", _jsxs(_components.p, {
      children: ["Nutze die ", _jsx(_components.a, {
        href: "https://store.steampowered.com/app/3282300/Mistfall_Hunter/",
        children: "offizielle Steam-Seite"
      }), " und die offiziellen Kanäle als Quelle."]
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
