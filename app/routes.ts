import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/homePage.tsx"),
  route("login", "routes/user/LoginPage.routes.tsx"),
  route("register", "routes/user/RegisterPage.routes.tsx"),
] satisfies RouteConfig;
