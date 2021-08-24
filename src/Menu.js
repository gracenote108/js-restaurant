import { Page } from "./Page.js";

export class Menu extends Page {
  constructor(root, content) {
    super(root);
    this.banner.createBannerButton("Menu", this.createMenuPage.bind(this));
    this.content = content;
  }

  createMenuPage() {
    this.clearPage();
    this.page.append(this.content);
  }
}
