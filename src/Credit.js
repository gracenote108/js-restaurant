import { Page } from "./Page.js";

export class Credit extends Page {
  constructor(root, content) {
    super(root);
    this.banner.createBannerButton("Credit", this.createCreditPage.bind(this));
    this.content = content;
  }

  createCreditPage() {
    this.clearPage();
    this.page.append(this.content);
  }
}
