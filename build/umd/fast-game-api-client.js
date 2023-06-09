(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.FastGameApi = {}));
})(this, (function (exports) { 'use strict';

  function _regeneratorRuntime() {
    _regeneratorRuntime = function () {
      return exports;
    };
    var exports = {},
      Op = Object.prototype,
      hasOwn = Op.hasOwnProperty,
      defineProperty = Object.defineProperty || function (obj, key, desc) {
        obj[key] = desc.value;
      },
      $Symbol = "function" == typeof Symbol ? Symbol : {},
      iteratorSymbol = $Symbol.iterator || "@@iterator",
      asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator",
      toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";
    function define(obj, key, value) {
      return Object.defineProperty(obj, key, {
        value: value,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }), obj[key];
    }
    try {
      define({}, "");
    } catch (err) {
      define = function (obj, key, value) {
        return obj[key] = value;
      };
    }
    function wrap(innerFn, outerFn, self, tryLocsList) {
      var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator,
        generator = Object.create(protoGenerator.prototype),
        context = new Context(tryLocsList || []);
      return defineProperty(generator, "_invoke", {
        value: makeInvokeMethod(innerFn, self, context)
      }), generator;
    }
    function tryCatch(fn, obj, arg) {
      try {
        return {
          type: "normal",
          arg: fn.call(obj, arg)
        };
      } catch (err) {
        return {
          type: "throw",
          arg: err
        };
      }
    }
    exports.wrap = wrap;
    var ContinueSentinel = {};
    function Generator() {}
    function GeneratorFunction() {}
    function GeneratorFunctionPrototype() {}
    var IteratorPrototype = {};
    define(IteratorPrototype, iteratorSymbol, function () {
      return this;
    });
    var getProto = Object.getPrototypeOf,
      NativeIteratorPrototype = getProto && getProto(getProto(values([])));
    NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype);
    var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype);
    function defineIteratorMethods(prototype) {
      ["next", "throw", "return"].forEach(function (method) {
        define(prototype, method, function (arg) {
          return this._invoke(method, arg);
        });
      });
    }
    function AsyncIterator(generator, PromiseImpl) {
      function invoke(method, arg, resolve, reject) {
        var record = tryCatch(generator[method], generator, arg);
        if ("throw" !== record.type) {
          var result = record.arg,
            value = result.value;
          return value && "object" == typeof value && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) {
            invoke("next", value, resolve, reject);
          }, function (err) {
            invoke("throw", err, resolve, reject);
          }) : PromiseImpl.resolve(value).then(function (unwrapped) {
            result.value = unwrapped, resolve(result);
          }, function (error) {
            return invoke("throw", error, resolve, reject);
          });
        }
        reject(record.arg);
      }
      var previousPromise;
      defineProperty(this, "_invoke", {
        value: function (method, arg) {
          function callInvokeWithMethodAndArg() {
            return new PromiseImpl(function (resolve, reject) {
              invoke(method, arg, resolve, reject);
            });
          }
          return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
        }
      });
    }
    function makeInvokeMethod(innerFn, self, context) {
      var state = "suspendedStart";
      return function (method, arg) {
        if ("executing" === state) throw new Error("Generator is already running");
        if ("completed" === state) {
          if ("throw" === method) throw arg;
          return doneResult();
        }
        for (context.method = method, context.arg = arg;;) {
          var delegate = context.delegate;
          if (delegate) {
            var delegateResult = maybeInvokeDelegate(delegate, context);
            if (delegateResult) {
              if (delegateResult === ContinueSentinel) continue;
              return delegateResult;
            }
          }
          if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) {
            if ("suspendedStart" === state) throw state = "completed", context.arg;
            context.dispatchException(context.arg);
          } else "return" === context.method && context.abrupt("return", context.arg);
          state = "executing";
          var record = tryCatch(innerFn, self, context);
          if ("normal" === record.type) {
            if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue;
            return {
              value: record.arg,
              done: context.done
            };
          }
          "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg);
        }
      };
    }
    function maybeInvokeDelegate(delegate, context) {
      var methodName = context.method,
        method = delegate.iterator[methodName];
      if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator.return && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel;
      var record = tryCatch(method, delegate.iterator, context.arg);
      if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel;
      var info = record.arg;
      return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel);
    }
    function pushTryEntry(locs) {
      var entry = {
        tryLoc: locs[0]
      };
      1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry);
    }
    function resetTryEntry(entry) {
      var record = entry.completion || {};
      record.type = "normal", delete record.arg, entry.completion = record;
    }
    function Context(tryLocsList) {
      this.tryEntries = [{
        tryLoc: "root"
      }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0);
    }
    function values(iterable) {
      if (iterable) {
        var iteratorMethod = iterable[iteratorSymbol];
        if (iteratorMethod) return iteratorMethod.call(iterable);
        if ("function" == typeof iterable.next) return iterable;
        if (!isNaN(iterable.length)) {
          var i = -1,
            next = function next() {
              for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next;
              return next.value = undefined, next.done = !0, next;
            };
          return next.next = next;
        }
      }
      return {
        next: doneResult
      };
    }
    function doneResult() {
      return {
        value: undefined,
        done: !0
      };
    }
    return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", {
      value: GeneratorFunctionPrototype,
      configurable: !0
    }), defineProperty(GeneratorFunctionPrototype, "constructor", {
      value: GeneratorFunction,
      configurable: !0
    }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) {
      var ctor = "function" == typeof genFun && genFun.constructor;
      return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name));
    }, exports.mark = function (genFun) {
      return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun;
    }, exports.awrap = function (arg) {
      return {
        __await: arg
      };
    }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () {
      return this;
    }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) {
      void 0 === PromiseImpl && (PromiseImpl = Promise);
      var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl);
      return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) {
        return result.done ? result.value : iter.next();
      });
    }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () {
      return this;
    }), define(Gp, "toString", function () {
      return "[object Generator]";
    }), exports.keys = function (val) {
      var object = Object(val),
        keys = [];
      for (var key in object) keys.push(key);
      return keys.reverse(), function next() {
        for (; keys.length;) {
          var key = keys.pop();
          if (key in object) return next.value = key, next.done = !1, next;
        }
        return next.done = !0, next;
      };
    }, exports.values = values, Context.prototype = {
      constructor: Context,
      reset: function (skipTempReset) {
        if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined);
      },
      stop: function () {
        this.done = !0;
        var rootRecord = this.tryEntries[0].completion;
        if ("throw" === rootRecord.type) throw rootRecord.arg;
        return this.rval;
      },
      dispatchException: function (exception) {
        if (this.done) throw exception;
        var context = this;
        function handle(loc, caught) {
          return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught;
        }
        for (var i = this.tryEntries.length - 1; i >= 0; --i) {
          var entry = this.tryEntries[i],
            record = entry.completion;
          if ("root" === entry.tryLoc) return handle("end");
          if (entry.tryLoc <= this.prev) {
            var hasCatch = hasOwn.call(entry, "catchLoc"),
              hasFinally = hasOwn.call(entry, "finallyLoc");
            if (hasCatch && hasFinally) {
              if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0);
              if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);
            } else if (hasCatch) {
              if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0);
            } else {
              if (!hasFinally) throw new Error("try statement without catch or finally");
              if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);
            }
          }
        }
      },
      abrupt: function (type, arg) {
        for (var i = this.tryEntries.length - 1; i >= 0; --i) {
          var entry = this.tryEntries[i];
          if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) {
            var finallyEntry = entry;
            break;
          }
        }
        finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null);
        var record = finallyEntry ? finallyEntry.completion : {};
        return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record);
      },
      complete: function (record, afterLoc) {
        if ("throw" === record.type) throw record.arg;
        return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel;
      },
      finish: function (finallyLoc) {
        for (var i = this.tryEntries.length - 1; i >= 0; --i) {
          var entry = this.tryEntries[i];
          if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel;
        }
      },
      catch: function (tryLoc) {
        for (var i = this.tryEntries.length - 1; i >= 0; --i) {
          var entry = this.tryEntries[i];
          if (entry.tryLoc === tryLoc) {
            var record = entry.completion;
            if ("throw" === record.type) {
              var thrown = record.arg;
              resetTryEntry(entry);
            }
            return thrown;
          }
        }
        throw new Error("illegal catch attempt");
      },
      delegateYield: function (iterable, resultName, nextLoc) {
        return this.delegate = {
          iterator: values(iterable),
          resultName: resultName,
          nextLoc: nextLoc
        }, "next" === this.method && (this.arg = undefined), ContinueSentinel;
      }
    }, exports;
  }
  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
    try {
      var info = gen[key](arg);
      var value = info.value;
    } catch (error) {
      reject(error);
      return;
    }
    if (info.done) {
      resolve(value);
    } else {
      Promise.resolve(value).then(_next, _throw);
    }
  }
  function _asyncToGenerator(fn) {
    return function () {
      var self = this,
        args = arguments;
      return new Promise(function (resolve, reject) {
        var gen = fn.apply(self, args);
        function _next(value) {
          asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
        }
        function _throw(err) {
          asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
        }
        _next(undefined);
      });
    };
  }
  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor);
    }
  }
  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    Object.defineProperty(Constructor, "prototype", {
      writable: false
    });
    return Constructor;
  }
  function _defineProperty(obj, key, value) {
    key = _toPropertyKey(key);
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }
    return obj;
  }
  function _toPrimitive(input, hint) {
    if (typeof input !== "object" || input === null) return input;
    var prim = input[Symbol.toPrimitive];
    if (prim !== undefined) {
      var res = prim.call(input, hint || "default");
      if (typeof res !== "object") return res;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (hint === "string" ? String : Number)(input);
  }
  function _toPropertyKey(arg) {
    var key = _toPrimitive(arg, "string");
    return typeof key === "symbol" ? key : String(key);
  }

  var API_HOST = 'https://fogrex.trap.show';
  var API_BASE_PATH = '/fast-game-api/api';
  var getFetch = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(apiKey, url) {
      var params,
        fetchOptions,
        query,
        result,
        contentHeader,
        _args = arguments;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            params = _args.length > 2 && _args[2] !== undefined ? _args[2] : {};
            fetchOptions = {
              method: 'GET',
              headers: {
                'Content-Type': 'application/json',
                'X-API-KEY': apiKey
              },
              credentials: 'include',
              mode: 'cors'
            };
            query = new URLSearchParams(params);
            _context.next = 5;
            return fetch("".concat(API_HOST).concat(API_BASE_PATH).concat(url, "?").concat(query), fetchOptions);
          case 5:
            result = _context.sent;
            if (!result.ok) {
              _context.next = 11;
              break;
            }
            contentHeader = result.headers.get('Content-Type');
            if (!(contentHeader && contentHeader.indexOf('application/json') >= 0)) {
              _context.next = 10;
              break;
            }
            return _context.abrupt("return", result.json());
          case 10:
            return _context.abrupt("return");
          case 11:
            return _context.abrupt("return", Promise.reject(result));
          case 12:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    return function getFetch(_x, _x2) {
      return _ref.apply(this, arguments);
    };
  }();
  var postFetch = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(apiKey, url) {
      var requestData,
        fetchOptions,
        result,
        contentHeader,
        _args2 = arguments;
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            requestData = _args2.length > 2 && _args2[2] !== undefined ? _args2[2] : {};
            fetchOptions = {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
                'X-API-KEY': apiKey
              },
              body: JSON.stringify(requestData),
              credentials: 'include',
              mode: 'cors'
            };
            _context2.next = 4;
            return fetch("".concat(API_HOST).concat(API_BASE_PATH).concat(url), fetchOptions);
          case 4:
            result = _context2.sent;
            if (!result.ok) {
              _context2.next = 10;
              break;
            }
            contentHeader = result.headers.get('Content-Type');
            if (!(contentHeader && contentHeader.indexOf('application/json') >= 0)) {
              _context2.next = 9;
              break;
            }
            return _context2.abrupt("return", result.json());
          case 9:
            return _context2.abrupt("return");
          case 10:
            return _context2.abrupt("return", Promise.reject(result));
          case 11:
          case "end":
            return _context2.stop();
        }
      }, _callee2);
    }));
    return function postFetch(_x3, _x4) {
      return _ref2.apply(this, arguments);
    };
  }();
  var putFetch = /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(apiKey, url) {
      var requestData,
        fetchOptions,
        result,
        contentHeader,
        _args3 = arguments;
      return _regeneratorRuntime().wrap(function _callee3$(_context3) {
        while (1) switch (_context3.prev = _context3.next) {
          case 0:
            requestData = _args3.length > 2 && _args3[2] !== undefined ? _args3[2] : {};
            fetchOptions = {
              method: 'PUT',
              headers: {
                'Content-Type': 'application/json',
                'X-API-KEY': apiKey
              },
              body: JSON.stringify(requestData),
              credentials: 'include',
              mode: 'cors'
            };
            _context3.next = 4;
            return fetch("".concat(API_HOST).concat(API_BASE_PATH).concat(url), fetchOptions);
          case 4:
            result = _context3.sent;
            if (!result.ok) {
              _context3.next = 10;
              break;
            }
            contentHeader = result.headers.get('Content-Type');
            if (!(contentHeader && contentHeader.indexOf('application/json') >= 0)) {
              _context3.next = 9;
              break;
            }
            return _context3.abrupt("return", result.json());
          case 9:
            return _context3.abrupt("return");
          case 10:
            return _context3.abrupt("return", Promise.reject(result));
          case 11:
          case "end":
            return _context3.stop();
        }
      }, _callee3);
    }));
    return function putFetch(_x5, _x6) {
      return _ref3.apply(this, arguments);
    };
  }();

  var ClientWithLogin = /*#__PURE__*/function () {
    function ClientWithLogin(apiKey) {
      _classCallCheck(this, ClientWithLogin);
      _defineProperty(this, "apiKey", void 0);
      this.apiKey = apiKey;
    }
    _createClass(ClientWithLogin, [{
      key: "getRanking",
      value: function () {
        var _getRanking = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(tag) {
          var query;
          return _regeneratorRuntime().wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
              case 0:
                query = tag ? {
                  tag: tag
                } : undefined;
                _context.next = 3;
                return getFetch(this.apiKey, '/ranking', query);
              case 3:
                return _context.abrupt("return", _context.sent);
              case 4:
              case "end":
                return _context.stop();
            }
          }, _callee, this);
        }));
        function getRanking(_x) {
          return _getRanking.apply(this, arguments);
        }
        return getRanking;
      }()
    }, {
      key: "signup",
      value: function () {
        var _signup = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(id, password) {
          return _regeneratorRuntime().wrap(function _callee2$(_context2) {
            while (1) switch (_context2.prev = _context2.next) {
              case 0:
                return _context2.abrupt("return", postFetch(this.apiKey, '/signup', {
                  id: id,
                  password: password
                }));
              case 1:
              case "end":
                return _context2.stop();
            }
          }, _callee2, this);
        }));
        function signup(_x2, _x3) {
          return _signup.apply(this, arguments);
        }
        return signup;
      }()
    }, {
      key: "login",
      value: function () {
        var _login = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(id, password) {
          return _regeneratorRuntime().wrap(function _callee3$(_context3) {
            while (1) switch (_context3.prev = _context3.next) {
              case 0:
                return _context3.abrupt("return", postFetch(this.apiKey, '/login', {
                  id: id,
                  password: password
                }));
              case 1:
              case "end":
                return _context3.stop();
            }
          }, _callee3, this);
        }));
        function login(_x4, _x5) {
          return _login.apply(this, arguments);
        }
        return login;
      }()
    }, {
      key: "getMyInfo",
      value: function () {
        var _getMyInfo = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
          return _regeneratorRuntime().wrap(function _callee4$(_context4) {
            while (1) switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return getFetch(this.apiKey, '/me');
              case 2:
                return _context4.abrupt("return", _context4.sent);
              case 3:
              case "end":
                return _context4.stop();
            }
          }, _callee4, this);
        }));
        function getMyInfo() {
          return _getMyInfo.apply(this, arguments);
        }
        return getMyInfo;
      }()
    }, {
      key: "updateMyCustomData",
      value: function () {
        var _updateMyCustomData = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(password, customData) {
          return _regeneratorRuntime().wrap(function _callee5$(_context5) {
            while (1) switch (_context5.prev = _context5.next) {
              case 0:
                return _context5.abrupt("return", putFetch(this.apiKey, '/me/ranking', {
                  password: password,
                  customData: customData
                }));
              case 1:
              case "end":
                return _context5.stop();
            }
          }, _callee5, this);
        }));
        function updateMyCustomData(_x6, _x7) {
          return _updateMyCustomData.apply(this, arguments);
        }
        return updateMyCustomData;
      }()
    }, {
      key: "updateMyPassword",
      value: function () {
        var _updateMyPassword = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6(password, newPassword) {
          return _regeneratorRuntime().wrap(function _callee6$(_context6) {
            while (1) switch (_context6.prev = _context6.next) {
              case 0:
                return _context6.abrupt("return", putFetch(this.apiKey, '/me/password', {
                  password: password,
                  newPassword: newPassword
                }));
              case 1:
              case "end":
                return _context6.stop();
            }
          }, _callee6, this);
        }));
        function updateMyPassword(_x8, _x9) {
          return _updateMyPassword.apply(this, arguments);
        }
        return updateMyPassword;
      }()
    }, {
      key: "sendNewScore",
      value: function () {
        var _sendNewScore = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee7(score, tag, customData) {
          return _regeneratorRuntime().wrap(function _callee7$(_context7) {
            while (1) switch (_context7.prev = _context7.next) {
              case 0:
                return _context7.abrupt("return", postFetch(this.apiKey, '/score', {
                  score: score,
                  tag: tag,
                  customData: customData
                }));
              case 1:
              case "end":
                return _context7.stop();
            }
          }, _callee7, this);
        }));
        function sendNewScore(_x10, _x11, _x12) {
          return _sendNewScore.apply(this, arguments);
        }
        return sendNewScore;
      }()
    }]);
    return ClientWithLogin;
  }();

  var Client = /*#__PURE__*/function () {
    function Client(apiKey) {
      _classCallCheck(this, Client);
      _defineProperty(this, "apiKey", void 0);
      this.apiKey = apiKey;
    }
    _createClass(Client, [{
      key: "getRanking",
      value: function () {
        var _getRanking = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(tag) {
          var query;
          return _regeneratorRuntime().wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
              case 0:
                query = tag ? {
                  tag: tag
                } : undefined;
                _context.next = 3;
                return getFetch(this.apiKey, '/ranking', query);
              case 3:
                return _context.abrupt("return", _context.sent);
              case 4:
              case "end":
                return _context.stop();
            }
          }, _callee, this);
        }));
        function getRanking(_x) {
          return _getRanking.apply(this, arguments);
        }
        return getRanking;
      }()
    }, {
      key: "sendNewScore",
      value: function () {
        var _sendNewScore = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(userid, score, tag, customData) {
          return _regeneratorRuntime().wrap(function _callee2$(_context2) {
            while (1) switch (_context2.prev = _context2.next) {
              case 0:
                return _context2.abrupt("return", postFetch(this.apiKey, '/score', {
                  userid: userid,
                  score: score,
                  tag: tag,
                  customData: customData
                }));
              case 1:
              case "end":
                return _context2.stop();
            }
          }, _callee2, this);
        }));
        function sendNewScore(_x2, _x3, _x4, _x5) {
          return _sendNewScore.apply(this, arguments);
        }
        return sendNewScore;
      }()
    }]);
    return Client;
  }();

  exports.Client = Client;
  exports.ClientWithLogin = ClientWithLogin;

}));
//# sourceMappingURL=fast-game-api-client.js.map
