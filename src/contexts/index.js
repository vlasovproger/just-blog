import React from "react";
import { UiStore } from "../stores/";
import { BlogService } from "../services";

export const storesContext = React.createContext({
  uiStore: new UiStore(),
});

export const serviceContext = React.createContext({
  blogService: new blogService()
});
