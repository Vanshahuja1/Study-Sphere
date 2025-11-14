export type AppState = {
  loading: boolean;
  setLoading: (v: boolean) => void;
};

export { AppProvider, useApp } from "./AppProvider";
