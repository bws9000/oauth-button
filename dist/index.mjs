import ee from "react";
var p = { exports: {} }, b = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var I;
function re() {
  if (I) return b;
  I = 1;
  var n = Symbol.for("react.transitional.element"), c = Symbol.for("react.fragment");
  function f(l, u, o) {
    var m = null;
    if (o !== void 0 && (m = "" + o), u.key !== void 0 && (m = "" + u.key), "key" in u) {
      o = {};
      for (var E in u)
        E !== "key" && (o[E] = u[E]);
    } else o = u;
    return u = o.ref, {
      $$typeof: n,
      type: l,
      key: m,
      ref: u !== void 0 ? u : null,
      props: o
    };
  }
  return b.Fragment = c, b.jsx = f, b.jsxs = f, b;
}
var _ = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var F;
function te() {
  return F || (F = 1, process.env.NODE_ENV !== "production" && function() {
    function n(e) {
      if (e == null) return null;
      if (typeof e == "function")
        return e.$$typeof === Z ? null : e.displayName || e.name || null;
      if (typeof e == "string") return e;
      switch (e) {
        case k:
          return "Fragment";
        case q:
          return "Profiler";
        case W:
          return "StrictMode";
        case V:
          return "Suspense";
        case X:
          return "SuspenseList";
        case H:
          return "Activity";
      }
      if (typeof e == "object")
        switch (typeof e.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), e.$$typeof) {
          case M:
            return "Portal";
          case J:
            return (e.displayName || "Context") + ".Provider";
          case G:
            return (e._context.displayName || "Context") + ".Consumer";
          case z:
            var r = e.render;
            return e = e.displayName, e || (e = r.displayName || r.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
          case B:
            return r = e.displayName || null, r !== null ? r : n(e.type) || "Memo";
          case x:
            r = e._payload, e = e._init;
            try {
              return n(e(r));
            } catch {
            }
        }
      return null;
    }
    function c(e) {
      return "" + e;
    }
    function f(e) {
      try {
        c(e);
        var r = !1;
      } catch {
        r = !0;
      }
      if (r) {
        r = console;
        var t = r.error, a = typeof Symbol == "function" && Symbol.toStringTag && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return t.call(
          r,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          a
        ), c(e);
      }
    }
    function l(e) {
      if (e === k) return "<>";
      if (typeof e == "object" && e !== null && e.$$typeof === x)
        return "<...>";
      try {
        var r = n(e);
        return r ? "<" + r + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function u() {
      var e = g.A;
      return e === null ? null : e.getOwner();
    }
    function o() {
      return Error("react-stack-top-frame");
    }
    function m(e) {
      if (y.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning) return !1;
      }
      return e.key !== void 0;
    }
    function E(e, r) {
      function t() {
        N || (N = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          r
        ));
      }
      t.isReactWarning = !0, Object.defineProperty(e, "key", {
        get: t,
        configurable: !0
      });
    }
    function T() {
      var e = n(this.type);
      return C[e] || (C[e] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), e = this.props.ref, e !== void 0 ? e : null;
    }
    function U(e, r, t, a, d, i, w, O) {
      return t = i.ref, e = {
        $$typeof: j,
        type: e,
        key: r,
        props: i,
        _owner: d
      }, (t !== void 0 ? t : null) !== null ? Object.defineProperty(e, "ref", {
        enumerable: !1,
        get: T
      }) : Object.defineProperty(e, "ref", { enumerable: !1, value: null }), e._store = {}, Object.defineProperty(e._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(e, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.defineProperty(e, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: w
      }), Object.defineProperty(e, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: O
      }), Object.freeze && (Object.freeze(e.props), Object.freeze(e)), e;
    }
    function S(e, r, t, a, d, i, w, O) {
      var s = r.children;
      if (s !== void 0)
        if (a)
          if (Q(s)) {
            for (a = 0; a < s.length; a++)
              P(s[a]);
            Object.freeze && Object.freeze(s);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else P(s);
      if (y.call(r, "key")) {
        s = n(e);
        var R = Object.keys(r).filter(function(K) {
          return K !== "key";
        });
        a = 0 < R.length ? "{key: someKey, " + R.join(": ..., ") + ": ...}" : "{key: someKey}", L[s + a] || (R = 0 < R.length ? "{" + R.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          a,
          s,
          R,
          s
        ), L[s + a] = !0);
      }
      if (s = null, t !== void 0 && (f(t), s = "" + t), m(r) && (f(r.key), s = "" + r.key), "key" in r) {
        t = {};
        for (var A in r)
          A !== "key" && (t[A] = r[A]);
      } else t = r;
      return s && E(
        t,
        typeof e == "function" ? e.displayName || e.name || "Unknown" : e
      ), U(
        e,
        s,
        i,
        d,
        u(),
        t,
        w,
        O
      );
    }
    function P(e) {
      typeof e == "object" && e !== null && e.$$typeof === j && e._store && (e._store.validated = 1);
    }
    var v = ee, j = Symbol.for("react.transitional.element"), M = Symbol.for("react.portal"), k = Symbol.for("react.fragment"), W = Symbol.for("react.strict_mode"), q = Symbol.for("react.profiler"), G = Symbol.for("react.consumer"), J = Symbol.for("react.context"), z = Symbol.for("react.forward_ref"), V = Symbol.for("react.suspense"), X = Symbol.for("react.suspense_list"), B = Symbol.for("react.memo"), x = Symbol.for("react.lazy"), H = Symbol.for("react.activity"), Z = Symbol.for("react.client.reference"), g = v.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, y = Object.prototype.hasOwnProperty, Q = Array.isArray, h = console.createTask ? console.createTask : function() {
      return null;
    };
    v = {
      "react-stack-bottom-frame": function(e) {
        return e();
      }
    };
    var N, C = {}, Y = v["react-stack-bottom-frame"].bind(
      v,
      o
    )(), $ = h(l(o)), L = {};
    _.Fragment = k, _.jsx = function(e, r, t, a, d) {
      var i = 1e4 > g.recentlyCreatedOwnerStacks++;
      return S(
        e,
        r,
        t,
        !1,
        a,
        d,
        i ? Error("react-stack-top-frame") : Y,
        i ? h(l(e)) : $
      );
    }, _.jsxs = function(e, r, t, a, d) {
      var i = 1e4 > g.recentlyCreatedOwnerStacks++;
      return S(
        e,
        r,
        t,
        !0,
        a,
        d,
        i ? Error("react-stack-top-frame") : Y,
        i ? h(l(e)) : $
      );
    };
  }()), _;
}
var D;
function ne() {
  return D || (D = 1, process.env.NODE_ENV === "production" ? p.exports = re() : p.exports = te()), p.exports;
}
var oe = ne();
function ae(n, c) {
  return `https://accounts.google.com/o/oauth2/v2/auth?${new URLSearchParams({
    response_type: "token",
    client_id: n,
    redirect_uri: c,
    scope: "email profile"
  }).toString()}`;
}
function se({ clientId: n, redirectUri: c, onSuccess: f, onError: l }) {
  return { startLogin: () => {
    try {
      const o = ae(n, c);
      window.location.href = o;
    } catch (o) {
      l && o instanceof Error && l(o);
    }
  } };
}
function ue(n) {
  switch (n.provider) {
    case "google":
      return se(n);
    default:
      throw new Error(`Unsupported provider: ${n.provider}`);
  }
}
const le = ({
  provider: n,
  clientId: c,
  redirectUri: f,
  buttonText: l = `Continue with ${n}`,
  onSuccess: u,
  onError: o,
  className: m,
  style: E
}) => {
  const { startLogin: T } = ue({
    provider: n,
    clientId: c,
    redirectUri: f,
    onSuccess: u,
    onError: o
  });
  return /* @__PURE__ */ oe.jsx(
    "button",
    {
      className: m,
      style: E,
      onClick: T,
      children: l
    }
  );
};
export {
  le as OAuthLoginButton
};
