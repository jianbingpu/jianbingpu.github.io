webpackJsonp([1], [, , , , , , , , , , ,
function(e, t) {
	function i(e, t) {
		var i = e[1] || "",
		n = e[3];
		if (!n) return i;
		if (t && "function" == typeof btoa) {
			var o = function(e) {
				return "/*# sourceMappingURL=data:application/json;charset=utf-8;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(e)))) + " */"
			} (n),
			r = n.sources.map(function(e) {
				return "/*# sourceURL=" + n.sourceRoot + e + " */"
			});
			return [i].concat(r).concat([o]).join("\n")
		}
		return [i].join("\n")
	}
	e.exports = function(e) {
		var t = [];
		return t.toString = function() {
			return this.map(function(t) {
				var n = i(t, e);
				return t[2] ? "@media " + t[2] + "{" + n + "}": n
			}).join("")
		},
		t.i = function(e, i) {
			"string" == typeof e && (e = [[null, e, ""]]);
			for (var n = {},
			o = 0; o < this.length; o++) {
				var r = this[o][0];
				"number" == typeof r && (n[r] = !0)
			}
			for (o = 0; o < e.length; o++) {
				var a = e[o];
				"number" == typeof a[0] && n[a[0]] || (i && !a[2] ? a[2] = i: i && (a[2] = "(" + a[2] + ") and (" + i + ")"), t.push(a))
			}
		},
		t
	}
},
function(e, t, i) {
	function n(e) {
		for (var t = 0; t < e.length; t++) {
			var i = e[t],
			n = c[i.id];
			if (n) {
				n.refs++;
				for (a = 0; a < n.parts.length; a++) n.parts[a](i.parts[a]);
				for (; a < i.parts.length; a++) n.parts.push(r(i.parts[a]));
				n.parts.length > i.parts.length && (n.parts.length = i.parts.length)
			} else {
				for (var o = [], a = 0; a < i.parts.length; a++) o.push(r(i.parts[a]));
				c[i.id] = {
					id: i.id,
					refs: 1,
					parts: o
				}
			}
		}
	}
	function o() {
		var e = document.createElement("style");
		return e.type = "text/css",
		d.appendChild(e),
		e
	}
	function r(e) {
		var t, i, n = document.querySelector('style[data-vue-ssr-id~="' + e.id + '"]');
		if (n) {
			if (g) return f;
			n.parentNode.removeChild(n)
		}
		if (x) {
			var r = u++;
			n = p || (p = o()),
			t = a.bind(null, n, r, !1),
			i = a.bind(null, n, r, !0)
		} else n = o(),
		t = function(e, t) {
			var i = t.css,
			n = t.media,
			o = t.sourceMap;
			n && e.setAttribute("media", n);
			o && (i += "\n/*# sourceURL=" + o.sources[0] + " */", i += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(o)))) + " */");
			if (e.styleSheet) e.styleSheet.cssText = i;
			else {
				for (; e.firstChild;) e.removeChild(e.firstChild);
				e.appendChild(document.createTextNode(i))
			}
		}.bind(null, n),
		i = function() {
			n.parentNode.removeChild(n)
		};
		return t(e),
		function(n) {
			if (n) {
				if (n.css === e.css && n.media === e.media && n.sourceMap === e.sourceMap) return;
				t(e = n)
			} else i()
		}
	}
	function a(e, t, i, n) {
		var o = i ? "": n.css;
		if (e.styleSheet) e.styleSheet.cssText = b(t, o);
		else {
			var r = document.createTextNode(o),
			a = e.childNodes;
			a[t] && e.removeChild(a[t]),
			a.length ? e.insertBefore(r, a[t]) : e.appendChild(r)
		}
	}
	var s = "undefined" != typeof document;
	if ("undefined" != typeof DEBUG && DEBUG && !s) throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");
	var l = i(42),
	c = {},
	d = s && (document.head || document.getElementsByTagName("head")[0]),
	p = null,
	u = 0,
	g = !1,
	f = function() {},
	x = "undefined" != typeof navigator && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase());
	e.exports = function(e, t, i) {
		g = i;
		var o = l(e, t);
		return n(o),
		function(t) {
			for (var i = [], r = 0; r < o.length; r++) {
				var a = o[r]; (s = c[a.id]).refs--,
				i.push(s)
			}
			t ? n(o = l(e, t)) : o = [];
			for (r = 0; r < i.length; r++) {
				var s = i[r];
				if (0 === s.refs) {
					for (var d = 0; d < s.parts.length; d++) s.parts[d]();
					delete c[s.id]
				}
			}
		}
	};
	var b = function() {
		var e = [];
		return function(t, i) {
			return e[t] = i,
			e.filter(Boolean).join("\n")
		}
	} ()
},
function(e, t) {
	e.exports = function(e, t, i, n, o, r) {
		var a, s = e = e || {},
		l = typeof e.
	default;
		"object" !== l && "function" !== l || (a = e, s = e.
	default);
		var c = "function" == typeof s ? s.options: s;
		t && (c.render = t.render, c.staticRenderFns = t.staticRenderFns, c._compiled = !0),
		i && (c.functional = !0),
		o && (c._scopeId = o);
		var d;
		if (r ? (d = function(e) { (e = e || this.$vnode && this.$vnode.ssrContext || this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) || "undefined" == typeof __VUE_SSR_CONTEXT__ || (e = __VUE_SSR_CONTEXT__),
			n && n.call(this, e),
			e && e._registeredComponents && e._registeredComponents.add(r)
		},
		c._ssrRegister = d) : n && (d = n), d) {
			var p = c.functional,
			u = p ? c.render: c.beforeCreate;
			p ? (c._injectStyles = d, c.render = function(e, t) {
				return d.call(t),
				u(e, t)
			}) : c.beforeCreate = u ? [].concat(u, d) : [d]
		}
		return {
			esModule: a,
			exports: s,
			options: c
		}
	}
},
function(e, t, i) {
	i(15),
	e.exports = i(51)
},
function(e, t, i) {
	"use strict";
	Object.defineProperty(t, "__esModule", {
		value: !0
	});
	var n = i(36),
	o = i.n(n);
	window.axios = i(1),
	window.axios.defaults.headers.common["X-Requested-With"] = "XMLHttpRequest";
	var r = document.head.querySelector('meta[name="csrf-token"]');
	r && (window.axios.defaults.headers.common["X-CSRF-TOKEN"] = r.content),
	window.Vue = i(10),
	Vue.config.productionTip = !1,
	new Vue({
		el: "#app",
		template: "<App/>",
		components: {
			App: o.a
		}
	})
},
, , , , , , , , , , , , , , , , , , , ,
function(e, t, i) {
	var n = i(13)(i(43), i(50), !1,
	function(e) {
		i(37)
	},
	null, null);
	e.exports = n.exports
},
function(e, t, i) {
	var n = i(38);
	"string" == typeof n && (n = [[e.i, n, ""]]),
	n.locals && (e.exports = n.locals);
	i(12)("65fc799a", n, !0)
},
function(e, t, i) { (e.exports = i(11)(void 0)).push([e.i, 'body,html{position:relative;height:100%}body{-ms-flex-direction:column;flex-direction:column;max-width:100%;margin:0;overflow:hidden;font-family:-apple-system,BlinkMacSystemFont,SF Pro SC,SF Pro Text,Segoe UI,PingFang SC,Helvetica Neue,Helvetica,Arial,sans-serif;background-color:#efeff4;tap-highlight-color:transparent}#app,body{display:-webkit-box;display:-ms-flexbox;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal}#app{-webkit-box-flex:1;-ms-flex:1;flex:1;-ms-flex-direction:column;flex-direction:column}.canvas-wrap{position:fixed;z-index:-1;opacity:0}.canvas-wrap canvas{width:1125px;height:2436px}.previewer{-webkit-box-flex:1;-ms-flex:1;flex:1;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.previewer,.previewer .phone{display:-webkit-box;display:-ms-flexbox;display:-webkit-flex;display:flex}.previewer .phone{position:relative;width:6.23em;height:13.5em;padding:.43em .47em}.previewer .phone:before{position:absolute;top:0;right:0;bottom:0;left:0;z-index:1;content:"";background-image:url(' + i(39) + ");background-size:contain}.previewer .phone:before,.previewer .phone figure{background-repeat:no-repeat;background-position:50%}.previewer .phone figure{position:relative;z-index:0;display:-webkit-box;display:-ms-flexbox;display:-webkit-flex;display:flex;-webkit-box-flex:1;-ms-flex:1;flex:1;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;margin:0;background-image:url(" + i(40) + ');background-size:cover;-webkit-transition:background-image .2s ease;transition:background-image .2s ease}.previewer .phone figure:before{position:absolute;top:0;right:0;bottom:0;left:0;z-index:1;content:"";background-image:url("img/lock.svg");background-repeat:no-repeat;background-position:50%;background-size:contain}.previewer .phone figure svg{-webkit-box-flex:1;-ms-flex:1;flex:1}.tip{margin:16px 0;font-size:14px;color:rgba(0,0,0,.5)}.tip span{-webkit-transition:opacity .5s ease;transition:opacity .5s ease}.tip span.enter,.tip span.v-leave-to{opacity:0}.control{position:relative;padding-bottom:constant(safe-area-inset-bottom);background-color:#fff}.control:before{position:absolute;top:0;right:0;left:0;height:1px;content:"";background-color:#bcbbc1;-webkit-transform:scaleY(.5);transform:scaleY(.5)}.control .title{display:-webkit-box;display:-ms-flexbox;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-align:center;-ms-flex-align:center;align-items:center;margin:0 16px}.control .title h3{-webkit-box-flex:1;-ms-flex:1;flex:1;margin:0;font-size:14px;font-weight:400;line-height:56px;color:rgba(0,0,0,.5)}.control .title button{font-size:13px;line-height:28px;color:#fff;background-color:#00C74A;border:0;border-radius:4px;outline:0;-webkit-transition:opacity .2s ease-in-out;transition:opacity .2s ease-in-out}.control .title button:disabled{opacity:.5}.control .wrap{-webkit-box-flex:1;-ms-flex:1;flex:1;padding:0 0 16px 16px;overflow-x:scroll;-webkit-overflow-scrolling:touch;white-space:nowrap}.control .wrap label{position:relative;display:inline-block;margin-right:16px}.control .wrap label figure{width:56px;height:56px;padding:4px;margin:0;overflow:hidden;background-repeat:no-repeat;background-position:50%;background-size:cover;border-radius:8px;-webkit-box-shadow:inset 0 0 0 4px #000;box-shadow:inset 0 0 0 4px #000}.control .wrap label figure svg{position:relative;z-index:0;width:56px;height:121.25867px}.control .wrap label span{display:inline-block;width:100%;margin:8px 0 0;font-size:12px;line-height:16px;text-align:center}.control .wrap label input[type=radio]{position:absolute;right:4px;bottom:28px;z-index:1;width:24px;height:24px;margin:0;background-color:#fff;background-image:url(' + i(41) + ");border-radius:50%;outline:0;-webkit-box-shadow:0 0 2px rgba(0,0,0,.5);box-shadow:0 0 2px rgba(0,0,0,.5);opacity:0;-webkit-transition:opacity .2s ease-in-out;transition:opacity .2s ease-in-out;-webkit-appearance:none;-moz-appearance:none;appearance:none}.control .wrap label input[type=radio]:checked{opacity:1}", ""])
},
function(e, t) {
	e.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA3MjYgMTQ1NCI+PHBhdGggZD0iTTcyMiAzMzVWMTA3QTEwNyAxMDcgMCAwIDAgNjE1IDBIMTExQTEwNyAxMDcgMCAwIDAgNCAxMDd2OTBIMHY1NWg0djQ4YTQgNCAwIDAgMC00IDR2OTcuMDExN2E0Ljk4ODcgNC45ODg3IDAgMCAwIDQgNC44ODg3VjQzM2E0IDQgMCAwIDAtNCA0djk3LjAxMTdhNC45ODg3IDQuOTg4NyAwIDAgMCA0IDQuODg4N1YxMzQ3YTEwNyAxMDcgMCAwIDAgMTA3IDEwN2g1MDRhMTA3IDEwNyAwIDAgMCAxMDctMTA3VjUwNC4zMzIyYTYuOTU0IDYuOTU0IDAgMCAwIDQtNi4yOTIyVjMzOWE0IDQgMCAwIDAtNC00em0tMTEgMTAxMmE5NiA5NiAwIDAgMS05NiA5NkgxMTFhOTYgOTYgMCAwIDEtOTYtOTZWMTA3YTk2IDk2IDAgMCAxIDk2LTk2aDUwNGE5NiA5NiAwIDAgMSA5NiA5NnoiIG9wYWNpdHk9Ii4zIi8+PHBhdGggZD0iTTYxNSAxMUgxMTFhOTYgOTYgMCAwIDAtOTYgOTZ2MTI0MGE5NiA5NiAwIDAgMCA5NiA5Nmg1MDRhOTYgOTYgMCAwIDAgOTYtOTZWMTA3YTk2IDk2IDAgMCAwLTk2LTk2em02NCAxMzM2YTY0IDY0IDAgMCAxLTY0IDY0SDExMWE2NCA2NCAwIDAgMS02NC02NFYxMDdhNjQgNjQgMCAwIDEgNjQtNjRoNjQuODQzOEExMS4xNTYyIDExLjE1NjIgMCAwIDEgMTg3IDU0LjE1NjIgMzkuODQzNyAzOS44NDM3IDAgMCAwIDIyNi44NDM4IDk0SDQ5OWE0MCA0MCAwIDAgMCA0MC00MCAxMSAxMSAwIDAgMSAxMS0xMWg2NWE2NCA2NCAwIDAgMSA2NCA2NHoiLz48cGF0aCBmaWxsPSIjMzMzIiBkPSJNNDAxIDUxaC03NmE2IDYgMCAwIDAgMCAxMmg3NmE2IDYgMCAwIDAgMC0xMnptNDAtNmExMiAxMiAwIDEgMCAxMiAxMiAxMiAxMiAwIDAgMC0xMi0xMnoiLz48L3N2Zz4="
},
function(e, t) {
	e.exports = "img/default.jpg"
},
function(e, t) {
	e.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCI+PHBhdGggZmlsbD0iIzAwN2FmZiIgZD0iTTEyIDFhMTEgMTEgMCAxIDAgMTEgMTFBMTEgMTEgMCAwIDAgMTIgMXptLTEuMzMzNCAxNS4yNUw3IDEyLjU4NGwuOTE2Ni0uOTE3IDIuNzUgMi43NSA2LjQxNjUtNi40MTY2LjkxNjYuOTE2NXoiLz48L3N2Zz4="
},
function(e, t) {
	e.exports = function(e, t) {
		for (var i = [], n = {},
		o = 0; o < t.length; o++) {
			var r = t[o],
			a = r[0],
			s = {
				id: e + ":" + o,
				css: r[1],
				media: r[2],
				sourceMap: r[3]
			};
			n[a] ? n[a].parts.push(s) : i.push(n[a] = {
				id: a,
				parts: [s]
			})
		}
		return i
	}
},
function(e, t, i) {
	"use strict";
	Object.defineProperty(t, "__esModule", {
		value: !0
	});
	var n = i(44),
	o = i.n(n);
	t.
default = {
		name: "app",
		components: {
			result: o.a
		},
		data: function() {
			return {
				scale: (window.innerHeight - 288) / 1454 * 100,
				img: null,
				styleIndex: null,
				styleList: templete,
				resultUrl: null
			}
		},
		methods: {
			chooseImg: function(e) {
				var t = this;
				new Promise(function(t, i) {
					var n = e.srcElement.files[0];
					n && t(getObjectURL(n))
				}).then(function(e) {
					var i = document.querySelector("canvas"),
					n = i.getContext("2d");
				
					new Promise(function(t, o) {
						var r = new Image;
						r.onload = function() {
							var e = r.width,
							o = r.height,
							a = e / o,
							s = i.clientWidth / i.clientHeight,
							l = void 0,
							c = void 0,
							d = void 0,
							p = void 0;
							a < s ? (l = 0, c = (o - (d = (p = e) / s)) / 2) : (d = o, c = 0, l = (e - (p = o * s)) / 2),
							/*alert("l:"+l+" c:"+c+" p:"+p+" d:"+d+ " i.clientWidth:"+i.clientWidth+"i.clientHeight:"+i.clientHeight);*/
							n.drawImage(r, l, c, p, d, 0, 0, i.clientWidth, i.clientHeight),
							t(!0)
						},

						setTimeout(function() {
							 r.src = e
						},200);
					}).then(function(e) {
					/*e && i.toBlob(function(e) {
							t.img = getObjectURL(e),
							n.clearRect(0, 0, i.clientWidth, i.clientHeight)})*/
								if (e) {
									try{
										t.img = i.toDataURL(),
										n.clearRect(0, 0, i.clientWidth, i.clientHeight)
									}catch(e){alert(e)}
								}
							}
							)
				})
			},
			bulid: function() {
				var e = this,
				t = this.styleList[this.styleIndex],
				i = document.querySelector("canvas"),
				n = i.getContext("2d");
				new Promise(function(t, o) {
					var r = new Image;
					r.onload = function() {
						alert(11)
						n.drawImage(r, 0, 0, i.clientWidth, i.clientHeight),
						t(!0)
					},
							
					setTimeout(function() {
						r.src = e.img
					},300);
				}).then(function(o) {
					o && new Promise(function(e, o) {
						var r = new Image;
						r.onload = function() {
							alert(22)
							n.drawImage(r, 0, 0, i.clientWidth, i.clientHeight),
							e(!0)
						},
						setTimeout(function() {
							r.src = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1125 2436"><path d="' + t.svg_path + '"/></svg>'
						},300);
					}).then(function(o) {
						alert(33),
						setTimeout(function() {			
							e.resultUrl = i.toDataURL(),
							n.clearRect(0, 0, i.clientWidth, i.clientHeight),
							alert(44)
							//axios.put("/temp/" + t.id)
							},300);
					})
				})
			}
		}
	}
},
function(e, t, i) {
	var n = i(13)(i(47), i(48), !1,
	function(e) {
		i(45)
	},
	"data-v-06dadbee", null);
	e.exports = n.exports
},
function(e, t, i) {
	var n = i(46);
	"string" == typeof n && (n = [[e.i, n, ""]]),
	n.locals && (e.exports = n.locals);
	i(12)("0cfadf8f", n, !0)
},
function(e, t, i) { (e.exports = i(11)(void 0)).push([e.i, "#result[data-v-06dadbee]{position:absolute;top:0;left:0;z-index:1;display:-webkit-box;display:-ms-flexbox;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;width:100%;height:100%;background-color:rgba(0,0,0,.8);-webkit-backdrop-filter:saturate(180%) blur(20px);backdrop-filter:saturate(180%) blur(20px)}@supports ((-webkit-backdrop-filter:none) or (backdrop-filter:none)){#result[data-v-06dadbee]{background-color:rgba(0,0,0,.5)}}.wrap[data-v-06dadbee]{display:-webkit-box;display:-ms-flexbox;display:-webkit-flex;display:flex;-webkit-box-flex:1;-ms-flex:1;flex:1;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;width:100%;height:0;padding:16px 0 0}.wrap img[data-v-06dadbee]{max-width:100%;max-height:100%}.tip[data-v-06dadbee]{color:#fff;text-align:center}.tip span[data-v-06dadbee]{display:block}.tip img[data-v-06dadbee]{width:64px;height:64px;margin:8px 0 0}button[type=reset][data-v-06dadbee]{padding:16px;margin:0;background-color:transparent;border:0;outline:0}button[type=reset] svg[data-v-06dadbee]{width:24px;height:24px;fill:#fff}", ""])
},
function(e, t, i) {
	"use strict";
	Object.defineProperty(t, "__esModule", {
		value: !0
	}),
	t.
default = {
		name: "reault",
		props: ["url"],
		methods: {
			back: function() {
				this.$emit("close", !0)
			}
		}
	}
},
function(e, t, i) {
	var n = [function() {
		var e = this.$createElement,
		t = this._self._c || e;
		return t("p", {
			staticClass: "tip"
		},
			[t("span", [this._v("长按图片保存到手机")]), this._v(" "), t("span", [this._v("更多功能，请关注我们的微信公众号")]), this._v(" "), t("a", {
			attrs: {
				href: "https://mp.weixin.qq.com/mp/profile_ext?action=home&__biz=MzI4NjYxMTk5Mw==&scene=4#wechat_redirect"
			}
		},
		[t("img", {
			attrs: {
				src: i(49),
				alt: "微信公众号二维码"
			}
		})])])
	}];
	e.exports = {
		render: function() {
			var e = this,
			t = e.$createElement,
			i = e._self._c || t;
			return i("div", {
				attrs: {
					id: "result"
				}
			},
			[i("div", {
				staticClass: "wrap"
			},
			[e.url ? i("img", {
				attrs: {
					src: e.url
				}
			}) : e._e()]), e._v(" "), e._m(0, !1, !1), e._v(" "), i("button", {
				attrs: {
					type: "reset"
				},
				on: {
					click: function(t) {
						e.back()
					}
				}
			},
			[i("svg", {
				attrs: {
					viewBox: "0 0 16 16"
				}
			},
			[i("path", {
				attrs: {
					d: "M8 0a8 8 0 1 0 8 8 8 8 0 0 0-8-8zm3.5 10.5a.8.8 0 1 1-1 1L8 9l-2.5 2.5a.8.8 0 1 1-1-1L7 8 4.4 5.5a.8.8 0 0 1 1-1L8 7l2.5-2.5a.8.8 0 1 1 1 1L9 8z"
				}
			})])])])
		},
		staticRenderFns: n
	}
},
function(e, t) {
	e.exports = "data:image/jpg;base64,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"
},
function(e, t) {
	e.exports = {
		render: function() {
			var e = this,
			t = e.$createElement,
			i = e._self._c || t;
			return i("div", {
				attrs: {
					id: "app"
				}
			},
			[e._m(0, !1, !1), e._v(" "), i("div", {
				staticClass: "previewer"
			},
			[i("label", {
				staticClass: "phone",
				style: "font-size:" + e.scale + "px"
			},
			[i("figure", {
				style: e.img && "background-image:url(" + e.img + ")"
			},
			[null != e.styleIndex ? i("svg", {
				attrs: {
					viewBox: "0 0 1125 2436"
				}
			},
			[i("path", {
				attrs: {
					d: e.styleList[e.styleIndex].svg_path
				}
			})]) : e._e()]), e._v(" "), i("input", {
				attrs: {
					type: "file",
					accept: "image/*",
					hidden: ""
				},
				on: {
					change: function(t) {
						e.chooseImg(t)
					}
				}
			})]), e._v(" "), i("p", {
				staticClass: "tip"
			},
			[i("transition", {
				attrs: {
					mode: "out-in"
				}
			},
			[e.img ? i("span", {
				key: "style"
			},
			[e._v("选择模板，点击生成")]) : i("span", {
				key: "bg"
			},
			[e._v("选择一张图片作为壁纸")])])], 1)]), e._v(" "), i("div", {
				staticClass: "control"
			},
			[i("div", {
				staticClass: "title"
			},
				[i("h3", [e._v("选择模板：")]), e._v(" "), i("button", {
				attrs: {
					disabled: !((null != e.styleIndex && e.img))
				},
				on: {
					click: function(t) {
						e.bulid()
					}
				}
			},
			[e._v("生成壁纸")])]), e._v(" "), i("div", {
				staticClass: "wrap"
			},
			e._l(e.styleList,
			function(t, n) {
				return i("label", {
					key: n
				},
				[i("figure", {
					style: e.img && "background-image:url(" + e.img + ")"
				},
				[i("svg", {
					attrs: {
						viewBox: "0 0 1125 2436"
					}
				},
				[i("path", {
					attrs: {
						d: t.svg_path
					}
				})])]), e._v(" "), i("span", [e._v(e._s(t.name))]), e._v(" "), i("input", {
					directives: [{
						name: "model",
						rawName: "v-model",
						value: e.styleIndex,
						expression: "styleIndex"
					}],
					attrs: {
						type: "radio"
					},
					domProps: {
						value: n,
						checked: e._q(e.styleIndex, n)
					},
					on: {
						change: function(t) {
							e.styleIndex = n
						}
					}
				})])
			}))]), e._v(" "), e.resultUrl ? i("result", {
				attrs: {
					url: e.resultUrl
				},
				on: {
					close: function(t) {
						e.resultUrl = null
					}
				}
			}) : e._e()], 1)
		},
		staticRenderFns: [function() {
			var e = this.$createElement,
			t = this._self._c || e;
			return t("div", {
				staticClass: "canvas-wrap"
			},
			[t("canvas", {
				attrs: {
					width: "1125",
					height: "2436"
				}
			})])
		}]
	}
},
function(e, t) {}], [14]);