import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/homePage.tsx"),
  route("login", "routes/user/LoginPage.routes.tsx"),
  route("register", "routes/user/RegisterPage.routes.tsx"),
  route("profile/:tab", "features/user/pages/profile.tsx", {
    id: "profile-tab",
  }),
  route("group-accounts/:groupId", "features/user/pages/GroupAccounts.tsx"),
  route("account-details/:accountId", "features/user/pages/AccountDetails.tsx"),

  route("staff", "features/ctv/Index.tsx", [
    // route("my-accounts", "features/ctv/pages/MyAccounts.tsx"),
    // route("sales", "features/ctv/pages/Sales.tsx"),
  ]),

  route("admin", "features/admin/Index.tsx", [
    // route("game-accounts", "features/admin/pages/GameAccounts.tsx"), // /admin/game-accounts
    // route("categories", "features/admin/pages/Categories.tsx"), // /admin/categories
    // route("users", "features/admin/pages/Users.tsx"), // /admin/users
  ]),
] satisfies RouteConfig;
