import { f as n } from "./vendor-Bz4w7tIK.js";
const r = (n2) => (n2.install = (r2) => {
  const c2 = (n2 == null ? void 0 : n2.name) || "UnnameComponent";
  r2.component(c2, n2);
}, n2);
function c(r2) {
  return (c2) => n(r2, (n2) => c2.use(n2));
}
class o extends Error {
  constructor(n2) {
    super(n2), this.name = "morphError";
  }
}
function e(n2, r2) {
  if ("production" !== process.env.NODE_ENV) {
    const c2 = new o(`[${n2}]:${r2}`);
    console.warn(c2);
  }
}
const s = /* @__PURE__ */ new Map([["info", "circle-info"], ["success", "check-circle"], ["warning", "circle-exclamation"], ["danger", "circle-xmark"], ["error", "circle-xmark"]]), t = (n2, r2) => {
  const c2 = n2.__vccOpts || n2;
  for (const [n3, o2] of r2)
    c2[n3] = o2;
  return c2;
};
export {
  t as _,
  e as d,
  c as m,
  s as t,
  r as w
};
