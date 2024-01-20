"use client";

import { Provider } from "react-redux";
import { store, persistor } from "./store";
import { PersistGate } from "redux-persist/integration/react";
import Header from "app/Header";

export default function ReduxProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Provider store={store}>
      <PersistGate
        // loading={children}
        persistor={persistor}
      >
        {children}
      </PersistGate>
    </Provider>
  );
}
