var $wnd = $wnd || window.parent;
var __gwtModuleFunction = $wnd.myapp;
var $sendStats = __gwtModuleFunction.__sendStats;
$sendStats("moduleStartup", "moduleEvalStart");
var $gwt_version = "2.10.0";
var $strongName = "5BCAB22E8EEDB45A92BBCF0B8910D3B0";
var $gwt = {};
var $doc = $wnd.document;
var $moduleName, $moduleBase;
function __gwtStartLoadingFragment(frag) {
  var fragFile = "deferredjs/" + $strongName + "/" + frag + ".cache.js";
  return __gwtModuleFunction.__startLoadingFragment(fragFile);
}
function __gwtInstallCode(code) {
  return __gwtModuleFunction.__installRunAsyncCode(code);
}
function __gwt_isKnownPropertyValue(propName, propValue) {
  return __gwtModuleFunction.__gwt_isKnownPropertyValue(propName, propValue);
}
function __gwt_getMetaProperty(name) {
  return __gwtModuleFunction.__gwt_getMetaProperty(name);
}
var $stats = $wnd.__gwtStatsEvent
  ? function (a) {
      return $wnd.__gwtStatsEvent && $wnd.__gwtStatsEvent(a);
    }
  : null;
var $sessionId = $wnd.__gwtStatsSessionId ? $wnd.__gwtStatsSessionId : null;
var $intern_0 = { 3: 1 },
  $intern_1 = { 3: 1, 4: 1 },
  $intern_2 = { 3: 1, 5: 1, 6: 1 },
  $intern_3 = { 28: 1, 3: 1, 4: 1 },
  $intern_4 = { 15: 1, 3: 1, 4: 1 },
  $intern_5 = 4194303,
  $intern_6 = 1048575,
  $intern_7 = 524288,
  $intern_8 = 4194304,
  $intern_9 = 17592186044416,
  $intern_10 = 131072,
  $intern_11 = 16777216,
  $intern_12 = 33554432,
  $intern_13 = 67108864,
  $intern_14 = { 10: 1, 8: 1 },
  $intern_15 = { 10: 1, 42: 1, 8: 1 },
  $intern_16 = { 16: 1 };
var _,
  prototypesByTypeId_0,
  initFnList_0,
  permutationId = -1;
function setGwtProperty(propertyName, propertyValue) {
  typeof window === "object" &&
    typeof window["$gwt"] === "object" &&
    (window["$gwt"][propertyName] = propertyValue);
}

function gwtOnLoad_0(errFn, modName, modBase, softPermutationId) {
  ensureModuleInit();
  var initFnList = initFnList_0;
  $moduleName = modName;
  $moduleBase = modBase;
  permutationId = softPermutationId;
  function initializeModules() {
    for (var i = 0; i < initFnList.length; i++) {
      initFnList[i]();
    }
  }

  if (errFn) {
    try {
      $entry(initializeModules)();
    } catch (e) {
      errFn(modName, e);
    }
  } else {
    $entry(initializeModules)();
  }
}

function ensureModuleInit() {
  initFnList_0 == null && (initFnList_0 = []);
}

function addInitFunctions() {
  ensureModuleInit();
  var initFnList = initFnList_0;
  for (var i = 0; i < arguments.length; i++) {
    initFnList.push(arguments[i]);
  }
}

function typeMarkerFn() {}

function toString_8(object) {
  var number;
  if (Array.isArray(object) && object.typeMarker === typeMarkerFn) {
    return (
      $getName(getClass__Ljava_lang_Class___devirtual$(object)) +
      "@" +
      ((number = hashCode__I__devirtual$(object) >>> 0), number.toString(16))
    );
  }
  return object.toString();
}

function portableObjCreate(obj) {
  function F() {}

  F.prototype = obj || {};
  return new F();
}

function emptyMethod() {}

function defineClass(typeId, superTypeIdOrPrototype, castableTypeMap) {
  var prototypesByTypeId = prototypesByTypeId_0,
    superPrototype;
  var prototype_0 = prototypesByTypeId[typeId];
  var clazz = prototype_0 instanceof Array ? prototype_0[0] : null;
  if (prototype_0 && !clazz) {
    _ = prototype_0;
  } else {
    _ =
      ((superPrototype =
        superTypeIdOrPrototype && superTypeIdOrPrototype.prototype),
      !superPrototype &&
        (superPrototype = prototypesByTypeId_0[superTypeIdOrPrototype]),
      portableObjCreate(superPrototype));
    _.castableTypeMap = castableTypeMap;
    !superTypeIdOrPrototype && (_.typeMarker = typeMarkerFn);
    prototypesByTypeId[typeId] = _;
  }
  for (var i = 3; i < arguments.length; ++i) {
    arguments[i].prototype = _;
  }
  clazz && (_.___clazz = clazz);
}

$wnd.goog = $wnd.goog || {};
$wnd.goog.global = $wnd.goog.global || $wnd;
prototypesByTypeId_0 = {};
function $equals(this$static, other) {
  return maskUndefined(this$static) === maskUndefined(other);
}

function Object_0() {}

function equals_Ljava_lang_Object__Z__devirtual$(this$static, other) {
  return instanceOfString(this$static)
    ? $equals_1(this$static, other)
    : instanceOfDouble(this$static)
      ? $equals_0(this$static, other)
      : instanceOfBoolean(this$static)
        ? (checkCriticalNotNull(this$static),
          maskUndefined(this$static) === maskUndefined(other))
        : hasJavaObjectVirtualDispatch(this$static)
          ? this$static.equals_0(other)
          : isJavaArray(this$static)
            ? $equals(this$static, other)
            : !!this$static && !!this$static.equals
              ? this$static.equals(other)
              : maskUndefined(this$static) === maskUndefined(other);
}

function getClass__Ljava_lang_Class___devirtual$(this$static) {
  return instanceOfString(this$static)
    ? Ljava_lang_String_2_classLit
    : instanceOfDouble(this$static)
      ? Ljava_lang_Double_2_classLit
      : instanceOfBoolean(this$static)
        ? Ljava_lang_Boolean_2_classLit
        : hasJavaObjectVirtualDispatch(this$static)
          ? this$static.___clazz
          : isJavaArray(this$static)
            ? this$static.___clazz
            : this$static.___clazz ||
              (Array.isArray(this$static) &&
                getClassLiteralForArray(
                  Lcom_google_gwt_core_client_JavaScriptObject_2_classLit,
                  1,
                )) ||
              Lcom_google_gwt_core_client_JavaScriptObject_2_classLit;
}

function hashCode__I__devirtual$(this$static) {
  return instanceOfString(this$static)
    ? $hashCode_1(this$static)
    : instanceOfDouble(this$static)
      ? $hashCode_0(this$static)
      : instanceOfBoolean(this$static)
        ? $hashCode(this$static)
        : hasJavaObjectVirtualDispatch(this$static)
          ? this$static.hashCode_0()
          : isJavaArray(this$static)
            ? getObjectIdentityHashCode(this$static)
            : !!this$static && !!this$static.hashCode
              ? this$static.hashCode()
              : getObjectIdentityHashCode(this$static);
}

defineClass(1, null, {}, Object_0);
_.equals_0 = function equals(other) {
  return $equals(this, other);
};
_.getClass_0 = function getClass_0() {
  return this.___clazz;
};
_.hashCode_0 = function hashCode_0() {
  return getObjectIdentityHashCode(this);
};
_.toString_0 = function toString_0() {
  var number;
  return (
    $getName(getClass__Ljava_lang_Class___devirtual$(this)) +
    "@" +
    ((number = hashCode__I__devirtual$(this) >>> 0), number.toString(16))
  );
};
_.equals = function (other) {
  return this.equals_0(other);
};
_.hashCode = function () {
  return this.hashCode_0();
};
_.toString = function () {
  return this.toString_0();
};
function canCast(src_0, dstId) {
  if (instanceOfString(src_0)) {
    return !!stringCastMap[dstId];
  } else if (src_0.castableTypeMap) {
    return !!src_0.castableTypeMap[dstId];
  } else if (instanceOfDouble(src_0)) {
    return !!doubleCastMap[dstId];
  } else if (instanceOfBoolean(src_0)) {
    return !!booleanCastMap[dstId];
  }
  return false;
}

function castTo(src_0, dstId) {
  checkCriticalType(src_0 == null || canCast(src_0, dstId));
  return src_0;
}

function castToBoolean(src_0) {
  checkCriticalType(src_0 == null || instanceOfBoolean(src_0));
  return src_0;
}

function castToJso(src_0) {
  checkCriticalType(
    src_0 == null ||
      (isJsObjectOrFunction(src_0) && !(src_0.typeMarker === typeMarkerFn)),
  );
  return src_0;
}

function castToString(src_0) {
  checkCriticalType(src_0 == null || instanceOfString(src_0));
  return src_0;
}

function hasJavaObjectVirtualDispatch(src_0) {
  return !Array.isArray(src_0) && src_0.typeMarker === typeMarkerFn;
}

function instanceOf(src_0, dstId) {
  return src_0 != null && canCast(src_0, dstId);
}

function instanceOfBoolean(src_0) {
  return typeof src_0 === "boolean";
}

function instanceOfDouble(src_0) {
  return typeof src_0 === "number";
}

function instanceOfJso(src_0) {
  return (
    src_0 != null &&
    isJsObjectOrFunction(src_0) &&
    !(src_0.typeMarker === typeMarkerFn)
  );
}

function instanceOfString(src_0) {
  return typeof src_0 === "string";
}

function isJsObjectOrFunction(src_0) {
  return typeof src_0 === "object" || typeof src_0 === "function";
}

function maskUndefined(src_0) {
  return src_0 == null ? null : src_0;
}

function round_int(x_0) {
  return Math.max(Math.min(x_0, 2147483647), -2147483648) | 0;
}

var booleanCastMap, doubleCastMap, stringCastMap;
function $ensureNamesAreInitialized(this$static) {
  if (this$static.typeName != null) {
    return;
  }
  initializeNames(this$static);
}

function $getName(this$static) {
  $ensureNamesAreInitialized(this$static);
  return this$static.typeName;
}

function Class() {
  ++nextSequentialId;
  this.typeName = null;
  this.simpleName = null;
  this.packageName = null;
  this.compoundName = null;
  this.canonicalName = null;
  this.typeId = null;
  this.arrayLiterals = null;
}

function createClassObject(packageName, compoundClassName) {
  var clazz;
  clazz = new Class();
  clazz.packageName = packageName;
  clazz.compoundName = compoundClassName;
  return clazz;
}

function createForClass(packageName, compoundClassName, typeId) {
  var clazz;
  clazz = createClassObject(packageName, compoundClassName);
  maybeSetClassLiteral(typeId, clazz);
  return clazz;
}

function createForEnum(
  packageName,
  compoundClassName,
  typeId,
  superclass,
  enumConstantsFunc,
) {
  var clazz;
  clazz = createClassObject(packageName, compoundClassName);
  maybeSetClassLiteral(typeId, clazz);
  clazz.modifiers = enumConstantsFunc ? 8 : 0;
  clazz.enumSuperclass = superclass;
  return clazz;
}

function getClassLiteralForArray_0(leafClass, dimensions) {
  var arrayLiterals = (leafClass.arrayLiterals = leafClass.arrayLiterals || []);
  return (
    arrayLiterals[dimensions] ||
    (arrayLiterals[dimensions] =
      leafClass.createClassLiteralForArray(dimensions))
  );
}

function getPrototypeForClass(clazz) {
  if (clazz.isPrimitive()) {
    return null;
  }
  var typeId = clazz.typeId;
  return prototypesByTypeId_0[typeId];
}

function initializeNames(clazz) {
  if (clazz.isArray_0()) {
    var componentType = clazz.componentType;
    componentType.isPrimitive()
      ? (clazz.typeName = "[" + componentType.typeId)
      : !componentType.isArray_0()
        ? (clazz.typeName = "[L" + componentType.getName() + ";")
        : (clazz.typeName = "[" + componentType.getName());
    clazz.canonicalName = componentType.getCanonicalName() + "[]";
    clazz.simpleName = componentType.getSimpleName() + "[]";
    return;
  }
  var packageName = clazz.packageName;
  var compoundName = clazz.compoundName;
  compoundName = compoundName.split("/");
  clazz.typeName = join_0(".", [packageName, join_0("$", compoundName)]);
  clazz.canonicalName = join_0(".", [packageName, join_0(".", compoundName)]);
  clazz.simpleName = compoundName[compoundName.length - 1];
}

function join_0(separator, strings) {
  var i = 0;
  while (!strings[i] || strings[i] == "") {
    i++;
  }
  var result = strings[i++];
  for (; i < strings.length; i++) {
    if (!strings[i] || strings[i] == "") {
      continue;
    }
    result += separator + strings[i];
  }
  return result;
}

function maybeSetClassLiteral(typeId, clazz) {
  var proto;
  if (!typeId) {
    return;
  }
  clazz.typeId = typeId;
  var prototype_0 = getPrototypeForClass(clazz);
  if (!prototype_0) {
    prototypesByTypeId_0[typeId] = [clazz];
    return;
  }
  prototype_0.___clazz = clazz;
}

defineClass(55, 1, {}, Class);
_.createClassLiteralForArray = function createClassLiteralForArray(dimensions) {
  var clazz;
  clazz = new Class();
  clazz.modifiers = 4;
  dimensions > 1
    ? (clazz.componentType = getClassLiteralForArray_0(this, dimensions - 1))
    : (clazz.componentType = this);
  return clazz;
};
_.getCanonicalName = function getCanonicalName() {
  $ensureNamesAreInitialized(this);
  return this.canonicalName;
};
_.getName = function getName() {
  return $getName(this);
};
_.getSimpleName = function getSimpleName() {
  $ensureNamesAreInitialized(this);
  return this.simpleName;
};
_.isArray_0 = function isArray() {
  return (this.modifiers & 4) != 0;
};
_.isPrimitive = function isPrimitive() {
  return (this.modifiers & 1) != 0;
};
_.toString_0 = function toString_14() {
  return (
    ((this.modifiers & 2) != 0
      ? "interface "
      : (this.modifiers & 1) != 0
        ? ""
        : "class ") + ($ensureNamesAreInitialized(this), this.typeName)
  );
};
_.modifiers = 0;
var nextSequentialId = 1;
var Ljava_lang_Object_2_classLit = createForClass("java.lang", "Object", 1);
var Ljava_lang_Class_2_classLit = createForClass("java.lang", "Class", 55);
function $addSuppressed(this$static, exception) {
  checkCriticalNotNull_0(exception);
  checkCriticalArgument(
    exception != this$static,
    "Exception can not suppress itself.",
  );
  if (this$static.disableSuppression) {
    return;
  }
  this$static.suppressedExceptions == null
    ? (this$static.suppressedExceptions = stampJavaTypeInfo(
        getClassLiteralForArray(Ljava_lang_Throwable_2_classLit, 1),
        $intern_0,
        4,
        0,
        [exception],
      ))
    : (this$static.suppressedExceptions[
        this$static.suppressedExceptions.length
      ] = exception);
}

function $fillInStackTrace(this$static) {
  this$static.writableStackTrace &&
    this$static.backingJsObject !== "__noinit__" &&
    this$static.initializeBackingError();
  return this$static;
}

function $initCause(this$static, cause) {
  checkCriticalState(!this$static.cause_0);
  checkCriticalArgument(true, "Self-causation not permitted");
  this$static.cause_0 = cause;
  return this$static;
}

function $linkBack(this$static, error) {
  if (error instanceof Object) {
    try {
      error.__java$exception = this$static;
      if (
        navigator.userAgent.toLowerCase().indexOf("msie") != -1 &&
        $doc.documentMode < 9
      ) {
        return;
      }
      var throwable = this$static;
      Object.defineProperties(error, {
        cause: {
          get: function () {
            var cause = throwable.getCause();
            return cause && cause.getBackingJsObject();
          },
        },
        suppressed: {
          get: function () {
            return throwable.getBackingSuppressed();
          },
        },
      });
    } catch (ignored) {}
  }
}

function $setBackingJsObject(this$static, backingJsObject) {
  this$static.backingJsObject = backingJsObject;
  $linkBack(this$static, backingJsObject);
}

function $toString(this$static, message) {
  var className;
  className = $getName(this$static.___clazz);
  return message == null ? className : className + ": " + message;
}

function Throwable(message, cause) {
  this.cause_0 = cause;
  this.detailMessage = message;
  $fillInStackTrace(this);
  this.initializeBackingError();
}

function fixIE(e) {
  if (!("stack" in e)) {
    try {
      throw e;
    } catch (ignored) {}
  }
  return e;
}

defineClass(4, 1, $intern_1);
_.createError = function createError(msg) {
  return new Error(msg);
};
_.getBackingJsObject = function getBackingJsObject() {
  return this.backingJsObject;
};
_.getBackingSuppressed = function getBackingSuppressed() {
  var i, result, suppressed;
  suppressed =
    (this.suppressedExceptions == null &&
      (this.suppressedExceptions = initUnidimensionalArray(
        Ljava_lang_Throwable_2_classLit,
        $intern_0,
        4,
        0,
        0,
        1,
      )),
    this.suppressedExceptions);
  result = initUnidimensionalArray(
    Ljava_lang_Object_2_classLit,
    $intern_0,
    1,
    suppressed.length,
    5,
    1,
  );
  for (i = 0; i < suppressed.length; i++) {
    result[i] = suppressed[i].backingJsObject;
  }
  return result;
};
_.getCause = function getCause() {
  return this.cause_0;
};
_.getMessage = function getMessage() {
  return this.detailMessage;
};
_.initializeBackingError = function initializeBackingError() {
  $setBackingJsObject(
    this,
    fixIE(this.createError($toString(this, this.detailMessage))),
  );
  captureStackTrace(this);
};
_.toString_0 = function toString_1() {
  return $toString(this, this.getMessage());
};
_.backingJsObject = "__noinit__";
_.disableSuppression = false;
_.writableStackTrace = true;
var Ljava_lang_Throwable_2_classLit = createForClass(
  "java.lang",
  "Throwable",
  4,
);
function Exception(message) {
  this.detailMessage = message;
  $fillInStackTrace(this);
  this.initializeBackingError();
}

defineClass(23, 4, $intern_1);
var Ljava_lang_Exception_2_classLit = createForClass(
  "java.lang",
  "Exception",
  23,
);
function RuntimeException() {
  $fillInStackTrace(this);
  this.initializeBackingError();
}

function RuntimeException_0(message) {
  Exception.call(this, message);
}

function RuntimeException_1(message, cause) {
  Throwable.call(this, message, cause);
}

defineClass(7, 23, $intern_1);
var Ljava_lang_RuntimeException_2_classLit = createForClass(
  "java.lang",
  "RuntimeException",
  7,
);
defineClass(46, 7, $intern_1);
var Ljava_lang_JsException_2_classLit = createForClass(
  "java.lang",
  "JsException",
  46,
);
defineClass(92, 46, $intern_1);
var Lcom_google_gwt_core_client_impl_JavaScriptExceptionBase_2_classLit =
  createForClass(
    "com.google.gwt.core.client.impl",
    "JavaScriptExceptionBase",
    92,
  );
function $clinit_JavaScriptException() {
  $clinit_JavaScriptException = emptyMethod;
  NOT_SET = new Object_0();
}

function $ensureInit(this$static) {
  var exception;
  if (this$static.message_0 == null) {
    exception =
      maskUndefined(this$static.e) === maskUndefined(NOT_SET)
        ? null
        : this$static.e;
    this$static.name_0 =
      exception == null
        ? "null"
        : instanceOfJso(exception)
          ? getExceptionName0(castToJso(exception))
          : instanceOfString(exception)
            ? "String"
            : $getName(getClass__Ljava_lang_Class___devirtual$(exception));
    this$static.description =
      this$static.description +
      ": " +
      (instanceOfJso(exception)
        ? getExceptionDescription0(castToJso(exception))
        : exception + "");
    this$static.message_0 =
      "(" + this$static.name_0 + ") " + this$static.description;
  }
}

function JavaScriptException(e) {
  $clinit_JavaScriptException();
  $fillInStackTrace(this);
  this.backingJsObject = e;
  $linkBack(this, e);
  this.detailMessage = e == null ? "null" : toString_8(e);
  this.description = "";
  this.e = e;
  this.description = "";
}

function getExceptionDescription0(e) {
  return e == null ? null : e.message;
}

function getExceptionName0(e) {
  return e == null ? null : e.name;
}

defineClass(17, 92, { 17: 1, 3: 1, 4: 1 }, JavaScriptException);
_.getMessage = function getMessage_0() {
  return $ensureInit(this), this.message_0;
};
_.getThrown = function getThrown() {
  return maskUndefined(this.e) === maskUndefined(NOT_SET) ? null : this.e;
};
var NOT_SET;
var Lcom_google_gwt_core_client_JavaScriptException_2_classLit = createForClass(
  "com.google.gwt.core.client",
  "JavaScriptException",
  17,
);
var Lcom_google_gwt_core_client_JavaScriptObject_2_classLit = createForClass(
  "com.google.gwt.core.client",
  "JavaScriptObject$",
  0,
);
function safeEval(json) {
  try {
    return JSON.parse(json);
  } catch (e) {
    return throwIllegalArgumentException("Error parsing JSON: " + e, json);
  }
}

function throwIllegalArgumentException(message, data_0) {
  throw toJs(new IllegalArgumentException_0(message + "\n" + data_0));
}

defineClass(172, 1, {});
var Lcom_google_gwt_core_client_Scheduler_2_classLit = createForClass(
  "com.google.gwt.core.client",
  "Scheduler",
  172,
);
function $clinit_Impl() {
  $clinit_Impl = emptyMethod;
  !!($clinit_StackTraceCreator(), collector);
}

function apply_0(jsFunction, thisObj, args) {
  return jsFunction.apply(thisObj, args);
  var __0;
}

function enter() {
  var now_0;
  if (entryDepth != 0) {
    now_0 = Date.now();
    if (now_0 - watchdogEntryDepthLastScheduled > 2000) {
      watchdogEntryDepthLastScheduled = now_0;
      watchdogEntryDepthTimerId = $wnd.setTimeout(watchdogEntryDepthRun, 10);
    }
  }
  if (entryDepth++ == 0) {
    $flushEntryCommands(($clinit_SchedulerImpl(), INSTANCE));
    return true;
  }
  return false;
}

function entry_0(jsFunction) {
  $clinit_Impl();
  return function () {
    return entry0(jsFunction, this, arguments);
    var __0;
  };
}

function entry0(jsFunction, thisObj, args) {
  var initialEntry;
  initialEntry = enter();
  try {
    return apply_0(jsFunction, thisObj, args);
  } finally {
    exit(initialEntry);
  }
}

function exit(initialEntry) {
  initialEntry && $flushFinallyCommands(($clinit_SchedulerImpl(), INSTANCE));
  --entryDepth;
  if (initialEntry) {
    if (watchdogEntryDepthTimerId != -1) {
      watchdogEntryDepthCancel(watchdogEntryDepthTimerId);
      watchdogEntryDepthTimerId = -1;
    }
  }
}

function getModuleBaseURL() {
  $clinit_Impl();
  var key = "__gwtDevModeHook:" + $moduleName + ":moduleBase";
  var global_0 = $wnd || self;
  return global_0[key] || $moduleBase;
}

function reportToBrowser(e) {
  $clinit_Impl();
  $wnd.setTimeout(function () {
    throw e;
  }, 0);
}

function watchdogEntryDepthCancel(timerId) {
  $wnd.clearTimeout(timerId);
}

function watchdogEntryDepthRun() {
  entryDepth != 0 && (entryDepth = 0);
  watchdogEntryDepthTimerId = -1;
}

var entryDepth = 0,
  watchdogEntryDepthLastScheduled = 0,
  watchdogEntryDepthTimerId = -1;
function $clinit_SchedulerImpl() {
  $clinit_SchedulerImpl = emptyMethod;
  INSTANCE = new SchedulerImpl();
}

function $flushEntryCommands(this$static) {
  var oldQueue, rescheduled;
  if (this$static.entryCommands) {
    rescheduled = null;
    do {
      oldQueue = this$static.entryCommands;
      this$static.entryCommands = null;
      rescheduled = runScheduledTasks(oldQueue, rescheduled);
    } while (this$static.entryCommands);
    this$static.entryCommands = rescheduled;
  }
}

function $flushFinallyCommands(this$static) {
  var oldQueue, rescheduled;
  if (this$static.finallyCommands) {
    rescheduled = null;
    do {
      oldQueue = this$static.finallyCommands;
      this$static.finallyCommands = null;
      rescheduled = runScheduledTasks(oldQueue, rescheduled);
    } while (this$static.finallyCommands);
    this$static.finallyCommands = rescheduled;
  }
}

function SchedulerImpl() {}

function push_0(queue, task) {
  !queue && (queue = []);
  queue[queue.length] = task;
  return queue;
}

function runScheduledTasks(tasks, rescheduled) {
  var e, i, j, t;
  for (i = 0, j = tasks.length; i < j; i++) {
    t = tasks[i];
    try {
      t[1]
        ? t[0].$_nullMethod() && (rescheduled = push_0(rescheduled, t))
        : t[0].$_nullMethod();
    } catch ($e0) {
      $e0 = toJava($e0);
      if (instanceOf($e0, 4)) {
        e = $e0;
        $clinit_Impl();
        reportToBrowser(instanceOf(e, 17) ? castTo(e, 17).getThrown() : e);
      } else throw toJs($e0);
    }
  }
  return rescheduled;
}

defineClass(121, 172, {}, SchedulerImpl);
var INSTANCE;
var Lcom_google_gwt_core_client_impl_SchedulerImpl_2_classLit = createForClass(
  "com.google.gwt.core.client.impl",
  "SchedulerImpl",
  121,
);
function $clinit_StackTraceCreator() {
  $clinit_StackTraceCreator = emptyMethod;
  var c, enforceLegacy;
  enforceLegacy = !supportsErrorStack();
  c = new StackTraceCreator$CollectorModernNoSourceMap();
  collector = enforceLegacy ? new StackTraceCreator$CollectorLegacy() : c;
}

function captureStackTrace(error) {
  $clinit_StackTraceCreator();
  collector.collect(error);
}

