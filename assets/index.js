import {
    e as l,
    f as A,
    j as t,
    k as L,
    n as y,
    l as k,
    u as d,
    m as O,
    v as U,
    F as f,
    p as b,
    q as H,
    t as p,
    x as E,
    y as G,
    z as R,
    A as C,
    o as M,
    d as m,
    B,
    C as K,
    D as V,
    r as Z,
    w as P,
    E as z,
    G as _,
    H as $
} from "./@vue.d03399f6.js";
import {
    u as S,
    c as tt
} from "./vue-i18n.a8384264.js";
import "./@intlify.7df7362d.js";
const et = function() {
    const e = document.createElement("link").relList;
    if (e && e.supports && e.supports("modulepreload")) return;
    for (const n of document.querySelectorAll('link[rel="modulepreload"]')) r(n);
    new MutationObserver(n => {
        for (const s of n)
            if (s.type === "childList")
                for (const i of s.addedNodes) i.tagName === "LINK" && i.rel === "modulepreload" && r(i)
    }).observe(document, {
        childList: !0,
        subtree: !0
    });

    function o(n) {
        const s = {};
        return n.integrity && (s.integrity = n.integrity), n.referrerpolicy && (s.referrerPolicy = n.referrerpolicy), n.crossorigin === "use-credentials" ? s.credentials = "include" : n.crossorigin === "anonymous" ? s.credentials = "omit" : s.credentials = "same-origin", s
    }

    function r(n) {
        if (n.ep) return;
        n.ep = !0;
        const s = o(n);
        fetch(n.href, s)
    }
};
et();
var x = (a, e) => {
    const o = a.__vccOpts || a;
    for (const [r, n] of e) o[r] = n;
    return o
};
const st = {
        class: "limit-width"
    },
    nt = {
        props: {
            background: {
                type: String,
                default: "#000"
            }
        },
        setup(a) {
            return (e, o) => (l(), A("div", {
                class: "full-body",
                style: y({
                    background: a.background
                })
            }, [t("div", st, [L(e.$slots, "default", {}, void 0, !0)])], 4))
        }
    };
var N = x(nt, [
        ["__scopeId", "data-v-5639f2d8"]
    ]),
    ot = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaBAMAAADKhlwxAAAAMFBMVEUAAAD/5Mf/5cj/5Mj/5Mf/5Mf/5Mb/48f/5Mj/4sn/5Mj/5Mj/5MX/38//5cj/5MijUfiJAAAAD3RSTlMAYN+/gCBwQJ9Q788wEK97dpPoAAAAiElEQVRYw+3TOwqDYBBF4cmLkBBIrNKkSkhtYS1YiIULcAGuwBW5Jtei4AOLsZv24g8iyv3q0x4hol1IFakji8+KtVYfFWusvis2Wn1SrLf64isUirl6yEeItir/Ir/XrOcHx+efKz//F3PzkLcQbVUZQIXFB8W6BZ+vHZ9/zHs+i5GkEiJyNgFn/FMJ7qiA4AAAAABJRU5ErkJggg==",
    at = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAMAAAAPdrEwAAAAOVBMVEUAAAD/5Mj/38//5Mj/5Mn/5Mj/5Mf/4cf/5cj/48j/48f/5Mj/48b/4sj/48f/5Mj/5Mb/5MX/5MhXRmHrAAAAEnRSTlMAgBCfz79gIOCQQO+wUMCPcDC7X0oUAAABG0lEQVRYw+3YO27EMAxFUWlsyZ/J5MP9LzZwleIWpPGYqXjrhwPChQu1qqqqqnpr37vtvd3oNey5bM1v2tUSl7tdjea3GmxXvgqcbQY7ItsrRNP2ZTv98YDtyPEPMg12RP5ogTptf7k+mmj7sm5T1mxdph2XdZuybusybV/Wbcqi7cu6TVm3U2XalLNsymk25EQbcp4NOd2mrNuUdZtyuk1Zb/zJT8h5Vy/JMu18mbYu086Xaevy2tNs/kVhp8kNdpoMO02GnSfTTpVp67Jn6zJtXfZtXaaty7pNOWzrMm1J1m3KifaEHLK/AvSAHLMxZjvkmP0Tu5qybwfmE7Jnx99Djmv5efOtYN9C27MfZ7vR1o/5aFVVVdU/9gsW00liI2rCfQAAAABJRU5ErkJggg==";
const it = a => (R("data-v-aa2a8a1a"), a = a(), C(), a),
    lt = {
        class: "h5-menu h5-show"
    },
    ct = ["src"],
    rt = ["onClick"],
    At = {
        class: "menu-box animate fadeInDown"
    },
    dt = ["onClick"],
    ut = it(() => t("div", {
        class: "menu-line"
    }, null, -1)),
    pt = {
        class: "lan-box flex-box"
    },
    gt = ["onClick"],
    mt = {
        props: {
            list: {
                type: Array,
                required: !0
            },
            languageList: {
                type: Array,
                required: !0
            },
            changeLanguage: {
                type: Function,
                required: !0
            },
            jump: {
                type: Function,
                required: !0
            }
        },
        setup(a) {
            const e = a;
            let {
                t: o,
                locale: r
            } = S();
            const n = k({
                    isOpen: !1
                }),
                s = g => {
                    e.jump(g, 50), n.isOpen = !1, v()
                },
                i = g => {
                    n.isOpen = !1, e.changeLanguage(g.name), v()
                },
                c = () => {
                    n.isOpen = !n.isOpen, document.documentElement.scrollTop = 0, v()
                },
                v = () => {
                    n.isOpen ? document.documentElement.style.overflowY = "hidden" : document.documentElement.style.overflowY = "auto"
                };
            return (g, h) => (l(), A("div", lt, [t("img", {
                onClick: c,
                class: "switch-icon",
                src: d(n).isOpen ? d(at) : d(ot),
                alt: ""
            }, null, 8, ct), O(t("div", {
                class: "menu-mask animate fadeIn",
                onClick: G(c, ["self"])
            }, [t("ul", At, [(l(!0), A(f, null, b(a.list, u => (l(), A("li", {
                onClick: w => s(u)
            }, [H(p(u.title) + " ", 1), ut], 8, dt))), 256)), t("div", pt, [(l(!0), A(f, null, b(a.languageList, u => (l(), A("div", {
                class: E(["lan-list", {
                    "lan-list-active": d(r) === u.name
                }]),
                onClick: w => i(u)
            }, p(u.title), 11, gt))), 256))])])], 8, rt), [
                [U, d(n).isOpen]
            ])]))
        }
    };
var vt = x(mt, [
        ["__scopeId", "data-v-aa2a8a1a"]
    ]),
    ht = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAMAAAAolt3jAAAAM1BMVEUAAAD/5cj/5Mf/5cf/5Mn/38//5Mj/5Mj/5Mj/5Mj/5Mj/4sn/5cj/5MX/48b/4sb/5Mg8PzHsAAAAEHRSTlMA33AgzxBg76CAv1CvMLBQJBmpBQAAAHNJREFUCNctjlsWAyEIQ8NDhJlpy/5X20h7P1ATkwPIKuntaRhiN7nDFUT78AbMg2O8fZ+QLOSYkvexCy4y74kJBNVbNYEXVcgRef91gvGQp0CudpRO+7N4XDnt1FtOswHBYdKK9V/Lw7Q/KoHB0vm5GMIXALYEcZ8Z49AAAAAASUVORK5CYII=",
    ft = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOBAMAAADtZjDiAAAAFVBMVEUAAAD/5Mj/5cj/5cj/48f/4sn/5MgCLwDxAAAABnRSTlMAgJ/fYFCyIA6vAAAALklEQVQI12MgBJgFgASjAQNjIpAWEwBhCJsxiUENyAUKKCWCVbKkOUC0hOIxDgCyRAOG6lSaEQAAAABJRU5ErkJggg==";

