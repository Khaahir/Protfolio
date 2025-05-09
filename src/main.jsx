import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Routers from "./routes/Routers";
import { Provider } from "react-redux";
import store from "./Redux/store";

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <StrictMode>
      <Routers />
    </StrictMode>
  </Provider>
);
