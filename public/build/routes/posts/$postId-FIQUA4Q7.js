import {
  require_db
} from "/build/_shared/chunk-MT4Q33B6.js";
import {
  Link,
  useLoaderData
} from "/build/_shared/chunk-WXJ23HAY.js";
import {
  __toESM,
  require_jsx_dev_runtime
} from "/build/_shared/chunk-EETRBLDB.js";

// app/routes/posts/$postId.jsx
var import_db = __toESM(require_db());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function Post() {
  const { post } = useLoaderData();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "page-header", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { children: post.title }, void 0, false, {
        fileName: "app/routes/posts/$postId.jsx",
        lineNumber: 21,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/posts", className: "btn btn-reverse", children: "Back" }, void 0, false, {
        fileName: "app/routes/posts/$postId.jsx",
        lineNumber: 22,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/posts/$postId.jsx",
      lineNumber: 20,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "page-content", children: [
      " ",
      post.body,
      " "
    ] }, void 0, true, {
      fileName: "app/routes/posts/$postId.jsx",
      lineNumber: 24,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/posts/$postId.jsx",
    lineNumber: 19,
    columnNumber: 5
  }, this);
}
var postId_default = Post;
export {
  postId_default as default
};
//# sourceMappingURL=/build/routes/posts/$postId-FIQUA4Q7.js.map
