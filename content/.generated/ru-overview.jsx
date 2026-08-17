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
      children: "Официально подтверждено"
    }), "\n", _jsxs(_components.p, {
      children: ["Официальная страница Steam указывает ", _jsx(_components.strong, {
        children: "6 игровых классов"
      }), " в Mistfall Hunter."]
    }), "\n", _jsxs(_components.p, {
      children: ["В исследовательском брифе также упомянуты мрачный фэнтезийный PvPvE extraction ARPG от третьего лица, ", _jsx(_components.strong, {
        children: "стойки оружия"
      }), ", ", _jsx(_components.strong, {
        children: "деревья талантов"
      }), ", ", _jsx(_components.strong, {
        children: "аффиксы самоцветов"
      }), " и ", _jsx(_components.strong, {
        children: "активные навыки"
      }), "."]
    }), "\n", _jsx(_components.h2, {
      children: "Как читать сведения о классах"
    }), "\n", _jsx(_components.p, {
      children: "Официальные описания платформ задают общий набор функций, а страницы классов с указанными источниками дополняют их названиями, ролями и направлениями билдов. В этом обзоре нет полных числовых таблиц навыков и баланса, поэтому для деталей используйте отдельные страницы классов."
    }), "\n", _jsxs(_components.p, {
      children: ["Используйте ", _jsx(_components.a, {
        href: "https://store.steampowered.com/app/3282300/Mistfall_Hunter/",
        children: "официальную страницу Steam"
      }), " и официальные каналы как первичные источники."]
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
