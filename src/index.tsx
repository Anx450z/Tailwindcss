import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import { store } from "./app/store";
import { LoadingPill } from "./components/common/LoadingPill";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const App = lazy(() => import("./App"));

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Suspense fallback={<LoadingPill/>}>
        <App />
      </Suspense>
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
