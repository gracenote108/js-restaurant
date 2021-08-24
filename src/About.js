import { Page } from "./Page.js";

export class About extends Page {
  constructor(root, content) {
    super(root);
    this.banner.createBannerButton("About", this.createAboutPage.bind(this));
    this.content = content;
  }

  createAboutPage() {
    this.clearPage();
    this.page.append(this.content);
  }
}
