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
      children: "Status das informações de build"
    }), "\n", _jsx(_components.p, {
      children: "O material da pesquisa confirma posturas de arma, árvores de talentos, afixos de gemas e habilidades ativas. Não há uma tabela verificada de builds para cada classe."
    }), "\n", _jsx(_components.h3, {
      children: "Base compartilhada"
    }), "\n", _jsxs(_components.ul, {
      children: ["\n", _jsxs(_components.li, {
        children: ["A página oficial da Steam lista ", _jsx(_components.strong, {
          children: "6 classes jogáveis"
        }), "."]
      }), "\n", _jsx(_components.li, {
        children: "Recomendações dependem dos nomes das classes, habilidades e dados de balanceamento."
      }), "\n", _jsx(_components.li, {
        children: "As direções de build por classe estão reunidas nas páginas de referência com fontes indicadas."
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
