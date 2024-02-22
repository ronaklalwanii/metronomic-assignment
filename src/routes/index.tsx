import { lazy, Suspense } from "react";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

import Layout from "../layout";

const Labs = lazy(() => import("../views/labs"));
const AddLabView = lazy(() => import("../views/add-lab"));

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route
        index
        element={
          <Suspense fallback="Loading...">
            <AddLabView />
          </Suspense>
        }
      />
      <Route
        path="/labs"
        element={
          <Suspense fallback="Loading...">
            <Labs />
          </Suspense>
        }
      />
    </Route>
  )
);

const AppRouting = () => {
  return <RouterProvider router={router} />;
};

export default AppRouting;