function bt(a, e = 0, o, r = 500, n) {
    window.requestAnimationFrame || (window.requestAnimationFrame = window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.msRequestAnimationFrame || function(v) {
        return window.setTimeout(v, 1e3 / 60)
    });
    const s = Math.abs(e - o),
        i = Math.ceil(s / r * 50);

    function c(v, g, h) {
        if (v === g) {
            n && n();
            return
        }
        let u = v + h > g ? g : v + h;
        v > g && (u = v - h < g ? g : v - h), a === window ? window.scrollTo(u, u) : a.scrollTop = u, window.requestAnimationFrame(() => c(u, g, h))
    }
    c(e, o, i)
}
const Q = a => (R("data-v-d49aaa9e"), a = a(), C(), a),
    xt = {
        class: "header"
    },
    wt = {
        class: "header-nav"
    },
    yt = Q(() => t("div", null, null, -1)),
    St = Q(() => t("div", {
        class: "logo"
    }, null, -1)),
    Bt = {
        class: "pc-show"
    },
    Nt = ["onClick"],
    qt = ["src"],
    Tt = {
        class: "locale-name"
    },
    Vt = ["src"],
    It = {
        class: "language-list animate fadeIn"
    },
    Et = ["onClick"],
    Ft = {
        setup(a) {
            let {
                t: e,
                locale: o
            } = S();
            const r = k({
                    isOpen: !1,
                    positionName: "home"
                }),
                n = [{
                    title: "\u7B80\u4F53\u4E2D\u6587",
                    name: "cn"
                }, {
                    title: "English",
                    name: "en"
                }];
            M(() => {
                document.addEventListener("scroll", function(g) {
                    const h = document.documentElement.scrollTop;
                    c.forEach((u, w) => {
                        if (w !== c.length - 1) {
                            const q = document.getElementById(c[w].name).offsetTop,
                                T = document.getElementById(c[w + 1].name).offsetTop,
                                J = document.getElementById(c[c.length - 1].name).offsetTop;
                            h >= q - 100 && h < T - 100 && (h < J - 200 ? r.positionName = c[w].name : r.positionName = c[c.length - 1].name)
                        }
                    })
                })
            });
            const s = g => {
                    r.isOpen = g
                },
                i = g => {
                    r.isOpen = !1, sessionStorage.lang = g, document.querySelector("html").setAttribute("lang", g), o.value = g
                },
                c = [{
                    name: "home",
                    title: e("navList.home")
                }, {
                    name: "brand",
                    title: e("navList.brand")
                }, {
                    name: "product",
                    title: e("navList.product")
                }, {
                    name: "service",
                    title: e("navList.service")
                }, {
                    name: "technology",
                    title: e("navList.technology")
                }, {
                    name: "cooperate",
                    title: e("navList.cooperate")
                }],
                v = (g, h = 100) => {
                    const u = document.documentElement,
                        w = document.getElementById(g.name);
                    bt(u, u.scrollTop, w.offsetTop - h, 700)
                };
            return (g, h) => (l(), A("div", xt, [m(N, {
                background: "#19191a"
            }, {
                default: B(() => [t("div", wt, [yt, St, t("ul", Bt, [(l(), A(f, null, b(c, u => t("li", {
                    class: E(["item", {
                        "item-active": u.name === d(r).positionName
                    }]),
                    key: u.name,
                    onClick: w => v(u)
                }, p(u.title), 11, Nt)), 64)), t("div", {
                    class: "pc-lan",
                    onMouseenter: h[1] || (h[1] = u => s(!0))
                }, [t("div", {
                    class: "flex-box",
                    onClick: h[0] || (h[0] = u => d(r).isOpen = !d(r).isOpen)
                }, [t("img", {
                    class: "language-icon",
                    src: d(ht),
                    alt: ""
                }, null, 8, qt), t("div", Tt, p(d(o) === "cn" ? "\u7B80\u4F53\u4E2D\u6587" : "English"), 1), t("img", {
                    class: E([{
                        "down-icon-active": d(r).isOpen
                    }, "down-icon"]),
                    src: d(ft),
                    alt: ""
                }, null, 10, Vt)]), O(t("div", It, [(l(), A(f, null, b(n, u => t("div", {
                    class: E(["lan-item", {
                        "lan-item-active": u.name === d(o)
                    }]),
                    onClick: w => i(u.name)
                }, p(u.title), 11, Et)), 64))], 512), [
                    [U, d(r).isOpen]
                ])], 32)]), m(vt, {
                    list: c,
                    languageList: n,
                    changeLanguage: i,
                    jump: v
                })])]),
                _: 1
            })]))
        }
    };
var kt = x(Ft, [["__scopeId", "data-v-d49aaa9e"]]),
    Ot = "/assets/b1.dd296a6a.png",
    Ut = "/assets/b2.f6df2852.png",
    Rt = "/assets/b3.1a028625.png",
    Ct = "/assets/b1-en.ecabce76.png",
    Mt = "/assets/b2-en.34fa194b.png",
    Jt = "/assets/b3-en.05599014.png";
const Yt = a => (R("data-v-6300bc76"), a = a(), C(), a),
    Wt = Yt(() => t("div", {
        class: "swiper-line"
    }, null, -1)),
    Dt = {
        class: "swiper-list"
    },
    Xt = ["src"],
    Qt = {
        class: "indicator-par"
    },
    jt = ["onClick"],
    Lt = {
        props: {
            autoplay: {
                type: Boolean,
                default: !0
            },
            loop: {
                type: Boolean,
                default: !0
            },
            delay: {
                type: Number,
                default: 3e3
            },
            height: {
                type: [String, Number],
                default: "600px"
            }
        },
        setup(a) {
            const e = a,
                {
                    locale: o
                } = S(),
                r = o.value === "en" ? Ct : Ot,
                n = o.value === "en" ? Mt : Ut,
                s = o.value === "en" ? Jt : Rt,
                i = k({
                    timer: null,
                    index: 0,
                    list: [r, n, s],
                    userEnter: !1
                }),
                c = () => {
                    e.autoplay && (i.timer && clearInterval(i.timer), i.timer = setInterval(() => {
                        i.index++, i.index > i.list.length - 1 && (i.index = 0)
                    }, e.delay))
                },
                v = () => {},
                g = () => {},
                h = u => {
                    i.index = u
                };
            return M(() => {
                c()
            }), (u, w) => (l(), A("div", {
                class: "bwg-swiper limit-width",
                onMouseenter: v,
                onMouseleave: g
            }, [Wt, (l(!0), A(f, null, b(d(i).list, (q, T) => (l(), A("div", {
                class: "swiper-slide",
                key: q
            }, [m(K, {
                name: "scaleToBig"
            }, {
                default: B(() => [O(t("div", Dt, [t("img", {
                    width: "100%",
                    height: "100%",
                    src: q,
                    alt: ""
                }, null, 8, Xt)], 512), [
                    [U, d(i).index == T]
                ])]),
                _: 2
            }, 1024)]))), 128)), t("div", Qt, [(l(!0), A(f, null, b(d(i).list, (q, T) => (l(), A("div", {
                class: E(["bwg-indicator indicator", {
                    "bwg-indicator__active": d(i).index == T
                }]),
                onClick: J => h(T),
                key: q
            }, null, 10, jt))), 128))])], 32))
        }
    };
var Ht = x(Lt, [
    ["__scopeId", "data-v-6300bc76"]
]);
const Gt = {
        class: "home-swiper"
    },
    Kt = {
        setup(a) {
            return (e, o) => (l(), A("div", Gt, [m(Ht, {
                height: "600px"
            })]))
        }
    };
var Zt = x(Kt, [
    ["__scopeId", "data-v-5d5d631c"]
]);
const Pt = ["id"],
    zt = {
        class: "introduce-title"
    },
    _t = {
        class: "introduce-text"
    },
    $t = {
        props: {
            title: {
                type: String
            },
            text: {
                type: String
            },
            id: {
                type: String,
                required: !0
            }
        },
        setup(a) {
            const e = a;
            return (o, r) => (l(), V(N, null, {
                default: B(() => [t("div", {
                    class: "introduce-item title-bg wow fadeInDown",
                    id: e.id
                }, [t("div", zt, p(a.title), 1), t("div", _t, p(a.text), 1)], 8, Pt)]),
                _: 1
            }))
        }
    };
