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
] satisfies RouteConfig;
