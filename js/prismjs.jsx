/**
 * Minified by jsDelivr using Terser v3.14.1.
 * Original file: /npm/prismjs@1.17.1/prism.js
 * 
 * Do NOT use SRI with dynamically generated files! More information: https://www.jsdelivr.com/using-sri-with-dynamic-files
 */
var _self = "undefined" != typeof window ? window : "undefined" != typeof WorkerGlobalScope && self instanceof WorkerGlobalScope ? self : {},
    Prism = function(e) {
        var t = /\blang(?:uage)?-([\w-]+)\b/i,
            a = 0,
            n = {
                manual: e.Prism && e.Prism.manual,
                disableWorkerMessageHandler: e.Prism && e.Prism.disableWorkerMessageHandler,
                util: {
                    encode: function(e) {
                        return e instanceof r ? new r(e.type, n.util.encode(e.content), e.alias) : Array.isArray(e) ? e.map(n.util.encode) : e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/\u00a0/g, " ")
                    },
                    type: function(e) {
                        return Object.prototype.toString.call(e).slice(8, -1)
                    },
                    objId: function(e) {
                        return e.__id || Object.defineProperty(e, "__id", {
                            value: ++a
                        }), e.__id
                    },
                    clone: function e(t, a) {
                        var r, s, i = n.util.type(t);
                        switch (a = a || {}, i) {
                            case "Object":
                                if (s = n.util.objId(t), a[s]) return a[s];
                                for (var l in r = {}, a[s] = r, t) t.hasOwnProperty(l) && (r[l] = e(t[l], a));
                                return r;
                            case "Array":
                                return s = n.util.objId(t), a[s] ? a[s] : (r = [], a[s] = r, t.forEach(function(t, n) {
                                    r[n] = e(t, a)
                                }), r);
                            default:
                                return t
                        }
                    }
                },
                languages: {
                    extend: function(e, t) {
                        var a = n.util.clone(n.languages[e]);
                        for (var r in t) a[r] = t[r];
                        return a
                    },
                    insertBefore: function(e, t, a, r) {
                        var s = (r = r || n.languages)[e],
                            i = {};
                        for (var l in s)
                            if (s.hasOwnProperty(l)) {
                                if (l == t)
                                    for (var o in a) a.hasOwnProperty(o) && (i[o] = a[o]);
                                a.hasOwnProperty(l) || (i[l] = s[l])
                            }
                        var u = r[e];
                        return r[e] = i, n.languages.DFS(n.languages, function(t, a) {
                            a === u && t != e && (this[t] = i)
                        }), i
                    },
                    DFS: function e(t, a, r, s) {
                        s = s || {};
                        var i = n.util.objId;
                        for (var l in t)
                            if (t.hasOwnProperty(l)) {
                                a.call(t, l, t[l], r || l);
                                var o = t[l],
                                    u = n.util.type(o);
                                "Object" !== u || s[i(o)] ? "Array" !== u || s[i(o)] || (s[i(o)] = !0, e(o, a, l, s)) : (s[i(o)] = !0, e(o, a, null, s))
                            }
                    }
                },
                plugins: {},
                highlightAll: function(e, t) {
                    n.highlightAllUnder(document, e, t)
                },
                highlightAllUnder: function(e, t, a) {
                    var r = {
                        callback: a,
                        selector: 'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'
                    };
                    n.hooks.run("before-highlightall", r);
                    for (var s, i = e.querySelectorAll(r.selector), l = 0; s = i[l++];) n.highlightElement(s, !0 === t, r.callback)
                },
                highlightElement: function(a, r, s) {
                    for (var i, l = "none", o = a; o && !t.test(o.className);) o = o.parentNode;
                    o && (l = (o.className.match(t) || [, "none"])[1].toLowerCase(), i = n.languages[l]), a.className = a.className.replace(t, "").replace(/\s+/g, " ") + " language-" + l, a.parentNode && (o = a.parentNode, /pre/i.test(o.nodeName) && (o.className = o.className.replace(t, "").replace(/\s+/g, " ") + " language-" + l));
                    var u = {
                            element: a,
                            language: l,
                            grammar: i,
                            code: a.textContent
                        },
                        c = function(e) {
                            u.highlightedCode = e, n.hooks.run("before-insert", u), u.element.innerHTML = u.highlightedCode, n.hooks.run("after-highlight", u), n.hooks.run("complete", u), s && s.call(u.element)
                        };
                    if (n.hooks.run("before-sanity-check", u), u.code)
                        if (n.hooks.run("before-highlight", u), u.grammar)
                            if (r && e.Worker) {
                                var g = new Worker(n.filename);
                                g.onmessage = function(e) {
                                    c(e.data)
                                }, g.postMessage(JSON.stringify({
                                    language: u.language,
                                    code: u.code,
                                    immediateClose: !0
                                }))
                            } else c(n.highlight(u.code, u.grammar, u.language));
                    else c(n.util.encode(u.code));
                    else n.hooks.run("complete", u)
                },
                highlight: function(e, t, a) {
                    var s = {
                        code: e,
                        grammar: t,
                        language: a
                    };
                    return n.hooks.run("before-tokenize", s), s.tokens = n.tokenize(s.code, s.grammar), n.hooks.run("after-tokenize", s), r.stringify(n.util.encode(s.tokens), s.language)
                },
                matchGrammar: function(e, t, a, s, i, l, o) {
                    for (var u in a)
                        if (a.hasOwnProperty(u) && a[u]) {
                            if (u == o) return;
                            var c = a[u];
                            c = "Array" === n.util.type(c) ? c : [c];
                            for (var g = 0; g < c.length; ++g) {
                                var d = c[g],
                                    p = d.inside,
                                    m = !!d.lookbehind,
                                    f = !!d.greedy,
                                    h = 0,
                                    b = d.alias;
                                if (f && !d.pattern.global) {
                                    var y = d.pattern.toString().match(/[imuy]*$/)[0];
                                    d.pattern = RegExp(d.pattern.source, y + "g")
                                }
                                d = d.pattern || d;
                                for (var F = s, v = i; F < t.length; v += t[F].length, ++F) {
                                    var k = t[F];
                                    if (t.length > e.length) return;
                                    if (!(k instanceof r)) {
                                        if (f && F != t.length - 1) {
                                            if (d.lastIndex = v, !(S = d.exec(e))) break;
                                            for (var w = S.index + (m ? S[1].length : 0), A = S.index + S[0].length, x = F, P = v, $ = t.length; x < $ && (P < A || !t[x].type && !t[x - 1].greedy); ++x) w >= (P += t[x].length) && (++F, v = P);
                                            if (t[F] instanceof r) continue;
                                            _ = x - F, k = e.slice(v, P), S.index -= v
                                        } else {
                                            d.lastIndex = 0;
                                            var S = d.exec(k),
                                                _ = 1
                                        }
                                        if (S) {
                                            m && (h = S[1] ? S[1].length : 0);
                                            A = (w = S.index + h) + (S = S[0].slice(h)).length;
                                            var j = k.slice(0, w),
                                                C = k.slice(A),
                                                E = [F, _];
                                            j && (++F, v += j.length, E.push(j));
                                            var N = new r(u, p ? n.tokenize(S, p) : S, b, S, f);
                                            if (E.push(N), C && E.push(C), Array.prototype.splice.apply(t, E), 1 != _ && n.matchGrammar(e, t, a, F, v, !0, u), l) break
                                        } else if (l) break
                                    }
                                }
                            }
                        }
                },
                tokenize: function(e, t) {
                    var a = [e],
                        r = t.rest;
                    if (r) {
                        for (var s in r) t[s] = r[s];
                        delete t.rest
                    }
                    return n.matchGrammar(e, a, t, 0, 0, !1), a
                },
                hooks: {
                    all: {},
                    add: function(e, t) {
                        var a = n.hooks.all;
                        a[e] = a[e] || [], a[e].push(t)
                    },
                    run: function(e, t) {
                        var a = n.hooks.all[e];
                        if (a && a.length)
                            for (var r, s = 0; r = a[s++];) r(t)
                    }
                },
                Token: r
            };

        function r(e, t, a, n, r) {
            this.type = e, this.content = t, this.alias = a, this.length = 0 | (n || "").length, this.greedy = !!r
        }
        if (e.Prism = n, r.stringify = function(e, t) {
                if ("string" == typeof e) return e;
                if (Array.isArray(e)) return e.map(function(e) {
                    return r.stringify(e, t)
                }).join("");
                var a = {
                    type: e.type,
                    content: r.stringify(e.content, t),
                    tag: "span",
                    classes: ["token", e.type],
                    attributes: {},
                    language: t
                };
                if (e.alias) {
                    var s = Array.isArray(e.alias) ? e.alias : [e.alias];
                    Array.prototype.push.apply(a.classes, s)
                }
                n.hooks.run("wrap", a);
                var i = Object.keys(a.attributes).map(function(e) {
                    return e + '="' + (a.attributes[e] || "").replace(/"/g, "&quot;") + '"'
                }).join(" ");
                return "<" + a.tag + ' class="' + a.classes.join(" ") + '"' + (i ? " " + i : "") + ">" + a.content + "</" + a.tag + ">"
            }, !e.document) return e.addEventListener ? (n.disableWorkerMessageHandler || e.addEventListener("message", function(t) {
            var a = JSON.parse(t.data),
                r = a.language,
                s = a.code,
                i = a.immediateClose;
            e.postMessage(n.highlight(s, n.languages[r], r)), i && e.close()
        }, !1), n) : n;
        var s = document.currentScript || [].slice.call(document.getElementsByTagName("script")).pop();
        return s && (n.filename = s.src, n.manual || s.hasAttribute("data-manual") || ("loading" !== document.readyState ? window.requestAnimationFrame ? window.requestAnimationFrame(n.highlightAll) : window.setTimeout(n.highlightAll, 16) : document.addEventListener("DOMContentLoaded", n.highlightAll))), n
    }(_self);
