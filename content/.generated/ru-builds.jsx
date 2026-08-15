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
      children: "Статус информации о билдах"
    }), "\n", _jsx(_components.p, {
      children: "В исследовательском брифе подтверждены стойки оружия, деревья талантов, аффиксы самоцветов и активные навыки. Проверенной таблицы билдов для каждого класса нет."
    }), "\n", _jsx(_components.h3, {
      children: "Что можно утверждать"
    }), "\n", _jsxs(_components.ul, {
      children: ["\n", _jsxs(_components.li, {
        children: ["На официальной странице Steam указаны ", _jsx(_components.strong, {
          children: "6 игровых классов"
        }), "."]
      }), "\n", _jsx(_components.li, {
        children: "Рекомендации зависят от названий классов, навыков и данных баланса."
      }), "\n", _jsxs(_components.li, {
        children: ["Билды для конкретных классов ", _jsx(_components.strong, {
          children: "ожидают подтверждения"
        }), "."]
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
