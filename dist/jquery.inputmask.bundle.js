/*!
* jquery.inputmask.bundle.js
* https://github.com/RobinHerbots/Inputmask
* Copyright (c) 2010 - 2019 Robin Herbots
* Licensed under the MIT license (http://www.opensource.org/licenses/mit-license.php)
* Version: 4.0.6
*/

(function(modules) {
    var installedModules = {};
    function __webpack_require__(moduleId) {
        if (installedModules[moduleId]) {
            return installedModules[moduleId].exports;
        }
        var module = installedModules[moduleId] = {
            i: moduleId,
            l: false,
            exports: {}
        };
        modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
        module.l = true;
        return module.exports;
    }
    __webpack_require__.m = modules;
    __webpack_require__.c = installedModules;
    __webpack_require__.d = function(exports, name, getter) {
        if (!__webpack_require__.o(exports, name)) {
            Object.defineProperty(exports, name, {
                enumerable: true,
                get: getter
            });
        }
    };
    __webpack_require__.r = function(exports) {
        if (typeof Symbol !== "undefined" && Symbol.toStringTag) {
            Object.defineProperty(exports, Symbol.toStringTag, {
                value: "Module"
            });
        }
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
    };
    __webpack_require__.t = function(value, mode) {
        if (mode & 1) value = __webpack_require__(value);
        if (mode & 8) return value;
        if (mode & 4 && typeof value === "object" && value && value.__esModule) return value;
        var ns = Object.create(null);
        __webpack_require__.r(ns);
        Object.defineProperty(ns, "default", {
            enumerable: true,
            value: value
        });
        if (mode & 2 && typeof value != "string") for (var key in value) __webpack_require__.d(ns, key, function(key) {
            return value[key];
        }.bind(null, key));
        return ns;
    };
    __webpack_require__.n = function(module) {
        var getter = module && module.__esModule ? function getDefault() {
            return module["default"];
        } : function getModuleExports() {
            return module;
        };
        __webpack_require__.d(getter, "a", getter);
        return getter;
    };
    __webpack_require__.o = function(object, property) {
        return Object.prototype.hasOwnProperty.call(object, property);
    };
    __webpack_require__.p = "";
    return __webpack_require__(__webpack_require__.s = 0);
})([ function(module, exports, __webpack_require__) {
    "use strict";
    __webpack_require__(1);
    __webpack_require__(5);
    __webpack_require__(6);
    var _inputmask = __webpack_require__(2);
    var _inputmask2 = _interopRequireDefault(_inputmask);
    var _inputmask3 = __webpack_require__(3);
    var _inputmask4 = _interopRequireDefault(_inputmask3);
    var _jquery = __webpack_require__(7);
    var _jquery2 = _interopRequireDefault(_jquery);
    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }
    if (_inputmask4.default === _jquery2.default) {
        __webpack_require__(8);
    }
    window.Inputmask = _inputmask2.default;
}, function(module, exports, __webpack_require__) {
    "use strict";
    var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;
    var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function(obj) {
        return typeof obj;
    } : function(obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
    (function(factory) {
        if (true) {
            !(__WEBPACK_AMD_DEFINE_ARRAY__ = [ __webpack_require__(2) ], __WEBPACK_AMD_DEFINE_FACTORY__ = factory, 
            __WEBPACK_AMD_DEFINE_RESULT__ = typeof __WEBPACK_AMD_DEFINE_FACTORY__ === "function" ? __WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__) : __WEBPACK_AMD_DEFINE_FACTORY__, 
            __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
        } else {}
    })(function(Inputmask) {
        Inputmask.extendDefinitions({
            A: {
                validator: "[A-Za-z\u0410-\u044f\u0401\u0451\xc0-\xff\xb5]",
                casing: "upper"
            },
            "&": {
                validator: "[0-9A-Za-z\u0410-\u044f\u0401\u0451\xc0-\xff\xb5]",
                casing: "upper"
            },
            "#": {
                validator: "[0-9A-Fa-f]",
                casing: "upper"
            }
        });
        Inputmask.extendAliases({
            cssunit: {
                regex: "[+-]?[0-9]+\\.?([0-9]+)?(px|em|rem|ex|%|in|cm|mm|pt|pc)"
            },
            url: {
                regex: "(https?|ftp)//.*",
                autoUnmask: false
            },
            ip: {
                mask: "i[i[i]].i[i[i]].i[i[i]].i[i[i]]",
                definitions: {
                    i: {
                        validator: function validator(chrs, maskset, pos, strict, opts) {
                            if (pos - 1 > -1 && maskset.buffer[pos - 1] !== ".") {
                                chrs = maskset.buffer[pos - 1] + chrs;
                                if (pos - 2 > -1 && maskset.buffer[pos - 2] !== ".") {
                                    chrs = maskset.buffer[pos - 2] + chrs;
                                } else chrs = "0" + chrs;
                            } else chrs = "00" + chrs;
                            return new RegExp("25[0-5]|2[0-4][0-9]|[01][0-9][0-9]").test(chrs);
                        }
                    }
                },
                onUnMask: function onUnMask(maskedValue, unmaskedValue, opts) {
                    return maskedValue;
                },
                inputmode: "numeric"
            },
            email: {
                mask: "*{1,64}[.*{1,64}][.*{1,64}][.*{1,63}]@-{1,63}.-{1,63}[.-{1,63}][.-{1,63}]",
                greedy: false,
                casing: "lower",
                onBeforePaste: function onBeforePaste(pastedValue, opts) {
                    pastedValue = pastedValue.toLowerCase();
                    return pastedValue.replace("mailto:", "");
                },
                definitions: {
                    "*": {
                        validator: "[0-9\uff11-\uff19A-Za-z\u0410-\u044f\u0401\u0451\xc0-\xff\xb5!#$%&'*+/=?^_`{|}~-]"
                    },
                    "-": {
                        validator: "[0-9A-Za-z-]"
                    }
                },
                onUnMask: function onUnMask(maskedValue, unmaskedValue, opts) {
                    return maskedValue;
                },
                inputmode: "email"
            },
            mac: {
                mask: "##:##:##:##:##:##"
            },
            vin: {
                mask: "V{13}9{4}",
                definitions: {
                    V: {
                        validator: "[A-HJ-NPR-Za-hj-npr-z\\d]",
                        casing: "upper"
                    }
                },
                clearIncomplete: true,
                autoUnmask: true
            }
        });
        return Inputmask;
    });
}, function(module, exports, __webpack_require__) {
    "use strict";
    var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;
    var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function(obj) {
        return typeof obj;
    } : function(obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
    (function(factory) {
        if (true) {
            !(__WEBPACK_AMD_DEFINE_ARRAY__ = [ __webpack_require__(3), __webpack_require__(4) ], 
            __WEBPACK_AMD_DEFINE_FACTORY__ = factory, __WEBPACK_AMD_DEFINE_RESULT__ = typeof __WEBPACK_AMD_DEFINE_FACTORY__ === "function" ? __WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__) : __WEBPACK_AMD_DEFINE_FACTORY__, 
            __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
        } else {}
    })(function($, window, undefined) {
        var document = window.document, ua = navigator.userAgent, ie = ua.indexOf("MSIE ") > 0 || ua.indexOf("Trident/") > 0, mobile = isInputEventSupported("touchstart"), iemobile = /iemobile/i.test(ua), iphone = /iphone/i.test(ua) && !iemobile;
        function Inputmask(alias, options, internal) {
            if (!(this instanceof Inputmask)) {
                return new Inputmask(alias, options, internal);
            }
            this.el = undefined;
            this.events = {};
            this.maskset = undefined;
            this.refreshValue = false;
            if (internal !== true) {
                if ($.isPlainObject(alias)) {
                    options = alias;
                } else {
                    options = options || {};
                    if (alias) options.alias = alias;
                }
                this.opts = $.extend(true, {}, this.defaults, options);
                this.noMasksCache = options && options.definitions !== undefined;
                this.userOptions = options || {};
                this.isRTL = this.opts.numericInput;
                resolveAlias(this.opts.alias, options, this.opts);
            }
        }
        Inputmask.prototype = {
            dataAttribute: "data-inputmask",
            defaults: {
                placeholder: "_",
                optionalmarker: [ "[", "]" ],
                quantifiermarker: [ "{", "}" ],
                groupmarker: [ "(", ")" ],
                alternatormarker: "|",
                escapeChar: "\\",
                mask: null,
                regex: null,
                oncomplete: $.noop,
                onincomplete: $.noop,
                oncleared: $.noop,
                repeat: 0,
                greedy: false,
                autoUnmask: false,
                removeMaskOnSubmit: false,
                clearMaskOnLostFocus: true,
                insertMode: true,
                clearIncomplete: false,
                alias: null,
                onKeyDown: $.noop,
                onBeforeMask: null,
                onBeforePaste: function onBeforePaste(pastedValue, opts) {
                    return $.isFunction(opts.onBeforeMask) ? opts.onBeforeMask.call(this, pastedValue, opts) : pastedValue;
                },
                onBeforeWrite: null,
                onUnMask: null,
                showMaskOnFocus: true,
                showMaskOnHover: true,
                onKeyValidation: $.noop,
                skipOptionalPartCharacter: " ",
                numericInput: false,
                rightAlign: false,
                undoOnEscape: true,
                radixPoint: "",
                _radixDance: false,
                groupSeparator: "",
                keepStatic: null,
                positionCaretOnTab: true,
                tabThrough: false,
                supportsInputType: [ "text", "tel", "url", "password", "search" ],
                ignorables: [ 8, 9, 13, 19, 27, 33, 34, 35, 36, 37, 38, 39, 40, 45, 46, 93, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 0, 229 ],
                isComplete: null,
                preValidation: null,
                postValidation: null,
                staticDefinitionSymbol: undefined,
                jitMasking: false,
                nullable: true,
                inputEventOnly: false,
                noValuePatching: false,
                positionCaretOnClick: "lvp",
                casing: null,
                inputmode: "verbatim",
                colorMask: false,
                disablePredictiveText: false,
                importDataAttributes: true,
                shiftPositions: true
            },
            definitions: {
                9: {
                    validator: "[0-9\uff11-\uff19]",
                    definitionSymbol: "*"
                },
                a: {
                    validator: "[A-Za-z\u0410-\u044f\u0401\u0451\xc0-\xff\xb5]",
                    definitionSymbol: "*"
                },
                "*": {
                    validator: "[0-9\uff11-\uff19A-Za-z\u0410-\u044f\u0401\u0451\xc0-\xff\xb5]"
                }
            },
            aliases: {},
            masksCache: {},
            mask: function mask(elems) {
                var that = this;
                function importAttributeOptions(npt, opts, userOptions, dataAttribute) {
                    if (opts.importDataAttributes === true) {
                        var importOption = function importOption(option, optionData) {
                            optionData = optionData !== undefined ? optionData : npt.getAttribute(dataAttribute + "-" + option);
                            if (optionData !== null) {
                                if (typeof optionData === "string") {
                                    if (option.indexOf("on") === 0) optionData = window[optionData]; else if (optionData === "false") optionData = false; else if (optionData === "true") optionData = true;
                                }
                                userOptions[option] = optionData;
                            }
                        };
                        var attrOptions = npt.getAttribute(dataAttribute), option, dataoptions, optionData, p;
                        if (attrOptions && attrOptions !== "") {
                            attrOptions = attrOptions.replace(/'/g, '"');
                            dataoptions = JSON.parse("{" + attrOptions + "}");
                        }
                        if (dataoptions) {
                            optionData = undefined;
                            for (p in dataoptions) {
                                if (p.toLowerCase() === "alias") {
                                    optionData = dataoptions[p];
                                    break;
                                }
                            }
                        }
                        importOption("alias", optionData);
                        if (userOptions.alias) {
                            resolveAlias(userOptions.alias, userOptions, opts);
                        }
                        for (option in opts) {
                            if (dataoptions) {
                                optionData = undefined;
                                for (p in dataoptions) {
                                    if (p.toLowerCase() === option.toLowerCase()) {
                                        optionData = dataoptions[p];
                                        break;
                                    }
                                }
                            }
                            importOption(option, optionData);
                        }
                    }
                    $.extend(true, opts, userOptions);
                    if (npt.dir === "rtl" || opts.rightAlign) {
                        npt.style.textAlign = "right";
                    }
                    if (npt.dir === "rtl" || opts.numericInput) {
                        npt.dir = "ltr";
                        npt.removeAttribute("dir");
                        opts.isRTL = true;
                    }
                    return Object.keys(userOptions).length;
                }
                if (typeof elems === "string") {
                    elems = document.getElementById(elems) || document.querySelectorAll(elems);
                }
                elems = elems.nodeName ? [ elems ] : elems;
                $.each(elems, function(ndx, el) {
                    var scopedOpts = $.extend(true, {}, that.opts);
                    if (importAttributeOptions(el, scopedOpts, $.extend(true, {}, that.userOptions), that.dataAttribute)) {
                        var maskset = generateMaskSet(scopedOpts, that.noMasksCache);
                        if (maskset !== undefined) {
                            if (el.inputmask !== undefined) {
                                el.inputmask.opts.autoUnmask = true;
                                el.inputmask.remove();
                            }
                            el.inputmask = new Inputmask(undefined, undefined, true);
                            el.inputmask.opts = scopedOpts;
                            el.inputmask.noMasksCache = that.noMasksCache;
                            el.inputmask.userOptions = $.extend(true, {}, that.userOptions);
                            el.inputmask.isRTL = scopedOpts.isRTL || scopedOpts.numericInput;
                            el.inputmask.el = el;
                            el.inputmask.maskset = maskset;
                            $.data(el, "_inputmask_opts", scopedOpts);
                            maskScope.call(el.inputmask, {
                                action: "mask"
                            });
                        }
                    }
                });
                return elems && elems[0] ? elems[0].inputmask || this : this;
            },
            option: function option(options, noremask) {
                if (typeof options === "string") {
                    return this.opts[options];
                } else if ((typeof options === "undefined" ? "undefined" : _typeof(options)) === "object") {
                    $.extend(this.userOptions, options);
                    if (this.el && noremask !== true) {
                        this.mask(this.el);
                    }
                    return this;
                }
            },
            unmaskedvalue: function unmaskedvalue(value) {
                this.maskset = this.maskset || generateMaskSet(this.opts, this.noMasksCache);
                return maskScope.call(this, {
                    action: "unmaskedvalue",
                    value: value
                });
            },
            remove: function remove() {
                return maskScope.call(this, {
                    action: "remove"
                });
            },
            getemptymask: function getemptymask() {
                this.maskset = this.maskset || generateMaskSet(this.opts, this.noMasksCache);
                return maskScope.call(this, {
                    action: "getemptymask"
                });
            },
            hasMaskedValue: function hasMaskedValue() {
                return !this.opts.autoUnmask;
            },
            isComplete: function isComplete() {
                this.maskset = this.maskset || generateMaskSet(this.opts, this.noMasksCache);
                return maskScope.call(this, {
                    action: "isComplete"
                });
            },
            getmetadata: function getmetadata() {
                this.maskset = this.maskset || generateMaskSet(this.opts, this.noMasksCache);
                return maskScope.call(this, {
                    action: "getmetadata"
                });
            },
            isValid: function isValid(value) {
                this.maskset = this.maskset || generateMaskSet(this.opts, this.noMasksCache);
                return maskScope.call(this, {
                    action: "isValid",
                    value: value
                });
            },
            format: function format(value, metadata) {
                this.maskset = this.maskset || generateMaskSet(this.opts, this.noMasksCache);
                return maskScope.call(this, {
                    action: "format",
                    value: value,
                    metadata: metadata
                });
            },
            setValue: function setValue(value) {
                if (this.el) {
                    $(this.el).trigger("setvalue", [ value ]);
                }
            },
            analyseMask: function analyseMask(mask, regexMask, opts) {
                var tokenizer = /(?:[?*+]|\{[0-9\+\*]+(?:,[0-9\+\*]*)?(?:\|[0-9\+\*]*)?\})|[^.?*+^${[]()|\\]+|./g, regexTokenizer = /\[\^?]?(?:[^\\\]]+|\\[\S\s]?)*]?|\\(?:0(?:[0-3][0-7]{0,2}|[4-7][0-7]?)?|[1-9][0-9]*|x[0-9A-Fa-f]{2}|u[0-9A-Fa-f]{4}|c[A-Za-z]|[\S\s]?)|\((?:\?[:=!]?)?|(?:[?*+]|\{[0-9]+(?:,[0-9]*)?\})\??|[^.?*+^${[()|\\]+|./g, escaped = false, currentToken = new MaskToken(), match, m, openenings = [], maskTokens = [], openingToken, currentOpeningToken, alternator, lastMatch, groupToken;
                function MaskToken(isGroup, isOptional, isQuantifier, isAlternator) {
                    this.matches = [];
                    this.openGroup = isGroup || false;
                    this.alternatorGroup = false;
                    this.isGroup = isGroup || false;
                    this.isOptional = isOptional || false;
                    this.isQuantifier = isQuantifier || false;
                    this.isAlternator = isAlternator || false;
                    this.quantifier = {
                        min: 1,
                        max: 1
                    };
                }
                function insertTestDefinition(mtoken, element, position) {
                    position = position !== undefined ? position : mtoken.matches.length;
                    var prevMatch = mtoken.matches[position - 1];
                    if (regexMask) {
                        if (element.indexOf("[") === 0 || escaped && /\\d|\\s|\\w]/i.test(element) || element === ".") {
                            mtoken.matches.splice(position++, 0, {
                                fn: new RegExp(element, opts.casing ? "i" : ""),
                                optionality: false,
                                newBlockMarker: prevMatch === undefined ? "master" : prevMatch.def !== element,
                                casing: null,
                                def: element,
                                placeholder: undefined,
                                nativeDef: element
                            });
                        } else {
                            if (escaped) element = element[element.length - 1];
                            $.each(element.split(""), function(ndx, lmnt) {
                                prevMatch = mtoken.matches[position - 1];
                                mtoken.matches.splice(position++, 0, {
                                    fn: null,
                                    optionality: false,
                                    newBlockMarker: prevMatch === undefined ? "master" : prevMatch.def !== lmnt && prevMatch.fn !== null,
                                    casing: null,
                                    def: opts.staticDefinitionSymbol || lmnt,
                                    placeholder: opts.staticDefinitionSymbol !== undefined ? lmnt : undefined,
                                    nativeDef: (escaped ? "'" : "") + lmnt
                                });
                            });
                        }
                        escaped = false;
                    } else {
                        var maskdef = (opts.definitions ? opts.definitions[element] : undefined) || Inputmask.prototype.definitions[element];
                        if (maskdef && !escaped) {
                            mtoken.matches.splice(position++, 0, {
                                fn: maskdef.validator ? typeof maskdef.validator == "string" ? new RegExp(maskdef.validator, opts.casing ? "i" : "") : new function() {
                                    this.test = maskdef.validator;
                                }() : new RegExp("."),
                                optionality: false,
                                newBlockMarker: prevMatch === undefined ? "master" : prevMatch.def !== (maskdef.definitionSymbol || element),
                                casing: maskdef.casing,
                                def: maskdef.definitionSymbol || element,
                                placeholder: maskdef.placeholder,
                                nativeDef: element
                            });
                        } else {
                            mtoken.matches.splice(position++, 0, {
                                fn: null,
                                optionality: false,
                                newBlockMarker: prevMatch === undefined ? "master" : prevMatch.def !== element && prevMatch.fn !== null,
                                casing: null,
                                def: opts.staticDefinitionSymbol || element,
                                placeholder: opts.staticDefinitionSymbol !== undefined ? element : undefined,
                                nativeDef: (escaped ? "'" : "") + element
                            });
                            escaped = false;
                        }
                    }
                }
                function verifyGroupMarker(maskToken) {
                    if (maskToken && maskToken.matches) {
                        $.each(maskToken.matches, function(ndx, token) {
                            var nextToken = maskToken.matches[ndx + 1];
                            if ((nextToken === undefined || nextToken.matches === undefined || nextToken.isQuantifier === false) && token && token.isGroup) {
                                token.isGroup = false;
                                if (!regexMask) {
                                    insertTestDefinition(token, opts.groupmarker[0], 0);
                                    if (token.openGroup !== true) {
                                        insertTestDefinition(token, opts.groupmarker[1]);
                                    }
                                }
                            }
                            verifyGroupMarker(token);
                        });
                    }
                }
                function defaultCase() {
                    if (openenings.length > 0) {
                        currentOpeningToken = openenings[openenings.length - 1];
                        insertTestDefinition(currentOpeningToken, m);
                        if (currentOpeningToken.isAlternator) {
                            alternator = openenings.pop();
                            for (var mndx = 0; mndx < alternator.matches.length; mndx++) {
                                if (alternator.matches[mndx].isGroup) alternator.matches[mndx].isGroup = false;
                            }
                            if (openenings.length > 0) {
                                currentOpeningToken = openenings[openenings.length - 1];
                                currentOpeningToken.matches.push(alternator);
                            } else {
                                currentToken.matches.push(alternator);
                            }
                        }
                    } else {
                        insertTestDefinition(currentToken, m);
                    }
                }
                function reverseTokens(maskToken) {
                    function reverseStatic(st) {
                        if (st === opts.optionalmarker[0]) st = opts.optionalmarker[1]; else if (st === opts.optionalmarker[1]) st = opts.optionalmarker[0]; else if (st === opts.groupmarker[0]) st = opts.groupmarker[1]; else if (st === opts.groupmarker[1]) st = opts.groupmarker[0];
                        return st;
                    }
                    maskToken.matches = maskToken.matches.reverse();
                    for (var match in maskToken.matches) {
                        if (maskToken.matches.hasOwnProperty(match)) {
                            var intMatch = parseInt(match);
                            if (maskToken.matches[match].isQuantifier && maskToken.matches[intMatch + 1] && maskToken.matches[intMatch + 1].isGroup) {
                                var qt = maskToken.matches[match];
                                maskToken.matches.splice(match, 1);
                                maskToken.matches.splice(intMatch + 1, 0, qt);
                            }
                            if (maskToken.matches[match].matches !== undefined) {
                                maskToken.matches[match] = reverseTokens(maskToken.matches[match]);
                            } else {
                                maskToken.matches[match] = reverseStatic(maskToken.matches[match]);
                            }
                        }
                    }
                    return maskToken;
                }
                function groupify(matches) {
                    var groupToken = new MaskToken(true);
                    groupToken.openGroup = false;
                    groupToken.matches = matches;
                    return groupToken;
                }
                if (regexMask) {
                    opts.optionalmarker[0] = undefined;
                    opts.optionalmarker[1] = undefined;
                }
                while (match = regexMask ? regexTokenizer.exec(mask) : tokenizer.exec(mask)) {
                    m = match[0];
                    if (regexMask) {
                        switch (m.charAt(0)) {
                          case "?":
                            m = "{0,1}";
                            break;

                          case "+":
                          case "*":
                            m = "{" + m + "}";
                            break;
                        }
                    }
                    if (escaped) {
                        defaultCase();
                        continue;
                    }
                    switch (m.charAt(0)) {
                      case "(?=":
                        break;

                      case "(?!":
                        break;

                      case "(?<=":
                        break;

                      case "(?<!":
                        break;

                      case opts.escapeChar:
                        escaped = true;
                        if (regexMask) {
                            defaultCase();
                        }
                        break;

                      case opts.optionalmarker[1]:
                      case opts.groupmarker[1]:
                        openingToken = openenings.pop();
                        openingToken.openGroup = false;
                        if (openingToken !== undefined) {
                            if (openenings.length > 0) {
                                currentOpeningToken = openenings[openenings.length - 1];
                                currentOpeningToken.matches.push(openingToken);
                                if (currentOpeningToken.isAlternator) {
                                    alternator = openenings.pop();
                                    for (var mndx = 0; mndx < alternator.matches.length; mndx++) {
                                        alternator.matches[mndx].isGroup = false;
                                        alternator.matches[mndx].alternatorGroup = false;
                                    }
                                    if (openenings.length > 0) {
                                        currentOpeningToken = openenings[openenings.length - 1];
                                        currentOpeningToken.matches.push(alternator);
                                    } else {
                                        currentToken.matches.push(alternator);
                                    }
                                }
                            } else {
                                currentToken.matches.push(openingToken);
                            }
                        } else defaultCase();
                        break;

                      case opts.optionalmarker[0]:
                        openenings.push(new MaskToken(false, true));
                        break;

                      case opts.groupmarker[0]:
                        openenings.push(new MaskToken(true));
                        break;

                      case opts.quantifiermarker[0]:
                        var quantifier = new MaskToken(false, false, true);
                        m = m.replace(/[{}]/g, "");
                        var mqj = m.split("|"), mq = mqj[0].split(","), mq0 = isNaN(mq[0]) ? mq[0] : parseInt(mq[0]), mq1 = mq.length === 1 ? mq0 : isNaN(mq[1]) ? mq[1] : parseInt(mq[1]);
                        if (mq0 === "*" || mq0 === "+") {
                            mq0 = mq1 === "*" ? 0 : 1;
                        }
                        quantifier.quantifier = {
                            min: mq0,
                            max: mq1,
                            jit: mqj[1]
                        };
                        var matches = openenings.length > 0 ? openenings[openenings.length - 1].matches : currentToken.matches;
                        match = matches.pop();
                        if (match.isAlternator) {
                            matches.push(match);
                            matches = match.matches;
                            var groupToken = new MaskToken(true);
                            var tmpMatch = matches.pop();
                            matches.push(groupToken);
                            matches = groupToken.matches;
                            match = tmpMatch;
                        }
                        if (!match.isGroup) {
                            match = groupify([ match ]);
                        }
                        matches.push(match);
                        matches.push(quantifier);
                        break;

                      case opts.alternatormarker:
                        var groupQuantifier = function groupQuantifier(matches) {
                            var lastMatch = matches.pop();
                            if (lastMatch.isQuantifier) {
                                lastMatch = groupify([ matches.pop(), lastMatch ]);
                            }
                            return lastMatch;
                        };
                        if (openenings.length > 0) {
                            currentOpeningToken = openenings[openenings.length - 1];
                            var subToken = currentOpeningToken.matches[currentOpeningToken.matches.length - 1];
                            if (currentOpeningToken.openGroup && (subToken.matches === undefined || subToken.isGroup === false && subToken.isAlternator === false)) {
                                lastMatch = openenings.pop();
                            } else {
                                lastMatch = groupQuantifier(currentOpeningToken.matches);
                            }
                        } else {
                            lastMatch = groupQuantifier(currentToken.matches);
                        }
                        if (lastMatch.isAlternator) {
                            openenings.push(lastMatch);
                        } else {
                            if (lastMatch.alternatorGroup) {
                                alternator = openenings.pop();
                                lastMatch.alternatorGroup = false;
                            } else {
                                alternator = new MaskToken(false, false, false, true);
                            }
                            alternator.matches.push(lastMatch);
                            openenings.push(alternator);
                            if (lastMatch.openGroup) {
                                lastMatch.openGroup = false;
                                var alternatorGroup = new MaskToken(true);
                                alternatorGroup.alternatorGroup = true;
                                openenings.push(alternatorGroup);
                            }
                        }
                        break;

                      default:
                        defaultCase();
                    }
                }
                while (openenings.length > 0) {
                    openingToken = openenings.pop();
                    currentToken.matches.push(openingToken);
                }
                if (currentToken.matches.length > 0) {
                    verifyGroupMarker(currentToken);
                    maskTokens.push(currentToken);
                }
                if (opts.numericInput || opts.isRTL) {
                    reverseTokens(maskTokens[0]);
                }
                return maskTokens;
            },
            positionColorMask: function positionColorMask(input, template) {
                input.style.left = template.offsetLeft + "px";
            }
        };
        Inputmask.extendDefaults = function(options) {
            $.extend(true, Inputmask.prototype.defaults, options);
        };
        Inputmask.extendDefinitions = function(definition) {
            $.extend(true, Inputmask.prototype.definitions, definition);
        };
        Inputmask.extendAliases = function(alias) {
            $.extend(true, Inputmask.prototype.aliases, alias);
        };
        Inputmask.format = function(value, options, metadata) {
            return Inputmask(options).format(value, metadata);
        };
        Inputmask.unmask = function(value, options) {
            return Inputmask(options).unmaskedvalue(value);
        };
        Inputmask.isValid = function(value, options) {
            return Inputmask(options).isValid(value);
        };
        Inputmask.remove = function(elems) {
            if (typeof elems === "string") {
                elems = document.getElementById(elems) || document.querySelectorAll(elems);
            }
            elems = elems.nodeName ? [ elems ] : elems;
            $.each(elems, function(ndx, el) {
                if (el.inputmask) el.inputmask.remove();
            });
        };
        Inputmask.setValue = function(elems, value) {
            if (typeof elems === "string") {
                elems = document.getElementById(elems) || document.querySelectorAll(elems);
            }
            elems = elems.nodeName ? [ elems ] : elems;
            $.each(elems, function(ndx, el) {
                if (el.inputmask) el.inputmask.setValue(value); else $(el).trigger("setvalue", [ value ]);
            });
        };
        Inputmask.escapeRegex = function(str) {
            var specials = [ "/", ".", "*", "+", "?", "|", "(", ")", "[", "]", "{", "}", "\\", "$", "^" ];
            return str.replace(new RegExp("(\\" + specials.join("|\\") + ")", "gim"), "\\$1");
        };
        Inputmask.keyCode = {
            BACKSPACE: 8,
            BACKSPACE_SAFARI: 127,
            DELETE: 46,
            DOWN: 40,
            END: 35,
            ENTER: 13,
            ESCAPE: 27,
            HOME: 36,
            INSERT: 45,
            LEFT: 37,
            PAGE_DOWN: 34,
            PAGE_UP: 33,
            RIGHT: 39,
            SPACE: 32,
            TAB: 9,
            UP: 38,
            X: 88,
            CONTROL: 17
        };
        Inputmask.dependencyLib = $;
        function resolveAlias(aliasStr, options, opts) {
            var aliasDefinition = Inputmask.prototype.aliases[aliasStr];
            if (aliasDefinition) {
                if (aliasDefinition.alias) resolveAlias(aliasDefinition.alias, undefined, opts);
                $.extend(true, opts, aliasDefinition);
                $.extend(true, opts, options);
                return true;
            } else if (opts.mask === null) {
                opts.mask = aliasStr;
            }
            return false;
        }
        function generateMaskSet(opts, nocache) {
            function generateMask(mask, metadata, opts) {
                var regexMask = false;
                if (mask === null || mask === "") {
                    regexMask = opts.regex !== null;
                    if (regexMask) {
                        mask = opts.regex;
                        mask = mask.replace(/^(\^)(.*)(\$)$/, "$2");
                    } else {
                        regexMask = true;
                        mask = ".*";
                    }
                }
                if (mask.length === 1 && opts.greedy === false && opts.repeat !== 0) {
                    opts.placeholder = "";
                }
                if (opts.repeat > 0 || opts.repeat === "*" || opts.repeat === "+") {
                    var repeatStart = opts.repeat === "*" ? 0 : opts.repeat === "+" ? 1 : opts.repeat;
                    mask = opts.groupmarker[0] + mask + opts.groupmarker[1] + opts.quantifiermarker[0] + repeatStart + "," + opts.repeat + opts.quantifiermarker[1];
                }
                var masksetDefinition, maskdefKey = regexMask ? "regex_" + opts.regex : opts.numericInput ? mask.split("").reverse().join("") : mask;
                if (Inputmask.prototype.masksCache[maskdefKey] === undefined || nocache === true) {
                    masksetDefinition = {
                        mask: mask,
                        maskToken: Inputmask.prototype.analyseMask(mask, regexMask, opts),
                        validPositions: {},
                        _buffer: undefined,
                        buffer: undefined,
                        tests: {},
                        excludes: {},
                        metadata: metadata,
                        maskLength: undefined,
                        jitOffset: {}
                    };
                    if (nocache !== true) {
                        Inputmask.prototype.masksCache[maskdefKey] = masksetDefinition;
                        masksetDefinition = $.extend(true, {}, Inputmask.prototype.masksCache[maskdefKey]);
                    }
                } else masksetDefinition = $.extend(true, {}, Inputmask.prototype.masksCache[maskdefKey]);
                return masksetDefinition;
            }
            var ms;
            if ($.isFunction(opts.mask)) {
                opts.mask = opts.mask(opts);
            }
            if ($.isArray(opts.mask)) {
                if (opts.mask.length > 1) {
                    if (opts.keepStatic === null) {
                        opts.keepStatic = "auto";
                        for (var i = 0; i < opts.mask.length; i++) {
                            if (opts.mask[i].charAt(0) !== opts.mask[0].charAt(0)) {
                                opts.keepStatic = true;
                                break;
                            }
                        }
                    }
                    var altMask = opts.groupmarker[0];
                    $.each(opts.isRTL ? opts.mask.reverse() : opts.mask, function(ndx, msk) {
                        if (altMask.length > 1) {
                            altMask += opts.groupmarker[1] + opts.alternatormarker + opts.groupmarker[0];
                        }
                        if (msk.mask !== undefined && !$.isFunction(msk.mask)) {
                            altMask += msk.mask;
                        } else {
                            altMask += msk;
                        }
                    });
                    altMask += opts.groupmarker[1];
                    return generateMask(altMask, opts.mask, opts);
                } else opts.mask = opts.mask.pop();
            }
            if (opts.mask && opts.mask.mask !== undefined && !$.isFunction(opts.mask.mask)) {
                ms = generateMask(opts.mask.mask, opts.mask, opts);
            } else {
                ms = generateMask(opts.mask, opts.mask, opts);
            }
            return ms;
        }
        function isInputEventSupported(eventName) {
            var el = document.createElement("input"), evName = "on" + eventName, isSupported = evName in el;
            if (!isSupported) {
                el.setAttribute(evName, "return;");
                isSupported = typeof el[evName] === "function";
            }
            el = null;
            return isSupported;
        }
        function maskScope(actionObj, maskset, opts) {
            maskset = maskset || this.maskset;
            opts = opts || this.opts;
            var inputmask = this, el = this.el, isRTL = this.isRTL, undoValue, $el, skipKeyPressEvent = false, skipInputEvent = false, ignorable = false, maxLength, mouseEnter = false, colorMask, originalPlaceholder;
            function getMaskTemplate(baseOnInput, minimalPos, includeMode, noJit, clearOptionalTail) {
                var greedy = opts.greedy;
                if (clearOptionalTail) opts.greedy = false;
                minimalPos = minimalPos || 0;
                var maskTemplate = [], ndxIntlzr, pos = 0, test, testPos, lvp = getLastValidPosition();
                do {
                    if (baseOnInput === true && getMaskSet().validPositions[pos]) {
                        testPos = clearOptionalTail && getMaskSet().validPositions[pos].match.optionality === true && getMaskSet().validPositions[pos + 1] === undefined && (getMaskSet().validPositions[pos].generatedInput === true || getMaskSet().validPositions[pos].input == opts.skipOptionalPartCharacter && pos > 0) ? determineTestTemplate(pos, getTests(pos, ndxIntlzr, pos - 1)) : getMaskSet().validPositions[pos];
                        test = testPos.match;
                        ndxIntlzr = testPos.locator.slice();
                        maskTemplate.push(includeMode === true ? testPos.input : includeMode === false ? test.nativeDef : getPlaceholder(pos, test));
                    } else {
                        testPos = getTestTemplate(pos, ndxIntlzr, pos - 1);
                        test = testPos.match;
                        ndxIntlzr = testPos.locator.slice();
                        var jitMasking = noJit === true ? false : opts.jitMasking !== false ? opts.jitMasking : test.jit;
                        if (jitMasking === false || jitMasking === undefined || typeof jitMasking === "number" && isFinite(jitMasking) && jitMasking > pos) {
                            maskTemplate.push(includeMode === false ? test.nativeDef : getPlaceholder(pos, test));
                        }
                    }
                    if (opts.keepStatic === "auto") {
                        if (test.newBlockMarker && test.fn !== null) {
                            opts.keepStatic = pos - 1;
                        }
                    }
                    pos++;
                } while ((maxLength === undefined || pos < maxLength) && (test.fn !== null || test.def !== "") || minimalPos > pos);
                if (maskTemplate[maskTemplate.length - 1] === "") {
                    maskTemplate.pop();
                }
                if (includeMode !== false || getMaskSet().maskLength === undefined) getMaskSet().maskLength = pos - 1;
                opts.greedy = greedy;
                return maskTemplate;
            }
            function getMaskSet() {
                return maskset;
            }
            function resetMaskSet(soft) {
                var maskset = getMaskSet();
                maskset.buffer = undefined;
                if (soft !== true) {
                    maskset.validPositions = {};
                    maskset.p = 0;
                }
            }
            function getLastValidPosition(closestTo, strict, validPositions) {
                var before = -1, after = -1, valids = validPositions || getMaskSet().validPositions;
                if (closestTo === undefined) closestTo = -1;
                for (var posNdx in valids) {
                    var psNdx = parseInt(posNdx);
                    if (valids[psNdx] && (strict || valids[psNdx].generatedInput !== true)) {
                        if (psNdx <= closestTo) before = psNdx;
                        if (psNdx >= closestTo) after = psNdx;
                    }
                }
                return before === -1 || before == closestTo ? after : after == -1 ? before : closestTo - before < after - closestTo ? before : after;
            }
            function getDecisionTaker(tst) {
                var decisionTaker = tst.locator[tst.alternation];
                if (typeof decisionTaker == "string" && decisionTaker.length > 0) {
                    decisionTaker = decisionTaker.split(",")[0];
                }
                return decisionTaker !== undefined ? decisionTaker.toString() : "";
            }
            function getLocator(tst, align) {
                var locator = (tst.alternation != undefined ? tst.mloc[getDecisionTaker(tst)] : tst.locator).join("");
                if (locator !== "") while (locator.length < align) {
                    locator += "0";
                }
                return locator;
            }
            function determineTestTemplate(pos, tests) {
                pos = pos > 0 ? pos - 1 : 0;
                var altTest = getTest(pos), targetLocator = getLocator(altTest), tstLocator, closest, bestMatch;
                for (var ndx = 0; ndx < tests.length; ndx++) {
                    var tst = tests[ndx];
                    tstLocator = getLocator(tst, targetLocator.length);
                    var distance = Math.abs(tstLocator - targetLocator);
                    if (closest === undefined || tstLocator !== "" && distance < closest || bestMatch && !opts.greedy && bestMatch.match.optionality && bestMatch.match.newBlockMarker === "master" && (!tst.match.optionality || !tst.match.newBlockMarker) || bestMatch && bestMatch.match.optionalQuantifier && !tst.match.optionalQuantifier) {
                        closest = distance;
                        bestMatch = tst;
                    }
                }
                return bestMatch;
            }
            function getTestTemplate(pos, ndxIntlzr, tstPs) {
                return getMaskSet().validPositions[pos] || determineTestTemplate(pos, getTests(pos, ndxIntlzr ? ndxIntlzr.slice() : ndxIntlzr, tstPs));
            }
            function getTest(pos, tests) {
                if (getMaskSet().validPositions[pos]) {
                    return getMaskSet().validPositions[pos];
                }
                return (tests || getTests(pos))[0];
            }
            function positionCanMatchDefinition(pos, def) {
                var valid = false, tests = getTests(pos);
                for (var tndx = 0; tndx < tests.length; tndx++) {
                    if (tests[tndx].match && tests[tndx].match.def === def) {
                        valid = true;
                        break;
                    }
                }
                return valid;
            }
            function getTests(pos, ndxIntlzr, tstPs) {
                var maskTokens = getMaskSet().maskToken, testPos = ndxIntlzr ? tstPs : 0, ndxInitializer = ndxIntlzr ? ndxIntlzr.slice() : [ 0 ], matches = [], insertStop = false, latestMatch, cacheDependency = ndxIntlzr ? ndxIntlzr.join("") : "";
                function resolveTestFromToken(maskToken, ndxInitializer, loopNdx, quantifierRecurse) {
                    function handleMatch(match, loopNdx, quantifierRecurse) {
                        function isFirstMatch(latestMatch, tokenGroup) {
                            var firstMatch = $.inArray(latestMatch, tokenGroup.matches) === 0;
                            if (!firstMatch) {
                                $.each(tokenGroup.matches, function(ndx, match) {
                                    if (match.isQuantifier === true) firstMatch = isFirstMatch(latestMatch, tokenGroup.matches[ndx - 1]); else if (match.hasOwnProperty("matches")) firstMatch = isFirstMatch(latestMatch, match);
                                    if (firstMatch) return false;
                                });
                            }
                            return firstMatch;
                        }
                        function resolveNdxInitializer(pos, alternateNdx, targetAlternation) {
                            var bestMatch, indexPos;
                            if (getMaskSet().tests[pos] || getMaskSet().validPositions[pos]) {
                                $.each(getMaskSet().tests[pos] || [ getMaskSet().validPositions[pos] ], function(ndx, lmnt) {
                                    if (lmnt.mloc[alternateNdx]) {
                                        bestMatch = lmnt;
                                        return false;
                                    }
                                    var alternation = targetAlternation !== undefined ? targetAlternation : lmnt.alternation, ndxPos = lmnt.locator[alternation] !== undefined ? lmnt.locator[alternation].toString().indexOf(alternateNdx) : -1;
                                    if ((indexPos === undefined || ndxPos < indexPos) && ndxPos !== -1) {
                                        bestMatch = lmnt;
                                        indexPos = ndxPos;
                                    }
                                });
                            }
                            if (bestMatch) {
                                var bestMatchAltIndex = bestMatch.locator[bestMatch.alternation];
                                var locator = bestMatch.mloc[alternateNdx] || bestMatch.mloc[bestMatchAltIndex] || bestMatch.locator;
                                return locator.slice((targetAlternation !== undefined ? targetAlternation : bestMatch.alternation) + 1);
                            } else {
                                return targetAlternation !== undefined ? resolveNdxInitializer(pos, alternateNdx) : undefined;
                            }
                        }
                        function isSubsetOf(source, target) {
                            function expand(pattern) {
                                var expanded = [], start, end;
                                for (var i = 0, l = pattern.length; i < l; i++) {
                                    if (pattern.charAt(i) === "-") {
                                        end = pattern.charCodeAt(i + 1);
                                        while (++start < end) {
                                            expanded.push(String.fromCharCode(start));
                                        }
                                    } else {
                                        start = pattern.charCodeAt(i);
                                        expanded.push(pattern.charAt(i));
                                    }
                                }
                                return expanded.join("");
                            }
                            if (opts.regex && source.match.fn !== null && target.match.fn !== null) {
                                return expand(target.match.def.replace(/[\[\]]/g, "")).indexOf(expand(source.match.def.replace(/[\[\]]/g, ""))) !== -1;
                            }
                            return source.match.def === target.match.nativeDef;
                        }
                        function staticCanMatchDefinition(source, target) {
                            var sloc = source.locator.slice(source.alternation).join(""), tloc = target.locator.slice(target.alternation).join(""), canMatch = sloc == tloc;
                            canMatch = canMatch && source.match.fn === null && target.match.fn !== null ? target.match.fn.test(source.match.def, getMaskSet(), pos, false, opts, false) : false;
                            return canMatch;
                        }
                        function setMergeLocators(targetMatch, altMatch) {
                            if (altMatch === undefined || targetMatch.alternation === altMatch.alternation && targetMatch.locator[targetMatch.alternation].toString().indexOf(altMatch.locator[altMatch.alternation]) === -1) {
                                targetMatch.mloc = targetMatch.mloc || {};
                                var locNdx = targetMatch.locator[targetMatch.alternation];
                                if (locNdx === undefined) targetMatch.alternation = undefined; else {
                                    if (typeof locNdx === "string") locNdx = locNdx.split(",")[0];
                                    if (targetMatch.mloc[locNdx] === undefined) targetMatch.mloc[locNdx] = targetMatch.locator.slice();
                                    if (altMatch !== undefined) {
                                        for (var ndx in altMatch.mloc) {
                                            if (typeof ndx === "string") ndx = ndx.split(",")[0];
                                            if (targetMatch.mloc[ndx] === undefined) targetMatch.mloc[ndx] = altMatch.mloc[ndx];
                                        }
                                        targetMatch.locator[targetMatch.alternation] = Object.keys(targetMatch.mloc).join(",");
                                    }
                                    return true;
                                }
                            }
                            return false;
                        }
                        if (testPos > 500 && quantifierRecurse !== undefined) {
                            throw "Inputmask: There is probably an error in your mask definition or in the code. Create an issue on github with an example of the mask you are using. " + getMaskSet().mask;
                        }
                        if (testPos === pos && match.matches === undefined) {
                            matches.push({
                                match: match,
                                locator: loopNdx.reverse(),
                                cd: cacheDependency,
                                mloc: {}
                            });
                            return true;
                        } else if (match.matches !== undefined) {
                            if (match.isGroup && quantifierRecurse !== match) {
                                match = handleMatch(maskToken.matches[$.inArray(match, maskToken.matches) + 1], loopNdx, quantifierRecurse);
                                if (match) return true;
                            } else if (match.isOptional) {
                                var optionalToken = match;
                                match = resolveTestFromToken(match, ndxInitializer, loopNdx, quantifierRecurse);
                                if (match) {
                                    $.each(matches, function(ndx, mtch) {
                                        mtch.match.optionality = true;
                                    });
                                    latestMatch = matches[matches.length - 1].match;
                                    if (quantifierRecurse === undefined && isFirstMatch(latestMatch, optionalToken)) {
                                        insertStop = true;
                                        testPos = pos;
                                    } else return true;
                                }
                            } else if (match.isAlternator) {
                                var alternateToken = match, malternateMatches = [], maltMatches, currentMatches = matches.slice(), loopNdxCnt = loopNdx.length;
                                var altIndex = ndxInitializer.length > 0 ? ndxInitializer.shift() : -1;
                                if (altIndex === -1 || typeof altIndex === "string") {
                                    var currentPos = testPos, ndxInitializerClone = ndxInitializer.slice(), altIndexArr = [], amndx;
                                    if (typeof altIndex == "string") {
                                        altIndexArr = altIndex.split(",");
                                    } else {
                                        for (amndx = 0; amndx < alternateToken.matches.length; amndx++) {
                                            altIndexArr.push(amndx.toString());
                                        }
                                    }
                                    if (getMaskSet().excludes[pos]) {
                                        var altIndexArrClone = altIndexArr.slice();
                                        for (var i = 0, el = getMaskSet().excludes[pos].length; i < el; i++) {
                                            altIndexArr.splice(altIndexArr.indexOf(getMaskSet().excludes[pos][i].toString()), 1);
                                        }
                                        if (altIndexArr.length === 0) {
                                            getMaskSet().excludes[pos] = undefined;
                                            altIndexArr = altIndexArrClone;
                                        }
                                    }
                                    if (opts.keepStatic === true || isFinite(parseInt(opts.keepStatic)) && currentPos >= opts.keepStatic) altIndexArr = altIndexArr.slice(0, 1);
                                    var unMatchedAlternation = false;
                                    for (var ndx = 0; ndx < altIndexArr.length; ndx++) {
                                        amndx = parseInt(altIndexArr[ndx]);
                                        matches = [];
                                        ndxInitializer = typeof altIndex === "string" ? resolveNdxInitializer(testPos, amndx, loopNdxCnt) || ndxInitializerClone.slice() : ndxInitializerClone.slice();
                                        if (alternateToken.matches[amndx] && handleMatch(alternateToken.matches[amndx], [ amndx ].concat(loopNdx), quantifierRecurse)) match = true; else if (ndx === 0) {
                                            unMatchedAlternation = true;
                                        }
                                        maltMatches = matches.slice();
                                        testPos = currentPos;
                                        matches = [];
                                        for (var ndx1 = 0; ndx1 < maltMatches.length; ndx1++) {
                                            var altMatch = maltMatches[ndx1], dropMatch = false;
                                            altMatch.match.jit = altMatch.match.jit || unMatchedAlternation;
                                            altMatch.alternation = altMatch.alternation || loopNdxCnt;
                                            setMergeLocators(altMatch);
                                            for (var ndx2 = 0; ndx2 < malternateMatches.length; ndx2++) {
                                                var altMatch2 = malternateMatches[ndx2];
                                                if (typeof altIndex !== "string" || altMatch.alternation !== undefined && $.inArray(altMatch.locator[altMatch.alternation].toString(), altIndexArr) !== -1) {
                                                    if (altMatch.match.nativeDef === altMatch2.match.nativeDef) {
                                                        dropMatch = true;
                                                        setMergeLocators(altMatch2, altMatch);
                                                        break;
                                                    } else if (isSubsetOf(altMatch, altMatch2)) {
                                                        if (setMergeLocators(altMatch, altMatch2)) {
                                                            dropMatch = true;
                                                            malternateMatches.splice(malternateMatches.indexOf(altMatch2), 0, altMatch);
                                                        }
                                                        break;
                                                    } else if (isSubsetOf(altMatch2, altMatch)) {
                                                        setMergeLocators(altMatch2, altMatch);
                                                        break;
                                                    } else if (staticCanMatchDefinition(altMatch, altMatch2)) {
                                                        if (setMergeLocators(altMatch, altMatch2)) {
                                                            dropMatch = true;
                                                            malternateMatches.splice(malternateMatches.indexOf(altMatch2), 0, altMatch);
                                                        }
                                                        break;
                                                    }
                                                }
                                            }
                                            if (!dropMatch) {
                                                malternateMatches.push(altMatch);
                                            }
                                        }
                                    }
                                    matches = currentMatches.concat(malternateMatches);
                                    testPos = pos;
                                    insertStop = matches.length > 0;
                                    match = malternateMatches.length > 0;
                                    ndxInitializer = ndxInitializerClone.slice();
                                } else match = handleMatch(alternateToken.matches[altIndex] || maskToken.matches[altIndex], [ altIndex ].concat(loopNdx), quantifierRecurse);
                                if (match) return true;
                            } else if (match.isQuantifier && quantifierRecurse !== maskToken.matches[$.inArray(match, maskToken.matches) - 1]) {
                                var qt = match;
                                for (var qndx = ndxInitializer.length > 0 ? ndxInitializer.shift() : 0; qndx < (isNaN(qt.quantifier.max) ? qndx + 1 : qt.quantifier.max) && testPos <= pos; qndx++) {
                                    var tokenGroup = maskToken.matches[$.inArray(qt, maskToken.matches) - 1];
                                    match = handleMatch(tokenGroup, [ qndx ].concat(loopNdx), tokenGroup);
                                    if (match) {
                                        latestMatch = matches[matches.length - 1].match;
                                        latestMatch.optionalQuantifier = qndx >= qt.quantifier.min;
                                        latestMatch.jit = (qndx || 1) * tokenGroup.matches.indexOf(latestMatch) >= qt.quantifier.jit;
                                        if (latestMatch.optionalQuantifier && isFirstMatch(latestMatch, tokenGroup)) {
                                            insertStop = true;
                                            testPos = pos;
                                            break;
                                        }
                                        if (latestMatch.jit) {
                                            getMaskSet().jitOffset[pos] = tokenGroup.matches.indexOf(latestMatch);
                                        }
                                        return true;
                                    }
                                }
                            } else {
                                match = resolveTestFromToken(match, ndxInitializer, loopNdx, quantifierRecurse);
                                if (match) return true;
                            }
                        } else {
                            testPos++;
                        }
                    }
                    for (var tndx = ndxInitializer.length > 0 ? ndxInitializer.shift() : 0; tndx < maskToken.matches.length; tndx++) {
                        if (maskToken.matches[tndx].isQuantifier !== true) {
                            var match = handleMatch(maskToken.matches[tndx], [ tndx ].concat(loopNdx), quantifierRecurse);
                            if (match && testPos === pos) {
                                return match;
                            } else if (testPos > pos) {
                                break;
                            }
                        }
                    }
                }
                function mergeLocators(pos, tests) {
                    var locator = [];
                    if (!$.isArray(tests)) tests = [ tests ];
                    if (tests.length > 0) {
                        if (tests[0].alternation === undefined) {
                            locator = determineTestTemplate(pos, tests.slice()).locator.slice();
                            if (locator.length === 0) locator = tests[0].locator.slice();
                        } else {
                            $.each(tests, function(ndx, tst) {
                                if (tst.def !== "") {
                                    if (locator.length === 0) locator = tst.locator.slice(); else {
                                        for (var i = 0; i < locator.length; i++) {
                                            if (tst.locator[i] && locator[i].toString().indexOf(tst.locator[i]) === -1) {
                                                locator[i] += "," + tst.locator[i];
                                            }
                                        }
                                    }
                                }
                            });
                        }
                    }
                    return locator;
                }
                if (pos > -1) {
                    if (ndxIntlzr === undefined) {
                        var previousPos = pos - 1, test;
                        while ((test = getMaskSet().validPositions[previousPos] || getMaskSet().tests[previousPos]) === undefined && previousPos > -1) {
                            previousPos--;
                        }
                        if (test !== undefined && previousPos > -1) {
                            ndxInitializer = mergeLocators(previousPos, test);
                            cacheDependency = ndxInitializer.join("");
                            testPos = previousPos;
                        }
                    }
                    if (getMaskSet().tests[pos] && getMaskSet().tests[pos][0].cd === cacheDependency) {
                        return getMaskSet().tests[pos];
                    }
                    for (var mtndx = ndxInitializer.shift(); mtndx < maskTokens.length; mtndx++) {
                        var match = resolveTestFromToken(maskTokens[mtndx], ndxInitializer, [ mtndx ]);
                        if (match && testPos === pos || testPos > pos) {
                            break;
                        }
                    }
                }
                if (matches.length === 0 || insertStop) {
                    matches.push({
                        match: {
                            fn: null,
                            optionality: false,
                            casing: null,
                            def: "",
                            placeholder: ""
                        },
                        locator: [],
                        mloc: {},
                        cd: cacheDependency
                    });
                }
                if (ndxIntlzr !== undefined && getMaskSet().tests[pos]) {
                    return $.extend(true, [], matches);
                }
                getMaskSet().tests[pos] = $.extend(true, [], matches);
                return getMaskSet().tests[pos];
            }
            function getBufferTemplate() {
                if (getMaskSet()._buffer === undefined) {
                    getMaskSet()._buffer = getMaskTemplate(false, 1);
                    if (getMaskSet().buffer === undefined) getMaskSet().buffer = getMaskSet()._buffer.slice();
                }
                return getMaskSet()._buffer;
            }
            function getBuffer(noCache) {
                if (getMaskSet().buffer === undefined || noCache === true) {
                    getMaskSet().buffer = getMaskTemplate(true, getLastValidPosition(), true);
                    if (getMaskSet()._buffer === undefined) getMaskSet()._buffer = getMaskSet().buffer.slice();
                }
                return getMaskSet().buffer;
            }
            function refreshFromBuffer(start, end, buffer) {
                var i, p;
                if (start === true) {
                    resetMaskSet();
                    start = 0;
                    end = buffer.length;
                } else {
                    for (i = start; i < end; i++) {
                        delete getMaskSet().validPositions[i];
                    }
                }
                p = start;
                for (i = start; i < end; i++) {
                    resetMaskSet(true);
                    if (buffer[i] !== opts.skipOptionalPartCharacter) {
                        var valResult = isValid(p, buffer[i], true, true);
                        if (valResult !== false) {
                            resetMaskSet(true);
                            p = valResult.caret !== undefined ? valResult.caret : valResult.pos + 1;
                        }
                    }
                }
            }
            function casing(elem, test, pos) {
                switch (opts.casing || test.casing) {
                  case "upper":
                    elem = elem.toUpperCase();
                    break;

                  case "lower":
                    elem = elem.toLowerCase();
                    break;

                  case "title":
                    var posBefore = getMaskSet().validPositions[pos - 1];
                    if (pos === 0 || posBefore && posBefore.input === String.fromCharCode(Inputmask.keyCode.SPACE)) {
                        elem = elem.toUpperCase();
                    } else {
                        elem = elem.toLowerCase();
                    }
                    break;

                  default:
                    if ($.isFunction(opts.casing)) {
                        var args = Array.prototype.slice.call(arguments);
                        args.push(getMaskSet().validPositions);
                        elem = opts.casing.apply(this, args);
                    }
                }
                return elem;
            }
            function checkAlternationMatch(altArr1, altArr2, na) {
                var altArrC = opts.greedy ? altArr2 : altArr2.slice(0, 1), isMatch = false, naArr = na !== undefined ? na.split(",") : [], naNdx;
                for (var i = 0; i < naArr.length; i++) {
                    if ((naNdx = altArr1.indexOf(naArr[i])) !== -1) {
                        altArr1.splice(naNdx, 1);
                    }
                }
                for (var alndx = 0; alndx < altArr1.length; alndx++) {
                    if ($.inArray(altArr1[alndx], altArrC) !== -1) {
                        isMatch = true;
                        break;
                    }
                }
                return isMatch;
            }
            function alternate(pos, c, strict, fromSetValid, rAltPos) {
                var validPsClone = $.extend(true, {}, getMaskSet().validPositions), lastAlt, alternation, isValidRslt = false, altPos, prevAltPos, i, validPos, decisionPos, lAltPos = rAltPos !== undefined ? rAltPos : getLastValidPosition();
                if (lAltPos === -1 && rAltPos === undefined) {
                    lastAlt = 0;
                    prevAltPos = getTest(lastAlt);
                    alternation = prevAltPos.alternation;
                } else {
                    for (;lAltPos >= 0; lAltPos--) {
                        altPos = getMaskSet().validPositions[lAltPos];
                        if (altPos && altPos.alternation !== undefined) {
                            if (prevAltPos && prevAltPos.locator[altPos.alternation] !== altPos.locator[altPos.alternation]) {
                                break;
                            }
                            lastAlt = lAltPos;
                            alternation = getMaskSet().validPositions[lastAlt].alternation;
                            prevAltPos = altPos;
                        }
                    }
                }
                if (alternation !== undefined) {
                    decisionPos = parseInt(lastAlt);
                    getMaskSet().excludes[decisionPos] = getMaskSet().excludes[decisionPos] || [];
                    if (pos !== true) {
                        getMaskSet().excludes[decisionPos].push(getDecisionTaker(prevAltPos));
                    }
                    var validInputsClone = [], staticInputsBeforePos = 0;
                    for (i = decisionPos; i < getLastValidPosition(undefined, true) + 1; i++) {
                        validPos = getMaskSet().validPositions[i];
                        if (validPos && validPos.generatedInput !== true) {
                            validInputsClone.push(validPos.input);
                        } else if (i < pos) staticInputsBeforePos++;
                        delete getMaskSet().validPositions[i];
                    }
                    while (getMaskSet().excludes[decisionPos] && getMaskSet().excludes[decisionPos].length < 10) {
                        var posOffset = staticInputsBeforePos * -1, validInputs = validInputsClone.slice();
                        getMaskSet().tests[decisionPos] = undefined;
                        resetMaskSet(true);
                        isValidRslt = true;
                        while (validInputs.length > 0) {
                            var input = validInputs.shift();
                            if (!(isValidRslt = isValid(getLastValidPosition(undefined, true) + 1, input, false, fromSetValid, true))) {
                                break;
                            }
                        }
                        if (isValidRslt && c !== undefined) {
                            var targetLvp = getLastValidPosition(pos) + 1;
                            for (i = decisionPos; i < getLastValidPosition() + 1; i++) {
                                validPos = getMaskSet().validPositions[i];
                                if ((validPos === undefined || validPos.match.fn == null) && i < pos + posOffset) {
                                    posOffset++;
                                }
                            }
                            pos = pos + posOffset;
                            isValidRslt = isValid(pos > targetLvp ? targetLvp : pos, c, strict, fromSetValid, true);
                        }
                        if (!isValidRslt) {
                            resetMaskSet();
                            prevAltPos = getTest(decisionPos);
                            getMaskSet().validPositions = $.extend(true, {}, validPsClone);
                            if (getMaskSet().excludes[decisionPos]) {
                                var decisionTaker = getDecisionTaker(prevAltPos);
                                if (getMaskSet().excludes[decisionPos].indexOf(decisionTaker) !== -1) {
                                    isValidRslt = alternate(pos, c, strict, fromSetValid, decisionPos - 1);
                                    break;
                                }
                                getMaskSet().excludes[decisionPos].push(decisionTaker);
                                for (i = decisionPos; i < getLastValidPosition(undefined, true) + 1; i++) {
                                    delete getMaskSet().validPositions[i];
                                }
                            } else {
                                isValidRslt = alternate(pos, c, strict, fromSetValid, decisionPos - 1);
                                break;
                            }
                        } else break;
                    }
                }
                getMaskSet().excludes[decisionPos] = undefined;
                return isValidRslt;
            }
            function isValid(pos, c, strict, fromSetValid, fromAlternate, validateOnly) {
                function isSelection(posObj) {
                    return isRTL ? posObj.begin - posObj.end > 1 || posObj.begin - posObj.end === 1 : posObj.end - posObj.begin > 1 || posObj.end - posObj.begin === 1;
                }
                strict = strict === true;
                var maskPos = pos;
                if (pos.begin !== undefined) {
                    maskPos = isRTL ? pos.end : pos.begin;
                }
                function _isValid(position, c, strict) {
                    var rslt = false;
                    $.each(getTests(position), function(ndx, tst) {
                        var test = tst.match;
                        getBuffer(true);
                        rslt = test.fn != null ? test.fn.test(c, getMaskSet(), position, strict, opts, isSelection(pos)) : (c === test.def || c === opts.skipOptionalPartCharacter) && test.def !== "" ? {
                            c: getPlaceholder(position, test, true) || test.def,
                            pos: position
                        } : false;
                        if (rslt !== false) {
                            var elem = rslt.c !== undefined ? rslt.c : c, validatedPos = position;
                            elem = elem === opts.skipOptionalPartCharacter && test.fn === null ? getPlaceholder(position, test, true) || test.def : elem;
                            if (rslt.remove !== undefined) {
                                if (!$.isArray(rslt.remove)) rslt.remove = [ rslt.remove ];
                                $.each(rslt.remove.sort(function(a, b) {
                                    return b - a;
                                }), function(ndx, lmnt) {
                                    revalidateMask({
                                        begin: lmnt,
                                        end: lmnt + 1
                                    });
                                });
                            }
                            if (rslt.insert !== undefined) {
                                if (!$.isArray(rslt.insert)) rslt.insert = [ rslt.insert ];
                                $.each(rslt.insert.sort(function(a, b) {
                                    return a - b;
                                }), function(ndx, lmnt) {
                                    isValid(lmnt.pos, lmnt.c, true, fromSetValid);
                                });
                            }
                            if (rslt !== true && rslt.pos !== undefined && rslt.pos !== position) {
                                validatedPos = rslt.pos;
                            }
                            if (rslt !== true && rslt.pos === undefined && rslt.c === undefined) {
                                return false;
                            }
                            if (!revalidateMask(pos, $.extend({}, tst, {
                                input: casing(elem, test, validatedPos)
                            }), fromSetValid, validatedPos)) {
                                rslt = false;
                            }
                            return false;
                        }
                    });
                    return rslt;
                }
                var result = true, positionsClone = $.extend(true, {}, getMaskSet().validPositions);
                if ($.isFunction(opts.preValidation) && !strict && fromSetValid !== true && validateOnly !== true) {
                    result = opts.preValidation(getBuffer(), maskPos, c, isSelection(pos), opts, getMaskSet());
                }
                if (result === true) {
                    trackbackPositions(undefined, maskPos, true);
                    if (maxLength === undefined || maskPos < maxLength) {
                        result = _isValid(maskPos, c, strict);
                        if ((!strict || fromSetValid === true) && result === false && validateOnly !== true) {
                            var currentPosValid = getMaskSet().validPositions[maskPos];
                            if (currentPosValid && currentPosValid.match.fn === null && (currentPosValid.match.def === c || c === opts.skipOptionalPartCharacter)) {
                                result = {
                                    caret: seekNext(maskPos)
                                };
                            } else {
                                if ((opts.insertMode || getMaskSet().validPositions[seekNext(maskPos)] === undefined) && (!isMask(maskPos, true) || getMaskSet().jitOffset[maskPos])) {
                                    if (getMaskSet().jitOffset[maskPos] && getMaskSet().validPositions[seekNext(maskPos)] === undefined) {
                                        result = isValid(maskPos + getMaskSet().jitOffset[maskPos], c, strict);
                                        if (result !== false) result.caret = maskPos;
                                    } else for (var nPos = maskPos + 1, snPos = seekNext(maskPos); nPos <= snPos; nPos++) {
                                        result = _isValid(nPos, c, strict);
                                        if (result !== false) {
                                            result = trackbackPositions(maskPos, result.pos !== undefined ? result.pos : nPos) || result;
                                            maskPos = nPos;
                                            break;
                                        }
                                    }
                                }
                            }
                        }
                    }
                    if (result === false && opts.keepStatic !== false && (opts.regex == null || isComplete(getBuffer())) && !strict && fromAlternate !== true) {
                        result = alternate(maskPos, c, strict, fromSetValid);
                    }
                    if (result === true) {
                        result = {
                            pos: maskPos
                        };
                    }
                }
                if ($.isFunction(opts.postValidation) && result !== false && !strict && fromSetValid !== true && validateOnly !== true) {
                    var postResult = opts.postValidation(getBuffer(true), pos.begin !== undefined ? isRTL ? pos.end : pos.begin : pos, result, opts);
                    if (postResult !== undefined) {
                        if (postResult.refreshFromBuffer && postResult.buffer) {
                            var refresh = postResult.refreshFromBuffer;
                            refreshFromBuffer(refresh === true ? refresh : refresh.start, refresh.end, postResult.buffer);
                        }
                        result = postResult === true ? result : postResult;
                    }
                }
                if (result && result.pos === undefined) {
                    result.pos = maskPos;
                }
                if (result === false || validateOnly === true) {
                    resetMaskSet(true);
                    getMaskSet().validPositions = $.extend(true, {}, positionsClone);
                }
                return result;
            }
            function trackbackPositions(originalPos, newPos, fillOnly) {
                var result;
                if (originalPos === undefined) {
                    for (originalPos = newPos - 1; originalPos > 0; originalPos--) {
                        if (getMaskSet().validPositions[originalPos]) break;
                    }
                }
                for (var ps = originalPos; ps < newPos; ps++) {
                    if (getMaskSet().validPositions[ps] === undefined && !isMask(ps, true)) {
                        var vp = ps == 0 ? getTest(ps) : getMaskSet().validPositions[ps - 1];
                        if (vp) {
                            var tests = getTests(ps).slice();
                            if (tests[tests.length - 1].match.def === "") tests.pop();
                            var bestMatch = determineTestTemplate(ps, tests);
                            bestMatch = $.extend({}, bestMatch, {
                                input: getPlaceholder(ps, bestMatch.match, true) || bestMatch.match.def
                            });
                            bestMatch.generatedInput = true;
                            revalidateMask(ps, bestMatch, true);
                            if (fillOnly !== true) {
                                var cvpInput = getMaskSet().validPositions[newPos].input;
                                getMaskSet().validPositions[newPos] = undefined;
                                result = isValid(newPos, cvpInput, true, true);
                            }
                        }
                    }
                }
                return result;
            }
            function revalidateMask(pos, validTest, fromSetValid, validatedPos) {
                function IsEnclosedStatic(pos, valids, selection) {
                    var posMatch = valids[pos];
                    if (posMatch !== undefined && (posMatch.match.fn === null && posMatch.match.optionality !== true || posMatch.input === opts.radixPoint)) {
                        var prevMatch = selection.begin <= pos - 1 ? valids[pos - 1] && valids[pos - 1].match.fn === null && valids[pos - 1] : valids[pos - 1], nextMatch = selection.end > pos + 1 ? valids[pos + 1] && valids[pos + 1].match.fn === null && valids[pos + 1] : valids[pos + 1];
                        return prevMatch && nextMatch;
                    }
                    return false;
                }
                var begin = pos.begin !== undefined ? pos.begin : pos, end = pos.end !== undefined ? pos.end : pos;
                if (pos.begin > pos.end) {
                    begin = pos.end;
                    end = pos.begin;
                }
                validatedPos = validatedPos !== undefined ? validatedPos : begin;
                if (begin !== end || opts.insertMode && getMaskSet().validPositions[validatedPos] !== undefined && fromSetValid === undefined) {
                    var positionsClone = $.extend(true, {}, getMaskSet().validPositions), lvp = getLastValidPosition(undefined, true), i;
                    getMaskSet().p = begin;
                    for (i = lvp; i >= begin; i--) {
                        if (getMaskSet().validPositions[i] && getMaskSet().validPositions[i].match.nativeDef === "+") {
                            opts.isNegative = false;
                        }
                        delete getMaskSet().validPositions[i];
                    }
                    var valid = true, j = validatedPos, vps = getMaskSet().validPositions, needsValidation = false, posMatch = j, i = j;
                    if (validTest) {
                        getMaskSet().validPositions[validatedPos] = $.extend(true, {}, validTest);
                        posMatch++;
                        j++;
                        if (begin < end) i++;
                    }
                    for (;i <= lvp; i++) {
                        var t = positionsClone[i];
                        if (t !== undefined && (i >= end || i >= begin && t.generatedInput !== true && IsEnclosedStatic(i, positionsClone, {
                            begin: begin,
                            end: end
                        }))) {
                            while (getTest(posMatch).match.def !== "") {
                                if (needsValidation === false && positionsClone[posMatch] && positionsClone[posMatch].match.nativeDef === t.match.nativeDef) {
                                    getMaskSet().validPositions[posMatch] = $.extend(true, {}, positionsClone[posMatch]);
                                    getMaskSet().validPositions[posMatch].input = t.input;
                                    trackbackPositions(undefined, posMatch, true);
                                    j = posMatch + 1;
                                    valid = true;
                                } else if (opts.shiftPositions && positionCanMatchDefinition(posMatch, t.match.def)) {
                                    var result = isValid(posMatch, t.input, true, true);
                                    valid = result !== false;
                                    j = result.caret || result.insert ? getLastValidPosition() : posMatch + 1;
                                    needsValidation = true;
                                } else {
                                    valid = t.generatedInput === true || t.input === opts.radixPoint && opts.numericInput === true;
                                }
                                if (valid) break;
                                if (!valid && posMatch > end && isMask(posMatch, true) && (t.match.fn !== null || posMatch > getMaskSet().maskLength)) {
                                    break;
                                }
                                posMatch++;
                            }
                            if (getTest(posMatch).match.def == "") valid = false;
                            posMatch = j;
                        }
                        if (!valid) break;
                    }
                    if (!valid) {
                        getMaskSet().validPositions = $.extend(true, {}, positionsClone);
                        resetMaskSet(true);
                        return false;
                    }
                } else if (validTest) {
                    getMaskSet().validPositions[validatedPos] = $.extend(true, {}, validTest);
                }
                resetMaskSet(true);
                return true;
            }
            function isMask(pos, strict) {
                var test = getTestTemplate(pos).match;
                if (test.def === "") test = getTest(pos).match;
                if (test.fn != null) {
                    return test.fn;
                }
                if (strict !== true && pos > -1) {
                    var tests = getTests(pos);
                    return tests.length > 1 + (tests[tests.length - 1].match.def === "" ? 1 : 0);
                }
                return false;
            }
            function seekNext(pos, newBlock) {
                var position = pos + 1;
                while (getTest(position).match.def !== "" && (newBlock === true && (getTest(position).match.newBlockMarker !== true || !isMask(position)) || newBlock !== true && !isMask(position))) {
                    position++;
                }
                return position;
            }
            function seekPrevious(pos, newBlock) {
                var position = pos, tests;
                if (position <= 0) return 0;
                while (--position > 0 && (newBlock === true && getTest(position).match.newBlockMarker !== true || newBlock !== true && !isMask(position) && (tests = getTests(position), 
                tests.length < 2 || tests.length === 2 && tests[1].match.def === ""))) {}
                return position;
            }
            function writeBuffer(input, buffer, caretPos, event, triggerEvents) {
                if (event && $.isFunction(opts.onBeforeWrite)) {
                    var result = opts.onBeforeWrite.call(inputmask, event, buffer, caretPos, opts);
                    if (result) {
                        if (result.refreshFromBuffer) {
                            var refresh = result.refreshFromBuffer;
                            refreshFromBuffer(refresh === true ? refresh : refresh.start, refresh.end, result.buffer || buffer);
                            buffer = getBuffer(true);
                        }
                        if (caretPos !== undefined) caretPos = result.caret !== undefined ? result.caret : caretPos;
                    }
                }
                if (input !== undefined) {
                    input.inputmask._valueSet(buffer.join(""));
                    if (caretPos !== undefined && (event === undefined || event.type !== "blur")) {
                        caret(input, caretPos);
                    } else renderColorMask(input, caretPos, buffer.length === 0);
                    if (triggerEvents === true) {
                        var $input = $(input), nptVal = input.inputmask._valueGet();
                        skipInputEvent = true;
                        $input.trigger("input");
                        setTimeout(function() {
                            if (nptVal === getBufferTemplate().join("")) {
                                $input.trigger("cleared");
                            } else if (isComplete(buffer) === true) {
                                $input.trigger("complete");
                            }
                        }, 0);
                    }
                }
            }
            function getPlaceholder(pos, test, returnPL) {
                test = test || getTest(pos).match;
                if (test.placeholder !== undefined || returnPL === true) {
                    return $.isFunction(test.placeholder) ? test.placeholder(opts) : test.placeholder;
                } else if (test.fn === null) {
                    if (pos > -1 && getMaskSet().validPositions[pos] === undefined) {
                        var tests = getTests(pos), staticAlternations = [], prevTest;
                        if (tests.length > 1 + (tests[tests.length - 1].match.def === "" ? 1 : 0)) {
                            for (var i = 0; i < tests.length; i++) {
                                if (tests[i].match.optionality !== true && tests[i].match.optionalQuantifier !== true && (tests[i].match.fn === null || prevTest === undefined || tests[i].match.fn.test(prevTest.match.def, getMaskSet(), pos, true, opts) !== false)) {
                                    staticAlternations.push(tests[i]);
                                    if (tests[i].match.fn === null) prevTest = tests[i];
                                    if (staticAlternations.length > 1) {
                                        if (/[0-9a-bA-Z]/.test(staticAlternations[0].match.def)) {
                                            return opts.placeholder.charAt(pos % opts.placeholder.length);
                                        }
                                    }
                                }
                            }
                        }
                    }
                    return test.def;
                }
                return opts.placeholder.charAt(pos % opts.placeholder.length);
            }
            function HandleNativePlaceholder(npt, value) {
                if (ie) {
                    if (npt.inputmask._valueGet() !== value && (npt.placeholder !== value || npt.placeholder === "")) {
                        var buffer = getBuffer().slice(), nptValue = npt.inputmask._valueGet();
                        if (nptValue !== value) {
                            var lvp = getLastValidPosition();
                            if (lvp === -1 && nptValue === getBufferTemplate().join("")) {
                                buffer = [];
                            } else if (lvp !== -1) {
                                clearOptionalTail(buffer);
                            }
                            writeBuffer(npt, buffer);
                        }
                    }
                } else if (npt.placeholder !== value) {
                    npt.placeholder = value;
                    if (npt.placeholder === "") npt.removeAttribute("placeholder");
                }
            }
            var EventRuler = {
                on: function on(input, eventName, eventHandler) {
                    var ev = function ev(e) {
                        var that = this;
                        if (that.inputmask === undefined && this.nodeName !== "FORM") {
                            var imOpts = $.data(that, "_inputmask_opts");
                            if (imOpts) new Inputmask(imOpts).mask(that); else EventRuler.off(that);
                        } else if (e.type !== "setvalue" && this.nodeName !== "FORM" && (that.disabled || that.readOnly && !(e.type === "keydown" && e.ctrlKey && e.keyCode === 67 || opts.tabThrough === false && e.keyCode === Inputmask.keyCode.TAB))) {
                            e.preventDefault();
                        } else {
                            switch (e.type) {
                              case "input":
                                if (skipInputEvent === true) {
                                    skipInputEvent = false;
                                    return e.preventDefault();
                                }
                                if (mobile) {
                                    var args = arguments;
                                    setTimeout(function() {
                                        eventHandler.apply(that, args);
                                        caret(that, that.inputmask.caretPos, undefined, true);
                                    }, 0);
                                    return false;
                                }
                                break;

                              case "keydown":
                                skipKeyPressEvent = false;
                                skipInputEvent = false;
                                break;

                              case "keypress":
                                if (skipKeyPressEvent === true) {
                                    return e.preventDefault();
                                }
                                skipKeyPressEvent = true;
                                break;

                              case "click":
                                if (iemobile || iphone) {
                                    var args = arguments;
                                    setTimeout(function() {
                                        eventHandler.apply(that, args);
                                    }, 0);
                                    return false;
                                }
                                break;
                            }
                            var returnVal = eventHandler.apply(that, arguments);
                            if (returnVal === false) {
                                e.preventDefault();
                                e.stopPropagation();
                            }
                            return returnVal;
                        }
                    };
                    input.inputmask.events[eventName] = input.inputmask.events[eventName] || [];
                    input.inputmask.events[eventName].push(ev);
                    if ($.inArray(eventName, [ "submit", "reset" ]) !== -1) {
                        if (input.form !== null) $(input.form).on(eventName, ev);
                    } else {
                        $(input).on(eventName, ev);
                    }
                },
                off: function off(input, event) {
                    if (input.inputmask && input.inputmask.events) {
                        var events;
                        if (event) {
                            events = [];
                            events[event] = input.inputmask.events[event];
                        } else {
                            events = input.inputmask.events;
                        }
                        $.each(events, function(eventName, evArr) {
                            while (evArr.length > 0) {
                                var ev = evArr.pop();
                                if ($.inArray(eventName, [ "submit", "reset" ]) !== -1) {
                                    if (input.form !== null) $(input.form).off(eventName, ev);
                                } else {
                                    $(input).off(eventName, ev);
                                }
                            }
                            delete input.inputmask.events[eventName];
                        });
                    }
                }
            };
            var EventHandlers = {
                keydownEvent: function keydownEvent(e) {
                    var input = this, $input = $(input), k = e.keyCode, pos = caret(input);
                    if (k === Inputmask.keyCode.BACKSPACE || k === Inputmask.keyCode.DELETE || iphone && k === Inputmask.keyCode.BACKSPACE_SAFARI || e.ctrlKey && k === Inputmask.keyCode.X && !isInputEventSupported("cut")) {
                        e.preventDefault();
                        handleRemove(input, k, pos);
                        writeBuffer(input, getBuffer(true), getMaskSet().p, e, input.inputmask._valueGet() !== getBuffer().join(""));
                    } else if (k === Inputmask.keyCode.END || k === Inputmask.keyCode.PAGE_DOWN) {
                        e.preventDefault();
                        var caretPos = seekNext(getLastValidPosition());
                        caret(input, e.shiftKey ? pos.begin : caretPos, caretPos, true);
                    } else if (k === Inputmask.keyCode.HOME && !e.shiftKey || k === Inputmask.keyCode.PAGE_UP) {
                        e.preventDefault();
                        caret(input, 0, e.shiftKey ? pos.begin : 0, true);
                    } else if ((opts.undoOnEscape && k === Inputmask.keyCode.ESCAPE || k === 90 && e.ctrlKey) && e.altKey !== true) {
                        checkVal(input, true, false, undoValue.split(""));
                        $input.trigger("click");
                    } else if (k === Inputmask.keyCode.INSERT && !(e.shiftKey || e.ctrlKey)) {
                        opts.insertMode = !opts.insertMode;
                        input.setAttribute("im-insert", opts.insertMode);
                    } else if (opts.tabThrough === true && k === Inputmask.keyCode.TAB) {
                        if (e.shiftKey === true) {
                            if (getTest(pos.begin).match.fn === null) {
                                pos.begin = seekNext(pos.begin);
                            }
                            pos.end = seekPrevious(pos.begin, true);
                            pos.begin = seekPrevious(pos.end, true);
                        } else {
                            pos.begin = seekNext(pos.begin, true);
                            pos.end = seekNext(pos.begin, true);
                            if (pos.end < getMaskSet().maskLength) pos.end--;
                        }
                        if (pos.begin < getMaskSet().maskLength) {
                            e.preventDefault();
                            caret(input, pos.begin, pos.end);
                        }
                    }
                    opts.onKeyDown.call(this, e, getBuffer(), caret(input).begin, opts);
                    ignorable = $.inArray(k, opts.ignorables) !== -1;
                },
                keypressEvent: function keypressEvent(e, checkval, writeOut, strict, ndx) {
                    var input = this, $input = $(input), k = e.which || e.charCode || e.keyCode;
                    if (checkval !== true && !(e.ctrlKey && e.altKey) && (e.ctrlKey || e.metaKey || ignorable)) {
                        if (k === Inputmask.keyCode.ENTER && undoValue !== getBuffer().join("")) {
                            undoValue = getBuffer().join("");
                            setTimeout(function() {
                                $input.trigger("change");
                            }, 0);
                        }
                        return true;
                    } else {
                        if (k) {
                            if (k === 46 && e.shiftKey === false && opts.radixPoint !== "") k = opts.radixPoint.charCodeAt(0);
                            var pos = checkval ? {
                                begin: ndx,
                                end: ndx
                            } : caret(input), forwardPosition, c = String.fromCharCode(k), offset = 0;
                            if (opts._radixDance && opts.numericInput) {
                                var caretPos = getBuffer().indexOf(opts.radixPoint.charAt(0)) + 1;
                                if (pos.begin <= caretPos) {
                                    if (k === opts.radixPoint.charCodeAt(0)) offset = 1;
                                    pos.begin -= 1;
                                    pos.end -= 1;
                                }
                            }
                            getMaskSet().writeOutBuffer = true;
                            var valResult = isValid(pos, c, strict);
                            if (valResult !== false) {
                                resetMaskSet(true);
                                forwardPosition = valResult.caret !== undefined ? valResult.caret : seekNext(valResult.pos.begin ? valResult.pos.begin : valResult.pos);
                                getMaskSet().p = forwardPosition;
                            }
                            forwardPosition = (opts.numericInput && valResult.caret === undefined ? seekPrevious(forwardPosition) : forwardPosition) + offset;
                            if (writeOut !== false) {
                                setTimeout(function() {
                                    opts.onKeyValidation.call(input, k, valResult, opts);
                                }, 0);
                                if (getMaskSet().writeOutBuffer && valResult !== false) {
                                    var buffer = getBuffer();
                                    writeBuffer(input, buffer, forwardPosition, e, checkval !== true);
                                }
                            }
                            e.preventDefault();
                            if (checkval) {
                                if (valResult !== false) valResult.forwardPosition = forwardPosition;
                                return valResult;
                            }
                        }
                    }
                },
                pasteEvent: function pasteEvent(e) {
                    var input = this, ev = e.originalEvent || e, $input = $(input), inputValue = input.inputmask._valueGet(true), caretPos = caret(input), tempValue;
                    if (isRTL) {
                        tempValue = caretPos.end;
                        caretPos.end = caretPos.begin;
                        caretPos.begin = tempValue;
                    }
                    var valueBeforeCaret = inputValue.substr(0, caretPos.begin), valueAfterCaret = inputValue.substr(caretPos.end, inputValue.length);
                    if (valueBeforeCaret === (isRTL ? getBufferTemplate().reverse() : getBufferTemplate()).slice(0, caretPos.begin).join("")) valueBeforeCaret = "";
                    if (valueAfterCaret === (isRTL ? getBufferTemplate().reverse() : getBufferTemplate()).slice(caretPos.end).join("")) valueAfterCaret = "";
                    if (window.clipboardData && window.clipboardData.getData) {
                        inputValue = valueBeforeCaret + window.clipboardData.getData("Text") + valueAfterCaret;
                    } else if (ev.clipboardData && ev.clipboardData.getData) {
                        inputValue = valueBeforeCaret + ev.clipboardData.getData("text/plain") + valueAfterCaret;
                    } else return true;
                    var pasteValue = inputValue;
                    if ($.isFunction(opts.onBeforePaste)) {
                        pasteValue = opts.onBeforePaste.call(inputmask, inputValue, opts);
                        if (pasteValue === false) {
                            return e.preventDefault();
                        }
                        if (!pasteValue) {
                            pasteValue = inputValue;
                        }
                    }
                    checkVal(input, false, false, pasteValue.toString().split(""));
                    writeBuffer(input, getBuffer(), seekNext(getLastValidPosition()), e, undoValue !== getBuffer().join(""));
                    return e.preventDefault();
                },
                inputFallBackEvent: function inputFallBackEvent(e) {
                    function radixPointHandler(input, inputValue, caretPos) {
                        if (inputValue.charAt(caretPos.begin - 1) === "." && opts.radixPoint !== "") {
                            inputValue = inputValue.split("");
                            inputValue[caretPos.begin - 1] = opts.radixPoint.charAt(0);
                            inputValue = inputValue.join("");
                        }
                        return inputValue;
                    }
                    function ieMobileHandler(input, inputValue, caretPos) {
                        if (iemobile) {
                            var inputChar = inputValue.replace(getBuffer().join(""), "");
                            if (inputChar.length === 1) {
                                var iv = inputValue.split("");
                                iv.splice(caretPos.begin, 0, inputChar);
                                inputValue = iv.join("");
                            }
                        }
                        return inputValue;
                    }
                    var input = this, inputValue = input.inputmask._valueGet();
                    if (getBuffer().join("") !== inputValue) {
                        var caretPos = caret(input);
                        inputValue = radixPointHandler(input, inputValue, caretPos);
                        inputValue = ieMobileHandler(input, inputValue, caretPos);
                        if (getBuffer().join("") !== inputValue) {
                            var buffer = getBuffer().join(""), offset = !opts.numericInput && inputValue.length > buffer.length ? -1 : 0, frontPart = inputValue.substr(0, caretPos.begin), backPart = inputValue.substr(caretPos.begin), frontBufferPart = buffer.substr(0, caretPos.begin + offset), backBufferPart = buffer.substr(caretPos.begin + offset);
                            var selection = caretPos, entries = "", isEntry = false;
                            if (frontPart !== frontBufferPart) {
                                var fpl = (isEntry = frontPart.length >= frontBufferPart.length) ? frontPart.length : frontBufferPart.length, i;
                                for (i = 0; frontPart.charAt(i) === frontBufferPart.charAt(i) && i < fpl; i++) {}
                                if (isEntry) {
                                    selection.begin = i - offset;
                                    entries += frontPart.slice(i, selection.end);
                                }
                            }
                            if (backPart !== backBufferPart) {
                                if (backPart.length > backBufferPart.length) {
                                    entries += backPart.slice(0, 1);
                                } else {
                                    if (backPart.length < backBufferPart.length) {
                                        selection.end += backBufferPart.length - backPart.length;
                                        if (!isEntry && opts.radixPoint !== "" && backPart === "" && frontPart.charAt(selection.begin + offset - 1) === opts.radixPoint) {
                                            selection.begin--;
                                            entries = opts.radixPoint;
                                        }
                                    }
                                }
                            }
                            writeBuffer(input, getBuffer(), {
                                begin: selection.begin + offset,
                                end: selection.end + offset
                            });
                            if (entries.length > 0) {
                                $.each(entries.split(""), function(ndx, entry) {
                                    var keypress = new $.Event("keypress");
                                    keypress.which = entry.charCodeAt(0);
                                    ignorable = false;
                                    EventHandlers.keypressEvent.call(input, keypress);
                                });
                            } else {
                                if (selection.begin === selection.end - 1) {
                                    selection.begin = seekPrevious(selection.begin + 1);
                                    if (selection.begin === selection.end - 1) {
                                        caret(input, selection.begin);
                                    } else {
                                        caret(input, selection.begin, selection.end);
                                    }
                                }
                                var keydown = new $.Event("keydown");
                                keydown.keyCode = opts.numericInput ? Inputmask.keyCode.BACKSPACE : Inputmask.keyCode.DELETE;
                                EventHandlers.keydownEvent.call(input, keydown);
                            }
                            e.preventDefault();
                        }
                    }
                },
                beforeInputEvent: function beforeInputEvent(e) {
                    if (e.cancelable) {
                        var input = this;
                        switch (e.inputType) {
                          case "insertText":
                            $.each(e.data.split(""), function(ndx, entry) {
                                var keypress = new $.Event("keypress");
                                keypress.which = entry.charCodeAt(0);
                                ignorable = false;
                                EventHandlers.keypressEvent.call(input, keypress);
                            });
                            return e.preventDefault();

                          case "deleteContentBackward":
                            var keydown = new $.Event("keydown");
                            keydown.keyCode = Inputmask.keyCode.BACKSPACE;
                            EventHandlers.keydownEvent.call(input, keydown);
                            return e.preventDefault();

                          case "deleteContentForward":
                            var keydown = new $.Event("keydown");
                            keydown.keyCode = Inputmask.keyCode.DELETE;
                            EventHandlers.keydownEvent.call(input, keydown);
                            return e.preventDefault();
                        }
                    }
                },
                setValueEvent: function setValueEvent(e) {
                    this.inputmask.refreshValue = false;
                    var input = this, value = e && e.detail ? e.detail[0] : arguments[1], value = value || input.inputmask._valueGet(true);
                    if ($.isFunction(opts.onBeforeMask)) value = opts.onBeforeMask.call(inputmask, value, opts) || value;
                    value = value.toString().split("");
                    checkVal(input, true, false, value);
                    undoValue = getBuffer().join("");
                    if ((opts.clearMaskOnLostFocus || opts.clearIncomplete) && input.inputmask._valueGet() === getBufferTemplate().join("")) {
                        input.inputmask._valueSet("");
                    }
                },
                focusEvent: function focusEvent(e) {
                    var input = this, nptValue = input.inputmask._valueGet();
                    if (opts.showMaskOnFocus) {
                        if (nptValue !== getBuffer().join("")) {
                            writeBuffer(input, getBuffer(), seekNext(getLastValidPosition()));
                        } else if (mouseEnter === false) {
                            caret(input, seekNext(getLastValidPosition()));
                        }
                    }
                    if (opts.positionCaretOnTab === true && mouseEnter === false) {
                        EventHandlers.clickEvent.apply(input, [ e, true ]);
                    }
                    undoValue = getBuffer().join("");
                },
                mouseleaveEvent: function mouseleaveEvent(e) {
                    var input = this;
                    mouseEnter = false;
                    if (opts.clearMaskOnLostFocus && document.activeElement !== input) {
                        HandleNativePlaceholder(input, originalPlaceholder);
                    }
                },
                clickEvent: function clickEvent(e, tabbed) {
                    function doRadixFocus(clickPos) {
                        if (opts.radixPoint !== "") {
                            var vps = getMaskSet().validPositions;
                            if (vps[clickPos] === undefined || vps[clickPos].input === getPlaceholder(clickPos)) {
                                if (clickPos < seekNext(-1)) return true;
                                var radixPos = $.inArray(opts.radixPoint, getBuffer());
                                if (radixPos !== -1) {
                                    for (var vp in vps) {
                                        if (radixPos < vp && vps[vp].input !== getPlaceholder(vp)) {
                                            return false;
                                        }
                                    }
                                    return true;
                                }
                            }
                        }
                        return false;
                    }
                    var input = this;
                    setTimeout(function() {
                        if (document.activeElement === input) {
                            var selectedCaret = caret(input);
                            if (tabbed) {
                                if (isRTL) {
                                    selectedCaret.end = selectedCaret.begin;
                                } else {
                                    selectedCaret.begin = selectedCaret.end;
                                }
                            }
                            if (selectedCaret.begin === selectedCaret.end) {
                                switch (opts.positionCaretOnClick) {
                                  case "none":
                                    break;

                                  case "select":
                                    caret(input, 0, getBuffer().length);
                                    break;

                                  case "ignore":
                                    caret(input, seekNext(getLastValidPosition()));
                                    break;

                                  case "radixFocus":
                                    if (doRadixFocus(selectedCaret.begin)) {
                                        var radixPos = getBuffer().join("").indexOf(opts.radixPoint);
                                        caret(input, opts.numericInput ? seekNext(radixPos) : radixPos);
                                        break;
                                    }

                                  default:
                                    var clickPosition = selectedCaret.begin, lvclickPosition = getLastValidPosition(clickPosition, true), lastPosition = seekNext(lvclickPosition);
                                    if (clickPosition < lastPosition) {
                                        caret(input, !isMask(clickPosition, true) && !isMask(clickPosition - 1, true) ? seekNext(clickPosition) : clickPosition);
                                    } else {
                                        var lvp = getMaskSet().validPositions[lvclickPosition], tt = getTestTemplate(lastPosition, lvp ? lvp.match.locator : undefined, lvp), placeholder = getPlaceholder(lastPosition, tt.match);
                                        if (placeholder !== "" && getBuffer()[lastPosition] !== placeholder && tt.match.optionalQuantifier !== true && tt.match.newBlockMarker !== true || !isMask(lastPosition, opts.keepStatic) && tt.match.def === placeholder) {
                                            var newPos = seekNext(lastPosition);
                                            if (clickPosition >= newPos || clickPosition === lastPosition) {
                                                lastPosition = newPos;
                                            }
                                        }
                                        caret(input, lastPosition);
                                    }
                                    break;
                                }
                            }
                        }
                    }, 0);
                },
                cutEvent: function cutEvent(e) {
                    var input = this, $input = $(input), pos = caret(input), ev = e.originalEvent || e;
                    var clipboardData = window.clipboardData || ev.clipboardData, clipData = isRTL ? getBuffer().slice(pos.end, pos.begin) : getBuffer().slice(pos.begin, pos.end);
                    clipboardData.setData("text", isRTL ? clipData.reverse().join("") : clipData.join(""));
                    if (document.execCommand) document.execCommand("copy");
                    handleRemove(input, Inputmask.keyCode.DELETE, pos);
                    writeBuffer(input, getBuffer(), getMaskSet().p, e, undoValue !== getBuffer().join(""));
                },
                blurEvent: function blurEvent(e) {
                    var $input = $(this), input = this;
                    if (input.inputmask) {
                        HandleNativePlaceholder(input, originalPlaceholder);
                        var nptValue = input.inputmask._valueGet(), buffer = getBuffer().slice();
                        if (nptValue !== "" || colorMask !== undefined) {
                            if (opts.clearMaskOnLostFocus) {
                                if (getLastValidPosition() === -1 && nptValue === getBufferTemplate().join("")) {
                                    buffer = [];
                                } else {
                                    clearOptionalTail(buffer);
                                }
                            }
                            if (isComplete(buffer) === false) {
                                setTimeout(function() {
                                    $input.trigger("incomplete");
                                }, 0);
                                if (opts.clearIncomplete) {
                                    resetMaskSet();
                                    if (opts.clearMaskOnLostFocus) {
                                        buffer = [];
                                    } else {
                                        buffer = getBufferTemplate().slice();
                                    }
                                }
                            }
                            writeBuffer(input, buffer, undefined, e);
                        }
                        if (undoValue !== getBuffer().join("")) {
                            undoValue = buffer.join("");
                            $input.trigger("change");
                        }
                    }
                },
                mouseenterEvent: function mouseenterEvent(e) {
                    var input = this;
                    mouseEnter = true;
                    if (document.activeElement !== input && opts.showMaskOnHover) {
                        HandleNativePlaceholder(input, (isRTL ? getBuffer().slice().reverse() : getBuffer()).join(""));
                    }
                },
                submitEvent: function submitEvent(e) {
                    if (undoValue !== getBuffer().join("")) {
                        $el.trigger("change");
                    }
                    if (opts.clearMaskOnLostFocus && getLastValidPosition() === -1 && el.inputmask._valueGet && el.inputmask._valueGet() === getBufferTemplate().join("")) {
                        el.inputmask._valueSet("");
                    }
                    if (opts.clearIncomplete && isComplete(getBuffer()) === false) {
                        el.inputmask._valueSet("");
                    }
                    if (opts.removeMaskOnSubmit) {
                        el.inputmask._valueSet(el.inputmask.unmaskedvalue(), true);
                        setTimeout(function() {
                            writeBuffer(el, getBuffer());
                        }, 0);
                    }
                },
                resetEvent: function resetEvent(e) {
                    el.inputmask.refreshValue = true;
                    setTimeout(function() {
                        $el.trigger("setvalue");
                    }, 0);
                }
            };
            function checkVal(input, writeOut, strict, nptvl, initiatingEvent) {
                var inputmask = this || input.inputmask, inputValue = nptvl.slice(), charCodes = "", initialNdx = -1, result = undefined;
                function isTemplateMatch(ndx, charCodes) {
                    var charCodeNdx = getMaskTemplate(true, 0, false).slice(ndx, seekNext(ndx)).join("").replace(/'/g, "").indexOf(charCodes);
                    return charCodeNdx !== -1 && !isMask(ndx) && (getTest(ndx).match.nativeDef === charCodes.charAt(0) || getTest(ndx).match.fn === null && getTest(ndx).match.nativeDef === "'" + charCodes.charAt(0) || getTest(ndx).match.nativeDef === " " && (getTest(ndx + 1).match.nativeDef === charCodes.charAt(0) || getTest(ndx + 1).match.fn === null && getTest(ndx + 1).match.nativeDef === "'" + charCodes.charAt(0)));
                }
                resetMaskSet();
                if (!strict && opts.autoUnmask !== true) {
                    var staticInput = getBufferTemplate().slice(0, seekNext(-1)).join(""), matches = inputValue.join("").match(new RegExp("^" + Inputmask.escapeRegex(staticInput), "g"));
                    if (matches && matches.length > 0) {
                        inputValue.splice(0, matches.length * staticInput.length);
                        initialNdx = seekNext(initialNdx);
                    }
                } else {
                    initialNdx = seekNext(initialNdx);
                }
                if (initialNdx === -1) {
                    getMaskSet().p = seekNext(initialNdx);
                    initialNdx = 0;
                } else getMaskSet().p = initialNdx;
                inputmask.caretPos = {
                    begin: initialNdx
                };
                $.each(inputValue, function(ndx, charCode) {
                    if (charCode !== undefined) {
                        if (getMaskSet().validPositions[ndx] === undefined && inputValue[ndx] === getPlaceholder(ndx) && isMask(ndx, true) && isValid(ndx, inputValue[ndx], true, undefined, undefined, true) === false) {
                            getMaskSet().p++;
                        } else {
                            var keypress = new $.Event("_checkval");
                            keypress.which = charCode.charCodeAt(0);
                            charCodes += charCode;
                            var lvp = getLastValidPosition(undefined, true);
                            if (!isTemplateMatch(initialNdx, charCodes)) {
                                result = EventHandlers.keypressEvent.call(input, keypress, true, false, strict, inputmask.caretPos.begin);
                                if (result) {
                                    initialNdx = inputmask.caretPos.begin + 1;
                                    charCodes = "";
                                }
                            } else {
                                result = EventHandlers.keypressEvent.call(input, keypress, true, false, strict, lvp + 1);
                            }
                            if (result) {
                                writeBuffer(undefined, getBuffer(), result.forwardPosition, keypress, false);
                                inputmask.caretPos = {
                                    begin: result.forwardPosition,
                                    end: result.forwardPosition
                                };
                            }
                        }
                    }
                });
                if (writeOut) writeBuffer(input, getBuffer(), result ? result.forwardPosition : undefined, initiatingEvent || new $.Event("checkval"), initiatingEvent && initiatingEvent.type === "input");
            }
            function unmaskedvalue(input) {
                if (input) {
                    if (input.inputmask === undefined) {
                        return input.value;
                    }
                    if (input.inputmask && input.inputmask.refreshValue) {
                        EventHandlers.setValueEvent.call(input);
                    }
                }
                var umValue = [], vps = getMaskSet().validPositions;
                for (var pndx in vps) {
                    if (vps[pndx].match && vps[pndx].match.fn != null) {
                        umValue.push(vps[pndx].input);
                    }
                }
                var unmaskedValue = umValue.length === 0 ? "" : (isRTL ? umValue.reverse() : umValue).join("");
                if ($.isFunction(opts.onUnMask)) {
                    var bufferValue = (isRTL ? getBuffer().slice().reverse() : getBuffer()).join("");
                    unmaskedValue = opts.onUnMask.call(inputmask, bufferValue, unmaskedValue, opts);
                }
                return unmaskedValue;
            }
            function caret(input, begin, end, notranslate) {
                function translatePosition(pos) {
                    if (isRTL && typeof pos === "number" && (!opts.greedy || opts.placeholder !== "") && el) {
                        pos = el.inputmask._valueGet().length - pos;
                    }
                    return pos;
                }
                var range;
                if (begin !== undefined) {
                    if ($.isArray(begin)) {
                        end = isRTL ? begin[0] : begin[1];
                        begin = isRTL ? begin[1] : begin[0];
                    }
                    if (begin.begin !== undefined) {
                        end = isRTL ? begin.begin : begin.end;
                        begin = isRTL ? begin.end : begin.begin;
                    }
                    if (typeof begin === "number") {
                        begin = notranslate ? begin : translatePosition(begin);
                        end = notranslate ? end : translatePosition(end);
                        end = typeof end == "number" ? end : begin;
                        var scrollCalc = parseInt(((input.ownerDocument.defaultView || window).getComputedStyle ? (input.ownerDocument.defaultView || window).getComputedStyle(input, null) : input.currentStyle).fontSize) * end;
                        input.scrollLeft = scrollCalc > input.scrollWidth ? scrollCalc : 0;
                        input.inputmask.caretPos = {
                            begin: begin,
                            end: end
                        };
                        if (input === document.activeElement) {
                            if ("selectionStart" in input) {
                                input.selectionStart = begin;
                                input.selectionEnd = end;
                            } else if (window.getSelection) {
                                range = document.createRange();
                                if (input.firstChild === undefined || input.firstChild === null) {
                                    var textNode = document.createTextNode("");
                                    input.appendChild(textNode);
                                }
                                range.setStart(input.firstChild, begin < input.inputmask._valueGet().length ? begin : input.inputmask._valueGet().length);
                                range.setEnd(input.firstChild, end < input.inputmask._valueGet().length ? end : input.inputmask._valueGet().length);
                                range.collapse(true);
                                var sel = window.getSelection();
                                sel.removeAllRanges();
                                sel.addRange(range);
                            } else if (input.createTextRange) {
                                range = input.createTextRange();
                                range.collapse(true);
                                range.moveEnd("character", end);
                                range.moveStart("character", begin);
                                range.select();
                            }
                            renderColorMask(input, {
                                begin: begin,
                                end: end
                            });
                        }
                    }
                } else {
                    if ("selectionStart" in input) {
                        begin = input.selectionStart;
                        end = input.selectionEnd;
                    } else if (window.getSelection) {
                        range = window.getSelection().getRangeAt(0);
                        if (range.commonAncestorContainer.parentNode === input || range.commonAncestorContainer === input) {
                            begin = range.startOffset;
                            end = range.endOffset;
                        }
                    } else if (document.selection && document.selection.createRange) {
                        range = document.selection.createRange();
                        begin = 0 - range.duplicate().moveStart("character", -input.inputmask._valueGet().length);
                        end = begin + range.text.length;
                    }
                    return {
                        begin: notranslate ? begin : translatePosition(begin),
                        end: notranslate ? end : translatePosition(end)
                    };
                }
            }
            function determineLastRequiredPosition(returnDefinition) {
                var buffer = getMaskTemplate(true, getLastValidPosition(), true, true), bl = buffer.length, pos, lvp = getLastValidPosition(), positions = {}, lvTest = getMaskSet().validPositions[lvp], ndxIntlzr = lvTest !== undefined ? lvTest.locator.slice() : undefined, testPos;
                for (pos = lvp + 1; pos < buffer.length; pos++) {
                    testPos = getTestTemplate(pos, ndxIntlzr, pos - 1);
                    ndxIntlzr = testPos.locator.slice();
                    positions[pos] = $.extend(true, {}, testPos);
                }
                var lvTestAlt = lvTest && lvTest.alternation !== undefined ? lvTest.locator[lvTest.alternation] : undefined;
                for (pos = bl - 1; pos > lvp; pos--) {
                    testPos = positions[pos];
                    if ((testPos.match.optionality || testPos.match.optionalQuantifier && testPos.match.newBlockMarker || lvTestAlt && (lvTestAlt !== positions[pos].locator[lvTest.alternation] && testPos.match.fn != null || testPos.match.fn === null && testPos.locator[lvTest.alternation] && checkAlternationMatch(testPos.locator[lvTest.alternation].toString().split(","), lvTestAlt.toString().split(",")) && getTests(pos)[0].def !== "")) && buffer[pos] === getPlaceholder(pos, testPos.match)) {
                        bl--;
                    } else break;
                }
                return returnDefinition ? {
                    l: bl,
                    def: positions[bl] ? positions[bl].match : undefined
                } : bl;
            }
            function clearOptionalTail(buffer) {
                buffer.length = 0;
                var template = getMaskTemplate(true, 0, true, undefined, true), lmnt, validPos;
                while (lmnt = template.shift(), lmnt !== undefined) {
                    buffer.push(lmnt);
                }
                return buffer;
            }
            function isComplete(buffer) {
                if ($.isFunction(opts.isComplete)) return opts.isComplete(buffer, opts);
                if (opts.repeat === "*") return undefined;
                var complete = false, lrp = determineLastRequiredPosition(true), aml = seekPrevious(lrp.l);
                if (lrp.def === undefined || lrp.def.newBlockMarker || lrp.def.optionality || lrp.def.optionalQuantifier) {
                    complete = true;
                    for (var i = 0; i <= aml; i++) {
                        var test = getTestTemplate(i).match;
                        if (test.fn !== null && getMaskSet().validPositions[i] === undefined && test.optionality !== true && test.optionalQuantifier !== true || test.fn === null && buffer[i] !== getPlaceholder(i, test)) {
                            complete = false;
                            break;
                        }
                    }
                }
                return complete;
            }
            function handleRemove(input, k, pos, strict, fromIsValid) {
                if (opts.numericInput || isRTL) {
                    if (k === Inputmask.keyCode.BACKSPACE) {
                        k = Inputmask.keyCode.DELETE;
                    } else if (k === Inputmask.keyCode.DELETE) {
                        k = Inputmask.keyCode.BACKSPACE;
                    }
                    if (isRTL) {
                        var pend = pos.end;
                        pos.end = pos.begin;
                        pos.begin = pend;
                    }
                }
                if (k === Inputmask.keyCode.BACKSPACE && pos.end - pos.begin < 1) {
                    pos.begin = seekPrevious(pos.begin);
                    if (getMaskSet().validPositions[pos.begin] !== undefined && getMaskSet().validPositions[pos.begin].input === opts.groupSeparator) {
                        pos.begin--;
                    }
                } else if (k === Inputmask.keyCode.DELETE && pos.begin === pos.end) {
                    pos.end = isMask(pos.end, true) && getMaskSet().validPositions[pos.end] && getMaskSet().validPositions[pos.end].input !== opts.radixPoint ? pos.end + 1 : seekNext(pos.end) + 1;
                    if (getMaskSet().validPositions[pos.begin] !== undefined && getMaskSet().validPositions[pos.begin].input === opts.groupSeparator) {
                        pos.end++;
                    }
                }
                revalidateMask(pos);
                if (strict !== true && opts.keepStatic !== false || opts.regex !== null) {
                    var result = alternate(true);
                    if (result) {
                        var newPos = result.caret !== undefined ? result.caret : result.pos ? seekNext(result.pos.begin ? result.pos.begin : result.pos) : getLastValidPosition(-1, true);
                        if (k !== Inputmask.keyCode.DELETE || pos.begin > newPos) {
                            pos.begin == newPos;
                        }
                    }
                }
                var lvp = getLastValidPosition(pos.begin, true);
                if (lvp < pos.begin || pos.begin === -1) {
                    getMaskSet().p = seekNext(lvp);
                } else if (strict !== true) {
                    getMaskSet().p = pos.begin;
                    if (fromIsValid !== true) {
                        while (getMaskSet().p < lvp && getMaskSet().validPositions[getMaskSet().p] === undefined) {
                            getMaskSet().p++;
                        }
                    }
                }
            }
            function initializeColorMask(input) {
                var computedStyle = (input.ownerDocument.defaultView || window).getComputedStyle(input, null);
                function findCaretPos(clientx) {
                    var e = document.createElement("span"), caretPos;
                    for (var style in computedStyle) {
                        if (isNaN(style) && style.indexOf("font") !== -1) {
                            e.style[style] = computedStyle[style];
                        }
                    }
                    e.style.textTransform = computedStyle.textTransform;
                    e.style.letterSpacing = computedStyle.letterSpacing;
                    e.style.position = "absolute";
                    e.style.height = "auto";
                    e.style.width = "auto";
                    e.style.visibility = "hidden";
                    e.style.whiteSpace = "nowrap";
                    document.body.appendChild(e);
                    var inputText = input.inputmask._valueGet(), previousWidth = 0, itl;
                    for (caretPos = 0, itl = inputText.length; caretPos <= itl; caretPos++) {
                        e.innerHTML += inputText.charAt(caretPos) || "_";
                        if (e.offsetWidth >= clientx) {
                            var offset1 = clientx - previousWidth;
                            var offset2 = e.offsetWidth - clientx;
                            e.innerHTML = inputText.charAt(caretPos);
                            offset1 -= e.offsetWidth / 3;
                            caretPos = offset1 < offset2 ? caretPos - 1 : caretPos;
                            break;
                        }
                        previousWidth = e.offsetWidth;
                    }
                    document.body.removeChild(e);
                    return caretPos;
                }
                var template = document.createElement("div");
                template.style.width = computedStyle.width;
                template.style.textAlign = computedStyle.textAlign;
                colorMask = document.createElement("div");
                input.inputmask.colorMask = colorMask;
                colorMask.className = "im-colormask";
                input.parentNode.insertBefore(colorMask, input);
                input.parentNode.removeChild(input);
                colorMask.appendChild(input);
                colorMask.appendChild(template);
                input.style.left = template.offsetLeft + "px";
                $(colorMask).on("mouseleave", function(e) {
                    return EventHandlers.mouseleaveEvent.call(input, [ e ]);
                });
                $(colorMask).on("mouseenter", function(e) {
                    return EventHandlers.mouseenterEvent.call(input, [ e ]);
                });
                $(colorMask).on("click", function(e) {
                    caret(input, findCaretPos(e.clientX));
                    return EventHandlers.clickEvent.call(input, [ e ]);
                });
            }
            function renderColorMask(input, caretPos, clear) {
                var maskTemplate = [], isStatic = false, test, testPos, ndxIntlzr, pos = 0;
                function setEntry(entry) {
                    if (entry === undefined) entry = "";
                    if (!isStatic && (test.fn === null || testPos.input === undefined)) {
                        isStatic = true;
                        maskTemplate.push("<span class='im-static'>" + entry);
                    } else if (isStatic && (test.fn !== null && testPos.input !== undefined || test.def === "")) {
                        isStatic = false;
                        var mtl = maskTemplate.length;
                        maskTemplate[mtl - 1] = maskTemplate[mtl - 1] + "</span>";
                        maskTemplate.push(entry);
                    } else maskTemplate.push(entry);
                }
                function setCaret() {
                    if (document.activeElement === input) {
                        maskTemplate.splice(caretPos.begin, 0, caretPos.begin === caretPos.end || caretPos.end > getMaskSet().maskLength ? '<mark class="im-caret" style="border-right-width: 1px;border-right-style: solid;">' : '<mark class="im-caret-select">');
                        maskTemplate.splice(caretPos.end + 1, 0, "</mark>");
                    }
                }
                if (colorMask !== undefined) {
                    var buffer = getBuffer();
                    if (caretPos === undefined) {
                        caretPos = caret(input);
                    } else if (caretPos.begin === undefined) {
                        caretPos = {
                            begin: caretPos,
                            end: caretPos
                        };
                    }
                    if (clear !== true) {
                        var lvp = getLastValidPosition();
                        do {
                            if (getMaskSet().validPositions[pos]) {
                                testPos = getMaskSet().validPositions[pos];
                                test = testPos.match;
                                ndxIntlzr = testPos.locator.slice();
                                setEntry(buffer[pos]);
                            } else {
                                testPos = getTestTemplate(pos, ndxIntlzr, pos - 1);
                                test = testPos.match;
                                ndxIntlzr = testPos.locator.slice();
                                if (opts.jitMasking === false || pos < lvp || typeof opts.jitMasking === "number" && isFinite(opts.jitMasking) && opts.jitMasking > pos) {
                                    setEntry(getPlaceholder(pos, test));
                                } else isStatic = false;
                            }
                            pos++;
                        } while ((maxLength === undefined || pos < maxLength) && (test.fn !== null || test.def !== "") || lvp > pos || isStatic);
                        if (isStatic) setEntry();
                        setCaret();
                    }
                    var template = colorMask.getElementsByTagName("div")[0];
                    template.innerHTML = maskTemplate.join("");
                    input.inputmask.positionColorMask(input, template);
                }
            }
            function mask(elem) {
                function isElementTypeSupported(input, opts) {
                    function patchValueProperty(npt) {
                        var valueGet;
                        var valueSet;
                        function patchValhook(type) {
                            if ($.valHooks && ($.valHooks[type] === undefined || $.valHooks[type].inputmaskpatch !== true)) {
                                var valhookGet = $.valHooks[type] && $.valHooks[type].get ? $.valHooks[type].get : function(elem) {
                                    return elem.value;
                                };
                                var valhookSet = $.valHooks[type] && $.valHooks[type].set ? $.valHooks[type].set : function(elem, value) {
                                    elem.value = value;
                                    return elem;
                                };
                                $.valHooks[type] = {
                                    get: function get(elem) {
                                        if (elem.inputmask) {
                                            if (elem.inputmask.opts.autoUnmask) {
                                                return elem.inputmask.unmaskedvalue();
                                            } else {
                                                var result = valhookGet(elem);
                                                return getLastValidPosition(undefined, undefined, elem.inputmask.maskset.validPositions) !== -1 || opts.nullable !== true ? result : "";
                                            }
                                        } else return valhookGet(elem);
                                    },
                                    set: function set(elem, value) {
                                        var $elem = $(elem), result;
                                        result = valhookSet(elem, value);
                                        if (elem.inputmask) {
                                            $elem.trigger("setvalue", [ value ]);
                                        }
                                        return result;
                                    },
                                    inputmaskpatch: true
                                };
                            }
                        }
                        function getter() {
                            if (this.inputmask) {
                                return this.inputmask.opts.autoUnmask ? this.inputmask.unmaskedvalue() : getLastValidPosition() !== -1 || opts.nullable !== true ? document.activeElement === this && opts.clearMaskOnLostFocus ? (isRTL ? clearOptionalTail(getBuffer().slice()).reverse() : clearOptionalTail(getBuffer().slice())).join("") : valueGet.call(this) : "";
                            } else return valueGet.call(this);
                        }
                        function setter(value) {
                            valueSet.call(this, value);
                            if (this.inputmask) {
                                $(this).trigger("setvalue", [ value ]);
                            }
                        }
                        function installNativeValueSetFallback(npt) {
                            EventRuler.on(npt, "mouseenter", function(event) {
                                var $input = $(this), input = this, value = input.inputmask._valueGet();
                                if (value !== getBuffer().join("")) {
                                    $input.trigger("setvalue");
                                }
                            });
                        }
                        if (!npt.inputmask.__valueGet) {
                            if (opts.noValuePatching !== true) {
                                if (Object.getOwnPropertyDescriptor) {
                                    if (typeof Object.getPrototypeOf !== "function") {
                                        Object.getPrototypeOf = _typeof("test".__proto__) === "object" ? function(object) {
                                            return object.__proto__;
                                        } : function(object) {
                                            return object.constructor.prototype;
                                        };
                                    }
                                    var valueProperty = Object.getPrototypeOf ? Object.getOwnPropertyDescriptor(Object.getPrototypeOf(npt), "value") : undefined;
                                    if (valueProperty && valueProperty.get && valueProperty.set) {
                                        valueGet = valueProperty.get;
                                        valueSet = valueProperty.set;
                                        Object.defineProperty(npt, "value", {
                                            get: getter,
                                            set: setter,
                                            configurable: true
                                        });
                                    } else if (npt.tagName !== "INPUT") {
                                        valueGet = function valueGet() {
                                            return this.textContent;
                                        };
                                        valueSet = function valueSet(value) {
                                            this.textContent = value;
                                        };
                                        Object.defineProperty(npt, "value", {
                                            get: getter,
                                            set: setter,
                                            configurable: true
                                        });
                                    }
                                } else if (document.__lookupGetter__ && npt.__lookupGetter__("value")) {
                                    valueGet = npt.__lookupGetter__("value");
                                    valueSet = npt.__lookupSetter__("value");
                                    npt.__defineGetter__("value", getter);
                                    npt.__defineSetter__("value", setter);
                                }
                                npt.inputmask.__valueGet = valueGet;
                                npt.inputmask.__valueSet = valueSet;
                            }
                            npt.inputmask._valueGet = function(overruleRTL) {
                                return isRTL && overruleRTL !== true ? valueGet.call(this.el).split("").reverse().join("") : valueGet.call(this.el);
                            };
                            npt.inputmask._valueSet = function(value, overruleRTL) {
                                valueSet.call(this.el, value === null || value === undefined ? "" : overruleRTL !== true && isRTL ? value.split("").reverse().join("") : value);
                            };
                            if (valueGet === undefined) {
                                valueGet = function valueGet() {
                                    return this.value;
                                };
                                valueSet = function valueSet(value) {
                                    this.value = value;
                                };
                                patchValhook(npt.type);
                                installNativeValueSetFallback(npt);
                            }
                        }
                    }
                    var elementType = input.getAttribute("type");
                    var isSupported = input.tagName === "INPUT" && $.inArray(elementType, opts.supportsInputType) !== -1 || input.isContentEditable || input.tagName === "TEXTAREA";
                    if (!isSupported) {
                        if (input.tagName === "INPUT") {
                            var el = document.createElement("input");
                            el.setAttribute("type", elementType);
                            isSupported = el.type === "text";
                            el = null;
                        } else isSupported = "partial";
                    }
                    if (isSupported !== false) {
                        patchValueProperty(input);
                    } else input.inputmask = undefined;
                    return isSupported;
                }
                EventRuler.off(elem);
                var isSupported = isElementTypeSupported(elem, opts);
                if (isSupported !== false) {
                    el = elem;
                    $el = $(el);
                    originalPlaceholder = el.placeholder;
                    maxLength = el !== undefined ? el.maxLength : undefined;
                    if (maxLength === -1) maxLength = undefined;
                    if (opts.colorMask === true) {
                        initializeColorMask(el);
                    }
                    if (mobile) {
                        if ("inputmode" in el) {
                            el.inputmode = opts.inputmode;
                            el.setAttribute("inputmode", opts.inputmode);
                        }
                        if (opts.disablePredictiveText === true) {
                            if ("autocorrect" in el) {
                                el.autocorrect = false;
                            } else {
                                if (opts.colorMask !== true) {
                                    initializeColorMask(el);
                                }
                                el.type = "password";
                            }
                        }
                    }
                    if (isSupported === true) {
                        el.setAttribute("im-insert", opts.insertMode);
                        EventRuler.on(el, "submit", EventHandlers.submitEvent);
                        EventRuler.on(el, "reset", EventHandlers.resetEvent);
                        EventRuler.on(el, "blur", EventHandlers.blurEvent);
                        EventRuler.on(el, "focus", EventHandlers.focusEvent);
                        if (opts.colorMask !== true) {
                            EventRuler.on(el, "click", EventHandlers.clickEvent);
                            EventRuler.on(el, "mouseleave", EventHandlers.mouseleaveEvent);
                            EventRuler.on(el, "mouseenter", EventHandlers.mouseenterEvent);
                        }
                        EventRuler.on(el, "paste", EventHandlers.pasteEvent);
                        EventRuler.on(el, "cut", EventHandlers.cutEvent);
                        EventRuler.on(el, "complete", opts.oncomplete);
                        EventRuler.on(el, "incomplete", opts.onincomplete);
                        EventRuler.on(el, "cleared", opts.oncleared);
                        if (!mobile && opts.inputEventOnly !== true) {
                            EventRuler.on(el, "keydown", EventHandlers.keydownEvent);
                            EventRuler.on(el, "keypress", EventHandlers.keypressEvent);
                        } else {
                            el.removeAttribute("maxLength");
                        }
                        EventRuler.on(el, "input", EventHandlers.inputFallBackEvent);
                        EventRuler.on(el, "beforeinput", EventHandlers.beforeInputEvent);
                    }
                    EventRuler.on(el, "setvalue", EventHandlers.setValueEvent);
                    undoValue = getBufferTemplate().join("");
                    if (el.inputmask._valueGet(true) !== "" || opts.clearMaskOnLostFocus === false || document.activeElement === el) {
                        var initialValue = $.isFunction(opts.onBeforeMask) ? opts.onBeforeMask.call(inputmask, el.inputmask._valueGet(true), opts) || el.inputmask._valueGet(true) : el.inputmask._valueGet(true);
                        if (initialValue !== "") checkVal(el, true, false, initialValue.split(""));
                        var buffer = getBuffer().slice();
                        undoValue = buffer.join("");
                        if (isComplete(buffer) === false) {
                            if (opts.clearIncomplete) {
                                resetMaskSet();
                            }
                        }
                        if (opts.clearMaskOnLostFocus && document.activeElement !== el) {
                            if (getLastValidPosition() === -1) {
                                buffer = [];
                            } else {
                                clearOptionalTail(buffer);
                            }
                        }
                        if (opts.clearMaskOnLostFocus === false || opts.showMaskOnFocus && document.activeElement === el || el.inputmask._valueGet(true) !== "") writeBuffer(el, buffer);
                        if (document.activeElement === el) {
                            caret(el, seekNext(getLastValidPosition()));
                        }
                    }
                }
            }
            var valueBuffer;
            if (actionObj !== undefined) {
                switch (actionObj.action) {
                  case "isComplete":
                    el = actionObj.el;
                    return isComplete(getBuffer());

                  case "unmaskedvalue":
                    if (el === undefined || actionObj.value !== undefined) {
                        valueBuffer = actionObj.value;
                        valueBuffer = ($.isFunction(opts.onBeforeMask) ? opts.onBeforeMask.call(inputmask, valueBuffer, opts) || valueBuffer : valueBuffer).split("");
                        checkVal.call(this, undefined, false, false, valueBuffer);
                        if ($.isFunction(opts.onBeforeWrite)) opts.onBeforeWrite.call(inputmask, undefined, getBuffer(), 0, opts);
                    }
                    return unmaskedvalue(el);

                  case "mask":
                    mask(el);
                    break;

                  case "format":
                    valueBuffer = ($.isFunction(opts.onBeforeMask) ? opts.onBeforeMask.call(inputmask, actionObj.value, opts) || actionObj.value : actionObj.value).split("");
                    checkVal.call(this, undefined, true, false, valueBuffer);
                    if (actionObj.metadata) {
                        return {
                            value: isRTL ? getBuffer().slice().reverse().join("") : getBuffer().join(""),
                            metadata: maskScope.call(this, {
                                action: "getmetadata"
                            }, maskset, opts)
                        };
                    }
                    return isRTL ? getBuffer().slice().reverse().join("") : getBuffer().join("");

                  case "isValid":
                    if (actionObj.value) {
                        valueBuffer = actionObj.value.split("");
                        checkVal.call(this, undefined, true, true, valueBuffer);
                    } else {
                        actionObj.value = getBuffer().join("");
                    }
                    var buffer = getBuffer();
                    var rl = determineLastRequiredPosition(), lmib = buffer.length - 1;
                    for (;lmib > rl; lmib--) {
                        if (isMask(lmib)) break;
                    }
                    buffer.splice(rl, lmib + 1 - rl);
                    return isComplete(buffer) && actionObj.value === getBuffer().join("");

                  case "getemptymask":
                    return getBufferTemplate().join("");

                  case "remove":
                    if (el && el.inputmask) {
                        $.data(el, "_inputmask_opts", null);
                        $el = $(el);
                        el.inputmask._valueSet(opts.autoUnmask ? unmaskedvalue(el) : el.inputmask._valueGet(true));
                        EventRuler.off(el);
                        if (el.inputmask.colorMask) {
                            colorMask = el.inputmask.colorMask;
                            colorMask.removeChild(el);
                            colorMask.parentNode.insertBefore(el, colorMask);
                            colorMask.parentNode.removeChild(colorMask);
                        }
                        var valueProperty;
                        if (Object.getOwnPropertyDescriptor && Object.getPrototypeOf) {
                            valueProperty = Object.getOwnPropertyDescriptor(Object.getPrototypeOf(el), "value");
                            if (valueProperty) {
                                if (el.inputmask.__valueGet) {
                                    Object.defineProperty(el, "value", {
                                        get: el.inputmask.__valueGet,
                                        set: el.inputmask.__valueSet,
                                        configurable: true
                                    });
                                }
                            }
                        } else if (document.__lookupGetter__ && el.__lookupGetter__("value")) {
                            if (el.inputmask.__valueGet) {
                                el.__defineGetter__("value", el.inputmask.__valueGet);
                                el.__defineSetter__("value", el.inputmask.__valueSet);
                            }
                        }
                        el.inputmask = undefined;
                    }
                    return el;
                    break;

                  case "getmetadata":
                    if ($.isArray(maskset.metadata)) {
                        var maskTarget = getMaskTemplate(true, 0, false).join("");
                        $.each(maskset.metadata, function(ndx, mtdt) {
                            if (mtdt.mask === maskTarget) {
                                maskTarget = mtdt;
                                return false;
                            }
                        });
                        return maskTarget;
                    }
                    return maskset.metadata;
                }
            }
        }
        return Inputmask;
    });
}, function(module, exports, __webpack_require__) {
    "use strict";
    var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;
    var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function(obj) {
        return typeof obj;
    } : function(obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
    (function(factory) {
        if (true) {
            !(__WEBPACK_AMD_DEFINE_ARRAY__ = [ __webpack_require__(4) ], __WEBPACK_AMD_DEFINE_FACTORY__ = factory, 
            __WEBPACK_AMD_DEFINE_RESULT__ = typeof __WEBPACK_AMD_DEFINE_FACTORY__ === "function" ? __WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__) : __WEBPACK_AMD_DEFINE_FACTORY__, 
            __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
        } else {}
    })(function(window) {
        var document = window.document;
        function indexOf(list, elem) {
            var i = 0, len = list.length;
            for (;i < len; i++) {
                if (list[i] === elem) {
                    return i;
                }
            }
            return -1;
        }
        function isWindow(obj) {
            return obj != null && obj === obj.window;
        }
        function isArraylike(obj) {
            var length = "length" in obj && obj.length, ltype = typeof obj === "undefined" ? "undefined" : _typeof(obj);
            if (ltype === "function" || isWindow(obj)) {
                return false;
            }
            if (obj.nodeType === 1 && length) {
                return true;
            }
            return ltype === "array" || length === 0 || typeof length === "number" && length > 0 && length - 1 in obj;
        }
        function isValidElement(elem) {
            return elem instanceof Element;
        }
        function DependencyLib(elem) {
            if (elem instanceof DependencyLib) {
                return elem;
            }
            if (!(this instanceof DependencyLib)) {
                return new DependencyLib(elem);
            }
            if (elem !== undefined && elem !== null && elem !== window) {
                this[0] = elem.nodeName ? elem : elem[0] !== undefined && elem[0].nodeName ? elem[0] : document.querySelector(elem);
                if (this[0] !== undefined && this[0] !== null) {
                    this[0].eventRegistry = this[0].eventRegistry || {};
                }
            }
        }
        function getWindow(elem) {
            return isWindow(elem) ? elem : elem.nodeType === 9 ? elem.defaultView || elem.parentWindow : false;
        }
        DependencyLib.prototype = {
            on: function on(events, handler) {
                if (isValidElement(this[0])) {
                    var addEvent = function addEvent(ev, namespace) {
                        if (elem.addEventListener) {
                            elem.addEventListener(ev, handler, false);
                        } else if (elem.attachEvent) {
                            elem.attachEvent("on" + ev, handler);
                        }
                        eventRegistry[ev] = eventRegistry[ev] || {};
                        eventRegistry[ev][namespace] = eventRegistry[ev][namespace] || [];
                        eventRegistry[ev][namespace].push(handler);
                    };
                    var eventRegistry = this[0].eventRegistry, elem = this[0];
                    var _events = events.split(" ");
                    for (var endx = 0; endx < _events.length; endx++) {
                        var nsEvent = _events[endx].split("."), ev = nsEvent[0], namespace = nsEvent[1] || "global";
                        addEvent(ev, namespace);
                    }
                }
                return this;
            },
            off: function off(events, handler) {
                if (isValidElement(this[0])) {
                    var removeEvent = function removeEvent(ev, namespace, handler) {
                        if (ev in eventRegistry === true) {
                            if (elem.removeEventListener) {
                                elem.removeEventListener(ev, handler, false);
                            } else if (elem.detachEvent) {
                                elem.detachEvent("on" + ev, handler);
                            }
                            if (namespace === "global") {
                                for (var nmsp in eventRegistry[ev]) {
                                    eventRegistry[ev][nmsp].splice(eventRegistry[ev][nmsp].indexOf(handler), 1);
                                }
                            } else {
                                eventRegistry[ev][namespace].splice(eventRegistry[ev][namespace].indexOf(handler), 1);
                            }
                        }
                    };
                    var resolveNamespace = function resolveNamespace(ev, namespace) {
                        var evts = [], hndx, hndL;
                        if (ev.length > 0) {
                            if (handler === undefined) {
                                for (hndx = 0, hndL = eventRegistry[ev][namespace].length; hndx < hndL; hndx++) {
                                    evts.push({
                                        ev: ev,
                                        namespace: namespace && namespace.length > 0 ? namespace : "global",
                                        handler: eventRegistry[ev][namespace][hndx]
                                    });
                                }
                            } else {
                                evts.push({
                                    ev: ev,
                                    namespace: namespace && namespace.length > 0 ? namespace : "global",
                                    handler: handler
                                });
                            }
                        } else if (namespace.length > 0) {
                            for (var evNdx in eventRegistry) {
                                for (var nmsp in eventRegistry[evNdx]) {
                                    if (nmsp === namespace) {
                                        if (handler === undefined) {
                                            for (hndx = 0, hndL = eventRegistry[evNdx][nmsp].length; hndx < hndL; hndx++) {
                                                evts.push({
                                                    ev: evNdx,
                                                    namespace: nmsp,
                                                    handler: eventRegistry[evNdx][nmsp][hndx]
                                                });
                                            }
                                        } else {
                                            evts.push({
                                                ev: evNdx,
                                                namespace: nmsp,
                                                handler: handler
                                            });
                                        }
                                    }
                                }
                            }
                        }
                        return evts;
                    };
                    var eventRegistry = this[0].eventRegistry, elem = this[0];
                    var _events = events.split(" ");
                    for (var endx = 0; endx < _events.length; endx++) {
                        var nsEvent = _events[endx].split("."), offEvents = resolveNamespace(nsEvent[0], nsEvent[1]);
                        for (var i = 0, offEventsL = offEvents.length; i < offEventsL; i++) {
                            removeEvent(offEvents[i].ev, offEvents[i].namespace, offEvents[i].handler);
                        }
                    }
                }
                return this;
            },
            trigger: function trigger(events) {
                if (isValidElement(this[0])) {
                    var eventRegistry = this[0].eventRegistry, elem = this[0];
                    var _events = typeof events === "string" ? events.split(" ") : [ events.type ];
                    for (var endx = 0; endx < _events.length; endx++) {
                        var nsEvent = _events[endx].split("."), ev = nsEvent[0], namespace = nsEvent[1] || "global";
                        if (document !== undefined && namespace === "global") {
                            var evnt, i, params = {
                                bubbles: true,
                                cancelable: true,
                                detail: arguments[1]
                            };
                            if (document.createEvent) {
                                try {
                                    evnt = new CustomEvent(ev, params);
                                } catch (e) {
                                    evnt = document.createEvent("CustomEvent");
                                    evnt.initCustomEvent(ev, params.bubbles, params.cancelable, params.detail);
                                }
                                if (events.type) DependencyLib.extend(evnt, events);
                                elem.dispatchEvent(evnt);
                            } else {
                                evnt = document.createEventObject();
                                evnt.eventType = ev;
                                evnt.detail = arguments[1];
                                if (events.type) DependencyLib.extend(evnt, events);
                                elem.fireEvent("on" + evnt.eventType, evnt);
                            }
                        } else if (eventRegistry[ev] !== undefined) {
                            arguments[0] = arguments[0].type ? arguments[0] : DependencyLib.Event(arguments[0]);
                            if (namespace === "global") {
                                for (var nmsp in eventRegistry[ev]) {
                                    for (i = 0; i < eventRegistry[ev][nmsp].length; i++) {
                                        eventRegistry[ev][nmsp][i].apply(elem, arguments);
                                    }
                                }
                            } else {
                                for (i = 0; i < eventRegistry[ev][namespace].length; i++) {
                                    eventRegistry[ev][namespace][i].apply(elem, arguments);
                                }
                            }
                        }
                    }
                }
                return this;
            }
        };
        DependencyLib.isFunction = function(obj) {
            return typeof obj === "function";
        };
        DependencyLib.noop = function() {};
        DependencyLib.isArray = Array.isArray;
        DependencyLib.inArray = function(elem, arr, i) {
            return arr == null ? -1 : indexOf(arr, elem, i);
        };
        DependencyLib.valHooks = undefined;
        DependencyLib.isPlainObject = function(obj) {
            if ((typeof obj === "undefined" ? "undefined" : _typeof(obj)) !== "object" || obj.nodeType || isWindow(obj)) {
                return false;
            }
            if (obj.constructor && !Object.hasOwnProperty.call(obj.constructor.prototype, "isPrototypeOf")) {
                return false;
            }
            return true;
        };
        DependencyLib.extend = function() {
            var options, name, src, copy, copyIsArray, clone, target = arguments[0] || {}, i = 1, length = arguments.length, deep = false;
            if (typeof target === "boolean") {
                deep = target;
                target = arguments[i] || {};
                i++;
            }
            if ((typeof target === "undefined" ? "undefined" : _typeof(target)) !== "object" && !DependencyLib.isFunction(target)) {
                target = {};
            }
            if (i === length) {
                target = this;
                i--;
            }
            for (;i < length; i++) {
                if ((options = arguments[i]) != null) {
                    for (name in options) {
                        src = target[name];
                        copy = options[name];
                        if (target === copy) {
                            continue;
                        }
                        if (deep && copy && (DependencyLib.isPlainObject(copy) || (copyIsArray = DependencyLib.isArray(copy)))) {
                            if (copyIsArray) {
                                copyIsArray = false;
                                clone = src && DependencyLib.isArray(src) ? src : [];
                            } else {
                                clone = src && DependencyLib.isPlainObject(src) ? src : {};
                            }
                            target[name] = DependencyLib.extend(deep, clone, copy);
                        } else if (copy !== undefined) {
                            target[name] = copy;
                        }
                    }
                }
            }
            return target;
        };
        DependencyLib.each = function(obj, callback) {
            var value, i = 0;
            if (isArraylike(obj)) {
                for (var length = obj.length; i < length; i++) {
                    value = callback.call(obj[i], i, obj[i]);
                    if (value === false) {
                        break;
                    }
                }
            } else {
                for (i in obj) {
                    value = callback.call(obj[i], i, obj[i]);
                    if (value === false) {
                        break;
                    }
                }
            }
            return obj;
        };
        DependencyLib.data = function(owner, key, value) {
            if (value === undefined) {
                return owner.__data ? owner.__data[key] : null;
            } else {
                owner.__data = owner.__data || {};
                owner.__data[key] = value;
            }
        };
        if (typeof window.CustomEvent === "function") {
            DependencyLib.Event = window.CustomEvent;
        } else {
            DependencyLib.Event = function(event, params) {
                params = params || {
                    bubbles: false,
                    cancelable: false,
                    detail: undefined
                };
                var evt = document.createEvent("CustomEvent");
                evt.initCustomEvent(event, params.bubbles, params.cancelable, params.detail);
                return evt;
            };
            DependencyLib.Event.prototype = window.Event.prototype;
        }
        return DependencyLib;
    });
}, function(module, exports, __webpack_require__) {
    "use strict";
    var __WEBPACK_AMD_DEFINE_RESULT__;
    var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function(obj) {
        return typeof obj;
    } : function(obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
    if (true) !(__WEBPACK_AMD_DEFINE_RESULT__ = function() {
        return typeof window !== "undefined" ? window : new (eval("require('jsdom').JSDOM"))("").window;
    }.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)); else {}
}, function(module, exports, __webpack_require__) {
    "use strict";
    var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;
    var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function(obj) {
        return typeof obj;
    } : function(obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
    (function(factory) {
        if (true) {
            !(__WEBPACK_AMD_DEFINE_ARRAY__ = [ __webpack_require__(2) ], __WEBPACK_AMD_DEFINE_FACTORY__ = factory, 
            __WEBPACK_AMD_DEFINE_RESULT__ = typeof __WEBPACK_AMD_DEFINE_FACTORY__ === "function" ? __WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__) : __WEBPACK_AMD_DEFINE_FACTORY__, 
            __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
        } else {}
    })(function(Inputmask) {
        var $ = Inputmask.dependencyLib;
        var formatCode = {
            d: [ "[1-9]|[12][0-9]|3[01]", Date.prototype.setDate, "day", Date.prototype.getDate ],
            dd: [ "0[1-9]|[12][0-9]|3[01]", Date.prototype.setDate, "day", function() {
                return pad(Date.prototype.getDate.call(this), 2);
            } ],
            ddd: [ "" ],
            dddd: [ "" ],
            m: [ "[1-9]|1[012]", Date.prototype.setMonth, "month", function() {
                return Date.prototype.getMonth.call(this) + 1;
            } ],
            mm: [ "0[1-9]|1[012]", Date.prototype.setMonth, "month", function() {
                return pad(Date.prototype.getMonth.call(this) + 1, 2);
            } ],
            mmm: [ "" ],
            mmmm: [ "" ],
            yy: [ "[0-9]{2}", Date.prototype.setFullYear, "year", function() {
                return pad(Date.prototype.getFullYear.call(this), 2);
            } ],
            yyyy: [ "[0-9]{4}", Date.prototype.setFullYear, "year", function() {
                return pad(Date.prototype.getFullYear.call(this), 4);
            } ],
            h: [ "[1-9]|1[0-2]", Date.prototype.setHours, "hours", Date.prototype.getHours ],
            hh: [ "0[1-9]|1[0-2]", Date.prototype.setHours, "hours", function() {
                return pad(Date.prototype.getHours.call(this), 2);
            } ],
            hhh: [ "[0-9]+", Date.prototype.setHours, "hours", Date.prototype.getHours ],
            H: [ "1?[0-9]|2[0-3]", Date.prototype.setHours, "hours", Date.prototype.getHours ],
            HH: [ "0[0-9]|1[0-9]|2[0-3]", Date.prototype.setHours, "hours", function() {
                return pad(Date.prototype.getHours.call(this), 2);
            } ],
            HHH: [ "[0-9]+", Date.prototype.setHours, "hours", Date.prototype.getHours ],
            M: [ "[1-5]?[0-9]", Date.prototype.setMinutes, "minutes", Date.prototype.getMinutes ],
            MM: [ "0[0-9]|1[0-9]|2[0-9]|3[0-9]|4[0-9]|5[0-9]", Date.prototype.setMinutes, "minutes", function() {
                return pad(Date.prototype.getMinutes.call(this), 2);
            } ],
            ss: [ "[0-5][0-9]", Date.prototype.setSeconds, "seconds", function() {
                return pad(Date.prototype.getSeconds.call(this), 2);
            } ],
            l: [ "[0-9]{3}", Date.prototype.setMilliseconds, "milliseconds", function() {
                return pad(Date.prototype.getMilliseconds.call(this), 3);
            } ],
            L: [ "[0-9]{2}", Date.prototype.setMilliseconds, "milliseconds", function() {
                return pad(Date.prototype.getMilliseconds.call(this), 2);
            } ],
            t: [ "[ap]" ],
            tt: [ "[ap]m" ],
            T: [ "[AP]" ],
            TT: [ "[AP]M" ],
            Z: [ "" ],
            o: [ "" ],
            S: [ "" ]
        }, formatAlias = {
            isoDate: "yyyy-mm-dd",
            isoTime: "HH:MM:ss",
            isoDateTime: "yyyy-mm-dd'T'HH:MM:ss",
            isoUtcDateTime: "UTC:yyyy-mm-dd'T'HH:MM:ss'Z'"
        };
        function getTokenizer(opts) {
            if (!opts.tokenizer) {
                var tokens = [];
                for (var ndx in formatCode) {
                    if (tokens.indexOf(ndx[0]) === -1) tokens.push(ndx[0]);
                }
                opts.tokenizer = "(" + tokens.join("+|") + ")+?|.";
                opts.tokenizer = new RegExp(opts.tokenizer, "g");
            }
            return opts.tokenizer;
        }
        function isValidDate(dateParts, currentResult) {
            return !isFinite(dateParts.rawday) || dateParts.day == "29" && !isFinite(dateParts.rawyear) || new Date(dateParts.date.getFullYear(), isFinite(dateParts.rawmonth) ? dateParts.month : dateParts.date.getMonth() + 1, 0).getDate() >= dateParts.day ? currentResult : false;
        }
        function isDateInRange(dateParts, opts) {
            var result = true;
            if (opts.min) {
                if (dateParts["rawyear"]) {
                    var rawYear = dateParts["rawyear"].replace(/[^0-9]/g, ""), minYear = opts.min.year.substr(0, rawYear.length);
                    result = minYear <= rawYear;
                }
                if (dateParts["year"] === dateParts["rawyear"]) {
                    if (opts.min.date.getTime() === opts.min.date.getTime()) {
                        result = opts.min.date.getTime() <= dateParts.date.getTime();
                    }
                }
            }
            if (result && opts.max && opts.max.date.getTime() === opts.max.date.getTime()) {
                result = opts.max.date.getTime() >= dateParts.date.getTime();
            }
            return result;
        }
        function parse(format, dateObjValue, opts, raw) {
            var mask = "", match;
            while (match = getTokenizer(opts).exec(format)) {
                if (dateObjValue === undefined) {
                    if (formatCode[match[0]]) {
                        mask += "(" + formatCode[match[0]][0] + ")";
                    } else {
                        switch (match[0]) {
                          case "[":
                            mask += "(";
                            break;

                          case "]":
                            mask += ")?";
                            break;

                          default:
                            mask += Inputmask.escapeRegex(match[0]);
                        }
                    }
                } else {
                    if (formatCode[match[0]]) {
                        if (raw !== true && formatCode[match[0]][3]) {
                            var getFn = formatCode[match[0]][3];
                            mask += getFn.call(dateObjValue.date);
                        } else if (formatCode[match[0]][2]) mask += dateObjValue["raw" + formatCode[match[0]][2]]; else mask += match[0];
                    } else mask += match[0];
                }
            }
            return mask;
        }
        function pad(val, len) {
            val = String(val);
            len = len || 2;
            while (val.length < len) {
                val = "0" + val;
            }
            return val;
        }
        function analyseMask(maskString, format, opts) {
            var dateObj = {
                date: new Date(1, 0, 1)
            }, targetProp, mask = maskString, match, dateOperation, targetValidator;
            function extendProperty(value) {
                var correctedValue = value.replace(/[^0-9]/g, "0");
                if (correctedValue != value) {
                    var enteredPart = value.replace(/[^0-9]/g, ""), min = (opts.min && opts.min[targetProp] || value).toString(), max = (opts.max && opts.max[targetProp] || value).toString();
                    correctedValue = enteredPart + (enteredPart < min.slice(0, enteredPart.length) ? min.slice(enteredPart.length) : enteredPart > max.slice(0, enteredPart.length) ? max.slice(enteredPart.length) : correctedValue.toString().slice(enteredPart.length));
                }
                return correctedValue;
            }
            function setValue(dateObj, value, opts) {
                dateObj[targetProp] = extendProperty(value);
                dateObj["raw" + targetProp] = value;
                if (dateOperation !== undefined) dateOperation.call(dateObj.date, targetProp == "month" ? parseInt(dateObj[targetProp]) - 1 : dateObj[targetProp]);
            }
            if (typeof mask === "string") {
                while (match = getTokenizer(opts).exec(format)) {
                    var value = mask.slice(0, match[0].length);
                    if (formatCode.hasOwnProperty(match[0])) {
                        targetValidator = formatCode[match[0]][0];
                        targetProp = formatCode[match[0]][2];
                        dateOperation = formatCode[match[0]][1];
                        setValue(dateObj, value, opts);
                    }
                    mask = mask.slice(value.length);
                }
                return dateObj;
            } else if (mask && (typeof mask === "undefined" ? "undefined" : _typeof(mask)) === "object" && mask.hasOwnProperty("date")) {
                return mask;
            }
            return undefined;
        }
        Inputmask.extendAliases({
            datetime: {
                mask: function mask(opts) {
                    formatCode.S = opts.i18n.ordinalSuffix.join("|");
                    opts.inputFormat = formatAlias[opts.inputFormat] || opts.inputFormat;
                    opts.displayFormat = formatAlias[opts.displayFormat] || opts.displayFormat || opts.inputFormat;
                    opts.outputFormat = formatAlias[opts.outputFormat] || opts.outputFormat || opts.inputFormat;
                    opts.placeholder = opts.placeholder !== "" ? opts.placeholder : opts.inputFormat.replace(/[\[\]]/, "");
                    opts.regex = parse(opts.inputFormat, undefined, opts);
                    return null;
                },
                placeholder: "",
                inputFormat: "isoDateTime",
                displayFormat: undefined,
                outputFormat: undefined,
                min: null,
                max: null,
                i18n: {
                    dayNames: [ "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday" ],
                    monthNames: [ "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec", "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ],
                    ordinalSuffix: [ "st", "nd", "rd", "th" ]
                },
                postValidation: function postValidation(buffer, pos, currentResult, opts) {
                    opts.min = analyseMask(opts.min, opts.inputFormat, opts);
                    opts.max = analyseMask(opts.max, opts.inputFormat, opts);
                    var result = currentResult, dateParts = analyseMask(buffer.join(""), opts.inputFormat, opts);
                    if (result && dateParts.date.getTime() === dateParts.date.getTime()) {
                        result = isValidDate(dateParts, result);
                        result = result && isDateInRange(dateParts, opts);
                    }
                    if (pos && result && currentResult.pos !== pos) {
                        return {
                            buffer: parse(opts.inputFormat, dateParts, opts),
                            refreshFromBuffer: {
                                start: pos,
                                end: currentResult.pos
                            }
                        };
                    }
                    return result;
                },
                onKeyDown: function onKeyDown(e, buffer, caretPos, opts) {
                    var input = this;
                    if (e.ctrlKey && e.keyCode === Inputmask.keyCode.RIGHT) {
                        var today = new Date(), match, date = "";
                        while (match = getTokenizer(opts).exec(opts.inputFormat)) {
                            if (match[0].charAt(0) === "d") {
                                date += pad(today.getDate(), match[0].length);
                            } else if (match[0].charAt(0) === "m") {
                                date += pad(today.getMonth() + 1, match[0].length);
                            } else if (match[0] === "yyyy") {
                                date += today.getFullYear().toString();
                            } else if (match[0].charAt(0) === "y") {
                                date += pad(today.getYear(), match[0].length);
                            }
                        }
                        input.inputmask._valueSet(date);
                        $(input).trigger("setvalue");
                    }
                },
                onUnMask: function onUnMask(maskedValue, unmaskedValue, opts) {
                    return parse(opts.outputFormat, analyseMask(maskedValue, opts.inputFormat, opts), opts, true);
                },
                casing: function casing(elem, test, pos, validPositions) {
                    if (test.nativeDef.indexOf("[ap]") == 0) return elem.toLowerCase();
                    if (test.nativeDef.indexOf("[AP]") == 0) return elem.toUpperCase();
                    return elem;
                },
                insertMode: false,
                shiftPositions: false
            }
        });
        return Inputmask;
    });
}, function(module, exports, __webpack_require__) {
    "use strict";
    var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;
    var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function(obj) {
        return typeof obj;
    } : function(obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
    (function(factory) {
        if (true) {
            !(__WEBPACK_AMD_DEFINE_ARRAY__ = [ __webpack_require__(2) ], __WEBPACK_AMD_DEFINE_FACTORY__ = factory, 
            __WEBPACK_AMD_DEFINE_RESULT__ = typeof __WEBPACK_AMD_DEFINE_FACTORY__ === "function" ? __WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__) : __WEBPACK_AMD_DEFINE_FACTORY__, 
            __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
        } else {}
    })(function(Inputmask) {
        var $ = Inputmask.dependencyLib;
        function autoEscape(txt, opts) {
            var escapedTxt = "";
            for (var i = 0; i < txt.length; i++) {
                if (Inputmask.prototype.definitions[txt.charAt(i)] || opts.definitions[txt.charAt(i)] || opts.optionalmarker.start === txt.charAt(i) || opts.optionalmarker.end === txt.charAt(i) || opts.quantifiermarker.start === txt.charAt(i) || opts.quantifiermarker.end === txt.charAt(i) || opts.groupmarker.start === txt.charAt(i) || opts.groupmarker.end === txt.charAt(i) || opts.alternatormarker === txt.charAt(i)) {
                    escapedTxt += "\\" + txt.charAt(i);
                } else escapedTxt += txt.charAt(i);
            }
            return escapedTxt;
        }
        function alignDigits(buffer, digits, opts) {
            if (digits > 0) {
                var radixPosition = $.inArray(opts.radixPoint, buffer);
                if (radixPosition === -1) {
                    buffer.push(opts.radixPoint);
                    radixPosition = buffer.length - 1;
                }
                for (var i = 1; i <= digits; i++) {
                    buffer[radixPosition + i] = buffer[radixPosition + i] || "0";
                }
            }
            return buffer;
        }
        Inputmask.extendAliases({
            numeric: {
                mask: function mask(opts) {
                    if (opts.repeat !== 0 && isNaN(opts.integerDigits)) {
                        opts.integerDigits = opts.repeat;
                    }
                    opts.repeat = 0;
                    if (opts.groupSeparator === opts.radixPoint && opts.digits && opts.digits !== "0") {
                        if (opts.radixPoint === ".") {
                            opts.groupSeparator = ",";
                        } else if (opts.radixPoint === ",") {
                            opts.groupSeparator = ".";
                        } else opts.groupSeparator = "";
                    }
                    if (opts.groupSeparator === " ") {
                        opts.skipOptionalPartCharacter = undefined;
                    }
                    opts.autoGroup = opts.autoGroup && opts.groupSeparator !== "";
                    if (opts.autoGroup) {
                        if (typeof opts.groupSize == "string" && isFinite(opts.groupSize)) opts.groupSize = parseInt(opts.groupSize);
                        if (isFinite(opts.integerDigits)) {
                            var seps = Math.floor(opts.integerDigits / opts.groupSize);
                            var mod = opts.integerDigits % opts.groupSize;
                            opts.integerDigits = parseInt(opts.integerDigits) + (mod === 0 ? seps - 1 : seps);
                            if (opts.integerDigits < 1) {
                                opts.integerDigits = "*";
                            }
                        }
                    }
                    if (opts.placeholder.length > 1) {
                        opts.placeholder = opts.placeholder.charAt(0);
                    }
                    if (opts.positionCaretOnClick === "radixFocus" && opts.placeholder === "" && opts.integerOptional === false) {
                        opts.positionCaretOnClick = "lvp";
                    }
                    opts.definitions[";"] = opts.definitions["~"];
                    opts.definitions[";"].definitionSymbol = "~";
                    if (opts.numericInput === true) {
                        opts.positionCaretOnClick = opts.positionCaretOnClick === "radixFocus" ? "lvp" : opts.positionCaretOnClick;
                        opts.digitsOptional = false;
                        if (isNaN(opts.digits)) opts.digits = 2;
                        opts.decimalProtect = false;
                    }
                    var mask = "[+]";
                    mask += autoEscape(opts.prefix, opts);
                    if (opts.integerOptional === true) {
                        mask += "~{1," + opts.integerDigits + "}";
                    } else mask += "~{" + opts.integerDigits + "}";
                    if (opts.digits !== undefined) {
                        var radixDef = opts.decimalProtect ? ":" : opts.radixPoint;
                        var dq = opts.digits.toString().split(",");
                        if (isFinite(dq[0]) && dq[1] && isFinite(dq[1])) {
                            mask += radixDef + ";{" + opts.digits + "}";
                        } else if (isNaN(opts.digits) || parseInt(opts.digits) > 0) {
                            if (opts.digitsOptional) {
                                mask += "[" + radixDef + ";{1," + opts.digits + "}]";
                            } else mask += radixDef + ";{" + opts.digits + "}";
                        }
                    }
                    mask += autoEscape(opts.suffix, opts);
                    mask += "[-]";
                    opts.greedy = false;
                    return mask;
                },
                placeholder: "",
                greedy: false,
                digits: "*",
                digitsOptional: true,
                enforceDigitsOnBlur: false,
                radixPoint: ".",
                positionCaretOnClick: "radixFocus",
                groupSize: 3,
                groupSeparator: "",
                autoGroup: false,
                allowMinus: true,
                negationSymbol: {
                    front: "-",
                    back: ""
                },
                integerDigits: "+",
                integerOptional: true,
                prefix: "",
                suffix: "",
                rightAlign: true,
                decimalProtect: true,
                min: null,
                max: null,
                step: 1,
                insertMode: true,
                autoUnmask: false,
                unmaskAsNumber: false,
                inputType: "text",
                inputmode: "numeric",
                preValidation: function preValidation(buffer, pos, c, isSelection, opts, maskset) {
                    if (c === "-" || c === opts.negationSymbol.front) {
                        if (opts.allowMinus !== true) return false;
                        opts.isNegative = opts.isNegative === undefined ? true : !opts.isNegative;
                        if (buffer.join("") === "") return true;
                        return {
                            caret: maskset.validPositions[pos] ? pos : undefined,
                            dopost: true
                        };
                    }
                    if (isSelection === false && c === opts.radixPoint && opts.digits !== undefined && (isNaN(opts.digits) || parseInt(opts.digits) > 0)) {
                        var radixPos = $.inArray(opts.radixPoint, buffer);
                        if (radixPos !== -1 && maskset.validPositions[radixPos] !== undefined) {
                            if (opts.numericInput === true) {
                                return pos === radixPos;
                            }
                            return {
                                caret: radixPos + 1
                            };
                        }
                    }
                    return true;
                },
                postValidation: function postValidation(buffer, pos, currentResult, opts) {
                    function buildPostMask(buffer, opts) {
                        var postMask = "";
                        postMask += "(" + opts.groupSeparator + "*{" + opts.groupSize + "}){*}";
                        if (opts.radixPoint !== "") {
                            var radixSplit = buffer.join("").split(opts.radixPoint);
                            if (radixSplit[1]) {
                                postMask += opts.radixPoint + "*{" + radixSplit[1].match(/^\d*\??\d*/)[0].length + "}";
                            }
                        }
                        return postMask;
                    }
                    var suffix = opts.suffix.split(""), prefix = opts.prefix.split("");
                    if (currentResult.pos === undefined && currentResult.caret !== undefined && currentResult.dopost !== true) return currentResult;
                    var caretPos = currentResult.caret !== undefined ? currentResult.caret : currentResult.pos;
                    var maskedValue = buffer.slice();
                    if (opts.numericInput) {
                        caretPos = maskedValue.length - caretPos - 1;
                        maskedValue = maskedValue.reverse();
                    }
                    var charAtPos = maskedValue[caretPos];
                    if (charAtPos === opts.groupSeparator) {
                        caretPos += 1;
                        charAtPos = maskedValue[caretPos];
                    }
                    if (caretPos === maskedValue.length - opts.suffix.length - 1 && charAtPos === opts.radixPoint) return currentResult;
                    if (charAtPos !== undefined) {
                        if (charAtPos !== opts.radixPoint && charAtPos !== opts.negationSymbol.front && charAtPos !== opts.negationSymbol.back) {
                            maskedValue[caretPos] = "?";
                            if (opts.prefix.length > 0 && caretPos >= (opts.isNegative === false ? 1 : 0) && caretPos < opts.prefix.length - 1 + (opts.isNegative === false ? 1 : 0)) {
                                prefix[caretPos - (opts.isNegative === false ? 1 : 0)] = "?";
                            } else if (opts.suffix.length > 0 && caretPos >= maskedValue.length - opts.suffix.length - (opts.isNegative === false ? 1 : 0)) {
                                suffix[caretPos - (maskedValue.length - opts.suffix.length - (opts.isNegative === false ? 1 : 0))] = "?";
                            }
                        }
                    }
                    prefix = prefix.join("");
                    suffix = suffix.join("");
                    var processValue = maskedValue.join("").replace(prefix, "");
                    processValue = processValue.replace(suffix, "");
                    processValue = processValue.replace(new RegExp(Inputmask.escapeRegex(opts.groupSeparator), "g"), "");
                    processValue = processValue.replace(new RegExp("[-" + Inputmask.escapeRegex(opts.negationSymbol.front) + "]", "g"), "");
                    processValue = processValue.replace(new RegExp(Inputmask.escapeRegex(opts.negationSymbol.back) + "$"), "");
                    if (isNaN(opts.placeholder)) {
                        processValue = processValue.replace(new RegExp(Inputmask.escapeRegex(opts.placeholder), "g"), "");
                    }
                    if (processValue.length > 1 && processValue.indexOf(opts.radixPoint) !== 1) {
                        if (charAtPos === "0") {
                            processValue = processValue.replace(/^\?/g, "");
                        }
                        processValue = processValue.replace(/^0/g, "");
                    }
                    if (processValue.charAt(0) === opts.radixPoint && opts.radixPoint !== "" && opts.numericInput !== true) {
                        processValue = "0" + processValue;
                    }
                    if (processValue !== "") {
                        processValue = processValue.split("");
                        if ((!opts.digitsOptional || opts.enforceDigitsOnBlur && currentResult.event === "blur") && isFinite(opts.digits)) {
                            var radixPosition = $.inArray(opts.radixPoint, processValue);
                            var rpb = $.inArray(opts.radixPoint, maskedValue);
                            if (radixPosition === -1) {
                                processValue.push(opts.radixPoint);
                                radixPosition = processValue.length - 1;
                            }
                            for (var i = 1; i <= opts.digits; i++) {
                                if ((!opts.digitsOptional || opts.enforceDigitsOnBlur && currentResult.event === "blur") && (processValue[radixPosition + i] === undefined || processValue[radixPosition + i] === opts.placeholder.charAt(0))) {
                                    processValue[radixPosition + i] = currentResult.placeholder || opts.placeholder.charAt(0);
                                } else if (rpb !== -1 && maskedValue[rpb + i] !== undefined) {
                                    processValue[radixPosition + i] = processValue[radixPosition + i] || maskedValue[rpb + i];
                                }
                            }
                        }
                        if (opts.autoGroup === true && opts.groupSeparator !== "" && (charAtPos !== opts.radixPoint || currentResult.pos !== undefined || currentResult.dopost)) {
                            var addRadix = processValue[processValue.length - 1] === opts.radixPoint && currentResult.c === opts.radixPoint;
                            processValue = Inputmask(buildPostMask(processValue, opts), {
                                numericInput: true,
                                jitMasking: true,
                                definitions: {
                                    "*": {
                                        validator: "[0-9?]",
                                        cardinality: 1
                                    }
                                }
                            }).format(processValue.join(""));
                            if (addRadix) processValue += opts.radixPoint;
                            if (processValue.charAt(0) === opts.groupSeparator) {
                                processValue.substr(1);
                            }
                        } else processValue = processValue.join("");
                    }
                    if (opts.isNegative && currentResult.event === "blur") {
                        opts.isNegative = processValue !== "0";
                    }
                    processValue = prefix + processValue;
                    processValue += suffix;
                    if (opts.isNegative) {
                        processValue = opts.negationSymbol.front + processValue;
                        processValue += opts.negationSymbol.back;
                    }
                    processValue = processValue.split("");
                    if (charAtPos !== undefined) {
                        if (charAtPos !== opts.radixPoint && charAtPos !== opts.negationSymbol.front && charAtPos !== opts.negationSymbol.back) {
                            caretPos = $.inArray("?", processValue);
                            if (caretPos > -1) {
                                processValue[caretPos] = charAtPos;
                            } else caretPos = currentResult.caret || 0;
                        } else if (charAtPos === opts.radixPoint || charAtPos === opts.negationSymbol.front || charAtPos === opts.negationSymbol.back) {
                            var newCaretPos = $.inArray(charAtPos, processValue);
                            if (newCaretPos !== -1) caretPos = newCaretPos;
                        }
                    }
                    if (opts.numericInput) {
                        caretPos = processValue.length - caretPos - 1;
                        processValue = processValue.reverse();
                    }
                    var rslt = {
                        caret: (charAtPos === undefined || currentResult.pos !== undefined) && caretPos !== undefined ? caretPos + (opts.numericInput ? -1 : 1) : caretPos,
                        buffer: processValue,
                        refreshFromBuffer: currentResult.dopost || buffer.join("") !== processValue.join("")
                    };
                    return rslt.refreshFromBuffer ? rslt : currentResult;
                },
                onBeforeWrite: function onBeforeWrite(e, buffer, caretPos, opts) {
                    function parseMinMaxOptions(opts) {
                        if (opts.parseMinMaxOptions === undefined) {
                            if (opts.min !== null) {
                                opts.min = opts.min.toString().replace(new RegExp(Inputmask.escapeRegex(opts.groupSeparator), "g"), "");
                                if (opts.radixPoint === ",") opts.min = opts.min.replace(opts.radixPoint, ".");
                                opts.min = isFinite(opts.min) ? parseFloat(opts.min) : NaN;
                                if (isNaN(opts.min)) opts.min = Number.MIN_VALUE;
                            }
                            if (opts.max !== null) {
                                opts.max = opts.max.toString().replace(new RegExp(Inputmask.escapeRegex(opts.groupSeparator), "g"), "");
                                if (opts.radixPoint === ",") opts.max = opts.max.replace(opts.radixPoint, ".");
                                opts.max = isFinite(opts.max) ? parseFloat(opts.max) : NaN;
                                if (isNaN(opts.max)) opts.max = Number.MAX_VALUE;
                            }
                            opts.parseMinMaxOptions = "done";
                        }
                    }
                    if (e) {
                        switch (e.type) {
                          case "keydown":
                            return opts.postValidation(buffer, caretPos, {
                                caret: caretPos,
                                dopost: true
                            }, opts);

                          case "blur":
                          case "checkval":
                            var unmasked;
                            parseMinMaxOptions(opts);
                            if (opts.min !== null || opts.max !== null) {
                                unmasked = opts.onUnMask(buffer.join(""), undefined, $.extend({}, opts, {
                                    unmaskAsNumber: true
                                }));
                                if (opts.min !== null && unmasked < opts.min) {
                                    opts.isNegative = opts.min < 0;
                                    return opts.postValidation(opts.min.toString().replace(".", opts.radixPoint).split(""), caretPos, {
                                        caret: caretPos,
                                        dopost: true,
                                        placeholder: "0"
                                    }, opts);
                                } else if (opts.max !== null && unmasked > opts.max) {
                                    opts.isNegative = opts.max < 0;
                                    return opts.postValidation(opts.max.toString().replace(".", opts.radixPoint).split(""), caretPos, {
                                        caret: caretPos,
                                        dopost: true,
                                        placeholder: "0"
                                    }, opts);
                                }
                            }
                            return opts.postValidation(buffer, caretPos, {
                                caret: caretPos,
                                placeholder: "0",
                                event: "blur"
                            }, opts);

                          case "_checkval":
                            return {
                                caret: caretPos
                            };

                          default:
                            break;
                        }
                    }
                },
                regex: {
                    integerPart: function integerPart(opts, emptyCheck) {
                        return emptyCheck ? new RegExp("[" + Inputmask.escapeRegex(opts.negationSymbol.front) + "+]?") : new RegExp("[" + Inputmask.escapeRegex(opts.negationSymbol.front) + "+]?\\d+");
                    },
                    integerNPart: function integerNPart(opts) {
                        return new RegExp("[\\d" + Inputmask.escapeRegex(opts.groupSeparator) + Inputmask.escapeRegex(opts.placeholder.charAt(0)) + "]+");
                    }
                },
                definitions: {
                    "~": {
                        validator: function validator(chrs, maskset, pos, strict, opts, isSelection) {
                            var isValid, l;
                            if (chrs === "k" || chrs === "m") {
                                isValid = {
                                    insert: [],
                                    c: 0
                                };
                                for (var i = 0, l = chrs === "k" ? 2 : 5; i < l; i++) {
                                    isValid.insert.push({
                                        pos: pos + i,
                                        c: 0
                                    });
                                }
                                isValid.pos = pos + l;
                                return isValid;
                            }
                            isValid = strict ? new RegExp("[0-9" + Inputmask.escapeRegex(opts.groupSeparator) + "]").test(chrs) : new RegExp("[0-9]").test(chrs);
                            if (isValid === true) {
                                if (opts.numericInput !== true && maskset.validPositions[pos] !== undefined && maskset.validPositions[pos].match.def === "~" && !isSelection) {
                                    var processValue = maskset.buffer.join("");
                                    processValue = processValue.replace(new RegExp("[-" + Inputmask.escapeRegex(opts.negationSymbol.front) + "]", "g"), "");
                                    processValue = processValue.replace(new RegExp(Inputmask.escapeRegex(opts.negationSymbol.back) + "$"), "");
                                    var pvRadixSplit = processValue.split(opts.radixPoint);
                                    if (pvRadixSplit.length > 1) {
                                        pvRadixSplit[1] = pvRadixSplit[1].replace(/0/g, opts.placeholder.charAt(0));
                                    }
                                    if (pvRadixSplit[0] === "0") {
                                        pvRadixSplit[0] = pvRadixSplit[0].replace(/0/g, opts.placeholder.charAt(0));
                                    }
                                    processValue = pvRadixSplit[0] + opts.radixPoint + pvRadixSplit[1] || "";
                                    var bufferTemplate = maskset._buffer.join("");
                                    if (processValue === opts.radixPoint) {
                                        processValue = bufferTemplate;
                                    }
                                    while (processValue.match(Inputmask.escapeRegex(bufferTemplate) + "$") === null) {
                                        bufferTemplate = bufferTemplate.slice(1);
                                    }
                                    processValue = processValue.replace(bufferTemplate, "");
                                    processValue = processValue.split("");
                                    if (processValue[pos] === undefined) {
                                        isValid = {
                                            pos: pos,
                                            remove: pos
                                        };
                                    } else {
                                        isValid = {
                                            pos: pos
                                        };
                                    }
                                }
                            } else if (!strict && chrs === opts.radixPoint && maskset.validPositions[pos - 1] === undefined) {
                                isValid = {
                                    insert: {
                                        pos: pos,
                                        c: 0
                                    },
                                    pos: pos + 1
                                };
                            }
                            return isValid;
                        },
                        cardinality: 1
                    },
                    "+": {
                        validator: function validator(chrs, maskset, pos, strict, opts) {
                            return opts.allowMinus && (chrs === "-" || chrs === opts.negationSymbol.front);
                        },
                        cardinality: 1,
                        placeholder: ""
                    },
                    "-": {
                        validator: function validator(chrs, maskset, pos, strict, opts) {
                            return opts.allowMinus && chrs === opts.negationSymbol.back;
                        },
                        cardinality: 1,
                        placeholder: ""
                    },
                    ":": {
                        validator: function validator(chrs, maskset, pos, strict, opts) {
                            var radix = "[" + Inputmask.escapeRegex(opts.radixPoint) + "]";
                            var isValid = new RegExp(radix).test(chrs);
                            if (isValid && maskset.validPositions[pos] && maskset.validPositions[pos].match.placeholder === opts.radixPoint) {
                                isValid = {
                                    caret: pos + 1
                                };
                            }
                            return isValid;
                        },
                        cardinality: 1,
                        placeholder: function placeholder(opts) {
                            return opts.radixPoint;
                        }
                    }
                },
                onUnMask: function onUnMask(maskedValue, unmaskedValue, opts) {
                    if (unmaskedValue === "" && opts.nullable === true) {
                        return unmaskedValue;
                    }
                    var processValue = maskedValue.replace(opts.prefix, "");
                    processValue = processValue.replace(opts.suffix, "");
                    processValue = processValue.replace(new RegExp(Inputmask.escapeRegex(opts.groupSeparator), "g"), "");
                    if (opts.placeholder.charAt(0) !== "") {
                        processValue = processValue.replace(new RegExp(opts.placeholder.charAt(0), "g"), "0");
                    }
                    if (opts.unmaskAsNumber) {
                        if (opts.radixPoint !== "" && processValue.indexOf(opts.radixPoint) !== -1) processValue = processValue.replace(Inputmask.escapeRegex.call(this, opts.radixPoint), ".");
                        processValue = processValue.replace(new RegExp("^" + Inputmask.escapeRegex(opts.negationSymbol.front)), "-");
                        processValue = processValue.replace(new RegExp(Inputmask.escapeRegex(opts.negationSymbol.back) + "$"), "");
                        return Number(processValue);
                    }
                    return processValue;
                },
                isComplete: function isComplete(buffer, opts) {
                    var maskedValue = (opts.numericInput ? buffer.slice().reverse() : buffer).join("");
                    maskedValue = maskedValue.replace(new RegExp("^" + Inputmask.escapeRegex(opts.negationSymbol.front)), "-");
                    maskedValue = maskedValue.replace(new RegExp(Inputmask.escapeRegex(opts.negationSymbol.back) + "$"), "");
                    maskedValue = maskedValue.replace(opts.prefix, "");
                    maskedValue = maskedValue.replace(opts.suffix, "");
                    maskedValue = maskedValue.replace(new RegExp(Inputmask.escapeRegex(opts.groupSeparator) + "([0-9]{3})", "g"), "$1");
                    if (opts.radixPoint === ",") maskedValue = maskedValue.replace(Inputmask.escapeRegex(opts.radixPoint), ".");
                    return isFinite(maskedValue);
                },
                onBeforeMask: function onBeforeMask(initialValue, opts) {
                    opts.isNegative = undefined;
                    var radixPoint = opts.radixPoint || ",";
                    if ((typeof initialValue == "number" || opts.inputType === "number") && radixPoint !== "") {
                        initialValue = initialValue.toString().replace(".", radixPoint);
                    }
                    var valueParts = initialValue.split(radixPoint), integerPart = valueParts[0].replace(/[^\-0-9]/g, ""), decimalPart = valueParts.length > 1 ? valueParts[1].replace(/[^0-9]/g, "") : "";
                    initialValue = integerPart + (decimalPart !== "" ? radixPoint + decimalPart : decimalPart);
                    var digits = 0;
                    if (radixPoint !== "") {
                        digits = decimalPart.length;
                        if (decimalPart !== "") {
                            var digitsFactor = Math.pow(10, digits || 1);
                            if (isFinite(opts.digits)) {
                                digits = parseInt(opts.digits);
                                digitsFactor = Math.pow(10, digits);
                            }
                            initialValue = initialValue.replace(Inputmask.escapeRegex(radixPoint), ".");
                            if (isFinite(initialValue)) initialValue = Math.round(parseFloat(initialValue) * digitsFactor) / digitsFactor;
                            initialValue = initialValue.toString().replace(".", radixPoint);
                        }
                    }
                    if (opts.digits === 0 && initialValue.indexOf(Inputmask.escapeRegex(radixPoint)) !== -1) {
                        initialValue = initialValue.substring(0, initialValue.indexOf(Inputmask.escapeRegex(radixPoint)));
                    }
                    return alignDigits(initialValue.toString().split(""), digits, opts).join("");
                },
                onKeyDown: function onKeyDown(e, buffer, caretPos, opts) {
                    var $input = $(this);
                    if (e.ctrlKey) {
                        switch (e.keyCode) {
                          case Inputmask.keyCode.UP:
                            $input.val(parseFloat(this.inputmask.unmaskedvalue()) + parseInt(opts.step));
                            $input.trigger("setvalue");
                            break;

                          case Inputmask.keyCode.DOWN:
                            $input.val(parseFloat(this.inputmask.unmaskedvalue()) - parseInt(opts.step));
                            $input.trigger("setvalue");
                            break;
                        }
                    }
                }
            },
            currency: {
                prefix: "$ ",
                groupSeparator: ",",
                alias: "numeric",
                placeholder: "0",
                autoGroup: true,
                digits: 2,
                digitsOptional: false,
                clearMaskOnLostFocus: false
            },
            decimal: {
                alias: "numeric"
            },
            integer: {
                alias: "numeric",
                digits: 0,
                radixPoint: ""
            },
            percentage: {
                alias: "numeric",
                digits: 2,
                digitsOptional: true,
                radixPoint: ".",
                placeholder: "0",
                autoGroup: false,
                min: 0,
                max: 100,
                suffix: " %",
                allowMinus: false
            }
        });
        return Inputmask;
    });
}, function(module, exports, __webpack_require__) {
    var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;
    (function(global, factory) {
        "use strict";
        if (true && typeof module.exports === "object") {
            module.exports = global.document ? factory(global, true) : function(w) {
                if (!w.document) {
                    throw new Error("jQuery requires a window with a document");
                }
                return factory(w);
            };
        } else {
            factory(global);
        }
    })(typeof window !== "undefined" ? window : this, function(window, noGlobal) {
        "use strict";
        var arr = [];
        var document = window.document;
        var getProto = Object.getPrototypeOf;
        var slice = arr.slice;
        var concat = arr.concat;
        var push = arr.push;
        var indexOf = arr.indexOf;
        var class2type = {};
        var toString = class2type.toString;
        var hasOwn = class2type.hasOwnProperty;
        var fnToString = hasOwn.toString;
        var ObjectFunctionString = fnToString.call(Object);
        var support = {};
        var isFunction = function isFunction(obj) {
            return typeof obj === "function" && typeof obj.nodeType !== "number";
        };
        var isWindow = function isWindow(obj) {
            return obj != null && obj === obj.window;
        };
        var preservedScriptAttributes = {
            type: true,
            src: true,
            nonce: true,
            noModule: true
        };
        function DOMEval(code, node, doc) {
            doc = doc || document;
            var i, val, script = doc.createElement("script");
            script.text = code;
            if (node) {
                for (i in preservedScriptAttributes) {
                    val = node[i] || node.getAttribute && node.getAttribute(i);
                    if (val) {
                        script.setAttribute(i, val);
                    }
                }
            }
            doc.head.appendChild(script).parentNode.removeChild(script);
        }
        function toType(obj) {
            if (obj == null) {
                return obj + "";
            }
            return typeof obj === "object" || typeof obj === "function" ? class2type[toString.call(obj)] || "object" : typeof obj;
        }
        var version = "3.4.0", jQuery = function(selector, context) {
            return new jQuery.fn.init(selector, context);
        }, rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
        jQuery.fn = jQuery.prototype = {
            jquery: version,
            constructor: jQuery,
            length: 0,
            toArray: function() {
                return slice.call(this);
            },
            get: function(num) {
                if (num == null) {
                    return slice.call(this);
                }
                return num < 0 ? this[num + this.length] : this[num];
            },
            pushStack: function(elems) {
                var ret = jQuery.merge(this.constructor(), elems);
                ret.prevObject = this;
                return ret;
            },
            each: function(callback) {
                return jQuery.each(this, callback);
            },
            map: function(callback) {
                return this.pushStack(jQuery.map(this, function(elem, i) {
                    return callback.call(elem, i, elem);
                }));
            },
            slice: function() {
                return this.pushStack(slice.apply(this, arguments));
            },
            first: function() {
                return this.eq(0);
            },
            last: function() {
                return this.eq(-1);
            },
            eq: function(i) {
                var len = this.length, j = +i + (i < 0 ? len : 0);
                return this.pushStack(j >= 0 && j < len ? [ this[j] ] : []);
            },
            end: function() {
                return this.prevObject || this.constructor();
            },
            push: push,
            sort: arr.sort,
            splice: arr.splice
        };
        jQuery.extend = jQuery.fn.extend = function() {
            var options, name, src, copy, copyIsArray, clone, target = arguments[0] || {}, i = 1, length = arguments.length, deep = false;
            if (typeof target === "boolean") {
                deep = target;
                target = arguments[i] || {};
                i++;
            }
            if (typeof target !== "object" && !isFunction(target)) {
                target = {};
            }
            if (i === length) {
                target = this;
                i--;
            }
            for (;i < length; i++) {
                if ((options = arguments[i]) != null) {
                    for (name in options) {
                        copy = options[name];
                        if (name === "__proto__" || target === copy) {
                            continue;
                        }
                        if (deep && copy && (jQuery.isPlainObject(copy) || (copyIsArray = Array.isArray(copy)))) {
                            src = target[name];
                            if (copyIsArray && !Array.isArray(src)) {
                                clone = [];
                            } else if (!copyIsArray && !jQuery.isPlainObject(src)) {
                                clone = {};
                            } else {
                                clone = src;
                            }
                            copyIsArray = false;
                            target[name] = jQuery.extend(deep, clone, copy);
                        } else if (copy !== undefined) {
                            target[name] = copy;
                        }
                    }
                }
            }
            return target;
        };
        jQuery.extend({
            expando: "jQuery" + (version + Math.random()).replace(/\D/g, ""),
            isReady: true,
            error: function(msg) {
                throw new Error(msg);
            },
            noop: function() {},
            isPlainObject: function(obj) {
                var proto, Ctor;
                if (!obj || toString.call(obj) !== "[object Object]") {
                    return false;
                }
                proto = getProto(obj);
                if (!proto) {
                    return true;
                }
                Ctor = hasOwn.call(proto, "constructor") && proto.constructor;
                return typeof Ctor === "function" && fnToString.call(Ctor) === ObjectFunctionString;
            },
            isEmptyObject: function(obj) {
                var name;
                for (name in obj) {
                    return false;
                }
                return true;
            },
            globalEval: function(code, options) {
                DOMEval(code, {
                    nonce: options && options.nonce
                });
            },
            each: function(obj, callback) {
                var length, i = 0;
                if (isArrayLike(obj)) {
                    length = obj.length;
                    for (;i < length; i++) {
                        if (callback.call(obj[i], i, obj[i]) === false) {
                            break;
                        }
                    }
                } else {
                    for (i in obj) {
                        if (callback.call(obj[i], i, obj[i]) === false) {
                            break;
                        }
                    }
                }
                return obj;
            },
            trim: function(text) {
                return text == null ? "" : (text + "").replace(rtrim, "");
            },
            makeArray: function(arr, results) {
                var ret = results || [];
                if (arr != null) {
                    if (isArrayLike(Object(arr))) {
                        jQuery.merge(ret, typeof arr === "string" ? [ arr ] : arr);
                    } else {
                        push.call(ret, arr);
                    }
                }
                return ret;
            },
            inArray: function(elem, arr, i) {
                return arr == null ? -1 : indexOf.call(arr, elem, i);
            },
            merge: function(first, second) {
                var len = +second.length, j = 0, i = first.length;
                for (;j < len; j++) {
                    first[i++] = second[j];
                }
                first.length = i;
                return first;
            },
            grep: function(elems, callback, invert) {
                var callbackInverse, matches = [], i = 0, length = elems.length, callbackExpect = !invert;
                for (;i < length; i++) {
                    callbackInverse = !callback(elems[i], i);
                    if (callbackInverse !== callbackExpect) {
                        matches.push(elems[i]);
                    }
                }
                return matches;
            },
            map: function(elems, callback, arg) {
                var length, value, i = 0, ret = [];
                if (isArrayLike(elems)) {
                    length = elems.length;
                    for (;i < length; i++) {
                        value = callback(elems[i], i, arg);
                        if (value != null) {
                            ret.push(value);
                        }
                    }
                } else {
                    for (i in elems) {
                        value = callback(elems[i], i, arg);
                        if (value != null) {
                            ret.push(value);
                        }
                    }
                }
                return concat.apply([], ret);
            },
            guid: 1,
            support: support
        });
        if (typeof Symbol === "function") {
            jQuery.fn[Symbol.iterator] = arr[Symbol.iterator];
        }
        jQuery.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(i, name) {
            class2type["[object " + name + "]"] = name.toLowerCase();
        });
        function isArrayLike(obj) {
            var length = !!obj && "length" in obj && obj.length, type = toType(obj);
            if (isFunction(obj) || isWindow(obj)) {
                return false;
            }
            return type === "array" || length === 0 || typeof length === "number" && length > 0 && length - 1 in obj;
        }
        var Sizzle = function(window) {
            var i, support, Expr, getText, isXML, tokenize, compile, select, outermostContext, sortInput, hasDuplicate, setDocument, document, docElem, documentIsHTML, rbuggyQSA, rbuggyMatches, matches, contains, expando = "sizzle" + 1 * new Date(), preferredDoc = window.document, dirruns = 0, done = 0, classCache = createCache(), tokenCache = createCache(), compilerCache = createCache(), nonnativeSelectorCache = createCache(), sortOrder = function(a, b) {
                if (a === b) {
                    hasDuplicate = true;
                }
                return 0;
            }, hasOwn = {}.hasOwnProperty, arr = [], pop = arr.pop, push_native = arr.push, push = arr.push, slice = arr.slice, indexOf = function(list, elem) {
                var i = 0, len = list.length;
                for (;i < len; i++) {
                    if (list[i] === elem) {
                        return i;
                    }
                }
                return -1;
            }, booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", whitespace = "[\\x20\\t\\r\\n\\f]", identifier = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+", attributes = "\\[" + whitespace + "*(" + identifier + ")(?:" + whitespace + "*([*^$|!~]?=)" + whitespace + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + identifier + "))|)" + whitespace + "*\\]", pseudos = ":(" + identifier + ")(?:\\((" + "('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|" + "((?:\\\\.|[^\\\\()[\\]]|" + attributes + ")*)|" + ".*" + ")\\)|)", rwhitespace = new RegExp(whitespace + "+", "g"), rtrim = new RegExp("^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$", "g"), rcomma = new RegExp("^" + whitespace + "*," + whitespace + "*"), rcombinators = new RegExp("^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace + "*"), rdescend = new RegExp(whitespace + "|>"), rpseudo = new RegExp(pseudos), ridentifier = new RegExp("^" + identifier + "$"), matchExpr = {
                ID: new RegExp("^#(" + identifier + ")"),
                CLASS: new RegExp("^\\.(" + identifier + ")"),
                TAG: new RegExp("^(" + identifier + "|[*])"),
                ATTR: new RegExp("^" + attributes),
                PSEUDO: new RegExp("^" + pseudos),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + whitespace + "*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" + whitespace + "*(\\d+)|))" + whitespace + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + booleans + ")$", "i"),
                needsContext: new RegExp("^" + whitespace + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + whitespace + "*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i")
            }, rhtml = /HTML$/i, rinputs = /^(?:input|select|textarea|button)$/i, rheader = /^h\d$/i, rnative = /^[^{]+\{\s*\[native \w/, rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, rsibling = /[+~]/, runescape = new RegExp("\\\\([\\da-f]{1,6}" + whitespace + "?|(" + whitespace + ")|.)", "ig"), funescape = function(_, escaped, escapedWhitespace) {
                var high = "0x" + escaped - 65536;
                return high !== high || escapedWhitespace ? escaped : high < 0 ? String.fromCharCode(high + 65536) : String.fromCharCode(high >> 10 | 55296, high & 1023 | 56320);
            }, rcssescape = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g, fcssescape = function(ch, asCodePoint) {
                if (asCodePoint) {
                    if (ch === "\0") {
                        return "\ufffd";
                    }
                    return ch.slice(0, -1) + "\\" + ch.charCodeAt(ch.length - 1).toString(16) + " ";
                }
                return "\\" + ch;
            }, unloadHandler = function() {
                setDocument();
            }, inDisabledFieldset = addCombinator(function(elem) {
                return elem.disabled === true && elem.nodeName.toLowerCase() === "fieldset";
            }, {
                dir: "parentNode",
                next: "legend"
            });
            try {
                push.apply(arr = slice.call(preferredDoc.childNodes), preferredDoc.childNodes);
                arr[preferredDoc.childNodes.length].nodeType;
            } catch (e) {
                push = {
                    apply: arr.length ? function(target, els) {
                        push_native.apply(target, slice.call(els));
                    } : function(target, els) {
                        var j = target.length, i = 0;
                        while (target[j++] = els[i++]) {}
                        target.length = j - 1;
                    }
                };
            }
            function Sizzle(selector, context, results, seed) {
                var m, i, elem, nid, match, groups, newSelector, newContext = context && context.ownerDocument, nodeType = context ? context.nodeType : 9;
                results = results || [];
                if (typeof selector !== "string" || !selector || nodeType !== 1 && nodeType !== 9 && nodeType !== 11) {
                    return results;
                }
                if (!seed) {
                    if ((context ? context.ownerDocument || context : preferredDoc) !== document) {
                        setDocument(context);
                    }
                    context = context || document;
                    if (documentIsHTML) {
                        if (nodeType !== 11 && (match = rquickExpr.exec(selector))) {
                            if (m = match[1]) {
                                if (nodeType === 9) {
                                    if (elem = context.getElementById(m)) {
                                        if (elem.id === m) {
                                            results.push(elem);
                                            return results;
                                        }
                                    } else {
                                        return results;
                                    }
                                } else {
                                    if (newContext && (elem = newContext.getElementById(m)) && contains(context, elem) && elem.id === m) {
                                        results.push(elem);
                                        return results;
                                    }
                                }
                            } else if (match[2]) {
                                push.apply(results, context.getElementsByTagName(selector));
                                return results;
                            } else if ((m = match[3]) && support.getElementsByClassName && context.getElementsByClassName) {
                                push.apply(results, context.getElementsByClassName(m));
                                return results;
                            }
                        }
                        if (support.qsa && !nonnativeSelectorCache[selector + " "] && (!rbuggyQSA || !rbuggyQSA.test(selector)) && (nodeType !== 1 || context.nodeName.toLowerCase() !== "object")) {
                            newSelector = selector;
                            newContext = context;
                            if (nodeType === 1 && rdescend.test(selector)) {
                                if (nid = context.getAttribute("id")) {
                                    nid = nid.replace(rcssescape, fcssescape);
                                } else {
                                    context.setAttribute("id", nid = expando);
                                }
                                groups = tokenize(selector);
                                i = groups.length;
                                while (i--) {
                                    groups[i] = "#" + nid + " " + toSelector(groups[i]);
                                }
                                newSelector = groups.join(",");
                                newContext = rsibling.test(selector) && testContext(context.parentNode) || context;
                            }
                            try {
                                push.apply(results, newContext.querySelectorAll(newSelector));
                                return results;
                            } catch (qsaError) {
                                nonnativeSelectorCache(selector, true);
                            } finally {
                                if (nid === expando) {
                                    context.removeAttribute("id");
                                }
                            }
                        }
                    }
                }
                return select(selector.replace(rtrim, "$1"), context, results, seed);
            }
            function createCache() {
                var keys = [];
                function cache(key, value) {
                    if (keys.push(key + " ") > Expr.cacheLength) {
                        delete cache[keys.shift()];
                    }
                    return cache[key + " "] = value;
                }
                return cache;
            }
            function markFunction(fn) {
                fn[expando] = true;
                return fn;
            }
            function assert(fn) {
                var el = document.createElement("fieldset");
                try {
                    return !!fn(el);
                } catch (e) {
                    return false;
                } finally {
                    if (el.parentNode) {
                        el.parentNode.removeChild(el);
                    }
                    el = null;
                }
            }
            function addHandle(attrs, handler) {
                var arr = attrs.split("|"), i = arr.length;
                while (i--) {
                    Expr.attrHandle[arr[i]] = handler;
                }
            }
            function siblingCheck(a, b) {
                var cur = b && a, diff = cur && a.nodeType === 1 && b.nodeType === 1 && a.sourceIndex - b.sourceIndex;
                if (diff) {
                    return diff;
                }
                if (cur) {
                    while (cur = cur.nextSibling) {
                        if (cur === b) {
                            return -1;
                        }
                    }
                }
                return a ? 1 : -1;
            }
            function createInputPseudo(type) {
                return function(elem) {
                    var name = elem.nodeName.toLowerCase();
                    return name === "input" && elem.type === type;
                };
            }
            function createButtonPseudo(type) {
                return function(elem) {
                    var name = elem.nodeName.toLowerCase();
                    return (name === "input" || name === "button") && elem.type === type;
                };
            }
            function createDisabledPseudo(disabled) {
                return function(elem) {
                    if ("form" in elem) {
                        if (elem.parentNode && elem.disabled === false) {
                            if ("label" in elem) {
                                if ("label" in elem.parentNode) {
                                    return elem.parentNode.disabled === disabled;
                                } else {
                                    return elem.disabled === disabled;
                                }
                            }
                            return elem.isDisabled === disabled || elem.isDisabled !== !disabled && inDisabledFieldset(elem) === disabled;
                        }
                        return elem.disabled === disabled;
                    } else if ("label" in elem) {
                        return elem.disabled === disabled;
                    }
                    return false;
                };
            }
            function createPositionalPseudo(fn) {
                return markFunction(function(argument) {
                    argument = +argument;
                    return markFunction(function(seed, matches) {
                        var j, matchIndexes = fn([], seed.length, argument), i = matchIndexes.length;
                        while (i--) {
                            if (seed[j = matchIndexes[i]]) {
                                seed[j] = !(matches[j] = seed[j]);
                            }
                        }
                    });
                });
            }
            function testContext(context) {
                return context && typeof context.getElementsByTagName !== "undefined" && context;
            }
            support = Sizzle.support = {};
            isXML = Sizzle.isXML = function(elem) {
                var namespace = elem.namespaceURI, docElem = (elem.ownerDocument || elem).documentElement;
                return !rhtml.test(namespace || docElem && docElem.nodeName || "HTML");
            };
            setDocument = Sizzle.setDocument = function(node) {
                var hasCompare, subWindow, doc = node ? node.ownerDocument || node : preferredDoc;
                if (doc === document || doc.nodeType !== 9 || !doc.documentElement) {
                    return document;
                }
                document = doc;
                docElem = document.documentElement;
                documentIsHTML = !isXML(document);
                if (preferredDoc !== document && (subWindow = document.defaultView) && subWindow.top !== subWindow) {
                    if (subWindow.addEventListener) {
                        subWindow.addEventListener("unload", unloadHandler, false);
                    } else if (subWindow.attachEvent) {
                        subWindow.attachEvent("onunload", unloadHandler);
                    }
                }
                support.attributes = assert(function(el) {
                    el.className = "i";
                    return !el.getAttribute("className");
                });
                support.getElementsByTagName = assert(function(el) {
                    el.appendChild(document.createComment(""));
                    return !el.getElementsByTagName("*").length;
                });
                support.getElementsByClassName = rnative.test(document.getElementsByClassName);
                support.getById = assert(function(el) {
                    docElem.appendChild(el).id = expando;
                    return !document.getElementsByName || !document.getElementsByName(expando).length;
                });
                if (support.getById) {
                    Expr.filter["ID"] = function(id) {
                        var attrId = id.replace(runescape, funescape);
                        return function(elem) {
                            return elem.getAttribute("id") === attrId;
                        };
                    };
                    Expr.find["ID"] = function(id, context) {
                        if (typeof context.getElementById !== "undefined" && documentIsHTML) {
                            var elem = context.getElementById(id);
                            return elem ? [ elem ] : [];
                        }
                    };
                } else {
                    Expr.filter["ID"] = function(id) {
                        var attrId = id.replace(runescape, funescape);
                        return function(elem) {
                            var node = typeof elem.getAttributeNode !== "undefined" && elem.getAttributeNode("id");
                            return node && node.value === attrId;
                        };
                    };
                    Expr.find["ID"] = function(id, context) {
                        if (typeof context.getElementById !== "undefined" && documentIsHTML) {
                            var node, i, elems, elem = context.getElementById(id);
                            if (elem) {
                                node = elem.getAttributeNode("id");
                                if (node && node.value === id) {
                                    return [ elem ];
                                }
                                elems = context.getElementsByName(id);
                                i = 0;
                                while (elem = elems[i++]) {
                                    node = elem.getAttributeNode("id");
                                    if (node && node.value === id) {
                                        return [ elem ];
                                    }
                                }
                            }
                            return [];
                        }
                    };
                }
                Expr.find["TAG"] = support.getElementsByTagName ? function(tag, context) {
                    if (typeof context.getElementsByTagName !== "undefined") {
                        return context.getElementsByTagName(tag);
                    } else if (support.qsa) {
                        return context.querySelectorAll(tag);
                    }
                } : function(tag, context) {
                    var elem, tmp = [], i = 0, results = context.getElementsByTagName(tag);
                    if (tag === "*") {
                        while (elem = results[i++]) {
                            if (elem.nodeType === 1) {
                                tmp.push(elem);
                            }
                        }
                        return tmp;
                    }
                    return results;
                };
                Expr.find["CLASS"] = support.getElementsByClassName && function(className, context) {
                    if (typeof context.getElementsByClassName !== "undefined" && documentIsHTML) {
                        return context.getElementsByClassName(className);
                    }
                };
                rbuggyMatches = [];
                rbuggyQSA = [];
                if (support.qsa = rnative.test(document.querySelectorAll)) {
                    assert(function(el) {
                        docElem.appendChild(el).innerHTML = "<a id='" + expando + "'></a>" + "<select id='" + expando + "-\r\\' msallowcapture=''>" + "<option selected=''></option></select>";
                        if (el.querySelectorAll("[msallowcapture^='']").length) {
                            rbuggyQSA.push("[*^$]=" + whitespace + "*(?:''|\"\")");
                        }
                        if (!el.querySelectorAll("[selected]").length) {
                            rbuggyQSA.push("\\[" + whitespace + "*(?:value|" + booleans + ")");
                        }
                        if (!el.querySelectorAll("[id~=" + expando + "-]").length) {
                            rbuggyQSA.push("~=");
                        }
                        if (!el.querySelectorAll(":checked").length) {
                            rbuggyQSA.push(":checked");
                        }
                        if (!el.querySelectorAll("a#" + expando + "+*").length) {
                            rbuggyQSA.push(".#.+[+~]");
                        }
                    });
                    assert(function(el) {
                        el.innerHTML = "<a href='' disabled='disabled'></a>" + "<select disabled='disabled'><option/></select>";
                        var input = document.createElement("input");
                        input.setAttribute("type", "hidden");
                        el.appendChild(input).setAttribute("name", "D");
                        if (el.querySelectorAll("[name=d]").length) {
                            rbuggyQSA.push("name" + whitespace + "*[*^$|!~]?=");
                        }
                        if (el.querySelectorAll(":enabled").length !== 2) {
                            rbuggyQSA.push(":enabled", ":disabled");
                        }
                        docElem.appendChild(el).disabled = true;
                        if (el.querySelectorAll(":disabled").length !== 2) {
                            rbuggyQSA.push(":enabled", ":disabled");
                        }
                        el.querySelectorAll("*,:x");
                        rbuggyQSA.push(",.*:");
                    });
                }
                if (support.matchesSelector = rnative.test(matches = docElem.matches || docElem.webkitMatchesSelector || docElem.mozMatchesSelector || docElem.oMatchesSelector || docElem.msMatchesSelector)) {
                    assert(function(el) {
                        support.disconnectedMatch = matches.call(el, "*");
                        matches.call(el, "[s!='']:x");
                        rbuggyMatches.push("!=", pseudos);
                    });
                }
                rbuggyQSA = rbuggyQSA.length && new RegExp(rbuggyQSA.join("|"));
                rbuggyMatches = rbuggyMatches.length && new RegExp(rbuggyMatches.join("|"));
                hasCompare = rnative.test(docElem.compareDocumentPosition);
                contains = hasCompare || rnative.test(docElem.contains) ? function(a, b) {
                    var adown = a.nodeType === 9 ? a.documentElement : a, bup = b && b.parentNode;
                    return a === bup || !!(bup && bup.nodeType === 1 && (adown.contains ? adown.contains(bup) : a.compareDocumentPosition && a.compareDocumentPosition(bup) & 16));
                } : function(a, b) {
                    if (b) {
                        while (b = b.parentNode) {
                            if (b === a) {
                                return true;
                            }
                        }
                    }
                    return false;
                };
                sortOrder = hasCompare ? function(a, b) {
                    if (a === b) {
                        hasDuplicate = true;
                        return 0;
                    }
                    var compare = !a.compareDocumentPosition - !b.compareDocumentPosition;
                    if (compare) {
                        return compare;
                    }
                    compare = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1;
                    if (compare & 1 || !support.sortDetached && b.compareDocumentPosition(a) === compare) {
                        if (a === document || a.ownerDocument === preferredDoc && contains(preferredDoc, a)) {
                            return -1;
                        }
                        if (b === document || b.ownerDocument === preferredDoc && contains(preferredDoc, b)) {
                            return 1;
                        }
                        return sortInput ? indexOf(sortInput, a) - indexOf(sortInput, b) : 0;
                    }
                    return compare & 4 ? -1 : 1;
                } : function(a, b) {
                    if (a === b) {
                        hasDuplicate = true;
                        return 0;
                    }
                    var cur, i = 0, aup = a.parentNode, bup = b.parentNode, ap = [ a ], bp = [ b ];
                    if (!aup || !bup) {
                        return a === document ? -1 : b === document ? 1 : aup ? -1 : bup ? 1 : sortInput ? indexOf(sortInput, a) - indexOf(sortInput, b) : 0;
                    } else if (aup === bup) {
                        return siblingCheck(a, b);
                    }
                    cur = a;
                    while (cur = cur.parentNode) {
                        ap.unshift(cur);
                    }
                    cur = b;
                    while (cur = cur.parentNode) {
                        bp.unshift(cur);
                    }
                    while (ap[i] === bp[i]) {
                        i++;
                    }
                    return i ? siblingCheck(ap[i], bp[i]) : ap[i] === preferredDoc ? -1 : bp[i] === preferredDoc ? 1 : 0;
                };
                return document;
            };
            Sizzle.matches = function(expr, elements) {
                return Sizzle(expr, null, null, elements);
            };
            Sizzle.matchesSelector = function(elem, expr) {
                if ((elem.ownerDocument || elem) !== document) {
                    setDocument(elem);
                }
                if (support.matchesSelector && documentIsHTML && !nonnativeSelectorCache[expr + " "] && (!rbuggyMatches || !rbuggyMatches.test(expr)) && (!rbuggyQSA || !rbuggyQSA.test(expr))) {
                    try {
                        var ret = matches.call(elem, expr);
                        if (ret || support.disconnectedMatch || elem.document && elem.document.nodeType !== 11) {
                            return ret;
                        }
                    } catch (e) {
                        nonnativeSelectorCache(expr, true);
                    }
                }
                return Sizzle(expr, document, null, [ elem ]).length > 0;
            };
            Sizzle.contains = function(context, elem) {
                if ((context.ownerDocument || context) !== document) {
                    setDocument(context);
                }
                return contains(context, elem);
            };
            Sizzle.attr = function(elem, name) {
                if ((elem.ownerDocument || elem) !== document) {
                    setDocument(elem);
                }
                var fn = Expr.attrHandle[name.toLowerCase()], val = fn && hasOwn.call(Expr.attrHandle, name.toLowerCase()) ? fn(elem, name, !documentIsHTML) : undefined;
                return val !== undefined ? val : support.attributes || !documentIsHTML ? elem.getAttribute(name) : (val = elem.getAttributeNode(name)) && val.specified ? val.value : null;
            };
            Sizzle.escape = function(sel) {
                return (sel + "").replace(rcssescape, fcssescape);
            };
            Sizzle.error = function(msg) {
                throw new Error("Syntax error, unrecognized expression: " + msg);
            };
            Sizzle.uniqueSort = function(results) {
                var elem, duplicates = [], j = 0, i = 0;
                hasDuplicate = !support.detectDuplicates;
                sortInput = !support.sortStable && results.slice(0);
                results.sort(sortOrder);
                if (hasDuplicate) {
                    while (elem = results[i++]) {
                        if (elem === results[i]) {
                            j = duplicates.push(i);
                        }
                    }
                    while (j--) {
                        results.splice(duplicates[j], 1);
                    }
                }
                sortInput = null;
                return results;
            };
            getText = Sizzle.getText = function(elem) {
                var node, ret = "", i = 0, nodeType = elem.nodeType;
                if (!nodeType) {
                    while (node = elem[i++]) {
                        ret += getText(node);
                    }
                } else if (nodeType === 1 || nodeType === 9 || nodeType === 11) {
                    if (typeof elem.textContent === "string") {
                        return elem.textContent;
                    } else {
                        for (elem = elem.firstChild; elem; elem = elem.nextSibling) {
                            ret += getText(elem);
                        }
                    }
                } else if (nodeType === 3 || nodeType === 4) {
                    return elem.nodeValue;
                }
                return ret;
            };
            Expr = Sizzle.selectors = {
                cacheLength: 50,
                createPseudo: markFunction,
                match: matchExpr,
                attrHandle: {},
                find: {},
                relative: {
                    ">": {
                        dir: "parentNode",
                        first: true
                    },
                    " ": {
                        dir: "parentNode"
                    },
                    "+": {
                        dir: "previousSibling",
                        first: true
                    },
                    "~": {
                        dir: "previousSibling"
                    }
                },
                preFilter: {
                    ATTR: function(match) {
                        match[1] = match[1].replace(runescape, funescape);
                        match[3] = (match[3] || match[4] || match[5] || "").replace(runescape, funescape);
                        if (match[2] === "~=") {
                            match[3] = " " + match[3] + " ";
                        }
                        return match.slice(0, 4);
                    },
                    CHILD: function(match) {
                        match[1] = match[1].toLowerCase();
                        if (match[1].slice(0, 3) === "nth") {
                            if (!match[3]) {
                                Sizzle.error(match[0]);
                            }
                            match[4] = +(match[4] ? match[5] + (match[6] || 1) : 2 * (match[3] === "even" || match[3] === "odd"));
                            match[5] = +(match[7] + match[8] || match[3] === "odd");
                        } else if (match[3]) {
                            Sizzle.error(match[0]);
                        }
                        return match;
                    },
                    PSEUDO: function(match) {
                        var excess, unquoted = !match[6] && match[2];
                        if (matchExpr["CHILD"].test(match[0])) {
                            return null;
                        }
                        if (match[3]) {
                            match[2] = match[4] || match[5] || "";
                        } else if (unquoted && rpseudo.test(unquoted) && (excess = tokenize(unquoted, true)) && (excess = unquoted.indexOf(")", unquoted.length - excess) - unquoted.length)) {
                            match[0] = match[0].slice(0, excess);
                            match[2] = unquoted.slice(0, excess);
                        }
                        return match.slice(0, 3);
                    }
                },
                filter: {
                    TAG: function(nodeNameSelector) {
                        var nodeName = nodeNameSelector.replace(runescape, funescape).toLowerCase();
                        return nodeNameSelector === "*" ? function() {
                            return true;
                        } : function(elem) {
                            return elem.nodeName && elem.nodeName.toLowerCase() === nodeName;
                        };
                    },
                    CLASS: function(className) {
                        var pattern = classCache[className + " "];
                        return pattern || (pattern = new RegExp("(^|" + whitespace + ")" + className + "(" + whitespace + "|$)")) && classCache(className, function(elem) {
                            return pattern.test(typeof elem.className === "string" && elem.className || typeof elem.getAttribute !== "undefined" && elem.getAttribute("class") || "");
                        });
                    },
                    ATTR: function(name, operator, check) {
                        return function(elem) {
                            var result = Sizzle.attr(elem, name);
                            if (result == null) {
                                return operator === "!=";
                            }
                            if (!operator) {
                                return true;
                            }
                            result += "";
                            return operator === "=" ? result === check : operator === "!=" ? result !== check : operator === "^=" ? check && result.indexOf(check) === 0 : operator === "*=" ? check && result.indexOf(check) > -1 : operator === "$=" ? check && result.slice(-check.length) === check : operator === "~=" ? (" " + result.replace(rwhitespace, " ") + " ").indexOf(check) > -1 : operator === "|=" ? result === check || result.slice(0, check.length + 1) === check + "-" : false;
                        };
                    },
                    CHILD: function(type, what, argument, first, last) {
                        var simple = type.slice(0, 3) !== "nth", forward = type.slice(-4) !== "last", ofType = what === "of-type";
                        return first === 1 && last === 0 ? function(elem) {
                            return !!elem.parentNode;
                        } : function(elem, context, xml) {
                            var cache, uniqueCache, outerCache, node, nodeIndex, start, dir = simple !== forward ? "nextSibling" : "previousSibling", parent = elem.parentNode, name = ofType && elem.nodeName.toLowerCase(), useCache = !xml && !ofType, diff = false;
                            if (parent) {
                                if (simple) {
                                    while (dir) {
                                        node = elem;
                                        while (node = node[dir]) {
                                            if (ofType ? node.nodeName.toLowerCase() === name : node.nodeType === 1) {
                                                return false;
                                            }
                                        }
                                        start = dir = type === "only" && !start && "nextSibling";
                                    }
                                    return true;
                                }
                                start = [ forward ? parent.firstChild : parent.lastChild ];
                                if (forward && useCache) {
                                    node = parent;
                                    outerCache = node[expando] || (node[expando] = {});
                                    uniqueCache = outerCache[node.uniqueID] || (outerCache[node.uniqueID] = {});
                                    cache = uniqueCache[type] || [];
                                    nodeIndex = cache[0] === dirruns && cache[1];
                                    diff = nodeIndex && cache[2];
                                    node = nodeIndex && parent.childNodes[nodeIndex];
                                    while (node = ++nodeIndex && node && node[dir] || (diff = nodeIndex = 0) || start.pop()) {
                                        if (node.nodeType === 1 && ++diff && node === elem) {
                                            uniqueCache[type] = [ dirruns, nodeIndex, diff ];
                                            break;
                                        }
                                    }
                                } else {
                                    if (useCache) {
                                        node = elem;
                                        outerCache = node[expando] || (node[expando] = {});
                                        uniqueCache = outerCache[node.uniqueID] || (outerCache[node.uniqueID] = {});
                                        cache = uniqueCache[type] || [];
                                        nodeIndex = cache[0] === dirruns && cache[1];
                                        diff = nodeIndex;
                                    }
                                    if (diff === false) {
                                        while (node = ++nodeIndex && node && node[dir] || (diff = nodeIndex = 0) || start.pop()) {
                                            if ((ofType ? node.nodeName.toLowerCase() === name : node.nodeType === 1) && ++diff) {
                                                if (useCache) {
                                                    outerCache = node[expando] || (node[expando] = {});
                                                    uniqueCache = outerCache[node.uniqueID] || (outerCache[node.uniqueID] = {});
                                                    uniqueCache[type] = [ dirruns, diff ];
                                                }
                                                if (node === elem) {
                                                    break;
                                                }
                                            }
                                        }
                                    }
                                }
                                diff -= last;
                                return diff === first || diff % first === 0 && diff / first >= 0;
                            }
                        };
                    },
                    PSEUDO: function(pseudo, argument) {
                        var args, fn = Expr.pseudos[pseudo] || Expr.setFilters[pseudo.toLowerCase()] || Sizzle.error("unsupported pseudo: " + pseudo);
                        if (fn[expando]) {
                            return fn(argument);
                        }
                        if (fn.length > 1) {
                            args = [ pseudo, pseudo, "", argument ];
                            return Expr.setFilters.hasOwnProperty(pseudo.toLowerCase()) ? markFunction(function(seed, matches) {
                                var idx, matched = fn(seed, argument), i = matched.length;
                                while (i--) {
                                    idx = indexOf(seed, matched[i]);
                                    seed[idx] = !(matches[idx] = matched[i]);
                                }
                            }) : function(elem) {
                                return fn(elem, 0, args);
                            };
                        }
                        return fn;
                    }
                },
                pseudos: {
                    not: markFunction(function(selector) {
                        var input = [], results = [], matcher = compile(selector.replace(rtrim, "$1"));
                        return matcher[expando] ? markFunction(function(seed, matches, context, xml) {
                            var elem, unmatched = matcher(seed, null, xml, []), i = seed.length;
                            while (i--) {
                                if (elem = unmatched[i]) {
                                    seed[i] = !(matches[i] = elem);
                                }
                            }
                        }) : function(elem, context, xml) {
                            input[0] = elem;
                            matcher(input, null, xml, results);
                            input[0] = null;
                            return !results.pop();
                        };
                    }),
                    has: markFunction(function(selector) {
                        return function(elem) {
                            return Sizzle(selector, elem).length > 0;
                        };
                    }),
                    contains: markFunction(function(text) {
                        text = text.replace(runescape, funescape);
                        return function(elem) {
                            return (elem.textContent || getText(elem)).indexOf(text) > -1;
                        };
                    }),
                    lang: markFunction(function(lang) {
                        if (!ridentifier.test(lang || "")) {
                            Sizzle.error("unsupported lang: " + lang);
                        }
                        lang = lang.replace(runescape, funescape).toLowerCase();
                        return function(elem) {
                            var elemLang;
                            do {
                                if (elemLang = documentIsHTML ? elem.lang : elem.getAttribute("xml:lang") || elem.getAttribute("lang")) {
                                    elemLang = elemLang.toLowerCase();
                                    return elemLang === lang || elemLang.indexOf(lang + "-") === 0;
                                }
                            } while ((elem = elem.parentNode) && elem.nodeType === 1);
                            return false;
                        };
                    }),
                    target: function(elem) {
                        var hash = window.location && window.location.hash;
                        return hash && hash.slice(1) === elem.id;
                    },
                    root: function(elem) {
                        return elem === docElem;
                    },
                    focus: function(elem) {
                        return elem === document.activeElement && (!document.hasFocus || document.hasFocus()) && !!(elem.type || elem.href || ~elem.tabIndex);
                    },
                    enabled: createDisabledPseudo(false),
                    disabled: createDisabledPseudo(true),
                    checked: function(elem) {
                        var nodeName = elem.nodeName.toLowerCase();
                        return nodeName === "input" && !!elem.checked || nodeName === "option" && !!elem.selected;
                    },
                    selected: function(elem) {
                        if (elem.parentNode) {
                            elem.parentNode.selectedIndex;
                        }
                        return elem.selected === true;
                    },
                    empty: function(elem) {
                        for (elem = elem.firstChild; elem; elem = elem.nextSibling) {
                            if (elem.nodeType < 6) {
                                return false;
                            }
                        }
                        return true;
                    },
                    parent: function(elem) {
                        return !Expr.pseudos["empty"](elem);
                    },
                    header: function(elem) {
                        return rheader.test(elem.nodeName);
                    },
                    input: function(elem) {
                        return rinputs.test(elem.nodeName);
                    },
                    button: function(elem) {
                        var name = elem.nodeName.toLowerCase();
                        return name === "input" && elem.type === "button" || name === "button";
                    },
                    text: function(elem) {
                        var attr;
                        return elem.nodeName.toLowerCase() === "input" && elem.type === "text" && ((attr = elem.getAttribute("type")) == null || attr.toLowerCase() === "text");
                    },
                    first: createPositionalPseudo(function() {
                        return [ 0 ];
                    }),
                    last: createPositionalPseudo(function(matchIndexes, length) {
                        return [ length - 1 ];
                    }),
                    eq: createPositionalPseudo(function(matchIndexes, length, argument) {
                        return [ argument < 0 ? argument + length : argument ];
                    }),
                    even: createPositionalPseudo(function(matchIndexes, length) {
                        var i = 0;
                        for (;i < length; i += 2) {
                            matchIndexes.push(i);
                        }
                        return matchIndexes;
                    }),
                    odd: createPositionalPseudo(function(matchIndexes, length) {
                        var i = 1;
                        for (;i < length; i += 2) {
                            matchIndexes.push(i);
                        }
                        return matchIndexes;
                    }),
                    lt: createPositionalPseudo(function(matchIndexes, length, argument) {
                        var i = argument < 0 ? argument + length : argument > length ? length : argument;
                        for (;--i >= 0; ) {
                            matchIndexes.push(i);
                        }
                        return matchIndexes;
                    }),
                    gt: createPositionalPseudo(function(matchIndexes, length, argument) {
                        var i = argument < 0 ? argument + length : argument;
                        for (;++i < length; ) {
                            matchIndexes.push(i);
                        }
                        return matchIndexes;
                    })
                }
            };
            Expr.pseudos["nth"] = Expr.pseudos["eq"];
            for (i in {
                radio: true,
                checkbox: true,
                file: true,
                password: true,
                image: true
            }) {
                Expr.pseudos[i] = createInputPseudo(i);
            }
            for (i in {
                submit: true,
                reset: true
            }) {
                Expr.pseudos[i] = createButtonPseudo(i);
            }
            function setFilters() {}
            setFilters.prototype = Expr.filters = Expr.pseudos;
            Expr.setFilters = new setFilters();
            tokenize = Sizzle.tokenize = function(selector, parseOnly) {
                var matched, match, tokens, type, soFar, groups, preFilters, cached = tokenCache[selector + " "];
                if (cached) {
                    return parseOnly ? 0 : cached.slice(0);
                }
                soFar = selector;
                groups = [];
                preFilters = Expr.preFilter;
                while (soFar) {
                    if (!matched || (match = rcomma.exec(soFar))) {
                        if (match) {
                            soFar = soFar.slice(match[0].length) || soFar;
                        }
                        groups.push(tokens = []);
                    }
                    matched = false;
                    if (match = rcombinators.exec(soFar)) {
                        matched = match.shift();
                        tokens.push({
                            value: matched,
                            type: match[0].replace(rtrim, " ")
                        });
                        soFar = soFar.slice(matched.length);
                    }
                    for (type in Expr.filter) {
                        if ((match = matchExpr[type].exec(soFar)) && (!preFilters[type] || (match = preFilters[type](match)))) {
                            matched = match.shift();
                            tokens.push({
                                value: matched,
                                type: type,
                                matches: match
                            });
                            soFar = soFar.slice(matched.length);
                        }
                    }
                    if (!matched) {
                        break;
                    }
                }
                return parseOnly ? soFar.length : soFar ? Sizzle.error(selector) : tokenCache(selector, groups).slice(0);
            };
            function toSelector(tokens) {
                var i = 0, len = tokens.length, selector = "";
                for (;i < len; i++) {
                    selector += tokens[i].value;
                }
                return selector;
            }
            function addCombinator(matcher, combinator, base) {
                var dir = combinator.dir, skip = combinator.next, key = skip || dir, checkNonElements = base && key === "parentNode", doneName = done++;
                return combinator.first ? function(elem, context, xml) {
                    while (elem = elem[dir]) {
                        if (elem.nodeType === 1 || checkNonElements) {
                            return matcher(elem, context, xml);
                        }
                    }
                    return false;
                } : function(elem, context, xml) {
                    var oldCache, uniqueCache, outerCache, newCache = [ dirruns, doneName ];
                    if (xml) {
                        while (elem = elem[dir]) {
                            if (elem.nodeType === 1 || checkNonElements) {
                                if (matcher(elem, context, xml)) {
                                    return true;
                                }
                            }
                        }
                    } else {
                        while (elem = elem[dir]) {
                            if (elem.nodeType === 1 || checkNonElements) {
                                outerCache = elem[expando] || (elem[expando] = {});
                                uniqueCache = outerCache[elem.uniqueID] || (outerCache[elem.uniqueID] = {});
                                if (skip && skip === elem.nodeName.toLowerCase()) {
                                    elem = elem[dir] || elem;
                                } else if ((oldCache = uniqueCache[key]) && oldCache[0] === dirruns && oldCache[1] === doneName) {
                                    return newCache[2] = oldCache[2];
                                } else {
                                    uniqueCache[key] = newCache;
                                    if (newCache[2] = matcher(elem, context, xml)) {
                                        return true;
                                    }
                                }
                            }
                        }
                    }
                    return false;
                };
            }
            function elementMatcher(matchers) {
                return matchers.length > 1 ? function(elem, context, xml) {
                    var i = matchers.length;
                    while (i--) {
                        if (!matchers[i](elem, context, xml)) {
                            return false;
                        }
                    }
                    return true;
                } : matchers[0];
            }
            function multipleContexts(selector, contexts, results) {
                var i = 0, len = contexts.length;
                for (;i < len; i++) {
                    Sizzle(selector, contexts[i], results);
                }
                return results;
            }
            function condense(unmatched, map, filter, context, xml) {
                var elem, newUnmatched = [], i = 0, len = unmatched.length, mapped = map != null;
                for (;i < len; i++) {
                    if (elem = unmatched[i]) {
                        if (!filter || filter(elem, context, xml)) {
                            newUnmatched.push(elem);
                            if (mapped) {
                                map.push(i);
                            }
                        }
                    }
                }
                return newUnmatched;
            }
            function setMatcher(preFilter, selector, matcher, postFilter, postFinder, postSelector) {
                if (postFilter && !postFilter[expando]) {
                    postFilter = setMatcher(postFilter);
                }
                if (postFinder && !postFinder[expando]) {
                    postFinder = setMatcher(postFinder, postSelector);
                }
                return markFunction(function(seed, results, context, xml) {
                    var temp, i, elem, preMap = [], postMap = [], preexisting = results.length, elems = seed || multipleContexts(selector || "*", context.nodeType ? [ context ] : context, []), matcherIn = preFilter && (seed || !selector) ? condense(elems, preMap, preFilter, context, xml) : elems, matcherOut = matcher ? postFinder || (seed ? preFilter : preexisting || postFilter) ? [] : results : matcherIn;
                    if (matcher) {
                        matcher(matcherIn, matcherOut, context, xml);
                    }
                    if (postFilter) {
                        temp = condense(matcherOut, postMap);
                        postFilter(temp, [], context, xml);
                        i = temp.length;
                        while (i--) {
                            if (elem = temp[i]) {
                                matcherOut[postMap[i]] = !(matcherIn[postMap[i]] = elem);
                            }
                        }
                    }
                    if (seed) {
                        if (postFinder || preFilter) {
                            if (postFinder) {
                                temp = [];
                                i = matcherOut.length;
                                while (i--) {
                                    if (elem = matcherOut[i]) {
                                        temp.push(matcherIn[i] = elem);
                                    }
                                }
                                postFinder(null, matcherOut = [], temp, xml);
                            }
                            i = matcherOut.length;
                            while (i--) {
                                if ((elem = matcherOut[i]) && (temp = postFinder ? indexOf(seed, elem) : preMap[i]) > -1) {
                                    seed[temp] = !(results[temp] = elem);
                                }
                            }
                        }
                    } else {
                        matcherOut = condense(matcherOut === results ? matcherOut.splice(preexisting, matcherOut.length) : matcherOut);
                        if (postFinder) {
                            postFinder(null, results, matcherOut, xml);
                        } else {
                            push.apply(results, matcherOut);
                        }
                    }
                });
            }
            function matcherFromTokens(tokens) {
                var checkContext, matcher, j, len = tokens.length, leadingRelative = Expr.relative[tokens[0].type], implicitRelative = leadingRelative || Expr.relative[" "], i = leadingRelative ? 1 : 0, matchContext = addCombinator(function(elem) {
                    return elem === checkContext;
                }, implicitRelative, true), matchAnyContext = addCombinator(function(elem) {
                    return indexOf(checkContext, elem) > -1;
                }, implicitRelative, true), matchers = [ function(elem, context, xml) {
                    var ret = !leadingRelative && (xml || context !== outermostContext) || ((checkContext = context).nodeType ? matchContext(elem, context, xml) : matchAnyContext(elem, context, xml));
                    checkContext = null;
                    return ret;
                } ];
                for (;i < len; i++) {
                    if (matcher = Expr.relative[tokens[i].type]) {
                        matchers = [ addCombinator(elementMatcher(matchers), matcher) ];
                    } else {
                        matcher = Expr.filter[tokens[i].type].apply(null, tokens[i].matches);
                        if (matcher[expando]) {
                            j = ++i;
                            for (;j < len; j++) {
                                if (Expr.relative[tokens[j].type]) {
                                    break;
                                }
                            }
                            return setMatcher(i > 1 && elementMatcher(matchers), i > 1 && toSelector(tokens.slice(0, i - 1).concat({
                                value: tokens[i - 2].type === " " ? "*" : ""
                            })).replace(rtrim, "$1"), matcher, i < j && matcherFromTokens(tokens.slice(i, j)), j < len && matcherFromTokens(tokens = tokens.slice(j)), j < len && toSelector(tokens));
                        }
                        matchers.push(matcher);
                    }
                }
                return elementMatcher(matchers);
            }
            function matcherFromGroupMatchers(elementMatchers, setMatchers) {
                var bySet = setMatchers.length > 0, byElement = elementMatchers.length > 0, superMatcher = function(seed, context, xml, results, outermost) {
                    var elem, j, matcher, matchedCount = 0, i = "0", unmatched = seed && [], setMatched = [], contextBackup = outermostContext, elems = seed || byElement && Expr.find["TAG"]("*", outermost), dirrunsUnique = dirruns += contextBackup == null ? 1 : Math.random() || .1, len = elems.length;
                    if (outermost) {
                        outermostContext = context === document || context || outermost;
                    }
                    for (;i !== len && (elem = elems[i]) != null; i++) {
                        if (byElement && elem) {
                            j = 0;
                            if (!context && elem.ownerDocument !== document) {
                                setDocument(elem);
                                xml = !documentIsHTML;
                            }
                            while (matcher = elementMatchers[j++]) {
                                if (matcher(elem, context || document, xml)) {
                                    results.push(elem);
                                    break;
                                }
                            }
                            if (outermost) {
                                dirruns = dirrunsUnique;
                            }
                        }
                        if (bySet) {
                            if (elem = !matcher && elem) {
                                matchedCount--;
                            }
                            if (seed) {
                                unmatched.push(elem);
                            }
                        }
                    }
                    matchedCount += i;
                    if (bySet && i !== matchedCount) {
                        j = 0;
                        while (matcher = setMatchers[j++]) {
                            matcher(unmatched, setMatched, context, xml);
                        }
                        if (seed) {
                            if (matchedCount > 0) {
                                while (i--) {
                                    if (!(unmatched[i] || setMatched[i])) {
                                        setMatched[i] = pop.call(results);
                                    }
                                }
                            }
                            setMatched = condense(setMatched);
                        }
                        push.apply(results, setMatched);
                        if (outermost && !seed && setMatched.length > 0 && matchedCount + setMatchers.length > 1) {
                            Sizzle.uniqueSort(results);
                        }
                    }
                    if (outermost) {
                        dirruns = dirrunsUnique;
                        outermostContext = contextBackup;
                    }
                    return unmatched;
                };
                return bySet ? markFunction(superMatcher) : superMatcher;
            }
            compile = Sizzle.compile = function(selector, match) {
                var i, setMatchers = [], elementMatchers = [], cached = compilerCache[selector + " "];
                if (!cached) {
                    if (!match) {
                        match = tokenize(selector);
                    }
                    i = match.length;
                    while (i--) {
                        cached = matcherFromTokens(match[i]);
                        if (cached[expando]) {
                            setMatchers.push(cached);
                        } else {
                            elementMatchers.push(cached);
                        }
                    }
                    cached = compilerCache(selector, matcherFromGroupMatchers(elementMatchers, setMatchers));
                    cached.selector = selector;
                }
                return cached;
            };
            select = Sizzle.select = function(selector, context, results, seed) {
                var i, tokens, token, type, find, compiled = typeof selector === "function" && selector, match = !seed && tokenize(selector = compiled.selector || selector);
                results = results || [];
                if (match.length === 1) {
                    tokens = match[0] = match[0].slice(0);
                    if (tokens.length > 2 && (token = tokens[0]).type === "ID" && context.nodeType === 9 && documentIsHTML && Expr.relative[tokens[1].type]) {
                        context = (Expr.find["ID"](token.matches[0].replace(runescape, funescape), context) || [])[0];
                        if (!context) {
                            return results;
                        } else if (compiled) {
                            context = context.parentNode;
                        }
                        selector = selector.slice(tokens.shift().value.length);
                    }
                    i = matchExpr["needsContext"].test(selector) ? 0 : tokens.length;
                    while (i--) {
                        token = tokens[i];
                        if (Expr.relative[type = token.type]) {
                            break;
                        }
                        if (find = Expr.find[type]) {
                            if (seed = find(token.matches[0].replace(runescape, funescape), rsibling.test(tokens[0].type) && testContext(context.parentNode) || context)) {
                                tokens.splice(i, 1);
                                selector = seed.length && toSelector(tokens);
                                if (!selector) {
                                    push.apply(results, seed);
                                    return results;
                                }
                                break;
                            }
                        }
                    }
                }
                (compiled || compile(selector, match))(seed, context, !documentIsHTML, results, !context || rsibling.test(selector) && testContext(context.parentNode) || context);
                return results;
            };
            support.sortStable = expando.split("").sort(sortOrder).join("") === expando;
            support.detectDuplicates = !!hasDuplicate;
            setDocument();
            support.sortDetached = assert(function(el) {
                return el.compareDocumentPosition(document.createElement("fieldset")) & 1;
            });
            if (!assert(function(el) {
                el.innerHTML = "<a href='#'></a>";
                return el.firstChild.getAttribute("href") === "#";
            })) {
                addHandle("type|href|height|width", function(elem, name, isXML) {
                    if (!isXML) {
                        return elem.getAttribute(name, name.toLowerCase() === "type" ? 1 : 2);
                    }
                });
            }
            if (!support.attributes || !assert(function(el) {
                el.innerHTML = "<input/>";
                el.firstChild.setAttribute("value", "");
                return el.firstChild.getAttribute("value") === "";
            })) {
                addHandle("value", function(elem, name, isXML) {
                    if (!isXML && elem.nodeName.toLowerCase() === "input") {
                        return elem.defaultValue;
                    }
                });
            }
            if (!assert(function(el) {
                return el.getAttribute("disabled") == null;
            })) {
                addHandle(booleans, function(elem, name, isXML) {
                    var val;
                    if (!isXML) {
                        return elem[name] === true ? name.toLowerCase() : (val = elem.getAttributeNode(name)) && val.specified ? val.value : null;
                    }
                });
            }
            return Sizzle;
        }(window);
        jQuery.find = Sizzle;
        jQuery.expr = Sizzle.selectors;
        jQuery.expr[":"] = jQuery.expr.pseudos;
        jQuery.uniqueSort = jQuery.unique = Sizzle.uniqueSort;
        jQuery.text = Sizzle.getText;
        jQuery.isXMLDoc = Sizzle.isXML;
        jQuery.contains = Sizzle.contains;
        jQuery.escapeSelector = Sizzle.escape;
        var dir = function(elem, dir, until) {
            var matched = [], truncate = until !== undefined;
            while ((elem = elem[dir]) && elem.nodeType !== 9) {
                if (elem.nodeType === 1) {
                    if (truncate && jQuery(elem).is(until)) {
                        break;
                    }
                    matched.push(elem);
                }
            }
            return matched;
        };
        var siblings = function(n, elem) {
            var matched = [];
            for (;n; n = n.nextSibling) {
                if (n.nodeType === 1 && n !== elem) {
                    matched.push(n);
                }
            }
            return matched;
        };
        var rneedsContext = jQuery.expr.match.needsContext;
        function nodeName(elem, name) {
            return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();
        }
        var rsingleTag = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
        function winnow(elements, qualifier, not) {
            if (isFunction(qualifier)) {
                return jQuery.grep(elements, function(elem, i) {
                    return !!qualifier.call(elem, i, elem) !== not;
                });
            }
            if (qualifier.nodeType) {
                return jQuery.grep(elements, function(elem) {
                    return elem === qualifier !== not;
                });
            }
            if (typeof qualifier !== "string") {
                return jQuery.grep(elements, function(elem) {
                    return indexOf.call(qualifier, elem) > -1 !== not;
                });
            }
            return jQuery.filter(qualifier, elements, not);
        }
        jQuery.filter = function(expr, elems, not) {
            var elem = elems[0];
            if (not) {
                expr = ":not(" + expr + ")";
            }
            if (elems.length === 1 && elem.nodeType === 1) {
                return jQuery.find.matchesSelector(elem, expr) ? [ elem ] : [];
            }
            return jQuery.find.matches(expr, jQuery.grep(elems, function(elem) {
                return elem.nodeType === 1;
            }));
        };
        jQuery.fn.extend({
            find: function(selector) {
                var i, ret, len = this.length, self = this;
                if (typeof selector !== "string") {
                    return this.pushStack(jQuery(selector).filter(function() {
                        for (i = 0; i < len; i++) {
                            if (jQuery.contains(self[i], this)) {
                                return true;
                            }
                        }
                    }));
                }
                ret = this.pushStack([]);
                for (i = 0; i < len; i++) {
                    jQuery.find(selector, self[i], ret);
                }
                return len > 1 ? jQuery.uniqueSort(ret) : ret;
            },
            filter: function(selector) {
                return this.pushStack(winnow(this, selector || [], false));
            },
            not: function(selector) {
                return this.pushStack(winnow(this, selector || [], true));
            },
            is: function(selector) {
                return !!winnow(this, typeof selector === "string" && rneedsContext.test(selector) ? jQuery(selector) : selector || [], false).length;
            }
        });
        var rootjQuery, rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/, init = jQuery.fn.init = function(selector, context, root) {
            var match, elem;
            if (!selector) {
                return this;
            }
            root = root || rootjQuery;
            if (typeof selector === "string") {
                if (selector[0] === "<" && selector[selector.length - 1] === ">" && selector.length >= 3) {
                    match = [ null, selector, null ];
                } else {
                    match = rquickExpr.exec(selector);
                }
                if (match && (match[1] || !context)) {
                    if (match[1]) {
                        context = context instanceof jQuery ? context[0] : context;
                        jQuery.merge(this, jQuery.parseHTML(match[1], context && context.nodeType ? context.ownerDocument || context : document, true));
                        if (rsingleTag.test(match[1]) && jQuery.isPlainObject(context)) {
                            for (match in context) {
                                if (isFunction(this[match])) {
                                    this[match](context[match]);
                                } else {
                                    this.attr(match, context[match]);
                                }
                            }
                        }
                        return this;
                    } else {
                        elem = document.getElementById(match[2]);
                        if (elem) {
                            this[0] = elem;
                            this.length = 1;
                        }
                        return this;
                    }
                } else if (!context || context.jquery) {
                    return (context || root).find(selector);
                } else {
                    return this.constructor(context).find(selector);
                }
            } else if (selector.nodeType) {
                this[0] = selector;
                this.length = 1;
                return this;
            } else if (isFunction(selector)) {
                return root.ready !== undefined ? root.ready(selector) : selector(jQuery);
            }
            return jQuery.makeArray(selector, this);
        };
        init.prototype = jQuery.fn;
        rootjQuery = jQuery(document);
        var rparentsprev = /^(?:parents|prev(?:Until|All))/, guaranteedUnique = {
            children: true,
            contents: true,
            next: true,
            prev: true
        };
        jQuery.fn.extend({
            has: function(target) {
                var targets = jQuery(target, this), l = targets.length;
                return this.filter(function() {
                    var i = 0;
                    for (;i < l; i++) {
                        if (jQuery.contains(this, targets[i])) {
                            return true;
                        }
                    }
                });
            },
            closest: function(selectors, context) {
                var cur, i = 0, l = this.length, matched = [], targets = typeof selectors !== "string" && jQuery(selectors);
                if (!rneedsContext.test(selectors)) {
                    for (;i < l; i++) {
                        for (cur = this[i]; cur && cur !== context; cur = cur.parentNode) {
                            if (cur.nodeType < 11 && (targets ? targets.index(cur) > -1 : cur.nodeType === 1 && jQuery.find.matchesSelector(cur, selectors))) {
                                matched.push(cur);
                                break;
                            }
                        }
                    }
                }
                return this.pushStack(matched.length > 1 ? jQuery.uniqueSort(matched) : matched);
            },
            index: function(elem) {
                if (!elem) {
                    return this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
                }
                if (typeof elem === "string") {
                    return indexOf.call(jQuery(elem), this[0]);
                }
                return indexOf.call(this, elem.jquery ? elem[0] : elem);
            },
            add: function(selector, context) {
                return this.pushStack(jQuery.uniqueSort(jQuery.merge(this.get(), jQuery(selector, context))));
            },
            addBack: function(selector) {
                return this.add(selector == null ? this.prevObject : this.prevObject.filter(selector));
            }
        });
        function sibling(cur, dir) {
            while ((cur = cur[dir]) && cur.nodeType !== 1) {}
            return cur;
        }
        jQuery.each({
            parent: function(elem) {
                var parent = elem.parentNode;
                return parent && parent.nodeType !== 11 ? parent : null;
            },
            parents: function(elem) {
                return dir(elem, "parentNode");
            },
            parentsUntil: function(elem, i, until) {
                return dir(elem, "parentNode", until);
            },
            next: function(elem) {
                return sibling(elem, "nextSibling");
            },
            prev: function(elem) {
                return sibling(elem, "previousSibling");
            },
            nextAll: function(elem) {
                return dir(elem, "nextSibling");
            },
            prevAll: function(elem) {
                return dir(elem, "previousSibling");
            },
            nextUntil: function(elem, i, until) {
                return dir(elem, "nextSibling", until);
            },
            prevUntil: function(elem, i, until) {
                return dir(elem, "previousSibling", until);
            },
            siblings: function(elem) {
                return siblings((elem.parentNode || {}).firstChild, elem);
            },
            children: function(elem) {
                return siblings(elem.firstChild);
            },
            contents: function(elem) {
                if (typeof elem.contentDocument !== "undefined") {
                    return elem.contentDocument;
                }
                if (nodeName(elem, "template")) {
                    elem = elem.content || elem;
                }
                return jQuery.merge([], elem.childNodes);
            }
        }, function(name, fn) {
            jQuery.fn[name] = function(until, selector) {
                var matched = jQuery.map(this, fn, until);
                if (name.slice(-5) !== "Until") {
                    selector = until;
                }
                if (selector && typeof selector === "string") {
                    matched = jQuery.filter(selector, matched);
                }
                if (this.length > 1) {
                    if (!guaranteedUnique[name]) {
                        jQuery.uniqueSort(matched);
                    }
                    if (rparentsprev.test(name)) {
                        matched.reverse();
                    }
                }
                return this.pushStack(matched);
            };
        });
        var rnothtmlwhite = /[^\x20\t\r\n\f]+/g;
        function createOptions(options) {
            var object = {};
            jQuery.each(options.match(rnothtmlwhite) || [], function(_, flag) {
                object[flag] = true;
            });
            return object;
        }
        jQuery.Callbacks = function(options) {
            options = typeof options === "string" ? createOptions(options) : jQuery.extend({}, options);
            var firing, memory, fired, locked, list = [], queue = [], firingIndex = -1, fire = function() {
                locked = locked || options.once;
                fired = firing = true;
                for (;queue.length; firingIndex = -1) {
                    memory = queue.shift();
                    while (++firingIndex < list.length) {
                        if (list[firingIndex].apply(memory[0], memory[1]) === false && options.stopOnFalse) {
                            firingIndex = list.length;
                            memory = false;
                        }
                    }
                }
                if (!options.memory) {
                    memory = false;
                }
                firing = false;
                if (locked) {
                    if (memory) {
                        list = [];
                    } else {
                        list = "";
                    }
                }
            }, self = {
                add: function() {
                    if (list) {
                        if (memory && !firing) {
                            firingIndex = list.length - 1;
                            queue.push(memory);
                        }
                        (function add(args) {
                            jQuery.each(args, function(_, arg) {
                                if (isFunction(arg)) {
                                    if (!options.unique || !self.has(arg)) {
                                        list.push(arg);
                                    }
                                } else if (arg && arg.length && toType(arg) !== "string") {
                                    add(arg);
                                }
                            });
                        })(arguments);
                        if (memory && !firing) {
                            fire();
                        }
                    }
                    return this;
                },
                remove: function() {
                    jQuery.each(arguments, function(_, arg) {
                        var index;
                        while ((index = jQuery.inArray(arg, list, index)) > -1) {
                            list.splice(index, 1);
                            if (index <= firingIndex) {
                                firingIndex--;
                            }
                        }
                    });
                    return this;
                },
                has: function(fn) {
                    return fn ? jQuery.inArray(fn, list) > -1 : list.length > 0;
                },
                empty: function() {
                    if (list) {
                        list = [];
                    }
                    return this;
                },
                disable: function() {
                    locked = queue = [];
                    list = memory = "";
                    return this;
                },
                disabled: function() {
                    return !list;
                },
                lock: function() {
                    locked = queue = [];
                    if (!memory && !firing) {
                        list = memory = "";
                    }
                    return this;
                },
                locked: function() {
                    return !!locked;
                },
                fireWith: function(context, args) {
                    if (!locked) {
                        args = args || [];
                        args = [ context, args.slice ? args.slice() : args ];
                        queue.push(args);
                        if (!firing) {
                            fire();
                        }
                    }
                    return this;
                },
                fire: function() {
                    self.fireWith(this, arguments);
                    return this;
                },
                fired: function() {
                    return !!fired;
                }
            };
            return self;
        };
        function Identity(v) {
            return v;
        }
        function Thrower(ex) {
            throw ex;
        }
        function adoptValue(value, resolve, reject, noValue) {
            var method;
            try {
                if (value && isFunction(method = value.promise)) {
                    method.call(value).done(resolve).fail(reject);
                } else if (value && isFunction(method = value.then)) {
                    method.call(value, resolve, reject);
                } else {
                    resolve.apply(undefined, [ value ].slice(noValue));
                }
            } catch (value) {
                reject.apply(undefined, [ value ]);
            }
        }
        jQuery.extend({
            Deferred: function(func) {
                var tuples = [ [ "notify", "progress", jQuery.Callbacks("memory"), jQuery.Callbacks("memory"), 2 ], [ "resolve", "done", jQuery.Callbacks("once memory"), jQuery.Callbacks("once memory"), 0, "resolved" ], [ "reject", "fail", jQuery.Callbacks("once memory"), jQuery.Callbacks("once memory"), 1, "rejected" ] ], state = "pending", promise = {
                    state: function() {
                        return state;
                    },
                    always: function() {
                        deferred.done(arguments).fail(arguments);
                        return this;
                    },
                    catch: function(fn) {
                        return promise.then(null, fn);
                    },
                    pipe: function() {
                        var fns = arguments;
                        return jQuery.Deferred(function(newDefer) {
                            jQuery.each(tuples, function(i, tuple) {
                                var fn = isFunction(fns[tuple[4]]) && fns[tuple[4]];
                                deferred[tuple[1]](function() {
                                    var returned = fn && fn.apply(this, arguments);
                                    if (returned && isFunction(returned.promise)) {
                                        returned.promise().progress(newDefer.notify).done(newDefer.resolve).fail(newDefer.reject);
                                    } else {
                                        newDefer[tuple[0] + "With"](this, fn ? [ returned ] : arguments);
                                    }
                                });
                            });
                            fns = null;
                        }).promise();
                    },
                    then: function(onFulfilled, onRejected, onProgress) {
                        var maxDepth = 0;
                        function resolve(depth, deferred, handler, special) {
                            return function() {
                                var that = this, args = arguments, mightThrow = function() {
                                    var returned, then;
                                    if (depth < maxDepth) {
                                        return;
                                    }
                                    returned = handler.apply(that, args);
                                    if (returned === deferred.promise()) {
                                        throw new TypeError("Thenable self-resolution");
                                    }
                                    then = returned && (typeof returned === "object" || typeof returned === "function") && returned.then;
                                    if (isFunction(then)) {
                                        if (special) {
                                            then.call(returned, resolve(maxDepth, deferred, Identity, special), resolve(maxDepth, deferred, Thrower, special));
                                        } else {
                                            maxDepth++;
                                            then.call(returned, resolve(maxDepth, deferred, Identity, special), resolve(maxDepth, deferred, Thrower, special), resolve(maxDepth, deferred, Identity, deferred.notifyWith));
                                        }
                                    } else {
                                        if (handler !== Identity) {
                                            that = undefined;
                                            args = [ returned ];
                                        }
                                        (special || deferred.resolveWith)(that, args);
                                    }
                                }, process = special ? mightThrow : function() {
                                    try {
                                        mightThrow();
                                    } catch (e) {
                                        if (jQuery.Deferred.exceptionHook) {
                                            jQuery.Deferred.exceptionHook(e, process.stackTrace);
                                        }
                                        if (depth + 1 >= maxDepth) {
                                            if (handler !== Thrower) {
                                                that = undefined;
                                                args = [ e ];
                                            }
                                            deferred.rejectWith(that, args);
                                        }
                                    }
                                };
                                if (depth) {
                                    process();
                                } else {
                                    if (jQuery.Deferred.getStackHook) {
                                        process.stackTrace = jQuery.Deferred.getStackHook();
                                    }
                                    window.setTimeout(process);
                                }
                            };
                        }
                        return jQuery.Deferred(function(newDefer) {
                            tuples[0][3].add(resolve(0, newDefer, isFunction(onProgress) ? onProgress : Identity, newDefer.notifyWith));
                            tuples[1][3].add(resolve(0, newDefer, isFunction(onFulfilled) ? onFulfilled : Identity));
                            tuples[2][3].add(resolve(0, newDefer, isFunction(onRejected) ? onRejected : Thrower));
                        }).promise();
                    },
                    promise: function(obj) {
                        return obj != null ? jQuery.extend(obj, promise) : promise;
                    }
                }, deferred = {};
                jQuery.each(tuples, function(i, tuple) {
                    var list = tuple[2], stateString = tuple[5];
                    promise[tuple[1]] = list.add;
                    if (stateString) {
                        list.add(function() {
                            state = stateString;
                        }, tuples[3 - i][2].disable, tuples[3 - i][3].disable, tuples[0][2].lock, tuples[0][3].lock);
                    }
                    list.add(tuple[3].fire);
                    deferred[tuple[0]] = function() {
                        deferred[tuple[0] + "With"](this === deferred ? undefined : this, arguments);
                        return this;
                    };
                    deferred[tuple[0] + "With"] = list.fireWith;
                });
                promise.promise(deferred);
                if (func) {
                    func.call(deferred, deferred);
                }
                return deferred;
            },
            when: function(singleValue) {
                var remaining = arguments.length, i = remaining, resolveContexts = Array(i), resolveValues = slice.call(arguments), master = jQuery.Deferred(), updateFunc = function(i) {
                    return function(value) {
                        resolveContexts[i] = this;
                        resolveValues[i] = arguments.length > 1 ? slice.call(arguments) : value;
                        if (!--remaining) {
                            master.resolveWith(resolveContexts, resolveValues);
                        }
                    };
                };
                if (remaining <= 1) {
                    adoptValue(singleValue, master.done(updateFunc(i)).resolve, master.reject, !remaining);
                    if (master.state() === "pending" || isFunction(resolveValues[i] && resolveValues[i].then)) {
                        return master.then();
                    }
                }
                while (i--) {
                    adoptValue(resolveValues[i], updateFunc(i), master.reject);
                }
                return master.promise();
            }
        });
        var rerrorNames = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
        jQuery.Deferred.exceptionHook = function(error, stack) {
            if (window.console && window.console.warn && error && rerrorNames.test(error.name)) {
                window.console.warn("jQuery.Deferred exception: " + error.message, error.stack, stack);
            }
        };
        jQuery.readyException = function(error) {
            window.setTimeout(function() {
                throw error;
            });
        };
        var readyList = jQuery.Deferred();
        jQuery.fn.ready = function(fn) {
            readyList.then(fn).catch(function(error) {
                jQuery.readyException(error);
            });
            return this;
        };
        jQuery.extend({
            isReady: false,
            readyWait: 1,
            ready: function(wait) {
                if (wait === true ? --jQuery.readyWait : jQuery.isReady) {
                    return;
                }
                jQuery.isReady = true;
                if (wait !== true && --jQuery.readyWait > 0) {
                    return;
                }
                readyList.resolveWith(document, [ jQuery ]);
            }
        });
        jQuery.ready.then = readyList.then;
        function completed() {
            document.removeEventListener("DOMContentLoaded", completed);
            window.removeEventListener("load", completed);
            jQuery.ready();
        }
        if (document.readyState === "complete" || document.readyState !== "loading" && !document.documentElement.doScroll) {
            window.setTimeout(jQuery.ready);
        } else {
            document.addEventListener("DOMContentLoaded", completed);
            window.addEventListener("load", completed);
        }
        var access = function(elems, fn, key, value, chainable, emptyGet, raw) {
            var i = 0, len = elems.length, bulk = key == null;
            if (toType(key) === "object") {
                chainable = true;
                for (i in key) {
                    access(elems, fn, i, key[i], true, emptyGet, raw);
                }
            } else if (value !== undefined) {
                chainable = true;
                if (!isFunction(value)) {
                    raw = true;
                }
                if (bulk) {
                    if (raw) {
                        fn.call(elems, value);
                        fn = null;
                    } else {
                        bulk = fn;
                        fn = function(elem, key, value) {
                            return bulk.call(jQuery(elem), value);
                        };
                    }
                }
                if (fn) {
                    for (;i < len; i++) {
                        fn(elems[i], key, raw ? value : value.call(elems[i], i, fn(elems[i], key)));
                    }
                }
            }
            if (chainable) {
                return elems;
            }
            if (bulk) {
                return fn.call(elems);
            }
            return len ? fn(elems[0], key) : emptyGet;
        };
        var rmsPrefix = /^-ms-/, rdashAlpha = /-([a-z])/g;
        function fcamelCase(all, letter) {
            return letter.toUpperCase();
        }
        function camelCase(string) {
            return string.replace(rmsPrefix, "ms-").replace(rdashAlpha, fcamelCase);
        }
        var acceptData = function(owner) {
            return owner.nodeType === 1 || owner.nodeType === 9 || !+owner.nodeType;
        };
        function Data() {
            this.expando = jQuery.expando + Data.uid++;
        }
        Data.uid = 1;
        Data.prototype = {
            cache: function(owner) {
                var value = owner[this.expando];
                if (!value) {
                    value = {};
                    if (acceptData(owner)) {
                        if (owner.nodeType) {
                            owner[this.expando] = value;
                        } else {
                            Object.defineProperty(owner, this.expando, {
                                value: value,
                                configurable: true
                            });
                        }
                    }
                }
                return value;
            },
            set: function(owner, data, value) {
                var prop, cache = this.cache(owner);
                if (typeof data === "string") {
                    cache[camelCase(data)] = value;
                } else {
                    for (prop in data) {
                        cache[camelCase(prop)] = data[prop];
                    }
                }
                return cache;
            },
            get: function(owner, key) {
                return key === undefined ? this.cache(owner) : owner[this.expando] && owner[this.expando][camelCase(key)];
            },
            access: function(owner, key, value) {
                if (key === undefined || key && typeof key === "string" && value === undefined) {
                    return this.get(owner, key);
                }
                this.set(owner, key, value);
                return value !== undefined ? value : key;
            },
            remove: function(owner, key) {
                var i, cache = owner[this.expando];
                if (cache === undefined) {
                    return;
                }
                if (key !== undefined) {
                    if (Array.isArray(key)) {
                        key = key.map(camelCase);
                    } else {
                        key = camelCase(key);
                        key = key in cache ? [ key ] : key.match(rnothtmlwhite) || [];
                    }
                    i = key.length;
                    while (i--) {
                        delete cache[key[i]];
                    }
                }
                if (key === undefined || jQuery.isEmptyObject(cache)) {
                    if (owner.nodeType) {
                        owner[this.expando] = undefined;
                    } else {
                        delete owner[this.expando];
                    }
                }
            },
            hasData: function(owner) {
                var cache = owner[this.expando];
                return cache !== undefined && !jQuery.isEmptyObject(cache);
            }
        };
        var dataPriv = new Data();
        var dataUser = new Data();
        var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, rmultiDash = /[A-Z]/g;
        function getData(data) {
            if (data === "true") {
                return true;
            }
            if (data === "false") {
                return false;
            }
            if (data === "null") {
                return null;
            }
            if (data === +data + "") {
                return +data;
            }
            if (rbrace.test(data)) {
                return JSON.parse(data);
            }
            return data;
        }
        function dataAttr(elem, key, data) {
            var name;
            if (data === undefined && elem.nodeType === 1) {
                name = "data-" + key.replace(rmultiDash, "-$&").toLowerCase();
                data = elem.getAttribute(name);
                if (typeof data === "string") {
                    try {
                        data = getData(data);
                    } catch (e) {}
                    dataUser.set(elem, key, data);
                } else {
                    data = undefined;
                }
            }
            return data;
        }
        jQuery.extend({
            hasData: function(elem) {
                return dataUser.hasData(elem) || dataPriv.hasData(elem);
            },
            data: function(elem, name, data) {
                return dataUser.access(elem, name, data);
            },
            removeData: function(elem, name) {
                dataUser.remove(elem, name);
            },
            _data: function(elem, name, data) {
                return dataPriv.access(elem, name, data);
            },
            _removeData: function(elem, name) {
                dataPriv.remove(elem, name);
            }
        });
        jQuery.fn.extend({
            data: function(key, value) {
                var i, name, data, elem = this[0], attrs = elem && elem.attributes;
                if (key === undefined) {
                    if (this.length) {
                        data = dataUser.get(elem);
                        if (elem.nodeType === 1 && !dataPriv.get(elem, "hasDataAttrs")) {
                            i = attrs.length;
                            while (i--) {
                                if (attrs[i]) {
                                    name = attrs[i].name;
                                    if (name.indexOf("data-") === 0) {
                                        name = camelCase(name.slice(5));
                                        dataAttr(elem, name, data[name]);
                                    }
                                }
                            }
                            dataPriv.set(elem, "hasDataAttrs", true);
                        }
                    }
                    return data;
                }
                if (typeof key === "object") {
                    return this.each(function() {
                        dataUser.set(this, key);
                    });
                }
                return access(this, function(value) {
                    var data;
                    if (elem && value === undefined) {
                        data = dataUser.get(elem, key);
                        if (data !== undefined) {
                            return data;
                        }
                        data = dataAttr(elem, key);
                        if (data !== undefined) {
                            return data;
                        }
                        return;
                    }
                    this.each(function() {
                        dataUser.set(this, key, value);
                    });
                }, null, value, arguments.length > 1, null, true);
            },
            removeData: function(key) {
                return this.each(function() {
                    dataUser.remove(this, key);
                });
            }
        });
        jQuery.extend({
            queue: function(elem, type, data) {
                var queue;
                if (elem) {
                    type = (type || "fx") + "queue";
                    queue = dataPriv.get(elem, type);
                    if (data) {
                        if (!queue || Array.isArray(data)) {
                            queue = dataPriv.access(elem, type, jQuery.makeArray(data));
                        } else {
                            queue.push(data);
                        }
                    }
                    return queue || [];
                }
            },
            dequeue: function(elem, type) {
                type = type || "fx";
                var queue = jQuery.queue(elem, type), startLength = queue.length, fn = queue.shift(), hooks = jQuery._queueHooks(elem, type), next = function() {
                    jQuery.dequeue(elem, type);
                };
                if (fn === "inprogress") {
                    fn = queue.shift();
                    startLength--;
                }
                if (fn) {
                    if (type === "fx") {
                        queue.unshift("inprogress");
                    }
                    delete hooks.stop;
                    fn.call(elem, next, hooks);
                }
                if (!startLength && hooks) {
                    hooks.empty.fire();
                }
            },
            _queueHooks: function(elem, type) {
                var key = type + "queueHooks";
                return dataPriv.get(elem, key) || dataPriv.access(elem, key, {
                    empty: jQuery.Callbacks("once memory").add(function() {
                        dataPriv.remove(elem, [ type + "queue", key ]);
                    })
                });
            }
        });
        jQuery.fn.extend({
            queue: function(type, data) {
                var setter = 2;
                if (typeof type !== "string") {
                    data = type;
                    type = "fx";
                    setter--;
                }
                if (arguments.length < setter) {
                    return jQuery.queue(this[0], type);
                }
                return data === undefined ? this : this.each(function() {
                    var queue = jQuery.queue(this, type, data);
                    jQuery._queueHooks(this, type);
                    if (type === "fx" && queue[0] !== "inprogress") {
                        jQuery.dequeue(this, type);
                    }
                });
            },
            dequeue: function(type) {
                return this.each(function() {
                    jQuery.dequeue(this, type);
                });
            },
            clearQueue: function(type) {
                return this.queue(type || "fx", []);
            },
            promise: function(type, obj) {
                var tmp, count = 1, defer = jQuery.Deferred(), elements = this, i = this.length, resolve = function() {
                    if (!--count) {
                        defer.resolveWith(elements, [ elements ]);
                    }
                };
                if (typeof type !== "string") {
                    obj = type;
                    type = undefined;
                }
                type = type || "fx";
                while (i--) {
                    tmp = dataPriv.get(elements[i], type + "queueHooks");
                    if (tmp && tmp.empty) {
                        count++;
                        tmp.empty.add(resolve);
                    }
                }
                resolve();
                return defer.promise(obj);
            }
        });
        var pnum = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source;
        var rcssNum = new RegExp("^(?:([+-])=|)(" + pnum + ")([a-z%]*)$", "i");
        var cssExpand = [ "Top", "Right", "Bottom", "Left" ];
        var documentElement = document.documentElement;
        var isAttached = function(elem) {
            return jQuery.contains(elem.ownerDocument, elem);
        }, composed = {
            composed: true
        };
        if (documentElement.attachShadow) {
            isAttached = function(elem) {
                return jQuery.contains(elem.ownerDocument, elem) || elem.getRootNode(composed) === elem.ownerDocument;
            };
        }
        var isHiddenWithinTree = function(elem, el) {
            elem = el || elem;
            return elem.style.display === "none" || elem.style.display === "" && isAttached(elem) && jQuery.css(elem, "display") === "none";
        };
        var swap = function(elem, options, callback, args) {
            var ret, name, old = {};
            for (name in options) {
                old[name] = elem.style[name];
                elem.style[name] = options[name];
            }
            ret = callback.apply(elem, args || []);
            for (name in options) {
                elem.style[name] = old[name];
            }
            return ret;
        };
        function adjustCSS(elem, prop, valueParts, tween) {
            var adjusted, scale, maxIterations = 20, currentValue = tween ? function() {
                return tween.cur();
            } : function() {
                return jQuery.css(elem, prop, "");
            }, initial = currentValue(), unit = valueParts && valueParts[3] || (jQuery.cssNumber[prop] ? "" : "px"), initialInUnit = elem.nodeType && (jQuery.cssNumber[prop] || unit !== "px" && +initial) && rcssNum.exec(jQuery.css(elem, prop));
            if (initialInUnit && initialInUnit[3] !== unit) {
                initial = initial / 2;
                unit = unit || initialInUnit[3];
                initialInUnit = +initial || 1;
                while (maxIterations--) {
                    jQuery.style(elem, prop, initialInUnit + unit);
                    if ((1 - scale) * (1 - (scale = currentValue() / initial || .5)) <= 0) {
                        maxIterations = 0;
                    }
                    initialInUnit = initialInUnit / scale;
                }
                initialInUnit = initialInUnit * 2;
                jQuery.style(elem, prop, initialInUnit + unit);
                valueParts = valueParts || [];
            }
            if (valueParts) {
                initialInUnit = +initialInUnit || +initial || 0;
                adjusted = valueParts[1] ? initialInUnit + (valueParts[1] + 1) * valueParts[2] : +valueParts[2];
                if (tween) {
                    tween.unit = unit;
                    tween.start = initialInUnit;
                    tween.end = adjusted;
                }
            }
            return adjusted;
        }
        var defaultDisplayMap = {};
        function getDefaultDisplay(elem) {
            var temp, doc = elem.ownerDocument, nodeName = elem.nodeName, display = defaultDisplayMap[nodeName];
            if (display) {
                return display;
            }
            temp = doc.body.appendChild(doc.createElement(nodeName));
            display = jQuery.css(temp, "display");
            temp.parentNode.removeChild(temp);
            if (display === "none") {
                display = "block";
            }
            defaultDisplayMap[nodeName] = display;
            return display;
        }
        function showHide(elements, show) {
            var display, elem, values = [], index = 0, length = elements.length;
            for (;index < length; index++) {
                elem = elements[index];
                if (!elem.style) {
                    continue;
                }
                display = elem.style.display;
                if (show) {
                    if (display === "none") {
                        values[index] = dataPriv.get(elem, "display") || null;
                        if (!values[index]) {
                            elem.style.display = "";
                        }
                    }
                    if (elem.style.display === "" && isHiddenWithinTree(elem)) {
                        values[index] = getDefaultDisplay(elem);
                    }
                } else {
                    if (display !== "none") {
                        values[index] = "none";
                        dataPriv.set(elem, "display", display);
                    }
                }
            }
            for (index = 0; index < length; index++) {
                if (values[index] != null) {
                    elements[index].style.display = values[index];
                }
            }
            return elements;
        }
        jQuery.fn.extend({
            show: function() {
                return showHide(this, true);
            },
            hide: function() {
                return showHide(this);
            },
            toggle: function(state) {
                if (typeof state === "boolean") {
                    return state ? this.show() : this.hide();
                }
                return this.each(function() {
                    if (isHiddenWithinTree(this)) {
                        jQuery(this).show();
                    } else {
                        jQuery(this).hide();
                    }
                });
            }
        });
        var rcheckableType = /^(?:checkbox|radio)$/i;
        var rtagName = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i;
        var rscriptType = /^$|^module$|\/(?:java|ecma)script/i;
        var wrapMap = {
            option: [ 1, "<select multiple='multiple'>", "</select>" ],
            thead: [ 1, "<table>", "</table>" ],
            col: [ 2, "<table><colgroup>", "</colgroup></table>" ],
            tr: [ 2, "<table><tbody>", "</tbody></table>" ],
            td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],
            _default: [ 0, "", "" ]
        };
        wrapMap.optgroup = wrapMap.option;
        wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
        wrapMap.th = wrapMap.td;
        function getAll(context, tag) {
            var ret;
            if (typeof context.getElementsByTagName !== "undefined") {
                ret = context.getElementsByTagName(tag || "*");
            } else if (typeof context.querySelectorAll !== "undefined") {
                ret = context.querySelectorAll(tag || "*");
            } else {
                ret = [];
            }
            if (tag === undefined || tag && nodeName(context, tag)) {
                return jQuery.merge([ context ], ret);
            }
            return ret;
        }
        function setGlobalEval(elems, refElements) {
            var i = 0, l = elems.length;
            for (;i < l; i++) {
                dataPriv.set(elems[i], "globalEval", !refElements || dataPriv.get(refElements[i], "globalEval"));
            }
        }
        var rhtml = /<|&#?\w+;/;
        function buildFragment(elems, context, scripts, selection, ignored) {
            var elem, tmp, tag, wrap, attached, j, fragment = context.createDocumentFragment(), nodes = [], i = 0, l = elems.length;
            for (;i < l; i++) {
                elem = elems[i];
                if (elem || elem === 0) {
                    if (toType(elem) === "object") {
                        jQuery.merge(nodes, elem.nodeType ? [ elem ] : elem);
                    } else if (!rhtml.test(elem)) {
                        nodes.push(context.createTextNode(elem));
                    } else {
                        tmp = tmp || fragment.appendChild(context.createElement("div"));
                        tag = (rtagName.exec(elem) || [ "", "" ])[1].toLowerCase();
                        wrap = wrapMap[tag] || wrapMap._default;
                        tmp.innerHTML = wrap[1] + jQuery.htmlPrefilter(elem) + wrap[2];
                        j = wrap[0];
                        while (j--) {
                            tmp = tmp.lastChild;
                        }
                        jQuery.merge(nodes, tmp.childNodes);
                        tmp = fragment.firstChild;
                        tmp.textContent = "";
                    }
                }
            }
            fragment.textContent = "";
            i = 0;
            while (elem = nodes[i++]) {
                if (selection && jQuery.inArray(elem, selection) > -1) {
                    if (ignored) {
                        ignored.push(elem);
                    }
                    continue;
                }
                attached = isAttached(elem);
                tmp = getAll(fragment.appendChild(elem), "script");
                if (attached) {
                    setGlobalEval(tmp);
                }
                if (scripts) {
                    j = 0;
                    while (elem = tmp[j++]) {
                        if (rscriptType.test(elem.type || "")) {
                            scripts.push(elem);
                        }
                    }
                }
            }
            return fragment;
        }
        (function() {
            var fragment = document.createDocumentFragment(), div = fragment.appendChild(document.createElement("div")), input = document.createElement("input");
            input.setAttribute("type", "radio");
            input.setAttribute("checked", "checked");
            input.setAttribute("name", "t");
            div.appendChild(input);
            support.checkClone = div.cloneNode(true).cloneNode(true).lastChild.checked;
            div.innerHTML = "<textarea>x</textarea>";
            support.noCloneChecked = !!div.cloneNode(true).lastChild.defaultValue;
        })();
        var rkeyEvent = /^key/, rmouseEvent = /^(?:mouse|pointer|contextmenu|drag|drop)|click/, rtypenamespace = /^([^.]*)(?:\.(.+)|)/;
        function returnTrue() {
            return true;
        }
        function returnFalse() {
            return false;
        }
        function expectSync(elem, type) {
            return elem === safeActiveElement() === (type === "focus");
        }
        function safeActiveElement() {
            try {
                return document.activeElement;
            } catch (err) {}
        }
        function on(elem, types, selector, data, fn, one) {
            var origFn, type;
            if (typeof types === "object") {
                if (typeof selector !== "string") {
                    data = data || selector;
                    selector = undefined;
                }
                for (type in types) {
                    on(elem, type, selector, data, types[type], one);
                }
                return elem;
            }
            if (data == null && fn == null) {
                fn = selector;
                data = selector = undefined;
            } else if (fn == null) {
                if (typeof selector === "string") {
                    fn = data;
                    data = undefined;
                } else {
                    fn = data;
                    data = selector;
                    selector = undefined;
                }
            }
            if (fn === false) {
                fn = returnFalse;
            } else if (!fn) {
                return elem;
            }
            if (one === 1) {
                origFn = fn;
                fn = function(event) {
                    jQuery().off(event);
                    return origFn.apply(this, arguments);
                };
                fn.guid = origFn.guid || (origFn.guid = jQuery.guid++);
            }
            return elem.each(function() {
                jQuery.event.add(this, types, fn, data, selector);
            });
        }
        jQuery.event = {
            global: {},
            add: function(elem, types, handler, data, selector) {
                var handleObjIn, eventHandle, tmp, events, t, handleObj, special, handlers, type, namespaces, origType, elemData = dataPriv.get(elem);
                if (!elemData) {
                    return;
                }
                if (handler.handler) {
                    handleObjIn = handler;
                    handler = handleObjIn.handler;
                    selector = handleObjIn.selector;
                }
                if (selector) {
                    jQuery.find.matchesSelector(documentElement, selector);
                }
                if (!handler.guid) {
                    handler.guid = jQuery.guid++;
                }
                if (!(events = elemData.events)) {
                    events = elemData.events = {};
                }
                if (!(eventHandle = elemData.handle)) {
                    eventHandle = elemData.handle = function(e) {
                        return typeof jQuery !== "undefined" && jQuery.event.triggered !== e.type ? jQuery.event.dispatch.apply(elem, arguments) : undefined;
                    };
                }
                types = (types || "").match(rnothtmlwhite) || [ "" ];
                t = types.length;
                while (t--) {
                    tmp = rtypenamespace.exec(types[t]) || [];
                    type = origType = tmp[1];
                    namespaces = (tmp[2] || "").split(".").sort();
                    if (!type) {
                        continue;
                    }
                    special = jQuery.event.special[type] || {};
                    type = (selector ? special.delegateType : special.bindType) || type;
                    special = jQuery.event.special[type] || {};
                    handleObj = jQuery.extend({
                        type: type,
                        origType: origType,
                        data: data,
                        handler: handler,
                        guid: handler.guid,
                        selector: selector,
                        needsContext: selector && jQuery.expr.match.needsContext.test(selector),
                        namespace: namespaces.join(".")
                    }, handleObjIn);
                    if (!(handlers = events[type])) {
                        handlers = events[type] = [];
                        handlers.delegateCount = 0;
                        if (!special.setup || special.setup.call(elem, data, namespaces, eventHandle) === false) {
                            if (elem.addEventListener) {
                                elem.addEventListener(type, eventHandle);
                            }
                        }
                    }
                    if (special.add) {
                        special.add.call(elem, handleObj);
                        if (!handleObj.handler.guid) {
                            handleObj.handler.guid = handler.guid;
                        }
                    }
                    if (selector) {
                        handlers.splice(handlers.delegateCount++, 0, handleObj);
                    } else {
                        handlers.push(handleObj);
                    }
                    jQuery.event.global[type] = true;
                }
            },
            remove: function(elem, types, handler, selector, mappedTypes) {
                var j, origCount, tmp, events, t, handleObj, special, handlers, type, namespaces, origType, elemData = dataPriv.hasData(elem) && dataPriv.get(elem);
                if (!elemData || !(events = elemData.events)) {
                    return;
                }
                types = (types || "").match(rnothtmlwhite) || [ "" ];
                t = types.length;
                while (t--) {
                    tmp = rtypenamespace.exec(types[t]) || [];
                    type = origType = tmp[1];
                    namespaces = (tmp[2] || "").split(".").sort();
                    if (!type) {
                        for (type in events) {
                            jQuery.event.remove(elem, type + types[t], handler, selector, true);
                        }
                        continue;
                    }
                    special = jQuery.event.special[type] || {};
                    type = (selector ? special.delegateType : special.bindType) || type;
                    handlers = events[type] || [];
                    tmp = tmp[2] && new RegExp("(^|\\.)" + namespaces.join("\\.(?:.*\\.|)") + "(\\.|$)");
                    origCount = j = handlers.length;
                    while (j--) {
                        handleObj = handlers[j];
                        if ((mappedTypes || origType === handleObj.origType) && (!handler || handler.guid === handleObj.guid) && (!tmp || tmp.test(handleObj.namespace)) && (!selector || selector === handleObj.selector || selector === "**" && handleObj.selector)) {
                            handlers.splice(j, 1);
                            if (handleObj.selector) {
                                handlers.delegateCount--;
                            }
                            if (special.remove) {
                                special.remove.call(elem, handleObj);
                            }
                        }
                    }
                    if (origCount && !handlers.length) {
                        if (!special.teardown || special.teardown.call(elem, namespaces, elemData.handle) === false) {
                            jQuery.removeEvent(elem, type, elemData.handle);
                        }
                        delete events[type];
                    }
                }
                if (jQuery.isEmptyObject(events)) {
                    dataPriv.remove(elem, "handle events");
                }
            },
            dispatch: function(nativeEvent) {
                var event = jQuery.event.fix(nativeEvent);
                var i, j, ret, matched, handleObj, handlerQueue, args = new Array(arguments.length), handlers = (dataPriv.get(this, "events") || {})[event.type] || [], special = jQuery.event.special[event.type] || {};
                args[0] = event;
                for (i = 1; i < arguments.length; i++) {
                    args[i] = arguments[i];
                }
                event.delegateTarget = this;
                if (special.preDispatch && special.preDispatch.call(this, event) === false) {
                    return;
                }
                handlerQueue = jQuery.event.handlers.call(this, event, handlers);
                i = 0;
                while ((matched = handlerQueue[i++]) && !event.isPropagationStopped()) {
                    event.currentTarget = matched.elem;
                    j = 0;
                    while ((handleObj = matched.handlers[j++]) && !event.isImmediatePropagationStopped()) {
                        if (!event.rnamespace || handleObj.namespace === false || event.rnamespace.test(handleObj.namespace)) {
                            event.handleObj = handleObj;
                            event.data = handleObj.data;
                            ret = ((jQuery.event.special[handleObj.origType] || {}).handle || handleObj.handler).apply(matched.elem, args);
                            if (ret !== undefined) {
                                if ((event.result = ret) === false) {
                                    event.preventDefault();
                                    event.stopPropagation();
                                }
                            }
                        }
                    }
                }
                if (special.postDispatch) {
                    special.postDispatch.call(this, event);
                }
                return event.result;
            },
            handlers: function(event, handlers) {
                var i, handleObj, sel, matchedHandlers, matchedSelectors, handlerQueue = [], delegateCount = handlers.delegateCount, cur = event.target;
                if (delegateCount && cur.nodeType && !(event.type === "click" && event.button >= 1)) {
                    for (;cur !== this; cur = cur.parentNode || this) {
                        if (cur.nodeType === 1 && !(event.type === "click" && cur.disabled === true)) {
                            matchedHandlers = [];
                            matchedSelectors = {};
                            for (i = 0; i < delegateCount; i++) {
                                handleObj = handlers[i];
                                sel = handleObj.selector + " ";
                                if (matchedSelectors[sel] === undefined) {
                                    matchedSelectors[sel] = handleObj.needsContext ? jQuery(sel, this).index(cur) > -1 : jQuery.find(sel, this, null, [ cur ]).length;
                                }
                                if (matchedSelectors[sel]) {
                                    matchedHandlers.push(handleObj);
                                }
                            }
                            if (matchedHandlers.length) {
                                handlerQueue.push({
                                    elem: cur,
                                    handlers: matchedHandlers
                                });
                            }
                        }
                    }
                }
                cur = this;
                if (delegateCount < handlers.length) {
                    handlerQueue.push({
                        elem: cur,
                        handlers: handlers.slice(delegateCount)
                    });
                }
                return handlerQueue;
            },
            addProp: function(name, hook) {
                Object.defineProperty(jQuery.Event.prototype, name, {
                    enumerable: true,
                    configurable: true,
                    get: isFunction(hook) ? function() {
                        if (this.originalEvent) {
                            return hook(this.originalEvent);
                        }
                    } : function() {
                        if (this.originalEvent) {
                            return this.originalEvent[name];
                        }
                    },
                    set: function(value) {
                        Object.defineProperty(this, name, {
                            enumerable: true,
                            configurable: true,
                            writable: true,
                            value: value
                        });
                    }
                });
            },
            fix: function(originalEvent) {
                return originalEvent[jQuery.expando] ? originalEvent : new jQuery.Event(originalEvent);
            },
            special: {
                load: {
                    noBubble: true
                },
                click: {
                    setup: function(data) {
                        var el = this || data;
                        if (rcheckableType.test(el.type) && el.click && nodeName(el, "input") && dataPriv.get(el, "click") === undefined) {
                            leverageNative(el, "click", returnTrue);
                        }
                        return false;
                    },
                    trigger: function(data) {
                        var el = this || data;
                        if (rcheckableType.test(el.type) && el.click && nodeName(el, "input") && dataPriv.get(el, "click") === undefined) {
                            leverageNative(el, "click");
                        }
                        return true;
                    },
                    _default: function(event) {
                        var target = event.target;
                        return rcheckableType.test(target.type) && target.click && nodeName(target, "input") && dataPriv.get(target, "click") || nodeName(target, "a");
                    }
                },
                beforeunload: {
                    postDispatch: function(event) {
                        if (event.result !== undefined && event.originalEvent) {
                            event.originalEvent.returnValue = event.result;
                        }
                    }
                }
            }
        };
        function leverageNative(el, type, expectSync) {
            if (!expectSync) {
                jQuery.event.add(el, type, returnTrue);
                return;
            }
            dataPriv.set(el, type, false);
            jQuery.event.add(el, type, {
                namespace: false,
                handler: function(event) {
                    var notAsync, result, saved = dataPriv.get(this, type);
                    if (event.isTrigger & 1 && this[type]) {
                        if (!saved) {
                            saved = slice.call(arguments);
                            dataPriv.set(this, type, saved);
                            notAsync = expectSync(this, type);
                            this[type]();
                            result = dataPriv.get(this, type);
                            if (saved !== result || notAsync) {
                                dataPriv.set(this, type, false);
                            } else {
                                result = undefined;
                            }
                            if (saved !== result) {
                                event.stopImmediatePropagation();
                                event.preventDefault();
                                return result;
                            }
                        } else if ((jQuery.event.special[type] || {}).delegateType) {
                            event.stopPropagation();
                        }
                    } else if (saved) {
                        dataPriv.set(this, type, jQuery.event.trigger(jQuery.extend(saved.shift(), jQuery.Event.prototype), saved, this));
                        event.stopImmediatePropagation();
                    }
                }
            });
        }
        jQuery.removeEvent = function(elem, type, handle) {
            if (elem.removeEventListener) {
                elem.removeEventListener(type, handle);
            }
        };
        jQuery.Event = function(src, props) {
            if (!(this instanceof jQuery.Event)) {
                return new jQuery.Event(src, props);
            }
            if (src && src.type) {
                this.originalEvent = src;
                this.type = src.type;
                this.isDefaultPrevented = src.defaultPrevented || src.defaultPrevented === undefined && src.returnValue === false ? returnTrue : returnFalse;
                this.target = src.target && src.target.nodeType === 3 ? src.target.parentNode : src.target;
                this.currentTarget = src.currentTarget;
                this.relatedTarget = src.relatedTarget;
            } else {
                this.type = src;
            }
            if (props) {
                jQuery.extend(this, props);
            }
            this.timeStamp = src && src.timeStamp || Date.now();
            this[jQuery.expando] = true;
        };
        jQuery.Event.prototype = {
            constructor: jQuery.Event,
            isDefaultPrevented: returnFalse,
            isPropagationStopped: returnFalse,
            isImmediatePropagationStopped: returnFalse,
            isSimulated: false,
            preventDefault: function() {
                var e = this.originalEvent;
                this.isDefaultPrevented = returnTrue;
                if (e && !this.isSimulated) {
                    e.preventDefault();
                }
            },
            stopPropagation: function() {
                var e = this.originalEvent;
                this.isPropagationStopped = returnTrue;
                if (e && !this.isSimulated) {
                    e.stopPropagation();
                }
            },
            stopImmediatePropagation: function() {
                var e = this.originalEvent;
                this.isImmediatePropagationStopped = returnTrue;
                if (e && !this.isSimulated) {
                    e.stopImmediatePropagation();
                }
                this.stopPropagation();
            }
        };
        jQuery.each({
            altKey: true,
            bubbles: true,
            cancelable: true,
            changedTouches: true,
            ctrlKey: true,
            detail: true,
            eventPhase: true,
            metaKey: true,
            pageX: true,
            pageY: true,
            shiftKey: true,
            view: true,
            char: true,
            code: true,
            charCode: true,
            key: true,
            keyCode: true,
            button: true,
            buttons: true,
            clientX: true,
            clientY: true,
            offsetX: true,
            offsetY: true,
            pointerId: true,
            pointerType: true,
            screenX: true,
            screenY: true,
            targetTouches: true,
            toElement: true,
            touches: true,
            which: function(event) {
                var button = event.button;
                if (event.which == null && rkeyEvent.test(event.type)) {
                    return event.charCode != null ? event.charCode : event.keyCode;
                }
                if (!event.which && button !== undefined && rmouseEvent.test(event.type)) {
                    if (button & 1) {
                        return 1;
                    }
                    if (button & 2) {
                        return 3;
                    }
                    if (button & 4) {
                        return 2;
                    }
                    return 0;
                }
                return event.which;
            }
        }, jQuery.event.addProp);
        jQuery.each({
            focus: "focusin",
            blur: "focusout"
        }, function(type, delegateType) {
            jQuery.event.special[type] = {
                setup: function() {
                    leverageNative(this, type, expectSync);
                    return false;
                },
                trigger: function() {
                    leverageNative(this, type);
                    return true;
                },
                delegateType: delegateType
            };
        });
        jQuery.each({
            mouseenter: "mouseover",
            mouseleave: "mouseout",
            pointerenter: "pointerover",
            pointerleave: "pointerout"
        }, function(orig, fix) {
            jQuery.event.special[orig] = {
                delegateType: fix,
                bindType: fix,
                handle: function(event) {
                    var ret, target = this, related = event.relatedTarget, handleObj = event.handleObj;
                    if (!related || related !== target && !jQuery.contains(target, related)) {
                        event.type = handleObj.origType;
                        ret = handleObj.handler.apply(this, arguments);
                        event.type = fix;
                    }
                    return ret;
                }
            };
        });
        jQuery.fn.extend({
            on: function(types, selector, data, fn) {
                return on(this, types, selector, data, fn);
            },
            one: function(types, selector, data, fn) {
                return on(this, types, selector, data, fn, 1);
            },
            off: function(types, selector, fn) {
                var handleObj, type;
                if (types && types.preventDefault && types.handleObj) {
                    handleObj = types.handleObj;
                    jQuery(types.delegateTarget).off(handleObj.namespace ? handleObj.origType + "." + handleObj.namespace : handleObj.origType, handleObj.selector, handleObj.handler);
                    return this;
                }
                if (typeof types === "object") {
                    for (type in types) {
                        this.off(type, selector, types[type]);
                    }
                    return this;
                }
                if (selector === false || typeof selector === "function") {
                    fn = selector;
                    selector = undefined;
                }
                if (fn === false) {
                    fn = returnFalse;
                }
                return this.each(function() {
                    jQuery.event.remove(this, types, fn, selector);
                });
            }
        });
        var rxhtmlTag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi, rnoInnerhtml = /<script|<style|<link/i, rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i, rcleanScript = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
        function manipulationTarget(elem, content) {
            if (nodeName(elem, "table") && nodeName(content.nodeType !== 11 ? content : content.firstChild, "tr")) {
                return jQuery(elem).children("tbody")[0] || elem;
            }
            return elem;
        }
        function disableScript(elem) {
            elem.type = (elem.getAttribute("type") !== null) + "/" + elem.type;
            return elem;
        }
        function restoreScript(elem) {
            if ((elem.type || "").slice(0, 5) === "true/") {
                elem.type = elem.type.slice(5);
            } else {
                elem.removeAttribute("type");
            }
            return elem;
        }
        function cloneCopyEvent(src, dest) {
            var i, l, type, pdataOld, pdataCur, udataOld, udataCur, events;
            if (dest.nodeType !== 1) {
                return;
            }
            if (dataPriv.hasData(src)) {
                pdataOld = dataPriv.access(src);
                pdataCur = dataPriv.set(dest, pdataOld);
                events = pdataOld.events;
                if (events) {
                    delete pdataCur.handle;
                    pdataCur.events = {};
                    for (type in events) {
                        for (i = 0, l = events[type].length; i < l; i++) {
                            jQuery.event.add(dest, type, events[type][i]);
                        }
                    }
                }
            }
            if (dataUser.hasData(src)) {
                udataOld = dataUser.access(src);
                udataCur = jQuery.extend({}, udataOld);
                dataUser.set(dest, udataCur);
            }
        }
        function fixInput(src, dest) {
            var nodeName = dest.nodeName.toLowerCase();
            if (nodeName === "input" && rcheckableType.test(src.type)) {
                dest.checked = src.checked;
            } else if (nodeName === "input" || nodeName === "textarea") {
                dest.defaultValue = src.defaultValue;
            }
        }
        function domManip(collection, args, callback, ignored) {
            args = concat.apply([], args);
            var fragment, first, scripts, hasScripts, node, doc, i = 0, l = collection.length, iNoClone = l - 1, value = args[0], valueIsFunction = isFunction(value);
            if (valueIsFunction || l > 1 && typeof value === "string" && !support.checkClone && rchecked.test(value)) {
                return collection.each(function(index) {
                    var self = collection.eq(index);
                    if (valueIsFunction) {
                        args[0] = value.call(this, index, self.html());
                    }
                    domManip(self, args, callback, ignored);
                });
            }
            if (l) {
                fragment = buildFragment(args, collection[0].ownerDocument, false, collection, ignored);
                first = fragment.firstChild;
                if (fragment.childNodes.length === 1) {
                    fragment = first;
                }
                if (first || ignored) {
                    scripts = jQuery.map(getAll(fragment, "script"), disableScript);
                    hasScripts = scripts.length;
                    for (;i < l; i++) {
                        node = fragment;
                        if (i !== iNoClone) {
                            node = jQuery.clone(node, true, true);
                            if (hasScripts) {
                                jQuery.merge(scripts, getAll(node, "script"));
                            }
                        }
                        callback.call(collection[i], node, i);
                    }
                    if (hasScripts) {
                        doc = scripts[scripts.length - 1].ownerDocument;
                        jQuery.map(scripts, restoreScript);
                        for (i = 0; i < hasScripts; i++) {
                            node = scripts[i];
                            if (rscriptType.test(node.type || "") && !dataPriv.access(node, "globalEval") && jQuery.contains(doc, node)) {
                                if (node.src && (node.type || "").toLowerCase() !== "module") {
                                    if (jQuery._evalUrl && !node.noModule) {
                                        jQuery._evalUrl(node.src, {
                                            nonce: node.nonce || node.getAttribute("nonce")
                                        });
                                    }
                                } else {
                                    DOMEval(node.textContent.replace(rcleanScript, ""), node, doc);
                                }
                            }
                        }
                    }
                }
            }
            return collection;
        }
        function remove(elem, selector, keepData) {
            var node, nodes = selector ? jQuery.filter(selector, elem) : elem, i = 0;
            for (;(node = nodes[i]) != null; i++) {
                if (!keepData && node.nodeType === 1) {
                    jQuery.cleanData(getAll(node));
                }
                if (node.parentNode) {
                    if (keepData && isAttached(node)) {
                        setGlobalEval(getAll(node, "script"));
                    }
                    node.parentNode.removeChild(node);
                }
            }
            return elem;
        }
        jQuery.extend({
            htmlPrefilter: function(html) {
                return html.replace(rxhtmlTag, "<$1></$2>");
            },
            clone: function(elem, dataAndEvents, deepDataAndEvents) {
                var i, l, srcElements, destElements, clone = elem.cloneNode(true), inPage = isAttached(elem);
                if (!support.noCloneChecked && (elem.nodeType === 1 || elem.nodeType === 11) && !jQuery.isXMLDoc(elem)) {
                    destElements = getAll(clone);
                    srcElements = getAll(elem);
                    for (i = 0, l = srcElements.length; i < l; i++) {
                        fixInput(srcElements[i], destElements[i]);
                    }
                }
                if (dataAndEvents) {
                    if (deepDataAndEvents) {
                        srcElements = srcElements || getAll(elem);
                        destElements = destElements || getAll(clone);
                        for (i = 0, l = srcElements.length; i < l; i++) {
                            cloneCopyEvent(srcElements[i], destElements[i]);
                        }
                    } else {
                        cloneCopyEvent(elem, clone);
                    }
                }
                destElements = getAll(clone, "script");
                if (destElements.length > 0) {
                    setGlobalEval(destElements, !inPage && getAll(elem, "script"));
                }
                return clone;
            },
            cleanData: function(elems) {
                var data, elem, type, special = jQuery.event.special, i = 0;
                for (;(elem = elems[i]) !== undefined; i++) {
                    if (acceptData(elem)) {
                        if (data = elem[dataPriv.expando]) {
                            if (data.events) {
                                for (type in data.events) {
                                    if (special[type]) {
                                        jQuery.event.remove(elem, type);
                                    } else {
                                        jQuery.removeEvent(elem, type, data.handle);
                                    }
                                }
                            }
                            elem[dataPriv.expando] = undefined;
                        }
                        if (elem[dataUser.expando]) {
                            elem[dataUser.expando] = undefined;
                        }
                    }
                }
            }
        });
        jQuery.fn.extend({
            detach: function(selector) {
                return remove(this, selector, true);
            },
            remove: function(selector) {
                return remove(this, selector);
            },
            text: function(value) {
                return access(this, function(value) {
                    return value === undefined ? jQuery.text(this) : this.empty().each(function() {
                        if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
                            this.textContent = value;
                        }
                    });
                }, null, value, arguments.length);
            },
            append: function() {
                return domManip(this, arguments, function(elem) {
                    if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
                        var target = manipulationTarget(this, elem);
                        target.appendChild(elem);
                    }
                });
            },
            prepend: function() {
                return domManip(this, arguments, function(elem) {
                    if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
                        var target = manipulationTarget(this, elem);
                        target.insertBefore(elem, target.firstChild);
                    }
                });
            },
            before: function() {
                return domManip(this, arguments, function(elem) {
                    if (this.parentNode) {
                        this.parentNode.insertBefore(elem, this);
                    }
                });
            },
            after: function() {
                return domManip(this, arguments, function(elem) {
                    if (this.parentNode) {
                        this.parentNode.insertBefore(elem, this.nextSibling);
                    }
                });
            },
            empty: function() {
                var elem, i = 0;
                for (;(elem = this[i]) != null; i++) {
                    if (elem.nodeType === 1) {
                        jQuery.cleanData(getAll(elem, false));
                        elem.textContent = "";
                    }
                }
                return this;
            },
            clone: function(dataAndEvents, deepDataAndEvents) {
                dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
                deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;
                return this.map(function() {
                    return jQuery.clone(this, dataAndEvents, deepDataAndEvents);
                });
            },
            html: function(value) {
                return access(this, function(value) {
                    var elem = this[0] || {}, i = 0, l = this.length;
                    if (value === undefined && elem.nodeType === 1) {
                        return elem.innerHTML;
                    }
                    if (typeof value === "string" && !rnoInnerhtml.test(value) && !wrapMap[(rtagName.exec(value) || [ "", "" ])[1].toLowerCase()]) {
                        value = jQuery.htmlPrefilter(value);
                        try {
                            for (;i < l; i++) {
                                elem = this[i] || {};
                                if (elem.nodeType === 1) {
                                    jQuery.cleanData(getAll(elem, false));
                                    elem.innerHTML = value;
                                }
                            }
                            elem = 0;
                        } catch (e) {}
                    }
                    if (elem) {
                        this.empty().append(value);
                    }
                }, null, value, arguments.length);
            },
            replaceWith: function() {
                var ignored = [];
                return domManip(this, arguments, function(elem) {
                    var parent = this.parentNode;
                    if (jQuery.inArray(this, ignored) < 0) {
                        jQuery.cleanData(getAll(this));
                        if (parent) {
                            parent.replaceChild(elem, this);
                        }
                    }
                }, ignored);
            }
        });
        jQuery.each({
            appendTo: "append",
            prependTo: "prepend",
            insertBefore: "before",
            insertAfter: "after",
            replaceAll: "replaceWith"
        }, function(name, original) {
            jQuery.fn[name] = function(selector) {
                var elems, ret = [], insert = jQuery(selector), last = insert.length - 1, i = 0;
                for (;i <= last; i++) {
                    elems = i === last ? this : this.clone(true);
                    jQuery(insert[i])[original](elems);
                    push.apply(ret, elems.get());
                }
                return this.pushStack(ret);
            };
        });
        var rnumnonpx = new RegExp("^(" + pnum + ")(?!px)[a-z%]+$", "i");
        var getStyles = function(elem) {
            var view = elem.ownerDocument.defaultView;
            if (!view || !view.opener) {
                view = window;
            }
            return view.getComputedStyle(elem);
        };
        var rboxStyle = new RegExp(cssExpand.join("|"), "i");
        (function() {
            function computeStyleTests() {
                if (!div) {
                    return;
                }
                container.style.cssText = "position:absolute;left:-11111px;width:60px;" + "margin-top:1px;padding:0;border:0";
                div.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;" + "margin:auto;border:1px;padding:1px;" + "width:60%;top:1%";
                documentElement.appendChild(container).appendChild(div);
                var divStyle = window.getComputedStyle(div);
                pixelPositionVal = divStyle.top !== "1%";
                reliableMarginLeftVal = roundPixelMeasures(divStyle.marginLeft) === 12;
                div.style.right = "60%";
                pixelBoxStylesVal = roundPixelMeasures(divStyle.right) === 36;
                boxSizingReliableVal = roundPixelMeasures(divStyle.width) === 36;
                div.style.position = "absolute";
                scrollboxSizeVal = roundPixelMeasures(div.offsetWidth / 3) === 12;
                documentElement.removeChild(container);
                div = null;
            }
            function roundPixelMeasures(measure) {
                return Math.round(parseFloat(measure));
            }
            var pixelPositionVal, boxSizingReliableVal, scrollboxSizeVal, pixelBoxStylesVal, reliableMarginLeftVal, container = document.createElement("div"), div = document.createElement("div");
            if (!div.style) {
                return;
            }
            div.style.backgroundClip = "content-box";
            div.cloneNode(true).style.backgroundClip = "";
            support.clearCloneStyle = div.style.backgroundClip === "content-box";
            jQuery.extend(support, {
                boxSizingReliable: function() {
                    computeStyleTests();
                    return boxSizingReliableVal;
                },
                pixelBoxStyles: function() {
                    computeStyleTests();
                    return pixelBoxStylesVal;
                },
                pixelPosition: function() {
                    computeStyleTests();
                    return pixelPositionVal;
                },
                reliableMarginLeft: function() {
                    computeStyleTests();
                    return reliableMarginLeftVal;
                },
                scrollboxSize: function() {
                    computeStyleTests();
                    return scrollboxSizeVal;
                }
            });
        })();
        function curCSS(elem, name, computed) {
            var width, minWidth, maxWidth, ret, style = elem.style;
            computed = computed || getStyles(elem);
            if (computed) {
                ret = computed.getPropertyValue(name) || computed[name];
                if (ret === "" && !isAttached(elem)) {
                    ret = jQuery.style(elem, name);
                }
                if (!support.pixelBoxStyles() && rnumnonpx.test(ret) && rboxStyle.test(name)) {
                    width = style.width;
                    minWidth = style.minWidth;
                    maxWidth = style.maxWidth;
                    style.minWidth = style.maxWidth = style.width = ret;
                    ret = computed.width;
                    style.width = width;
                    style.minWidth = minWidth;
                    style.maxWidth = maxWidth;
                }
            }
            return ret !== undefined ? ret + "" : ret;
        }
        function addGetHookIf(conditionFn, hookFn) {
            return {
                get: function() {
                    if (conditionFn()) {
                        delete this.get;
                        return;
                    }
                    return (this.get = hookFn).apply(this, arguments);
                }
            };
        }
        var cssPrefixes = [ "Webkit", "Moz", "ms" ], emptyStyle = document.createElement("div").style, vendorProps = {};
        function vendorPropName(name) {
            var capName = name[0].toUpperCase() + name.slice(1), i = cssPrefixes.length;
            while (i--) {
                name = cssPrefixes[i] + capName;
                if (name in emptyStyle) {
                    return name;
                }
            }
        }
        function finalPropName(name) {
            var final = jQuery.cssProps[name] || vendorProps[name];
            if (final) {
                return final;
            }
            if (name in emptyStyle) {
                return name;
            }
            return vendorProps[name] = vendorPropName(name) || name;
        }
        var rdisplayswap = /^(none|table(?!-c[ea]).+)/, rcustomProp = /^--/, cssShow = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        }, cssNormalTransform = {
            letterSpacing: "0",
            fontWeight: "400"
        };
        function setPositiveNumber(elem, value, subtract) {
            var matches = rcssNum.exec(value);
            return matches ? Math.max(0, matches[2] - (subtract || 0)) + (matches[3] || "px") : value;
        }
        function boxModelAdjustment(elem, dimension, box, isBorderBox, styles, computedVal) {
            var i = dimension === "width" ? 1 : 0, extra = 0, delta = 0;
            if (box === (isBorderBox ? "border" : "content")) {
                return 0;
            }
            for (;i < 4; i += 2) {
                if (box === "margin") {
                    delta += jQuery.css(elem, box + cssExpand[i], true, styles);
                }
                if (!isBorderBox) {
                    delta += jQuery.css(elem, "padding" + cssExpand[i], true, styles);
                    if (box !== "padding") {
                        delta += jQuery.css(elem, "border" + cssExpand[i] + "Width", true, styles);
                    } else {
                        extra += jQuery.css(elem, "border" + cssExpand[i] + "Width", true, styles);
                    }
                } else {
                    if (box === "content") {
                        delta -= jQuery.css(elem, "padding" + cssExpand[i], true, styles);
                    }
                    if (box !== "margin") {
                        delta -= jQuery.css(elem, "border" + cssExpand[i] + "Width", true, styles);
                    }
                }
            }
            if (!isBorderBox && computedVal >= 0) {
                delta += Math.max(0, Math.ceil(elem["offset" + dimension[0].toUpperCase() + dimension.slice(1)] - computedVal - delta - extra - .5)) || 0;
            }
            return delta;
        }
        function getWidthOrHeight(elem, dimension, extra) {
            var styles = getStyles(elem), boxSizingNeeded = !support.boxSizingReliable() || extra, isBorderBox = boxSizingNeeded && jQuery.css(elem, "boxSizing", false, styles) === "border-box", valueIsBorderBox = isBorderBox, val = curCSS(elem, dimension, styles), offsetProp = "offset" + dimension[0].toUpperCase() + dimension.slice(1);
            if (rnumnonpx.test(val)) {
                if (!extra) {
                    return val;
                }
                val = "auto";
            }
            if ((!support.boxSizingReliable() && isBorderBox || val === "auto" || !parseFloat(val) && jQuery.css(elem, "display", false, styles) === "inline") && elem.getClientRects().length) {
                isBorderBox = jQuery.css(elem, "boxSizing", false, styles) === "border-box";
                valueIsBorderBox = offsetProp in elem;
                if (valueIsBorderBox) {
                    val = elem[offsetProp];
                }
            }
            val = parseFloat(val) || 0;
            return val + boxModelAdjustment(elem, dimension, extra || (isBorderBox ? "border" : "content"), valueIsBorderBox, styles, val) + "px";
        }
        jQuery.extend({
            cssHooks: {
                opacity: {
                    get: function(elem, computed) {
                        if (computed) {
                            var ret = curCSS(elem, "opacity");
                            return ret === "" ? "1" : ret;
                        }
                    }
                }
            },
            cssNumber: {
                animationIterationCount: true,
                columnCount: true,
                fillOpacity: true,
                flexGrow: true,
                flexShrink: true,
                fontWeight: true,
                gridArea: true,
                gridColumn: true,
                gridColumnEnd: true,
                gridColumnStart: true,
                gridRow: true,
                gridRowEnd: true,
                gridRowStart: true,
                lineHeight: true,
                opacity: true,
                order: true,
                orphans: true,
                widows: true,
                zIndex: true,
                zoom: true
            },
            cssProps: {},
            style: function(elem, name, value, extra) {
                if (!elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style) {
                    return;
                }
                var ret, type, hooks, origName = camelCase(name), isCustomProp = rcustomProp.test(name), style = elem.style;
                if (!isCustomProp) {
                    name = finalPropName(origName);
                }
                hooks = jQuery.cssHooks[name] || jQuery.cssHooks[origName];
                if (value !== undefined) {
                    type = typeof value;
                    if (type === "string" && (ret = rcssNum.exec(value)) && ret[1]) {
                        value = adjustCSS(elem, name, ret);
                        type = "number";
                    }
                    if (value == null || value !== value) {
                        return;
                    }
                    if (type === "number" && !isCustomProp) {
                        value += ret && ret[3] || (jQuery.cssNumber[origName] ? "" : "px");
                    }
                    if (!support.clearCloneStyle && value === "" && name.indexOf("background") === 0) {
                        style[name] = "inherit";
                    }
                    if (!hooks || !("set" in hooks) || (value = hooks.set(elem, value, extra)) !== undefined) {
                        if (isCustomProp) {
                            style.setProperty(name, value);
                        } else {
                            style[name] = value;
                        }
                    }
                } else {
                    if (hooks && "get" in hooks && (ret = hooks.get(elem, false, extra)) !== undefined) {
                        return ret;
                    }
                    return style[name];
                }
            },
            css: function(elem, name, extra, styles) {
                var val, num, hooks, origName = camelCase(name), isCustomProp = rcustomProp.test(name);
                if (!isCustomProp) {
                    name = finalPropName(origName);
                }
                hooks = jQuery.cssHooks[name] || jQuery.cssHooks[origName];
                if (hooks && "get" in hooks) {
                    val = hooks.get(elem, true, extra);
                }
                if (val === undefined) {
                    val = curCSS(elem, name, styles);
                }
                if (val === "normal" && name in cssNormalTransform) {
                    val = cssNormalTransform[name];
                }
                if (extra === "" || extra) {
                    num = parseFloat(val);
                    return extra === true || isFinite(num) ? num || 0 : val;
                }
                return val;
            }
        });
        jQuery.each([ "height", "width" ], function(i, dimension) {
            jQuery.cssHooks[dimension] = {
                get: function(elem, computed, extra) {
                    if (computed) {
                        return rdisplayswap.test(jQuery.css(elem, "display")) && (!elem.getClientRects().length || !elem.getBoundingClientRect().width) ? swap(elem, cssShow, function() {
                            return getWidthOrHeight(elem, dimension, extra);
                        }) : getWidthOrHeight(elem, dimension, extra);
                    }
                },
                set: function(elem, value, extra) {
                    var matches, styles = getStyles(elem), scrollboxSizeBuggy = !support.scrollboxSize() && styles.position === "absolute", boxSizingNeeded = scrollboxSizeBuggy || extra, isBorderBox = boxSizingNeeded && jQuery.css(elem, "boxSizing", false, styles) === "border-box", subtract = extra ? boxModelAdjustment(elem, dimension, extra, isBorderBox, styles) : 0;
                    if (isBorderBox && scrollboxSizeBuggy) {
                        subtract -= Math.ceil(elem["offset" + dimension[0].toUpperCase() + dimension.slice(1)] - parseFloat(styles[dimension]) - boxModelAdjustment(elem, dimension, "border", false, styles) - .5);
                    }
                    if (subtract && (matches = rcssNum.exec(value)) && (matches[3] || "px") !== "px") {
                        elem.style[dimension] = value;
                        value = jQuery.css(elem, dimension);
                    }
                    return setPositiveNumber(elem, value, subtract);
                }
            };
        });
        jQuery.cssHooks.marginLeft = addGetHookIf(support.reliableMarginLeft, function(elem, computed) {
            if (computed) {
                return (parseFloat(curCSS(elem, "marginLeft")) || elem.getBoundingClientRect().left - swap(elem, {
                    marginLeft: 0
                }, function() {
                    return elem.getBoundingClientRect().left;
                })) + "px";
            }
        });
        jQuery.each({
            margin: "",
            padding: "",
            border: "Width"
        }, function(prefix, suffix) {
            jQuery.cssHooks[prefix + suffix] = {
                expand: function(value) {
                    var i = 0, expanded = {}, parts = typeof value === "string" ? value.split(" ") : [ value ];
                    for (;i < 4; i++) {
                        expanded[prefix + cssExpand[i] + suffix] = parts[i] || parts[i - 2] || parts[0];
                    }
                    return expanded;
                }
            };
            if (prefix !== "margin") {
                jQuery.cssHooks[prefix + suffix].set = setPositiveNumber;
            }
        });
        jQuery.fn.extend({
            css: function(name, value) {
                return access(this, function(elem, name, value) {
                    var styles, len, map = {}, i = 0;
                    if (Array.isArray(name)) {
                        styles = getStyles(elem);
                        len = name.length;
                        for (;i < len; i++) {
                            map[name[i]] = jQuery.css(elem, name[i], false, styles);
                        }
                        return map;
                    }
                    return value !== undefined ? jQuery.style(elem, name, value) : jQuery.css(elem, name);
                }, name, value, arguments.length > 1);
            }
        });
        function Tween(elem, options, prop, end, easing) {
            return new Tween.prototype.init(elem, options, prop, end, easing);
        }
        jQuery.Tween = Tween;
        Tween.prototype = {
            constructor: Tween,
            init: function(elem, options, prop, end, easing, unit) {
                this.elem = elem;
                this.prop = prop;
                this.easing = easing || jQuery.easing._default;
                this.options = options;
                this.start = this.now = this.cur();
                this.end = end;
                this.unit = unit || (jQuery.cssNumber[prop] ? "" : "px");
            },
            cur: function() {
                var hooks = Tween.propHooks[this.prop];
                return hooks && hooks.get ? hooks.get(this) : Tween.propHooks._default.get(this);
            },
            run: function(percent) {
                var eased, hooks = Tween.propHooks[this.prop];
                if (this.options.duration) {
                    this.pos = eased = jQuery.easing[this.easing](percent, this.options.duration * percent, 0, 1, this.options.duration);
                } else {
                    this.pos = eased = percent;
                }
                this.now = (this.end - this.start) * eased + this.start;
                if (this.options.step) {
                    this.options.step.call(this.elem, this.now, this);
                }
                if (hooks && hooks.set) {
                    hooks.set(this);
                } else {
                    Tween.propHooks._default.set(this);
                }
                return this;
            }
        };
        Tween.prototype.init.prototype = Tween.prototype;
        Tween.propHooks = {
            _default: {
                get: function(tween) {
                    var result;
                    if (tween.elem.nodeType !== 1 || tween.elem[tween.prop] != null && tween.elem.style[tween.prop] == null) {
                        return tween.elem[tween.prop];
                    }
                    result = jQuery.css(tween.elem, tween.prop, "");
                    return !result || result === "auto" ? 0 : result;
                },
                set: function(tween) {
                    if (jQuery.fx.step[tween.prop]) {
                        jQuery.fx.step[tween.prop](tween);
                    } else if (tween.elem.nodeType === 1 && (jQuery.cssHooks[tween.prop] || tween.elem.style[finalPropName(tween.prop)] != null)) {
                        jQuery.style(tween.elem, tween.prop, tween.now + tween.unit);
                    } else {
                        tween.elem[tween.prop] = tween.now;
                    }
                }
            }
        };
        Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
            set: function(tween) {
                if (tween.elem.nodeType && tween.elem.parentNode) {
                    tween.elem[tween.prop] = tween.now;
                }
            }
        };
        jQuery.easing = {
            linear: function(p) {
                return p;
            },
            swing: function(p) {
                return .5 - Math.cos(p * Math.PI) / 2;
            },
            _default: "swing"
        };
        jQuery.fx = Tween.prototype.init;
        jQuery.fx.step = {};
        var fxNow, inProgress, rfxtypes = /^(?:toggle|show|hide)$/, rrun = /queueHooks$/;
        function schedule() {
            if (inProgress) {
                if (document.hidden === false && window.requestAnimationFrame) {
                    window.requestAnimationFrame(schedule);
                } else {
                    window.setTimeout(schedule, jQuery.fx.interval);
                }
                jQuery.fx.tick();
            }
        }
        function createFxNow() {
            window.setTimeout(function() {
                fxNow = undefined;
            });
            return fxNow = Date.now();
        }
        function genFx(type, includeWidth) {
            var which, i = 0, attrs = {
                height: type
            };
            includeWidth = includeWidth ? 1 : 0;
            for (;i < 4; i += 2 - includeWidth) {
                which = cssExpand[i];
                attrs["margin" + which] = attrs["padding" + which] = type;
            }
            if (includeWidth) {
                attrs.opacity = attrs.width = type;
            }
            return attrs;
        }
        function createTween(value, prop, animation) {
            var tween, collection = (Animation.tweeners[prop] || []).concat(Animation.tweeners["*"]), index = 0, length = collection.length;
            for (;index < length; index++) {
                if (tween = collection[index].call(animation, prop, value)) {
                    return tween;
                }
            }
        }
        function defaultPrefilter(elem, props, opts) {
            var prop, value, toggle, hooks, oldfire, propTween, restoreDisplay, display, isBox = "width" in props || "height" in props, anim = this, orig = {}, style = elem.style, hidden = elem.nodeType && isHiddenWithinTree(elem), dataShow = dataPriv.get(elem, "fxshow");
            if (!opts.queue) {
                hooks = jQuery._queueHooks(elem, "fx");
                if (hooks.unqueued == null) {
                    hooks.unqueued = 0;
                    oldfire = hooks.empty.fire;
                    hooks.empty.fire = function() {
                        if (!hooks.unqueued) {
                            oldfire();
                        }
                    };
                }
                hooks.unqueued++;
                anim.always(function() {
                    anim.always(function() {
                        hooks.unqueued--;
                        if (!jQuery.queue(elem, "fx").length) {
                            hooks.empty.fire();
                        }
                    });
                });
            }
            for (prop in props) {
                value = props[prop];
                if (rfxtypes.test(value)) {
                    delete props[prop];
                    toggle = toggle || value === "toggle";
                    if (value === (hidden ? "hide" : "show")) {
                        if (value === "show" && dataShow && dataShow[prop] !== undefined) {
                            hidden = true;
                        } else {
                            continue;
                        }
                    }
                    orig[prop] = dataShow && dataShow[prop] || jQuery.style(elem, prop);
                }
            }
            propTween = !jQuery.isEmptyObject(props);
            if (!propTween && jQuery.isEmptyObject(orig)) {
                return;
            }
            if (isBox && elem.nodeType === 1) {
                opts.overflow = [ style.overflow, style.overflowX, style.overflowY ];
                restoreDisplay = dataShow && dataShow.display;
                if (restoreDisplay == null) {
                    restoreDisplay = dataPriv.get(elem, "display");
                }
                display = jQuery.css(elem, "display");
                if (display === "none") {
                    if (restoreDisplay) {
                        display = restoreDisplay;
                    } else {
                        showHide([ elem ], true);
                        restoreDisplay = elem.style.display || restoreDisplay;
                        display = jQuery.css(elem, "display");
                        showHide([ elem ]);
                    }
                }
                if (display === "inline" || display === "inline-block" && restoreDisplay != null) {
                    if (jQuery.css(elem, "float") === "none") {
                        if (!propTween) {
                            anim.done(function() {
                                style.display = restoreDisplay;
                            });
                            if (restoreDisplay == null) {
                                display = style.display;
                                restoreDisplay = display === "none" ? "" : display;
                            }
                        }
                        style.display = "inline-block";
                    }
                }
            }
            if (opts.overflow) {
                style.overflow = "hidden";
                anim.always(function() {
                    style.overflow = opts.overflow[0];
                    style.overflowX = opts.overflow[1];
                    style.overflowY = opts.overflow[2];
                });
            }
            propTween = false;
            for (prop in orig) {
                if (!propTween) {
                    if (dataShow) {
                        if ("hidden" in dataShow) {
                            hidden = dataShow.hidden;
                        }
                    } else {
                        dataShow = dataPriv.access(elem, "fxshow", {
                            display: restoreDisplay
                        });
                    }
                    if (toggle) {
                        dataShow.hidden = !hidden;
                    }
                    if (hidden) {
                        showHide([ elem ], true);
                    }
                    anim.done(function() {
                        if (!hidden) {
                            showHide([ elem ]);
                        }
                        dataPriv.remove(elem, "fxshow");
                        for (prop in orig) {
                            jQuery.style(elem, prop, orig[prop]);
                        }
                    });
                }
                propTween = createTween(hidden ? dataShow[prop] : 0, prop, anim);
                if (!(prop in dataShow)) {
                    dataShow[prop] = propTween.start;
                    if (hidden) {
                        propTween.end = propTween.start;
                        propTween.start = 0;
                    }
                }
            }
        }
        function propFilter(props, specialEasing) {
            var index, name, easing, value, hooks;
            for (index in props) {
                name = camelCase(index);
                easing = specialEasing[name];
                value = props[index];
                if (Array.isArray(value)) {
                    easing = value[1];
                    value = props[index] = value[0];
                }
                if (index !== name) {
                    props[name] = value;
                    delete props[index];
                }
                hooks = jQuery.cssHooks[name];
                if (hooks && "expand" in hooks) {
                    value = hooks.expand(value);
                    delete props[name];
                    for (index in value) {
                        if (!(index in props)) {
                            props[index] = value[index];
                            specialEasing[index] = easing;
                        }
                    }
                } else {
                    specialEasing[name] = easing;
                }
            }
        }
        function Animation(elem, properties, options) {
            var result, stopped, index = 0, length = Animation.prefilters.length, deferred = jQuery.Deferred().always(function() {
                delete tick.elem;
            }), tick = function() {
                if (stopped) {
                    return false;
                }
                var currentTime = fxNow || createFxNow(), remaining = Math.max(0, animation.startTime + animation.duration - currentTime), temp = remaining / animation.duration || 0, percent = 1 - temp, index = 0, length = animation.tweens.length;
                for (;index < length; index++) {
                    animation.tweens[index].run(percent);
                }
                deferred.notifyWith(elem, [ animation, percent, remaining ]);
                if (percent < 1 && length) {
                    return remaining;
                }
                if (!length) {
                    deferred.notifyWith(elem, [ animation, 1, 0 ]);
                }
                deferred.resolveWith(elem, [ animation ]);
                return false;
            }, animation = deferred.promise({
                elem: elem,
                props: jQuery.extend({}, properties),
                opts: jQuery.extend(true, {
                    specialEasing: {},
                    easing: jQuery.easing._default
                }, options),
                originalProperties: properties,
                originalOptions: options,
                startTime: fxNow || createFxNow(),
                duration: options.duration,
                tweens: [],
                createTween: function(prop, end) {
                    var tween = jQuery.Tween(elem, animation.opts, prop, end, animation.opts.specialEasing[prop] || animation.opts.easing);
                    animation.tweens.push(tween);
                    return tween;
                },
                stop: function(gotoEnd) {
                    var index = 0, length = gotoEnd ? animation.tweens.length : 0;
                    if (stopped) {
                        return this;
                    }
                    stopped = true;
                    for (;index < length; index++) {
                        animation.tweens[index].run(1);
                    }
                    if (gotoEnd) {
                        deferred.notifyWith(elem, [ animation, 1, 0 ]);
                        deferred.resolveWith(elem, [ animation, gotoEnd ]);
                    } else {
                        deferred.rejectWith(elem, [ animation, gotoEnd ]);
                    }
                    return this;
                }
            }), props = animation.props;
            propFilter(props, animation.opts.specialEasing);
            for (;index < length; index++) {
                result = Animation.prefilters[index].call(animation, elem, props, animation.opts);
                if (result) {
                    if (isFunction(result.stop)) {
                        jQuery._queueHooks(animation.elem, animation.opts.queue).stop = result.stop.bind(result);
                    }
                    return result;
                }
            }
            jQuery.map(props, createTween, animation);
            if (isFunction(animation.opts.start)) {
                animation.opts.start.call(elem, animation);
            }
            animation.progress(animation.opts.progress).done(animation.opts.done, animation.opts.complete).fail(animation.opts.fail).always(animation.opts.always);
            jQuery.fx.timer(jQuery.extend(tick, {
                elem: elem,
                anim: animation,
                queue: animation.opts.queue
            }));
            return animation;
        }
        jQuery.Animation = jQuery.extend(Animation, {
            tweeners: {
                "*": [ function(prop, value) {
                    var tween = this.createTween(prop, value);
                    adjustCSS(tween.elem, prop, rcssNum.exec(value), tween);
                    return tween;
                } ]
            },
            tweener: function(props, callback) {
                if (isFunction(props)) {
                    callback = props;
                    props = [ "*" ];
                } else {
                    props = props.match(rnothtmlwhite);
                }
                var prop, index = 0, length = props.length;
                for (;index < length; index++) {
                    prop = props[index];
                    Animation.tweeners[prop] = Animation.tweeners[prop] || [];
                    Animation.tweeners[prop].unshift(callback);
                }
            },
            prefilters: [ defaultPrefilter ],
            prefilter: function(callback, prepend) {
                if (prepend) {
                    Animation.prefilters.unshift(callback);
                } else {
                    Animation.prefilters.push(callback);
                }
            }
        });
        jQuery.speed = function(speed, easing, fn) {
            var opt = speed && typeof speed === "object" ? jQuery.extend({}, speed) : {
                complete: fn || !fn && easing || isFunction(speed) && speed,
                duration: speed,
                easing: fn && easing || easing && !isFunction(easing) && easing
            };
            if (jQuery.fx.off) {
                opt.duration = 0;
            } else {
                if (typeof opt.duration !== "number") {
                    if (opt.duration in jQuery.fx.speeds) {
                        opt.duration = jQuery.fx.speeds[opt.duration];
                    } else {
                        opt.duration = jQuery.fx.speeds._default;
                    }
                }
            }
            if (opt.queue == null || opt.queue === true) {
                opt.queue = "fx";
            }
            opt.old = opt.complete;
            opt.complete = function() {
                if (isFunction(opt.old)) {
                    opt.old.call(this);
                }
                if (opt.queue) {
                    jQuery.dequeue(this, opt.queue);
                }
            };
            return opt;
        };
        jQuery.fn.extend({
            fadeTo: function(speed, to, easing, callback) {
                return this.filter(isHiddenWithinTree).css("opacity", 0).show().end().animate({
                    opacity: to
                }, speed, easing, callback);
            },
            animate: function(prop, speed, easing, callback) {
                var empty = jQuery.isEmptyObject(prop), optall = jQuery.speed(speed, easing, callback), doAnimation = function() {
                    var anim = Animation(this, jQuery.extend({}, prop), optall);
                    if (empty || dataPriv.get(this, "finish")) {
                        anim.stop(true);
                    }
                };
                doAnimation.finish = doAnimation;
                return empty || optall.queue === false ? this.each(doAnimation) : this.queue(optall.queue, doAnimation);
            },
            stop: function(type, clearQueue, gotoEnd) {
                var stopQueue = function(hooks) {
                    var stop = hooks.stop;
                    delete hooks.stop;
                    stop(gotoEnd);
                };
                if (typeof type !== "string") {
                    gotoEnd = clearQueue;
                    clearQueue = type;
                    type = undefined;
                }
                if (clearQueue && type !== false) {
                    this.queue(type || "fx", []);
                }
                return this.each(function() {
                    var dequeue = true, index = type != null && type + "queueHooks", timers = jQuery.timers, data = dataPriv.get(this);
                    if (index) {
                        if (data[index] && data[index].stop) {
                            stopQueue(data[index]);
                        }
                    } else {
                        for (index in data) {
                            if (data[index] && data[index].stop && rrun.test(index)) {
                                stopQueue(data[index]);
                            }
                        }
                    }
                    for (index = timers.length; index--; ) {
                        if (timers[index].elem === this && (type == null || timers[index].queue === type)) {
                            timers[index].anim.stop(gotoEnd);
                            dequeue = false;
                            timers.splice(index, 1);
                        }
                    }
                    if (dequeue || !gotoEnd) {
                        jQuery.dequeue(this, type);
                    }
                });
            },
            finish: function(type) {
                if (type !== false) {
                    type = type || "fx";
                }
                return this.each(function() {
                    var index, data = dataPriv.get(this), queue = data[type + "queue"], hooks = data[type + "queueHooks"], timers = jQuery.timers, length = queue ? queue.length : 0;
                    data.finish = true;
                    jQuery.queue(this, type, []);
                    if (hooks && hooks.stop) {
                        hooks.stop.call(this, true);
                    }
                    for (index = timers.length; index--; ) {
                        if (timers[index].elem === this && timers[index].queue === type) {
                            timers[index].anim.stop(true);
                            timers.splice(index, 1);
                        }
                    }
                    for (index = 0; index < length; index++) {
                        if (queue[index] && queue[index].finish) {
                            queue[index].finish.call(this);
                        }
                    }
                    delete data.finish;
                });
            }
        });
        jQuery.each([ "toggle", "show", "hide" ], function(i, name) {
            var cssFn = jQuery.fn[name];
            jQuery.fn[name] = function(speed, easing, callback) {
                return speed == null || typeof speed === "boolean" ? cssFn.apply(this, arguments) : this.animate(genFx(name, true), speed, easing, callback);
            };
        });
        jQuery.each({
            slideDown: genFx("show"),
            slideUp: genFx("hide"),
            slideToggle: genFx("toggle"),
            fadeIn: {
                opacity: "show"
            },
            fadeOut: {
                opacity: "hide"
            },
            fadeToggle: {
                opacity: "toggle"
            }
        }, function(name, props) {
            jQuery.fn[name] = function(speed, easing, callback) {
                return this.animate(props, speed, easing, callback);
            };
        });
        jQuery.timers = [];
        jQuery.fx.tick = function() {
            var timer, i = 0, timers = jQuery.timers;
            fxNow = Date.now();
            for (;i < timers.length; i++) {
                timer = timers[i];
                if (!timer() && timers[i] === timer) {
                    timers.splice(i--, 1);
                }
            }
            if (!timers.length) {
                jQuery.fx.stop();
            }
            fxNow = undefined;
        };
        jQuery.fx.timer = function(timer) {
            jQuery.timers.push(timer);
            jQuery.fx.start();
        };
        jQuery.fx.interval = 13;
        jQuery.fx.start = function() {
            if (inProgress) {
                return;
            }
            inProgress = true;
            schedule();
        };
        jQuery.fx.stop = function() {
            inProgress = null;
        };
        jQuery.fx.speeds = {
            slow: 600,
            fast: 200,
            _default: 400
        };
        jQuery.fn.delay = function(time, type) {
            time = jQuery.fx ? jQuery.fx.speeds[time] || time : time;
            type = type || "fx";
            return this.queue(type, function(next, hooks) {
                var timeout = window.setTimeout(next, time);
                hooks.stop = function() {
                    window.clearTimeout(timeout);
                };
            });
        };
        (function() {
            var input = document.createElement("input"), select = document.createElement("select"), opt = select.appendChild(document.createElement("option"));
            input.type = "checkbox";
            support.checkOn = input.value !== "";
            support.optSelected = opt.selected;
            input = document.createElement("input");
            input.value = "t";
            input.type = "radio";
            support.radioValue = input.value === "t";
        })();
        var boolHook, attrHandle = jQuery.expr.attrHandle;
        jQuery.fn.extend({
            attr: function(name, value) {
                return access(this, jQuery.attr, name, value, arguments.length > 1);
            },
            removeAttr: function(name) {
                return this.each(function() {
                    jQuery.removeAttr(this, name);
                });
            }
        });
        jQuery.extend({
            attr: function(elem, name, value) {
                var ret, hooks, nType = elem.nodeType;
                if (nType === 3 || nType === 8 || nType === 2) {
                    return;
                }
                if (typeof elem.getAttribute === "undefined") {
                    return jQuery.prop(elem, name, value);
                }
                if (nType !== 1 || !jQuery.isXMLDoc(elem)) {
                    hooks = jQuery.attrHooks[name.toLowerCase()] || (jQuery.expr.match.bool.test(name) ? boolHook : undefined);
                }
                if (value !== undefined) {
                    if (value === null) {
                        jQuery.removeAttr(elem, name);
                        return;
                    }
                    if (hooks && "set" in hooks && (ret = hooks.set(elem, value, name)) !== undefined) {
                        return ret;
                    }
                    elem.setAttribute(name, value + "");
                    return value;
                }
                if (hooks && "get" in hooks && (ret = hooks.get(elem, name)) !== null) {
                    return ret;
                }
                ret = jQuery.find.attr(elem, name);
                return ret == null ? undefined : ret;
            },
            attrHooks: {
                type: {
                    set: function(elem, value) {
                        if (!support.radioValue && value === "radio" && nodeName(elem, "input")) {
                            var val = elem.value;
                            elem.setAttribute("type", value);
                            if (val) {
                                elem.value = val;
                            }
                            return value;
                        }
                    }
                }
            },
            removeAttr: function(elem, value) {
                var name, i = 0, attrNames = value && value.match(rnothtmlwhite);
                if (attrNames && elem.nodeType === 1) {
                    while (name = attrNames[i++]) {
                        elem.removeAttribute(name);
                    }
                }
            }
        });
        boolHook = {
            set: function(elem, value, name) {
                if (value === false) {
                    jQuery.removeAttr(elem, name);
                } else {
                    elem.setAttribute(name, name);
                }
                return name;
            }
        };
        jQuery.each(jQuery.expr.match.bool.source.match(/\w+/g), function(i, name) {
            var getter = attrHandle[name] || jQuery.find.attr;
            attrHandle[name] = function(elem, name, isXML) {
                var ret, handle, lowercaseName = name.toLowerCase();
                if (!isXML) {
                    handle = attrHandle[lowercaseName];
                    attrHandle[lowercaseName] = ret;
                    ret = getter(elem, name, isXML) != null ? lowercaseName : null;
                    attrHandle[lowercaseName] = handle;
                }
                return ret;
            };
        });
        var rfocusable = /^(?:input|select|textarea|button)$/i, rclickable = /^(?:a|area)$/i;
        jQuery.fn.extend({
            prop: function(name, value) {
                return access(this, jQuery.prop, name, value, arguments.length > 1);
            },
            removeProp: function(name) {
                return this.each(function() {
                    delete this[jQuery.propFix[name] || name];
                });
            }
        });
        jQuery.extend({
            prop: function(elem, name, value) {
                var ret, hooks, nType = elem.nodeType;
                if (nType === 3 || nType === 8 || nType === 2) {
                    return;
                }
                if (nType !== 1 || !jQuery.isXMLDoc(elem)) {
                    name = jQuery.propFix[name] || name;
                    hooks = jQuery.propHooks[name];
                }
                if (value !== undefined) {
                    if (hooks && "set" in hooks && (ret = hooks.set(elem, value, name)) !== undefined) {
                        return ret;
                    }
                    return elem[name] = value;
                }
                if (hooks && "get" in hooks && (ret = hooks.get(elem, name)) !== null) {
                    return ret;
                }
                return elem[name];
            },
            propHooks: {
                tabIndex: {
                    get: function(elem) {
                        var tabindex = jQuery.find.attr(elem, "tabindex");
                        if (tabindex) {
                            return parseInt(tabindex, 10);
                        }
                        if (rfocusable.test(elem.nodeName) || rclickable.test(elem.nodeName) && elem.href) {
                            return 0;
                        }
                        return -1;
                    }
                }
            },
            propFix: {
                for: "htmlFor",
                class: "className"
            }
        });
        if (!support.optSelected) {
            jQuery.propHooks.selected = {
                get: function(elem) {
                    var parent = elem.parentNode;
                    if (parent && parent.parentNode) {
                        parent.parentNode.selectedIndex;
                    }
                    return null;
                },
                set: function(elem) {
                    var parent = elem.parentNode;
                    if (parent) {
                        parent.selectedIndex;
                        if (parent.parentNode) {
                            parent.parentNode.selectedIndex;
                        }
                    }
                }
            };
        }
        jQuery.each([ "tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable" ], function() {
            jQuery.propFix[this.toLowerCase()] = this;
        });
        function stripAndCollapse(value) {
            var tokens = value.match(rnothtmlwhite) || [];
            return tokens.join(" ");
        }
        function getClass(elem) {
            return elem.getAttribute && elem.getAttribute("class") || "";
        }
        function classesToArray(value) {
            if (Array.isArray(value)) {
                return value;
            }
            if (typeof value === "string") {
                return value.match(rnothtmlwhite) || [];
            }
            return [];
        }
        jQuery.fn.extend({
            addClass: function(value) {
                var classes, elem, cur, curValue, clazz, j, finalValue, i = 0;
                if (isFunction(value)) {
                    return this.each(function(j) {
                        jQuery(this).addClass(value.call(this, j, getClass(this)));
                    });
                }
                classes = classesToArray(value);
                if (classes.length) {
                    while (elem = this[i++]) {
                        curValue = getClass(elem);
                        cur = elem.nodeType === 1 && " " + stripAndCollapse(curValue) + " ";
                        if (cur) {
                            j = 0;
                            while (clazz = classes[j++]) {
                                if (cur.indexOf(" " + clazz + " ") < 0) {
                                    cur += clazz + " ";
                                }
                            }
                            finalValue = stripAndCollapse(cur);
                            if (curValue !== finalValue) {
                                elem.setAttribute("class", finalValue);
                            }
                        }
                    }
                }
                return this;
            },
            removeClass: function(value) {
                var classes, elem, cur, curValue, clazz, j, finalValue, i = 0;
                if (isFunction(value)) {
                    return this.each(function(j) {
                        jQuery(this).removeClass(value.call(this, j, getClass(this)));
                    });
                }
                if (!arguments.length) {
                    return this.attr("class", "");
                }
                classes = classesToArray(value);
                if (classes.length) {
                    while (elem = this[i++]) {
                        curValue = getClass(elem);
                        cur = elem.nodeType === 1 && " " + stripAndCollapse(curValue) + " ";
                        if (cur) {
                            j = 0;
                            while (clazz = classes[j++]) {
                                while (cur.indexOf(" " + clazz + " ") > -1) {
                                    cur = cur.replace(" " + clazz + " ", " ");
                                }
                            }
                            finalValue = stripAndCollapse(cur);
                            if (curValue !== finalValue) {
                                elem.setAttribute("class", finalValue);
                            }
                        }
                    }
                }
                return this;
            },
            toggleClass: function(value, stateVal) {
                var type = typeof value, isValidValue = type === "string" || Array.isArray(value);
                if (typeof stateVal === "boolean" && isValidValue) {
                    return stateVal ? this.addClass(value) : this.removeClass(value);
                }
                if (isFunction(value)) {
                    return this.each(function(i) {
                        jQuery(this).toggleClass(value.call(this, i, getClass(this), stateVal), stateVal);
                    });
                }
                return this.each(function() {
                    var className, i, self, classNames;
                    if (isValidValue) {
                        i = 0;
                        self = jQuery(this);
                        classNames = classesToArray(value);
                        while (className = classNames[i++]) {
                            if (self.hasClass(className)) {
                                self.removeClass(className);
                            } else {
                                self.addClass(className);
                            }
                        }
                    } else if (value === undefined || type === "boolean") {
                        className = getClass(this);
                        if (className) {
                            dataPriv.set(this, "__className__", className);
                        }
                        if (this.setAttribute) {
                            this.setAttribute("class", className || value === false ? "" : dataPriv.get(this, "__className__") || "");
                        }
                    }
                });
            },
            hasClass: function(selector) {
                var className, elem, i = 0;
                className = " " + selector + " ";
                while (elem = this[i++]) {
                    if (elem.nodeType === 1 && (" " + stripAndCollapse(getClass(elem)) + " ").indexOf(className) > -1) {
                        return true;
                    }
                }
                return false;
            }
        });
        var rreturn = /\r/g;
        jQuery.fn.extend({
            val: function(value) {
                var hooks, ret, valueIsFunction, elem = this[0];
                if (!arguments.length) {
                    if (elem) {
                        hooks = jQuery.valHooks[elem.type] || jQuery.valHooks[elem.nodeName.toLowerCase()];
                        if (hooks && "get" in hooks && (ret = hooks.get(elem, "value")) !== undefined) {
                            return ret;
                        }
                        ret = elem.value;
                        if (typeof ret === "string") {
                            return ret.replace(rreturn, "");
                        }
                        return ret == null ? "" : ret;
                    }
                    return;
                }
                valueIsFunction = isFunction(value);
                return this.each(function(i) {
                    var val;
                    if (this.nodeType !== 1) {
                        return;
                    }
                    if (valueIsFunction) {
                        val = value.call(this, i, jQuery(this).val());
                    } else {
                        val = value;
                    }
                    if (val == null) {
                        val = "";
                    } else if (typeof val === "number") {
                        val += "";
                    } else if (Array.isArray(val)) {
                        val = jQuery.map(val, function(value) {
                            return value == null ? "" : value + "";
                        });
                    }
                    hooks = jQuery.valHooks[this.type] || jQuery.valHooks[this.nodeName.toLowerCase()];
                    if (!hooks || !("set" in hooks) || hooks.set(this, val, "value") === undefined) {
                        this.value = val;
                    }
                });
            }
        });
        jQuery.extend({
            valHooks: {
                option: {
                    get: function(elem) {
                        var val = jQuery.find.attr(elem, "value");
                        return val != null ? val : stripAndCollapse(jQuery.text(elem));
                    }
                },
                select: {
                    get: function(elem) {
                        var value, option, i, options = elem.options, index = elem.selectedIndex, one = elem.type === "select-one", values = one ? null : [], max = one ? index + 1 : options.length;
                        if (index < 0) {
                            i = max;
                        } else {
                            i = one ? index : 0;
                        }
                        for (;i < max; i++) {
                            option = options[i];
                            if ((option.selected || i === index) && !option.disabled && (!option.parentNode.disabled || !nodeName(option.parentNode, "optgroup"))) {
                                value = jQuery(option).val();
                                if (one) {
                                    return value;
                                }
                                values.push(value);
                            }
                        }
                        return values;
                    },
                    set: function(elem, value) {
                        var optionSet, option, options = elem.options, values = jQuery.makeArray(value), i = options.length;
                        while (i--) {
                            option = options[i];
                            if (option.selected = jQuery.inArray(jQuery.valHooks.option.get(option), values) > -1) {
                                optionSet = true;
                            }
                        }
                        if (!optionSet) {
                            elem.selectedIndex = -1;
                        }
                        return values;
                    }
                }
            }
        });
        jQuery.each([ "radio", "checkbox" ], function() {
            jQuery.valHooks[this] = {
                set: function(elem, value) {
                    if (Array.isArray(value)) {
                        return elem.checked = jQuery.inArray(jQuery(elem).val(), value) > -1;
                    }
                }
            };
            if (!support.checkOn) {
                jQuery.valHooks[this].get = function(elem) {
                    return elem.getAttribute("value") === null ? "on" : elem.value;
                };
            }
        });
        support.focusin = "onfocusin" in window;
        var rfocusMorph = /^(?:focusinfocus|focusoutblur)$/, stopPropagationCallback = function(e) {
            e.stopPropagation();
        };
        jQuery.extend(jQuery.event, {
            trigger: function(event, data, elem, onlyHandlers) {
                var i, cur, tmp, bubbleType, ontype, handle, special, lastElement, eventPath = [ elem || document ], type = hasOwn.call(event, "type") ? event.type : event, namespaces = hasOwn.call(event, "namespace") ? event.namespace.split(".") : [];
                cur = lastElement = tmp = elem = elem || document;
                if (elem.nodeType === 3 || elem.nodeType === 8) {
                    return;
                }
                if (rfocusMorph.test(type + jQuery.event.triggered)) {
                    return;
                }
                if (type.indexOf(".") > -1) {
                    namespaces = type.split(".");
                    type = namespaces.shift();
                    namespaces.sort();
                }
                ontype = type.indexOf(":") < 0 && "on" + type;
                event = event[jQuery.expando] ? event : new jQuery.Event(type, typeof event === "object" && event);
                event.isTrigger = onlyHandlers ? 2 : 3;
                event.namespace = namespaces.join(".");
                event.rnamespace = event.namespace ? new RegExp("(^|\\.)" + namespaces.join("\\.(?:.*\\.|)") + "(\\.|$)") : null;
                event.result = undefined;
                if (!event.target) {
                    event.target = elem;
                }
                data = data == null ? [ event ] : jQuery.makeArray(data, [ event ]);
                special = jQuery.event.special[type] || {};
                if (!onlyHandlers && special.trigger && special.trigger.apply(elem, data) === false) {
                    return;
                }
                if (!onlyHandlers && !special.noBubble && !isWindow(elem)) {
                    bubbleType = special.delegateType || type;
                    if (!rfocusMorph.test(bubbleType + type)) {
                        cur = cur.parentNode;
                    }
                    for (;cur; cur = cur.parentNode) {
                        eventPath.push(cur);
                        tmp = cur;
                    }
                    if (tmp === (elem.ownerDocument || document)) {
                        eventPath.push(tmp.defaultView || tmp.parentWindow || window);
                    }
                }
                i = 0;
                while ((cur = eventPath[i++]) && !event.isPropagationStopped()) {
                    lastElement = cur;
                    event.type = i > 1 ? bubbleType : special.bindType || type;
                    handle = (dataPriv.get(cur, "events") || {})[event.type] && dataPriv.get(cur, "handle");
                    if (handle) {
                        handle.apply(cur, data);
                    }
                    handle = ontype && cur[ontype];
                    if (handle && handle.apply && acceptData(cur)) {
                        event.result = handle.apply(cur, data);
                        if (event.result === false) {
                            event.preventDefault();
                        }
                    }
                }
                event.type = type;
                if (!onlyHandlers && !event.isDefaultPrevented()) {
                    if ((!special._default || special._default.apply(eventPath.pop(), data) === false) && acceptData(elem)) {
                        if (ontype && isFunction(elem[type]) && !isWindow(elem)) {
                            tmp = elem[ontype];
                            if (tmp) {
                                elem[ontype] = null;
                            }
                            jQuery.event.triggered = type;
                            if (event.isPropagationStopped()) {
                                lastElement.addEventListener(type, stopPropagationCallback);
                            }
                            elem[type]();
                            if (event.isPropagationStopped()) {
                                lastElement.removeEventListener(type, stopPropagationCallback);
                            }
                            jQuery.event.triggered = undefined;
                            if (tmp) {
                                elem[ontype] = tmp;
                            }
                        }
                    }
                }
                return event.result;
            },
            simulate: function(type, elem, event) {
                var e = jQuery.extend(new jQuery.Event(), event, {
                    type: type,
                    isSimulated: true
                });
                jQuery.event.trigger(e, null, elem);
            }
        });
        jQuery.fn.extend({
            trigger: function(type, data) {
                return this.each(function() {
                    jQuery.event.trigger(type, data, this);
                });
            },
            triggerHandler: function(type, data) {
                var elem = this[0];
                if (elem) {
                    return jQuery.event.trigger(type, data, elem, true);
                }
            }
        });
        if (!support.focusin) {
            jQuery.each({
                focus: "focusin",
                blur: "focusout"
            }, function(orig, fix) {
                var handler = function(event) {
                    jQuery.event.simulate(fix, event.target, jQuery.event.fix(event));
                };
                jQuery.event.special[fix] = {
                    setup: function() {
                        var doc = this.ownerDocument || this, attaches = dataPriv.access(doc, fix);
                        if (!attaches) {
                            doc.addEventListener(orig, handler, true);
                        }
                        dataPriv.access(doc, fix, (attaches || 0) + 1);
                    },
                    teardown: function() {
                        var doc = this.ownerDocument || this, attaches = dataPriv.access(doc, fix) - 1;
                        if (!attaches) {
                            doc.removeEventListener(orig, handler, true);
                            dataPriv.remove(doc, fix);
                        } else {
                            dataPriv.access(doc, fix, attaches);
                        }
                    }
                };
            });
        }
        var location = window.location;
        var nonce = Date.now();
        var rquery = /\?/;
        jQuery.parseXML = function(data) {
            var xml;
            if (!data || typeof data !== "string") {
                return null;
            }
            try {
                xml = new window.DOMParser().parseFromString(data, "text/xml");
            } catch (e) {
                xml = undefined;
            }
            if (!xml || xml.getElementsByTagName("parsererror").length) {
                jQuery.error("Invalid XML: " + data);
            }
            return xml;
        };
        var rbracket = /\[\]$/, rCRLF = /\r?\n/g, rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i, rsubmittable = /^(?:input|select|textarea|keygen)/i;
        function buildParams(prefix, obj, traditional, add) {
            var name;
            if (Array.isArray(obj)) {
                jQuery.each(obj, function(i, v) {
                    if (traditional || rbracket.test(prefix)) {
                        add(prefix, v);
                    } else {
                        buildParams(prefix + "[" + (typeof v === "object" && v != null ? i : "") + "]", v, traditional, add);
                    }
                });
            } else if (!traditional && toType(obj) === "object") {
                for (name in obj) {
                    buildParams(prefix + "[" + name + "]", obj[name], traditional, add);
                }
            } else {
                add(prefix, obj);
            }
        }
        jQuery.param = function(a, traditional) {
            var prefix, s = [], add = function(key, valueOrFunction) {
                var value = isFunction(valueOrFunction) ? valueOrFunction() : valueOrFunction;
                s[s.length] = encodeURIComponent(key) + "=" + encodeURIComponent(value == null ? "" : value);
            };
            if (a == null) {
                return "";
            }
            if (Array.isArray(a) || a.jquery && !jQuery.isPlainObject(a)) {
                jQuery.each(a, function() {
                    add(this.name, this.value);
                });
            } else {
                for (prefix in a) {
                    buildParams(prefix, a[prefix], traditional, add);
                }
            }
            return s.join("&");
        };
        jQuery.fn.extend({
            serialize: function() {
                return jQuery.param(this.serializeArray());
            },
            serializeArray: function() {
                return this.map(function() {
                    var elements = jQuery.prop(this, "elements");
                    return elements ? jQuery.makeArray(elements) : this;
                }).filter(function() {
                    var type = this.type;
                    return this.name && !jQuery(this).is(":disabled") && rsubmittable.test(this.nodeName) && !rsubmitterTypes.test(type) && (this.checked || !rcheckableType.test(type));
                }).map(function(i, elem) {
                    var val = jQuery(this).val();
                    if (val == null) {
                        return null;
                    }
                    if (Array.isArray(val)) {
                        return jQuery.map(val, function(val) {
                            return {
                                name: elem.name,
                                value: val.replace(rCRLF, "\r\n")
                            };
                        });
                    }
                    return {
                        name: elem.name,
                        value: val.replace(rCRLF, "\r\n")
                    };
                }).get();
            }
        });
        var r20 = /%20/g, rhash = /#.*$/, rantiCache = /([?&])_=[^&]*/, rheaders = /^(.*?):[ \t]*([^\r\n]*)$/gm, rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, rnoContent = /^(?:GET|HEAD)$/, rprotocol = /^\/\//, prefilters = {}, transports = {}, allTypes = "*/".concat("*"), originAnchor = document.createElement("a");
        originAnchor.href = location.href;
        function addToPrefiltersOrTransports(structure) {
            return function(dataTypeExpression, func) {
                if (typeof dataTypeExpression !== "string") {
                    func = dataTypeExpression;
                    dataTypeExpression = "*";
                }
                var dataType, i = 0, dataTypes = dataTypeExpression.toLowerCase().match(rnothtmlwhite) || [];
                if (isFunction(func)) {
                    while (dataType = dataTypes[i++]) {
                        if (dataType[0] === "+") {
                            dataType = dataType.slice(1) || "*";
                            (structure[dataType] = structure[dataType] || []).unshift(func);
                        } else {
                            (structure[dataType] = structure[dataType] || []).push(func);
                        }
                    }
                }
            };
        }
        function inspectPrefiltersOrTransports(structure, options, originalOptions, jqXHR) {
            var inspected = {}, seekingTransport = structure === transports;
            function inspect(dataType) {
                var selected;
                inspected[dataType] = true;
                jQuery.each(structure[dataType] || [], function(_, prefilterOrFactory) {
                    var dataTypeOrTransport = prefilterOrFactory(options, originalOptions, jqXHR);
                    if (typeof dataTypeOrTransport === "string" && !seekingTransport && !inspected[dataTypeOrTransport]) {
                        options.dataTypes.unshift(dataTypeOrTransport);
                        inspect(dataTypeOrTransport);
                        return false;
                    } else if (seekingTransport) {
                        return !(selected = dataTypeOrTransport);
                    }
                });
                return selected;
            }
            return inspect(options.dataTypes[0]) || !inspected["*"] && inspect("*");
        }
        function ajaxExtend(target, src) {
            var key, deep, flatOptions = jQuery.ajaxSettings.flatOptions || {};
            for (key in src) {
                if (src[key] !== undefined) {
                    (flatOptions[key] ? target : deep || (deep = {}))[key] = src[key];
                }
            }
            if (deep) {
                jQuery.extend(true, target, deep);
            }
            return target;
        }
        function ajaxHandleResponses(s, jqXHR, responses) {
            var ct, type, finalDataType, firstDataType, contents = s.contents, dataTypes = s.dataTypes;
            while (dataTypes[0] === "*") {
                dataTypes.shift();
                if (ct === undefined) {
                    ct = s.mimeType || jqXHR.getResponseHeader("Content-Type");
                }
            }
            if (ct) {
                for (type in contents) {
                    if (contents[type] && contents[type].test(ct)) {
                        dataTypes.unshift(type);
                        break;
                    }
                }
            }
            if (dataTypes[0] in responses) {
                finalDataType = dataTypes[0];
            } else {
                for (type in responses) {
                    if (!dataTypes[0] || s.converters[type + " " + dataTypes[0]]) {
                        finalDataType = type;
                        break;
                    }
                    if (!firstDataType) {
                        firstDataType = type;
                    }
                }
                finalDataType = finalDataType || firstDataType;
            }
            if (finalDataType) {
                if (finalDataType !== dataTypes[0]) {
                    dataTypes.unshift(finalDataType);
                }
                return responses[finalDataType];
            }
        }
        function ajaxConvert(s, response, jqXHR, isSuccess) {
            var conv2, current, conv, tmp, prev, converters = {}, dataTypes = s.dataTypes.slice();
            if (dataTypes[1]) {
                for (conv in s.converters) {
                    converters[conv.toLowerCase()] = s.converters[conv];
                }
            }
            current = dataTypes.shift();
            while (current) {
                if (s.responseFields[current]) {
                    jqXHR[s.responseFields[current]] = response;
                }
                if (!prev && isSuccess && s.dataFilter) {
                    response = s.dataFilter(response, s.dataType);
                }
                prev = current;
                current = dataTypes.shift();
                if (current) {
                    if (current === "*") {
                        current = prev;
                    } else if (prev !== "*" && prev !== current) {
                        conv = converters[prev + " " + current] || converters["* " + current];
                        if (!conv) {
                            for (conv2 in converters) {
                                tmp = conv2.split(" ");
                                if (tmp[1] === current) {
                                    conv = converters[prev + " " + tmp[0]] || converters["* " + tmp[0]];
                                    if (conv) {
                                        if (conv === true) {
                                            conv = converters[conv2];
                                        } else if (converters[conv2] !== true) {
                                            current = tmp[0];
                                            dataTypes.unshift(tmp[1]);
                                        }
                                        break;
                                    }
                                }
                            }
                        }
                        if (conv !== true) {
                            if (conv && s.throws) {
                                response = conv(response);
                            } else {
                                try {
                                    response = conv(response);
                                } catch (e) {
                                    return {
                                        state: "parsererror",
                                        error: conv ? e : "No conversion from " + prev + " to " + current
                                    };
                                }
                            }
                        }
                    }
                }
            }
            return {
                state: "success",
                data: response
            };
        }
        jQuery.extend({
            active: 0,
            lastModified: {},
            etag: {},
            ajaxSettings: {
                url: location.href,
                type: "GET",
                isLocal: rlocalProtocol.test(location.protocol),
                global: true,
                processData: true,
                async: true,
                contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                accepts: {
                    "*": allTypes,
                    text: "text/plain",
                    html: "text/html",
                    xml: "application/xml, text/xml",
                    json: "application/json, text/javascript"
                },
                contents: {
                    xml: /\bxml\b/,
                    html: /\bhtml/,
                    json: /\bjson\b/
                },
                responseFields: {
                    xml: "responseXML",
                    text: "responseText",
                    json: "responseJSON"
                },
                converters: {
                    "* text": String,
                    "text html": true,
                    "text json": JSON.parse,
                    "text xml": jQuery.parseXML
                },
                flatOptions: {
                    url: true,
                    context: true
                }
            },
            ajaxSetup: function(target, settings) {
                return settings ? ajaxExtend(ajaxExtend(target, jQuery.ajaxSettings), settings) : ajaxExtend(jQuery.ajaxSettings, target);
            },
            ajaxPrefilter: addToPrefiltersOrTransports(prefilters),
            ajaxTransport: addToPrefiltersOrTransports(transports),
            ajax: function(url, options) {
                if (typeof url === "object") {
                    options = url;
                    url = undefined;
                }
                options = options || {};
                var transport, cacheURL, responseHeadersString, responseHeaders, timeoutTimer, urlAnchor, completed, fireGlobals, i, uncached, s = jQuery.ajaxSetup({}, options), callbackContext = s.context || s, globalEventContext = s.context && (callbackContext.nodeType || callbackContext.jquery) ? jQuery(callbackContext) : jQuery.event, deferred = jQuery.Deferred(), completeDeferred = jQuery.Callbacks("once memory"), statusCode = s.statusCode || {}, requestHeaders = {}, requestHeadersNames = {}, strAbort = "canceled", jqXHR = {
                    readyState: 0,
                    getResponseHeader: function(key) {
                        var match;
                        if (completed) {
                            if (!responseHeaders) {
                                responseHeaders = {};
                                while (match = rheaders.exec(responseHeadersString)) {
                                    responseHeaders[match[1].toLowerCase() + " "] = (responseHeaders[match[1].toLowerCase() + " "] || []).concat(match[2]);
                                }
                            }
                            match = responseHeaders[key.toLowerCase() + " "];
                        }
                        return match == null ? null : match.join(", ");
                    },
                    getAllResponseHeaders: function() {
                        return completed ? responseHeadersString : null;
                    },
                    setRequestHeader: function(name, value) {
                        if (completed == null) {
                            name = requestHeadersNames[name.toLowerCase()] = requestHeadersNames[name.toLowerCase()] || name;
                            requestHeaders[name] = value;
                        }
                        return this;
                    },
                    overrideMimeType: function(type) {
                        if (completed == null) {
                            s.mimeType = type;
                        }
                        return this;
                    },
                    statusCode: function(map) {
                        var code;
                        if (map) {
                            if (completed) {
                                jqXHR.always(map[jqXHR.status]);
                            } else {
                                for (code in map) {
                                    statusCode[code] = [ statusCode[code], map[code] ];
                                }
                            }
                        }
                        return this;
                    },
                    abort: function(statusText) {
                        var finalText = statusText || strAbort;
                        if (transport) {
                            transport.abort(finalText);
                        }
                        done(0, finalText);
                        return this;
                    }
                };
                deferred.promise(jqXHR);
                s.url = ((url || s.url || location.href) + "").replace(rprotocol, location.protocol + "//");
                s.type = options.method || options.type || s.method || s.type;
                s.dataTypes = (s.dataType || "*").toLowerCase().match(rnothtmlwhite) || [ "" ];
                if (s.crossDomain == null) {
                    urlAnchor = document.createElement("a");
                    try {
                        urlAnchor.href = s.url;
                        urlAnchor.href = urlAnchor.href;
                        s.crossDomain = originAnchor.protocol + "//" + originAnchor.host !== urlAnchor.protocol + "//" + urlAnchor.host;
                    } catch (e) {
                        s.crossDomain = true;
                    }
                }
                if (s.data && s.processData && typeof s.data !== "string") {
                    s.data = jQuery.param(s.data, s.traditional);
                }
                inspectPrefiltersOrTransports(prefilters, s, options, jqXHR);
                if (completed) {
                    return jqXHR;
                }
                fireGlobals = jQuery.event && s.global;
                if (fireGlobals && jQuery.active++ === 0) {
                    jQuery.event.trigger("ajaxStart");
                }
                s.type = s.type.toUpperCase();
                s.hasContent = !rnoContent.test(s.type);
                cacheURL = s.url.replace(rhash, "");
                if (!s.hasContent) {
                    uncached = s.url.slice(cacheURL.length);
                    if (s.data && (s.processData || typeof s.data === "string")) {
                        cacheURL += (rquery.test(cacheURL) ? "&" : "?") + s.data;
                        delete s.data;
                    }
                    if (s.cache === false) {
                        cacheURL = cacheURL.replace(rantiCache, "$1");
                        uncached = (rquery.test(cacheURL) ? "&" : "?") + "_=" + nonce++ + uncached;
                    }
                    s.url = cacheURL + uncached;
                } else if (s.data && s.processData && (s.contentType || "").indexOf("application/x-www-form-urlencoded") === 0) {
                    s.data = s.data.replace(r20, "+");
                }
                if (s.ifModified) {
                    if (jQuery.lastModified[cacheURL]) {
                        jqXHR.setRequestHeader("If-Modified-Since", jQuery.lastModified[cacheURL]);
                    }
                    if (jQuery.etag[cacheURL]) {
                        jqXHR.setRequestHeader("If-None-Match", jQuery.etag[cacheURL]);
                    }
                }
                if (s.data && s.hasContent && s.contentType !== false || options.contentType) {
                    jqXHR.setRequestHeader("Content-Type", s.contentType);
                }
                jqXHR.setRequestHeader("Accept", s.dataTypes[0] && s.accepts[s.dataTypes[0]] ? s.accepts[s.dataTypes[0]] + (s.dataTypes[0] !== "*" ? ", " + allTypes + "; q=0.01" : "") : s.accepts["*"]);
                for (i in s.headers) {
                    jqXHR.setRequestHeader(i, s.headers[i]);
                }
                if (s.beforeSend && (s.beforeSend.call(callbackContext, jqXHR, s) === false || completed)) {
                    return jqXHR.abort();
                }
                strAbort = "abort";
                completeDeferred.add(s.complete);
                jqXHR.done(s.success);
                jqXHR.fail(s.error);
                transport = inspectPrefiltersOrTransports(transports, s, options, jqXHR);
                if (!transport) {
                    done(-1, "No Transport");
                } else {
                    jqXHR.readyState = 1;
                    if (fireGlobals) {
                        globalEventContext.trigger("ajaxSend", [ jqXHR, s ]);
                    }
                    if (completed) {
                        return jqXHR;
                    }
                    if (s.async && s.timeout > 0) {
                        timeoutTimer = window.setTimeout(function() {
                            jqXHR.abort("timeout");
                        }, s.timeout);
                    }
                    try {
                        completed = false;
                        transport.send(requestHeaders, done);
                    } catch (e) {
                        if (completed) {
                            throw e;
                        }
                        done(-1, e);
                    }
                }
                function done(status, nativeStatusText, responses, headers) {
                    var isSuccess, success, error, response, modified, statusText = nativeStatusText;
                    if (completed) {
                        return;
                    }
                    completed = true;
                    if (timeoutTimer) {
                        window.clearTimeout(timeoutTimer);
                    }
                    transport = undefined;
                    responseHeadersString = headers || "";
                    jqXHR.readyState = status > 0 ? 4 : 0;
                    isSuccess = status >= 200 && status < 300 || status === 304;
                    if (responses) {
                        response = ajaxHandleResponses(s, jqXHR, responses);
                    }
                    response = ajaxConvert(s, response, jqXHR, isSuccess);
                    if (isSuccess) {
                        if (s.ifModified) {
                            modified = jqXHR.getResponseHeader("Last-Modified");
                            if (modified) {
                                jQuery.lastModified[cacheURL] = modified;
                            }
                            modified = jqXHR.getResponseHeader("etag");
                            if (modified) {
                                jQuery.etag[cacheURL] = modified;
                            }
                        }
                        if (status === 204 || s.type === "HEAD") {
                            statusText = "nocontent";
                        } else if (status === 304) {
                            statusText = "notmodified";
                        } else {
                            statusText = response.state;
                            success = response.data;
                            error = response.error;
                            isSuccess = !error;
                        }
                    } else {
                        error = statusText;
                        if (status || !statusText) {
                            statusText = "error";
                            if (status < 0) {
                                status = 0;
                            }
                        }
                    }
                    jqXHR.status = status;
                    jqXHR.statusText = (nativeStatusText || statusText) + "";
                    if (isSuccess) {
                        deferred.resolveWith(callbackContext, [ success, statusText, jqXHR ]);
                    } else {
                        deferred.rejectWith(callbackContext, [ jqXHR, statusText, error ]);
                    }
                    jqXHR.statusCode(statusCode);
                    statusCode = undefined;
                    if (fireGlobals) {
                        globalEventContext.trigger(isSuccess ? "ajaxSuccess" : "ajaxError", [ jqXHR, s, isSuccess ? success : error ]);
                    }
                    completeDeferred.fireWith(callbackContext, [ jqXHR, statusText ]);
                    if (fireGlobals) {
                        globalEventContext.trigger("ajaxComplete", [ jqXHR, s ]);
                        if (!--jQuery.active) {
                            jQuery.event.trigger("ajaxStop");
                        }
                    }
                }
                return jqXHR;
            },
            getJSON: function(url, data, callback) {
                return jQuery.get(url, data, callback, "json");
            },
            getScript: function(url, callback) {
                return jQuery.get(url, undefined, callback, "script");
            }
        });
        jQuery.each([ "get", "post" ], function(i, method) {
            jQuery[method] = function(url, data, callback, type) {
                if (isFunction(data)) {
                    type = type || callback;
                    callback = data;
                    data = undefined;
                }
                return jQuery.ajax(jQuery.extend({
                    url: url,
                    type: method,
                    dataType: type,
                    data: data,
                    success: callback
                }, jQuery.isPlainObject(url) && url));
            };
        });
        jQuery._evalUrl = function(url, options) {
            return jQuery.ajax({
                url: url,
                type: "GET",
                dataType: "script",
                cache: true,
                async: false,
                global: false,
                converters: {
                    "text script": function() {}
                },
                dataFilter: function(response) {
                    jQuery.globalEval(response, options);
                }
            });
        };
        jQuery.fn.extend({
            wrapAll: function(html) {
                var wrap;
                if (this[0]) {
                    if (isFunction(html)) {
                        html = html.call(this[0]);
                    }
                    wrap = jQuery(html, this[0].ownerDocument).eq(0).clone(true);
                    if (this[0].parentNode) {
                        wrap.insertBefore(this[0]);
                    }
                    wrap.map(function() {
                        var elem = this;
                        while (elem.firstElementChild) {
                            elem = elem.firstElementChild;
                        }
                        return elem;
                    }).append(this);
                }
                return this;
            },
            wrapInner: function(html) {
                if (isFunction(html)) {
                    return this.each(function(i) {
                        jQuery(this).wrapInner(html.call(this, i));
                    });
                }
                return this.each(function() {
                    var self = jQuery(this), contents = self.contents();
                    if (contents.length) {
                        contents.wrapAll(html);
                    } else {
                        self.append(html);
                    }
                });
            },
            wrap: function(html) {
                var htmlIsFunction = isFunction(html);
                return this.each(function(i) {
                    jQuery(this).wrapAll(htmlIsFunction ? html.call(this, i) : html);
                });
            },
            unwrap: function(selector) {
                this.parent(selector).not("body").each(function() {
                    jQuery(this).replaceWith(this.childNodes);
                });
                return this;
            }
        });
        jQuery.expr.pseudos.hidden = function(elem) {
            return !jQuery.expr.pseudos.visible(elem);
        };
        jQuery.expr.pseudos.visible = function(elem) {
            return !!(elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length);
        };
        jQuery.ajaxSettings.xhr = function() {
            try {
                return new window.XMLHttpRequest();
            } catch (e) {}
        };
        var xhrSuccessStatus = {
            0: 200,
            1223: 204
        }, xhrSupported = jQuery.ajaxSettings.xhr();
        support.cors = !!xhrSupported && "withCredentials" in xhrSupported;
        support.ajax = xhrSupported = !!xhrSupported;
        jQuery.ajaxTransport(function(options) {
            var callback, errorCallback;
            if (support.cors || xhrSupported && !options.crossDomain) {
                return {
                    send: function(headers, complete) {
                        var i, xhr = options.xhr();
                        xhr.open(options.type, options.url, options.async, options.username, options.password);
                        if (options.xhrFields) {
                            for (i in options.xhrFields) {
                                xhr[i] = options.xhrFields[i];
                            }
                        }
                        if (options.mimeType && xhr.overrideMimeType) {
                            xhr.overrideMimeType(options.mimeType);
                        }
                        if (!options.crossDomain && !headers["X-Requested-With"]) {
                            headers["X-Requested-With"] = "XMLHttpRequest";
                        }
                        for (i in headers) {
                            xhr.setRequestHeader(i, headers[i]);
                        }
                        callback = function(type) {
                            return function() {
                                if (callback) {
                                    callback = errorCallback = xhr.onload = xhr.onerror = xhr.onabort = xhr.ontimeout = xhr.onreadystatechange = null;
                                    if (type === "abort") {
                                        xhr.abort();
                                    } else if (type === "error") {
                                        if (typeof xhr.status !== "number") {
                                            complete(0, "error");
                                        } else {
                                            complete(xhr.status, xhr.statusText);
                                        }
                                    } else {
                                        complete(xhrSuccessStatus[xhr.status] || xhr.status, xhr.statusText, (xhr.responseType || "text") !== "text" || typeof xhr.responseText !== "string" ? {
                                            binary: xhr.response
                                        } : {
                                            text: xhr.responseText
                                        }, xhr.getAllResponseHeaders());
                                    }
                                }
                            };
                        };
                        xhr.onload = callback();
                        errorCallback = xhr.onerror = xhr.ontimeout = callback("error");
                        if (xhr.onabort !== undefined) {
                            xhr.onabort = errorCallback;
                        } else {
                            xhr.onreadystatechange = function() {
                                if (xhr.readyState === 4) {
                                    window.setTimeout(function() {
                                        if (callback) {
                                            errorCallback();
                                        }
                                    });
                                }
                            };
                        }
                        callback = callback("abort");
                        try {
                            xhr.send(options.hasContent && options.data || null);
                        } catch (e) {
                            if (callback) {
                                throw e;
                            }
                        }
                    },
                    abort: function() {
                        if (callback) {
                            callback();
                        }
                    }
                };
            }
        });
        jQuery.ajaxPrefilter(function(s) {
            if (s.crossDomain) {
                s.contents.script = false;
            }
        });
        jQuery.ajaxSetup({
            accepts: {
                script: "text/javascript, application/javascript, " + "application/ecmascript, application/x-ecmascript"
            },
            contents: {
                script: /\b(?:java|ecma)script\b/
            },
            converters: {
                "text script": function(text) {
                    jQuery.globalEval(text);
                    return text;
                }
            }
        });
        jQuery.ajaxPrefilter("script", function(s) {
            if (s.cache === undefined) {
                s.cache = false;
            }
            if (s.crossDomain) {
                s.type = "GET";
            }
        });
        jQuery.ajaxTransport("script", function(s) {
            if (s.crossDomain || s.scriptAttrs) {
                var script, callback;
                return {
                    send: function(_, complete) {
                        script = jQuery("<script>").attr(s.scriptAttrs || {}).prop({
                            charset: s.scriptCharset,
                            src: s.url
                        }).on("load error", callback = function(evt) {
                            script.remove();
                            callback = null;
                            if (evt) {
                                complete(evt.type === "error" ? 404 : 200, evt.type);
                            }
                        });
                        document.head.appendChild(script[0]);
                    },
                    abort: function() {
                        if (callback) {
                            callback();
                        }
                    }
                };
            }
        });
        var oldCallbacks = [], rjsonp = /(=)\?(?=&|$)|\?\?/;
        jQuery.ajaxSetup({
            jsonp: "callback",
            jsonpCallback: function() {
                var callback = oldCallbacks.pop() || jQuery.expando + "_" + nonce++;
                this[callback] = true;
                return callback;
            }
        });
        jQuery.ajaxPrefilter("json jsonp", function(s, originalSettings, jqXHR) {
            var callbackName, overwritten, responseContainer, jsonProp = s.jsonp !== false && (rjsonp.test(s.url) ? "url" : typeof s.data === "string" && (s.contentType || "").indexOf("application/x-www-form-urlencoded") === 0 && rjsonp.test(s.data) && "data");
            if (jsonProp || s.dataTypes[0] === "jsonp") {
                callbackName = s.jsonpCallback = isFunction(s.jsonpCallback) ? s.jsonpCallback() : s.jsonpCallback;
                if (jsonProp) {
                    s[jsonProp] = s[jsonProp].replace(rjsonp, "$1" + callbackName);
                } else if (s.jsonp !== false) {
                    s.url += (rquery.test(s.url) ? "&" : "?") + s.jsonp + "=" + callbackName;
                }
                s.converters["script json"] = function() {
                    if (!responseContainer) {
                        jQuery.error(callbackName + " was not called");
                    }
                    return responseContainer[0];
                };
                s.dataTypes[0] = "json";
                overwritten = window[callbackName];
                window[callbackName] = function() {
                    responseContainer = arguments;
                };
                jqXHR.always(function() {
                    if (overwritten === undefined) {
                        jQuery(window).removeProp(callbackName);
                    } else {
                        window[callbackName] = overwritten;
                    }
                    if (s[callbackName]) {
                        s.jsonpCallback = originalSettings.jsonpCallback;
                        oldCallbacks.push(callbackName);
                    }
                    if (responseContainer && isFunction(overwritten)) {
                        overwritten(responseContainer[0]);
                    }
                    responseContainer = overwritten = undefined;
                });
                return "script";
            }
        });
        support.createHTMLDocument = function() {
            var body = document.implementation.createHTMLDocument("").body;
            body.innerHTML = "<form></form><form></form>";
            return body.childNodes.length === 2;
        }();
        jQuery.parseHTML = function(data, context, keepScripts) {
            if (typeof data !== "string") {
                return [];
            }
            if (typeof context === "boolean") {
                keepScripts = context;
                context = false;
            }
            var base, parsed, scripts;
            if (!context) {
                if (support.createHTMLDocument) {
                    context = document.implementation.createHTMLDocument("");
                    base = context.createElement("base");
                    base.href = document.location.href;
                    context.head.appendChild(base);
                } else {
                    context = document;
                }
            }
            parsed = rsingleTag.exec(data);
            scripts = !keepScripts && [];
            if (parsed) {
                return [ context.createElement(parsed[1]) ];
            }
            parsed = buildFragment([ data ], context, scripts);
            if (scripts && scripts.length) {
                jQuery(scripts).remove();
            }
            return jQuery.merge([], parsed.childNodes);
        };
        jQuery.fn.load = function(url, params, callback) {
            var selector, type, response, self = this, off = url.indexOf(" ");
            if (off > -1) {
                selector = stripAndCollapse(url.slice(off));
                url = url.slice(0, off);
            }
            if (isFunction(params)) {
                callback = params;
                params = undefined;
            } else if (params && typeof params === "object") {
                type = "POST";
            }
            if (self.length > 0) {
                jQuery.ajax({
                    url: url,
                    type: type || "GET",
                    dataType: "html",
                    data: params
                }).done(function(responseText) {
                    response = arguments;
                    self.html(selector ? jQuery("<div>").append(jQuery.parseHTML(responseText)).find(selector) : responseText);
                }).always(callback && function(jqXHR, status) {
                    self.each(function() {
                        callback.apply(this, response || [ jqXHR.responseText, status, jqXHR ]);
                    });
                });
            }
            return this;
        };
        jQuery.each([ "ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend" ], function(i, type) {
            jQuery.fn[type] = function(fn) {
                return this.on(type, fn);
            };
        });
        jQuery.expr.pseudos.animated = function(elem) {
            return jQuery.grep(jQuery.timers, function(fn) {
                return elem === fn.elem;
            }).length;
        };
        jQuery.offset = {
            setOffset: function(elem, options, i) {
                var curPosition, curLeft, curCSSTop, curTop, curOffset, curCSSLeft, calculatePosition, position = jQuery.css(elem, "position"), curElem = jQuery(elem), props = {};
                if (position === "static") {
                    elem.style.position = "relative";
                }
                curOffset = curElem.offset();
                curCSSTop = jQuery.css(elem, "top");
                curCSSLeft = jQuery.css(elem, "left");
                calculatePosition = (position === "absolute" || position === "fixed") && (curCSSTop + curCSSLeft).indexOf("auto") > -1;
                if (calculatePosition) {
                    curPosition = curElem.position();
                    curTop = curPosition.top;
                    curLeft = curPosition.left;
                } else {
                    curTop = parseFloat(curCSSTop) || 0;
                    curLeft = parseFloat(curCSSLeft) || 0;
                }
                if (isFunction(options)) {
                    options = options.call(elem, i, jQuery.extend({}, curOffset));
                }
                if (options.top != null) {
                    props.top = options.top - curOffset.top + curTop;
                }
                if (options.left != null) {
                    props.left = options.left - curOffset.left + curLeft;
                }
                if ("using" in options) {
                    options.using.call(elem, props);
                } else {
                    curElem.css(props);
                }
            }
        };
        jQuery.fn.extend({
            offset: function(options) {
                if (arguments.length) {
                    return options === undefined ? this : this.each(function(i) {
                        jQuery.offset.setOffset(this, options, i);
                    });
                }
                var rect, win, elem = this[0];
                if (!elem) {
                    return;
                }
                if (!elem.getClientRects().length) {
                    return {
                        top: 0,
                        left: 0
                    };
                }
                rect = elem.getBoundingClientRect();
                win = elem.ownerDocument.defaultView;
                return {
                    top: rect.top + win.pageYOffset,
                    left: rect.left + win.pageXOffset
                };
            },
            position: function() {
                if (!this[0]) {
                    return;
                }
                var offsetParent, offset, doc, elem = this[0], parentOffset = {
                    top: 0,
                    left: 0
                };
                if (jQuery.css(elem, "position") === "fixed") {
                    offset = elem.getBoundingClientRect();
                } else {
                    offset = this.offset();
                    doc = elem.ownerDocument;
                    offsetParent = elem.offsetParent || doc.documentElement;
                    while (offsetParent && (offsetParent === doc.body || offsetParent === doc.documentElement) && jQuery.css(offsetParent, "position") === "static") {
                        offsetParent = offsetParent.parentNode;
                    }
                    if (offsetParent && offsetParent !== elem && offsetParent.nodeType === 1) {
                        parentOffset = jQuery(offsetParent).offset();
                        parentOffset.top += jQuery.css(offsetParent, "borderTopWidth", true);
                        parentOffset.left += jQuery.css(offsetParent, "borderLeftWidth", true);
                    }
                }
                return {
                    top: offset.top - parentOffset.top - jQuery.css(elem, "marginTop", true),
                    left: offset.left - parentOffset.left - jQuery.css(elem, "marginLeft", true)
                };
            },
            offsetParent: function() {
                return this.map(function() {
                    var offsetParent = this.offsetParent;
                    while (offsetParent && jQuery.css(offsetParent, "position") === "static") {
                        offsetParent = offsetParent.offsetParent;
                    }
                    return offsetParent || documentElement;
                });
            }
        });
        jQuery.each({
            scrollLeft: "pageXOffset",
            scrollTop: "pageYOffset"
        }, function(method, prop) {
            var top = "pageYOffset" === prop;
            jQuery.fn[method] = function(val) {
                return access(this, function(elem, method, val) {
                    var win;
                    if (isWindow(elem)) {
                        win = elem;
                    } else if (elem.nodeType === 9) {
                        win = elem.defaultView;
                    }
                    if (val === undefined) {
                        return win ? win[prop] : elem[method];
                    }
                    if (win) {
                        win.scrollTo(!top ? val : win.pageXOffset, top ? val : win.pageYOffset);
                    } else {
                        elem[method] = val;
                    }
                }, method, val, arguments.length);
            };
        });
        jQuery.each([ "top", "left" ], function(i, prop) {
            jQuery.cssHooks[prop] = addGetHookIf(support.pixelPosition, function(elem, computed) {
                if (computed) {
                    computed = curCSS(elem, prop);
                    return rnumnonpx.test(computed) ? jQuery(elem).position()[prop] + "px" : computed;
                }
            });
        });
        jQuery.each({
            Height: "height",
            Width: "width"
        }, function(name, type) {
            jQuery.each({
                padding: "inner" + name,
                content: type,
                "": "outer" + name
            }, function(defaultExtra, funcName) {
                jQuery.fn[funcName] = function(margin, value) {
                    var chainable = arguments.length && (defaultExtra || typeof margin !== "boolean"), extra = defaultExtra || (margin === true || value === true ? "margin" : "border");
                    return access(this, function(elem, type, value) {
                        var doc;
                        if (isWindow(elem)) {
                            return funcName.indexOf("outer") === 0 ? elem["inner" + name] : elem.document.documentElement["client" + name];
                        }
                        if (elem.nodeType === 9) {
                            doc = elem.documentElement;
                            return Math.max(elem.body["scroll" + name], doc["scroll" + name], elem.body["offset" + name], doc["offset" + name], doc["client" + name]);
                        }
                        return value === undefined ? jQuery.css(elem, type, extra) : jQuery.style(elem, type, value, extra);
                    }, type, chainable ? margin : undefined, chainable);
                };
            });
        });
        jQuery.each(("blur focus focusin focusout resize scroll click dblclick " + "mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " + "change select submit keydown keypress keyup contextmenu").split(" "), function(i, name) {
            jQuery.fn[name] = function(data, fn) {
                return arguments.length > 0 ? this.on(name, null, data, fn) : this.trigger(name);
            };
        });
        jQuery.fn.extend({
            hover: function(fnOver, fnOut) {
                return this.mouseenter(fnOver).mouseleave(fnOut || fnOver);
            }
        });
        jQuery.fn.extend({
            bind: function(types, data, fn) {
                return this.on(types, null, data, fn);
            },
            unbind: function(types, fn) {
                return this.off(types, null, fn);
            },
            delegate: function(selector, types, data, fn) {
                return this.on(types, selector, data, fn);
            },
            undelegate: function(selector, types, fn) {
                return arguments.length === 1 ? this.off(selector, "**") : this.off(types, selector || "**", fn);
            }
        });
        jQuery.proxy = function(fn, context) {
            var tmp, args, proxy;
            if (typeof context === "string") {
                tmp = fn[context];
                context = fn;
                fn = tmp;
            }
            if (!isFunction(fn)) {
                return undefined;
            }
            args = slice.call(arguments, 2);
            proxy = function() {
                return fn.apply(context || this, args.concat(slice.call(arguments)));
            };
            proxy.guid = fn.guid = fn.guid || jQuery.guid++;
            return proxy;
        };
        jQuery.holdReady = function(hold) {
            if (hold) {
                jQuery.readyWait++;
            } else {
                jQuery.ready(true);
            }
        };
        jQuery.isArray = Array.isArray;
        jQuery.parseJSON = JSON.parse;
        jQuery.nodeName = nodeName;
        jQuery.isFunction = isFunction;
        jQuery.isWindow = isWindow;
        jQuery.camelCase = camelCase;
        jQuery.type = toType;
        jQuery.now = Date.now;
        jQuery.isNumeric = function(obj) {
            var type = jQuery.type(obj);
            return (type === "number" || type === "string") && !isNaN(obj - parseFloat(obj));
        };
        if (true) {
            !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function() {
                return jQuery;
            }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
        }
        var _jQuery = window.jQuery, _$ = window.$;
        jQuery.noConflict = function(deep) {
            if (window.$ === jQuery) {
                window.$ = _$;
            }
            if (deep && window.jQuery === jQuery) {
                window.jQuery = _jQuery;
            }
            return jQuery;
        };
        if (!noGlobal) {
            window.jQuery = window.$ = jQuery;
        }
        return jQuery;
    });
}, function(module, exports, __webpack_require__) {
    "use strict";
    var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;
    var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function(obj) {
        return typeof obj;
    } : function(obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
    (function(factory) {
        if (true) {
            !(__WEBPACK_AMD_DEFINE_ARRAY__ = [ __webpack_require__(7), __webpack_require__(2) ], 
            __WEBPACK_AMD_DEFINE_FACTORY__ = factory, __WEBPACK_AMD_DEFINE_RESULT__ = typeof __WEBPACK_AMD_DEFINE_FACTORY__ === "function" ? __WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__) : __WEBPACK_AMD_DEFINE_FACTORY__, 
            __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
        } else {}
    })(function($, Inputmask) {
        if ($.fn.inputmask === undefined) {
            $.fn.inputmask = function(fn, options) {
                var nptmask, input = this[0];
                if (options === undefined) options = {};
                if (typeof fn === "string") {
                    switch (fn) {
                      case "unmaskedvalue":
                        return input && input.inputmask ? input.inputmask.unmaskedvalue() : $(input).val();

                      case "remove":
                        return this.each(function() {
                            if (this.inputmask) this.inputmask.remove();
                        });

                      case "getemptymask":
                        return input && input.inputmask ? input.inputmask.getemptymask() : "";

                      case "hasMaskedValue":
                        return input && input.inputmask ? input.inputmask.hasMaskedValue() : false;

                      case "isComplete":
                        return input && input.inputmask ? input.inputmask.isComplete() : true;

                      case "getmetadata":
                        return input && input.inputmask ? input.inputmask.getmetadata() : undefined;

                      case "setvalue":
                        Inputmask.setValue(input, options);
                        break;

                      case "option":
                        if (typeof options === "string") {
                            if (input && input.inputmask !== undefined) {
                                return input.inputmask.option(options);
                            }
                        } else {
                            return this.each(function() {
                                if (this.inputmask !== undefined) {
                                    return this.inputmask.option(options);
                                }
                            });
                        }
                        break;

                      default:
                        options.alias = fn;
                        nptmask = new Inputmask(options);
                        return this.each(function() {
                            nptmask.mask(this);
                        });
                    }
                } else if (Array.isArray(fn)) {
                    options.alias = fn;
                    nptmask = new Inputmask(options);
                    return this.each(function() {
                        nptmask.mask(this);
                    });
                } else if ((typeof fn === "undefined" ? "undefined" : _typeof(fn)) == "object") {
                    nptmask = new Inputmask(fn);
                    if (fn.mask === undefined && fn.alias === undefined) {
                        return this.each(function() {
                            if (this.inputmask !== undefined) {
                                return this.inputmask.option(fn);
                            } else nptmask.mask(this);
                        });
                    } else {
                        return this.each(function() {
                            nptmask.mask(this);
                        });
                    }
                } else if (fn === undefined) {
                    return this.each(function() {
                        nptmask = new Inputmask(options);
                        nptmask.mask(this);
                    });
                }
            };
        }
        return $.fn.inputmask;
    });
} ]);