"undefined" != typeof module && module.exports && (module.exports = Prism), "undefined" != typeof global && (global.Prism = Prism), Prism.languages.markup = {
        comment: /<!--[\s\S]*?-->/,
        prolog: /<\?[\s\S]+?\?>/,
        doctype: /<!DOCTYPE[\s\S]+?>/i,
        cdata: /<!\[CDATA\[[\s\S]*?]]>/i,
        tag: {
            pattern: /<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s\/>])))+)?\s*\/?>/i,
            greedy: !0,
            inside: {
                tag: {
                    pattern: /^<\/?[^\s>\/]+/i,
                    inside: {
                        punctuation: /^<\/?/,
                        namespace: /^[^\s>\/:]+:/
                    }
                },
                "attr-value": {
                    pattern: /=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/i,
                    inside: {
                        punctuation: [/^=/, {
                            pattern: /^(\s*)["']|["']$/,
                            lookbehind: !0
                        }]
                    }
                },
                punctuation: /\/?>/,
                "attr-name": {
                    pattern: /[^\s>\/]+/,
                    inside: {
                        namespace: /^[^\s>\/:]+:/
                    }
                }
            }
        },
        entity: /&#?[\da-z]{1,8};/i
    }, Prism.languages.markup.tag.inside["attr-value"].inside.entity = Prism.languages.markup.entity, Prism.hooks.add("wrap", function(e) {
        "entity" === e.type && (e.attributes.title = e.content.replace(/&amp;/, "&"))
    }), Object.defineProperty(Prism.languages.markup.tag, "addInlined", {
        value: function(e, t) {
            var a = {};
            a["language-" + t] = {
                pattern: /(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,
                lookbehind: !0,
                inside: Prism.languages[t]
            }, a.cdata = /^<!\[CDATA\[|\]\]>$/i;
            var n = {
                "included-cdata": {
                    pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i,
                    inside: a
                }
            };
            n["language-" + t] = {
                pattern: /[\s\S]+/,
                inside: Prism.languages[t]
            };
            var r = {};
            r[e] = {
                pattern: RegExp(/(<__[\s\S]*?>)(?:<!\[CDATA\[[\s\S]*?\]\]>\s*|[\s\S])*?(?=<\/__>)/.source.replace(/__/g, e), "i"),
                lookbehind: !0,
                greedy: !0,
                inside: n
            }, Prism.languages.insertBefore("markup", "cdata", r)
        }
    }), Prism.languages.xml = Prism.languages.extend("markup", {}), Prism.languages.html = Prism.languages.markup, Prism.languages.mathml = Prism.languages.markup, Prism.languages.svg = Prism.languages.markup,
    function(e) {
        var t = /("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/;
        e.languages.css = {
            comment: /\/\*[\s\S]*?\*\//,
            atrule: {
                pattern: /@[\w-]+[\s\S]*?(?:;|(?=\s*\{))/,
                inside: {
                    rule: /@[\w-]+/
                }
            },
            url: {
                pattern: RegExp("url\\((?:" + t.source + "|[^\n\r()]*)\\)", "i"),
                inside: {
                    function: /^url/i,
                    punctuation: /^\(|\)$/
                }
            },
            selector: RegExp("[^{}\\s](?:[^{};\"']|" + t.source + ")*?(?=\\s*\\{)"),
            string: {
                pattern: t,
                greedy: !0
            },
            property: /[-_a-z\xA0-\uFFFF][-\w\xA0-\uFFFF]*(?=\s*:)/i,
            important: /!important\b/i,
            function: /[-a-z0-9]+(?=\()/i,
            punctuation: /[(){};:,]/
        }, e.languages.css.atrule.inside.rest = e.languages.css;
        var a = e.languages.markup;
        a && (a.tag.addInlined("style", "css"), e.languages.insertBefore("inside", "attr-value", {
            "style-attr": {
                pattern: /\s*style=("|')(?:\\[\s\S]|(?!\1)[^\\])*\1/i,
                inside: {
                    "attr-name": {
                        pattern: /^\s*style/i,
                        inside: a.tag.inside
                    },
                    punctuation: /^\s*=\s*['"]|['"]\s*$/,
                    "attr-value": {
                        pattern: /.+/i,
                        inside: e.languages.css
                    }
                },
                alias: "language-css"
            }
        }, a.tag))
    }(Prism), Prism.languages.clike = {
        comment: [{
            pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,
            lookbehind: !0
        }, {
            pattern: /(^|[^\\:])\/\/.*/,
            lookbehind: !0,
            greedy: !0
        }],
        string: {
            pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
            greedy: !0
        },
        "class-name": {
            pattern: /((?:\b(?:class|interface|extends|implements|trait|instanceof|new)\s+)|(?:catch\s+\())[\w.\\]+/i,
            lookbehind: !0,
            inside: {
                punctuation: /[.\\]/
            }
        },
        keyword: /\b(?:if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,
        boolean: /\b(?:true|false)\b/,
        function: /\w+(?=\()/,
        number: /\b0x[\da-f]+\b|(?:\b\d+\.?\d*|\B\.\d+)(?:e[+-]?\d+)?/i,
        operator: /--?|\+\+?|!=?=?|<=?|>=?|==?=?|&&?|\|\|?|\?|\*|\/|~|\^|%/,
        punctuation: /[{}[\];(),.:]/
    }, Prism.languages.javascript = Prism.languages.extend("clike", {
        "class-name": [Prism.languages.clike["class-name"], {
            pattern: /(^|[^$\w\xA0-\uFFFF])[_$A-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\.(?:prototype|constructor))/,
            lookbehind: !0
        }],
        keyword: [{
            pattern: /((?:^|})\s*)(?:catch|finally)\b/,
            lookbehind: !0
        }, {
            pattern: /(^|[^.])\b(?:as|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,
            lookbehind: !0
        }],
        number: /\b(?:(?:0[xX](?:[\dA-Fa-f](?:_[\dA-Fa-f])?)+|0[bB](?:[01](?:_[01])?)+|0[oO](?:[0-7](?:_[0-7])?)+)n?|(?:\d(?:_\d)?)+n|NaN|Infinity)\b|(?:\b(?:\d(?:_\d)?)+\.?(?:\d(?:_\d)?)*|\B\.(?:\d(?:_\d)?)+)(?:[Ee][+-]?(?:\d(?:_\d)?)+)?/,
        function: /#?[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,
        operator: /-[-=]?|\+[+=]?|!=?=?|<<?=?|>>?>?=?|=(?:==?|>)?|&[&=]?|\|[|=]?|\*\*?=?|\/=?|~|\^=?|%=?|\?|\.{3}/
    }), Prism.languages.javascript["class-name"][0].pattern = /(\b(?:class|interface|extends|implements|instanceof|new)\s+)[\w.\\]+/, Prism.languages.insertBefore("javascript", "keyword", {
        regex: {
            pattern: /((?:^|[^$\w\xA0-\uFFFF."'\])\s])\s*)\/(\[(?:[^\]\\\r\n]|\\.)*]|\\.|[^\/\\\[\r\n])+\/[gimyus]{0,6}(?=\s*($|[\r\n,.;})\]]))/,
            lookbehind: !0,
            greedy: !0
        },
        "function-variable": {
            pattern: /#?[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)\s*=>))/,
            alias: "function"
        },
        parameter: [{
            pattern: /(function(?:\s+[_$A-Za-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)?\s*\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\))/,
            lookbehind: !0,
            inside: Prism.languages.javascript
        }, {
            pattern: /[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*=>)/i,
            inside: Prism.languages.javascript
        }, {
            pattern: /(\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\)\s*=>)/,
            lookbehind: !0,
            inside: Prism.languages.javascript
        }, {
            pattern: /((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:[_$A-Za-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*\s*)\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\)\s*\{)/,
            lookbehind: !0,
            inside: Prism.languages.javascript
        }],
        constant: /\b[A-Z](?:[A-Z_]|\dx?)*\b/
    }), Prism.languages.insertBefore("javascript", "string", {
        "template-string": {
            pattern: /`(?:\\[\s\S]|\${(?:[^{}]|{(?:[^{}]|{[^}]*})*})+}|(?!\${)[^\\`])*`/,
            greedy: !0,
            inside: {
                "template-punctuation": {
                    pattern: /^`|`$/,
                    alias: "string"
                },
                interpolation: {
                    pattern: /((?:^|[^\\])(?:\\{2})*)\${(?:[^{}]|{(?:[^{}]|{[^}]*})*})+}/,
                    lookbehind: !0,
                    inside: {
                        "interpolation-punctuation": {
                            pattern: /^\${|}$/,
                            alias: "punctuation"
                        },
                        rest: Prism.languages.javascript
                    }
                },
                string: /[\s\S]+/
            }
        }
    }), Prism.languages.markup && Prism.languages.markup.tag.addInlined("script", "javascript"), Prism.languages.js = Prism.languages.javascript, "undefined" != typeof self && self.Prism && self.document && document.querySelector && (self.Prism.fileHighlight = function(e) {
        e = e || document;
        var t = {
            js: "javascript",
            py: "python",
            rb: "ruby",
            ps1: "powershell",
            psm1: "powershell",
            sh: "bash",
            bat: "batch",
            h: "c",
            tex: "latex"
        };
        Array.prototype.slice.call(e.querySelectorAll("pre[data-src]")).forEach(function(e) {
            if (!e.hasAttribute("data-src-loaded")) {
                for (var a, n = e.getAttribute("data-src"), r = e, s = /\blang(?:uage)?-([\w-]+)\b/i; r && !s.test(r.className);) r = r.parentNode;
                if (r && (a = (e.className.match(s) || [, ""])[1]), !a) {
                    var i = (n.match(/\.(\w+)$/) || [, ""])[1];
                    a = t[i] || i
                }
                var l = document.createElement("code");
                l.className = "language-" + a, e.textContent = "", l.textContent = "Loading…", e.appendChild(l);
                var o = new XMLHttpRequest;
                o.open("GET", n, !0), o.onreadystatechange = function() {
                    4 == o.readyState && (o.status < 400 && o.responseText ? (l.textContent = o.responseText, Prism.highlightElement(l), e.setAttribute("data-src-loaded", "")) : o.status >= 400 ? l.textContent = "✖ Error " + o.status + " while fetching file: " + o.statusText : l.textContent = "✖ Error: File does not exist or is empty")
                }, o.send(null)
            }
        }), Prism.plugins.toolbar && Prism.plugins.toolbar.registerButton("download-file", function(e) {
            var t = e.element.parentNode;
            if (t && /pre/i.test(t.nodeName) && t.hasAttribute("data-src") && t.hasAttribute("data-download-link")) {
                var a = t.getAttribute("data-src"),
                    n = document.createElement("a");
                return n.textContent = t.getAttribute("data-download-link-label") || "Download", n.setAttribute("download", ""), n.href = a, n
            }
        })
    }, document.addEventListener("DOMContentLoaded", function() {
        self.Prism.fileHighlight()
    }));
//# sourceMappingURL=/sm/a264a97a2f20660266cd3a454fb3decaf16e29e2a9ecf5259f4176ddbec26e70.map