import { Page } from "./Page.js";

export class Home extends Page {
  constructor(root, content) {
    super(root);
    this.banner.createBannerButton("Home", this.createHomePage.bind(this));
    this.content = content;
  }

  createHomePage() {
    this.clearPage();
    this.page.append(this.content);
  }
}
