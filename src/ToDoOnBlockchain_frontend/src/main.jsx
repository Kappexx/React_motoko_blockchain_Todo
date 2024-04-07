import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./reset.scss";
import "./index.scss";
import { AuthClient } from "@dfinity/auth-client";
import { Provider } from "react-redux";
import store from "../redux/store";

// const init = async () => {
//   ReactDOM.createRoot(document.getElementById("root")).render(
//     <React.StrictMode>
//       <App />
//     </React.StrictMode>
//   );
//   // const authClient = await AuthClient.create();
//   // if (await authClient.isAuthenticated()) {
//   //   await handleAuthenticated(authClient);
//   //   console.log(await authClient.isAuthenticated());
//   // } else {
//   //   await authClient.login({
//   //     identityProvider: "https://identity.ic0.app/#authorize",
//   //     onSuccess: async () => {
//   //       await handleAuthenticated(authClient);
//   //     },
//   //   });
//   // }
//   // async function handleAuthenticated(authClient) {
//   //   ReactDOM.createRoot(document.getElementById("root")).render(
//   //     <React.StrictMode>
//   //       <App />
//   //     </React.StrictMode>
//   //   );
//   // }
// };

// init();
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