var I = x($t, [
        ["__scopeId", "data-v-6292aaf1"]
    ]),
    Y = "/assets/pt.e41e72cb.png",
    te = "data:image/png;base64,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",
    ee = "data:image/png;base64,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",
    se = "data:image/png;base64,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",
    ne = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAvlSURBVHgB7VrdbxxXFT/3zqy9aVCyKeIBpZC1UFRFJIodKIIGiF2pkPLVJKCqFaJ1EEhABE75A2q7fwBOHqqKl8QR5QGEsNMHAjzEawioD1W8IUGFFPBGBIESIZvEdfwxcw/n497Ztb1OvOtFQtUeeXa+7p05v3u+zxigTW1qU5va1KZ3P02NjRSgQULEpuY1QgZaSMxsnM8PADjaYIcxhiDgJO1H9372O+fWm/f2G6/B8p25AZemJxGgKBcJu4nM6fvNa4ZaBnjqwkgxBx0TzDAB9E839GeRj6yxQ3ue/Obw6nl/nvihcak54xz2k4jlGsoeZW8I+N7PnTgALSILLaLYdI6AtUVrI0IXgY1i3WxkeE8HQ29NnO1dPc+5jkFjon4/HnVueEaENK/n6oVXhqBF1BLAVy+82ksSPGKNMsvMC8MMPtI9bwR9sHbe9MTZQhTZQR1rkcaaKlh6htFza+PvQYuoJYCjOO62cYwsEQ8UrTKNVYnLvrd2XgJxdwbOxsbPgUikbbO5dKPw1oVXi9ACiqEFxAyxtZKhss2y7fIJBFvWvRGbXjEvFxetODZgw2WbJZNFOQakO7FDdM4gzaMFbYn3bglgUpQKgxWbY8iknqh7volVwFCpnRV1RGVMZZ0EGI9CDx/QgVziRaRr76CrQAuoJSqdtzBOYGeDrbJPjkSFLaskr4QxssWTtfO6PvZMmeaVyEYzu/cqbGpVnE5KPX3HZ6EF9EAJT5HtxMY9TU6pYFJ7ZXGLK/f0fbuygnFi5u1Lrw0Tsz9gtWUJq/6yZotqs6bOprFbE5ZI/C/Tsy/SgcZIZGE7CeGOdcKlM8su/vqaeST18vnRQrx1oZu0YT/Q4CSFyZ7PnyjfD49ZH+hIMYaOs3TYy+cSMtgurb1BgEYf7Tu+hvnpN35GCYc5SQIuEmwey+rMwGfJIHsfOXD4yuo5/3jzdUij6IhBN0KQdzFMsVuxY/c3l6Rf7jr4THn1nLt3Zo4gLp9BhwVHgZzGhiBeWV5YeqLn6IuVerjWVWlOImh3iJjFqiMSu9xFv0PXJ380sHpO18e/cho6bQ/5m6MmYru2HIOR1LtcDyzTzo9+CfK5h86TCldUlSWUTZPAjrsO+5F6YOfmZ4+S4ozR2B3sJyzzB6wT7PSgK9fZ8fP1cNWV8B8uvNJPN86AwhTpqnaqXcre2Nm7yVLXerZ1s/yLGTYD8A6Lpve9f9+TpdXj8No1uAW3uhHTyw6dKjKaqZ3dh9dkVzgxQV7vX11p5C7S2KKOdZimKSlICrIFpwcwvO+pE2u0sK6EyTFWpacMc2oIpnajULStc0s/rEO0KNt1cVjCMa29PVJv3N3cbfbEJ1mykcRtdl6mbgi6/b7b5CFzh2wc7bLqGziCSVQIfHkZ8s+hunzVu0gP6QbQB3ESIbao9ihJBd3R5CKKttebf3Pq1928RFWPa00ul3t+ZmpiDZDUQZGe8zwnJpJxq6euC3jxDqsK7oeVCw8QcgDhMRvevWHARLNa6Wi2YLQIyB4uXlhkXt/J5zviXT6PzlJNOt7htnYOrh7rcvmXKIgZSSM5pKnJFKbrLA5s2wZB0zQI8FgLXsKopnP/SLvOXSwr0JAtGe9sRdIZaPqpGwJI9N2ySGLrWTzmbGlg7ubl/WHczPSbLxC4FyQF5bTU59383q1bfZlYQ8nWTnLg9nXvPkHVWquxEAK1QhMxlxsBLMauTDMwo5mTPiyArnzwsafP151uoFeSCV/xqF0qmDSF8ZnpqSJvxPAQqzuodzbeTHTD3P7Vj+3q6oOccSV+t/KgLzOicSGNVUnTT2XDgPc99d0SoRuVhZNH6TAMyQQJxy3BMViPrO3WhMOqu1tZORWj2E7lctFlORbpxphVV5JLSqZSrPfone95FDExxziRUVMTniDood9NpwsPfX/DgJk+/JlvHadVGgafBtvgEHQNznV98mhdlbl1baKbmN4uy5RVPFZV1khcZm9coH3BaAXFVzXv9n5Cs2tb1+mYvXsh3r6lbFkgRiQJVayCaGRpvvNAz9H64fKBHQ8q2ovESreJOgqxjUaIyQJLI+7o6H+k5wvn1gD+06WTVOOOmEydIzUGdUbojUyEiJhlVJxOUhaZUDzlokFi6sx7dz/+8Ornz0yNwVxih1J0L+l4ib2jFItL8275/INy7oZaPH/9/U/GiOkjEqqoWDDOHPvAY18s1Y65ff1307T6RVXjUBBYXxtL7FDfAFIiCTjmOCXmBTgZOaeKtDmquZ7YsfvxySrYCZiD+SFMk0FdFE5DU5ciHtt98NnzG8HQWLXkzA2pW9Ur7jCxnfjn1V9loebf1387YLinxZ0oNXc1x5AMGE0DayojZC+OGk58CyvLHEyCLnv236/90rxj743QgEG1WQNBn6kPdGODCBqT8F8u/bQ/ju0ZLfUi34Ni+4tnOXe2HI44YxIHJWWdj8Fsm7r3RYgI2GlKiCxR+iEpLxsvNX+NZIc4vLSYXLEmGaBrvaTG3AjjhBJ4Pp3PfOjgsw9vFENDDYAoSkvocxmjnQm/YLgdODuTZqPvNnJGrPckg7F8lcYzEO4PkDYbvYQGfJcyPGxFB8S5wZhMn9YBVLWoYpRnZu8oN4KhIZXu+sRzFXrhTGinevZQdctvgV22Q3ZKDoOthgRf7JUllXqn4+S+OjB1ZE4KaFVaWiQUgCa0bvW9wPP4HVcawdBwx4NeOxlwSu3K9aOXkp4r0xC4Q+lLgfPeV9WQPStfV7AiaVZllSrqGqJfBAc1C4peL0B7X6IEG3JWTQOmbL8Eoo/gGfMMC7OQqbTYJ0vA1ZRuGehENgGdphqO0C+CNgACeAjgs2u0CICYuay5ZLEhlW64iZfY9ErMdsRtGM4PmBE+ECPTRMB4D83gfAbIWOiyy5J7743Rf2VQByZqWwXtVw9CvEYvca9FfJvaTf0N9boaBhwv5MvYsTxrYnZUGOwOtTglCTL/jlVHQpNR14YQig+SvdGkAyUBCRohGgBBki5ogzxTwFcLewXu2LbTyUb5b1ilu/qOzhLfZVEtyJgzypRu3l5N1WbJSXEokX0qzsqrNttzdl1sm5/Fey9ptnExEax5l19kWrNxaJCa60s7HKf17eV3W20qG0DFLCtIshMFJ/VFy2LTflNNY14k7PuUyjxgbfMOvfqKt9fYzIDT4MR4UGX3p57730tYaOneOc+EwRqJSijSxIHvEX9JJk2sShA1HMne33fq5Jz33E4lC967i0vMUkkdS+tTgiaoKcDch6YlLqHmvuqFNQcGzFQ5MaKGPvaGLYD1iT9d8x47eGu+53yc9h5eFjOELMm9HS4tw8vQBDX9qQWXk2GTiy5KNOQoxUvnJF1ALmnlgMOXuGlnQsEgc41+d5FMTeObgWoYMr4bb4KnFrXGIFk+daN7+r5agSao6U8tu/u+ViJ1O+VWSFCkQ9JiVUxY+hxnUXLfVKSLGCoiOvaaoOM0f9bnqLZwDSVqr7bsdK5LKykmTUmXqaHioR5d/82P+0l4u/TDmbos+XTKxza8gxsB1bV1Knj5pMKNBdmrj+e74BKNAESYJIkey58s6Lk9fccr0KY21aVNqTQ7mT+WRk0nfctX2lJ/4JYHPOjexm4uLhrYe/gbCJugTQEuj58qxA/lx8hei+A/fYQ8OutKaAsL/AdxblqveKsvik1W9mUlIPo/jcc+vRxf7Oh8kfpW0Cxt6j8AbD4eJDfaS5GX3FIk4DD0srWjyGdaN/Apf9HnHAwlMhlf5IUMuQoU9D8CNPvS4sJnYAN2fv4/dGEImqRNATbov99Irpv4zzGcKzhuvDJM+aht/d5/5RZFcNrax6ok0QSg4Dsa4OtevebfaWE/bII2+T8ehnPZ3nAmyX2qwCiEhHYspPrRRxINadb57o+DNPvUpxelZMgqKF8iVasraX/U/6KwUdoU4GRh6VScz32aeOoF/ecVk3UsMskpJKkUpYJMpIHnC2dfRAihSj3UyJmlY80331Jio9OwCdp04sE0NXa2APmFlV/7FmjLb2By7bh15xCbi/nZniONFfttalOb2tSmNv2f038BEuDWkzty5nAAAAAASUVORK5CYII=";