function extractFunctionName(fnName) {
  var fnRE = /function(?:\s+([\w$]+))?\s*\(/;
  var match_0 = fnRE.exec(fnName);
  return (match_0 && match_0[1]) || "anonymous";
}

function supportsErrorStack() {
  if (Error.stackTraceLimit > 0) {
    $wnd.Error.stackTraceLimit = Error.stackTraceLimit = 64;
    return true;
  }
  return "stack" in new Error();
}

var collector;
defineClass(185, 1, {});
var Lcom_google_gwt_core_client_impl_StackTraceCreator$Collector_2_classLit =
  createForClass(
    "com.google.gwt.core.client.impl",
    "StackTraceCreator/Collector",
    185,
  );
function StackTraceCreator$CollectorLegacy() {}

defineClass(93, 185, {}, StackTraceCreator$CollectorLegacy);
_.collect = function collect(error) {
  var seen = {},
    name_1;
  var fnStack = [];
  error["fnStack"] = fnStack;
  var callee = arguments.callee.caller;
  while (callee) {
    var name_0 =
      ($clinit_StackTraceCreator(),
      callee.name || (callee.name = extractFunctionName(callee.toString())));
    fnStack.push(name_0);
    var keyName = ":" + name_0;
    var withThisName = seen[keyName];
    if (withThisName) {
      var i, j;
      for (i = 0, j = withThisName.length; i < j; i++) {
        if (withThisName[i] === callee) {
          return;
        }
      }
    }
    (withThisName || (seen[keyName] = [])).push(callee);
    callee = callee.caller;
  }
};
var Lcom_google_gwt_core_client_impl_StackTraceCreator$CollectorLegacy_2_classLit =
  createForClass(
    "com.google.gwt.core.client.impl",
    "StackTraceCreator/CollectorLegacy",
    93,
  );
defineClass(186, 185, {});
_.collect = function collect_0(error) {};
var Lcom_google_gwt_core_client_impl_StackTraceCreator$CollectorModern_2_classLit =
  createForClass(
    "com.google.gwt.core.client.impl",
    "StackTraceCreator/CollectorModern",
    186,
  );
function StackTraceCreator$CollectorModernNoSourceMap() {}

defineClass(94, 186, {}, StackTraceCreator$CollectorModernNoSourceMap);
var Lcom_google_gwt_core_client_impl_StackTraceCreator$CollectorModernNoSourceMap_2_classLit =
  createForClass(
    "com.google.gwt.core.client.impl",
    "StackTraceCreator/CollectorModernNoSourceMap",
    94,
  );
function $appendChild(this$static, newChild) {
  return this$static.appendChild(newChild);
}

function $removeChild(this$static, oldChild) {
  return this$static.removeChild(oldChild);
}

function $getPropertyString(this$static, name_0) {
  return this$static[name_0] == null ? null : String(this$static[name_0]);
}

function $eventGetRelatedTarget(evt) {
  var relatedTarget = evt.relatedTarget;
  if (!relatedTarget) {
    return null;
  }
  try {
    var nodeName = relatedTarget.nodeName;
    return relatedTarget;
  } catch (e) {
    return null;
  }
}

function $isOrHasChild(parent_0, child) {
  return parent_0 === child || !!(parent_0.compareDocumentPosition(child) & 16);
}

function $toString_0(elem) {
  var doc = elem.ownerDocument;
  var temp = elem.cloneNode(true);
  var tempDiv = doc.createElement("DIV");
  tempDiv.appendChild(temp);
  outer = tempDiv.innerHTML;
  temp.innerHTML = "";
  return outer;
}

function Enum(name_0, ordinal) {
  this.name_0 = name_0;
  this.ordinal = ordinal;
}

defineClass(6, 1, $intern_2);
_.equals_0 = function equals_0(other) {
  return this === other;
};
_.hashCode_0 = function hashCode_1() {
  return getObjectIdentityHashCode(this);
};
_.toString_0 = function toString_2() {
  return this.name_0 != null ? this.name_0 : "" + this.ordinal;
};
_.ordinal = 0;
var Ljava_lang_Enum_2_classLit = createForClass("java.lang", "Enum", 6);
function $clinit_Style$TextAlign() {
  $clinit_Style$TextAlign = emptyMethod;
  CENTER = new Style$TextAlign$1();
  JUSTIFY = new Style$TextAlign$2();
  LEFT = new Style$TextAlign$3();
  RIGHT = new Style$TextAlign$4();
}

function Style$TextAlign(enum$name, enum$ordinal) {
  Enum.call(this, enum$name, enum$ordinal);
}

function values() {
  $clinit_Style$TextAlign();
  return stampJavaTypeInfo(
    getClassLiteralForArray(
      Lcom_google_gwt_dom_client_Style$TextAlign_2_classLit,
      1,
    ),
    $intern_0,
    35,
    0,
    [CENTER, JUSTIFY, LEFT, RIGHT],
  );
}

defineClass(35, 6, $intern_2);
var CENTER, JUSTIFY, LEFT, RIGHT;
var Lcom_google_gwt_dom_client_Style$TextAlign_2_classLit = createForEnum(
  "com.google.gwt.dom.client",
  "Style/TextAlign",
  35,
  Ljava_lang_Enum_2_classLit,
  values,
);
function Style$TextAlign$1() {
  Style$TextAlign.call(this, "CENTER", 0);
}

defineClass(123, 35, $intern_2, Style$TextAlign$1);
var Lcom_google_gwt_dom_client_Style$TextAlign$1_2_classLit = createForEnum(
  "com.google.gwt.dom.client",
  "Style/TextAlign/1",
  123,
  Lcom_google_gwt_dom_client_Style$TextAlign_2_classLit,
  null,
);
function Style$TextAlign$2() {
  Style$TextAlign.call(this, "JUSTIFY", 1);
}

defineClass(124, 35, $intern_2, Style$TextAlign$2);
var Lcom_google_gwt_dom_client_Style$TextAlign$2_2_classLit = createForEnum(
  "com.google.gwt.dom.client",
  "Style/TextAlign/2",
  124,
  Lcom_google_gwt_dom_client_Style$TextAlign_2_classLit,
  null,
);
function Style$TextAlign$3() {
  Style$TextAlign.call(this, "LEFT", 2);
}

defineClass(125, 35, $intern_2, Style$TextAlign$3);
var Lcom_google_gwt_dom_client_Style$TextAlign$3_2_classLit = createForEnum(
  "com.google.gwt.dom.client",
  "Style/TextAlign/3",
  125,
  Lcom_google_gwt_dom_client_Style$TextAlign_2_classLit,
  null,
);
function Style$TextAlign$4() {
  Style$TextAlign.call(this, "RIGHT", 3);
}

defineClass(126, 35, $intern_2, Style$TextAlign$4);
var Lcom_google_gwt_dom_client_Style$TextAlign$4_2_classLit = createForEnum(
  "com.google.gwt.dom.client",
  "Style/TextAlign/4",
  126,
  Lcom_google_gwt_dom_client_Style$TextAlign_2_classLit,
  null,
);
defineClass(189, 1, {});
_.toString_0 = function toString_3() {
  return "An event type";
};
var Lcom_google_web_bindery_event_shared_Event_2_classLit = createForClass(
  "com.google.web.bindery.event.shared",
  "Event",
  189,
);
function $overrideSource(this$static, source) {
  this$static.source = source;
}

defineClass(190, 189, {});
_.getAssociatedType_0 = function getAssociatedType() {
  return this.getAssociatedType();
};
_.dead = false;
var Lcom_google_gwt_event_shared_GwtEvent_2_classLit = createForClass(
  "com.google.gwt.event.shared",
  "GwtEvent",
  190,
);
function $setNativeEvent(this$static, nativeEvent) {
  this$static.nativeEvent = nativeEvent;
}

function $setRelativeElement(this$static, relativeElem) {
  this$static.relativeElem = relativeElem;
}

function fireNativeEvent(nativeEvent, handlerSource, relativeElem) {
  var currentNative, currentRelativeElem, type_0, type$iterator, types;
  if (registered) {
    types = castTo($unsafeGet(registered, nativeEvent.type), 22);
    if (types) {
      for (type$iterator = types.iterator(); type$iterator.hasNext_0(); ) {
        type_0 = castTo(type$iterator.next_0(), 49);
        currentNative = type_0.flyweight.nativeEvent;
        currentRelativeElem = type_0.flyweight.relativeElem;
        $setNativeEvent(type_0.flyweight, nativeEvent);
        $setRelativeElement(type_0.flyweight, relativeElem);
        $fireEvent_0(handlerSource, type_0.flyweight);
        $setNativeEvent(type_0.flyweight, currentNative);
        $setRelativeElement(type_0.flyweight, currentRelativeElem);
      }
    }
  }
}

defineClass(191, 190, {});
_.getAssociatedType = function getAssociatedType_0() {
  return this.getAssociatedType_1();
};
_.getAssociatedType_0 = function getAssociatedType_1() {
  return this.getAssociatedType_1();
};
var registered;
var Lcom_google_gwt_event_dom_client_DomEvent_2_classLit = createForClass(
  "com.google.gwt.event.dom.client",
  "DomEvent",
  191,
);
defineClass(192, 191, {});
var Lcom_google_gwt_event_dom_client_HumanInputEvent_2_classLit =
  createForClass("com.google.gwt.event.dom.client", "HumanInputEvent", 192);
defineClass(193, 192, {});
var Lcom_google_gwt_event_dom_client_MouseEvent_2_classLit = createForClass(
  "com.google.gwt.event.dom.client",
  "MouseEvent",
  193,
);
function $clinit_ClickEvent() {
  $clinit_ClickEvent = emptyMethod;
  TYPE = new DomEvent$Type(new ClickEvent());
}

function ClickEvent() {}

defineClass(116, 193, {}, ClickEvent);
_.dispatch = function dispatch(handler) {
  $onClick(castTo(handler, 173));
};
_.getAssociatedType = function getAssociatedType_3() {
  return TYPE;
};
_.getAssociatedType_0 = function getAssociatedType_4() {
  return TYPE;
};
_.getAssociatedType_1 = function getAssociatedType_2() {
  return TYPE;
};
var TYPE;
var Lcom_google_gwt_event_dom_client_ClickEvent_2_classLit = createForClass(
  "com.google.gwt.event.dom.client",
  "ClickEvent",
  116,
);
defineClass(117, 1, {});
_.hashCode_0 = function hashCode_2() {
  return this.index_0;
};
_.toString_0 = function toString_4() {
  return "Event type";
};
_.index_0 = 0;
var nextHashCode = 0;
var Lcom_google_web_bindery_event_shared_Event$Type_2_classLit = createForClass(
  "com.google.web.bindery.event.shared",
  "Event/Type",
  117,
);
function GwtEvent$Type() {
  this.index_0 = ++nextHashCode;
}

defineClass(48, 117, {}, GwtEvent$Type);
var Lcom_google_gwt_event_shared_GwtEvent$Type_2_classLit = createForClass(
  "com.google.gwt.event.shared",
  "GwtEvent/Type",
  48,
);
function DomEvent$Type(flyweight) {
  var types;
  GwtEvent$Type.call(this);
  this.flyweight = flyweight;
  !registered && (registered = new PrivateMap());
  types = castTo(registered.map_0["click"], 22);
  if (!types) {
    types = new ArrayList();
    $unsafePut(registered, types);
  }
  types.add_0(this);
  this.name_0 = "click";
}

defineClass(49, 48, { 49: 1 }, DomEvent$Type);
var Lcom_google_gwt_event_dom_client_DomEvent$Type_2_classLit = createForClass(
  "com.google.gwt.event.dom.client",
  "DomEvent/Type",
  49,
);
function $unsafeGet(this$static, key) {
  return this$static.map_0[key];
}

function $unsafePut(this$static, value_0) {
  this$static.map_0["click"] = value_0;
}

function PrivateMap() {
  this.map_0 = {};
}

defineClass(137, 1, {}, PrivateMap);
var Lcom_google_gwt_event_dom_client_PrivateMap_2_classLit = createForClass(
  "com.google.gwt.event.dom.client",
  "PrivateMap",
  137,
);
function CloseEvent_0() {}

function fire(source) {
  var event_0;
  if (TYPE_0) {
    event_0 = new CloseEvent_0();
    $fireEvent(source, event_0);
  }
}

defineClass(144, 190, {}, CloseEvent_0);
_.dispatch = function dispatch_0(handler) {
  castTo(handler, 202);
  detachWidgets();
};
_.getAssociatedType_0 = function getAssociatedType_6() {
  return TYPE_0;
};
_.getAssociatedType = function getAssociatedType_5() {
  return TYPE_0;
};
var TYPE_0;
var Lcom_google_gwt_event_logical_shared_CloseEvent_2_classLit = createForClass(
  "com.google.gwt.event.logical.shared",
  "CloseEvent",
  144,
);
function $addHandler(this$static, type_0, handler) {
  return (
    $doAdd(this$static.eventBus, type_0, handler), new LegacyHandlerWrapper()
  );
}

function $fireEvent(this$static, event_0) {
  var e, oldSource;
  !event_0.dead || ((event_0.dead = false), (event_0.source = null));
  oldSource = event_0.source;
  $overrideSource(event_0, this$static.source);
  try {
    $doFire(this$static.eventBus, event_0);
  } catch ($e0) {
    $e0 = toJava($e0);
    if (instanceOf($e0, 28)) {
      e = $e0;
      throw toJs(new UmbrellaException_0(e.causes));
    } else throw toJs($e0);
  } finally {
    oldSource == null
      ? ((event_0.dead = true), (event_0.source = null))
      : (event_0.source = oldSource);
  }
}

function HandlerManager(source) {
  this.eventBus = new HandlerManager$Bus();
  this.source = source;
}

defineClass(51, 1, {}, HandlerManager);
var Lcom_google_gwt_event_shared_HandlerManager_2_classLit = createForClass(
  "com.google.gwt.event.shared",
  "HandlerManager",
  51,
);
defineClass(197, 1, {});
var Lcom_google_web_bindery_event_shared_EventBus_2_classLit = createForClass(
  "com.google.web.bindery.event.shared",
  "EventBus",
  197,
);
function $defer(this$static, command) {
  !this$static.deferredDeltas && (this$static.deferredDeltas = new ArrayList());
  $add_2(this$static.deferredDeltas, command);
}

function $doAdd(this$static, type_0, handler) {
  var l;
  if (!type_0) {
    throw toJs(
      new NullPointerException_0("Cannot add a handler with a null type"),
    );
  }
  this$static.firingDepth > 0
    ? $defer(this$static, new SimpleEventBus$2(this$static, type_0, handler))
    : ((l = $ensureHandlerList(this$static, type_0, null)), l.add_0(handler));
  return new SimpleEventBus$1();
}

function $doAddNow(this$static, type_0, source, handler) {
  var l;
  l = $ensureHandlerList(this$static, type_0, source);
  l.add_0(handler);
}

function $doFire(this$static, event_0) {
  var causes, directHandlers, e, handler, handlers, it;
  if (!event_0) {
    throw toJs(new NullPointerException_0("Cannot fire null event"));
  }
  try {
    ++this$static.firingDepth;
    handlers =
      ((directHandlers = $getHandlerList(
        this$static,
        event_0.getAssociatedType_0(),
      )),
      directHandlers);
    causes = null;
    it = this$static.isReverseOrder
      ? handlers.listIterator_0(handlers.size_1())
      : handlers.listIterator();
    while (this$static.isReverseOrder ? it.hasPrevious() : it.hasNext_0()) {
      handler = this$static.isReverseOrder ? it.previous() : it.next_0();
      try {
        event_0.dispatch(castTo(handler, 89));
      } catch ($e0) {
        $e0 = toJava($e0);
        if (instanceOf($e0, 4)) {
          e = $e0;
          !causes && (causes = new HashSet());
          $put(causes.map_0, e, causes);
        } else throw toJs($e0);
      }
    }
    if (causes) {
      throw toJs(new UmbrellaException(causes));
    }
  } finally {
    --this$static.firingDepth;
    this$static.firingDepth == 0 && $handleQueuedAddsAndRemoves(this$static);
  }
}

function $ensureHandlerList(this$static, type_0, source) {
  var handlers, sourceMap;
  sourceMap = castTo($get(this$static.map_0, type_0), 19);
  if (!sourceMap) {
    sourceMap = new HashMap();
    $put(this$static.map_0, type_0, sourceMap);
  }
  handlers = castTo(sourceMap.get_0(source), 22);
  if (!handlers) {
    handlers = new ArrayList();
    sourceMap.put(source, handlers);
  }
  return handlers;
}

function $getHandlerList(this$static, type_0) {
  var handlers, sourceMap;
  sourceMap = castTo($get(this$static.map_0, type_0), 19);
  if (!sourceMap) {
    return $clinit_Collections(), $clinit_Collections(), EMPTY_LIST;
  }
  handlers = castTo(sourceMap.get_0(null), 22);
  if (!handlers) {
    return $clinit_Collections(), $clinit_Collections(), EMPTY_LIST;
  }
  return handlers;
}

function $handleQueuedAddsAndRemoves(this$static) {
  var c, c$iterator;
  if (this$static.deferredDeltas) {
    try {
      for (
        c$iterator = new ArrayList$1(this$static.deferredDeltas);
        c$iterator.i < c$iterator.this$01.array.length;

      ) {
        c = castTo($next_1(c$iterator), 203);
        $doAddNow(c.this$01, c.val$type2, c.val$source3, c.val$handler4);
      }
    } finally {
      this$static.deferredDeltas = null;
    }
  }
}

defineClass(128, 197, {});
_.firingDepth = 0;
_.isReverseOrder = false;
var Lcom_google_web_bindery_event_shared_SimpleEventBus_2_classLit =
  createForClass("com.google.web.bindery.event.shared", "SimpleEventBus", 128);
function HandlerManager$Bus() {
  this.map_0 = new HashMap();
  this.isReverseOrder = false;
}

defineClass(129, 128, {}, HandlerManager$Bus);
var Lcom_google_gwt_event_shared_HandlerManager$Bus_2_classLit = createForClass(
  "com.google.gwt.event.shared",
  "HandlerManager/Bus",
  129,
);
function LegacyHandlerWrapper() {}

defineClass(138, 1, {}, LegacyHandlerWrapper);
var Lcom_google_gwt_event_shared_LegacyHandlerWrapper_2_classLit =
  createForClass("com.google.gwt.event.shared", "LegacyHandlerWrapper", 138);
function UmbrellaException(causes) {
  var cause, cause$iterator, i;
  RuntimeException_1.call(
    this,
    makeMessage(causes),
    causes.isEmpty() ? null : castTo(causes.iterator().next_0(), 4),
  );
  this.causes = causes;
  i = 0;
  for (cause$iterator = causes.iterator(); cause$iterator.hasNext_0(); ) {
    cause = castTo(cause$iterator.next_0(), 4);
    if (i++ == 0) {
      continue;
    }
    $addSuppressed(this, cause);
  }
}

function makeMessage(causes) {
  var b, count, first, t, t$iterator;
  count = causes.size_1();
  if (count == 0) {
    return null;
  }
  b = new StringBuilder_0(
    count == 1 ? "Exception caught: " : count + " exceptions caught: ",
  );
  first = true;
  for (t$iterator = causes.iterator(); t$iterator.hasNext_0(); ) {
    t = castTo(t$iterator.next_0(), 4);
    first ? (first = false) : ((b.string += "; "), b);
    $append_1(b, t.getMessage());
  }
  return b.string;
}

defineClass(28, 7, $intern_3, UmbrellaException);
var Lcom_google_web_bindery_event_shared_UmbrellaException_2_classLit =
  createForClass(
    "com.google.web.bindery.event.shared",
    "UmbrellaException",
    28,
  );
function UmbrellaException_0(causes) {
  UmbrellaException.call(this, causes);
}

defineClass(62, 28, $intern_3, UmbrellaException_0);
var Lcom_google_gwt_event_shared_UmbrellaException_2_classLit = createForClass(
  "com.google.gwt.event.shared",
  "UmbrellaException",
  62,
);
function $cancel(this$static) {
  var xhr;
  if (!this$static.xmlHttpRequest) {
    return;
  }
  $cancel_0(this$static.timer);
  xhr = this$static.xmlHttpRequest;
  this$static.xmlHttpRequest = null;
  $clearOnReadyStateChange(xhr);
  xhr.abort();
}

function $fireOnResponseReceived(this$static, callback) {
  var response, xhr;
  if (!this$static.xmlHttpRequest) {
    return;
  }
  $cancel_0(this$static.timer);
  xhr = this$static.xmlHttpRequest;
  this$static.xmlHttpRequest = null;
  response = new ResponseImpl(xhr);
  $onResponseReceived(callback, response);
}

function $fireOnTimeout(this$static) {
  if (!this$static.xmlHttpRequest) {
    return;
  }
  $cancel(this$static);
  $onError(
    this$static.callback,
    new RequestTimeoutException(this$static.timeoutMillis),
  );
}

function Request_0(xmlHttpRequest, timeoutMillis, callback) {
  this.timer = new Request$1(this);
  if (!xmlHttpRequest) {
    throw toJs(new NullPointerException());
  }
  if (!callback) {
    throw toJs(new NullPointerException());
  }
  if (timeoutMillis < 0) {
    throw toJs(new IllegalArgumentException());
  }
  this.callback = callback;
  this.timeoutMillis = timeoutMillis;
  this.xmlHttpRequest = xmlHttpRequest;
  timeoutMillis > 0 && $schedule(this.timer, timeoutMillis);
}

defineClass(158, 1, {}, Request_0);
_.timeoutMillis = 0;
var Lcom_google_gwt_http_client_Request_2_classLit = createForClass(
  "com.google.gwt.http.client",
  "Request",
  158,
);
function $cancel_0(this$static) {
  if (!this$static.timerId) {
    return;
  }
  ++this$static.cancelCounter;
  this$static.isRepeating
    ? clearInterval_0(this$static.timerId.value_0)
    : clearTimeout_0(this$static.timerId.value_0);
  this$static.timerId = null;
}

function $schedule(this$static, delayMillis) {
  if (delayMillis < 0) {
    throw toJs(new IllegalArgumentException_0("must be non-negative"));
  }
  !!this$static.timerId && $cancel_0(this$static);
  this$static.isRepeating = false;
  this$static.timerId = valueOf_0(
    setTimeout_0(
      createCallback(this$static, this$static.cancelCounter),
      delayMillis,
    ),
  );
}

function clearInterval_0(timerId) {
  $wnd.clearInterval(timerId);
}

function clearTimeout_0(timerId) {
  $wnd.clearTimeout(timerId);
}

function createCallback(timer, cancelCounter) {
  return $entry(function () {
    timer.fire(cancelCounter);
  });
}

function setTimeout_0(func, time) {
  return $wnd.setTimeout(func, time);
}

defineClass(159, 1, {});
_.fire = function fire_0(scheduleCancelCounter) {
  if (scheduleCancelCounter != this.cancelCounter) {
    return;
  }
  this.isRepeating || (this.timerId = null);
  $fireOnTimeout(this.this$01);
};
_.cancelCounter = 0;
_.isRepeating = false;
_.timerId = null;
var Lcom_google_gwt_user_client_Timer_2_classLit = createForClass(
  "com.google.gwt.user.client",
  "Timer",
  159,
);
function Request$1(this$0) {
  this.this$01 = this$0;
}

defineClass(160, 159, {}, Request$1);
var Lcom_google_gwt_http_client_Request$1_2_classLit = createForClass(
  "com.google.gwt.http.client",
  "Request/1",
  160,
);
function $clinit_RequestBuilder() {
  $clinit_RequestBuilder = emptyMethod;
  new RequestBuilder$Method("DELETE");
  new RequestBuilder$Method("GET");
  new RequestBuilder$Method("HEAD");
  POST = new RequestBuilder$Method("POST");
  new RequestBuilder$Method("PUT");
}

function $doSend(this$static, requestData, callback) {
  var e, request, requestPermissionException, xmlHttpRequest;
  xmlHttpRequest = new $wnd.XMLHttpRequest();
  try {
    $open(xmlHttpRequest, this$static.httpMethod, this$static.url_0);
  } catch ($e0) {
    $e0 = toJava($e0);
    if (instanceOf($e0, 17)) {
      e = $e0;
      requestPermissionException = new RequestPermissionException(
        this$static.url_0,
      );
      $initCause(
        requestPermissionException,
        new RequestException(e.getMessage()),
      );
      throw toJs(requestPermissionException);
    } else throw toJs($e0);
  }
  $setHeaders(this$static, xmlHttpRequest);
  this$static.includeCredentials &&
    ((xmlHttpRequest.withCredentials = true), undefined);
  request = new Request_0(xmlHttpRequest, this$static.timeoutMillis, callback);
  $setOnReadyStateChange(
    xmlHttpRequest,
    new RequestBuilder$1(request, callback),
  );
  try {
    xmlHttpRequest.send(requestData);
  } catch ($e1) {
    $e1 = toJava($e1);
    if (instanceOf($e1, 17)) {
      e = $e1;
      throw toJs(new RequestException(e.getMessage()));
    } else throw toJs($e1);
  }
  return request;
}

function $setHeader(this$static, header, value_0) {
  throwIfEmptyOrNull("header", header);
  throwIfEmptyOrNull("value", value_0);
  !this$static.headers && (this$static.headers = new HashMap());
  $putStringValue(this$static.headers, header, value_0);
}

function $setHeaders(this$static, xmlHttpRequest) {
  var e, header, header$iterator;
  if (!!this$static.headers && $size(this$static.headers) > 0) {
    for (
      header$iterator = new AbstractHashMap$EntrySetIterator(
        new AbstractHashMap$EntrySet(this$static.headers).this$01,
      );
      header$iterator.hasNext;

    ) {
      header = $next_0(header$iterator);
      try {
        $setRequestHeader(
          xmlHttpRequest,
          castToString(header.getKey()),
          castToString(header.getValue()),
        );
      } catch ($e0) {
        $e0 = toJava($e0);
        if (instanceOf($e0, 17)) {
          e = $e0;
          throw toJs(new RequestException(e.getMessage()));
        } else throw toJs($e0);
      }
    }
  } else {
    xmlHttpRequest.setRequestHeader(
      "Content-Type",
      "text/plain; charset=utf-8",
    );
  }
}

function RequestBuilder(httpMethod, url_0) {
  $clinit_RequestBuilder();
  RequestBuilder_0.call(this, !httpMethod ? null : httpMethod.name_0, url_0);
}

function RequestBuilder_0(httpMethod, url_0) {
  throwIfEmptyOrNull("httpMethod", httpMethod);
  throwIfEmptyOrNull("url", url_0);
  this.httpMethod = httpMethod;
  this.url_0 = url_0;
}

defineClass(74, 1, {}, RequestBuilder);
_.includeCredentials = false;
_.timeoutMillis = 0;
var POST;
var Lcom_google_gwt_http_client_RequestBuilder_2_classLit = createForClass(
  "com.google.gwt.http.client",
  "RequestBuilder",
  74,
);
function RequestBuilder$1(val$request, val$callback) {
  this.val$request2 = val$request;
  this.val$callback3 = val$callback;
}

defineClass(163, 1, {}, RequestBuilder$1);
_.onReadyStateChange = function onReadyStateChange(xhr) {
  if (xhr.readyState == 4) {
    $clearOnReadyStateChange(xhr);
    $fireOnResponseReceived(this.val$request2, this.val$callback3);
  }
};
var Lcom_google_gwt_http_client_RequestBuilder$1_2_classLit = createForClass(
  "com.google.gwt.http.client",
  "RequestBuilder/1",
  163,
);
function RequestBuilder$Method(name_0) {
  this.name_0 = name_0;
}

defineClass(38, 1, {}, RequestBuilder$Method);
_.toString_0 = function toString_5() {
  return this.name_0;
};
var Lcom_google_gwt_http_client_RequestBuilder$Method_2_classLit =
  createForClass("com.google.gwt.http.client", "RequestBuilder/Method", 38);
function RequestException(message) {
  Exception.call(this, message);
}

defineClass(15, 23, $intern_4, RequestException);
var Lcom_google_gwt_http_client_RequestException_2_classLit = createForClass(
  "com.google.gwt.http.client",
  "RequestException",
  15,
);
function RequestPermissionException(url_0) {
  RequestException.call(
    this,
    "The URL " +
      url_0 +
      " is invalid or violates the same-origin security restriction",
  );
}

defineClass(165, 15, $intern_4, RequestPermissionException);
var Lcom_google_gwt_http_client_RequestPermissionException_2_classLit =
  createForClass(
    "com.google.gwt.http.client",
    "RequestPermissionException",
    165,
  );
function RequestTimeoutException(timeoutMillis) {
  RequestException.call(
    this,
    "A request timeout has expired after " + timeoutMillis + " ms",
  );
}

defineClass(171, 15, $intern_4, RequestTimeoutException);
var Lcom_google_gwt_http_client_RequestTimeoutException_2_classLit =
  createForClass("com.google.gwt.http.client", "RequestTimeoutException", 171);
defineClass(201, 1, {});
var Lcom_google_gwt_http_client_Response_2_classLit = createForClass(
  "com.google.gwt.http.client",
  "Response",
  201,
);
function ResponseImpl(xmlHttpRequest) {
  this.xmlHttpRequest = xmlHttpRequest;
}

defineClass(168, 201, {}, ResponseImpl);
var Lcom_google_gwt_http_client_ResponseImpl_2_classLit = createForClass(
  "com.google.gwt.http.client",
  "ResponseImpl",
  168,
);
function throwIfEmptyOrNull(name_0, value_0) {
  throwIfNull(name_0, value_0);
  if (0 == $trim(value_0).length) {
    throw toJs(new IllegalArgumentException_0(name_0 + " cannot be empty"));
  }
}

function throwIfNull(name_0, value_0) {
  if (null == value_0) {
    throw toJs(new NullPointerException_0(name_0 + " cannot be null"));
  }
}

function getDirectionOnElement(elem) {
  var dirPropertyValue;
  dirPropertyValue = $getPropertyString(elem, "dir");
  if ($equalsIgnoreCase("rtl", dirPropertyValue)) {
    return 0;
  } else if ($equalsIgnoreCase("ltr", dirPropertyValue)) {
    return 1;
  }
  return 2;
}

function canSet(array, value_0) {
  var elementTypeCategory;
  switch (getElementTypeCategory(array)) {
    case 6:
      return instanceOfString(value_0);
    case 7:
      return instanceOfDouble(value_0);
    case 8:
      return instanceOfBoolean(value_0);
    case 3:
      return (
        Array.isArray(value_0) &&
        ((elementTypeCategory = getElementTypeCategory(value_0)),
        !(elementTypeCategory >= 14 && elementTypeCategory <= 16))
      );
    case 11:
      return value_0 != null && typeof value_0 === "function";
    case 12:
      return (
        value_0 != null &&
        (typeof value_0 === "object" || typeof value_0 == "function")
      );
    case 0:
      return canCast(value_0, array.__elementTypeId$);
    case 2:
      return (
        isJsObjectOrFunction(value_0) && !(value_0.typeMarker === typeMarkerFn)
      );
    case 1:
      return (
        (isJsObjectOrFunction(value_0) &&
          !(value_0.typeMarker === typeMarkerFn)) ||
        canCast(value_0, array.__elementTypeId$)
      );
    default:
      return true;
  }
}

function getClassLiteralForArray(clazz, dimensions) {
  return getClassLiteralForArray_0(clazz, dimensions);
}

function getElementTypeCategory(array) {
  return array.__elementTypeCategory$ == null
    ? 10
    : array.__elementTypeCategory$;
}

function initUnidimensionalArray(
  leafClassLiteral,
  castableTypeMap,
  elementTypeId,
  length_0,
  elementTypeCategory,
  dimensions,
) {
  var result;
  result = initializeArrayElementsWithDefaults(elementTypeCategory, length_0);
  elementTypeCategory != 10 &&
    stampJavaTypeInfo(
      getClassLiteralForArray(leafClassLiteral, dimensions),
      castableTypeMap,
      elementTypeId,
      elementTypeCategory,
      result,
    );
  return result;
}

function initializeArrayElementsWithDefaults(elementTypeCategory, length_0) {
  var array = new Array(length_0);
  var initValue;
  switch (elementTypeCategory) {
    case 14:
    case 15:
      initValue = 0;
      break;
    case 16:
      initValue = false;
      break;
    default:
      return array;
  }
  for (var i = 0; i < length_0; ++i) {
    array[i] = initValue;
  }
  return array;
}

function isJavaArray(src_0) {
  return Array.isArray(src_0) && src_0.typeMarker === typeMarkerFn;
}

function setCheck(array, index_0, value_0) {
  checkCriticalArrayType(value_0 == null || canSet(array, value_0));
  return (array[index_0] = value_0);
}

function stampJavaTypeInfo(
  arrayClass,
  castableTypeMap,
  elementTypeId,
  elementTypeCategory,
  array,
) {
  array.___clazz = arrayClass;
  array.castableTypeMap = castableTypeMap;
  array.typeMarker = typeMarkerFn;
  array.__elementTypeId$ = elementTypeId;
  array.__elementTypeCategory$ = elementTypeCategory;
  return array;
}

function create(value_0) {
  var a0, a1, a2;
  a0 = value_0 & $intern_5;
  a1 = (value_0 >> 22) & $intern_5;
  a2 = value_0 < 0 ? $intern_6 : 0;
  return create0(a0, a1, a2);
}

function create_0(a) {
  return create0(a.l, a.m, a.h);
}

function create0(l, m, h) {
  return { l: l, m: m, h: h };
}

function divMod(a, b, computeRemainder) {
  var aIsCopy, aIsMinValue, aIsNegative, bpower, c, negative;
  if (b.l == 0 && b.m == 0 && b.h == 0) {
    throw toJs(new ArithmeticException());
  }
  if (a.l == 0 && a.m == 0 && a.h == 0) {
    computeRemainder && (remainder = create0(0, 0, 0));
    return create0(0, 0, 0);
  }
  if (b.h == $intern_7 && b.m == 0 && b.l == 0) {
    return divModByMinValue(a, computeRemainder);
  }
  negative = false;
  if (b.h >> 19 != 0) {
    b = neg(b);
    negative = !negative;
  }
  bpower = powerOfTwo(b);
  aIsNegative = false;
  aIsMinValue = false;
  aIsCopy = false;
  if (a.h == $intern_7 && a.m == 0 && a.l == 0) {
    aIsMinValue = true;
    aIsNegative = true;
    if (bpower == -1) {
      a = create_0(($clinit_BigLongLib$Const(), MAX_VALUE));
      aIsCopy = true;
      negative = !negative;
    } else {
      c = shr(a, bpower);
      negative && negate(c);
      computeRemainder && (remainder = create0(0, 0, 0));
      return c;
    }
  } else if (a.h >> 19 != 0) {
    aIsNegative = true;
    a = neg(a);
    aIsCopy = true;
    negative = !negative;
  }
  if (bpower != -1) {
    return divModByShift(a, bpower, negative, aIsNegative, computeRemainder);
  }
  if (compare(a, b) < 0) {
    computeRemainder &&
      (aIsNegative
        ? (remainder = neg(a))
        : (remainder = create0(a.l, a.m, a.h)));
    return create0(0, 0, 0);
  }
  return divModHelper(
    aIsCopy ? a : create0(a.l, a.m, a.h),
    b,
    negative,
    aIsNegative,
    aIsMinValue,
    computeRemainder,
  );
}

function divModByMinValue(a, computeRemainder) {
  if (a.h == $intern_7 && a.m == 0 && a.l == 0) {
    computeRemainder && (remainder = create0(0, 0, 0));
    return create_0(($clinit_BigLongLib$Const(), ONE));
  }
  computeRemainder && (remainder = create0(a.l, a.m, a.h));
  return create0(0, 0, 0);
}

function divModByShift(a, bpower, negative, aIsNegative, computeRemainder) {
  var c;
  c = shr(a, bpower);
  negative && negate(c);
  if (computeRemainder) {
    a = maskRight(a, bpower);
    aIsNegative ? (remainder = neg(a)) : (remainder = create0(a.l, a.m, a.h));
  }
  return c;
}

function divModHelper(
  a,
  b,
  negative,
  aIsNegative,
  aIsMinValue,
  computeRemainder,
) {
  var bshift, gte, quotient, shift_0, a1, a2, a0;
  shift_0 = numberOfLeadingZeros(b) - numberOfLeadingZeros(a);
  bshift = shl(b, shift_0);
  quotient = create0(0, 0, 0);
  while (shift_0 >= 0) {
    gte = trialSubtract(a, bshift);
    if (gte) {
      shift_0 < 22
        ? ((quotient.l |= 1 << shift_0), undefined)
        : shift_0 < 44
          ? ((quotient.m |= 1 << (shift_0 - 22)), undefined)
          : ((quotient.h |= 1 << (shift_0 - 44)), undefined);
      if (a.l == 0 && a.m == 0 && a.h == 0) {
        break;
      }
    }
    a1 = bshift.m;
    a2 = bshift.h;
    a0 = bshift.l;
    bshift.h = a2 >>> 1;
    bshift.m = (a1 >>> 1) | ((a2 & 1) << 21);
    bshift.l = (a0 >>> 1) | ((a1 & 1) << 21);
    --shift_0;
  }
  negative && negate(quotient);
  if (computeRemainder) {
    if (aIsNegative) {
      remainder = neg(a);
      aIsMinValue &&
        (remainder = sub_0(remainder, ($clinit_BigLongLib$Const(), ONE)));
    } else {
      remainder = create0(a.l, a.m, a.h);
    }
  }
  return quotient;
}

function maskRight(a, bits) {
  var b0, b1, b2;
  if (bits <= 22) {
    b0 = a.l & ((1 << bits) - 1);
    b1 = b2 = 0;
  } else if (bits <= 44) {
    b0 = a.l;
    b1 = a.m & ((1 << (bits - 22)) - 1);
    b2 = 0;
  } else {
    b0 = a.l;
    b1 = a.m;
    b2 = a.h & ((1 << (bits - 44)) - 1);
  }
  return create0(b0, b1, b2);
}

function negate(a) {
  var neg0, neg1, neg2;
  neg0 = (~a.l + 1) & $intern_5;
  neg1 = (~a.m + (neg0 == 0 ? 1 : 0)) & $intern_5;
  neg2 = (~a.h + (neg0 == 0 && neg1 == 0 ? 1 : 0)) & $intern_6;
  a.l = neg0;
  a.m = neg1;
  a.h = neg2;
}

function numberOfLeadingZeros(a) {
  var b1, b2;
  b2 = numberOfLeadingZeros_0(a.h);
  if (b2 == 32) {
    b1 = numberOfLeadingZeros_0(a.m);
    return b1 == 32 ? numberOfLeadingZeros_0(a.l) + 32 : b1 + 20 - 10;
  } else {
    return b2 - 12;
  }
}

function powerOfTwo(a) {
  var h, l, m;
  l = a.l;
  if ((l & (l - 1)) != 0) {
    return -1;
  }
  m = a.m;
  if ((m & (m - 1)) != 0) {
    return -1;
  }
  h = a.h;
  if ((h & (h - 1)) != 0) {
    return -1;
  }
  if (h == 0 && m == 0 && l == 0) {
    return -1;
  }
  if (h == 0 && m == 0 && l != 0) {
    return numberOfTrailingZeros(l);
  }
  if (h == 0 && m != 0 && l == 0) {
    return numberOfTrailingZeros(m) + 22;
  }
  if (h != 0 && m == 0 && l == 0) {
    return numberOfTrailingZeros(h) + 44;
  }
  return -1;
}

function trialSubtract(a, b) {
  var sum0, sum1, sum2;
  sum2 = a.h - b.h;
  if (sum2 < 0) {
    return false;
  }
  sum0 = a.l - b.l;
  sum1 = a.m - b.m + (sum0 >> 22);
  sum2 += sum1 >> 22;
  if (sum2 < 0) {
    return false;
  }
  a.l = sum0 & $intern_5;
  a.m = sum1 & $intern_5;
  a.h = sum2 & $intern_6;
  return true;
}

var remainder;
function compare(a, b) {
  var a0, a1, a2, b0, b1, b2, signA, signB;
  signA = a.h >> 19;
  signB = b.h >> 19;
  if (signA != signB) {
    return signB - signA;
  }
  a2 = a.h;
  b2 = b.h;
  if (a2 != b2) {
    return a2 - b2;
  }
  a1 = a.m;
  b1 = b.m;
  if (a1 != b1) {
    return a1 - b1;
  }
  a0 = a.l;
  b0 = b.l;
  return a0 - b0;
}

function neg(a) {
  var neg0, neg1, neg2;
  neg0 = (~a.l + 1) & $intern_5;
  neg1 = (~a.m + (neg0 == 0 ? 1 : 0)) & $intern_5;
  neg2 = (~a.h + (neg0 == 0 && neg1 == 0 ? 1 : 0)) & $intern_6;
  return create0(neg0, neg1, neg2);
}

function or(a, b) {
  return create0(a.l | b.l, a.m | b.m, a.h | b.h);
}

function shl(a, n) {
  var res0, res1, res2;
  n &= 63;
  if (n < 22) {
    res0 = a.l << n;
    res1 = (a.m << n) | (a.l >> (22 - n));
    res2 = (a.h << n) | (a.m >> (22 - n));
  } else if (n < 44) {
    res0 = 0;
    res1 = a.l << (n - 22);
    res2 = (a.m << (n - 22)) | (a.l >> (44 - n));
  } else {
    res0 = 0;
    res1 = 0;
    res2 = a.l << (n - 44);
  }
  return create0(res0 & $intern_5, res1 & $intern_5, res2 & $intern_6);
}

function shr(a, n) {
  var a2, negative, res0, res1, res2;
  n &= 63;
  a2 = a.h;
  negative = (a2 & $intern_7) != 0;
  negative && (a2 |= -1048576);
  if (n < 22) {
    res2 = a2 >> n;
    res1 = (a.m >> n) | (a2 << (22 - n));
    res0 = (a.l >> n) | (a.m << (22 - n));
  } else if (n < 44) {
    res2 = negative ? $intern_6 : 0;
    res1 = a2 >> (n - 22);
    res0 = (a.m >> (n - 22)) | (a2 << (44 - n));
  } else {
    res2 = negative ? $intern_6 : 0;
    res1 = negative ? $intern_5 : 0;
    res0 = a2 >> (n - 44);
  }
  return create0(res0 & $intern_5, res1 & $intern_5, res2 & $intern_6);
}

function shru(a, n) {
  var a2, res0, res1, res2;
  n &= 63;
  a2 = a.h & $intern_6;
  if (n < 22) {
    res2 = a2 >>> n;
    res1 = (a.m >> n) | (a2 << (22 - n));
    res0 = (a.l >> n) | (a.m << (22 - n));
  } else if (n < 44) {
    res2 = 0;
    res1 = a2 >>> (n - 22);
    res0 = (a.m >> (n - 22)) | (a.h << (44 - n));
  } else {
    res2 = 0;
    res1 = 0;
    res0 = a2 >>> (n - 44);
  }
  return create0(res0 & $intern_5, res1 & $intern_5, res2 & $intern_6);
}

function sub_0(a, b) {
  var sum0, sum1, sum2;
  sum0 = a.l - b.l;
  sum1 = a.m - b.m + (sum0 >> 22);
  sum2 = a.h - b.h + (sum1 >> 22);
  return create0(sum0 & $intern_5, sum1 & $intern_5, sum2 & $intern_6);
}

function toInt(a) {
  return a.l | (a.m << 22);
}

function toString_6(a) {
  var digits, rem, res, tenPowerLong, zeroesNeeded;
  if (a.l == 0 && a.m == 0 && a.h == 0) {
    return "0";
  }
  if (a.h == $intern_7 && a.m == 0 && a.l == 0) {
    return "-9223372036854775808";
  }
  if (a.h >> 19 != 0) {
    return "-" + toString_6(neg(a));
  }
  rem = a;
  res = "";
  while (!(rem.l == 0 && rem.m == 0 && rem.h == 0)) {
    tenPowerLong = create(1000000000);
    rem = divMod(rem, tenPowerLong, true);
    digits = "" + toInt(remainder);
    if (!(rem.l == 0 && rem.m == 0 && rem.h == 0)) {
      zeroesNeeded = 9 - digits.length;
      for (; zeroesNeeded > 0; zeroesNeeded--) {
        digits = "0" + digits;
      }
    }
    res = digits + res;
  }
  return res;
}

function $clinit_BigLongLib$Const() {
  $clinit_BigLongLib$Const = emptyMethod;
  MAX_VALUE = create0($intern_5, $intern_5, 524287);
  create0(0, 0, $intern_7);
  ONE = create(1);
  create(2);
  create(0);
}

var MAX_VALUE, ONE;
function toJava(e) {
  var javaException;
  if (instanceOf(e, 4)) {
    return e;
  }
  javaException = e && e.__java$exception;
  if (!javaException) {
    javaException = new JavaScriptException(e);
    captureStackTrace(javaException);
  }
  return javaException;
}

function toJs(t) {
  return t.backingJsObject;
}

function compare_0(a, b) {
  var result;
  if (isSmallLong0(a) && isSmallLong0(b)) {
    result = a - b;
    if (!isNaN(result)) {
      return result;
    }
  }
  return compare(
    isSmallLong0(a) ? toBigLong(a) : a,
    isSmallLong0(b) ? toBigLong(b) : b,
  );
}

function createLongEmul(big_0) {
  var a2;
  a2 = big_0.h;
  if (a2 == 0) {
    return big_0.l + big_0.m * $intern_8;
  }
  if (a2 == $intern_6) {
    return big_0.l + big_0.m * $intern_8 - $intern_9;
  }
  return big_0;
}

function eq(a, b) {
  return compare_0(a, b) == 0;
}

function isSmallLong0(value_0) {
  return typeof value_0 === "number";
}

function or_0(a, b) {
  return createLongEmul(
    or(isSmallLong0(a) ? toBigLong(a) : a, isSmallLong0(b) ? toBigLong(b) : b),
  );
}

function toBigLong(longValue) {
  var a0, a1, a3, value_0;
  value_0 = longValue;
  a3 = 0;
  if (value_0 < 0) {
    value_0 += $intern_9;
    a3 = $intern_6;
  }
  a1 = round_int(value_0 / $intern_8);
  a0 = round_int(value_0 - a1 * $intern_8);
  return create0(a0, a1, a3);
}

function toInt_0(a) {
  if (isSmallLong0(a)) {
    return a | 0;
  }
  return toInt(a);
}

function toString_7(a) {
  if (isSmallLong0(a)) {
    return "" + a;
  }
  return toString_6(a);
}

function init() {
  var nameBox, output, sendButton, service, service2;
  $wnd.setTimeout($entry(assertCompileTimeUserAgent));
  $onModuleLoad();
  nameBox = new TextBox();
  output = new Label();
  sendButton = new Button();
  service = new HelloService_Proxy();
  service2 = new Hello2Service_Proxy();
  $addDomHandler(
    sendButton,
    new MyApp$1(nameBox, service, service2),
    ($clinit_ClickEvent(), $clinit_ClickEvent(), TYPE),
  );
  $add_0(($clinit_RootPanel(), get_0()), nameBox);
  $add_0(get_0(), sendButton);
  $add_0(get_0(), output);
}

defineClass(198, 1, {});
var Lcom_google_gwt_text_shared_AbstractRenderer_2_classLit = createForClass(
  "com.google.gwt.text.shared",
  "AbstractRenderer",
  198,
);
function PassthroughParser() {}

defineClass(135, 1, {}, PassthroughParser);
var INSTANCE_0;
var Lcom_google_gwt_text_shared_testing_PassthroughParser_2_classLit =
  createForClass(
    "com.google.gwt.text.shared.testing",
    "PassthroughParser",
    135,
  );
function PassthroughRenderer() {}

defineClass(134, 198, {}, PassthroughRenderer);
var INSTANCE_1;
var Lcom_google_gwt_text_shared_testing_PassthroughRenderer_2_classLit =
  createForClass(
    "com.google.gwt.text.shared.testing",
    "PassthroughRenderer",
    134,
  );
function $clinit_DOM() {
  $clinit_DOM = emptyMethod;
  $clinit_DOMImplMozilla();
}

function dispatchEvent_0(evt, elem, listener) {
  $clinit_DOM();
  var prevCurrentEvent;
  prevCurrentEvent = currentEvent;
  currentEvent = evt;
  elem == sCaptureElem &&
    $eventGetTypeInt(evt.type) == 8192 &&
    (sCaptureElem = null);
  listener.onBrowserEvent(evt);
  currentEvent = prevCurrentEvent;
}

function resolve(maybePotential) {
  $clinit_DOM();
  return maybePotential.__gwt_resolve
    ? maybePotential.__gwt_resolve()
    : maybePotential;
}

function sinkBitlessEvent(elem, eventTypeName) {
  var dispatchMap, dispatcher;
  $clinit_DOM();
  $maybeInitializeEventSystem();
  dispatchMap = bitlessEventDispatchers;
  dispatcher = dispatchMap[eventTypeName] || dispatchMap["_default_"];
  elem.addEventListener(eventTypeName, dispatcher, false);
}

var currentEvent = null,
  sCaptureElem;
function $onModuleLoad() {
  var allowedModes, currentMode, i;
  currentMode = $doc.compatMode;
  allowedModes = stampJavaTypeInfo(
    getClassLiteralForArray(Ljava_lang_String_2_classLit, 1),
    $intern_0,
    2,
    6,
    ["CSS1Compat"],
  );
  for (i = 0; i < allowedModes.length; i++) {
    if ($equals_1(allowedModes[i], currentMode)) {
      return;
    }
  }
  allowedModes.length == 1 &&
  $equals_1("CSS1Compat", allowedModes[0]) &&
  $equals_1("BackCompat", currentMode)
    ? "GWT no longer supports Quirks Mode (document.compatMode=' BackCompat').<br>Make sure your application's host HTML page has a Standards Mode (document.compatMode=' CSS1Compat') doctype,<br>e.g. by using &lt;!doctype html&gt; at the start of your application's HTML page.<br><br>To continue using this unsupported rendering mode and risk layout problems, suppress this message by adding<br>the following line to your*.gwt.xml module file:<br>&nbsp;&nbsp;&lt;extend-configuration-property name=\"document.compatMode\" value=\"" +
      currentMode +
      '"/&gt;'
    : "Your *.gwt.xml module configuration prohibits the use of the current document rendering mode (document.compatMode=' " +
      currentMode +
      "').<br>Modify your application's host HTML page doctype, or update your custom " +
      "'document.compatMode' configuration property settings.";
}

function getTypeInt(typeName) {
  return $eventGetTypeInt(($clinit_DOM(), typeName));
}

function addCloseHandler(handler) {
  maybeInitializeCloseHandlers();
  return addHandler(TYPE_0 ? TYPE_0 : (TYPE_0 = new GwtEvent$Type()), handler);
}

function addHandler(type_0, handler) {
  return $addHandler(
    (!handlers_0 && (handlers_0 = new Window$WindowHandlers()), handlers_0),
    type_0,
    handler,
  );
}

function maybeInitializeCloseHandlers() {
  if (!closeHandlersInitialized) {
    $initWindowCloseHandler();
    closeHandlersInitialized = true;
  }
}

function onClosing() {
  var event_0;
  if (closeHandlersInitialized) {
    event_0 = new Window$ClosingEvent();
    !!handlers_0 && $fireEvent(handlers_0, event_0);
    return null;
  }
  return null;
}

var closeHandlersInitialized = false,
  handlers_0;
function $clinit_Window$ClosingEvent() {
  $clinit_Window$ClosingEvent = emptyMethod;
  TYPE_1 = new GwtEvent$Type();
}

function Window$ClosingEvent() {
  $clinit_Window$ClosingEvent();
}

defineClass(132, 190, {}, Window$ClosingEvent);
_.dispatch = function dispatch_1(handler) {
  checkCriticalType(handler == null);
  null.$_nullMethod();
};
_.getAssociatedType_0 = function getAssociatedType_8() {
  return TYPE_1;
};
_.getAssociatedType = function getAssociatedType_7() {
  return TYPE_1;
};
var TYPE_1;
var Lcom_google_gwt_user_client_Window$ClosingEvent_2_classLit = createForClass(
  "com.google.gwt.user.client",
  "Window/ClosingEvent",
  132,
);
function Window$WindowHandlers() {
  HandlerManager.call(this, null);
}

defineClass(66, 51, {}, Window$WindowHandlers);
var Lcom_google_gwt_user_client_Window$WindowHandlers_2_classLit =
  createForClass("com.google.gwt.user.client", "Window/WindowHandlers", 66);
function $eventGetTypeInt(eventType) {
  switch (eventType) {
    case "blur":
      return 4096;
    case "change":
      return 1024;
    case "click":
      return 1;
    case "dblclick":
      return 2;
    case "focus":
      return 2048;
    case "keydown":
      return 128;
    case "keypress":
      return 256;
    case "keyup":
      return 512;
    case "load":
      return 32768;
    case "losecapture":
      return 8192;
    case "mousedown":
      return 4;
    case "mousemove":
      return 64;
    case "mouseout":
      return 32;
    case "mouseover":
      return 16;
    case "mouseup":
      return 8;
    case "scroll":
      return 16384;
    case "error":
      return 65536;
    case "DOMMouseScroll":
    case "mousewheel":
      return $intern_10;
    case "contextmenu":
      return 262144;
    case "paste":
      return $intern_7;
    case "touchstart":
      return 1048576;
    case "touchmove":
      return 2097152;
    case "touchend":
      return $intern_8;
    case "touchcancel":
      return 8388608;
    case "gesturestart":
      return $intern_11;
    case "gesturechange":
      return $intern_12;
    case "gestureend":
      return $intern_13;
    default:
      return -1;
  }
}

function $maybeInitializeEventSystem() {
  if (!eventSystemIsInitialized) {
    $initEventSystem();
    $initSyntheticMouseUpEvents();
    eventSystemIsInitialized = true;
  }
}

function getEventListener(elem) {
  var maybeListener = elem.__listener;
  return !instanceOfJso(maybeListener) && instanceOf(maybeListener, 10)
    ? maybeListener
    : null;
}

function setEventListener(elem, listener) {
  elem.__listener = listener;
}

var eventSystemIsInitialized = false;
function $clinit_DOMImplStandard() {
  $clinit_DOMImplStandard = emptyMethod;
  bitlessEventDispatchers = {
    _default_: dispatchEvent_2,
    dragenter: dispatchDragEvent,
    dragover: dispatchDragEvent,
  };
  captureEventDispatchers = {
    click: dispatchCapturedMouseEvent,
    dblclick: dispatchCapturedMouseEvent,
    mousedown: dispatchCapturedMouseEvent,
    mouseup: dispatchCapturedMouseEvent,
    mousemove: dispatchCapturedMouseEvent,
    mouseover: dispatchCapturedMouseEvent,
    mouseout: dispatchCapturedMouseEvent,
    mousewheel: dispatchCapturedMouseEvent,
    keydown: dispatchCapturedEvent,
    keyup: dispatchCapturedEvent,
    keypress: dispatchCapturedEvent,
    touchstart: dispatchCapturedMouseEvent,
    touchend: dispatchCapturedMouseEvent,
    touchmove: dispatchCapturedMouseEvent,
    touchcancel: dispatchCapturedMouseEvent,
    gesturestart: dispatchCapturedMouseEvent,
    gestureend: dispatchCapturedMouseEvent,
    gesturechange: dispatchCapturedMouseEvent,
  };
}

function $initEventSystem() {
  dispatchEvent_1 = $entry(dispatchEvent_2);
  dispatchUnhandledEvent = $entry(dispatchUnhandledEvent_0);
  var foreach = foreach_0;
  var bitlessEvents = bitlessEventDispatchers;
  foreach(bitlessEvents, function (e, fn) {
    bitlessEvents[e] = $entry(fn);
  });
  var captureEvents_0 = captureEventDispatchers;
  foreach(captureEvents_0, function (e, fn) {
    captureEvents_0[e] = $entry(fn);
  });
  foreach(captureEvents_0, function (e, fn) {
    $wnd.addEventListener(e, fn, true);
  });
}

function $sinkEventsImpl(elem, bits) {
  var chMask = (elem.__eventBits || 0) ^ bits;
  elem.__eventBits = bits;
  if (!chMask) return;
  chMask & 1 && (elem.onclick = bits & 1 ? dispatchEvent_1 : null);
  chMask & 2 && (elem.ondblclick = bits & 2 ? dispatchEvent_1 : null);
  chMask & 4 && (elem.onmousedown = bits & 4 ? dispatchEvent_1 : null);
  chMask & 8 && (elem.onmouseup = bits & 8 ? dispatchEvent_1 : null);
  chMask & 16 && (elem.onmouseover = bits & 16 ? dispatchEvent_1 : null);
  chMask & 32 && (elem.onmouseout = bits & 32 ? dispatchEvent_1 : null);
  chMask & 64 && (elem.onmousemove = bits & 64 ? dispatchEvent_1 : null);
  chMask & 128 && (elem.onkeydown = bits & 128 ? dispatchEvent_1 : null);
  chMask & 256 && (elem.onkeypress = bits & 256 ? dispatchEvent_1 : null);
  chMask & 512 && (elem.onkeyup = bits & 512 ? dispatchEvent_1 : null);
  chMask & 1024 && (elem.onchange = bits & 1024 ? dispatchEvent_1 : null);
  chMask & 2048 && (elem.onfocus = bits & 2048 ? dispatchEvent_1 : null);
  chMask & 4096 && (elem.onblur = bits & 4096 ? dispatchEvent_1 : null);
  chMask & 8192 && (elem.onlosecapture = bits & 8192 ? dispatchEvent_1 : null);
  chMask & 16384 && (elem.onscroll = bits & 16384 ? dispatchEvent_1 : null);
  chMask & 32768 &&
    (elem.onload = bits & 32768 ? dispatchUnhandledEvent : null);
  chMask & 65536 && (elem.onerror = bits & 65536 ? dispatchEvent_1 : null);
  chMask & $intern_10 &&
    (elem.onmousewheel = bits & $intern_10 ? dispatchEvent_1 : null);
  chMask & 262144 &&
    (elem.oncontextmenu = bits & 262144 ? dispatchEvent_1 : null);
  chMask & $intern_7 &&
    (elem.onpaste = bits & $intern_7 ? dispatchEvent_1 : null);
  chMask & 1048576 &&
    (elem.ontouchstart = bits & 1048576 ? dispatchEvent_1 : null);
  chMask & 2097152 &&
    (elem.ontouchmove = bits & 2097152 ? dispatchEvent_1 : null);
  chMask & $intern_8 &&
    (elem.ontouchend = bits & $intern_8 ? dispatchEvent_1 : null);
  chMask & 8388608 &&
    (elem.ontouchcancel = bits & 8388608 ? dispatchEvent_1 : null);
  chMask & $intern_11 &&
    (elem.ongesturestart = bits & $intern_11 ? dispatchEvent_1 : null);
  chMask & $intern_12 &&
    (elem.ongesturechange = bits & $intern_12 ? dispatchEvent_1 : null);
  chMask & $intern_13 &&
    (elem.ongestureend = bits & $intern_13 ? dispatchEvent_1 : null);
}

function dispatchCapturedEvent(evt) {
  $clinit_DOM();
}

function dispatchCapturedMouseEvent(evt) {
  $clinit_DOMImplStandard();
  $clinit_DOM();
  return;
}

function dispatchDragEvent(evt) {
  evt.preventDefault();
  dispatchEvent_2(evt);
}

function dispatchEvent_2(evt) {
  var element;
  element = getFirstAncestorWithListener(evt);
  if (!element) {
    return;
  }
  dispatchEvent_0(
    evt,
    element.nodeType != 1 ? null : element,
    getEventListener(element),
  );
}

function dispatchUnhandledEvent_0(evt) {
  var element;
  element = evt.currentTarget;
  element["__gwtLastUnhandledEvent"] = evt.type;
  dispatchEvent_2(evt);
}

function getFirstAncestorWithListener(evt) {
  var curElem;
  curElem = evt.currentTarget;
  while (!!curElem && !getEventListener(curElem)) {
    curElem = curElem.parentNode;
  }
  return curElem;
}

var bitlessEventDispatchers,
  captureElem,
  captureEventDispatchers,
  dispatchEvent_1,
  dispatchUnhandledEvent;
function $clinit_DOMImplMozilla() {
  $clinit_DOMImplMozilla = emptyMethod;
  $clinit_DOMImplStandard();
  captureEventDispatchers["DOMMouseScroll"] = dispatchCapturedMouseEvent;
}

function $initSyntheticMouseUpEvents() {
  $wnd.addEventListener(
    "mouseout",
    $entry(function (evt) {
      var cap = ($clinit_DOMImplStandard(), captureElem);
      if (cap && !evt.relatedTarget) {
        if ("html" == evt.target.tagName.toLowerCase()) {
          var muEvent = $doc.createEvent("MouseEvents");
          muEvent.initMouseEvent(
            "mouseup",
            true,
            true,
            $wnd,
            0,
            evt.screenX,
            evt.screenY,
            evt.clientX,
            evt.clientY,
            evt.ctrlKey,
            evt.altKey,
            evt.shiftKey,
            evt.metaKey,
            evt.button,
            null,
          );
          cap.dispatchEvent(muEvent);
        }
      }
    }),
    true,
  );
}

function $sinkEvents(elem, bits) {
  $maybeInitializeEventSystem();
  $sinkEventsImpl(elem, bits);
  bits & $intern_10 &&
    elem.addEventListener(
      "DOMMouseScroll",
      ($clinit_DOMImplStandard(), dispatchEvent_1),
      false,
    );
}

function foreach_0(map_0, fn) {
  for (var e in map_0) {
    map_0.hasOwnProperty(e) && fn(e, map_0[e]);
  }
}

function $initWindowCloseHandler() {
  var oldOnBeforeUnload = $wnd.onbeforeunload;
  var oldOnUnload = $wnd.onunload;
  $wnd.onbeforeunload = function (evt) {
    var ret, oldRet;
    try {
      ret = $entry(onClosing)();
    } finally {
      oldRet = oldOnBeforeUnload && oldOnBeforeUnload(evt);
    }
    if (ret != null) {
      return ret;
    }
    if (oldRet != null) {
      return oldRet;
    }
  };
  $wnd.onunload = $entry(function (evt) {
    try {
      closeHandlersInitialized &&
        fire(
          (!handlers_0 && (handlers_0 = new Window$WindowHandlers()),
          handlers_0),
        );
    } finally {
      oldOnUnload && oldOnUnload(evt);
      $wnd.onresize = null;
      $wnd.onscroll = null;
      $wnd.onbeforeunload = null;
      $wnd.onunload = null;
    }
  });
}

function IncompatibleRemoteServiceException() {
  RuntimeException_0.call(
    this,
    "This application is out of date, please click the refresh button on your browser.",
  );
}

function IncompatibleRemoteServiceException_0(msg) {
  RuntimeException_0.call(
    this,
    "This application is out of date, please click the refresh button on your browser. ( " +
      msg +
      " )",
  );
}

function IncompatibleRemoteServiceException_1(cause) {
  RuntimeException_1.call(
    this,
    "The response could not be deserialized",
    cause,
  );
}

defineClass(
  43,
  7,
  $intern_1,
  IncompatibleRemoteServiceException,
  IncompatibleRemoteServiceException_0,
  IncompatibleRemoteServiceException_1,
);
var Lcom_google_gwt_user_client_rpc_IncompatibleRemoteServiceException_2_classLit =
  createForClass(
    "com.google.gwt.user.client.rpc",
    "IncompatibleRemoteServiceException",
    43,
  );
function deserialize(streamReader, instance) {
  setDetailMessage(
    instance,
    $getString(streamReader, streamReader.results[--streamReader.index_0]),
  );
}

function instantiate(streamReader) {
  return new IncompatibleRemoteServiceException();
}

function serialize(streamWriter, instance) {
  $writeString(streamWriter, instance.detailMessage);
}

function InvocationException(s) {
  RuntimeException_1.call(this, s, null);
}

function InvocationException_0(s, cause) {
  RuntimeException_1.call(this, s, cause);
}

defineClass(33, 7, $intern_1, InvocationException, InvocationException_0);
var Lcom_google_gwt_user_client_rpc_InvocationException_2_classLit =
  createForClass("com.google.gwt.user.client.rpc", "InvocationException", 33);
function $create(this$static, serviceEntryPoint) {
  this$static.builder = new RequestBuilder(
    ($clinit_RequestBuilder(), POST),
    serviceEntryPoint,
  );
  return this$static;
}

function $doFinish(rb) {
  $setHeader(rb, "X-GWT-Permutation", ($clinit_Impl(), $strongName));
  $setHeader(rb, "X-GWT-Module-Base", getModuleBaseURL());
}

function $doSetCallback(rb, callback) {
  throwIfNull("callback", callback);
  rb.callback = callback;
}

function $doSetRequestData(rb, data_0) {
  rb.requestData = data_0;
}

function $finish(this$static) {
  try {
    $doFinish(this$static.builder);
    return this$static.builder;
  } finally {
    this$static.builder = null;
  }
}

function $setCallback(this$static, callback) {
  $doSetCallback(this$static.builder, callback);
  return this$static;
}

function $setContentType(this$static) {
  $setHeader(
    this$static.builder,
    "Content-Type",
    "text/x-gwt-rpc; charset=utf-8",
  );
  return this$static;
}

function $setRequestData(this$static, data_0) {
  $doSetRequestData(this$static.builder, data_0);
  return this$static;
}

function RpcRequestBuilder() {}

defineClass(164, 1, {}, RpcRequestBuilder);
var Lcom_google_gwt_user_client_rpc_RpcRequestBuilder_2_classLit =
  createForClass("com.google.gwt.user.client.rpc", "RpcRequestBuilder", 164);
function RpcTokenException() {
  RuntimeException_0.call(this, "Invalid RPC token");
}

defineClass(114, 7, $intern_1, RpcTokenException);
var Lcom_google_gwt_user_client_rpc_RpcTokenException_2_classLit =
  createForClass("com.google.gwt.user.client.rpc", "RpcTokenException", 114);
function deserialize_0(streamReader, instance) {
  setDetailMessage(
    instance,
    $getString(streamReader, streamReader.results[--streamReader.index_0]),
  );
}

function instantiate_0(streamReader) {
  return new RpcTokenException();
}

function SerializationException(msg) {
  Exception.call(this, msg);
}

defineClass(11, 23, { 11: 1, 3: 1, 4: 1 }, SerializationException);
var Lcom_google_gwt_user_client_rpc_SerializationException_2_classLit =
  createForClass(
    "com.google.gwt.user.client.rpc",
    "SerializationException",
    11,
  );
function ServiceDefTarget$NoServiceEntryPointSpecifiedException() {
  InvocationException.call(this, "Service implementation URL not specified");
}

defineClass(
  102,
  33,
  $intern_1,
  ServiceDefTarget$NoServiceEntryPointSpecifiedException,
);
var Lcom_google_gwt_user_client_rpc_ServiceDefTarget$NoServiceEntryPointSpecifiedException_2_classLit =
  createForClass(
    "com.google.gwt.user.client.rpc",
    "ServiceDefTarget/NoServiceEntryPointSpecifiedException",
    102,
  );
function StatusCodeException(statusCode, statusText, encodedResponse) {
  InvocationException.call(
    this,
    statusCode + " " + statusText + " " + encodedResponse,
  );
}

defineClass(167, 33, $intern_1, StatusCodeException);
var Lcom_google_gwt_user_client_rpc_StatusCodeException_2_classLit =
  createForClass("com.google.gwt.user.client.rpc", "StatusCodeException", 167);
function serialize_0(streamWriter, instance) {
  $writeString(streamWriter, instance.$_nullField);
}

function deserialize_1(streamReader, instance) {}

function instantiate_1(streamReader) {
  return $clinit_Boolean(), $readBoolean(streamReader) ? true : false;
}

function serialize_1(streamWriter, instance) {
  $writeBoolean(streamWriter, (checkCriticalNotNull(instance), instance));
}

function deserialize_2(streamReader, instance) {}

function instantiate_2(streamReader) {
  return valueOf_0(streamReader.results[--streamReader.index_0]);
}

function serialize_2(streamWriter, instance) {
  $append(streamWriter, "" + instance.value_0);
}

function deserialize_3(streamReader, instance) {}

function instantiate_3(streamReader) {
  return $getString(streamReader, streamReader.results[--streamReader.index_0]);
}

function serialize_3(streamWriter, instance) {
  $append(streamWriter, "" + $addString(streamWriter, instance));
}

function setDetailMessage(instance, value_0) {
  instance.detailMessage = value_0;
}

function $setFlags(this$static, flags) {
  this$static.flags = flags;
}

function $setVersion(this$static, version) {
  this$static.version = version;
}

function base64Value(digit) {
  if (digit >= 65 && digit <= 90) {
    return digit - 65;
  }
  if (digit >= 97) {
    return digit - 97 + 26;
  }
  if (digit >= 48 && digit <= 57) {
    return digit - 48 + 52;
  }
  if (digit == 36) {
    return 62;
  }
  return 63;
}

function longFromBase64(value_0) {
  var len, longVal, pos;
  pos = 0;
  longVal = base64Value($charAt(value_0, pos++));
  len = value_0.length;
  while (pos < len) {
    longVal = createLongEmul(
      shl(isSmallLong0(longVal) ? toBigLong(longVal) : longVal, 6),
    );
    longVal = or_0(longVal, base64Value($charAt(value_0, pos++)));
  }
  return longVal;
}

defineClass(73, 1, {});
_.flags = 0;
_.version = 7;
var Lcom_google_gwt_user_client_rpc_impl_AbstractSerializationStream_2_classLit =
  createForClass(
    "com.google.gwt.user.client.rpc.impl",
    "AbstractSerializationStream",
    73,
  );
function $readObject(this$static) {
  var token, typeSignature, id_0, instance;
  token = this$static.results[--this$static.index_0];
  if (token < 0) {
    return $get_0(this$static.seenArray, -(token + 1));
  }
  typeSignature = $getString(this$static, token);
  if (typeSignature == null) {
    return null;
  }
  return (
    (id_0 =
      ($add_2(this$static.seenArray, null),
      this$static.seenArray.array.length)),
    (instance = $instantiate(
      this$static.serializer,
      this$static,
      typeSignature,
    )),
    $set(this$static.seenArray, id_0 - 1, instance),
    $deserialize(this$static.serializer, this$static, instance, typeSignature),
    instance
  );
}

defineClass(169, 73, {});
var Lcom_google_gwt_user_client_rpc_impl_AbstractSerializationStreamReader_2_classLit =
  createForClass(
    "com.google.gwt.user.client.rpc.impl",
    "AbstractSerializationStreamReader",
    169,
  );
function $addString(this$static, string) {
  var index_0, o;
  if (string == null) {
    return 0;
  }
  o = castTo($getStringValue(this$static.stringMap, string), 13);
  if (o) {
    return o.value_0;
  }
  $add_2(this$static.stringTable, string);
  index_0 = this$static.stringTable.array.length;
  $putStringValue(this$static.stringMap, string, valueOf_0(index_0));
  return index_0;
}

function $writeBoolean(this$static, fieldValue) {
  append(this$static.encodeBuffer, fieldValue ? "1" : "0");
}

function $writeInt(this$static, fieldValue) {
  append(this$static.encodeBuffer, "" + fieldValue);
}

function $writeObject(this$static, instance) {
  var objIndex, typeSignature;
  if (instance == null) {
    $append(this$static, "" + $addString(this$static, null));
    return;
  }
  objIndex = $containsKey(this$static.objectMap, instance)
    ? castTo($get(this$static.objectMap, instance), 13).value_0
    : -1;
  if (objIndex >= 0) {
    append(this$static.encodeBuffer, "" + -(objIndex + 1));
    return;
  }
  $put(this$static.objectMap, instance, valueOf_0(this$static.objectCount++));
  typeSignature = $getObjectTypeSignature(this$static, instance);
  if (typeSignature == null) {
    throw toJs(
      new SerializationException(
        "could not get type signature for " +
          getClass__Ljava_lang_Class___devirtual$(instance),
      ),
    );
  }
  $append(this$static, "" + $addString(this$static, typeSignature));
  $serialize(this$static.serializer, this$static, instance, typeSignature);
}

function $writeString(this$static, value_0) {
  $append(this$static, "" + $addString(this$static, value_0));
}

defineClass(161, 73, {});
_.objectCount = 0;
var Lcom_google_gwt_user_client_rpc_impl_AbstractSerializationStreamWriter_2_classLit =
  createForClass(
    "com.google.gwt.user.client.rpc.impl",
    "AbstractSerializationStreamWriter",
    161,
  );
function $getString(this$static, index_0) {
  return index_0 > 0 ? this$static.stringTable[index_0 - 1] : null;
}

function $prepareToRead(this$static, encoded) {
  var versionStr, pos;
  ((versionStr = $substring(
    encoded,
    encoded.lastIndexOf(",") + 1,
    encoded.lastIndexOf("]"),
  )),
  (pos = versionStr.lastIndexOf("[")),
  pos >= 0 &&
    (versionStr =
      (checkCriticalStringElementIndex(pos + 1, versionStr.length + 1),
      versionStr.substr(pos + 1))),
  __parseAndValidateInt($trim(versionStr))) < 8
    ? (this$static.results = eval(encoded))
    : (this$static.results = safeEval(encoded));
  this$static.index_0 = this$static.results.length;
  this$static.seenArray.array.length = 0;
  $setVersion(this$static, this$static.results[--this$static.index_0]);
  $setFlags(this$static, this$static.results[--this$static.index_0]);
  if (this$static.version < 5 || this$static.version > 8) {
    throw toJs(
      new IncompatibleRemoteServiceException_0(
        "Got version " +
          this$static.version +
          ", expected version between " +
          5 +
          " and " +
          8,
      ),
    );
  }
  if (((this$static.flags | 3) ^ 3) != 0) {
    throw toJs(
      new IncompatibleRemoteServiceException_0(
        "Got an unknown flag from server: " + this$static.flags,
      ),
    );
  }
  this$static.stringTable = this$static.results[--this$static.index_0];
}

function $readBoolean(this$static) {
  return !!this$static.results[--this$static.index_0];
}

function ClientSerializationStreamReader(serializer) {
  this.seenArray = new ArrayList();
  this.serializer = serializer;
}

defineClass(170, 169, {}, ClientSerializationStreamReader);
_.index_0 = 0;
var Lcom_google_gwt_user_client_rpc_impl_ClientSerializationStreamReader_2_classLit =
  createForClass(
    "com.google.gwt.user.client.rpc.impl",
    "ClientSerializationStreamReader",
    170,
  );
function $clinit_ClientSerializationStreamWriter() {
  $clinit_ClientSerializationStreamWriter = emptyMethod;
  regex_0 = getQuotingRegex();
}

function $append(this$static, token) {
  append(this$static.encodeBuffer, token);
}

function $getObjectTypeSignature(this$static, o) {
  var clazz, e, clazz_0, superclass;
  clazz = getClass__Ljava_lang_Class___devirtual$(o);
  if (instanceOf(o, 6)) {
    e = castTo(o, 6);
    clazz =
      ((clazz_0 = e.___clazz),
      (superclass = clazz_0.enumSuperclass),
      superclass == Ljava_lang_Enum_2_classLit ? clazz_0 : superclass);
  }
  return $getSerializationSignature(this$static.serializer, clazz);
}

function $toString_1(this$static) {
  var buffer;
  buffer = new StringBuilder();
  append(buffer, "" + this$static.version);
  append(buffer, "" + this$static.flags);
  $writeStringTable(this$static, buffer);
  $append_1(buffer, this$static.encodeBuffer.string);
  return buffer.string;
}

function $writeStringTable(this$static, buffer) {
  var s, s$iterator, stringTable;
  stringTable = this$static.stringTable;
  append(buffer, "" + stringTable.array.length);
  for (
    s$iterator = new ArrayList$1(stringTable);
    s$iterator.i < s$iterator.this$01.array.length;

  ) {
    s = castToString($next_1(s$iterator));
    append(buffer, quoteString(s));
  }
  return buffer;
}

function ClientSerializationStreamWriter(
  serializer,
  moduleBaseURL,
  serializationPolicyStrongName,
) {
  $clinit_ClientSerializationStreamWriter();
  this.objectMap = new IdentityHashMap();
  this.stringMap = new HashMap();
  this.stringTable = new ArrayList();
  this.serializer = serializer;
  this.moduleBaseURL = moduleBaseURL;
  this.serializationPolicyStrongName = serializationPolicyStrongName;
}

function append(sb, token) {
  $clinit_ClientSerializationStreamWriter();
  sb.string += "" + token;
  sb.string += "|";
}

function getQuotingRegex() {
  var ua = navigator.userAgent.toLowerCase();
  if (ua.indexOf("android") != -1) {
    return /[\u0000\|\\\u0080-\uFFFF]/g;
  } else if (ua.indexOf("chrome/11") != -1) {
    return /[\u0000\|\\\u0300-\uFFFF]/g;
  } else if (ua.indexOf("webkit") != -1) {
    return /[\u0000\|\\\u0300-\u03ff\u0590-\u05FF\u0600-\u06ff\u0730-\u074A\u07eb-\u07f3\u0940-\u0963\u0980-\u09ff\u0a00-\u0a7f\u0b00-\u0b7f\u0e00-\u0e7f\u0f00-\u0fff\u1900-\u194f\u1a00-\u1a1f\u1b00-\u1b7f\u1cda-\u1cdc\u1dc0-\u1dff\u1f00-\u1fff\u2000-\u206f\u20d0-\u20ff\u2100-\u214f\u2300-\u23ff\u2a00-\u2aff\u3000-\u303f\uaab2-\uaab4\uD800-\uFFFF]/g;
  } else {
    return /[\u0000\|\\\uD800-\uFFFF]/g;
  }
}

function quoteString(str) {
  var regex = regex_0;
  var idx = 0;
  var out = "";
  var result;
  while ((result = regex.exec(str)) != null) {
    out += str.substring(idx, result.index);
    idx = result.index + 1;
    var ch_0 = result[0].charCodeAt(0);
    if (ch_0 == 0) {
      out += "\\0";
    } else if (ch_0 == 92) {
      out += "\\\\";
    } else if (ch_0 == 124) {
      out += "\\!";
    } else {
      var hex = ch_0.toString(16);
      out += "\\u0000".substring(0, 6 - hex.length) + hex;
    }
  }
  return out + str.substring(idx);
}

defineClass(162, 161, {}, ClientSerializationStreamWriter);
_.toString_0 = function toString_9() {
  return $toString_1(this);
};
var regex_0;
var Lcom_google_gwt_user_client_rpc_impl_ClientSerializationStreamWriter_2_classLit =
  createForClass(
    "com.google.gwt.user.client.rpc.impl",
    "ClientSerializationStreamWriter",
    162,
  );
function $createStreamReader(this$static, encoded) {
  var clientSerializationStreamReader;
  clientSerializationStreamReader = new ClientSerializationStreamReader(
    this$static.serializer,
  );
  $prepareToRead(clientSerializationStreamReader, getEncodedInstance(encoded));
  return clientSerializationStreamReader;
}

function $createStreamWriter(this$static) {
  var clientSerializationStreamWriter;
  clientSerializationStreamWriter = new ClientSerializationStreamWriter(
    this$static.serializer,
    this$static.moduleBaseURL,
    this$static.serializationPolicyName,
  );
  clientSerializationStreamWriter.objectCount = 0;
  $reset(clientSerializationStreamWriter.objectMap);
  $reset(clientSerializationStreamWriter.stringMap);
  clientSerializationStreamWriter.stringTable.array.length = 0;
  clientSerializationStreamWriter.encodeBuffer = new StringBuilder();
  $writeString(
    clientSerializationStreamWriter,
    clientSerializationStreamWriter.moduleBaseURL,
  );
  $writeString(
    clientSerializationStreamWriter,
    clientSerializationStreamWriter.serializationPolicyStrongName,
  );
  return clientSerializationStreamWriter;
}

function $doInvoke(
  this$static,
  responseReader,
  methodName,
  statsContext,
  requestData,
  callback,
) {
  var ex, iex, rb;
  rb = $doPrepareRequestBuilderImpl(
    this$static,
    responseReader,
    methodName,
    statsContext,
    requestData,
    callback,
  );
  try {
    return (
      throwIfNull("callback", rb.callback),
      $doSend(rb, rb.requestData, rb.callback)
    );
  } catch ($e0) {
    $e0 = toJava($e0);
    if (instanceOf($e0, 15)) {
      ex = $e0;
      iex = new InvocationException_0(
        "Unable to initiate the asynchronous service invocation (" +
          methodName +
          ") -- check the network connection",
        ex,
      );
      callback.onFailure(iex);
    } else throw toJs($e0);
  } finally {
    !!$stats &&
      $stats_0(
        $bytesStat(statsContext, methodName, requestData.length, "requestSent"),
      );
  }
  return null;
}

function $doPrepareRequestBuilderImpl(
  this$static,
  responseReader,
  methodName,
  statsContext,
  requestData,
  callback,
) {
  var responseHandler;
  if (this$static.remoteServiceURL == null) {
    throw toJs(new ServiceDefTarget$NoServiceEntryPointSpecifiedException());
  }
  responseHandler = new RequestCallbackAdapter(
    this$static,
    methodName,
    statsContext,
    callback,
    responseReader,
  );
  !this$static.rpcRequestBuilder &&
    (this$static.rpcRequestBuilder = new RpcRequestBuilder());
  $create(this$static.rpcRequestBuilder, this$static.remoteServiceURL);
  $setCallback(this$static.rpcRequestBuilder, responseHandler);
  $setContentType(this$static.rpcRequestBuilder);
  $setRequestData(this$static.rpcRequestBuilder, requestData);
  return $finish(this$static.rpcRequestBuilder);
}

function RemoteServiceProxy(
  moduleBaseURL,
  remoteServiceRelativePath,
  serializationPolicyName,
  serializer,
) {
  this.moduleBaseURL = moduleBaseURL;
  this.remoteServiceURL = moduleBaseURL + remoteServiceRelativePath;
  this.serializer = serializer;
  this.serializationPolicyName = serializationPolicyName;
}

function getEncodedInstance(encodedResponse) {
  if (
    $equals_1(encodedResponse.substr(0, 4), "//OK") ||
    $equals_1(encodedResponse.substr(0, 4), "//EX")
  ) {
    return (
      checkCriticalStringElementIndex(4, encodedResponse.length + 1),
      encodedResponse.substr(4)
    );
  }
  return encodedResponse;
}

defineClass(61, 1, {});
_.createStreamWriter = function createStreamWriter() {
  return $createStreamWriter(this);
};
var Lcom_google_gwt_user_client_rpc_impl_RemoteServiceProxy_2_classLit =
  createForClass(
    "com.google.gwt.user.client.rpc.impl",
    "RemoteServiceProxy",
    61,
  );
function $finish_0(this$static, callback, responseHeader) {
  var payload;
  payload = $toString_1(this$static.streamWriter);
  !!$stats &&
    $stats_0(
      $timeStat(
        this$static.statsContext,
        this$static.fullServiceName,
        "requestSerialized",
      ),
    );
  return $doInvoke(
    this$static.this$01,
    responseHeader,
    this$static.fullServiceName,
    this$static.statsContext,
    payload,
    callback,
  );
}

function $start(this$static, remoteServiceInterfaceName, paramCount) {
  !!$stats &&
    $stats_0(
      $timeStat(this$static.statsContext, this$static.fullServiceName, "begin"),
    );
  this$static.streamWriter = this$static.this$01.createStreamWriter();
  $writeString(this$static.streamWriter, remoteServiceInterfaceName);
  $writeString(this$static.streamWriter, this$static.methodName);
  $writeInt(this$static.streamWriter, paramCount);
  return this$static.streamWriter;
}

function RemoteServiceProxy$ServiceHelper(this$0, serviceName, methodName) {
  this.this$01 = this$0;
  this.fullServiceName = serviceName + "." + methodName;
  this.methodName = methodName;
  this.statsContext = new RpcStatsContext();
}

defineClass(18, 1, {}, RemoteServiceProxy$ServiceHelper);
var Lcom_google_gwt_user_client_rpc_impl_RemoteServiceProxy$ServiceHelper_2_classLit =
  createForClass(
    "com.google.gwt.user.client.rpc.impl",
    "RemoteServiceProxy/ServiceHelper",
    18,
  );
function $onError(this$static, exception) {
  this$static.callback.onFailure(exception);
}

function $onResponseReceived(this$static, response) {
  var caught, e, encodedResponse, result, statusCode;
  result = null;
  caught = null;
  try {
    encodedResponse = response.xmlHttpRequest.responseText;
    statusCode = response.xmlHttpRequest.status;
    !!$stats &&
      $stats_0(
        $bytesStat(
          this$static.statsContext,
          this$static.methodName,
          encodedResponse.length,
          "responseReceived",
        ),
      );
    statusCode != 200
      ? (caught = new StatusCodeException(
          statusCode,
          response.xmlHttpRequest.statusText,
          encodedResponse,
        ))
      : encodedResponse == null
        ? (caught = new InvocationException(
            "No response payload from " + this$static.methodName,
          ))
        : $equals_1(encodedResponse.substr(0, 4), "//OK")
          ? (result = this$static.responseReader.read(
              $createStreamReader(this$static.streamFactory, encodedResponse),
            ))
          : $equals_1(encodedResponse.substr(0, 4), "//EX")
            ? (caught = castTo(
                $readObject(
                  $createStreamReader(
                    this$static.streamFactory,
                    encodedResponse,
                  ),
                ),
                4,
              ))
            : (caught = new InvocationException(
                encodedResponse + " from " + this$static.methodName,
              ));
  } catch ($e0) {
    $e0 = toJava($e0);
    if (instanceOf($e0, 11)) {
      e = $e0;
      caught = new IncompatibleRemoteServiceException_1(e);
    } else if (instanceOf($e0, 4)) {
      e = $e0;
      caught = e;
    } else throw toJs($e0);
  } finally {
    !!$stats &&
      $stats_0(
        $timeStat(
          this$static.statsContext,
          this$static.methodName,
          "responseDeserialized",
        ),
      );
  }
  try {
    !caught
      ? this$static.callback.onSuccess(result)
      : this$static.callback.onFailure(caught);
  } finally {
    !!$stats &&
      $stats_0(
        $timeStat(this$static.statsContext, this$static.methodName, "end"),
      );
  }
}

function RequestCallbackAdapter(
  streamFactory,
  methodName,
  statsContext,
  callback,
  responseReader,
) {
  this.streamFactory = streamFactory;
  this.callback = callback;
  this.methodName = methodName;
  this.statsContext = statsContext;
  this.responseReader = responseReader;
}

defineClass(146, 1, {}, RequestCallbackAdapter);
var Lcom_google_gwt_user_client_rpc_impl_RequestCallbackAdapter_2_classLit =
  createForClass(
    "com.google.gwt.user.client.rpc.impl",
    "RequestCallbackAdapter",
    146,
  );
function $clinit_RequestCallbackAdapter$ResponseReader() {
  $clinit_RequestCallbackAdapter$ResponseReader = emptyMethod;
  BOOLEAN = new RequestCallbackAdapter$ResponseReader$1();
  BYTE = new RequestCallbackAdapter$ResponseReader$2();
  CHAR = new RequestCallbackAdapter$ResponseReader$3();
  DOUBLE = new RequestCallbackAdapter$ResponseReader$4();
  FLOAT = new RequestCallbackAdapter$ResponseReader$5();
  INT = new RequestCallbackAdapter$ResponseReader$6();
  LONG = new RequestCallbackAdapter$ResponseReader$7();
  OBJECT = new RequestCallbackAdapter$ResponseReader$8();
  SHORT = new RequestCallbackAdapter$ResponseReader$9();
  STRING = new RequestCallbackAdapter$ResponseReader$10();
  VOID = new RequestCallbackAdapter$ResponseReader$11();
}

function RequestCallbackAdapter$ResponseReader(enum$name, enum$ordinal) {
  Enum.call(this, enum$name, enum$ordinal);
}

function values_0() {
  $clinit_RequestCallbackAdapter$ResponseReader();
  return stampJavaTypeInfo(
    getClassLiteralForArray(
      Lcom_google_gwt_user_client_rpc_impl_RequestCallbackAdapter$ResponseReader_2_classLit,
      1,
    ),
    $intern_0,
    12,
    0,
    [
      BOOLEAN,
      BYTE,
      CHAR,
      DOUBLE,
      FLOAT,
      INT,
      LONG,
      OBJECT,
      SHORT,
      STRING,
      VOID,
    ],
  );
}

defineClass(12, 6, $intern_2);
var BOOLEAN, BYTE, CHAR, DOUBLE, FLOAT, INT, LONG, OBJECT, SHORT, STRING, VOID;
var Lcom_google_gwt_user_client_rpc_impl_RequestCallbackAdapter$ResponseReader_2_classLit =
  createForEnum(
    "com.google.gwt.user.client.rpc.impl",
    "RequestCallbackAdapter/ResponseReader",
    12,
    Ljava_lang_Enum_2_classLit,
    values_0,
  );
function RequestCallbackAdapter$ResponseReader$1() {
  RequestCallbackAdapter$ResponseReader.call(this, "BOOLEAN", 0);
}

defineClass(147, 12, $intern_2, RequestCallbackAdapter$ResponseReader$1);
_.read = function read(streamReader) {
  return $clinit_Boolean(), $readBoolean(streamReader) ? true : false;
};
var Lcom_google_gwt_user_client_rpc_impl_RequestCallbackAdapter$ResponseReader$1_2_classLit =
  createForEnum(
    "com.google.gwt.user.client.rpc.impl",
    "RequestCallbackAdapter/ResponseReader/1",
    147,
    Lcom_google_gwt_user_client_rpc_impl_RequestCallbackAdapter$ResponseReader_2_classLit,
    null,
  );
function RequestCallbackAdapter$ResponseReader$10() {
  RequestCallbackAdapter$ResponseReader.call(this, "STRING", 9);
}

defineClass(156, 12, $intern_2, RequestCallbackAdapter$ResponseReader$10);
_.read = function read_0(streamReader) {
  return $getString(streamReader, streamReader.results[--streamReader.index_0]);
};
var Lcom_google_gwt_user_client_rpc_impl_RequestCallbackAdapter$ResponseReader$10_2_classLit =
  createForEnum(
    "com.google.gwt.user.client.rpc.impl",
    "RequestCallbackAdapter/ResponseReader/10",
    156,
    Lcom_google_gwt_user_client_rpc_impl_RequestCallbackAdapter$ResponseReader_2_classLit,
    null,
  );
function RequestCallbackAdapter$ResponseReader$11() {
  RequestCallbackAdapter$ResponseReader.call(this, "VOID", 10);
}

defineClass(157, 12, $intern_2, RequestCallbackAdapter$ResponseReader$11);
_.read = function read_1(streamReader) {
  return null;
};
var Lcom_google_gwt_user_client_rpc_impl_RequestCallbackAdapter$ResponseReader$11_2_classLit =
  createForEnum(
    "com.google.gwt.user.client.rpc.impl",
    "RequestCallbackAdapter/ResponseReader/11",
    157,
    Lcom_google_gwt_user_client_rpc_impl_RequestCallbackAdapter$ResponseReader_2_classLit,
    null,
  );
function RequestCallbackAdapter$ResponseReader$2() {
  RequestCallbackAdapter$ResponseReader.call(this, "BYTE", 1);
}

defineClass(148, 12, $intern_2, RequestCallbackAdapter$ResponseReader$2);
_.read = function read_2(streamReader) {
  return get_1(streamReader.results[--streamReader.index_0]);
};
var Lcom_google_gwt_user_client_rpc_impl_RequestCallbackAdapter$ResponseReader$2_2_classLit =
  createForEnum(
    "com.google.gwt.user.client.rpc.impl",
    "RequestCallbackAdapter/ResponseReader/2",
    148,
    Lcom_google_gwt_user_client_rpc_impl_RequestCallbackAdapter$ResponseReader_2_classLit,
    null,
  );
function RequestCallbackAdapter$ResponseReader$3() {
  RequestCallbackAdapter$ResponseReader.call(this, "CHAR", 2);
}

defineClass(149, 12, $intern_2, RequestCallbackAdapter$ResponseReader$3);
_.read = function read_3(streamReader) {
  return valueOf(streamReader.results[--streamReader.index_0]);
};
var Lcom_google_gwt_user_client_rpc_impl_RequestCallbackAdapter$ResponseReader$3_2_classLit =
  createForEnum(
    "com.google.gwt.user.client.rpc.impl",
    "RequestCallbackAdapter/ResponseReader/3",
    149,
    Lcom_google_gwt_user_client_rpc_impl_RequestCallbackAdapter$ResponseReader_2_classLit,
    null,
  );
function RequestCallbackAdapter$ResponseReader$4() {
  RequestCallbackAdapter$ResponseReader.call(this, "DOUBLE", 3);
}

defineClass(150, 12, $intern_2, RequestCallbackAdapter$ResponseReader$4);
_.read = function read_4(streamReader) {
  return Number(streamReader.results[--streamReader.index_0]);
};
var Lcom_google_gwt_user_client_rpc_impl_RequestCallbackAdapter$ResponseReader$4_2_classLit =
  createForEnum(
    "com.google.gwt.user.client.rpc.impl",
    "RequestCallbackAdapter/ResponseReader/4",
    150,
    Lcom_google_gwt_user_client_rpc_impl_RequestCallbackAdapter$ResponseReader_2_classLit,
    null,
  );
function RequestCallbackAdapter$ResponseReader$5() {
  RequestCallbackAdapter$ResponseReader.call(this, "FLOAT", 4);
}

defineClass(151, 12, $intern_2, RequestCallbackAdapter$ResponseReader$5);
_.read = function read_5(streamReader) {
  return new Float(Number(streamReader.results[--streamReader.index_0]));
};
var Lcom_google_gwt_user_client_rpc_impl_RequestCallbackAdapter$ResponseReader$5_2_classLit =
  createForEnum(
    "com.google.gwt.user.client.rpc.impl",
    "RequestCallbackAdapter/ResponseReader/5",
    151,
    Lcom_google_gwt_user_client_rpc_impl_RequestCallbackAdapter$ResponseReader_2_classLit,
    null,
  );
function RequestCallbackAdapter$ResponseReader$6() {
  RequestCallbackAdapter$ResponseReader.call(this, "INT", 5);
}

defineClass(152, 12, $intern_2, RequestCallbackAdapter$ResponseReader$6);
_.read = function read_6(streamReader) {
  return valueOf_0(streamReader.results[--streamReader.index_0]);
};
var Lcom_google_gwt_user_client_rpc_impl_RequestCallbackAdapter$ResponseReader$6_2_classLit =
  createForEnum(
    "com.google.gwt.user.client.rpc.impl",
    "RequestCallbackAdapter/ResponseReader/6",
    152,
    Lcom_google_gwt_user_client_rpc_impl_RequestCallbackAdapter$ResponseReader_2_classLit,
    null,
  );
function RequestCallbackAdapter$ResponseReader$7() {
  RequestCallbackAdapter$ResponseReader.call(this, "LONG", 6);
}

defineClass(153, 12, $intern_2, RequestCallbackAdapter$ResponseReader$7);
_.read = function read_7(streamReader) {
  var s;
  return valueOf_1(
    ((s = streamReader.results[--streamReader.index_0]), longFromBase64(s)),
  );
};
var Lcom_google_gwt_user_client_rpc_impl_RequestCallbackAdapter$ResponseReader$7_2_classLit =
  createForEnum(
    "com.google.gwt.user.client.rpc.impl",
    "RequestCallbackAdapter/ResponseReader/7",
    153,
    Lcom_google_gwt_user_client_rpc_impl_RequestCallbackAdapter$ResponseReader_2_classLit,
    null,
  );
function RequestCallbackAdapter$ResponseReader$8() {
  RequestCallbackAdapter$ResponseReader.call(this, "OBJECT", 7);
}

defineClass(154, 12, $intern_2, RequestCallbackAdapter$ResponseReader$8);
_.read = function read_8(streamReader) {
  return $readObject(streamReader);
};
var Lcom_google_gwt_user_client_rpc_impl_RequestCallbackAdapter$ResponseReader$8_2_classLit =
  createForEnum(
    "com.google.gwt.user.client.rpc.impl",
    "RequestCallbackAdapter/ResponseReader/8",
    154,
    Lcom_google_gwt_user_client_rpc_impl_RequestCallbackAdapter$ResponseReader_2_classLit,
    null,
  );
function RequestCallbackAdapter$ResponseReader$9() {
  RequestCallbackAdapter$ResponseReader.call(this, "SHORT", 8);
}

defineClass(155, 12, $intern_2, RequestCallbackAdapter$ResponseReader$9);
_.read = function read_9(streamReader) {
  return valueOf_2(streamReader.results[--streamReader.index_0]);
};
var Lcom_google_gwt_user_client_rpc_impl_RequestCallbackAdapter$ResponseReader$9_2_classLit =
  createForEnum(
    "com.google.gwt.user.client.rpc.impl",
    "RequestCallbackAdapter/ResponseReader/9",
    155,
    Lcom_google_gwt_user_client_rpc_impl_RequestCallbackAdapter$ResponseReader_2_classLit,
    null,
  );
function $bytesStat(this$static, method, bytes, eventType) {
  var stat = this$static.timeStat(method, eventType);
  stat.bytes = bytes;
  return stat;
}

function $stats_0(data_0) {
  return $stats(data_0);
}

function $timeStat(this$static, method, eventType) {
  return {
    moduleName: ($clinit_Impl(), $moduleName),
    sessionId: $sessionId,
    subSystem: "rpc",
    evtGroup: this$static.requestId,
    method: method,
    millis: new Date().getTime(),
    type: eventType,
  };
}

function RpcStatsContext() {
  RpcStatsContext_0.call(this, requestIdCounter++);
}

function RpcStatsContext_0(requestId) {
  this.requestId = requestId;
}

defineClass(72, 1, {}, RpcStatsContext);
_.timeStat = function timeStat(method, eventType) {
  return $timeStat(this, method, eventType);
};
_.requestId = 0;
var requestIdCounter = 0;
var Lcom_google_gwt_user_client_rpc_impl_RpcStatsContext_2_classLit =
  createForClass("com.google.gwt.user.client.rpc.impl", "RpcStatsContext", 72);
function $check(this$static, typeSignature) {
  if (!this$static.methodMapNative[typeSignature]) {
    throw toJs(new SerializationException(typeSignature));
  }
}

function $deserialize(this$static, stream, instance, typeSignature) {
  $check(this$static, typeSignature);
  $deserialize_0(this$static.methodMapNative, stream, instance, typeSignature);
}

function $getSerializationSignature(this$static, clazz) {
  return this$static.signatureMapNative[getObjectIdentityHashCode(clazz)];
}

function $instantiate(this$static, stream, typeSignature) {
  $check(this$static, typeSignature);
  return $instantiate_0(this$static.methodMapNative, stream, typeSignature);
}

function $serialize(this$static, stream, instance, typeSignature) {
  $check(this$static, typeSignature);
  $serialize_0(this$static.methodMapNative, stream, instance, typeSignature);
}

function SerializerBase(methodMapNative, signatureMapNative) {
  new HashMap();
  this.methodMapNative = methodMapNative;
  this.signatureMapNative = signatureMapNative;
}

defineClass(63, 1, {});
var Lcom_google_gwt_user_client_rpc_impl_SerializerBase_2_classLit =
  createForClass("com.google.gwt.user.client.rpc.impl", "SerializerBase", 63);
function $deserialize_0(this$static, stream, instance, signature) {
  this$static[signature][1](stream, instance);
}

function $instantiate_0(this$static, stream, signature) {
  return this$static[signature][0](stream);
}

function $serialize_0(this$static, stream, instance, signature) {
  this$static[signature][2](stream, instance);
}

function $setElement(this$static, elem) {
  this$static.element = elem;
}

function $sinkBitlessEvent(this$static, eventTypeName) {
  sinkBitlessEvent(($clinit_DOM(), this$static.element), eventTypeName);
}

defineClass(187, 1, {});
_.toString_0 = function toString_10() {
  if (!this.element) {
    return "(null handle)";
  }
  return $toString_0(($clinit_DOM(), this.element));
};
var Lcom_google_gwt_user_client_ui_UIObject_2_classLit = createForClass(
  "com.google.gwt.user.client.ui",
  "UIObject",
  187,
);
function $addDomHandler(this$static, handler, type_0) {
  var typeInt;
  typeInt = getTypeInt(type_0.name_0);
  typeInt == -1
    ? $sinkBitlessEvent(this$static, type_0.name_0)
    : this$static.eventsToSink == -1
      ? ($clinit_DOM(),
        $sinkEvents(
          this$static.element,
          typeInt | (this$static.element.__eventBits || 0),
        ))
      : (this$static.eventsToSink |= typeInt);
  return $addHandler(
    !this$static.handlerManager
      ? (this$static.handlerManager = new HandlerManager(this$static))
      : this$static.handlerManager,
    type_0,
    handler,
  );
}

function $fireEvent_0(this$static, event_0) {
  !!this$static.handlerManager &&
    $fireEvent(this$static.handlerManager, event_0);
}

function $onAttach(this$static) {
  var bitsToAdd;
  if (this$static.attached) {
    throw toJs(
      new IllegalStateException(
        "Should only call onAttach when the widget is detached from the browser's document",
      ),
    );
  }
  this$static.attached = true;
  $clinit_DOM();
  setEventListener(this$static.element, this$static);
  bitsToAdd = this$static.eventsToSink;
  this$static.eventsToSink = -1;
  bitsToAdd > 0 &&
    (this$static.eventsToSink == -1
      ? $sinkEvents(
          this$static.element,
          bitsToAdd | (this$static.element.__eventBits || 0),
        )
      : (this$static.eventsToSink |= bitsToAdd));
  this$static.doAttachChildren();
  this$static.onLoad();
}

function $onBrowserEvent(this$static, event_0) {
  var related;
  switch (($clinit_DOM(), $eventGetTypeInt(event_0.type))) {
    case 16:
    case 32:
      related = $eventGetRelatedTarget(event_0);
      if (!!related && $isOrHasChild(this$static.element, related)) {
        return;
      }
  }
  fireNativeEvent(event_0, this$static, this$static.element);
}

function $onDetach(this$static) {
  if (!this$static.attached) {
    throw toJs(
      new IllegalStateException(
        "Should only call onDetach when the widget is attached to the browser's document",
      ),
    );
  }
  try {
    this$static.doDetachChildren();
  } finally {
    $clinit_DOM();
    this$static.element.__listener = null;
    this$static.attached = false;
  }
}

function $removeFromParent(this$static) {
  if (!this$static.parent_0) {
    $clinit_RootPanel();
    $contains_0(widgetsToDetach, this$static) && detachNow(this$static);
  } else if (this$static.parent_0) {
    $remove_0(this$static.parent_0, this$static);
  } else if (this$static.parent_0) {
    throw toJs(
      new IllegalStateException(
        "This widget's parent does not implement HasWidgets",
      ),
    );
  }
}

function $setParent(this$static, parent_0) {
  var oldParent;
  oldParent = this$static.parent_0;
  if (!parent_0) {
    try {
      !!oldParent && oldParent.attached && $onDetach(this$static);
    } finally {
      this$static.parent_0 = null;
    }
  } else {
    if (oldParent) {
      throw toJs(
        new IllegalStateException(
          "Cannot set a new parent without first clearing the old parent",
        ),
      );
    }
    this$static.parent_0 = parent_0;
    parent_0.attached && this$static.onAttach();
  }
}

defineClass(8, 187, $intern_14);
_.doAttachChildren = function doAttachChildren() {};
_.doDetachChildren = function doDetachChildren() {};
_.onAttach = function onAttach() {
  $onAttach(this);
};
_.onBrowserEvent = function onBrowserEvent(event_0) {
  $onBrowserEvent(this, event_0);
};
_.onLoad = function onLoad() {};
_.attached = false;
_.eventsToSink = 0;
var Lcom_google_gwt_user_client_ui_Widget_2_classLit = createForClass(
  "com.google.gwt.user.client.ui",
  "Widget",
  8,
);
defineClass(188, 8, $intern_14);
_.doAttachChildren = function doAttachChildren_0() {
  tryCommand(this, ($clinit_AttachDetachException(), attachCommand));
};
_.doDetachChildren = function doDetachChildren_0() {
  tryCommand(this, ($clinit_AttachDetachException(), detachCommand));
};
var Lcom_google_gwt_user_client_ui_Panel_2_classLit = createForClass(
  "com.google.gwt.user.client.ui",
  "Panel",
  188,
);
function $add(this$static, child, container) {
  $removeFromParent(child);
  $add_1(this$static.children, child);
  $clinit_DOM();
  $appendChild(container, resolve(child.element));
  $setParent(child, this$static);
}

function $remove(this$static, w) {
  var elem, parent_0;
  if (w.parent_0 != this$static) {
    return false;
  }
  try {
    $setParent(w, null);
  } finally {
    elem = ($clinit_DOM(), w.element);
    $removeChild(
      (null,
      (parent_0 = elem.parentNode),
      (!parent_0 || parent_0.nodeType != 1) && (parent_0 = null),
      parent_0),
      elem,
    );
    $remove_2(this$static.children, w);
  }
  return true;
}

defineClass(103, 188, $intern_14);
_.iterator = function iterator() {
  return new WidgetCollection$WidgetIterator(this.children);
};
var Lcom_google_gwt_user_client_ui_ComplexPanel_2_classLit = createForClass(
  "com.google.gwt.user.client.ui",
  "ComplexPanel",
  103,
);
function $add_0(this$static, w) {
  $add(this$static, w, ($clinit_DOM(), this$static.element));
}

function $remove_0(this$static, w) {
  var removed;
  removed = $remove(this$static, w);
  removed && changeToStaticPositioning(($clinit_DOM(), w.element));
  return removed;
}

function changeToStaticPositioning(elem) {
  elem.style["left"] = "";
  elem.style["top"] = "";
  elem.style["position"] = "";
}

defineClass(104, 103, $intern_14);
var Lcom_google_gwt_user_client_ui_AbsolutePanel_2_classLit = createForClass(
  "com.google.gwt.user.client.ui",
  "AbsolutePanel",
  104,
);
function $clinit_AttachDetachException() {
  $clinit_AttachDetachException = emptyMethod;
  attachCommand = new AttachDetachException$1();
  detachCommand = new AttachDetachException$2();
}

function AttachDetachException(causes) {
  UmbrellaException_0.call(this, causes);
}

function tryCommand(hasWidgets, c) {
  $clinit_AttachDetachException();
  var caught, e, w, w$iterator;
  caught = null;
  for (w$iterator = hasWidgets.iterator(); w$iterator.hasNext_0(); ) {
    w = castTo(w$iterator.next_0(), 8);
    try {
      c.execute(w);
    } catch ($e0) {
      $e0 = toJava($e0);
      if (instanceOf($e0, 4)) {
        e = $e0;
        !caught && (caught = new HashSet());
        $put(caught.map_0, e, caught);
      } else throw toJs($e0);
    }
  }
  if (caught) {
    throw toJs(new AttachDetachException(caught));
  }
}

defineClass(105, 62, $intern_3, AttachDetachException);
var attachCommand, detachCommand;
var Lcom_google_gwt_user_client_ui_AttachDetachException_2_classLit =
  createForClass("com.google.gwt.user.client.ui", "AttachDetachException", 105);
function AttachDetachException$1() {}

defineClass(106, 1, {}, AttachDetachException$1);
_.execute = function execute(w) {
  w.onAttach();
};
var Lcom_google_gwt_user_client_ui_AttachDetachException$1_2_classLit =
  createForClass(
    "com.google.gwt.user.client.ui",
    "AttachDetachException/1",
    106,
  );
function AttachDetachException$2() {}

defineClass(107, 1, {}, AttachDetachException$2);
_.execute = function execute_0(w) {
  $onDetach(w);
};
var Lcom_google_gwt_user_client_ui_AttachDetachException$2_2_classLit =
  createForClass(
    "com.google.gwt.user.client.ui",
    "AttachDetachException/2",
    107,
  );
function $clinit_FocusWidget() {
  $clinit_FocusWidget = emptyMethod;
  $clinit_FocusImpl();
}

function FocusWidget(elem) {
  $setElement(this, ($clinit_DOM(), elem));
}

defineClass(59, 8, $intern_14);
_.onAttach = function onAttach_0() {
  var tabIndex;
  $onAttach(this);
  tabIndex = ($clinit_DOM(), this.element).tabIndex;
  -1 == tabIndex && ((this.element.tabIndex = 0), undefined);
};
var Lcom_google_gwt_user_client_ui_FocusWidget_2_classLit = createForClass(
  "com.google.gwt.user.client.ui",
  "FocusWidget",
  59,
);
function ButtonBase(elem) {
  FocusWidget.call(this, elem);
}

defineClass(101, 59, $intern_14);
var Lcom_google_gwt_user_client_ui_ButtonBase_2_classLit = createForClass(
  "com.google.gwt.user.client.ui",
  "ButtonBase",
  101,
);
function Button() {
  var e;
  $clinit_FocusWidget();
  ButtonBase.call(
    this,
    ((e = $doc.createElement("BUTTON")), (e.type = "button"), e),
  );
  ($clinit_DOM(), this.element).className = "gwt-Button";
  this.element.innerHTML = "Send to Server";
}

defineClass(54, 101, $intern_14, Button);
var Lcom_google_gwt_user_client_ui_Button_2_classLit = createForClass(
  "com.google.gwt.user.client.ui",
  "Button",
  54,
);
function DirectionalTextHelper(element) {
  getDirectionOnElement(element);
}

defineClass(127, 1, {}, DirectionalTextHelper);
var Lcom_google_gwt_user_client_ui_DirectionalTextHelper_2_classLit =
  createForClass("com.google.gwt.user.client.ui", "DirectionalTextHelper", 127);
function $clinit_HasHorizontalAlignment() {
  $clinit_HasHorizontalAlignment = emptyMethod;
  $clinit_Style$TextAlign();
}

function LabelBase(element) {
  $setElement(this, ($clinit_DOM(), element));
  new DirectionalTextHelper(this.element);
}

defineClass(60, 8, $intern_14);
var Lcom_google_gwt_user_client_ui_LabelBase_2_classLit = createForClass(
  "com.google.gwt.user.client.ui",
  "LabelBase",
  60,
);
function Label() {
  LabelBase.call(this, $doc.createElement("div"));
  ($clinit_DOM(), this.element).className = "gwt-Label";
}

defineClass(77, 60, $intern_14, Label);
var Lcom_google_gwt_user_client_ui_Label_2_classLit = createForClass(
  "com.google.gwt.user.client.ui",
  "Label",
  77,
);
function $clinit_RootPanel() {
  $clinit_RootPanel = emptyMethod;
  maybeDetachCommand = new RootPanel$1();
  rootPanels = new HashMap();
  widgetsToDetach = new HashSet();
}

function RootPanel(elem) {
  this.children = new WidgetCollection();
  $setElement(this, ($clinit_DOM(), elem));
  $onAttach(this);
}

function detachNow(widget) {
  $clinit_RootPanel();
  try {
    $onDetach(widget);
  } finally {
    $remove_4(widgetsToDetach, widget);
  }
}

function detachWidgets() {
  $clinit_RootPanel();
  try {
    tryCommand(widgetsToDetach, maybeDetachCommand);
  } finally {
    $reset(widgetsToDetach.map_0);
    $reset(rootPanels);
  }
}

function get_0() {
  $clinit_RootPanel();
  var rp;
  rp = castTo($get(rootPanels, null), 42);
  if (rp) {
    return rp;
  }
  $size(rootPanels) == 0 && addCloseHandler(new RootPanel$2());
  rp = new RootPanel$DefaultRootPanel();
  $put(rootPanels, null, rp);
  $add_3(widgetsToDetach, rp);
  return rp;
}

defineClass(42, 104, $intern_15);
var maybeDetachCommand, rootPanels, widgetsToDetach;
var Lcom_google_gwt_user_client_ui_RootPanel_2_classLit = createForClass(
  "com.google.gwt.user.client.ui",
  "RootPanel",
  42,
);
function RootPanel$1() {}

defineClass(109, 1, {}, RootPanel$1);
_.execute = function execute_1(w) {
  w.attached && $onDetach(w);
};
var Lcom_google_gwt_user_client_ui_RootPanel$1_2_classLit = createForClass(
  "com.google.gwt.user.client.ui",
  "RootPanel/1",
  109,
);
function RootPanel$2() {}

defineClass(110, 1, { 202: 1, 89: 1 }, RootPanel$2);
var Lcom_google_gwt_user_client_ui_RootPanel$2_2_classLit = createForClass(
  "com.google.gwt.user.client.ui",
  "RootPanel/2",
  110,
);
function RootPanel$DefaultRootPanel() {
  RootPanel.call(this, $doc.body);
}

defineClass(108, 42, $intern_15, RootPanel$DefaultRootPanel);
var Lcom_google_gwt_user_client_ui_RootPanel$DefaultRootPanel_2_classLit =
  createForClass(
    "com.google.gwt.user.client.ui",
    "RootPanel/DefaultRootPanel",
    108,
  );
function $getText(this$static) {
  return $getPropertyString(($clinit_DOM(), this$static.element), "value");
}

function ValueBoxBase(elem) {
  $clinit_FocusWidget();
  FocusWidget.call(this, elem);
}

defineClass(95, 59, $intern_14);
_.onBrowserEvent = function onBrowserEvent_0(event_0) {
  var type_0;
  type_0 = ($clinit_DOM(), $eventGetTypeInt(event_0.type));
  (type_0 & 896) != 0
    ? $onBrowserEvent(this, event_0)
    : $onBrowserEvent(this, event_0);
};
_.onLoad = function onLoad_0() {};
var Lcom_google_gwt_user_client_ui_ValueBoxBase_2_classLit = createForClass(
  "com.google.gwt.user.client.ui",
  "ValueBoxBase",
  95,
);
function $clinit_TextBoxBase() {
  $clinit_TextBoxBase = emptyMethod;
  $clinit_FocusWidget();
  $clinit_ValueBoxBase$TextAlignment();
}

defineClass(96, 95, $intern_14);
var Lcom_google_gwt_user_client_ui_TextBoxBase_2_classLit = createForClass(
  "com.google.gwt.user.client.ui",
  "TextBoxBase",
  96,
);
function TextBox() {
  var e;
  $clinit_TextBoxBase();
  TextBox_0.call(
    this,
    ((e = $doc.createElement("INPUT")), (e.type = "text"), e),
  );
}

function TextBox_0(element) {
  var lastArg;
  ValueBoxBase.call(
    this,
    ((lastArg = element),
    !INSTANCE_1 && (INSTANCE_1 = new PassthroughRenderer()),
    !INSTANCE_0 && (INSTANCE_0 = new PassthroughParser()),
    lastArg),
  );
  ($clinit_DOM(), this.element).className = "gwt-TextBox";
}

defineClass(53, 96, $intern_14, TextBox);
var Lcom_google_gwt_user_client_ui_TextBox_2_classLit = createForClass(
  "com.google.gwt.user.client.ui",
  "TextBox",
  53,
);
function $clinit_ValueBoxBase$TextAlignment() {
  $clinit_ValueBoxBase$TextAlignment = emptyMethod;
  CENTER_0 = new ValueBoxBase$TextAlignment$1();
  JUSTIFY_0 = new ValueBoxBase$TextAlignment$2();
  LEFT_0 = new ValueBoxBase$TextAlignment$3();
  RIGHT_0 = new ValueBoxBase$TextAlignment$4();
}

function ValueBoxBase$TextAlignment(enum$name, enum$ordinal) {
  Enum.call(this, enum$name, enum$ordinal);
}

function values_1() {
  $clinit_ValueBoxBase$TextAlignment();
  return stampJavaTypeInfo(
    getClassLiteralForArray(
      Lcom_google_gwt_user_client_ui_ValueBoxBase$TextAlignment_2_classLit,
      1,
    ),
    $intern_0,
    32,
    0,
    [CENTER_0, JUSTIFY_0, LEFT_0, RIGHT_0],
  );
}

defineClass(32, 6, $intern_2);
var CENTER_0, JUSTIFY_0, LEFT_0, RIGHT_0;
var Lcom_google_gwt_user_client_ui_ValueBoxBase$TextAlignment_2_classLit =
  createForEnum(
    "com.google.gwt.user.client.ui",
    "ValueBoxBase/TextAlignment",
    32,
    Ljava_lang_Enum_2_classLit,
    values_1,
  );
function ValueBoxBase$TextAlignment$1() {
  ValueBoxBase$TextAlignment.call(this, "CENTER", 0);
}

defineClass(97, 32, $intern_2, ValueBoxBase$TextAlignment$1);
var Lcom_google_gwt_user_client_ui_ValueBoxBase$TextAlignment$1_2_classLit =
  createForEnum(
    "com.google.gwt.user.client.ui",
    "ValueBoxBase/TextAlignment/1",
    97,
    Lcom_google_gwt_user_client_ui_ValueBoxBase$TextAlignment_2_classLit,
    null,
  );
function ValueBoxBase$TextAlignment$2() {
  ValueBoxBase$TextAlignment.call(this, "JUSTIFY", 1);
}

defineClass(98, 32, $intern_2, ValueBoxBase$TextAlignment$2);
var Lcom_google_gwt_user_client_ui_ValueBoxBase$TextAlignment$2_2_classLit =
  createForEnum(
    "com.google.gwt.user.client.ui",
    "ValueBoxBase/TextAlignment/2",
    98,
    Lcom_google_gwt_user_client_ui_ValueBoxBase$TextAlignment_2_classLit,
    null,
  );
function ValueBoxBase$TextAlignment$3() {
  ValueBoxBase$TextAlignment.call(this, "LEFT", 2);
}

defineClass(99, 32, $intern_2, ValueBoxBase$TextAlignment$3);
var Lcom_google_gwt_user_client_ui_ValueBoxBase$TextAlignment$3_2_classLit =
  createForEnum(
    "com.google.gwt.user.client.ui",
    "ValueBoxBase/TextAlignment/3",
    99,
    Lcom_google_gwt_user_client_ui_ValueBoxBase$TextAlignment_2_classLit,
    null,
  );
function ValueBoxBase$TextAlignment$4() {
  ValueBoxBase$TextAlignment.call(this, "RIGHT", 3);
}

defineClass(100, 32, $intern_2, ValueBoxBase$TextAlignment$4);
var Lcom_google_gwt_user_client_ui_ValueBoxBase$TextAlignment$4_2_classLit =
  createForEnum(
    "com.google.gwt.user.client.ui",
    "ValueBoxBase/TextAlignment/4",
    100,
    Lcom_google_gwt_user_client_ui_ValueBoxBase$TextAlignment_2_classLit,
    null,
  );
function $add_1(this$static, w) {
  $insert(this$static, w, this$static.size_0);
}

function $indexOf(this$static, w) {
  var i;
  for (i = 0; i < this$static.size_0; ++i) {
    if (this$static.array[i] == w) {
      return i;
    }
  }
  return -1;
}

function $insert(this$static, w, beforeIndex) {
  var i, i0, newArray;
  if (beforeIndex < 0 || beforeIndex > this$static.size_0) {
    throw toJs(new IndexOutOfBoundsException());
  }
  if (this$static.size_0 == this$static.array.length) {
    newArray = initUnidimensionalArray(
      Lcom_google_gwt_user_client_ui_Widget_2_classLit,
      $intern_0,
      8,
      this$static.array.length * 2,
      0,
      1,
    );
    for (i0 = 0; i0 < this$static.array.length; ++i0) {
      newArray[i0] = this$static.array[i0];
    }
    this$static.array = newArray;
  }
  ++this$static.size_0;
  for (i = this$static.size_0 - 1; i > beforeIndex; --i) {
    this$static.array[i] = this$static.array[i - 1];
  }
  this$static.array[beforeIndex] = w;
}

function $remove_1(this$static, index_0) {
  var i;
  if (index_0 < 0 || index_0 >= this$static.size_0) {
    throw toJs(new IndexOutOfBoundsException());
  }
  --this$static.size_0;
  for (i = index_0; i < this$static.size_0; ++i) {
    this$static.array[i] = this$static.array[i + 1];
  }
  this$static.array[this$static.size_0] = null;
}

function $remove_2(this$static, w) {
  var index_0;
  index_0 = $indexOf(this$static, w);
  if (index_0 == -1) {
    throw toJs(new NoSuchElementException());
  }
  $remove_1(this$static, index_0);
}

function WidgetCollection() {
  this.array = initUnidimensionalArray(
    Lcom_google_gwt_user_client_ui_Widget_2_classLit,
    $intern_0,
    8,
    4,
    0,
    1,
  );
}

defineClass(133, 1, {}, WidgetCollection);
_.iterator = function iterator_0() {
  return new WidgetCollection$WidgetIterator(this);
};
_.size_0 = 0;
var Lcom_google_gwt_user_client_ui_WidgetCollection_2_classLit = createForClass(
  "com.google.gwt.user.client.ui",
  "WidgetCollection",
  133,
);
function $next(this$static) {
  if (this$static.index_0 >= this$static.this$01.size_0) {
    throw toJs(new NoSuchElementException());
  }
  this$static.currentWidget = this$static.this$01.array[this$static.index_0];
  ++this$static.index_0;
  return this$static.currentWidget;
}

function WidgetCollection$WidgetIterator(this$0) {
  this.this$01 = this$0;
}

defineClass(67, 1, {}, WidgetCollection$WidgetIterator);
_.next_0 = function next() {
  return $next(this);
};
_.hasNext_0 = function hasNext() {
  return this.index_0 < this.this$01.size_0;
};
_.index_0 = 0;
var Lcom_google_gwt_user_client_ui_WidgetCollection$WidgetIterator_2_classLit =
  createForClass(
    "com.google.gwt.user.client.ui",
    "WidgetCollection/WidgetIterator",
    67,
  );
function $clinit_FocusImpl() {
  $clinit_FocusImpl = emptyMethod;
  implPanel = new FocusImplStandard();
  implPanel ? new FocusImpl() : implPanel;
}

function FocusImpl() {}

defineClass(122, 1, {}, FocusImpl);
var implPanel;
var Lcom_google_gwt_user_client_ui_impl_FocusImpl_2_classLit = createForClass(
  "com.google.gwt.user.client.ui.impl",
  "FocusImpl",
  122,
);
function FocusImplStandard() {}

defineClass(136, 122, {}, FocusImplStandard);
var Lcom_google_gwt_user_client_ui_impl_FocusImplStandard_2_classLit =
  createForClass(
    "com.google.gwt.user.client.ui.impl",
    "FocusImplStandard",
    136,
  );
function assertCompileTimeUserAgent() {
  var runtimeValue;
  runtimeValue = $getRuntimeValue();
  if (!$equals_1("gecko1_8", runtimeValue)) {
    throw toJs(new UserAgentAsserter$UserAgentAssertionError(runtimeValue));
  }
}

function Error_0(message, cause) {
  Throwable.call(this, message, cause);
}

defineClass(45, 4, $intern_1);
var Ljava_lang_Error_2_classLit = createForClass("java.lang", "Error", 45);
defineClass(9, 45, $intern_1);
var Ljava_lang_AssertionError_2_classLit = createForClass(
  "java.lang",
  "AssertionError",
  9,
);
function UserAgentAsserter$UserAgentAssertionError(runtimeValue) {
  Error_0.call(
    this,
    "Possible problem with your *.gwt.xml module file.\nThe compile time user.agent value (gecko1_8) does not match the runtime user.agent value (" +
      runtimeValue +
      ").\n" +
      "Expect more errors." ==
      null
      ? "null"
      : toString_8(
          "Possible problem with your *.gwt.xml module file.\nThe compile time user.agent value (gecko1_8) does not match the runtime user.agent value (" +
            runtimeValue +
            ").\n" +
            "Expect more errors.",
        ),
    instanceOf(
      "Possible problem with your *.gwt.xml module file.\nThe compile time user.agent value (gecko1_8) does not match the runtime user.agent value (" +
        runtimeValue +
        ").\n" +
        "Expect more errors.",
      4,
    )
      ? castTo(
          "Possible problem with your *.gwt.xml module file.\nThe compile time user.agent value (gecko1_8) does not match the runtime user.agent value (" +
            runtimeValue +
            ").\n" +
            "Expect more errors.",
          4,
        )
      : null,
  );
}

defineClass(75, 9, $intern_1, UserAgentAsserter$UserAgentAssertionError);
var Lcom_google_gwt_useragent_client_UserAgentAsserter$UserAgentAssertionError_2_classLit =
  createForClass(
    "com.google.gwt.useragent.client",
    "UserAgentAsserter/UserAgentAssertionError",
    75,
  );
function $getRuntimeValue() {
  var ua = navigator.userAgent.toLowerCase();
  var docMode = $doc.documentMode;
  if (
    (function () {
      return ua.indexOf("webkit") != -1;
    })()
  )
    return "safari";
  if (
    (function () {
      return ua.indexOf("gecko") != -1 || docMode >= 11;
    })()
  )
    return "gecko1_8";
  return "unknown";
}

function $clearOnReadyStateChange(this$static) {
  this$static.onreadystatechange = function () {};
}

function $open(this$static, httpMethod, url_0) {
  this$static.open(httpMethod, url_0, true);
}

function $setOnReadyStateChange(this$static, handler) {
  var _this = this$static;
  this$static.onreadystatechange = $entry(function () {
    handler.onReadyStateChange(_this);
  });
}

function $setRequestHeader(this$static, header, value_0) {
  this$static.setRequestHeader(header, value_0);
}

function SimpleEventBus$1() {}

defineClass(130, 1, {}, SimpleEventBus$1);
var Lcom_google_web_bindery_event_shared_SimpleEventBus$1_2_classLit =
  createForClass(
    "com.google.web.bindery.event.shared",
    "SimpleEventBus/1",
    130,
  );
function SimpleEventBus$2(this$0, val$type, val$handler) {
  this.this$01 = this$0;
  this.val$type2 = val$type;
  this.val$source3 = null;
  this.val$handler4 = val$handler;
}

defineClass(131, 1, { 203: 1 }, SimpleEventBus$2);
var Lcom_google_web_bindery_event_shared_SimpleEventBus$2_2_classLit =
  createForClass(
    "com.google.web.bindery.event.shared",
    "SimpleEventBus/2",
    131,
  );
function $clinit_Hello2Service_Proxy() {
  $clinit_Hello2Service_Proxy = emptyMethod;
  SERIALIZER = new Hello2Service_TypeSerializer();
}

function $say2Hello(this$static, name_0, callback) {
  var helper, streamWriter;
  helper = new RemoteServiceProxy$ServiceHelper(
    this$static,
    "Hello2Service_Proxy",
    "say2Hello",
  );
  try {
    streamWriter = $start(helper, "com.vexcited.client.Hello2Service", 1);
    $append(
      streamWriter,
      "" + $addString(streamWriter, "java.lang.String/2004016611"),
    );
    $append(streamWriter, "" + $addString(streamWriter, name_0));
    $finish_0(
      helper,
      callback,
      ($clinit_RequestCallbackAdapter$ResponseReader(), STRING),
    );
  } catch ($e0) {
    $e0 = toJava($e0);
    if (!instanceOf($e0, 11)) throw toJs($e0);
  }
}

function $say2HelloAgain(this$static, name_0, name2, callback) {
  var helper, streamWriter;
  helper = new RemoteServiceProxy$ServiceHelper(
    this$static,
    "Hello2Service_Proxy",
    "say2HelloAgain",
  );
  try {
    streamWriter = $start(helper, "com.vexcited.client.Hello2Service", 2);
    $append(
      streamWriter,
      "" + $addString(streamWriter, "java.lang.String/2004016611"),
    );
    $append(
      streamWriter,
      "" + $addString(streamWriter, "java.lang.String/2004016611"),
    );
    $append(streamWriter, "" + $addString(streamWriter, name_0));
    $append(streamWriter, "" + $addString(streamWriter, name2));
    $finish_0(
      helper,
      callback,
      ($clinit_RequestCallbackAdapter$ResponseReader(), STRING),
    );
  } catch ($e0) {
    $e0 = toJava($e0);
    if (!instanceOf($e0, 11)) throw toJs($e0);
  }
}

function Hello2Service_Proxy() {
  $clinit_Hello2Service_Proxy();
  RemoteServiceProxy.call(
    this,
    getModuleBaseURL(),
    "hello2",
    "8C40A5ED3638F44CBD335F4F0D7B2927",
    SERIALIZER,
  );
}

defineClass(79, 61, {}, Hello2Service_Proxy);
_.createStreamWriter = function createStreamWriter_0() {
  var toReturn;
  toReturn = $createStreamWriter(this);
  return toReturn;
};
var SERIALIZER;
var Lcom_vexcited_client_Hello2Service_1Proxy_2_classLit = createForClass(
  "com.vexcited.client",
  "Hello2Service_Proxy",
  79,
);
function $clinit_Hello2Service_TypeSerializer() {
  var result, result_0;
  $clinit_Hello2Service_TypeSerializer = emptyMethod;
  methodMapNative_0 =
    ((result = {}),
    (result[
      "com.google.gwt.user.client.rpc.IncompatibleRemoteServiceException/3936916533"
    ] = [instantiate, deserialize, serialize]),
    (result["com.google.gwt.user.client.rpc.RpcTokenException/2345075298"] = [
      instantiate_0,
      deserialize_0,
    ]),
    (result["com.google.gwt.user.client.rpc.XsrfToken/4254043109"] = [
      undefined,
      undefined,
      serialize_0,
    ]),
    (result["java.lang.String/2004016611"] = [
      instantiate_3,
      deserialize_3,
      serialize_3,
    ]),
    result);
  signatureMapNative_0 =
    ((result_0 = []),
    (result_0[
      getObjectIdentityHashCode(
        Lcom_google_gwt_user_client_rpc_IncompatibleRemoteServiceException_2_classLit,
      )
    ] =
      "com.google.gwt.user.client.rpc.IncompatibleRemoteServiceException/3936916533"),
    (result_0[
      getObjectIdentityHashCode(
        Lcom_google_gwt_user_client_rpc_RpcTokenException_2_classLit,
      )
    ] = "com.google.gwt.user.client.rpc.RpcTokenException/2345075298"),
    (result_0[
      getObjectIdentityHashCode(
        Lcom_google_gwt_user_client_rpc_XsrfToken_2_classLit,
      )
    ] = "com.google.gwt.user.client.rpc.XsrfToken/4254043109"),
    (result_0[getObjectIdentityHashCode(Ljava_lang_String_2_classLit)] =
      "java.lang.String/2004016611"),
    result_0);
}

function Hello2Service_TypeSerializer() {
  $clinit_Hello2Service_TypeSerializer();
  SerializerBase.call(this, methodMapNative_0, signatureMapNative_0);
}

defineClass(115, 63, {}, Hello2Service_TypeSerializer);
var methodMapNative_0, signatureMapNative_0;
var Lcom_vexcited_client_Hello2Service_1TypeSerializer_2_classLit =
  createForClass("com.vexcited.client", "Hello2Service_TypeSerializer", 115);
function $clinit_HelloService_Proxy() {
  $clinit_HelloService_Proxy = emptyMethod;
  SERIALIZER_0 = new HelloService_TypeSerializer();
}

function $sayHello(this$static, name_0, callback) {
  var helper, streamWriter;
  helper = new RemoteServiceProxy$ServiceHelper(
    this$static,
    "HelloService_Proxy",
    "sayHello",
  );
  try {
    streamWriter = $start(helper, "com.vexcited.client.HelloService", 1);
    $append(
      streamWriter,
      "" + $addString(streamWriter, "java.lang.String/2004016611"),
    );
    $append(streamWriter, "" + $addString(streamWriter, name_0));
    $finish_0(
      helper,
      callback,
      ($clinit_RequestCallbackAdapter$ResponseReader(), STRING),
    );
  } catch ($e0) {
    $e0 = toJava($e0);
    if (!instanceOf($e0, 11)) throw toJs($e0);
  }
}

function $sayHelloAgain(this$static, name_0, name2, callback) {
  var helper, streamWriter;
  helper = new RemoteServiceProxy$ServiceHelper(
    this$static,
    "HelloService_Proxy",
    "sayHelloAgain",
  );
  try {
    streamWriter = $start(helper, "com.vexcited.client.HelloService", 2);
    $append(
      streamWriter,
      "" + $addString(streamWriter, "java.lang.String/2004016611"),
    );
    $append(
      streamWriter,
      "" + $addString(streamWriter, "java.lang.String/2004016611"),
    );
    $append(streamWriter, "" + $addString(streamWriter, name_0));
    $append(streamWriter, "" + $addString(streamWriter, name2));
    $finish_0(
      helper,
      callback,
      ($clinit_RequestCallbackAdapter$ResponseReader(), STRING),
    );
  } catch ($e0) {
    $e0 = toJava($e0);
    if (!instanceOf($e0, 11)) throw toJs($e0);
  }
}

function $sayHelloAgainWithAge(this$static, name_0, age, async_0) {
  var helper, streamWriter;
  helper = new RemoteServiceProxy$ServiceHelper(
    this$static,
    "HelloService_Proxy",
    "sayHelloAgainWithAge",
  );
  try {
    streamWriter = $start(helper, "com.vexcited.client.HelloService", 2);
    $append(
      streamWriter,
      "" + $addString(streamWriter, "java.lang.String/2004016611"),
    );
    $append(
      streamWriter,
      "" + $addString(streamWriter, "java.lang.Integer/3438268394"),
    );
    $append(streamWriter, "" + $addString(streamWriter, name_0));
    $writeObject(streamWriter, age);
    $finish_0(
      helper,
      async_0,
      ($clinit_RequestCallbackAdapter$ResponseReader(), INT),
    );
  } catch ($e0) {
    $e0 = toJava($e0);
    if (!instanceOf($e0, 11)) throw toJs($e0);
  }
}

function $sayHelloAgainWithAgeReverse(this$static, name_0, async_0) {
  var helper, streamWriter;
  helper = new RemoteServiceProxy$ServiceHelper(
    this$static,
    "HelloService_Proxy",
    "sayHelloAgainWithAgeReverse",
  );
  try {
    streamWriter = $start(helper, "com.vexcited.client.HelloService", 2);
    $append(
      streamWriter,
      "" + $addString(streamWriter, "java.lang.String/2004016611"),
    );
    $append(streamWriter, "" + $addString(streamWriter, "I"));
    $append(streamWriter, "" + $addString(streamWriter, name_0));
    append(streamWriter.encodeBuffer, "18");
    $finish_0(
      helper,
      async_0,
      ($clinit_RequestCallbackAdapter$ResponseReader(), OBJECT),
    );
  } catch ($e0) {
    $e0 = toJava($e0);
    if (!instanceOf($e0, 11)) throw toJs($e0);
  }
}

function $sayIsYoung(this$static, async_0) {
  var helper, streamWriter;
  helper = new RemoteServiceProxy$ServiceHelper(
    this$static,
    "HelloService_Proxy",
    "sayIsYoung",
  );
  try {
    streamWriter = $start(helper, "com.vexcited.client.HelloService", 1);
    $append(streamWriter, "" + $addString(streamWriter, "Z"));
    append(streamWriter.encodeBuffer, "1");
    $finish_0(
      helper,
      async_0,
      ($clinit_RequestCallbackAdapter$ResponseReader(), BOOLEAN),
    );
  } catch ($e0) {
    $e0 = toJava($e0);
    if (!instanceOf($e0, 11)) throw toJs($e0);
  }
}

function $sayIsYoungTwo(this$static, isYoung, async_0) {
  var helper, streamWriter;
  helper = new RemoteServiceProxy$ServiceHelper(
    this$static,
    "HelloService_Proxy",
    "sayIsYoungTwo",
  );
  try {
    streamWriter = $start(helper, "com.vexcited.client.HelloService", 1);
    $append(
      streamWriter,
      "" + $addString(streamWriter, "java.lang.Boolean/476441737"),
    );
    $writeObject(streamWriter, isYoung);
    $finish_0(
      helper,
      async_0,
      ($clinit_RequestCallbackAdapter$ResponseReader(), OBJECT),
    );
  } catch ($e0) {
    $e0 = toJava($e0);
    if (!instanceOf($e0, 11)) throw toJs($e0);
  }
}

function HelloService_Proxy() {
  $clinit_HelloService_Proxy();
  RemoteServiceProxy.call(
    this,
    getModuleBaseURL(),
    "jaimelesfrites",
    "C7585882014EFDBD186DF53E4A5909D4",
    SERIALIZER_0,
  );
}

defineClass(78, 61, {}, HelloService_Proxy);
_.createStreamWriter = function createStreamWriter_1() {
  var toReturn;
  toReturn = $createStreamWriter(this);
  return toReturn;
};
var SERIALIZER_0;
var Lcom_vexcited_client_HelloService_1Proxy_2_classLit = createForClass(
  "com.vexcited.client",
  "HelloService_Proxy",
  78,
);
function $clinit_HelloService_TypeSerializer() {
  var result, result_0;
  $clinit_HelloService_TypeSerializer = emptyMethod;
  methodMapNative_1 =
    ((result = {}),
    (result[
      "com.google.gwt.user.client.rpc.IncompatibleRemoteServiceException/3936916533"
    ] = [instantiate, deserialize, serialize]),
    (result["com.google.gwt.user.client.rpc.RpcTokenException/2345075298"] = [
      instantiate_0,
      deserialize_0,
    ]),
    (result["com.google.gwt.user.client.rpc.XsrfToken/4254043109"] = [
      undefined,
      undefined,
      serialize_0,
    ]),
    (result["java.lang.Boolean/476441737"] = [
      instantiate_1,
      deserialize_1,
      serialize_1,
    ]),
    (result["java.lang.Integer/3438268394"] = [
      instantiate_2,
      deserialize_2,
      serialize_2,
    ]),
    (result["java.lang.String/2004016611"] = [
      instantiate_3,
      deserialize_3,
      serialize_3,
    ]),
    result);
  signatureMapNative_1 =
    ((result_0 = []),
    (result_0[
      getObjectIdentityHashCode(
        Lcom_google_gwt_user_client_rpc_IncompatibleRemoteServiceException_2_classLit,
      )
    ] =
      "com.google.gwt.user.client.rpc.IncompatibleRemoteServiceException/3936916533"),
    (result_0[
      getObjectIdentityHashCode(
        Lcom_google_gwt_user_client_rpc_RpcTokenException_2_classLit,
      )
    ] = "com.google.gwt.user.client.rpc.RpcTokenException/2345075298"),
    (result_0[
      getObjectIdentityHashCode(
        Lcom_google_gwt_user_client_rpc_XsrfToken_2_classLit,
      )
    ] = "com.google.gwt.user.client.rpc.XsrfToken/4254043109"),
    (result_0[getObjectIdentityHashCode(Ljava_lang_Boolean_2_classLit)] =
      "java.lang.Boolean/476441737"),
    (result_0[getObjectIdentityHashCode(Ljava_lang_Integer_2_classLit)] =
      "java.lang.Integer/3438268394"),
    (result_0[getObjectIdentityHashCode(Ljava_lang_String_2_classLit)] =
      "java.lang.String/2004016611"),
    result_0);
}

function HelloService_TypeSerializer() {
  $clinit_HelloService_TypeSerializer();
  SerializerBase.call(this, methodMapNative_1, signatureMapNative_1);
}

defineClass(113, 63, {}, HelloService_TypeSerializer);
var methodMapNative_1, signatureMapNative_1;
var Lcom_vexcited_client_HelloService_1TypeSerializer_2_classLit =
  createForClass("com.vexcited.client", "HelloService_TypeSerializer", 113);
function $onClick(this$static) {
  var name_0;
  name_0 = $getText(this$static.val$nameBox2);
  $sayHelloAgain(this$static.val$service3, name_0, name_0, new MyApp$1$1());
  $sayHello(this$static.val$service3, name_0, new MyApp$1$2());
  $sayHelloAgainWithAge(
    this$static.val$service3,
    name_0,
    valueOf_0(18),
    new MyApp$1$3(),
  );
  $sayHelloAgainWithAgeReverse(
    this$static.val$service3,
    name_0,
    new MyApp$1$4(),
  );
  $sayIsYoung(this$static.val$service3, new MyApp$1$5());
  $sayIsYoungTwo(
    this$static.val$service3,
    ($clinit_Boolean(), true),
    new MyApp$1$6(),
  );
  $say2HelloAgain(this$static.val$service24, name_0, name_0, new MyApp$1$7());
  $say2Hello(this$static.val$service24, name_0, new MyApp$1$8());
}

function MyApp$1(val$nameBox, val$service, val$service2) {
  this.val$nameBox2 = val$nameBox;
  this.val$service3 = val$service;
  this.val$service24 = val$service2;
}

defineClass(80, 1, { 173: 1, 89: 1 }, MyApp$1);
var Lcom_vexcited_client_MyApp$1_2_classLit = createForClass(
  "com.vexcited.client",
  "MyApp/1",
  80,
);
function MyApp$1$1() {}

defineClass(81, 1, {}, MyApp$1$1);
_.onSuccess = function onSuccess(result) {
  castToString(result);
};
_.onFailure = function onFailure(caught) {};
var Lcom_vexcited_client_MyApp$1$1_2_classLit = createForClass(
  "com.vexcited.client",
  "MyApp/1/1",
  81,
);
function MyApp$1$2() {}

defineClass(82, 1, {}, MyApp$1$2);
_.onSuccess = function onSuccess_0(result) {
  castToString(result);
  String.fromCharCode(10);
};
_.onFailure = function onFailure_0(caught) {};
var Lcom_vexcited_client_MyApp$1$2_2_classLit = createForClass(
  "com.vexcited.client",
  "MyApp/1/2",
  82,
);
function MyApp$1$3() {}

defineClass(83, 1, {}, MyApp$1$3);
_.onSuccess = function onSuccess_1(result) {
  castTo(result, 13);
  String.fromCharCode(10);
};
_.onFailure = function onFailure_1(caught) {};
var Lcom_vexcited_client_MyApp$1$3_2_classLit = createForClass(
  "com.vexcited.client",
  "MyApp/1/3",
  83,
);
function MyApp$1$4() {}

defineClass(84, 1, {}, MyApp$1$4);
_.onSuccess = function onSuccess_2(result) {
  castTo(result, 13);
  String.fromCharCode(10);
};
_.onFailure = function onFailure_2(caught) {};
var Lcom_vexcited_client_MyApp$1$4_2_classLit = createForClass(
  "com.vexcited.client",
  "MyApp/1/4",
  84,
);
function $onSuccess(result) {
  result == null ? "null" : "" + (checkCriticalNotNull(result), result);
  String.fromCharCode(10);
}

function MyApp$1$5() {}

defineClass(85, 1, {}, MyApp$1$5);
_.onSuccess = function onSuccess_3(result) {
  $onSuccess(castToBoolean(result));
};
_.onFailure = function onFailure_3(caught) {};
var Lcom_vexcited_client_MyApp$1$5_2_classLit = createForClass(
  "com.vexcited.client",
  "MyApp/1/5",
  85,
);
function $onSuccess_0(result) {
  result == null ? "null" : "" + (checkCriticalNotNull(result), result);
  String.fromCharCode(10);
}

function MyApp$1$6() {}

defineClass(86, 1, {}, MyApp$1$6);
_.onSuccess = function onSuccess_4(result) {
  $onSuccess_0(castToBoolean(result));
};
_.onFailure = function onFailure_4(caught) {};
var Lcom_vexcited_client_MyApp$1$6_2_classLit = createForClass(
  "com.vexcited.client",
  "MyApp/1/6",
  86,
);
function MyApp$1$7() {}

defineClass(87, 1, {}, MyApp$1$7);
_.onSuccess = function onSuccess_5(result) {
  castToString(result);
};
_.onFailure = function onFailure_5(caught) {};
var Lcom_vexcited_client_MyApp$1$7_2_classLit = createForClass(
  "com.vexcited.client",
  "MyApp/1/7",
  87,
);
function MyApp$1$8() {}

defineClass(88, 1, {}, MyApp$1$8);
_.onSuccess = function onSuccess_6(result) {
  castToString(result);
};
_.onFailure = function onFailure_6(caught) {};
var Lcom_vexcited_client_MyApp$1$8_2_classLit = createForClass(
  "com.vexcited.client",
  "MyApp/1/8",
  88,
);
function AbstractStringBuilder(string) {
  this.string = string;
}

defineClass(56, 1, { 76: 1 });
_.toString_0 = function toString_11() {
  return this.string;
};
var Ljava_lang_AbstractStringBuilder_2_classLit = createForClass(
  "java.lang",
  "AbstractStringBuilder",
  56,
);
function ArithmeticException() {
  RuntimeException_0.call(this, "divide by zero");
}

defineClass(112, 7, $intern_1, ArithmeticException);
var Ljava_lang_ArithmeticException_2_classLit = createForClass(
  "java.lang",
  "ArithmeticException",
  112,
);
function ArrayStoreException() {
  RuntimeException.call(this);
}

defineClass(111, 7, $intern_1, ArrayStoreException);
var Ljava_lang_ArrayStoreException_2_classLit = createForClass(
  "java.lang",
  "ArrayStoreException",
  111,
);
function $clinit_Boolean() {
  $clinit_Boolean = emptyMethod;
}

function $hashCode(this$static) {
  return (checkCriticalNotNull(this$static), this$static) ? 1231 : 1237;
}

booleanCastMap = { 3: 1, 90: 1, 5: 1 };
var Ljava_lang_Boolean_2_classLit = createForClass("java.lang", "Boolean", 90);
function __parseAndValidateInt(s) {
  var i, isTooLow, length_0, startIndex, toReturn;
  if (s == null) {
    throw toJs(new NumberFormatException("null"));
  }
  length_0 = s.length;
  startIndex =
    length_0 > 0 &&
    (checkCriticalStringElementIndex(0, s.length),
    s.charCodeAt(0) == 45 ||
      (checkCriticalStringElementIndex(0, s.length), s.charCodeAt(0) == 43))
      ? 1
      : 0;
  for (i = startIndex; i < length_0; i++) {
    if (
      digit_0(
        (checkCriticalStringElementIndex(i, s.length), s.charCodeAt(i)),
      ) == -1
    ) {
      throw toJs(new NumberFormatException('For input string: "' + s + '"'));
    }
  }
  toReturn = parseInt(s, 10);
  isTooLow = toReturn < -2147483648;
  if (isNaN(toReturn)) {
    throw toJs(new NumberFormatException('For input string: "' + s + '"'));
  } else if (isTooLow || toReturn > 2147483647) {
    throw toJs(new NumberFormatException('For input string: "' + s + '"'));
  }
  return toReturn;
}

defineClass(183, 1, $intern_0);
var Ljava_lang_Number_2_classLit = createForClass("java.lang", "Number", 183);
function Byte(value_0) {
  this.value_0 = value_0;
}

defineClass(29, 183, { 3: 1, 29: 1, 5: 1 }, Byte);
_.equals_0 = function equals_1(o) {
  return instanceOf(o, 29) && castTo(o, 29).value_0 == this.value_0;
};
_.hashCode_0 = function hashCode_3() {
  return this.value_0;
};
_.toString_0 = function toString_12() {
  return "" + this.value_0;
};
_.value_0 = 0;
var Ljava_lang_Byte_2_classLit = createForClass("java.lang", "Byte", 29);
function $clinit_Byte$BoxedValues() {
  $clinit_Byte$BoxedValues = emptyMethod;
  boxedValues = initUnidimensionalArray(
    Ljava_lang_Byte_2_classLit,
    $intern_0,
    29,
    256,
    0,
    1,
  );
}

function get_1(b) {
  $clinit_Byte$BoxedValues();
  var rebase, result;
  rebase = b + 128;
  result = boxedValues[rebase];
  !result && (result = boxedValues[rebase] = new Byte(b));
  return result;
}

var boxedValues;
function Character(value_0) {
  this.value_0 = value_0;
}

function digit_0(c) {
  if (c >= 48 && c < 48 + $wnd.Math.min(10, 10)) {
    return c - 48;
  }
  if (c >= 97 && c < 97) {
    return c - 97 + 10;
  }
  if (c >= 65 && c < 65) {
    return c - 65 + 10;
  }
  return -1;
}

function valueOf(c) {
  var result;
  if (c < 128) {
    return (
      $clinit_Character$BoxedValues(),
      (result = boxedValues_0[c]),
      !result && (result = boxedValues_0[c] = new Character(c)),
      result
    );
  }
  return new Character(c);
}

defineClass(24, 1, { 3: 1, 24: 1, 5: 1 }, Character);
_.equals_0 = function equals_2(o) {
  return instanceOf(o, 24) && castTo(o, 24).value_0 == this.value_0;
};
_.hashCode_0 = function hashCode_4() {
  return this.value_0;
};
_.toString_0 = function toString_13() {
  return String.fromCharCode(this.value_0);
};
_.value_0 = 0;
var Ljava_lang_Character_2_classLit = createForClass(
  "java.lang",
  "Character",
  24,
);
function $clinit_Character$BoxedValues() {
  $clinit_Character$BoxedValues = emptyMethod;
  boxedValues_0 = initUnidimensionalArray(
    Ljava_lang_Character_2_classLit,
    $intern_0,
    24,
    128,
    0,
    1,
  );
}

var boxedValues_0;
function ClassCastException() {
  RuntimeException_0.call(this, null);
}

defineClass(91, 7, $intern_1, ClassCastException);
var Ljava_lang_ClassCastException_2_classLit = createForClass(
  "java.lang",
  "ClassCastException",
  91,
);
function $equals_0(this$static, o) {
  return (
    checkCriticalNotNull(this$static),
    maskUndefined(this$static) === maskUndefined(o)
  );
}

function $hashCode_0(this$static) {
  return round_int((checkCriticalNotNull(this$static), this$static));
}

doubleCastMap = { 3: 1, 5: 1 };
var Ljava_lang_Double_2_classLit = createForClass("java.lang", "Double", 184);
function Float(value_0) {
  this.value_0 = value_0;
}

defineClass(39, 183, { 3: 1, 5: 1, 39: 1 }, Float);
_.equals_0 = function equals_3(o) {
  return instanceOf(o, 39) && $equals_0(this.value_0, castTo(o, 39).value_0);
};
_.hashCode_0 = function hashCode_5() {
  return round_int(this.value_0);
};
_.toString_0 = function toString_15() {
  return "" + this.value_0;
};
_.value_0 = 0;
var Ljava_lang_Float_2_classLit = createForClass("java.lang", "Float", 39);
function IllegalArgumentException() {
  RuntimeException.call(this);
}

function IllegalArgumentException_0(message) {
  RuntimeException_0.call(this, message);
}

defineClass(
  27,
  7,
  $intern_1,
  IllegalArgumentException,
  IllegalArgumentException_0,
);
var Ljava_lang_IllegalArgumentException_2_classLit = createForClass(
  "java.lang",
  "IllegalArgumentException",
  27,
);
function IllegalStateException(s) {
  RuntimeException_0.call(this, s);
}

defineClass(30, 7, $intern_1, IllegalStateException);
var Ljava_lang_IllegalStateException_2_classLit = createForClass(
  "java.lang",
  "IllegalStateException",
  30,
);
function IndexOutOfBoundsException() {
  RuntimeException.call(this);
}

function IndexOutOfBoundsException_0(message) {
  RuntimeException_0.call(this, message);
}

defineClass(
  31,
  7,
  $intern_1,
  IndexOutOfBoundsException,
  IndexOutOfBoundsException_0,
);
var Ljava_lang_IndexOutOfBoundsException_2_classLit = createForClass(
  "java.lang",
  "IndexOutOfBoundsException",
  31,
);
function Integer(value_0) {
  this.value_0 = value_0;
}

function numberOfLeadingZeros_0(i) {
  var m, n, y_0;
  if (i < 0) {
    return 0;
  } else if (i == 0) {
    return 32;
  } else {
    y_0 = -(i >> 16);
    m = (y_0 >> 16) & 16;
    n = 16 - m;
    i = i >> m;
    y_0 = i - 256;
    m = (y_0 >> 16) & 8;
    n += m;
    i <<= m;
    y_0 = i - 4096;
    m = (y_0 >> 16) & 4;
    n += m;
    i <<= m;
    y_0 = i - 16384;
    m = (y_0 >> 16) & 2;
    n += m;
    i <<= m;
    y_0 = i >> 14;
    m = y_0 & ~(y_0 >> 1);
    return n + 2 - m;
  }
}

function numberOfTrailingZeros(i) {
  var r, rtn;
  if (i == 0) {
    return 32;
  } else {
    rtn = 0;
    for (r = 1; (r & i) == 0; r <<= 1) {
      ++rtn;
    }
    return rtn;
  }
}

function valueOf_0(i) {
  var rebase, result;
  if (i > -129 && i < 128) {
    return (
      $clinit_Integer$BoxedValues(),
      (rebase = i + 128),
      (result = boxedValues_1[rebase]),
      !result && (result = boxedValues_1[rebase] = new Integer(i)),
      result
    );
  }
  return new Integer(i);
}

defineClass(13, 183, { 3: 1, 5: 1, 13: 1 }, Integer);
_.equals_0 = function equals_4(o) {
  return instanceOf(o, 13) && castTo(o, 13).value_0 == this.value_0;
};
_.hashCode_0 = function hashCode_6() {
  return this.value_0;
};
_.toString_0 = function toString_16() {
  return "" + this.value_0;
};
_.value_0 = 0;
var Ljava_lang_Integer_2_classLit = createForClass("java.lang", "Integer", 13);
function $clinit_Integer$BoxedValues() {
  $clinit_Integer$BoxedValues = emptyMethod;
  boxedValues_1 = initUnidimensionalArray(
    Ljava_lang_Integer_2_classLit,
    $intern_0,
    13,
    256,
    0,
    1,
  );
}

var boxedValues_1;
function Long(value_0) {
  this.value_0 = value_0;
}

function hashCode_8(l) {
  return (
    toInt_0(createLongEmul(shru(isSmallLong0(l) ? toBigLong(l) : l, 32))) ^
    toInt_0(l)
  );
}

function valueOf_1(l) {
  var rebase, result;
  if (compare_0(l, -129) > 0 && compare_0(l, 128) < 0) {
    return (
      $clinit_Long$BoxedValues(),
      (rebase = toInt_0(l) + 128),
      (result = boxedValues_2[rebase]),
      !result && (result = boxedValues_2[rebase] = new Long(l)),
      result
    );
  }
  return new Long(l);
}

defineClass(25, 183, { 3: 1, 5: 1, 25: 1 }, Long);
_.equals_0 = function equals_5(o) {
  return instanceOf(o, 25) && eq(castTo(o, 25).value_0, this.value_0);
};
_.hashCode_0 = function hashCode_7() {
  return hashCode_8(this.value_0);
};
_.toString_0 = function toString_17() {
  return "" + toString_7(this.value_0);
};
_.value_0 = 0;
var Ljava_lang_Long_2_classLit = createForClass("java.lang", "Long", 25);
function $clinit_Long$BoxedValues() {
  $clinit_Long$BoxedValues = emptyMethod;
  boxedValues_2 = initUnidimensionalArray(
    Ljava_lang_Long_2_classLit,
    $intern_0,
    25,
    256,
    0,
    1,
  );
}

var boxedValues_2;
defineClass(226, 1, {});
function NullPointerException() {
  RuntimeException.call(this);
}

function NullPointerException_0(message) {
  RuntimeException_0.call(this, message);
}

defineClass(20, 46, $intern_1, NullPointerException, NullPointerException_0);
_.createError = function createError_0(msg) {
  return new TypeError(msg);
};
var Ljava_lang_NullPointerException_2_classLit = createForClass(
  "java.lang",
  "NullPointerException",
  20,
);
function NumberFormatException(message) {
  IllegalArgumentException_0.call(this, message);
}

defineClass(40, 27, $intern_1, NumberFormatException);
var Ljava_lang_NumberFormatException_2_classLit = createForClass(
  "java.lang",
  "NumberFormatException",
  40,
);
function Short(value_0) {
  this.value_0 = value_0;
}

function valueOf_2(s) {
  var rebase, result;
  if (s > -129 && s < 128) {
    return (
      $clinit_Short$BoxedValues(),
      (rebase = s + 128),
      (result = boxedValues_3[rebase]),
      !result && (result = boxedValues_3[rebase] = new Short(s)),
      result
    );
  }
  return new Short(s);
}

defineClass(26, 183, { 3: 1, 5: 1, 26: 1 }, Short);
_.equals_0 = function equals_6(o) {
  return instanceOf(o, 26) && castTo(o, 26).value_0 == this.value_0;
};
_.hashCode_0 = function hashCode_9() {
  return this.value_0;
};
_.toString_0 = function toString_18() {
  return "" + this.value_0;
};
_.value_0 = 0;
var Ljava_lang_Short_2_classLit = createForClass("java.lang", "Short", 26);
function $clinit_Short$BoxedValues() {
  $clinit_Short$BoxedValues = emptyMethod;
  boxedValues_3 = initUnidimensionalArray(
    Ljava_lang_Short_2_classLit,
    $intern_0,
    26,
    256,
    0,
    1,
  );
}

var boxedValues_3;
function $charAt(this$static, index_0) {
  checkCriticalStringElementIndex(index_0, this$static.length);
  return this$static.charCodeAt(index_0);
}

function $equals_1(this$static, other) {
  return (
    checkCriticalNotNull(this$static),
    maskUndefined(this$static) === maskUndefined(other)
  );
}

function $equalsIgnoreCase(this$static, other) {
  checkCriticalNotNull(this$static);
  if (other == null) {
    return false;
  }
  if ($equals_1(this$static, other)) {
    return true;
  }
  return (
    this$static.length == other.length &&
    $equals_1(this$static.toLowerCase(), other.toLowerCase())
  );
}

function $hashCode_1(this$static) {
  var h, i;
  h = 0;
  for (i = 0; i < this$static.length; i++) {
    h =
      ((h << 5) -
        h +
        (checkCriticalStringElementIndex(i, this$static.length),
        this$static.charCodeAt(i))) |
      0;
  }
  return h;
}

function $substring(this$static, beginIndex, endIndex) {
  checkCriticalStringBounds(beginIndex, endIndex, this$static.length);
  return this$static.substr(beginIndex, endIndex - beginIndex);
}

function $trim(this$static) {
  var end, length_0, start_0;
  length_0 = this$static.length;
  start_0 = 0;
  while (
    start_0 < length_0 &&
    (checkCriticalStringElementIndex(start_0, this$static.length),
    this$static.charCodeAt(start_0) <= 32)
  ) {
    ++start_0;
  }
  end = length_0;
  while (
    end > start_0 &&
    (checkCriticalStringElementIndex(end - 1, this$static.length),
    this$static.charCodeAt(end - 1) <= 32)
  ) {
    --end;
  }
  return start_0 > 0 || end < length_0
    ? (checkCriticalStringBounds(start_0, end, this$static.length),
      this$static.substr(start_0, end - start_0))
    : this$static;
}

stringCastMap = { 3: 1, 76: 1, 5: 1, 2: 1 };
var Ljava_lang_String_2_classLit = createForClass("java.lang", "String", 2);
function $append_0(this$static, x_0) {
  this$static.string += "" + x_0;
  return this$static;
}

function $append_1(this$static, x_0) {
  this$static.string += "" + x_0;
  return this$static;
}

function StringBuilder() {
  AbstractStringBuilder.call(this, "");
}

function StringBuilder_0(s) {
  AbstractStringBuilder.call(this, (checkCriticalNotNull(s), s));
}

defineClass(41, 56, { 76: 1 }, StringBuilder, StringBuilder_0);
var Ljava_lang_StringBuilder_2_classLit = createForClass(
  "java.lang",
  "StringBuilder",
  41,
);
function StringIndexOutOfBoundsException(message) {
  IndexOutOfBoundsException_0.call(this, message);
}

defineClass(58, 31, $intern_1, StringIndexOutOfBoundsException);
var Ljava_lang_StringIndexOutOfBoundsException_2_classLit = createForClass(
  "java.lang",
  "StringIndexOutOfBoundsException",
  58,
);
defineClass(232, 1, {});
function UnsupportedOperationException(message) {
  RuntimeException_0.call(this, message);
}

defineClass(47, 7, $intern_1, UnsupportedOperationException);
var Ljava_lang_UnsupportedOperationException_2_classLit = createForClass(
  "java.lang",
  "UnsupportedOperationException",
  47,
);
function $advanceToFind(this$static, o) {
  var e, iter;
  for (iter = this$static.iterator(); iter.hasNext_0(); ) {
    e = iter.next_0();
    if (
      maskUndefined(o) === maskUndefined(e) ||
      (o != null && equals_Ljava_lang_Object__Z__devirtual$(o, e))
    ) {
      return true;
    }
  }
  return false;
}

function $containsAll(this$static, c) {
  var e, e$iterator;
  checkCriticalNotNull(c);
  for (e$iterator = c.iterator(); e$iterator.hasNext_0(); ) {
    e = e$iterator.next_0();
    if (!this$static.contains(e)) {
      return false;
    }
  }
  return true;
}

defineClass(195, 1, {});
_.add_0 = function add_0(o) {
  throw toJs(
    new UnsupportedOperationException("Add not supported on this collection"),
  );
};
_.contains = function contains(o) {
  return $advanceToFind(this, o);
};
_.isEmpty = function isEmpty() {
  return this.size_1() == 0;
};
_.toString_0 = function toString_19() {
  var e, e$iterator, joiner;
  joiner = new StringJoiner("[", "]");
  for (e$iterator = this.iterator(); e$iterator.hasNext_0(); ) {
    e = e$iterator.next_0();
    $add_4(
      joiner,
      e === this ? "(this Collection)" : e == null ? "null" : toString_8(e),
    );
  }
  return !joiner.builder
    ? joiner.emptyValue
    : joiner.suffix.length == 0
      ? joiner.builder.string
      : joiner.builder.string + ("" + joiner.suffix);
};
var Ljava_util_AbstractCollection_2_classLit = createForClass(
  "java.util",
  "AbstractCollection",
  195,
);
function $containsEntry(this$static, entry) {
  var key, ourValue, value_0;
  key = entry.getKey();
  value_0 = entry.getValue();
  ourValue = this$static.get_0(key);
  if (
    !(
      maskUndefined(value_0) === maskUndefined(ourValue) ||
      (value_0 != null &&
        equals_Ljava_lang_Object__Z__devirtual$(value_0, ourValue))
    )
  ) {
    return false;
  }
  if (ourValue == null && !this$static.containsKey(key)) {
    return false;
  }
  return true;
}

function $implFindEntry(this$static, key) {
  var entry, iter, k;
  for (
    iter = new AbstractHashMap$EntrySetIterator(this$static.entrySet().this$01);
    iter.hasNext;

  ) {
    entry = $next_0(iter);
    k = entry.getKey();
    if (
      maskUndefined(key) === maskUndefined(k) ||
      (key != null && equals_Ljava_lang_Object__Z__devirtual$(key, k))
    ) {
      return entry;
    }
  }
  return null;
}

function $toString_2(this$static, o) {
  return o === this$static ? "(this Map)" : o == null ? "null" : toString_8(o);
}

function getEntryValueOrNull(entry) {
  return !entry ? null : entry.getValue();
}

defineClass(194, 1, { 19: 1 });
_.containsKey = function containsKey(key) {
  return !!$implFindEntry(this, key);
};
_.equals_0 = function equals_7(obj) {
  var entry, entry$iterator, otherMap;
  if (obj === this) {
    return true;
  }
  if (!instanceOf(obj, 19)) {
    return false;
  }
  otherMap = castTo(obj, 19);
  if (this.size_1() != otherMap.size_1()) {
    return false;
  }
  for (
    entry$iterator = new AbstractHashMap$EntrySetIterator(
      otherMap.entrySet().this$01,
    );
    entry$iterator.hasNext;

  ) {
    entry = $next_0(entry$iterator);
    if (!$containsEntry(this, entry)) {
      return false;
    }
  }
  return true;
};
_.get_0 = function get_2(key) {
  return getEntryValueOrNull($implFindEntry(this, key));
};
_.hashCode_0 = function hashCode_10() {
  return hashCode_15(this.entrySet());
};
_.put = function put(key, value_0) {
  throw toJs(
    new UnsupportedOperationException("Put not supported on this map"),
  );
};
_.size_1 = function size_1() {
  return $size(this.entrySet().this$01);
};
_.toString_0 = function toString_20() {
  var entry, entry$iterator, joiner;
  joiner = new StringJoiner("{", "}");
  for (
    entry$iterator = new AbstractHashMap$EntrySetIterator(
      this.entrySet().this$01,
    );
    entry$iterator.hasNext;

  ) {
    entry = $next_0(entry$iterator);
    $add_4(
      joiner,
      $toString_2(this, entry.getKey()) +
        "=" +
        $toString_2(this, entry.getValue()),
    );
  }
  return !joiner.builder
    ? joiner.emptyValue
    : joiner.suffix.length == 0
      ? joiner.builder.string
      : joiner.builder.string + ("" + joiner.suffix);
};
var Ljava_util_AbstractMap_2_classLit = createForClass(
  "java.util",
  "AbstractMap",
  194,
);
function $containsKey(this$static, key) {
  return instanceOfString(key)
    ? $hasStringValue(this$static, key)
    : !!$getEntry(this$static.hashCodeMap, key);
}

function $get(this$static, key) {
  return instanceOfString(key)
    ? $getStringValue(this$static, key)
    : getEntryValueOrNull($getEntry(this$static.hashCodeMap, key));
}

function $getStringValue(this$static, key) {
  return key == null
    ? getEntryValueOrNull($getEntry(this$static.hashCodeMap, null))
    : $get_1(this$static.stringMap, key);
}

function $hasStringValue(this$static, key) {
  return key == null
    ? !!$getEntry(this$static.hashCodeMap, null)
    : $contains_1(this$static.stringMap, key);
}

function $put(this$static, key, value_0) {
  return instanceOfString(key)
    ? $putStringValue(this$static, key, value_0)
    : $put_0(this$static.hashCodeMap, key, value_0);
}

function $putStringValue(this$static, key, value_0) {
  return key == null
    ? $put_0(this$static.hashCodeMap, null, value_0)
    : $put_1(this$static.stringMap, key, value_0);
}

function $remove_3(this$static, key) {
  return instanceOfString(key)
    ? key == null
      ? $remove_5(this$static.hashCodeMap, null)
      : $remove_6(this$static.stringMap, key)
    : $remove_5(this$static.hashCodeMap, key);
}

function $reset(this$static) {
  this$static.hashCodeMap = new InternalHashCodeMap(this$static);
  this$static.stringMap = new InternalStringMap(this$static);
  ++this$static.modCount;
}

function $size(this$static) {
  return this$static.hashCodeMap.size_0 + this$static.stringMap.size_0;
}

function AbstractHashMap() {
  $reset(this);
}

defineClass(64, 194, { 19: 1 });
_.containsKey = function containsKey_0(key) {
  return $containsKey(this, key);
};
_.entrySet = function entrySet() {
  return new AbstractHashMap$EntrySet(this);
};
_.get_0 = function get_3(key) {
  return $get(this, key);
};
_.put = function put_0(key, value_0) {
  return $put(this, key, value_0);
};
_.size_1 = function size_2() {
  return $size(this);
};
_.modCount = 0;
var Ljava_util_AbstractHashMap_2_classLit = createForClass(
  "java.util",
  "AbstractHashMap",
  64,
);
defineClass(196, 195, { 44: 1 });
_.equals_0 = function equals_8(o) {
  var other;
  if (o === this) {
    return true;
  }
  if (!instanceOf(o, 44)) {
    return false;
  }
  other = castTo(o, 44);
  if (other.size_1() != this.size_1()) {
    return false;
  }
  return $containsAll(this, other);
};
_.hashCode_0 = function hashCode_11() {
  return hashCode_15(this);
};
var Ljava_util_AbstractSet_2_classLit = createForClass(
  "java.util",
  "AbstractSet",
  196,
);
function $contains(this$static, o) {
  if (instanceOf(o, 16)) {
    return $containsEntry(this$static.this$01, castTo(o, 16));
  }
  return false;
}

function AbstractHashMap$EntrySet(this$0) {
  this.this$01 = this$0;
}

defineClass(34, 196, { 44: 1 }, AbstractHashMap$EntrySet);
_.contains = function contains_0(o) {
  return $contains(this, o);
};
_.iterator = function iterator_1() {
  return new AbstractHashMap$EntrySetIterator(this.this$01);
};
_.size_1 = function size_3() {
  return $size(this.this$01);
};
var Ljava_util_AbstractHashMap$EntrySet_2_classLit = createForClass(
  "java.util",
  "AbstractHashMap/EntrySet",
  34,
);
function $computeHasNext(this$static) {
  if (this$static.current.hasNext_0()) {
    return true;
  }
  if (this$static.current != this$static.stringMapEntries) {
    return false;
  }
  this$static.current = new InternalHashCodeMap$1(
    this$static.this$01.hashCodeMap,
  );
  return this$static.current.hasNext_0();
}

function $next_0(this$static) {
  var rv;
  checkCriticalConcurrentModification(
    this$static.this$01.modCount,
    this$static.lastModCount,
  );
  checkCriticalElement(this$static.hasNext);
  rv = castTo(this$static.current.next_0(), 16);
  this$static.hasNext = $computeHasNext(this$static);
  return rv;
}

function AbstractHashMap$EntrySetIterator(this$0) {
  this.this$01 = this$0;
  this.stringMapEntries = new InternalStringMap$1(this.this$01.stringMap);
  this.current = this.stringMapEntries;
  this.hasNext = $computeHasNext(this);
  this.lastModCount = this.this$01.modCount;
}

defineClass(14, 1, {}, AbstractHashMap$EntrySetIterator);
_.next_0 = function next_0() {
  return $next_0(this);
};
_.hasNext_0 = function hasNext_0() {
  return this.hasNext;
};
_.hasNext = false;
_.lastModCount = 0;
var Ljava_util_AbstractHashMap$EntrySetIterator_2_classLit = createForClass(
  "java.util",
  "AbstractHashMap/EntrySetIterator",
  14,
);
defineClass(199, 195, { 22: 1 });
_.add_1 = function add_1(index_0, element) {
  throw toJs(
    new UnsupportedOperationException("Add not supported on this list"),
  );
};
_.add_0 = function add_2(obj) {
  this.add_1(this.size_1(), obj);
  return true;
};
_.equals_0 = function equals_9(o) {
  var elem, elem$iterator, elemOther, iterOther, other;
  if (o === this) {
    return true;
  }
  if (!instanceOf(o, 22)) {
    return false;
  }
  other = castTo(o, 22);
  if (this.size_1() != other.size_1()) {
    return false;
  }
  iterOther = other.iterator();
  for (elem$iterator = this.iterator(); elem$iterator.hasNext_0(); ) {
    elem = elem$iterator.next_0();
    elemOther = iterOther.next_0();
    if (
      !(
        maskUndefined(elem) === maskUndefined(elemOther) ||
        (elem != null &&
          equals_Ljava_lang_Object__Z__devirtual$(elem, elemOther))
      )
    ) {
      return false;
    }
  }
  return true;
};
_.hashCode_0 = function hashCode_12() {
  return hashCode_16(this);
};
_.iterator = function iterator_2() {
  return new AbstractList$IteratorImpl(this);
};
_.listIterator = function listIterator() {
  return new AbstractList$ListIteratorImpl(this, 0);
};
_.listIterator_0 = function listIterator_0(from) {
  return new AbstractList$ListIteratorImpl(this, from);
};
var Ljava_util_AbstractList_2_classLit = createForClass(
  "java.util",
  "AbstractList",
  199,
);
function AbstractList$IteratorImpl(this$0) {
  this.this$01_0 = this$0;
}

defineClass(68, 1, {}, AbstractList$IteratorImpl);
_.hasNext_0 = function hasNext_1() {
  return this.i < this.this$01_0.size_1();
};
_.next_0 = function next_1() {
  checkCriticalElement(this.i < this.this$01_0.size_1());
  return this.this$01_0.get_1(this.i++);
};
_.i = 0;
var Ljava_util_AbstractList$IteratorImpl_2_classLit = createForClass(
  "java.util",
  "AbstractList/IteratorImpl",
  68,
);
function AbstractList$ListIteratorImpl(this$0, start_0) {
  this.this$01 = this$0;
  AbstractList$IteratorImpl.call(this, this$0);
  checkCriticalPositionIndex(start_0, this$0.size_1());
  this.i = start_0;
}

defineClass(69, 68, {}, AbstractList$ListIteratorImpl);
_.hasPrevious = function hasPrevious() {
  return this.i > 0;
};
_.previous = function previous_0() {
  checkCriticalElement(this.i > 0);
  return this.this$01.get_1(--this.i);
};
var Ljava_util_AbstractList$ListIteratorImpl_2_classLit = createForClass(
  "java.util",
  "AbstractList/ListIteratorImpl",
  69,
);
function AbstractMap$1(this$0) {
  this.this$01 = this$0;
}

defineClass(120, 196, { 44: 1 }, AbstractMap$1);
_.contains = function contains_1(key) {
  return $containsKey(this.this$01, key);
};
_.iterator = function iterator_3() {
  var outerIter;
  return (
    (outerIter = new AbstractHashMap$EntrySetIterator(
      new AbstractHashMap$EntrySet(this.this$01).this$01,
    )),
    new AbstractMap$1$1(outerIter)
  );
};
_.size_1 = function size_4() {
  return $size(this.this$01);
};
var Ljava_util_AbstractMap$1_2_classLit = createForClass(
  "java.util",
  "AbstractMap/1",
  120,
);
function AbstractMap$1$1(val$outerIter) {
  this.val$outerIter2 = val$outerIter;
}

defineClass(65, 1, {}, AbstractMap$1$1);
_.hasNext_0 = function hasNext_2() {
  return this.val$outerIter2.hasNext;
};
_.next_0 = function next_2() {
  var entry;
  entry = $next_0(this.val$outerIter2);
  return entry.getKey();
};
var Ljava_util_AbstractMap$1$1_2_classLit = createForClass(
  "java.util",
  "AbstractMap/1/1",
  65,
);
defineClass(118, 1, $intern_16);
_.equals_0 = function equals_10(other) {
  var entry;
  if (!instanceOf(other, 16)) {
    return false;
  }
  entry = castTo(other, 16);
  return (
    equals_15(this.key, entry.getKey()) &&
    equals_15(this.value_0, entry.getValue())
  );
};
_.getKey = function getKey() {
  return this.key;
};
_.getValue = function getValue() {
  return this.value_0;
};
_.hashCode_0 = function hashCode_13() {
  return hashCode_18(this.key) ^ hashCode_18(this.value_0);
};
_.setValue = function setValue(value_0) {
  var oldValue;
  oldValue = this.value_0;
  this.value_0 = value_0;
  return oldValue;
};
_.toString_0 = function toString_21() {
  return this.key + "=" + this.value_0;
};
var Ljava_util_AbstractMap$AbstractEntry_2_classLit = createForClass(
  "java.util",
  "AbstractMap/AbstractEntry",
  118,
);
function AbstractMap$SimpleEntry(key, value_0) {
  this.key = key;
  this.value_0 = value_0;
}

defineClass(119, 118, $intern_16, AbstractMap$SimpleEntry);
var Ljava_util_AbstractMap$SimpleEntry_2_classLit = createForClass(
  "java.util",
  "AbstractMap/SimpleEntry",
  119,
);
defineClass(200, 1, $intern_16);
_.equals_0 = function equals_11(other) {
  var entry;
  if (!instanceOf(other, 16)) {
    return false;
  }
  entry = castTo(other, 16);
  return (
    equals_15(this.val$entry2.value[0], entry.getKey()) &&
    equals_15($getValue(this), entry.getValue())
  );
};
_.hashCode_0 = function hashCode_14() {
  return hashCode_18(this.val$entry2.value[0]) ^ hashCode_18($getValue(this));
};
_.toString_0 = function toString_22() {
  return this.val$entry2.value[0] + "=" + $getValue(this);
};
var Ljava_util_AbstractMapEntry_2_classLit = createForClass(
  "java.util",
  "AbstractMapEntry",
  200,
);
function $add_2(this$static, o) {
  push_1(this$static.array, o);
  return true;
}

function $get_0(this$static, index_0) {
  checkCriticalElementIndex(index_0, this$static.array.length);
  return this$static.array[index_0];
}

function $indexOf_0(this$static, o, index_0) {
  for (; index_0 < this$static.array.length; ++index_0) {
    if (equals_15(o, this$static.array[index_0])) {
      return index_0;
    }
  }
  return -1;
}

function $set(this$static, index_0, o) {
  var previous;
  previous =
    (checkCriticalElementIndex(index_0, this$static.array.length),
    this$static.array[index_0]);
  this$static.array[index_0] = o;
  return previous;
}

function ArrayList() {
  this.array = initUnidimensionalArray(
    Ljava_lang_Object_2_classLit,
    $intern_0,
    1,
    0,
    5,
    1,
  );
}

defineClass(36, 199, { 3: 1, 22: 1 }, ArrayList);
_.add_1 = function add_3(index_0, o) {
  checkCriticalPositionIndex(index_0, this.array.length);
  insertTo(this.array, index_0, o);
};
_.add_0 = function add_4(o) {
  return $add_2(this, o);
};
_.contains = function contains_2(o) {
  return $indexOf_0(this, o, 0) != -1;
};
_.get_1 = function get_4(index_0) {
  return $get_0(this, index_0);
};
_.isEmpty = function isEmpty_0() {
  return this.array.length == 0;
};
_.iterator = function iterator_4() {
  return new ArrayList$1(this);
};
_.size_1 = function size_5() {
  return this.array.length;
};
var Ljava_util_ArrayList_2_classLit = createForClass(
  "java.util",
  "ArrayList",
  36,
);
function $next_1(this$static) {
  checkCriticalElement(this$static.i < this$static.this$01.array.length);
  this$static.last = this$static.i++;
  return this$static.this$01.array[this$static.last];
}

function ArrayList$1(this$0) {
  this.this$01 = this$0;
}

defineClass(52, 1, {}, ArrayList$1);
_.hasNext_0 = function hasNext_3() {
  return this.i < this.this$01.array.length;
};
_.next_0 = function next_3() {
  return $next_1(this);
};
_.i = 0;
_.last = -1;
var Ljava_util_ArrayList$1_2_classLit = createForClass(
  "java.util",
  "ArrayList/1",
  52,
);
function $clinit_Collections() {
  $clinit_Collections = emptyMethod;
  EMPTY_LIST = new Collections$EmptyList();
}

function hashCode_15(collection) {
  $clinit_Collections();
  var e, e$iterator, hashCode;
  hashCode = 0;
  for (e$iterator = collection.iterator(); e$iterator.hasNext_0(); ) {
    e = e$iterator.next_0();
    hashCode = hashCode + (e != null ? hashCode__I__devirtual$(e) : 0);
    hashCode = hashCode | 0;
  }
  return hashCode;
}

function hashCode_16(list) {
  $clinit_Collections();
  var e, e$iterator, hashCode;
  hashCode = 1;
  for (e$iterator = list.iterator(); e$iterator.hasNext_0(); ) {
    e = e$iterator.next_0();
    hashCode = 31 * hashCode + (e != null ? hashCode__I__devirtual$(e) : 0);
    hashCode = hashCode | 0;
  }
  return hashCode;
}

var EMPTY_LIST;
function Collections$EmptyList() {}

defineClass(139, 199, { 3: 1, 22: 1 }, Collections$EmptyList);
_.contains = function contains_3(object) {
  return false;
};
_.get_1 = function get_5(location_0) {
  checkCriticalElementIndex(location_0, 0);
  return null;
};
_.iterator = function iterator_5() {
  return (
    $clinit_Collections(), $clinit_Collections$EmptyListIterator(), INSTANCE_2
  );
};
_.listIterator = function listIterator_1() {
  return (
    $clinit_Collections(), $clinit_Collections$EmptyListIterator(), INSTANCE_2
  );
};
_.size_1 = function size_6() {
  return 0;
};
var Ljava_util_Collections$EmptyList_2_classLit = createForClass(
  "java.util",
  "Collections/EmptyList",
  139,
);
function $clinit_Collections$EmptyListIterator() {
  $clinit_Collections$EmptyListIterator = emptyMethod;
  INSTANCE_2 = new Collections$EmptyListIterator();
}

function Collections$EmptyListIterator() {}

defineClass(140, 1, {}, Collections$EmptyListIterator);
_.hasNext_0 = function hasNext_4() {
  return false;
};
_.hasPrevious = function hasPrevious_0() {
  return false;
};
_.next_0 = function next_4() {
  throw toJs(new NoSuchElementException());
};
_.previous = function previous_1() {
  throw toJs(new NoSuchElementException());
};
var INSTANCE_2;
var Ljava_util_Collections$EmptyListIterator_2_classLit = createForClass(
  "java.util",
  "Collections/EmptyListIterator",
  140,
);
function ConcurrentModificationException() {
  RuntimeException.call(this);
}

defineClass(145, 7, $intern_1, ConcurrentModificationException);
var Ljava_util_ConcurrentModificationException_2_classLit = createForClass(
  "java.util",
  "ConcurrentModificationException",
  145,
);
function HashMap() {
  AbstractHashMap.call(this);
}

defineClass(21, 64, { 3: 1, 19: 1 }, HashMap);
_.equals_1 = function equals_12(value1, value2) {
  return (
    maskUndefined(value1) === maskUndefined(value2) ||
    (value1 != null && equals_Ljava_lang_Object__Z__devirtual$(value1, value2))
  );
};
_.getHashCode = function getHashCode(key) {
  var hashCode;
  if (key == null) {
    return 0;
  }
  hashCode = hashCode__I__devirtual$(key);
  return hashCode | 0;
};
var Ljava_util_HashMap_2_classLit = createForClass("java.util", "HashMap", 21);
function $add_3(this$static, o) {
  var old;
  old = $put(this$static.map_0, o, this$static);
  return old == null;
}

function $contains_0(this$static, o) {
  return $containsKey(this$static.map_0, o);
}

function $remove_4(this$static, o) {
  return $remove_3(this$static.map_0, o) != null;
}

function HashSet() {
  this.map_0 = new HashMap();
}

defineClass(50, 196, { 3: 1, 44: 1 }, HashSet);
_.add_0 = function add_5(o) {
  return $add_3(this, o);
};
_.contains = function contains_4(o) {
  return $contains_0(this, o);
};
_.isEmpty = function isEmpty_1() {
  return $size(this.map_0) == 0;
};
_.iterator = function iterator_6() {
  var outerIter;
  return (
    (outerIter = new AbstractHashMap$EntrySetIterator(
      new AbstractHashMap$EntrySet(
        new AbstractMap$1(this.map_0).this$01,
      ).this$01,
    )),
    new AbstractMap$1$1(outerIter)
  );
};
_.size_1 = function size_7() {
  return $size(this.map_0);
};
var Ljava_util_HashSet_2_classLit = createForClass("java.util", "HashSet", 50);
function IdentityHashMap() {
  AbstractHashMap.call(this);
}

defineClass(166, 64, { 3: 1, 19: 1 }, IdentityHashMap);
_.equals_0 = function equals_13(obj) {
  var entry, entry$iterator, otherKey, otherMap, otherValue;
  if (obj === this) {
    return true;
  }
  if (!instanceOf(obj, 19)) {
    return false;
  }
  otherMap = castTo(obj, 19);
  if (this.hashCodeMap.size_0 + this.stringMap.size_0 != otherMap.size_1()) {
    return false;
  }
  for (
    entry$iterator = new AbstractHashMap$EntrySetIterator(
      otherMap.entrySet().this$01,
    );
    entry$iterator.hasNext;

  ) {
    entry = $next_0(entry$iterator);
    otherKey = entry.getKey();
    otherValue = entry.getValue();
    if (
      !(instanceOfString(otherKey)
        ? $hasStringValue(this, otherKey)
        : !!$getEntry(this.hashCodeMap, otherKey))
    ) {
      return false;
    }
    if (
      maskUndefined(otherValue) !==
      maskUndefined(
        instanceOfString(otherKey)
          ? $getStringValue(this, otherKey)
          : getEntryValueOrNull($getEntry(this.hashCodeMap, otherKey)),
      )
    ) {
      return false;
    }
  }
  return true;
};
_.equals_1 = function equals_14(value1, value2) {
  return maskUndefined(value1) === maskUndefined(value2);
};
_.getHashCode = function getHashCode_0(key) {
  return getIdentityHashCode(key);
};
_.hashCode_0 = function hashCode_17() {
  var entry, entry$iterator, hashCode;
  hashCode = 0;
  for (
    entry$iterator = new AbstractHashMap$EntrySetIterator(
      new AbstractHashMap$EntrySet(this).this$01,
    );
    entry$iterator.hasNext;

  ) {
    entry = $next_0(entry$iterator);
    hashCode += getIdentityHashCode(entry.getKey());
    hashCode += getIdentityHashCode(entry.getValue());
  }
  return hashCode;
};
var Ljava_util_IdentityHashMap_2_classLit = createForClass(
  "java.util",
  "IdentityHashMap",
  166,
);
function $findEntryInChain(this$static, key, chain) {
  var entry, entry$array, entry$index, entry$max;
  for (
    entry$array = chain, entry$index = 0, entry$max = entry$array.length;
    entry$index < entry$max;
    ++entry$index
  ) {
    entry = entry$array[entry$index];
    if (this$static.host.equals_1(key, entry.getKey())) {
      return entry;
    }
  }
  return null;
}

function $getChainOrEmpty(this$static, hashCode) {
  var chain;
  chain = this$static.backingMap.get(hashCode);
  return chain == null
    ? initUnidimensionalArray(
        Ljava_lang_Object_2_classLit,
        $intern_0,
        1,
        0,
        5,
        1,
      )
    : chain;
}

function $getEntry(this$static, key) {
  return $findEntryInChain(
    this$static,
    key,
    $getChainOrEmpty(this$static, this$static.host.getHashCode(key)),
  );
}

function $put_0(this$static, key, value_0) {
  var chain, chain0, entry, hashCode;
  hashCode = this$static.host.getHashCode(key);
  chain0 =
    ((chain = this$static.backingMap.get(hashCode)),
    chain == null
      ? initUnidimensionalArray(
          Ljava_lang_Object_2_classLit,
          $intern_0,
          1,
          0,
          5,
          1,
        )
      : chain);
  if (chain0.length == 0) {
    this$static.backingMap.set(hashCode, chain0);
  } else {
    entry = $findEntryInChain(this$static, key, chain0);
    if (entry) {
      return entry.setValue(value_0);
    }
  }
  setCheck(chain0, chain0.length, new AbstractMap$SimpleEntry(key, value_0));
  ++this$static.size_0;
  ++this$static.host.modCount;
  return null;
}

function $remove_5(this$static, key) {
  var chain, chain0, entry, hashCode, i;
  hashCode = this$static.host.getHashCode(key);
  chain0 =
    ((chain = this$static.backingMap.get(hashCode)),
    chain == null
      ? initUnidimensionalArray(
          Ljava_lang_Object_2_classLit,
          $intern_0,
          1,
          0,
          5,
          1,
        )
      : chain);
  for (i = 0; i < chain0.length; i++) {
    entry = chain0[i];
    if (this$static.host.equals_1(key, entry.getKey())) {
      if (chain0.length == 1) {
        chain0.length = 0;
        $delete(this$static.backingMap, hashCode);
      } else {
        chain0.splice(i, 1);
      }
      --this$static.size_0;
      ++this$static.host.modCount;
      return entry.getValue();
    }
  }
  return null;
}

function InternalHashCodeMap(host) {
  this.backingMap = newJsMap();
  this.host = host;
}

defineClass(141, 1, {}, InternalHashCodeMap);
_.iterator = function iterator_7() {
  return new InternalHashCodeMap$1(this);
};
_.size_0 = 0;
var Ljava_util_InternalHashCodeMap_2_classLit = createForClass(
  "java.util",
  "InternalHashCodeMap",
  141,
);
function InternalHashCodeMap$1(this$0) {
  this.this$01 = this$0;
  this.chains = this.this$01.backingMap.entries();
  this.chain = initUnidimensionalArray(
    Ljava_lang_Object_2_classLit,
    $intern_0,
    1,
    0,
    5,
    1,
  );
}

defineClass(70, 1, {}, InternalHashCodeMap$1);
_.next_0 = function next_5() {
  return (this.lastEntry = this.chain[this.itemIndex++]), this.lastEntry;
};
_.hasNext_0 = function hasNext_5() {
  var current;
  if (this.itemIndex < this.chain.length) {
    return true;
  }
  current = this.chains.next();
  if (!current.done) {
    this.chain = current.value[1];
    this.itemIndex = 0;
    return true;
  }
  return false;
};
_.itemIndex = 0;
_.lastEntry = null;
var Ljava_util_InternalHashCodeMap$1_2_classLit = createForClass(
  "java.util",
  "InternalHashCodeMap/1",
  70,
);
function $delete(this$static, key) {
  var fn;
  fn = this$static["delete"];
  fn.call(this$static, key);
}

function $delete_0(this$static, key) {
  var fn;
  fn = this$static["delete"];
  fn.call(this$static, key);
}

function $clinit_InternalJsMapFactory() {
  $clinit_InternalJsMapFactory = emptyMethod;
  jsMapCtor = getJsMapConstructor();
}

function canHandleObjectCreateAndProto() {
  if (!Object.create || !Object.getOwnPropertyNames) {
    return false;
  }
  var protoField = "__proto__";
  var map_0 = Object.create(null);
  if (map_0[protoField] !== undefined) {
    return false;
  }
  var keys_0 = Object.getOwnPropertyNames(map_0);
  if (keys_0.length != 0) {
    return false;
  }
  map_0[protoField] = 42;
  if (map_0[protoField] !== 42) {
    return false;
  }
  if (Object.getOwnPropertyNames(map_0).length == 0) {
    return false;
  }
  return true;
}

function getJsMapConstructor() {
  function isCorrectIterationProtocol() {
    try {
      return new Map().entries().next().done;
    } catch (e) {
      return false;
    }
  }

  if (
    typeof Map === "function" &&
    Map.prototype.entries &&
    isCorrectIterationProtocol()
  ) {
    return Map;
  } else {
    return getJsMapPolyFill();
  }
}

function getJsMapPolyFill() {
  function Stringmap() {
    this.obj = this.createObject();
  }

  Stringmap.prototype.createObject = function (key) {
    return Object.create(null);
  };
  Stringmap.prototype.get = function (key) {
    return this.obj[key];
  };
  Stringmap.prototype.set = function (key, value_0) {
    this.obj[key] = value_0;
  };
  Stringmap.prototype["delete"] = function (key) {
    delete this.obj[key];
  };
  Stringmap.prototype.keys = function () {
    return Object.getOwnPropertyNames(this.obj);
  };
  Stringmap.prototype.entries = function () {
    var keys_0 = this.keys();
    var map_0 = this;
    var nextIndex = 0;
    return {
      next: function () {
        if (nextIndex >= keys_0.length) return { done: true };
        var key = keys_0[nextIndex++];
        return { value: [key, map_0.get(key)], done: false };
      },
    };
  };
  if (!canHandleObjectCreateAndProto()) {
    Stringmap.prototype.createObject = function () {
      return {};
    };
    Stringmap.prototype.get = function (key) {
      return this.obj[":" + key];
    };
    Stringmap.prototype.set = function (key, value_0) {
      this.obj[":" + key] = value_0;
    };
    Stringmap.prototype["delete"] = function (key) {
      delete this.obj[":" + key];
    };
    Stringmap.prototype.keys = function () {
      var result = [];
      for (var key in this.obj) {
        key.charCodeAt(0) == 58 && result.push(key.substring(1));
      }
      return result;
    };
  }
  return Stringmap;
}

function newJsMap() {
  $clinit_InternalJsMapFactory();
  return new jsMapCtor();
}

var jsMapCtor;
function $contains_1(this$static, key) {
  return !(this$static.backingMap.get(key) === undefined);
}

function $get_1(this$static, key) {
  return this$static.backingMap.get(key);
}

function $put_1(this$static, key, value_0) {
  var oldValue;
  oldValue = this$static.backingMap.get(key);
  this$static.backingMap.set(key, value_0 === undefined ? null : value_0);
  if (oldValue === undefined) {
    ++this$static.size_0;
    ++this$static.host.modCount;
  } else {
    ++this$static.valueMod;
  }
  return oldValue;
}

function $remove_6(this$static, key) {
  var value_0;
  value_0 = this$static.backingMap.get(key);
  if (value_0 === undefined) {
    ++this$static.valueMod;
  } else {
    $delete_0(this$static.backingMap, key);
    --this$static.size_0;
    ++this$static.host.modCount;
  }
  return value_0;
}

function InternalStringMap(host) {
  this.backingMap = newJsMap();
  this.host = host;
}

defineClass(142, 1, {}, InternalStringMap);
_.iterator = function iterator_8() {
  return new InternalStringMap$1(this);
};
_.size_0 = 0;
_.valueMod = 0;
var Ljava_util_InternalStringMap_2_classLit = createForClass(
  "java.util",
  "InternalStringMap",
  142,
);
function InternalStringMap$1(this$0) {
  this.this$01 = this$0;
  this.entries_0 = this.this$01.backingMap.entries();
  this.current = this.entries_0.next();
}

defineClass(71, 1, {}, InternalStringMap$1);
_.next_0 = function next_6() {
  return (
    (this.last = this.current),
    (this.current = this.entries_0.next()),
    new InternalStringMap$2(this.this$01, this.last, this.this$01.valueMod)
  );
};
_.hasNext_0 = function hasNext_6() {
  return !this.current.done;
};
var Ljava_util_InternalStringMap$1_2_classLit = createForClass(
  "java.util",
  "InternalStringMap/1",
  71,
);
function $getValue(this$static) {
  if (this$static.this$01.valueMod != this$static.val$lastValueMod3) {
    return $get_1(this$static.this$01, this$static.val$entry2.value[0]);
  }
  return this$static.val$entry2.value[1];
}

function InternalStringMap$2(this$0, val$entry, val$lastValueMod) {
  this.this$01 = this$0;
  this.val$entry2 = val$entry;
  this.val$lastValueMod3 = val$lastValueMod;
}

defineClass(143, 200, $intern_16, InternalStringMap$2);
_.getKey = function getKey_0() {
  return this.val$entry2.value[0];
};
_.getValue = function getValue_0() {
  return $getValue(this);
};
_.setValue = function setValue_0(object) {
  return $put_1(this.this$01, this.val$entry2.value[0], object);
};
_.val$lastValueMod3 = 0;
var Ljava_util_InternalStringMap$2_2_classLit = createForClass(
  "java.util",
  "InternalStringMap/2",
  143,
);
function NoSuchElementException() {
  RuntimeException.call(this);
}

defineClass(37, 7, $intern_1, NoSuchElementException);
var Ljava_util_NoSuchElementException_2_classLit = createForClass(
  "java.util",
  "NoSuchElementException",
  37,
);
function equals_15(a, b) {
  return (
    maskUndefined(a) === maskUndefined(b) ||
    (a != null && equals_Ljava_lang_Object__Z__devirtual$(a, b))
  );
}

function hashCode_18(o) {
  return o != null ? hashCode__I__devirtual$(o) : 0;
}

function $add_4(this$static, newElement) {
  !this$static.builder
    ? (this$static.builder = new StringBuilder_0(this$static.prefix))
    : $append_1(this$static.builder, this$static.delimiter);
  $append_0(this$static.builder, newElement);
  return this$static;
}

function StringJoiner(prefix, suffix) {
  this.delimiter = ", ";
  this.prefix = prefix;
  this.suffix = suffix;
  this.emptyValue = this.prefix + ("" + this.suffix);
}

defineClass(57, 1, {}, StringJoiner);
_.toString_0 = function toString_23() {
  return !this.builder
    ? this.emptyValue
    : this.suffix.length == 0
      ? this.builder.string
      : this.builder.string + ("" + this.suffix);
};
var Ljava_util_StringJoiner_2_classLit = createForClass(
  "java.util",
  "StringJoiner",
  57,
);
function insertTo(array, index_0, value_0) {
  array.splice(index_0, 0, value_0);
}

function push_1(array, o) {
  array.push(o);
}

defineClass(228, 1, {});
function getIdentityHashCode(o) {
  switch (typeof o) {
    case "string":
      return $hashCode_1(o);
    case "number":
      return $hashCode_0(o);
    case "boolean":
      return $hashCode(o);
    default:
      return o == null ? 0 : getObjectIdentityHashCode(o);
  }
}

function getObjectIdentityHashCode(o) {
  return o.$H || (o.$H = ++nextHash);
}

var nextHash = 0;
function checkCriticalArgument(expression, errorMessage) {
  if (!expression) {
    throw toJs(new IllegalArgumentException_0(errorMessage));
  }
}

function checkCriticalArrayType(expression) {
  if (!expression) {
    throw toJs(new ArrayStoreException());
  }
}

function checkCriticalConcurrentModification(
  currentModCount,
  recordedModCount,
) {
  if (currentModCount != recordedModCount) {
    throw toJs(new ConcurrentModificationException());
  }
}

function checkCriticalElement(expression) {
  if (!expression) {
    throw toJs(new NoSuchElementException());
  }
}

function checkCriticalElementIndex(index_0, size_0) {
  if (index_0 < 0 || index_0 >= size_0) {
    throw toJs(
      new IndexOutOfBoundsException_0(
        "Index: " + index_0 + ", Size: " + size_0,
      ),
    );
  }
}

function checkCriticalNotNull(reference) {
  if (reference == null) {
    throw toJs(new NullPointerException());
  }
  return reference;
}

function checkCriticalNotNull_0(reference) {
  if (!reference) {
    throw toJs(new NullPointerException_0("Cannot suppress a null exception."));
  }
}

function checkCriticalPositionIndex(index_0, size_0) {
  if (index_0 < 0 || index_0 > size_0) {
    throw toJs(
      new IndexOutOfBoundsException_0(
        "Index: " + index_0 + ", Size: " + size_0,
      ),
    );
  }
}

function checkCriticalState(expression) {
  if (!expression) {
    throw toJs(new IllegalStateException("Can't overwrite cause"));
  }
}

function checkCriticalStringBounds(start_0, end, length_0) {
  if (start_0 < 0 || end > length_0 || end < start_0) {
    throw toJs(
      new StringIndexOutOfBoundsException(
        "fromIndex: " + start_0 + ", toIndex: " + end + ", length: " + length_0,
      ),
    );
  }
}

function checkCriticalStringElementIndex(index_0, size_0) {
  if (index_0 < 0 || index_0 >= size_0) {
    throw toJs(
      new StringIndexOutOfBoundsException(
        "Index: " + index_0 + ", Size: " + size_0,
      ),
    );
  }
}

function checkCriticalType(expression) {
  if (!expression) {
    throw toJs(new ClassCastException());
  }
}

defineClass(220, 1, {});
var Lcom_google_gwt_user_client_rpc_XsrfToken_2_classLit = createForClass(
  "com.google.gwt.user.client.rpc",
  "XsrfToken",
  null,
);
var $entry = ($clinit_Impl(), entry_0);
var gwtOnLoad = (gwtOnLoad = gwtOnLoad_0);
addInitFunctions(init);
setGwtProperty("permProps", [
  [
    ["locale", "default"],
    ["user.agent", "gecko1_8"],
  ],
]);
$sendStats("moduleStartup", "moduleEvalEnd");
gwtOnLoad(
  __gwtModuleFunction.__errFn,
  __gwtModuleFunction.__moduleName,
  __gwtModuleFunction.__moduleBase,
  __gwtModuleFunction.__softPermutationId,
  __gwtModuleFunction.__computePropValue,
);
$sendStats("moduleStartup", "end");
$gwt &&
  $gwt.permProps &&
  __gwtModuleFunction.__moduleStartupDone($gwt.permProps);
