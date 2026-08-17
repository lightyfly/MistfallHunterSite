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
      children: "Status der Build-Informationen"
    }), "\n", _jsx(_components.p, {
      children: "Der Recherchebrief bestätigt Waffenhaltungen, Talentbäume, Edelstein-Affixe und aktive Skills. Eine verifizierte Build-Tabelle für einzelne Klassen liegt nicht vor."
    }), "\n", _jsx(_components.h3, {
      children: "Gemeinsame Grundlage"
    }), "\n", _jsxs(_components.ul, {
      children: ["\n", _jsxs(_components.li, {
        children: ["Die offizielle Steam-Seite listet ", _jsx(_components.strong, {
          children: "6 spielbare Klassen"
        }), "."]
      }), "\n", _jsx(_components.li, {
        children: "Empfehlungen hängen von Klassennamen, Skill-Details und Balancewerten ab."
      }), "\n", _jsx(_components.li, {
        children: "Die einzelnen Klassen-Builds stehen auf den quellenmarkierten Referenzseiten."
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
