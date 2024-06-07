import { f as n } from "./vendor-Bz4w7tIK.js";
const o = (n2) => (n2.install = (o2) => {
  const s2 = (n2 == null ? void 0 : n2.name) || "UnnameComponent";
  o2.component(s2, n2);
}, n2);
function s(o2) {
  return (s2) => n(o2, (n2) => s2.use(n2));
}
class r extends Error {
  constructor(n2) {
    super(n2), this.name = "morphError";
  }
}
function t(n2, o2) {
  if ("production" !== process.env.NODE_ENV) {
    const s2 = new r(`[${n2}]:${o2}`);
    console.warn(s2);
  }
}
const c = (n2, o2) => {
  const s2 = n2.__vccOpts || n2;
  for (const [n3, r2] of o2)
    s2[n3] = r2;
  return s2;
};
export {
  c as _,
  t as d,
  s as m,
  o as w
};