const oe = {
        class: "brand-component"
    },
    ae = ["src"],
    ie = ["src"],
    le = {
        class: "list-title big-font"
    },
    ce = {
        class: "list-text small-font"
    },
    re = ["src"],
    Ae = {
        setup(a) {
            const {
                t: e
            } = S(), o = [{
                title: e("brand.t1Title"),
                text: e("brand.t1Text"),
                icon: te
            }, {
                title: e("brand.t2Title"),
                text: e("brand.t2Text"),
                icon: ee
            }, {
                title: e("brand.t3Title"),
                text: e("brand.t3Text"),
                icon: se
            }, {
                title: e("brand.t4Title"),
                text: e("brand.t4Text"),
                icon: ne
            }];
            return (r, n) => (l(), V(N, null, {
                default: B(() => [t("div", oe, [t("img", {
                    class: "brand-img1 animated zoomIn",
                    src: d(Y),
                    alt: ""
                }, null, 8, ae), t("ul", null, [(l(), A(f, null, b(o, (s, i) => t("li", {
                    class: "brand-list wow slideInLeft",
                    style: y({
                        animationDelay: `${.1*i}s`
                    })
                }, [t("img", {
                    class: "brand-icon",
                    src: s.icon,
                    alt: ""
                }, null, 8, ie), t("div", null, [t("p", le, p(s.title), 1), t("p", ce, p(s.text), 1)])], 4)), 64))]), t("img", {
                    class: "brand-img wow slideInRight",
                    src: d(Y),
                    alt: ""
                }, null, 8, re)])]),
                _: 1
            }))
        }
    };
var de = x(Ae, [
        ["__scopeId", "data-v-7672fd0f"]
    ]),
    ue = "/assets/pl1.f1cc64a8.png",
    pe = "/assets/pl2.f81c8796.png",
    ge = "/assets/pl3.d89470a6.png",
    me = "/assets/pl4.d2768352.png",
    ve = "/assets/pr1.5b5cf511.png",
    he = "/assets/pr2.95d3e135.png",
    fe = "/assets/pr3.f1543a58.png",
    be = "/assets/pr4.cd52675e.png";
const xe = {
        class: "list-component left-h5"
    },
    we = {
        class: "list-title"
    },
    ye = ["src"],
    Se = {
        props: {
            list: {
                type: Array,
                required: !0
            }
        },
        setup(a) {
            const e = a;
            return (o, r) => (l(), A("ul", xe, [(l(!0), A(f, null, b(e.list, (n, s) => (l(), A("li", {
                key: n.title,
                style: y({
                    animationDelay: `${.1*s}s`
                }),
                class: "left wow slideInLeft"
            }, [t("span", we, p(n.title), 1), t("img", {
                class: "list-icon-left",
                src: n.icon,
                alt: ""
            }, null, 8, ye)], 4))), 128))]))
        }
    };
var W = x(Se, [
    ["__scopeId", "data-v-1fe537c5"]
]);
const Be = {
        class: "list-component right-h5"
    },
    Ne = ["src"],
    qe = {
        class: "list-title"
    },
    Te = {
        props: {
            list: {
                type: Array,
                required: !0
            }
        },
        setup(a) {
            const e = a;
            return (o, r) => (l(), A("ul", Be, [(l(!0), A(f, null, b(e.list, (n, s) => (l(), A("li", {
                style: y({
                    animationDelay: `${.1*s}s`
                }),
                key: n.title,
                class: "right wow slideInRight"
            }, [t("img", {
                class: "list-icon-right",
                src: n.icon,
                alt: ""
            }, null, 8, Ne), t("span", qe, p(n.title), 1)], 4))), 128))]))
        }
    };
var D = x(Te, [
        ["__scopeId", "data-v-44e2dab7"]
    ]),
    Ve = "/assets/product.3ab7481a.png";
const Ie = ["src"],
    X = {
        setup(a) {
            return (e, o) => (l(), A("img", {
                class: "product-img wow zoomIn",
                src: d(Ve),
                alt: ""
            }, null, 8, Ie))
        }
    };
const Ee = {
        class: "product-component"
    },
    Fe = {
        class: "pc-show pc-component"
    },
    ke = {
        class: "h5-show h5-component"
    },
    Oe = {
        class: "flex-box"
    },
    Ue = {
        setup(a) {
            const {
                t: e
            } = S(), o = [{
                title: e("product.pl1"),
                icon: ue
            }, {
                title: e("product.pl2"),
                icon: pe
            }, {
                title: e("product.pl3"),
                icon: ge
            }, {
                title: e("product.pl4"),
                icon: me
            }], r = [{
                title: e("product.pr1"),
                icon: ve
            }, {
                title: e("product.pr2"),
                icon: he
            }, {
                title: e("product.pr3"),
                icon: fe
            }, {
                title: e("product.pr4"),
                icon: be
            }];
            return (n, s) => (l(), V(N, null, {
                default: B(() => [t("div", Ee, [t("div", Fe, [m(W, {
                    list: o
                }), m(X), m(D, {
                    list: r
                })]), t("div", ke, [m(X), t("div", Oe, [m(W, {
                    list: o
                }), m(D, {
                    list: r
                })])])])]),
                _: 1
            }))
        }
    };
var Re = x(Ue, [
        ["__scopeId", "data-v-a0182862"]
    ]),
    Ce = "/assets/s1.70ac89e0.png",
    Me = "/assets/s2.c2314ba7.png",
    Je = "/assets/s3.98009a8b.png",
    Ye = "/assets/s4.546892b0.png",
    We = "/assets/s5.7a9848d0.png";
const De = {
        class: "service-component"
    },
    Xe = {
        class: "pc-show flex-box pc-box"
    },
    Qe = {
        class: "service-icon"
    },
    je = ["src"],
    Le = {
        class: "service-title small-font"
    },
    He = {
        class: "h5-show flex-box h5-box1"
    },
    Ge = {
        class: "service-icon"
    },
    Ke = ["src"],
    Ze = {
        class: "service-title small-font"
    },
    Pe = {
        class: "h5-show flex-box h5-box"
    },
    ze = {
        class: "service-icon"
    },
    _e = ["src"],
    $e = {
        class: "service-title small-font"
    },
    ts = {
        setup(a) {
            const {
                t: e
            } = S(), o = [{
                name: e("service.s1"),
                icon: Ce
            }, {
                name: e("service.s2"),
                icon: Me
            }, {
                name: e("service.s3"),
                icon: Je
            }, {
                name: e("service.s4"),
                icon: Ye
            }, {
                name: e("service.s5"),
                icon: We
            }];
            return (r, n) => (l(), V(N, null, {
                default: B(() => [t("div", De, [t("ul", Xe, [(l(), A(f, null, b(o, (s, i) => t("li", {
                    class: "service-list wow fadeIn",
                    style: y({
                        animationDelay: `${.15*i}s`
                    }),
                    key: i
                }, [t("div", Qe, [t("img", {
                    src: s.icon,
                    alt: ""
                }, null, 8, je)]), t("div", Le, p(s.name), 1)], 4)), 64))]), t("ul", He, [(l(!0), A(f, null, b(o.slice(0, 2), (s, i) => (l(), A("li", {
                    class: "service-list wow fadeIn",
                    style: y({
                        animationDelay: `${.1*i}s`
                    }),
                    key: s.name
                }, [t("div", Ge, [t("img", {
                    src: s.icon,
                    alt: ""
                }, null, 8, Ke)]), t("div", Ze, p(s.name), 1)], 4))), 128))]), t("ul", Pe, [(l(!0), A(f, null, b(o.slice(2, 5), (s, i) => (l(), A("li", {
                    class: "service-list wow fadeIn",
                    style: y({
                        animationDelay: `${.1*i+.1}s`
                    }),
                    key: s.name
                }, [t("div", ze, [t("img", {
                    src: s.icon,
                    alt: ""
                }, null, 8, _e)]), t("div", $e, p(s.name), 1)], 4))), 128))])])]),
                _: 1
            }))
        }
    };
