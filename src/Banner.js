export class Banner {
  static #instance = null;
  #root;
  #bannerButtons = document.createElement("div");

  setRoot(root) {
    this.#root = root;
  }

  createBanner(banner_title) {
    const banner = document.createElement("div");
    banner.classList = "banner";
    this.#root.append(banner);

    const bannerText = document.createElement("div");
    bannerText.classList = "banner-text";
    bannerText.textContent = banner_title;
    banner.append(bannerText);

    this.#bannerButtons.classList = "banner-buttons";
    banner.append(this.#bannerButtons);
  }

  createBannerButton = (text, createPage) => {
    const btnDiv = document.createElement("div");
    btnDiv.classList = "banner-button";
    btnDiv.textContent = text;
    btnDiv.addEventListener("click", createPage);
    this.#bannerButtons.append(btnDiv);
  };

  static getInstance() {
    if (!this.#instance) {
      this.#instance = new Banner();
    }

    return this.#instance;
  }
}
