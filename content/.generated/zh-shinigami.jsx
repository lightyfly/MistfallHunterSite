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
      children: "核心机制：斩魄刀进化"
    }), "\n", _jsx(_components.p, {
      children: "死神的成长围绕斩魄刀展开——这把灵魂武器会与你一起成长。你的成长路线大致如下："
    }), "\n", _jsxs(_components.ul, {
      children: ["\n", _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "见习者"
        }), "：初始形态，使用基础太刀连招。"]
      }), "\n", _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "斩魄刀"
        }), "：早期解锁，武器觉醒并获得更好的属性与招式。"]
      }), "\n", _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "始解"
        }), "：25 级后的首个大节点，斩魄刀释放真正形态与独特技能。"]
      }), "\n", _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "卍解"
        }), "：完成三阶段冥想并通过刀境挑战后解锁。"]
      }), "\n"]
    }), "\n", _jsx(_components.h2, {
      children: "始解解锁路线"
    }), "\n", _jsxs(_components.ol, {
      children: ["\n", _jsxs(_components.li, {
        children: ["达到 ", _jsx(_components.strong, {
          children: "25 级或更高"
        }), "。"]
      }), "\n", _jsxs(_components.li, {
        children: ["按下 ", _jsx(_components.strong, {
          children: "L 键"
        }), "冥想，进入内心世界。"]
      }), "\n", _jsxs(_components.li, {
        children: ["与内心世界里的 ", _jsx(_components.strong, {
          children: "斩魄刀之灵"
        }), "对话。"]
      }), "\n", _jsxs(_components.li, {
        children: ["解开", _jsx(_components.strong, {
          children: "白色空间谜题"
        }), "，观察场景线索。"]
      }), "\n", _jsxs(_components.li, {
        children: ["挑战 ", _jsx(_components.strong, {
          children: "始解之灵 Boss"
        }), "，完成三阶段战斗。"]
      }), "\n"]
    }), "\n", _jsxs(_components.blockquote, {
      children: ["\n", _jsx(_components.p, {
        children: "第二阶段会加入新的连招，第三阶段会进入狂暴模式。保持移动，在每个招式结束后的空隙反击。"
      }), "\n"]
    }), "\n", _jsx(_components.h2, {
      children: "灵魂书页"
    }), "\n", _jsxs(_components.p, {
      children: ["死神可以从敌人与活动中收集", _jsx(_components.strong, {
        children: "灵魂书页"
      }), "，交付后获得通用经验。中期有多余书页时及时提交，经验收益会随进度提升。"]
    }), "\n", _jsx(_components.h2, {
      children: "队伍系统"
    }), "\n", _jsxs(_components.p, {
      children: ["死神可以加入尸魂界的不同", _jsx(_components.strong, {
        children: "番队"
      }), "。每个番队都有独特加成，也会开放专属任务，帮助你更快升级。"]
    }), "\n", _jsx(_components.h3, {
      children: "优点"
    }), "\n", _jsxs(_components.ul, {
      children: ["\n", _jsx(_components.li, {
        children: "经典的刀剑战斗，成长节点清晰。"
      }), "\n", _jsx(_components.li, {
        children: "始解解锁带来明显的战力跃升。"
      }), "\n", _jsx(_components.li, {
        children: "番队加成让社交与属性收益结合起来。"
      }), "\n"]
    }), "\n", _jsx(_components.h3, {
      children: "缺点"
    }), "\n", _jsxs(_components.ul, {
      children: ["\n", _jsx(_components.li, {
        children: "卍解需要在掌握始解后通过刀境挑战。"
      }), "\n", _jsx(_components.li, {
        children: "前期不如灭却师安全，远程手段较少。"
      }), "\n", _jsx(_components.li, {
        children: "准备不足时，始解 Boss 会非常吃操作。"
      }), "\n"]
    }), "\n", _jsxs(_components.blockquote, {
      children: ["\n", _jsx(_components.p, {
        children: "提示：机制可能随版本变化。消耗稀有道具前，请在游戏内确认最新要求。"
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