var es = x(ts, [
        ["__scopeId", "data-v-f2490418"]
    ]),
    ss = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAA0FSURBVHgB3Vv/b1vVFT/3vufUpWhxNJWNIRobgbZqCOJMA6axNe4kBOtGEjZpYgKadNK0/dSUP4A0/AEroE1o+2FJJk2TJk1Jy0QH0xJXmgbTACesbDAk/FA7gZpBnNLSJH7vnp1z7r22qZo2cWz/wGnd9/29+7nn+zm3CjpIpZPPZlPKTAKoAfpFCtTYl+//yXHoIGnoIHVpNa90OKB0AErrXvr67D///OwAdJA6Brj04q/6dBBktQ6QfkA/xfuBSg1CBymEDlE6lcoogyTJoJA3Sk4rpbAbOkgdA8ykAhIoBqsdWjoyfKKD1DHAIX+KESrhLtIfZbF/SgELaU1GQwlwy1gEx+yOUecAhyHhVcJkUWFlt9Bhuirg0slj2RC7xsic3klDjdZ34ES+8NMImvlQvLoA6euRjZZAZXG2WnwKmiSk9ywen8qE6UtHSVgGSU/KMawfyj9wJNromavO8Osnf1HWSvUqtjLEEnIjEQTVwt4mQb/79z+ME9RxsLCZIuw6n8/lRyuwRcL5eXgT3sphoufAYK8xhqy/4UvLBLp/I9Ab+uE3/vTzQQKbZeEjDiP9WBCzCnfM/3t+MgtNUO/d35sgrX2IrPVReukYdultgI1yYFJzxIYsj415wn6dRtsdqq4NffuGIo2oemhg1mMqQQ3801pn6dx8eX6ykCuMRrAJKpdmMpDAAFnqXuJsD4leL52uaINj5VdmFsDQ6O8aXtjMuzxYrYizWmWZq8xdit4Qk0Q5V5DZ6PkNRbo0cyzTteu6dwhgDziwMpOyz7Opy7qq9ucKD0ewAcjQhIfpCwMkwgMybzxgq8R2y9qMKGOggfN7iolJpnNfHS5uBDaC93NJaOboOQKb0GMoooxGgPN7sGrwlvwDV1a7q+rwaQoHgyCYJ5AZAoiNnBbwoIq3fP0HhSsDVWP08m4nITJJ8kEBKW+yYAU9WjtGx2gPy4EyR27qf/ATicV/XzmhVtc+/jXdMMIvMSYB+6wFzGATYw7dft+PpzbCdE23cPrFyb5UioN+nVGXc5onAYNbcl8bjmRApeODxugpOs/hosTKHqW3UmhDD9kT0AbFRRnD59HNhoydbBFOJ7o6kcvb95dfmqHXxCQEpsZVsdUk0oa5XTWH9t73o6mr4blm8nD7faML9P0CjaridBgbt5CuiNE5U3puHDGcsRPDdi6wXCVr4qw8n5TzlESAva55H5UkE24i2TiScsq9So2EGM69V5rJ8je6UgHr54o1UBprUqeVoTOj1wIrcw+bpP/89bd9NKw6p5l7Sk1n7xoePfvqHyeJPyN+AFoJZ2uiTGc8p124oRqCLaxt7RlmmFFuRxnLxWUVq/07jVq4oNfGSJSPee6KWIMZvfXeR6Y3g2NLkU75pd+RoSCXooNemv0iu5mzpRPHAILDXtTBKrrFS4Eyw6ejCknsLGWECzTCdwlOJcSAhDLpobv2EcwBGnyfRGGsm2iU1U0W14SVncQ3WQ513B+kMtHFjz4cIW0YpIuVOE6mb/vGw8XNYthWaMdiTKI0LiC1FXNGqa0os1Ku0IWnLqyap3P5wob+Fk+fhiW11EcPjNGbHnMABahVUQcak3Ks4n7S6S37bk9NAyZrTGFn6h3moNM/bIjI2OtMX7yER64G9HI6d24e4AMYoYfHyQRn0VvgBgOVoHlqT/47j0OT1DTgM68+xwZqqO6bRa+FyzTMJz+3t3AUmiDEeXj/TcjR9M0BBygusLB+NhHzTUJf2NP/YFMxeFMlHuIu1aX0IBsjNlCuRmVt0jbAMilVgM9/CcoEcT+9c8U5f/FVTm3YOoxDk9QUYA4sGqIJb6J4L9oOWE8MOvgslIm7j4vrE9dGqqJsqEvn9p35x3MD0ARtGTD7RPoiizLyAGxSYS20BhyFFtENN1AAl95FQYwqKstdmz/b6dUYqgehCdoy4GoSDPgKHIAtX7iwsbh7b6EILaTdcBFVoCYcSOXcnkRo9GcImqAtA6bIaJ/olIuRrSSzZVZT0GJSORJtrU5pjvLAFjy1nVx22VnJwrZIkh7+64VfDmEQDHLqFzhrC976hkGFRHc2d/f3JZIho5RVPE8WqA0vaa9qmq9cXHWAcQwxBS30iRGbXNjvsjfo0l378PTvj0cV6FOhPmySOCuWnBMJ2hrrzyn7NNF6NZngDCp844VnuQpxVLkyog/tvdBqFh6lBssvz/Tk7hl+iq5kwQWHvrxMela58YuFCNpAVb0TIVl7XRyADUkVeWQZqllPeqJqKqe7cJ5cV7eNYzXLLV2muxIUC08PDKS0+ialvF8hS4AjThPBm38X+NZSOpCSsnqCRYjOZO19wOKFLs2LoE2UdF/P01oBKYXJ7NsLXPCkCowO4SAxkkXbFXzRppkILs9GrwPZcGfXQWZgRvmonS/a9KxWHrfpnGx76u+zAu1f2pnSo+MWeObwSMRNdbvitr3mEhWfjjoDy8LNfO/hWxdQZoeTccdhhDqjXZGRLixIDKtg2dZasaFiobZsPDZLwcoFCKhOBX4wbkg8ZNqskLaegFq9l2HgZfNfK/RjDHqKW1vsO2ddjuY4XH/Q6igUKYgddo+vuDIreA4T9ZZL820BHaYpRSRDWZNY+2HWI6VSqrxrZ2aejkdpwJG/6n6OaaJ+kUn0Q2K09traz3BpZjKTTq9mMJ0Gk1SBNkT0T/pCJdtQWSSERdqMNM4cZ7TXp8M+sNdaSsk657uUQlLKiHUsQnTp3ZvuKPDutPtdk2pVy/ywgLp2ZmNwEQJwumxArAhDVmaIZr3YYOi2TZxIVN6MsxTO9dV6M16eESu5/gObqnQ20tYjLV2ddU0SSdZ9vYKAHqwsFnughbQU7VJVCI7KB2xuzJMsE0yJ6Cw0QVsGzAU1+nQRbRnGDYJ0ymAmuS71s3PnTkMriIsCyerFHFngR8FYUUaru7auGXQIMBMZkWk3Aj/zYsdpEkb0cmUEcXugRZTjpZ5QBX8R3eUWCnqRlq9FN91x4AQ0QU0B3pM/MAUSbFjAtZnnyoTCY0tvV/IfvP0yNEPM2cqi6kl2hpMcxkqYCGjDRAZN3CbDcxSapKbXeFAB7pCPVFwZBm3RzXQT+teSJD5y/q1XFHNrs7Ry5m+qEizl4p0hdxYGbRXPS5GUeTgCKN+Y//ZvoEnalkk9W3p+koL4g7WOhE04bKVSalxqOkiqT4aprujSZ7px9272jbfXnhcgUUSuoQKYfMxlnMPcXaS567aibAt4vpBHNZ5lDWv9N7rCfMcBc2zdBTteI6Q5l6RLpqXq9Wgf2s2qIDhOAf5iKhUsmJjvrYL6KM7Eu8I+Kh2wnz1M3QcJc7lMK0W7hnYKnUOawrEv5O9/BrZB23aa5dLJbBfAHAHL+Zalbb754oDVGruQxX8OI5qQjA36/dIW73asEWRtsUV21hZO9czEzfkDE7BNakmU8B6BNgxaE2gp+7gKBShXvq3nGHwdPxHvYi12Zx31nTXpPtQ4a4izB7bFWU8tC4tYvFOw4wnpGrqim+0tubTT1mjQ9lBcz9R11SSYcK0VH2C485HBePTm/HdPQYuo5Znde4vPH6S2yjhI3qwV1Fegga/BYe3jrmXqu0uOw3RimbZPr5u1Z3L5oaa7DFeitqWyZ0snR+jtjylwzXDRZV9P8emlcmt62M1K6lVpF1BPLQfMA196o1g7TqqrWTI9A6SNfQT6TvogW+KM4zKDWqB8d4G69os7Uunagxd3URibK0CrqaWAqUMP60HSA1UzJDGNC2sCSa9kB+o7YoG5UoMqsXF54s5x7Mo5LHUbT+3JD2IrM7CWLkxbj9eGKJ2aJNXtljHKULkSZMRgER438qRmthRIk0z+apuC8Q22NxybUrQwvR82k7Zuklq2fJgXnNAgjxG4bmlvSqnU1CIl2/404lMlikpcY8zwwhR2PvZ+ue6fR+wzl9Ij0EJqGYcjeJ9qwlSzVrZEZOyCFdf0V35dh1vMAvXSqBDW/7FtUc9p5vUd0EJqGYdl+RLisuWqa23yNrFFceZkQ0zMnV4JIrFWOOd7ExdkGbTrrxKGXoQWUktXxJs4edyLrZNnlBa2aQBgxRzdVpSV7jFO1OkotsDt6eKt9/6w6czoStRyt8TLElMQ9JFg2ipmEFx2R+Mcm4Zzpn46SVgfotsKj7YswvLUtsCDicDn6AOHqTd1Z+MXuTclVQyv2U5dKS6bwh3B9G33PALtoratl2af/NH5D+bIXPWib4LxBfFAzgdjwwPsvAD2waWEJeNpaBO17X+1VM7/b5D0Msur5mxOa40Z+q3NdxHqOo+SJsbJE9BGahuHcW2txwQuF/atP3cgOG0crVwCIT0s/ISrag+1jcPV1dVZYt2HLrf1K3DABhqJdVXkspLEByQ+CEmaKr9ultoGOD98pFJV5lvkYkoChEU5sS7K+H1Z/hvTfswTQoUtM1Vd3dn0GqzN0P8BuAHFhCRQ6ucAAAAASUVORK5CYII=",
    ns = "data:image/png;base64,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",
    os = "data:image/png;base64,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",
    as = "data:image/png;base64,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";
