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
      children: "Build information status"
    }), "\n", _jsx(_components.p, {
      children: "The official description confirms weapon stances, talent trees, gem affixes, and active skills, but it does not publish one developer-approved build for every class. The collected build sources are therefore useful starting points, not guarantees of a current meta or a fixed damage result. Test one change at a time and keep the extraction risk in mind."
    }), "\n", _jsx(_components.h2, {
      children: "Reported starting directions"
    }), "\n", _jsxs(_components.ul, {
      children: ["\n", _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "Blackarrow:"
        }), " Barbed Arrow, Bloodfly Arrow, and Lightning Arrow are reported core choices, with Rapid Arrows, Sky Piercer, and Frostblight Bomb also reported."]
      }), "\n", _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "Withered Knight:"
        }), " Greatsword is reported for solo counterplay; Polearm and Shield is reported for a trio frontline. Parry, Radiant Retribution, Javelin Thrust, Spear Barrage, and Intervene are reported skills."]
      }), "\n", _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "Shadowstrix:"
        }), " Dagger and Dual Blades are reported weapons, with Flash Stride, Shadow Stride, Spinning Slash, Phantom Shift, Shadow Strike, and optional Smoke Bomb."]
      }), "\n", _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "Seer:"
        }), " Reverent is the reported support oath; Blasphemer is the reported aggressive alternative, with Rune Pillars, Healing Art, and Wind Surge named in the build notes."]
      }), "\n", _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "Mercenary:"
        }), " Hammer is reported for direct pressure, while Sword and Shield is reported for a defensive frontline. Skull Crusher, Earth Shaker, Hammer Dash, Shield Dash, and Shield Slam appear in the collected material."]
      }), "\n"]
    }), "\n", _jsx(_components.h2, {
      children: "How to use these build references"
    }), "\n", _jsxs(_components.p, {
      children: ["The collected sources do not publish one universal numeric build table or a developer-approved import format. Treat the reported skills, talents, and affix directions as source-labeled starting points, and keep build-share strings separate from redemption codes. Use the ", _jsx(_components.a, {
        href: "https://mistfallhunter.com/",
        children: "official website"
      }), " and ", _jsx(_components.a, {
        href: "https://www.youtube.com/@MistfallHunter",
        children: "official YouTube channel"
      }), " for later balance or build announcements."]
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
