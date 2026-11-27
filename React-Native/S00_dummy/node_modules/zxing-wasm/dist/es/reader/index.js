import { A as e, C as t, D as n, E as r, F as i, I as a, L as o, M as s, N as c, O as l, P as u, S as d, T as f, _ as p, a as m, b as h, d as g, f as _, g as ee, h as te, i as ne, j as re, k as ie, l as v, m as y, n as ae, o as oe, p as se, r as ce, s as le, u as ue, v as de, w as b, x as fe, y as pe } from "../share.js";
// src/reader/zxing_reader.js
function me(e, t, n) {
	return t in e ? Object.defineProperty(e, t, {
		value: n,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[t] = n, e;
}
async function x() {
	let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
	var t, n, r = e, i = !!globalThis.window, a = !!globalThis.WorkerGlobalScope;
	(n = globalThis.process) != null && (t = n.versions) != null && t.node && globalThis.process;
	var o = (e, t) => {
		throw t;
	}, s = void 0, c = "";
	function l(e) {
		return r.locateFile ? r.locateFile(e, c) : c + e;
	}
	var u, d;
	if (i || a || typeof fetch == "function") {
		try {
			c = new URL(".", s).href;
		} catch {}
		a && (d = (e) => {
			var t = new XMLHttpRequest();
			return t.open("GET", e, !1), t.responseType = "arraybuffer", t.send(null), new Uint8Array(t.response);
		}), u = async (e) => {
			var t = await fetch(e, { credentials: "same-origin" });
			if (t.ok) return t.arrayBuffer();
			throw Error(t.status + " : " + t.url);
		};
	}
	console.log.bind(console);
	var f = console.error.bind(console), p, m = !1, h;
	class g {}
	class _ extends g {
		constructor(e) {
			super(), this.excPtr = e;
		}
	}
	function ee() {
		return gn.buffer;
	}
	function te() {
		var e;
		if (!(b != null && (e = b.buffer) != null && e.resizable)) {
			var t = ee();
			b = new Int8Array(t), _t = new Int16Array(t), r.HEAPU8 = V = new Uint8Array(t), X = new Uint16Array(t), vt = new Int32Array(t), E = new Uint32Array(t), mt = new Float32Array(t), ht = new Float64Array(t);
		}
	}
	function ne() {
		var e = r.preRun;
		e && (typeof e == "function" && (e = [e]), x.push(...e)), fe(x);
	}
	function re() {
		bn.ra();
	}
	function ie() {
		var e = r.postRun;
		e && (typeof e == "function" && (e = [e]), pe.push(...e)), fe(pe);
	}
	function v(e) {
		var t;
		throw (t = r.onAbort) == null || t.call(r, e), e = `Aborted(${e})`, f(e), m = !0, e += ". Build with -sASSERTIONS for more info.", new WebAssembly.RuntimeError(e);
	}
	var y;
	function ae() {
		return l("zxing_reader.wasm");
	}
	function oe(e) {
		if (e == y && p) return new Uint8Array(p);
		if (d) return d(e);
		throw "both async and sync fetching of the wasm failed";
	}
	async function se(e) {
		if (!p) try {
			return await u(e);
		} catch {}
		return oe(e);
	}
	async function ce(e, t) {
		try {
			var n = await se(e);
			return await WebAssembly.instantiate(n, t);
		} catch (e) {
			f(`failed to asynchronously prepare wasm: ${e}`), v(e);
		}
	}
	async function le(e, t, n) {
		if (!e) try {
			var r = fetch(t, { credentials: "same-origin" });
			return await WebAssembly.instantiateStreaming(r, n);
		} catch (e) {
			f(`wasm streaming compile failed: ${e}`), f("falling back to ArrayBuffer instantiation");
		}
		return ce(t, n);
	}
	function ue() {
		return { a: yn };
	}
	class de {
		constructor(e) {
			me(this, "name", "ExitStatus"), this.message = `Program terminated with exit(${e})`, this.status = e;
		}
	}
	var b, fe = (e) => {
		for (; e.length > 0;) e.shift()(r);
	}, pe = [], x = [], S = !0, C = (e) => ln(e), w = () => dn(), he = [], T = (e) => {
		var t = he[e];
		return t || (he[e] = t = _n.get(e)), t;
	}, E;
	class D {
		set_type(e) {
			E[this.ptr + 4 >> 2] = e;
		}
		get_type() {
			return E[this.ptr + 4 >> 2];
		}
		set_destructor(e) {
			E[this.ptr + 8 >> 2] = e;
		}
		get_destructor() {
			return E[this.ptr + 8 >> 2];
		}
		set_caught(e) {
			e = +!!e, b[this.ptr + 12] = e;
		}
		get_caught() {
			return b[this.ptr + 12] != 0;
		}
		set_rethrown(e) {
			e = +!!e, b[this.ptr + 13] = e;
		}
		get_rethrown() {
			return b[this.ptr + 13] != 0;
		}
		init(e, t) {
			this.set_adjusted_ptr(0), this.set_type(e), this.set_destructor(t);
		}
		set_adjusted_ptr(e) {
			E[this.ptr + 16 >> 2] = e;
		}
		get_adjusted_ptr() {
			return E[this.ptr + 16 >> 2];
		}
		constructor(e) {
			this.excPtr = e, this.ptr = e - 24;
		}
	}
	var O = [], ge = 0, k = null, A = (e) => cn(e), _e = (e) => {
		var t = k == null ? void 0 : k.excPtr;
		if (!t) return A(0), 0;
		var n = new D(t);
		n.set_adjusted_ptr(t);
		var r = n.get_type();
		if (!r) return A(0), t;
		for (var i of e) {
			if (!i || i === r) break;
			var a = n.ptr + 16;
			if (mn(i, r, a)) return A(i), t;
		}
		return A(r), t;
	}, ve = (e) => {
		throw e;
	}, ye = (e) => {
		throw e;
	};
	function j(e) {
		return this.fromWireType(E[e >> 2]);
	}
	var be = (e) => {
		for (; e.length;) {
			var t = e.pop();
			e.pop()(t);
		}
	}, xe = (e) => un(e), M = {}, N = {}, P = {};
	class F extends Error {
		constructor(e) {
			super(e), this.name = "BindingError";
		}
	}
	var I = (e) => {
		throw new F(e);
	}, L = {};
	function Se(e, t) {
		let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
		var r = t.name;
		if (e || I(`type "${r}" must have a positive integer typeid pointer`), P[e]) {
			if (n.ignoreDuplicateRegistrations) return;
			I(`Cannot register type '${r}' twice`);
		}
		if (P[e] = t, delete L[e], N[e]) {
			var i = N[e];
			delete N[e], i.forEach((e) => e());
		}
	}
	function R(e, t) {
		return Se(e, t, arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {});
	}
	class Ce extends Error {
		constructor(e) {
			super(e), this.name = "InternalError";
		}
	}
	var z = (e) => {
		throw new Ce(e);
	}, B = (e, t, n) => {
		e.forEach((e) => L[e] = t);
		function r(t) {
			var r = n(t);
			r.length !== e.length && z("Mismatched type converter count");
			for (var i = 0; i < e.length; ++i) R(e[i], r[i]);
		}
		var i = Array(t.length), a = [], o = 0;
		for (let [e, n] of t.entries()) if (P[n]) i[e] = P[n];
		else {
			var s, c, l;
			a.push(n), ((l = (s = N)[c = n]) == null ? s[c] = [] : l).push(() => {
				i[e] = P[n], ++o, o === a.length && r(i);
			});
		}
		a.length === 0 && r(i);
	}, V, we = (e, t) => V.fill(0, e, e + t), Te = {}, H = (e) => {
		var t = e, n = e >= 1024 && e < 195448;
		if (n) {
			var r = Te[t];
			if (r != null) return r;
		}
		for (var i = "";;) {
			var a = V[e++];
			if (!a) break;
			i += String.fromCharCode(a);
		}
		return n && (Te[t] = i), i;
	}, Ee = !1, De = () => {}, Oe = (e) => {
		e.smartPtr ? e.smartPtrType.rawDestructor(e.smartPtr) : e.ptrType.registeredClass.rawDestructor(e.ptr);
	}, ke = (e) => {
		--e.count.value, e.count.value === 0 && Oe(e);
	}, U = (e) => globalThis.FinalizationRegistry ? (Ee = new FinalizationRegistry((e) => {
		ke(e.$$);
	}), U = (e) => {
		var t = e.$$;
		if (t.smartPtr) {
			var n = { $$: t };
			Ee.register(e, n, e);
		}
		return e;
	}, De = (e) => Ee.unregister(e), U(e)) : (U = (e) => e, e), Ae = [], je = (e) => ({
		count: e.count,
		deleteScheduled: e.deleteScheduled,
		preservePointerOnDelete: e.preservePointerOnDelete,
		ptr: e.ptr,
		ptrType: e.ptrType,
		smartPtr: e.smartPtr,
		smartPtrType: e.smartPtrType
	}), Me = (e) => {
		I(function(e) {
			return e.$$.ptrType.registeredClass.name;
		}(e) + " instance already deleted");
	};
	function W() {}
	function Ne(e, t, n, r, i, a, o, s) {
		this.name = e, this.constructor = t, this.instancePrototype = n, this.rawDestructor = r, this.baseClass = i, this.getActualType = a, this.upcast = o, this.downcast = s, this.pureVirtualFunctions = [];
	}
	var Pe = (e) => {
		if (e === null) return "null";
		var t = typeof e;
		return t === "object" || t === "array" || t === "function" ? e.toString() : "" + e;
	}, Fe = (e, t, n) => {
		for (; t !== n;) t.upcast || I(`Expected null or instance of ${n.name}, got an instance of ${t.name}`), e = t.upcast(e), t = t.baseClass;
		return e;
	};
	function Ie(e, t) {
		if (t === null) return this.isReference && I(`null is not a valid ${this.name}`), 0;
		t.$$ || I(`Cannot pass "${Pe(t)}" as a ${this.name}`), t.$$.ptr || I(`Cannot pass deleted object as a pointer of type ${this.name}`);
		var n = t.$$.ptrType.registeredClass;
		return Fe(t.$$.ptr, n, this.registeredClass);
	}
	var Le = [], G = [
		0,
		1,
		,
		1,
		null,
		1,
		!0,
		1,
		!1,
		1
	], K = {
		toValue: (e) => (e || I(`Cannot use deleted val. handle = ${e}`), G[e]),
		toHandle: (e) => {
			switch (e) {
				case void 0: return 2;
				case null: return 4;
				case !0: return 6;
				case !1: return 8;
				default: {
					let t = Le.pop() || G.length;
					return G[t] = e, G[t + 1] = 1, t;
				}
			}
		}
	};
	function Re(e, t) {
		var n;
		if (t === null) return this.isReference && I(`null is not a valid ${this.name}`), this.isSmartPointer ? (n = this.rawConstructor(), e !== null && e.push(this.rawDestructor, n), n) : 0;
		t && t.$$ || I(`Cannot pass "${Pe(t)}" as a ${this.name}`), t.$$.ptr || I(`Cannot pass deleted object as a pointer of type ${this.name}`), !this.isConst && t.$$.ptrType.isConst && I(`Cannot convert argument of type ${t.$$.smartPtrType ? t.$$.smartPtrType.name : t.$$.ptrType.name} to parameter type ${this.name}`);
		var r = t.$$.ptrType.registeredClass;
		if (n = Fe(t.$$.ptr, r, this.registeredClass), this.isSmartPointer) switch (t.$$.smartPtr === void 0 && I("Passing raw pointer to smart pointer is illegal"), this.sharingPolicy) {
			case 0:
				t.$$.smartPtrType === this ? n = t.$$.smartPtr : I(`Cannot convert argument of type ${t.$$.smartPtrType ? t.$$.smartPtrType.name : t.$$.ptrType.name} to parameter type ${this.name}`);
				break;
			case 1:
				n = t.$$.smartPtr;
				break;
			case 2:
				if (t.$$.smartPtrType === this) n = t.$$.smartPtr;
				else {
					var i = t.clone();
					n = this.rawShare(n, K.toHandle(() => i.delete())), e !== null && e.push(this.rawDestructor, n);
				}
				break;
			default: I("Unsupported sharing policy");
		}
		return n;
	}
	var ze = (e, t, n) => {
		if (t === n) return e;
		if (n.baseClass === void 0) return null;
		var r = ze(e, t, n.baseClass);
		return r === null ? null : n.downcast(r);
	}, Be = (e, t) => {
		for (t === void 0 && I("ptr should not be undefined"); e.baseClass;) t = e.upcast(t), e = e.baseClass;
		return t;
	}, Ve = /* @__PURE__ */ new Map(), He = (e, t) => (t = Be(e, t), Ve.get(t)), q = (e, t) => (t.ptrType && t.ptr || z("makeClassHandle requires ptr and ptrType"), !!t.smartPtrType != !!t.smartPtr && z("Both smartPtrType and smartPtr must be specified"), t.count = { value: 1 }, U(Object.create(e, { $$: {
		value: t,
		writable: !0
	} }))), Ue = {};
	function We(e) {
		var t = this.getPointee(e);
		if (!t) return this.destructor(e), null;
		var n = He(this.registeredClass, t);
		if (n !== void 0) {
			if (n.$$.count.value === 0) return n.$$.ptr = t, n.$$.smartPtr = e, n.clone();
			var r = n.clone();
			return this.destructor(e), r;
		}
		function i() {
			return this.isSmartPointer ? q(this.registeredClass.instancePrototype, {
				ptrType: this.pointeeType,
				ptr: t,
				smartPtrType: this,
				smartPtr: e
			}) : q(this.registeredClass.instancePrototype, {
				ptrType: this,
				ptr: e
			});
		}
		var a = Ue[this.registeredClass.getActualType(t)];
		if (!a) return i.call(this);
		var o = this.isConst ? a.constPointerType : a.pointerType, s = ze(t, this.registeredClass, o.registeredClass);
		return s === null ? i.call(this) : this.isSmartPointer ? q(o.registeredClass.instancePrototype, {
			ptrType: o,
			ptr: s,
			smartPtrType: this,
			smartPtr: e
		}) : q(o.registeredClass.instancePrototype, {
			ptrType: o,
			ptr: s
		});
	}
	function Ge(e, t) {
		if (t === null) return this.isReference && I(`null is not a valid ${this.name}`), 0;
		t.$$ || I(`Cannot pass "${Pe(t)}" as a ${this.name}`), t.$$.ptr || I(`Cannot pass deleted object as a pointer of type ${this.name}`), t.$$.ptrType.isConst && I(`Cannot convert argument of type ${t.$$.ptrType.name} to parameter type ${this.name}`);
		var n = t.$$.ptrType.registeredClass;
		return Fe(t.$$.ptr, n, this.registeredClass);
	}
	function J(e, t, n, r, i, a, o, s, c, l, u) {
		this.name = e, this.registeredClass = t, this.isReference = n, this.isConst = r, this.isSmartPointer = i, this.pointeeType = a, this.sharingPolicy = o, this.rawGetPointee = s, this.rawConstructor = c, this.rawShare = l, this.rawDestructor = u, !i && t.baseClass === void 0 ? this.toWireType = r ? Ie : Ge : (this.toWireType = Re, i && (this.usesDestructor = !0));
	}
	var Ke = (e, t) => Object.defineProperty(t, "name", { value: e }), qe = {}, Je = (e, t, n) => {
		e = e.replace(/p/g, "i");
		var r = qe[e];
		return r(t, ...n);
	}, Ye = function(e, t) {
		let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : [];
		return e.includes("j") ? Je(e, t, n) : function(e) {
			return e;
		}(T(t)(...n));
	}, Xe = (e, t) => function() {
		return Ye(e, t, [...arguments]);
	}, Y = (e, t) => {
		e = H(e);
		var n = function() {
			return e.includes("j") ? Xe(e, t) : T(t);
		}();
		return typeof n != "function" && I(`unknown function pointer with signature ${e}: ${t}`), n;
	}, Ze = (e, t, n) => {
		if (e[t].overloadTable === void 0) {
			var r = e[t];
			e[t] = function() {
				var r = [...arguments];
				return e[t].overloadTable[r.length] || I(`Function '${n}' called with an invalid number of arguments (${r.length}) - expects one of (${e[t].overloadTable})!`), e[t].overloadTable[r.length].apply(this, r);
			}, e[t].overloadTable = [], e[t].overloadTable[r.argCount] = r;
		}
	}, Qe = (e, t) => Object.prototype.hasOwnProperty.call(e, t), $e = (e, t, n) => {
		Qe(r, e) ? ((n === void 0 || r[e].overloadTable !== void 0 && r[e].overloadTable[n] !== void 0) && I(`Cannot register public name '${e}' twice`), Ze(r, e, e), r[e].overloadTable[n] && I(`Cannot register multiple overloads of a function with the same number of arguments (${n})!`), r[e].overloadTable[n] = t) : (r[e] = t, r[e].argCount = n);
	}, et = (e) => {
		e = e.replace(/[^a-zA-Z0-9_]/g, "$");
		var t = e.charCodeAt(0);
		return t >= 48 && t <= 57 ? `_${e}` : e;
	}, tt = (e, t, n) => {
		Qe(r, e) || z("Replacing nonexistent public symbol"), r[e].overloadTable !== void 0 && n !== void 0 ? r[e].overloadTable[n] = t : (r[e] = t, r[e].argCount = n);
	};
	class nt extends Error {}
	var rt = (e) => {
		var t = nn(e), n = H(t);
		return an(t), n;
	}, it = (e, t) => {
		var n = [], r = {};
		throw t.forEach(function e(t) {
			r[t] || P[t] || (L[t] ? L[t].forEach(e) : (n.push(t), r[t] = !0));
		}), new nt(`${e}: ` + n.map(rt).join([", "]));
	};
	function at(e) {
		for (var t = 1; t < e.length; ++t) if (e[t] !== null && e[t].argStackAlloc) return !0;
		return !1;
	}
	var ot = {
		ftfd3: function(e, t, n, r, i, a, o, s, c, l) {
			return function(e, t, o) {
				var u = [], d = n(r, s(u, e), c(u, t), l(u, o));
				return i(u), a(d);
			};
		},
		ftfd4: function(e, t, n, r, i, a, o, s, c, l, u) {
			return function(e, t, o, d) {
				var f = [], p = n(r, s(f, e), c(f, t), l(f, o), u(f, d));
				return i(f), a(p);
			};
		},
		ftfn0: function(e, t, n, r, i, a) {
			return function() {
				return a(n(r));
			};
		},
		ftfn3: function(e, t, n, r, i, a, o, s, c, l) {
			return function(e, t, i) {
				return a(n(r, s(null, e), c(null, t), l(null, i)));
			};
		},
		ftfn4: function(e, t, n, r, i, a, o, s, c, l, u) {
			return function(e, t, i, o) {
				return a(n(r, s(null, e), c(null, t), l(null, i), u(null, o)));
			};
		},
		ftfs3: function(e, t, n, r, i, a, o, s, c, l, u, d) {
			return function(e, t, i) {
				var o = s(), f = n(r, l(null, e), u(null, t), d(null, i));
				return c(o), a(f);
			};
		},
		ftfs4: function(e, t, n, r, i, a, o, s, c, l, u, d, f) {
			return function(e, t, i, o) {
				var p = s(), m = n(r, l(null, e), u(null, t), d(null, i), f(null, o));
				return c(p), a(m);
			};
		},
		tffd1: function(e, t, n, r, i, a, o, s) {
			return function(e) {
				var t = [];
				n(r, o(t, this), s(t, e)), i(t);
			};
		},
		tffd2: function(e, t, n, r, i, a, o, s, c) {
			return function(e, t) {
				var a = [];
				n(r, o(a, this), s(a, e), c(a, t)), i(a);
			};
		},
		tffn1: function(e, t, n, r, i, a, o, s) {
			return function(e) {
				n(r, o(null, this), s(null, e));
			};
		},
		tffn2: function(e, t, n, r, i, a, o, s, c) {
			return function(e, t) {
				n(r, o(null, this), s(null, e), c(null, t));
			};
		},
		tffs1: function(e, t, n, r, i, a, o, s, c, l) {
			return function(e) {
				var t = s();
				n(r, o(null, this), l(null, e)), c(t);
			};
		},
		tffs2: function(e, t, n, r, i, a, o, s, c, l, u) {
			return function(e, t) {
				var i = s();
				n(r, o(null, this), l(null, e), u(null, t)), c(i);
			};
		},
		ttfd1: function(e, t, n, r, i, a, o, s) {
			return function(e) {
				var t = [], c = n(r, o(t, this), s(t, e));
				return i(t), a(c);
			};
		},
		ttfd2: function(e, t, n, r, i, a, o, s, c) {
			return function(e, t) {
				var l = [], u = n(r, o(l, this), s(l, e), c(l, t));
				return i(l), a(u);
			};
		},
		ttfn0: function(e, t, n, r, i, a, o) {
			return function() {
				return a(n(r, o(null, this)));
			};
		},
		ttfn1: function(e, t, n, r, i, a, o, s) {
			return function(e) {
				return a(n(r, o(null, this), s(null, e)));
			};
		},
		ttfn2: function(e, t, n, r, i, a, o, s, c) {
			return function(e, t) {
				return a(n(r, o(null, this), s(null, e), c(null, t)));
			};
		},
		ttfs1: function(e, t, n, r, i, a, o, s, c, l) {
			return function(e) {
				var t = s(), i = n(r, o(null, this), l(null, e));
				return c(t), a(i);
			};
		},
		ttfs2: function(e, t, n, r, i, a, o, s, c, l, u) {
			return function(e, t) {
				var i = s(), d = n(r, o(null, this), l(null, e), u(null, t));
				return c(i), a(d);
			};
		}
	};
	function st(e) {
		for (var t, n = 1; n < e.length; ++n) if ((t = e[n]) != null && t.usesDestructor) return !0;
		return !1;
	}
	function ct(e, t, n, r, i, a) {
		var o = t.length;
		o < 2 && I("argTypes array size mismatch! Must at least get return value and receiver (this) types!");
		var s = t[1] !== null && n !== null, c = st(t), l = at(t), u = l && !a && !c;
		l && !u && (c = !0);
		var d = !t[0].isVoid, f = o - 2, p = t[0], m = t[1], h = [
			e,
			I,
			r,
			i,
			be,
			p.fromWireType.bind(p),
			m == null ? void 0 : m.toWireType.bind(m)
		];
		u && h.push(w, C);
		for (var g = 2; g < o; ++g) {
			var _ = t[g];
			h.push(_.toWireType.bind(_));
		}
		var ee = ot[`${s ? "t" : "f"}${d ? "t" : "f"}${a ? "t" : "f"}${u ? "s" : c ? "d" : "n"}${f}`];
		return Ke(e, ee(...h));
	}
	var lt = (e, t) => {
		for (var n = [], r = 0; r < e; r++) n.push(E[t + r * 4 >> 2]);
		return n;
	}, ut = (e) => {
		e = e.trim();
		let t = e.indexOf("(");
		return t === -1 ? e : e.slice(0, t);
	}, dt = [], ft = (e) => {
		if (e > 9 && --G[e + 1] === 0) {
			var t = G[e];
			G[e] = void 0;
			var n = dt[e];
			n && (dt[e] = void 0, n(t)), Le.push(e);
		}
	}, pt = {
		name: "emscripten::val",
		fromWireType: (e) => {
			var t = K.toValue(e);
			return ft(e), t;
		},
		toWireType: (e, t) => K.toHandle(t),
		readValueFromPointer: j
	}, mt, ht, gt = (e, t) => {
		switch (t) {
			case 4: return function(e) {
				return this.fromWireType(mt[e >> 2]);
			};
			case 8: return function(e) {
				return this.fromWireType(ht[e >> 3]);
			};
			default: throw TypeError(`invalid float width (${t}): ${e}`);
		}
	}, _t, vt, X, yt = (e, t, n) => {
		switch (t) {
			case 1: return n ? (e) => b[e] : (e) => V[e];
			case 2: return n ? (e) => _t[e >> 1] : (e) => X[e >> 1];
			case 4: return n ? (e) => vt[e >> 2] : (e) => E[e >> 2];
			default: throw TypeError(`invalid integer width (${t}): ${e}`);
		}
	}, bt = (e, t, n) => {
		let r = (e, t) => {
			let n = 0;
			return {
				next() {
					if (n >= e) return { done: !0 };
					let r = n;
					return n++, {
						value: t(r),
						done: !1
					};
				},
				[Symbol.iterator]() {
					return this;
				}
			};
		};
		e[Symbol.iterator] || (e[Symbol.iterator] = function() {
			let e = this[t]();
			return r(e, (e) => this[n](e));
		});
	}, xt = Object.assign({ optional: !0 }, pt), St = globalThis.TextDecoder && new TextDecoder(), Ct = (e, t, n, r) => {
		var i = t + n;
		if (r) return i;
		for (; e[t] && !(t >= i);) ++t;
		return t;
	}, wt = function(e) {
		let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, n = arguments.length > 2 ? arguments[2] : void 0, r = arguments.length > 3 ? arguments[3] : void 0;
		var i = Ct(e, t, n, r);
		if (i - t > 16 && e.buffer && St) return St.decode(e.subarray(t, i));
		for (var a = ""; t < i;) {
			var o = e[t++];
			if (!(o & 128)) a += String.fromCharCode(o);
			else {
				var s = e[t++] & 63;
				if ((o & 224) == 192) a += String.fromCharCode((o & 31) << 6 | s);
				else {
					var c = e[t++] & 63;
					if (o = (o & 240) == 224 ? (o & 15) << 12 | s << 6 | c : (o & 7) << 18 | s << 12 | c << 6 | e[t++] & 63, o < 65536) a += String.fromCharCode(o);
					else {
						var l = o - 65536;
						a += String.fromCharCode(55296 | l >> 10, 56320 | l & 1023);
					}
				}
			}
		}
		return a;
	}, Tt = {}, Et = (e, t, n) => {
		var r = t == null && e >= 1024 && e < 195448;
		if (r) {
			var i = Tt[e];
			if (i != null) return i;
		}
		return i = e ? wt(V, e, t, n) : "", r && (Tt[e] = i), i;
	}, Dt = (e) => {
		for (var t = 0, n = 0; n < e.length; ++n) {
			var r = e.codePointAt(n);
			r <= 127 ? t++ : r <= 2047 ? t += 2 : r <= 65535 ? t += 3 : (t += 4, n++);
		}
		return t;
	}, Ot = (e, t, n, r) => {
		if (!(r > 0)) return 0;
		for (var i = n, a = n + r - 1, o = 0; o < e.length; ++o) {
			var s = e.codePointAt(o);
			if (s <= 127) {
				if (n >= a) break;
				t[n++] = s;
			} else if (s <= 2047) {
				if (n + 1 >= a) break;
				t[n++] = 192 | s >> 6, t[n++] = 128 | s & 63;
			} else if (s <= 65535) {
				if (n + 2 >= a) break;
				t[n++] = 224 | s >> 12, t[n++] = 128 | s >> 6 & 63, t[n++] = 128 | s & 63;
			} else {
				if (n + 3 >= a) break;
				t[n++] = 240 | s >> 18, t[n++] = 128 | s >> 12 & 63, t[n++] = 128 | s >> 6 & 63, t[n++] = 128 | s & 63, o++;
			}
		}
		return t[n] = 0, n - i;
	}, kt = (e, t, n) => Ot(e, V, t, n), At = globalThis.TextDecoder ? new TextDecoder("utf-16le") : void 0, jt = (e, t, n) => {
		var r = e >> 1, i = Ct(X, r, t / 2, n);
		if (i - r > 16 && At) return At.decode(X.subarray(r, i));
		for (var a = "", o = r; o < i; ++o) {
			var s = X[o];
			a += String.fromCharCode(s);
		}
		return a;
	}, Mt = (e, t, n) => {
		for (var r = "", i = e >> 2, a = 0; !(a >= t / 4); a++) {
			var o = E[i + a];
			if (!o && !n) break;
			r += String.fromCodePoint(o);
		}
		return r;
	}, Nt = (e) => e.length * 2, Pt = (e) => {
		for (var t = 0, n = 0; n < e.length; ++n) e.codePointAt(n) > 65535 && n++, t += 4;
		return t;
	}, Ft = function(e, t) {
		let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 2147483647;
		if (n < 2) return 0;
		n -= 2;
		for (var r = t, i = n < e.length * 2 ? n / 2 : e.length, a = 0; a < i; ++a) {
			var o = e.charCodeAt(a);
			_t[t >> 1] = o, t += 2;
		}
		return _t[t >> 1] = 0, t - r;
	}, It = function(e, t) {
		let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 2147483647;
		if (n < 4) return 0;
		for (var r = t, i = r + n - 4, a = 0; a < e.length; ++a) {
			var o = e.codePointAt(a);
			if (o > 65535 && a++, vt[t >> 2] = o, t += 4, t + 4 > i) break;
		}
		return vt[t >> 2] = 0, t - r;
	}, Lt = 0, Rt = [], zt = (e) => {
		var t = Rt.length;
		return Rt.push(e), t;
	}, Bt = (e, t, n) => {
		var r = [], i = e(r, n);
		return r.length && (E[t >> 2] = K.toHandle(r)), i;
	}, Vt = {
		"2t1": (e, t) => (n, r, i, a) => Bt(e, i, new (K.toValue(n))(t(a))),
		"3t1": (e, t) => (n, r, i, a) => Bt(e, i, t(a))
	}, Ht = (e, t) => {
		var n = P[e];
		return n === void 0 && I(`${t} has unknown type ${rt(e)}`), n;
	}, Ut = (e, t) => {
		for (var n = Array(e), r = 0; r < e; ++r) n[r] = Ht(E[t + r * 4 >> 2], `parameter ${r}`);
		return n;
	}, Wt = {}, Gt = (e) => {
		var t = Wt[e];
		return t === void 0 ? H(e) : t;
	}, Kt = (e) => {
		if (e instanceof de || e == "unwind") return h;
		o(0, e);
	}, qt = () => S || Lt > 0, Jt = (e) => {
		if (h = e, !qt()) {
			var t;
			(t = r.onExit) == null || t.call(r, e), m = !0;
		}
		o(0, new de(e));
	}, Yt = () => {
		if (!qt()) try {
			tn(h);
		} catch (e) {
			Kt(e);
		}
	}, Xt = function(e) {
		var t = [...arguments].slice(1);
		if (!m) try {
			return e(...t);
		} catch (e) {
			Kt(e);
		} finally {
			Yt();
		}
	}, Z = /* @__PURE__ */ new Map(), Zt = () => performance.now(), Qt = (e, t) => Math.ceil(e / t) * t, $t = () => 2147483648, en = (e) => {
		var t = (e - gn.buffer.byteLength + 65535) / 65536 | 0;
		try {
			return gn.grow(t), te(), 1;
		} catch {}
	}, tn = (e) => {
		h = e, Jt(e);
	};
	(() => {
		let e = W.prototype;
		Object.assign(e, {
			isAliasOf(e) {
				if (!(this instanceof W) || !(e instanceof W)) return !1;
				var t = this.$$.ptrType.registeredClass, n = this.$$.ptr;
				e.$$ = e.$$;
				for (var r = e.$$.ptrType.registeredClass, i = e.$$.ptr; t.baseClass;) n = t.upcast(n), t = t.baseClass;
				for (; r.baseClass;) i = r.upcast(i), r = r.baseClass;
				return t === r && n === i;
			},
			clone() {
				if (this.$$.ptr || Me(this), this.$$.preservePointerOnDelete) return this.$$.count.value += 1, this;
				var e = U(Object.create(Object.getPrototypeOf(this), { $$: { value: je(this.$$) } }));
				return e.$$.count.value += 1, e.$$.deleteScheduled = !1, e;
			},
			delete() {
				this.$$.ptr || Me(this), this.$$.deleteScheduled && !this.$$.preservePointerOnDelete && I("Object already scheduled for deletion"), De(this), ke(this.$$), this.$$.preservePointerOnDelete || (this.$$.smartPtr = void 0, this.$$.ptr = void 0);
			},
			isDeleted() {
				return !this.$$.ptr;
			},
			deleteLater() {
				return this.$$.ptr || Me(this), this.$$.deleteScheduled && !this.$$.preservePointerOnDelete && I("Object already scheduled for deletion"), Ae.push(this), Ae.length, this.$$.deleteScheduled = !0, this;
			}
		});
		let t = Symbol.dispose;
		t && (e[t] = e.delete);
	})(), Object.assign(J.prototype, {
		getPointee(e) {
			return this.rawGetPointee && (e = this.rawGetPointee(e)), e;
		},
		destructor(e) {
			var t, n;
			(t = (n = this).rawDestructor) == null || t.call(n, e);
		},
		readValueFromPointer: j,
		fromWireType: We
	}), r.noExitRuntime && (S = r.noExitRuntime), r.print && r.print, r.printErr && (f = r.printErr), r.wasmBinary && (p = r.wasmBinary), r.arguments && r.arguments, r.thisProgram && r.thisProgram;
	var Q = r.preInit;
	if (Q) for (typeof Q == "function" && (r.preInit = Q = [Q]); Q.length > 0;) Q.shift()();
	var nn, rn, an, on, sn, $, cn, ln, un, dn, fn, pn, mn, hn, gn, _n;
	function vn(e) {
		nn = e.sa, rn = r._malloc = e.ta, an = r._free = e.ua, on = e.va, sn = e.xa, $ = e.ya, cn = e.za, ln = e.Aa, un = e.Ba, dn = e.Ca, fn = e.Da, pn = e.Ea, mn = e.Fa, hn = qe.iiij = e.Ga, gn = e.qa, _n = e.wa;
	}
	var yn = {
		ca: (e, t) => T(e)(t),
		s: (e) => {
			var t = new D(e);
			return t.get_caught() || (t.set_caught(!0), ge--), t.set_rethrown(!1), O.push(t), on(e);
		},
		J: () => {
			$(0, 0);
			var e = O.pop();
			pn(e.excPtr), k = null;
		},
		a: () => _e([]),
		j: (e) => _e([e]),
		m: (e, t) => _e([e, t]),
		ha: () => {
			O.length || v("no exception to throw");
			var e = O[O.length - 1], t = e.excPtr;
			e.set_rethrown(!0), e.set_caught(!1), ge++, fn(t), t = k = new _(t), ve(t);
		},
		r: (e, t, n) => {
			new D(e).init(t, n), fn(e), e = k = new _(e), ge++, ve(e);
		},
		e: (e) => {
			e = k == null ? k = new _(e) : k, ye(e);
		},
		ga: () => v(""),
		V: (e) => {
			var t = M[e];
			delete M[e];
			var n = t.rawConstructor, r = t.rawDestructor, i = t.valueSize, a = t.isTrivial, o = t.fields, s = o.map((e) => e.getterReturnTypeID).concat(o.map((e) => e.setterArgumentTypeID));
			B([e], s, (e) => {
				var s = {};
				for (var [c, l] of o.entries()) {
					let t = e[c], n = l.getter, r = l.getterContext, i = e[c + o.length], a = l.setter, d = l.setterContext;
					var u = !i.usesDestructor && !i.argStackAlloc ? (e, t) => a(d, e, i.toWireType(null, t)) : (e, t) => {
						var n = [];
						a(d, e, i.toWireType(n, t)), be(n);
					};
					s[l.fieldName] = {
						read: (e) => t.fromWireType(n(r, e)),
						write: u,
						optional: t.optional
					};
				}
				return [{
					name: t.name,
					fromWireType: (e) => {
						var t = {};
						for (var n in s) t[n] = s[n].read(e);
						return r(e), t;
					},
					toWireType: (e, t) => {
						for (var o in s) if (!(o in t) && !s[o].optional) throw TypeError(`Missing field: "${o}"`);
						var c;
						for (o in a && !e ? (c = xe(i), we(c, i)) : (c = n(), e && e.push(r, c)), s) s[o].write(c, t[o]);
						return c;
					},
					readValueFromPointer: j,
					usesDestructor: !a,
					argStackAlloc: a
				}];
			});
		},
		Y: () => {},
		ka: (e, t, n, r) => {
			t = H(t), R(e, {
				name: t,
				fromWireType: function(e) {
					return !!e;
				},
				toWireType: function(e, t) {
					return t ? n : r;
				},
				readValueFromPointer: function(e) {
					return this.fromWireType(V[e]);
				}
			});
		},
		pa: (e, t, n, r, i, a, o, s, c, l, u, d, f) => {
			u = H(u), a = Y(i, a), s && (s = Y(o, s)), l && (l = Y(c, l)), f = Y(d, f);
			var p = et(u);
			$e(p, function() {
				it(`Cannot construct ${u} due to unbound types`, [r]);
			}), B([
				e,
				t,
				n
			], r ? [r] : [], (t) => {
				t = t[0];
				var n, i;
				r ? (n = t.registeredClass, i = n.instancePrototype) : i = W.prototype;
				var o = Ke(u, function() {
					var e = [...arguments];
					if (Object.getPrototypeOf(this) !== c) throw new F(`Use 'new' to construct ${u}`);
					if (d.constructor_body === void 0) throw new F(`${u} has no accessible constructor`);
					var t = d.constructor_body[e.length];
					if (t === void 0) throw new F(`Tried to invoke ctor of ${u} with invalid number of parameters (${e.length}) - expected (${Object.keys(d.constructor_body).toString()}) parameters instead!`);
					return t.apply(this, e);
				}), c = Object.create(i, { constructor: { value: o } });
				o.prototype = c;
				var d = new Ne(u, o, c, f, n, a, s, l);
				if (d.baseClass) {
					var m;
					(m = d.baseClass).__derivedClasses != null || (m.__derivedClasses = []), d.baseClass.__derivedClasses.push(d);
				}
				var h = new J(u, d, !0, !1, !1), g = new J(u + "*", d, !1, !1, !1), _ = new J(u + " const*", d, !1, !0, !1);
				return Ue[e] = {
					pointerType: g,
					constPointerType: _
				}, tt(p, o), [
					h,
					g,
					_
				];
			});
		},
		oa: (e, t, n, r, i, a) => {
			var o = lt(t, n);
			i = Y(r, i), B([], [e], (e) => {
				e = e[0];
				var n = `constructor ${e.name}`;
				if (e.registeredClass.constructor_body === void 0 && (e.registeredClass.constructor_body = []), e.registeredClass.constructor_body[t - 1] !== void 0) throw new F(`Cannot register multiple constructors with identical number of parameters (${t - 1}) for class '${e.name}'! Overload resolution is currently only performed using the parameter count, not actual type info!`);
				return e.registeredClass.constructor_body[t - 1] = () => {
					it(`Cannot construct ${e.name} due to unbound types`, o);
				}, B([], o, (r) => (r.splice(1, 0, null), e.registeredClass.constructor_body[t - 1] = ct(n, r, null, i, a), [])), [];
			});
		},
		E: (e, t, n, r, i, a, o, s, c) => {
			var l = lt(n, r);
			t = H(t), t = ut(t), a = Y(i, a), B([], [e], (e) => {
				e = e[0];
				var r = `${e.name}.${t}`;
				t.startsWith("@@") && (t = Symbol[t.substring(2)]), s && e.registeredClass.pureVirtualFunctions.push(t);
				function i() {
					it(`Cannot call ${r} due to unbound types`, l);
				}
				var u = e.registeredClass.instancePrototype, d = u[t];
				return d === void 0 || d.overloadTable === void 0 && d.className !== e.name && d.argCount === n - 2 ? (i.argCount = n - 2, i.className = e.name, u[t] = i) : (Ze(u, t, r), u[t].overloadTable[n - 2] = i), B([], l, (i) => {
					var s = ct(r, i, e, a, o, c);
					return u[t].overloadTable === void 0 ? (s.argCount = n - 2, u[t] = s) : u[t].overloadTable[n - 2] = s, [];
				}), [];
			});
		},
		ia: (e) => R(e, pt),
		Q: (e, t, n) => {
			t = H(t), R(e, {
				name: t,
				fromWireType: (e) => e,
				toWireType: (e, t) => t,
				readValueFromPointer: gt(t, n)
			});
		},
		R: (e, t, n, r, i, a, o) => {
			var s = lt(t, n);
			e = H(e), e = ut(e), i = Y(r, i), $e(e, function() {
				it(`Cannot call ${e} due to unbound types`, s);
			}, t - 1), B([], s, (n) => {
				var r = [n[0], null].concat(n.slice(1));
				return tt(e, ct(e, r, null, i, a, o), t - 1), [];
			});
		},
		z: (e, t, n, r, i) => {
			t = H(t);
			let a = r === 0, o = (e) => e;
			if (a) {
				var s = 32 - 8 * n;
				o = (e) => e << s >>> s, i = o(i);
			}
			R(e, {
				name: t,
				fromWireType: o,
				toWireType: (e, t) => t,
				readValueFromPointer: yt(t, n, r !== 0)
			});
		},
		ma: (e, t, n, r) => {
			n = H(n), r = H(r), B([], [e, t], (e) => {
				let t = e[0];
				return bt(t.registeredClass.instancePrototype, n, r), [];
			});
		},
		u: (e, t, n) => {
			var r = [
				Int8Array,
				Uint8Array,
				Int16Array,
				Uint16Array,
				Int32Array,
				Uint32Array,
				Float32Array,
				Float64Array,
				Uint8ClampedArray
			][t];
			function i(e) {
				var t = E[e >> 2], n = E[e + 4 >> 2];
				return new r(b.buffer, n, t);
			}
			n = H(n), R(e, {
				name: n,
				fromWireType: i,
				readValueFromPointer: i
			}, { ignoreDuplicateRegistrations: !0 });
		},
		U: (e) => {
			R(e, xt);
		},
		ja: (e, t) => {
			t = H(t), R(e, {
				name: t,
				fromWireType(e) {
					var t = E[e >> 2], n = Et(e + 4, t, !0);
					return an(e), n;
				},
				toWireType(e, t) {
					t instanceof ArrayBuffer && (t = new Uint8Array(t));
					var n, r = typeof t == "string";
					r || ArrayBuffer.isView(t) && t.BYTES_PER_ELEMENT == 1 || I("Cannot pass non-string to std::string"), n = r ? Dt(t) : t.length;
					var i = rn(4 + n + 1), a = i + 4;
					return E[i >> 2] = n, r ? kt(t, a, n + 1) : V.set(t, a), i;
				},
				readValueFromPointer: j
			});
		},
		M: (e, t, n) => {
			n = H(n);
			var r, i, a;
			t === 2 ? (r = jt, i = Ft, a = Nt) : (r = Mt, i = It, a = Pt), R(e, {
				name: n,
				fromWireType: (e) => {
					var n = E[e >> 2], i = r(e + 4, n * t, !0);
					return an(e), i;
				},
				toWireType: (e, r) => {
					typeof r != "string" && I(`Cannot pass non-string to C++ string type ${n}`);
					var o = a(r), s = rn(4 + o + t);
					return E[s >> 2] = o / t, i(r, s + 4, o + t), s;
				},
				readValueFromPointer: j
			});
		},
		C: (e, t, n, r, i, a, o, s) => {
			M[e] = {
				name: H(t),
				rawConstructor: Y(n, r),
				rawDestructor: Y(i, a),
				valueSize: o,
				isTrivial: !!s,
				fields: []
			};
		},
		W: (e, t, n, r, i, a, o, s, c, l) => {
			M[e].fields.push({
				fieldName: H(t),
				getterReturnTypeID: n,
				getter: Y(r, i),
				getterContext: a,
				setterArgumentTypeID: o,
				setter: Y(s, c),
				setterContext: l
			});
		},
		la: (e, t) => {
			t = H(t), R(e, {
				isVoid: !0,
				name: t,
				fromWireType: () => {},
				toWireType: () => {}
			});
		},
		fa: () => {
			S = !1, Lt = 0;
		},
		T: (e, t, n) => {
			var [r, ...i] = Ut(e, t), a = i.map((e) => e.readValueFromPointer.bind(e));
			e--;
			var o = Vt[`${n}${r.isVoid ? "f" : "t"}${e}`], s = o(...r.isVoid ? a : [r.toWireType.bind(r), ...a]);
			return zt(Ke(`methodCaller<(${i.map((e) => e.name)}) => ${r.name}>`, s));
		},
		da: ft,
		B: (e) => e ? (e = Gt(e), K.toHandle(globalThis[e])) : K.toHandle(globalThis),
		L: (e) => {
			e > 9 && (G[e + 1] += 1);
		},
		S: (e, t, n, r, i) => Rt[e](t, n, r, i),
		na: (e) => {
			be(K.toValue(e)), ft(e);
		},
		aa: (e, t) => {
			if (Z.has(e) && (clearTimeout(Z.get(e)), Z.delete(e)), !t) return 0;
			var n = setTimeout(() => {
				Z.delete(e), Xt(sn, e, Zt());
			}, t);
			return Z.set(e, n), 0;
		},
		ba: (e) => {
			var t = V.length;
			e >>>= 0;
			var n = $t();
			if (e > n) return !1;
			for (var r = 1; r <= 4; r *= 2) {
				var i = t * (1 + .2 / r);
				if (i = Math.min(i, e + 100663296), en(Math.min(n, Qt(Math.max(e, i), 65536)))) return !0;
			}
			return !1;
		},
		$: function(e, t, n) {
			var r = w();
			try {
				return T(e)(t, n);
			} catch (e) {
				if (C(r), !(e instanceof g)) throw e;
				$(1, 0);
			}
		},
		O: function(e, t, n, r) {
			var i = w();
			try {
				return T(e)(t, n, r);
			} catch (e) {
				if (C(i), !(e instanceof g)) throw e;
				$(1, 0);
			}
		},
		I: function(e, t, n, r, i, a) {
			var o = w();
			try {
				return T(e)(t, n, r, i, a);
			} catch (e) {
				if (C(o), !(e instanceof g)) throw e;
				$(1, 0);
			}
		},
		b: function(e, t) {
			var n = w();
			try {
				return T(e)(t);
			} catch (e) {
				if (C(n), !(e instanceof g)) throw e;
				$(1, 0);
			}
		},
		A: function(e, t, n, r) {
			var i = w();
			try {
				return T(e)(t, n, r);
			} catch (e) {
				if (C(i), !(e instanceof g)) throw e;
				$(1, 0);
			}
		},
		h: function(e, t, n) {
			var r = w();
			try {
				return T(e)(t, n);
			} catch (e) {
				if (C(r), !(e instanceof g)) throw e;
				$(1, 0);
			}
		},
		D: function(e, t, n, r, i) {
			var a = w();
			try {
				return T(e)(t, n, r, i);
			} catch (e) {
				if (C(a), !(e instanceof g)) throw e;
				$(1, 0);
			}
		},
		g: function(e, t, n, r) {
			var i = w();
			try {
				return T(e)(t, n, r);
			} catch (e) {
				if (C(i), !(e instanceof g)) throw e;
				$(1, 0);
			}
		},
		l: function(e, t, n, r, i) {
			var a = w();
			try {
				return T(e)(t, n, r, i);
			} catch (e) {
				if (C(a), !(e instanceof g)) throw e;
				$(1, 0);
			}
		},
		n: function(e, t, n, r, i, a) {
			var o = w();
			try {
				return T(e)(t, n, r, i, a);
			} catch (e) {
				if (C(o), !(e instanceof g)) throw e;
				$(1, 0);
			}
		},
		K: function(e, t, n, r, i, a, o) {
			var s = w();
			try {
				return T(e)(t, n, r, i, a, o);
			} catch (e) {
				if (C(s), !(e instanceof g)) throw e;
				$(1, 0);
			}
		},
		P: function(e, t, n, r, i, a, o) {
			var s = w();
			try {
				return T(e)(t, n, r, i, a, o);
			} catch (e) {
				if (C(s), !(e instanceof g)) throw e;
				$(1, 0);
			}
		},
		x: function(e, t, n, r, i, a, o, s) {
			var c = w();
			try {
				return T(e)(t, n, r, i, a, o, s);
			} catch (e) {
				if (C(c), !(e instanceof g)) throw e;
				$(1, 0);
			}
		},
		H: function(e, t, n, r, i, a, o, s, c) {
			var l = w();
			try {
				return T(e)(t, n, r, i, a, o, s, c);
			} catch (e) {
				if (C(l), !(e instanceof g)) throw e;
				$(1, 0);
			}
		},
		X: function(e, t, n, r, i) {
			var a = w();
			try {
				return hn(e, t, n, r, i);
			} catch (e) {
				if (C(a), !(e instanceof g)) throw e;
				$(1, 0);
			}
		},
		c: function(e) {
			var t = w();
			try {
				T(e)();
			} catch (e) {
				if (C(t), !(e instanceof g)) throw e;
				$(1, 0);
			}
		},
		i: function(e, t) {
			var n = w();
			try {
				T(e)(t);
			} catch (e) {
				if (C(n), !(e instanceof g)) throw e;
				$(1, 0);
			}
		},
		Z: function(e, t, n) {
			var r = w();
			try {
				T(e)(t, n);
			} catch (e) {
				if (C(r), !(e instanceof g)) throw e;
				$(1, 0);
			}
		},
		d: function(e, t, n) {
			var r = w();
			try {
				T(e)(t, n);
			} catch (e) {
				if (C(r), !(e instanceof g)) throw e;
				$(1, 0);
			}
		},
		N: function(e, t, n, r, i, a, o, s, c) {
			var l = w();
			try {
				T(e)(t, n, r, i, a, o, s, c);
			} catch (e) {
				if (C(l), !(e instanceof g)) throw e;
				$(1, 0);
			}
		},
		G: function(e, t, n, r, i) {
			var a = w();
			try {
				T(e)(t, n, r, i);
			} catch (e) {
				if (C(a), !(e instanceof g)) throw e;
				$(1, 0);
			}
		},
		f: function(e, t, n, r) {
			var i = w();
			try {
				T(e)(t, n, r);
			} catch (e) {
				if (C(i), !(e instanceof g)) throw e;
				$(1, 0);
			}
		},
		F: function(e, t, n, r, i, a, o) {
			var s = w();
			try {
				T(e)(t, n, r, i, a, o);
			} catch (e) {
				if (C(s), !(e instanceof g)) throw e;
				$(1, 0);
			}
		},
		k: function(e, t, n, r, i) {
			var a = w();
			try {
				T(e)(t, n, r, i);
			} catch (e) {
				if (C(a), !(e instanceof g)) throw e;
				$(1, 0);
			}
		},
		_: function(e, t, n, r, i, a, o, s) {
			var c = w();
			try {
				T(e)(t, n, r, i, a, o, s);
			} catch (e) {
				if (C(c), !(e instanceof g)) throw e;
				$(1, 0);
			}
		},
		o: function(e, t, n, r, i, a) {
			var o = w();
			try {
				T(e)(t, n, r, i, a);
			} catch (e) {
				if (C(o), !(e instanceof g)) throw e;
				$(1, 0);
			}
		},
		t: function(e, t, n, r, i, a, o) {
			var s = w();
			try {
				T(e)(t, n, r, i, a, o);
			} catch (e) {
				if (C(s), !(e instanceof g)) throw e;
				$(1, 0);
			}
		},
		y: function(e, t, n, r, i, a, o, s) {
			var c = w();
			try {
				T(e)(t, n, r, i, a, o, s);
			} catch (e) {
				if (C(c), !(e instanceof g)) throw e;
				$(1, 0);
			}
		},
		q: function(e, t, n, r, i, a, o, s, c) {
			var l = w();
			try {
				T(e)(t, n, r, i, a, o, s, c);
			} catch (e) {
				if (C(l), !(e instanceof g)) throw e;
				$(1, 0);
			}
		},
		v: function(e, t, n, r, i, a, o, s, c, l) {
			var u = w();
			try {
				T(e)(t, n, r, i, a, o, s, c, l);
			} catch (e) {
				if (C(u), !(e instanceof g)) throw e;
				$(1, 0);
			}
		},
		p: function(e, t, n, r, i, a, o, s, c, l, u) {
			var d = w();
			try {
				T(e)(t, n, r, i, a, o, s, c, l, u);
			} catch (e) {
				if (C(d), !(e instanceof g)) throw e;
				$(1, 0);
			}
		},
		w: (e) => e,
		ea: Jt
	}, bn = await async function() {
		function e(e) {
			return bn = e.exports, vn(bn), te(), bn;
		}
		var t = ue(), n = r.instantiateWasm;
		return n ? new Promise((r) => {
			n(t, (t) => r(e(t)));
		}) : (y != null || (y = ae()), function(t) {
			return e(t.instance);
		}(await le(p, y, t)));
	}();
	return await async function() {
		var e;
		ne();
		var t = r.setStatus;
		t && (t("Running..."), await new Promise((e) => setTimeout(e, 1)), setTimeout(t, 1, "")), m || (re(), (e = r.onRuntimeInitialized) == null || e.call(r), ie());
	}(), r;
}
// src/reader/index.ts
function S(e) {
	return m(x, e);
}
function C() {
	return oe(x);
}
function w(e) {
	return S({
		overrides: e,
		equalityFn: Object.is,
		fireImmediately: !0
	});
}
function he(e) {
	S({
		overrides: e,
		equalityFn: Object.is,
		fireImmediately: !1
	});
}
async function T(e, t) {
	return le(x, e, t);
}
async function E(e, t) {
	return T(e, t);
}
async function D(e, t) {
	return T(e, t);
}
var O = "8451d7fe72f3d8e9ced56c7b6805e8bab88a0c218bfcd25c47c0a999e8188f3d";
export { pe as BARCODE_FORMATS, h as BARCODE_HRI_LABELS, fe as BARCODE_META_FORMATS, d as BARCODE_SYMBOLOGIES, p as BINARIZERS, te as CHARACTER_SETS, se as CONTENT_TYPES, t as CREATABLE_BARCODE_FORMATS, g as EAN_ADD_ON_SYMBOLS, b as GS1_BARCODE_FORMATS, f as INDUSTRIAL_BARCODE_FORMATS, r as LINEAR_BARCODE_FORMATS, n as MATRIX_BARCODE_FORMATS, l as READABLE_BARCODE_FORMATS, ie as RETAIL_BARCODE_FORMATS, v as TEXT_MODES, ce as ZXING_CPP_COMMIT, O as ZXING_WASM_SHA256, ne as ZXING_WASM_VERSION, e as barcodeFormats, de as binarizers, ee as characterSets, y as contentTypes, ae as defaultReaderOptions, _ as eanAddOnSymbols, re as encodeFormat, s as encodeFormats, c as formatToLabel, u as formatToSymbology, w as getZXingModule, i as linearBarcodeFormats, a as matrixBarcodeFormats, S as prepareZXingModule, C as purgeZXingModule, T as readBarcodes, D as readBarcodesFromImageData, E as readBarcodesFromImageFile, he as setZXingModuleOverrides, o as symbologyToFormats, ue as textModes };