const is = {
        class: "technology-component"
    },
    ls = {
        class: "pc-show flex-box t-box"
    },
    cs = ["src"],
    rs = {
        class: "technology-text"
    },
    As = {
        class: "technology-title big-font"
    },
    ds = {
        class: "span-text"
    },
    us = {
        class: "h5-show flex-box t-box"
    },
    ps = ["src"],
    gs = {
        class: "technology-text"
    },
    ms = {
        class: "technology-title big-font"
    },
    vs = {
        class: "span-text"
    },
    hs = {
        style: {
            float: "left",
            display: "block",
            width: "100%",
            "padding-top": "50px"
        }
    };

function F(a) {
    download(a)
}
const fs = {
    setup(a) {
        const {
            t: e
        } = S(), o = [{
            title: e("technology.t1"),
            text: e("technology.s1"),
            icon: ss
        }, {
            title: e("technology.t2"),
            text: e("technology.s2"),
            icon: ns
        }, {
            title: e("technology.t3"),
            text: e("technology.s3"),
            icon: os
        }, {
            title: e("technology.t4"),
            text: e("technology.s4"),
            icon: as
        }];
        return (r, n) => (l(), V(N, null, {
            default: B(() => [t("div", is, [t("ul", ls, [(l(), A(f, null, b(o, (s, i) => t("li", {
                class: "technology-list wow fadeIn",
                style: y({
                    animationDelay: `${.15*i}s`
                })
            }, [t("img", {
                src: s.icon,
                class: "technology-icon",
                alt: ""
            }, null, 8, cs), t("div", rs, [t("p", As, p(s.title), 1), t("p", ds, p(s.text), 1)])], 4)), 64))]), t("ul", us, [(l(), A(f, null, b(o, (s, i) => t("li", {
                class: "technology-list wow fadeIn",
                style: y({
                    animationDelay: `${.15*i}s`
                })
            }, [t("img", {
                src: s.icon,
                class: "technology-icon",
                alt: ""
            }, null, 8, ps), t("div", gs, [t("p", ms, p(s.title), 1), t("p", vs, p(s.text), 1)])], 4)), 64))]), t("div", hs, [t("div", {
                class: "downbtn",
                onClick: n[0] || (n[0] = s => F(0))
            }, "\u82F1\u8BED"), t("div", {
                class: "downbtn",
                onClick: n[1] || (n[1] = s => F(1))
            }, "\u8461\u8404\u7259\u8BED"), t("div", {
                class: "downbtn",
                onClick: n[2] || (n[2] = s => F(2))
            }, "\u897F\u73ED\u7259\u8BED"), t("div", {
                class: "downbtn",
                onClick: n[3] || (n[3] = s => F(3))
            }, "\u6CF0\u8BED")])])]),
            _: 1
        }))
    }
};
var bs = x(fs, [
        ["__scopeId", "data-v-40aa87eb"]
    ]),
    xs = "/assets/c1.6e672a6e.png",
    ws = "/assets/c2.19d1a7fe.png";
