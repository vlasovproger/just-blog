import { action, observable, configure } from "mobx";
import { useStaticRendering } from "mobx-react";
import remotedev from "mobx-remotedev";

const isServer: boolean | "undefined" = typeof window === "undefined";

useStaticRendering(isServer);
configure({ enforceActions: "observed" });

class UiStore {
  @observable menuIsOpened: boolean = false;
  @action.bound toggleMenuButton(): void {
    this.menuIsOpened = !this.menuIsOpened;
  }
}

export default remotedev(UiStore);
