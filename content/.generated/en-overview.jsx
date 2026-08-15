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
      children: "What the official description confirms"
    }), "\n", _jsx(_components.p, {
      children: "The official Xbox Wire description confirms six distinct classes for Mistfall Hunter, two weapon stances for each class, talent trees, gem affixes, active skills, solo play, and three-player squads. It also describes a third-person PvPvE extraction ARPG where players fight corrupted creatures and rival Gyldhunters before returning with their loot. The official description does not publish a complete class-by-class balance table."
    }), "\n", _jsx(_components.h2, {
      children: "Names reported by the collected class material"
    }), "\n", _jsx(_components.p, {
      children: "The class-selection research names Blackarrow, Mercenary, Seer, Shadowstrix, Sorcerer, and Withered Knight. The same material describes Blackarrow as a ranged bow class, Mercenary as direct melee, Seer as a support and magic option, Shadowstrix as stealth and assassination, Sorcerer as a spellcaster, and Withered Knight as a melee class with defensive counterplay. These are source-labeled role summaries, not a promise that one class is objectively strongest."
    }), "\n", _jsx(_components.h2, {
      children: "How to use the role descriptions"
    }), "\n", _jsxs(_components.p, {
      children: ["Choose the class whose decision loop you can repeat: range and kiting for Blackarrow, close pressure for Mercenary, support or magic for Seer, ambush timing for Shadowstrix, spell-resource management for Sorcerer, or parry and protection for Withered Knight. The collected guides also describe multiple weapon paths, so a class label does not define every possible build. Skill values, cooldowns, unlock conditions, and current balance remain ", _jsx(_components.strong, {
        children: "待确认"
      }), "."]
    }), "\n", _jsx(_components.h2, {
      children: "Source boundary"
    }), "\n", _jsxs(_components.p, {
      children: ["The official platform description is the source for the six-class feature scope. Individual names, weapon paths, talents, affixes, and recommendations come from the collected third-party class material and should be rechecked after updates. See the ", _jsx(_components.a, {
        href: "https://store.steampowered.com/app/3282300/Mistfall_Hunter/",
        children: "official Steam listing"
      }), " and the ", _jsx(_components.a, {
        href: "https://news.xbox.com/en-us/2026/06/15/mistfall-hunter-june-playtest-xbox/",
        children: "official Xbox overview"
      }), " for primary references."]
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