const j = () => {
    const a = window.location.pathname.replace(/^\//, "").split("/");
    let e = "";
    return a.length <= 1 ? e = a[0] : e = a[1], e
};
const ys = {
        class: "cooperate-component"
    },
    Ss = {
        class: "pc-show cooperate-ul"
    },
    Bs = {
        class: "cooperate-contact"
    },
    Ns = ["onClick"],
    qs = ["src"],
    Ts = {
        class: "cooperate-text"
    },
    Vs = {
        class: "c-introduction wow fadeInUp"
    },
    Is = {
        class: "h5-show cooperate-ul"
    },
    Es = {
        class: "cooperate-contact"
    },
    Fs = ["onClick"],
    ks = ["src"],
    Os = {
        class: "cooperate-text"
    },
    Us = {
        class: "c-introduction wow fadeInUp"
    },
    Rs = {
        setup(a) {
            const {
                t: e
            } = S(), o = j(), r = [{
                name: "Telegram",
                icon: xs,
                value: o === "1002" ? "@tbetlinna" : "@Tbetsw88",
                link: `https://t.me/${o==="1002"?"tbetlinna":"Tbetsw88"}`
            }, {
                name: "WhatsApp",
                icon: ws,
                value: o === "1002" ? " +917828303691" : "+447599588888",
                link: `https://api.whatsapp.com/send?phone=${o==="1002"?"917828303691":"447599588888"}`
            }], n = s => {
                const i = window.open();
                i.location.href = s.link
            };
            return (s, i) => (l(), V(N, null, {
                default: B(() => [t("div", ys, [t("div", Ss, [t("div", Bs, [(l(), A(f, null, b(r, (c, v) => t("div", {
                    class: "cooperate-list wow fadeIn",
                    style: y({
                        animationDelay: `${.15*v}s`
                    }),
                    onClick: g => n(c)
                }, [t("img", {
                    src: c.icon,
                    class: "cooperate-icon",
                    alt: ""
                }, null, 8, qs), t("p", Ts, p(c.name) + " : " + p(c.value), 1)], 12, Ns)), 64))]), t("div", Vs, p(d(e)("cooperate.introduction")), 1)]), t("div", Is, [t("div", Es, [(l(), A(f, null, b(r, (c, v) => t("div", {
                    class: "cooperate-list wow fadeIn",
                    style: y({
                        animationDelay: `${.15*v}s`
                    }),
                    onClick: g => n(c)
                }, [t("img", {
                    src: c.icon,
                    class: "cooperate-icon",
                    alt: ""
                }, null, 8, ks), t("p", Os, p(c.name) + " : " + p(c.value), 1)], 12, Fs)), 64))]), t("div", Us, p(d(e)("cooperate.introduction")), 1)])])]),
                _: 1
            }))
        }
    };
var Cs = x(Rs, [
        ["__scopeId", "data-v-1f57b36a"]
    ]),
    Ms = "/assets/tg.a1b7c65e.png",
    Js = "/assets/wa.cefec338.png";
const Ys = {
        class: "footer-component"
    },
    Ws = {
        class: "footer-c"
    },
    Ds = {
        class: "pc-show flex-box pc-box"
    },
    Xs = {
        class: "footer-first"
    },
    Qs = {
        class: "contact-now flex-box"
    },
    js = ["onClick"],
    Ls = ["src"],
    Hs = {
        class: "footer-text"
    },
    Gs = {
        class: "h5-show flex-box h5-box"
    },
    Ks = {
        class: "footer-first"
    },
    Zs = {
        class: "contact-now"
    },
    Ps = ["onClick"],
    zs = ["src"],
    _s = {
        class: "footer-text"
    },
    $s = {
        setup(a) {
            const e = j(),
                {
                    t: o
                } = S(),
                r = [{
                    name: "Telegram",
                    value: e === "1002" ? "@tbetlinna" : "@Tbetsw88",
                    icon: Ms,
                    link: `https://t.me/${e==="1002"?"tbetlinna":"Tbetsw88"}`
                }, {
                    name: "WhatsApp",
                    value: e === "1002" ? " +917828303691" : "+447599588888",
                    icon: Js,
                    link: `https://api.whatsapp.com/send?phone=${e==="1002"?"917828303691":"447599588888"}`
                }],
                n = s => {
                    const i = window.open();
                    i.location.href = s.link
                };
            return (s, i) => (l(), A("div", Ys, [m(N, null, {
                default: B(() => [t("div", Ws, [t("div", Ds, [t("div", Xs, [t("p", {
                    onClick: i[0] || (i[0] = c => n({
                        link: ""
                    }))
                }, p(d(o)("footer.tg")) + " :  ", 1)]), t("div", Qs, [(l(), A(f, null, b(r, c => t("div", {
                    class: "flex-box contact-list",
                    onClick: v => n(c)
                }, [t("img", {
                    src: c.icon,
                    class: "footer-icon",
                    alt: ""
                }, null, 8, Ls), t("span", Hs, p(c.name) + " : " + p(c.value), 1)], 8, js)), 64))])]), t("div", Gs, [t("div", Ks, [t("p", {
                    onClick: i[1] || (i[1] = c => n({
                        link: ""
                    }))
                }, p(d(o)("footer.tg")) + " :  ", 1)]), t("div", Zs, [(l(), A(f, null, b(r, c => t("div", {
                    class: "flex-box contact-list",
                    onClick: v => n(c)
                }, [t("img", {
                    src: c.icon,
                    class: "footer-icon",
                    alt: ""
                }, null, 8, zs), t("span", _s, p(c.name) + " : " + p(c.value), 1)], 8, Ps)), 64))])])])]),
                _: 1
            })]))
        }
    };
var tn = x($s, [
    ["__scopeId", "data-v-42e10c5f"]
]);
const en = {
        key: 0,
        class: "main"
    },
    sn = {
        setup(a) {
            const e = Z(!0),
                {
                    t: o,
                    locale: r
                } = S();
            P(() => r, s => {
                e.value = !1, _(() => {
                    e.value = !0
                })
            }, {
                deep: !0
            });
            const n = s => {
                sessionStorage.lang = s, document.querySelector("html").setAttribute("lang", s), r.value = s
            };
            return M(() => {
                let s = new WOW({
                    animateClass: "animated"
                });
                s.element = document.getElementById("app"), s.init();
                const i = window.location.pathname.replace(/^\//, "").split("/")[0];
                n(i === "en" ? "en" : "cn")
            }), (s, i) => e.value ? (l(), A("div", en, [m(kt), m(Zt, {
                id: "home"
            }), m(I, {
                id: "brand",
                title: d(o)("home.brandName"),
                text: d(o)("home.brandText")
            }, null, 8, ["title", "text"]), m(de), m(I, {
                id: "product",
                title: d(o)("product.name"),
                text: d(o)("product.text")
            }, null, 8, ["title", "text"]), m(Re), m(I, {
                id: "service",
                title: d(o)("service.name"),
                text: d(o)("service.text")
            }, null, 8, ["title", "text"]), m(es), m(I, {
                id: "technology",
                title: d(o)("technology.name"),
                text: d(o)("technology.text")
            }, null, 8, ["title", "text"]), m(bs), m(I, {
                id: "cooperate",
                title: d(o)("cooperate.name"),
                text: d(o)("cooperate.text")
            }, null, 8, ["title", "text"]), m(Cs), m(tn)])) : z("", !0)
        }
    };
var nn = {
        name: "en-US",
        navList: {
            home: "Home",
            brand: "Brand advantages",
            product: "Product highlights",
            service: "Service planning",
            technology: "Excellent Tech",
            cooperate: "Business Cooperation"
        },
        home: {
            brandName: "Brand advantages",
            brandText: "Only do for the best in the industry"
        },
        brand: {
            t1Title: "Creating mature and stable product ",
            t1Text: "original Application creation, Best design, and Smooth experience",
            t2Title: "Exclusive and only Channel",
            t2Text: "Our group provides exclusive high-quality payment channels as your security guard. ",
            t3Title: "Hyper intelligent risk control system",
            t3Text: "Ultra-intelligent risk control system, anti-fraud, guarantee benefits for platform and users.",
            t4Title: "Custom LOGO",
            t4Text: " International design team custom LOGO, fully upgrade for your brand."
        },
        product: {
            name: "Product highlights",
            text: " Selected top Rummy games which contains diversity plays",
            pl1: "Auto verify withdraw",
            pl2: "Intelligence activity system",
            pl3: "Word leading gaming platform develop  Tech",
            pl4: "all guarantee for recharge and withdraw",
            pr1: "AI risk alarm function",
            pr2: "7*24 service ",
            pr3: "Merchant self build recharge channel ",
            pr4: "Free transfer wallet "
        },
        service: {
            name: "Service planning",
            text: "High quality custom service",
            s1: "Communication",
            s2: "Confirmed",
            s3: "Oder",
            s4: "Build",
            s5: "Publish"
        },
        technology: {
            name: "Excellent Technology",
            text: "Excellent tech as your security guard",
            t1: "Intelligent system",
            s1: "Powerful and stable back end provides multiple data analysis, providing your income in anytime to improving operation",
            t2: "International function",
            s2: "Multiple language to satisfy in different countries.",
            t3: "Professional cloud planning",
            s3: "Customized most effective profitable plan by our specialized team",
            t4: "Anti-hijacking system",
            s4: "Self-developed anti-hijacking browser\uFF0C and military-grade encryption algorithm"
        },
        cooperate: {
            name: " Business cooperation",
            text: "Contact us, win-win cooperation",
            introduction: "Tbet is partnering with known company, we are happy to help new brand to create wealth! Massive Rummy games, one-stop service, looking forward to creating brilliance with you "
        },
        footer: {
            tg: "follow our Telegram channel ",
            phone: "Phone number",
            email: "Email"
        }
    },
    on = {
        name: "cn-ZH",
        navList: {
            home: "\u9996\u9875",
            brand: "\u54C1\u724C\u4F18\u52BF",
            product: "\u4EA7\u54C1\u4EAE\u70B9",
            service: "\u670D\u52A1\u65B9\u6848",
            technology: "\u5353\u8D8A\u6280\u672F",
            cooperate: "\u5546\u52A1\u5408\u4F5C"
        },
        home: {
            brandName: "\u4E1A\u5185\u7B2C\u4E00Slots\u5305\u7F51",
            brandText: "\u4E09\u5E74\u6C89\u6DC0\u8BBE\u8BA1\uFF0C\u53EA\u4E3A\u4E1A\u5185\u7B2C\u4E00"
        },
        brand: {
            t1Title: "\u7EAF\u539F\u751FAPP\u652F\u6301",
            t1Text: "APP\u4EA7\u54C1\u7EAF\u539F\u751F\u6253\u9020\uFF0C\u8BBE\u8BA1\u7CBE\u7F8E\u70ED\u95E8\u7248\u9762\uFF0C\u4F53\u9A8C\u6781\u81F4\u6D41\u7545",
            t2Title: "Slot\u4E13\u4E1A\u6570\u503C\u8BBE\u8BA1",
            t2Text: "\u96C6\u56E2\u4F7F\u7528\u4E09\u5E74\u65F6\u95F4\uFF0C\u8BBE\u8BA1\u51FA\u8D34\u8FD1\u7EBF\u4E0B\u8D4C\u573A\u6570\u503C\u8BBE\u8BA1\uFF0C\u5927\u5927\u63D0\u5347\u7559\u5B58",
            t3Title: "\u8D85\u5B89\u5168\u670D\u52A1\u5668\u7CFB\u7EDF\u8BBE\u8BA1",
            t3Text: "\u4F7F\u7528\u56FD\u9645\u5927\u5382\u670D\u52A1\u5668\u3001CDN\u3001WAF\uFF0C\u6700\u9AD8\u5F3A\u5EA6\u7684\u9632\u62A4CC\u653B\u51FB\uFF0CDDOS\u653B\u51FB\u3002",
            t4Title: "\u4E13\u6CE8\u4E8E\u56FD\u9645\u7535\u5B50\u6E38\u620FSlots",
            t4Text: "\u96C6\u56E2\u4EE5\u6B27\u7F8E\u4F53\u7CFB\u7684\u5BA1\u7F8E\u8FDB\u884C\u4E13\u4E1ASlots\u8BBE\u8BA1\uFF0C\u66F4\u7B26\u5408\u4E1C\u5357\u4E9A\uFF0C\u5357\u7F8E\uFF0C\u6B27\u6D32\u7B49\u56FD\u5BB6\u5BA1\u7F8E"
        },
        product: {
            name: "\u4EA7\u54C1\u4EAE\u70B9",
            text: "\u4E1A\u5185\u72EC\u4E00\u65E0\u4E8C\u7684Slots\u73A9\u6CD5\u8BBE\u8BA1 \u6BCF\u6708\u65B0\u589E\u4E0D\u540C\u6E38\u620F\u73A9\u6CD5",
            pl1: "\u4E1A\u5185\u72EC\u4E00\u65E0\u4E8CSlot\u73A9\u6CD5",
            pl2: "\u4E13\u4E1A\u9488\u5BF9\u6027\u6570\u503C\u8BBE\u8BA1",
            pl3: "\u5168\u7403\u9886\u5148\u670D\u52A1\u5668\u53CA\u5B89\u5168\u8BBE\u8BA1",
            pl4: "24*365\u4E0D\u95F4\u65AD\u7A33\u5B9A\u670D\u52A1",
            pr1: "\u6BCF\u6708\u65B0\u589E\u4E00\u6B3E\u65B0\u6E38\u620F",
            pr2: "\u65B0\u7AD9\u4E13\u4EBA\u8DDF\u8E2A\u534F\u52A9\u6307\u5BFC",
            pr3: "\u53EF\u81EA\u7531\u8BBE\u8BA1\u5404\u79CD\u6D3B\u52A8",
            pr4: "\u5BA2\u6237\u7559\u5B58\u7387\u4E1A\u5185\u7B2C\u4E00"
        },
        service: {
            name: "\u670D\u52A1\u65B9\u6848",
            text: "\u81F4\u529B\u4E3A\u5BA2\u6237\u63D0\u4F9B\u5168\u65B9\u4F4D\u54C1\u8D28\u670D\u52A1",
            s1: "\u6D3D\u8C08",
            s2: "\u786E\u8BA4\u65B9\u6848",
            s3: "\u6536\u8BA2",
            s4: "\u5EFA\u7F6E",
            s5: "\u4E0A\u7EBF"
        },
        technology: {
            name: "\u5353\u8D8A\u6280\u672F",
            text: "\u9876\u7EA7\u6280\u672F\u52A0\u6301  \u4E3A\u60A8\u4FDD\u9A7E\u62A4\u822A",
            t1: "\u667A\u80FD\u540E\u53F0\u7CFB\u7EDF",
            s1: "\u5F3A\u5927\u7A33\u5B9A\u540E\u53F0\u63D0\u4F9B\u591A\u91CD\u6570\u636E\u5206\u6790\uFF0C\u968F\u65F6\u63D0\u4F9B\u60A8\u6BCF\u6B3E\u6E38\u620F\u5728\u6BCF\u4E2A\u65F6\u95F4\u6BB5\u7684\u6536\u76CA\uFF0C\u63D0\u9AD8\u8FD0\u8425\u6548\u7387",
            t2: "\u7279\u8272\u56FD\u9645\u5316\u529F\u80FD",
            s2: "\u540E\u53F0\u591A\u8BED\u8A00\u4EFB\u610F\u5207\u6362\uFF0C\u6EE1\u8DB3\u4E0D\u540C\u56FD\u5BB6\u5730\u533A\u8FD0\u8425\u9700\u6C42\uFF0C\u5C0A\u4EAB\u591A\u8BED\u79CD\u5B9A\u5236\u670D\u52A1\uFF0C\u4E00\u5BF9\u4E00\u8D34\u5FC3\u54A8\u8BE2",
            t3: "\u652F\u6301\u8BED\u79CD",
            s3: "\u76EE\u524D\u652F\u63014\u79CD\u5927\u8BED\u7CFB\uFF1A\u82F1\u8BED\u7CFB\u3001\u6CF0\u8BED\u3001\u8461\u8404\u7259\u8BED\u7CFB(\u5DF4\u897F\u7B49\u56FD\u5BB6)\uFF0C\u897F\u73ED\u7259\u8BED\u7CFB( \u58A8\u897F\u54E5\u7B49\u56FD\u5BB6)",
            t4: "\u4E13\u4E1A\u539F\u751FAPP\u652F\u6301",
            s4: "\u4E13\u4E1A\u539F\u751FAPP\u652F\u6301\uFF0C\u4E0D\u9650\u5236\u63D0\u4F9B\u539F\u751FAPK\u5305\uFF0C\u4E13\u4E1A\u56E2\u961F\u534F\u52A9\u652F\u6301\u4E0A\u67B6\u8C37\u6B4C"
        },
        cooperate: {
            name: "\u5546\u52A1\u5408\u4F5C",
            text: "\u8054\u7CFB\u6211\u4EEC \u5408\u4F5C\u5171\u8D62",
            introduction: "\u5929\u535A\u613F\u4E0E\u77E5\u540D\u54C1\u724C\u5F3A\u5F3A\u8054\u624B\uFF0C\u4E5F\u4E50\u4E8E\u52A9\u529B\u65B0\u54C1\u724C\u5F00\u542F\u8D22\u5BCC\u4E4B\u8DEF\uFF01\u6D77\u91CFSlots\u6E38\u620F\uFF0C\u4E00\u7AD9\u5F0F\u670D\u52A1\uFF0C\u671F\u5F85\u4E0E\u60A8\u5171\u521B\u8F89\u714C\uFF01"
        },
        footer: {
            tg: "\u5173\u6CE8TG\u9891\u9053",
            phone: "\u7535\u8BDD",
            email: "\u90AE\u7BB1"
        }
    };
const an = tt({
    legacy: !1,
    locale: sessionStorage.lang || "cn",
    messages: {
        en: nn,
        cn: on
    }
});
async function ln() {}
$(sn).use(an).mount("#app");
ln();