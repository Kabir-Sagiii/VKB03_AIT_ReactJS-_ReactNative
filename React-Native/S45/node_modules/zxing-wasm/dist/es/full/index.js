import { A as e, C as t, D as n, E as r, F as i, I as a, L as o, M as s, N as c, O as l, P as u, S as d, T as f, _ as p, a as m, b as h, c as g, d as _, f as v, g as ee, h as te, i as ne, j as re, k as ie, l as ae, m as oe, n as y, o as se, p as ce, r as le, s as ue, t as de, u as fe, v as pe, w as b, x as me, y as he } from "../share.js";
// src/full/zxing_full.js
function ge(e, t, n) {
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
	var o = "./this.program", s = (e, t) => {
		throw t;
	}, c = void 0, l = "";
	function u(e) {
		return r.locateFile ? r.locateFile(e, l) : l + e;
	}
	var d, f;
	if (i || a || typeof fetch == "function") {
		try {
			l = new URL(".", c).href;
		} catch {}
		a && (f = (e) => {
			var t = new XMLHttpRequest();
			return t.open("GET", e, !1), t.responseType = "arraybuffer", t.send(null), new Uint8Array(t.response);
		}), d = async (e) => {
			var t = await fetch(e, { credentials: "same-origin" });
			if (t.ok) return t.arrayBuffer();
			throw Error(t.status + " : " + t.url);
		};
	}
	var p = console.log.bind(console), m = console.error.bind(console), h, g = !1, _;
	class v {}
	class ee extends v {
		constructor(e) {
			super(), this.excPtr = e;
		}
	}
	function te() {
		return Tn.buffer;
	}
	function ne() {
		var e;
		if (!(b != null && (e = b.buffer) != null && e.resizable)) {
			var t = te();
			b = new Int8Array(t), Et = new Int16Array(t), r.HEAPU8 = k = new Uint8Array(t), J = new Uint16Array(t), Dt = new Int32Array(t), E = new Uint32Array(t), Ct = new Float32Array(t), wt = new Float64Array(t);
		}
	}
	function re() {
		var e = r.preRun;
		e && (typeof e == "function" && (e = [e]), x.push(...e)), me(x);
	}
	function ie() {
		$.Ca();
	}
	function ae() {
		var e = r.postRun;
		e && (typeof e == "function" && (e = [e]), he.push(...e)), me(he);
	}
	function oe(e) {
		var t;
		throw (t = r.onAbort) == null || t.call(r, e), e = `Aborted(${e})`, m(e), g = !0, e += ". Build with -sASSERTIONS for more info.", new WebAssembly.RuntimeError(e);
	}
	var y;
	function se() {
		return u("zxing_full.wasm");
	}
	function ce(e) {
		if (e == y && h) return new Uint8Array(h);
		if (f) return f(e);
		throw "both async and sync fetching of the wasm failed";
	}
	async function le(e) {
		if (!h) try {
			return await d(e);
		} catch {}
		return ce(e);
	}
	async function ue(e, t) {
		try {
			var n = await le(e);
			return await WebAssembly.instantiate(n, t);
		} catch (e) {
			m(`failed to asynchronously prepare wasm: ${e}`), oe(e);
		}
	}
	async function de(e, t, n) {
		if (!e) try {
			var r = fetch(t, { credentials: "same-origin" });
			return await WebAssembly.instantiateStreaming(r, n);
		} catch (e) {
			m(`wasm streaming compile failed: ${e}`), m("falling back to ArrayBuffer instantiation");
		}
		return ue(t, n);
	}
	function fe() {
		return { a: On };
	}
	class pe {
		constructor(e) {
			ge(this, "name", "ExitStatus"), this.message = `Program terminated with exit(${e})`, this.status = e;
		}
	}
	var b, me = (e) => {
		for (; e.length > 0;) e.shift()(r);
	}, he = [], x = [], S = !0, C = (e) => vn(e), w = () => bn(), _e = [], T = (e) => {
		var t = _e[e];
		return t || (_e[e] = t = En.get(e)), t;
	}, E;
	class ve {
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
	var D = [], ye = 0, O = null, be = (e) => _n(e), xe = (e) => {
		var t = O == null ? void 0 : O.excPtr;
		if (!t) return be(0), 0;
		var n = new ve(t);
		n.set_adjusted_ptr(t);
		var r = n.get_type();
		if (!r) return be(0), t;
		for (var i of e) {
			if (!i || i === r) break;
			var a = n.ptr + 16;
			if (Cn(i, r, a)) return be(i), t;
		}
		return be(r), t;
	}, Se = (e) => {
		throw e;
	}, Ce = (e) => {
		throw e;
	}, k, we = globalThis.TextDecoder && new TextDecoder(), Te = (e, t, n, r) => {
		var i = t + n;
		if (r) return i;
		for (; e[t] && !(t >= i);) ++t;
		return t;
	}, Ee = function(e) {
		let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, n = arguments.length > 2 ? arguments[2] : void 0, r = arguments.length > 3 ? arguments[3] : void 0;
		var i = Te(e, t, n, r);
		if (i - t > 16 && e.buffer && we) return we.decode(e.subarray(t, i));
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
	}, De = {}, Oe = (e, t, n) => {
		var r = t == null && e >= 1024 && e < 433192;
		if (r) {
			var i = De[e];
			if (i != null) return i;
		}
		return i = e ? Ee(k, e, t, n) : "", r && (De[e] = i), i;
	};
	function A(e) {
		return this.fromWireType(E[e >> 2]);
	}
	var ke = (e) => {
		for (; e.length;) {
			var t = e.pop();
			e.pop()(t);
		}
	}, Ae = (e) => yn(e), j = {}, M = {}, N = {};
	class P extends Error {
		constructor(e) {
			super(e), this.name = "BindingError";
		}
	}
	var F = (e) => {
		throw new P(e);
	}, I = {};
	function je(e, t) {
		let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
		var r = t.name;
		if (e || F(`type "${r}" must have a positive integer typeid pointer`), N[e]) {
			if (n.ignoreDuplicateRegistrations) return;
			F(`Cannot register type '${r}' twice`);
		}
		if (N[e] = t, delete I[e], M[e]) {
			var i = M[e];
			delete M[e], i.forEach((e) => e());
		}
	}
	function L(e, t) {
		return je(e, t, arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {});
	}
	class Me extends Error {
		constructor(e) {
			super(e), this.name = "InternalError";
		}
	}
	var R = (e) => {
		throw new Me(e);
	}, z = (e, t, n) => {
		e.forEach((e) => I[e] = t);
		function r(t) {
			var r = n(t);
			r.length !== e.length && R("Mismatched type converter count");
			for (var i = 0; i < e.length; ++i) L(e[i], r[i]);
		}
		var i = Array(t.length), a = [], o = 0;
		for (let [e, n] of t.entries()) if (N[n]) i[e] = N[n];
		else {
			var s, c, l;
			a.push(n), ((l = (s = M)[c = n]) == null ? s[c] = [] : l).push(() => {
				i[e] = N[n], ++o, o === a.length && r(i);
			});
		}
		a.length === 0 && r(i);
	}, Ne = (e, t) => k.fill(0, e, e + t), Pe = {}, B = (e) => {
		var t = e, n = e >= 1024 && e < 433192;
		if (n) {
			var r = Pe[t];
			if (r != null) return r;
		}
		for (var i = "";;) {
			var a = k[e++];
			if (!a) break;
			i += String.fromCharCode(a);
		}
		return n && (Pe[t] = i), i;
	}, Fe = !1, Ie = () => {}, Le = (e) => {
		e.smartPtr ? e.smartPtrType.rawDestructor(e.smartPtr) : e.ptrType.registeredClass.rawDestructor(e.ptr);
	}, Re = (e) => {
		--e.count.value, e.count.value === 0 && Le(e);
	}, V = (e) => globalThis.FinalizationRegistry ? (Fe = new FinalizationRegistry((e) => {
		Re(e.$$);
	}), V = (e) => {
		var t = e.$$;
		if (t.smartPtr) {
			var n = { $$: t };
			Fe.register(e, n, e);
		}
		return e;
	}, Ie = (e) => Fe.unregister(e), V(e)) : (V = (e) => e, e), ze = [], Be = (e) => ({
		count: e.count,
		deleteScheduled: e.deleteScheduled,
		preservePointerOnDelete: e.preservePointerOnDelete,
		ptr: e.ptr,
		ptrType: e.ptrType,
		smartPtr: e.smartPtr,
		smartPtrType: e.smartPtrType
	}), Ve = (e) => {
		F(function(e) {
			return e.$$.ptrType.registeredClass.name;
		}(e) + " instance already deleted");
	};
	function H() {}
	function He(e, t, n, r, i, a, o, s) {
		this.name = e, this.constructor = t, this.instancePrototype = n, this.rawDestructor = r, this.baseClass = i, this.getActualType = a, this.upcast = o, this.downcast = s, this.pureVirtualFunctions = [];
	}
	var Ue = (e) => {
		if (e === null) return "null";
		var t = typeof e;
		return t === "object" || t === "array" || t === "function" ? e.toString() : "" + e;
	}, We = (e, t, n) => {
		for (; t !== n;) t.upcast || F(`Expected null or instance of ${n.name}, got an instance of ${t.name}`), e = t.upcast(e), t = t.baseClass;
		return e;
	};
	function Ge(e, t) {
		if (t === null) return this.isReference && F(`null is not a valid ${this.name}`), 0;
		t.$$ || F(`Cannot pass "${Ue(t)}" as a ${this.name}`), t.$$.ptr || F(`Cannot pass deleted object as a pointer of type ${this.name}`);
		var n = t.$$.ptrType.registeredClass;
		return We(t.$$.ptr, n, this.registeredClass);
	}
	var Ke = [], U = [
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
	], W = {
		toValue: (e) => (e || F(`Cannot use deleted val. handle = ${e}`), U[e]),
		toHandle: (e) => {
			switch (e) {
				case void 0: return 2;
				case null: return 4;
				case !0: return 6;
				case !1: return 8;
				default: {
					let t = Ke.pop() || U.length;
					return U[t] = e, U[t + 1] = 1, t;
				}
			}
		}
	};
	function qe(e, t) {
		var n;
		if (t === null) return this.isReference && F(`null is not a valid ${this.name}`), this.isSmartPointer ? (n = this.rawConstructor(), e !== null && e.push(this.rawDestructor, n), n) : 0;
		t && t.$$ || F(`Cannot pass "${Ue(t)}" as a ${this.name}`), t.$$.ptr || F(`Cannot pass deleted object as a pointer of type ${this.name}`), !this.isConst && t.$$.ptrType.isConst && F(`Cannot convert argument of type ${t.$$.smartPtrType ? t.$$.smartPtrType.name : t.$$.ptrType.name} to parameter type ${this.name}`);
		var r = t.$$.ptrType.registeredClass;
		if (n = We(t.$$.ptr, r, this.registeredClass), this.isSmartPointer) switch (t.$$.smartPtr === void 0 && F("Passing raw pointer to smart pointer is illegal"), this.sharingPolicy) {
			case 0:
				t.$$.smartPtrType === this ? n = t.$$.smartPtr : F(`Cannot convert argument of type ${t.$$.smartPtrType ? t.$$.smartPtrType.name : t.$$.ptrType.name} to parameter type ${this.name}`);
				break;
			case 1:
				n = t.$$.smartPtr;
				break;
			case 2:
				if (t.$$.smartPtrType === this) n = t.$$.smartPtr;
				else {
					var i = t.clone();
					n = this.rawShare(n, W.toHandle(() => i.delete())), e !== null && e.push(this.rawDestructor, n);
				}
				break;
			default: F("Unsupported sharing policy");
		}
		return n;
	}
	var Je = (e, t, n) => {
		if (t === n) return e;
		if (n.baseClass === void 0) return null;
		var r = Je(e, t, n.baseClass);
		return r === null ? null : n.downcast(r);
	}, Ye = (e, t) => {
		for (t === void 0 && F("ptr should not be undefined"); e.baseClass;) t = e.upcast(t), e = e.baseClass;
		return t;
	}, Xe = /* @__PURE__ */ new Map(), Ze = (e, t) => (t = Ye(e, t), Xe.get(t)), G = (e, t) => (t.ptrType && t.ptr || R("makeClassHandle requires ptr and ptrType"), !!t.smartPtrType != !!t.smartPtr && R("Both smartPtrType and smartPtr must be specified"), t.count = { value: 1 }, V(Object.create(e, { $$: {
		value: t,
		writable: !0
	} }))), Qe = {};
	function $e(e) {
		var t = this.getPointee(e);
		if (!t) return this.destructor(e), null;
		var n = Ze(this.registeredClass, t);
		if (n !== void 0) {
			if (n.$$.count.value === 0) return n.$$.ptr = t, n.$$.smartPtr = e, n.clone();
			var r = n.clone();
			return this.destructor(e), r;
		}
		function i() {
			return this.isSmartPointer ? G(this.registeredClass.instancePrototype, {
				ptrType: this.pointeeType,
				ptr: t,
				smartPtrType: this,
				smartPtr: e
			}) : G(this.registeredClass.instancePrototype, {
				ptrType: this,
				ptr: e
			});
		}
		var a = Qe[this.registeredClass.getActualType(t)];
		if (!a) return i.call(this);
		var o = this.isConst ? a.constPointerType : a.pointerType, s = Je(t, this.registeredClass, o.registeredClass);
		return s === null ? i.call(this) : this.isSmartPointer ? G(o.registeredClass.instancePrototype, {
			ptrType: o,
			ptr: s,
			smartPtrType: this,
			smartPtr: e
		}) : G(o.registeredClass.instancePrototype, {
			ptrType: o,
			ptr: s
		});
	}
	function et(e, t) {
		if (t === null) return this.isReference && F(`null is not a valid ${this.name}`), 0;
		t.$$ || F(`Cannot pass "${Ue(t)}" as a ${this.name}`), t.$$.ptr || F(`Cannot pass deleted object as a pointer of type ${this.name}`), t.$$.ptrType.isConst && F(`Cannot convert argument of type ${t.$$.ptrType.name} to parameter type ${this.name}`);
		var n = t.$$.ptrType.registeredClass;
		return We(t.$$.ptr, n, this.registeredClass);
	}
	function K(e, t, n, r, i, a, o, s, c, l, u) {
		this.name = e, this.registeredClass = t, this.isReference = n, this.isConst = r, this.isSmartPointer = i, this.pointeeType = a, this.sharingPolicy = o, this.rawGetPointee = s, this.rawConstructor = c, this.rawShare = l, this.rawDestructor = u, !i && t.baseClass === void 0 ? this.toWireType = r ? Ge : et : (this.toWireType = qe, i && (this.usesDestructor = !0));
	}
	var tt = (e, t) => Object.defineProperty(t, "name", { value: e }), nt = {}, rt = (e, t, n) => {
		e = e.replace(/p/g, "i");
		var r = nt[e];
		return r(t, ...n);
	}, it = function(e, t) {
		let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : [];
		return e.includes("j") ? rt(e, t, n) : function(e) {
			return e;
		}(T(t)(...n));
	}, at = (e, t) => function() {
		return it(e, t, [...arguments]);
	}, q = (e, t) => {
		e = B(e);
		var n = function() {
			return e.includes("j") ? at(e, t) : T(t);
		}();
		return typeof n != "function" && F(`unknown function pointer with signature ${e}: ${t}`), n;
	}, ot = (e, t, n) => {
		if (e[t].overloadTable === void 0) {
			var r = e[t];
			e[t] = function() {
				var r = [...arguments];
				return e[t].overloadTable[r.length] || F(`Function '${n}' called with an invalid number of arguments (${r.length}) - expects one of (${e[t].overloadTable})!`), e[t].overloadTable[r.length].apply(this, r);
			}, e[t].overloadTable = [], e[t].overloadTable[r.argCount] = r;
		}
	}, st = (e, t) => Object.prototype.hasOwnProperty.call(e, t), ct = (e, t, n) => {
		st(r, e) ? ((n === void 0 || r[e].overloadTable !== void 0 && r[e].overloadTable[n] !== void 0) && F(`Cannot register public name '${e}' twice`), ot(r, e, e), r[e].overloadTable[n] && F(`Cannot register multiple overloads of a function with the same number of arguments (${n})!`), r[e].overloadTable[n] = t) : (r[e] = t, r[e].argCount = n);
	}, lt = (e) => {
		e = e.replace(/[^a-zA-Z0-9_]/g, "$");
		var t = e.charCodeAt(0);
		return t >= 48 && t <= 57 ? `_${e}` : e;
	}, ut = (e, t, n) => {
		st(r, e) || R("Replacing nonexistent public symbol"), r[e].overloadTable !== void 0 && n !== void 0 ? r[e].overloadTable[n] = t : (r[e] = t, r[e].argCount = n);
	};
	class dt extends Error {}
	var ft = (e) => {
		var t = fn(e), n = B(t);
		return pn(t), n;
	}, pt = (e, t) => {
		var n = [], r = {};
		throw t.forEach(function e(t) {
			r[t] || N[t] || (I[t] ? I[t].forEach(e) : (n.push(t), r[t] = !0));
		}), new dt(`${e}: ` + n.map(ft).join([", "]));
	};
	function mt(e) {
		for (var t = 1; t < e.length; ++t) if (e[t] !== null && e[t].argStackAlloc) return !0;
		return !1;
	}
	var ht = {
		ftfd2: function(e, t, n, r, i, a, o, s, c) {
			return function(e, t) {
				var o = [], l = n(r, s(o, e), c(o, t));
				return i(o), a(l);
			};
		},
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
		ftfn2: function(e, t, n, r, i, a, o, s, c) {
			return function(e, t) {
				return a(n(r, s(null, e), c(null, t)));
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
		ftfs2: function(e, t, n, r, i, a, o, s, c, l, u) {
			return function(e, t) {
				var i = s(), o = n(r, l(null, e), u(null, t));
				return c(i), a(o);
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
	function gt(e) {
		for (var t, n = 1; n < e.length; ++n) if ((t = e[n]) != null && t.usesDestructor) return !0;
		return !1;
	}
	function _t(e, t, n, r, i, a) {
		var o = t.length;
		o < 2 && F("argTypes array size mismatch! Must at least get return value and receiver (this) types!");
		var s = t[1] !== null && n !== null, c = gt(t), l = mt(t), u = l && !a && !c;
		l && !u && (c = !0);
		var d = !t[0].isVoid, f = o - 2, p = t[0], m = t[1], h = [
			e,
			F,
			r,
			i,
			ke,
			p.fromWireType.bind(p),
			m == null ? void 0 : m.toWireType.bind(m)
		];
		u && h.push(w, C);
		for (var g = 2; g < o; ++g) {
			var _ = t[g];
			h.push(_.toWireType.bind(_));
		}
		var v = ht[`${s ? "t" : "f"}${d ? "t" : "f"}${a ? "t" : "f"}${u ? "s" : c ? "d" : "n"}${f}`];
		return tt(e, v(...h));
	}
	var vt = (e, t) => {
		for (var n = [], r = 0; r < e; r++) n.push(E[t + r * 4 >> 2]);
		return n;
	}, yt = (e) => {
		e = e.trim();
		let t = e.indexOf("(");
		return t === -1 ? e : e.slice(0, t);
	}, bt = [], xt = (e) => {
		if (e > 9 && --U[e + 1] === 0) {
			var t = U[e];
			U[e] = void 0;
			var n = bt[e];
			n && (bt[e] = void 0, n(t)), Ke.push(e);
		}
	}, St = {
		name: "emscripten::val",
		fromWireType: (e) => {
			var t = W.toValue(e);
			return xt(e), t;
		},
		toWireType: (e, t) => W.toHandle(t),
		readValueFromPointer: A
	}, Ct, wt, Tt = (e, t) => {
		switch (t) {
			case 4: return function(e) {
				return this.fromWireType(Ct[e >> 2]);
			};
			case 8: return function(e) {
				return this.fromWireType(wt[e >> 3]);
			};
			default: throw TypeError(`invalid float width (${t}): ${e}`);
		}
	}, Et, Dt, J, Ot = (e, t, n) => {
		switch (t) {
			case 1: return n ? (e) => b[e] : (e) => k[e];
			case 2: return n ? (e) => Et[e >> 1] : (e) => J[e >> 1];
			case 4: return n ? (e) => Dt[e >> 2] : (e) => E[e >> 2];
			default: throw TypeError(`invalid integer width (${t}): ${e}`);
		}
	}, kt = (e, t, n) => {
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
	}, At = Object.assign({ optional: !0 }, St), jt = (e) => {
		for (var t = 0, n = 0; n < e.length; ++n) {
			var r = e.codePointAt(n);
			r <= 127 ? t++ : r <= 2047 ? t += 2 : r <= 65535 ? t += 3 : (t += 4, n++);
		}
		return t;
	}, Mt = (e, t, n, r) => {
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
	}, Nt = (e, t, n) => Mt(e, k, t, n), Pt = globalThis.TextDecoder ? new TextDecoder("utf-16le") : void 0, Ft = (e, t, n) => {
		var r = e >> 1, i = Te(J, r, t / 2, n);
		if (i - r > 16 && Pt) return Pt.decode(J.subarray(r, i));
		for (var a = "", o = r; o < i; ++o) {
			var s = J[o];
			a += String.fromCharCode(s);
		}
		return a;
	}, It = (e, t, n) => {
		for (var r = "", i = e >> 2, a = 0; !(a >= t / 4); a++) {
			var o = E[i + a];
			if (!o && !n) break;
			r += String.fromCodePoint(o);
		}
		return r;
	}, Lt = (e) => e.length * 2, Rt = (e) => {
		for (var t = 0, n = 0; n < e.length; ++n) e.codePointAt(n) > 65535 && n++, t += 4;
		return t;
	}, zt = function(e, t) {
		let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 2147483647;
		if (n < 2) return 0;
		n -= 2;
		for (var r = t, i = n < e.length * 2 ? n / 2 : e.length, a = 0; a < i; ++a) {
			var o = e.charCodeAt(a);
			Et[t >> 1] = o, t += 2;
		}
		return Et[t >> 1] = 0, t - r;
	}, Bt = function(e, t) {
		let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 2147483647;
		if (n < 4) return 0;
		for (var r = t, i = r + n - 4, a = 0; a < e.length; ++a) {
			var o = e.codePointAt(a);
			if (o > 65535 && a++, Dt[t >> 2] = o, t += 4, t + 4 > i) break;
		}
		return Dt[t >> 2] = 0, t - r;
	}, Vt = 0, Ht = [], Ut = (e) => {
		var t = Ht.length;
		return Ht.push(e), t;
	}, Wt = (e, t, n) => {
		var r = [], i = e(r, n);
		return r.length && (E[t >> 2] = W.toHandle(r)), i;
	}, Gt = {
		"2t1": (e, t) => (n, r, i, a) => Wt(e, i, new (W.toValue(n))(t(a))),
		"3t1": (e, t) => (n, r, i, a) => Wt(e, i, t(a))
	}, Kt = (e, t) => {
		var n = N[e];
		return n === void 0 && F(`${t} has unknown type ${ft(e)}`), n;
	}, qt = (e, t) => {
		for (var n = Array(e), r = 0; r < e; ++r) n[r] = Kt(E[t + r * 4 >> 2], `parameter ${r}`);
		return n;
	}, Jt = {}, Yt = (e) => {
		var t = Jt[e];
		return t === void 0 ? B(e) : t;
	}, Xt = (e) => {
		if (e instanceof pe || e == "unwind") return _;
		s(0, e);
	}, Zt = () => S || Vt > 0, Qt = (e) => {
		if (_ = e, !Zt()) {
			var t;
			(t = r.onExit) == null || t.call(r, e), g = !0;
		}
		s(0, new pe(e));
	}, $t = () => {
		if (!Zt()) try {
			dn(_);
		} catch (e) {
			Xt(e);
		}
	}, en = function(e) {
		var t = [...arguments].slice(1);
		if (!g) try {
			return e(...t);
		} catch (e) {
			Xt(e);
		} finally {
			$t();
		}
	}, Y = /* @__PURE__ */ new Map(), tn = () => performance.now(), nn = (e, t) => Math.ceil(e / t) * t, rn = () => 2147483648, an = (e) => {
		var t = (e - Tn.buffer.byteLength + 65535) / 65536 | 0;
		try {
			return Tn.grow(t), ne(), 1;
		} catch {}
	}, on = {}, sn = () => o, X = () => {
		if (!X.strings) {
			var e, t, n = {
				USER: "web_user",
				LOGNAME: "web_user",
				PATH: "/",
				PWD: "/",
				HOME: "/home/web_user",
				LANG: ((e = (t = globalThis.navigator) == null ? void 0 : t.language) == null ? "C" : e).replace("-", "_") + ".UTF-8",
				_: sn()
			};
			for (var r in on) on[r] === void 0 ? delete n[r] : n[r] = on[r];
			var i = [];
			for (var r in n) i.push(`${r}=${n[r]}`);
			X.strings = i;
		}
		return X.strings;
	}, cn = (e, t) => t + 2097152 >>> 0 < 4194305 - !!e ? (e >>> 0) + t * 4294967296 : NaN, ln = [
		null,
		[],
		[]
	], un = (e, t) => {
		var n = ln[e];
		!t || t === 10 ? ((e === 1 ? p : m)(Ee(n)), n.length = 0) : n.push(t);
	}, dn = (e) => {
		_ = e, Qt(e);
	};
	(() => {
		let e = H.prototype;
		Object.assign(e, {
			isAliasOf(e) {
				if (!(this instanceof H) || !(e instanceof H)) return !1;
				var t = this.$$.ptrType.registeredClass, n = this.$$.ptr;
				e.$$ = e.$$;
				for (var r = e.$$.ptrType.registeredClass, i = e.$$.ptr; t.baseClass;) n = t.upcast(n), t = t.baseClass;
				for (; r.baseClass;) i = r.upcast(i), r = r.baseClass;
				return t === r && n === i;
			},
			clone() {
				if (this.$$.ptr || Ve(this), this.$$.preservePointerOnDelete) return this.$$.count.value += 1, this;
				var e = V(Object.create(Object.getPrototypeOf(this), { $$: { value: Be(this.$$) } }));
				return e.$$.count.value += 1, e.$$.deleteScheduled = !1, e;
			},
			delete() {
				this.$$.ptr || Ve(this), this.$$.deleteScheduled && !this.$$.preservePointerOnDelete && F("Object already scheduled for deletion"), Ie(this), Re(this.$$), this.$$.preservePointerOnDelete || (this.$$.smartPtr = void 0, this.$$.ptr = void 0);
			},
			isDeleted() {
				return !this.$$.ptr;
			},
			deleteLater() {
				return this.$$.ptr || Ve(this), this.$$.deleteScheduled && !this.$$.preservePointerOnDelete && F("Object already scheduled for deletion"), ze.push(this), ze.length, this.$$.deleteScheduled = !0, this;
			}
		});
		let t = Symbol.dispose;
		t && (e[t] = e.delete);
	})(), Object.assign(K.prototype, {
		getPointee(e) {
			return this.rawGetPointee && (e = this.rawGetPointee(e)), e;
		},
		destructor(e) {
			var t, n;
			(t = (n = this).rawDestructor) == null || t.call(n, e);
		},
		readValueFromPointer: A,
		fromWireType: $e
	}), r.noExitRuntime && (S = r.noExitRuntime), r.print && (p = r.print), r.printErr && (m = r.printErr), r.wasmBinary && (h = r.wasmBinary), r.arguments && r.arguments, r.thisProgram && (o = r.thisProgram);
	var Z = r.preInit;
	if (Z) for (typeof Z == "function" && (r.preInit = Z = [Z]); Z.length > 0;) Z.shift()();
	var fn, pn, mn, hn, gn, Q, _n, vn, yn, bn, xn, Sn, Cn, wn, Tn, En;
	function Dn(e) {
		fn = e.Da, pn = r._free = e.Ea, mn = r._malloc = e.Fa, hn = e.Ga, gn = e.Ia, Q = e.Ja, _n = e.Ka, vn = e.La, yn = e.Ma, bn = e.Na, xn = e.Oa, Sn = e.Pa, Cn = e.Qa, wn = nt.iiij = e.Ra, nt.jiji = e.Sa, Tn = e.Ba, En = e.Ha;
	}
	var On = {
		ja: (e, t) => T(e)(t),
		s: (e) => {
			var t = new ve(e);
			return t.get_caught() || (t.set_caught(!0), ye--), t.set_rethrown(!1), D.push(t), hn(e);
		},
		D: () => {
			Q(0, 0);
			var e = D.pop();
			xn(e.excPtr), O = null;
		},
		a: () => xe([]),
		j: (e) => xe([e]),
		l: (e, t) => xe([e, t]),
		sa: () => {
			D.length || oe("no exception to throw");
			var e = D[D.length - 1], t = e.excPtr;
			e.set_rethrown(!0), e.set_caught(!1), ye++, Sn(t), t = O = new ee(t), Se(t);
		},
		r: (e, t, n) => {
			new ve(e).init(t, n), Sn(e), e = O = new ee(e), ye++, Se(e);
		},
		e: (e) => {
			e = O == null ? O = new ee(e) : O, Ce(e);
		},
		V: function(e, t, n) {
			return 0;
		},
		qa: function(e, t, n) {
			return 0;
		},
		na: () => {},
		ra: function(e, t, n, r) {},
		ia: () => {},
		ma: () => oe(""),
		Z: (e) => {
			var t = j[e];
			delete j[e];
			var n = t.rawConstructor, r = t.rawDestructor, i = t.valueSize, a = t.isTrivial, o = t.fields, s = o.map((e) => e.getterReturnTypeID).concat(o.map((e) => e.setterArgumentTypeID));
			z([e], s, (e) => {
				var s = {};
				for (var [c, l] of o.entries()) {
					let t = e[c], n = l.getter, r = l.getterContext, i = e[c + o.length], a = l.setter, d = l.setterContext;
					var u = !i.usesDestructor && !i.argStackAlloc ? (e, t) => a(d, e, i.toWireType(null, t)) : (e, t) => {
						var n = [];
						a(d, e, i.toWireType(n, t)), ke(n);
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
						for (o in a && !e ? (c = Ae(i), Ne(c, i)) : (c = n(), e && e.push(r, c)), s) s[o].write(c, t[o]);
						return c;
					},
					readValueFromPointer: A,
					usesDestructor: !a,
					argStackAlloc: a
				}];
			});
		},
		$: () => {},
		va: (e, t, n, r) => {
			t = B(t), L(e, {
				name: t,
				fromWireType: function(e) {
					return !!e;
				},
				toWireType: function(e, t) {
					return t ? n : r;
				},
				readValueFromPointer: function(e) {
					return this.fromWireType(k[e]);
				}
			});
		},
		Aa: (e, t, n, r, i, a, o, s, c, l, u, d, f) => {
			u = B(u), a = q(i, a), s && (s = q(o, s)), l && (l = q(c, l)), f = q(d, f);
			var p = lt(u);
			ct(p, function() {
				pt(`Cannot construct ${u} due to unbound types`, [r]);
			}), z([
				e,
				t,
				n
			], r ? [r] : [], (t) => {
				t = t[0];
				var n, i;
				r ? (n = t.registeredClass, i = n.instancePrototype) : i = H.prototype;
				var o = tt(u, function() {
					var e = [...arguments];
					if (Object.getPrototypeOf(this) !== c) throw new P(`Use 'new' to construct ${u}`);
					if (d.constructor_body === void 0) throw new P(`${u} has no accessible constructor`);
					var t = d.constructor_body[e.length];
					if (t === void 0) throw new P(`Tried to invoke ctor of ${u} with invalid number of parameters (${e.length}) - expected (${Object.keys(d.constructor_body).toString()}) parameters instead!`);
					return t.apply(this, e);
				}), c = Object.create(i, { constructor: { value: o } });
				o.prototype = c;
				var d = new He(u, o, c, f, n, a, s, l);
				if (d.baseClass) {
					var m;
					(m = d.baseClass).__derivedClasses != null || (m.__derivedClasses = []), d.baseClass.__derivedClasses.push(d);
				}
				var h = new K(u, d, !0, !1, !1), g = new K(u + "*", d, !1, !1, !1), _ = new K(u + " const*", d, !1, !0, !1);
				return Qe[e] = {
					pointerType: g,
					constPointerType: _
				}, ut(p, o), [
					h,
					g,
					_
				];
			});
		},
		za: (e, t, n, r, i, a) => {
			var o = vt(t, n);
			i = q(r, i), z([], [e], (e) => {
				e = e[0];
				var n = `constructor ${e.name}`;
				if (e.registeredClass.constructor_body === void 0 && (e.registeredClass.constructor_body = []), e.registeredClass.constructor_body[t - 1] !== void 0) throw new P(`Cannot register multiple constructors with identical number of parameters (${t - 1}) for class '${e.name}'! Overload resolution is currently only performed using the parameter count, not actual type info!`);
				return e.registeredClass.constructor_body[t - 1] = () => {
					pt(`Cannot construct ${e.name} due to unbound types`, o);
				}, z([], o, (r) => (r.splice(1, 0, null), e.registeredClass.constructor_body[t - 1] = _t(n, r, null, i, a), [])), [];
			});
		},
		F: (e, t, n, r, i, a, o, s, c) => {
			var l = vt(n, r);
			t = B(t), t = yt(t), a = q(i, a), z([], [e], (e) => {
				e = e[0];
				var r = `${e.name}.${t}`;
				t.startsWith("@@") && (t = Symbol[t.substring(2)]), s && e.registeredClass.pureVirtualFunctions.push(t);
				function i() {
					pt(`Cannot call ${r} due to unbound types`, l);
				}
				var u = e.registeredClass.instancePrototype, d = u[t];
				return d === void 0 || d.overloadTable === void 0 && d.className !== e.name && d.argCount === n - 2 ? (i.argCount = n - 2, i.className = e.name, u[t] = i) : (ot(u, t, r), u[t].overloadTable[n - 2] = i), z([], l, (i) => {
					var s = _t(r, i, e, a, o, c);
					return u[t].overloadTable === void 0 ? (s.argCount = n - 2, u[t] = s) : u[t].overloadTable[n - 2] = s, [];
				}), [];
			});
		},
		ta: (e) => L(e, St),
		W: (e, t, n) => {
			t = B(t), L(e, {
				name: t,
				fromWireType: (e) => e,
				toWireType: (e, t) => t,
				readValueFromPointer: Tt(t, n)
			});
		},
		L: (e, t, n, r, i, a, o) => {
			var s = vt(t, n);
			e = B(e), e = yt(e), i = q(r, i), ct(e, function() {
				pt(`Cannot call ${e} due to unbound types`, s);
			}, t - 1), z([], s, (n) => {
				var r = [n[0], null].concat(n.slice(1));
				return ut(e, _t(e, r, null, i, a, o), t - 1), [];
			});
		},
		z: (e, t, n, r, i) => {
			t = B(t);
			let a = r === 0, o = (e) => e;
			if (a) {
				var s = 32 - 8 * n;
				o = (e) => e << s >>> s, i = o(i);
			}
			L(e, {
				name: t,
				fromWireType: o,
				toWireType: (e, t) => t,
				readValueFromPointer: Ot(t, n, r !== 0)
			});
		},
		xa: (e, t, n, r) => {
			n = B(n), r = B(r), z([], [e, t], (e) => {
				let t = e[0];
				return kt(t.registeredClass.instancePrototype, n, r), [];
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
			n = B(n), L(e, {
				name: n,
				fromWireType: i,
				readValueFromPointer: i
			}, { ignoreDuplicateRegistrations: !0 });
		},
		X: (e) => {
			L(e, At);
		},
		ua: (e, t) => {
			t = B(t), L(e, {
				name: t,
				fromWireType(e) {
					var t = E[e >> 2], n = Oe(e + 4, t, !0);
					return pn(e), n;
				},
				toWireType(e, t) {
					t instanceof ArrayBuffer && (t = new Uint8Array(t));
					var n, r = typeof t == "string";
					r || ArrayBuffer.isView(t) && t.BYTES_PER_ELEMENT == 1 || F("Cannot pass non-string to std::string"), n = r ? jt(t) : t.length;
					var i = mn(4 + n + 1), a = i + 4;
					return E[i >> 2] = n, r ? Nt(t, a, n + 1) : k.set(t, a), i;
				},
				readValueFromPointer: A
			});
		},
		O: (e, t, n) => {
			n = B(n);
			var r, i, a;
			t === 2 ? (r = Ft, i = zt, a = Lt) : (r = It, i = Bt, a = Rt), L(e, {
				name: n,
				fromWireType: (e) => {
					var n = E[e >> 2], i = r(e + 4, n * t, !0);
					return pn(e), i;
				},
				toWireType: (e, r) => {
					typeof r != "string" && F(`Cannot pass non-string to C++ string type ${n}`);
					var o = a(r), s = mn(4 + o + t);
					return E[s >> 2] = o / t, i(r, s + 4, o + t), s;
				},
				readValueFromPointer: A
			});
		},
		B: (e, t, n, r, i, a, o, s) => {
			j[e] = {
				name: B(t),
				rawConstructor: q(n, r),
				rawDestructor: q(i, a),
				valueSize: o,
				isTrivial: !!s,
				fields: []
			};
		},
		ca: (e, t, n, r, i, a, o, s, c, l) => {
			j[e].fields.push({
				fieldName: B(t),
				getterReturnTypeID: n,
				getter: q(r, i),
				getterContext: a,
				setterArgumentTypeID: o,
				setter: q(s, c),
				setterContext: l
			});
		},
		wa: (e, t) => {
			t = B(t), L(e, {
				isVoid: !0,
				name: t,
				fromWireType: () => {},
				toWireType: () => {}
			});
		},
		la: () => {
			S = !1, Vt = 0;
		},
		Q: (e, t, n) => {
			var [r, ...i] = qt(e, t), a = i.map((e) => e.readValueFromPointer.bind(e));
			e--;
			var o = Gt[`${n}${r.isVoid ? "f" : "t"}${e}`], s = o(...r.isVoid ? a : [r.toWireType.bind(r), ...a]);
			return Ut(tt(`methodCaller<(${i.map((e) => e.name)}) => ${r.name}>`, s));
		},
		pa: xt,
		C: (e) => e ? (e = Yt(e), W.toHandle(globalThis[e])) : W.toHandle(globalThis),
		N: (e) => {
			e > 9 && (U[e + 1] += 1);
		},
		P: (e, t, n, r, i) => Ht[e](t, n, r, i),
		ya: (e) => {
			ke(W.toValue(e)), xt(e);
		},
		ea: (e, t) => {
			if (Y.has(e) && (clearTimeout(Y.get(e)), Y.delete(e)), !t) return 0;
			var n = setTimeout(() => {
				Y.delete(e), en(gn, e, tn());
			}, t);
			return Y.set(e, n), 0;
		},
		ha: (e) => {
			var t = k.length;
			e >>>= 0;
			var n = rn();
			if (e > n) return !1;
			for (var r = 1; r <= 4; r *= 2) {
				var i = t * (1 + .2 / r);
				if (i = Math.min(i, e + 100663296), an(Math.min(n, nn(Math.max(e, i), 65536)))) return !0;
			}
			return !1;
		},
		fa: (e, t) => {
			var n = 0, r = 0;
			for (var i of X()) {
				var a = t + n;
				E[e + r >> 2] = a, n += Nt(i, a, 1 / 0) + 1, r += 4;
			}
			return 0;
		},
		ga: (e, t) => {
			var n = X();
			E[e >> 2] = n.length;
			var r = 0;
			for (var i of n) r += jt(i) + 1;
			return E[t >> 2] = r, 0;
		},
		T: () => 52,
		oa: () => 52,
		_: function(e, t, n) {
			return cn(t, n), 70;
		},
		U: (e, t, n, r) => {
			for (var i = 0, a = 0; a < n; a++) {
				var o = E[t >> 2], s = E[t + 4 >> 2];
				t += 8;
				for (var c = 0; c < s; c++) un(e, k[o + c]);
				i += s;
			}
			return E[r >> 2] = i, 0;
		},
		da: function(e, t, n) {
			var r = w();
			try {
				return T(e)(t, n);
			} catch (e) {
				if (C(r), !(e instanceof v)) throw e;
				Q(1, 0);
			}
		},
		S: function(e, t, n, r) {
			var i = w();
			try {
				return T(e)(t, n, r);
			} catch (e) {
				if (C(i), !(e instanceof v)) throw e;
				Q(1, 0);
			}
		},
		K: function(e, t, n, r, i, a) {
			var o = w();
			try {
				return T(e)(t, n, r, i, a);
			} catch (e) {
				if (C(o), !(e instanceof v)) throw e;
				Q(1, 0);
			}
		},
		b: function(e, t) {
			var n = w();
			try {
				return T(e)(t);
			} catch (e) {
				if (C(n), !(e instanceof v)) throw e;
				Q(1, 0);
			}
		},
		A: function(e, t, n, r) {
			var i = w();
			try {
				return T(e)(t, n, r);
			} catch (e) {
				if (C(i), !(e instanceof v)) throw e;
				Q(1, 0);
			}
		},
		h: function(e, t, n) {
			var r = w();
			try {
				return T(e)(t, n);
			} catch (e) {
				if (C(r), !(e instanceof v)) throw e;
				Q(1, 0);
			}
		},
		E: function(e, t, n, r, i) {
			var a = w();
			try {
				return T(e)(t, n, r, i);
			} catch (e) {
				if (C(a), !(e instanceof v)) throw e;
				Q(1, 0);
			}
		},
		g: function(e, t, n, r) {
			var i = w();
			try {
				return T(e)(t, n, r);
			} catch (e) {
				if (C(i), !(e instanceof v)) throw e;
				Q(1, 0);
			}
		},
		m: function(e, t, n, r, i) {
			var a = w();
			try {
				return T(e)(t, n, r, i);
			} catch (e) {
				if (C(a), !(e instanceof v)) throw e;
				Q(1, 0);
			}
		},
		n: function(e, t, n, r, i, a) {
			var o = w();
			try {
				return T(e)(t, n, r, i, a);
			} catch (e) {
				if (C(o), !(e instanceof v)) throw e;
				Q(1, 0);
			}
		},
		M: function(e, t, n, r, i, a, o) {
			var s = w();
			try {
				return T(e)(t, n, r, i, a, o);
			} catch (e) {
				if (C(s), !(e instanceof v)) throw e;
				Q(1, 0);
			}
		},
		J: function(e, t, n, r, i, a, o) {
			var s = w();
			try {
				return T(e)(t, n, r, i, a, o);
			} catch (e) {
				if (C(s), !(e instanceof v)) throw e;
				Q(1, 0);
			}
		},
		x: function(e, t, n, r, i, a, o, s) {
			var c = w();
			try {
				return T(e)(t, n, r, i, a, o, s);
			} catch (e) {
				if (C(c), !(e instanceof v)) throw e;
				Q(1, 0);
			}
		},
		I: function(e, t, n, r, i, a, o, s, c) {
			var l = w();
			try {
				return T(e)(t, n, r, i, a, o, s, c);
			} catch (e) {
				if (C(l), !(e instanceof v)) throw e;
				Q(1, 0);
			}
		},
		Y: function(e, t, n, r, i) {
			var a = w();
			try {
				return wn(e, t, n, r, i);
			} catch (e) {
				if (C(a), !(e instanceof v)) throw e;
				Q(1, 0);
			}
		},
		c: function(e) {
			var t = w();
			try {
				T(e)();
			} catch (e) {
				if (C(t), !(e instanceof v)) throw e;
				Q(1, 0);
			}
		},
		i: function(e, t) {
			var n = w();
			try {
				T(e)(t);
			} catch (e) {
				if (C(n), !(e instanceof v)) throw e;
				Q(1, 0);
			}
		},
		aa: function(e, t, n) {
			var r = w();
			try {
				T(e)(t, n);
			} catch (e) {
				if (C(r), !(e instanceof v)) throw e;
				Q(1, 0);
			}
		},
		d: function(e, t, n) {
			var r = w();
			try {
				T(e)(t, n);
			} catch (e) {
				if (C(r), !(e instanceof v)) throw e;
				Q(1, 0);
			}
		},
		R: function(e, t, n, r, i, a, o, s, c) {
			var l = w();
			try {
				T(e)(t, n, r, i, a, o, s, c);
			} catch (e) {
				if (C(l), !(e instanceof v)) throw e;
				Q(1, 0);
			}
		},
		H: function(e, t, n, r, i) {
			var a = w();
			try {
				T(e)(t, n, r, i);
			} catch (e) {
				if (C(a), !(e instanceof v)) throw e;
				Q(1, 0);
			}
		},
		f: function(e, t, n, r) {
			var i = w();
			try {
				T(e)(t, n, r);
			} catch (e) {
				if (C(i), !(e instanceof v)) throw e;
				Q(1, 0);
			}
		},
		G: function(e, t, n, r, i, a, o) {
			var s = w();
			try {
				T(e)(t, n, r, i, a, o);
			} catch (e) {
				if (C(s), !(e instanceof v)) throw e;
				Q(1, 0);
			}
		},
		k: function(e, t, n, r, i) {
			var a = w();
			try {
				T(e)(t, n, r, i);
			} catch (e) {
				if (C(a), !(e instanceof v)) throw e;
				Q(1, 0);
			}
		},
		ba: function(e, t, n, r, i, a, o, s) {
			var c = w();
			try {
				T(e)(t, n, r, i, a, o, s);
			} catch (e) {
				if (C(c), !(e instanceof v)) throw e;
				Q(1, 0);
			}
		},
		o: function(e, t, n, r, i, a) {
			var o = w();
			try {
				T(e)(t, n, r, i, a);
			} catch (e) {
				if (C(o), !(e instanceof v)) throw e;
				Q(1, 0);
			}
		},
		t: function(e, t, n, r, i, a, o) {
			var s = w();
			try {
				T(e)(t, n, r, i, a, o);
			} catch (e) {
				if (C(s), !(e instanceof v)) throw e;
				Q(1, 0);
			}
		},
		y: function(e, t, n, r, i, a, o, s) {
			var c = w();
			try {
				T(e)(t, n, r, i, a, o, s);
			} catch (e) {
				if (C(c), !(e instanceof v)) throw e;
				Q(1, 0);
			}
		},
		q: function(e, t, n, r, i, a, o, s, c) {
			var l = w();
			try {
				T(e)(t, n, r, i, a, o, s, c);
			} catch (e) {
				if (C(l), !(e instanceof v)) throw e;
				Q(1, 0);
			}
		},
		v: function(e, t, n, r, i, a, o, s, c, l) {
			var u = w();
			try {
				T(e)(t, n, r, i, a, o, s, c, l);
			} catch (e) {
				if (C(u), !(e instanceof v)) throw e;
				Q(1, 0);
			}
		},
		p: function(e, t, n, r, i, a, o, s, c, l, u) {
			var d = w();
			try {
				T(e)(t, n, r, i, a, o, s, c, l, u);
			} catch (e) {
				if (C(d), !(e instanceof v)) throw e;
				Q(1, 0);
			}
		},
		w: (e) => e,
		ka: Qt
	}, $ = await async function() {
		function e(e) {
			return $ = e.exports, Dn($), ne(), $;
		}
		var t = fe(), n = r.instantiateWasm;
		return n ? new Promise((r) => {
			n(t, (t) => r(e(t)));
		}) : (y != null || (y = se()), function(t) {
			return e(t.instance);
		}(await de(h, y, t)));
	}();
	return await async function() {
		var e;
		re();
		var t = r.setStatus;
		t && (t("Running..."), await new Promise((e) => setTimeout(e, 1)), setTimeout(t, 1, "")), g || (ie(), (e = r.onRuntimeInitialized) == null || e.call(r), ae());
	}(), r;
}
// src/full/index.ts
function S(e) {
	return m(x, e);
}
function C() {
	return se(x);
}
function w(e) {
	return S({
		overrides: e,
		equalityFn: Object.is,
		fireImmediately: !0
	});
}
function _e(e) {
	S({
		overrides: e,
		equalityFn: Object.is,
		fireImmediately: !1
	});
}
async function T(e, t) {
	return ue(x, e, t);
}
async function E(e, t) {
	return T(e, t);
}
async function ve(e, t) {
	return T(e, t);
}
async function D(e, t) {
	return g(x, e, t);
}
var ye = "7fc351dd3bf5fc0dca3997f519a0a6d16663600ba91b726b7120e982ddc2b635";
export { he as BARCODE_FORMATS, h as BARCODE_HRI_LABELS, me as BARCODE_META_FORMATS, d as BARCODE_SYMBOLOGIES, p as BINARIZERS, te as CHARACTER_SETS, ce as CONTENT_TYPES, t as CREATABLE_BARCODE_FORMATS, _ as EAN_ADD_ON_SYMBOLS, b as GS1_BARCODE_FORMATS, f as INDUSTRIAL_BARCODE_FORMATS, r as LINEAR_BARCODE_FORMATS, n as MATRIX_BARCODE_FORMATS, l as READABLE_BARCODE_FORMATS, ie as RETAIL_BARCODE_FORMATS, ae as TEXT_MODES, le as ZXING_CPP_COMMIT, ye as ZXING_WASM_SHA256, ne as ZXING_WASM_VERSION, e as barcodeFormats, pe as binarizers, ee as characterSets, oe as contentTypes, y as defaultReaderOptions, de as defaultWriterOptions, v as eanAddOnSymbols, re as encodeFormat, s as encodeFormats, c as formatToLabel, u as formatToSymbology, w as getZXingModule, i as linearBarcodeFormats, a as matrixBarcodeFormats, S as prepareZXingModule, C as purgeZXingModule, T as readBarcodes, ve as readBarcodesFromImageData, E as readBarcodesFromImageFile, _e as setZXingModuleOverrides, o as symbologyToFormats, fe as textModes, D as writeBarcode };
