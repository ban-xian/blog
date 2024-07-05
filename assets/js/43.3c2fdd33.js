(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{374:function(s,t,a){"use strict";a.r(t);var e=a(4),r=Object(e.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"elementui-打包后字体图乱码解决方法"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#elementui-打包后字体图乱码解决方法"}},[s._v("#")]),s._v(" elementui 打包后字体图乱码解决方法")]),s._v(" "),t("p",[s._v("最近在项目中遇到了一个之前一直没遇到过的 bug，项目打包部署后 elementui 字体图标会随机出现乱码 bug，刷新项目后就会正常，之前一直以为是网络异常，后面排查后才发现不是网络的问题，是因为项目是基于若依 ruoyi 框架搭建的，ruoyi 框架内置的 CSS 扩展语言是 sass，而 elementui 官方使用的是 node-sass，所以导致了字体图标乱码 bug 的出现。")]),s._v(" "),t("h2",{attrs:{id:"正常图标和乱码图标对比"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#正常图标和乱码图标对比"}},[s._v("#")]),s._v(" 正常图标和乱码图标对比")]),s._v(" "),t("p",[s._v("正常图标：")]),s._v(" "),t("img",{attrs:{src:"/imgs/ok-icon.jpg",width:"500"}}),s._v(" "),t("p",[s._v("乱码图标：")]),s._v(" "),t("img",{attrs:{src:"/imgs/err-icon.jpg",width:"500"}}),s._v(" "),t("h2",{attrs:{id:"bug-产生原因"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#bug-产生原因"}},[s._v("#")]),s._v(" bug 产生原因")]),s._v(" "),t("p",[s._v("由于项目是基于 ruoyi 框架搭建，ruoyi 内置 CSS 扩展语言是 sass，而 elementui 官方使用的是 node-sass，所以导致了字体图标乱码 bug 的出现。")]),s._v(" "),t("p",[s._v("项目使用sass：")]),s._v(" "),t("img",{attrs:{src:"/imgs/sass.jpg",width:"500"}}),s._v(" "),t("p",[s._v("elementui使用node-sass：")]),s._v(" "),t("img",{attrs:{src:"/imgs/element-sass.jpg",width:"500"}}),s._v(" "),t("p",[s._v("如下图所示，项目使用sass打包后的字体图标css样式已经是乱码")]),s._v(" "),t("img",{attrs:{src:"/imgs/bad.jpg",width:"500"}}),s._v(" "),t("h2",{attrs:{id:"解决办法"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#解决办法"}},[s._v("#")]),s._v(" 解决办法")]),s._v(" "),t("p",[s._v("卸载sass，安装node-sass，方法如下：")]),s._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 卸载sass")]),s._v("\nnpm uninstall sass\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 安装node-saa")]),s._v("\nnpm install node"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("sass "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("D")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])]),s._v(" "),t("p",{staticStyle:{color:"#f00"}},[s._v("\n    注意：npm 安装 node-sass 时，会从 github 上下载 .node 文件。而由于 github 是国外网站，所以在国内下载时间可能会很长，很容易导致超时失败。解决办法可以参照帖子最后的参考内容《node-sass 安装失败的原因及解决办法》。\n  ")]),s._v(" "),t("h2",{attrs:{id:"bug-解决后效果"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#bug-解决后效果"}},[s._v("#")]),s._v(" bug 解决后效果")]),s._v(" "),t("p",[s._v("如图所示，项目里的字体图标已经正常")]),s._v(" "),t("img",{attrs:{src:"/imgs/ok-icon.jpg",width:"500"}}),s._v(" "),t("p",[s._v("如图所示，打包后的字体图标css样式也已经正常")]),s._v(" "),t("img",{attrs:{src:"/imgs/good.jpg",width:"500"}}),s._v(" "),t("h2",{attrs:{id:"参考"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#参考"}},[s._v("#")]),s._v(" 参考")]),s._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"https://blog.csdn.net/ken_ding/article/details/85623092",target:"_blank",rel:"noopener noreferrer"}},[s._v("node-sass 安装失败的原因及解决办法"),t("OutboundLink")],1)])])])}),[],!1,null,null,null);t.default=r.exports}}]);