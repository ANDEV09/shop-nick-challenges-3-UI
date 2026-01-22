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
    index("features/ctv/pages/Dashboard.tsx"),
    route("game-categories", "features/ctv/pages/StaffCategories.tsx"),
    route("game-groups", "features/ctv/pages/StaffGroups.tsx"),
    route("game-accounts", "features/ctv/pages/StaffAccounts.tsx"),
    // route("sales", "features/ctv/pages/Sales.tsx"),
  ]),

  route("admin", "features/admin/Index.tsx", [
    index("features/admin/pages/Dashboard.tsx"),
    route("/admin/game-categories", "features/admin/pages/AdminCategories.tsx"),
    route("/admin/game-groups", "features/admin/pages/AdminGroups.tsx"),
    route("/admin/game-accounts", "features/admin/pages/AdminAccounts.tsx"),
    route(
      "/admin/pending-accounts",
      "features/admin/pages/PendingAccounts.tsx",
    ),
    // route("users", "features/admin/pages/Users.tsx"), // /admin/users
  ]),
] satisfies RouteConfig;
