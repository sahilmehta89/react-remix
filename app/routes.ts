import { type RouteConfig, index } from "@react-router/dev/routes";

export default [
  index("routes/_index.tsx"),
  { path: "about", file: "routes/about.tsx" },
  { path: "contact", file: "routes/contact.tsx" },
  { path: "hello", file: "routes/hello.tsx" },
  { path: "blog", file: "routes/blog/index.tsx" },
  { path: "blog/:postId", file: "routes/blog.$postId.tsx" },
  { path: "employees", file: "routes/employees.tsx" },
  { path: "employees/:id", file: "routes/employees.$id.tsx" },
  {path: "usestatehook", file: "routes/usestatehook.tsx"},
  {path: "useref", file: "routes/useref.tsx"},
  {path: "usememo", file: "routes/usememo.tsx"},
] satisfies RouteConfig;

