import { openBlock, createElementBlock, createElementVNode, Fragment, renderList } from "vue";
var EMOJI_LIST = [
  {
    "url": "emoji_49@2x.png",
    "alt": "[\u5FAE\u7B11]"
  },
  {
    "url": "emoji_67@2x.png",
    "alt": "[\u6487\u5634]"
  },
  {
    "url": "emoji_105@2x.png",
    "alt": "[\u8272]"
  },
  {
    "url": "emoji_15@2x.png",
    "alt": "[\u53D1\u5446]"
  },
  {
    "url": "emoji_48@2x.png",
    "alt": "[\u5F97\u610F]"
  },
  {
    "url": "emoji_38@2x.png",
    "alt": "[\u5BB3\u7F9E]"
  },
  {
    "url": "emoji_124@2x.png",
    "alt": "[\u95ED\u5634]"
  },
  {
    "url": "emoji_93@2x.png",
    "alt": "[\u7761\u89C9]"
  },
  {
    "url": "emoji_33@2x.png",
    "alt": "[\u5927\u54ED]"
  },
  {
    "url": "emoji_39@2x.png",
    "alt": "[\u5C34\u5C2C]"
  },
  {
    "url": "emoji_113@2x.png",
    "alt": "[\u8C03\u76AE]"
  },
  {
    "url": "emoji_141@2x.png",
    "alt": "[\u9F87\u7259]"
  },
  {
    "url": "emoji_55@2x.png",
    "alt": "[\u60CA\u8BB6]"
  },
  {
    "url": "emoji_127@2x.png",
    "alt": "[\u96BE\u8FC7]"
  },
  {
    "url": "emoji_120@2x.png",
    "alt": "[\u9177]"
  },
  {
    "url": "emoji_10@2x.png",
    "alt": "[\u51B7\u6C57]"
  },
  {
    "url": "emoji_29@2x.png",
    "alt": "[\u56F0]"
  },
  {
    "url": "emoji_91@2x.png",
    "alt": "[\u767D\u773C]"
  },
  {
    "url": "emoji_30@2x.png",
    "alt": "[\u574F\u7B11]"
  },
  {
    "url": "emoji_32@2x.png",
    "alt": "[\u5927\u5175]"
  },
  {
    "url": "emoji_35@2x.png",
    "alt": "[\u594B\u6597]"
  },
  {
    "url": "emoji_37@2x.png",
    "alt": "[\u59D4\u5C48]"
  },
  {
    "url": "emoji_90@2x.png",
    "alt": "[\u7591\u95EE]"
  },
  {
    "url": "emoji_91@2x.png",
    "alt": "[\u767D\u773C]"
  },
  {
    "url": "emoji_59@2x.png",
    "alt": "[\u6293\u72C2]"
  },
  {
    "url": "emoji_22@2x.png",
    "alt": "[\u5410]"
  },
  {
    "url": "emoji_7@2x.png",
    "alt": "[\u5077\u7B11]"
  },
  {
    "url": "emoji_18@2x.png",
    "alt": "[\u53EF\u7231]"
  },
  {
    "url": "emoji_75@2x.png",
    "alt": "[\u6D41\u6C57]"
  },
  {
    "url": "emoji_76@2x.png",
    "alt": "[\u6D41\u6CEA]"
  },
  {
    "url": "emoji_68@2x.png",
    "alt": "[\u64E6\u6C57]"
  },
  {
    "url": "emoji_56@2x.png",
    "alt": "[\u61A8\u7B11]"
  },
  {
    "url": "emoji_69@2x.png",
    "alt": "[\u6572\u6253]"
  },
  {
    "url": "emoji_70@2x.png",
    "alt": "[\u6655]"
  },
  {
    "url": "emoji_58@2x.png",
    "alt": "[\u6253\u54C8\u6B20]"
  },
  {
    "url": "emoji_60@2x.png",
    "alt": "[\u6298\u78E8]"
  },
  {
    "url": "emoji_61@2x.png",
    "alt": "[\u62A0\u9F3B]"
  },
  {
    "url": "emoji_51@2x.png",
    "alt": "[\u5FEB\u54ED\u4E86]"
  },
  {
    "url": "emoji_53@2x.png",
    "alt": "[\u6012]"
  },
  {
    "url": "emoji_54@2x.png",
    "alt": "[\u60CA\u6050]"
  },
  {
    "url": "emoji_3@2x.png",
    "alt": "[\u4E48\u4E48\u54D2]"
  },
  {
    "url": "emoji_8@2x.png",
    "alt": "[\u50B2\u6162]"
  },
  {
    "url": "emoji_9@2x.png",
    "alt": "[\u518D\u89C1]"
  },
  {
    "url": "emoji_140@2x.png",
    "alt": "[\u9F13\u638C]"
  },
  {
    "url": "emoji_100@2x.png",
    "alt": "[\u7CD7\u5927\u4E86]"
  },
  {
    "url": "emoji_111@2x.png",
    "alt": "[\u8870]"
  },
  {
    "url": "emoji_137@2x.png",
    "alt": "[\u9AB7\u9AC5]"
  },
  {
    "url": "emoji_119@2x.png",
    "alt": "[\u9119\u89C6]"
  },
  {
    "url": "emoji_126@2x.png",
    "alt": "[\u9634\u9669]"
  },
  {
    "url": "emoji_135@2x.png",
    "alt": "[\u9965\u997F]"
  },
  {
    "url": "emoji_17@2x.png",
    "alt": "[\u53EF\u601C]"
  },
  {
    "url": "emoji_40@2x.png",
    "alt": "[\u5DE6\u54FC\u54FC]"
  },
  {
    "url": "emoji_19@2x.png",
    "alt": "[\u53F3\u54FC\u54FC]"
  },
  {
    "url": "emoji_23@2x.png",
    "alt": "[\u5413]"
  },
  {
    "url": "emoji_24@2x.png",
    "alt": "[\u5492\u9A82]"
  },
  {
    "url": "emoji_27@2x.png",
    "alt": "[\u5618]"
  },
  {
    "url": "emoji_62@2x.png",
    "alt": "[\u62B1\u62B1]"
  },
  {
    "url": "emoji_50@2x.png",
    "alt": "[\u5FC3\u788E\u4E86]"
  },
  {
    "url": "emoji_83@2x.png",
    "alt": "[\u7231\u5FC3]"
  },
  {
    "url": "emoji_88@2x.png",
    "alt": "[\u73AB\u7470]"
  },
  {
    "url": "emoji_11@2x.png",
    "alt": "[\u51CB\u8C22]"
  },
  {
    "url": "emoji_0@2x.png",
    "alt": "[NO]"
  },
  {
    "url": "emoji_1@2x.png",
    "alt": "[OK]"
  },
  {
    "url": "emoji_63@2x.png",
    "alt": "[\u62B1\u62F3]"
  },
  {
    "url": "emoji_64@2x.png",
    "alt": "[\u62F3\u5934]"
  },
  {
    "url": "emoji_104@2x.png",
    "alt": "[\u80DC\u5229]"
  },
  {
    "url": "emoji_82@2x.png",
    "alt": "[\u7231\u4F60]"
  },
  {
    "url": "emoji_14@2x.png",
    "alt": "[\u52FE\u5F15]"
  },
  {
    "url": "emoji_66@2x.png",
    "alt": "[\u63E1\u624B]"
  },
  {
    "url": "emoji_43@2x.png",
    "alt": "[\u5DEE\u52B2]"
  },
  {
    "url": "emoji_45@2x.png",
    "alt": "[\u5F3A]"
  },
  {
    "url": "emoji_44@2x.png",
    "alt": "[\u5F31]"
  },
  {
    "url": "emoji_2@2x.png",
    "alt": "[\u4E0B\u96E8]"
  },
  {
    "url": "emoji_31@2x.png",
    "alt": "[\u591A\u4E91]"
  },
  {
    "url": "emoji_34@2x.png",
    "alt": "[\u592A\u9633]"
  },
  {
    "url": "emoji_71@2x.png",
    "alt": "[\u6708\u4EAE]"
  },
  {
    "url": "emoji_85@2x.png",
    "alt": "[\u732A\u5934]"
  },
  {
    "url": "emoji_86@2x.png",
    "alt": "[\u732B\u54AA]"
  },
  {
    "url": "emoji_80@2x.png",
    "alt": "[\u718A\u732B]"
  },
  {
    "url": "emoji_129@2x.png",
    "alt": "[\u9752\u86D9]"
  },
  {
    "url": "emoji_89@2x.png",
    "alt": "[\u74E2\u866B]"
  },
  {
    "url": "emoji_72@2x.png",
    "alt": "[\u68D2\u68D2\u7CD6]"
  },
  {
    "url": "emoji_99@2x.png",
    "alt": "[\u7C73\u996D]"
  },
  {
    "url": "emoji_108@2x.png",
    "alt": "[\u86CB\u7CD5]"
  },
  {
    "url": "emoji_25@2x.png",
    "alt": "[\u5496\u5561]"
  },
  {
    "url": "emoji_26@2x.png",
    "alt": "[\u5564\u9152]"
  },
  {
    "url": "emoji_36@2x.png",
    "alt": "[\u5976\u74F6]"
  },
  {
    "url": "emoji_130@2x.png",
    "alt": "[\u9762\u6761]"
  },
  {
    "url": "emoji_136@2x.png",
    "alt": "[\u9999\u8549]"
  },
  {
    "url": "emoji_112@2x.png",
    "alt": "[\u897F\u74DC]"
  },
  {
    "url": "emoji_98@2x.png",
    "alt": "[\u7BEE\u7403]"
  },
  {
    "url": "emoji_4@2x.png",
    "alt": "[\u4E52\u4E53]"
  },
  {
    "url": "emoji_92@2x.png",
    "alt": "[\u76AE\u7403]"
  },
  {
    "url": "emoji_47@2x.png",
    "alt": "[\u5F69\u7403]"
  },
  {
    "url": "emoji_114@2x.png",
    "alt": "[\u8C61\u68CB]"
  },
  {
    "url": "emoji_46@2x.png",
    "alt": "[\u5F69\u5E26]"
  },
  {
    "url": "emoji_78@2x.png",
    "alt": "[\u706F\u6CE1]"
  },
  {
    "url": "emoji_79@2x.png",
    "alt": "[\u70B8\u5F39]"
  },
  {
    "url": "emoji_65@2x.png",
    "alt": "[\u6325\u624B]"
  },
  {
    "url": "emoji_52@2x.png",
    "alt": "[\u6004\u706B]"
  },
  {
    "url": "emoji_77@2x.png",
    "alt": "[\u6FC0\u52A8]"
  },
  {
    "url": "emoji_133@2x.png",
    "alt": "[\u98DE\u543B]"
  },
  {
    "url": "emoji_16@2x.png",
    "alt": "[\u53D1\u6296]"
  },
  {
    "url": "emoji_28@2x.png",
    "alt": "[\u56DE\u5934]"
  },
  {
    "url": "emoji_87@2x.png",
    "alt": "[\u732E\u543B]"
  },
  {
    "url": "emoji_115@2x.png",
    "alt": "[\u8DF3\u7EF3]"
  },
  {
    "url": "emoji_116@2x.png",
    "alt": "[\u8DF3\u8DF3]"
  },
  {
    "url": "emoji_118@2x.png",
    "alt": "[\u8F6C\u5708]"
  },
  {
    "url": "emoji_41@2x.png",
    "alt": "[\u5DE6\u592A\u6781]"
  },
  {
    "url": "emoji_20@2x.png",
    "alt": "[\u53F3\u592A\u6781]"
  },
  {
    "url": "emoji_84@2x.png",
    "alt": "[\u7231\u60C5]"
  },
  {
    "url": "emoji_94@2x.png",
    "alt": "[\u78D5\u5934]"
  },
  {
    "url": "emoji_110@2x.png",
    "alt": "[\u8857\u821E]"
  },
  {
    "url": "emoji_121@2x.png",
    "alt": "[\u949E\u7968]"
  },
  {
    "url": "emoji_122@2x.png",
    "alt": "[\u94BB\u6212]"
  },
  {
    "url": "emoji_123@2x.png",
    "alt": "[\u95EA\u7535]"
  },
  {
    "url": "emoji_125@2x.png",
    "alt": "[\u95F9\u949F]"
  },
  {
    "url": "emoji_128@2x.png",
    "alt": "[\u96E8\u4F1E]"
  },
  {
    "url": "emoji_131@2x.png",
    "alt": "[\u97AD\u70AE]"
  },
  {
    "url": "emoji_132@2x.png",
    "alt": "[\u98CE\u8F66]"
  },
  {
    "url": "emoji_134@2x.png",
    "alt": "[\u98DE\u673A]"
  },
  {
    "url": "emoji_73@2x.png",
    "alt": "[\u6C7D\u8F66]"
  },
  {
    "url": "emoji_42@2x.png",
    "alt": "[\u5DE6\u8F66\u5934]"
  },
  {
    "url": "emoji_117@2x.png",
    "alt": "[\u8F66\u53A2]"
  },
  {
    "url": "emoji_21@2x.png",
    "alt": "[\u53F3\u8F66\u5934]"
  },
  {
    "url": "emoji_5@2x.png",
    "alt": "[\u4FBF\u4FBF]"
  },
  {
    "url": "emoji_6@2x.png",
    "alt": "[\u4FE1\u5C01]"
  },
  {
    "url": "emoji_74@2x.png",
    "alt": "[\u6C99\u53D1]"
  },
  {
    "url": "emoji_81@2x.png",
    "alt": "[\u7206\u7B4B]"
  },
  {
    "url": "emoji_95@2x.png",
    "alt": "[\u793A\u7231]"
  },
  {
    "url": "emoji_96@2x.png",
    "alt": "[\u793C\u54C1\u888B]"
  },
  {
    "url": "emoji_97@2x.png",
    "alt": "[\u793C\u7269]"
  },
  {
    "url": "emoji_101@2x.png",
    "alt": "[\u7EA2\u53CC\u559C]"
  },
  {
    "url": "emoji_102@2x.png",
    "alt": "[\u7EA2\u706F\u7B3C]"
  },
  {
    "url": "emoji_103@2x.png",
    "alt": "[\u7EB8\u5DFE]"
  },
  {
    "url": "emoji_106@2x.png",
    "alt": "[\u836F]"
  },
  {
    "url": "emoji_138@2x.png",
    "alt": "[\u9EA6\u514B\u98CE]"
  },
  {
    "url": "emoji_109@2x.png",
    "alt": "[\u8721\u70DB]"
  },
  {
    "url": "emoji_13@2x.png",
    "alt": "[\u5220\u9664]"
  }
];
var startTag = /^<([-A-Za-z0-9_]+)((?:\s+[a-zA-Z_:][-a-zA-Z0-9_:.]*(?:\s*=\s*(?:(?:"[^"]*")|(?:'[^']*')|[^>\s]+))?)*)\s*(\/?)>/;
var endTag = /^<\/([-A-Za-z0-9_]+)[^>]*>/;
var attr = /([a-zA-Z_:][-a-zA-Z0-9_:.]*)(?:\s*=\s*(?:(?:"((?:\\.|[^"])*)")|(?:'((?:\\.|[^'])*)')|([^>\s]+)))?/g;
var empty = makeMap("area,base,basefont,br,col,frame,hr,img,input,link,meta,param,embed,command,keygen,source,track,wbr");
var block = makeMap("a,address,article,applet,aside,audio,blockquote,button,canvas,center,dd,del,dir,div,dl,dt,fieldset,figcaption,figure,footer,form,frameset,h1,h2,h3,h4,h5,h6,header,hgroup,hr,iframe,isindex,li,map,menu,noframes,noscript,object,ol,output,p,pre,section,script,table,tbody,td,tfoot,th,thead,tr,ul,video");
var inline = makeMap("abbr,acronym,applet,b,basefont,bdo,big,br,button,cite,code,del,dfn,em,font,i,iframe,img,input,ins,kbd,label,map,object,q,s,samp,script,select,small,span,strike,strong,sub,sup,textarea,tt,u,var");
var closeSelf = makeMap("colgroup,dd,dt,li,options,p,td,tfoot,th,thead,tr");
var fillAttrs = makeMap("checked,compact,declare,defer,disabled,ismap,multiple,nohref,noresize,noshade,nowrap,readonly,selected");
var special = makeMap("script,style");
function HTMLParser(html, handler) {
  var index;
  var chars;
  var match;
  var stack = [];
  var last = html;
  stack.last = function() {
    return this[this.length - 1];
  };
  while (html) {
    chars = true;
    if (!stack.last() || !special[stack.last()]) {
      if (html.indexOf("<!--") == 0) {
        index = html.indexOf("-->");
        if (index >= 0) {
          if (handler.comment) {
            handler.comment(html.substring(4, index));
          }
          html = html.substring(index + 3);
          chars = false;
        }
      } else if (html.indexOf("</") == 0) {
        match = html.match(endTag);
        if (match) {
          html = html.substring(match[0].length);
          match[0].replace(endTag, parseEndTag);
          chars = false;
        }
      } else if (html.indexOf("<") == 0) {
        match = html.match(startTag);
        if (match) {
          html = html.substring(match[0].length);
          match[0].replace(startTag, parseStartTag);
          chars = false;
        }
      }
      if (chars) {
        index = html.indexOf("<");
        var text = index < 0 ? html : html.substring(0, index);
        html = index < 0 ? "" : html.substring(index);
        if (handler.chars) {
          handler.chars(text);
        }
      }
    } else {
      html = html.replace(new RegExp("([\\s\\S]*?)</" + stack.last() + "[^>]*>"), function(all, text2) {
        text2 = text2.replace(/<!--([\s\S]*?)-->|<!\[CDATA\[([\s\S]*?)]]>/g, "$1$2");
        if (handler.chars) {
          handler.chars(text2);
        }
        return "";
      });
      parseEndTag("", stack.last());
    }
    if (html == last) {
      throw "Parse Error: " + html;
    }
    last = html;
  }
  parseEndTag();
  function parseStartTag(tag, tagName, rest, unary) {
    tagName = tagName.toLowerCase();
    if (block[tagName]) {
      while (stack.last() && inline[stack.last()]) {
        parseEndTag("", stack.last());
      }
    }
    if (closeSelf[tagName] && stack.last() == tagName) {
      parseEndTag("", tagName);
    }
    unary = empty[tagName] || !!unary;
    if (!unary) {
      stack.push(tagName);
    }
    if (handler.start) {
      var attrs = [];
      rest.replace(attr, function(match2, name) {
        var value = arguments[2] ? arguments[2] : arguments[3] ? arguments[3] : arguments[4] ? arguments[4] : fillAttrs[name] ? name : "";
        attrs.push({
          name,
          value,
          escaped: value.replace(/(^|[^\\])"/g, '$1\\"')
        });
      });
      if (handler.start) {
        handler.start(tagName, attrs, unary);
      }
    }
  }
  function parseEndTag(tag, tagName) {
    if (!tagName) {
      var pos = 0;
    } else {
      for (var pos = stack.length - 1; pos >= 0; pos--) {
        if (stack[pos] == tagName) {
          break;
        }
      }
    }
    if (pos >= 0) {
      for (var i = stack.length - 1; i >= pos; i--) {
        if (handler.end) {
          handler.end(stack[i]);
        }
      }
      stack.length = pos;
    }
  }
}
function makeMap(str) {
  var obj = {};
  var items = str.split(",");
  for (var i = 0; i < items.length; i++) {
    obj[items[i]] = true;
  }
  return obj;
}
function removeDOCTYPE(html) {
  return html.replace(/<\?xml.*\?>\n/, "").replace(/<!doctype.*>\n/, "").replace(/<!DOCTYPE.*>\n/, "");
}
function parseAttrs(attrs) {
  return attrs.reduce(function(pre, attr2) {
    var value = attr2.value;
    var name = attr2.name;
    if (pre[name]) {
      pre[name] = pre[name] + " " + value;
    } else {
      pre[name] = value;
    }
    return pre;
  }, {});
}
function parseHtml(html) {
  html = removeDOCTYPE(html);
  var stacks = [];
  var results = {
    node: "root",
    children: []
  };
  HTMLParser(html, {
    start: function start(tag, attrs, unary) {
      var node = {
        name: tag
      };
      if (attrs.length !== 0) {
        node.attrs = parseAttrs(attrs);
      }
      if (unary) {
        var parent = stacks[0] || results;
        if (!parent.children) {
          parent.children = [];
        }
        parent.children.push(node);
      } else {
        stacks.unshift(node);
      }
    },
    end: function end(tag) {
      var node = stacks.shift();
      if (node.name !== tag)
        console.error("invalid state: mismatch end tag");
      if (stacks.length === 0) {
        results.children.push(node);
      } else {
        var parent = stacks[0];
        if (!parent.children) {
          parent.children = [];
        }
        parent.children.push(node);
      }
    },
    chars: function chars(text) {
      var node = {
        type: "text",
        text
      };
      if (stacks.length === 0) {
        results.children.push(node);
      } else {
        var parent = stacks[0];
        if (!parent.children) {
          parent.children = [];
        }
        parent.children.push(node);
      }
    },
    comment: function comment(text) {
      var node = {
        node: "comment",
        text
      };
      var parent = stacks[0];
      if (!parent.children) {
        parent.children = [];
      }
      parent.children.push(node);
    }
  });
  return results.children;
}
var emojiItem_vue_vue_type_style_index_0_lang = "";
var _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const replaceEmoji = function(str) {
  str = str.replace(/<img src=/g, '<img style="width: auto;max-width: 100%;height: 120px;" src=');
  let replacedStr = str.replace(/\[([^(\]|\[)]*)\]/g, (item, index) => {
    for (let i = 0; i < EMOJI_LIST.length; i++) {
      let EM = EMOJI_LIST[i];
      if (EM.alt == item) {
        let img = require(`../static/emoji/${EM.url}`);
        let imgstr = '<img width="28px" src="' + img + '">';
        return imgstr;
      }
    }
  });
  let htmls = '<div style="word-wrap:break-word;line-height: 20px;">' + replacedStr + "</div>";
  let nodes = parseHtml(htmls);
  return nodes;
};
const _sfc_main = {
  props: {},
  computed: {},
  data() {
    return {
      emojiList: EMOJI_LIST
    };
  },
  mounted() {
  },
  methods: {
    renderImage(item) {
      return require(`../static/emoji/${item.url}`);
    },
    handleSelectEmoji(item) {
      this.$emit("handleSelectEmoji", item);
    },
    handleDeleteEmoji() {
      this.$emit("handleDeleteEmoji");
    }
  }
};
const _hoisted_1 = { class: "emoji-box" };
const _hoisted_2 = { class: "emoji-item-box" };
const _hoisted_3 = ["onTap"];
const _hoisted_4 = ["alt", "src"];
const _hoisted_5 = { class: "emoji-delete" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", _hoisted_1, [
    createElementVNode("view", _hoisted_2, [
      (openBlock(true), createElementBlock(Fragment, null, renderList($data.emojiList, (item, index) => {
        return openBlock(), createElementBlock("view", {
          class: "emoji-item",
          key: index,
          "hover-class": "hover-class",
          onTap: ($event) => $options.handleSelectEmoji(item)
        }, [
          createElementVNode("image", {
            class: "emoji-icon",
            alt: item.alt,
            src: $options.renderImage(item)
          }, null, 8, _hoisted_4)
        ], 40, _hoisted_3);
      }), 128))
    ]),
    createElementVNode("view", _hoisted_5, [
      createElementVNode("image", {
        style: { "width": "60upx", "display": "block", "margin": "0 auto" },
        src: "../static/emoji/emoji_13@2x.png",
        mode: "widthFix",
        onTap: _cache[0] || (_cache[0] = (...args) => $options.handleDeleteEmoji && $options.handleDeleteEmoji(...args))
      }, null, 32)
    ])
  ]);
}
var emojiItem = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { emojiItem as default, replaceEmoji };
