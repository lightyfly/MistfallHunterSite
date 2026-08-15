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
      children: "Confirmado oficialmente"
    }), "\n", _jsxs(_components.p, {
      children: ["A página oficial da Steam lista ", _jsx(_components.strong, {
        children: "6 classes jogáveis"
      }), " em Mistfall Hunter."]
    }), "\n", _jsxs(_components.p, {
      children: ["O material da pesquisa também descreve um extraction ARPG PvPvE de fantasia sombria em terceira pessoa, com ", _jsx(_components.strong, {
        children: "posturas de arma"
      }), ", ", _jsx(_components.strong, {
        children: "árvores de talentos"
      }), ", ", _jsx(_components.strong, {
        children: "afixos de gemas"
      }), " e ", _jsx(_components.strong, {
        children: "habilidades ativas"
      }), "."]
    }), "\n", _jsx(_components.h2, {
      children: "Detalhes a confirmar"
    }), "\n", _jsxs(_components.ul, {
      children: ["\n", _jsxs(_components.li, {
        children: ["Nomes individuais das classes: ", _jsx(_components.strong, {
          children: "a confirmar"
        }), "."]
      }), "\n", _jsxs(_components.li, {
        children: ["Listas de habilidades e valores de balanceamento por classe: ", _jsx(_components.strong, {
          children: "a confirmar"
        }), "."]
      }), "\n", _jsxs(_components.li, {
        children: ["Builds recomendadas: ", _jsx(_components.strong, {
          children: "a confirmar"
        }), "."]
      }), "\n"]
    }), "\n", _jsxs(_components.p, {
      children: ["Use a ", _jsx(_components.a, {
        href: "https://store.steampowered.com/app/3282300/Mistfall_Hunter/",
        children: "página oficial da Steam"
      }), " e os canais oficiais como fonte."]
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
