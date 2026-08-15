import {Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs} from "react/jsx-runtime";
function _createMdxContent(props) {
  const _components = {
    blockquote: "blockquote",
    h2: "h2",
    h3: "h3",
    li: "li",
    ol: "ol",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...props.components
  };
  return _jsxs(_Fragment, {
    children: [_jsx(_components.h2, {
      children: "Core Mechanic: Zanpakuto Evolution"
    }), "\n", _jsx(_components.p, {
      children: "The Shinigami race revolves around your Zanpakuto — a living spirit weapon that grows alongside you. Your progression follows a clear evolutionary path:"
    }), "\n", _jsxs(_components.ul, {
      children: ["\n", _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "Trainee"
        }), " — Starting form. Basic katana with standard sword combos."]
      }), "\n", _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "Zanpakuto"
        }), " — Unlocked early. Your weapon awakens with improved stats and moves."]
      }), "\n", _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "Shikai"
        }), " — First major milestone at Lv25+. Your Zanpakuto releases its initial true form with a unique ability."]
      }), "\n", _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "Bankai"
        }), " — Full Zanpakuto release. Complete the three Shikai meditation stages and conquer the ", _jsx(_components.strong, {
          children: "Blade Realm"
        }), " challenge."]
      }), "\n"]
    }), "\n", _jsx(_components.h2, {
      children: "How to Unlock Shikai"
    }), "\n", _jsx(_components.p, {
      children: "Shikai is your first real power spike as a Shinigami. Follow this route:"
    }), "\n", _jsxs(_components.ol, {
      children: ["\n", _jsxs(_components.li, {
        children: ["Reach ", _jsx(_components.strong, {
          children: "Level 25 or higher"
        }), "."]
      }), "\n", _jsxs(_components.li, {
        children: ["Press the ", _jsx(_components.strong, {
          children: "L key"
        }), " to meditate and enter your inner world."]
      }), "\n", _jsxs(_components.li, {
        children: ["Talk to your ", _jsx(_components.strong, {
          children: "Zanpakuto Spirit"
        }), " inside the inner world."]
      }), "\n", _jsxs(_components.li, {
        children: ["Solve the ", _jsx(_components.strong, {
          children: "white space puzzle"
        }), " and follow its visual clues."]
      }), "\n", _jsxs(_components.li, {
        children: ["Face the ", _jsx(_components.strong, {
          children: "Shikai Spirit Boss"
        }), " in a 1v2 fight with three phases."]
      }), "\n"]
    }), "\n", _jsxs(_components.blockquote, {
      children: ["\n", _jsx(_components.p, {
        children: "The boss adds new combo strings in phase two and enters an enraged mode in phase three. Stay mobile, then punish the openings after each pattern."
      }), "\n"]
    }), "\n", _jsx(_components.h2, {
      children: "Soul Pages"
    }), "\n", _jsxs(_components.p, {
      children: ["As a Shinigami, you collect ", _jsx(_components.strong, {
        children: "Soul Pages"
      }), " from defeated enemies and activities. Submit them for universal EXP when you have a surplus — the EXP scales well through mid-game."]
    }), "\n", _jsx(_components.h2, {
      children: "Division / Squad System"
    }), "\n", _jsxs(_components.p, {
      children: ["Shinigami can join one of the ", _jsx(_components.strong, {
        children: "Divisions (Squads)"
      }), " within Soul Society. Each Division offers unique bonuses and access to Division-specific quests that accelerate leveling."]
    }), "\n", _jsx(_components.h2, {
      children: "Hakuda Style Training"
    }), "\n", _jsx(_components.p, {
      children: "Beyond the standard Hakuda skill tree, Shinigami players can undergo specialized Hakuda Style Training. This is an independent progression system for a dedicated fighting-style specialization."
    }), "\n", _jsx(_components.h3, {
      children: "Pros"
    }), "\n", _jsxs(_components.ul, {
      children: ["\n", _jsx(_components.li, {
        children: "Classic sword-fantasy combat with clear, readable milestones."
      }), "\n", _jsx(_components.li, {
        children: "Structured progression with a satisfying Shikai power spike."
      }), "\n", _jsx(_components.li, {
        children: "Squad bonuses add a social layer and extra stat value."
      }), "\n"]
    }), "\n", _jsx(_components.h3, {
      children: "Cons"
    }), "\n", _jsxs(_components.ul, {
      children: ["\n", _jsx(_components.li, {
        children: "Bankai requires a challenging Blade Realm fight after Shikai mastery."
      }), "\n", _jsx(_components.li, {
        children: "Early game feels slower than a ranged Quincy route."
      }), "\n", _jsx(_components.li, {
        children: "The Shikai boss fight punishes players who arrive underprepared."
      }), "\n"]
    }), "\n", _jsxs(_components.blockquote, {
      children: ["\n", _jsx(_components.p, {
        children: "Confidence note: mechanics can change with game updates. Verify the latest requirements in-game before spending rare items."
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
