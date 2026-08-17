import {Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs} from "react/jsx-runtime";
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h2: "h2",
    p: "p",
    strong: "strong",
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
      children: "Como ler as informações de classe"
    }), "\n", _jsx(_components.p, {
      children: "As descrições oficiais das plataformas definem o escopo de recursos, enquanto as páginas de classe com fontes indicadas acrescentam nomes, funções e direções de build. Esta visão geral não contém tabelas numéricas completas de habilidades ou balanceamento; use as páginas individuais para os detalhes."
    }), "\n", _jsxs(_components.p, {
      children: ["Use a ", _jsx(_components.a, {
        href: "https://store.steampowered.com/app/3282300/Mistfall_Hunter/",
        children: "página oficial da Steam"
      }), " e os canais oficiais como fontes primárias."]
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
