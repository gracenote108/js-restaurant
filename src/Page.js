import { Banner } from "./Banner.js";
export class Page {
  root;
  banner = Banner.getInstance();
  page = document.getElementById("page");

  constructor(root) {
    this.root = root;
  }

  clearPage() {
    if (this.page.hasChildNodes()) {
      while (this.page.firstChild) this.page.removeChild(this.page.firstChild);
    }
  }
}
