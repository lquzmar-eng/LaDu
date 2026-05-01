import { createBrowserRouter } from "react-router";
import { MainLayout } from "./components/MainLayout";
import { Home } from "./screens/Home";
import { OnboardingUserType } from "./screens/OnboardingUserType";
import { Onboarding1 } from "./screens/Onboarding1";
import { Onboarding2 } from "./screens/Onboarding2";
import { Onboarding3 } from "./screens/Onboarding3";
import { Transactions } from "./screens/Transactions";
import { Statistics } from "./screens/Statistics";
import { Planning } from "./screens/Planning";
import { Income } from "./screens/Income";
import { Debts } from "./screens/Debts";
import { Family } from "./screens/Family";
import { Youth } from "./screens/Youth";
import { Settings } from "./screens/Settings";

export const router = createBrowserRouter([
  {
    path: "/onboarding/user-type",
    Component: OnboardingUserType,
  },
  {
    path: "/onboarding/1",
    Component: Onboarding1,
  },
  {
    path: "/onboarding/2",
    Component: Onboarding2,
  },
  {
    path: "/onboarding/3",
    Component: Onboarding3,
  },
  {
    path: "/",
    Component: MainLayout,
    children: [
      { index: true, Component: Home },
      { path: "transactions", Component: Transactions },
      { path: "statistics", Component: Statistics },
      { path: "planning", Component: Planning },
      { path: "income", Component: Income },
      { path: "debts", Component: Debts },
      { path: "family", Component: Family },
      { path: "youth", Component: Youth },
      { path: "settings", Component: Settings },
    ],
  },
]);
