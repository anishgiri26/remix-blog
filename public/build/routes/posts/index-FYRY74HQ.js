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

// app/routes/posts/index.jsx
var import_db = __toESM(require_db());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function PostItems() {
  const { posts } = useLoaderData();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "page-header", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { children: "Post Items" }, void 0, false, {
        fileName: "app/routes/posts/index.jsx",
        lineNumber: 21,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/posts/new", className: "btn", children: "New Post" }, void 0, false, {
        fileName: "app/routes/posts/index.jsx",
        lineNumber: 22,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/posts/index.jsx",
      lineNumber: 20,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", { className: "posts-list", children: posts.map((post) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: post.id, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { children: post.title }, void 0, false, {
        fileName: "app/routes/posts/index.jsx",
        lineNumber: 28,
        columnNumber: 17
      }, this),
      new Date(post.createdAt).toLocaleString()
    ] }, void 0, true, {
      fileName: "app/routes/posts/index.jsx",
      lineNumber: 27,
      columnNumber: 13
    }, this) }, post.id, false, {
      fileName: "app/routes/posts/index.jsx",
      lineNumber: 26,
      columnNumber: 9
    }, this)) }, void 0, false, {
      fileName: "app/routes/posts/index.jsx",
      lineNumber: 24,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/posts/index.jsx",
    lineNumber: 19,
    columnNumber: 5
  }, this);
}
var posts_default = PostItems;
export {
  posts_default as default
};
//# sourceMappingURL=/build/routes/posts/index-FYRY74HQ.js.map
