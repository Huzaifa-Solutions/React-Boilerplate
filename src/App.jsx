import { RouterProvider } from "react-router-dom";
import { Suspense } from "react";
import FallBack from "./components/Loaders/fallBack";
import { router } from "./routes";
import { Toaster } from "react-hot-toast";

export default function App() {
  return (
    <>
      <Toaster position="top-right" toastOptions={{ duration: 5000 }} />
      <Suspense fallback={<FallBack />}>
        <RouterProvider router={router} />
      </Suspense>
    </>
  );
}
