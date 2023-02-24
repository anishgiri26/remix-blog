import {
  Link,
  Links,
  LiveReload,
  Meta,
  Outlet
} from "/build/_shared/chunk-WXJ23HAY.js";
import {
  __toESM,
  require_jsx_dev_runtime
} from "/build/_shared/chunk-EETRBLDB.js";

// app/styles/global.css
var global_default = "/build/_assets/global-K4C2GBKD.css";

// app/root.jsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var links = () => [{ rel: "stylesheet", href: global_default }];
var meta = () => {
  const description = "A blog built with Remix";
  const keywords = "remix,react,react-router,react-query";
  return {
    description,
    keywords
  };
};
function App() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Document, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Layout, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Outlet, {}, void 0, false, {
    fileName: "app/root.jsx",
    lineNumber: 19,
    columnNumber: 9
  }, this) }, void 0, false, {
    fileName: "app/root.jsx",
    lineNumber: 18,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/root.jsx",
    lineNumber: 17,
    columnNumber: 5
  }, this);
}
function Document({ children, title }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("html", { lang: "en", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("head", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("meta", { charSet: "utf-8" }, void 0, false, {
        fileName: "app/root.jsx",
        lineNumber: 29,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("meta", { name: "viewport", content: "width=device-width, initial-scale=1" }, void 0, false, {
        fileName: "app/root.jsx",
        lineNumber: 30,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Meta, {}, void 0, false, {
        fileName: "app/root.jsx",
        lineNumber: 31,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Links, {}, void 0, false, {
        fileName: "app/root.jsx",
        lineNumber: 32,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("title", { children: title ? title : "Remix Blog" }, void 0, false, {
        fileName: "app/root.jsx",
        lineNumber: 33,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/root.jsx",
      lineNumber: 28,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("body", { children: [
      children,
      true ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(LiveReload, {}, void 0, false, {
        fileName: "app/root.jsx",
        lineNumber: 37,
        columnNumber: 51
      }, this) : null
    ] }, void 0, true, {
      fileName: "app/root.jsx",
      lineNumber: 35,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/root.jsx",
    lineNumber: 27,
    columnNumber: 5
  }, this);
}
function Layout({ children }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("nav", { className: "navbar", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/", className: "logo", children: "Remix" }, void 0, false, {
        fileName: "app/root.jsx",
        lineNumber: 47,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", { className: "nav", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/posts", children: "Posts" }, void 0, false, {
        fileName: "app/root.jsx",
        lineNumber: 52,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/root.jsx",
        lineNumber: 51,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/root.jsx",
        lineNumber: 50,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/root.jsx",
      lineNumber: 46,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "container", children }, void 0, false, {
      fileName: "app/root.jsx",
      lineNumber: 57,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/root.jsx",
    lineNumber: 45,
    columnNumber: 5
  }, this);
}
function ErrorBoundary({ error }) {
  console.log(error);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Document, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Layout, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { children: "Something went wrong" }, void 0, false, {
      fileName: "app/root.jsx",
      lineNumber: 70,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: error.message }, void 0, false, {
      fileName: "app/root.jsx",
      lineNumber: 71,
      columnNumber: 11
    }, this)
  ] }, void 0, true, {
    fileName: "app/root.jsx",
    lineNumber: 69,
    columnNumber: 9
  }, this) }, void 0, false, {
    fileName: "app/root.jsx",
    lineNumber: 68,
    columnNumber: 7
  }, this);
}
export {
  ErrorBoundary,
  App as default,
  links,
  meta
};
//# sourceMappingURL=/build/root-IDQTNORL.js.map
