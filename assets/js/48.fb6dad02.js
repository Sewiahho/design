(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{501:function(t,a,s){"use strict";s.r(a);var n=s(14),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"设计模式之适配器模式"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#设计模式之适配器模式"}},[t._v("#")]),t._v(" 设计模式之适配器模式")]),t._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"#%E4%B8%80%E7%AE%80%E4%BB%8B"}},[t._v("一、简介")])]),t._v(" "),s("li",[s("a",{attrs:{href:"#%E4%BA%8C%E5%AE%9E%E4%BE%8B"}},[t._v("二、实例")])]),t._v(" "),s("li",[s("a",{attrs:{href:"#%E4%B8%89%E5%9C%BA%E6%99%AF"}},[t._v("三、场景")])]),t._v(" "),s("li",[s("a",{attrs:{href:"#%E5%8F%82%E8%80%83%E8%B5%84%E6%96%99"}},[t._v("参考资料")])])]),t._v(" "),s("h2",{attrs:{id:"一、简介"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#一、简介"}},[t._v("#")]),t._v(" 一、简介")]),t._v(" "),s("p",[s("strong",[t._v("适配器模式 (Adapter)")]),t._v(" 将一个类的接口"),s("strong",[t._v("转换")]),t._v("成客户希望的另外一个接口。")]),t._v(" "),s("p",[t._v("适配器模式使得原本由于接口不兼容而不能一起工作的那些类可以一起工作。")]),t._v(" "),s("p",[t._v("适配器模式是一种"),s("strong",[t._v("结构型模式")]),t._v("。")]),t._v(" "),s("p",[s("img",{attrs:{src:"http://dunwu.test.upcdn.net/snap/20200725150134.png",alt:"img"}})]),t._v(" "),s("p",[t._v("【Target】")]),t._v(" "),s("p",[t._v("定义用户实际"),s("strong",[t._v("需要的接口")]),t._v("。")]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("abstract")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Target")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("abstract")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Request")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("【Adaptee】")]),t._v(" "),s("p",[t._v("定义一个需要"),s("strong",[t._v("适配的接口")]),t._v("。")]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Adaptee")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("SpecificRequest")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("System")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("out"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("println")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"特殊请求"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("【Adapter】")]),t._v(" "),s("p",[t._v("通过在内部"),s("strong",[t._v("包装一个")]),t._v(" "),s("strong",[t._v("Adaptee 对象")]),t._v("，把源接口转换成目标接口。")]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Adapter")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Target")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Adaptee")]),t._v(" adaptee "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Adaptee")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Override")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Request")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        adaptee"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("SpecificRequest")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("【客户端】")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("public class AdapterPattern {\n    public static void main(String[] args) {\n        Target target = new Adapter();\n        target.Request();\n    }\n}\n")])])]),s("p",[t._v("【输出】")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("特殊请求\n")])])]),s("h2",{attrs:{id:"二、实例"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#二、实例"}},[t._v("#")]),t._v(" 二、实例")]),t._v(" "),s("h2",{attrs:{id:"三、场景"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#三、场景"}},[t._v("#")]),t._v(" 三、场景")]),t._v(" "),s("p",[t._v("想要使用一个已经存在的类，但如果它的方法不满足需求时；")]),t._v(" "),s("p",[t._v("两个类的职责相同或相似，但是具有不同的接口时要使用它；")]),t._v(" "),s("p",[t._v("应该在双方都不太容易修改的时候再使用适配器模式适配，而不是一有不同时就使用它。")]),t._v(" "),s("h2",{attrs:{id:"参考资料"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#参考资料"}},[t._v("#")]),t._v(" 参考资料")]),t._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://item.jd.com/10100236.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("《O'Reilly：Head First 设计模式》"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://item.jd.com/10079261.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("《大话设计模式》"),s("OutboundLink")],1)])])])}),[],!1,null,null,null);a.default=e.exports}}]);