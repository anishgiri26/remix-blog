var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf, __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
}, __copyProps = (to, from, except, desc) => {
  if (from && typeof from == "object" || typeof from == "function")
    for (let key of __getOwnPropNames(from))
      !__hasOwnProp.call(to, key) && key !== except && __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: !0 }) : target,
  mod
)), __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: !0 }), mod);

// <stdin>
var stdin_exports = {};
__export(stdin_exports, {
  assets: () => assets_manifest_default,
  assetsBuildDirectory: () => assetsBuildDirectory,
  entry: () => entry,
  future: () => future,
  publicPath: () => publicPath,
  routes: () => routes
});
module.exports = __toCommonJS(stdin_exports);

// app/entry.server.jsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
var import_stream = require("stream"), import_node = require("@remix-run/node"), import_react = require("@remix-run/react"), import_isbot = __toESM(require("isbot")), import_server = require("react-dom/server"), import_jsx_dev_runtime = require("react/jsx-dev-runtime"), ABORT_DELAY = 5e3;
function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return (0, import_isbot.default)(request.headers.get("user-agent")) ? handleBotRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  ) : handleBrowserRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  );
}
function handleBotRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let didError = !1, { pipe, abort } = (0, import_server.renderToPipeableStream)(
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react.RemixServer, { context: remixContext, url: request.url }, void 0, !1, {
        fileName: "app/entry.server.jsx",
        lineNumber: 41,
        columnNumber: 7
      }, this),
      {
        onAllReady() {
          let body = new import_stream.PassThrough();
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new import_node.Response(body, {
              headers: responseHeaders,
              status: didError ? 500 : responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          didError = !0, console.error(error);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}
function handleBrowserRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let didError = !1, { pipe, abort } = (0, import_server.renderToPipeableStream)(
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react.RemixServer, { context: remixContext, url: request.url }, void 0, !1, {
        fileName: "app/entry.server.jsx",
        lineNumber: 82,
        columnNumber: 7
      }, this),
      {
        onShellReady() {
          let body = new import_stream.PassThrough();
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new import_node.Response(body, {
              headers: responseHeaders,
              status: didError ? 500 : responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(err) {
          reject(err);
        },
        onError(error) {
          didError = !0, console.error(error);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}

// app/root.jsx
var root_exports = {};
__export(root_exports, {
  ErrorBoundary: () => ErrorBoundary,
  default: () => App,
  links: () => links,
  meta: () => meta
});
var import_react2 = require("@remix-run/react");

// app/styles/global.css
var global_default = "/build/_assets/global-K4C2GBKD.css";

// app/root.jsx
var import_jsx_dev_runtime2 = require("react/jsx-dev-runtime"), links = () => [{ rel: "stylesheet", href: global_default }], meta = () => ({
  description: "A blog built with Remix",
  keywords: "remix,react,react-router,react-query"
});
function App() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Document, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Layout, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Outlet, {}, void 0, !1, {
    fileName: "app/root.jsx",
    lineNumber: 19,
    columnNumber: 9
  }, this) }, void 0, !1, {
    fileName: "app/root.jsx",
    lineNumber: 18,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/root.jsx",
    lineNumber: 17,
    columnNumber: 5
  }, this);
}
function Document({ children, title }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("html", { lang: "en", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("head", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("meta", { charSet: "utf-8" }, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 29,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("meta", { name: "viewport", content: "width=device-width, initial-scale=1" }, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 30,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Meta, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 31,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Links, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 32,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("title", { children: title || "Remix Blog" }, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 33,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.jsx",
      lineNumber: 28,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("body", { children: [
      children,
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.LiveReload, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 37,
        columnNumber: 51
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.jsx",
      lineNumber: 35,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/root.jsx",
    lineNumber: 27,
    columnNumber: 5
  }, this);
}
function Layout({ children }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_jsx_dev_runtime2.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("nav", { className: "navbar", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Link, { to: "/", className: "logo", children: "Remix" }, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 47,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("ul", { className: "nav", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Link, { to: "/posts", children: "Posts" }, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 52,
        columnNumber: 13
      }, this) }, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 51,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 50,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.jsx",
      lineNumber: 46,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "container", children }, void 0, !1, {
      fileName: "app/root.jsx",
      lineNumber: 57,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/root.jsx",
    lineNumber: 45,
    columnNumber: 5
  }, this);
}
function ErrorBoundary({ error }) {
  return console.log(error), /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Document, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Layout, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h1", { children: "Something went wrong" }, void 0, !1, {
      fileName: "app/root.jsx",
      lineNumber: 70,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { children: error.message }, void 0, !1, {
      fileName: "app/root.jsx",
      lineNumber: 71,
      columnNumber: 11
    }, this)
  ] }, void 0, !0, {
    fileName: "app/root.jsx",
    lineNumber: 69,
    columnNumber: 9
  }, this) }, void 0, !1, {
    fileName: "app/root.jsx",
    lineNumber: 68,
    columnNumber: 7
  }, this);
}

// app/routes/index.jsx
var routes_exports = {};
__export(routes_exports, {
  default: () => routes_default
});
var import_jsx_dev_runtime3 = require("react/jsx-dev-runtime");
function Home() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("h1", { children: "Welcome to Remix!" }, void 0, !1, {
      fileName: "app/routes/index.jsx",
      lineNumber: 4,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("p", { children: "This is a starter template for Remix. Remix is a framework for building. Generate more text with the capital of united states." }, void 0, !1, {
      fileName: "app/routes/index.jsx",
      lineNumber: 7,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/index.jsx",
    lineNumber: 3,
    columnNumber: 5
  }, this);
}
var routes_default = Home;

// app/routes/posts.jsx
var posts_exports = {};
__export(posts_exports, {
  default: () => posts_default
});
var import_react3 = require("@remix-run/react"), import_jsx_dev_runtime4 = require("react/jsx-dev-runtime");
function Posts() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_jsx_dev_runtime4.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_react3.Outlet, {}, void 0, !1, {
    fileName: "app/routes/posts.jsx",
    lineNumber: 6,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/posts.jsx",
    lineNumber: 5,
    columnNumber: 5
  }, this);
}
var posts_default = Posts;

// app/routes/posts/$postId.jsx
var postId_exports = {};
__export(postId_exports, {
  default: () => postId_default,
  loader: () => loader
});
var import_react4 = require("@remix-run/react");

// app/utils/db.server.ts
var import_client = require("@prisma/client"), db;
global.__db || (global.__db = new import_client.PrismaClient(), global.__db.$connect()), db = global.__db;

// app/routes/posts/$postId.jsx
var import_jsx_dev_runtime5 = require("react/jsx-dev-runtime"), loader = async ({ params }) => {
  let post = await db.post.findUnique({
    where: { id: params.postId }
  });
  if (!post)
    throw new Error("Post not found");
  return { post };
};
function Post() {
  let { post } = (0, import_react4.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_jsx_dev_runtime5.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "page-header", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("h1", { children: post.title }, void 0, !1, {
        fileName: "app/routes/posts/$postId.jsx",
        lineNumber: 21,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_react4.Link, { to: "/posts", className: "btn btn-reverse", children: "Back" }, void 0, !1, {
        fileName: "app/routes/posts/$postId.jsx",
        lineNumber: 22,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/posts/$postId.jsx",
      lineNumber: 20,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "page-content", children: [
      " ",
      post.body,
      " "
    ] }, void 0, !0, {
      fileName: "app/routes/posts/$postId.jsx",
      lineNumber: 24,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/posts/$postId.jsx",
    lineNumber: 19,
    columnNumber: 5
  }, this);
}
var postId_default = Post;

// app/routes/posts/index.jsx
var posts_exports2 = {};
__export(posts_exports2, {
  default: () => posts_default2,
  loader: () => loader2
});
var import_react5 = require("@remix-run/react");
var import_jsx_dev_runtime6 = require("react/jsx-dev-runtime"), loader2 = async () => ({
  posts: await db.post.findMany({
    take: 20,
    select: { id: !0, title: !0, createdAt: !0 },
    orderBy: { createdAt: "desc" }
  })
});
function PostItems() {
  let { posts } = (0, import_react5.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_jsx_dev_runtime6.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "page-header", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("h1", { children: "Post Items" }, void 0, !1, {
        fileName: "app/routes/posts/index.jsx",
        lineNumber: 21,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_react5.Link, { to: "/posts/new", className: "btn", children: "New Post" }, void 0, !1, {
        fileName: "app/routes/posts/index.jsx",
        lineNumber: 22,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/posts/index.jsx",
      lineNumber: 20,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("ul", { className: "posts-list", children: posts.map((post) => /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_react5.Link, { to: post.id, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("h3", { children: post.title }, void 0, !1, {
        fileName: "app/routes/posts/index.jsx",
        lineNumber: 28,
        columnNumber: 17
      }, this),
      new Date(post.createdAt).toLocaleString()
    ] }, void 0, !0, {
      fileName: "app/routes/posts/index.jsx",
      lineNumber: 27,
      columnNumber: 13
    }, this) }, post.id, !1, {
      fileName: "app/routes/posts/index.jsx",
      lineNumber: 26,
      columnNumber: 9
    }, this)) }, void 0, !1, {
      fileName: "app/routes/posts/index.jsx",
      lineNumber: 24,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/posts/index.jsx",
    lineNumber: 19,
    columnNumber: 5
  }, this);
}
var posts_default2 = PostItems;

// app/routes/posts/new.jsx
var new_exports = {};
__export(new_exports, {
  action: () => action,
  default: () => new_default
});
var import_react6 = require("@remix-run/react"), import_node2 = require("@remix-run/node");
var import_jsx_dev_runtime7 = require("react/jsx-dev-runtime"), action = async ({ request }) => {
  let form = await request.formData(), title = form.get("title"), body = form.get("body"), fields = { title, body }, post = await db.post.create({ data: fields });
  return (0, import_node2.redirect)(`/posts/${post.id}`);
};
function NewPost() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_jsx_dev_runtime7.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "page-header", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("h1", { children: "New Post" }, void 0, !1, {
        fileName: "app/routes/posts/new.jsx",
        lineNumber: 21,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_react6.Link, { to: "/posts", className: "btn btn-reverse", children: "Back" }, void 0, !1, {
        fileName: "app/routes/posts/new.jsx",
        lineNumber: 22,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/posts/new.jsx",
      lineNumber: 20,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "page-content", children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("form", { method: "POST", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "form-control", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("label", { htmlFor: "title", children: "Title" }, void 0, !1, {
          fileName: "app/routes/posts/new.jsx",
          lineNumber: 28,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("input", { type: "text", name: "title", id: "title" }, void 0, !1, {
          fileName: "app/routes/posts/new.jsx",
          lineNumber: 29,
          columnNumber: 21
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/posts/new.jsx",
        lineNumber: 27,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "form-control", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("label", { htmlFor: "body", children: "Post Body" }, void 0, !1, {
          fileName: "app/routes/posts/new.jsx",
          lineNumber: 32,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("textarea", { name: "body", id: "body" }, void 0, !1, {
          fileName: "app/routes/posts/new.jsx",
          lineNumber: 33,
          columnNumber: 21
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/posts/new.jsx",
        lineNumber: 31,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("button", { type: "submit", className: "btn btn-block", children: "Create Post" }, void 0, !1, {
        fileName: "app/routes/posts/new.jsx",
        lineNumber: 35,
        columnNumber: 17
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/posts/new.jsx",
      lineNumber: 26,
      columnNumber: 13
    }, this) }, void 0, !1, {
      fileName: "app/routes/posts/new.jsx",
      lineNumber: 25,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/posts/new.jsx",
    lineNumber: 19,
    columnNumber: 5
  }, this);
}
var new_default = NewPost;

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { version: "f5f7acb4", entry: { module: "/build/entry.client-2TLCQ66V.js", imports: ["/build/_shared/chunk-WXJ23HAY.js", "/build/_shared/chunk-EETRBLDB.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-IDQTNORL.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !0 }, "routes/index": { id: "routes/index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/index-LQQ4RBZI.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/posts": { id: "routes/posts", parentId: "root", path: "posts", index: void 0, caseSensitive: void 0, module: "/build/routes/posts-BE7XXYMN.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/posts/$postId": { id: "routes/posts/$postId", parentId: "routes/posts", path: ":postId", index: void 0, caseSensitive: void 0, module: "/build/routes/posts/$postId-FIQUA4Q7.js", imports: ["/build/_shared/chunk-MT4Q33B6.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/posts/index": { id: "routes/posts/index", parentId: "routes/posts", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/posts/index-FYRY74HQ.js", imports: ["/build/_shared/chunk-MT4Q33B6.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/posts/new": { id: "routes/posts/new", parentId: "routes/posts", path: "new", index: void 0, caseSensitive: void 0, module: "/build/routes/posts/new-CETIP3HZ.js", imports: ["/build/_shared/chunk-MT4Q33B6.js"], hasAction: !0, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 } }, cssBundleHref: void 0, url: "/build/manifest-F5F7ACB4.js" };

// server-entry-module:@remix-run/dev/server-build
var assetsBuildDirectory = "public/build", future = { unstable_cssModules: !1, unstable_cssSideEffectImports: !1, unstable_dev: !1, unstable_postcss: !1, unstable_tailwind: !1, unstable_vanillaExtract: !1, v2_errorBoundary: !1, v2_meta: !1, v2_routeConvention: !1 }, publicPath = "/build/", entry = { module: entry_server_exports }, routes = {
  root: {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/index": {
    id: "routes/index",
    parentId: "root",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: routes_exports
  },
  "routes/posts": {
    id: "routes/posts",
    parentId: "root",
    path: "posts",
    index: void 0,
    caseSensitive: void 0,
    module: posts_exports
  },
  "routes/posts/$postId": {
    id: "routes/posts/$postId",
    parentId: "routes/posts",
    path: ":postId",
    index: void 0,
    caseSensitive: void 0,
    module: postId_exports
  },
  "routes/posts/index": {
    id: "routes/posts/index",
    parentId: "routes/posts",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: posts_exports2
  },
  "routes/posts/new": {
    id: "routes/posts/new",
    parentId: "routes/posts",
    path: "new",
    index: void 0,
    caseSensitive: void 0,
    module: new_exports
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  assets,
  assetsBuildDirectory,
  entry,
  future,
  publicPath,
  routes
});
//# sourceMappingURL=index.js.map
