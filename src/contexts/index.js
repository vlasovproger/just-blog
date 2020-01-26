import React from "react";
import { UiStore, BlogStore } from "../stores/";
import { BlogService } from "../services";

export const storesContext = React.createContext({
  uiStore: new UiStore(),
  blogStore: new BlogStore()
});

export const serviceContext = React.createContext({
  blogService: new BlogService()
});
