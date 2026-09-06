import { n as e } from "../utils-DxMzH_GB.js";
import * as t from "vue";
import { Comment as n, Fragment as r, Teleport as i, Transition as a, camelize as o, cloneVNode as s, computed as c, createBlock as l, createCommentVNode as u, createElementBlock as d, createElementVNode as f, createStaticVNode as p, createTextVNode as m, createVNode as h, customRef as g, defineComponent as _, effectScope as v, getCurrentInstance as y, getCurrentScope as b, guardReactiveProps as x, h as S, inject as C, isRef as w, mergeModels as T, mergeProps as E, nextTick as D, normalizeClass as O, normalizeProps as k, normalizeStyle as ee, onBeforeUnmount as te, onMounted as A, onScopeDispose as ne, onUnmounted as j, onUpdated as re, openBlock as M, provide as N, reactive as P, readonly as ie, ref as F, renderList as I, renderSlot as L, resolveDynamicComponent as ae, shallowReadonly as oe, shallowRef as R, toDisplayString as z, toHandlerKey as se, toHandlers as ce, toRef as le, toRefs as ue, toValue as B, triggerRef as de, unref as V, useCssVars as fe, useId as pe, useModel as me, useSlots as he, useTemplateRef as ge, vShow as _e, watch as H, watchEffect as ve, withCtx as U, withDirectives as ye, withKeys as be, withModifiers as xe } from "vue";
import { z as Se } from "zod";
//#region node_modules/reka-ui/dist/shared/createContext.js
function Ce(e, t) {
	let n = typeof e == "string" && !t ? `${e}Context` : t, r = Symbol(n);
	return [(t) => {
		let n = C(r, t);
		if (n || n === null) return n;
		throw Error(`Injection \`${r.toString()}\` not found. Component must be used within ${Array.isArray(e) ? `one of the following components: ${e.join(", ")}` : `\`${e}\``}`);
	}, (e) => (N(r, e), e)];
}
//#endregion
//#region node_modules/reka-ui/dist/shared/getActiveElement.js
function we() {
	let e = document.activeElement;
	if (e == null) return null;
	for (; e != null && e.shadowRoot != null && e.shadowRoot.activeElement != null;) e = e.shadowRoot.activeElement;
	return e;
}
//#endregion
//#region node_modules/reka-ui/dist/shared/handleAndDispatchCustomEvent.js
function Te(e, t, n) {
	let r = n.originalEvent.target, i = new CustomEvent(e, {
		bubbles: !1,
		cancelable: !0,
		detail: n
	});
	t && r.addEventListener(e, t, { once: !0 }), r.dispatchEvent(i);
}
//#endregion
//#region node_modules/reka-ui/dist/shared/nullish.js
function Ee(e) {
	return e == null;
}
//#endregion
//#region node_modules/@vueuse/shared/dist/index.js
function De(e, t) {
	return b() ? (ne(e, t), !0) : !1;
}
function Oe(e) {
	let t = !1, n, r = v(!0);
	return ((...i) => (t ||= (n = r.run(() => e(...i)), !0), n));
}
var ke = typeof window < "u" && typeof document < "u";
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
var Ae = (e) => e !== void 0, je = Object.prototype.toString, Me = (e) => je.call(e) === "[object Object]", Ne = () => {}, Pe = /* #__PURE__ */ Fe();
function Fe() {
	var e, t;
	return ke && !!((e = window) != null && (e = e.navigator) != null && e.userAgent) && (/iP(?:ad|hone|od)/.test(window.navigator.userAgent) || ((t = window) == null || (t = t.navigator) == null ? void 0 : t.maxTouchPoints) > 2 && /iPad|Macintosh/.test(window?.navigator.userAgent));
}
function Ie(...e) {
	if (e.length !== 1) return le(...e);
	let t = e[0];
	return typeof t == "function" ? ie(g(() => ({
		get: t,
		set: Ne
	}))) : F(t);
}
function Le(e, t) {
	function n(...n) {
		return new Promise((r, i) => {
			Promise.resolve(e(() => t.apply(this, n), {
				fn: t,
				thisArg: this,
				args: n
			})).then(r).catch(i);
		});
	}
	return "cancel" in e && Object.assign(n, {
		cancel: e.cancel,
		flush: e.flush,
		isPending: e.isPending
	}), n;
}
function Re(e, t = {}) {
	let n, r, i = Ne, a = Ne, o = R(!1), s = (e) => {
		clearTimeout(e), i(), i = Ne;
	}, c;
	return Object.assign((l) => {
		let u = B(e), d = B(t.maxWait);
		return n && s(n), u <= 0 || d !== void 0 && d <= 0 ? (r &&= (s(r), void 0), o.value = !1, Promise.resolve(l())) : (o.value = !0, new Promise((e, f) => {
			i = t.rejectOnCancel ? f : e, a = e, c = l, d && !r && (r = setTimeout(() => {
				n && s(n), r = void 0, o.value = !1, e(c());
			}, d)), n = setTimeout(() => {
				r && s(r), r = void 0, o.value = !1, e(l());
			}, u);
		}));
	}, {
		cancel: () => {
			n &&= (s(n), void 0), r &&= (s(r), void 0), o.value = !1, a = Ne;
		},
		flush: () => {
			if (o.value) {
				n &&= (clearTimeout(n), void 0), r &&= (clearTimeout(r), void 0), o.value = !1;
				let e = a;
				i = Ne, a = Ne, e(c());
			}
		},
		isPending: oe(o)
	});
}
function ze(e) {
	return Array.isArray(e) ? e : [e];
}
function Be(e) {
	let t = Object.create(null);
	return ((n) => t[n] || (t[n] = e(n)));
}
var Ve = /-(\w)/g, He = Be((e) => e.replace(Ve, (e, t) => t ? t.toUpperCase() : ""));
function Ue(e) {
	return e || y();
}
function We(e) {
	if (!ke) return e;
	let t = 0, n, r, i = () => {
		--t, r && t <= 0 && (r.stop(), n = void 0, r = void 0);
	};
	return ((...a) => (t += 1, r || (r = v(!0), n = r.run(() => e(...a))), De(i), n));
}
/* @__NO_SIDE_EFFECTS__ */
function Ge(e, t) {
	if (typeof Symbol < "u") {
		let n = { ...e };
		return Object.defineProperty(n, Symbol.iterator, {
			enumerable: !1,
			value() {
				let e = 0;
				return { next: () => ({
					value: t[e++],
					done: e > t.length
				}) };
			}
		}), n;
	}
	return Object.assign([...t], e);
}
function Ke(e) {
	return w(e) ? P(new Proxy({}, {
		get(t, n, r) {
			return V(Reflect.get(e.value, n, r));
		},
		set(t, n, r) {
			return w(e.value[n]) && !w(r) ? e.value[n].value = r : e.value[n] = r, !0;
		},
		deleteProperty(t, n) {
			return Reflect.deleteProperty(e.value, n);
		},
		has(t, n) {
			return Reflect.has(e.value, n);
		},
		ownKeys() {
			return Object.keys(e.value);
		},
		getOwnPropertyDescriptor() {
			return {
				enumerable: !0,
				configurable: !0
			};
		}
	})) : P(e);
}
function qe(e) {
	return Ke(c(e));
}
function Je(e, ...t) {
	let n = t.flat(), r = n[0];
	return qe(() => Object.fromEntries(typeof r == "function" ? Object.entries(ue(e)).filter(([e, t]) => r(B(t), e)) : n.map((t) => [t, Ie(e, t)])));
}
function Ye(e, t = 200, n = {}) {
	return Le(Re(t, n), e);
}
function Xe(e, t) {
	Ue(t) && te(e, t);
}
function Ze(e, t, n) {
	return H(e, t, {
		...n,
		immediate: !0
	});
}
//#endregion
//#region node_modules/@vueuse/core/dist/index.js
function Qe(e = {}) {
	let { inheritAttrs: t = !0, name: n = "ReusableTemplate" } = e, r = R(), i = _({
		name: `${n}.define`,
		setup(e, { slots: t }) {
			return () => {
				r.value = t.default;
			};
		}
	}), a = _({
		inheritAttrs: t,
		name: `${n}.reuse`,
		props: e.props,
		setup(n, { attrs: i, slots: a }) {
			return () => {
				if (!r.value) throw Error("[VueUse] Failed to find the definition of reusable template");
				let o = r.value?.call(r, {
					...e.props == null ? $e(i) : n,
					$slots: a
				});
				return t && o?.length === 1 ? o[0] : o;
			};
		}
	});
	return /* @__PURE__ */ Ge({
		define: i,
		reuse: a
	}, [i, a]);
}
function $e(e) {
	let t = {};
	for (let n in e) t[He(n)] = e[n];
	return t;
}
var et = ke ? window : void 0;
ke && window.document, ke && window.navigator, ke && window.location;
function tt(e) {
	let t = B(e);
	return t?.$el ?? t;
}
function nt(...e) {
	let t = (e, t, n, r) => (e.addEventListener(t, n, r), () => e.removeEventListener(t, n, r)), n = c(() => {
		let t = ze(B(e[0])).filter((e) => e != null);
		return t.every((e) => typeof e != "string") ? t : void 0;
	});
	return Ze(() => [
		n.value?.map((e) => tt(e)) ?? [et].filter((e) => e != null),
		ze(B(n.value ? e[1] : e[0])),
		ze(V(n.value ? e[2] : e[1])),
		B(n.value ? e[3] : e[2])
	], ([e, n, r, i], a, o) => {
		if (!e?.length || !n?.length || !r?.length) return;
		let s = Me(i) ? { ...i } : i, c = e.flatMap((e) => n.flatMap((n) => r.map((r) => t(e, n, r, s))));
		o(() => {
			c.forEach((e) => e());
		});
	}, { flush: "post" });
}
function rt() {
	let e = R(!1), t = y();
	return t && A(() => {
		e.value = !0;
	}, t), e;
}
function it(e) {
	return typeof e == "function" ? e : typeof e == "string" ? (t) => t.key === e : Array.isArray(e) ? (t) => e.includes(t.key) : () => !0;
}
function at(...e) {
	let t, n, r = {};
	e.length === 3 ? (t = e[0], n = e[1], r = e[2]) : e.length === 2 ? typeof e[1] == "object" ? (t = !0, n = e[0], r = e[1]) : (t = e[0], n = e[1]) : (t = !0, n = e[0]);
	let { target: i = et, eventName: a = "keydown", passive: o = !1, dedupe: s = !1 } = r, c = it(t);
	return nt(i, a, (e) => {
		e.repeat && B(s) || c(e) && n(e);
	}, o);
}
function ot(e) {
	return JSON.parse(JSON.stringify(e));
}
var st = /* @__PURE__ */ new Map();
/* @__NO_SIDE_EFFECTS__ */
function ct(e) {
	function t(t) {
		let n = st.get(e) || /* @__PURE__ */ new Set();
		n.add(t), st.set(e, n);
		let i = () => r(t);
		return De(i), i;
	}
	function n(e) {
		function n(...t) {
			r(n), e(...t);
		}
		return t(n);
	}
	function r(t) {
		let n = st.get(e);
		n && (n.delete(t), n.size || i());
	}
	function i() {
		st.delete(e);
	}
	function a(t, n) {
		var r;
		(r = st.get(e)) == null || r.forEach((e) => e(t, n));
	}
	return {
		on: t,
		once: n,
		off: r,
		emit: a,
		reset: i
	};
}
function lt(e, t, n, r = {}) {
	var i, a;
	let { clone: o = !1, passive: s = !1, eventName: l, deep: u = !1, defaultValue: d, shouldEmit: f } = r, p = y(), m = n || p?.emit || (p == null || (i = p.$emit) == null ? void 0 : i.bind(p)) || (p == null || (a = p.proxy) == null || (a = a.$emit) == null ? void 0 : a.bind(p?.proxy)), h = l;
	t ||= "modelValue", h ||= `update:${t.toString()}`;
	let g = (e) => o ? typeof o == "function" ? o(e) : ot(e) : e, _ = () => Ae(e[t]) ? g(e[t]) : d, v = (e) => {
		f ? f(e) && m(h, e) : m(h, e);
	};
	if (s) {
		let n = F(_()), r = !1;
		return H(() => e[t], (e) => {
			r || (r = !0, n.value = g(e), D(() => r = !1));
		}), H(n, (n) => {
			!r && (n !== e[t] || u) && v(n);
		}, { deep: u }), n;
	}
	return c({
		get() {
			return _();
		},
		set(e) {
			v(e);
		}
	});
}
//#endregion
//#region node_modules/reka-ui/dist/shared/renderSlotFragments.js
function ut(e) {
	return e ? e.flatMap((e) => e.type === r ? ut(e.children) : [e]) : [];
}
//#endregion
//#region node_modules/reka-ui/dist/shared/useArrowNavigation.js
var dt = ["INPUT", "TEXTAREA"];
function ft(e, t, n, r = {}) {
	if (!t || r.enableIgnoredElement && dt.includes(t.nodeName)) return null;
	let { arrowKeyOptions: i = "both", attributeName: a = "[data-reka-collection-item]", itemsArray: o = [], loop: s = !0, dir: c = "ltr", preventScroll: l = !0, focus: u = !1 } = r, [d, f, p, m, h, g] = [
		e.key === "ArrowRight",
		e.key === "ArrowLeft",
		e.key === "ArrowUp",
		e.key === "ArrowDown",
		e.key === "Home",
		e.key === "End"
	], _ = p || m, v = d || f;
	if (!h && !g && (!_ && !v || i === "vertical" && v || i === "horizontal" && _)) return null;
	let y = n ? Array.from(n.querySelectorAll(a)) : o;
	if (!y.length) return null;
	l && e.preventDefault();
	let b = null;
	return v || _ ? b = pt(y, t, {
		goForward: _ ? m : c === "ltr" ? d : f,
		loop: s
	}) : h ? b = y.at(0) || null : g && (b = y.at(-1) || null), u && b?.focus(), b;
}
function pt(e, t, n, r = e.includes(t) ? e.length : e.length + 1) {
	if (--r === 0) return null;
	let i = e.indexOf(t), a;
	if (a = i === -1 ? n.goForward ? 0 : e.length - 1 : n.goForward ? i + 1 : i - 1, !n.loop && (a < 0 || a >= e.length)) return null;
	let o = e[(a + e.length) % e.length];
	return o ? o.hasAttribute("disabled") && o.getAttribute("disabled") !== "false" ? pt(e, o, n, r) : o : null;
}
//#endregion
//#region node_modules/reka-ui/dist/ConfigProvider/ConfigProvider.js
var [mt, ht] = /*#__PURE__*/ Ce("ConfigProvider"), W = /*#__PURE__*/ P({
	layersRoot: /* @__PURE__ */ new Set(),
	layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
	originalBodyPointerEvents: void 0,
	branches: /* @__PURE__ */ new Set()
});
//#endregion
//#region node_modules/defu/dist/defu.mjs
function gt(e) {
	if (typeof e != "object" || !e) return !1;
	let t = Object.getPrototypeOf(e);
	return t !== null && t !== Object.prototype && Object.getPrototypeOf(t) !== null || Symbol.iterator in e ? !1 : Symbol.toStringTag in e ? Object.prototype.toString.call(e) === "[object Module]" : !0;
}
function _t(e, t, n = ".", r) {
	if (!gt(t)) return _t(e, {}, n, r);
	let i = { ...t };
	for (let t of Object.keys(e)) {
		if (t === "__proto__" || t === "constructor") continue;
		let a = e[t];
		a != null && (r && r(i, t, a, n) || (i[t] = Array.isArray(a) && Array.isArray(i[t]) ? [...a, ...i[t]] : gt(a) && gt(i[t]) ? _t(a, i[t], (n ? `${n}.` : "") + t.toString(), r) : a));
	}
	return i;
}
function vt(e) {
	return (...t) => t.reduce((t, n) => _t(t, n, "", e), {});
}
var yt = vt(), bt = We(() => {
	let e = F(/* @__PURE__ */ new Map()), t = F(), n = c(() => {
		for (let t of e.value.values()) if (t) return !0;
		return !1;
	}), r = mt({ scrollBody: F(!0) }), i = null, a = () => {
		document.body.style.paddingRight = "", document.body.style.marginRight = "", W.layersWithOutsidePointerEventsDisabled.size === 0 && (document.body.style.pointerEvents = ""), document.documentElement.style.removeProperty("--scrollbar-width"), document.body.style.overflow = t.value ?? "", Pe && i?.(), t.value = void 0;
	};
	return H(n, (e, o) => {
		if (!ke) return;
		if (!e) {
			o && a();
			return;
		}
		t.value === void 0 && (t.value = document.body.style.overflow);
		let s = window.innerWidth - document.documentElement.clientWidth, c = {
			padding: s,
			margin: 0
		}, l = r.scrollBody?.value ? typeof r.scrollBody.value == "object" ? yt({
			padding: r.scrollBody.value.padding === !0 ? s : r.scrollBody.value.padding,
			margin: r.scrollBody.value.margin === !0 ? s : r.scrollBody.value.margin
		}, c) : c : {
			padding: 0,
			margin: 0
		};
		s > 0 && (document.body.style.paddingRight = typeof l.padding == "number" ? `${l.padding}px` : String(l.padding), document.body.style.marginRight = typeof l.margin == "number" ? `${l.margin}px` : String(l.margin), document.documentElement.style.setProperty("--scrollbar-width", `${s}px`), document.body.style.overflow = "hidden"), Pe && (i = nt(document, "touchmove", (e) => Ct(e), { passive: !1 })), D(() => {
			n.value && (document.body.style.pointerEvents = "none", document.body.style.overflow = "hidden");
		});
	}, {
		immediate: !0,
		flush: "sync"
	}), e;
});
function xt(e) {
	let t = Math.random().toString(36).substring(2, 7), n = bt();
	n.value.set(t, e ?? !1);
	let r = c({
		get: () => n.value.get(t) ?? !1,
		set: (e) => n.value.set(t, e)
	});
	return Xe(() => {
		n.value.delete(t);
	}), r;
}
function St(e) {
	let t = window.getComputedStyle(e);
	if (t.overflowX === "scroll" || t.overflowY === "scroll" || t.overflowX === "auto" && e.clientWidth < e.scrollWidth || t.overflowY === "auto" && e.clientHeight < e.scrollHeight) return !0;
	{
		let t = e.parentNode;
		return !(t instanceof Element) || t.tagName === "BODY" ? !1 : St(t);
	}
}
function Ct(e) {
	let t = e || window.event, n = t.target;
	return n instanceof Element && St(n) ? !1 : t.touches.length > 1 || (t.preventDefault && t.cancelable && t.preventDefault(), !1);
}
//#endregion
//#region node_modules/reka-ui/dist/shared/useComposing.js
var wt = /[\p{Script=Han}\p{Script=Hiragana}\p{Script=Katakana}\p{Script=Hangul}\p{Script=Bopomofo}]/u, Tt = /android/i;
function Et() {
	return typeof navigator < "u" && Tt.test(navigator.userAgent);
}
function Dt(e) {
	let t = F(!1), n = F(!0), r = F(!1), i = c(() => t.value && n.value);
	function a() {
		t.value = !0, n.value = !0, r.value = !1;
	}
	function o(e) {
		e.data && (wt.test(e.data) ? (n.value = !0, r.value = !0) : Et() && !r.value && (n.value = !1));
	}
	function s(n) {
		D(() => {
			t.value = !1, e?.(n);
		});
	}
	return {
		isComposing: t,
		shouldDeferInput: i,
		handleCompositionStart: a,
		handleCompositionUpdate: o,
		handleCompositionEnd: s
	};
}
//#endregion
//#region node_modules/reka-ui/dist/shared/useDirection.js
function Ot(e) {
	let t = mt({ dir: F("ltr") });
	return c(() => e?.value || t.dir?.value || "ltr");
}
//#endregion
//#region node_modules/reka-ui/dist/shared/useEmitAsProps.js
function kt(e) {
	let t = y(), n = t?.type.emits, r = {};
	return n?.length || console.warn(`No emitted event found. Please check component: ${t?.type.__name}`), n?.forEach((t) => {
		r[se(o(t))] = (...n) => e(t, ...n);
	}), r;
}
//#endregion
//#region node_modules/reka-ui/dist/shared/useForwardExpose.js
function G() {
	let e = y(), t = F(), n = c(() => r());
	re(() => {
		n.value !== r() && de(t);
	});
	function r() {
		return t.value && "$el" in t.value && ["#text", "#comment"].includes(t.value.$el.nodeName) ? t.value.$el.nextElementSibling : tt(t);
	}
	let i = Object.assign({}, e.exposed), a = {};
	for (let t in e.props) Object.defineProperty(a, t, {
		enumerable: !0,
		configurable: !0,
		get: () => e.props[t]
	});
	if (Object.keys(i).length > 0) for (let e in i) Object.defineProperty(a, e, {
		enumerable: !0,
		configurable: !0,
		get: () => i[e]
	});
	Object.defineProperty(a, "$el", {
		enumerable: !0,
		configurable: !0,
		get: () => e.vnode.el
	}), e.exposed = a;
	function o(n) {
		if (t.value = n, n && (Object.defineProperty(a, "$el", {
			enumerable: !0,
			configurable: !0,
			get: () => n instanceof Element ? n : n.$el
		}), !(n instanceof Element) && !Object.hasOwn(n, "$el"))) {
			let t = n.$.exposed, r = Object.assign({}, a);
			for (let e in t) Object.defineProperty(r, e, {
				enumerable: !0,
				configurable: !0,
				get: () => t[e]
			});
			e.exposed = r;
		}
	}
	return {
		forwardRef: o,
		currentRef: t,
		currentElement: n
	};
}
//#endregion
//#region node_modules/aria-hidden/dist/es2015/index.js
var At = function(e) {
	return typeof document > "u" ? null : (Array.isArray(e) ? e[0] : e).ownerDocument.body;
}, jt = /* @__PURE__ */ new WeakMap(), Mt = /* @__PURE__ */ new WeakMap(), Nt = {}, Pt = 0, Ft = function(e) {
	return e && (e.host || Ft(e.parentNode));
}, It = function(e, t) {
	return t.map(function(t) {
		if (e.contains(t)) return t;
		var n = Ft(t);
		return n && e.contains(n) ? n : (console.error("aria-hidden", t, "in not contained inside", e, ". Doing nothing"), null);
	}).filter(function(e) {
		return !!e;
	});
}, Lt = function(e, t, n, r) {
	var i = It(t, Array.isArray(e) ? e : [e]);
	Nt[n] || (Nt[n] = /* @__PURE__ */ new WeakMap());
	var a = Nt[n], o = [], s = /* @__PURE__ */ new Set(), c = new Set(i), l = function(e) {
		e && !s.has(e) && (s.add(e), l(e.parentNode));
	};
	i.forEach(l);
	var u = function(e) {
		e && !c.has(e) && Array.prototype.forEach.call(e.children, function(e) {
			if (s.has(e)) u(e);
			else try {
				var t = e.getAttribute(r), i = t !== null && t !== "false", c = (jt.get(e) || 0) + 1, l = (a.get(e) || 0) + 1;
				jt.set(e, c), a.set(e, l), o.push(e), c === 1 && i && Mt.set(e, !0), l === 1 && e.setAttribute(n, "true"), i || e.setAttribute(r, "true");
			} catch (t) {
				console.error("aria-hidden: cannot operate on ", e, t);
			}
		});
	};
	return u(t), s.clear(), Pt++, function() {
		o.forEach(function(e) {
			var t = jt.get(e) - 1, i = a.get(e) - 1;
			jt.set(e, t), a.set(e, i), t || (Mt.has(e) || e.removeAttribute(r), Mt.delete(e)), i || e.removeAttribute(n);
		}), Pt--, Pt || (jt = /* @__PURE__ */ new WeakMap(), jt = /* @__PURE__ */ new WeakMap(), Mt = /* @__PURE__ */ new WeakMap(), Nt = {});
	};
}, Rt = function(e, t, n) {
	n === void 0 && (n = "data-aria-hidden");
	var r = Array.from(Array.isArray(e) ? e : [e]), i = t || At(e);
	return i ? (r.push.apply(r, Array.from(i.querySelectorAll("[aria-live], script"))), Lt(r, i, n, "aria-hidden")) : function() {
		return null;
	};
};
//#endregion
//#region node_modules/reka-ui/dist/shared/useHideOthers.js
function zt(e) {
	let t;
	H(() => tt(e), (e) => {
		let n = !1;
		try {
			n = !!e?.closest("[popover]:not(:popover-open)");
		} catch {}
		e && !n ? t = Rt(e) : t && t();
	}), j(() => {
		t && t();
	});
}
//#endregion
//#region node_modules/reka-ui/dist/shared/useId.js
var Bt = 0;
function Vt(e, n = "reka") {
	if (e) return e;
	let r, i = mt({ useId: void 0 });
	return r = i.useId ? i.useId() : "useId" in t ? t.useId?.() : `${++Bt}`, n ? `${n}-${r}` : r;
}
//#endregion
//#region node_modules/reka-ui/dist/shared/useStateMachine.js
function Ht(e, t) {
	let n = F(e);
	function r(e) {
		return t[n.value][e] ?? n.value;
	}
	return {
		state: n,
		dispatch: (e) => {
			n.value = r(e);
		}
	};
}
//#endregion
//#region node_modules/reka-ui/dist/Presence/usePresence.js
function Ut(e, t) {
	let n = F({}), r = F("none"), i = F(e), a = e.value ? "mounted" : "unmounted", o, s = t.value?.ownerDocument.defaultView ?? et, { state: l, dispatch: u } = Ht(a, {
		mounted: {
			UNMOUNT: "unmounted",
			ANIMATION_OUT: "unmountSuspended"
		},
		unmountSuspended: {
			MOUNT: "mounted",
			ANIMATION_END: "unmounted"
		},
		unmounted: { MOUNT: "mounted" }
	}), d = (e) => {
		if (ke) {
			let n = new CustomEvent(e, {
				bubbles: !1,
				cancelable: !1
			});
			t.value?.dispatchEvent(n);
		}
	};
	H(e, async (e, i) => {
		let a = i !== e;
		if (await D(), a) {
			let a = r.value, o = Wt(t.value);
			e ? (u("MOUNT"), d("enter"), o === "none" && d("after-enter")) : o === "none" || o === "undefined" || n.value?.display === "none" ? (u("UNMOUNT"), d("leave"), d("after-leave")) : i && a !== o ? (u("ANIMATION_OUT"), d("leave")) : (u("UNMOUNT"), d("after-leave"));
		}
	}, { immediate: !0 });
	let f = (e) => {
		if (e.target !== t.value) return;
		let n = Wt(t.value), r = n.includes(CSS.escape(e.animationName)), a = l.value === "mounted" ? "enter" : "leave";
		if (r && (d(`after-${a}`), u("ANIMATION_END"), !i.value)) {
			let e = t.value.style.animationFillMode;
			t.value.style.animationFillMode = "forwards", o = s?.setTimeout(() => {
				t.value?.style.animationFillMode === "forwards" && (t.value.style.animationFillMode = e);
			});
		}
		n === "none" && u("ANIMATION_END");
	}, p = (e) => {
		e.target === t.value && (r.value = Wt(t.value));
	}, m = H(t, (e, t) => {
		e ? (n.value = getComputedStyle(e), e.addEventListener("animationstart", p), e.addEventListener("animationcancel", f), e.addEventListener("animationend", f)) : (u("ANIMATION_END"), o !== void 0 && s?.clearTimeout(o), t?.removeEventListener("animationstart", p), t?.removeEventListener("animationcancel", f), t?.removeEventListener("animationend", f));
	}, { immediate: !0 }), h = H(l, () => {
		let e = Wt(t.value);
		r.value = l.value === "mounted" ? e : "none";
	});
	return j(() => {
		m(), h(), t.value && (t.value.removeEventListener("animationstart", p), t.value.removeEventListener("animationcancel", f), t.value.removeEventListener("animationend", f)), o !== void 0 && s?.clearTimeout(o);
	}), { isPresent: c(() => ["mounted", "unmountSuspended"].includes(l.value)) };
}
function Wt(e) {
	return e && getComputedStyle(e).animationName || "none";
}
//#endregion
//#region node_modules/reka-ui/dist/Presence/Presence.js
var Gt = /*#__PURE__*/ _({
	name: "Presence",
	props: {
		present: {
			type: Boolean,
			required: !0
		},
		forceMount: { type: Boolean }
	},
	slots: {},
	setup(e, { slots: t, expose: n }) {
		let { present: r, forceMount: i } = ue(e), a = F(), { isPresent: o } = Ut(r, a);
		n({ present: o });
		let s = t.default({ present: o.value });
		s = ut(s || []);
		let c = y();
		if (s && s?.length > 1) {
			let e = c?.parent?.type.name ? `<${c.parent.type.name} />` : "component";
			throw Error([
				`Detected an invalid children for \`${e}\` for  \`Presence\` component.`,
				"",
				"Note: Presence works similarly to `v-if` directly, but it waits for animation/transition to finished before unmounting. So it expect only one direct child of valid VNode type.",
				"You can apply a few solutions:",
				["Provide a single child element so that `presence` directive attach correctly.", "Ensure the first child is an actual element instead of a raw text node or comment node."].map((e) => `  - ${e}`).join("\n")
			].join("\n"));
		}
		return () => i.value || r.value || o.value ? S(t.default({ present: o.value })[0], { ref: (e) => {
			let t = tt(e);
			return t?.hasAttribute === void 0 || (t?.hasAttribute("data-reka-popper-content-wrapper") ? a.value = t.firstElementChild : a.value = t), t;
		} }) : null;
	}
}), Kt = /*#__PURE__*/ _({
	name: "PrimitiveSlot",
	inheritAttrs: !1,
	setup(e, { attrs: t, slots: r }) {
		return () => {
			if (!r.default) return null;
			let e = ut(r.default()), i = e.findIndex((e) => e.type !== n);
			if (i === -1) return e;
			let a = e[i];
			delete a.props?.ref;
			let o = a.props ? E(t, a.props) : t, c = s({
				...a,
				props: {}
			}, o);
			return e.length === 1 ? c : (e[i] = c, e);
		};
	}
}), qt = [
	"area",
	"img",
	"input"
], K = /*#__PURE__*/ _({
	name: "Primitive",
	inheritAttrs: !1,
	props: {
		asChild: {
			type: Boolean,
			default: !1
		},
		as: {
			type: [String, Object],
			default: "div"
		}
	},
	setup(e, { attrs: t, slots: n }) {
		let r = e.asChild ? "template" : e.as;
		return typeof r == "string" && qt.includes(r) ? () => S(r, t) : r === "template" ? () => S(Kt, t, { default: n.default }) : () => S(e.as, t, { default: n.default });
	}
});
//#endregion
//#region node_modules/reka-ui/dist/Primitive/usePrimitiveElement.js
function Jt() {
	let e = F();
	return {
		primitiveElement: e,
		currentElement: c(() => ["#text", "#comment"].includes(e.value?.$el.nodeName) ? e.value?.$el.nextElementSibling : tt(e))
	};
}
//#endregion
//#region node_modules/reka-ui/dist/Dialog/DialogRoot.js
var [Yt, Xt] = /*#__PURE__*/ Ce("DialogRoot"), Zt = /* @__PURE__ */ _({
	inheritAttrs: !1,
	__name: "DialogRoot",
	props: {
		open: {
			type: Boolean,
			required: !1,
			default: void 0
		},
		defaultOpen: {
			type: Boolean,
			required: !1,
			default: !1
		},
		modal: {
			type: Boolean,
			required: !1,
			default: !0
		},
		unmountOnHide: {
			type: Boolean,
			required: !1,
			default: !0
		}
	},
	emits: ["update:open"],
	setup(e, { emit: t }) {
		let n = e, r = lt(n, "open", t, {
			defaultValue: n.defaultOpen,
			passive: n.open === void 0
		}), i = F(), a = F(), { modal: o, unmountOnHide: s } = ue(n);
		return Xt({
			open: r,
			modal: o,
			unmountOnHide: s,
			openModal: () => {
				r.value = !0;
			},
			onOpenChange: (e) => {
				r.value = e;
			},
			onOpenToggle: () => {
				r.value = !r.value;
			},
			contentId: "",
			titleId: "",
			descriptionId: "",
			triggerElement: i,
			contentElement: a
		}), (e, t) => L(e.$slots, "default", {
			open: V(r),
			close: () => r.value = !1
		});
	}
}), Qt = /* @__PURE__ */ _({
	__name: "DialogClose",
	props: {
		asChild: {
			type: Boolean,
			required: !1
		},
		as: {
			type: null,
			required: !1,
			default: "button"
		}
	},
	setup(e) {
		let t = e;
		G();
		let n = Yt();
		return (e, r) => (M(), l(V(K), E(t, {
			type: e.as === "button" ? "button" : void 0,
			onClick: r[0] ||= (e) => V(n).onOpenChange(!1)
		}), {
			default: U(() => [L(e.$slots, "default")]),
			_: 3
		}, 16, ["type"]));
	}
}), $t = "dismissableLayer.pointerDownOutside", en = "dismissableLayer.focusOutside";
function tn(e, t) {
	if (!(t instanceof Element)) return !1;
	let n = t.closest("[data-dismissable-layer]"), r = e.dataset.dismissableLayer === "" ? e : e.querySelector("[data-dismissable-layer]"), i = Array.from(e.ownerDocument.querySelectorAll("[data-dismissable-layer]"));
	return !!(n && (r === n || i.indexOf(r) < i.indexOf(n)));
}
function nn(e, t, n = !0) {
	let r = t?.value?.ownerDocument ?? globalThis?.document, i = F(!1), a = F(() => {});
	return ve((o) => {
		if (!ke || !B(n)) return;
		let s = async (n) => {
			let o = n.target;
			if (t?.value && o) {
				if (tn(t.value, o)) {
					i.value = !1;
					return;
				}
				if (n.target && !i.value) {
					let t = { originalEvent: n };
					function i() {
						Te($t, e, t);
					}
					n.pointerType === "touch" ? (r.removeEventListener("click", a.value), a.value = i, r.addEventListener("click", a.value, { once: !0 })) : i();
				} else r.removeEventListener("click", a.value);
				i.value = !1;
			}
		}, c = window.setTimeout(() => {
			r.addEventListener("pointerdown", s);
		}, 0);
		o(() => {
			window.clearTimeout(c), r.removeEventListener("pointerdown", s), r.removeEventListener("click", a.value);
		});
	}), { onPointerDownCapture: () => {
		B(n) && (i.value = !0);
	} };
}
function rn(e, t, n = !0) {
	let r = t?.value?.ownerDocument ?? globalThis?.document, i = F(!1);
	return ve((a) => {
		if (!ke || !B(n)) return;
		let o = async (n) => {
			if (!t?.value) return;
			await D(), await D();
			let r = n.target;
			t.value && r && !tn(t.value, r) && n.target && !i.value && Te(en, e, { originalEvent: n });
		};
		r.addEventListener("focusin", o), a(() => r.removeEventListener("focusin", o));
	}), {
		onFocusCapture: () => {
			B(n) && (i.value = !0);
		},
		onBlurCapture: () => {
			B(n) && (i.value = !1);
		}
	};
}
//#endregion
//#region node_modules/reka-ui/dist/DismissableLayer/DismissableLayer.js
var an = /* @__PURE__ */ _({
	__name: "DismissableLayer",
	props: {
		disableOutsidePointerEvents: {
			type: Boolean,
			required: !1,
			default: !1
		},
		asChild: {
			type: Boolean,
			required: !1
		},
		as: {
			type: null,
			required: !1
		},
		present: {
			type: Boolean,
			required: !1,
			default: !0
		}
	},
	emits: [
		"escapeKeyDown",
		"pointerDownOutside",
		"focusOutside",
		"interactOutside",
		"dismiss"
	],
	setup(e, { emit: t }) {
		let n = e, r = t, { forwardRef: i, currentElement: a } = G(), o = c(() => a.value?.ownerDocument ?? globalThis.document), s = c(() => W.layersRoot), u = c(() => a.value ? Array.from(s.value).indexOf(a.value) : -1), d = c(() => W.layersWithOutsidePointerEventsDisabled.size > 0), f = c(() => {
			let e = Array.from(s.value), [t] = [...W.layersWithOutsidePointerEventsDisabled].slice(-1), n = e.indexOf(t);
			return u.value >= n;
		}), p = nn(async (e) => {
			let t = [...W.branches].some((t) => t?.contains(e.target));
			n.present && f.value && !t && (r("pointerDownOutside", e), r("interactOutside", e), await D(), e.defaultPrevented || r("dismiss"));
		}, a), m = rn((e) => {
			let t = [...W.branches].some((t) => t?.contains(e.target));
			n.present && !t && (r("focusOutside", e), r("interactOutside", e), e.defaultPrevented || r("dismiss"));
		}, a);
		return at("Escape", (e) => {
			n.present && u.value === s.value.size - 1 && (r("escapeKeyDown", e), e.defaultPrevented || r("dismiss"));
		}), H([
			a,
			() => n.disableOutsidePointerEvents,
			() => n.present
		], ([e, t, n], r, i) => {
			e && n && t && (W.layersWithOutsidePointerEventsDisabled.size === 0 && (W.originalBodyPointerEvents = o.value.body.style.pointerEvents, o.value.body.style.pointerEvents = "none"), W.layersWithOutsidePointerEventsDisabled.add(e), i(() => {
				W.layersWithOutsidePointerEventsDisabled.delete(e), W.layersWithOutsidePointerEventsDisabled.size === 0 && !Ee(W.originalBodyPointerEvents) && (o.value.body.style.pointerEvents = W.originalBodyPointerEvents);
			}));
		}, { immediate: !0 }), H([a, () => n.present], ([e, t], n, r) => {
			e && t && (s.value.add(e), r(() => {
				s.value.delete(e);
			}));
		}, { immediate: !0 }), ve((e) => {
			e(() => {
				a.value && (s.value.delete(a.value), W.layersWithOutsidePointerEventsDisabled.delete(a.value));
			});
		}), (e, t) => (M(), l(V(K), {
			ref: V(i),
			"as-child": e.asChild,
			as: e.as,
			"data-dismissable-layer": "",
			style: ee({ pointerEvents: d.value ? f.value ? "auto" : "none" : void 0 }),
			onFocusCapture: V(m).onFocusCapture,
			onBlurCapture: V(m).onBlurCapture,
			onPointerdownCapture: V(p).onPointerDownCapture
		}, {
			default: U(() => [L(e.$slots, "default")]),
			_: 3
		}, 8, [
			"as-child",
			"as",
			"style",
			"onFocusCapture",
			"onBlurCapture",
			"onPointerdownCapture"
		]));
	}
}), on = Oe(() => F([]));
function sn() {
	let e = on();
	return {
		add(t) {
			let n = e.value[0];
			t !== n && n?.pause(), e.value = cn(e.value, t), e.value.unshift(t);
		},
		remove(t) {
			e.value = cn(e.value, t), e.value[0]?.resume();
		}
	};
}
function cn(e, t) {
	let n = [...e], r = n.indexOf(t);
	return r !== -1 && n.splice(r, 1), n;
}
//#endregion
//#region node_modules/reka-ui/dist/FocusScope/utils.js
var ln = "focusScope.autoFocusOnMount", un = "focusScope.autoFocusOnUnmount", dn = {
	bubbles: !1,
	cancelable: !0
};
function fn(e, { select: t = !1 } = {}) {
	let n = we();
	for (let r of e) if (vn(r, { select: t }), we() !== n) return !0;
}
function pn(e) {
	let t = mn(e);
	return [hn(t, e), hn(t.reverse(), e)];
}
function mn(e) {
	let t = [], n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, { acceptNode: (e) => {
		let t = e.tagName === "INPUT" && e.type === "hidden";
		return e.disabled || e.hidden || t ? NodeFilter.FILTER_SKIP : e.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
	} });
	for (; n.nextNode();) t.push(n.currentNode);
	return t;
}
function hn(e, t) {
	for (let n of e) if (!gn(n, { upTo: t })) return n;
}
function gn(e, { upTo: t }) {
	if (getComputedStyle(e).visibility === "hidden") return !0;
	for (; e;) {
		if (t !== void 0 && e === t) return !1;
		if (getComputedStyle(e).display === "none") return !0;
		e = e.parentElement;
	}
	return !1;
}
function _n(e) {
	return e instanceof HTMLInputElement && "select" in e;
}
function vn(e, { select: t = !1 } = {}) {
	if (e && e.focus) {
		let n = we();
		e.focus({ preventScroll: !0 }), e !== n && _n(e) && t && e.select();
	}
}
//#endregion
//#region node_modules/reka-ui/dist/FocusScope/FocusScope.js
var yn = /* @__PURE__ */ _({
	__name: "FocusScope",
	props: {
		loop: {
			type: Boolean,
			required: !1,
			default: !1
		},
		trapped: {
			type: Boolean,
			required: !1,
			default: !1
		},
		present: {
			type: Boolean,
			required: !1,
			default: !0
		},
		asChild: {
			type: Boolean,
			required: !1
		},
		as: {
			type: null,
			required: !1
		}
	},
	emits: ["mountAutoFocus", "unmountAutoFocus"],
	setup(e, { emit: t }) {
		let n = e, r = t, { currentRef: i, currentElement: a } = G(), o = F(null), s = sn(), c = /*#__PURE__*/ P({
			paused: !1,
			pause() {
				this.paused = !0;
			},
			resume() {
				this.paused = !1;
			}
		});
		ve((e) => {
			if (!ke) return;
			let t = a.value;
			if (!n.trapped) return;
			function r(e) {
				if (c.paused || !t) return;
				let n = e.target;
				t.contains(n) ? o.value = n : vn(o.value, { select: !0 });
			}
			function i(e) {
				if (c.paused || !t) return;
				let n = e.relatedTarget;
				n !== null && (t.contains(n) || vn(o.value, { select: !0 }));
			}
			function s(e) {
				let n = o.value;
				n !== null && e.some((e) => e.removedNodes.length > 0) && (t.contains(n) || vn(t));
			}
			document.addEventListener("focusin", r), document.addEventListener("focusout", i);
			let l = new MutationObserver(s);
			t && l.observe(t, {
				childList: !0,
				subtree: !0
			}), e(() => {
				document.removeEventListener("focusin", r), document.removeEventListener("focusout", i), l.disconnect();
			});
		});
		function u(e, t) {
			let n = new CustomEvent(ln, dn), i = (e) => r("mountAutoFocus", e);
			e.addEventListener(ln, i), e.dispatchEvent(n), e.removeEventListener(ln, i), n.defaultPrevented || (fn(mn(e), { select: !0 }), we() === t && vn(e));
		}
		ve(async (e) => {
			let t = a.value;
			if (await D(), !t) return;
			n.present !== !1 && s.add(c);
			let i = we();
			!t.contains(i) && n.present !== !1 && u(t, i), e(() => {
				let e = new CustomEvent(un, dn), n = (e) => {
					r("unmountAutoFocus", e);
				};
				t.addEventListener(un, n), t.dispatchEvent(e), t.setAttribute("data-focus-scope-unmounting", ""), setTimeout(() => {
					e.defaultPrevented || vn(i ?? document.body, { select: !0 }), t.removeEventListener(un, n), s.remove(c), t.removeAttribute("data-focus-scope-unmounting");
				}, 0);
			});
		}), H(() => n.present, async (e, t) => {
			if (!ke) return;
			if (e === !1 && t === !0) {
				s.remove(c);
				return;
			}
			if (e !== !0 || t !== !1) return;
			s.add(c), await D();
			let n = a.value;
			if (!n) return;
			let r = we();
			n.contains(r) || u(n, r);
		});
		function d(e) {
			if (!n.loop && !n.trapped || c.paused) return;
			let t = e.key === "Tab" && !e.altKey && !e.ctrlKey && !e.metaKey, r = we();
			if (t && r) {
				let t = e.currentTarget, [i, a] = pn(t);
				i && a ? !e.shiftKey && r === a ? (e.preventDefault(), n.loop && vn(i, { select: !0 })) : e.shiftKey && r === i && (e.preventDefault(), n.loop && vn(a, { select: !0 })) : r === t && e.preventDefault();
			}
		}
		return (e, t) => (M(), l(V(K), {
			ref_key: "currentRef",
			ref: i,
			tabindex: "-1",
			"as-child": e.asChild,
			as: e.as,
			onKeydown: d
		}, {
			default: U(() => [L(e.$slots, "default")]),
			_: 3
		}, 8, ["as-child", "as"]));
	}
}), bn = ["Enter", " "], xn = [
	"ArrowDown",
	"PageUp",
	"Home"
], Sn = [
	"ArrowUp",
	"PageDown",
	"End"
];
[...xn, ...Sn], [...bn], [...bn];
function Cn(e) {
	return e ? "open" : "closed";
}
//#endregion
//#region node_modules/reka-ui/dist/Dialog/utils.js
var wn = "DialogTitle", Tn = "DialogContent";
function En({ titleName: e = wn, contentName: t = Tn, componentLink: n = "dialog.html#title", titleId: r, descriptionId: i, contentElement: a }) {
	let o = `Warning: \`${t}\` requires a \`${e}\` for the component to be accessible for screen reader users.

If you want to hide the \`${e}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://www.reka-ui.com/docs/components/${n}`, s = `Warning: Missing \`Description\` or \`aria-describedby="undefined"\` for ${t}.`;
	A(() => {
		document.getElementById(r) || console.warn(o);
		let e = a.value?.getAttribute("aria-describedby");
		i && e && (document.getElementById(i) || console.warn(s));
	});
}
//#endregion
//#region node_modules/reka-ui/dist/Dialog/DialogContentImpl.js
var Dn = /* @__PURE__ */ _({
	__name: "DialogContentImpl",
	props: {
		forceMount: {
			type: Boolean,
			required: !1
		},
		trapFocus: {
			type: Boolean,
			required: !1
		},
		disableOutsidePointerEvents: {
			type: Boolean,
			required: !1
		},
		asChild: {
			type: Boolean,
			required: !1
		},
		as: {
			type: null,
			required: !1
		},
		present: {
			type: Boolean,
			required: !1
		}
	},
	emits: [
		"escapeKeyDown",
		"pointerDownOutside",
		"focusOutside",
		"interactOutside",
		"openAutoFocus",
		"closeAutoFocus"
	],
	setup(e, { emit: t }) {
		let n = e, r = t, i = Yt(), { forwardRef: a, currentElement: o } = G();
		return i.titleId ||= Vt(void 0, "reka-dialog-title"), i.descriptionId ||= Vt(void 0, "reka-dialog-description"), A(() => {
			i.contentElement = o, we() !== document.body && (i.triggerElement.value = we());
		}), process.env.NODE_ENV !== "production" && En({
			titleName: "DialogTitle",
			contentName: "DialogContent",
			componentLink: "dialog.html#title",
			titleId: i.titleId,
			descriptionId: i.descriptionId,
			contentElement: o
		}), (e, t) => (M(), l(V(yn), {
			"as-child": "",
			loop: "",
			trapped: n.trapFocus,
			present: n.present,
			onMountAutoFocus: t[5] ||= (e) => r("openAutoFocus", e),
			onUnmountAutoFocus: t[6] ||= (e) => r("closeAutoFocus", e)
		}, {
			default: U(() => [h(V(an), E({
				id: V(i).contentId,
				ref: V(a),
				as: e.as,
				"as-child": e.asChild,
				present: n.present,
				"disable-outside-pointer-events": e.disableOutsidePointerEvents,
				role: "dialog",
				"aria-describedby": V(i).descriptionId,
				"aria-labelledby": V(i).titleId,
				"data-state": V(Cn)(V(i).open.value)
			}, e.$attrs, {
				onDismiss: t[0] ||= (e) => V(i).onOpenChange(!1),
				onEscapeKeyDown: t[1] ||= (e) => r("escapeKeyDown", e),
				onFocusOutside: t[2] ||= (e) => r("focusOutside", e),
				onInteractOutside: t[3] ||= (e) => r("interactOutside", e),
				onPointerDownOutside: t[4] ||= (e) => r("pointerDownOutside", e)
			}), {
				default: U(() => [L(e.$slots, "default")]),
				_: 3
			}, 16, [
				"id",
				"as",
				"as-child",
				"present",
				"disable-outside-pointer-events",
				"aria-describedby",
				"aria-labelledby",
				"data-state"
			])]),
			_: 3
		}, 8, ["trapped", "present"]));
	}
}), On = /* @__PURE__ */ _({
	__name: "DialogContentModal",
	props: {
		forceMount: {
			type: Boolean,
			required: !1
		},
		trapFocus: {
			type: Boolean,
			required: !1
		},
		disableOutsidePointerEvents: {
			type: Boolean,
			required: !1,
			default: !0
		},
		asChild: {
			type: Boolean,
			required: !1
		},
		as: {
			type: null,
			required: !1
		},
		present: {
			type: Boolean,
			required: !0
		}
	},
	emits: [
		"escapeKeyDown",
		"pointerDownOutside",
		"focusOutside",
		"interactOutside",
		"openAutoFocus",
		"closeAutoFocus"
	],
	setup(e, { emit: t }) {
		let n = e, r = t, i = Yt(), a = kt(r), { forwardRef: o, currentElement: s } = G();
		zt(c(() => n.present ? s.value : void 0));
		let u = c(() => {
			let { present: e, ...t } = n;
			return t;
		});
		return H(() => n.present, (e, t) => {
			!e && t && i.triggerElement.value?.focus();
		}), (e, t) => (M(), l(Dn, E({
			...u.value,
			...V(a)
		}, {
			ref: V(o),
			present: e.present,
			"trap-focus": V(i).open.value,
			"disable-outside-pointer-events": n.disableOutsidePointerEvents,
			onCloseAutoFocus: t[0] ||= (e) => {
				e.defaultPrevented || (e.preventDefault(), V(i).triggerElement.value?.focus());
			},
			onPointerDownOutside: t[1] ||= (e) => {
				let t = e.detail.originalEvent, n = t.button === 0 && t.ctrlKey === !0;
				(t.button === 2 || n) && e.preventDefault();
			},
			onFocusOutside: t[2] ||= (e) => {
				e.preventDefault();
			}
		}), {
			default: U(() => [L(e.$slots, "default")]),
			_: 3
		}, 16, [
			"present",
			"trap-focus",
			"disable-outside-pointer-events"
		]));
	}
}), kn = /* @__PURE__ */ _({
	__name: "DialogContentNonModal",
	props: {
		forceMount: {
			type: Boolean,
			required: !1
		},
		trapFocus: {
			type: Boolean,
			required: !1
		},
		disableOutsidePointerEvents: {
			type: Boolean,
			required: !1
		},
		asChild: {
			type: Boolean,
			required: !1
		},
		as: {
			type: null,
			required: !1
		},
		present: {
			type: Boolean,
			required: !0
		}
	},
	emits: [
		"escapeKeyDown",
		"pointerDownOutside",
		"focusOutside",
		"interactOutside",
		"openAutoFocus",
		"closeAutoFocus"
	],
	setup(e, { emit: t }) {
		let n = e, r = kt(t);
		G();
		let i = Yt(), a = F(!1), o = F(!1), s = c(() => {
			let { present: e, ...t } = n;
			return t;
		});
		return H(() => n.present, (e, t) => {
			!e && t && (a.value || i.triggerElement.value?.focus(), a.value = !1, o.value = !1);
		}), (e, t) => (M(), l(Dn, E({
			...s.value,
			...V(r)
		}, {
			present: e.present,
			"trap-focus": !1,
			"disable-outside-pointer-events": !1,
			onCloseAutoFocus: t[0] ||= (e) => {
				e.defaultPrevented || (a.value || V(i).triggerElement.value?.focus(), e.preventDefault()), a.value = !1, o.value = !1;
			},
			onInteractOutside: t[1] ||= (e) => {
				e.defaultPrevented || (a.value = !0, e.detail.originalEvent.type === "pointerdown" && (o.value = !0));
				let t = e.target;
				V(i).triggerElement.value?.contains(t) && e.preventDefault(), e.detail.originalEvent.type === "focusin" && o.value && e.preventDefault();
			}
		}), {
			default: U(() => [L(e.$slots, "default")]),
			_: 3
		}, 16, ["present"]));
	}
}), An = /* @__PURE__ */ _({
	__name: "DialogContent",
	props: {
		forceMount: {
			type: Boolean,
			required: !1
		},
		disableOutsidePointerEvents: {
			type: Boolean,
			required: !1,
			default: void 0
		},
		asChild: {
			type: Boolean,
			required: !1
		},
		as: {
			type: null,
			required: !1
		}
	},
	emits: [
		"escapeKeyDown",
		"pointerDownOutside",
		"focusOutside",
		"interactOutside",
		"openAutoFocus",
		"closeAutoFocus"
	],
	setup(e, { emit: t }) {
		let n = e, r = t, i = Yt(), a = kt(r), { forwardRef: o } = G();
		return (e, t) => (M(), l(V(Gt), {
			present: e.forceMount || V(i).open.value,
			"force-mount": e.forceMount || !V(i).unmountOnHide.value
		}, {
			default: U(({ present: t }) => [V(i).modal.value ? ye((M(), l(On, E({
				key: 0,
				ref: V(o),
				present: V(i).unmountOnHide.value || t
			}, {
				...n,
				...V(a),
				...e.$attrs
			}), {
				default: U(() => [L(e.$slots, "default")]),
				_: 2
			}, 1040, ["present"])), [[_e, V(i).unmountOnHide.value || t]]) : ye((M(), l(kn, E({
				key: 1,
				ref: V(o),
				present: V(i).unmountOnHide.value || t
			}, {
				...n,
				...V(a),
				...e.$attrs
			}), {
				default: U(() => [L(e.$slots, "default")]),
				_: 2
			}, 1040, ["present"])), [[_e, V(i).unmountOnHide.value || t]])]),
			_: 3
		}, 8, ["present", "force-mount"]));
	}
}), jn = /* @__PURE__ */ _({
	__name: "DialogDescription",
	props: {
		asChild: {
			type: Boolean,
			required: !1
		},
		as: {
			type: null,
			required: !1,
			default: "p"
		}
	},
	setup(e) {
		let t = e;
		G();
		let n = Yt();
		return (e, r) => (M(), l(V(K), E(t, { id: V(n).descriptionId }), {
			default: U(() => [L(e.$slots, "default")]),
			_: 3
		}, 16, ["id"]));
	}
}), Mn = /* @__PURE__ */ _({
	__name: "DialogOverlayImpl",
	props: {
		asChild: {
			type: Boolean,
			required: !1
		},
		as: {
			type: null,
			required: !1
		},
		present: {
			type: Boolean,
			required: !1,
			default: !0
		}
	},
	setup(e) {
		let t = e, n = Yt(), r = xt(t.present);
		return H(() => t.present, (e) => r.value = e), G(), (e, t) => (M(), l(V(K), {
			as: e.as,
			"as-child": e.asChild,
			"data-state": V(n).open.value ? "open" : "closed",
			style: { "pointer-events": "auto" },
			onPointerdown: t[0] ||= xe(() => {}, [
				"left",
				"self",
				"prevent"
			])
		}, {
			default: U(() => [L(e.$slots, "default")]),
			_: 3
		}, 8, [
			"as",
			"as-child",
			"data-state"
		]));
	}
}), Nn = /* @__PURE__ */ _({
	__name: "DialogOverlay",
	props: {
		forceMount: {
			type: Boolean,
			required: !1
		},
		asChild: {
			type: Boolean,
			required: !1
		},
		as: {
			type: null,
			required: !1
		}
	},
	setup(e) {
		let t = Yt(), { forwardRef: n } = G();
		return (e, r) => V(t)?.modal.value ? (M(), l(V(Gt), {
			key: 0,
			present: e.forceMount || V(t).open.value,
			"force-mount": e.forceMount || !V(t).unmountOnHide.value
		}, {
			default: U(({ present: r }) => [ye(h(Mn, E(e.$attrs, {
				ref: V(n),
				as: e.as,
				"as-child": e.asChild,
				present: V(t).unmountOnHide.value || r
			}), {
				default: U(() => [L(e.$slots, "default")]),
				_: 2
			}, 1040, [
				"as",
				"as-child",
				"present"
			]), [[_e, V(t).unmountOnHide.value || r]])]),
			_: 3
		}, 8, ["present", "force-mount"])) : u("v-if", !0);
	}
}), Pn = /* @__PURE__ */ _({
	__name: "Teleport",
	props: {
		to: {
			type: null,
			required: !1
		},
		disabled: {
			type: Boolean,
			required: !1
		},
		defer: {
			type: Boolean,
			required: !1
		},
		forceMount: {
			type: Boolean,
			required: !1
		}
	},
	setup(e) {
		let t = e, n = mt({}), r = c(() => t.to ?? n.teleportTo?.value ?? "body"), a = rt();
		return (e, t) => V(a) || e.forceMount ? (M(), l(i, {
			key: 0,
			to: r.value,
			disabled: e.disabled,
			defer: e.defer
		}, [L(e.$slots, "default")], 8, [
			"to",
			"disabled",
			"defer"
		])) : u("v-if", !0);
	}
}), Fn = /* @__PURE__ */ _({
	__name: "DialogPortal",
	props: {
		to: {
			type: null,
			required: !1
		},
		disabled: {
			type: Boolean,
			required: !1
		},
		defer: {
			type: Boolean,
			required: !1
		},
		forceMount: {
			type: Boolean,
			required: !1
		}
	},
	setup(e) {
		let t = e;
		return (e, n) => (M(), l(V(Pn), k(x(t)), {
			default: U(() => [L(e.$slots, "default")]),
			_: 3
		}, 16));
	}
}), In = /* @__PURE__ */ _({
	__name: "DialogTitle",
	props: {
		asChild: {
			type: Boolean,
			required: !1
		},
		as: {
			type: null,
			required: !1,
			default: "h2"
		}
	},
	setup(e) {
		let t = e, n = Yt();
		return G(), (e, r) => (M(), l(V(K), E(t, { id: V(n).titleId }), {
			default: U(() => [L(e.$slots, "default")]),
			_: 3
		}, 16, ["id"]));
	}
}), Ln = /* @__PURE__ */ _({
	__name: "DialogTrigger",
	props: {
		asChild: {
			type: Boolean,
			required: !1
		},
		as: {
			type: null,
			required: !1,
			default: "button"
		}
	},
	setup(e) {
		let t = e, n = Yt(), { forwardRef: r, currentElement: i } = G();
		return n.contentId ||= Vt(void 0, "reka-dialog-content"), A(() => {
			n.triggerElement.value = i.value;
		}), (e, i) => (M(), l(V(K), E(t, {
			ref: V(r),
			type: e.as === "button" ? "button" : void 0,
			"aria-haspopup": "dialog",
			"aria-expanded": V(n).open.value || !1,
			"aria-controls": V(n).open.value ? V(n).contentId : void 0,
			"data-state": V(n).open.value ? "open" : "closed",
			onClick: V(n).onOpenToggle
		}), {
			default: U(() => [L(e.$slots, "default")]),
			_: 3
		}, 16, [
			"type",
			"aria-expanded",
			"aria-controls",
			"data-state",
			"onClick"
		]));
	}
}), Rn = /* @__PURE__ */ _({
	__name: "VisuallyHidden",
	props: {
		feature: {
			type: String,
			required: !1,
			default: "focusable"
		},
		asChild: {
			type: Boolean,
			required: !1
		},
		as: {
			type: null,
			required: !1,
			default: "span"
		}
	},
	setup(e) {
		return (e, t) => (M(), l(V(K), {
			as: e.as,
			"as-child": e.asChild,
			"aria-hidden": e.feature === "focusable" || e.feature === "fully-hidden" ? "true" : void 0,
			"data-hidden": e.feature === "fully-hidden" ? "" : void 0,
			tabindex: e.feature === "fully-hidden" ? "-1" : void 0,
			style: {
				position: "absolute",
				border: 0,
				width: "1px",
				height: "1px",
				padding: 0,
				margin: "-1px",
				overflow: "hidden",
				clip: "rect(0, 0, 0, 0)",
				clipPath: "inset(50%)",
				whiteSpace: "nowrap",
				wordWrap: "normal",
				top: "-1px",
				left: "-1px"
			}
		}, {
			default: U(() => [L(e.$slots, "default")]),
			_: 3
		}, 8, [
			"as",
			"as-child",
			"aria-hidden",
			"data-hidden",
			"tabindex"
		]));
	}
}), zn = /* @__PURE__ */ _({
	inheritAttrs: !1,
	__name: "VisuallyHiddenInputBubble",
	props: {
		name: {
			type: String,
			required: !0
		},
		value: {
			type: null,
			required: !0
		},
		checked: {
			type: Boolean,
			required: !1,
			default: void 0
		},
		required: {
			type: Boolean,
			required: !1
		},
		disabled: {
			type: Boolean,
			required: !1
		},
		feature: {
			type: String,
			required: !1,
			default: "fully-hidden"
		}
	},
	setup(e) {
		let t = e, { primitiveElement: n, currentElement: r } = Jt(), i = c(() => t.checked ?? t.value);
		return H(i, (e, t) => {
			if (!r.value) return;
			let n = r.value, i = window.HTMLInputElement.prototype, a = Object.getOwnPropertyDescriptor(i, "value").set;
			if (a && e !== t) {
				let t = new Event("input", { bubbles: !0 }), r = new Event("change", { bubbles: !0 });
				a.call(n, e), n.dispatchEvent(t), n.dispatchEvent(r);
			}
		}), (e, r) => (M(), l(Rn, E({
			ref_key: "primitiveElement",
			ref: n
		}, {
			...t,
			...e.$attrs
		}, { as: "input" }), null, 16));
	}
}), Bn = /* @__PURE__ */ _({
	inheritAttrs: !1,
	__name: "VisuallyHiddenInput",
	props: {
		name: {
			type: String,
			required: !0
		},
		value: {
			type: null,
			required: !0
		},
		checked: {
			type: Boolean,
			required: !1,
			default: void 0
		},
		required: {
			type: Boolean,
			required: !1
		},
		disabled: {
			type: Boolean,
			required: !1
		},
		feature: {
			type: String,
			required: !1,
			default: "fully-hidden"
		}
	},
	setup(e) {
		let t = e, n = c(() => typeof t.value == "object" && Array.isArray(t.value) && t.value.length === 0 && t.required), i = c(() => typeof t.value == "string" || typeof t.value == "number" || typeof t.value == "boolean" || t.value === null || t.value === void 0 ? [{
			name: t.name,
			value: t.value
		}] : typeof t.value == "object" && Array.isArray(t.value) ? t.value.flatMap((e, n) => typeof e == "object" ? Object.entries(e).map(([e, r]) => ({
			name: `${t.name}[${n}][${e}]`,
			value: r
		})) : {
			name: `${t.name}[${n}]`,
			value: e
		}) : t.value !== null && typeof t.value == "object" && !Array.isArray(t.value) ? Object.entries(t.value).map(([e, n]) => ({
			name: `${t.name}[${e}]`,
			value: n
		})) : []);
		return (e, a) => (M(), d(r, null, [u(" We render single input if it's required "), n.value ? (M(), l(zn, E({ key: e.name }, {
			...t,
			...e.$attrs
		}, {
			name: e.name,
			value: e.value
		}), null, 16, ["name", "value"])) : (M(!0), d(r, { key: 1 }, I(i.value, (n) => (M(), l(zn, E({ key: n.name }, { ref_for: !0 }, {
			...t,
			...e.$attrs
		}, {
			name: n.name,
			value: n.value
		}), null, 16, ["name", "value"]))), 128))], 2112));
	}
}), Vn = /* @__PURE__ */ _({
	__name: "Label",
	props: {
		for: {
			type: String,
			required: !1
		},
		asChild: {
			type: Boolean,
			required: !1
		},
		as: {
			type: null,
			required: !1,
			default: "label"
		}
	},
	setup(e) {
		let t = e;
		return G(), (e, n) => (M(), l(V(K), E(t, { onMousedown: n[0] ||= (e) => {
			!e.defaultPrevented && e.detail > 1 && e.preventDefault();
		} }), {
			default: U(() => [L(e.$slots, "default")]),
			_: 3
		}, 16));
	}
}), [Hn, Un] = /*#__PURE__*/ Ce("PinInputRoot"), Wn = /* @__PURE__ */ _({
	inheritAttrs: !1,
	__name: "PinInputRoot",
	props: {
		modelValue: {
			type: null,
			required: !1
		},
		defaultValue: {
			type: null,
			required: !1
		},
		placeholder: {
			type: String,
			required: !1,
			default: ""
		},
		mask: {
			type: Boolean,
			required: !1
		},
		otp: {
			type: Boolean,
			required: !1
		},
		type: {
			type: null,
			required: !1,
			default: "text"
		},
		dir: {
			type: String,
			required: !1
		},
		disabled: {
			type: Boolean,
			required: !1
		},
		id: {
			type: String,
			required: !1
		},
		asChild: {
			type: Boolean,
			required: !1
		},
		as: {
			type: null,
			required: !1
		},
		name: {
			type: String,
			required: !1
		},
		required: {
			type: Boolean,
			required: !1
		}
	},
	emits: ["update:modelValue", "complete"],
	setup(e, { emit: t }) {
		let n = e, r = t, { mask: i, otp: a, placeholder: o, type: s, disabled: u, dir: d } = ue(n), { forwardRef: f } = G(), p = Ot(d), m = lt(n, "modelValue", r, {
			defaultValue: n.defaultValue ?? [],
			passive: !0,
			deep: !0
		}), g = c(() => Array.isArray(m.value) ? [...m.value] : []), _ = F(/* @__PURE__ */ new Set());
		function v(e) {
			_.value.add(e);
		}
		let y = c(() => n.type === "number"), b = c(() => g.value.filter((e) => !!e || y.value && e === 0).length === _.value.size);
		return H(m, () => {
			b.value && r("complete", m.value);
		}, { deep: !0 }), Un({
			modelValue: m,
			currentModelValue: g,
			mask: i,
			otp: a,
			placeholder: o,
			type: s,
			dir: p,
			disabled: u,
			isCompleted: b,
			inputElements: _,
			onInputElementChange: v,
			isNumericMode: y
		}), (e, t) => (M(), l(V(K), E(e.$attrs, {
			ref: V(f),
			dir: V(p),
			"data-complete": b.value ? "" : void 0,
			"data-disabled": V(u) ? "" : void 0
		}), {
			default: U(() => [L(e.$slots, "default", { modelValue: V(m) }), h(Bn, {
				id: e.id,
				as: "input",
				feature: "focusable",
				tabindex: "-1",
				value: g.value.join(""),
				name: e.name ?? "",
				disabled: V(u),
				required: e.required,
				onFocus: t[0] ||= (e) => Array.from(_.value)?.[0]?.focus()
			}, null, 8, [
				"id",
				"value",
				"name",
				"disabled",
				"required"
			])]),
			_: 3
		}, 16, [
			"dir",
			"data-complete",
			"data-disabled"
		]));
	}
}), Gn = /* @__PURE__ */ _({
	__name: "PinInputInput",
	props: {
		index: {
			type: Number,
			required: !0
		},
		disabled: {
			type: Boolean,
			required: !1
		},
		asChild: {
			type: Boolean,
			required: !1
		},
		as: {
			type: null,
			required: !1,
			default: "input"
		}
	},
	setup(e) {
		let t = e, n = Hn(), r = c(() => [...n.inputElements.value]), i = c(() => n.currentModelValue.value[t.index]), a = c(() => t.disabled || n.disabled.value), o = c(() => n.otp.value), s = c(() => n.mask.value), u = /^\d*$/, d = /\D/g, { primitiveElement: f, currentElement: p } = Jt(), { isComposing: m, handleCompositionStart: h, handleCompositionEnd: g } = Dt((e) => {
			let i = e.target, a = e.data || i.value;
			if (n.isNumericMode.value) {
				let e = a.replace(d, "");
				if (!e) {
					i.value = "";
					return;
				}
				if (e.length > 1) {
					T(e);
					return;
				}
				i.value = e, O(t.index, e);
				let n = r.value[t.index + 1];
				n && n.focus();
				return;
			}
			if (a.length > 1) {
				T(a);
				return;
			}
			i.value = a, O(t.index, a);
			let o = r.value[t.index + 1];
			o && o.focus();
		});
		function _(e) {
			if (m.value || e.isComposing) return;
			let i = e.target;
			if ((e.data?.length ?? 0) > 1) {
				T(i.value);
				return;
			}
			if (n.isNumericMode.value && !u.test(i.value)) {
				i.value = i.value.replace(d, "");
				return;
			}
			i.value = e.data || i.value.slice(-1), O(t.index, i.value);
			let a = r.value[t.index + 1];
			a && a.focus();
		}
		function v() {
			D(() => {
				let e = p.value;
				e && (e.placeholder = !e.value && e === we() ? "" : n.placeholder.value);
			});
		}
		function y(e) {
			m.value || e.isComposing || ft(e, we(), void 0, {
				itemsArray: r.value,
				focus: !0,
				loop: !1,
				arrowKeyOptions: "horizontal",
				dir: n.dir.value
			});
		}
		function b(e) {
			if (e.preventDefault(), e.target.value) O(t.index, "");
			else {
				let e = r.value[t.index - 1];
				e && (e.focus(), O(t.index - 1, ""));
			}
		}
		function x(e) {
			e.key === "Delete" && (e.preventDefault(), O(t.index, ""));
		}
		function S(e) {
			if (n.otp.value) {
				let e = r.value.findIndex((e, t) => n.currentModelValue.value[t] === "" || n.currentModelValue.value[t] === void 0);
				if (e !== -1 && e < t.index) {
					r.value[e].focus();
					return;
				}
			}
			e.target.setSelectionRange(1, 1), v();
		}
		function C(e) {
			v();
		}
		function w(e) {
			e.preventDefault();
			let t = e.clipboardData;
			if (!t) return;
			let r = t.getData("text");
			T(n.isNumericMode.value ? r.replace(d, "") : r);
		}
		function T(e) {
			let i = [...n.currentModelValue.value], a = e.length >= r.value.length ? 0 : t.index, o = Math.min(a + e.length, r.value.length);
			for (let t = a; t < o; t++) {
				let o = r.value[t], s = e[t - a];
				if (n.isNumericMode.value) {
					let e = Number.parseInt(s);
					if (Number.isNaN(e)) continue;
					i[t] = e;
				} else i[t] = s;
				o.focus();
			}
			n.modelValue.value = i, r.value[o]?.focus();
		}
		function E(e) {
			let t = e.length - 1;
			for (; t >= 0 && e[t] === "";) e.pop(), t--;
			return e;
		}
		function O(e, t) {
			let r = [...n.currentModelValue.value];
			if (n.isNumericMode.value) {
				let n = +t;
				t === "" || isNaN(n) ? delete r[e] : r[e] = n;
			} else r[e] = t;
			n.modelValue.value = E(r);
		}
		return H(i, v), A(() => {
			n.onInputElementChange(p.value);
		}), j(() => {
			n.inputElements?.value.delete(p.value);
		}), (e, t) => (M(), l(V(K), {
			ref_key: "primitiveElement",
			ref: f,
			autocapitalize: "none",
			as: e.as,
			"as-child": e.asChild,
			autocomplete: o.value ? "one-time-code" : "false",
			type: s.value ? "password" : "text",
			inputmode: V(n).isNumericMode.value ? "numeric" : "text",
			pattern: V(n).isNumericMode.value ? "[0-9]*" : void 0,
			placeholder: V(n).placeholder.value,
			value: i.value,
			disabled: a.value,
			"data-disabled": a.value ? "" : void 0,
			"data-complete": V(n).isCompleted.value ? "" : void 0,
			"aria-label": `pin input ${e.index + 1} of ${r.value.length}`,
			onInput: t[0] ||= (e) => _(e),
			onKeydown: [
				be(y, [
					"left",
					"right",
					"up",
					"down",
					"home",
					"end"
				]),
				be(b, ["backspace"]),
				be(x, ["delete"])
			],
			onFocus: S,
			onBlur: C,
			onPaste: w,
			onCompositionstart: V(h),
			onCompositionend: V(g)
		}, {
			default: U(() => [L(e.$slots, "default")]),
			_: 3
		}, 8, [
			"as",
			"as-child",
			"autocomplete",
			"type",
			"inputmode",
			"pattern",
			"placeholder",
			"value",
			"disabled",
			"data-disabled",
			"data-complete",
			"aria-label",
			"onCompositionstart",
			"onCompositionend"
		]));
	}
}), Kn = /* @__PURE__ */ _({
	__name: "BaseSeparator",
	props: {
		orientation: {
			type: String,
			required: !1,
			default: "horizontal"
		},
		decorative: {
			type: Boolean,
			required: !1
		},
		asChild: {
			type: Boolean,
			required: !1
		},
		as: {
			type: null,
			required: !1
		}
	},
	setup(e) {
		let t = e, n = ["horizontal", "vertical"];
		function r(e) {
			return n.includes(e);
		}
		let i = c(() => r(t.orientation) ? t.orientation : "horizontal"), a = c(() => i.value === "vertical" ? t.orientation : void 0), o = c(() => t.decorative ? { role: "none" } : {
			"aria-orientation": a.value,
			role: "separator"
		});
		return (e, t) => (M(), l(V(K), E({
			as: e.as,
			"as-child": e.asChild,
			"data-orientation": i.value
		}, o.value), {
			default: U(() => [L(e.$slots, "default")]),
			_: 3
		}, 16, [
			"as",
			"as-child",
			"data-orientation"
		]));
	}
}), qn = /* @__PURE__ */ _({
	__name: "Separator",
	props: {
		orientation: {
			type: String,
			required: !1,
			default: "horizontal"
		},
		decorative: {
			type: Boolean,
			required: !1
		},
		asChild: {
			type: Boolean,
			required: !1
		},
		as: {
			type: null,
			required: !1
		}
	},
	setup(e) {
		let t = e;
		return (e, n) => (M(), l(Kn, k(x(t)), {
			default: U(() => [L(e.$slots, "default")]),
			_: 3
		}, 16));
	}
});
//#endregion
//#region node_modules/@nuxt/ui/dist/runtime/composables/useForwardProps.js
function Jn(e, t) {
	let n = t ? kt(t) : {};
	return c(() => {
		let t = w(e) ? e.value : e, r = { ...n };
		for (let e in t) {
			let n = t[e];
			n !== void 0 && (r[e] = n);
		}
		return r;
	});
}
//#endregion
//#region virtual:nuxt-ui-app-config
var Yn = {
	ui: {
		colors: {
			primary: "green",
			secondary: "blue",
			success: "green",
			info: "blue",
			warning: "yellow",
			error: "red",
			neutral: "slate"
		},
		icons: {
			arrowDown: "i-lucide-arrow-down",
			arrowLeft: "i-lucide-arrow-left",
			arrowRight: "i-lucide-arrow-right",
			arrowUp: "i-lucide-arrow-up",
			caution: "i-lucide-circle-alert",
			check: "i-lucide-check",
			chevronDoubleLeft: "i-lucide-chevrons-left",
			chevronDoubleRight: "i-lucide-chevrons-right",
			chevronDown: "i-lucide-chevron-down",
			chevronLeft: "i-lucide-chevron-left",
			chevronRight: "i-lucide-chevron-right",
			chevronUp: "i-lucide-chevron-up",
			close: "i-lucide-x",
			copy: "i-lucide-copy",
			copyCheck: "i-lucide-copy-check",
			dark: "i-lucide-moon",
			drag: "i-lucide-grip-vertical",
			ellipsis: "i-lucide-ellipsis",
			error: "i-lucide-circle-x",
			external: "i-lucide-arrow-up-right",
			eye: "i-lucide-eye",
			eyeOff: "i-lucide-eye-off",
			file: "i-lucide-file",
			folder: "i-lucide-folder",
			folderOpen: "i-lucide-folder-open",
			hash: "i-lucide-hash",
			info: "i-lucide-info",
			light: "i-lucide-sun",
			loading: "i-lucide-loader-circle",
			menu: "i-lucide-menu",
			minus: "i-lucide-minus",
			panelClose: "i-lucide-panel-left-close",
			panelOpen: "i-lucide-panel-left-open",
			plus: "i-lucide-plus",
			reload: "i-lucide-rotate-ccw",
			search: "i-lucide-search",
			stop: "i-lucide-square",
			star: "i-lucide-star",
			success: "i-lucide-circle-check",
			system: "i-lucide-monitor",
			tip: "i-lucide-lightbulb",
			upload: "i-lucide-upload",
			warning: "i-lucide-triangle-alert"
		},
		tv: { twMergeConfig: {} },
		skeleton: { base: "bg-accented" }
	},
	colorMode: !0,
	icon: {}
}, Xn = P(Yn), q = () => Xn;
//#endregion
//#region node_modules/@nuxt/ui/dist/runtime/composables/defineLocale.js
// @__NO_SIDE_EFFECTS__
function Zn(e) {
	return yt(e, { dir: "ltr" });
}
String.fromCharCode;
var Qn = /^[\s\w\0+.-]{2,}:([/\\]{1,2})/, $n = /^[\s\w\0+.-]{2,}:([/\\]{2})?/, er = /^([/\\]\s*){2,}[^/\\]/;
function tr(e, t = {}) {
	return typeof t == "boolean" && (t = { acceptRelative: t }), t.strict ? Qn.test(e) : $n.test(e) || (t.acceptRelative ? er.test(e) : !1);
}
//#endregion
//#region node_modules/@nuxt/ui/dist/runtime/utils/index.js
function nr(e, t) {
	let n = { ...e };
	for (let e of t) delete n[e];
	return n;
}
function rr(e, t, n) {
	typeof t == "string" && (t = t.split(".").map((e) => {
		let t = Number(e);
		return Number.isNaN(t) ? e : t;
	}));
	let r = e;
	for (let e of t) {
		if (r == null) return n;
		r = r[e];
	}
	return r === void 0 ? n : r;
}
function ir(e) {
	let t = Number.parseFloat(e);
	return Number.isNaN(t) ? e : t;
}
function ar(e, t) {
	return !e && !t ? "" : [...Array.isArray(e) ? e : [e], t].filter(Boolean);
}
//#endregion
//#region node_modules/@nuxt/ui/dist/runtime/utils/locale.js
function or(e) {
	return (t, n) => sr(t, n, V(e));
}
function sr(e, t, n) {
	return rr(n, `messages.${e}`, e).replace(/\{(\w+)\}/g, (e, n) => `${t?.[n] ?? `{${n}}`}`);
}
function cr(e) {
	return {
		lang: c(() => V(e).name),
		code: c(() => V(e).code),
		dir: c(() => V(e).dir),
		locale: w(e) ? e : F(e),
		t: or(e)
	};
}
//#endregion
//#region node_modules/@nuxt/ui/dist/runtime/locale/en.js
var lr = /* @__PURE__ */ Zn({
	name: "English",
	code: "en",
	messages: {
		alert: { close: "Close" },
		authForm: {
			hidePassword: "Hide password",
			showPassword: "Show password",
			submit: "Continue"
		},
		banner: { close: "Close" },
		calendar: {
			nextMonth: "Next month",
			nextYear: "Next year",
			prevMonth: "Previous month",
			prevYear: "Previous year"
		},
		carousel: {
			dots: "Choose slide to display",
			goto: "Go to slide {slide}",
			next: "Next",
			prev: "Prev"
		},
		chatPrompt: { placeholder: "Type your message here…" },
		chatPromptSubmit: { label: "Send prompt" },
		colorMode: {
			dark: "Dark",
			light: "Light",
			switchToDark: "Switch to dark mode",
			switchToLight: "Switch to light mode",
			system: "System"
		},
		commandPalette: {
			back: "Back",
			close: "Close",
			noData: "No data",
			noMatch: "No matching data",
			placeholder: "Type a command or search…"
		},
		contentSearch: {
			links: "Links",
			search: "Results",
			theme: "Theme"
		},
		contentSearchButton: { label: "Search…" },
		contentToc: { title: "On this page" },
		dropdownMenu: {
			noMatch: "No matching data",
			search: "Search…"
		},
		dashboardSearch: { theme: "Theme" },
		dashboardSearchButton: { label: "Search…" },
		dashboardSidebarCollapse: {
			collapse: "Collapse sidebar",
			expand: "Expand sidebar"
		},
		dashboardSidebarToggle: {
			close: "Close sidebar",
			open: "Open sidebar"
		},
		drawer: { close: "Close" },
		error: { clear: "Back to home" },
		fileUpload: { removeFile: "Remove {filename}" },
		header: {
			close: "Close menu",
			open: "Open menu"
		},
		inputMenu: {
			create: "Create \"{label}\"",
			noData: "No data",
			noMatch: "No matching data"
		},
		inputNumber: {
			decrement: "Decrement",
			increment: "Increment"
		},
		listbox: {
			noData: "No data",
			noMatch: "No matching data",
			search: "Search…"
		},
		modal: { close: "Close" },
		pricingTable: { caption: "Pricing plan comparison" },
		prose: {
			codeCollapse: {
				closeText: "Collapse",
				name: "code",
				openText: "Expand"
			},
			collapsible: {
				closeText: "Hide",
				name: "properties",
				openText: "Show"
			},
			pre: { copy: "Copy code to clipboard" },
			prompt: {
				copy: "Copy prompt",
				openIn: "Open in {name}"
			}
		},
		chatReasoning: {
			thinking: "Thinking…",
			thought: "Thought",
			thoughtFor: "Thought for {duration}"
		},
		sidebar: {
			close: "Close",
			toggle: "Toggle"
		},
		selectMenu: {
			create: "Create \"{label}\"",
			noData: "No data",
			noMatch: "No matching data",
			search: "Search…"
		},
		slideover: { close: "Close" },
		table: { noData: "No data" },
		toast: { close: "Close" }
	}
}), ur = Symbol.for("nuxt-ui.locale-context"), dr = We((e) => {
	let t = e || le(C(ur, lr));
	return cr(c(() => t.value || lr));
}), [fr, pr] = Ce("UTheme", "RootContext"), mr = { defaults: c(() => ({})) };
function hr(e = mr) {
	return fr(e);
}
function gr(e) {
	return e.replace(/-(\w)/g, (e, t) => t.toUpperCase());
}
function _r(e) {
	return e.replace(/[A-Z]/g, (e) => `-${e.toLowerCase()}`);
}
function vr(e, t) {
	return !e || !e.props ? !1 : e.props[gr(t)] !== void 0 || e.props[_r(t)] !== void 0;
}
function yr(e, t) {
	let n = y(), { defaults: r } = hr(), i = q();
	return new Proxy(t, {
		get(t, a, o) {
			if (a === "__v_isReactive") return !0;
			if (a === "__v_raw") return t;
			let s = Reflect.get(t, a, o);
			if (typeof a != "string") return s;
			let c = e.includes(".") ? rr(r.value, e) : r.value[e];
			if (a === "ui") {
				let e = c?.ui;
				return !s && !e ? s : yt(s ?? {}, e ?? {});
			}
			if (a === "class") {
				let e = c?.class;
				return e === void 0 ? s : s === void 0 ? e : [e, s];
			}
			if (n && vr(n.vnode, a)) return s;
			let l = c?.[a];
			if (l !== void 0) return l;
			let u = (e.includes(".") ? rr(i.ui ?? {}, e) : i.ui?.[e])?.defaultVariants?.[a];
			if (u !== void 0) return u;
			let d = n?.type?.props?.[a];
			if (d && Object.prototype.hasOwnProperty.call(d, "default")) return s;
		},
		has: (e, t) => Reflect.has(e, t),
		ownKeys: (e) => Reflect.ownKeys(e),
		getOwnPropertyDescriptor: (e, t) => Reflect.getOwnPropertyDescriptor(e, t)
	});
}
//#endregion
//#region node_modules/@nuxt/ui/dist/runtime/composables/useFieldGroup.js
var br = Symbol("nuxt-ui.field-group");
function xr(e) {
	let t = C(br, void 0);
	return {
		orientation: c(() => t?.value.orientation),
		size: c(() => e?.size ?? t?.value.size)
	};
}
var Sr = _({
	name: "FieldGroupReset",
	setup(e, { slots: t }) {
		return N(br, c(() => ({
			size: void 0,
			orientation: void 0
		}))), () => t.default?.();
	}
}), Cr = Symbol("nuxt-ui.portal-target");
function wr(e) {
	let t = C(Cr, void 0), n = c(() => e.value === !0 ? t?.value : e.value), r = c(() => typeof n.value == "boolean" && !n.value), i = c(() => typeof n.value == "boolean" ? "body" : n.value);
	return c(() => ({
		to: i.value,
		disabled: r.value
	}));
}
//#endregion
//#region node_modules/@nuxt/ui/dist/runtime/utils/overlay.js
function Tr(e, t = {}) {
	let n = e.detail.originalEvent, r = n.target;
	if (!r?.isConnected) {
		e.preventDefault();
		return;
	}
	t.scrollable && (n.offsetX > r.clientWidth || n.offsetY > r.clientHeight) && e.preventDefault();
}
//#endregion
//#region node_modules/tailwind-variants/dist/chunk-OYFAXDFZ.js
var Er = Array.isArray, Dr = (e) => {
	if (!e && e !== 0 && e !== 0n) return "";
	if (typeof e == "string") return e;
	if (typeof e == "number") return e === e ? "" + e : "";
	if (typeof e == "bigint") return "" + e;
	let t = "";
	if (Er(e)) {
		let n = e.length;
		for (let r = 0; r < n; r++) {
			let n = e[r];
			if (!n && n !== 0 && n !== 0n) continue;
			let i = typeof n == "string" ? n : Dr(n);
			i && (t && (t += " "), t += i);
		}
		return t;
	}
	if (typeof e == "object") for (let n in e) e[n] && (t && (t += " "), t += n);
	return t;
}, Or = /\s+/g, kr = Array.isArray, Ar = (e) => typeof e != "string" || !e ? e : e.replace(Or, " ").trim(), jr = (e) => {
	let t = e.length;
	if (t === 0) return !1;
	let n = e.charCodeAt(0), r = e.charCodeAt(t - 1);
	if (n === 32 || r === 32 || n >= 9 && n <= 13 || n === 160 || r >= 9 && r <= 13 || r === 160) return !0;
	for (let n = 0; n < t; n++) {
		let r = e.charCodeAt(n);
		if (r >= 9 && r <= 13 || r === 160 || r === 32 && n + 1 < t && e.charCodeAt(n + 1) === 32) return !0;
	}
	return !1;
}, Mr = (...e) => {
	let t = Dr(e);
	if (t) return jr(t) ? Ar(t) : t;
}, Nr = (e) => e === !1 ? "false" : e === !0 ? "true" : e === 0 ? "0" : e, Pr = (e) => {
	if (!e || typeof e != "object") return !0;
	for (let t in e) return !1;
	return !0;
}, Fr = (e, t) => {
	if (e === t) return !0;
	if (!e || !t) return !1;
	let n = e, r = t, i = Object.keys(n), a = Object.keys(r);
	if (i.length !== a.length) return !1;
	for (let e = 0; e < i.length; e++) {
		let t = i[e];
		if (!a.includes(t) || n[t] !== r[t]) return !1;
	}
	return !0;
}, Ir = (e, t) => {
	let n = e;
	for (let e in t) if (Object.hasOwn(t, e)) {
		let r = t[e];
		n[e] = e in n ? Mr(n[e], r) : r;
	}
	return e;
}, Lr = (e, t) => {
	for (let n = 0; n < e.length; n++) {
		let r = e[n];
		kr(r) ? Lr(r, t) : r && t.push(r);
	}
}, Rr = (...e) => {
	let t = [];
	Lr(e, t);
	let n = [];
	for (let e = 0; e < t.length; e++) t[e] && n.push(t[e]);
	return n;
}, zr = (e, t) => {
	let n = e, r = t, i = {};
	for (let e in n) {
		let t = n[e];
		if (e in r) {
			let n = r[e];
			i[e] = kr(t) || kr(n) ? Rr(n, t) : typeof t == "object" && typeof n == "object" && t && n ? zr(t, n) : n + " " + t;
		} else i[e] = t;
	}
	for (let e in r) e in n || (i[e] = r[e]);
	return i;
}, Br = {
	twMerge: !0,
	twMergeConfig: {}
}, Vr = 256, Hr = 128, Ur = /* @__PURE__ */ Symbol("tv-cache-miss"), Wr = (e) => e?.class != null && e.class !== "" || e?.className != null && e.className !== "", Gr = (e) => {
	if (e === void 0) return "";
	if (e === null) return "null";
	if (typeof e == "string") return e;
	if (typeof e == "boolean") return e ? "true" : "false";
	if (typeof e == "number") return e === 0 ? "0" : String(e);
	if (typeof e == "bigint") return String(e);
	let t = Nr(e), n = typeof t;
	if (n === "string" || n === "number" || n === "boolean" || n === "bigint") return String(t);
	if (n === "object") try {
		return JSON.stringify(t);
	} catch {
		return null;
	}
	return null;
}, Kr = (e, t) => {
	if (t === void 0) return e;
	if (t === null) return e + "null";
	let n = typeof t;
	if (n === "string" || n === "number" || n === "boolean" || n === "bigint") return e + String(t);
	if (Array.isArray(t)) return e + t.join("\0");
	try {
		return e + JSON.stringify(t);
	} catch {
		return e + "?";
	}
}, qr = (e, t, n, r) => {
	let i = "", a = /* @__PURE__ */ Object.create(null);
	for (let r = 0; r < e.length; r++) {
		let o = e[r];
		a[o] = 1;
		let s = t[o];
		n && n[o] !== void 0 && (s = n[o]);
		let c = Gr(s);
		if (c === null) return null;
		i += o + ":" + c + ";";
	}
	let o = [];
	for (let e in t) e === "class" || e === "className" || a[e] || (a[e] = 1, o.push(e));
	if (n) for (let e in n) e === "class" || e === "className" || a[e] || n[e] === void 0 || (a[e] = 1, o.push(e));
	o.length > 1 && o.sort();
	for (let e = 0; e < o.length; e++) {
		let r = o[e], a = t[r];
		n && n[r] !== void 0 && (a = n[r]);
		let s = Gr(a);
		if (s === null) return null;
		i += r + ":" + s + ";";
	}
	return i;
}, Jr = (e, t) => {
	let n = "";
	for (let t = 0; t < e.length; t++) {
		let { conditionKeys: r, source: i } = e[t];
		for (let e = 0; e < r.length; e++) {
			let t = r[e];
			n += t + "=", n = Kr(n, i[t]), n += ",";
		}
		n += "c=", n = Kr(n, i.class), n += "|cn=", n = Kr(n, i.className), n += ";";
	}
	for (let e = 0; e < t.length; e++) {
		let { conditionKeys: r, source: i } = t[e];
		for (let e = 0; e < r.length; e++) {
			let t = r[e];
			n += t + "=", n = Kr(n, i[t]), n += ",";
		}
		Array.isArray(i.slots) && (n += "slots=" + i.slots.join(",") + ","), n += "c=", n = Kr(n, i.class), n += "|cn=", n = Kr(n, i.className), n += ";";
	}
	return n;
}, Yr = (e = Vr) => {
	let t = /* @__PURE__ */ new Map(), n = null;
	return {
		get(e) {
			if (t.has(e)) return t.get(e);
			if (n?.has(e)) {
				let r = n.get(e);
				return t.set(e, r), r;
			}
			return Ur;
		},
		set(r, i) {
			t.size >= e && (n = t, t = /* @__PURE__ */ new Map()), t.set(r, i);
		}
	};
}, Xr = (e = Vr) => {
	let t = Yr(e);
	return {
		get(e) {
			return t.get(e);
		},
		set(e, n) {
			t.set(e, n);
		}
	};
}, Zr = (e = Hr) => {
	let t = /* @__PURE__ */ new Map(), n = null, r = 0;
	return {
		get(e, i) {
			let a = t.get(e);
			if (a) {
				let e = a.get(i);
				if (e !== void 0 || a.has(i)) return e;
			}
			if (n) {
				let a = n.get(e);
				if (a) {
					let n = a.get(i);
					if (n !== void 0 || a.has(i)) {
						let a = t.get(e);
						return a || (a = /* @__PURE__ */ new Map(), t.set(e, a)), a.has(i) || r++, a.set(i, n), n;
					}
				}
			}
			return Ur;
		},
		set(i, a, o) {
			r >= e && (n = t, t = /* @__PURE__ */ new Map(), r = 0);
			let s = t.get(i);
			s || (s = /* @__PURE__ */ new Map(), t.set(i, s)), s.has(a) || r++, s.set(a, o);
		}
	};
}, Qr = (e, t) => {
	let n = null;
	return (r, i) => {
		if (!Wr(i)) return r;
		let a = i.class, o = i.className;
		if (a != null && a !== "" && typeof a != "string" || o != null && o !== "" && typeof o != "string") return e(t, r, a, o);
		n ??= Zr();
		let s = r ?? "", c = (typeof a == "string" ? a : "") + "\0" + (typeof o == "string" ? o : ""), l = n.get(s, c);
		if (l !== Ur) return l;
		let u = e(t, r, a, o);
		return n.set(s, c, u), u;
	};
};
function $r() {
	let e = null, t = {}, n = !1;
	return {
		get cachedTwMerge() {
			return e;
		},
		set cachedTwMerge(t) {
			e = t;
		},
		get cachedTwMergeConfig() {
			return t;
		},
		set cachedTwMergeConfig(e) {
			t = e;
		},
		get didTwMergeConfigChange() {
			return n;
		},
		set didTwMergeConfigChange(e) {
			n = e;
		},
		reset() {
			e = null, t = {}, n = !1;
		}
	};
}
var J = $r(), ei = (e) => {
	!Pr(e.twMergeConfig) && !Fr(e.twMergeConfig, J.cachedTwMergeConfig) && (J.didTwMergeConfigChange = !0, J.cachedTwMergeConfig = e.twMergeConfig);
}, ti = (e, t) => {
	let n = [];
	for (let r = 0; r < t.length; r++) {
		let i = t[r], a = e[i];
		n.push({
			key: i,
			values: a,
			isEmpty: Pr(a)
		});
	}
	return n;
}, ni = (e) => {
	if (!Array.isArray(e) || e.length === 0) return [];
	let t = [];
	for (let n = 0; n < e.length; n++) {
		let r = e[n], i = [];
		for (let e in r) e !== "class" && e !== "className" && i.push(e);
		t.push({
			conditionKeys: i,
			source: r
		});
	}
	return t;
}, ri = (e) => {
	if (!Array.isArray(e) || e.length === 0) return [];
	let t = [];
	for (let n = 0; n < e.length; n++) {
		let r = e[n], i = [];
		for (let e in r) e !== "slots" && e !== "class" && e !== "className" && i.push(e);
		t.push({
			conditionKeys: i,
			source: r
		});
	}
	return t;
}, ii = (e) => {
	let t = {};
	for (let n = 0; n < e.length; n++) {
		let r = e[n], i = r.source.slots;
		if (Array.isArray(i)) for (let e = 0; e < i.length; e++) {
			let n = i[e];
			t[n] || (t[n] = []), t[n].push(r);
		}
	}
	return t;
}, ai = (e, t) => {
	let { extend: n = null, slots: r = {}, variants: i = {}, compoundVariants: a = [], compoundSlots: o = [], defaultVariants: s = {} } = e, c = {
		...Br,
		...t
	}, l = e.slots !== void 0, u = n?.base ? Mr(n.base, e?.base) : e?.base, d = n?.variants && !Pr(n.variants) ? zr(i, n.variants) : i, f = n?.defaultVariants && !Pr(n.defaultVariants) ? {
		...n.defaultVariants,
		...s
	} : s;
	ei(c);
	let p = !n?.slots || Pr(n.slots), m = l ? p && n?.base ? Mr(e?.base, n.base) : typeof e?.base == "string" || e?.base == null ? e.base : Mr(e.base) : void 0, h = l ? {
		base: m,
		...r
	} : {}, g = p ? h : Ir({ ...n?.slots }, Pr(h) ? { base: e?.base } : h), _ = !n?.compoundVariants || Pr(n.compoundVariants) ? a : Rr(n?.compoundVariants, a), v = !n?.compoundSlots || Pr(n.compoundSlots) ? o : Rr(n?.compoundSlots, o), y = Object.keys(d);
	return {
		config: c,
		extend: n,
		base: u,
		variants: d,
		defaultVariants: f,
		slots: g,
		compoundVariants: _,
		compoundSlots: v,
		compiledVariants: null,
		compiledCompoundVariants: null,
		compiledCompoundSlots: null,
		compiledCompoundSlotsBySlot: null,
		deferredError: _ && !Array.isArray(_) ? /* @__PURE__ */ TypeError(`The "compoundVariants" prop must be an array. Received: ${typeof _}`) : v && !Array.isArray(v) ? /* @__PURE__ */ TypeError(`The "compoundSlots" prop must be an array. Received: ${typeof v}`) : null,
		mode: l || !p ? "slots" : y.length === 0 ? "plain" : "variants",
		slotKeys: null,
		variantKeys: y
	};
}, oi = (e) => e.compiledVariants === null ? (e.compiledVariants = ti(e.variants, e.variantKeys), e.compiledCompoundVariants = ni(e.compoundVariants), e.compiledCompoundSlots = ri(e.compoundSlots), e.compiledCompoundSlotsBySlot = ii(e.compiledCompoundSlots), e.slotKeys = e.slots && typeof e.slots == "object" ? Object.keys(e.slots) : [], e) : e, si = [], ci = [], li = [], ui = [], di = [], fi = (e, t, n) => {
	let r = {};
	for (let t in e) r[t] = e[t];
	if (t) for (let e in t) t[e] !== void 0 && (r[e] = t[e]);
	if (n) for (let e in n) n[e] !== void 0 && (r[e] = n[e]);
	return r;
}, pi = (e) => e == null || e === !1, mi = (e, t) => {
	if (!Array.isArray(e)) return e === t || pi(e) && pi(t);
	for (let n = 0; n < e.length; n++) {
		let r = e[n];
		if (r === t || pi(r) && pi(t)) return !0;
	}
	return !1;
}, hi = (e, t, n, r) => {
	if (e.isEmpty) return null;
	let i = r?.[e.key] ?? n?.[e.key];
	if (i === null) return null;
	let a = Nr(i);
	if (typeof a == "object") return null;
	let o = t?.[e.key], s = a ?? Nr(o);
	return e.values[s || "false"];
}, gi = (e, t) => {
	let { conditionKeys: n, source: r } = e;
	for (let e = 0; e < n.length; e++) {
		let i = n[e];
		if (!mi(r[i], t[i])) return !1;
	}
	return !0;
}, _i = (e, t, n) => {
	typeof n == "string" ? t === "base" && e.push(n) : n && typeof n == "object" && n[t] && e.push(n[t]);
}, vi = (e, t, n) => {
	let r = ci;
	r.length = 0;
	for (let i = 0; i < e.length; i++) {
		let a = hi(e[i], t, n);
		a && r.push(a);
	}
	return r;
}, yi = (e, t, n, r, i) => {
	let a = ci;
	a.length = 0;
	for (let o = 0; o < t.length; o++) {
		let s = hi(t[o], n, r, i), c = e === "base" && typeof s == "string" ? s : s && s[e];
		c && a.push(c);
	}
	return a;
}, bi = (e, t) => {
	let n = li;
	n.length = 0;
	for (let r = 0; r < e.length; r++) {
		let i = e[r];
		gi(i, t) && (i.source.class && n.push(i.source.class), i.source.className && n.push(i.source.className));
	}
	return n;
}, xi = (e, t, n) => {
	let r = ui;
	r.length = 0;
	for (let i = 0; i < t.length; i++) {
		let a = t[i];
		gi(a, n) && (_i(r, e, a.source.class), _i(r, e, a.source.className));
	}
	return r;
}, Si = (e, t) => {
	let n = di;
	n.length = 0;
	for (let r = 0; r < e.length; r++) {
		let i = e[r];
		gi(i, t) && (i.source.class && n.push(i.source.class), i.source.className && n.push(i.source.className));
	}
	return n;
}, Ci = (e, t) => {
	let { base: n, config: r } = e, i = Ur, a = Qr(t, r);
	return ((e) => (i === Ur && (i = t(r, n)), a(i, e)));
}, wi = (e, t) => {
	let { base: n, config: r, defaultVariants: i, deferredError: a, variantKeys: o } = e, s = e.compiledCompoundVariants, c = e.compiledVariants, l = si, u = null, d = Qr(t, r), f = 1, p = (e) => {
		let a = s.length > 0 ? bi(s, fi(i, e)) : void 0;
		return t(r, n, vi(c, i, e), a);
	};
	return ((t) => {
		if (a) throw a;
		(c === null || s === null) && (oi(e), c = e.compiledVariants, s = e.compiledCompoundVariants, l = e.compiledCompoundSlots ?? si);
		let n;
		if (f > 0) f--, n = p(t);
		else {
			u ??= Xr();
			let e = qr(o, i, t);
			if (e !== null) {
				let r = s.length > 0 || l.length > 0 ? Jr(s, l) : "", i = e + "#" + r, a = u.get(i);
				a === Ur ? (n = p(t), u.set(i, n)) : n = a;
			} else n = p(t);
		}
		return d(n, t);
	});
}, Ti = (e, t) => {
	let { config: n, defaultVariants: r, deferredError: i, slots: a, variantKeys: o } = e, s = null, c = null, l = null, u = null, d = !1, f = null, p = null, m = 1, h = () => {
		if (l !== null) return;
		(e.compiledVariants === null || e.compiledCompoundVariants === null || e.compiledCompoundSlots === null || e.compiledCompoundSlotsBySlot === null || e.slotKeys === null) && oi(e);
		let i = e.compiledVariants;
		s = e.compiledCompoundVariants, c = e.compiledCompoundSlots;
		let o = e.compiledCompoundSlotsBySlot;
		l = e.slotKeys, d = s.length > 0 || c.length > 0, f = Qr(t, n);
		let p = Array(l.length);
		for (let e = 0; e < l.length; e++) {
			let c = l[e], u = o[c] ?? si;
			p[e] = (e, o) => {
				let l = d ? fi(r, e, o) : void 0, f = l ? xi(c, s, l) : void 0, p = l ? Si(u, l) : void 0;
				return t(n, a[c], yi(c, i, r, e, o), f, p);
			};
		}
		u = p;
	}, g = (e) => {
		let t = l, n = u, r = f, i = {};
		for (let a = 0; a < t.length; a++) {
			let o = n[a], s = o(e);
			i[t[a]] = (t) => {
				if (t == null) return s;
				let n = !1;
				for (let e in t) if (e !== "class" && e !== "className" && t[e] !== void 0) {
					n = !0;
					break;
				}
				return r(n ? o(e, t) : s, t);
			};
		}
		return i;
	};
	return ((e) => {
		if (i) throw i;
		if (h(), m > 0) return m--, g(e);
		let t = qr(o, r, e);
		if (t === null) return g(e);
		let n = d ? Jr(s, c) : "", a = t + "#" + n;
		p ??= Yr();
		let l = p.get(a);
		if (l !== Ur) return l;
		let u = g(e);
		return p.set(a, u), u;
	});
}, Ei = (e, t) => {
	if (e.mode === "plain") return Ci(e, t);
	let n;
	return ((r) => (n ??= e.mode === "slots" ? Ti(e, t) : wi(e, t), n(r)));
}, Di = (e, t) => {
	e.variantKeys = t.variantKeys, e.extend = t.extend, e.base = t.base, e.slots = t.slots, e.variants = t.variants, e.defaultVariants = t.defaultVariants, e.compoundSlots = t.compoundSlots, e.compoundVariants = t.compoundVariants;
}, Oi = (e) => {
	let t = (t, n) => {
		let r = ai(t, n), i = Ei(r, e);
		return Di(i, r), i;
	};
	return {
		tv: t,
		createTV: (e) => (n, r) => t(n, r ? zr(e, r) : e)
	};
}, ki = (e, t) => {
	let n = e.length, r = t.length, i = Array(n + r);
	for (let t = 0; t < n; t++) i[t] = e[t];
	for (let e = 0; e < r; e++) i[n + e] = t[e];
	return i;
}, Ai = (e, t) => ({
	classGroupId: e,
	validator: t
}), ji = (e = /* @__PURE__ */ new Map(), t = null, n) => ({
	nextPart: e,
	validators: t,
	classGroupId: n
}), Mi = "-", Ni = [], Pi = "arbitrary..", Fi = (e) => {
	let t = Ri(e), { conflictingClassGroups: n, conflictingClassGroupModifiers: r } = e;
	return {
		getClassGroupId: (e) => {
			if (e[0] === "[" && e[e.length - 1] === "]") return Li(e);
			let n = e.split(Mi);
			return Ii(n, +(n[0] === "" && n.length > 1), t);
		},
		getConflictingClassGroupIds: (e, t) => {
			if (t) {
				let t = r[e], i = n[e];
				return t ? i ? ki(i, t) : t : i || Ni;
			}
			return n[e] || Ni;
		}
	};
}, Ii = (e, t, n) => {
	if (e.length - t === 0) return n.classGroupId;
	let r = e[t], i = n.nextPart.get(r);
	if (i) {
		let n = Ii(e, t + 1, i);
		if (n) return n;
	}
	let a = n.validators;
	if (a === null) return;
	let o = t === 0 ? e.join(Mi) : e.slice(t).join(Mi), s = a.length;
	for (let e = 0; e < s; e++) {
		let t = a[e];
		if (t.validator(o)) return t.classGroupId;
	}
}, Li = (e) => {
	let t = e.slice(1, -1), n = t.indexOf(":");
	if (n === -1) return;
	let r = t.slice(0, n);
	return r ? Pi + r : void 0;
}, Ri = (e) => {
	let { theme: t, classGroups: n } = e;
	return zi(n, t);
}, zi = (e, t) => {
	let n = ji();
	for (let r in e) {
		let i = e[r];
		Bi(i, n, r, t);
	}
	return n;
}, Bi = (e, t, n, r) => {
	let i = e.length;
	for (let a = 0; a < i; a++) {
		let i = e[a];
		Vi(i, t, n, r);
	}
}, Vi = (e, t, n, r) => {
	if (typeof e == "string") {
		Hi(e, t, n);
		return;
	}
	if (typeof e == "function") {
		Ui(e, t, n, r);
		return;
	}
	Wi(e, t, n, r);
}, Hi = (e, t, n) => {
	let r = e === "" ? t : Gi(t, e);
	r.classGroupId = n;
}, Ui = (e, t, n, r) => {
	if (Ki(e)) {
		Bi(e(r), t, n, r);
		return;
	}
	t.validators === null && (t.validators = []), t.validators.push(Ai(n, e));
}, Wi = (e, t, n, r) => {
	let i = Object.entries(e), a = i.length;
	for (let e = 0; e < a; e++) {
		let [a, o] = i[e];
		Bi(o, Gi(t, a), n, r);
	}
}, Gi = (e, t) => {
	let n = e, r = t.split(Mi), i = r.length;
	for (let e = 0; e < i; e++) {
		let t = r[e], i = n.nextPart.get(t);
		i || (i = ji(), n.nextPart.set(t, i)), n = i;
	}
	return n;
}, Ki = (e) => "isThemeGetter" in e && e.isThemeGetter === !0, qi = "!", Ji = 58, Yi = 47, Xi = 91, Zi = 93, Qi = 40, $i = 41, ea = 33, ta = (e, t, n, r) => ({
	modifiers: e,
	hasImportantModifier: t,
	baseClassName: n,
	maybePostfixModifierPosition: r,
	isExternal: void 0
}), na = (e) => {
	let t = [], n = 0, r = 0, i = 0, a, o = e.length;
	for (let s = 0; s < o; s++) {
		let o = e.charCodeAt(s);
		if (n === 0 && r === 0) {
			if (o === Ji) {
				t.push(e.slice(i, s)), i = s + 1;
				continue;
			}
			if (o === Yi) {
				a = s;
				continue;
			}
		}
		o === Xi ? n++ : o === Zi ? n-- : o === Qi ? r++ : o === $i && r--;
	}
	let s = t.length === 0 ? e : e.slice(i), c = s, l = !1, u = s.length - 1;
	s.charCodeAt(u) === ea ? (c = s.slice(0, -1), l = !0) : s.charCodeAt(0) === ea && (c = s.slice(1), l = !0);
	let d = a && a > i ? a - i : void 0;
	return ta(t, l, c, d);
}, ra = (e) => {
	let t = new Set(e.orderSensitiveModifiers);
	return (e) => {
		let n = [], r = [];
		for (let i = 0; i < e.length; i++) {
			let a = e[i], o = a[0] === "[", s = t.has(a);
			if (o || s) {
				if (r.length > 0) {
					r.sort();
					for (let e = 0; e < r.length; e++) n.push(r[e]);
					r = [];
				}
				n.push(a);
			} else r.push(a);
		}
		if (r.length > 0) {
			r.sort();
			for (let e = 0; e < r.length; e++) n.push(r[e]);
		}
		return n;
	};
}, ia = {
	isExternal: !0,
	classId: -1,
	conflictIds: []
}, aa = 4096, oa = 16384, sa = (e) => {
	let t = ra(e), n = ca(e), { getClassGroupId: r, getConflictingClassGroupIds: i } = Fi(e), a = /* @__PURE__ */ Object.create(null), o = /* @__PURE__ */ Object.create(null), s = 0, c = /* @__PURE__ */ new Int32Array(256), l = 0, u = /* @__PURE__ */ new Uint8Array(64), d = !1, f = (e) => {
		let t = [], n = e.length, r = -1;
		d = !1;
		for (let i = 0; i < n; i++) {
			let n = e.charCodeAt(i);
			n === 32 ? r !== -1 && (t.push(e.slice(r, i)), r = -1) : n >= 9 && n <= 13 ? (d = !0, r !== -1 && (t.push(e.slice(r, i)), r = -1)) : r === -1 && (r = i);
		}
		return r !== -1 && t.push(e.slice(r)), t;
	}, p = /* @__PURE__ */ new Map(), m = 0, h = (e) => {
		let t = p.get(e);
		if (t === void 0 && (t = m++, p.set(e, t), t >= c.length)) {
			let e = new Int32Array(c.length * 2);
			e.set(c), c = e;
		}
		return t;
	}, g = (e) => {
		let { isExternal: a, modifiers: o, hasImportantModifier: s, baseClassName: c, maybePostfixModifierPosition: l } = na(e);
		if (a) return ia;
		let u = !!l, d;
		if (u) {
			let e = c.substring(0, l);
			d = r(e);
			let t = d && n[d] ? r(c) : void 0;
			t && t !== d && (d = t, u = !1);
		} else d = r(c);
		if (!d) {
			if (!u || (d = r(c), !d)) return ia;
			u = !1;
		}
		let f = o.length === 0 ? "" : o.length === 1 ? o[0] : t(o).join(":"), p = s ? f + qi : f, m = i(d, u), g = [];
		for (let e = 0; e < m.length; e++) g.push(h(p + m[e]));
		return {
			isExternal: !1,
			classId: h(p + d),
			conflictIds: g
		};
	}, _ = (e) => {
		let t = a[e];
		return t === void 0 ? (t = o[e], t === void 0 && (t = g(e)), a[e] = t, ++s > aa && (s = 0, o = a, a = /* @__PURE__ */ Object.create(null)), t) : t;
	};
	return {
		parseClassName: na,
		sortModifiers: t,
		postfixLookupClassGroupIds: n,
		getClassGroupId: r,
		getConflictingClassGroupIds: i,
		getClassDescriptor: _,
		mergeClassList: (e) => {
			let t = f(e), n = t.length;
			if (n === 1) return t[0];
			m > oa && (p.clear(), m = 0, a = /* @__PURE__ */ Object.create(null), o = /* @__PURE__ */ Object.create(null), s = 0), l = l + 1 | 0, l === 0 && (l = 1);
			let r = l;
			if (n > u.length) {
				let e = u.length;
				for (; e < n;) e *= 2;
				u = new Uint8Array(e);
			}
			let i = !1, h = 0;
			for (let e = n - 1; e >= 0; --e) {
				let n = t[e];
				h += n.length;
				let a = _(n);
				if (a.isExternal) {
					u[e] = 1;
					continue;
				}
				let o = a.classId;
				if (c[o] === r) {
					u[e] = 0, i = !0;
					continue;
				}
				c[o] = r;
				let s = a.conflictIds;
				for (let e = 0; e < s.length; e++) c[s[e]] = r;
				u[e] = 1;
			}
			if (!i && !d && e.length === h + n - 1) return e;
			let g = "";
			for (let e = 0; e < n; e++) u[e] === 1 && (g && (g += " "), g += t[e]);
			return g;
		}
	};
}, ca = (e) => {
	let t = /* @__PURE__ */ Object.create(null), n = e.postfixLookupClassGroups;
	if (n) for (let e = 0; e < n.length; e++) t[n[e]] = !0;
	return t;
}, la = 500, ua = (e) => {
	let t, n, r = /* @__PURE__ */ Object.create(null), i = /* @__PURE__ */ Object.create(null), a = 0, o = (r) => (t = sa(e()), n = t.mergeClassList, c.mergeString = s, s(r)), s = (e) => {
		let t = r[e];
		return t === void 0 ? (t = i[e], t === void 0 && (t = n(e)), r[e] = t, ++a > la && (a = 0, i = r, r = /* @__PURE__ */ Object.create(null)), t) : t;
	}, c = (...e) => c.mergeString(Dr(e));
	return c.mergeString = o, c;
}, da = [], Y = (e) => {
	let t = (t) => t[e] || da;
	return t.isThemeGetter = !0, t;
}, fa = /^\[(?:(\w[\w-]*):)?(.+)\]$/i, pa = /^\((?:(\w[\w-]*):)?(.+)\)$/i, ma = /^\d+(?:\.\d+)?\/\d+(?:\.\d+)?$/, ha = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, ga = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, _a = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/, va = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, ya = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, ba = Number, xa = Number.isNaN, Sa = Number.isInteger, Ca = (e) => ma.test(e), X = (e) => !!e && !xa(ba(e)), wa = (e) => !!e && Sa(ba(e)), Ta = (e) => e.endsWith("%") && X(e.slice(0, -1)), Ea = (e) => ha.test(e), Da = () => !0, Oa = (e) => ga.test(e) && !_a.test(e), ka = () => !1, Aa = (e) => va.test(e), ja = (e) => ya.test(e), Ma = (e) => !Z(e) && !Q(e), Na = (e) => e.startsWith("@container") && (e[10] === "/" && e[11] !== void 0 || e[11] === "s" && e[16] !== void 0 && e.startsWith("-size/", 10) || e[11] === "n" && e[18] !== void 0 && e.startsWith("-normal/", 10)), Pa = (e) => Ya(e, $a, ka), Z = (e) => fa.test(e), Fa = (e) => Ya(e, eo, Oa), Ia = (e) => Ya(e, to, X), La = (e) => Ya(e, ro, Da), Ra = (e) => Ya(e, no, ka), za = (e) => Ya(e, Za, ka), Ba = (e) => Ya(e, Qa, ja), Va = (e) => Ya(e, io, Aa), Q = (e) => pa.test(e), Ha = (e) => Xa(e, eo), Ua = (e) => Xa(e, no), Wa = (e) => Xa(e, Za), Ga = (e) => Xa(e, $a), Ka = (e) => Xa(e, Qa), qa = (e) => Xa(e, io, !0), Ja = (e) => Xa(e, ro, !0), Ya = (e, t, n) => {
	let r = fa.exec(e);
	return r ? r[1] ? t(r[1]) : n(r[2]) : !1;
}, Xa = (e, t, n = !1) => {
	let r = pa.exec(e);
	return r ? r[1] ? t(r[1]) : n : !1;
}, Za = (e) => e === "position" || e === "percentage", Qa = (e) => e === "image" || e === "url", $a = (e) => e === "length" || e === "size" || e === "bg-size", eo = (e) => e === "length", to = (e) => e === "number", no = (e) => e === "family-name", ro = (e) => e === "number" || e === "weight", io = (e) => e === "shadow", ao = () => {
	let e = Y("color"), t = Y("font"), n = Y("text"), r = Y("font-weight"), i = Y("tracking"), a = Y("leading"), o = Y("breakpoint"), s = Y("container"), c = Y("spacing"), l = Y("radius"), u = Y("shadow"), d = Y("inset-shadow"), f = Y("text-shadow"), p = Y("drop-shadow"), m = Y("blur"), h = Y("perspective"), g = Y("aspect"), _ = Y("ease"), v = Y("animate"), y = () => [
		"auto",
		"avoid",
		"all",
		"avoid-page",
		"page",
		"left",
		"right",
		"column"
	], b = () => [
		"center",
		"top",
		"bottom",
		"left",
		"right",
		"top-left",
		"left-top",
		"top-right",
		"right-top",
		"bottom-right",
		"right-bottom",
		"bottom-left",
		"left-bottom"
	], x = () => [
		...b(),
		Q,
		Z
	], S = () => [
		"auto",
		"hidden",
		"clip",
		"visible",
		"scroll"
	], C = () => [
		"auto",
		"contain",
		"none"
	], w = () => [
		Q,
		Z,
		c
	], T = () => [
		Ca,
		"full",
		"auto",
		...w()
	], E = () => [
		wa,
		"none",
		"subgrid",
		Q,
		Z
	], D = () => [
		"auto",
		{ span: [
			"full",
			wa,
			Q,
			Z
		] },
		wa,
		Q,
		Z
	], O = () => [
		wa,
		"auto",
		Q,
		Z
	], k = () => [
		"auto",
		"min",
		"max",
		"fr",
		Q,
		Z
	], ee = () => [
		"start",
		"end",
		"center",
		"between",
		"around",
		"evenly",
		"stretch",
		"baseline",
		"center-safe",
		"end-safe"
	], te = () => [
		"start",
		"end",
		"center",
		"stretch",
		"center-safe",
		"end-safe"
	], A = () => ["auto", ...w()], ne = () => [
		Ca,
		"auto",
		"full",
		"dvw",
		"dvh",
		"lvw",
		"lvh",
		"svw",
		"svh",
		"min",
		"max",
		"fit",
		...w()
	], j = () => [
		Ca,
		"screen",
		"full",
		"dvw",
		"lvw",
		"svw",
		"min",
		"max",
		"fit",
		...w()
	], re = () => [
		Ca,
		"screen",
		"full",
		"lh",
		"dvh",
		"lvh",
		"svh",
		"min",
		"max",
		"fit",
		...w()
	], M = () => [
		e,
		Q,
		Z
	], N = () => [
		...b(),
		Wa,
		za,
		{ position: [Q, Z] }
	], P = () => ["no-repeat", { repeat: [
		"",
		"x",
		"y",
		"space",
		"round"
	] }], ie = () => [
		"auto",
		"cover",
		"contain",
		Ga,
		Pa,
		{ size: [Q, Z] }
	], F = () => [
		Ta,
		Ha,
		Fa
	], I = () => [
		"",
		"none",
		"full",
		l,
		Q,
		Z
	], L = () => [
		"",
		X,
		Ha,
		Fa
	], ae = () => [
		"solid",
		"dashed",
		"dotted",
		"double"
	], oe = () => [
		"normal",
		"multiply",
		"screen",
		"overlay",
		"darken",
		"lighten",
		"color-dodge",
		"color-burn",
		"hard-light",
		"soft-light",
		"difference",
		"exclusion",
		"hue",
		"saturation",
		"color",
		"luminosity"
	], R = () => [
		X,
		Ta,
		Wa,
		za
	], z = () => [
		"",
		"none",
		m,
		Q,
		Z
	], se = () => [
		"none",
		X,
		Q,
		Z
	], ce = () => [
		"none",
		X,
		Q,
		Z
	], le = () => [
		X,
		Q,
		Z
	], ue = () => [
		Ca,
		"full",
		...w()
	];
	return {
		theme: {
			animate: [
				"spin",
				"ping",
				"pulse",
				"bounce"
			],
			aspect: ["video"],
			blur: [Ea],
			breakpoint: [Ea],
			color: [Da],
			container: [Ea],
			"drop-shadow": [Ea],
			ease: [
				"in",
				"out",
				"in-out"
			],
			font: [Ma],
			"font-weight": [
				"thin",
				"extralight",
				"light",
				"normal",
				"medium",
				"semibold",
				"bold",
				"extrabold",
				"black"
			],
			"inset-shadow": [Ea],
			leading: [
				"none",
				"tight",
				"snug",
				"normal",
				"relaxed",
				"loose"
			],
			perspective: [
				"dramatic",
				"near",
				"normal",
				"midrange",
				"distant",
				"none"
			],
			radius: [Ea],
			shadow: [Ea],
			spacing: ["px", X],
			text: [Ea],
			"text-shadow": [Ea],
			tracking: [
				"tighter",
				"tight",
				"normal",
				"wide",
				"wider",
				"widest"
			]
		},
		classGroups: {
			aspect: [{ aspect: [
				"auto",
				"square",
				Ca,
				Z,
				Q,
				g
			] }],
			container: ["container"],
			"container-type": [{ "@container": [
				"",
				"normal",
				"size",
				Q,
				Z
			] }],
			"container-named": [Na],
			columns: [{ columns: [
				X,
				Z,
				Q,
				s
			] }],
			"break-after": [{ "break-after": y() }],
			"break-before": [{ "break-before": y() }],
			"break-inside": [{ "break-inside": [
				"auto",
				"avoid",
				"avoid-page",
				"avoid-column"
			] }],
			"box-decoration": [{ "box-decoration": ["slice", "clone"] }],
			box: [{ box: ["border", "content"] }],
			display: [
				"block",
				"inline-block",
				"inline",
				"flex",
				"inline-flex",
				"table",
				"inline-table",
				"table-caption",
				"table-cell",
				"table-column",
				"table-column-group",
				"table-footer-group",
				"table-header-group",
				"table-row-group",
				"table-row",
				"flow-root",
				"grid",
				"inline-grid",
				"contents",
				"list-item",
				"hidden"
			],
			sr: ["sr-only", "not-sr-only"],
			float: [{ float: [
				"right",
				"left",
				"none",
				"start",
				"end"
			] }],
			clear: [{ clear: [
				"left",
				"right",
				"both",
				"none",
				"start",
				"end"
			] }],
			isolation: ["isolate", "isolation-auto"],
			"object-fit": [{ object: [
				"contain",
				"cover",
				"fill",
				"none",
				"scale-down"
			] }],
			"object-position": [{ object: x() }],
			overflow: [{ overflow: S() }],
			"overflow-x": [{ "overflow-x": S() }],
			"overflow-y": [{ "overflow-y": S() }],
			overscroll: [{ overscroll: C() }],
			"overscroll-x": [{ "overscroll-x": C() }],
			"overscroll-y": [{ "overscroll-y": C() }],
			position: [
				"static",
				"fixed",
				"absolute",
				"relative",
				"sticky"
			],
			inset: [{ inset: T() }],
			"inset-x": [{ "inset-x": T() }],
			"inset-y": [{ "inset-y": T() }],
			start: [{
				"inset-s": T(),
				start: T()
			}],
			end: [{
				"inset-e": T(),
				end: T()
			}],
			"inset-bs": [{ "inset-bs": T() }],
			"inset-be": [{ "inset-be": T() }],
			top: [{ top: T() }],
			right: [{ right: T() }],
			bottom: [{ bottom: T() }],
			left: [{ left: T() }],
			visibility: [
				"visible",
				"invisible",
				"collapse"
			],
			z: [{ z: [
				wa,
				"auto",
				Q,
				Z
			] }],
			basis: [{ basis: [
				Ca,
				"full",
				"auto",
				s,
				...w()
			] }],
			"flex-direction": [{ flex: [
				"row",
				"row-reverse",
				"col",
				"col-reverse"
			] }],
			"flex-wrap": [{ flex: [
				"nowrap",
				"wrap",
				"wrap-reverse"
			] }],
			flex: [{ flex: [
				X,
				Ca,
				"auto",
				"initial",
				"none",
				Z
			] }],
			grow: [{ grow: [
				"",
				X,
				Q,
				Z
			] }],
			shrink: [{ shrink: [
				"",
				X,
				Q,
				Z
			] }],
			order: [{ order: [
				wa,
				"first",
				"last",
				"none",
				Q,
				Z
			] }],
			"grid-cols": [{ "grid-cols": E() }],
			"col-start-end": [{ col: D() }],
			"col-start": [{ "col-start": O() }],
			"col-end": [{ "col-end": O() }],
			"grid-rows": [{ "grid-rows": E() }],
			"row-start-end": [{ row: D() }],
			"row-start": [{ "row-start": O() }],
			"row-end": [{ "row-end": O() }],
			"grid-flow": [{ "grid-flow": [
				"row",
				"col",
				"dense",
				"row-dense",
				"col-dense"
			] }],
			"auto-cols": [{ "auto-cols": k() }],
			"auto-rows": [{ "auto-rows": k() }],
			gap: [{ gap: w() }],
			"gap-x": [{ "gap-x": w() }],
			"gap-y": [{ "gap-y": w() }],
			"justify-content": [{ justify: [...ee(), "normal"] }],
			"justify-items": [{ "justify-items": [...te(), "normal"] }],
			"justify-self": [{ "justify-self": ["auto", ...te()] }],
			"align-content": [{ content: ["normal", ...ee()] }],
			"align-items": [{ items: [...te(), { baseline: ["", "last"] }] }],
			"align-self": [{ self: [
				"auto",
				...te(),
				{ baseline: ["", "last"] }
			] }],
			"place-content": [{ "place-content": ee() }],
			"place-items": [{ "place-items": [...te(), "baseline"] }],
			"place-self": [{ "place-self": ["auto", ...te()] }],
			p: [{ p: w() }],
			px: [{ px: w() }],
			py: [{ py: w() }],
			ps: [{ ps: w() }],
			pe: [{ pe: w() }],
			pbs: [{ pbs: w() }],
			pbe: [{ pbe: w() }],
			pt: [{ pt: w() }],
			pr: [{ pr: w() }],
			pb: [{ pb: w() }],
			pl: [{ pl: w() }],
			m: [{ m: A() }],
			mx: [{ mx: A() }],
			my: [{ my: A() }],
			ms: [{ ms: A() }],
			me: [{ me: A() }],
			mbs: [{ mbs: A() }],
			mbe: [{ mbe: A() }],
			mt: [{ mt: A() }],
			mr: [{ mr: A() }],
			mb: [{ mb: A() }],
			ml: [{ ml: A() }],
			"space-x": [{ "space-x": w() }],
			"space-x-reverse": ["space-x-reverse"],
			"space-y": [{ "space-y": w() }],
			"space-y-reverse": ["space-y-reverse"],
			size: [{ size: ne() }],
			"inline-size": [{ inline: ["auto", ...j()] }],
			"min-inline-size": [{ "min-inline": ["auto", ...j()] }],
			"max-inline-size": [{ "max-inline": ["none", ...j()] }],
			"block-size": [{ block: ["auto", ...re()] }],
			"min-block-size": [{ "min-block": ["auto", ...re()] }],
			"max-block-size": [{ "max-block": ["none", ...re()] }],
			w: [{ w: [
				s,
				"screen",
				...ne()
			] }],
			"min-w": [{ "min-w": [
				s,
				"screen",
				"none",
				...ne()
			] }],
			"max-w": [{ "max-w": [
				s,
				"screen",
				"none",
				"prose",
				{ screen: [o] },
				...ne()
			] }],
			h: [{ h: [
				"screen",
				"lh",
				...ne()
			] }],
			"min-h": [{ "min-h": [
				"screen",
				"lh",
				"none",
				...ne()
			] }],
			"max-h": [{ "max-h": [
				"screen",
				"lh",
				...ne()
			] }],
			"font-size": [{ text: [
				"base",
				n,
				Ha,
				Fa
			] }],
			"font-smoothing": ["antialiased", "subpixel-antialiased"],
			"font-style": ["italic", "not-italic"],
			"font-weight": [{ font: [
				r,
				Ja,
				La
			] }],
			"font-stretch": [{ "font-stretch": [
				"ultra-condensed",
				"extra-condensed",
				"condensed",
				"semi-condensed",
				"normal",
				"semi-expanded",
				"expanded",
				"extra-expanded",
				"ultra-expanded",
				Ta,
				Z
			] }],
			"font-family": [{ font: [
				Ua,
				Ra,
				t
			] }],
			"font-features": [{ "font-features": [Z] }],
			"fvn-normal": ["normal-nums"],
			"fvn-ordinal": ["ordinal"],
			"fvn-slashed-zero": ["slashed-zero"],
			"fvn-figure": ["lining-nums", "oldstyle-nums"],
			"fvn-spacing": ["proportional-nums", "tabular-nums"],
			"fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
			tracking: [{ tracking: [
				i,
				Q,
				Z
			] }],
			"line-clamp": [{ "line-clamp": [
				X,
				"none",
				Q,
				Ia
			] }],
			leading: [{ leading: [a, ...w()] }],
			"list-image": [{ "list-image": [
				"none",
				Q,
				Z
			] }],
			"list-style-position": [{ list: ["inside", "outside"] }],
			"list-style-type": [{ list: [
				"disc",
				"decimal",
				"none",
				Q,
				Z
			] }],
			"text-alignment": [{ text: [
				"left",
				"center",
				"right",
				"justify",
				"start",
				"end"
			] }],
			"placeholder-color": [{ placeholder: M() }],
			"text-color": [{ text: M() }],
			"text-decoration": [
				"underline",
				"overline",
				"line-through",
				"no-underline"
			],
			"text-decoration-style": [{ decoration: [...ae(), "wavy"] }],
			"text-decoration-thickness": [{ decoration: [
				X,
				"from-font",
				"auto",
				Q,
				Fa
			] }],
			"text-decoration-color": [{ decoration: M() }],
			"underline-offset": [{ "underline-offset": [
				X,
				"auto",
				Q,
				Z
			] }],
			"text-transform": [
				"uppercase",
				"lowercase",
				"capitalize",
				"normal-case"
			],
			"text-overflow": [
				"truncate",
				"text-ellipsis",
				"text-clip"
			],
			"text-wrap": [{ text: [
				"wrap",
				"nowrap",
				"balance",
				"pretty"
			] }],
			indent: [{ indent: w() }],
			"tab-size": [{ tab: [
				wa,
				Q,
				Z
			] }],
			"vertical-align": [{ align: [
				"baseline",
				"top",
				"middle",
				"bottom",
				"text-top",
				"text-bottom",
				"sub",
				"super",
				Q,
				Z
			] }],
			whitespace: [{ whitespace: [
				"normal",
				"nowrap",
				"pre",
				"pre-line",
				"pre-wrap",
				"break-spaces"
			] }],
			break: [{ break: [
				"normal",
				"words",
				"all",
				"keep"
			] }],
			wrap: [{ wrap: [
				"break-word",
				"anywhere",
				"normal"
			] }],
			hyphens: [{ hyphens: [
				"none",
				"manual",
				"auto"
			] }],
			content: [{ content: [
				"none",
				Q,
				Z
			] }],
			"bg-attachment": [{ bg: [
				"fixed",
				"local",
				"scroll"
			] }],
			"bg-clip": [{ "bg-clip": [
				"border",
				"padding",
				"content",
				"text"
			] }],
			"bg-origin": [{ "bg-origin": [
				"border",
				"padding",
				"content"
			] }],
			"bg-position": [{ bg: N() }],
			"bg-repeat": [{ bg: P() }],
			"bg-size": [{ bg: ie() }],
			"bg-image": [{ bg: [
				"none",
				{
					linear: [
						{ to: [
							"t",
							"tr",
							"r",
							"br",
							"b",
							"bl",
							"l",
							"tl"
						] },
						wa,
						Q,
						Z
					],
					radial: [
						"",
						Q,
						Z
					],
					conic: [
						wa,
						Q,
						Z
					]
				},
				Ka,
				Ba
			] }],
			"bg-color": [{ bg: M() }],
			"gradient-from-pos": [{ from: F() }],
			"gradient-via-pos": [{ via: F() }],
			"gradient-to-pos": [{ to: F() }],
			"gradient-from": [{ from: M() }],
			"gradient-via": [{ via: M() }],
			"gradient-to": [{ to: M() }],
			rounded: [{ rounded: I() }],
			"rounded-s": [{ "rounded-s": I() }],
			"rounded-e": [{ "rounded-e": I() }],
			"rounded-t": [{ "rounded-t": I() }],
			"rounded-r": [{ "rounded-r": I() }],
			"rounded-b": [{ "rounded-b": I() }],
			"rounded-l": [{ "rounded-l": I() }],
			"rounded-ss": [{ "rounded-ss": I() }],
			"rounded-se": [{ "rounded-se": I() }],
			"rounded-ee": [{ "rounded-ee": I() }],
			"rounded-es": [{ "rounded-es": I() }],
			"rounded-tl": [{ "rounded-tl": I() }],
			"rounded-tr": [{ "rounded-tr": I() }],
			"rounded-br": [{ "rounded-br": I() }],
			"rounded-bl": [{ "rounded-bl": I() }],
			"border-w": [{ border: L() }],
			"border-w-x": [{ "border-x": L() }],
			"border-w-y": [{ "border-y": L() }],
			"border-w-s": [{ "border-s": L() }],
			"border-w-e": [{ "border-e": L() }],
			"border-w-bs": [{ "border-bs": L() }],
			"border-w-be": [{ "border-be": L() }],
			"border-w-t": [{ "border-t": L() }],
			"border-w-r": [{ "border-r": L() }],
			"border-w-b": [{ "border-b": L() }],
			"border-w-l": [{ "border-l": L() }],
			"divide-x": [{ "divide-x": L() }],
			"divide-x-reverse": ["divide-x-reverse"],
			"divide-y": [{ "divide-y": L() }],
			"divide-y-reverse": ["divide-y-reverse"],
			"border-style": [{ border: [
				...ae(),
				"hidden",
				"none"
			] }],
			"divide-style": [{ divide: [
				...ae(),
				"hidden",
				"none"
			] }],
			"border-color": [{ border: M() }],
			"border-color-x": [{ "border-x": M() }],
			"border-color-y": [{ "border-y": M() }],
			"border-color-s": [{ "border-s": M() }],
			"border-color-e": [{ "border-e": M() }],
			"border-color-bs": [{ "border-bs": M() }],
			"border-color-be": [{ "border-be": M() }],
			"border-color-t": [{ "border-t": M() }],
			"border-color-r": [{ "border-r": M() }],
			"border-color-b": [{ "border-b": M() }],
			"border-color-l": [{ "border-l": M() }],
			"divide-color": [{ divide: M() }],
			"outline-style": [{ outline: [
				...ae(),
				"none",
				"hidden"
			] }],
			"outline-offset": [{ "outline-offset": [
				X,
				Q,
				Z
			] }],
			"outline-w": [{ outline: [
				"",
				X,
				Ha,
				Fa
			] }],
			"outline-color": [{ outline: M() }],
			shadow: [{ shadow: [
				"",
				"none",
				u,
				qa,
				Va
			] }],
			"shadow-color": [{ shadow: M() }],
			"inset-shadow": [{ "inset-shadow": [
				"none",
				d,
				qa,
				Va
			] }],
			"inset-shadow-color": [{ "inset-shadow": M() }],
			"ring-w": [{ ring: L() }],
			"ring-w-inset": ["ring-inset"],
			"ring-color": [{ ring: M() }],
			"ring-offset-w": [{ "ring-offset": [X, Fa] }],
			"ring-offset-color": [{ "ring-offset": M() }],
			"inset-ring-w": [{ "inset-ring": L() }],
			"inset-ring-color": [{ "inset-ring": M() }],
			"text-shadow": [{ "text-shadow": [
				"none",
				f,
				qa,
				Va
			] }],
			"text-shadow-color": [{ "text-shadow": M() }],
			opacity: [{ opacity: [
				X,
				Q,
				Z
			] }],
			"mix-blend": [{ "mix-blend": [
				...oe(),
				"plus-darker",
				"plus-lighter"
			] }],
			"bg-blend": [{ "bg-blend": oe() }],
			"mask-clip": [{ "mask-clip": [
				"border",
				"padding",
				"content",
				"fill",
				"stroke",
				"view"
			] }, "mask-no-clip"],
			"mask-composite": [{ mask: [
				"add",
				"subtract",
				"intersect",
				"exclude"
			] }],
			"mask-image-linear-pos": [{ "mask-linear": [X] }],
			"mask-image-linear-from-pos": [{ "mask-linear-from": R() }],
			"mask-image-linear-to-pos": [{ "mask-linear-to": R() }],
			"mask-image-linear-from-color": [{ "mask-linear-from": M() }],
			"mask-image-linear-to-color": [{ "mask-linear-to": M() }],
			"mask-image-t-from-pos": [{ "mask-t-from": R() }],
			"mask-image-t-to-pos": [{ "mask-t-to": R() }],
			"mask-image-t-from-color": [{ "mask-t-from": M() }],
			"mask-image-t-to-color": [{ "mask-t-to": M() }],
			"mask-image-r-from-pos": [{ "mask-r-from": R() }],
			"mask-image-r-to-pos": [{ "mask-r-to": R() }],
			"mask-image-r-from-color": [{ "mask-r-from": M() }],
			"mask-image-r-to-color": [{ "mask-r-to": M() }],
			"mask-image-b-from-pos": [{ "mask-b-from": R() }],
			"mask-image-b-to-pos": [{ "mask-b-to": R() }],
			"mask-image-b-from-color": [{ "mask-b-from": M() }],
			"mask-image-b-to-color": [{ "mask-b-to": M() }],
			"mask-image-l-from-pos": [{ "mask-l-from": R() }],
			"mask-image-l-to-pos": [{ "mask-l-to": R() }],
			"mask-image-l-from-color": [{ "mask-l-from": M() }],
			"mask-image-l-to-color": [{ "mask-l-to": M() }],
			"mask-image-x-from-pos": [{ "mask-x-from": R() }],
			"mask-image-x-to-pos": [{ "mask-x-to": R() }],
			"mask-image-x-from-color": [{ "mask-x-from": M() }],
			"mask-image-x-to-color": [{ "mask-x-to": M() }],
			"mask-image-y-from-pos": [{ "mask-y-from": R() }],
			"mask-image-y-to-pos": [{ "mask-y-to": R() }],
			"mask-image-y-from-color": [{ "mask-y-from": M() }],
			"mask-image-y-to-color": [{ "mask-y-to": M() }],
			"mask-image-radial": [{ "mask-radial": [Q, Z] }],
			"mask-image-radial-from-pos": [{ "mask-radial-from": R() }],
			"mask-image-radial-to-pos": [{ "mask-radial-to": R() }],
			"mask-image-radial-from-color": [{ "mask-radial-from": M() }],
			"mask-image-radial-to-color": [{ "mask-radial-to": M() }],
			"mask-image-radial-shape": [{ "mask-radial": ["circle", "ellipse"] }],
			"mask-image-radial-size": [{ "mask-radial": [{
				closest: ["side", "corner"],
				farthest: ["side", "corner"]
			}] }],
			"mask-image-radial-pos": [{ "mask-radial-at": b() }],
			"mask-image-conic-pos": [{ "mask-conic": [X] }],
			"mask-image-conic-from-pos": [{ "mask-conic-from": R() }],
			"mask-image-conic-to-pos": [{ "mask-conic-to": R() }],
			"mask-image-conic-from-color": [{ "mask-conic-from": M() }],
			"mask-image-conic-to-color": [{ "mask-conic-to": M() }],
			"mask-mode": [{ mask: [
				"alpha",
				"luminance",
				"match"
			] }],
			"mask-origin": [{ "mask-origin": [
				"border",
				"padding",
				"content",
				"fill",
				"stroke",
				"view"
			] }],
			"mask-position": [{ mask: N() }],
			"mask-repeat": [{ mask: P() }],
			"mask-size": [{ mask: ie() }],
			"mask-type": [{ "mask-type": ["alpha", "luminance"] }],
			"mask-image": [{ mask: [
				"none",
				Q,
				Z
			] }],
			filter: [{ filter: [
				"",
				"none",
				Q,
				Z
			] }],
			blur: [{ blur: z() }],
			brightness: [{ brightness: [
				X,
				Q,
				Z
			] }],
			contrast: [{ contrast: [
				X,
				Q,
				Z
			] }],
			"drop-shadow": [{ "drop-shadow": [
				"",
				"none",
				p,
				qa,
				Va
			] }],
			"drop-shadow-color": [{ "drop-shadow": M() }],
			grayscale: [{ grayscale: [
				"",
				X,
				Q,
				Z
			] }],
			"hue-rotate": [{ "hue-rotate": [
				X,
				Q,
				Z
			] }],
			invert: [{ invert: [
				"",
				X,
				Q,
				Z
			] }],
			saturate: [{ saturate: [
				X,
				Q,
				Z
			] }],
			sepia: [{ sepia: [
				"",
				X,
				Q,
				Z
			] }],
			"backdrop-filter": [{ "backdrop-filter": [
				"",
				"none",
				Q,
				Z
			] }],
			"backdrop-blur": [{ "backdrop-blur": z() }],
			"backdrop-brightness": [{ "backdrop-brightness": [
				X,
				Q,
				Z
			] }],
			"backdrop-contrast": [{ "backdrop-contrast": [
				X,
				Q,
				Z
			] }],
			"backdrop-grayscale": [{ "backdrop-grayscale": [
				"",
				X,
				Q,
				Z
			] }],
			"backdrop-hue-rotate": [{ "backdrop-hue-rotate": [
				X,
				Q,
				Z
			] }],
			"backdrop-invert": [{ "backdrop-invert": [
				"",
				X,
				Q,
				Z
			] }],
			"backdrop-opacity": [{ "backdrop-opacity": [
				X,
				Q,
				Z
			] }],
			"backdrop-saturate": [{ "backdrop-saturate": [
				X,
				Q,
				Z
			] }],
			"backdrop-sepia": [{ "backdrop-sepia": [
				"",
				X,
				Q,
				Z
			] }],
			"border-collapse": [{ border: ["collapse", "separate"] }],
			"border-spacing": [{ "border-spacing": w() }],
			"border-spacing-x": [{ "border-spacing-x": w() }],
			"border-spacing-y": [{ "border-spacing-y": w() }],
			"table-layout": [{ table: ["auto", "fixed"] }],
			caption: [{ caption: ["top", "bottom"] }],
			transition: [{ transition: [
				"",
				"all",
				"colors",
				"opacity",
				"shadow",
				"transform",
				"none",
				Q,
				Z
			] }],
			"transition-behavior": [{ transition: ["normal", "discrete"] }],
			duration: [{ duration: [
				X,
				"initial",
				Q,
				Z
			] }],
			ease: [{ ease: [
				"linear",
				"initial",
				_,
				Q,
				Z
			] }],
			delay: [{ delay: [
				X,
				Q,
				Z
			] }],
			animate: [{ animate: [
				"none",
				v,
				Q,
				Z
			] }],
			backface: [{ backface: ["hidden", "visible"] }],
			perspective: [{ perspective: [
				h,
				Q,
				Z
			] }],
			"perspective-origin": [{ "perspective-origin": x() }],
			rotate: [{ rotate: se() }],
			"rotate-x": [{ "rotate-x": se() }],
			"rotate-y": [{ "rotate-y": se() }],
			"rotate-z": [{ "rotate-z": se() }],
			scale: [{ scale: ce() }],
			"scale-x": [{ "scale-x": ce() }],
			"scale-y": [{ "scale-y": ce() }],
			"scale-z": [{ "scale-z": ce() }],
			"scale-3d": ["scale-3d"],
			skew: [{ skew: le() }],
			"skew-x": [{ "skew-x": le() }],
			"skew-y": [{ "skew-y": le() }],
			transform: [{ transform: [
				Q,
				Z,
				"",
				"none",
				"gpu",
				"cpu"
			] }],
			"transform-origin": [{ origin: x() }],
			"transform-style": [{ transform: ["3d", "flat"] }],
			translate: [{ translate: ue() }],
			"translate-x": [{ "translate-x": ue() }],
			"translate-y": [{ "translate-y": ue() }],
			"translate-z": [{ "translate-z": ue() }],
			"translate-none": ["translate-none"],
			zoom: [{ zoom: [
				wa,
				Q,
				Z
			] }],
			accent: [{ accent: M() }],
			appearance: [{ appearance: ["none", "auto"] }],
			"caret-color": [{ caret: M() }],
			"color-scheme": [{ scheme: [
				"normal",
				"dark",
				"light",
				"light-dark",
				"only-dark",
				"only-light"
			] }],
			cursor: [{ cursor: [
				"auto",
				"default",
				"pointer",
				"wait",
				"text",
				"move",
				"help",
				"not-allowed",
				"none",
				"context-menu",
				"progress",
				"cell",
				"crosshair",
				"vertical-text",
				"alias",
				"copy",
				"no-drop",
				"grab",
				"grabbing",
				"all-scroll",
				"col-resize",
				"row-resize",
				"n-resize",
				"e-resize",
				"s-resize",
				"w-resize",
				"ne-resize",
				"nw-resize",
				"se-resize",
				"sw-resize",
				"ew-resize",
				"ns-resize",
				"nesw-resize",
				"nwse-resize",
				"zoom-in",
				"zoom-out",
				Q,
				Z
			] }],
			"field-sizing": [{ "field-sizing": ["fixed", "content"] }],
			"pointer-events": [{ "pointer-events": ["auto", "none"] }],
			resize: [{ resize: [
				"none",
				"",
				"y",
				"x"
			] }],
			"scroll-behavior": [{ scroll: ["auto", "smooth"] }],
			"scrollbar-thumb-color": [{ "scrollbar-thumb": M() }],
			"scrollbar-track-color": [{ "scrollbar-track": M() }],
			"scrollbar-gutter": [{ "scrollbar-gutter": [
				"auto",
				"stable",
				"both"
			] }],
			"scrollbar-w": [{ scrollbar: [
				"auto",
				"thin",
				"none"
			] }],
			"scroll-m": [{ "scroll-m": w() }],
			"scroll-mx": [{ "scroll-mx": w() }],
			"scroll-my": [{ "scroll-my": w() }],
			"scroll-ms": [{ "scroll-ms": w() }],
			"scroll-me": [{ "scroll-me": w() }],
			"scroll-mbs": [{ "scroll-mbs": w() }],
			"scroll-mbe": [{ "scroll-mbe": w() }],
			"scroll-mt": [{ "scroll-mt": w() }],
			"scroll-mr": [{ "scroll-mr": w() }],
			"scroll-mb": [{ "scroll-mb": w() }],
			"scroll-ml": [{ "scroll-ml": w() }],
			"scroll-p": [{ "scroll-p": w() }],
			"scroll-px": [{ "scroll-px": w() }],
			"scroll-py": [{ "scroll-py": w() }],
			"scroll-ps": [{ "scroll-ps": w() }],
			"scroll-pe": [{ "scroll-pe": w() }],
			"scroll-pbs": [{ "scroll-pbs": w() }],
			"scroll-pbe": [{ "scroll-pbe": w() }],
			"scroll-pt": [{ "scroll-pt": w() }],
			"scroll-pr": [{ "scroll-pr": w() }],
			"scroll-pb": [{ "scroll-pb": w() }],
			"scroll-pl": [{ "scroll-pl": w() }],
			"snap-align": [{ snap: [
				"start",
				"end",
				"center",
				"align-none"
			] }],
			"snap-stop": [{ snap: ["normal", "always"] }],
			"snap-type": [{ snap: [
				"none",
				"x",
				"y",
				"both"
			] }],
			"snap-strictness": [{ snap: ["mandatory", "proximity"] }],
			touch: [{ touch: [
				"auto",
				"none",
				"manipulation"
			] }],
			"touch-x": [{ "touch-pan": [
				"x",
				"left",
				"right"
			] }],
			"touch-y": [{ "touch-pan": [
				"y",
				"up",
				"down"
			] }],
			"touch-pz": ["touch-pinch-zoom"],
			select: [{ select: [
				"none",
				"text",
				"all",
				"auto"
			] }],
			"will-change": [{ "will-change": [
				"auto",
				"scroll",
				"contents",
				"transform",
				Q,
				Z
			] }],
			fill: [{ fill: ["none", ...M()] }],
			"stroke-w": [{ stroke: [
				X,
				Ha,
				Fa,
				Ia
			] }],
			stroke: [{ stroke: ["none", ...M()] }],
			"forced-color-adjust": [{ "forced-color-adjust": ["auto", "none"] }]
		},
		conflictingClassGroups: {
			"container-named": ["container-type"],
			overflow: ["overflow-x", "overflow-y"],
			overscroll: ["overscroll-x", "overscroll-y"],
			inset: [
				"inset-x",
				"inset-y",
				"inset-bs",
				"inset-be",
				"start",
				"end",
				"top",
				"right",
				"bottom",
				"left"
			],
			"inset-x": ["right", "left"],
			"inset-y": ["top", "bottom"],
			flex: [
				"basis",
				"grow",
				"shrink"
			],
			gap: ["gap-x", "gap-y"],
			p: [
				"px",
				"py",
				"ps",
				"pe",
				"pbs",
				"pbe",
				"pt",
				"pr",
				"pb",
				"pl"
			],
			px: ["pr", "pl"],
			py: ["pt", "pb"],
			m: [
				"mx",
				"my",
				"ms",
				"me",
				"mbs",
				"mbe",
				"mt",
				"mr",
				"mb",
				"ml"
			],
			mx: ["mr", "ml"],
			my: ["mt", "mb"],
			size: ["w", "h"],
			"font-size": ["leading"],
			"fvn-normal": [
				"fvn-ordinal",
				"fvn-slashed-zero",
				"fvn-figure",
				"fvn-spacing",
				"fvn-fraction"
			],
			"fvn-ordinal": ["fvn-normal"],
			"fvn-slashed-zero": ["fvn-normal"],
			"fvn-figure": ["fvn-normal"],
			"fvn-spacing": ["fvn-normal"],
			"fvn-fraction": ["fvn-normal"],
			"line-clamp": ["display", "overflow"],
			rounded: [
				"rounded-s",
				"rounded-e",
				"rounded-t",
				"rounded-r",
				"rounded-b",
				"rounded-l",
				"rounded-ss",
				"rounded-se",
				"rounded-ee",
				"rounded-es",
				"rounded-tl",
				"rounded-tr",
				"rounded-br",
				"rounded-bl"
			],
			"rounded-s": ["rounded-ss", "rounded-es"],
			"rounded-e": ["rounded-se", "rounded-ee"],
			"rounded-t": ["rounded-tl", "rounded-tr"],
			"rounded-r": ["rounded-tr", "rounded-br"],
			"rounded-b": ["rounded-br", "rounded-bl"],
			"rounded-l": ["rounded-tl", "rounded-bl"],
			"border-spacing": ["border-spacing-x", "border-spacing-y"],
			"border-w": [
				"border-w-x",
				"border-w-y",
				"border-w-s",
				"border-w-e",
				"border-w-bs",
				"border-w-be",
				"border-w-t",
				"border-w-r",
				"border-w-b",
				"border-w-l"
			],
			"border-w-x": ["border-w-r", "border-w-l"],
			"border-w-y": ["border-w-t", "border-w-b"],
			"border-color": [
				"border-color-x",
				"border-color-y",
				"border-color-s",
				"border-color-e",
				"border-color-bs",
				"border-color-be",
				"border-color-t",
				"border-color-r",
				"border-color-b",
				"border-color-l"
			],
			"border-color-x": ["border-color-r", "border-color-l"],
			"border-color-y": ["border-color-t", "border-color-b"],
			translate: [
				"translate-x",
				"translate-y",
				"translate-none"
			],
			"translate-none": [
				"translate",
				"translate-x",
				"translate-y",
				"translate-z"
			],
			"scroll-m": [
				"scroll-mx",
				"scroll-my",
				"scroll-ms",
				"scroll-me",
				"scroll-mbs",
				"scroll-mbe",
				"scroll-mt",
				"scroll-mr",
				"scroll-mb",
				"scroll-ml"
			],
			"scroll-mx": ["scroll-mr", "scroll-ml"],
			"scroll-my": ["scroll-mt", "scroll-mb"],
			"scroll-p": [
				"scroll-px",
				"scroll-py",
				"scroll-ps",
				"scroll-pe",
				"scroll-pbs",
				"scroll-pbe",
				"scroll-pt",
				"scroll-pr",
				"scroll-pb",
				"scroll-pl"
			],
			"scroll-px": ["scroll-pr", "scroll-pl"],
			"scroll-py": ["scroll-pt", "scroll-pb"],
			touch: [
				"touch-x",
				"touch-y",
				"touch-pz"
			],
			"touch-x": ["touch"],
			"touch-y": ["touch"],
			"touch-pz": ["touch"]
		},
		conflictingClassGroupModifiers: { "font-size": ["leading"] },
		postfixLookupClassGroups: ["container-type"],
		orderSensitiveModifiers: [
			"*",
			"**",
			"after",
			"backdrop",
			"before",
			"details-content",
			"file",
			"first-letter",
			"first-line",
			"marker",
			"placeholder",
			"selection"
		]
	};
}, oo = (e, { extend: t = {}, override: n = {} }) => (co(e.theme, n.theme), co(e.classGroups, n.classGroups), co(e.conflictingClassGroups, n.conflictingClassGroups), co(e.conflictingClassGroupModifiers, n.conflictingClassGroupModifiers), so(e, "postfixLookupClassGroups", n.postfixLookupClassGroups), so(e, "orderSensitiveModifiers", n.orderSensitiveModifiers), lo(e.theme, t.theme), lo(e.classGroups, t.classGroups), lo(e.conflictingClassGroups, t.conflictingClassGroups), lo(e.conflictingClassGroupModifiers, t.conflictingClassGroupModifiers), uo(e, t, "postfixLookupClassGroups"), uo(e, t, "orderSensitiveModifiers"), e), so = (e, t, n) => {
	n !== void 0 && (e[t] = n);
}, co = (e, t) => {
	if (t) for (let n in t) so(e, n, t[n]);
}, lo = (e, t) => {
	if (t) for (let n in t) uo(e, t, n);
}, uo = (e, t, n) => {
	let r = t[n];
	r !== void 0 && (e[n] = e[n] ? e[n].concat(r) : r);
}, fo = (e) => ua(e ? typeof e == "function" ? () => e(ao()) : () => oo(ao(), e) : ao), po = (e) => {
	if (Pr(e)) return;
	let t = e, n = { ...t.extend ?? {} };
	for (let e of [
		"theme",
		"classGroups",
		"conflictingClassGroups",
		"conflictingClassGroupModifiers",
		"postfixLookupClassGroups",
		"orderSensitiveModifiers",
		"cacheSize",
		"prefix",
		"separator",
		"experimentalParseClassName"
	]) t[e] !== void 0 && n[e] === void 0 && (n[e] = t[e]);
	let r = {};
	if (Object.keys(n).length > 0 && (r.extend = n), t.override != null && !Pr(t.override) && (r.override = t.override), r.extend || r.override) return r;
}, mo = (e) => {
	let t = fo(po(e));
	return (e) => t.mergeString(e);
}, ho, go = () => (ho ||= fo(), ho), _o = () => ((!J.cachedTwMerge || J.didTwMergeConfigChange) && (J.didTwMergeConfigChange = !1, J.cachedTwMerge = mo(J.cachedTwMergeConfig)), J.cachedTwMerge), vo = (e) => {
	let t = e?.twMergeConfig;
	t && !Pr(t) && (Fr(t, J.cachedTwMergeConfig) || (J.cachedTwMergeConfig = t, J.didTwMergeConfigChange = !0));
}, yo = (e) => Dr(e), bo = (() => {
	let e = /* @__PURE__ */ Error();
	return !("line" in e) && !("lineNumber" in e);
})(), xo = 64, So = 500, Co = /* @__PURE__ */ new Map(), wo = /* @__PURE__ */ new Map(), To = 0, Eo = () => {
	Co = /* @__PURE__ */ new Map(), wo = /* @__PURE__ */ new Map(), To = 0;
}, Do = (e) => {
	if (e) return e.indexOf(" ") === -1 ? e : go().mergeString(e) || void 0;
}, Oo = (e, t, n) => {
	let r = Co.get(e);
	r === void 0 && (r = [], Co.set(e, r)), r.length >= xo && r.shift(), r.push({
		rest: t,
		result: n
	}), ++To > So && (To = 0, wo = Co, Co = /* @__PURE__ */ new Map());
}, ko = (e, t, n, r, i) => {
	let a = Co.get(e);
	if (a === void 0 && (a = wo.get(e)), a !== void 0) for (let e = 0; e < a.length; e++) {
		let o = a[e], s = o.rest;
		if (s.length !== n - 1) continue;
		let c = 0, l = !0;
		for (let e = t + 1; e < r; e++) {
			let t = i(e);
			if (t && t !== s[c++]) {
				l = !1;
				break;
			}
		}
		if (l) return o.result;
	}
}, Ao = (e) => {
	let t = e.length, n = "", r = -1, i = 0, a = !0;
	for (let o = 0; o < t; o++) {
		let t = e[o];
		if (t) {
			if (typeof t != "string") {
				a = !1;
				break;
			}
			r === -1 && (n = t, r = o), i++;
		}
	}
	if (!a) return Do(yo(e));
	if (i === 0) return;
	if (i === 1) return Do(n);
	let o = ko(n, r, i, t, (t) => e[t]);
	if (o !== void 0) return o || void 0;
	let s = n, c = [];
	for (let n = r + 1; n < t; n++) {
		let t = e[n];
		t && (s += " " + t, c.push(t));
	}
	let l = Do(s) ?? "";
	return Oo(n, c, l), l || void 0;
}, jo = J.reset.bind(J);
J.reset = () => {
	ho = void 0, Eo(), jo();
};
var Mo = (e, t) => {
	let n = yo(e);
	return !n || !(t?.twMerge ?? !0) ? n || void 0 : n.indexOf(" ") === -1 ? n : (vo(t), (t?.twMergeConfig && !Pr(t.twMergeConfig) ? _o() : go().mergeString)(n) || void 0);
}, No = (e) => e == null || !(e.twMerge === !1 || e.twMergeConfig && !Pr(e.twMergeConfig)), Po = (e, ...t) => Mo(t, e), Fo = (...e) => (t) => No(t) ? bo ? Ao(e) : Do(yo(e)) : Mo(e, t), Io = Oi(Po);
Io.tv;
var Lo = Io.createTV, Ro = Yn.ui?.tv, zo = /* @__PURE__ */ Lo(Ro);
function Bo(e) {
	if (typeof e == "function") return e;
	if (Array.isArray(e)) for (let t = e.length - 1; t >= 0; t--) {
		let n = Bo(e[t]);
		if (n) return n;
	}
}
function Vo(e) {
	return Array.isArray(e) ? e.flatMap((e) => Vo(e)) : typeof e == "function" ? [] : [e];
}
function Ho(e, t, n) {
	return Fo(e(n()), ...Vo(t.class), ...Vo(t.className))(Ro) ?? "";
}
function Uo(e, t = 0) {
	if (e == null) return !0;
	let n = typeof e;
	if (n === "string" || n === "boolean") return !0;
	if (n === "number") return Number.isFinite(e);
	if (Array.isArray(e)) {
		if (t >= 4) return !1;
		for (let n of e) if (!Uo(n, t + 1)) return !1;
		return !0;
	}
	return !1;
}
function Wo(e) {
	let t = Object.getPrototypeOf(e);
	if (t === Object.prototype || t === null) {
		for (let t of Object.keys(e)) if (!Uo(e[t])) return;
		return JSON.stringify(e);
	}
}
function Go(e) {
	let t = /* @__PURE__ */ new Map();
	return new Proxy(e, { get(e, n) {
		let r = e[n];
		return typeof r == "function" ? (e = {}) => {
			let i = Bo(e.class) ?? Bo(e.className);
			if (!i) {
				let i = Wo(e);
				if (i === void 0) return r(e);
				let a = t.get(n);
				a || (a = /* @__PURE__ */ new Map(), t.set(n, a));
				let o = a.get(i);
				return o === void 0 && !a.has(i) && (a.size >= 500 && a.clear(), o = r(e), a.set(i, o)), o;
			}
			return Ho(i, e, () => r({
				...e,
				class: void 0,
				className: void 0
			}));
		} : r;
	} });
}
function Ko(e) {
	return Fo(e)(Ro) ?? "";
}
function qo(e) {
	if (!e || typeof e != "object") return e;
	let t = e.slots, n = t && typeof t == "object" ? Object.entries(t).filter((e) => typeof e[1] == "function") : [], r = typeof e.base == "function" ? e.base : void 0;
	if (!n.length && !r) return e;
	let i = e.extend, a = { ...e }, o, s = !1;
	if (r && (a.base = r(Ko(i?.slots?.base ?? i?.base)), i?.slots?.base && (o ??= { ...i.slots }, o.base = ""), i?.base && (s = !0)), n.length) {
		let e = { ...t };
		for (let [t, r] of n) e[t] = r(Ko(i?.slots?.[t])), i?.slots?.[t] && (o ??= { ...i.slots }, o[t] = "");
		a.slots = e;
	}
	if (o || s) {
		let e = { ...i };
		o && (e.slots = o), s && (e.base = ""), a.extend = e;
	}
	return a;
}
var $ = ((e) => {
	let t = zo(qo(e));
	return new Proxy(t, { apply(e, t, n) {
		let r = Reflect.apply(e, t, n);
		if (r && typeof r == "object") return Go(r);
		if (typeof r == "string") {
			let r = n[0] ?? {}, i = Bo(r.class) ?? Bo(r.className);
			if (i) return Ho(i, r, () => Reflect.apply(e, t, [{
				...r,
				class: void 0,
				className: void 0
			}]));
		}
		return r;
	} });
});
//#endregion
//#region node_modules/@nuxt/ui/dist/runtime/composables/useComponentIcons.js
function Jo(e) {
	let t = q(), n = c(() => B(e)), r = c(() => n.value.icon && n.value.leading || n.value.icon && !n.value.trailing || n.value.loading && !n.value.trailing || !!n.value.leadingIcon);
	return {
		isLeading: r,
		isTrailing: c(() => n.value.icon && n.value.trailing || n.value.loading && n.value.trailing || !!n.value.trailingIcon && n.value.trailing !== !1),
		leadingIconName: c(() => n.value.loading ? n.value.loadingIcon || t.ui.icons.loading : n.value.leadingIcon || n.value.icon),
		trailingIconName: c(() => n.value.loading && !r.value ? n.value.loadingIcon || t.ui.icons.loading : n.value.trailingIcon || n.value.icon)
	};
}
//#endregion
//#region node_modules/@nuxt/ui/dist/runtime/composables/useFormField.js
var Yo = Symbol("nuxt-ui.form-options"), Xo = Symbol("nuxt-ui.form-events"), Zo = Symbol("nuxt-ui.form-state"), Qo = Symbol("nuxt-ui.form-field"), $o = Symbol("nuxt-ui.input-id"), es = Symbol("nuxt-ui.form-inputs"), ts = Symbol("nuxt-ui.form-loading"), ns = Symbol("nuxt-ui.form-errors");
function rs(e, t) {
	let n = C(Yo, void 0), r = C(Xo, void 0), i = C(Qo, void 0), a = C($o, void 0);
	N(Qo, void 0), i && a && (t?.bind === !1 ? a.value = void 0 : e?.id && (a.value = e?.id));
	function o(e, t, n) {
		r && i && t && r.emit({
			type: e,
			name: t,
			eager: n
		});
	}
	function s() {
		o("blur", i?.value.name);
	}
	function l() {
		o("focus", i?.value.name);
	}
	function u() {
		o("change", i?.value.name);
	}
	let d = !1;
	b() && ne(() => {
		d = !0;
	});
	let f = Ye(() => {
		d || o("input", i?.value.name, !t?.deferInputValidation || i?.value.eagerValidation);
	}, i?.value.validateOnInputDelay ?? n?.value.validateOnInputDelay ?? 0);
	return {
		id: c(() => e?.id ?? a?.value),
		name: c(() => e?.name ?? i?.value.name),
		size: c(() => e?.size ?? i?.value.size),
		color: c(() => i?.value.error ? "error" : e?.color),
		highlight: c(() => i?.value.error ? !0 : e?.highlight || void 0),
		disabled: c(() => n?.value.disabled || e?.disabled || void 0),
		emitFormBlur: s,
		emitFormInput: f,
		emitFormChange: u,
		emitFormFocus: l,
		ariaAttrs: c(() => {
			if (!i?.value) return;
			let e = [
				"error",
				"hint",
				"description",
				"help"
			].filter((e) => i?.value?.[e]).map((e) => `${i?.value.ariaId}-${e}`) || [], t = { "aria-invalid": !!i?.value.error };
			return e.length > 0 && (t["aria-describedby"] = e.join(" ")), t;
		})
	};
}
//#endregion
//#region node_modules/@nuxt/ui/dist/runtime/utils/link-keys.js
var is = /* @__PURE__ */ "active.activeClass.ariaCurrentValue.as.disabled.download.exact.exactActiveClass.exactHash.exactQuery.external.form.formaction.formenctype.formmethod.formnovalidate.formtarget.href.hreflang.inactiveClass.locale.media.noPrefetch.noRel.onClick.ping.prefetch.prefetchOn.prefetchedClass.referrerpolicy.rel.replace.target.title.to.trailingSlash.type.viewTransition".split(".");
//#endregion
//#region node_modules/@nuxt/ui/dist/runtime/utils/link.js
function as(e) {
	let t = Object.keys(e), n = t.filter((e) => e.startsWith("aria-")), r = t.filter((e) => e.startsWith("data-"));
	return Je(e, ...is, ...n, ...r);
}
//#endregion
//#region node_modules/@iconify/vue/dist/iconify.mjs
var os = /^[a-z0-9]+(-[a-z0-9]+)*$/, ss = (e, t, n, r = "") => {
	let i = e.split(":");
	if (e.slice(0, 1) === "@") {
		if (i.length < 2 || i.length > 3) return null;
		r = i.shift().slice(1);
	}
	if (i.length > 3 || !i.length) return null;
	if (i.length > 1) {
		let e = i.pop(), n = i.pop(), a = {
			provider: i.length > 0 ? i[0] : r,
			prefix: n,
			name: e
		};
		return t && !cs(a) ? null : a;
	}
	let a = i[0], o = a.split("-");
	if (o.length > 1) {
		let e = {
			provider: r,
			prefix: o.shift(),
			name: o.join("-")
		};
		return t && !cs(e) ? null : e;
	}
	if (n && r === "") {
		let e = {
			provider: r,
			prefix: "",
			name: a
		};
		return t && !cs(e, n) ? null : e;
	}
	return null;
}, cs = (e, t) => e ? !!((t && e.prefix === "" || e.prefix) && e.name) : !1;
function ls(e, t) {
	let n = e.icons, r = e.aliases || Object.create(null), i = Object.create(null);
	function a(e) {
		if (n[e]) return i[e] = [];
		if (!(e in i)) {
			i[e] = null;
			let t = r[e] && r[e].parent, n = t && a(t);
			n && (i[e] = [t].concat(n));
		}
		return i[e];
	}
	return Object.keys(n).concat(Object.keys(r)).forEach(a), i;
}
var us = Object.freeze({
	left: 0,
	top: 0,
	width: 16,
	height: 16
}), ds = Object.freeze({
	rotate: 0,
	vFlip: !1,
	hFlip: !1
}), fs = Object.freeze({
	...us,
	...ds
}), ps = Object.freeze({
	...fs,
	body: "",
	hidden: !1
});
function ms(e, t) {
	let n = {};
	!e.hFlip != !t.hFlip && (n.hFlip = !0), !e.vFlip != !t.vFlip && (n.vFlip = !0);
	let r = ((e.rotate || 0) + (t.rotate || 0)) % 4;
	return r && (n.rotate = r), n;
}
function hs(e, t) {
	let n = ms(e, t);
	for (let r in ps) r in ds ? r in e && !(r in n) && (n[r] = ds[r]) : r in t ? n[r] = t[r] : r in e && (n[r] = e[r]);
	return n;
}
function gs(e, t, n) {
	let r = e.icons, i = e.aliases || Object.create(null), a = {};
	function o(e) {
		a = hs(r[e] || i[e], a);
	}
	return o(t), n.forEach(o), hs(e, a);
}
function _s(e, t) {
	let n = [];
	if (typeof e != "object" || typeof e.icons != "object") return n;
	e.not_found instanceof Array && e.not_found.forEach((e) => {
		t(e, null), n.push(e);
	});
	let r = ls(e);
	for (let i in r) {
		let a = r[i];
		a && (t(i, gs(e, i, a)), n.push(i));
	}
	return n;
}
var vs = {
	provider: "",
	aliases: {},
	not_found: {},
	...us
};
function ys(e, t) {
	for (let n in t) if (n in e && typeof e[n] != typeof t[n]) return !1;
	return !0;
}
function bs(e) {
	if (typeof e != "object" || !e) return null;
	let t = e;
	if (typeof t.prefix != "string" || !e.icons || typeof e.icons != "object" || !ys(e, vs)) return null;
	let n = t.icons;
	for (let e in n) {
		let t = n[e];
		if (!e || typeof t.body != "string" || !ys(t, ps)) return null;
	}
	let r = t.aliases || Object.create(null);
	for (let e in r) {
		let t = r[e], i = t.parent;
		if (!e || typeof i != "string" || !n[i] && !r[i] || !ys(t, ps)) return null;
	}
	return t;
}
var xs = Object.create(null);
function Ss(e, t) {
	return {
		provider: e,
		prefix: t,
		icons: Object.create(null),
		missing: /* @__PURE__ */ new Set()
	};
}
function Cs(e, t) {
	let n = xs[e] || (xs[e] = Object.create(null));
	return n[t] || (n[t] = Ss(e, t));
}
function ws(e, t) {
	return bs(t) ? _s(t, (t, n) => {
		n ? e.icons[t] = n : e.missing.add(t);
	}) : [];
}
function Ts(e, t, n) {
	try {
		if (typeof n.body == "string") return e.icons[t] = { ...n }, !0;
	} catch {}
	return !1;
}
var Es = !1;
function Ds(e) {
	return typeof e == "boolean" && (Es = e), Es;
}
function Os(e) {
	let t = typeof e == "string" ? ss(e, !0, Es) : e;
	if (t) {
		let e = Cs(t.provider, t.prefix), n = t.name;
		return e.icons[n] || (e.missing.has(n) ? null : void 0);
	}
}
function ks(e, t) {
	let n = ss(e, !0, Es);
	if (!n) return !1;
	let r = Cs(n.provider, n.prefix);
	return t ? Ts(r, n.name, t) : (r.missing.add(n.name), !0);
}
function As(e, t) {
	if (typeof e != "object") return !1;
	if (typeof t != "string" && (t = e.provider || ""), Es && !t && !e.prefix) {
		let t = !1;
		return bs(e) && (e.prefix = "", _s(e, (e, n) => {
			ks(e, n) && (t = !0);
		})), t;
	}
	let n = e.prefix;
	return cs({
		prefix: n,
		name: "a"
	}) ? !!ws(Cs(t, n), e) : !1;
}
function js(e) {
	return !!Os(e);
}
var Ms = Object.freeze({
	width: null,
	height: null
}), Ns = Object.freeze({
	...Ms,
	...ds
}), Ps = /(-?[0-9.]*[0-9]+[0-9.]*)/g, Fs = /^-?[0-9.]*[0-9]+[0-9.]*$/g;
function Is(e, t, n) {
	if (t === 1) return e;
	if (n ||= 100, typeof e == "number") return Math.ceil(e * t * n) / n;
	if (typeof e != "string") return e;
	let r = e.split(Ps);
	if (r === null || !r.length) return e;
	let i = [], a = r.shift(), o = Fs.test(a);
	for (;;) {
		if (o) {
			let e = parseFloat(a);
			isNaN(e) ? i.push(a) : i.push(Math.ceil(e * t * n) / n);
		} else i.push(a);
		if (a = r.shift(), a === void 0) return i.join("");
		o = !o;
	}
}
function Ls(e, t = "defs") {
	let n = "", r = e.indexOf("<" + t);
	for (; r >= 0;) {
		let i = e.indexOf(">", r), a = e.indexOf("</" + t);
		if (i === -1 || a === -1) break;
		let o = e.indexOf(">", a);
		if (o === -1) break;
		n += e.slice(i + 1, a).trim(), e = e.slice(0, r).trim() + e.slice(o + 1);
	}
	return {
		defs: n,
		content: e
	};
}
function Rs(e, t) {
	return e ? "<defs>" + e + "</defs>" + t : t;
}
function zs(e, t, n) {
	let r = Ls(e);
	return Rs(r.defs, t + r.content + n);
}
var Bs = (e) => e === "unset" || e === "undefined" || e === "none";
function Vs(e, t) {
	let n = {
		...fs,
		...e
	}, r = {
		...Ns,
		...t
	}, i = {
		left: n.left,
		top: n.top,
		width: n.width,
		height: n.height
	}, a = n.body;
	[n, r].forEach((e) => {
		let t = [], n = e.hFlip, r = e.vFlip, o = e.rotate;
		n ? r ? o += 2 : (t.push("translate(" + (i.width + i.left).toString() + " " + (0 - i.top).toString() + ")"), t.push("scale(-1 1)"), i.top = i.left = 0) : r && (t.push("translate(" + (0 - i.left).toString() + " " + (i.height + i.top).toString() + ")"), t.push("scale(1 -1)"), i.top = i.left = 0);
		let s;
		switch (o < 0 && (o -= Math.floor(o / 4) * 4), o %= 4, o) {
			case 1:
				s = i.height / 2 + i.top, t.unshift("rotate(90 " + s.toString() + " " + s.toString() + ")");
				break;
			case 2:
				t.unshift("rotate(180 " + (i.width / 2 + i.left).toString() + " " + (i.height / 2 + i.top).toString() + ")");
				break;
			case 3: s = i.width / 2 + i.left, t.unshift("rotate(-90 " + s.toString() + " " + s.toString() + ")");
		}
		o % 2 == 1 && (i.left !== i.top && (s = i.left, i.left = i.top, i.top = s), i.width !== i.height && (s = i.width, i.width = i.height, i.height = s)), t.length && (a = zs(a, "<g transform=\"" + t.join(" ") + "\">", "</g>"));
	});
	let o = r.width, s = r.height, c = i.width, l = i.height, u, d;
	o === null ? (d = s === null ? "1em" : s === "auto" ? l : s, u = Is(d, c / l)) : (u = o === "auto" ? c : o, d = s === null ? Is(u, l / c) : s === "auto" ? l : s);
	let f = {}, p = (e, t) => {
		Bs(t) || (f[e] = t.toString());
	};
	p("width", u), p("height", d);
	let m = [
		i.left,
		i.top,
		c,
		l
	];
	return f.viewBox = m.join(" "), {
		attributes: f,
		viewBox: m,
		body: a
	};
}
var Hs = /\sid="(\S+)"/g, Us = /* @__PURE__ */ new Map();
function Ws(e) {
	e = e.replace(/[0-9]+$/, "") || "a";
	let t = Us.get(e) || 0;
	return Us.set(e, t + 1), t ? `${e}${t}` : e;
}
function Gs(e) {
	let t = [], n;
	for (; n = Hs.exec(e);) t.push(n[1]);
	if (!t.length) return e;
	let r = "suffix" + (Math.random() * 16777216 | Date.now()).toString(16);
	return t.forEach((t) => {
		let n = Ws(t), i = t.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
		e = e.replace(RegExp("([#;\"])(" + i + ")([\")]|\\.[a-z])", "g"), "$1" + n + r + "$3");
	}), e = e.replace(new RegExp(r, "g"), ""), e;
}
var Ks = Object.create(null);
function qs(e, t) {
	Ks[e] = t;
}
function Js(e) {
	return Ks[e] || Ks[""];
}
function Ys(e) {
	let t;
	if (typeof e.resources == "string") t = [e.resources];
	else if (t = e.resources, !(t instanceof Array) || !t.length) return null;
	return {
		resources: t,
		path: e.path || "/",
		maxURL: e.maxURL || 500,
		rotate: e.rotate || 750,
		timeout: e.timeout || 5e3,
		random: e.random === !0,
		index: e.index || 0,
		dataAfterTimeout: e.dataAfterTimeout !== !1
	};
}
for (var Xs = Object.create(null), Zs = ["https://api.simplesvg.com", "https://api.unisvg.com"], Qs = []; Zs.length > 0;) Zs.length === 1 || Math.random() > .5 ? Qs.push(Zs.shift()) : Qs.push(Zs.pop());
Xs[""] = Ys({ resources: ["https://api.iconify.design"].concat(Qs) });
function $s(e, t) {
	let n = Ys(t);
	return n !== null && (Xs[e] = n, !0);
}
function ec(e) {
	return Xs[e];
}
var tc = (() => {
	let e;
	try {
		if (e = fetch, typeof e == "function") return e;
	} catch {}
})();
function nc(e, t) {
	let n = ec(e);
	if (!n) return 0;
	let r;
	if (!n.maxURL) r = 0;
	else {
		let e = 0;
		n.resources.forEach((t) => {
			e = Math.max(e, t.length);
		});
		let i = t + ".json?icons=";
		r = n.maxURL - e - n.path.length - i.length;
	}
	return r;
}
function rc(e) {
	return e === 404;
}
var ic = (e, t, n) => {
	let r = [], i = nc(e, t), a = "icons", o = {
		type: a,
		provider: e,
		prefix: t,
		icons: []
	}, s = 0;
	return n.forEach((n, c) => {
		s += n.length + 1, s >= i && c > 0 && (r.push(o), o = {
			type: a,
			provider: e,
			prefix: t,
			icons: []
		}, s = n.length), o.icons.push(n);
	}), r.push(o), r;
};
function ac(e) {
	if (typeof e == "string") {
		let t = ec(e);
		if (t) return t.path;
	}
	return "/";
}
var oc = {
	prepare: ic,
	send: (e, t, n) => {
		if (!tc) {
			n("abort", 424);
			return;
		}
		let r = ac(t.provider);
		switch (t.type) {
			case "icons": {
				let e = t.prefix, n = t.icons.join(","), i = new URLSearchParams({ icons: n });
				r += e + ".json?" + i.toString();
				break;
			}
			case "custom": {
				let e = t.uri;
				r += e.slice(0, 1) === "/" ? e.slice(1) : e;
				break;
			}
			default:
				n("abort", 400);
				return;
		}
		let i = 503;
		tc(e + r).then((e) => {
			let t = e.status;
			if (t !== 200) {
				setTimeout(() => {
					n(rc(t) ? "abort" : "next", t);
				});
				return;
			}
			return i = 501, e.json();
		}).then((e) => {
			if (typeof e != "object" || !e) {
				setTimeout(() => {
					e === 404 ? n("abort", e) : n("next", i);
				});
				return;
			}
			setTimeout(() => {
				n("success", e);
			});
		}).catch(() => {
			n("next", i);
		});
	}
};
function sc(e, t) {
	e.forEach((e) => {
		let n = e.loaderCallbacks;
		n && (e.loaderCallbacks = n.filter((e) => e.id !== t));
	});
}
function cc(e) {
	e.pendingCallbacksFlag || (e.pendingCallbacksFlag = !0, setTimeout(() => {
		e.pendingCallbacksFlag = !1;
		let t = e.loaderCallbacks ? e.loaderCallbacks.slice(0) : [];
		if (!t.length) return;
		let n = !1, r = e.provider, i = e.prefix;
		t.forEach((t) => {
			let a = t.icons, o = a.pending.length;
			a.pending = a.pending.filter((t) => {
				if (t.prefix !== i) return !0;
				let o = t.name;
				if (e.icons[o]) a.loaded.push({
					provider: r,
					prefix: i,
					name: o
				});
				else if (e.missing.has(o)) a.missing.push({
					provider: r,
					prefix: i,
					name: o
				});
				else return n = !0, !0;
				return !1;
			}), a.pending.length !== o && (n || sc([e], t.id), t.callback(a.loaded.slice(0), a.missing.slice(0), a.pending.slice(0), t.abort));
		});
	}));
}
var lc = 0;
function uc(e, t, n) {
	let r = lc++, i = sc.bind(null, n, r);
	if (!t.pending.length) return i;
	let a = {
		id: r,
		icons: t,
		callback: e,
		abort: i
	};
	return n.forEach((e) => {
		(e.loaderCallbacks ||= []).push(a);
	}), i;
}
function dc(e) {
	let t = {
		loaded: [],
		missing: [],
		pending: []
	}, n = Object.create(null);
	e.sort((e, t) => e.provider === t.provider ? e.prefix === t.prefix ? e.name.localeCompare(t.name) : e.prefix.localeCompare(t.prefix) : e.provider.localeCompare(t.provider));
	let r = {
		provider: "",
		prefix: "",
		name: ""
	};
	return e.forEach((e) => {
		if (r.name === e.name && r.prefix === e.prefix && r.provider === e.provider) return;
		r = e;
		let i = e.provider, a = e.prefix, o = e.name, s = n[i] || (n[i] = Object.create(null)), c = s[a] || (s[a] = Cs(i, a)), l;
		l = o in c.icons ? t.loaded : a === "" || c.missing.has(o) ? t.missing : t.pending;
		let u = {
			provider: i,
			prefix: a,
			name: o
		};
		l.push(u);
	}), t;
}
function fc(e, t = !0, n = !1) {
	let r = [];
	return e.forEach((e) => {
		let i = typeof e == "string" ? ss(e, t, n) : e;
		i && r.push(i);
	}), r;
}
var pc = {
	resources: [],
	index: 0,
	timeout: 2e3,
	rotate: 750,
	random: !1,
	dataAfterTimeout: !1
};
function mc(e, t, n, r) {
	let i = e.resources.length, a = e.random ? Math.floor(Math.random() * i) : e.index, o;
	if (e.random) {
		let t = e.resources.slice(0);
		for (o = []; t.length > 1;) {
			let e = Math.floor(Math.random() * t.length);
			o.push(t[e]), t = t.slice(0, e).concat(t.slice(e + 1));
		}
		o = o.concat(t);
	} else o = e.resources.slice(a).concat(e.resources.slice(0, a));
	let s = Date.now(), c = "pending", l = 0, u, d = null, f = [], p = [];
	typeof r == "function" && p.push(r);
	function m() {
		d &&= (clearTimeout(d), null);
	}
	function h() {
		c === "pending" && (c = "aborted"), m(), f.forEach((e) => {
			e.status === "pending" && (e.status = "aborted");
		}), f = [];
	}
	function g(e, t) {
		t && (p = []), typeof e == "function" && p.push(e);
	}
	function _() {
		return {
			startTime: s,
			payload: t,
			status: c,
			queriesSent: l,
			queriesPending: f.length,
			subscribe: g,
			abort: h
		};
	}
	function v() {
		c = "failed", p.forEach((e) => {
			e(void 0, u);
		});
	}
	function y() {
		f.forEach((e) => {
			e.status === "pending" && (e.status = "aborted");
		}), f = [];
	}
	function b(t, n, r) {
		let i = n !== "success";
		switch (f = f.filter((e) => e !== t), c) {
			case "pending": break;
			case "failed":
				if (i || !e.dataAfterTimeout) return;
				break;
			default: return;
		}
		if (n === "abort") {
			u = r, v();
			return;
		}
		if (i) {
			u = r, f.length || (o.length ? x() : v());
			return;
		}
		if (m(), y(), !e.random) {
			let n = e.resources.indexOf(t.resource);
			n !== -1 && n !== e.index && (e.index = n);
		}
		c = "completed", p.forEach((e) => {
			e(r);
		});
	}
	function x() {
		if (c !== "pending") return;
		m();
		let r = o.shift();
		if (r === void 0) {
			if (f.length) {
				d = setTimeout(() => {
					m(), c === "pending" && (y(), v());
				}, e.timeout);
				return;
			}
			v();
			return;
		}
		let i = {
			status: "pending",
			resource: r,
			callback: (e, t) => {
				b(i, e, t);
			}
		};
		f.push(i), l++, d = setTimeout(x, e.rotate), n(r, t, i.callback);
	}
	return setTimeout(x), _;
}
function hc(e) {
	let t = {
		...pc,
		...e
	}, n = [];
	function r() {
		n = n.filter((e) => e().status === "pending");
	}
	function i(e, i, a) {
		let o = mc(t, e, i, (e, t) => {
			r(), a && a(e, t);
		});
		return n.push(o), o;
	}
	function a(e) {
		return n.find((t) => e(t)) || null;
	}
	return {
		query: i,
		find: a,
		setIndex: (e) => {
			t.index = e;
		},
		getIndex: () => t.index,
		cleanup: r
	};
}
function gc() {}
var _c = Object.create(null);
function vc(e) {
	if (!_c[e]) {
		let t = ec(e);
		if (!t) return;
		_c[e] = {
			config: t,
			redundancy: hc(t)
		};
	}
	return _c[e];
}
function yc(e, t, n) {
	let r, i;
	if (typeof e == "string") {
		let t = Js(e);
		if (!t) return n(void 0, 424), gc;
		i = t.send;
		let a = vc(e);
		a && (r = a.redundancy);
	} else {
		let t = Ys(e);
		if (t) {
			r = hc(t);
			let n = Js(e.resources ? e.resources[0] : "");
			n && (i = n.send);
		}
	}
	return !r || !i ? (n(void 0, 424), gc) : r.query(t, i, n)().abort;
}
function bc() {}
function xc(e) {
	e.iconsLoaderFlag || (e.iconsLoaderFlag = !0, setTimeout(() => {
		e.iconsLoaderFlag = !1, cc(e);
	}));
}
function Sc(e) {
	let t = [], n = [];
	return e.forEach((e) => {
		(e.match(os) ? t : n).push(e);
	}), {
		valid: t,
		invalid: n
	};
}
function Cc(e, t, n) {
	function r() {
		let n = e.pendingIcons;
		t.forEach((t) => {
			n && n.delete(t), e.icons[t] || e.missing.add(t);
		});
	}
	if (n && typeof n == "object") try {
		if (!ws(e, n).length) {
			r();
			return;
		}
	} catch (e) {
		console.error(e);
	}
	r(), xc(e);
}
function wc(e, t) {
	e instanceof Promise ? e.then((e) => {
		t(e);
	}).catch(() => {
		t(null);
	}) : t(e);
}
function Tc(e, t) {
	e.iconsToLoad = e.iconsToLoad ? e.iconsToLoad.concat(t).sort() : t, e.iconsQueueFlag || (e.iconsQueueFlag = !0, setTimeout(() => {
		e.iconsQueueFlag = !1;
		let { provider: t, prefix: n } = e, r = e.iconsToLoad;
		if (delete e.iconsToLoad, !r || !r.length) return;
		let i = e.loadIcon;
		if (e.loadIcons && (r.length > 1 || !i)) {
			wc(e.loadIcons(r, n, t), (t) => {
				Cc(e, r, t);
			});
			return;
		}
		if (i) {
			r.forEach((r) => {
				wc(i(r, n, t), (t) => {
					Cc(e, [r], t ? {
						prefix: n,
						icons: { [r]: t }
					} : null);
				});
			});
			return;
		}
		let { valid: a, invalid: o } = Sc(r);
		if (o.length && Cc(e, o, null), !a.length) return;
		let s = n.match(os) ? Js(t) : null;
		if (!s) {
			Cc(e, a, null);
			return;
		}
		s.prepare(t, n, a).forEach((n) => {
			yc(t, n, (t) => {
				Cc(e, n.icons, t);
			});
		});
	}));
}
var Ec = (e, t) => {
	let n = dc(fc(e, !0, Ds()));
	if (!n.pending.length) {
		let e = !0;
		return t && setTimeout(() => {
			e && t(n.loaded, n.missing, n.pending, bc);
		}), () => {
			e = !1;
		};
	}
	let r = Object.create(null), i = [], a, o;
	return n.pending.forEach((e) => {
		let { provider: t, prefix: n } = e;
		if (n === o && t === a) return;
		a = t, o = n, i.push(Cs(t, n));
		let s = r[t] || (r[t] = Object.create(null));
		s[n] || (s[n] = []);
	}), n.pending.forEach((e) => {
		let { provider: t, prefix: n, name: i } = e, a = Cs(t, n), o = a.pendingIcons ||= /* @__PURE__ */ new Set();
		o.has(i) || (o.add(i), r[t][n].push(i));
	}), i.forEach((e) => {
		let t = r[e.provider][e.prefix];
		t.length && Tc(e, t);
	}), t ? uc(t, n, i) : bc;
};
function Dc(e, t) {
	let n = { ...e };
	for (let e in t) {
		let r = t[e], i = typeof r;
		e in Ms ? (r === null || r && (i === "string" || i === "number")) && (n[e] = r) : i === typeof n[e] && (n[e] = e === "rotate" ? r % 4 : r);
	}
	return n;
}
var Oc = /[\s,]+/;
function kc(e, t) {
	t.split(Oc).forEach((t) => {
		switch (t.trim()) {
			case "horizontal":
				e.hFlip = !0;
				break;
			case "vertical": e.vFlip = !0;
		}
	});
}
function Ac(e, t = 0) {
	let n = e.replace(/^-?[0-9.]*/, "");
	function r(e) {
		for (; e < 0;) e += 4;
		return e % 4;
	}
	if (n === "") {
		let t = parseInt(e);
		return isNaN(t) ? 0 : r(t);
	}
	if (n !== e) {
		let t = 0;
		switch (n) {
			case "%":
				t = 25;
				break;
			case "deg": t = 90;
		}
		if (t) {
			let i = parseFloat(e.slice(0, e.length - n.length));
			return isNaN(i) ? 0 : (i /= t, i % 1 == 0 ? r(i) : 0);
		}
	}
	return t;
}
function jc(e, t) {
	let n = e.indexOf("xlink:") === -1 ? "" : " xmlns:xlink=\"http://www.w3.org/1999/xlink\"";
	for (let e in t) n += " " + e + "=\"" + t[e] + "\"";
	return "<svg xmlns=\"http://www.w3.org/2000/svg\"" + n + ">" + e + "</svg>";
}
function Mc(e) {
	return e.replace(/"/g, "'").replace(/%/g, "%25").replace(/#/g, "%23").replace(/</g, "%3C").replace(/>/g, "%3E").replace(/\s+/g, " ");
}
function Nc(e) {
	return "data:image/svg+xml," + Mc(e);
}
function Pc(e) {
	return "url(\"" + Nc(e) + "\")";
}
var Fc = {
	...Ns,
	inline: !1
}, Ic = {
	xmlns: "http://www.w3.org/2000/svg",
	"xmlns:xlink": "http://www.w3.org/1999/xlink",
	"aria-hidden": !0,
	role: "img"
}, Lc = { display: "inline-block" }, Rc = { backgroundColor: "currentColor" }, zc = { backgroundColor: "transparent" }, Bc = {
	Image: "var(--svg)",
	Repeat: "no-repeat",
	Size: "100% 100%"
}, Vc = {
	webkitMask: Rc,
	mask: Rc,
	background: zc
};
for (let e in Vc) {
	let t = Vc[e];
	for (let n in Bc) t[e + n] = Bc[n];
}
var Hc = {};
["horizontal", "vertical"].forEach((e) => {
	let t = e.slice(0, 1) + "Flip";
	Hc[e + "-flip"] = t, Hc[e.slice(0, 1) + "-flip"] = t, Hc[e + "Flip"] = t;
});
function Uc(e) {
	return e + (e.match(/^[-0-9.]+$/) ? "px" : "");
}
var Wc = (e, t) => {
	let n = Dc(Fc, t), r = { ...Ic }, i = t.mode || "svg", a = {}, o = t.style, s = typeof o == "object" && !(o instanceof Array) ? o : {};
	for (let e in t) {
		let i = t[e];
		if (i !== void 0) switch (e) {
			case "icon":
			case "style":
			case "onLoad":
			case "mode":
			case "ssr":
			case "customise": break;
			case "inline":
			case "hFlip":
			case "vFlip":
				n[e] = i === !0 || i === "true" || i === 1;
				break;
			case "flip":
				typeof i == "string" && kc(n, i);
				break;
			case "color":
				a.color = i;
				break;
			case "rotate":
				typeof i == "string" ? n[e] = Ac(i) : typeof i == "number" && (n[e] = i);
				break;
			case "ariaHidden":
			case "aria-hidden":
				i !== !0 && i !== "true" && delete r["aria-hidden"];
				break;
			default: {
				let t = Hc[e];
				t ? (i === !0 || i === "true" || i === 1) && (n[t] = !0) : Fc[e] === void 0 && (r[e] = i);
			}
		}
	}
	let c = Vs(e, n), l = c.attributes;
	if (n.inline && (a.verticalAlign = "-0.125em"), i === "svg") return r.style = {
		...a,
		...s
	}, Object.assign(r, l), r.innerHTML = Gs(c.body), S("svg", r);
	let { body: u, width: d, height: f } = e, p = i === "mask" || i !== "bg" && u.indexOf("currentColor") !== -1, m = jc(u, {
		...l,
		width: d + "",
		height: f + ""
	});
	return r.style = {
		...a,
		"--svg": Pc(m),
		width: Uc(l.width),
		height: Uc(l.height),
		...Lc,
		...p ? Rc : zc,
		...s
	}, S("span", r);
};
if (Ds(!0), qs("", oc), typeof document < "u" && typeof window < "u") {
	let e = window;
	if (e.IconifyPreload !== void 0) {
		let t = e.IconifyPreload, n = "Invalid IconifyPreload syntax.";
		typeof t == "object" && t && (t instanceof Array ? t : [t]).forEach((e) => {
			try {
				(typeof e != "object" || !e || e instanceof Array || typeof e.icons != "object" || typeof e.prefix != "string" || !As(e)) && console.error(n);
			} catch {
				console.error(n);
			}
		});
	}
	if (e.IconifyProviders !== void 0) {
		let t = e.IconifyProviders;
		if (typeof t == "object" && t) for (let e in t) {
			let n = "IconifyProviders[" + e + "] is invalid.";
			try {
				let r = t[e];
				if (typeof r != "object" || !r || r.resources === void 0) continue;
				$s(e, r) || console.error(n);
			} catch {
				console.error(n);
			}
		}
	}
}
var Gc = {
	...fs,
	body: ""
}, Kc = _((e, { emit: t }) => {
	let n = F(null);
	function r() {
		n.value &&= (n.value.abort?.(), null);
	}
	let i = F(!!e.ssr), a = F(""), o = R(null);
	function s() {
		let i = e.icon;
		if (typeof i == "object" && i && typeof i.body == "string") return a.value = "", { data: i };
		let o;
		if (typeof i != "string" || (o = ss(i, !1, !0)) === null) return null;
		let s = Os(o);
		if (!s) {
			let e = n.value;
			return (!e || e.name !== i) && (s === null ? n.value = { name: i } : n.value = {
				name: i,
				abort: Ec([o], c)
			}), null;
		}
		r(), a.value !== i && (a.value = i, D(() => {
			t("load", i);
		}));
		let l = e.customise;
		if (l) {
			s = Object.assign({}, s);
			let e = l(s.body, o.name, o.prefix, o.provider);
			typeof e == "string" && (s.body = e);
		}
		let u = ["iconify"];
		return o.prefix !== "" && u.push("iconify--" + o.prefix), o.provider !== "" && u.push("iconify--" + o.provider), {
			data: s,
			classes: u
		};
	}
	function c() {
		let e = s();
		e ? e.data !== o.value?.data && (o.value = e) : o.value = null;
	}
	return i.value ? c() : A(() => {
		i.value = !0, c();
	}), H(() => e.icon, c), j(r), () => {
		let t = o.value;
		if (!t) return Wc(Gc, e);
		let n = e;
		return t.classes && (n = {
			...e,
			class: t.classes.join(" ")
		}), Wc({
			...fs,
			...t.data
		}, n);
	};
}, {
	props: [
		"icon",
		"mode",
		"ssr",
		"width",
		"height",
		"style",
		"color",
		"inline",
		"rotate",
		"hFlip",
		"horizontalFlip",
		"vFlip",
		"verticalFlip",
		"flip",
		"id",
		"ariaHidden",
		"customise",
		"title"
	],
	emits: ["load"]
}), qc = {
	__name: "Icon",
	props: {
		name: {
			type: null,
			required: !0
		},
		mode: {
			type: String,
			required: !1
		},
		size: {
			type: [String, Number],
			required: !1
		},
		customize: {
			type: [
				Function,
				Boolean,
				null
			],
			required: !1
		}
	},
	setup(e) {
		let t = e, n = q();
		function r(e, t) {
			if (e !== !1) return e === !0 || e === null ? t : e;
		}
		let i = c(() => {
			let e = t.mode || n.icon?.mode;
			return e === "css" ? "style" : e;
		}), a = c(() => t.size || n.icon?.size), o = c(() => r(t.customize, n.icon?.customize)), s = c(() => typeof t.name == "string" ? t.name.replace(/^i-/, "") : ""), u = c(() => js(s.value));
		return (t, n) => typeof e.name == "string" ? (M(), l(V(Kc), {
			key: 0,
			icon: s.value,
			mode: i.value,
			width: a.value,
			height: a.value,
			customise: o.value,
			ssr: u.value
		}, null, 8, [
			"icon",
			"mode",
			"width",
			"height",
			"customise",
			"ssr"
		])) : (M(), l(ae(e.name), { key: 1 }));
	}
}, Jc = Symbol("nuxt-ui.avatar-group");
function Yc(e) {
	let t = C(Jc, void 0), n = c(() => e.size ?? t?.value.size), r = c(() => e.color ?? t?.value.color);
	return N(Jc, c(() => ({
		size: n.value,
		color: r.value
	}))), {
		size: n,
		color: r
	};
}
//#endregion
//#region virtual:nuxt-ui-templates/ui/chip.ts
var Xc = {
	slots: {
		root: "relative inline-flex items-center justify-center shrink-0",
		base: "rounded-full ring ring-bg flex items-center justify-center text-inverted font-medium whitespace-nowrap"
	},
	variants: {
		color: {
			primary: "bg-primary",
			secondary: "bg-secondary",
			success: "bg-success",
			info: "bg-info",
			warning: "bg-warning",
			error: "bg-error",
			neutral: "bg-inverted"
		},
		size: {
			"3xs": "h-[4px] min-w-[4px] text-[4px]",
			"2xs": "h-[5px] min-w-[5px] text-[5px]",
			xs: "h-[6px] min-w-[6px] text-[6px]",
			sm: "h-[7px] min-w-[7px] text-[7px]",
			md: "h-[8px] min-w-[8px] text-[8px]",
			lg: "h-[9px] min-w-[9px] text-[9px]",
			xl: "h-[10px] min-w-[10px] text-[10px]",
			"2xl": "h-[11px] min-w-[11px] text-[11px]",
			"3xl": "h-[12px] min-w-[12px] text-[12px]"
		},
		position: {
			"top-right": "top-0 right-0",
			"bottom-right": "bottom-0 right-0",
			"top-left": "top-0 left-0",
			"bottom-left": "bottom-0 left-0"
		},
		inset: { false: "" },
		standalone: { false: "absolute" }
	},
	compoundVariants: [
		{
			position: "top-right",
			inset: !1,
			class: "-translate-y-1/2 translate-x-1/2 transform"
		},
		{
			position: "bottom-right",
			inset: !1,
			class: "translate-y-1/2 translate-x-1/2 transform"
		},
		{
			position: "top-left",
			inset: !1,
			class: "-translate-y-1/2 -translate-x-1/2 transform"
		},
		{
			position: "bottom-left",
			inset: !1,
			class: "translate-y-1/2 -translate-x-1/2 transform"
		}
	],
	defaultVariants: {
		size: "xl",
		color: "primary",
		position: "top-right"
	}
}, Zc = /*@__PURE__*/ Object.assign({ inheritAttrs: !1 }, {
	__name: "Chip",
	props: /*@__PURE__*/ T({
		as: {
			type: null,
			required: !1
		},
		text: {
			type: [String, Number],
			required: !1
		},
		color: {
			type: null,
			required: !1
		},
		size: {
			type: null,
			required: !1
		},
		position: {
			type: null,
			required: !1
		},
		inset: {
			type: Boolean,
			required: !1,
			default: !1
		},
		standalone: {
			type: Boolean,
			required: !1,
			default: !1
		},
		class: {
			type: null,
			required: !1
		},
		ui: {
			type: Object,
			required: !1
		}
	}, {
		show: {
			type: Boolean,
			default: !0
		},
		showModifiers: {}
	}),
	emits: ["update:show"],
	setup(e) {
		let t = e, n = yr("chip", t), r = me(e, "show", {
			type: Boolean,
			default: !0
		}), { size: i } = Yc(t), a = q(), o = c(() => $({
			extend: Xc,
			...a.ui?.chip || {}
		})({
			color: n.color,
			size: i.value ?? n.size,
			position: n.position,
			inset: n.inset,
			standalone: n.standalone
		}));
		return (e, t) => (M(), l(V(K), {
			as: V(n).as,
			"data-slot": e.$attrs["data-slot"] ?? "root",
			class: O(o.value.root({ class: [V(n).ui?.root, V(n).class] }))
		}, {
			default: U(() => [h(V(Kt), k(x({
				...e.$attrs,
				"data-slot": void 0
			})), {
				default: U(() => [L(e.$slots, "default")]),
				_: 3
			}, 16), r.value ? (M(), d("span", {
				key: 0,
				"data-slot": "base",
				class: O(o.value.base({ class: V(n).ui?.base }))
			}, [L(e.$slots, "content", {}, () => [m(z(V(n).text), 1)])], 2)) : u("", !0)]),
			_: 3
		}, 8, [
			"as",
			"data-slot",
			"class"
		]));
	}
}), Qc = {
	slots: {
		root: "inline-flex items-center justify-center shrink-0 select-none rounded-full align-middle",
		image: "h-full w-full rounded-[inherit] object-cover",
		fallback: "font-medium truncate",
		icon: "shrink-0"
	},
	variants: {
		color: {
			primary: {
				root: "bg-primary/10",
				fallback: "text-primary",
				icon: "text-primary"
			},
			secondary: {
				root: "bg-secondary/10",
				fallback: "text-secondary",
				icon: "text-secondary"
			},
			success: {
				root: "bg-success/10",
				fallback: "text-success",
				icon: "text-success"
			},
			info: {
				root: "bg-info/10",
				fallback: "text-info",
				icon: "text-info"
			},
			warning: {
				root: "bg-warning/10",
				fallback: "text-warning",
				icon: "text-warning"
			},
			error: {
				root: "bg-error/10",
				fallback: "text-error",
				icon: "text-error"
			},
			neutral: {
				root: "bg-elevated",
				fallback: "text-muted",
				icon: "text-muted"
			}
		},
		size: {
			"3xs": { root: "size-4 text-[8px]" },
			"2xs": { root: "size-5 text-[10px]" },
			xs: { root: "size-6 text-xs" },
			sm: { root: "size-7 text-sm" },
			md: { root: "size-8 text-base" },
			lg: { root: "size-9 text-lg" },
			xl: { root: "size-10 text-xl" },
			"2xl": { root: "size-11 text-[22px]" },
			"3xl": { root: "size-12 text-2xl" }
		}
	},
	defaultVariants: {
		size: "xl",
		color: "neutral"
	}
}, $c = /*@__PURE__*/ Object.assign({ inheritAttrs: !1 }, {
	__name: "Avatar",
	props: {
		as: {
			type: null,
			required: !1
		},
		src: {
			type: String,
			required: !1
		},
		alt: {
			type: String,
			required: !1
		},
		icon: {
			type: null,
			required: !1
		},
		text: {
			type: String,
			required: !1
		},
		size: {
			type: null,
			required: !1
		},
		color: {
			type: null,
			required: !1
		},
		chip: {
			type: [Boolean, Object],
			required: !1
		},
		class: {
			type: null,
			required: !1
		},
		style: {
			type: null,
			required: !1
		},
		ui: {
			type: Object,
			required: !1
		}
	},
	setup(e) {
		let t = e, n = yr("avatar", t), r = c(() => typeof n.as == "string" || typeof n.as?.render == "function" ? { root: n.as } : yt(n.as, { root: "span" })), i = c(() => n.text || (n.alt || "").split(" ").map((e) => e.charAt(0)).join("").substring(0, 2)), a = q(), { size: o, color: s } = Yc(t), u = c(() => $({
			extend: Qc,
			...a.ui?.avatar || {}
		})({
			size: o.value ?? n.size,
			color: s.value ?? n.color
		})), f = c(() => u.value.root({ class: [n.ui?.root, n.class] })), p = c(() => {
			let e = (f.value || "").split(" ").find((e) => /^size-\d+$/.test(e));
			if (e) {
				let t = Number.parseFloat(e.split("-")[1] ?? "");
				if (!Number.isNaN(t)) return t * 4;
			}
			return null;
		}), m = F(!1);
		H(() => n.src, () => {
			m.value &&= !1;
		});
		function h() {
			m.value = !0;
		}
		return (e, t) => (M(), l(ae(V(n).chip ? Zc : V(K)), E({ as: r.value.root }, V(n).chip ? typeof V(n).chip == "object" ? {
			inset: !0,
			...V(n).chip
		} : { inset: !0 } : {}, {
			"data-slot": e.$attrs["data-slot"] ?? "root",
			class: f.value,
			style: V(n).style
		}), {
			default: U(() => [V(n).src && !m.value ? (M(), l(ae(r.value.img || V("img")), E({
				key: 0,
				src: V(n).src,
				alt: V(n).alt,
				width: p.value,
				height: p.value
			}, e.$attrs, {
				"data-slot": "image",
				class: u.value.image({ class: V(n).ui?.image }),
				onError: h
			}), null, 16, [
				"src",
				"alt",
				"width",
				"height",
				"class"
			])) : (M(), l(V(Kt), k(E({ key: 1 }, {
				...e.$attrs,
				"data-slot": void 0
			})), {
				default: U(() => [L(e.$slots, "default", {}, () => [V(n).icon ? (M(), l(qc, {
					key: 0,
					name: V(n).icon,
					"data-slot": "icon",
					class: O(u.value.icon({ class: V(n).ui?.icon }))
				}, null, 8, ["name", "class"])) : (M(), d("span", {
					key: 1,
					"data-slot": "fallback",
					class: O(u.value.fallback({ class: V(n).ui?.fallback }))
				}, z(i.value || "\xA0"), 3))])]),
				_: 3
			}, 16))]),
			_: 3
		}, 16, [
			"as",
			"data-slot",
			"class",
			"style"
		]));
	}
}), el = {
	__name: "LinkBase",
	props: {
		as: {
			type: String,
			required: !1,
			default: "button"
		},
		type: {
			type: String,
			required: !1,
			default: "button"
		},
		disabled: {
			type: Boolean,
			required: !1
		},
		onClick: {
			type: [Function, Array],
			required: !1
		},
		href: {
			type: [String, null],
			required: !1
		},
		navigate: {
			type: Function,
			required: !1
		},
		target: {
			type: [
				String,
				Object,
				null
			],
			required: !1
		},
		rel: {
			type: [
				String,
				Object,
				null
			],
			required: !1
		},
		active: {
			type: Boolean,
			required: !1
		},
		isExternal: {
			type: Boolean,
			required: !1
		}
	},
	setup(e) {
		let t = e;
		function n(e) {
			if (t.disabled) {
				e.stopPropagation(), e.preventDefault();
				return;
			}
			if (t.onClick) for (let n of Array.isArray(t.onClick) ? t.onClick : [t.onClick]) n(e);
			t.href && t.navigate && !t.isExternal && t.navigate(e);
		}
		return (t, r) => (M(), l(V(K), E(e.href ? {
			as: "a",
			href: e.disabled ? void 0 : e.href,
			"aria-disabled": e.disabled ? "true" : void 0,
			role: e.disabled ? "link" : void 0,
			tabindex: e.disabled ? -1 : void 0
		} : e.as === "button" ? {
			as: e.as,
			type: e.type,
			disabled: e.disabled
		} : { as: e.as }, {
			rel: e.rel,
			target: e.target,
			onClick: n
		}), {
			default: U(() => [L(t.$slots, "default")]),
			_: 3
		}, 16, ["rel", "target"]));
	}
}, tl = {
	base: "outline-primary/25 focus-visible:outline-3 rounded-md",
	variants: {
		active: {
			true: "text-primary",
			false: "text-muted"
		},
		disabled: { true: "cursor-not-allowed opacity-75" }
	},
	compoundVariants: [{
		active: !1,
		disabled: !1,
		class: ["hover:text-default", "transition-colors"]
	}]
}, nl = /*@__PURE__*/ Object.assign({ inheritAttrs: !1 }, {
	__name: "Link",
	props: {
		as: {
			type: null,
			required: !1,
			default: "button"
		},
		type: {
			type: null,
			required: !1,
			default: "button"
		},
		disabled: {
			type: Boolean,
			required: !1
		},
		active: {
			type: Boolean,
			required: !1,
			default: void 0
		},
		exact: {
			type: Boolean,
			required: !1
		},
		exactQuery: {
			type: [Boolean, String],
			required: !1
		},
		exactHash: {
			type: Boolean,
			required: !1
		},
		inactiveClass: {
			type: String,
			required: !1
		},
		activeClass: {
			type: String,
			required: !1
		},
		ariaCurrentValue: {
			type: String,
			required: !1,
			default: "page"
		},
		custom: {
			type: Boolean,
			required: !1
		},
		raw: {
			type: Boolean,
			required: !1
		},
		class: {
			type: null,
			required: !1
		},
		to: {
			type: String,
			required: !1
		},
		href: {
			type: String,
			required: !1
		},
		external: {
			type: Boolean,
			required: !1
		},
		target: {
			type: [
				String,
				Object,
				null
			],
			required: !1
		},
		rel: {
			type: [
				String,
				Object,
				null
			],
			required: !1
		},
		noRel: {
			type: Boolean,
			required: !1
		}
	},
	setup(e) {
		let t = e, n = q(), r = c(() => $({
			extend: tl,
			...yt({ variants: { active: {
				true: ar(n.ui?.link?.variants?.active?.true, t.activeClass),
				false: ar(n.ui?.link?.variants?.active?.false, t.inactiveClass)
			} } }, n.ui?.link || {})
		})), i = c(() => t.to ?? t.href), a = c(() => t.target === "_blank" || t.external ? !0 : i.value ? tr(i.value, { acceptRelative: !0 }) : !1), o = c(() => !!t.target && t.target !== "_self"), s = c(() => t.active !== void 0 && t.active), u = c(() => {
			let e = s.value;
			return t.raw ? [t.class, e ? t.activeClass : t.inactiveClass] : r.value({
				class: t.class,
				active: e,
				disabled: t.disabled
			});
		}), d = c(() => t.noRel ? null : t.rel === void 0 ? a.value || o.value ? "noopener noreferrer" : null : t.rel || null), f = C("nuxtui:router", void 0), p = f ? (e) => {
			f(e, {
				href: i.value || "",
				external: a.value,
				target: t.target || (a.value ? "_blank" : void 0)
			});
		} : void 0;
		return (t, n) => e.custom ? (M(), l(V(Kt), { key: 0 }, {
			default: U(() => [L(t.$slots, "default", k(x({
				...t.$attrs,
				as: e.as,
				type: e.type,
				disabled: e.disabled,
				href: i.value,
				navigate: V(p),
				rel: d.value,
				target: e.target || (a.value ? "_blank" : void 0),
				isExternal: a.value,
				active: s.value
			})))]),
			_: 3
		})) : (M(), l(el, E({ key: 1 }, {
			...t.$attrs,
			as: e.as,
			type: e.type,
			disabled: e.disabled,
			href: i.value,
			navigate: V(p),
			rel: d.value,
			target: e.target || (a.value ? "_blank" : void 0),
			isExternal: a.value
		}, { class: u.value }), {
			default: U(() => [L(t.$slots, "default", { active: s.value })]),
			_: 3
		}, 16, ["class"]));
	}
}), rl = {
	slots: {
		base: ["rounded-md font-medium inline-flex items-center disabled:cursor-not-allowed aria-disabled:cursor-not-allowed disabled:opacity-75 aria-disabled:opacity-75", "transition-colors"],
		label: "truncate",
		leadingIcon: "shrink-0",
		leadingAvatar: "shrink-0",
		leadingAvatarSize: "",
		trailingIcon: "shrink-0"
	},
	variants: {
		fieldGroup: {
			horizontal: "not-only:first:rounded-e-none not-only:last:rounded-s-none not-last:not-first:rounded-none focus-visible:z-[1]",
			vertical: "not-only:first:rounded-b-none not-only:last:rounded-t-none not-last:not-first:rounded-none focus-visible:z-[1]"
		},
		color: {
			primary: "",
			secondary: "",
			success: "",
			info: "",
			warning: "",
			error: "",
			neutral: ""
		},
		variant: {
			solid: "",
			outline: "",
			soft: "",
			subtle: "",
			ghost: "",
			link: ""
		},
		size: {
			xs: {
				base: "px-2 py-1 text-xs gap-1",
				leadingIcon: "size-4",
				leadingAvatarSize: "3xs",
				trailingIcon: "size-4"
			},
			sm: {
				base: "px-2.5 py-1.5 text-xs gap-1.5",
				leadingIcon: "size-4",
				leadingAvatarSize: "3xs",
				trailingIcon: "size-4"
			},
			md: {
				base: "px-2.5 py-1.5 text-sm gap-1.5",
				leadingIcon: "size-5",
				leadingAvatarSize: "2xs",
				trailingIcon: "size-5"
			},
			lg: {
				base: "px-3 py-2 text-sm gap-2",
				leadingIcon: "size-5",
				leadingAvatarSize: "2xs",
				trailingIcon: "size-5"
			},
			xl: {
				base: "px-3 py-2 text-base gap-2",
				leadingIcon: "size-6",
				leadingAvatarSize: "xs",
				trailingIcon: "size-6"
			}
		},
		block: { true: {
			base: "w-full justify-center",
			trailingIcon: "ms-auto"
		} },
		square: { true: "" },
		leading: { true: "" },
		trailing: { true: "" },
		loading: { true: "" },
		active: {
			true: { base: "" },
			false: { base: "" }
		}
	},
	compoundVariants: [
		{
			color: "primary",
			variant: "solid",
			class: "text-inverted bg-primary hover:bg-primary/75 active:bg-primary/75 disabled:bg-primary aria-disabled:bg-primary outline-primary/25 focus-visible:outline-3"
		},
		{
			color: "secondary",
			variant: "solid",
			class: "text-inverted bg-secondary hover:bg-secondary/75 active:bg-secondary/75 disabled:bg-secondary aria-disabled:bg-secondary outline-secondary/25 focus-visible:outline-3"
		},
		{
			color: "success",
			variant: "solid",
			class: "text-inverted bg-success hover:bg-success/75 active:bg-success/75 disabled:bg-success aria-disabled:bg-success outline-success/25 focus-visible:outline-3"
		},
		{
			color: "info",
			variant: "solid",
			class: "text-inverted bg-info hover:bg-info/75 active:bg-info/75 disabled:bg-info aria-disabled:bg-info outline-info/25 focus-visible:outline-3"
		},
		{
			color: "warning",
			variant: "solid",
			class: "text-inverted bg-warning hover:bg-warning/75 active:bg-warning/75 disabled:bg-warning aria-disabled:bg-warning outline-warning/25 focus-visible:outline-3"
		},
		{
			color: "error",
			variant: "solid",
			class: "text-inverted bg-error hover:bg-error/75 active:bg-error/75 disabled:bg-error aria-disabled:bg-error outline-error/25 focus-visible:outline-3"
		},
		{
			color: "primary",
			variant: "outline",
			class: "ring ring-inset ring-primary/50 text-primary hover:bg-primary/10 active:bg-primary/10 disabled:bg-transparent aria-disabled:bg-transparent dark:disabled:bg-transparent dark:aria-disabled:bg-transparent outline-primary/25 focus-visible:outline-3 focus-visible:ring-primary"
		},
		{
			color: "secondary",
			variant: "outline",
			class: "ring ring-inset ring-secondary/50 text-secondary hover:bg-secondary/10 active:bg-secondary/10 disabled:bg-transparent aria-disabled:bg-transparent dark:disabled:bg-transparent dark:aria-disabled:bg-transparent outline-secondary/25 focus-visible:outline-3 focus-visible:ring-secondary"
		},
		{
			color: "success",
			variant: "outline",
			class: "ring ring-inset ring-success/50 text-success hover:bg-success/10 active:bg-success/10 disabled:bg-transparent aria-disabled:bg-transparent dark:disabled:bg-transparent dark:aria-disabled:bg-transparent outline-success/25 focus-visible:outline-3 focus-visible:ring-success"
		},
		{
			color: "info",
			variant: "outline",
			class: "ring ring-inset ring-info/50 text-info hover:bg-info/10 active:bg-info/10 disabled:bg-transparent aria-disabled:bg-transparent dark:disabled:bg-transparent dark:aria-disabled:bg-transparent outline-info/25 focus-visible:outline-3 focus-visible:ring-info"
		},
		{
			color: "warning",
			variant: "outline",
			class: "ring ring-inset ring-warning/50 text-warning hover:bg-warning/10 active:bg-warning/10 disabled:bg-transparent aria-disabled:bg-transparent dark:disabled:bg-transparent dark:aria-disabled:bg-transparent outline-warning/25 focus-visible:outline-3 focus-visible:ring-warning"
		},
		{
			color: "error",
			variant: "outline",
			class: "ring ring-inset ring-error/50 text-error hover:bg-error/10 active:bg-error/10 disabled:bg-transparent aria-disabled:bg-transparent dark:disabled:bg-transparent dark:aria-disabled:bg-transparent outline-error/25 focus-visible:outline-3 focus-visible:ring-error"
		},
		{
			color: "primary",
			variant: "soft",
			class: "text-primary bg-primary/10 hover:bg-primary/15 active:bg-primary/15 outline-primary/25 focus-visible:outline-3 disabled:bg-primary/10 aria-disabled:bg-primary/10"
		},
		{
			color: "secondary",
			variant: "soft",
			class: "text-secondary bg-secondary/10 hover:bg-secondary/15 active:bg-secondary/15 outline-secondary/25 focus-visible:outline-3 disabled:bg-secondary/10 aria-disabled:bg-secondary/10"
		},
		{
			color: "success",
			variant: "soft",
			class: "text-success bg-success/10 hover:bg-success/15 active:bg-success/15 outline-success/25 focus-visible:outline-3 disabled:bg-success/10 aria-disabled:bg-success/10"
		},
		{
			color: "info",
			variant: "soft",
			class: "text-info bg-info/10 hover:bg-info/15 active:bg-info/15 outline-info/25 focus-visible:outline-3 disabled:bg-info/10 aria-disabled:bg-info/10"
		},
		{
			color: "warning",
			variant: "soft",
			class: "text-warning bg-warning/10 hover:bg-warning/15 active:bg-warning/15 outline-warning/25 focus-visible:outline-3 disabled:bg-warning/10 aria-disabled:bg-warning/10"
		},
		{
			color: "error",
			variant: "soft",
			class: "text-error bg-error/10 hover:bg-error/15 active:bg-error/15 outline-error/25 focus-visible:outline-3 disabled:bg-error/10 aria-disabled:bg-error/10"
		},
		{
			color: "primary",
			variant: "subtle",
			class: "text-primary ring ring-inset ring-primary/25 bg-primary/10 hover:bg-primary/15 active:bg-primary/15 disabled:bg-primary/10 aria-disabled:bg-primary/10 outline-primary/25 focus-visible:outline-3 focus-visible:ring-primary"
		},
		{
			color: "secondary",
			variant: "subtle",
			class: "text-secondary ring ring-inset ring-secondary/25 bg-secondary/10 hover:bg-secondary/15 active:bg-secondary/15 disabled:bg-secondary/10 aria-disabled:bg-secondary/10 outline-secondary/25 focus-visible:outline-3 focus-visible:ring-secondary"
		},
		{
			color: "success",
			variant: "subtle",
			class: "text-success ring ring-inset ring-success/25 bg-success/10 hover:bg-success/15 active:bg-success/15 disabled:bg-success/10 aria-disabled:bg-success/10 outline-success/25 focus-visible:outline-3 focus-visible:ring-success"
		},
		{
			color: "info",
			variant: "subtle",
			class: "text-info ring ring-inset ring-info/25 bg-info/10 hover:bg-info/15 active:bg-info/15 disabled:bg-info/10 aria-disabled:bg-info/10 outline-info/25 focus-visible:outline-3 focus-visible:ring-info"
		},
		{
			color: "warning",
			variant: "subtle",
			class: "text-warning ring ring-inset ring-warning/25 bg-warning/10 hover:bg-warning/15 active:bg-warning/15 disabled:bg-warning/10 aria-disabled:bg-warning/10 outline-warning/25 focus-visible:outline-3 focus-visible:ring-warning"
		},
		{
			color: "error",
			variant: "subtle",
			class: "text-error ring ring-inset ring-error/25 bg-error/10 hover:bg-error/15 active:bg-error/15 disabled:bg-error/10 aria-disabled:bg-error/10 outline-error/25 focus-visible:outline-3 focus-visible:ring-error"
		},
		{
			color: "primary",
			variant: "ghost",
			class: "text-primary hover:bg-primary/10 active:bg-primary/10 outline-primary/25 focus-visible:outline-3 disabled:bg-transparent aria-disabled:bg-transparent dark:disabled:bg-transparent dark:aria-disabled:bg-transparent"
		},
		{
			color: "secondary",
			variant: "ghost",
			class: "text-secondary hover:bg-secondary/10 active:bg-secondary/10 outline-secondary/25 focus-visible:outline-3 disabled:bg-transparent aria-disabled:bg-transparent dark:disabled:bg-transparent dark:aria-disabled:bg-transparent"
		},
		{
			color: "success",
			variant: "ghost",
			class: "text-success hover:bg-success/10 active:bg-success/10 outline-success/25 focus-visible:outline-3 disabled:bg-transparent aria-disabled:bg-transparent dark:disabled:bg-transparent dark:aria-disabled:bg-transparent"
		},
		{
			color: "info",
			variant: "ghost",
			class: "text-info hover:bg-info/10 active:bg-info/10 outline-info/25 focus-visible:outline-3 disabled:bg-transparent aria-disabled:bg-transparent dark:disabled:bg-transparent dark:aria-disabled:bg-transparent"
		},
		{
			color: "warning",
			variant: "ghost",
			class: "text-warning hover:bg-warning/10 active:bg-warning/10 outline-warning/25 focus-visible:outline-3 disabled:bg-transparent aria-disabled:bg-transparent dark:disabled:bg-transparent dark:aria-disabled:bg-transparent"
		},
		{
			color: "error",
			variant: "ghost",
			class: "text-error hover:bg-error/10 active:bg-error/10 outline-error/25 focus-visible:outline-3 disabled:bg-transparent aria-disabled:bg-transparent dark:disabled:bg-transparent dark:aria-disabled:bg-transparent"
		},
		{
			color: "primary",
			variant: "link",
			class: "text-primary hover:text-primary/75 active:text-primary/75 disabled:text-primary aria-disabled:text-primary outline-primary/25 focus-visible:outline-3"
		},
		{
			color: "secondary",
			variant: "link",
			class: "text-secondary hover:text-secondary/75 active:text-secondary/75 disabled:text-secondary aria-disabled:text-secondary outline-secondary/25 focus-visible:outline-3"
		},
		{
			color: "success",
			variant: "link",
			class: "text-success hover:text-success/75 active:text-success/75 disabled:text-success aria-disabled:text-success outline-success/25 focus-visible:outline-3"
		},
		{
			color: "info",
			variant: "link",
			class: "text-info hover:text-info/75 active:text-info/75 disabled:text-info aria-disabled:text-info outline-info/25 focus-visible:outline-3"
		},
		{
			color: "warning",
			variant: "link",
			class: "text-warning hover:text-warning/75 active:text-warning/75 disabled:text-warning aria-disabled:text-warning outline-warning/25 focus-visible:outline-3"
		},
		{
			color: "error",
			variant: "link",
			class: "text-error hover:text-error/75 active:text-error/75 disabled:text-error aria-disabled:text-error outline-error/25 focus-visible:outline-3"
		},
		{
			color: "neutral",
			variant: "solid",
			class: "text-inverted bg-inverted hover:bg-inverted/90 active:bg-inverted/90 disabled:bg-inverted aria-disabled:bg-inverted outline-inverted/25 focus-visible:outline-3"
		},
		{
			color: "neutral",
			variant: "outline",
			class: "ring ring-inset ring-accented text-default bg-default hover:bg-elevated active:bg-elevated disabled:bg-default aria-disabled:bg-default outline-inverted/25 focus-visible:outline-3 focus-visible:ring-inverted"
		},
		{
			color: "neutral",
			variant: "soft",
			class: "text-default bg-elevated hover:bg-accented/75 active:bg-accented/75 outline-inverted/25 focus-visible:outline-3 disabled:bg-elevated aria-disabled:bg-elevated"
		},
		{
			color: "neutral",
			variant: "subtle",
			class: "ring ring-inset ring-accented text-default bg-elevated hover:bg-accented/75 active:bg-accented/75 disabled:bg-elevated aria-disabled:bg-elevated outline-inverted/25 focus-visible:outline-3 focus-visible:ring-inverted"
		},
		{
			color: "neutral",
			variant: "ghost",
			class: "text-default hover:bg-elevated active:bg-elevated outline-inverted/25 focus-visible:outline-3 hover:disabled:bg-transparent dark:hover:disabled:bg-transparent hover:aria-disabled:bg-transparent dark:hover:aria-disabled:bg-transparent"
		},
		{
			color: "neutral",
			variant: "link",
			class: "text-muted hover:text-default active:text-default disabled:text-muted aria-disabled:text-muted outline-inverted/25 focus-visible:outline-3"
		},
		{
			size: "xs",
			square: !0,
			class: "p-1"
		},
		{
			size: "sm",
			square: !0,
			class: "p-1.5"
		},
		{
			size: "md",
			square: !0,
			class: "p-1.5"
		},
		{
			size: "lg",
			square: !0,
			class: "p-2"
		},
		{
			size: "xl",
			square: !0,
			class: "p-2"
		},
		{
			loading: !0,
			leading: !0,
			class: { leadingIcon: "animate-spin" }
		},
		{
			loading: !0,
			leading: !1,
			trailing: !0,
			class: { trailingIcon: "animate-spin" }
		}
	],
	defaultVariants: {
		color: "primary",
		variant: "solid",
		size: "xl"
	}
}, il = {
	__name: "Button",
	props: {
		label: {
			type: String,
			required: !1
		},
		color: {
			type: null,
			required: !1
		},
		activeColor: {
			type: null,
			required: !1
		},
		variant: {
			type: null,
			required: !1
		},
		activeVariant: {
			type: null,
			required: !1
		},
		size: {
			type: null,
			required: !1
		},
		square: {
			type: Boolean,
			required: !1
		},
		block: {
			type: Boolean,
			required: !1
		},
		loadingAuto: {
			type: Boolean,
			required: !1
		},
		onClick: {
			type: [Function, Array],
			required: !1
		},
		class: {
			type: null,
			required: !1
		},
		ui: {
			type: Object,
			required: !1
		},
		icon: {
			type: null,
			required: !1
		},
		avatar: {
			type: Object,
			required: !1
		},
		leading: {
			type: Boolean,
			required: !1
		},
		leadingIcon: {
			type: null,
			required: !1
		},
		trailing: {
			type: Boolean,
			required: !1
		},
		trailingIcon: {
			type: null,
			required: !1
		},
		loading: {
			type: Boolean,
			required: !1
		},
		loadingIcon: {
			type: null,
			required: !1
		},
		as: {
			type: null,
			required: !1
		},
		type: {
			type: null,
			required: !1
		},
		disabled: {
			type: Boolean,
			required: !1
		},
		active: {
			type: Boolean,
			required: !1
		},
		exact: {
			type: Boolean,
			required: !1
		},
		exactQuery: {
			type: [Boolean, String],
			required: !1
		},
		exactHash: {
			type: Boolean,
			required: !1
		},
		inactiveClass: {
			type: String,
			required: !1
		},
		locale: {
			type: [Boolean, String],
			required: !1
		},
		to: {
			type: null,
			required: !1
		},
		href: {
			type: null,
			required: !1
		},
		external: {
			type: Boolean,
			required: !1
		},
		target: {
			type: [
				String,
				Object,
				null
			],
			required: !1
		},
		rel: {
			type: [
				String,
				Object,
				null
			],
			required: !1
		},
		noRel: {
			type: Boolean,
			required: !1
		},
		prefetchedClass: {
			type: String,
			required: !1
		},
		prefetch: {
			type: Boolean,
			required: !1
		},
		prefetchOn: {
			type: [String, Object],
			required: !1
		},
		noPrefetch: {
			type: Boolean,
			required: !1
		},
		trailingSlash: {
			type: String,
			required: !1
		},
		activeClass: {
			type: String,
			required: !1
		},
		exactActiveClass: {
			type: String,
			required: !1
		},
		ariaCurrentValue: {
			type: String,
			required: !1
		},
		viewTransition: {
			type: Boolean,
			required: !1
		},
		replace: {
			type: Boolean,
			required: !1
		}
	},
	setup(e) {
		let t = e, n = he(), r = yr("button", t), i = q(), { orientation: a, size: o } = xr(t), s = Jn(as(r)), f = c(() => nr(s.value, [
			"type",
			"disabled",
			"onClick"
		])), p = F(!1), m = C(ts, void 0);
		async function g(e) {
			p.value = !0;
			let t = Array.isArray(r.onClick) ? r.onClick : [r.onClick];
			try {
				await Promise.all(t.map((t) => t?.(e)));
			} finally {
				p.value = !1;
			}
		}
		let _ = c(() => r.loading || r.loadingAuto && (p.value || m?.value && r.type === "submit")), { isLeading: v, isTrailing: y, leadingIconName: b, trailingIconName: x } = Jo(c(() => ({
			icon: r.icon,
			leading: r.leading,
			leadingIcon: r.leadingIcon,
			trailing: r.trailing,
			trailingIcon: r.trailingIcon,
			loading: _.value,
			loadingIcon: r.loadingIcon
		}))), S = c(() => $({
			extend: rl,
			...yt({ variants: { active: {
				true: { base: ar(i.ui?.button?.variants?.active?.true?.base, r.activeClass) },
				false: { base: ar(i.ui?.button?.variants?.active?.false?.base, r.inactiveClass) }
			} } }, i.ui?.button || {})
		})({
			color: r.color,
			variant: r.variant,
			size: o.value ?? r.size,
			loading: _.value,
			block: r.block,
			square: r.square || !n.default && !r.label,
			leading: v.value,
			trailing: y.value,
			fieldGroup: a.value
		}));
		return (e, t) => (M(), l(nl, E({
			type: V(r).type,
			disabled: V(r).disabled || _.value
		}, f.value, { custom: "" }), {
			default: U(({ active: t, ...n }) => [h(el, E({ "data-slot": "base" }, n, {
				class: S.value.base({
					class: [V(r).ui?.base, V(r).class],
					active: t,
					...t && V(r).activeVariant ? { variant: V(r).activeVariant } : {},
					...t && V(r).activeColor ? { color: V(r).activeColor } : {}
				}),
				onClick: g
			}), {
				default: U(() => [
					L(e.$slots, "leading", { ui: S.value }, () => [V(v) && V(b) ? (M(), l(qc, {
						key: 0,
						name: V(b),
						"data-slot": "leadingIcon",
						class: O(S.value.leadingIcon({
							class: V(r).ui?.leadingIcon,
							active: t
						}))
					}, null, 8, ["name", "class"])) : V(r).avatar ? (M(), l($c, E({
						key: 1,
						size: V(r).ui?.leadingAvatarSize || S.value.leadingAvatarSize()
					}, V(r).avatar, {
						"data-slot": "leadingAvatar",
						class: S.value.leadingAvatar({
							class: V(r).ui?.leadingAvatar,
							active: t
						})
					}), null, 16, ["size", "class"])) : u("", !0)]),
					L(e.$slots, "default", { ui: S.value }, () => [V(r).label !== void 0 && V(r).label !== null ? (M(), d("span", {
						key: 0,
						"data-slot": "label",
						class: O(S.value.label({
							class: V(r).ui?.label,
							active: t
						}))
					}, z(V(r).label), 3)) : u("", !0)]),
					L(e.$slots, "trailing", { ui: S.value }, () => [V(y) && V(x) ? (M(), l(qc, {
						key: 0,
						name: V(x),
						"data-slot": "trailingIcon",
						class: O(S.value.trailingIcon({
							class: V(r).ui?.trailingIcon,
							active: t
						}))
					}, null, 8, ["name", "class"])) : u("", !0)])
				]),
				_: 2
			}, 1040, ["class"])]),
			_: 3
		}, 16, ["type", "disabled"]));
	}
}, al = {
	slots: {
		overlay: "fixed inset-0 bg-elevated/75",
		content: "fixed bg-default divide-y divide-default sm:ring ring-default sm:shadow-lg flex flex-col focus:outline-none",
		header: "flex items-center gap-1.5 p-4 sm:px-6 min-h-(--ui-header-height)",
		wrapper: "",
		body: "flex-1 overflow-y-auto p-4 sm:p-6",
		footer: "flex items-center gap-1.5 p-4 sm:px-6",
		title: "text-highlighted font-semibold",
		description: "mt-1 text-muted text-sm",
		close: "absolute top-4 end-4"
	},
	variants: {
		side: {
			top: { content: "" },
			right: { content: "max-w-md" },
			bottom: { content: "" },
			left: { content: "max-w-md" }
		},
		inset: { true: { content: "rounded-lg" } },
		transition: { true: { overlay: "data-[state=open]:animate-[fade-in_200ms_var(--ease-out)] data-[state=closed]:animate-[fade-out_200ms_var(--ease-out)]" } }
	},
	compoundVariants: [
		{
			side: "top",
			inset: !0,
			class: { content: "max-h-[calc(100%-2rem)] inset-x-4 top-4" }
		},
		{
			side: "top",
			inset: !1,
			class: { content: "max-h-full inset-x-0 top-0" }
		},
		{
			side: "right",
			inset: !0,
			class: { content: "w-[calc(100%-2rem)] inset-y-4 right-4" }
		},
		{
			side: "right",
			inset: !1,
			class: { content: "w-full inset-y-0 right-0" }
		},
		{
			side: "bottom",
			inset: !0,
			class: { content: "max-h-[calc(100%-2rem)] inset-x-4 bottom-4" }
		},
		{
			side: "bottom",
			inset: !1,
			class: { content: "max-h-full inset-x-0 bottom-0" }
		},
		{
			side: "left",
			inset: !0,
			class: { content: "w-[calc(100%-2rem)] inset-y-4 left-4" }
		},
		{
			side: "left",
			inset: !1,
			class: { content: "w-full inset-y-0 left-0" }
		},
		{
			transition: !0,
			side: "top",
			class: { content: "data-[state=open]:animate-[slide-in-from-top_200ms_var(--ease-out)] data-[state=closed]:animate-[slide-out-to-top_200ms_var(--ease-out)]" }
		},
		{
			transition: !0,
			side: "right",
			class: { content: "data-[state=open]:animate-[slide-in-from-right_200ms_var(--ease-out)] data-[state=closed]:animate-[slide-out-to-right_200ms_var(--ease-out)]" }
		},
		{
			transition: !0,
			side: "bottom",
			class: { content: "data-[state=open]:animate-[slide-in-from-bottom_200ms_var(--ease-out)] data-[state=closed]:animate-[slide-out-to-bottom_200ms_var(--ease-out)]" }
		},
		{
			transition: !0,
			side: "left",
			class: { content: "data-[state=open]:animate-[slide-in-from-left_200ms_var(--ease-out)] data-[state=closed]:animate-[slide-out-to-left_200ms_var(--ease-out)]" }
		}
	]
}, ol = {
	__name: "Slideover",
	props: {
		title: {
			type: String,
			required: !1
		},
		description: {
			type: String,
			required: !1
		},
		content: {
			type: Object,
			required: !1
		},
		overlay: {
			type: Boolean,
			required: !1,
			default: !0
		},
		transition: {
			type: Boolean,
			required: !1,
			default: !0
		},
		side: {
			type: null,
			required: !1,
			default: "right"
		},
		inset: {
			type: Boolean,
			required: !1
		},
		portal: {
			type: [Boolean, String],
			required: !1,
			skipCheck: !0,
			default: !0
		},
		close: {
			type: [Boolean, Object],
			required: !1,
			default: !0
		},
		closeIcon: {
			type: null,
			required: !1
		},
		dismissible: {
			type: Boolean,
			required: !1,
			default: !0
		},
		class: {
			type: null,
			required: !1
		},
		ui: {
			type: Object,
			required: !1
		},
		open: {
			type: Boolean,
			required: !1
		},
		defaultOpen: {
			type: Boolean,
			required: !1
		},
		modal: {
			type: Boolean,
			required: !1,
			default: !0
		},
		unmountOnHide: {
			type: Boolean,
			required: !1
		}
	},
	emits: [
		"leave",
		"after:leave",
		"enter",
		"after:enter",
		"close:prevent",
		"update:open"
	],
	setup(e, { emit: t }) {
		let n = e, r = t, i = he(), a = yr("slideover", n), { t: o } = dr(), s = q(), p = Jn(Je(a, "open", "defaultOpen", "modal", "unmountOnHide"), r), g = wr(le(() => a.portal)), _ = le(() => a.content), v = c(() => a.dismissible ? { pointerDownOutside: Tr } : ["interactOutside", "escapeKeyDown"].reduce((e, t) => (e[t] = (e) => {
			e.preventDefault(), r("close:prevent");
		}, e), {})), y = c(() => $({
			extend: al,
			...s.ui?.slideover || {}
		})({
			transition: a.transition,
			side: a.side,
			inset: a.inset
		}));
		return (e, t) => (M(), l(V(Zt), k(x(V(p))), {
			default: U(({ open: n, close: c }) => [i.default ? (M(), l(V(Ln), {
				key: 0,
				"as-child": "",
				class: O(V(a).class)
			}, {
				default: U(() => [L(e.$slots, "default", { open: n })]),
				_: 2
			}, 1032, ["class"])) : u("", !0), h(V(Fn), E(V(g), { "force-mount": V(g).disabled && V(a).unmountOnHide === !1 || void 0 }), {
				default: U(() => [h(V(Sr), null, {
					default: U(() => [V(a).overlay ? (M(), l(V(Nn), {
						key: 0,
						"data-slot": "overlay",
						class: O(y.value.overlay({ class: V(a).ui?.overlay }))
					}, null, 8, ["class"])) : u("", !0), h(V(An), E({
						"data-side": V(a).side,
						"data-slot": "content",
						class: y.value.content({ class: [!i.default && V(a).class, V(a).ui?.content] })
					}, _.value, {
						onEnter: t[0] ||= (e) => r("enter"),
						onAfterEnter: t[1] ||= (e) => r("after:enter"),
						onLeave: t[2] ||= (e) => r("leave"),
						onAfterLeave: t[3] ||= (e) => r("after:leave")
					}, ce(v.value)), {
						default: U(() => [!V(a).title && !i.title || !V(a).description && !i.description || i.content ? (M(), l(V(Rn), { key: 0 }, {
							default: U(() => [!V(a).title && !i.title ? (M(), l(V(In), { key: 0 })) : i.content ? (M(), l(V(In), { key: 1 }, {
								default: U(() => [L(e.$slots, "title", {}, () => [m(z(V(a).title), 1)])]),
								_: 3
							})) : u("", !0), !V(a).description && !i.description ? (M(), l(V(jn), { key: 2 })) : i.content ? (M(), l(V(jn), { key: 3 }, {
								default: U(() => [L(e.$slots, "description", {}, () => [m(z(V(a).description), 1)])]),
								_: 3
							})) : u("", !0)]),
							_: 3
						})) : u("", !0), L(e.$slots, "content", { close: c }, () => [
							i.header || V(a).title || i.title || V(a).description || i.description || V(a).close || i.close ? (M(), d("div", {
								key: 0,
								"data-slot": "header",
								class: O(y.value.header({ class: V(a).ui?.header }))
							}, [L(e.$slots, "header", { close: c }, () => [
								V(a).title || i.title || V(a).description || i.description ? (M(), d("div", {
									key: 0,
									"data-slot": "wrapper",
									class: O(y.value.wrapper({ class: V(a).ui?.wrapper }))
								}, [V(a).title || i.title ? (M(), l(V(In), {
									key: 0,
									"data-slot": "title",
									class: O(y.value.title({ class: V(a).ui?.title }))
								}, {
									default: U(() => [L(e.$slots, "title", {}, () => [m(z(V(a).title), 1)])]),
									_: 3
								}, 8, ["class"])) : u("", !0), V(a).description || i.description ? (M(), l(V(jn), {
									key: 1,
									"data-slot": "description",
									class: O(y.value.description({ class: V(a).ui?.description }))
								}, {
									default: U(() => [L(e.$slots, "description", {}, () => [m(z(V(a).description), 1)])]),
									_: 3
								}, 8, ["class"])) : u("", !0)], 2)) : u("", !0),
								L(e.$slots, "actions"),
								V(a).close || i.close ? (M(), l(V(Qt), {
									key: 1,
									"as-child": ""
								}, {
									default: U(() => [L(e.$slots, "close", { ui: y.value }, () => [V(a).close ? (M(), l(il, E({
										key: 0,
										icon: V(a).closeIcon || V(s).ui.icons.close,
										color: "neutral",
										variant: "ghost",
										"aria-label": V(o)("slideover.close")
									}, typeof V(a).close == "object" ? V(a).close : {}, {
										"data-slot": "close",
										class: y.value.close({ class: V(a).ui?.close })
									}), null, 16, [
										"icon",
										"aria-label",
										"class"
									])) : u("", !0)])]),
									_: 2
								}, 1024)) : u("", !0)
							])], 2)) : u("", !0),
							f("div", {
								"data-slot": "body",
								class: O(y.value.body({ class: V(a).ui?.body }))
							}, [L(e.$slots, "body", { close: c })], 2),
							i.footer ? (M(), d("div", {
								key: 1,
								"data-slot": "footer",
								class: O(y.value.footer({ class: V(a).ui?.footer }))
							}, [L(e.$slots, "footer", { close: c })], 2)) : u("", !0)
						])]),
						_: 2
					}, 1040, ["data-side", "class"])]),
					_: 2
				}, 1024)]),
				_: 2
			}, 1040, ["force-mount"])]),
			_: 3
		}, 16));
	}
}, sl = {
	"aria-label": "Top navigation bar",
	class: "flex items-center h-full gap-4 p-1"
}, cl = { class: "flex items-center h-full py-2 shrink-0 overflow-hidden" }, ll = { class: "flex items-center gap-3 ms-auto" }, ul = {
	"aria-label": "Main navigation",
	class: "flex flex-col gap-1"
}, dl = {
	key: 0,
	class: "mt-20 border-t border-default pt-4 pb-2 flex flex-col gap-1"
}, fl = /* @__PURE__ */ _({
	__name: "SiteNavigation",
	props: /*@__PURE__*/ T({
		position: { default: "fixed" },
		navHeight: { default: "h-16" },
		border: {
			type: Boolean,
			default: !0
		},
		shadow: {
			type: Boolean,
			default: !1
		},
		frosted: {
			type: Boolean,
			default: !1
		},
		contained: {
			type: Boolean,
			default: !0
		},
		containerClass: {},
		drawerWidth: { default: "w-100!" }
	}, {
		drawerOpen: {
			type: Boolean,
			default: !1
		},
		drawerOpenModifiers: {}
	}),
	emits: ["update:drawerOpen"],
	setup(e) {
		let t = e, n = me(e, "drawerOpen");
		function i() {
			n.value = !1;
		}
		let a = c(() => [
			t.position === "fixed" && "fixed top-0 left-0 right-0 z-header",
			t.position === "sticky" && "sticky top-0 z-header",
			t.position === "static" && "relative",
			t.navHeight,
			t.frosted ? "bg-default/80 backdrop-blur-md" : "bg-default",
			t.border && "border-b border-default",
			t.shadow && "shadow-md"
		]), o = c(() => ["h-full px-4", t.containerClass ?? (t.contained && "container mx-auto")]), s = c(() => t.position === "fixed");
		return (t, c) => {
			let l = il, p = ol;
			return M(), d(r, null, [
				f("header", { class: O(a.value) }, [f("div", { class: O(o.value) }, [f("nav", sl, [f("div", cl, [L(t.$slots, "logo")]), f("div", ll, [L(t.$slots, "action-items"), h(l, {
					icon: "i-lucide-menu",
					variant: "ghost",
					class: "rounded-full",
					square: "",
					"aria-label": "Open navigation menu",
					"aria-haspopup": "true",
					"data-test": "sitenav-toggle-btn",
					onClick: c[0] ||= (e) => n.value = !0
				})])])], 2)], 2),
				s.value ? (M(), d("div", {
					key: 0,
					class: O(e.navHeight),
					"aria-hidden": "true"
				}, null, 2)) : u("", !0),
				h(p, {
					open: n.value,
					"onUpdate:open": c[1] ||= (e) => n.value = e,
					side: "right",
					"aria-label": "Navigation menu panel",
					ui: {
						overlay: "z-drawer",
						content: `${e.drawerWidth} z-drawer`
					}
				}, {
					header: U(() => [L(t.$slots, "drawer-logo"), h(l, {
						icon: "i-lucide-x",
						variant: "ghost",
						color: "neutral",
						class: "ms-auto rounded-full",
						square: "",
						"aria-label": "Close navigation menu",
						onClick: i
					})]),
					body: U(() => [f("nav", ul, [L(t.$slots, "menu-items", { close: i })]), t.$slots["menu-footer"] ? (M(), d("div", dl, [L(t.$slots, "menu-footer", { close: i })])) : u("", !0)]),
					_: 3
				}, 8, ["open", "ui"])
			], 64);
		};
	}
}), pl = /*@__PURE__*/ _({
	__name: "ScrollToTop",
	setup(e) {
		let t = F(!1);
		function n() {
			t.value = window.scrollY > 0;
		}
		function r() {
			window.scrollTo({
				top: 0,
				behavior: "smooth"
			});
		}
		return A(() => {
			window.addEventListener("scroll", n), n();
		}), j(() => {
			window.removeEventListener("scroll", n);
		}), (e, n) => {
			let i = il;
			return t.value ? (M(), l(i, {
				key: 0,
				class: "scroll-to-top-btn rounded-full",
				icon: "i-lucide-arrow-up",
				square: "",
				"aria-label": "Scroll to top",
				onClick: r
			})) : u("", !0);
		};
	}
}), ml = (e, t) => {
	let n = e.__vccOpts || e;
	for (let [e, r] of t) n[e] = r;
	return n;
}, hl = /*#__PURE__*/ ml(pl, [["__scopeId", "data-v-dade3d6c"]]), gl = {}, _l = {
	x: "0px",
	y: "0px",
	viewBox: "0 0 500 450",
	style: { "enable-background": "new 0 0 500 450" }
};
function vl(e, t) {
	return M(), d("div", null, [(M(), d("svg", _l, [...t[0] ||= [p("<g id=\"BACKGROUND\"><rect style=\"fill:none;stroke-miterlimit:10;\" width=\"500\" height=\"450\"></rect><g><polygon style=\"fill:#cad2f9;\" points=\"388.296,114.275 382.231,114.275 382.231,108.21 377.927,108.21 377.927,114.275\n			371.863,114.275 371.863,118.579 377.927,118.579 377.927,124.645 382.231,124.645 382.231,118.579 388.296,118.579 		\"></polygon><polygon style=\"fill:#cad2f9;\" points=\"351.733,91.401 347.335,91.401 347.335,87.002 344.213,87.002 344.213,91.401\n			339.815,91.401 339.815,94.523 344.213,94.523 344.213,98.921 347.335,98.921 347.335,94.523 351.733,94.523 		\"></polygon><polygon style=\"fill:#cad2f9;\" points=\"161.694,162.728 157.295,162.728 157.295,158.329 154.174,158.329 154.174,162.728\n			149.776,162.728 149.776,165.849 154.174,165.849 154.174,170.248 157.295,170.248 157.295,165.849 161.694,165.849 		\"></polygon><polygon style=\"fill:#cad2f9;\" points=\"42.831,261.986 36.766,261.986 36.766,255.92 32.462,255.92 32.462,261.986\n			26.398,261.986 26.398,266.29 32.462,266.29 32.462,272.355 36.766,272.355 36.766,266.29 42.831,266.29 		\"></polygon><polygon style=\"fill:#cad2f9;\" points=\"456.824,156.768 452.426,156.768 452.426,152.37 449.304,152.37 449.304,156.768\n			444.906,156.768 444.906,159.89 449.304,159.89 449.304,164.288 452.426,164.288 452.426,159.89 456.824,159.89 		\"></polygon></g><g><circle style=\"fill:#eef1ff;\" cx=\"338.256\" cy=\"124.475\" r=\"3.793\"></circle><circle style=\"fill:#eef1ff;\" cx=\"402.233\" cy=\"87.002\" r=\"2.003\"></circle><path style=\"fill:#eef1ff;\" d=\"M232.298,186.72c0,1.106-0.897,2.003-2.003,2.003c-1.106,0-2.003-0.897-2.003-2.003\n			c0-1.106,0.897-2.003,2.003-2.003C231.401,184.717,232.298,185.614,232.298,186.72z\"></path><path style=\"fill:#eef1ff;\" d=\"M433.285,120.359c0,2.095-1.698,3.793-3.793,3.793c-2.095,0-3.793-1.698-3.793-3.793\n			c0-2.095,1.698-3.793,3.793-3.793C431.587,116.565,433.285,118.264,433.285,120.359z\"></path><path style=\"fill:#eef1ff;\" d=\"M201.698,153.125c0,1.106-0.897,2.003-2.003,2.003c-1.106,0-2.003-0.897-2.003-2.003\n			c0-1.106,0.897-2.003,2.003-2.003C200.801,151.122,201.698,152.018,201.698,153.125z\"></path><path style=\"fill:#eef1ff;\" d=\"M144.638,89.005c0,1.106-0.897,2.003-2.003,2.003s-2.003-0.897-2.003-2.003\n			c0-1.106,0.897-2.003,2.003-2.003S144.638,87.899,144.638,89.005z\"></path><path style=\"fill:#eef1ff;\" d=\"M58.693,206.878c0,2.095-1.698,3.793-3.793,3.793c-2.095,0-3.793-1.698-3.793-3.793\n			c0-2.095,1.698-3.793,3.793-3.793C56.994,203.085,58.693,204.783,58.693,206.878z\"></path><circle style=\"fill:#eef1ff;\" cx=\"158.065\" cy=\"239.968\" r=\"3.793\"></circle><circle style=\"fill:#eef1ff;\" cx=\"61.039\" cy=\"108.787\" r=\"3.793\"></circle><path style=\"fill:#eef1ff;\" d=\"M22.192,293.877c0,1.106-0.897,2.003-2.003,2.003c-1.106,0-2.003-0.897-2.003-2.003\n			c0-1.106,0.897-2.003,2.003-2.003C21.296,291.874,22.192,292.771,22.192,293.877z\"></path><path style=\"fill:#eef1ff;\" d=\"M462.428,363.332c0,1.106-0.897,2.003-2.003,2.003c-1.106,0-2.003-0.897-2.003-2.003\n			s0.897-2.003,2.003-2.003C461.532,361.329,462.428,362.225,462.428,363.332z\"></path></g></g><g id=\"OBJECTS\"><ellipse style=\"fill:#edf0fc;\" cx=\"242.196\" cy=\"405.066\" rx=\"224.587\" ry=\"29.935\"></ellipse><g><path style=\"fill:#e2e6ff;\" d=\"M439.884,234.492c12.715,3.679,30.948-4.96,25.898-14.796c-4.217-8.214-19.354,6.302-24.974,12.138\n			c1.25-3.624,2.406-7.28,3.462-10.965c10.87-7.468,15.855-26.804,5.127-29.237c-9.197-2.086-7.534,19.789-6.68,27.438\n			c-0.711,2.542-1.484,5.066-2.289,7.579c0.956-11.306-5.044-23.668-13.548-20.395c-9.735,3.747,7.885,24.446,10.978,27.966\n			c-0.121,0.335-0.232,0.673-0.354,1.007c-1.439,3.934-2.999,7.826-4.674,11.667c1.744-11.042-3.084-23.457-11.712-21.018\n			c-9.856,2.786,5.043,24.258,8.196,28.624c-1.421,2.905-2.908,5.778-4.483,8.603c-1.179,2.114-2.414,4.199-3.685,6.261\n			c3.91-11.285,0.211-26.243-9.266-24.368c-10.234,2.024,3.579,25.433,6.02,29.426c-2.97,4.418-6.185,8.668-9.658,12.701\n			c5.029-10.936,2.647-26.451-7.044-25.368c-10.11,1.13,0.858,24.435,3.354,29.475c-3.928,4.156-8.172,8.01-12.711,11.472\n			c7.073-9.686,7.864-25.227-1.801-26.145c-10.055-0.956-4.241,23.75-2.774,29.432c-3.652,2.462-7.476,4.673-11.467,6.58\n			c-1.414,0.676-2.845,1.314-4.294,1.91c-1.174,0.483-0.66,2.42,0.532,1.929c5.907-2.432,11.507-5.491,16.762-9.062\n			c9.62,9.232,30.204,9.759,30.068-1.41c-0.111-9.164-19.828-3.084-27.585-0.336c4.024-2.92,7.836-6.142,11.409-9.625\n			c1.258-1.226,2.477-2.49,3.677-3.771c11.322,6.994,31.468,3.289,29.057-7.588c-1.964-8.858-19.68,0.84-26.856,5.184\n			c4.111-4.636,7.867-9.587,11.306-14.744c11.898,5.786,31.317,0.398,28.029-10.151c-2.679-8.594-19.283,2.318-26.171,7.306\n			c0.839-1.32,1.661-2.65,2.46-3.993c2.542-4.27,4.882-8.656,7.053-13.126c12.316,5.01,31.527-1.936,27.375-12.258\n			c-3.517-8.743-20.534,5.047-26.35,10.111c2.068-4.395,3.979-8.865,5.732-13.393C438.653,237.874,439.275,236.186,439.884,234.492z\n			\"></path><path style=\"fill:#e2e6ff;\" d=\"M60.667,323.455c-0.688-13.218-14.822-27.617-22.461-19.624\n			c-6.38,6.675,12.293,16.223,19.647,19.622c-3.833,0.006-7.666,0.111-11.494,0.32c-10.616-7.825-30.518-6.202-29.304,4.731\n			c1.041,9.373,21.165,0.637,28.113-2.674c2.634-0.161,5.272-0.256,7.911-0.319c-10.996,2.8-20.711,12.517-14.833,19.479\n			c6.728,7.971,20.515-15.456,22.829-19.531c0.356,0.004,0.712-0.001,1.068,0.005c4.189,0.072,8.376,0.271,12.554,0.596\n			c-11.004,1.968-21.153,10.596-16.023,17.949c5.86,8.4,21.269-12.71,24.361-17.118c3.21,0.391,6.411,0.855,9.596,1.418\n			c2.384,0.421,4.758,0.905,7.122,1.431c-11.943,0.001-24.864,8.395-19.99,16.735c5.264,9.007,22.858-11.711,25.832-15.325\n			c5.147,1.359,10.215,3.005,15.163,4.966c-11.98-1.17-25.859,6.161-21.662,14.963c4.378,9.182,22.807-8.813,26.751-12.823\n			c5.213,2.35,10.245,5.098,15.002,8.253c-11.468-3.511-26.411,0.831-24.114,10.264c2.39,9.813,23.829-3.771,28.717-7.018\n			c3.523,2.645,6.863,5.534,9.973,8.68c1.101,1.114,2.173,2.258,3.211,3.432c0.841,0.951,2.502-0.169,1.648-1.134\n			c-4.233-4.785-8.956-9.074-14.052-12.87c5.572-12.113-0.671-31.735-11.18-27.948c-8.622,3.106,3.579,19.744,8.716,26.174\n			c-4.077-2.846-8.369-5.393-12.83-7.628c-1.57-0.787-3.163-1.525-4.767-2.239c2.901-12.988-7.198-30.81-16.685-24.969\n			c-7.727,4.757,7.239,18.32,13.693,23.677c-5.727-2.366-11.635-4.293-17.634-5.854c1.57-13.137-9.88-29.721-18.77-23.159\n			c-7.242,5.345,8.505,17.46,15.474,22.335c-1.522-0.36-3.048-0.701-4.578-1.017c-4.867-1.003-9.778-1.778-14.712-2.366\n			c0.7-13.277-12.154-29.154-20.547-21.851c-7.109,6.186,11.494,17.749,18.183,21.585c-4.83-0.515-9.679-0.856-14.531-1.03\n			C64.265,323.51,62.466,323.475,60.667,323.455z\"></path></g><g><path style=\"fill:#eb725f;\" d=\"M445.79,280.51c3.036-1.819,6.182-3.455,9.411-4.9c15.272,2.361,27.796-6.748,27.796-6.748\n			c-17.311-5.237-25.483,2.342-27.957,5.401c-1.024,0.465-2.04,0.938-3.035,1.422c-4.783,2.329-9.341,5.085-13.624,8.208\n			c9.238-10.12,10.037-23.336,10.037-23.336c-16.517,10.999-14.131,23.318-13.402,25.909c-3.712,2.984-7.181,6.265-10.369,9.808\n			c6.103-13.448,1.562-27.335,1.562-27.335c-11.183,16.121-4.707,26.646-2.982,28.951c-2.382,2.781-4.599,5.708-6.617,8.782\n			c-0.605,0.922-1.171,1.867-1.74,2.811c2.729-14.285-4.64-26.566-4.64-26.566c-7.157,17.791,0.944,26.618,3.362,28.749\n			c-2.518,4.453-4.649,9.11-6.427,13.905c1.826-13.501-4.932-24.767-4.932-24.767c-7.301,18.15,1.281,26.976,3.506,28.875\n			c-1.16,3.579-2.156,7.213-2.952,10.89c-0.177,0.816,1.077,1.165,1.254,0.346c1.258-5.816,2.992-11.503,5.188-16.98\n			c15.692-0.616,26.289-12.341,26.289-12.341c-14.601-1.269-21.598,4.465-24.681,8.549c1.763-3.917,3.785-7.703,6.06-11.333\n			c15.365,3.011,28.356-5.884,28.356-5.884c-14.417-4.811-22.635-0.393-26.412,2.913c2.386-3.493,5.026-6.817,7.921-9.944\n			c14.835,4.798,28.745-2.397,28.745-2.397c-12.438-5.935-20.748-3.712-25.288-1.145c0.896-0.859,1.814-1.701,2.754-2.524\n			c2.641-2.312,5.432-4.462,8.34-6.448c13.728,7.554,28.821,3.025,28.821,3.025C459.226,278.436,450.77,278.903,445.79,280.51z\"></path><path style=\"fill:#eb725f;\" d=\"M56.121,373.32c-3.54,0.012-7.08-0.189-10.594-0.598c-11.921-9.834-27.341-8.404-27.341-8.404\n			c12.204,13.348,23.101,11.009,26.791,9.645c1.118,0.124,2.232,0.236,3.335,0.328c5.302,0.442,10.628,0.402,15.905-0.093\n			c-13.113,3.977-20.553,14.929-20.553,14.929c19.818-1.014,24.063-12.821,24.76-15.421c4.716-0.668,9.374-1.715,13.925-3.131\n			c-12.118,8.441-15.312,22.698-15.312,22.698c17.851-8.142,17.663-20.499,17.358-23.361c3.468-1.174,6.871-2.556,10.176-4.167\n			c0.992-0.483,1.961-1.007,2.932-1.526c-9.645,10.884-9.588,25.206-9.588,25.206c15.243-11.635,12.792-23.362,11.802-26.43\n			c4.441-2.541,8.652-5.455,12.63-8.668c-8.469,10.672-8.417,23.809-8.417,23.809c15.551-11.87,12.685-23.842,11.743-26.611\n			c2.826-2.483,5.539-5.098,8.102-7.852c0.569-0.611-0.331-1.552-0.901-0.938c-4.054,4.356-8.45,8.359-13.136,11.944\n			c-13.804-7.49-28.903-2.827-28.903-2.827c11.902,8.552,20.846,7.199,25.584,5.264c-3.517,2.466-7.19,4.687-11,6.645\n			c-11.669-10.44-27.38-9.433-27.38-9.433c9.933,11.503,19.255,11.905,24.192,10.994c-3.836,1.783-7.804,3.291-11.89,4.499\n			c-10.3-11.705-25.933-12.63-25.933-12.63c7.658,11.458,15.937,13.794,21.152,13.908c-1.21,0.281-2.429,0.536-3.657,0.762\n			c-3.452,0.638-6.95,1.06-10.464,1.281c-7.94-13.508-23.228-17.328-23.228-17.328C43.512,368.237,51.019,372.157,56.121,373.32z\"></path></g><path style=\"fill:#92a6f4;\" d=\"M413.055,404.825c0,2.422-1.981,4.403-4.403,4.403H253.535c-2.422,0-4.403-1.982-4.403-4.403\n		V175.303c0-2.422,1.981-4.403,4.403-4.403h155.117c2.422,0,4.403,1.981,4.403,4.403V404.825z\"></path><rect x=\"256.838\" y=\"183.734\" style=\"fill:#d0dbf7;\" width=\"148.512\" height=\"203.853\"></rect><g><g><g><g><rect x=\"273.891\" y=\"198.964\" style=\"fill:#f5f9ff;\" width=\"114.404\" height=\"172.382\"></rect><rect x=\"273.891\" y=\"198.964\" style=\"fill:#e2e6ff;\" width=\"114.404\" height=\"10.526\"></rect></g><g><path style=\"fill:#eb725f;\" d=\"M283.076,204.47c0,1.33-1.078,2.409-2.409,2.409c-1.33,0-2.409-1.078-2.409-2.409\n						c0-1.33,1.078-2.409,2.409-2.409C281.997,202.061,283.076,203.139,283.076,204.47z\"></path><path style=\"fill:#f9ab43;\" d=\"M291.186,204.47c0,1.33-1.078,2.409-2.409,2.409c-1.33,0-2.409-1.078-2.409-2.409\n						c0-1.33,1.078-2.409,2.409-2.409C290.108,202.061,291.186,203.139,291.186,204.47z\"></path><path style=\"fill:#6e7fdd;\" d=\"M299.297,204.47c0,1.33-1.078,2.409-2.409,2.409c-1.33,0-2.409-1.078-2.409-2.409\n						c0-1.33,1.078-2.409,2.409-2.409C298.219,202.061,299.297,203.139,299.297,204.47z\"></path></g></g></g><polygon style=\"fill:#e2e6ff;\" points=\"363.947,266.887 354.272,257.212 331.094,280.389 307.915,257.212 298.241,266.887\n			321.419,290.064 298.241,313.241 307.915,322.915 331.094,299.738 354.272,322.915 363.947,313.241 340.768,290.064 		\"></polygon></g><g><path style=\"fill:#6e7fdd;\" d=\"M311.811,402.044c0,2.283-1.868,4.15-4.15,4.15H90.156c-2.283,0-4.15-1.867-4.15-4.15V261.362\n			c0-2.283,1.868-4.15,4.15-4.15h217.505c2.283,0,4.15,1.868,4.15,4.15V402.044z\"></path><rect x=\"92.609\" y=\"264.138\" style=\"fill:#d0dbf7;\" width=\"212.6\" height=\"135.131\"></rect><path style=\"fill:#6e7fdd;\" d=\"M71.336,392.552v11.987c0,2.579,2.11,4.689,4.689,4.689h245.767c2.579,0,4.689-2.11,4.689-4.689\n			v-11.987H71.336z\"></path><path style=\"fill:#92a6f4;\" d=\"M161.13,392.552v3.55c0,0.764,0.625,1.389,1.389,1.389h72.781c0.764,0,1.389-0.625,1.389-1.389\n			v-3.55H161.13z\"></path></g><g><g><path style=\"fill:#f9ab43;\" d=\"M435.318,383.056c-0.684,3.081-3.826,5.601-6.982,5.601h-66.928c-3.156,0-6.298-2.521-6.982-5.601\n				L339.5,315.855c-0.684-3.081,1.338-5.601,4.494-5.601h101.757c3.156,0,5.178,2.521,4.494,5.601L435.318,383.056z\"></path><path style=\"fill:#ffcf74;\" d=\"M409.788,318.263c-3.156,0-6.606,2.431-7.668,5.403l-3.182,8.907\n				c-1.062,2.972-4.512,5.403-7.668,5.403h-48.575c-3.156,0-5.068,2.494-4.25,5.542l16.151,60.168\n				c0.818,3.048,4.069,5.542,7.225,5.542h66.311c3.156,0,6.407-2.494,7.225-5.542l16.151-60.168\n				c0.818-3.048,2.356-7.973,3.418-10.945l3.182-8.907c1.062-2.972-0.652-5.403-3.808-5.403H409.788z\"></path><path style=\"opacity:0.1;fill:#0046a0;\" d=\"M454.3,318.263h-17.898c2.154,6.196,3.339,12.82,3.339,19.714\n				c0,34.296-28.881,62.098-64.508,62.098c-7.979,0-15.615-1.404-22.668-3.953l2.031,7.565c0.818,3.048,4.069,5.542,7.225,5.542\n				h66.311c3.156,0,6.407-2.494,7.225-5.542l16.151-60.168c0.818-3.048,2.356-7.973,3.418-10.945l3.182-8.907\n				C459.169,320.694,457.456,318.263,454.3,318.263z\"></path></g><g><g><path style=\"fill:#eb725f;\" d=\"M388.296,363.332c0,3.33-1.935,6.03-4.321,6.03s-4.321-2.7-4.321-6.03\n					c0-3.33,1.935-6.03,4.321-6.03S388.296,360.001,388.296,363.332z\"></path><path style=\"fill:#eb725f;\" d=\"M417.026,363.332c0,3.33-1.935,6.03-4.322,6.03c-2.387,0-4.321-2.7-4.321-6.03\n					c0-3.33,1.935-6.03,4.321-6.03C415.091,357.302,417.026,360.001,417.026,363.332z\"></path></g><g><path style=\"fill:#eb725f;\" d=\"M388.435,380.193c1.482-1.623,3.543-2.898,5.594-3.638c5.19-1.871,10.207,0.084,14.161,3.638\n					c1.056,0.949,2.624-0.61,1.563-1.563c-4.382-3.94-10.068-6.254-15.897-4.349c-2.557,0.835-5.153,2.343-6.984,4.349\n					C385.914,379.679,387.474,381.246,388.435,380.193L388.435,380.193z\"></path></g></g></g><g><g><g><g><rect x=\"106.777\" y=\"309.547\" style=\"fill:#f8faff;\" width=\"97.916\" height=\"72.23\"></rect><rect x=\"106.777\" y=\"309.547\" style=\"fill:#e2e6ff;\" width=\"97.916\" height=\"9.009\"></rect></g><g><path style=\"fill:#eb725f;\" d=\"M114.637,314.259c0,1.139-0.923,2.062-2.062,2.062c-1.138,0-2.061-0.923-2.061-2.062\n						s0.923-2.062,2.061-2.062C113.714,312.198,114.637,313.121,114.637,314.259z\"></path><path style=\"fill:#f9ab43;\" d=\"M121.579,314.259c0,1.139-0.923,2.062-2.062,2.062c-1.139,0-2.062-0.923-2.062-2.062\n						s0.923-2.062,2.062-2.062C120.656,312.198,121.579,313.121,121.579,314.259z\"></path><path style=\"fill:#6e7fdd;\" d=\"M128.521,314.259c0,1.139-0.923,2.062-2.062,2.062c-1.139,0-2.062-0.923-2.062-2.062\n						s0.923-2.062,2.062-2.062C127.598,312.198,128.521,313.121,128.521,314.259z\"></path></g></g><g><path style=\"fill:#d0dbf7;\" d=\"M150.031,354.436c0-3.019,1.199-5.371,3.595-7.059l1.154-0.798\n					c1.095-0.71,1.857-1.294,2.286-1.753c0.428-0.458,0.644-1.028,0.644-1.709c0-1.716-1.436-2.575-4.307-2.575\n					c-1.331,0-2.708,0.178-4.128,0.533c-1.42,0.355-2.767,0.859-4.039,1.509v-6.836c2.722-1.243,5.771-1.864,9.144-1.864\n					c3.64,0,6.525,0.762,8.655,2.286c2.131,1.524,3.196,3.632,3.196,6.325c0,1.509-0.34,2.73-1.02,3.662\n					c-0.681,0.932-1.835,1.975-3.462,3.129c-1.095,0.799-1.895,1.413-2.397,1.843c-0.503,0.429-0.88,0.91-1.131,1.442\n					c-0.252,0.533-0.377,1.184-0.377,1.953v0.844h-7.812V354.436z M150.941,365.067c-0.785-0.784-1.177-1.753-1.177-2.908\n					c0-1.183,0.392-2.16,1.177-2.929c0.783-0.769,1.768-1.154,2.951-1.154c1.154,0,2.138,0.392,2.952,1.176\n					c0.813,0.785,1.221,1.754,1.221,2.908c0,1.154-0.408,2.124-1.221,2.908c-0.814,0.784-1.798,1.176-2.952,1.176\n					C152.709,366.243,151.724,365.851,150.941,365.067z\"></path></g></g><g><g><g><rect x=\"191.835\" y=\"279.612\" style=\"fill:#f5f9ff;\" width=\"97.916\" height=\"72.23\"></rect><rect x=\"191.835\" y=\"279.612\" style=\"fill:#e2e6ff;\" width=\"97.916\" height=\"9.009\"></rect></g><g><circle style=\"fill:#eb725f;\" cx=\"197.633\" cy=\"284.325\" r=\"2.062\"></circle><path style=\"fill:#f9ab43;\" d=\"M206.637,284.325c0,1.139-0.923,2.062-2.062,2.062c-1.139,0-2.062-0.923-2.062-2.062\n						c0-1.139,0.923-2.062,2.062-2.062C205.714,282.263,206.637,283.186,206.637,284.325z\"></path><circle style=\"fill:#6e7fdd;\" cx=\"211.517\" cy=\"284.325\" r=\"2.062\"></circle></g></g><g><path style=\"fill:#d0dbf7;\" d=\"M235.089,324.501c0-3.019,1.199-5.371,3.595-7.059l1.154-0.798\n					c1.095-0.71,1.857-1.294,2.286-1.753c0.428-0.458,0.644-1.028,0.644-1.709c0-1.716-1.436-2.575-4.307-2.575\n					c-1.331,0-2.707,0.178-4.128,0.533c-1.42,0.355-2.767,0.859-4.039,1.509v-6.836c2.722-1.243,5.771-1.864,9.144-1.864\n					c3.64,0,6.525,0.762,8.655,2.286c2.131,1.524,3.196,3.632,3.196,6.325c0,1.509-0.34,2.73-1.02,3.662\n					c-0.681,0.932-1.835,1.975-3.462,3.129c-1.095,0.799-1.895,1.413-2.397,1.843c-0.503,0.429-0.88,0.909-1.131,1.442\n					c-0.252,0.533-0.377,1.184-0.377,1.953v0.844h-7.812V324.501z M235.999,335.132c-0.785-0.784-1.177-1.753-1.177-2.908\n					c0-1.183,0.392-2.16,1.177-2.929c0.783-0.77,1.768-1.154,2.951-1.154c1.154,0,2.138,0.392,2.952,1.176\n					c0.813,0.785,1.221,1.754,1.221,2.908c0,1.154-0.408,2.124-1.221,2.908c-0.814,0.784-1.798,1.176-2.952,1.176\n					C237.767,336.308,236.782,335.916,235.999,335.132z\"></path></g></g></g><g><g><path style=\"fill:#e2e6ff;\" d=\"M217.414,190.637l-15.505,4.212l-4.246-15.63l-31.646,8.597l14.776,54.39l47.213-12.827\n				l-10.513-38.696L217.414,190.637z M201.527,221.919c-0.435,0.727-1.07,1.204-1.905,1.431c-0.856,0.233-1.646,0.143-2.367-0.271\n				c-0.722-0.413-1.196-1.037-1.423-1.872c-0.233-0.856-0.141-1.64,0.276-2.351c0.415-0.711,1.052-1.183,1.909-1.415\n				c0.835-0.227,1.624-0.137,2.367,0.271c0.743,0.408,1.228,1.029,1.455,1.864C202.066,220.41,201.961,221.192,201.527,221.919z\n				 M203.865,206.593c-0.31,0.808-0.94,1.79-1.89,2.945c-0.635,0.794-1.093,1.395-1.373,1.804c-0.279,0.41-0.458,0.831-0.535,1.266\n				c-0.077,0.435-0.04,0.931,0.111,1.487l0.166,0.611l-5.652,1.536l-0.183-0.674c-0.593-2.184-0.188-4.122,1.214-5.814l0.678-0.804\n				c0.653-0.729,1.09-1.301,1.31-1.718c0.22-0.416,0.264-0.87,0.13-1.363c-0.337-1.242-1.545-1.581-3.622-1.016\n				c-0.964,0.262-1.924,0.661-2.882,1.197c-0.957,0.536-1.833,1.165-2.626,1.885l-1.344-4.946c1.725-1.434,3.809-2.483,6.25-3.146\n				c2.633-0.715,4.871-0.731,6.712-0.048c1.841,0.684,3.026,2,3.555,3.948C204.179,204.835,204.173,205.784,203.865,206.593z\"></path><polygon style=\"fill:#e2e6ff;\" points=\"200.675,179.89 203.821,191.469 215.306,188.349 			\"></polygon></g><g><path style=\"fill:#e2e6ff;\" d=\"M305.325,128.659l-20.874-6.685l6.739-21.043l-42.604-13.643l-23.449,73.225l63.563,20.355\n				l16.683-52.096L305.325,128.659z M263.925,152.676c-1.038,0.51-2.118,0.585-3.242,0.225c-1.152-0.369-1.99-1.058-2.508-2.066\n				c-0.52-1.008-0.599-2.075-0.239-3.199c0.369-1.152,1.055-1.982,2.06-2.487c1.003-0.505,2.082-0.573,3.235-0.204\n				c1.124,0.36,1.96,1.049,2.509,2.066c0.547,1.018,0.642,2.089,0.282,3.213C265.661,151.349,264.962,152.166,263.925,152.676z\n				 M277.974,136.867c-0.955,0.695-2.404,1.351-4.349,1.968c-1.316,0.437-2.286,0.786-2.91,1.047\n				c-0.624,0.261-1.141,0.611-1.552,1.052c-0.412,0.441-0.737,1.036-0.977,1.784l-0.263,0.822l-7.61-2.437l0.291-0.908\n				c0.942-2.941,2.843-4.858,5.704-5.754l1.373-0.418c1.288-0.35,2.213-0.681,2.774-0.994c0.56-0.313,0.948-0.801,1.16-1.464\n				c0.535-1.672-0.596-2.956-3.392-3.851c-1.297-0.415-2.693-0.671-4.188-0.769c-1.493-0.097-2.963-0.027-4.405,0.21l2.132-6.659\n				c3.039-0.361,6.202-0.015,9.488,1.037c3.545,1.135,6.119,2.778,7.718,4.927c1.6,2.15,1.98,4.535,1.14,7.158\n				C279.64,135.089,278.928,136.171,277.974,136.867z\"></path><polygon style=\"fill:#e2e6ff;\" points=\"294.139,103.935 289.148,119.523 304.61,124.475 			\"></polygon></g></g><g><g><path style=\"fill:#eb725f;\" d=\"M429.492,207.762c0,4.578-3.746,8.324-8.324,8.324h-89.209c-4.578,0-8.324-3.746-8.324-8.324\n				V151.88c0-4.578,3.746-8.324,8.324-8.324h89.209c4.578,0,8.324,3.746,8.324,8.324V207.762z\"></path><g><g><path style=\"fill:#ffffff;\" d=\"M400.808,204.454h-48.489c-2.734,0-4.894-1.093-5.925-2.997c-1.031-1.905-0.766-4.31,0.728-6.6\n						v-0.001l23.618-36.184c1.446-2.215,3.569-3.486,5.823-3.486c2.255,0,4.377,1.271,5.823,3.485l23.618,36.185\n						c1.494,2.289,1.759,4.695,0.728,6.6C405.701,203.362,403.542,204.454,400.808,204.454z M351.416,197.66\n						c-0.53,0.812-0.537,1.282-0.509,1.364c0.044,0.051,0.443,0.303,1.412,0.303h48.489c0.969,0,1.367-0.252,1.42-0.319\n						c0.019-0.066,0.012-0.537-0.518-1.348l-23.618-36.185c-0.474-0.727-1.046-1.161-1.529-1.161c-0.483,0-1.055,0.434-1.53,1.161\n						L351.416,197.66z\"></path></g><g><path style=\"fill:#ffffff;\" d=\"M375.078,194.643c-0.391-0.391-0.587-0.875-0.587-1.451c0-0.576,0.196-1.059,0.587-1.451\n						c0.392-0.392,0.875-0.588,1.451-0.588c0.576,0,1.065,0.196,1.469,0.588c0.402,0.392,0.604,0.875,0.604,1.451\n						c0,0.576-0.202,1.059-0.604,1.451c-0.404,0.391-0.893,0.587-1.469,0.587C375.953,195.23,375.47,195.034,375.078,194.643z\n						 M373.869,170.566h5.388l-1.001,17.237h-3.386L373.869,170.566z\"></path></g></g></g><g><path style=\"fill:#eb725f;\" d=\"M142.635,278.816c0,3.794-3.104,6.899-6.899,6.899H61.799c-3.794,0-6.899-3.105-6.899-6.899V232.5\n				c0-3.794,3.105-6.899,6.899-6.899h73.938c3.795,0,6.899,3.105,6.899,6.899V278.816z\"></path><path style=\"fill:#ffffff;\" d=\"M98.767,231.647c-13.239,0-24.01,10.771-24.01,24.01c0,13.239,10.771,24.011,24.01,24.011\n				s24.01-10.771,24.01-24.011C122.778,242.418,112.007,231.647,98.767,231.647z M98.767,236.175c4.557,0,8.751,1.577,12.073,4.208\n				L83.493,267.73c-2.631-3.322-4.208-7.516-4.208-12.073C79.285,244.915,88.024,236.175,98.767,236.175z M98.767,275.141\n				c-4.557,0-8.751-1.577-12.073-4.209l27.347-27.347c2.632,3.322,4.209,7.516,4.209,12.073\n				C118.25,266.4,109.51,275.141,98.767,275.141z\"></path></g></g><g><g><g><g><rect x=\"260.103\" y=\"388.614\" transform=\"matrix(0.9023 -0.4312 0.4312 0.9023 -140.699 163.7569)\" style=\"fill:#eb725f;\" width=\"61.579\" height=\"7.283\"></rect></g><g><rect x=\"296.912\" y=\"380.271\" transform=\"matrix(0.9023 -0.4312 0.4312 0.9023 -135.3933 170.4643)\" style=\"fill:#ffcf74;\" width=\"22.88\" height=\"7.283\"></rect></g></g><g><path style=\"fill:#eb725f;\" d=\"M370.83,354.057c-7.388-15.461-25.911-22.005-41.372-14.617\n					c-15.461,7.388-22.005,25.911-14.617,41.372c7.388,15.461,25.911,22.005,41.372,14.617\n					C371.674,388.04,378.218,369.518,370.83,354.057z M320.943,377.896c-5.778-12.091-0.66-26.576,11.431-32.353\n					c12.091-5.778,26.576-0.66,32.353,11.431c5.778,12.091,0.66,26.576-11.431,32.353\n					C341.206,395.104,326.721,389.986,320.943,377.896z\"></path><ellipse transform=\"matrix(0.9754 -0.2206 0.2206 0.9754 -72.6168 84.6914)\" style=\"opacity:0.3;fill:#f5f9ff;\" cx=\"342.835\" cy=\"367.434\" rx=\"24.263\" ry=\"24.263\"></ellipse></g></g><path style=\"fill:#ffffff;\" d=\"M342.413,361.734c-3.52,1.682-7.738,0.192-9.42-3.328c-1.682-3.52-0.192-7.738,3.328-9.42\n			c3.52-1.682,7.738-0.192,9.42,3.328C347.424,355.834,345.934,360.052,342.413,361.734z\"></path></g><g><g><path style=\"fill:#d0dbf7;\" d=\"M181.061,125.511c0.982-4.219,3.424-7.118,7.322-8.697l1.873-0.74\n				c1.762-0.636,3.017-1.205,3.766-1.706c0.748-0.501,1.235-1.228,1.456-2.179c0.559-2.399-1.17-4.066-5.182-5\n				c-1.861-0.433-3.842-0.632-5.944-0.598c-2.1,0.034-4.146,0.3-6.137,0.795l2.224-9.555c4.209-0.851,8.673-0.728,13.388,0.37\n				c5.088,1.184,8.874,3.189,11.355,6.012c2.483,2.824,3.285,6.118,2.409,9.881c-0.491,2.11-1.364,3.705-2.618,4.787\n				c-1.256,1.081-3.208,2.163-5.858,3.247c-1.791,0.761-3.108,1.359-3.951,1.796c-0.843,0.436-1.527,0.985-2.051,1.648\n				c-0.526,0.663-0.913,1.532-1.163,2.606l-0.275,1.18l-10.92-2.542L181.061,125.511z M178.874,140.667\n				c-0.842-1.351-1.074-2.834-0.699-4.447c0.385-1.654,1.251-2.892,2.598-3.712c1.345-0.821,2.847-1.038,4.501-0.653\n				c1.613,0.375,2.861,1.244,3.744,2.604c0.881,1.362,1.135,2.848,0.76,4.462s-1.261,2.836-2.652,3.667\n				c-1.393,0.831-2.896,1.059-4.509,0.683C180.963,142.886,179.714,142.018,178.874,140.667z\"></path></g><g><path style=\"fill:#d0dbf7;\" d=\"M107.406,208.685c-1.131-2.312-1.095-4.563,0.108-6.754l0.585-1.044\n				c0.573-0.954,0.938-1.687,1.094-2.199c0.156-0.512,0.108-1.029-0.147-1.55c-0.643-1.314-2.065-1.434-4.263-0.358\n				c-1.02,0.499-2.007,1.151-2.962,1.955c-0.954,0.804-1.797,1.694-2.528,2.669l-2.562-5.236c1.619-1.972,3.721-3.59,6.305-4.854\n				c2.788-1.364,5.284-1.861,7.486-1.492c2.203,0.369,3.809,1.585,4.818,3.647c0.566,1.156,0.762,2.218,0.591,3.187\n				c-0.173,0.969-0.666,2.201-1.479,3.694c-0.539,1.023-0.921,1.792-1.146,2.31c-0.224,0.517-0.334,1.027-0.326,1.529\n				c0.007,0.503,0.155,1.048,0.443,1.637l0.316,0.647l-5.984,2.928L107.406,208.685z M112.087,216.486\n				c-0.895-0.306-1.559-0.902-1.991-1.786c-0.443-0.906-0.509-1.801-0.196-2.685c0.311-0.883,0.922-1.547,1.828-1.99\n				c0.884-0.432,1.785-0.501,2.702-0.206c0.917,0.297,1.592,0.886,2.024,1.77c0.433,0.884,0.484,1.779,0.155,2.684\n				c-0.33,0.906-0.937,1.574-1.821,2.007C113.882,216.724,112.98,216.793,112.087,216.486z\"></path></g></g><g><path style=\"fill:#ffcf74;\" d=\"M97.448,164.964v-3.922h-4.971c-0.328-2.231-1.203-4.279-2.489-6.01l3.515-3.515l-2.773-2.773\n			l-3.515,3.515c-1.731-1.286-3.779-2.161-6.01-2.489v-4.971h-3.922v4.971c-2.231,0.328-4.279,1.202-6.01,2.489l-3.515-3.515\n			l-2.773,2.773l3.515,3.515c-1.286,1.731-2.161,3.779-2.489,6.01h-4.971v3.922h4.971c0.328,2.231,1.203,4.279,2.489,6.01\n			l-3.515,3.515l2.773,2.773l3.515-3.515c1.731,1.286,3.779,2.161,6.01,2.489v4.971h3.922v-4.971\n			c2.231-0.328,4.279-1.203,6.01-2.489l3.515,3.515l2.773-2.773l-3.515-3.515c1.286-1.731,2.161-3.779,2.489-6.01H97.448z\n			 M79.243,171.296c-4.58,0-8.293-3.713-8.293-8.293c0-4.58,3.713-8.293,8.293-8.293s8.293,3.713,8.293,8.293\n			C87.536,167.583,83.824,171.296,79.243,171.296z\"></path><path style=\"fill:#f9ab43;\" d=\"M139.709,140.801v-5.488h-6.956c-0.459-3.122-1.683-5.988-3.483-8.41l4.918-4.918l-3.881-3.881\n			l-4.918,4.918c-2.422-1.8-5.288-3.023-8.41-3.483v-6.956h-5.488v6.956c-3.122,0.459-5.988,1.683-8.41,3.483l-4.918-4.918\n			l-3.881,3.881l4.918,4.918c-1.8,2.422-3.024,5.288-3.483,8.41h-6.956v5.488h6.956c0.459,3.122,1.683,5.988,3.483,8.41\n			l-4.918,4.918l3.881,3.881l4.918-4.918c2.422,1.8,5.288,3.023,8.41,3.483v6.956h5.488v-6.956c3.122-0.459,5.988-1.683,8.41-3.483\n			l4.918,4.918l3.881-3.881l-4.918-4.918c1.8-2.422,3.023-5.288,3.483-8.41H139.709z M114.235,149.662\n			c-6.409,0-11.605-5.196-11.605-11.605c0-6.409,5.196-11.605,11.605-11.605c6.409,0,11.604,5.195,11.604,11.605\n			C125.84,144.466,120.644,149.662,114.235,149.662z\"></path></g></g>", 2)]]))]);
}
var yl = /*#__PURE__*/ ml(gl, [["render", vl]]), bl = { class: "absolute inset-0 overflow-hidden pointer-events-none" }, xl = {
	key: 1,
	class: "absolute inset-0 overflow-hidden pointer-events-none"
}, Sl = {
	key: 5,
	class: "absolute inset-0 overflow-hidden pointer-events-none"
}, Cl = {
	key: 6,
	class: "absolute inset-0 overflow-hidden pointer-events-none"
}, wl = {
	key: 10,
	class: "absolute inset-0 overflow-hidden pointer-events-none"
}, Tl = /*#__PURE__*/ ml(/* @__PURE__ */ _({
	__name: "SectionPattern",
	props: { pattern: {} },
	setup(e) {
		return (t, n) => (M(), d("div", bl, [e.pattern === "grid-orbs" ? (M(), d(r, { key: 0 }, [
			n[0] ||= f("div", { class: "absolute inset-0 pattern-grid pointer-events-none opacity-60" }, null, -1),
			n[1] ||= f("div", {
				class: "absolute -top-32 -left-32 w-[600px] h-[600px] rounded-full pointer-events-none",
				style: {
					background: "radial-gradient(circle, var(--ui-color-primary-600) 0%, transparent 65%)",
					opacity: "0.25"
				}
			}, null, -1),
			n[2] ||= f("div", {
				class: "absolute -bottom-32 -right-32 w-[500px] h-[500px] rounded-full pointer-events-none",
				style: {
					background: "radial-gradient(circle, var(--ui-color-primary-500) 0%, transparent 65%)",
					opacity: "0.2"
				}
			}, null, -1),
			n[3] ||= f("div", {
				class: "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full pointer-events-none",
				style: {
					background: "radial-gradient(\n                  ellipse,\n                  var(--ui-color-primary-700) 0%,\n                  transparent 60%\n               )",
					opacity: "0.15"
				}
			}, null, -1)
		], 64)) : e.pattern === "aurora" ? (M(), d("div", xl, [...n[4] ||= [
			f("div", {
				class: "absolute -top-1/4 -left-1/4 w-[70%] aspect-square rounded-full blur-[100px]",
				style: {
					background: "radial-gradient(\n                     circle,\n                     var(--ui-color-primary-600) 0%,\n                     transparent 70%\n                  )",
					opacity: "0.45"
				}
			}, null, -1),
			f("div", {
				class: "absolute top-1/4 -right-1/4 w-[55%] aspect-square rounded-full blur-[100px]",
				style: {
					background: "radial-gradient(\n                     circle,\n                     var(--ui-color-primary-400) 0%,\n                     transparent 70%\n                  )",
					opacity: "0.35"
				}
			}, null, -1),
			f("div", {
				class: "absolute -bottom-1/4 left-1/3 w-[60%] aspect-square rounded-full blur-[100px]",
				style: {
					background: "radial-gradient(\n                     circle,\n                     var(--ui-color-primary-700) 0%,\n                     transparent 70%\n                  )",
					opacity: "0.4"
				}
			}, null, -1),
			f("div", {
				class: "absolute top-1/2 left-1/4 w-[40%] aspect-square rounded-full blur-[80px]",
				style: {
					background: "radial-gradient(\n                     circle,\n                     var(--ui-color-primary-500) 0%,\n                     transparent 70%\n                  )",
					opacity: "0.25"
				}
			}, null, -1)
		]])) : e.pattern === "topographic" ? (M(), d(r, { key: 2 }, [n[5] ||= f("div", {
			class: "absolute inset-0 pointer-events-none",
			style: { "background-image": "repeating-radial-gradient(\n                  ellipse at 50% 50%,\n                  transparent 0px,\n                  transparent 38px,\n                  color-mix(in srgb, var(--ui-color-primary-400) 10%, transparent) 38px,\n                  color-mix(in srgb, var(--ui-color-primary-400) 10%, transparent) 39px,\n                  transparent 39px,\n                  transparent 77px\n               )" }
		}, null, -1), n[6] ||= f("div", {
			class: "absolute inset-0 pointer-events-none",
			style: { background: "radial-gradient(\n                  ellipse at 50% 50%,\n                  color-mix(in srgb, var(--ui-color-primary-600) 22%, transparent) 0%,\n                  transparent 60%\n               )" }
		}, null, -1)], 64)) : e.pattern === "rays" ? (M(), d(r, { key: 3 }, [
			n[7] ||= f("div", {
				class: "absolute inset-0 pointer-events-none",
				style: { "background-image": "repeating-conic-gradient(\n                  from 0deg at 50% 120%,\n                  color-mix(in srgb, var(--ui-color-primary-400) 10%, transparent) 0deg 7deg,\n                  transparent 7deg 18deg\n               )" }
			}, null, -1),
			n[8] ||= f("div", {
				class: "absolute top-0 left-0 right-0 h-1/2 pointer-events-none",
				style: { background: "linear-gradient(\n                  to bottom,\n                  color-mix(in srgb, var(--ui-color-primary-950) 60%, transparent) 0%,\n                  transparent 100%\n               )" }
			}, null, -1),
			n[9] ||= f("div", {
				class: "absolute left-0 right-0 pointer-events-none",
				style: { top: "38%" }
			}, [f("div", {
				class: "h-px w-full",
				style: {
					background: "linear-gradient(\n                     90deg,\n                     transparent 0%,\n                     var(--ui-color-primary-400) 20%,\n                     var(--ui-color-primary-300) 50%,\n                     var(--ui-color-primary-400) 80%,\n                     transparent 100%\n                  )",
					"box-shadow": "0 0 30px 8px\n                     color-mix(in srgb, var(--ui-color-primary-500) 50%, transparent)",
					opacity: "0.6"
				}
			})], -1)
		], 64)) : e.pattern === "noise" ? (M(), d(r, { key: 4 }, [n[10] ||= p("<div class=\"absolute inset-0 pointer-events-none opacity-25\" data-v-d9e40bde><svg class=\"w-full h-full\" xmlns=\"http://www.w3.org/2000/svg\" data-v-d9e40bde><filter id=\"section-noise-filter\" data-v-d9e40bde><feTurbulence type=\"fractalNoise\" baseFrequency=\"0.72\" numOctaves=\"4\" stitchTiles=\"stitch\" data-v-d9e40bde></feTurbulence><feColorMatrix type=\"saturate\" values=\"0\" data-v-d9e40bde></feColorMatrix></filter><rect width=\"100%\" height=\"100%\" filter=\"url(#section-noise-filter)\" opacity=\"0.6\" data-v-d9e40bde></rect></svg></div><div class=\"absolute inset-0 pointer-events-none\" style=\"background:radial-gradient(\n                     ellipse at 30% 40%,\n                     color-mix(in srgb, var(--ui-color-primary-600) 35%, transparent) 0%,\n                     transparent 55%\n                  ),\n                  radial-gradient(\n                     ellipse at 70% 65%,\n                     color-mix(in srgb, var(--ui-color-primary-500) 25%, transparent) 0%,\n                     transparent 50%\n                  );\" data-v-d9e40bde></div>", 2)], 64)) : e.pattern === "geometric" ? (M(), d("div", Sl, [...n[11] ||= [p("<div class=\"absolute -top-40 -right-40 w-[620px] h-[620px] rounded-full\" style=\"border:2px solid color-mix(in srgb, var(--ui-color-primary-400) 18%, transparent);\" data-v-d9e40bde></div><div class=\"absolute -top-16 -right-16 w-[380px] h-[380px] rounded-full\" style=\"border:1px solid color-mix(in srgb, var(--ui-color-primary-400) 11%, transparent);\" data-v-d9e40bde></div><div class=\"absolute top-20 right-32 w-[220px] h-[220px] rounded-full\" style=\"border:1px solid color-mix(in srgb, var(--ui-color-primary-300) 8%, transparent);\" data-v-d9e40bde></div><div class=\"absolute -bottom-40 -left-40 w-[540px] h-[540px] rounded-full\" style=\"border:2px solid color-mix(in srgb, var(--ui-color-primary-500) 14%, transparent);\" data-v-d9e40bde></div><div class=\"absolute -bottom-16 -left-16 w-[320px] h-[320px] rounded-full\" style=\"border:1px solid color-mix(in srgb, var(--ui-color-primary-400) 9%, transparent);\" data-v-d9e40bde></div><div class=\"absolute top-1/4 right-1/4 w-[420px] h-[420px] rounded-full\" style=\"background:radial-gradient(\n                     circle,\n                     color-mix(in srgb, var(--ui-color-primary-500) 18%, transparent) 0%,\n                     transparent 60%\n                  );\" data-v-d9e40bde></div><div class=\"absolute bottom-1/4 left-1/4 w-[320px] h-[320px] rounded-full\" style=\"background:radial-gradient(\n                     circle,\n                     color-mix(in srgb, var(--ui-color-primary-600) 14%, transparent) 0%,\n                     transparent 60%\n                  );\" data-v-d9e40bde></div>", 7)]])) : e.pattern === "synthwave" ? (M(), d("div", Cl, [...n[12] ||= [p("<div class=\"absolute top-0 left-0 right-0 h-2/3\" style=\"background-image:radial-gradient(\n                     circle,\n                     color-mix(in srgb, var(--ui-color-primary-200) 70%, white) 1px,\n                     transparent 1px\n                  );background-size:48px 48px;opacity:0.2;\" data-v-d9e40bde></div><div class=\"absolute top-0 left-0 right-0 h-3/5\" style=\"background:linear-gradient(\n                     to bottom,\n                     color-mix(in srgb, var(--ui-color-primary-950) 70%, transparent) 0%,\n                     transparent 100%\n                  );\" data-v-d9e40bde></div><div class=\"synthwave-grid-anim absolute left-0 right-0 bottom-0 h-[260px]\" style=\"background-image:linear-gradient(\n                        color-mix(in srgb, var(--ui-color-primary-500) 65%, transparent) 0.4px,\n                        transparent 1px\n                     ),\n                     linear-gradient(\n                        90deg,\n                        color-mix(in srgb, var(--ui-color-primary-500) 65%, transparent) 0.4px,\n                        transparent 1px\n                     );background-size:80px 40px;transform:perspective(280px) rotateX(25deg);transform-origin:top center;-webkit-mask-image:linear-gradient(\n                     to top,\n                     rgba(0, 0, 0, 0.6) 0%,\n                     rgba(0, 0, 0, 0.25) 40%,\n                     transparent 70%\n                  );mask-image:linear-gradient(\n                     to top,\n                     rgba(0, 0, 0, 0.6) 0%,\n                     rgba(0, 0, 0, 0.25) 40%,\n                     transparent 70%\n                  );\" data-v-d9e40bde></div><div class=\"absolute left-1/2 -translate-x-1/2 rounded-full overflow-hidden\" style=\"top:8%;width:110px;height:110px;background:linear-gradient(\n                     to bottom,\n                     var(--ui-color-primary-200),\n                     var(--ui-color-primary-500)\n                  );opacity:0.75;box-shadow:0 0 60px 20px\n                     color-mix(in srgb, var(--ui-color-primary-400) 45%, transparent);\" data-v-d9e40bde><div class=\"absolute inset-0\" style=\"background-image:repeating-linear-gradient(\n                        0deg,\n                        transparent 0px,\n                        transparent 7px,\n                        color-mix(in srgb, var(--ui-color-primary-950) 45%, transparent) 7px,\n                        color-mix(in srgb, var(--ui-color-primary-950) 45%, transparent) 8px\n                     );\" data-v-d9e40bde></div></div><div class=\"absolute -left-20 top-1/3 w-64 h-64 rounded-full blur-3xl\" style=\"background:radial-gradient(\n                     circle,\n                     var(--ui-color-primary-600) 0%,\n                     transparent 70%\n                  );opacity:0.3;\" data-v-d9e40bde></div><div class=\"absolute -right-20 top-1/3 w-64 h-64 rounded-full blur-3xl\" style=\"background:radial-gradient(\n                     circle,\n                     var(--ui-color-primary-500) 0%,\n                     transparent 70%\n                  );opacity:0.25;\" data-v-d9e40bde></div>", 6)]])) : e.pattern === "diagonal" ? (M(), d(r, { key: 7 }, [
			n[13] ||= f("div", { class: "absolute inset-0 pattern-diagonal pointer-events-none" }, null, -1),
			n[14] ||= f("div", {
				class: "absolute top-0 right-0 w-[400px] h-[400px] rounded-full pointer-events-none",
				style: {
					background: "radial-gradient(circle, var(--ui-color-primary-500) 0%, transparent 70%)",
					opacity: "0.12"
				}
			}, null, -1),
			n[15] ||= f("div", {
				class: "absolute bottom-0 left-0 w-[300px] h-[300px] rounded-full pointer-events-none",
				style: {
					background: "radial-gradient(circle, var(--ui-color-primary-400) 0%, transparent 70%)",
					opacity: "0.1"
				}
			}, null, -1)
		], 64)) : e.pattern === "dots" ? (M(), d(r, { key: 8 }, [n[16] ||= f("div", {
			class: "absolute inset-0 pointer-events-none",
			style: {
				"background-image": "radial-gradient(\n                  circle,\n                  color-mix(in srgb, var(--ui-color-primary-400) 28%, transparent) 1.5px,\n                  transparent 1.5px\n               )",
				"background-size": "28px 28px",
				opacity: "0.45"
			}
		}, null, -1), n[17] ||= f("div", {
			class: "absolute top-1/2 right-0 w-[500px] h-[500px] rounded-full pointer-events-none blur-3xl",
			style: {
				background: "radial-gradient(circle, var(--ui-color-primary-600) 0%, transparent 70%)",
				opacity: "0.1"
			}
		}, null, -1)], 64)) : e.pattern === "scanlines" ? (M(), d(r, { key: 9 }, [n[18] ||= f("div", {
			class: "absolute inset-0 pointer-events-none",
			style: {
				"background-image": "repeating-linear-gradient(\n                  0deg,\n                  transparent 0px,\n                  transparent 3px,\n                  color-mix(in srgb, var(--ui-color-primary-400) 9%, transparent) 3px,\n                  color-mix(in srgb, var(--ui-color-primary-400) 9%, transparent) 4px\n               )",
				"background-size": "100% 4px"
			}
		}, null, -1), n[19] ||= f("div", {
			class: "absolute top-0 right-0 w-[400px] h-[400px] rounded-full pointer-events-none",
			style: { background: "radial-gradient(\n                  circle,\n                  color-mix(in srgb, var(--ui-color-primary-500) 18%, transparent) 0%,\n                  transparent 60%\n               )" }
		}, null, -1)], 64)) : e.pattern === "mesh" ? (M(), d("div", wl, [...n[20] ||= [
			f("div", {
				class: "absolute -top-1/4 left-1/4 w-[50%] aspect-square rounded-full blur-3xl",
				style: {
					background: "radial-gradient(\n                     circle,\n                     var(--ui-color-primary-600) 0%,\n                     transparent 65%\n                  )",
					opacity: "0.2"
				}
			}, null, -1),
			f("div", {
				class: "absolute -bottom-1/4 right-1/4 w-[45%] aspect-square rounded-full blur-3xl",
				style: {
					background: "radial-gradient(\n                     circle,\n                     var(--ui-color-primary-400) 0%,\n                     transparent 65%\n                  )",
					opacity: "0.18"
				}
			}, null, -1),
			f("div", {
				class: "absolute top-1/3 -right-1/4 w-[40%] aspect-square rounded-full blur-3xl",
				style: {
					background: "radial-gradient(\n                     circle,\n                     var(--ui-color-primary-700) 0%,\n                     transparent 65%\n                  )",
					opacity: "0.16"
				}
			}, null, -1)
		]])) : u("", !0)]));
	}
}), [["__scopeId", "data-v-d9e40bde"]]), El = {
	slots: {
		root: "rounded-lg overflow-hidden",
		header: "p-4 sm:px-6",
		title: "text-highlighted font-semibold",
		description: "mt-1 text-muted text-sm",
		body: "p-4 sm:p-6",
		footer: "p-4 sm:px-6"
	},
	variants: { variant: {
		solid: {
			root: "bg-inverted text-inverted",
			title: "text-inverted",
			description: "text-dimmed"
		},
		outline: { root: "bg-default ring ring-default divide-y divide-default" },
		soft: { root: "bg-elevated/50 divide-y divide-default" },
		subtle: { root: "bg-elevated/50 ring ring-default divide-y divide-default" }
	} },
	defaultVariants: { variant: "outline" }
}, Dl = {
	__name: "Card",
	props: {
		as: {
			type: null,
			required: !1
		},
		title: {
			type: String,
			required: !1
		},
		description: {
			type: String,
			required: !1
		},
		variant: {
			type: null,
			required: !1
		},
		class: {
			type: null,
			required: !1
		},
		ui: {
			type: Object,
			required: !1
		}
	},
	setup(e) {
		let t = e, n = he(), r = yr("card", t), i = q(), a = c(() => $({
			extend: El,
			...i.ui?.card || {}
		})({ variant: r.variant }));
		return (e, t) => (M(), l(V(K), {
			as: V(r).as,
			"data-slot": "root",
			class: O(a.value.root({ class: [V(r).ui?.root, V(r).class] }))
		}, {
			default: U(() => [
				n.header || V(r).title || n.title || V(r).description || n.description ? (M(), d("div", {
					key: 0,
					"data-slot": "header",
					class: O(a.value.header({ class: V(r).ui?.header }))
				}, [L(e.$slots, "header", {}, () => [V(r).title || n.title ? (M(), d("div", {
					key: 0,
					"data-slot": "title",
					class: O(a.value.title({ class: V(r).ui?.title }))
				}, [L(e.$slots, "title", {}, () => [m(z(V(r).title), 1)])], 2)) : u("", !0), V(r).description || n.description ? (M(), d("div", {
					key: 1,
					"data-slot": "description",
					class: O(a.value.description({ class: V(r).ui?.description }))
				}, [L(e.$slots, "description", {}, () => [m(z(V(r).description), 1)])], 2)) : u("", !0)])], 2)) : u("", !0),
				n.default ? (M(), d("div", {
					key: 1,
					"data-slot": "body",
					class: O(a.value.body({ class: V(r).ui?.body }))
				}, [L(e.$slots, "default")], 2)) : u("", !0),
				n.footer ? (M(), d("div", {
					key: 2,
					"data-slot": "footer",
					class: O(a.value.footer({ class: V(r).ui?.footer }))
				}, [L(e.$slots, "footer")], 2)) : u("", !0)
			]),
			_: 3
		}, 8, ["as", "class"]));
	}
}, Ol = { class: "text-center" }, kl = { class: "mx-auto" }, Al = { class: "mt-4 text-lg sm:text-xl" }, jl = /*#__PURE__*/ ml(/* @__PURE__ */ _({
	__name: "AppErrorInfo",
	props: { errorText: {} },
	setup(e) {
		function t() {
			window.location.reload();
		}
		return (n, r) => {
			let i = il, a = Dl;
			return M(), l(a, { class: "p-2 sm:p-10 w-full" }, {
				header: U(() => [...r[0] ||= [f("h1", { class: "heading-2xl text-highlighted text-center" }, "Oops!", -1)]]),
				default: U(() => [f("div", Ol, [
					f("div", kl, [h(yl, { class: "mx-auto max-w-70 text-primary slow-pulse" })]),
					f("p", Al, z(e.errorText || "Something went wrong! We have been notified about this automatically. Try refreshing the page or come back later."), 1),
					h(i, {
						label: "Retry",
						type: "button",
						class: "mt-10 w-fit",
						onClick: t
					})
				])]),
				_: 1
			});
		};
	}
}), [["__scopeId", "data-v-4bf7790b"]]), Ml = {
	key: "loading",
	class: "min-h-dvh flex items-center justify-center",
	role: "status",
	"aria-live": "polite",
	"data-test": "pageloader-loading"
}, Nl = { class: "vstack-sm p-12" }, Pl = {
	key: 0,
	class: "text-center mt-4"
}, Fl = {
	key: 1,
	class: "sr-only"
}, Il = {
	key: "error",
	class: "flex items-center justify-center"
}, Ll = {
	key: "loaded",
	class: "contents"
}, Rl = /*#__PURE__*/ ml(/* @__PURE__ */ _({
	__name: "PageLoader",
	props: {
		showLoading: {
			type: Boolean,
			default: !1
		},
		loadingText: {},
		showError: {
			type: Boolean,
			default: !1
		},
		errorText: {}
	},
	setup(e) {
		return (t, n) => {
			let r = qc;
			return M(), d("div", null, [h(a, {
				name: "fade",
				mode: "out-in"
			}, {
				default: U(() => [e.showLoading ? (M(), d("div", Ml, [f("div", Nl, [L(t.$slots, "preloader", {}, () => [h(r, {
					name: "i-lucide-loader-circle",
					class: "size-8 mx-auto animate-spin text-primary",
					"aria-label": "Loading"
				}), e.loadingText ? (M(), d("div", Pl, z(e.loadingText), 1)) : (M(), d("span", Fl, "Loading..."))], !0)])])) : e.showError ? (M(), d("div", Il, [L(t.$slots, "error", {}, () => [h(jl, {
					errorText: e.errorText,
					class: "max-w-xl"
				}, null, 8, ["errorText"])], !0)])) : (M(), d("div", Ll, [L(t.$slots, "default", {}, void 0, !0)]))]),
				_: 3
			})]);
		};
	}
}), [["__scopeId", "data-v-05e09025"]]), zl = {
	key: 0,
	class: "bar"
}, Bl = /*#__PURE__*/ ml(/* @__PURE__ */ _({
	__name: "PageInfiniteLoader",
	props: {
		isLoading: { type: Boolean },
		color: { default: "var(--ui-primary)" },
		height: { default: "5px" }
	},
	setup(e) {
		fe((e) => ({
			v11b1c6d9: t.height,
			c591091e: t.color
		}));
		let t = e;
		return (t, n) => e.isLoading ? (M(), d("div", zl, [...n[0] ||= [f("div", null, null, -1)]])) : u("", !0);
	}
}), [["__scopeId", "data-v-be830121"]]), Vl = {
	slots: {
		overlay: "fixed inset-0",
		content: "bg-default divide-y divide-default flex flex-col focus:outline-none",
		header: "flex items-center gap-1.5 p-4 sm:px-6 min-h-(--ui-header-height)",
		wrapper: "",
		body: "flex-1 p-4 sm:p-6",
		footer: "flex items-center gap-1.5 p-4 sm:px-6",
		title: "text-highlighted font-semibold",
		description: "mt-1 text-muted text-sm",
		close: "absolute top-4 end-4"
	},
	variants: {
		transition: { true: {
			overlay: "data-[state=open]:animate-[fade-in_200ms_var(--ease-out)] data-[state=closed]:animate-[fade-out_200ms_var(--ease-out)]",
			content: "data-[state=open]:animate-[scale-in_200ms_var(--ease-out)] data-[state=closed]:animate-[scale-out_200ms_var(--ease-out)]"
		} },
		fullscreen: {
			true: { content: "inset-0" },
			false: { content: "w-[calc(100vw-2rem)] max-w-lg rounded-lg shadow-lg ring ring-default" }
		},
		overlay: { true: { overlay: "bg-elevated/75" } },
		scrollable: {
			true: {
				overlay: "overflow-y-auto",
				content: "relative"
			},
			false: {
				content: "fixed",
				body: "overflow-y-auto"
			}
		}
	},
	compoundVariants: [{
		scrollable: !0,
		fullscreen: !1,
		class: { overlay: "grid place-items-center p-4 sm:py-8" }
	}, {
		scrollable: !1,
		fullscreen: !1,
		class: { content: "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 max-h-[calc(100dvh-2rem)] sm:max-h-[calc(100dvh-4rem)] overflow-hidden" }
	}]
}, Hl = {
	__name: "Modal",
	props: {
		title: {
			type: String,
			required: !1
		},
		description: {
			type: String,
			required: !1
		},
		content: {
			type: Object,
			required: !1
		},
		overlay: {
			type: Boolean,
			required: !1,
			default: !0
		},
		scrollable: {
			type: Boolean,
			required: !1
		},
		transition: {
			type: Boolean,
			required: !1,
			default: !0
		},
		fullscreen: {
			type: Boolean,
			required: !1
		},
		portal: {
			type: [Boolean, String],
			required: !1,
			skipCheck: !0,
			default: !0
		},
		close: {
			type: [Boolean, Object],
			required: !1,
			default: !0
		},
		closeIcon: {
			type: null,
			required: !1
		},
		dismissible: {
			type: Boolean,
			required: !1,
			default: !0
		},
		class: {
			type: null,
			required: !1
		},
		ui: {
			type: Object,
			required: !1
		},
		open: {
			type: Boolean,
			required: !1
		},
		defaultOpen: {
			type: Boolean,
			required: !1
		},
		modal: {
			type: Boolean,
			required: !1,
			default: !0
		},
		unmountOnHide: {
			type: Boolean,
			required: !1
		}
	},
	emits: [
		"leave",
		"after:leave",
		"enter",
		"after:enter",
		"close:prevent",
		"update:open"
	],
	setup(e, { emit: t }) {
		let n = e, i = t, a = he(), o = yr("modal", n), { t: s } = dr(), f = q(), p = Jn(Je(o, "open", "defaultOpen", "modal", "unmountOnHide"), i), g = wr(le(() => o.portal)), _ = le(() => o.content), v = c(() => o.dismissible ? { pointerDownOutside: (e) => Tr(e, { scrollable: o.scrollable }) } : ["interactOutside", "escapeKeyDown"].reduce((e, t) => (e[t] = (e) => {
			e.preventDefault(), i("close:prevent");
		}, e), {})), [y, b] = Qe(), S = c(() => $({
			extend: Vl,
			...f.ui?.modal || {}
		})({
			transition: o.transition,
			fullscreen: o.fullscreen,
			overlay: o.overlay,
			scrollable: o.scrollable
		}));
		return (e, t) => (M(), l(V(Zt), k(x(V(p))), {
			default: U(({ open: n, close: c }) => [
				h(V(y), null, {
					default: U(() => [h(V(An), E({
						"data-slot": "content",
						class: S.value.content({ class: [!a.default && V(o).class, V(o).ui?.content] })
					}, _.value, {
						onEnter: t[0] ||= (e) => !V(o).scrollable && i("enter"),
						onAfterEnter: t[1] ||= (e) => !V(o).scrollable && i("after:enter"),
						onLeave: t[2] ||= (e) => !V(o).scrollable && i("leave"),
						onAfterLeave: t[3] ||= (e) => !V(o).scrollable && i("after:leave")
					}, ce(v.value)), {
						default: U(() => [!V(o).title && !a.title || !V(o).description && !a.description || a.content ? (M(), l(V(Rn), { key: 0 }, {
							default: U(() => [!V(o).title && !a.title ? (M(), l(V(In), { key: 0 })) : a.content ? (M(), l(V(In), { key: 1 }, {
								default: U(() => [L(e.$slots, "title", {}, () => [m(z(V(o).title), 1)])]),
								_: 3
							})) : u("", !0), !V(o).description && !a.description ? (M(), l(V(jn), { key: 2 })) : a.content ? (M(), l(V(jn), { key: 3 }, {
								default: U(() => [L(e.$slots, "description", {}, () => [m(z(V(o).description), 1)])]),
								_: 3
							})) : u("", !0)]),
							_: 3
						})) : u("", !0), L(e.$slots, "content", { close: c }, () => [
							a.header || V(o).title || a.title || V(o).description || a.description || V(o).close || a.close ? (M(), d("div", {
								key: 0,
								"data-slot": "header",
								class: O(S.value.header({ class: V(o).ui?.header }))
							}, [L(e.$slots, "header", { close: c }, () => [
								V(o).title || a.title || V(o).description || a.description ? (M(), d("div", {
									key: 0,
									"data-slot": "wrapper",
									class: O(S.value.wrapper({ class: V(o).ui?.wrapper }))
								}, [V(o).title || a.title ? (M(), l(V(In), {
									key: 0,
									"data-slot": "title",
									class: O(S.value.title({ class: V(o).ui?.title }))
								}, {
									default: U(() => [L(e.$slots, "title", {}, () => [m(z(V(o).title), 1)])]),
									_: 3
								}, 8, ["class"])) : u("", !0), V(o).description || a.description ? (M(), l(V(jn), {
									key: 1,
									"data-slot": "description",
									class: O(S.value.description({ class: V(o).ui?.description }))
								}, {
									default: U(() => [L(e.$slots, "description", {}, () => [m(z(V(o).description), 1)])]),
									_: 3
								}, 8, ["class"])) : u("", !0)], 2)) : u("", !0),
								L(e.$slots, "actions"),
								V(o).close || a.close ? (M(), l(V(Qt), {
									key: 1,
									"as-child": ""
								}, {
									default: U(() => [L(e.$slots, "close", { ui: S.value }, () => [V(o).close ? (M(), l(il, E({
										key: 0,
										icon: V(o).closeIcon || V(f).ui.icons.close,
										color: "neutral",
										variant: "ghost",
										"aria-label": V(s)("modal.close")
									}, typeof V(o).close == "object" ? V(o).close : {}, {
										"data-slot": "close",
										class: S.value.close({ class: V(o).ui?.close })
									}), null, 16, [
										"icon",
										"aria-label",
										"class"
									])) : u("", !0)])]),
									_: 2
								}, 1024)) : u("", !0)
							])], 2)) : u("", !0),
							a.body ? (M(), d("div", {
								key: 1,
								"data-slot": "body",
								class: O(S.value.body({ class: V(o).ui?.body }))
							}, [L(e.$slots, "body", { close: c })], 2)) : u("", !0),
							a.footer ? (M(), d("div", {
								key: 2,
								"data-slot": "footer",
								class: O(S.value.footer({ class: V(o).ui?.footer }))
							}, [L(e.$slots, "footer", { close: c })], 2)) : u("", !0)
						])]),
						_: 2
					}, 1040, ["class"])]),
					_: 2
				}, 1024),
				a.default ? (M(), l(V(Ln), {
					key: 0,
					"as-child": "",
					class: O(V(o).class)
				}, {
					default: U(() => [L(e.$slots, "default", { open: n })]),
					_: 2
				}, 1032, ["class"])) : u("", !0),
				h(V(Fn), E(V(g), { "force-mount": V(g).disabled && V(o).unmountOnHide === !1 || void 0 }), {
					default: U(() => [h(V(Sr), null, {
						default: U(() => [V(o).scrollable ? (M(), l(V(Nn), {
							key: 0,
							"data-slot": "overlay",
							class: O(S.value.overlay({ class: V(o).ui?.overlay })),
							onEnter: t[4] ||= (e) => i("enter"),
							onAfterEnter: t[5] ||= (e) => i("after:enter"),
							onLeave: t[6] ||= (e) => i("leave"),
							onAfterLeave: t[7] ||= (e) => i("after:leave")
						}, {
							default: U(() => [h(V(b))]),
							_: 1
						}, 8, ["class"])) : (M(), d(r, { key: 1 }, [V(o).overlay ? (M(), l(V(Nn), {
							key: 0,
							"data-slot": "overlay",
							class: O(S.value.overlay({ class: V(o).ui?.overlay }))
						}, null, 8, ["class"])) : u("", !0), h(V(b))], 64))]),
						_: 1
					})]),
					_: 1
				}, 16, ["force-mount"])
			]),
			_: 3
		}, 16));
	}
}, Ul = { class: "flex flex-col justify-center" }, Wl = {
	key: 0,
	class: "mt-8 text-center"
}, Gl = /* @__PURE__ */ _({
	__name: "DialogLoader",
	props: {
		visible: { type: Boolean },
		headerText: {},
		loadingText: {}
	},
	setup(e) {
		return (t, n) => {
			let r = qc, i = Hl;
			return M(), l(i, {
				open: e.visible,
				title: e.headerText,
				close: !1,
				dismissible: !1,
				ui: { overlay: "bg-black/90" }
			}, {
				body: U(() => [f("div", Ul, [h(r, {
					name: "i-lucide-loader-circle",
					class: "size-8 animate-spin mx-auto"
				}), e.loadingText ? (M(), d("div", Wl, z(e.loadingText), 1)) : u("", !0)])]),
				_: 1
			}, 8, ["open", "title"]);
		};
	}
}), Kl = { base: "animate-pulse rounded-md bg-elevated" }, ql = {
	__name: "Skeleton",
	props: {
		as: {
			type: null,
			required: !1
		},
		class: {
			type: null,
			required: !1
		},
		ui: {
			type: Object,
			required: !1
		}
	},
	setup(e) {
		let t = yr("skeleton", e), n = q(), r = c(() => $({
			extend: Kl,
			...n.ui?.skeleton || {}
		}));
		return (e, n) => (M(), l(V(K), {
			as: V(t).as,
			"aria-busy": "true",
			"aria-label": "loading",
			"aria-live": "polite",
			role: "alert",
			class: O(r.value({ class: [V(t).ui?.base, V(t).class] }))
		}, {
			default: U(() => [L(e.$slots, "default")]),
			_: 3
		}, 8, ["as", "class"]));
	}
}, Jl = /* @__PURE__ */ _({
	__name: "InputSkeleton",
	props: {
		isLoading: {
			type: Boolean,
			default: !1
		},
		height: { default: "40px" },
		width: { default: "100%" }
	},
	setup(e) {
		let t = e;
		return (n, r) => {
			let i = ql;
			return M(), d("div", null, [t.isLoading ? (M(), l(i, {
				key: 1,
				style: ee({
					width: e.width,
					height: e.height
				})
			}, null, 8, ["style"])) : L(n.$slots, "default", {}, void 0, void 0, 0)]);
		};
	}
}), Yl = { class: "heading-lg heading-mb-sm" }, Xl = { class: "flex flex-col m-0 p-0" }, Zl = { class: "flex flex-col gap-1 sm:flex-row sm:items-center sm:gap-4 py-6 border-b border-default first:pt-0 last:border-b-0 last:pb-0" }, Ql = { class: "min-w-0 m-0 text-default" }, $l = {
	key: 1,
	class: "inline-block font-mono text-sm px-2 py-0.5 rounded bg-elevated text-primary break-all"
}, eu = { class: "flex flex-col gap-1 sm:flex-row sm:items-center sm:gap-4 py-6 border-b border-default first:pt-0 last:border-b-0 last:pb-0" }, tu = { class: "min-w-0 m-0" }, nu = {
	key: 1,
	class: "break-all"
}, ru = /* @__PURE__ */ _({
	__name: "UserAccountInfo",
	props: {
		userId: {},
		userEmail: {},
		isLoading: {
			type: Boolean,
			default: !1
		},
		headingText: { default: "Your details" }
	},
	setup(e) {
		return (t, n) => {
			let r = ql, i = Dl;
			return M(), l(i, null, {
				header: U(() => [L(t.$slots, "header", {}, () => [f("h2", Yl, z(e.headingText), 1)])]),
				default: U(() => [f("dl", Xl, [f("div", Zl, [n[0] ||= f("dt", { class: "shrink-0 sm:w-20 text-sm font-semibold uppercase tracking-wide text-muted select-none" }, " User ID ", -1), f("dd", Ql, [e.isLoading ? (M(), l(r, {
					key: 0,
					style: { height: "1.2rem" },
					class: "w-full sm:w-52!"
				})) : (M(), d("code", $l, z(e.userId ?? "—"), 1))])]), f("div", eu, [n[1] ||= f("dt", { class: "shrink-0 sm:w-20 text-sm font-semibold uppercase tracking-wide text-muted select-none" }, " Email ", -1), f("dd", tu, [e.isLoading ? (M(), l(r, {
					key: 0,
					style: { height: "1.2rem" },
					class: "w-full sm:w-52!"
				})) : (M(), d("span", nu, z(e.userEmail ?? "—"), 1))])])])]),
				_: 3
			});
		};
	}
});
//#endregion
//#region node_modules/@nuxt/ui/dist/runtime/utils/form.js
function iu(e) {
	return "schema" in e && typeof e.coercer == "function" && typeof e.validator == "function" && typeof e.refiner == "function";
}
function au(e) {
	return "~standard" in e;
}
async function ou(e, t) {
	let n = await t["~standard"].validate(e);
	return n.issues ? {
		errors: n.issues?.map((e) => ({
			name: e.path?.map((e) => typeof e == "object" ? e.key : e).join(".") || "",
			message: e.message
		})) || [],
		result: null
	} : {
		errors: null,
		result: n.value
	};
}
async function su(e, t) {
	let [n, r] = t.validate(e);
	return n ? {
		errors: n.failures().map((e) => ({
			message: e.message,
			name: e.path.join(".")
		})),
		result: null
	} : {
		errors: null,
		result: r
	};
}
function cu(e, t) {
	if (au(t)) return ou(e, t);
	if (iu(t)) return su(e, t);
	throw Error("Form validation failed: Unsupported form schema");
}
function lu(e, t) {
	return t ? t.split(".").reduce((e, t) => e?.[t], e) : e;
}
function uu(e, t, n) {
	if (!t) return Object.assign(e, n);
	if (!e) return e;
	let r = t.split("."), i = e;
	for (let e = 0; e < r.length - 1; e++) {
		let t = r[e];
		(i[t] === void 0 || i[t] === null) && (e + 1 < r.length && !Number.isNaN(Number(r[e + 1])) ? i[t] = [] : i[t] = {}), i = i[t];
	}
	let a = r[r.length - 1];
	return i[a] = n, e;
}
//#endregion
//#region node_modules/@nuxt/ui/dist/runtime/types/form.js
var du = class e extends Error {
	formId;
	errors;
	constructor(t, n) {
		super("Form validation exception"), this.formId = t, this.errors = n, Object.setPrototypeOf(this, e.prototype);
	}
}, fu = { base: "" }, pu = {
	__name: "Form",
	props: {
		id: {
			type: [String, Number],
			required: !1
		},
		schema: {
			type: null,
			required: !1
		},
		state: {
			type: null,
			required: !1
		},
		validate: {
			type: Function,
			required: !1
		},
		validateOn: {
			type: Array,
			required: !1,
			default() {
				return [
					"input",
					"blur",
					"change"
				];
			}
		},
		disabled: {
			type: Boolean,
			required: !1
		},
		name: {
			type: String,
			required: !1
		},
		validateOnInputDelay: {
			type: Number,
			required: !1,
			default: 300
		},
		transform: {
			type: null,
			required: !1,
			default: () => !0
		},
		nested: {
			type: Boolean,
			required: !1
		},
		loadingAuto: {
			type: Boolean,
			required: !1,
			default: !0
		},
		class: {
			type: null,
			required: !1
		},
		ui: {
			type: Object,
			required: !1
		},
		onSubmit: {
			type: Function,
			required: !1
		}
	},
	emits: ["submit", "error"],
	setup(e, { expose: t, emit: n }) {
		let r = e, i = n, a = yr("form", r), o = q(), s = c(() => $({
			extend: fu,
			...o.ui?.form || {}
		})), u = a.id ?? pe(), d = ge("formRef"), f = /* @__PURE__ */ ct(`form-${u}`), p = a.nested === !0 && C(Xo, void 0), m = a.nested === !0 ? C(Zo, void 0) : void 0, h = c(() => m?.value ? a.name ? lu(m.value, a.name) : m.value : a.state);
		N(Xo, f), N(Zo, h);
		let g = F(/* @__PURE__ */ new Map());
		A(async () => {
			p && (await D(), p.emit({
				type: "attach",
				validate: E,
				formId: u,
				name: a.name,
				api: B
			}));
		}), j(() => {
			f.reset(), p && p.emit({
				type: "detach",
				formId: u
			});
		}), A(async () => {
			f.on(async (e) => {
				e.type === "attach" ? g.value.set(e.formId, {
					validate: e.validate,
					name: e.name,
					api: e.api
				}) : e.type === "detach" ? g.value.delete(e.formId) : a.validateOn?.includes(e.type) && !k.value && (e.type === "input" ? (e.eager || x.has(e.name)) && await E({
					name: e.name,
					silent: !0,
					nested: !1
				}) : await E({
					name: e.name,
					silent: !0,
					nested: !1
				})), e.type === "blur" && x.add(e.name), (e.type === "change" || e.type === "input" || e.type === "blur" || e.type === "focus") && b.add(e.name), (e.type === "change" || e.type === "input") && y.add(e.name);
			});
		});
		let _ = F([]);
		N(ns, _);
		let v = F({});
		N(es, v);
		let y = P(/* @__PURE__ */ new Set()), b = P(/* @__PURE__ */ new Set()), x = P(/* @__PURE__ */ new Set());
		function S(e) {
			return e.map((e) => ({
				...e,
				id: e?.name ? v.value[e.name]?.id : void 0
			}));
		}
		let w = F(null);
		async function T() {
			let e = a.validate ? await a.validate(h.value) ?? [] : [];
			if (a.schema) {
				let { errors: t, result: n } = await cu(h.value, a.schema);
				t ? e = e.concat(t) : w.value = n;
			}
			return S(e);
		}
		async function E(e = {
			silent: !1,
			nested: !1,
			transform: !1
		}) {
			let t = e.name && !Array.isArray(e.name) ? [e.name] : e.name, n = [], r = [];
			if (!t && e.nested) {
				let t = Array.from(g.value.values()).map((t) => ne(t, e)), i = await Promise.all(t);
				r = i.filter((e) => e.error).flatMap((e) => e.error.errors.map((t) => re(t, e.name))), n = i.filter((e) => e.output !== void 0);
			}
			let i = [...await T(), ...r];
			if (t ? _.value = ce(i, t) : _.value = i, _.value?.length) {
				if (e.silent) return !1;
				throw new du(u, _.value);
			}
			return e.transform ? (n.forEach((e) => {
				e.name ? uu(w.value, e.name, e.output) : Object.assign(w.value, e.output);
			}), w.value ?? h.value) : h.value;
		}
		let k = F(!1);
		N(ts, ie(k));
		async function ee(e) {
			k.value = !!a.loadingAuto;
			let t = e;
			try {
				t.data = await E({
					nested: !0,
					transform: a.transform
				}), await a.onSubmit?.(t), y.clear();
			} catch (e) {
				if (!(e instanceof du)) throw e;
				let n = {
					...t,
					errors: e.errors
				};
				i("error", n);
			} finally {
				k.value = !1;
			}
		}
		let te = c(() => a.disabled || k.value);
		N(Yo, c(() => ({
			disabled: te.value,
			validateOnInputDelay: a.validateOnInputDelay
		})));
		async function ne(e, t) {
			try {
				let n = await e.validate({
					...t,
					silent: !1
				});
				return {
					name: e.name,
					output: n
				};
			} catch (t) {
				if (!(t instanceof du)) throw t;
				return {
					name: e.name,
					error: t
				};
			}
		}
		function re(e, t) {
			return !t || !e.name ? e : {
				...e,
				name: t + "." + e.name
			};
		}
		function I(e, t) {
			let n = t + ".", r = e?.name?.startsWith(n) ? e.name.substring(n.length) : e.name;
			return {
				...e,
				name: r
			};
		}
		function oe(e, t) {
			return t ? e.filter((e) => e?.name?.startsWith(t + ".")).map((e) => I(e, t)) : e;
		}
		function R(e) {
			return e.api.getErrors().map((t) => e.name ? {
				...t,
				name: e.name + "." + t.name
			} : t);
		}
		function z(e, t) {
			return !e || !t ? !0 : e instanceof RegExp ? e.test(t) : t === e || typeof e == "string" && e.startsWith(t + ".");
		}
		function se(e, t) {
			if (!e || e instanceof RegExp) return e;
			if (t !== e) return typeof e == "string" && e.startsWith(t + ".") ? e.substring(t.length + 1) : e;
		}
		function ce(e, t) {
			let n = new Set(t), r = t.map((e) => v.value?.[e]?.pattern).filter(Boolean), i = (e) => e.name ? n.has(e.name) ? !0 : r.some((t) => t.test(e.name)) : !1, a = _.value.filter((e) => !i(e)), o = e.filter(i);
			return [...a, ...o];
		}
		function le(e, t) {
			return e.filter((e) => t instanceof RegExp ? !(e.name && t.test(e.name)) : !e.name || e.name !== t);
		}
		function ue(e) {
			return !e.name || !!v.value[e.name];
		}
		let B = {
			validate: E,
			errors: _,
			setErrors(e, t) {
				let n = S(e.filter(ue)), r = [];
				for (let n of g.value.values()) if (z(t, n.name)) {
					let i = oe(e, n.name);
					n.api.setErrors(i, se(t, n.name || "")), r.push(...R(n));
				}
				if (t) {
					let e = le(_.value, t);
					_.value = [
						...e,
						...n,
						...r
					];
				} else _.value = [...n, ...r];
			},
			async submit() {
				d.value instanceof HTMLFormElement && d.value.reportValidity() === !1 || await ee(new Event("submit"));
			},
			getErrors(e) {
				return e ? _.value.filter((t) => e instanceof RegExp ? t.name && e.test(t.name) : t.name === e) : _.value;
			},
			clear(e) {
				let t = e ? _.value.filter((t) => ue(t) && (e instanceof RegExp ? !(t.name && e.test(t.name)) : t.name !== e)) : [], n = [];
				for (let t of g.value.values()) z(e, t.name) && t.api.clear(), n.push(...R(t));
				_.value = [...t, ...n];
			},
			disabled: te,
			loading: k,
			dirty: c(() => !!y.size),
			dirtyFields: ie(y),
			blurredFields: ie(x),
			touchedFields: ie(b)
		};
		return t(B), (e, t) => (M(), l(ae(V(p) ? "div" : "form"), {
			id: V(u),
			ref_key: "formRef",
			ref: d,
			name: V(p) ? void 0 : V(a).name,
			method: "post",
			class: O(s.value({ class: [V(a).ui?.base, V(a).class] })),
			onSubmit: xe(ee, ["prevent"])
		}, {
			default: U(() => [L(e.$slots, "default", {
				errors: _.value,
				loading: k.value
			})]),
			_: 3
		}, 40, [
			"id",
			"name",
			"class"
		]));
	}
}, mu = {
	slots: {
		root: "",
		wrapper: "",
		labelWrapper: "flex content-center items-center justify-between gap-1",
		label: "block font-medium text-default",
		container: "relative",
		description: "text-muted",
		error: "mt-2 text-error",
		hint: "text-muted",
		help: "mt-2 text-muted"
	},
	variants: {
		size: {
			xs: { root: "text-xs" },
			sm: { root: "text-xs" },
			md: { root: "text-sm" },
			lg: { root: "text-sm" },
			xl: { root: "text-base" }
		},
		required: { true: { label: "after:content-['*'] after:ms-0.5 after:text-error" } },
		orientation: {
			vertical: { container: "mt-1" },
			horizontal: { root: "flex justify-between place-items-baseline gap-2" }
		}
	},
	defaultVariants: { size: "xl" }
}, hu = ["id"], gu = ["id"], _u = ["id"], vu = ["id"], yu = {
	__name: "FormField",
	props: {
		as: {
			type: null,
			required: !1
		},
		name: {
			type: String,
			required: !1
		},
		errorPattern: {
			type: null,
			required: !1
		},
		label: {
			type: String,
			required: !1
		},
		description: {
			type: String,
			required: !1
		},
		help: {
			type: String,
			required: !1
		},
		error: {
			type: [Boolean, String],
			required: !1,
			default: void 0
		},
		hint: {
			type: String,
			required: !1
		},
		size: {
			type: null,
			required: !1
		},
		required: {
			type: Boolean,
			required: !1
		},
		eagerValidation: {
			type: Boolean,
			required: !1
		},
		validateOnInputDelay: {
			type: Number,
			required: !1
		},
		orientation: {
			type: null,
			required: !1,
			default: "vertical"
		},
		class: {
			type: null,
			required: !1
		},
		ui: {
			type: Object,
			required: !1
		}
	},
	setup(e) {
		let t = e, n = he(), r = yr("formField", t), i = q(), a = c(() => $({
			extend: mu,
			...i.ui?.formField || {}
		})({
			size: r.size,
			required: r.required,
			orientation: r.orientation
		})), o = C(ns, null), s = c(() => r.error || o?.value?.find((e) => e.name === r.name || r.errorPattern && e.name?.match(r.errorPattern))?.message), p = F(pe()), g = p.value, _ = C(es, void 0);
		return H(p, () => {
			_ && r.name && (_.value[r.name] = {
				id: p.value,
				pattern: r.errorPattern
			});
		}, { immediate: !0 }), N($o, p), N(Qo, c(() => ({
			error: s.value,
			name: r.name,
			size: r.size,
			eagerValidation: r.eagerValidation,
			validateOnInputDelay: r.validateOnInputDelay,
			errorPattern: r.errorPattern,
			hint: r.hint,
			description: r.description,
			help: r.help,
			ariaId: g
		}))), (e, t) => (M(), l(V(K), {
			as: V(r).as,
			"data-orientation": V(r).orientation,
			"data-slot": "root",
			class: O(a.value.root({ class: [V(r).ui?.root, V(r).class] }))
		}, {
			default: U(() => [f("div", {
				"data-slot": "wrapper",
				class: O(a.value.wrapper({ class: V(r).ui?.wrapper }))
			}, [V(r).label || n.label ? (M(), d("div", {
				key: 0,
				"data-slot": "labelWrapper",
				class: O(a.value.labelWrapper({ class: V(r).ui?.labelWrapper }))
			}, [h(V(Vn), {
				for: p.value,
				"data-slot": "label",
				class: O(a.value.label({ class: V(r).ui?.label }))
			}, {
				default: U(() => [L(e.$slots, "label", { label: V(r).label }, () => [m(z(V(r).label), 1)])]),
				_: 3
			}, 8, ["for", "class"]), V(r).hint || n.hint ? (M(), d("span", {
				key: 0,
				id: `${V(g)}-hint`,
				"data-slot": "hint",
				class: O(a.value.hint({ class: V(r).ui?.hint }))
			}, [L(e.$slots, "hint", { hint: V(r).hint }, () => [m(z(V(r).hint), 1)])], 10, hu)) : u("", !0)], 2)) : u("", !0), V(r).description || n.description ? (M(), d("p", {
				key: 1,
				id: `${V(g)}-description`,
				"data-slot": "description",
				class: O(a.value.description({ class: V(r).ui?.description }))
			}, [L(e.$slots, "description", { description: V(r).description }, () => [m(z(V(r).description), 1)])], 10, gu)) : u("", !0)], 2), f("div", { class: O([(V(r).label || !!n.label || V(r).description || !!n.description) && a.value.container({ class: V(r).ui?.container })]) }, [L(e.$slots, "default", { error: s.value }), V(r).error !== !1 && (typeof s.value == "string" && s.value || n.error) ? (M(), d("div", {
				key: 0,
				id: `${V(g)}-error`,
				"data-slot": "error",
				class: O(a.value.error({ class: V(r).ui?.error }))
			}, [L(e.$slots, "error", { error: s.value }, () => [m(z(s.value), 1)])], 10, _u)) : V(r).help || n.help ? (M(), d("div", {
				key: 1,
				id: `${V(g)}-help`,
				"data-slot": "help",
				class: O(a.value.help({ class: V(r).ui?.help }))
			}, [L(e.$slots, "help", { help: V(r).help }, () => [m(z(V(r).help), 1)])], 10, vu)) : u("", !0)], 2)]),
			_: 3
		}, 8, [
			"as",
			"data-orientation",
			"class"
		]));
	}
}, bu = {
	slots: {
		root: "relative inline-flex items-center",
		base: ["w-full rounded-md border-0 appearance-none placeholder:text-dimmed disabled:cursor-not-allowed disabled:opacity-75", "transition-colors"],
		leading: "absolute inset-y-0 start-0 flex items-center",
		leadingIcon: "shrink-0 text-dimmed",
		leadingAvatar: "shrink-0",
		leadingAvatarSize: "",
		trailing: "absolute inset-y-0 end-0 flex items-center",
		trailingIcon: "shrink-0 text-dimmed"
	},
	variants: {
		fieldGroup: {
			horizontal: {
				root: "group has-focus-visible:z-[1]",
				base: "group-not-only:group-first:rounded-e-none group-not-only:group-last:rounded-s-none group-not-last:group-not-first:rounded-none"
			},
			vertical: {
				root: "group has-focus-visible:z-[1]",
				base: "group-not-only:group-first:rounded-b-none group-not-only:group-last:rounded-t-none group-not-last:group-not-first:rounded-none"
			}
		},
		size: {
			xs: {
				base: "px-2 py-1 text-sm/4 gap-1",
				leading: "ps-2",
				trailing: "pe-2",
				leadingIcon: "size-4",
				leadingAvatarSize: "3xs",
				trailingIcon: "size-4"
			},
			sm: {
				base: "px-2.5 py-1.5 text-sm/4 gap-1.5",
				leading: "ps-2.5",
				trailing: "pe-2.5",
				leadingIcon: "size-4",
				leadingAvatarSize: "3xs",
				trailingIcon: "size-4"
			},
			md: {
				base: "px-2.5 py-1.5 text-base/5 gap-1.5",
				leading: "ps-2.5",
				trailing: "pe-2.5",
				leadingIcon: "size-5",
				leadingAvatarSize: "2xs",
				trailingIcon: "size-5"
			},
			lg: {
				base: "px-3 py-2 text-base/5 gap-2",
				leading: "ps-3",
				trailing: "pe-3",
				leadingIcon: "size-5",
				leadingAvatarSize: "2xs",
				trailingIcon: "size-5"
			},
			xl: {
				base: "px-3 py-2 text-base gap-2",
				leading: "ps-3",
				trailing: "pe-3",
				leadingIcon: "size-6",
				leadingAvatarSize: "xs",
				trailingIcon: "size-6"
			}
		},
		variant: {
			outline: "text-highlighted bg-default ring ring-inset ring-accented",
			soft: "text-highlighted bg-elevated/50 hover:bg-elevated focus:bg-elevated disabled:bg-elevated/50",
			subtle: "text-highlighted bg-elevated ring ring-inset ring-accented",
			ghost: "text-highlighted bg-transparent hover:bg-elevated focus:bg-elevated disabled:bg-transparent dark:disabled:bg-transparent",
			none: "text-highlighted bg-transparent focus:outline-none"
		},
		color: {
			primary: "",
			secondary: "",
			success: "",
			info: "",
			warning: "",
			error: "",
			neutral: ""
		},
		leading: { true: "" },
		trailing: { true: "" },
		loading: { true: "" },
		highlight: { true: "" },
		fixed: { false: "" },
		type: { file: "file:me-1.5 file:font-medium file:text-muted file:outline-none" }
	},
	compoundVariants: [
		{
			color: "primary",
			variant: ["outline", "subtle"],
			class: "outline-primary/25 focus-visible:outline-3 focus-visible:ring-primary"
		},
		{
			color: "secondary",
			variant: ["outline", "subtle"],
			class: "outline-secondary/25 focus-visible:outline-3 focus-visible:ring-secondary"
		},
		{
			color: "success",
			variant: ["outline", "subtle"],
			class: "outline-success/25 focus-visible:outline-3 focus-visible:ring-success"
		},
		{
			color: "info",
			variant: ["outline", "subtle"],
			class: "outline-info/25 focus-visible:outline-3 focus-visible:ring-info"
		},
		{
			color: "warning",
			variant: ["outline", "subtle"],
			class: "outline-warning/25 focus-visible:outline-3 focus-visible:ring-warning"
		},
		{
			color: "error",
			variant: ["outline", "subtle"],
			class: "outline-error/25 focus-visible:outline-3 focus-visible:ring-error"
		},
		{
			color: "primary",
			variant: ["soft", "ghost"],
			class: "outline-primary/25 focus-visible:outline-3"
		},
		{
			color: "secondary",
			variant: ["soft", "ghost"],
			class: "outline-secondary/25 focus-visible:outline-3"
		},
		{
			color: "success",
			variant: ["soft", "ghost"],
			class: "outline-success/25 focus-visible:outline-3"
		},
		{
			color: "info",
			variant: ["soft", "ghost"],
			class: "outline-info/25 focus-visible:outline-3"
		},
		{
			color: "warning",
			variant: ["soft", "ghost"],
			class: "outline-warning/25 focus-visible:outline-3"
		},
		{
			color: "error",
			variant: ["soft", "ghost"],
			class: "outline-error/25 focus-visible:outline-3"
		},
		{
			color: "primary",
			highlight: !0,
			class: "ring ring-inset ring-primary"
		},
		{
			color: "secondary",
			highlight: !0,
			class: "ring ring-inset ring-secondary"
		},
		{
			color: "success",
			highlight: !0,
			class: "ring ring-inset ring-success"
		},
		{
			color: "info",
			highlight: !0,
			class: "ring ring-inset ring-info"
		},
		{
			color: "warning",
			highlight: !0,
			class: "ring ring-inset ring-warning"
		},
		{
			color: "error",
			highlight: !0,
			class: "ring ring-inset ring-error"
		},
		{
			color: "neutral",
			variant: ["outline", "subtle"],
			class: "outline-inverted/25 focus-visible:outline-3 focus-visible:ring-inverted"
		},
		{
			color: "neutral",
			variant: ["soft", "ghost"],
			class: "outline-inverted/25 focus-visible:outline-3"
		},
		{
			color: "neutral",
			highlight: !0,
			class: "ring ring-inset ring-inverted"
		},
		{
			leading: !0,
			size: "xs",
			class: "ps-7"
		},
		{
			leading: !0,
			size: "sm",
			class: "ps-8"
		},
		{
			leading: !0,
			size: "md",
			class: "ps-9"
		},
		{
			leading: !0,
			size: "lg",
			class: "ps-10"
		},
		{
			leading: !0,
			size: "xl",
			class: "ps-11"
		},
		{
			trailing: !0,
			size: "xs",
			class: "pe-7"
		},
		{
			trailing: !0,
			size: "sm",
			class: "pe-8"
		},
		{
			trailing: !0,
			size: "md",
			class: "pe-9"
		},
		{
			trailing: !0,
			size: "lg",
			class: "pe-10"
		},
		{
			trailing: !0,
			size: "xl",
			class: "pe-11"
		},
		{
			loading: !0,
			leading: !0,
			class: { leadingIcon: "animate-spin" }
		},
		{
			loading: !0,
			leading: !1,
			trailing: !0,
			class: { trailingIcon: "animate-spin" }
		},
		{
			fixed: !1,
			size: "xs",
			class: "md:text-xs"
		},
		{
			fixed: !1,
			size: "sm",
			class: "md:text-xs"
		},
		{
			fixed: !1,
			size: "md",
			class: "md:text-sm"
		},
		{
			fixed: !1,
			size: "lg",
			class: "md:text-sm"
		}
	],
	defaultVariants: {
		size: "xl",
		color: "primary",
		variant: "outline"
	}
}, xu = [
	"id",
	"type",
	"value",
	"name",
	"placeholder",
	"disabled",
	"required",
	"autocomplete"
], Su = /*@__PURE__*/ Object.assign({ inheritAttrs: !1 }, {
	__name: "Input",
	props: {
		as: {
			type: null,
			required: !1
		},
		id: {
			type: String,
			required: !1
		},
		name: {
			type: String,
			required: !1
		},
		type: {
			type: null,
			required: !1,
			default: "text"
		},
		placeholder: {
			type: String,
			required: !1
		},
		color: {
			type: null,
			required: !1
		},
		variant: {
			type: null,
			required: !1
		},
		size: {
			type: null,
			required: !1
		},
		required: {
			type: Boolean,
			required: !1
		},
		autocomplete: {
			type: [String, Object],
			required: !1,
			default: "off"
		},
		autofocus: {
			type: Boolean,
			required: !1
		},
		autofocusDelay: {
			type: Number,
			required: !1,
			default: 0
		},
		disabled: {
			type: Boolean,
			required: !1
		},
		highlight: {
			type: Boolean,
			required: !1
		},
		fixed: {
			type: Boolean,
			required: !1
		},
		modelValue: {
			type: null,
			required: !1
		},
		defaultValue: {
			type: null,
			required: !1
		},
		modelModifiers: {
			type: null,
			required: !1
		},
		class: {
			type: null,
			required: !1
		},
		ui: {
			type: Object,
			required: !1
		},
		icon: {
			type: null,
			required: !1
		},
		avatar: {
			type: Object,
			required: !1
		},
		leading: {
			type: Boolean,
			required: !1
		},
		leadingIcon: {
			type: null,
			required: !1
		},
		trailing: {
			type: Boolean,
			required: !1
		},
		trailingIcon: {
			type: null,
			required: !1
		},
		loading: {
			type: Boolean,
			required: !1
		},
		loadingIcon: {
			type: null,
			required: !1
		}
	},
	emits: [
		"update:modelValue",
		"blur",
		"change"
	],
	setup(e, { expose: t, emit: n }) {
		let r = e, i = n, a = he(), o = yr("input", r), s = lt(o, "modelValue", i, { defaultValue: o.defaultValue }), p = q(), { emitFormBlur: m, emitFormInput: h, emitFormChange: g, size: _, color: v, id: y, name: b, highlight: x, disabled: S, emitFormFocus: C, ariaAttrs: w } = rs(r, { deferInputValidation: !0 }), { orientation: T, size: D } = xr(r), { isLeading: k, isTrailing: ee, leadingIconName: te, trailingIconName: j } = Jo(o), re = c(() => v.value ?? o.color), N = c(() => x.value ?? o.highlight), P = c(() => D.value ?? _.value ?? o.size), ie = c(() => S.value ?? o.disabled), F = c(() => $({
			extend: bu,
			...p.ui?.input || {}
		})({
			type: o.type,
			color: re.value,
			variant: o.variant,
			size: P.value,
			loading: o.loading,
			highlight: N.value,
			fixed: o.fixed,
			leading: k.value || !!o.avatar || !!a.leading,
			trailing: ee.value || !!a.trailing,
			fieldGroup: T.value
		})), I = ge("inputRef");
		function ae(e) {
			o.modelModifiers?.trim && (typeof e == "string" || e == null) && (e = e?.trim() ?? null), (o.modelModifiers?.number || o.type === "number") && (e = ir(e)), o.modelModifiers?.nullable && (e ||= null), o.modelModifiers?.optional && !o.modelModifiers?.nullable && e !== null && (e ||= void 0), s.value = e, h();
		}
		function oe(e) {
			o.modelModifiers?.lazy || ae(e.target.value);
		}
		function R(e) {
			let t = e.target.value;
			o.modelModifiers?.lazy && ae(t), o.modelModifiers?.trim && (e.target.value = t.trim()), g(), i("change", e);
		}
		function z(e) {
			m(), i("blur", e);
		}
		function se() {
			o.autofocus && I.value?.focus();
		}
		let ce;
		return A(() => {
			ce = setTimeout(() => {
				se();
			}, o.autofocusDelay);
		}), ne(() => clearTimeout(ce)), t({ inputRef: I }), (e, t) => (M(), l(V(K), {
			as: V(o).as,
			"data-slot": e.$attrs["data-slot"] ?? "root",
			class: O(F.value.root({ class: [V(o).ui?.root, V(o).class] }))
		}, {
			default: U(() => [
				f("input", E({
					id: V(y),
					ref_key: "inputRef",
					ref: I,
					type: V(o).type,
					value: V(s),
					name: V(b),
					placeholder: V(o).placeholder,
					class: F.value.base({ class: V(o).ui?.base }),
					disabled: ie.value,
					required: V(o).required,
					autocomplete: V(o).autocomplete
				}, {
					...e.$attrs,
					...V(w)
				}, {
					"data-slot": "base",
					onInput: oe,
					onBlur: z,
					onChange: R,
					onFocus: t[0] ||= (...e) => V(C) && V(C)(...e)
				}), null, 16, xu),
				L(e.$slots, "default", { ui: F.value }),
				V(k) || V(o).avatar || a.leading ? (M(), d("span", {
					key: 0,
					"data-slot": "leading",
					class: O(F.value.leading({ class: V(o).ui?.leading }))
				}, [L(e.$slots, "leading", { ui: F.value }, () => [V(k) && V(te) ? (M(), l(qc, {
					key: 0,
					name: V(te),
					"data-slot": "leadingIcon",
					class: O(F.value.leadingIcon({ class: V(o).ui?.leadingIcon }))
				}, null, 8, ["name", "class"])) : V(o).avatar ? (M(), l($c, E({
					key: 1,
					size: V(o).ui?.leadingAvatarSize || F.value.leadingAvatarSize()
				}, V(o).avatar, {
					"data-slot": "leadingAvatar",
					class: F.value.leadingAvatar({ class: V(o).ui?.leadingAvatar })
				}), null, 16, ["size", "class"])) : u("", !0)])], 2)) : u("", !0),
				V(ee) || a.trailing ? (M(), d("span", {
					key: 1,
					"data-slot": "trailing",
					class: O(F.value.trailing({ class: V(o).ui?.trailing }))
				}, [L(e.$slots, "trailing", { ui: F.value }, () => [V(j) ? (M(), l(qc, {
					key: 0,
					name: V(j),
					"data-slot": "trailingIcon",
					class: O(F.value.trailingIcon({ class: V(o).ui?.trailingIcon }))
				}, null, 8, ["name", "class"])) : u("", !0)])], 2)) : u("", !0)
			]),
			_: 3
		}, 8, [
			"as",
			"data-slot",
			"class"
		]));
	}
}), Cu = { class: "flex flex-col items-center gap-4 text-center" }, wu = { class: "border-2 rounded-full p-4 text-primary" }, Tu = { class: "flex flex-col gap-2" }, Eu = /* @__PURE__ */ _({
	__name: "ActionConfirmMsg",
	props: { icon: {} },
	setup(e) {
		return (t, n) => {
			let r = qc;
			return M(), d("div", Cu, [f("div", wu, [h(r, {
				name: e.icon,
				class: "size-5"
			}, null, 8, ["name"])]), f("div", Tu, [L(t.$slots, "default")])]);
		};
	}
}), Du = { class: "heading-lg heading-mb-sm" }, Ou = { key: 0 }, ku = { class: "text-primary break-all px-2" }, Au = /* @__PURE__ */ _({
	__name: "ChangeEmailRequest",
	props: {
		isEmailSent: { type: Boolean },
		isLoading: {
			type: Boolean,
			default: !1
		},
		headingText: { default: "Change your email" },
		initialEmail: { default: "" }
	},
	emits: ["requestEmailChange"],
	setup(t, { emit: n }) {
		let r = n, i = t, a = Se.object({ email: e }), o = P({ email: i.initialEmail }), s = F("");
		function c(e) {
			s.value = e.data.email, r("requestEmailChange", { email: e.data.email });
		}
		return (e, n) => {
			let r = Su, i = yu, u = il, p = pu, m = Dl;
			return M(), l(m, null, {
				header: U(() => [L(e.$slots, "header", {}, () => [f("h2", Du, z(t.headingText), 1)])]),
				default: U(() => [t.isEmailSent ? (M(), l(Eu, {
					key: 1,
					icon: "i-lucide-mail",
					class: "w-full max-w-lg mx-auto"
				}, {
					default: U(() => [f("p", null, [
						n[2] ||= f("span", { class: "block text-wrap" }, "We have sent a verification email to:", -1),
						f("strong", ku, z(s.value), 1),
						n[3] ||= f("span", { class: "block mt-8" }, " Please check the inbox of your new email and click on the verification link to change your email. ", -1)
					])]),
					_: 1
				})) : (M(), d("div", Ou, [h(p, {
					schema: V(a),
					state: o,
					class: "vstack-form",
					onSubmit: c
				}, {
					default: U(() => [
						h(i, {
							name: "email",
							label: "Enter your new email"
						}, {
							default: U(() => [h(r, {
								modelValue: o.email,
								"onUpdate:modelValue": n[0] ||= (e) => o.email = e,
								placeholder: "Email",
								class: "w-full",
								"data-test": "auth-email-field"
							}, null, 8, ["modelValue"])]),
							_: 1
						}),
						n[1] ||= f("p", { class: "text-sm" }, " You will receive an email to your old email to verify your new email address. Please click on the email link to update your email. ", -1),
						h(u, {
							label: "Change email",
							type: "submit",
							block: "",
							loading: t.isLoading
						}, null, 8, ["loading"])
					]),
					_: 1
				}, 8, ["schema", "state"])]))]),
				_: 3
			});
		};
	}
}), ju = { class: "heading-lg heading-mb-sm" }, Mu = {
	key: 0,
	class: "vstack-form"
}, Nu = /* @__PURE__ */ _({
	__name: "DeleteAccountRequest",
	props: {
		isDeleteEmailSent: { type: Boolean },
		isLoading: {
			type: Boolean,
			default: !1
		},
		headingText: { default: "Delete your account" }
	},
	emits: ["sendDeleteEmail"],
	setup(e, { emit: t }) {
		let n = e, r = t;
		function i() {
			r("sendDeleteEmail");
		}
		return (t, r) => {
			let a = il, o = Dl;
			return M(), l(o, null, {
				header: U(() => [L(t.$slots, "header", {}, () => [f("h2", ju, z(e.headingText), 1)])]),
				default: U(() => [n.isDeleteEmailSent ? (M(), l(Eu, {
					key: 1,
					icon: "i-lucide-mail"
				}, {
					default: U(() => [...r[1] ||= [f("p", null, " We have sent you an email to verify your account deletion. Please check your inbox and click on the verification link. ", -1)]]),
					_: 1
				})) : (M(), d("div", Mu, [r[0] ||= f("p", null, " You will receive an email to verify your account deletion. Please click on the email link to delete your account. ", -1), h(a, {
					label: "Send deletion email",
					type: "button",
					block: "",
					loading: n.isLoading,
					onClick: i
				}, null, 8, ["loading"])]))]),
				_: 3
			});
		};
	}
}), Pu = { class: "gsi-material-button-content-wrapper" }, Fu = { class: "gsi-material-button-icon" }, Iu = {
	version: "1.1",
	xmlns: "http://www.w3.org/2000/svg",
	viewBox: "0 0 48 48",
	"xmlns:xlink": "http://www.w3.org/1999/xlink",
	style: { display: "block" }
}, Lu = { class: "gsi-material-button-contents" }, Ru = { style: { display: "none" } }, zu = /*#__PURE__*/ ml(/* @__PURE__ */ _({
	__name: "GoogleAuthIcon",
	props: { authType: { default: "sign-in" } },
	emits: ["signInClick"],
	setup(e) {
		return (t, n) => (M(), d("button", {
			class: "gsi-material-button",
			onClick: n[0] ||= (e) => t.$emit("signInClick")
		}, [n[2] ||= f("div", { class: "gsi-material-button-state" }, null, -1), f("div", Pu, [
			f("div", Fu, [(M(), d("svg", Iu, [...n[1] ||= [p("<path fill=\"#EA4335\" d=\"M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z\" data-v-7459e8e5></path><path fill=\"#4285F4\" d=\"M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z\" data-v-7459e8e5></path><path fill=\"#FBBC05\" d=\"M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z\" data-v-7459e8e5></path><path fill=\"#34A853\" d=\"M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z\" data-v-7459e8e5></path><path fill=\"none\" d=\"M0 0h48v48H0z\" data-v-7459e8e5></path>", 5)]]))]),
			f("span", Lu, z(e.authType === "sign-up" ? "Sign Up" : "Sign In") + " with Google ", 1),
			f("span", Ru, z(e.authType === "sign-up" ? "Sign Up" : "Sign In") + " with Google ", 1)
		])]));
	}
}), [["__scopeId", "data-v-7459e8e5"]]), Bu = { class: "heading-lg heading-mb-sm" }, Vu = {
	key: 0,
	class: "flex items-center my-10"
}, Hu = /* @__PURE__ */ _({
	__name: "SignInUpForm",
	props: {
		title: { default: "Sign in" },
		submitText: { default: "Sign in" },
		loading: {
			type: Boolean,
			default: !1
		}
	},
	emits: ["submit"],
	setup(t, { emit: n }) {
		let r = he(), i = n, a = Se.object({ email: e }), o = P({ email: "" }), s = F(!1);
		function c(e) {
			s.value = !0, i("submit", { email: e.data.email });
		}
		function p() {
			s.value = !0;
		}
		return (e, n) => {
			let i = Su, m = yu, g = il, _ = pu, v = Dl;
			return M(), l(v, { class: "max-w-xl w-full" }, {
				header: U(() => [f("h1", Bu, z(t.title), 1)]),
				default: U(() => [
					L(e.$slots, "notice"),
					L(e.$slots, "oauth-providers"),
					r["oauth-providers"] ? (M(), d("div", Vu, [...n[1] ||= [
						f("hr", { class: "flex-1 border-default" }, null, -1),
						f("span", { class: "px-4 text-muted uppercase" }, "Or", -1),
						f("hr", { class: "flex-1 border-default" }, null, -1)
					]])) : u("", !0),
					h(_, {
						schema: V(a),
						state: o,
						class: "vstack-form",
						"data-test": "auth-form",
						onSubmit: c,
						onError: p
					}, {
						default: U(() => [
							L(e.$slots, "description"),
							h(m, { name: "email" }, {
								default: U(() => [h(i, {
									modelValue: o.email,
									"onUpdate:modelValue": n[0] ||= (e) => o.email = e,
									placeholder: "Email",
									class: "w-full",
									"data-test": "auth-email-input"
								}, null, 8, ["modelValue"])]),
								_: 1
							}),
							L(e.$slots, "additional-fields", { isSubmitClicked: s.value }),
							h(g, {
								label: t.submitText,
								type: "submit",
								block: "",
								loading: t.loading,
								"data-test": "auth-send-code-button"
							}, null, 8, ["label", "loading"])
						]),
						_: 3
					}, 8, ["schema", "state"])
				]),
				_: 3
			});
		};
	}
}), Uu = {
	slots: {
		root: "flex items-center align-center text-center",
		border: "",
		container: "font-medium text-default flex",
		icon: "shrink-0 size-5",
		avatar: "shrink-0",
		avatarSize: "2xs",
		label: "text-sm"
	},
	variants: {
		color: {
			primary: { border: "border-primary" },
			secondary: { border: "border-secondary" },
			success: { border: "border-success" },
			info: { border: "border-info" },
			warning: { border: "border-warning" },
			error: { border: "border-error" },
			neutral: { border: "border-default" }
		},
		orientation: {
			horizontal: {
				root: "w-full flex-row",
				border: "w-full",
				container: "whitespace-nowrap"
			},
			vertical: {
				root: "h-full flex-col",
				border: "h-full",
				container: ""
			}
		},
		size: {
			xs: "",
			sm: "",
			md: "",
			lg: "",
			xl: ""
		},
		position: {
			start: "",
			center: "",
			end: ""
		},
		type: {
			solid: { border: "border-solid" },
			dashed: { border: "border-dashed" },
			dotted: { border: "border-dotted" }
		}
	},
	compoundVariants: [
		{
			orientation: "horizontal",
			position: "start",
			class: { container: "me-3" }
		},
		{
			orientation: "horizontal",
			position: "center",
			class: { container: "mx-3" }
		},
		{
			orientation: "horizontal",
			position: "end",
			class: { container: "ms-3" }
		},
		{
			orientation: "vertical",
			position: "start",
			class: { container: "mb-2" }
		},
		{
			orientation: "vertical",
			position: "center",
			class: { container: "my-2" }
		},
		{
			orientation: "vertical",
			position: "end",
			class: { container: "mt-2" }
		},
		{
			orientation: "horizontal",
			size: "xs",
			class: { border: "border-t" }
		},
		{
			orientation: "horizontal",
			size: "sm",
			class: { border: "border-t-[2px]" }
		},
		{
			orientation: "horizontal",
			size: "md",
			class: { border: "border-t-[3px]" }
		},
		{
			orientation: "horizontal",
			size: "lg",
			class: { border: "border-t-[4px]" }
		},
		{
			orientation: "horizontal",
			size: "xl",
			class: { border: "border-t-[5px]" }
		},
		{
			orientation: "vertical",
			size: "xs",
			class: { border: "border-s" }
		},
		{
			orientation: "vertical",
			size: "sm",
			class: { border: "border-s-[2px]" }
		},
		{
			orientation: "vertical",
			size: "md",
			class: { border: "border-s-[3px]" }
		},
		{
			orientation: "vertical",
			size: "lg",
			class: { border: "border-s-[4px]" }
		},
		{
			orientation: "vertical",
			size: "xl",
			class: { border: "border-s-[5px]" }
		}
	],
	defaultVariants: {
		color: "neutral",
		size: "xs",
		type: "solid"
	}
}, Wu = /*@__PURE__*/ Object.assign({ inheritAttrs: !1 }, {
	__name: "Separator",
	props: {
		as: {
			type: null,
			required: !1
		},
		label: {
			type: String,
			required: !1
		},
		icon: {
			type: null,
			required: !1
		},
		avatar: {
			type: Object,
			required: !1
		},
		color: {
			type: null,
			required: !1
		},
		size: {
			type: null,
			required: !1
		},
		type: {
			type: null,
			required: !1
		},
		orientation: {
			type: null,
			required: !1,
			default: "horizontal"
		},
		position: {
			type: null,
			required: !1,
			default: "center"
		},
		class: {
			type: null,
			required: !1
		},
		ui: {
			type: null,
			required: !1
		},
		decorative: {
			type: Boolean,
			required: !1
		}
	},
	setup(e) {
		let t = e, n = he(), i = yr("separator", t), a = q(), o = Jn(Je(i, "as", "decorative", "orientation")), [s, p] = Qe(), m = c(() => !!(i.label || i.icon || i.avatar || n.default)), g = c(() => $({
			extend: Uu,
			...a.ui?.separator || {}
		})({
			color: i.color,
			orientation: i.orientation,
			size: i.size,
			position: i.position,
			type: i.type
		}));
		return (e, t) => (M(), d(r, null, [h(V(s), null, {
			default: U(() => [f("div", {
				"data-slot": "container",
				class: O(g.value.container({ class: V(i).ui?.container }))
			}, [L(e.$slots, "default", { ui: g.value }, () => [V(i).label ? (M(), d("span", {
				key: 0,
				"data-slot": "label",
				class: O(g.value.label({ class: V(i).ui?.label }))
			}, z(V(i).label), 3)) : V(i).icon ? (M(), l(qc, {
				key: 1,
				name: V(i).icon,
				"data-slot": "icon",
				class: O(g.value.icon({ class: V(i).ui?.icon }))
			}, null, 8, ["name", "class"])) : V(i).avatar ? (M(), l($c, E({
				key: 2,
				size: V(i).ui?.avatarSize || g.value.avatarSize()
			}, V(i).avatar, {
				"data-slot": "avatar",
				class: g.value.avatar({ class: V(i).ui?.avatar })
			}), null, 16, ["size", "class"])) : u("", !0)])], 2)]),
			_: 3
		}), h(V(qn), E({ "data-slot": "root" }, {
			...V(o),
			...e.$attrs
		}, { class: g.value.root({ class: [V(i).ui?.root, V(i).class] }) }), {
			default: U(() => [
				m.value && V(i).position === "start" ? (M(), l(V(p), { key: 0 })) : u("", !0),
				f("div", {
					"data-slot": "border",
					class: O(g.value.border({ class: V(i).ui?.border }))
				}, null, 2),
				m.value && V(i).position === "center" ? (M(), d(r, { key: 1 }, [h(V(p)), f("div", {
					"data-slot": "border",
					class: O(g.value.border({ class: V(i).ui?.border }))
				}, null, 2)], 64)) : u("", !0),
				m.value && V(i).position === "end" ? (M(), l(V(p), { key: 2 })) : u("", !0)
			]),
			_: 1
		}, 16, ["class"])], 64));
	}
}), Gu = {
	slots: {
		root: "relative inline-flex items-center gap-1.5",
		base: ["rounded-md border-0 placeholder:text-dimmed text-center disabled:cursor-not-allowed disabled:opacity-75", "transition-colors"],
		separator: "text-dimmed flex items-center justify-center"
	},
	variants: {
		size: {
			xs: { base: "size-6 text-sm/4" },
			sm: { base: "size-7 text-sm/4" },
			md: { base: "size-8 text-base/5" },
			lg: { base: "size-9 text-base/5" },
			xl: { base: "size-10 text-base" }
		},
		variant: {
			outline: "text-highlighted bg-default ring ring-inset ring-accented",
			soft: "text-highlighted bg-elevated/50 hover:bg-elevated focus:bg-elevated disabled:bg-elevated/50",
			subtle: "text-highlighted bg-elevated ring ring-inset ring-accented",
			ghost: "text-highlighted bg-transparent hover:bg-elevated focus:bg-elevated disabled:bg-transparent dark:disabled:bg-transparent",
			none: "text-highlighted bg-transparent focus:outline-none"
		},
		color: {
			primary: "",
			secondary: "",
			success: "",
			info: "",
			warning: "",
			error: "",
			neutral: ""
		},
		highlight: { true: "" },
		fixed: { false: "" }
	},
	compoundVariants: [
		{
			color: "primary",
			variant: ["outline", "subtle"],
			class: "outline-primary/25 focus-visible:outline-3 focus-visible:ring-primary"
		},
		{
			color: "secondary",
			variant: ["outline", "subtle"],
			class: "outline-secondary/25 focus-visible:outline-3 focus-visible:ring-secondary"
		},
		{
			color: "success",
			variant: ["outline", "subtle"],
			class: "outline-success/25 focus-visible:outline-3 focus-visible:ring-success"
		},
		{
			color: "info",
			variant: ["outline", "subtle"],
			class: "outline-info/25 focus-visible:outline-3 focus-visible:ring-info"
		},
		{
			color: "warning",
			variant: ["outline", "subtle"],
			class: "outline-warning/25 focus-visible:outline-3 focus-visible:ring-warning"
		},
		{
			color: "error",
			variant: ["outline", "subtle"],
			class: "outline-error/25 focus-visible:outline-3 focus-visible:ring-error"
		},
		{
			color: "primary",
			variant: ["soft", "ghost"],
			class: "outline-primary/25 focus-visible:outline-3"
		},
		{
			color: "secondary",
			variant: ["soft", "ghost"],
			class: "outline-secondary/25 focus-visible:outline-3"
		},
		{
			color: "success",
			variant: ["soft", "ghost"],
			class: "outline-success/25 focus-visible:outline-3"
		},
		{
			color: "info",
			variant: ["soft", "ghost"],
			class: "outline-info/25 focus-visible:outline-3"
		},
		{
			color: "warning",
			variant: ["soft", "ghost"],
			class: "outline-warning/25 focus-visible:outline-3"
		},
		{
			color: "error",
			variant: ["soft", "ghost"],
			class: "outline-error/25 focus-visible:outline-3"
		},
		{
			color: "primary",
			highlight: !0,
			class: "ring ring-inset ring-primary"
		},
		{
			color: "secondary",
			highlight: !0,
			class: "ring ring-inset ring-secondary"
		},
		{
			color: "success",
			highlight: !0,
			class: "ring ring-inset ring-success"
		},
		{
			color: "info",
			highlight: !0,
			class: "ring ring-inset ring-info"
		},
		{
			color: "warning",
			highlight: !0,
			class: "ring ring-inset ring-warning"
		},
		{
			color: "error",
			highlight: !0,
			class: "ring ring-inset ring-error"
		},
		{
			color: "neutral",
			variant: ["outline", "subtle"],
			class: "outline-inverted/25 focus-visible:outline-3 focus-visible:ring-inverted"
		},
		{
			color: "neutral",
			variant: ["soft", "ghost"],
			class: "outline-inverted/25 focus-visible:outline-3"
		},
		{
			color: "neutral",
			highlight: !0,
			class: "ring ring-inset ring-inverted"
		},
		{
			fixed: !1,
			size: "xs",
			class: "md:text-xs"
		},
		{
			fixed: !1,
			size: "sm",
			class: "md:text-xs"
		},
		{
			fixed: !1,
			size: "md",
			class: "md:text-sm"
		},
		{
			fixed: !1,
			size: "lg",
			class: "md:text-sm"
		}
	],
	defaultVariants: {
		size: "xl",
		color: "primary",
		variant: "outline"
	}
}, Ku = {
	__name: "PinInput",
	props: {
		as: {
			type: null,
			required: !1
		},
		color: {
			type: null,
			required: !1
		},
		variant: {
			type: null,
			required: !1
		},
		size: {
			type: null,
			required: !1
		},
		length: {
			type: [Number, String],
			required: !1,
			default: 5
		},
		autofocus: {
			type: Boolean,
			required: !1
		},
		autofocusDelay: {
			type: Number,
			required: !1,
			default: 0
		},
		highlight: {
			type: Boolean,
			required: !1
		},
		fixed: {
			type: Boolean,
			required: !1
		},
		separator: {
			type: [Number, Array],
			required: !1
		},
		class: {
			type: null,
			required: !1
		},
		ui: {
			type: Object,
			required: !1
		},
		defaultValue: {
			type: null,
			required: !1
		},
		disabled: {
			type: Boolean,
			required: !1
		},
		id: {
			type: String,
			required: !1
		},
		mask: {
			type: Boolean,
			required: !1
		},
		modelValue: {
			type: null,
			required: !1
		},
		name: {
			type: String,
			required: !1
		},
		otp: {
			type: Boolean,
			required: !1
		},
		placeholder: {
			type: String,
			required: !1
		},
		required: {
			type: Boolean,
			required: !1
		},
		type: {
			type: null,
			required: !1,
			default: "text"
		}
	},
	emits: [
		"update:modelValue",
		"complete",
		"change",
		"blur"
	],
	setup(e, { expose: t, emit: n }) {
		let i = e, a = n, o = yr("pinInput", i), s = q(), f = Jn(Je(o, "disabled", "id", "mask", "name", "otp", "required", "type"), a), { emitFormInput: p, emitFormFocus: g, emitFormChange: _, emitFormBlur: v, size: y, color: b, id: x, name: S, highlight: C, disabled: w, ariaAttrs: T } = rs(i), D = c(() => b.value ?? o.color), k = c(() => C.value ?? o.highlight), ee = c(() => y.value ?? o.size), te = c(() => w.value ?? o.disabled), j = c(() => $({
			extend: Gu,
			...s.ui?.pinInput || {}
		})({
			color: D.value,
			variant: o.variant,
			size: ee.value,
			highlight: k.value,
			fixed: o.fixed
		})), re = F([]);
		function N(e, t) {
			re.value[e] = t;
		}
		function P(e) {
			let t = new Event("change", { target: { value: e } });
			a("change", t), _();
		}
		function ie(e) {
			e.relatedTarget || (a("blur", e), v());
		}
		function ae() {
			o.autofocus && re.value[0]?.$el?.focus();
		}
		function oe(e) {
			if (o.separator === void 0) return !1;
			let t = e + 1;
			if (t >= ir(o.length)) return !1;
			if (Array.isArray(o.separator)) return o.separator.includes(t);
			let n = ir(o.separator);
			return Number.isInteger(n) && n > 0 && t % n === 0;
		}
		let R;
		return A(() => {
			R = setTimeout(() => {
				ae();
			}, o.autofocusDelay);
		}), ne(() => clearTimeout(R)), t({ inputsRef: re }), (e, t) => (M(), l(V(Wn), E({
			...V(f),
			...V(T)
		}, {
			id: V(x),
			name: V(S),
			placeholder: V(o).placeholder,
			"model-value": V(o).modelValue,
			"default-value": V(o).defaultValue,
			"data-slot": "root",
			class: j.value.root({ class: [V(o).ui?.root, V(o).class] }),
			"onUpdate:modelValue": t[0] ||= (e) => V(p)(),
			onComplete: P
		}), {
			default: U(() => [(M(!0), d(r, null, I(V(ir)(V(o).length), (n, i) => (M(), d(r, { key: n }, [h(V(Gn), {
				ref_for: !0,
				ref: (e) => N(i, e),
				index: i,
				"data-slot": "base",
				class: O(j.value.base({ class: V(o).ui?.base })),
				disabled: te.value,
				onBlur: ie,
				onFocus: V(g)
			}, null, 8, [
				"index",
				"class",
				"disabled",
				"onFocus"
			]), oe(i) ? (M(), d("span", {
				key: 0,
				"data-slot": "separator",
				role: "presentation",
				"aria-hidden": "true",
				class: O(j.value.separator({ class: V(o).ui?.separator }))
			}, [L(e.$slots, "separator", { index: i }, () => [t[1] ||= m("•", -1)])], 2)) : u("", !0)], 64))), 128))]),
			_: 3
		}, 16, [
			"id",
			"name",
			"placeholder",
			"model-value",
			"default-value",
			"class"
		]));
	}
}, qu = { class: "px-4 py-8 sm:p-8" }, Ju = { class: "max-w-xl mx-auto mb-2" }, Yu = { class: "heading-lg heading-mb-sm" }, Xu = { class: "vstack-form" }, Zu = { class: "flex justify-center sm:justify-start" }, Qu = { class: "vstack-form" }, $u = /* @__PURE__ */ _({
	__name: "SignInUpVerifyCode",
	props: {
		title: { default: "Input validation code" },
		otpLength: { default: 6 },
		errorMessage: {},
		isSubmittingCode: { type: Boolean },
		isResendingCode: { type: Boolean }
	},
	emits: [
		"codeSubmit",
		"codeResendSubmit",
		"restartFlow"
	],
	setup(e, { emit: t }) {
		let n = t, r = e, i = F([]), a = F(!1), o = c(() => i.value.join("")), s = c(() => o.value.length === r.otpLength), l = c(() => s.value ? r.errorMessage ? r.errorMessage : "" : `The code must be ${r.otpLength} characters long.`), u = c(() => a.value && l.value.length > 0);
		async function p() {
			a.value = !0, s.value && n("codeSubmit", o.value);
		}
		async function m() {
			n("codeResendSubmit");
		}
		function g() {
			n("restartFlow");
		}
		return (t, n) => {
			let r = il, a = Ku, o = yu, s = Wu, c = Dl;
			return M(), d("div", qu, [f("div", Ju, [h(r, {
				type: "button",
				variant: "ghost",
				icon: "i-lucide-arrow-left",
				label: "Start over",
				"aria-label": "Restart authentication process",
				"data-test": "auth-change-email",
				onClick: g
			})]), h(c, { class: "max-w-xl w-full mx-auto" }, {
				header: U(() => [f("h1", Yu, z(e.title), 1)]),
				default: U(() => [f("form", {
					class: "vstack-md",
					onSubmit: xe(p, ["prevent"])
				}, [
					f("div", Xu, [
						L(t.$slots, "description"),
						h(o, {
							class: "mb-4",
							error: u.value ? l.value : "",
							"data-test": "auth-error-message"
						}, {
							default: U(() => [f("div", Zu, [h(a, {
								id: "magic-code-input",
								modelValue: i.value,
								"onUpdate:modelValue": n[0] ||= (e) => i.value = e,
								length: e.otpLength,
								otp: "",
								required: "",
								"data-test": "auth-code-input"
							}, null, 8, ["modelValue", "length"])])]),
							_: 1
						}, 8, ["error"]),
						h(r, {
							label: "Submit code",
							class: "w-full sm:w-fit justify-center",
							type: "submit",
							loading: e.isSubmittingCode,
							disabled: e.isResendingCode,
							"data-test": "auth-verify-button"
						}, null, 8, ["loading", "disabled"])
					]),
					h(s),
					f("div", Qu, [L(t.$slots, "resend-description"), h(r, {
						class: "w-full sm:w-fit",
						label: "Resend code",
						variant: "outline",
						type: "button",
						loading: e.isResendingCode,
						disabled: e.isSubmittingCode,
						"data-test": "auth-resend-code",
						onClick: m
					}, null, 8, ["loading", "disabled"])])
				], 32)]),
				_: 3
			})]);
		};
	}
});
//#endregion
export { Eu as ActionConfirmMsg, jl as AppErrorInfo, Au as ChangeEmailRequest, Nu as DeleteAccountRequest, Gl as DialogLoader, zu as GoogleAuthIcon, Jl as InputSkeleton, yl as PageErrorIcon, Bl as PageInfiniteLoader, Rl as PageLoader, hl as ScrollToTop, Tl as SectionPattern, Hu as SignInUpForm, $u as SignInUpVerifyCode, fl as SiteNavigation, ru as UserAccountInfo };
