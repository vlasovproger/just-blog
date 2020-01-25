import { action, observable, configure } from "mobx";
import { useStaticRendering } from "mobx-react";
import remotedev from "mobx-remotedev";

const isServer = typeof window === "undefined";

useStaticRendering(isServer);
configure({ enforceActions: "observed" });

class UiStore {
  @observable menuIsOpened = false;
  @action.bound toggleMenuButton() {
    this.menuIsOpened = !this.menuIsOpened;
  }
}

export default remotedev(UiStore, { global: true });
