/*
 jQuery v1.7.1 jquery.com | jquery.org/license  jQuery easing 1.3  jQuery Cookie Plugin v1.4.1
 https://github.com/carhartl/jquery-cookie

 Copyright 2013 Klaus Hartl
 Released under the MIT license
*/
(function(l, g) {
	function m(a) {
		return c.isWindow(a) ? a : 9 === a.nodeType ? a.defaultView || a.parentWindow : !1
	}

	function k(a) {
		if (!ia[a]) {
			var b = q.body,
				e = c("\x3c" + a + "\x3e").appendTo(b),
				d = e.css("display");
			e.remove();
			if ("none" === d || "" === d) I || (I = q.createElement("iframe"), I.frameBorder = I.width = I.height = 0), b.appendChild(I), P && I.createElement || (P = (I.contentWindow || I.contentDocument).document, P.write(("CSS1Compat" === q.compatMode ? "\x3c!doctype html\x3e" : "") + "\x3chtml\x3e\x3cbody\x3e"), P.close()), e = P.createElement(a), P.body.appendChild(e),
				d = c.css(e, "display"), b.removeChild(I);
			ia[a] = d
		}
		return ia[a]
	}

	function p(a, b) {
		var e = {};
		c.each(ra.concat.apply([], ra.slice(0, b)), function() {
			e[this] = a
		});
		return e
	}

	function v() {
		aa = g
	}

	function x() {
		setTimeout(v, 0);
		return aa = c.now()
	}

	function A() {
		try {
			return new l.XMLHttpRequest
		} catch (a) {}
	}

	function J(a, b, e, d) {
		if (c.isArray(b)) c.each(b, function(b, f) {
			e || cb.test(a) ? d(a, f) : J(a + "[" + ("object" == typeof f || c.isArray(f) ? b : "") + "]", f, e, d)
		});
		else if (e || null == b || "object" != typeof b) d(a, b);
		else
			for (var f in b) J(a + "[" + f + "]", b[f], e, d)
	}

	function M(a, b) {
		var e, d, f = c.ajaxSettings.flatOptions || {};
		for (e in b) b[e] !== g && ((f[e] ? a : d || (d = {}))[e] = b[e]);
		d && c.extend(!0, a, d)
	}

	function O(a, b, c, d, f, h) {
		f = f || b.dataTypes[0];
		h = h || {};
		h[f] = !0;
		f = a[f];
		for (var e = 0, u = f ? f.length : 0, y = a === ja, F; e < u && (y || !F); e++) F = f[e](b, c, d), "string" == typeof F && (!y || h[F] ? F = g : (b.dataTypes.unshift(F), F = O(a, b, c, d, F, h)));
		!y && F || h["*"] || (F = O(a, b, c, d, "*", h));
		return F
	}

	function G(a) {
		return function(b, e) {
			"string" != typeof b && (e = b, b = "*");
			if (c.isFunction(e))
				for (var d = b.toLowerCase().split(sa),
						f = 0, h = d.length, n, g; f < h; f++) n = d[f], (g = /^\+/.test(n)) && (n = n.substr(1) || "*"), n = a[n] = a[n] || [], n[g ? "unshift" : "push"](e)
		}
	}

	function N(a, b, e) {
		var d = "width" === b ? a.offsetWidth : a.offsetHeight,
			f = "width" === b ? db : eb,
			h = 0,
			n = f.length;
		if (0 < d) {
			if ("border" !== e)
				for (; h < n; h++) e || (d -= parseFloat(c.css(a, "padding" + f[h])) || 0), "margin" === e ? d += parseFloat(c.css(a, e + f[h])) || 0 : d -= parseFloat(c.css(a, "border" + f[h] + "Width")) || 0;
			return d + "px"
		}
		d = Y(a, b, b);
		if (0 > d || null == d) d = a.style[b] || 0;
		d = parseFloat(d) || 0;
		if (e)
			for (; h < n; h++) d += parseFloat(c.css(a, "padding" + f[h])) || 0, "padding" !== e && (d += parseFloat(c.css(a, "border" + f[h] + "Width")) || 0), "margin" === e && (d += parseFloat(c.css(a, e + f[h])) || 0);
		return d + "px"
	}

	function fb(a, b) {
		b.src ? c.ajax({
			url: b.src,
			async: !1,
			dataType: "script"
		}) : c.globalEval((b.text || b.textContent || b.innerHTML || "").replace(gb, "/*$0*/"));
		b.parentNode && b.parentNode.removeChild(b)
	}

	function ta(a) {
		var b = (a.nodeName || "").toLowerCase();
		"input" === b ? ua(a) : "script" !== b && "undefined" != typeof a.getElementsByTagName && c.grep(a.getElementsByTagName("input"), ua)
	}

	function ua(a) {
		if ("checkbox" === a.type || "radio" === a.type) a.defaultChecked = a.checked
	}

	function ba(a) {
		return "undefined" != typeof a.getElementsByTagName ? a.getElementsByTagName("*") : "undefined" != typeof a.querySelectorAll ? a.querySelectorAll("*") : []
	}

	function va(a, b) {
		if (1 === b.nodeType) {
			b.clearAttributes && b.clearAttributes();
			b.mergeAttributes && b.mergeAttributes(a);
			var e = b.nodeName.toLowerCase();
			if ("object" === e) b.outerHTML = a.outerHTML;
			else if ("input" !== e || "checkbox" !== a.type && "radio" !== a.type)
				if ("option" === e) b.selected = a.defaultSelected;
				else {
					if ("input" === e || "textarea" === e) b.defaultValue = a.defaultValue
				}
			else a.checked && (b.defaultChecked = b.checked = a.checked), b.value !== a.value && (b.value = a.value);
			b.removeAttribute(c.expando)
		}
	}

	function wa(a, b) {
		if (1 === b.nodeType && c.hasData(a)) {
			var e, d;
			var f = c._data(a);
			var h = c._data(b, f),
				n = f.events;
			if (n)
				for (e in delete h.handle, h.events = {}, n)
					for (f = 0, d = n[e].length; f < d; f++) c.event.add(b, e + (n[e][f].namespace ? "." : "") + n[e][f].namespace, n[e][f], n[e][f].data);
			h.data && (h.data = c.extend({}, h.data))
		}
	}

	function hb(a, b) {
		return c.nodeName(a, "table") ? a.getElementsByTagName("tbody")[0] || a.appendChild(a.ownerDocument.createElement("tbody")) : a
	}

	function xa(a) {
		var b = ya.split("|");
		a = a.createDocumentFragment();
		if (a.createElement)
			for (; b.length;) a.createElement(b.pop());
		return a
	}

	function za(a, b, e) {
		b = b || 0;
		if (c.isFunction(b)) return c.grep(a, function(a, c) {
			return !!b.call(a, c, a) === e
		});
		if (b.nodeType) return c.grep(a, function(a, c) {
			return a === b === e
		});
		if ("string" == typeof b) {
			var d = c.grep(a, function(a) {
				return 1 === a.nodeType
			});
			if (ib.test(b)) return c.filter(b, d, !e);
			b = c.filter(b, d)
		}
		return c.grep(a, function(a, d) {
			return 0 <= c.inArray(a, b) === e
		})
	}

	function Aa(a) {
		return !a || !a.parentNode || 11 === a.parentNode.nodeType
	}

	function ca() {
		return !0
	}

	function S() {
		return !1
	}

	function Ba(a, b, e) {
		var d = b + "defer",
			f = b + "queue",
			h = b + "mark",
			n = c._data(a, d);
		!n || "queue" !== e && c._data(a, f) || "mark" !== e && c._data(a, h) || setTimeout(function() {
			c._data(a, f) || c._data(a, h) || (c.removeData(a, d, !0), n.fire())
		}, 0)
	}

	function ka(a) {
		for (var b in a)
			if (("data" !== b || !c.isEmptyObject(a[b])) && "toJSON" !== b) return !1;
		return !0
	}

	function Ca(a, b, e) {
		if (e === g && 1 === a.nodeType)
			if (e = "data-" + b.replace(jb, "-$1").toLowerCase(), e = a.getAttribute(e), "string" == typeof e) {
				try {
					e = "true" === e ? !0 : "false" === e ? !1 : "null" === e ? null : c.isNumeric(e) ? parseFloat(e) : kb.test(e) ? c.parseJSON(e) : e
				} catch (d) {}
				c.data(a, b, e)
			} else e = g;
		return e
	}

	function lb(a) {
		var b = Da[a] = {},
			c;
		a = a.split(/\s+/);
		var d = 0;
		for (c = a.length; d < c; d++) b[a[d]] = !0;
		return b
	}
	var q = l.document,
		mb = l.navigator,
		nb = l.location,
		c = function() {
			function a() {
				if (!b.isReady) {
					try {
						q.documentElement.doScroll("left")
					} catch (dc) {
						setTimeout(a, 1);
						return
					}
					b.ready()
				}
			}
			var b = function(a, c) {
					return new b.fn.init(a, c, J)
				},
				c = l.jQuery,
				d = l.$,
				f = /^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,
				h = /\S/,
				n = /^\s+/,
				u = /\s+$/,
				y = /^<(\w+)\s*\/?>(?:<\/\1>)?$/,
				F = /^[\],:{}\s]*$/,
				k = /\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,
				r = /"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,
				m = /(?:^|:|,)(?:\s*\[)+/g,
				p = /(webkit)[ \/]([\w.]+)/,
				v = /(opera)(?:.*version)?[ \/]([\w.]+)/,
				C = /(msie) ([\w.]+)/,
				B = /(mozilla)(?:.*? rv:([\w.]+))?/,
				ob = /-([a-z]|[0-9])/ig,
				z = /^-ms-/,
				A = function(a, b) {
					return (b + "").toUpperCase()
				},
				x = mb.userAgent,
				t, D, U = Object.prototype.toString,
				K = Object.prototype.hasOwnProperty,
				da = Array.prototype.push,
				Z = Array.prototype.slice,
				Ea = String.prototype.trim,
				la = Array.prototype.indexOf,
				Fa = {};
			b.fn = b.prototype = {
				constructor: b,
				init: function(a, c, e) {
					var d;
					if (!a) return this;
					if (a.nodeType) return this.context = this[0] = a, this.length = 1, this;
					if ("body" === a && !c && q.body) return this.context = q, this[0] = q.body, this.selector = a, this.length = 1, this;
					if ("string" == typeof a) {
						"\x3c" !== a.charAt(0) || "\x3e" !== a.charAt(a.length - 1) || 3 > a.length ? d = f.exec(a) : d = [null, a, null];
						if (d && (d[1] || !c)) {
							if (d[1]) {
								var h = (c = c instanceof b ? c[0] : c) ? c.ownerDocument || c : q;
								(e = y.exec(a)) ? b.isPlainObject(c) ? (a = [q.createElement(e[1])], b.fn.attr.call(a, c, !0)) : a = [h.createElement(e[1])]: (e = b.buildFragment([d[1]], [h]), a = (e.cacheable ? b.clone(e.fragment) : e.fragment).childNodes);
								return b.merge(this, a)
							}
							if ((c = q.getElementById(d[2])) && c.parentNode) {
								if (c.id !== d[2]) return e.find(a);
								this.length = 1;
								this[0] = c
							}
							this.context = q;
							this.selector = a;
							return this
						}
						return !c || c.jquery ? (c || e).find(a) : this.constructor(c).find(a)
					}
					if (b.isFunction(a)) return e.ready(a);
					a.selector !== g && (this.selector = a.selector, this.context = a.context);
					return b.makeArray(a, this)
				},
				selector: "",
				jquery: "1.7.1",
				length: 0,
				size: function() {
					return this.length
				},
				toArray: function() {
					return Z.call(this, 0)
				},
				get: function(a) {
					return null == a ? this.toArray() : 0 > a ? this[this.length + a] : this[a]
				},
				pushStack: function(a, c, e) {
					var d = this.constructor();
					b.isArray(a) ? da.apply(d, a) : b.merge(d, a);
					d.prevObject = this;
					d.context = this.context;
					"find" === c ? d.selector = this.selector + (this.selector ? " " : "") + e : c && (d.selector = this.selector + "." + c + "(" + e + ")");
					return d
				},
				each: function(a, c) {
					return b.each(this, a, c)
				},
				ready: function(a) {
					b.bindReady();
					t.add(a);
					return this
				},
				eq: function(a) {
					a = +a;
					return -1 === a ? this.slice(a) : this.slice(a, a + 1)
				},
				first: function() {
					return this.eq(0)
				},
				last: function() {
					return this.eq(-1)
				},
				slice: function() {
					return this.pushStack(Z.apply(this, arguments), "slice", Z.call(arguments).join(","))
				},
				map: function(a) {
					return this.pushStack(b.map(this, function(b, c) {
						return a.call(b, c, b)
					}))
				},
				end: function() {
					return this.prevObject || this.constructor(null)
				},
				push: da,
				sort: [].sort,
				splice: [].splice
			};
			b.fn.init.prototype = b.fn;
			b.extend = b.fn.extend = function() {
				var a, c, d, e, f = arguments[0] || {},
					h = 1,
					t = arguments.length,
					n = !1;
				"boolean" == typeof f && (n = f, f = arguments[1] || {}, h = 2);
				"object" != typeof f && !b.isFunction(f) && (f = {});
				for (t === h && (f = this, --h); h < t; h++)
					if (null != (a = arguments[h]))
						for (c in a) {
							var D = f[c];
							var u = a[c];
							f !== u && (n && u && (b.isPlainObject(u) || (d = b.isArray(u))) ? (d ? (d = !1, e = D && b.isArray(D) ? D : []) : e = D && b.isPlainObject(D) ? D : {}, f[c] = b.extend(n, e, u)) : u !== g && (f[c] = u))
						}
				return f
			};
			b.extend({
				noConflict: function(a) {
					l.$ === b && (l.$ = d);
					a && l.jQuery === b && (l.jQuery = c);
					return b
				},
				isReady: !1,
				readyWait: 1,
				holdReady: function(a) {
					a ? b.readyWait++ : b.ready(!0)
				},
				ready: function(a) {
					if (!0 === a && !--b.readyWait || !0 !== a && !b.isReady) {
						if (!q.body) return setTimeout(b.ready, 1);
						b.isReady = !0;
						!0 !== a && 0 < --b.readyWait || (t.fireWith(q, [b]), b.fn.trigger && b(q).trigger("ready").off("ready"))
					}
				},
				bindReady: function() {
					if (!t) {
						t = b.Callbacks("once memory");
						if ("complete" === q.readyState) return setTimeout(b.ready, 1);
						if (q.addEventListener) q.addEventListener("DOMContentLoaded", D, !1), l.addEventListener("load", b.ready, !1);
						else if (q.attachEvent) {
							q.attachEvent("onreadystatechange", D);
							l.attachEvent("onload", b.ready);
							var c = !1;
							try {
								c = null == l.frameElement
							} catch (ec) {}
							q.documentElement.doScroll && c && a()
						}
					}
				},
				isFunction: function(a) {
					return "function" === b.type(a)
				},
				isArray: Array.isArray || function(a) {
					return "array" === b.type(a)
				},
				isWindow: function(a) {
					return a && "object" == typeof a && "setInterval" in a
				},
				isNumeric: function(a) {
					return !isNaN(parseFloat(a)) && isFinite(a)
				},
				type: function(a) {
					return null == a ? String(a) : Fa[U.call(a)] || "object"
				},
				isPlainObject: function(a) {
					if (!a || "object" !== b.type(a) || a.nodeType || b.isWindow(a)) return !1;
					try {
						if (a.constructor && !K.call(a, "constructor") && !K.call(a.constructor.prototype, "isPrototypeOf")) return !1
					} catch (Ga) {
						return !1
					}
					for (var c in a);
					return c === g || K.call(a, c)
				},
				isEmptyObject: function(a) {
					for (var b in a) return !1;
					return !0
				},
				error: function(a) {
					throw Error(a);
				},
				parseJSON: function(a) {
					if ("string" != typeof a || !a) return null;
					a = b.trim(a);
					if (l.JSON && l.JSON.parse) return l.JSON.parse(a);
					if (F.test(a.replace(k, "@").replace(r, "]").replace(m, ""))) return (new Function("return " + a))();
					b.error("Invalid JSON: " + a)
				},
				parseXML: function(a) {
					var c, d;
					try {
						l.DOMParser ? (d = new DOMParser, c = d.parseFromString(a, "text/xml")) : (c = new ActiveXObject("Microsoft.XMLDOM"), c.async = "false", c.loadXML(a))
					} catch (fc) {
						c = g
					}
					c && c.documentElement && !c.getElementsByTagName("parsererror").length || b.error("Invalid XML: " + a);
					return c
				},
				noop: function() {},
				globalEval: function(a) {
					a && h.test(a) && (l.execScript || function(a) {
						l.eval.call(l, a)
					})(a)
				},
				camelCase: function(a) {
					return a.replace(z, "ms-").replace(ob, A)
				},
				nodeName: function(a, b) {
					return a.nodeName && a.nodeName.toUpperCase() === b.toUpperCase()
				},
				each: function(a, c, d) {
					var e, f = 0,
						h = a.length,
						t = h === g || b.isFunction(a);
					if (d)
						if (t)
							for (e in a) {
								if (!1 === c.apply(a[e], d)) break
							} else
								for (; f < h && !1 !== c.apply(a[f++], d););
						else if (t)
						for (e in a) {
							if (!1 === c.call(a[e], e, a[e])) break
						} else
							for (; f < h && !1 !== c.call(a[f], f, a[f++]););
					return a
				},
				trim: Ea ? function(a) {
					return null == a ? "" : Ea.call(a)
				} : function(a) {
					return null == a ? "" : (a + "").replace(n, "").replace(u, "")
				},
				makeArray: function(a, c) {
					var d = c || [];
					if (null != a) {
						var e = b.type(a);
						null == a.length || "string" === e || "function" === e || "regexp" === e || b.isWindow(a) ? da.call(d, a) : b.merge(d, a)
					}
					return d
				},
				inArray: function(a, b, c) {
					if (b) {
						if (la) return la.call(b, a, c);
						var d = b.length;
						for (c = c ? 0 > c ? Math.max(0, d + c) : c : 0; c < d; c++)
							if (c in b && b[c] === a) return c
					}
					return -1
				},
				merge: function(a, b) {
					var c = a.length,
						d = 0;
					if ("number" == typeof b.length)
						for (var e = b.length; d < e; d++) a[c++] = b[d];
					else
						for (; b[d] !== g;) a[c++] = b[d++];
					a.length = c;
					return a
				},
				grep: function(a, b, c) {
					var d = [];
					c = !!c;
					for (var e = 0, f = a.length; e < f; e++) {
						var h = !!b(a[e], e);
						c !== h && d.push(a[e])
					}
					return d
				},
				map: function(a, c, d) {
					var e, f = [],
						h = 0,
						t = a.length;
					if (a instanceof b || t !== g && "number" == typeof t && (0 < t && a[0] && a[t - 1] || 0 === t || b.isArray(a)))
						for (; h < t; h++) {
							var n = c(a[h], h, d);
							null != n && (f[f.length] = n)
						} else
							for (e in a) n = c(a[e], e, d), null != n && (f[f.length] = n);
					return f.concat.apply([], f)
				},
				guid: 1,
				proxy: function(a, c) {
					if ("string" == typeof c) {
						var d = a[c];
						c = a;
						a = d
					}
					if (!b.isFunction(a)) return g;
					var e = Z.call(arguments, 2);
					d = function() {
						return a.apply(c, e.concat(Z.call(arguments)))
					};
					d.guid = a.guid = a.guid || d.guid || b.guid++;
					return d
				},
				access: function(a, c, d, e, f, h) {
					var t = a.length;
					if ("object" == typeof c) {
						for (var n in c) b.access(a, n, c[n], e, f, d);
						return a
					}
					if (d !== g) {
						e = !h && e && b.isFunction(d);
						for (n = 0; n < t; n++) f(a[n], c, e ? d.call(a[n], n, f(a[n], c)) : d, h);
						return a
					}
					return t ? f(a[0], c) : g
				},
				now: function() {
					return (new Date).getTime()
				},
				uaMatch: function(a) {
					a = a.toLowerCase();
					a = p.exec(a) || v.exec(a) || C.exec(a) || 0 > a.indexOf("compatible") && B.exec(a) || [];
					return {
						browser: a[1] || "",
						version: a[2] || "0"
					}
				},
				sub: function() {
					function a(b, c) {
						return new a.fn.init(b, c)
					}
					b.extend(!0, a, this);
					a.superclass = this;
					a.fn = a.prototype = this();
					a.fn.constructor = a;
					a.sub = this.sub;
					a.fn.init = function(d, e) {
						e && e instanceof b && !(e instanceof a) && (e = a(e));
						return b.fn.init.call(this, d, e, c)
					};
					a.fn.init.prototype = a.fn;
					var c = a(q);
					return a
				},
				browser: {}
			});
			b.each("Boolean Number String Function Array Date RegExp Object".split(" "), function(a, b) {
				Fa["[object " + b + "]"] = b.toLowerCase()
			});
			x = b.uaMatch(x);
			x.browser && (b.browser[x.browser] = !0, b.browser.version = x.version);
			b.browser.webkit && (b.browser.safari = !0);
			h.test(" ") && (n = /^[\s\xA0]+/, u = /[\s\xA0]+$/);
			var J = b(q);
			q.addEventListener ? D = function() {
				q.removeEventListener("DOMContentLoaded", D, !1);
				b.ready()
			} : q.attachEvent && (D = function() {
				"complete" === q.readyState && (q.detachEvent("onreadystatechange", D), b.ready())
			});
			return b
		}(),
		Da = {};
	c.Callbacks = function(a) {
		a = a ? Da[a] || lb(a) : {};
		var b = [],
			e = [],
			d, f, h, n, u, y = function(d) {
				var e;
				var f = 0;
				for (e = d.length; f < e; f++) {
					var h = d[f];
					var n = c.type(h);
					"array" === n ? y(h) : "function" !== n || a.unique && k.has(h) || b.push(h)
				}
			},
			F = function(c, g) {
				g = g || [];
				d = !a.memory || [c, g];
				f = !0;
				u = h || 0;
				h = 0;
				for (n = b.length; b && u < n; u++)
					if (!1 === b[u].apply(c, g) && a.stopOnFalse) {
						d = !0;
						break
					}
				f = !1;
				b && (a.once ? !0 === d ? k.disable() : b = [] : e && e.length && (d = e.shift(), k.fireWith(d[0], d[1])))
			},
			k = {
				add: function() {
					if (b) {
						var a = b.length;
						y(arguments);
						f ? n = b.length : d && !0 !== d && (h = a, F(d[0], d[1]))
					}
					return this
				},
				remove: function() {
					if (b)
						for (var c = arguments, d = 0, e = c.length; d < e; d++)
							for (var h = 0; h < b.length && (c[d] !== b[h] || (f && h <= n && (n--, h <= u && u--), b.splice(h--, 1), !a.unique)); h++);
					return this
				},
				has: function(a) {
					if (b)
						for (var c = 0, d = b.length; c < d; c++)
							if (a === b[c]) return !0;
					return !1
				},
				empty: function() {
					b = [];
					return this
				},
				disable: function() {
					b = e = d = g;
					return this
				},
				disabled: function() {
					return !b
				},
				lock: function() {
					e = g;
					d && !0 !== d || k.disable();
					return this
				},
				locked: function() {
					return !e
				},
				fireWith: function(b, c) {
					e && (f ? a.once || e.push([b, c]) : (!a.once || !d) && F(b, c));
					return this
				},
				fire: function() {
					k.fireWith(this, arguments);
					return this
				},
				fired: function() {
					return !!d
				}
			};
		return k
	};
	var ma = [].slice;
	c.extend({
		Deferred: function(a) {
			var b = c.Callbacks("once memory"),
				e = c.Callbacks("once memory"),
				d = c.Callbacks("memory"),
				f = "pending",
				h = {
					resolve: b,
					reject: e,
					notify: d
				},
				n = {
					done: b.add,
					fail: e.add,
					progress: d.add,
					state: function() {
						return f
					},
					isResolved: b.fired,
					isRejected: e.fired,
					then: function(a, b, c) {
						g.done(a).fail(b).progress(c);
						return this
					},
					always: function() {
						g.done.apply(g, arguments).fail.apply(g, arguments);
						return this
					},
					pipe: function(a, b, d) {
						return c.Deferred(function(e) {
							c.each({
								done: [a, "resolve"],
								fail: [b, "reject"],
								progress: [d, "notify"]
							}, function(a, b) {
								var d = b[0],
									f = b[1],
									h;
								c.isFunction(d) ? g[a](function() {
									(h = d.apply(this, arguments)) && c.isFunction(h.promise) ? h.promise().then(e.resolve, e.reject, e.notify) : e[f + "With"](this === g ? e : this, [h])
								}) : g[a](e[f])
							})
						}).promise()
					},
					promise: function(a) {
						if (null == a) a = n;
						else
							for (var b in n) a[b] = n[b];
						return a
					}
				},
				g = n.promise({}),
				y;
			for (y in h) g[y] = h[y].fire, g[y + "With"] = h[y].fireWith;
			g.done(function() {
				f = "resolved"
			}, e.disable, d.lock).fail(function() {
				f = "rejected"
			}, b.disable, d.lock);
			a && a.call(g, g);
			return g
		},
		when: function(a) {
			function b(a) {
				return function(b) {
					n[a] = 1 < arguments.length ? ma.call(arguments, 0) : b;
					y.notifyWith(k, n)
				}
			}

			function e(a) {
				return function(b) {
					d[a] = 1 < arguments.length ? ma.call(arguments, 0) : b;
					--g || y.resolveWith(y, d)
				}
			}
			var d = ma.call(arguments, 0),
				f = 0,
				h = d.length,
				n = Array(h),
				g = h,
				y = 1 >= h && a && c.isFunction(a.promise) ? a : c.Deferred(),
				k = y.promise();
			if (1 < h) {
				for (; f < h; f++) d[f] && d[f].promise && c.isFunction(d[f].promise) ? d[f].promise().then(e(f), y.reject, b(f)) : --g;
				g || y.resolveWith(y, d)
			} else y !== a && y.resolveWith(y, h ? [a] : []);
			return k
		}
	});
	c.support = function() {
		var a, b, e, d, f = q.createElement("div");
		f.setAttribute("className", "t");
		f.innerHTML = "   \x3clink/\x3e\x3ctable\x3e\x3c/table\x3e\x3ca href\x3d'/a' style\x3d'top:1px;float:left;opacity:.55;'\x3ea\x3c/a\x3e\x3cinput type\x3d'checkbox'/\x3e";
		var h = f.getElementsByTagName("*");
		var n = f.getElementsByTagName("a")[0];
		if (!h || !h.length || !n) return {};
		var g = q.createElement("select");
		var y = g.appendChild(q.createElement("option"));
		h = f.getElementsByTagName("input")[0];
		var k = {
			leadingWhitespace: 3 === f.firstChild.nodeType,
			tbody: !f.getElementsByTagName("tbody").length,
			htmlSerialize: !!f.getElementsByTagName("link").length,
			style: /top/.test(n.getAttribute("style")),
			hrefNormalized: "/a" === n.getAttribute("href"),
			opacity: /^0.55/.test(n.style.opacity),
			cssFloat: !!n.style.cssFloat,
			checkOn: "on" === h.value,
			optSelected: y.selected,
			getSetAttribute: "t" !== f.className,
			enctype: !!q.createElement("form").enctype,
			html5Clone: "\x3c:nav\x3e\x3c/:nav\x3e" !== q.createElement("nav").cloneNode(!0).outerHTML,
			submitBubbles: !0,
			changeBubbles: !0,
			focusinBubbles: !1,
			deleteExpando: !0,
			noCloneEvent: !0,
			inlineBlockNeedsLayout: !1,
			shrinkWrapBlocks: !1,
			reliableMarginRight: !0
		};
		h.checked = !0;
		k.noCloneChecked = h.cloneNode(!0).checked;
		g.disabled = !0;
		k.optDisabled = !y.disabled;
		try {
			delete f.test
		} catch (T) {
			k.deleteExpando = !1
		}!f.addEventListener && f.attachEvent && f.fireEvent && (f.attachEvent("onclick", function() {
			k.noCloneEvent = !1
		}), f.cloneNode(!0).fireEvent("onclick"));
		h = q.createElement("input");
		h.value = "t";
		h.setAttribute("type", "radio");
		k.radioValue = "t" === h.value;
		h.setAttribute("checked", "checked");
		f.appendChild(h);
		n = q.createDocumentFragment();
		n.appendChild(f.lastChild);
		k.checkClone = n.cloneNode(!0).cloneNode(!0).lastChild.checked;
		k.appendChecked = h.checked;
		n.removeChild(h);
		n.appendChild(f);
		f.innerHTML = "";
		l.getComputedStyle && (a = q.createElement("div"), a.style.width = "0", a.style.marginRight = "0", f.style.width = "2px", f.appendChild(a), k.reliableMarginRight = 0 === (parseInt((l.getComputedStyle(a, null) || {
			marginRight: 0
		}).marginRight, 10) || 0));
		if (f.attachEvent)
			for (e in {
					submit: 1,
					change: 1,
					focusin: 1
				}) a = "on" + e, (d = a in f) || (f.setAttribute(a, "return;"), d = "function" == typeof f[a]), k[e + "Bubbles"] = d;
		n.removeChild(f);
		n = g = y = a = f = h = null;
		c(function() {
			var a, e, h, n, g, u = q.getElementsByTagName("body")[0];
			!u || (a = q.createElement("div"), a.style.cssText = "visibility:hidden;border:0;width:0;height:0;position:static;top:0;margin-top:1px", u.insertBefore(a, u.firstChild), f = q.createElement("div"), a.appendChild(f), f.innerHTML = "\x3ctable\x3e\x3ctr\x3e\x3ctd style\x3d'padding:0;border:0;display:none'\x3e\x3c/td\x3e\x3ctd\x3et\x3c/td\x3e\x3c/tr\x3e\x3c/table\x3e", b = f.getElementsByTagName("td"), d = 0 === b[0].offsetHeight, b[0].style.display = "", b[1].style.display = "none", k.reliableHiddenOffsets = d && 0 === b[0].offsetHeight, f.innerHTML = "", f.style.width = f.style.paddingLeft = "1px", c.boxModel = k.boxModel = 2 === f.offsetWidth, "undefined" != typeof f.style.zoom && (f.style.display = "inline", f.style.zoom = 1, k.inlineBlockNeedsLayout = 2 === f.offsetWidth, f.style.display = "", f.innerHTML = "\x3cdiv style\x3d'width:4px;'\x3e\x3c/div\x3e", k.shrinkWrapBlocks = 2 !== f.offsetWidth), f.style.cssText = "position:absolute;top:0;left:0;width:1px;height:1px;margin:0;visibility:hidden;border:0;", f.innerHTML = "\x3cdiv style\x3d'position:absolute;top:0;left:0;width:1px;height:1px;margin:0;border:5px solid #000;padding:0;'\x3e\x3cdiv\x3e\x3c/div\x3e\x3c/div\x3e\x3ctable style\x3d'position:absolute;top:0;left:0;width:1px;height:1px;margin:0;border:5px solid #000;padding:0;' cellpadding\x3d'0' cellspacing\x3d'0'\x3e\x3ctr\x3e\x3ctd\x3e\x3c/td\x3e\x3c/tr\x3e\x3c/table\x3e", e = f.firstChild, h = e.firstChild, n = e.nextSibling.firstChild.firstChild, g = {
				doesNotAddBorder: 5 !== h.offsetTop,
				doesAddBorderForTableAndCells: 5 === n.offsetTop
			}, h.style.position = "fixed", h.style.top = "20px", g.fixedPosition = 20 === h.offsetTop || 15 === h.offsetTop, h.style.position = h.style.top = "", e.style.overflow = "hidden", e.style.position = "relative", g.subtractsBorderForOverflowNotVisible = -5 === h.offsetTop, g.doesNotIncludeMarginInBodyOffset = 1 !== u.offsetTop, u.removeChild(a), f = null, c.extend(k, g))
		});
		return k
	}();
	var kb = /^(?:\{.*\}|\[.*\])$/,
		jb = /([A-Z])/g;
	c.extend({
		cache: {},
		uuid: 0,
		expando: "jQuery" + (c.fn.jquery + Math.random()).replace(/\D/g, ""),
		noData: {
			embed: !0,
			object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",
			applet: !0
		},
		hasData: function(a) {
			a = a.nodeType ? c.cache[a[c.expando]] : a[c.expando];
			return !!a && !ka(a)
		},
		data: function(a, b, e, d) {
			if (c.acceptData(a)) {
				var f;
				var h = c.expando;
				var n = "string" == typeof b,
					u = a.nodeType,
					k = u ? c.cache : a,
					l = u ? a[h] : a[h] && h,
					m = "events" === b;
				if (l && k[l] && (m || d || k[l].data) || !n || e !== g) {
					l || (u ? a[h] = l = ++c.uuid : l = h);
					k[l] || (k[l] = {}, u || (k[l].toJSON = c.noop));
					if ("object" == typeof b || "function" == typeof b) d ? k[l] = c.extend(k[l], b) : k[l].data = c.extend(k[l].data, b);
					a = h = k[l];
					d || (h.data || (h.data = {}), h = h.data);
					e !== g && (h[c.camelCase(b)] = e);
					if (m && !h[b]) return a.events;
					n ? (f = h[b], null == f && (f = h[c.camelCase(b)])) : f = h;
					return f
				}
			}
		},
		removeData: function(a, b, e) {
			if (c.acceptData(a)) {
				var d, f, h = c.expando,
					n = a.nodeType,
					g = n ? c.cache : a,
					k = n ? a[h] : h;
				if (g[k]) {
					if (b && (d = e ? g[k] : g[k].data)) {
						c.isArray(b) || (b in d ? b = [b] : (b = c.camelCase(b), b in d ? b = [b] : b = b.split(" ")));
						var l = 0;
						for (f = b.length; l < f; l++) delete d[b[l]];
						if (!(e ? ka : c.isEmptyObject)(d)) return
					}
					if (!e && (delete g[k].data, !ka(g[k]))) return;
					c.support.deleteExpando || !g.setInterval ? delete g[k] : g[k] = null;
					n && (c.support.deleteExpando ? delete a[h] : a.removeAttribute ? a.removeAttribute(h) : a[h] = null)
				}
			}
		},
		_data: function(a, b, e) {
			return c.data(a, b, e, !0)
		},
		acceptData: function(a) {
			if (a.nodeName) {
				var b = c.noData[a.nodeName.toLowerCase()];
				if (b) return !0 !== b && a.getAttribute("classid") === b
			}
			return !0
		}
	});
	c.fn.extend({
		data: function(a, b) {
			var e = null;
			if ("undefined" == typeof a) {
				if (this.length && (e = c.data(this[0]), 1 === this[0].nodeType && !c._data(this[0], "parsedAttrs"))) {
					var d = this[0].attributes;
					for (var f = 0, h = d.length; f < h; f++) {
						var n = d[f].name;
						0 === n.indexOf("data-") && (n = c.camelCase(n.substring(5)), Ca(this[0], n, e[n]))
					}
					c._data(this[0], "parsedAttrs", !0)
				}
				return e
			}
			if ("object" == typeof a) return this.each(function() {
				c.data(this, a)
			});
			var u = a.split(".");
			u[1] = u[1] ? "." + u[1] : "";
			return b === g ? (e = this.triggerHandler("getData" + u[1] + "!", [u[0]]), e === g && this.length && (e = c.data(this[0], a), e = Ca(this[0], a, e)), e === g && u[1] ? this.data(u[0]) : e) : this.each(function() {
				var e = c(this),
					d = [u[0], b];
				e.triggerHandler("setData" + u[1] + "!", d);
				c.data(this, a, b);
				e.triggerHandler("changeData" + u[1] + "!", d)
			})
		},
		removeData: function(a) {
			return this.each(function() {
				c.removeData(this, a)
			})
		}
	});
	c.extend({
		_mark: function(a, b) {
			a && (b = (b || "fx") + "mark", c._data(a, b, (c._data(a, b) || 0) + 1))
		},
		_unmark: function(a, b, e) {
			!0 !== a && (e = b, b = a, a = !1);
			if (b) {
				e = e || "fx";
				var d = e + "mark";
				(a = a ? 0 : (c._data(b, d) || 1) - 1) ? c._data(b, d, a): (c.removeData(b, d, !0), Ba(b, e, "mark"))
			}
		},
		queue: function(a, b, e) {
			if (a) {
				b = (b || "fx") + "queue";
				var d = c._data(a, b);
				e && (!d || c.isArray(e) ? d = c._data(a, b, c.makeArray(e)) : d.push(e));
				return d || []
			}
		},
		dequeue: function(a, b) {
			b = b || "fx";
			var e = c.queue(a, b),
				d = e.shift(),
				f = {};
			"inprogress" === d && (d = e.shift());
			d && ("fx" === b && e.unshift("inprogress"), c._data(a, b + ".run", f), d.call(a, function() {
				c.dequeue(a, b)
			}, f));
			e.length || (c.removeData(a, b + "queue " + b + ".run", !0), Ba(a, b, "queue"))
		}
	});
	c.fn.extend({
		queue: function(a, b) {
			"string" != typeof a && (b = a, a = "fx");
			return b === g ? c.queue(this[0], a) : this.each(function() {
				var e = c.queue(this, a, b);
				"fx" === a && "inprogress" !== e[0] && c.dequeue(this, a)
			})
		},
		dequeue: function(a) {
			return this.each(function() {
				c.dequeue(this, a)
			})
		},
		delay: function(a, b) {
			a = c.fx ? c.fx.speeds[a] || a : a;
			return this.queue(b || "fx", function(b, c) {
				var e = setTimeout(b, a);
				c.stop = function() {
					clearTimeout(e)
				}
			})
		},
		clearQueue: function(a) {
			return this.queue(a || "fx", [])
		},
		promise: function(a, b) {
			function e() {
				--n || d.resolveWith(f, [f])
			}
			"string" != typeof a && (a = g);
			a = a || "fx";
			for (var d = c.Deferred(), f = this, h = f.length, n = 1, u = a + "defer", k = a + "queue", l = a + "mark", m; h--;)
				if (m = c.data(f[h], u, g, !0) || (c.data(f[h], k, g, !0) || c.data(f[h], l, g, !0)) && c.data(f[h], u, c.Callbacks("once memory"), !0)) n++, m.add(e);
			e();
			return d.promise()
		}
	});
	var Ha = /[\n\t\r]/g,
		ea = /\s+/,
		pb = /\r/g,
		qb = /^(?:button|input)$/i,
		rb = /^(?:button|input|object|select|textarea)$/i,
		sb = /^a(?:rea)?$/i,
		Ia = /^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,
		Ja = c.support.getSetAttribute,
		L, Ka;
	c.fn.extend({
		attr: function(a, b) {
			return c.access(this, a, b, !0, c.attr)
		},
		removeAttr: function(a) {
			return this.each(function() {
				c.removeAttr(this, a)
			})
		},
		prop: function(a, b) {
			return c.access(this, a, b, !0, c.prop)
		},
		removeProp: function(a) {
			a = c.propFix[a] || a;
			return this.each(function() {
				try {
					this[a] = g, delete this[a]
				} catch (b) {}
			})
		},
		addClass: function(a) {
			var b, e;
			if (c.isFunction(a)) return this.each(function(b) {
				c(this).addClass(a.call(this, b, this.className))
			});
			if (a && "string" == typeof a) {
				var d = a.split(ea);
				var f = 0;
				for (b = this.length; f < b; f++) {
					var h = this[f];
					if (1 === h.nodeType)
						if (h.className || 1 !== d.length) {
							var g = " " + h.className + " ";
							var u = 0;
							for (e = d.length; u < e; u++) ~g.indexOf(" " + d[u] + " ") || (g += d[u] + " ");
							h.className = c.trim(g)
						} else h.className = a
				}
			}
			return this
		},
		removeClass: function(a) {
			var b, e;
			if (c.isFunction(a)) return this.each(function(b) {
				c(this).removeClass(a.call(this, b, this.className))
			});
			if (a && "string" == typeof a || a === g) {
				var d = (a || "").split(ea);
				var f = 0;
				for (b = this.length; f < b; f++) {
					var h = this[f];
					if (1 === h.nodeType && h.className)
						if (a) {
							var n = (" " + h.className + " ").replace(Ha, " ");
							var u = 0;
							for (e = d.length; u < e; u++) n = n.replace(" " + d[u] + " ", " ");
							h.className = c.trim(n)
						} else h.className = ""
				}
			}
			return this
		},
		toggleClass: function(a, b) {
			var e = typeof a,
				d = "boolean" == typeof b;
			return c.isFunction(a) ? this.each(function(e) {
				c(this).toggleClass(a.call(this, e, this.className, b), b)
			}) : this.each(function() {
				if ("string" === e)
					for (var f, h = 0, g = c(this), u = b, k = a.split(ea); f = k[h++];) u = d ? u : !g.hasClass(f), g[u ? "addClass" : "removeClass"](f);
				else if ("undefined" === e || "boolean" === e) this.className && c._data(this, "__className__", this.className), this.className = this.className || !1 === a ? "" : c._data(this, "__className__") || ""
			})
		},
		hasClass: function(a) {
			a = " " + a + " ";
			for (var b = 0, c = this.length; b < c; b++)
				if (1 === this[b].nodeType && -1 < (" " + this[b].className + " ").replace(Ha, " ").indexOf(a)) return !0;
			return !1
		},
		val: function(a) {
			var b, e, d = this[0];
			if (arguments.length) {
				var f = c.isFunction(a);
				return this.each(function(e) {
					var d = c(this),
						h;
					1 === this.nodeType && (f ? h = a.call(this, e, d.val()) : h = a, null == h ? h = "" : "number" == typeof h ? h += "" : c.isArray(h) && (h = c.map(h, function(a) {
						return null == a ? "" : a + ""
					})), b = c.valHooks[this.nodeName.toLowerCase()] || c.valHooks[this.type], b && "set" in b && b.set(this, h, "value") !== g || (this.value = h))
				})
			}
			if (d) {
				if ((b = c.valHooks[d.nodeName.toLowerCase()] || c.valHooks[d.type]) && "get" in b && (e = b.get(d, "value")) !== g) return e;
				e = d.value;
				return "string" == typeof e ? e.replace(pb, "") : null == e ? "" : e
			}
		}
	});
	c.extend({
		valHooks: {
			option: {
				get: function(a) {
					var b = a.attributes.value;
					return !b || b.specified ? a.value : a.text
				}
			},
			select: {
				get: function(a) {
					var b, e = a.selectedIndex,
						d = [],
						f = a.options,
						h = "select-one" === a.type;
					if (0 > e) return null;
					a = h ? e : 0;
					for (b = h ? e + 1 : f.length; a < b; a++) {
						var g = f[a];
						if (!(!g.selected || (c.support.optDisabled ? g.disabled : null !== g.getAttribute("disabled")) || g.parentNode.disabled && c.nodeName(g.parentNode, "optgroup"))) {
							g = c(g).val();
							if (h) return g;
							d.push(g)
						}
					}
					return h && !d.length && f.length ? c(f[e]).val() : d
				},
				set: function(a, b) {
					var e = c.makeArray(b);
					c(a).find("option").each(function() {
						this.selected = 0 <= c.inArray(c(this).val(), e)
					});
					e.length || (a.selectedIndex = -1);
					return e
				}
			}
		},
		attrFn: {
			val: !0,
			css: !0,
			html: !0,
			text: !0,
			data: !0,
			width: !0,
			height: !0,
			offset: !0
		},
		attr: function(a, b, e, d) {
			var f, h, n = a.nodeType;
			if (a && 3 !== n && 8 !== n && 2 !== n) {
				if (d && b in c.attrFn) return c(a)[b](e);
				if ("undefined" == typeof a.getAttribute) return c.prop(a, b, e);
				(d = 1 !== n || !c.isXMLDoc(a)) && (b = b.toLowerCase(), h = c.attrHooks[b] || (Ia.test(b) ? tb : L));
				if (e !== g) {
					if (null === e) {
						c.removeAttr(a, b);
						return
					}
					if (h && "set" in h && d && (f = h.set(a, e, b)) !== g) return f;
					a.setAttribute(b, "" + e);
					return e
				}
				if (h && "get" in h && d && null !== (f = h.get(a, b))) return f;
				f = a.getAttribute(b);
				return null === f ? g : f
			}
		},
		removeAttr: function(a, b) {
			var e, d, f, h = 0;
			if (b && 1 === a.nodeType) {
				var g = b.toLowerCase().split(ea);
				for (f = g.length; h < f; h++)(d = g[h]) && (e = c.propFix[d] || d, c.attr(a, d, ""), a.removeAttribute(Ja ? d : e), Ia.test(d) && e in a && (a[e] = !1))
			}
		},
		attrHooks: {
			type: {
				set: function(a, b) {
					if (qb.test(a.nodeName) && a.parentNode) c.error("type property can't be changed");
					else if (!c.support.radioValue && "radio" === b && c.nodeName(a, "input")) {
						var e = a.value;
						a.setAttribute("type", b);
						e && (a.value = e);
						return b
					}
				}
			},
			value: {
				get: function(a, b) {
					return L && c.nodeName(a, "button") ? L.get(a, b) : b in a ? a.value : null
				},
				set: function(a, b, e) {
					if (L && c.nodeName(a, "button")) return L.set(a, b, e);
					a.value = b
				}
			}
		},
		propFix: {
			tabindex: "tabIndex",
			readonly: "readOnly",
			"for": "htmlFor",
			"class": "className",
			maxlength: "maxLength",
			cellspacing: "cellSpacing",
			cellpadding: "cellPadding",
			rowspan: "rowSpan",
			colspan: "colSpan",
			usemap: "useMap",
			frameborder: "frameBorder",
			contenteditable: "contentEditable"
		},
		prop: function(a, b, e) {
			var d, f;
			var h = a.nodeType;
			if (a && 3 !== h && 8 !== h && 2 !== h) return (h = 1 !== h || !c.isXMLDoc(a)) && (b = c.propFix[b] || b, f = c.propHooks[b]), e !== g ? f && "set" in f && (d = f.set(a, e, b)) !== g ? d : a[b] = e : f && "get" in f && null !== (d = f.get(a, b)) ? d : a[b]
		},
		propHooks: {
			tabIndex: {
				get: function(a) {
					var b = a.getAttributeNode("tabindex");
					return b && b.specified ? parseInt(b.value, 10) : rb.test(a.nodeName) || sb.test(a.nodeName) && a.href ? 0 : g
				}
			}
		}
	});
	c.attrHooks.tabindex = c.propHooks.tabIndex;
	var tb = {
		get: function(a, b) {
			var e, d = c.prop(a, b);
			return !0 === d || "boolean" != typeof d && (e = a.getAttributeNode(b)) && !1 !== e.nodeValue ? b.toLowerCase() : g
		},
		set: function(a, b, e) {
			var d;
			!1 === b ? c.removeAttr(a, e) : (d = c.propFix[e] || e, d in a && (a[d] = !0), a.setAttribute(e, e.toLowerCase()));
			return e
		}
	};
	Ja || (Ka = {
		name: !0,
		id: !0
	}, L = c.valHooks.button = {
		get: function(a, b) {
			var c;
			return (c = a.getAttributeNode(b)) && (Ka[b] ? "" !== c.nodeValue : c.specified) ? c.nodeValue : g
		},
		set: function(a, b, c) {
			var d = a.getAttributeNode(c);
			d || (d = q.createAttribute(c), a.setAttributeNode(d));
			return d.nodeValue = b + ""
		}
	}, c.attrHooks.tabindex.set = L.set, c.each(["width", "height"], function(a, b) {
		c.attrHooks[b] = c.extend(c.attrHooks[b], {
			set: function(a, c) {
				if ("" === c) return a.setAttribute(b, "auto"), c
			}
		})
	}), c.attrHooks.contenteditable = {
		get: L.get,
		set: function(a, b, c) {
			"" === b && (b = "false");
			L.set(a, b, c)
		}
	});
	c.support.hrefNormalized || c.each(["href", "src", "width", "height"], function(a, b) {
		c.attrHooks[b] = c.extend(c.attrHooks[b], {
			get: function(a) {
				a = a.getAttribute(b, 2);
				return null === a ? g : a
			}
		})
	});
	c.support.style || (c.attrHooks.style = {
		get: function(a) {
			return a.style.cssText.toLowerCase() || g
		},
		set: function(a, b) {
			return a.style.cssText = "" + b
		}
	});
	c.support.optSelected || (c.propHooks.selected = c.extend(c.propHooks.selected, {
		get: function(a) {
			a = a.parentNode;
			a && (a.selectedIndex, a.parentNode && a.parentNode.selectedIndex);
			return null
		}
	}));
	c.support.enctype || (c.propFix.enctype = "encoding");
	c.support.checkOn || c.each(["radio", "checkbox"], function() {
		c.valHooks[this] = {
			get: function(a) {
				return null === a.getAttribute("value") ? "on" : a.value
			}
		}
	});
	c.each(["radio", "checkbox"], function() {
		c.valHooks[this] = c.extend(c.valHooks[this], {
			set: function(a, b) {
				if (c.isArray(b)) return a.checked = 0 <= c.inArray(c(a).val(), b)
			}
		})
	});
	var na = /^(?:textarea|input|select)$/i,
		La = /^([^\.]*)?(?:\.(.+))?$/,
		ub = /\bhover(\.\S+)?\b/,
		vb = /^key/,
		wb = /^(?:mouse|contextmenu)|click/,
		Ma = /^(?:focusinfocus|focusoutblur)$/,
		xb = /^(\w*)(?:#([\w\-]+))?(?:\.([\w\-]+))?$/,
		yb = function(a) {
			(a = xb.exec(a)) && (a[1] = (a[1] || "").toLowerCase(), a[3] = a[3] && new RegExp("(?:^|\\s)" + a[3] + "(?:\\s|$)"));
			return a
		},
		Na = function(a) {
			return c.event.special.hover ? a : a.replace(ub, "mouseenter$1 mouseleave$1")
		};
	c.event = {
		add: function(a, b, e, d, f) {
			var h, n, u, k;
			if (3 !== a.nodeType && 8 !== a.nodeType && b && e && (h = c._data(a))) {
				e.handler && (k = e, e = k.handler);
				e.guid || (e.guid = c.guid++);
				(u = h.events) || (h.events = u = {});
				(n = h.handle) || (h.handle = n = function(a) {
					return "undefined" == typeof c || a && c.event.triggered === a.type ? g : c.event.dispatch.apply(n.elem, arguments)
				}, n.elem = a);
				b = c.trim(Na(b)).split(" ");
				for (h = 0; h < b.length; h++) {
					var l = La.exec(b[h]) || [];
					var m = l[1];
					var p = (l[2] || "").split(".").sort();
					var q = c.event.special[m] || {};
					m = (f ? q.delegateType : q.bindType) || m;
					q = c.event.special[m] || {};
					l = c.extend({
						type: m,
						origType: l[1],
						data: d,
						handler: e,
						guid: e.guid,
						selector: f,
						quick: yb(f),
						namespace: p.join(".")
					}, k);
					var w = u[m];
					w || (w = u[m] = [], w.delegateCount = 0, q.setup && !1 !== q.setup.call(a, d, p, n) || (a.addEventListener ? a.addEventListener(m, n, !1) : a.attachEvent && a.attachEvent("on" + m, n)));
					q.add && (q.add.call(a, l), l.handler.guid || (l.handler.guid = e.guid));
					f ? w.splice(w.delegateCount++, 0, l) : w.push(l);
					c.event.global[m] = !0
				}
				a = null
			}
		},
		global: {},
		remove: function(a, b, e, d, f) {
			var h = c.hasData(a) && c._data(a),
				g, u, k, l, m;
			if (h && (l = h.events)) {
				b = c.trim(Na(b || "")).split(" ");
				for (g = 0; g < b.length; g++) {
					var p = La.exec(b[g]) || [];
					var q = u = p[1];
					p = p[2];
					if (q) {
						var w = c.event.special[q] || {};
						q = (d ? w.delegateType : w.bindType) || q;
						var v = l[q] || [];
						var C = v.length;
						p = p ? new RegExp("(^|\\.)" + p.split(".").sort().join("\\.(?:.*\\.)?") + "(\\.|$)") : null;
						for (k = 0; k < v.length; k++) {
							var B = v[k];
							!f && u !== B.origType || e && e.guid !== B.guid || p && !p.test(B.namespace) || d && d !== B.selector && ("**" !== d || !B.selector) || (v.splice(k--, 1), B.selector && v.delegateCount--, !w.remove || w.remove.call(a, B))
						}
						0 === v.length && C !== v.length && ((!w.teardown || !1 === w.teardown.call(a, p)) && c.removeEvent(a, q, h.handle), delete l[q])
					} else
						for (q in l) c.event.remove(a, q + b[g], e, d, !0)
				}
				c.isEmptyObject(l) && (m = h.handle, m && (m.elem = null), c.removeData(a, ["events", "handle"], !0))
			}
		},
		customEvent: {
			getData: !0,
			setData: !0,
			changeData: !0
		},
		trigger: function(a, b, e, d) {
			if (!e || 3 !== e.nodeType && 8 !== e.nodeType) {
				var f = a.type || a,
					h = [],
					n, u, k;
				if (!Ma.test(f + c.event.triggered) && (0 <= f.indexOf("!") && (f = f.slice(0, -1), n = !0), 0 <= f.indexOf(".") && (h = f.split("."), f = h.shift(), h.sort()), e && !c.event.customEvent[f] || c.event.global[f]))
					if (a = "object" == typeof a ? a[c.expando] ? a : new c.Event(f, a) : new c.Event(f), a.type = f, a.isTrigger = !0, a.exclusive = n, a.namespace = h.join("."), a.namespace_re = a.namespace ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.)?") + "(\\.|$)") : null, n = 0 > f.indexOf(":") ? "on" + f : "", e) {
						a.result = g;
						a.target || (a.target = e);
						b = null != b ? c.makeArray(b) : [];
						b.unshift(a);
						var m = c.event.special[f] || {};
						if (!m.trigger || !1 !== m.trigger.apply(e, b)) {
							var p = [
								[e, m.bindType || f]
							];
							if (!d && !m.noBubble && !c.isWindow(e)) {
								var r = m.delegateType || f;
								h = Ma.test(r + f) ? e : e.parentNode;
								for (u = null; h; h = h.parentNode) p.push([h, r]), u = h;
								u && u === e.ownerDocument && p.push([u.defaultView || u.parentWindow || l, r])
							}
							for (r = 0; r < p.length && !a.isPropagationStopped(); r++) h = p[r][0], a.type = p[r][1], (k = (c._data(h, "events") || {})[a.type] && c._data(h, "handle")) && k.apply(h, b), (k = n && h[n]) && c.acceptData(h) && !1 === k.apply(h, b) && a.preventDefault();
							a.type = f;
							!(d || a.isDefaultPrevented() || m._default && !1 !== m._default.apply(e.ownerDocument, b) || "click" === f && c.nodeName(e, "a")) && c.acceptData(e) && n && e[f] && ("focus" !== f && "blur" !== f || 0 !== a.target.offsetWidth) && !c.isWindow(e) && (u = e[n], u && (e[n] = null), c.event.triggered = f, e[f](), c.event.triggered = g, u && (e[n] = u));
							return a.result
						}
					} else
						for (r in e = c.cache, e) e[r].events && e[r].events[f] && c.event.trigger(a, b, e[r].handle.elem, !0)
			}
		},
		dispatch: function(a) {
			a = c.event.fix(a || l.event);
			var b = (c._data(this, "events") || {})[a.type] || [],
				e = b.delegateCount,
				d = [].slice.call(arguments, 0),
				f = !a.exclusive && !a.namespace,
				h = [],
				n, k;
			d[0] = a;
			a.delegateTarget = this;
			if (e && !a.target.disabled && (!a.button || "click" !== a.type)) {
				var m = c(this);
				m.context = this.ownerDocument || this;
				for (k = a.target; k != this; k = k.parentNode || this) {
					var p = {};
					var q = [];
					m[0] = k;
					for (n = 0; n < e; n++) {
						var r = b[n];
						var v = r.selector;
						if (p[v] === g) {
							var w = p,
								x = v;
							if (r.quick) {
								var C = r.quick;
								var B = k.attributes || {};
								C = (!C[1] || k.nodeName.toLowerCase() === C[1]) && (!C[2] || (B.id || {}).value === C[2]) && (!C[3] || C[3].test((B["class"] || {}).value))
							} else C = m.is(v);
							w[x] = C
						}
						p[v] && q.push(r)
					}
					q.length && h.push({
						elem: k,
						matches: q
					})
				}
			}
			b.length > e && h.push({
				elem: this,
				matches: b.slice(e)
			});
			for (n = 0; n < h.length && !a.isPropagationStopped(); n++)
				for (e = h[n], a.currentTarget = e.elem, b = 0; b < e.matches.length && !a.isImmediatePropagationStopped(); b++)
					if (r = e.matches[b], f || !a.namespace && !r.namespace || a.namespace_re && a.namespace_re.test(r.namespace)) a.data = r.data, a.handleObj = r, r = ((c.event.special[r.origType] || {}).handle || r.handler).apply(e.elem, d), r !== g && (a.result = r, !1 === r && (a.preventDefault(), a.stopPropagation()));
			return a.result
		},
		props: "attrChange attrName relatedNode srcElement altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
		fixHooks: {},
		keyHooks: {
			props: ["char", "charCode", "key", "keyCode"],
			filter: function(a, b) {
				null == a.which && (a.which = null != b.charCode ? b.charCode : b.keyCode);
				return a
			}
		},
		mouseHooks: {
			props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
			filter: function(a, b) {
				var c, d, f, h = b.button,
					n = b.fromElement;
				null == a.pageX && null != b.clientX && (c = a.target.ownerDocument || q, d = c.documentElement, f = c.body, a.pageX = b.clientX + (d && d.scrollLeft || f && f.scrollLeft || 0) - (d && d.clientLeft || f && f.clientLeft || 0), a.pageY = b.clientY + (d && d.scrollTop || f && f.scrollTop || 0) - (d && d.clientTop || f && f.clientTop || 0));
				!a.relatedTarget && n && (a.relatedTarget = n === a.target ? b.toElement : n);
				!a.which && h !== g && (a.which = h & 1 ? 1 : h & 2 ? 3 : h & 4 ? 2 : 0);
				return a
			}
		},
		fix: function(a) {
			if (a[c.expando]) return a;
			var b,
				e = a,
				d = c.event.fixHooks[a.type] || {},
				f = d.props ? this.props.concat(d.props) : this.props;
			a = c.Event(e);
			for (b = f.length; b;) {
				var h = f[--b];
				a[h] = e[h]
			}
			a.target || (a.target = e.srcElement || q);
			3 === a.target.nodeType && (a.target = a.target.parentNode);
			a.metaKey === g && (a.metaKey = a.ctrlKey);
			return d.filter ? d.filter(a, e) : a
		},
		special: {
			ready: {
				setup: c.bindReady
			},
			load: {
				noBubble: !0
			},
			focus: {
				delegateType: "focusin"
			},
			blur: {
				delegateType: "focusout"
			},
			beforeunload: {
				setup: function(a, b, e) {
					c.isWindow(this) && (this.onbeforeunload = e)
				},
				teardown: function(a, b) {
					this.onbeforeunload === b && (this.onbeforeunload = null)
				}
			}
		},
		simulate: function(a, b, e, d) {
			a = c.extend(new c.Event, e, {
				type: a,
				isSimulated: !0,
				originalEvent: {}
			});
			d ? c.event.trigger(a, null, b) : c.event.dispatch.call(b, a);
			a.isDefaultPrevented() && e.preventDefault()
		}
	};
	c.event.handle = c.event.dispatch;
	c.removeEvent = q.removeEventListener ? function(a, b, c) {
		a.removeEventListener && a.removeEventListener(b, c, !1)
	} : function(a, b, c) {
		a.detachEvent && a.detachEvent("on" + b, c)
	};
	c.Event = function(a, b) {
		if (!(this instanceof c.Event)) return new c.Event(a, b);
		a && a.type ? (this.originalEvent = a, this.type = a.type, this.isDefaultPrevented = a.defaultPrevented || !1 === a.returnValue || a.getPreventDefault && a.getPreventDefault() ? ca : S) : this.type = a;
		b && c.extend(this, b);
		this.timeStamp = a && a.timeStamp || c.now();
		this[c.expando] = !0
	};
	c.Event.prototype = {
		preventDefault: function() {
			this.isDefaultPrevented = ca;
			var a = this.originalEvent;
			!a || (a.preventDefault ? a.preventDefault() : a.returnValue = !1)
		},
		stopPropagation: function() {
			this.isPropagationStopped = ca;
			var a = this.originalEvent;
			!a || (a.stopPropagation && a.stopPropagation(), a.cancelBubble = !0)
		},
		stopImmediatePropagation: function() {
			this.isImmediatePropagationStopped = ca;
			this.stopPropagation()
		},
		isDefaultPrevented: S,
		isPropagationStopped: S,
		isImmediatePropagationStopped: S
	};
	c.each({
		mouseenter: "mouseover",
		mouseleave: "mouseout"
	}, function(a, b) {
		c.event.special[a] = {
			delegateType: b,
			bindType: b,
			handle: function(a) {
				var d = a.relatedTarget,
					e = a.handleObj;
				if (!d || d !== this && !c.contains(this, d)) {
					a.type = e.origType;
					var h = e.handler.apply(this, arguments);
					a.type = b
				}
				return h
			}
		}
	});
	c.support.submitBubbles || (c.event.special.submit = {
		setup: function() {
			if (c.nodeName(this, "form")) return !1;
			c.event.add(this, "click._submit keypress._submit", function(a) {
				a = a.target;
				(a = c.nodeName(a, "input") || c.nodeName(a, "button") ? a.form : g) && !a._submit_attached && (c.event.add(a, "submit._submit", function(a) {
					this.parentNode && !a.isTrigger && c.event.simulate("submit", this.parentNode, a, !0)
				}), a._submit_attached = !0)
			})
		},
		teardown: function() {
			if (c.nodeName(this, "form")) return !1;
			c.event.remove(this, "._submit")
		}
	});
	c.support.changeBubbles || (c.event.special.change = {
		setup: function() {
			if (na.test(this.nodeName)) {
				if ("checkbox" === this.type || "radio" === this.type) c.event.add(this, "propertychange._change", function(a) {
					"checked" === a.originalEvent.propertyName && (this._just_changed = !0)
				}), c.event.add(this, "click._change", function(a) {
					this._just_changed && !a.isTrigger && (this._just_changed = !1, c.event.simulate("change", this, a, !0))
				});
				return !1
			}
			c.event.add(this, "beforeactivate._change", function(a) {
				a = a.target;
				na.test(a.nodeName) && !a._change_attached && (c.event.add(a, "change._change", function(a) {
					this.parentNode && !a.isSimulated && !a.isTrigger && c.event.simulate("change", this.parentNode, a, !0)
				}), a._change_attached = !0)
			})
		},
		handle: function(a) {
			var b = a.target;
			if (this !== b || a.isSimulated || a.isTrigger || "radio" !== b.type && "checkbox" !== b.type) return a.handleObj.handler.apply(this, arguments)
		},
		teardown: function() {
			c.event.remove(this, "._change");
			return na.test(this.nodeName)
		}
	});
	c.support.focusinBubbles || c.each({
		focus: "focusin",
		blur: "focusout"
	}, function(a, b) {
		var e = 0,
			d = function(a) {
				c.event.simulate(b, a.target, c.event.fix(a), !0)
			};
		c.event.special[b] = {
			setup: function() {
				0 === e++ && q.addEventListener(a, d, !0)
			},
			teardown: function() {
				0 === --e && q.removeEventListener(a, d, !0)
			}
		}
	});
	c.fn.extend({
		on: function(a, b, e, d, f) {
			var h, n;
			if ("object" == typeof a) {
				"string" != typeof b && (e = b, b = g);
				for (n in a) this.on(n, b, e, a[n], f);
				return this
			}
			null == e && null == d ? (d = b, e = b = g) : null == d && ("string" == typeof b ? (d = e, e = g) : (d = e, e = b, b = g));
			if (!1 === d) d = S;
			else if (!d) return this;
			1 === f && (h = d, d = function(a) {
				c().off(a);
				return h.apply(this, arguments)
			}, d.guid = h.guid || (h.guid = c.guid++));
			return this.each(function() {
				c.event.add(this, a, d, e, b)
			})
		},
		one: function(a, b, c, d) {
			return this.on.call(this, a, b, c, d, 1)
		},
		off: function(a, b, e) {
			if (a && a.preventDefault && a.handleObj) {
				var d = a.handleObj;
				c(a.delegateTarget).off(d.namespace ? d.type + "." + d.namespace : d.type, d.selector, d.handler);
				return this
			}
			if ("object" == typeof a) {
				for (d in a) this.off(d, b, a[d]);
				return this
			}
			if (!1 === b || "function" == typeof b) e = b, b = g;
			!1 === e && (e = S);
			return this.each(function() {
				c.event.remove(this, a, e, b)
			})
		},
		bind: function(a, b, c) {
			return this.on(a, null, b, c)
		},
		unbind: function(a, b) {
			return this.off(a, null, b)
		},
		live: function(a, b, e) {
			c(this.context).on(a, this.selector, b, e);
			return this
		},
		die: function(a, b) {
			c(this.context).off(a, this.selector || "**", b);
			return this
		},
		delegate: function(a, b, c, d) {
			return this.on(b, a, c, d)
		},
		undelegate: function(a, b, c) {
			return 1 == arguments.length ? this.off(a, "**") : this.off(b, a, c)
		},
		trigger: function(a, b) {
			return this.each(function() {
				c.event.trigger(a, b, this)
			})
		},
		triggerHandler: function(a, b) {
			if (this[0]) return c.event.trigger(a, b, this[0], !0)
		},
		toggle: function(a) {
			var b = arguments,
				e = a.guid || c.guid++,
				d = 0,
				f = function(e) {
					var f = (c._data(this, "lastToggle" + a.guid) || 0) % d;
					c._data(this, "lastToggle" + a.guid, f + 1);
					e.preventDefault();
					return b[f].apply(this, arguments) || !1
				};
			for (f.guid = e; d < b.length;) b[d++].guid = e;
			return this.click(f)
		},
		hover: function(a, b) {
			return this.mouseenter(a).mouseleave(b || a)
		}
	});
	c.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(a, b) {
		c.fn[b] = function(a, c) {
			null == c && (c = a, a = null);
			return 0 < arguments.length ? this.on(b, null, a, c) : this.trigger(b)
		};
		c.attrFn && (c.attrFn[b] = !0);
		vb.test(b) && (c.event.fixHooks[b] = c.event.keyHooks);
		wb.test(b) && (c.event.fixHooks[b] = c.event.mouseHooks)
	});
	(function() {
		function a(a, b, c, e, f, h) {
			f = 0;
			for (var g = e.length; f < g; f++) {
				var t = e[f];
				if (t) {
					var n = !1;
					for (t = t[a]; t;) {
						if (t[d] === c) {
							n = e[t.sizset];
							break
						}
						if (1 === t.nodeType)
							if (h || (t[d] = c, t.sizset = f), "string" != typeof b) {
								if (t === b) {
									n = !0;
									break
								}
							} else if (0 < r.filter(b, [t]).length) {
							n = t;
							break
						}
						t = t[a]
					}
					e[f] = n
				}
			}
		}

		function b(a, b, c, e, f, h) {
			f = 0;
			for (var g = e.length; f < g; f++) {
				var t = e[f];
				if (t) {
					var n = !1;
					for (t = t[a]; t;) {
						if (t[d] === c) {
							n = e[t.sizset];
							break
						}
						1 === t.nodeType && !h && (t[d] = c, t.sizset = f);
						if (t.nodeName.toLowerCase() === b) {
							n = t;
							break
						}
						t = t[a]
					}
					e[f] = n
				}
			}
		}
		var e = /((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^\[\]]*\]|['"][^'"]*['"]|[^\[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g,
			d = "sizcache" + (Math.random() + "").replace(".", ""),
			f = 0,
			h = Object.prototype.toString,
			n = !1,
			k = !0,
			l = /\\/g,
			m = /\r\n/g,
			p = /\W/;
		[0, 0].sort(function() {
			k = !1;
			return 0
		});
		var r = function(a, b, c, d) {
			c = c || [];
			var f = b = b || q;
			if (1 !== b.nodeType && 9 !== b.nodeType) return [];
			if (!a || "string" != typeof a) return c;
			var g, t, n, D, k = !0,
				u = r.isXML(b),
				l = [],
				m = a;
			do
				if (e.exec(""), g = e.exec(m))
					if (m = g[3], l.push(g[1]), g[2]) {
						var p = g[3];
						break
					}
			while (g);
			if (1 < l.length && x.exec(a))
				if (2 === l.length && w.relative[l[0]]) var K = E(l[0] + l[1], b, d);
				else
					for (K = w.relative[l[0]] ? [b] : r(l.shift(), b); l.length;) a = l.shift(), w.relative[a] && (a += l.shift()), K = E(a, K, d);
			else if (!d && 1 < l.length && 9 === b.nodeType && !u && w.match.ID.test(l[0]) && !w.match.ID.test(l[l.length - 1]) && (n = r.find(l.shift(), b, u), b = n.expr ? r.filter(n.expr, n.set)[0] : n.set[0]), b)
				for (n = d ? {
						expr: l.pop(),
						set: A(d)
					} : r.find(l.pop(), 1 !== l.length || "~" !== l[0] && "+" !== l[0] || !b.parentNode ? b : b.parentNode, u), K = n.expr ? r.filter(n.expr, n.set) : n.set, 0 < l.length ? t = A(K) : k = !1; l.length;) g = D = l.pop(), w.relative[D] ? g = l.pop() : D = "", null == g && (g = b), w.relative[D](t, g, u);
			else t = [];
			t || (t = K);
			t || r.error(D || a);
			if ("[object Array]" === h.call(t))
				if (k)
					if (b && 1 === b.nodeType)
						for (a = 0; null != t[a]; a++) t[a] && (!0 === t[a] || 1 === t[a].nodeType && r.contains(b, t[a])) && c.push(K[a]);
					else
						for (a = 0; null != t[a]; a++) t[a] && 1 === t[a].nodeType && c.push(K[a]);
			else c.push.apply(c, t);
			else A(t, c);
			p && (r(p, f, c, d), r.uniqueSort(c));
			return c
		};
		r.uniqueSort = function(a) {
			if (z && (n = k, a.sort(z), n))
				for (var b = 1; b < a.length; b++) a[b] === a[b - 1] && a.splice(b--, 1);
			return a
		};
		r.matches = function(a, b) {
			return r(a, null, null, b)
		};
		r.matchesSelector = function(a, b) {
			return 0 < r(b, null, null, [a]).length
		};
		r.find = function(a, b, c) {
			var d, e;
			if (!a) return [];
			var f = 0;
			for (d = w.order.length; f < d; f++) {
				var h = w.order[f];
				if (e = w.leftMatch[h].exec(a)) {
					var g = e[1];
					e.splice(1, 1);
					if ("\\" !== g.substr(g.length - 1)) {
						e[1] = (e[1] || "").replace(l, "");
						var t = w.find[h](e, b, c);
						if (null != t) {
							a = a.replace(w.match[h], "");
							break
						}
					}
				}
			}
			t || (t = "undefined" != typeof b.getElementsByTagName ? b.getElementsByTagName("*") : []);
			return {
				set: t,
				expr: a
			}
		};
		r.filter = function(a, b, c, d) {
			for (var e, f, h, t, n, D, k, l, u = a, m = [], p = b, K = b && b[0] && r.isXML(b[0]); a && b.length;) {
				for (h in w.filter)
					if (null != (e = w.leftMatch[h].exec(a)) && e[2] && (D = w.filter[h], n = e[1], f = !1, e.splice(1, 1), "\\" !== n.substr(n.length - 1))) {
						p === m && (m = []);
						if (w.preFilter[h])
							if (e = w.preFilter[h](e, p, c, m, d, K), !e) f = t = !0;
							else if (!0 === e) continue;
						if (e)
							for (k = 0; null != (n = p[k]); k++) n && (t = D(n, e, k, p), l = d ^ t, c && null != t ? l ? f = !0 : p[k] = !1 : l && (m.push(n), f = !0));
						if (t !== g) {
							c || (p = m);
							a = a.replace(w.match[h], "");
							if (!f) return [];
							break
						}
					}
				if (a === u)
					if (null == f) r.error(a);
					else break;
				u = a
			}
			return p
		};
		r.error = function(a) {
			throw Error("Syntax error, unrecognized expression: " + a);
		};
		var v = r.getText = function(a) {
				var b;
				var c = a.nodeType;
				var d = "";
				if (c)
					if (1 === c || 9 === c) {
						if ("string" == typeof a.textContent) return a.textContent;
						if ("string" == typeof a.innerText) return a.innerText.replace(m, "");
						for (a = a.firstChild; a; a = a.nextSibling) d += v(a)
					} else {
						if (3 === c || 4 === c) return a.nodeValue
					}
				else
					for (c = 0; b = a[c]; c++) 8 !== b.nodeType && (d += v(b));
				return d
			},
			w = r.selectors = {
				order: ["ID", "NAME", "TAG"],
				match: {
					ID: /#((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,
					CLASS: /\.((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,
					NAME: /\[name=['"]*((?:[\w\u00c0-\uFFFF\-]|\\.)+)['"]*\]/,
					ATTR: /\[\s*((?:[\w\u00c0-\uFFFF\-]|\\.)+)\s*(?:(\S?=)\s*(?:(['"])(.*?)\3|(#?(?:[\w\u00c0-\uFFFF\-]|\\.)*)|)|)\s*\]/,
					TAG: /^((?:[\w\u00c0-\uFFFF\*\-]|\\.)+)/,
					CHILD: /:(only|nth|last|first)-child(?:\(\s*(even|odd|(?:[+\-]?\d+|(?:[+\-]?\d*)?n\s*(?:[+\-]\s*\d+)?))\s*\))?/,
					POS: /:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^\-]|$)/,
					PSEUDO: /:((?:[\w\u00c0-\uFFFF\-]|\\.)+)(?:\((['"]?)((?:\([^\)]+\)|[^\(\)]*)+)\2\))?/
				},
				leftMatch: {},
				attrMap: {
					"class": "className",
					"for": "htmlFor"
				},
				attrHandle: {
					href: function(a) {
						return a.getAttribute("href")
					},
					type: function(a) {
						return a.getAttribute("type")
					}
				},
				relative: {
					"+": function(a, b) {
						var c = "string" == typeof b,
							d = c && !p.test(b);
						c = c && !d;
						d && (b = b.toLowerCase());
						d = 0;
						for (var e = a.length, f; d < e; d++)
							if (f = a[d]) {
								for (;
									(f = f.previousSibling) && 1 !== f.nodeType;);
								a[d] = c || f && f.nodeName.toLowerCase() === b ? f || !1 : f === b
							}
						c && r.filter(b, a, !0)
					},
					"\x3e": function(a, b) {
						var c, d = "string" == typeof b,
							e = 0,
							f = a.length;
						if (d && !p.test(b))
							for (b = b.toLowerCase(); e < f; e++) {
								if (c = a[e]) c = c.parentNode, a[e] = c.nodeName.toLowerCase() === b ? c : !1
							} else {
								for (; e < f; e++)(c = a[e]) && (a[e] = d ? c.parentNode : c.parentNode === b);
								d && r.filter(b, a, !0)
							}
					},
					"": function(c, d, e) {
						var h, g = f++,
							n = a;
						"string" == typeof d && !p.test(d) && (d = d.toLowerCase(), h = d, n = b);
						n("parentNode", d, g, c, h, e)
					},
					"~": function(c, d, e) {
						var h, g = f++,
							n = a;
						"string" == typeof d && !p.test(d) && (d = d.toLowerCase(), h = d, n = b);
						n("previousSibling", d, g, c, h, e)
					}
				},
				find: {
					ID: function(a, b, c) {
						if ("undefined" != typeof b.getElementById && !c) return (a = b.getElementById(a[1])) && a.parentNode ? [a] : []
					},
					NAME: function(a, b) {
						if ("undefined" != typeof b.getElementsByName) {
							for (var c = [], d = b.getElementsByName(a[1]), e = 0, f = d.length; e < f; e++) d[e].getAttribute("name") === a[1] && c.push(d[e]);
							return 0 === c.length ? null : c
						}
					},
					TAG: function(a, b) {
						if ("undefined" != typeof b.getElementsByTagName) return b.getElementsByTagName(a[1])
					}
				},
				preFilter: {
					CLASS: function(a, b, c, d, e, f) {
						a = " " + a[1].replace(l, "") + " ";
						if (f) return a;
						f = 0;
						for (var h; null != (h = b[f]); f++) h && (e ^ (h.className && 0 <= (" " + h.className + " ").replace(/[\t\n\r]/g, " ").indexOf(a)) ? c || d.push(h) : c && (b[f] = !1));
						return !1
					},
					ID: function(a) {
						return a[1].replace(l, "")
					},
					TAG: function(a, b) {
						return a[1].replace(l, "").toLowerCase()
					},
					CHILD: function(a) {
						if ("nth" === a[1]) {
							a[2] || r.error(a[0]);
							a[2] = a[2].replace(/^\+|\s*/g, "");
							var b = /(-?)(\d*)(?:n([+\-]?\d*))?/.exec("even" === a[2] && "2n" || "odd" === a[2] && "2n+1" || !/\D/.test(a[2]) && "0n+" + a[2] || a[2]);
							a[2] = b[1] + (b[2] || 1) - 0;
							a[3] = b[3] - 0
						} else a[2] && r.error(a[0]);
						a[0] = f++;
						return a
					},
					ATTR: function(a, b, c, d, e, f) {
						b = a[1] = a[1].replace(l, "");
						!f && w.attrMap[b] && (a[1] = w.attrMap[b]);
						a[4] = (a[4] || a[5] || "").replace(l, "");
						"~\x3d" === a[2] && (a[4] = " " + a[4] + " ");
						return a
					},
					PSEUDO: function(a, b, c, d, f) {
						if ("not" === a[1])
							if (1 < (e.exec(a[3]) || "").length || /^\w/.test(a[3])) a[3] = r(a[3], null, null, b);
							else return a = r.filter(a[3], b, c, 1 ^ f), c || d.push.apply(d, a), !1;
						else if (w.match.POS.test(a[0]) || w.match.CHILD.test(a[0])) return !0;
						return a
					},
					POS: function(a) {
						a.unshift(!0);
						return a
					}
				},
				filters: {
					enabled: function(a) {
						return !1 === a.disabled && "hidden" !== a.type
					},
					disabled: function(a) {
						return !0 === a.disabled
					},
					checked: function(a) {
						return !0 === a.checked
					},
					selected: function(a) {
						a.parentNode && a.parentNode.selectedIndex;
						return !0 === a.selected
					},
					parent: function(a) {
						return !!a.firstChild
					},
					empty: function(a) {
						return !a.firstChild
					},
					has: function(a, b, c) {
						return !!r(c[3], a).length
					},
					header: function(a) {
						return /h\d/i.test(a.nodeName)
					},
					text: function(a) {
						var b = a.getAttribute("type"),
							c = a.type;
						return "input" === a.nodeName.toLowerCase() && "text" === c && (b === c || null === b)
					},
					radio: function(a) {
						return "input" === a.nodeName.toLowerCase() && "radio" === a.type
					},
					checkbox: function(a) {
						return "input" === a.nodeName.toLowerCase() && "checkbox" === a.type
					},
					file: function(a) {
						return "input" === a.nodeName.toLowerCase() && "file" === a.type
					},
					password: function(a) {
						return "input" === a.nodeName.toLowerCase() && "password" === a.type
					},
					submit: function(a) {
						var b = a.nodeName.toLowerCase();
						return ("input" === b || "button" === b) && "submit" === a.type
					},
					image: function(a) {
						return "input" === a.nodeName.toLowerCase() && "image" === a.type
					},
					reset: function(a) {
						var b = a.nodeName.toLowerCase();
						return ("input" === b || "button" === b) && "reset" === a.type
					},
					button: function(a) {
						var b = a.nodeName.toLowerCase();
						return "input" === b && "button" === a.type || "button" === b
					},
					input: function(a) {
						return /input|select|textarea|button/i.test(a.nodeName)
					},
					focus: function(a) {
						return a === a.ownerDocument.activeElement
					}
				},
				setFilters: {
					first: function(a, b) {
						return 0 === b
					},
					last: function(a, b, c, d) {
						return b === d.length - 1
					},
					even: function(a, b) {
						return 0 === b % 2
					},
					odd: function(a, b) {
						return 1 === b % 2
					},
					lt: function(a, b, c) {
						return b < c[3] - 0
					},
					gt: function(a, b, c) {
						return b > c[3] - 0
					},
					nth: function(a, b, c) {
						return c[3] - 0 === b
					},
					eq: function(a, b, c) {
						return c[3] - 0 === b
					}
				},
				filter: {
					PSEUDO: function(a, b, c, d) {
						var e = b[1],
							f = w.filters[e];
						if (f) return f(a, c, b, d);
						if ("contains" === e) return 0 <= (a.textContent || a.innerText || v([a]) || "").indexOf(b[3]);
						if ("not" === e) {
							b = b[3];
							c = 0;
							for (d = b.length; c < d; c++)
								if (b[c] === a) return !1;
							return !0
						}
						r.error(e)
					},
					CHILD: function(a, b) {
						var c;
						var e = b[1];
						var f = a;
						switch (e) {
							case "only":
							case "first":
								for (; f = f.previousSibling;)
									if (1 === f.nodeType) return !1;
								if ("first" === e) return !0;
								f = a;
							case "last":
								for (; f = f.nextSibling;)
									if (1 === f.nodeType) return !1;
								return !0;
							case "nth":
								e = b[2];
								var h = b[3];
								if (1 === e && 0 === h) return !0;
								var g = b[0];
								if ((c = a.parentNode) && (c[d] !== g || !a.nodeIndex)) {
									var n = 0;
									for (f = c.firstChild; f; f = f.nextSibling) 1 === f.nodeType && (f.nodeIndex = ++n);
									c[d] = g
								}
								f = a.nodeIndex - h;
								return 0 === e ? 0 === f : 0 === f % e && 0 <= f / e
						}
					},
					ID: function(a, b) {
						return 1 === a.nodeType && a.getAttribute("id") === b
					},
					TAG: function(a, b) {
						return "*" === b && 1 === a.nodeType || !!a.nodeName && a.nodeName.toLowerCase() === b
					},
					CLASS: function(a, b) {
						return -1 < (" " + (a.className || a.getAttribute("class")) + " ").indexOf(b)
					},
					ATTR: function(a, b) {
						var c = b[1];
						c = r.attr ? r.attr(a, c) : w.attrHandle[c] ? w.attrHandle[c](a) : null != a[c] ? a[c] : a.getAttribute(c);
						var d = c + "",
							e = b[2],
							f = b[4];
						return null == c ? "!\x3d" === e : !e && r.attr ? null != c : "\x3d" === e ? d === f : "*\x3d" === e ? 0 <= d.indexOf(f) : "~\x3d" === e ? 0 <= (" " + d + " ").indexOf(f) : f ? "!\x3d" === e ? d !== f : "^\x3d" === e ? 0 === d.indexOf(f) : "$\x3d" === e ? d.substr(d.length - f.length) === f : "|\x3d" === e ? d === f || d.substr(0, f.length + 1) === f + "-" : !1 : d && !1 !== c
					},
					POS: function(a, b, c, d) {
						var e = w.setFilters[b[2]];
						if (e) return e(a, c, b, d)
					}
				}
			},
			x = w.match.POS,
			C = function(a, b) {
				return "\\" + (b - 0 + 1)
			},
			B;
		for (B in w.match) w.match[B] = new RegExp(w.match[B].source + /(?![^\[]*\])(?![^\(]*\))/.source), w.leftMatch[B] = new RegExp(/(^(?:.|\r|\n)*?)/.source + w.match[B].source.replace(/\\(\d+)/g, C));
		var A = function(a, b) {
			a = Array.prototype.slice.call(a, 0);
			return b ? (b.push.apply(b, a), b) : a
		};
		try {
			Array.prototype.slice.call(q.documentElement.childNodes, 0)[0].nodeType
		} catch (t) {
			A = function(a, b) {
				var c = 0,
					d = b || [];
				if ("[object Array]" === h.call(a)) Array.prototype.push.apply(d, a);
				else if ("number" == typeof a.length)
					for (var e = a.length; c < e; c++) d.push(a[c]);
				else
					for (; a[c]; c++) d.push(a[c]);
				return d
			}
		}
		var z, J;
		q.documentElement.compareDocumentPosition ? z = function(a, b) {
			return a === b ? (n = !0, 0) : a.compareDocumentPosition && b.compareDocumentPosition ? a.compareDocumentPosition(b) & 4 ? -1 : 1 : a.compareDocumentPosition ? -1 : 1
		} : (z = function(a, b) {
			if (a === b) return n = !0, 0;
			if (a.sourceIndex && b.sourceIndex) return a.sourceIndex - b.sourceIndex;
			var c = [],
				d = [];
			var e = a.parentNode;
			var f = b.parentNode;
			var h = e;
			if (e === f) return J(a, b);
			if (!e) return -1;
			if (!f) return 1;
			for (; h;) c.unshift(h), h = h.parentNode;
			for (h = f; h;) d.unshift(h), h = h.parentNode;
			e = c.length;
			f = d.length;
			for (h = 0; h < e && h < f; h++)
				if (c[h] !== d[h]) return J(c[h], d[h]);
			return h === e ? J(a, d[h], -1) : J(c[h], b, 1)
		}, J = function(a, b, c) {
			if (a === b) return c;
			for (a = a.nextSibling; a;) {
				if (a === b) return -1;
				a = a.nextSibling
			}
			return 1
		});
		(function() {
			var a = q.createElement("div"),
				b = "script" + (new Date).getTime(),
				c = q.documentElement;
			a.innerHTML = "\x3ca name\x3d'" + b + "'/\x3e";
			c.insertBefore(a, c.firstChild);
			q.getElementById(b) && (w.find.ID = function(a, b, c) {
				if ("undefined" != typeof b.getElementById && !c) return (b = b.getElementById(a[1])) ? b.id === a[1] || "undefined" != typeof b.getAttributeNode && b.getAttributeNode("id").nodeValue === a[1] ? [b] : g : []
			}, w.filter.ID = function(a, b) {
				var c = "undefined" != typeof a.getAttributeNode && a.getAttributeNode("id");
				return 1 === a.nodeType && c && c.nodeValue === b
			});
			c.removeChild(a);
			c = a = null
		})();
		(function() {
			var a = q.createElement("div");
			a.appendChild(q.createComment(""));
			0 < a.getElementsByTagName("*").length && (w.find.TAG = function(a, b) {
				var c = b.getElementsByTagName(a[1]);
				if ("*" === a[1]) {
					for (var d = [], e = 0; c[e]; e++) 1 === c[e].nodeType && d.push(c[e]);
					c = d
				}
				return c
			});
			a.innerHTML = "\x3ca href\x3d'#'\x3e\x3c/a\x3e";
			a.firstChild && "undefined" != typeof a.firstChild.getAttribute && "#" !== a.firstChild.getAttribute("href") && (w.attrHandle.href = function(a) {
				return a.getAttribute("href", 2)
			});
			a = null
		})();
		q.querySelectorAll && function() {
			var a = r,
				b = q.createElement("div");
			b.innerHTML = "\x3cp class\x3d'TEST'\x3e\x3c/p\x3e";
			if (!b.querySelectorAll || 0 !== b.querySelectorAll(".TEST").length) {
				r = function(b, c, d, e) {
					c = c || q;
					if (!e && !r.isXML(c)) {
						var f = /^(\w+$)|^\.([\w\-]+$)|^#([\w\-]+$)/.exec(b);
						if (f && (1 === c.nodeType || 9 === c.nodeType)) {
							if (f[1]) return A(c.getElementsByTagName(b), d);
							if (f[2] && w.find.CLASS && c.getElementsByClassName) return A(c.getElementsByClassName(f[2]), d)
						}
						if (9 === c.nodeType) {
							if ("body" === b && c.body) return A([c.body], d);
							if (f && f[3]) {
								var h = c.getElementById(f[3]);
								if (!h || !h.parentNode) return A([], d);
								if (h.id === f[3]) return A([h], d)
							}
							try {
								return A(c.querySelectorAll(b), d)
							} catch (Ga) {}
						} else if (1 === c.nodeType && "object" !== c.nodeName.toLowerCase()) {
							f = c;
							var g = (h = c.getAttribute("id")) || "__sizzle__",
								n = c.parentNode,
								k = /^\s*[+~]/.test(b);
							h ? g = g.replace(/'/g, "\\$\x26") : c.setAttribute("id", g);
							k && n && (c = c.parentNode);
							try {
								if (!k || n) return A(c.querySelectorAll("[id\x3d'" + g + "'] " + b), d)
							} catch (Ga) {} finally {
								h || f.removeAttribute("id")
							}
						}
					}
					return a(b, c, d, e)
				};
				for (var c in a) r[c] = a[c];
				b = null
			}
		}();
		(function() {
			var a = q.documentElement,
				b = a.matchesSelector || a.mozMatchesSelector || a.webkitMatchesSelector || a.msMatchesSelector;
			if (b) {
				var c = !b.call(q.createElement("div"), "div"),
					d = !1;
				try {
					b.call(q.documentElement, "[test!\x3d'']:sizzle")
				} catch (da) {
					d = !0
				}
				r.matchesSelector = function(a, e) {
					e = e.replace(/\=\s*([^'"\]]*)\s*\]/g, "\x3d'$1']");
					if (!r.isXML(a)) try {
						if (d || !w.match.PSEUDO.test(e) && !/!=/.test(e)) {
							var f = b.call(a, e);
							if (f || !c || a.document && 11 !== a.document.nodeType) return f
						}
					} catch (la) {}
					return 0 < r(e, null, null, [a]).length
				}
			}
		})();
		(function() {
			var a = q.createElement("div");
			a.innerHTML = "\x3cdiv class\x3d'test e'\x3e\x3c/div\x3e\x3cdiv class\x3d'test'\x3e\x3c/div\x3e";
			a.getElementsByClassName && 0 !== a.getElementsByClassName("e").length && (a.lastChild.className = "e", 1 !== a.getElementsByClassName("e").length && (w.order.splice(1, 0, "CLASS"), w.find.CLASS = function(a, b, c) {
				if ("undefined" != typeof b.getElementsByClassName && !c) return b.getElementsByClassName(a[1])
			}, a = null))
		})();
		q.documentElement.contains ? r.contains = function(a, b) {
			return a !== b && (a.contains ? a.contains(b) : !0)
		} : q.documentElement.compareDocumentPosition ? r.contains = function(a, b) {
			return !!(a.compareDocumentPosition(b) & 16)
		} : r.contains = function() {
			return !1
		};
		r.isXML = function(a) {
			return (a = (a ? a.ownerDocument || a : 0).documentElement) ? "HTML" !== a.nodeName : !1
		};
		var E = function(a, b, c) {
			var d, e = [],
				f = "";
			for (b = b.nodeType ? [b] : b; d = w.match.PSEUDO.exec(a);) f += d[0], a = a.replace(w.match.PSEUDO, "");
			a = w.relative[a] ? a + "*" : a;
			d = 0;
			for (var h = b.length; d < h; d++) r(a, b[d], e, c);
			return r.filter(f, e)
		};
		r.attr = c.attr;
		r.selectors.attrMap = {};
		c.find = r;
		c.expr = r.selectors;
		c.expr[":"] = c.expr.filters;
		c.unique = r.uniqueSort;
		c.text = r.getText;
		c.isXMLDoc = r.isXML;
		c.contains = r.contains
	})();
	var zb = /Until$/,
		Ab = /^(?:parents|prevUntil|prevAll)/,
		Bb = /,/,
		ib = /^.[^:#\[\.,]*$/,
		Cb = Array.prototype.slice,
		Oa = c.expr.match.POS,
		Db = {
			children: !0,
			contents: !0,
			next: !0,
			prev: !0
		};
	c.fn.extend({
		find: function(a) {
			var b = this,
				e;
			if ("string" != typeof a) return c(a).filter(function() {
				g = 0;
				for (e = b.length; g < e; g++)
					if (c.contains(b[g], this)) return !0
			});
			var d = this.pushStack("", "find", a),
				f, h;
			var g = 0;
			for (e = this.length; g < e; g++) {
				var k = d.length;
				c.find(a, this[g], d);
				if (0 < g)
					for (f = k; f < d.length; f++)
						for (h = 0; h < k; h++)
							if (d[h] === d[f]) {
								d.splice(f--, 1);
								break
							}
			}
			return d
		},
		has: function(a) {
			var b = c(a);
			return this.filter(function() {
				for (var a = 0, d = b.length; a < d; a++)
					if (c.contains(this, b[a])) return !0
			})
		},
		not: function(a) {
			return this.pushStack(za(this, a, !1), "not", a)
		},
		filter: function(a) {
			return this.pushStack(za(this, a, !0), "filter", a)
		},
		is: function(a) {
			return !!a && ("string" == typeof a ? Oa.test(a) ? 0 <= c(a, this.context).index(this[0]) : 0 < c.filter(a, this).length : 0 < this.filter(a).length)
		},
		closest: function(a, b) {
			var e = [],
				d, f, h = this[0];
			if (c.isArray(a)) {
				for (f = 1; h && h.ownerDocument && h !== b;) {
					for (d = 0; d < a.length; d++) c(h).is(a[d]) && e.push({
						selector: a[d],
						elem: h,
						level: f
					});
					h = h.parentNode;
					f++
				}
				return e
			}
			var g = Oa.test(a) || "string" != typeof a ? c(a, b || this.context) : 0;
			d = 0;
			for (f = this.length; d < f; d++)
				for (h = this[d]; h;) {
					if (g ? -1 < g.index(h) : c.find.matchesSelector(h, a)) {
						e.push(h);
						break
					}
					h = h.parentNode;
					if (!h || !h.ownerDocument || h === b || 11 === h.nodeType) break
				}
			e = 1 < e.length ? c.unique(e) : e;
			return this.pushStack(e, "closest", a)
		},
		index: function(a) {
			return a ? "string" == typeof a ? c.inArray(this[0], c(a)) : c.inArray(a.jquery ? a[0] : a, this) : this[0] && this[0].parentNode ? this.prevAll().length : -1
		},
		add: function(a, b) {
			var e = "string" == typeof a ? c(a, b) : c.makeArray(a && a.nodeType ? [a] : a),
				d = c.merge(this.get(), e);
			return this.pushStack(Aa(e[0]) || Aa(d[0]) ? d : c.unique(d))
		},
		andSelf: function() {
			return this.add(this.prevObject)
		}
	});
	c.each({
		parent: function(a) {
			return (a = a.parentNode) && 11 !== a.nodeType ? a : null
		},
		parents: function(a) {
			return c.dir(a, "parentNode")
		},
		parentsUntil: function(a, b, e) {
			return c.dir(a, "parentNode", e)
		},
		next: function(a) {
			return c.nth(a, 2, "nextSibling")
		},
		prev: function(a) {
			return c.nth(a, 2, "previousSibling")
		},
		nextAll: function(a) {
			return c.dir(a, "nextSibling")
		},
		prevAll: function(a) {
			return c.dir(a, "previousSibling")
		},
		nextUntil: function(a, b, e) {
			return c.dir(a, "nextSibling", e)
		},
		prevUntil: function(a, b, e) {
			return c.dir(a, "previousSibling", e)
		},
		siblings: function(a) {
			return c.sibling(a.parentNode.firstChild, a)
		},
		children: function(a) {
			return c.sibling(a.firstChild)
		},
		contents: function(a) {
			return c.nodeName(a, "iframe") ? a.contentDocument || a.contentWindow.document : c.makeArray(a.childNodes)
		}
	}, function(a, b) {
		c.fn[a] = function(e, d) {
			var f = c.map(this, b, e);
			zb.test(a) || (d = e);
			d && "string" == typeof d && (f = c.filter(d, f));
			f = 1 < this.length && !Db[a] ? c.unique(f) : f;
			(1 < this.length || Bb.test(d)) && Ab.test(a) && (f = f.reverse());
			return this.pushStack(f, a, Cb.call(arguments).join(","))
		}
	});
	c.extend({
		filter: function(a, b, e) {
			e && (a = ":not(" + a + ")");
			return 1 === b.length ? c.find.matchesSelector(b[0], a) ? [b[0]] : [] : c.find.matches(a, b)
		},
		dir: function(a, b, e) {
			var d = [];
			for (a = a[b]; a && 9 !== a.nodeType && (e === g || 1 !== a.nodeType || !c(a).is(e));) 1 === a.nodeType && d.push(a), a = a[b];
			return d
		},
		nth: function(a, b, c, d) {
			b = b || 1;
			for (d = 0; a && (1 !== a.nodeType || ++d !== b); a = a[c]);
			return a
		},
		sibling: function(a, b) {
			for (var c = []; a; a = a.nextSibling) 1 === a.nodeType && a !== b && c.push(a);
			return c
		}
	});
	var ya = "abbr|article|aside|audio|canvas|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
		Eb = / jQuery\d+="(?:\d+|null)"/g,
		oa = /^\s+/,
		Pa = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/ig,
		Qa = /<([\w:]+)/,
		Fb = /<tbody/i,
		Gb = /<|&#?\w+;/,
		Hb = /<(?:script|style)/i,
		Ib = /<(?:script|object|embed|option|style)/i,
		Ra = new RegExp("\x3c(?:" + ya + ")", "i"),
		Sa = /checked\s*(?:[^=]|=\s*.checked.)/i,
		Jb = /\/(java|ecma)script/i,
		gb = /^\s*<!(?:\[CDATA\[|\-\-)/,
		E = {
			option: [1, "\x3cselect multiple\x3d'multiple'\x3e", "\x3c/select\x3e"],
			legend: [1, "\x3cfieldset\x3e", "\x3c/fieldset\x3e"],
			thead: [1, "\x3ctable\x3e", "\x3c/table\x3e"],
			tr: [2, "\x3ctable\x3e\x3ctbody\x3e", "\x3c/tbody\x3e\x3c/table\x3e"],
			td: [3, "\x3ctable\x3e\x3ctbody\x3e\x3ctr\x3e", "\x3c/tr\x3e\x3c/tbody\x3e\x3c/table\x3e"],
			col: [2, "\x3ctable\x3e\x3ctbody\x3e\x3c/tbody\x3e\x3ccolgroup\x3e", "\x3c/colgroup\x3e\x3c/table\x3e"],
			area: [1, "\x3cmap\x3e", "\x3c/map\x3e"],
			_default: [0, "", ""]
		},
		Ta = xa(q);
	E.optgroup = E.option;
	E.tbody = E.tfoot = E.colgroup = E.caption = E.thead;
	E.th = E.td;
	c.support.htmlSerialize || (E._default = [1, "div\x3cdiv\x3e", "\x3c/div\x3e"]);
	c.fn.extend({
		text: function(a) {
			return c.isFunction(a) ? this.each(function(b) {
				var e = c(this);
				e.text(a.call(this, b, e.text()))
			}) : "object" != typeof a && a !== g ? this.empty().append((this[0] && this[0].ownerDocument || q).createTextNode(a)) : c.text(this)
		},
		wrapAll: function(a) {
			if (c.isFunction(a)) return this.each(function(b) {
				c(this).wrapAll(a.call(this, b))
			});
			if (this[0]) {
				var b = c(a, this[0].ownerDocument).eq(0).clone(!0);
				this[0].parentNode && b.insertBefore(this[0]);
				b.map(function() {
					for (var a = this; a.firstChild && 1 === a.firstChild.nodeType;) a = a.firstChild;
					return a
				}).append(this)
			}
			return this
		},
		wrapInner: function(a) {
			return c.isFunction(a) ? this.each(function(b) {
				c(this).wrapInner(a.call(this, b))
			}) : this.each(function() {
				var b = c(this),
					e = b.contents();
				e.length ? e.wrapAll(a) : b.append(a)
			})
		},
		wrap: function(a) {
			var b = c.isFunction(a);
			return this.each(function(e) {
				c(this).wrapAll(b ? a.call(this, e) : a)
			})
		},
		unwrap: function() {
			return this.parent().each(function() {
				c.nodeName(this, "body") || c(this).replaceWith(this.childNodes)
			}).end()
		},
		append: function() {
			return this.domManip(arguments, !0, function(a) {
				1 === this.nodeType && this.appendChild(a)
			})
		},
		prepend: function() {
			return this.domManip(arguments, !0, function(a) {
				1 === this.nodeType && this.insertBefore(a, this.firstChild)
			})
		},
		before: function() {
			if (this[0] && this[0].parentNode) return this.domManip(arguments, !1, function(a) {
				this.parentNode.insertBefore(a, this)
			});
			if (arguments.length) {
				var a = c.clean(arguments);
				a.push.apply(a, this.toArray());
				return this.pushStack(a, "before", arguments)
			}
		},
		after: function() {
			if (this[0] && this[0].parentNode) return this.domManip(arguments, !1, function(a) {
				this.parentNode.insertBefore(a, this.nextSibling)
			});
			if (arguments.length) {
				var a = this.pushStack(this, "after", arguments);
				a.push.apply(a, c.clean(arguments));
				return a
			}
		},
		remove: function(a, b) {
			for (var e = 0, d; null != (d = this[e]); e++)
				if (!a || c.filter(a, [d]).length) !b && 1 === d.nodeType && (c.cleanData(d.getElementsByTagName("*")), c.cleanData([d])), d.parentNode && d.parentNode.removeChild(d);
			return this
		},
		empty: function() {
			for (var a = 0, b; null != (b = this[a]); a++)
				for (1 === b.nodeType && c.cleanData(b.getElementsByTagName("*")); b.firstChild;) b.removeChild(b.firstChild);
			return this
		},
		clone: function(a, b) {
			a = null == a ? !1 : a;
			b = null == b ? a : b;
			return this.map(function() {
				return c.clone(this, a, b)
			})
		},
		html: function(a) {
			if (a === g) return this[0] && 1 === this[0].nodeType ? this[0].innerHTML.replace(Eb, "") : null;
			if ("string" != typeof a || Hb.test(a) || !c.support.leadingWhitespace && oa.test(a) || E[(Qa.exec(a) || ["", ""])[1].toLowerCase()]) c.isFunction(a) ? this.each(function(b) {
				var d = c(this);
				d.html(a.call(this, b, d.html()))
			}) : this.empty().append(a);
			else {
				a = a.replace(Pa, "\x3c$1\x3e\x3c/$2\x3e");
				try {
					for (var b = 0, e = this.length; b < e; b++) 1 === this[b].nodeType && (c.cleanData(this[b].getElementsByTagName("*")), this[b].innerHTML = a)
				} catch (d) {
					this.empty().append(a)
				}
			}
			return this
		},
		replaceWith: function(a) {
			if (this[0] && this[0].parentNode) {
				if (c.isFunction(a)) return this.each(function(b) {
					var e = c(this),
						d = e.html();
					e.replaceWith(a.call(this, b, d))
				});
				"string" != typeof a && (a = c(a).detach());
				return this.each(function() {
					var b = this.nextSibling,
						e = this.parentNode;
					c(this).remove();
					b ? c(b).before(a) : c(e).append(a)
				})
			}
			return this.length ? this.pushStack(c(c.isFunction(a) ? a() : a), "replaceWith", a) : this
		},
		detach: function(a) {
			return this.remove(a, !0)
		},
		domManip: function(a, b, e) {
			var d, f, h = a[0],
				n = [];
			if (!c.support.checkClone && 3 === arguments.length && "string" == typeof h && Sa.test(h)) return this.each(function() {
				c(this).domManip(a, b, e, !0)
			});
			if (c.isFunction(h)) return this.each(function(d) {
				var f = c(this);
				a[0] = h.call(this, d, b ? f.html() : g);
				f.domManip(a, b, e)
			});
			if (this[0]) {
				var k = h && h.parentNode;
				c.support.parentNode && k && 11 === k.nodeType && k.childNodes.length === this.length ? d = {
					fragment: k
				} : d = c.buildFragment(a, this, n);
				k = d.fragment;
				1 === k.childNodes.length ? f = k = k.firstChild : f = k.firstChild;
				if (f) {
					b = b && c.nodeName(f, "tr");
					for (var l = 0, m = this.length, p = m - 1; l < m; l++) e.call(b ? hb(this[l], f) : this[l], d.cacheable || 1 < m && l < p ? c.clone(k, !0, !0) : k)
				}
				n.length && c.each(n, fb)
			}
			return this
		}
	});
	c.buildFragment = function(a, b, e) {
		var d, f, h, g, k = a[0];
		b && b[0] && (g = b[0].ownerDocument || b[0]);
		g.createDocumentFragment || (g = q);
		1 === a.length && "string" == typeof k && 512 > k.length && g === q && "\x3c" === k.charAt(0) && !Ib.test(k) && (c.support.checkClone || !Sa.test(k)) && (c.support.html5Clone || !Ra.test(k)) && (f = !0, h = c.fragments[k], h && 1 !== h && (d = h));
		d || (d = g.createDocumentFragment(), c.clean(a, g, d, e));
		f && (c.fragments[k] = h ? d : 1);
		return {
			fragment: d,
			cacheable: f
		}
	};
	c.fragments = {};
	c.each({
		appendTo: "append",
		prependTo: "prepend",
		insertBefore: "before",
		insertAfter: "after",
		replaceAll: "replaceWith"
	}, function(a, b) {
		c.fn[a] = function(e) {
			var d = [];
			e = c(e);
			var f = 1 === this.length && this[0].parentNode;
			if (f && 11 === f.nodeType && 1 === f.childNodes.length && 1 === e.length) return e[b](this[0]), this;
			f = 0;
			for (var h = e.length; f < h; f++) {
				var g = (0 < f ? this.clone(!0) : this).get();
				c(e[f])[b](g);
				d = d.concat(g)
			}
			return this.pushStack(d, a, e.selector)
		}
	});
	c.extend({
		clone: function(a, b, e) {
			var d;
			if (c.support.html5Clone || !Ra.test("\x3c" + a.nodeName)) var f = a.cloneNode(!0);
			else f = q.createElement("div"), Ta.appendChild(f), f.innerHTML = a.outerHTML, f = f.firstChild;
			var h = f;
			if (!(c.support.noCloneEvent && c.support.noCloneChecked || 1 !== a.nodeType && 11 !== a.nodeType || c.isXMLDoc(a))) {
				va(a, h);
				f = ba(a);
				var g = ba(h);
				for (d = 0; f[d]; ++d) g[d] && va(f[d], g[d])
			}
			if (b && (wa(a, h), e))
				for (f = ba(a), g = ba(h), d = 0; f[d]; ++d) wa(f[d], g[d]);
			return h
		},
		clean: function(a, b, e, d) {
			b = b || q;
			"undefined" == typeof b.createElement && (b = b.ownerDocument || b[0] && b[0].ownerDocument || q);
			for (var f = [], h, g = 0, k; null != (k = a[g]); g++)
				if ("number" == typeof k && (k += ""), k) {
					if ("string" == typeof k)
						if (Gb.test(k)) {
							k = k.replace(Pa, "\x3c$1\x3e\x3c/$2\x3e");
							h = (Qa.exec(k) || ["", ""])[1].toLowerCase();
							var l = E[h] || E._default,
								m = l[0],
								p = b.createElement("div");
							b === q ? Ta.appendChild(p) : xa(b).appendChild(p);
							for (p.innerHTML = l[1] + k + l[2]; m--;) p = p.lastChild;
							if (!c.support.tbody)
								for (m = Fb.test(k), l = "table" !== h || m ? "\x3ctable\x3e" !== l[1] || m ? [] : p.childNodes : p.firstChild && p.firstChild.childNodes, h = l.length - 1; 0 <= h; --h) c.nodeName(l[h], "tbody") && !l[h].childNodes.length && l[h].parentNode.removeChild(l[h]);
							!c.support.leadingWhitespace && oa.test(k) && p.insertBefore(b.createTextNode(oa.exec(k)[0]), p.firstChild);
							k = p.childNodes
						} else k = b.createTextNode(k);
					var r;
					if (!c.support.appendChecked)
						if (k[0] && "number" == typeof(r = k.length))
							for (h = 0; h < r; h++) ta(k[h]);
						else ta(k);
					k.nodeType ? f.push(k) : f = c.merge(f, k)
				}
			if (e)
				for (a = function(a) {
						return !a.type || Jb.test(a.type)
					}, g = 0; f[g]; g++) !d || !c.nodeName(f[g], "script") || f[g].type && "text/javascript" !== f[g].type.toLowerCase() ? (1 === f[g].nodeType && (b = c.grep(f[g].getElementsByTagName("script"), a), f.splice.apply(f, [g + 1, 0].concat(b))), e.appendChild(f[g])) : d.push(f[g].parentNode ? f[g].parentNode.removeChild(f[g]) : f[g]);
			return f
		},
		cleanData: function(a) {
			for (var b, e, d = c.cache, f = c.event.special, h = c.support.deleteExpando, g = 0, k; null != (k = a[g]); g++)
				if (!k.nodeName || !c.noData[k.nodeName.toLowerCase()])
					if (e = k[c.expando]) {
						if ((b = d[e]) && b.events) {
							for (var l in b.events) f[l] ? c.event.remove(k, l) : c.removeEvent(k, l, b.handle);
							b.handle && (b.handle.elem = null)
						}
						h ? delete k[c.expando] : k.removeAttribute && k.removeAttribute(c.expando);
						delete d[e]
					}
		}
	});
	var pa = /alpha\([^)]*\)/i,
		Kb = /opacity=([^)]*)/,
		Lb = /([A-Z]|^ms)/g,
		Ua = /^-?\d+(?:px)?$/i,
		Mb = /^-?\d/,
		Nb = /^([\-+])=([\-+.\de]+)/,
		Ob = {
			position: "absolute",
			visibility: "hidden",
			display: "block"
		},
		db = ["Left", "Right"],
		eb = ["Top", "Bottom"],
		Va, Wa;
	c.fn.css = function(a, b) {
		return 2 === arguments.length && b === g ? this : c.access(this, a, b, !0, function(a, b, f) {
			return f !== g ? c.style(a, b, f) : c.css(a, b)
		})
	};
	c.extend({
		cssHooks: {
			opacity: {
				get: function(a, b) {
					if (b) {
						var c = Y(a, "opacity", "opacity");
						return "" === c ? "1" : c
					}
					return a.style.opacity
				}
			}
		},
		cssNumber: {
			fillOpacity: !0,
			fontWeight: !0,
			lineHeight: !0,
			opacity: !0,
			orphans: !0,
			widows: !0,
			zIndex: !0,
			zoom: !0
		},
		cssProps: {
			"float": c.support.cssFloat ? "cssFloat" : "styleFloat"
		},
		style: function(a, b, e, d) {
			if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
				var f, h = c.camelCase(b),
					n = a.style,
					k = c.cssHooks[h];
				b = c.cssProps[h] || h;
				if (e === g) return k && "get" in k && (f = k.get(a, !1, d)) !== g ? f : n[b];
				d = typeof e;
				"string" === d && (f = Nb.exec(e)) && (e = +(f[1] + 1) * +f[2] + parseFloat(c.css(a, b)), d = "number");
				if (!(null == e || "number" === d && isNaN(e) || ("number" === d && !c.cssNumber[h] && (e += "px"), k && "set" in k && (e = k.set(a, e)) === g))) try {
					n[b] = e
				} catch (y) {}
			}
		},
		css: function(a, b, e) {
			var d;
			b = c.camelCase(b);
			var f = c.cssHooks[b];
			b = c.cssProps[b] || b;
			"cssFloat" === b && (b = "float");
			if (f && "get" in f && (d = f.get(a, !0, e)) !== g) return d;
			if (Y) return Y(a, b)
		},
		swap: function(a, b, c) {
			var d = {},
				e;
			for (e in b) d[e] = a.style[e], a.style[e] = b[e];
			c.call(a);
			for (e in b) a.style[e] = d[e]
		}
	});
	c.curCSS = c.css;
	c.each(["height", "width"], function(a, b) {
		c.cssHooks[b] = {
			get: function(a, d, f) {
				var e;
				if (d) {
					if (0 !== a.offsetWidth) return N(a, b, f);
					c.swap(a, Ob, function() {
						e = N(a, b, f)
					});
					return e
				}
			},
			set: function(a, b) {
				if (!Ua.test(b)) return b;
				b = parseFloat(b);
				if (0 <= b) return b + "px"
			}
		}
	});
	c.support.opacity || (c.cssHooks.opacity = {
		get: function(a, b) {
			return Kb.test((b && a.currentStyle ? a.currentStyle.filter : a.style.filter) || "") ? parseFloat(RegExp.$1) / 100 + "" : b ? "1" : ""
		},
		set: function(a, b) {
			var e = a.style,
				d = a.currentStyle,
				f = c.isNumeric(b) ? "alpha(opacity\x3d" + 100 * b + ")" : "",
				h = d && d.filter || e.filter || "";
			e.zoom = 1;
			if (1 <= b && "" === c.trim(h.replace(pa, "")) && (e.removeAttribute("filter"), d && !d.filter)) return;
			e.filter = pa.test(h) ? h.replace(pa, f) : h + " " + f
		}
	});
	c(function() {
		c.support.reliableMarginRight || (c.cssHooks.marginRight = {
			get: function(a, b) {
				var e;
				c.swap(a, {
					display: "inline-block"
				}, function() {
					b ? e = Y(a, "margin-right", "marginRight") : e = a.style.marginRight
				});
				return e
			}
		})
	});
	q.defaultView && q.defaultView.getComputedStyle && (Va = function(a, b) {
		var e, d, f;
		b = b.replace(Lb, "-$1").toLowerCase();
		(d = a.ownerDocument.defaultView) && (f = d.getComputedStyle(a, null)) && (e = f.getPropertyValue(b), "" === e && !c.contains(a.ownerDocument.documentElement, a) && (e = c.style(a, b)));
		return e
	});
	q.documentElement.currentStyle && (Wa = function(a, b) {
		var c, d, f, h = a.currentStyle && a.currentStyle[b],
			g = a.style;
		null === h && g && (f = g[b]) && (h = f);
		!Ua.test(h) && Mb.test(h) && (c = g.left, d = a.runtimeStyle && a.runtimeStyle.left, d && (a.runtimeStyle.left = a.currentStyle.left), g.left = "fontSize" === b ? "1em" : h || 0, h = g.pixelLeft + "px", g.left = c, d && (a.runtimeStyle.left = d));
		return "" === h ? "auto" : h
	});
	var Y = Va || Wa;
	c.expr && c.expr.filters && (c.expr.filters.hidden = function(a) {
		var b = a.offsetHeight;
		return 0 === a.offsetWidth && 0 === b || !c.support.reliableHiddenOffsets && "none" === (a.style && a.style.display || c.css(a, "display"))
	}, c.expr.filters.visible = function(a) {
		return !c.expr.filters.hidden(a)
	});
	var Pb = /%20/g,
		cb = /\[\]$/,
		Xa = /\r?\n/g,
		Qb = /#.*$/,
		Rb = /^(.*?):[ \t]*([^\r\n]*)\r?$/mg,
		Sb = /^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,
		Tb = /^(?:GET|HEAD)$/,
		Ub = /^\/\//,
		Ya = /\?/,
		Vb = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
		Wb = /^(?:select|textarea)/i,
		sa = /\s+/,
		Xb = /([?&])_=[^&]*/,
		Za = /^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+))?)?/,
		$a = c.fn.load,
		ja = {},
		ab = {};
	try {
		var V = nb.href
	} catch (a) {
		V = q.createElement("a"), V.href = "", V = V.href
	}
	var W = Za.exec(V.toLowerCase()) || [];
	c.fn.extend({
		load: function(a, b, e) {
			if ("string" != typeof a && $a) return $a.apply(this, arguments);
			if (!this.length) return this;
			var d = a.indexOf(" ");
			if (0 <= d) {
				var f = a.slice(d, a.length);
				a = a.slice(0, d)
			}
			d = "GET";
			b && (c.isFunction(b) ? (e = b, b = g) : "object" == typeof b && (b = c.param(b, c.ajaxSettings.traditional), d = "POST"));
			var h = this;
			c.ajax({
				url: a,
				type: d,
				dataType: "html",
				data: b,
				complete: function(a, b, d) {
					d = a.responseText;
					a.isResolved() && (a.done(function(a) {
						d = a
					}), h.html(f ? c("\x3cdiv\x3e").append(d.replace(Vb, "")).find(f) : d));
					e && h.each(e, [d, b, a])
				}
			});
			return this
		},
		serialize: function() {
			return c.param(this.serializeArray())
		},
		serializeArray: function() {
			return this.map(function() {
				return this.elements ? c.makeArray(this.elements) : this
			}).filter(function() {
				return this.name && !this.disabled && (this.checked || Wb.test(this.nodeName) || Sb.test(this.type))
			}).map(function(a, b) {
				var e = c(this).val();
				return null == e ? null : c.isArray(e) ? c.map(e, function(a, c) {
					return {
						name: b.name,
						value: a.replace(Xa, "\r\n")
					}
				}) : {
					name: b.name,
					value: e.replace(Xa, "\r\n")
				}
			}).get()
		}
	});
	c.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "), function(a, b) {
		c.fn[b] = function(a) {
			return this.on(b, a)
		}
	});
	c.each(["get", "post"], function(a, b) {
		c[b] = function(a, d, f, h) {
			c.isFunction(d) && (h = h || f, f = d, d = g);
			return c.ajax({
				type: b,
				url: a,
				data: d,
				success: f,
				dataType: h
			})
		}
	});
	c.extend({
		getScript: function(a, b) {
			return c.get(a, g, b, "script")
		},
		getJSON: function(a, b, e) {
			return c.get(a, b, e, "json")
		},
		ajaxSetup: function(a, b) {
			b ? M(a, c.ajaxSettings) : (b = a, a = c.ajaxSettings);
			M(a, b);
			return a
		},
		ajaxSettings: {
			url: V,
			isLocal: /^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/.test(W[1]),
			global: !0,
			type: "GET",
			contentType: "application/x-www-form-urlencoded",
			processData: !0,
			async: !0,
			accepts: {
				xml: "application/xml, text/xml",
				html: "text/html",
				text: "text/plain",
				json: "application/json, text/javascript",
				"*": "*/*"
			},
			contents: {
				xml: /xml/,
				html: /html/,
				json: /json/
			},
			responseFields: {
				xml: "responseXML",
				text: "responseText"
			},
			converters: {
				"* text": l.String,
				"text html": !0,
				"text json": c.parseJSON,
				"text xml": c.parseXML
			},
			flatOptions: {
				context: !0,
				url: !0
			}
		},
		ajaxPrefilter: G(ja),
		ajaxTransport: G(ab),
		ajax: function(a, b) {
			function e(a, b, e, n) {
				if (2 !== B) {
					B = 2;
					A && clearTimeout(A);
					w = g;
					r = n || "";
					z.readyState = 0 < a ? 4 : 0;
					n = b;
					if (e) {
						var p = d,
							u = z,
							q = p.contents,
							t = p.dataTypes,
							v = p.responseFields,
							y, D;
						for (H in v) H in e && (u[v[H]] = e[H]);
						for (;
							"*" === t[0];) t.shift(), y === g && (y = p.mimeType || u.getResponseHeader("content-type"));
						if (y)
							for (H in q)
								if (q[H] && q[H].test(y)) {
									t.unshift(H);
									break
								}
						if (t[0] in e) var F = t[0];
						else {
							for (H in e) {
								if (!t[0] || p.converters[H + " " + t[0]]) {
									F = H;
									break
								}
								D || (D = H)
							}
							F = F || D
						}
						F ? (F !== t[0] && t.unshift(F), e = e[F]) : e = void 0
					} else e = g;
					if (200 <= a && 300 > a || 304 === a) {
						if (d.ifModified) {
							if (y = z.getResponseHeader("Last-Modified")) c.lastModified[E] = y;
							if (y = z.getResponseHeader("Etag")) c.etag[E] = y
						}
						if (304 === a) {
							n = "notmodified";
							var x = !0
						} else try {
							y = d;
							y.dataFilter && (e = y.dataFilter(e, y.dataType));
							var C = y.dataTypes;
							var H = {};
							var T, U, K = C.length,
								R = C[0];
							for (T = 1; T < K; T++) {
								if (1 === T)
									for (U in y.converters) "string" == typeof U && (H[U.toLowerCase()] = y.converters[U]);
								var I = R;
								R = C[T];
								if ("*" === R) R = I;
								else if ("*" !== I && I !== R) {
									var M = I + " " + R;
									var G = H[M] || H["* " + R];
									if (!G) {
										var L = g;
										for (Q in H) {
											var N = Q.split(" ");
											if (N[0] === I || "*" === N[0])
												if (L = H[N[1] + " " + R]) {
													var Q = H[Q];
													!0 === Q ? G = L : !0 === L && (G = Q);
													break
												}
										}
									}
									G || L || c.error("No conversion from " + M.replace(" ", " to "));
									!0 !== G && (e = G ? G(e) : L(Q(e)))
								}
							}
							var P = e;
							n = "success";
							x = !0
						} catch (Yb) {
							n = "parsererror";
							var O = Yb
						}
					} else if (O = n, !n || a) n = "error", 0 > a && (a = 0);
					z.status = a;
					z.statusText = "" + (b || n);
					x ? k.resolveWith(f, [P, n, z]) : k.rejectWith(f, [z, n, O]);
					z.statusCode(m);
					m = g;
					J && h.trigger("ajax" + (x ? "Success" : "Error"), [z, d, x ? P : O]);
					l.fireWith(f, [z, n]);
					J && (h.trigger("ajaxComplete", [z, d]), --c.active || c.event.trigger("ajaxStop"))
				}
			}
			"object" == typeof a && (b = a, a = g);
			b = b || {};
			var d = c.ajaxSetup({}, b),
				f = d.context || d,
				h = f !== d && (f.nodeType || f instanceof c) ? c(f) : c.event,
				k = c.Deferred(),
				l = c.Callbacks("once memory"),
				m = d.statusCode || {},
				p = {},
				q = {},
				r, v, w, A, C, B = 0,
				x, z = {
					readyState: 0,
					setRequestHeader: function(a, b) {
						if (!B) {
							var c = a.toLowerCase();
							a = q[c] = q[c] || a;
							p[a] = b
						}
						return this
					},
					getAllResponseHeaders: function() {
						return 2 === B ? r : null
					},
					getResponseHeader: function(a) {
						var b;
						if (2 === B) {
							if (!v)
								for (v = {}; b = Rb.exec(r);) v[b[1].toLowerCase()] = b[2];
							b = v[a.toLowerCase()]
						}
						return b === g ? null : b
					},
					overrideMimeType: function(a) {
						B || (d.mimeType = a);
						return this
					},
					abort: function(a) {
						a = a || "abort";
						w && w.abort(a);
						e(0, a);
						return this
					}
				};
			k.promise(z);
			z.success = z.done;
			z.error = z.fail;
			z.complete = l.add;
			z.statusCode = function(a) {
				if (a)
					if (2 > B)
						for (b in a) m[b] = [m[b], a[b]];
					else {
						var b = a[z.status];
						z.then(b, b)
					}
				return this
			};
			d.url = ((a || d.url) + "").replace(Qb, "").replace(Ub, W[1] + "//");
			d.dataTypes = c.trim(d.dataType || "*").toLowerCase().split(sa);
			null == d.crossDomain && (C = Za.exec(d.url.toLowerCase()), d.crossDomain = !(!C || C[1] == W[1] && C[2] == W[2] && (C[3] || ("http:" === C[1] ? 80 : 443)) == (W[3] || ("http:" === W[1] ? 80 : 443))));
			d.data && d.processData && "string" != typeof d.data && (d.data = c.param(d.data, d.traditional));
			O(ja, d, b, z);
			if (2 === B) return !1;
			var J = d.global;
			d.type = d.type.toUpperCase();
			d.hasContent = !Tb.test(d.type);
			J && 0 === c.active++ && c.event.trigger("ajaxStart");
			if (!d.hasContent) {
				d.data && (d.url += (Ya.test(d.url) ? "\x26" : "?") + d.data, delete d.data);
				var E = d.url;
				if (!1 === d.cache) {
					C = c.now();
					var t = d.url.replace(Xb, "$1_\x3d" + C);
					d.url = t + (t === d.url ? (Ya.test(d.url) ? "\x26" : "?") + "_\x3d" + C : "")
				}
			}(d.data && d.hasContent && !1 !== d.contentType || b.contentType) && z.setRequestHeader("Content-Type", d.contentType);
			d.ifModified && (E = E || d.url, c.lastModified[E] && z.setRequestHeader("If-Modified-Since", c.lastModified[E]), c.etag[E] && z.setRequestHeader("If-None-Match", c.etag[E]));
			z.setRequestHeader("Accept", d.dataTypes[0] && d.accepts[d.dataTypes[0]] ? d.accepts[d.dataTypes[0]] + ("*" !== d.dataTypes[0] ? ", */*; q\x3d0.01" : "") : d.accepts["*"]);
			for (x in d.headers) z.setRequestHeader(x, d.headers[x]);
			if (d.beforeSend && (!1 === d.beforeSend.call(f, z, d) || 2 === B)) return z.abort(), !1;
			for (x in {
					success: 1,
					error: 1,
					complete: 1
				}) z[x](d[x]);
			if (w = O(ab, d, b, z)) {
				z.readyState = 1;
				J && h.trigger("ajaxSend", [z, d]);
				d.async && 0 < d.timeout && (A = setTimeout(function() {
					z.abort("timeout")
				}, d.timeout));
				try {
					B = 1, w.send(p, e)
				} catch (D) {
					if (2 > B) e(-1, D);
					else throw D;
				}
			} else e(-1, "No Transport");
			return z
		},
		param: function(a, b) {
			var e = [],
				d = function(a, b) {
					b = c.isFunction(b) ? b() : b;
					e[e.length] = encodeURIComponent(a) + "\x3d" + encodeURIComponent(b)
				};
			b === g && (b = c.ajaxSettings.traditional);
			if (c.isArray(a) || a.jquery && !c.isPlainObject(a)) c.each(a, function() {
				d(this.name, this.value)
			});
			else
				for (var f in a) J(f, a[f], b, d);
			return e.join("\x26").replace(Pb, "+")
		}
	});
	c.extend({
		active: 0,
		lastModified: {},
		etag: {}
	});
	var Zb = c.now(),
		fa = /(\=)\?(&|$)|\?\?/i;
	c.ajaxSetup({
		jsonp: "callback",
		jsonpCallback: function() {
			return c.expando + "_" + Zb++
		}
	});
	c.ajaxPrefilter("json jsonp", function(a, b, e) {
		b = "application/x-www-form-urlencoded" === a.contentType && "string" == typeof a.data;
		if ("jsonp" === a.dataTypes[0] || !1 !== a.jsonp && (fa.test(a.url) || b && fa.test(a.data))) {
			var d, f = a.jsonpCallback = c.isFunction(a.jsonpCallback) ? a.jsonpCallback() : a.jsonpCallback,
				h = l[f],
				g = a.url,
				k = a.data,
				m = "$1" + f + "$2";
			!1 !== a.jsonp && (g = g.replace(fa, m), a.url === g && (b && (k = k.replace(fa, m)), a.data === k && (g += (/\?/.test(g) ? "\x26" : "?") + a.jsonp + "\x3d" + f)));
			a.url = g;
			a.data = k;
			l[f] = function(a) {
				d = [a]
			};
			e.always(function() {
				l[f] = h;
				d && c.isFunction(h) && l[f](d[0])
			});
			a.converters["script json"] = function() {
				d || c.error(f + " was not called");
				return d[0]
			};
			a.dataTypes[0] = "json";
			return "script"
		}
	});
	c.ajaxSetup({
		accepts: {
			script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
		},
		contents: {
			script: /javascript|ecmascript/
		},
		converters: {
			"text script": function(a) {
				c.globalEval(a);
				return a
			}
		}
	});
	c.ajaxPrefilter("script", function(a) {
		a.cache === g && (a.cache = !1);
		a.crossDomain && (a.type = "GET", a.global = !1)
	});
	c.ajaxTransport("script", function(a) {
		if (a.crossDomain) {
			var b, c = q.head || q.getElementsByTagName("head")[0] || q.documentElement;
			return {
				send: function(d, e) {
					b = q.createElement("script");
					b.async = "async";
					a.scriptCharset && (b.charset = a.scriptCharset);
					b.src = a.url;
					b.onload = b.onreadystatechange = function(a, d) {
						if (d || !b.readyState || /loaded|complete/.test(b.readyState)) b.onload = b.onreadystatechange = null, c && b.parentNode && c.removeChild(b), b = g, d || e(200, "success")
					};
					c.insertBefore(b, c.firstChild)
				},
				abort: function() {
					b && b.onload(0, 1)
				}
			}
		}
	});
	var qa = l.ActiveXObject ? function() {
			for (var a in X) X[a](0, 1)
		} : !1,
		$b = 0,
		X;
	c.ajaxSettings.xhr = l.ActiveXObject ? function() {
		var a;
		if (!(a = !this.isLocal && A())) a: {
			try {
				a = new l.ActiveXObject("Microsoft.XMLHTTP");
				break a
			} catch (b) {}
			a = void 0
		}
		return a
	} : A;
	(function(a) {
		c.extend(c.support, {
			ajax: !!a,
			cors: !!a && "withCredentials" in a
		})
	})(c.ajaxSettings.xhr());
	c.support.ajax && c.ajaxTransport(function(a) {
		if (!a.crossDomain || c.support.cors) {
			var b;
			return {
				send: function(e, d) {
					var f = a.xhr(),
						h, k;
					a.username ? f.open(a.type, a.url, a.async, a.username, a.password) : f.open(a.type, a.url, a.async);
					if (a.xhrFields)
						for (k in a.xhrFields) f[k] = a.xhrFields[k];
					a.mimeType && f.overrideMimeType && f.overrideMimeType(a.mimeType);
					a.crossDomain || e["X-Requested-With"] || (e["X-Requested-With"] = "XMLHttpRequest");
					try {
						for (k in e) f.setRequestHeader(k, e[k])
					} catch (u) {}
					f.send(a.hasContent && a.data || null);
					b = function(e, k) {
						var n;
						try {
							if (b && (k || 4 === f.readyState))
								if (b = g, h && (f.onreadystatechange = c.noop, qa && delete X[h]), k) 4 !== f.readyState && f.abort();
								else {
									var l = f.status;
									var m = f.getAllResponseHeaders();
									var p = {};
									(n = f.responseXML) && n.documentElement && (p.xml = n);
									p.text = f.responseText;
									try {
										var u = f.statusText
									} catch (Q) {
										u = ""
									}
									l || !a.isLocal || a.crossDomain ? 1223 === l && (l = 204) : l = p.text ? 200 : 404
								}
						} catch (Q) {
							k || d(-1, Q)
						}
						p && d(l, u, p, m)
					};
					a.async && 4 !== f.readyState ? (h = ++$b, qa && (X || (X = {}, c(l).unload(qa)), X[h] = b), f.onreadystatechange = b) : b()
				},
				abort: function() {
					b && b(0, 1)
				}
			}
		}
	});
	var ia = {},
		I, P, ac = /^(?:toggle|show|hide)$/,
		bc = /^([+\-]=)?([\d+.\-]+)([a-z%]*)$/i,
		ha, ra = [
			["height", "marginTop", "marginBottom", "paddingTop", "paddingBottom"],
			["width", "marginLeft", "marginRight", "paddingLeft", "paddingRight"],
			["opacity"]
		],
		aa;
	c.fn.extend({
		show: function(a, b, e) {
			var d;
			if (a || 0 === a) return this.animate(p("show", 3), a, b, e);
			b = 0;
			for (e = this.length; b < e; b++) a = this[b], a.style && (d = a.style.display, !c._data(a, "olddisplay") && "none" === d && (d = a.style.display = ""), "" === d && "none" === c.css(a, "display") && c._data(a, "olddisplay", k(a.nodeName)));
			for (b = 0; b < e; b++)
				if (a = this[b], a.style && (d = a.style.display, "" === d || "none" === d)) a.style.display = c._data(a, "olddisplay") || "";
			return this
		},
		hide: function(a, b, e) {
			if (a || 0 === a) return this.animate(p("hide", 3), a, b, e);
			var d;
			b = 0;
			for (e = this.length; b < e; b++) a = this[b], a.style && (d = c.css(a, "display"), "none" !== d && !c._data(a, "olddisplay") && c._data(a, "olddisplay", d));
			for (b = 0; b < e; b++) this[b].style && (this[b].style.display = "none");
			return this
		},
		_toggle: c.fn.toggle,
		toggle: function(a, b, e) {
			var d = "boolean" == typeof a;
			c.isFunction(a) && c.isFunction(b) ? this._toggle.apply(this, arguments) : null == a || d ? this.each(function() {
				var b = d ? a : c(this).is(":hidden");
				c(this)[b ? "show" : "hide"]()
			}) : this.animate(p("toggle", 3), a, b, e);
			return this
		},
		fadeTo: function(a, b, c, d) {
			return this.filter(":hidden").css("opacity", 0).show().end().animate({
				opacity: b
			}, a, c, d)
		},
		animate: function(a, b, e, d) {
			function f() {
				!1 === h.queue && c._mark(this);
				var b = c.extend({}, h),
					d = 1 === this.nodeType,
					e = d && c(this).is(":hidden"),
					f, g, l, m, p, q;
				b.animatedProperties = {};
				for (f in a) {
					var v = c.camelCase(f);
					f !== v && (a[v] = a[f], delete a[f]);
					var x = a[v];
					c.isArray(x) ? (b.animatedProperties[v] = x[1], x = a[v] = x[0]) : b.animatedProperties[v] = b.specialEasing && b.specialEasing[v] || b.easing || "swing";
					if ("hide" === x && e || "show" === x && !e) return b.complete.call(this);
					d && ("height" === v || "width" === v) && (b.overflow = [this.style.overflow, this.style.overflowX, this.style.overflowY], "inline" === c.css(this, "display") && "none" === c.css(this, "float") && (c.support.inlineBlockNeedsLayout && "inline" !== k(this.nodeName) ? this.style.zoom = 1 : this.style.display = "inline-block"))
				}
				null != b.overflow && (this.style.overflow = "hidden");
				for (f in a) d = new c.fx(this, b, f), x = a[f], ac.test(x) ? (q = c._data(this, "toggle" + f) || ("toggle" === x ? e ? "show" : "hide" : 0), q ? (c._data(this, "toggle" + f, "show" === q ? "hide" : "show"), d[q]()) : d[x]()) : (g = bc.exec(x), l = d.cur(), g ? (m = parseFloat(g[2]), p = g[3] || (c.cssNumber[f] ? "" : "px"), "px" !== p && (c.style(this, f, (m || 1) + p), l *= (m || 1) / d.cur(), c.style(this, f, l + p)), g[1] && (m = ("-\x3d" === g[1] ? -1 : 1) * m + l), d.custom(l, m, p)) : d.custom(l, x, ""));
				return !0
			}
			var h = c.speed(b, e, d);
			if (c.isEmptyObject(a)) return this.each(h.complete, [!1]);
			a = c.extend({}, a);
			return !1 === h.queue ? this.each(f) : this.queue(h.queue, f)
		},
		stop: function(a, b, e) {
			"string" != typeof a && (e = b, b = a, a = g);
			b && !1 !== a && this.queue(a || "fx", []);
			return this.each(function() {
				var b,
					f = !1,
					h = c.timers,
					g = c._data(this);
				e || c._unmark(!0, this);
				if (null == a)
					for (b in g) {
						if (g[b] && g[b].stop && b.indexOf(".run") === b.length - 4) {
							var k = g[b];
							c.removeData(this, b, !0);
							k.stop(e)
						}
					} else g[b = a + ".run"] && g[b].stop && (g = g[b], c.removeData(this, b, !0), g.stop(e));
				for (b = h.length; b--;) h[b].elem !== this || null != a && h[b].queue !== a || (e ? h[b](!0) : h[b].saveState(), f = !0, h.splice(b, 1));
				e && f || c.dequeue(this, a)
			})
		}
	});
	c.each({
		slideDown: p("show", 1),
		slideUp: p("hide", 1),
		slideToggle: p("toggle", 1),
		fadeIn: {
			opacity: "show"
		},
		fadeOut: {
			opacity: "hide"
		},
		fadeToggle: {
			opacity: "toggle"
		}
	}, function(a, b) {
		c.fn[a] = function(a, c, f) {
			return this.animate(b, a, c, f)
		}
	});
	c.extend({
		speed: function(a, b, e) {
			var d = a && "object" == typeof a ? c.extend({}, a) : {
				complete: e || !e && b || c.isFunction(a) && a,
				duration: a,
				easing: e && b || b && !c.isFunction(b) && b
			};
			d.duration = c.fx.off ? 0 : "number" == typeof d.duration ? d.duration : d.duration in c.fx.speeds ? c.fx.speeds[d.duration] : c.fx.speeds._default;
			if (null == d.queue || !0 === d.queue) d.queue = "fx";
			d.old = d.complete;
			d.complete = function(a) {
				c.isFunction(d.old) && d.old.call(this);
				d.queue ? c.dequeue(this, d.queue) : !1 !== a && c._unmark(this)
			};
			return d
		},
		easing: {
			linear: function(a, b, c, d) {
				return c + d * a
			},
			swing: function(a, b, c, d) {
				return (-Math.cos(a * Math.PI) / 2 + .5) * d + c
			}
		},
		timers: [],
		fx: function(a, b, c) {
			this.options = b;
			this.elem = a;
			this.prop = c;
			b.orig = b.orig || {}
		}
	});
	c.fx.prototype = {
		update: function() {
			this.options.step && this.options.step.call(this.elem, this.now, this);
			(c.fx.step[this.prop] || c.fx.step._default)(this)
		},
		cur: function() {
			if (null != this.elem[this.prop] && (!this.elem.style || null == this.elem.style[this.prop])) return this.elem[this.prop];
			var a, b = c.css(this.elem, this.prop);
			return isNaN(a = parseFloat(b)) ? b && "auto" !== b ? b : 0 : a
		},
		custom: function(a, b, e) {
			function d(a) {
				return f.step(a)
			}
			var f = this,
				h = c.fx;
			this.startTime = aa || x();
			this.end = b;
			this.now = this.start = a;
			this.pos = this.state = 0;
			this.unit = e || this.unit || (c.cssNumber[this.prop] ? "" : "px");
			d.queue = this.options.queue;
			d.elem = this.elem;
			d.saveState = function() {
				f.options.hide && c._data(f.elem, "fxshow" + f.prop) === g && c._data(f.elem, "fxshow" + f.prop, f.start)
			};
			d() && c.timers.push(d) && !ha && (ha = setInterval(h.tick, h.interval))
		},
		show: function() {
			var a = c._data(this.elem, "fxshow" + this.prop);
			this.options.orig[this.prop] = a || c.style(this.elem, this.prop);
			this.options.show = !0;
			a !== g ? this.custom(this.cur(), a) : this.custom("width" === this.prop || "height" === this.prop ? 1 : 0, this.cur());
			c(this.elem).show()
		},
		hide: function() {
			this.options.orig[this.prop] = c._data(this.elem, "fxshow" + this.prop) || c.style(this.elem, this.prop);
			this.options.hide = !0;
			this.custom(this.cur(), 0)
		},
		step: function(a) {
			var b, e, d = aa || x(),
				f = !0,
				g = this.elem,
				k = this.options;
			if (a || d >= k.duration + this.startTime) {
				this.now = this.end;
				this.pos = this.state = 1;
				this.update();
				k.animatedProperties[this.prop] = !0;
				for (b in k.animatedProperties) !0 !== k.animatedProperties[b] && (f = !1);
				if (f) {
					null != k.overflow && !c.support.shrinkWrapBlocks && c.each(["", "X", "Y"], function(a, b) {
						g.style["overflow" + b] = k.overflow[a]
					});
					k.hide && c(g).hide();
					if (k.hide || k.show)
						for (b in k.animatedProperties) c.style(g, b, k.orig[b]), c.removeData(g, "fxshow" + b, !0), c.removeData(g, "toggle" + b, !0);
					(a = k.complete) && (k.complete = !1, a.call(g))
				}
				return !1
			}
			Infinity == k.duration ? this.now = d : (e = d - this.startTime, this.state = e / k.duration, this.pos = c.easing[k.animatedProperties[this.prop]](this.state, e, 0, 1, k.duration), this.now = this.start + (this.end - this.start) * this.pos);
			this.update();
			return !0
		}
	};
	c.extend(c.fx, {
		tick: function() {
			for (var a, b = c.timers, e = 0; e < b.length; e++) a = b[e], !a() && b[e] === a && b.splice(e--, 1);
			b.length || c.fx.stop()
		},
		interval: 13,
		stop: function() {
			clearInterval(ha);
			ha = null
		},
		speeds: {
			slow: 600,
			fast: 200,
			_default: 400
		},
		step: {
			opacity: function(a) {
				c.style(a.elem, "opacity", a.now)
			},
			_default: function(a) {
				a.elem.style && null != a.elem.style[a.prop] ? a.elem.style[a.prop] = a.now + a.unit : a.elem[a.prop] = a.now
			}
		}
	});
	c.each(["width", "height"], function(a, b) {
		c.fx.step[b] = function(a) {
			c.style(a.elem, b, Math.max(0, a.now) + a.unit)
		}
	});
	c.expr && c.expr.filters && (c.expr.filters.animated = function(a) {
		return c.grep(c.timers, function(b) {
			return a === b.elem
		}).length
	});
	var cc = /^t(?:able|d|h)$/i,
		bb = /^(?:body|html)$/i;
	"getBoundingClientRect" in q.documentElement ? c.fn.offset = function(a) {
		var b = this[0];
		if (a) return this.each(function(b) {
			c.offset.setOffset(this, a, b)
		});
		if (!b || !b.ownerDocument) return null;
		if (b === b.ownerDocument.body) return c.offset.bodyOffset(b);
		try {
			var e = b.getBoundingClientRect()
		} catch (h) {}
		var d = b.ownerDocument,
			f = d.documentElement;
		if (!e || !c.contains(f, b)) return e ? {
			top: e.top,
			left: e.left
		} : {
			top: 0,
			left: 0
		};
		b = d.body;
		d = m(d);
		return {
			top: e.top + (d.pageYOffset || c.support.boxModel && f.scrollTop || b.scrollTop) - (f.clientTop || b.clientTop || 0),
			left: e.left + (d.pageXOffset || c.support.boxModel && f.scrollLeft || b.scrollLeft) - (f.clientLeft || b.clientLeft || 0)
		}
	} : c.fn.offset = function(a) {
		var b = this[0];
		if (a) return this.each(function(b) {
			c.offset.setOffset(this, a, b)
		});
		if (!b || !b.ownerDocument) return null;
		if (b === b.ownerDocument.body) return c.offset.bodyOffset(b);
		var e = b.offsetParent,
			d = b.ownerDocument,
			f = d.documentElement,
			g = d.body;
		var k = (d = d.defaultView) ? d.getComputedStyle(b, null) : b.currentStyle;
		for (var l = b.offsetTop, m = b.offsetLeft;
			(b = b.parentNode) && b !== g && b !== f && (!c.support.fixedPosition || "fixed" !== k.position);) k = d ? d.getComputedStyle(b, null) : b.currentStyle, l -= b.scrollTop, m -= b.scrollLeft, b === e && (l += b.offsetTop, m += b.offsetLeft, c.support.doesNotAddBorder && (!c.support.doesAddBorderForTableAndCells || !cc.test(b.nodeName)) && (l += parseFloat(k.borderTopWidth) || 0, m += parseFloat(k.borderLeftWidth) || 0), e = b.offsetParent), c.support.subtractsBorderForOverflowNotVisible && "visible" !== k.overflow && (l += parseFloat(k.borderTopWidth) || 0, m += parseFloat(k.borderLeftWidth) || 0);
		if ("relative" === k.position || "static" === k.position) l += g.offsetTop, m += g.offsetLeft;
		c.support.fixedPosition && "fixed" === k.position && (l += Math.max(f.scrollTop, g.scrollTop), m += Math.max(f.scrollLeft, g.scrollLeft));
		return {
			top: l,
			left: m
		}
	};
	c.offset = {
		bodyOffset: function(a) {
			var b = a.offsetTop,
				e = a.offsetLeft;
			c.support.doesNotIncludeMarginInBodyOffset && (b += parseFloat(c.css(a, "marginTop")) || 0, e += parseFloat(c.css(a, "marginLeft")) || 0);
			return {
				top: b,
				left: e
			}
		},
		setOffset: function(a, b, e) {
			var d = c.css(a, "position");
			"static" === d && (a.style.position = "relative");
			var f = c(a),
				g = f.offset(),
				k = c.css(a, "top"),
				l = c.css(a, "left"),
				m = {},
				p = {},
				q, r;
			("absolute" === d || "fixed" === d) && -1 < c.inArray("auto", [k, l]) ? (p = f.position(), q = p.top, r = p.left) : (q = parseFloat(k) || 0, r = parseFloat(l) || 0);
			c.isFunction(b) && (b = b.call(a, e, g));
			null != b.top && (m.top = b.top - g.top + q);
			null != b.left && (m.left = b.left - g.left + r);
			"using" in b ? b.using.call(a, m) : f.css(m)
		}
	};
	c.fn.extend({
		position: function() {
			if (!this[0]) return null;
			var a = this[0],
				b = this.offsetParent(),
				e = this.offset(),
				d = bb.test(b[0].nodeName) ? {
					top: 0,
					left: 0
				} : b.offset();
			e.top -= parseFloat(c.css(a, "marginTop")) || 0;
			e.left -= parseFloat(c.css(a, "marginLeft")) || 0;
			d.top += parseFloat(c.css(b[0], "borderTopWidth")) || 0;
			d.left += parseFloat(c.css(b[0], "borderLeftWidth")) || 0;
			return {
				top: e.top - d.top,
				left: e.left - d.left
			}
		},
		offsetParent: function() {
			return this.map(function() {
				for (var a = this.offsetParent || q.body; a && !bb.test(a.nodeName) && "static" === c.css(a, "position");) a = a.offsetParent;
				return a
			})
		}
	});
	c.each(["Left", "Top"], function(a, b) {
		var e = "scroll" + b;
		c.fn[e] = function(b) {
			var d;
			if (b === g) {
				var h = this[0];
				return h ? (d = m(h)) ? "pageXOffset" in d ? d[a ? "pageYOffset" : "pageXOffset"] : c.support.boxModel && d.document.documentElement[e] || d.document.body[e] : h[e] : null
			}
			return this.each(function() {
				(d = m(this)) ? d.scrollTo(a ? c(d).scrollLeft() : b, a ? b : c(d).scrollTop()): this[e] = b
			})
		}
	});
	c.each(["Height", "Width"], function(a, b) {
		var e = b.toLowerCase();
		c.fn["inner" + b] = function() {
			var a = this[0];
			return a ? a.style ? parseFloat(c.css(a, e, "padding")) : this[e]() : null
		};
		c.fn["outer" + b] = function(a) {
			var b = this[0];
			return b ? b.style ? parseFloat(c.css(b, e, a ? "margin" : "border")) : this[e]() : null
		};
		c.fn[e] = function(a) {
			var d = this[0];
			if (!d) return null == a ? null : this;
			if (c.isFunction(a)) return this.each(function(b) {
				var d = c(this);
				d[e](a.call(this, b, d[e]()))
			});
			if (c.isWindow(d)) {
				var h = d.document.documentElement["client" + b],
					k = d.document.body;
				return "CSS1Compat" === d.document.compatMode && h || k && k["client" + b] || h
			}
			return 9 === d.nodeType ? Math.max(d.documentElement["client" + b], d.body["scroll" + b], d.documentElement["scroll" + b], d.body["offset" + b], d.documentElement["offset" + b]) : a === g ? (d = c.css(d, e), h = parseFloat(d), c.isNumeric(h) ? h : d) : this.css(e, "string" == typeof a ? a : a + "px")
		}
	});
	l.jQuery = l.$ = c;
	"function" == typeof define && define.amd && define.amd.jQuery && define("jquery", [], function() {
		return c
	})
})(window);
jQuery.easing.jswing = jQuery.easing.swing;
jQuery.extend(jQuery.easing, {
	def: "easeOutQuad",
	swing: function(l, g, m, k, p) {
		return jQuery.easing[jQuery.easing.def](l, g, m, k, p)
	},
	easeInQuad: function(l, g, m, k, p) {
		return k * (g /= p) * g + m
	},
	easeOutQuad: function(l, g, m, k, p) {
		return -k * (g /= p) * (g - 2) + m
	},
	easeInOutQuad: function(l, g, m, k, p) {
		return 1 > (g /= p / 2) ? k / 2 * g * g + m : -k / 2 * (--g * (g - 2) - 1) + m
	},
	easeInCubic: function(l, g, m, k, p) {
		return k * (g /= p) * g * g + m
	},
	easeOutCubic: function(l, g, m, k, p) {
		return k * ((g = g / p - 1) * g * g + 1) + m
	},
	easeInOutCubic: function(l, g, m, k, p) {
		return 1 > (g /= p / 2) ? k / 2 * g * g * g + m : k / 2 * ((g -= 2) * g * g + 2) + m
	},
	easeInQuart: function(l, g, m, k, p) {
		return k * (g /= p) * g * g * g + m
	},
	easeOutQuart: function(l, g, m, k, p) {
		return -k * ((g = g / p - 1) * g * g * g - 1) + m
	},
	easeInOutQuart: function(l, g, m, k, p) {
		return 1 > (g /= p / 2) ? k / 2 * g * g * g * g + m : -k / 2 * ((g -= 2) * g * g * g - 2) + m
	},
	easeInQuint: function(l, g, m, k, p) {
		return k * (g /= p) * g * g * g * g + m
	},
	easeOutQuint: function(l, g, m, k, p) {
		return k * ((g = g / p - 1) * g * g * g * g + 1) + m
	},
	easeInOutQuint: function(l, g, m, k, p) {
		return 1 > (g /= p / 2) ? k / 2 * g * g * g * g * g + m : k / 2 * ((g -= 2) * g * g * g * g + 2) + m
	},
	easeInSine: function(l, g, m, k, p) {
		return -k * Math.cos(g / p * (Math.PI / 2)) + k + m
	},
	easeOutSine: function(l, g, m, k, p) {
		return k * Math.sin(g / p * (Math.PI / 2)) + m
	},
	easeInOutSine: function(l, g, m, k, p) {
		return -k / 2 * (Math.cos(Math.PI * g / p) - 1) + m
	},
	easeInExpo: function(l, g, m, k, p) {
		return 0 == g ? m : k * Math.pow(2, 10 * (g / p - 1)) + m
	},
	easeOutExpo: function(l, g, m, k, p) {
		return g == p ? m + k : k * (-Math.pow(2, -10 * g / p) + 1) + m
	},
	easeInOutExpo: function(l, g, m, k, p) {
		return 0 == g ? m : g == p ? m + k : 1 > (g /= p / 2) ? k / 2 * Math.pow(2, 10 * (g - 1)) + m : k / 2 * (-Math.pow(2, -10 * --g) + 2) + m
	},
	easeInCirc: function(l, g, m, k, p) {
		return -k * (Math.sqrt(1 - (g /= p) * g) - 1) + m
	},
	easeOutCirc: function(l, g, m, k, p) {
		return k * Math.sqrt(1 - (g = g / p - 1) * g) + m
	},
	easeInOutCirc: function(l, g, m, k, p) {
		return 1 > (g /= p / 2) ? -k / 2 * (Math.sqrt(1 - g * g) - 1) + m : k / 2 * (Math.sqrt(1 - (g -= 2) * g) + 1) + m
	},
	easeInElastic: function(l, g, m, k, p) {
		l = 0;
		var v = k;
		if (0 == g) return m;
		if (1 == (g /= p)) return m + k;
		l || (l = .3 * p);
		v < Math.abs(k) ? (v = k, k = l / 4) : k = l / (2 * Math.PI) * Math.asin(k / v);
		return -(v * Math.pow(2, 10 * --g) * Math.sin(2 * (g * p - k) * Math.PI / l)) + m
	},
	easeOutElastic: function(l, g, m, k, p) {
		var v = 0,
			x = k;
		if (0 == g) return m;
		if (1 == (g /= p)) return m + k;
		v || (v = .3 * p);
		x < Math.abs(k) ? (x = k, l = v / 4) : l = v / (2 * Math.PI) * Math.asin(k / x);
		return x * Math.pow(2, -10 * g) * Math.sin(2 * (g * p - l) * Math.PI / v) + k + m
	},
	easeInOutElastic: function(l, g, m, k, p) {
		var v = 0,
			x = k;
		if (0 == g) return m;
		if (2 == (g /= p / 2)) return m + k;
		v || (v = .3 * p * 1.5);
		x < Math.abs(k) ? (x = k, l = v / 4) : l = v / (2 * Math.PI) * Math.asin(k / x);
		return 1 > g ? -.5 * x * Math.pow(2, 10 * --g) * Math.sin(2 * (g * p - l) * Math.PI / v) + m : x * Math.pow(2, -10 * --g) * Math.sin(2 * (g * p - l) * Math.PI / v) * .5 + k + m
	},
	easeInBack: function(l, g, m, k, p, v) {
		void 0 == v && (v = 1.70158);
		return k * (g /= p) * g * ((v + 1) * g - v) + m
	},
	easeOutBack: function(l, g, m, k, p, v) {
		void 0 == v && (v = 1.70158);
		return k * ((g = g / p - 1) * g * ((v + 1) * g + v) + 1) + m
	},
	easeInOutBack: function(l, g, m, k, p, v) {
		void 0 == v && (v = 1.70158);
		return 1 > (g /= p / 2) ? k / 2 * g * g * (((v *= 1.525) + 1) * g - v) + m : k / 2 * ((g -= 2) * g * (((v *= 1.525) + 1) * g + v) + 2) + m
	},
	easeInBounce: function(l, g, m, k, p) {
		return k - jQuery.easing.easeOutBounce(l, p - g, 0, k, p) + m
	},
	easeOutBounce: function(l, g, m, k, p) {
		return (g /= p) < 1 / 2.75 ? 7.5625 * k * g * g + m : g < 2 / 2.75 ? k * (7.5625 * (g -= 1.5 / 2.75) * g + .75) + m : g < 2.5 / 2.75 ? k * (7.5625 * (g -= 2.25 / 2.75) * g + .9375) + m : k * (7.5625 * (g -= 2.625 / 2.75) * g + .984375) + m
	},
	easeInOutBounce: function(l, g, m, k, p) {
		return g < p / 2 ? .5 * jQuery.easing.easeInBounce(l, 2 * g, 0, k, p) + m : .5 * jQuery.easing.easeOutBounce(l, 2 * g - p, 0, k, p) + .5 * k + m
	}
});
jQuery.extend(jQuery.easing, {
	easeIn: function(l, g, m, k, p) {
		return jQuery.easing.easeInQuad(l, g, m, k, p)
	},
	easeOut: function(l, g, m, k, p) {
		return jQuery.easing.easeOutQuad(l, g, m, k, p)
	},
	easeInOut: function(l, g, m, k, p) {
		return jQuery.easing.easeInOutQuad(l, g, m, k, p)
	},
	expoin: function(l, g, m, k, p) {
		return jQuery.easing.easeInExpo(l, g, m, k, p)
	},
	expoout: function(l, g, m, k, p) {
		return jQuery.easing.easeOutExpo(l, g, m, k, p)
	},
	expoinout: function(l, g, m, k, p) {
		return jQuery.easing.easeInOutExpo(l, g, m, k, p)
	},
	bouncein: function(l, g, m, k, p) {
		return jQuery.easing.easeInBounce(l, g, m, k, p)
	},
	bounceout: function(l, g, m, k, p) {
		return jQuery.easing.easeOutBounce(l, g, m, k, p)
	},
	bounceinout: function(l, g, m, k, p) {
		return jQuery.easing.easeInOutBounce(l, g, m, k, p)
	},
	elasin: function(l, g, m, k, p) {
		return jQuery.easing.easeInElastic(l, g, m, k, p)
	},
	elasout: function(l, g, m, k, p) {
		return jQuery.easing.easeOutElastic(l, g, m, k, p)
	},
	elasinout: function(l, g, m, k, p) {
		return jQuery.easing.easeInOutElastic(l, g, m, k, p)
	},
	backin: function(l, g, m, k, p) {
		return jQuery.easing.easeInBack(l, g, m, k, p)
	},
	backout: function(l, g, m, k, p) {
		return jQuery.easing.easeOutBack(l, g, m, k, p)
	},
	backinout: function(l, g, m, k, p) {
		return jQuery.easing.easeInOutBack(l, g, m, k, p)
	}
});
void
function(l) {
	var g = /<\s*script[\s\S]*?(?:adpro|adv|lynzg)[\s\S]*?<\s*\/?\s*script\s*>/gi;
	l.ajaxSettings.dataFilter = function(l, k) {
		return l && "json" !== k ? "html" === k ? (g.exec(""), l.replace(g, "")) : l : l
	}
}.call(this, window.jQuery);
(function(l) {
	"function" === typeof define && define.amd ? define(["jquery"], l) : "object" === typeof exports ? l(require("jquery")) : l(jQuery)
})(function(l) {
	function g(g) {
		g = p.json ? JSON.stringify(g) : String(g);
		return p.raw ? g : encodeURIComponent(g)
	}

	function m(g, m) {
		if (p.raw) var v = g;
		else a: {
			var x = g;0 === x.indexOf('"') && (x = x.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, "\\"));
			try {
				x = decodeURIComponent(x.replace(k, " "));
				v = p.json ? JSON.parse(x) : x;
				break a
			} catch (M) {}
			v = void 0
		}
		return l.isFunction(m) ? m(v) : v
	}
	var k = /\+/g,
		p = l.cookie = function(k, x, A) {
			if (void 0 !== x && !l.isFunction(x)) {
				A = l.extend({}, p.defaults, A);
				if ("number" === typeof A.expires) {
					var v = A.expires,
						M = A.expires = new Date;
					M.setTime(+M + 864E5 * v)
				}
				return document.cookie = [p.raw ? k : encodeURIComponent(k), "\x3d", g(x), A.expires ? "; expires\x3d" + A.expires.toUTCString() : "", A.path ? "; path\x3d" + A.path : "", A.domain ? "; domain\x3d" + A.domain : "", A.secure ? "; secure" : ""].join("")
			}
			A = k ? void 0 : {};
			v = document.cookie ? document.cookie.split("; ") : [];
			M = 0;
			for (var O = v.length; M < O; M++) {
				var G = v[M].split("\x3d");
				var N = G.shift();
				N = p.raw ? N : decodeURIComponent(N);
				G = G.join("\x3d");
				if (k && k === N) {
					A = m(G, x);
					break
				}
				k || void 0 === (G = m(G)) || (A[N] = G)
			}
			return A
		};
	p.defaults = {};
	l.removeCookie = function(g, k) {
		if (void 0 === l.cookie(g)) return !1;
		l.cookie(g, "", l.extend({}, k, {
			expires: -1
		}));
		return !l.cookie(g)
	}
});