import { z as e } from "zod";
//#region src/utils/datetime/datetime.util.ts
var t = {
	day: "2-digit",
	month: "2-digit",
	year: "numeric",
	hour: "2-digit",
	minute: "2-digit",
	hour12: !1
};
function n(e = /* @__PURE__ */ new Date(), n = "en-GB", r = t) {
	let i = e instanceof Date ? e : new Date(e);
	if (isNaN(i.getTime())) throw Error("Invalid date provided to formatDateTime");
	return i.toLocaleString(n, r);
}
var r = {
	short: {
		day: "numeric",
		month: "short"
	},
	medium: {
		day: "numeric",
		month: "short",
		year: "numeric"
	},
	long: {
		day: "numeric",
		month: "long",
		year: "numeric"
	}
};
function i(e, t = "medium", n = "en-GB") {
	let i = e instanceof Date ? e : new Date(e);
	if (isNaN(i.getTime())) throw Error("Invalid date provided to formatDate");
	return i.toLocaleDateString(n, r[t]);
}
var a = 6e4, o = 36e5, s = 864e5, c = 7 * s, l = 30 * s, u = 365 * s;
function d(e, t = "en-GB") {
	let n = new Date(e).getTime() - Date.now(), r = Math.abs(n), i = new Intl.RelativeTimeFormat(t, { numeric: "auto" }), d = (e, t) => i.format(Math.round(n / e), t);
	return r < a ? d(1e3, "second") : r < o ? d(a, "minute") : r < s ? d(o, "hour") : r < c ? d(s, "day") : r < l ? d(c, "week") : r < u ? d(l, "month") : d(u, "year");
}
//#endregion
//#region src/utils/error/AppError.ts
var f = class extends Error {
	type;
	summary;
	details;
	cause;
	constructor({ type: e, summary: t, message: n, details: r, cause: i }) {
		super(n), this.name = "AppError", this.type = e, this.details = r, this.cause = i, this.summary = t;
	}
};
//#endregion
//#region src/utils/error/normalizeError.util.ts
function p(e) {
	if (e instanceof Error) return {
		name: e.name,
		message: e.message,
		stack: e.stack
	};
	if (e instanceof Response) return {
		status: e.status,
		statusText: e.statusText,
		url: e.url,
		headers: m(e.headers)
	};
	if (typeof e == "object" && e) try {
		return JSON.parse(JSON.stringify(e));
	} catch {
		return {
			message: "Non-serializable object error",
			original: String(e)
		};
	}
	return { message: String(e) };
}
function m(e) {
	let t = {};
	return e.forEach((e, n) => {
		t[n] = e;
	}), t;
}
//#endregion
//#region src/utils/strings/strings.util.ts
function h(e) {
	return e && e.charAt(0).toUpperCase() + e.slice(1);
}
//#endregion
//#region src/utils/url.ts
function g(e) {
	let { redirect: t, ...n } = e;
	if (!t) return null;
	let r = new URLSearchParams(n).toString();
	return r ? `${t}?${r}` : t;
}
//#endregion
//#region src/utils/validation/schemas.util.ts
var _ = e.string().trim().pipe(e.email()), v = e.string().trim().min(2).max(50), y = {
	getRedirectTargetWithQueryParams: g,
	normalizeError: p,
	AppError: f,
	formatRelativeDate: d,
	formatDateTime: n,
	formatDate: i,
	capitalizeFirstLetter: h,
	emailSchema: _,
	nameSchema: v
};
//#endregion
export { h as a, i as c, g as i, n as l, _ as n, p as o, v as r, f as s, y as t, d as u };
