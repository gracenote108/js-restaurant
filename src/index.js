import { Banner } from "./Banner.js";
import { Home } from "./Home.js";
import { Menu } from "./Menu.js";
import { About } from "./About";
import { Credit } from "./Credit.js";
import "./styles.css";

const root = document.getElementById("content");

const banner = Banner.getInstance();
banner.setRoot(root);
banner.createBanner("Damodara's Doughnuts");

const page = document.createElement("div");
page.classList = "main-page";
page.id = "page";
root.append(page);

const createContent = (words) => {
  const text = document.createElement("div");
  text.classList = "page-body";
  text.textContent = words;
  return text;
};

const createCreditContent = (text, url) => {
  const link = document.createElement("a");
  link.href = url;
  link.textContent = text;
  return link;
};

const createMenu = (description, image) => {
  const menuItem = document.createElement("div");
  menuItem.classList = "menu-body";

  const menuImage = document.createElement("img");
  menuImage.classList = "menu-image";
  menuImage.src = `./images/${image}`;
  menuItem.append(menuImage);

  const menuDescription = document.createElement("div");
  menuDescription.classList = "menu-description";
  menuDescription.textContent = description;
  menuItem.append(menuDescription);

  return menuItem;
};

const menu = document.createElement("div");

menu.append(
  createMenu(
    "Kreamy Krishna Doughnut full of all sorts of flavors.",
    "krishna-donut.jpg"
  )
);
menu.append(
  createMenu(
    "Boombastic Balarama doughnut full of power and strength.",
    "balarama-donut.jpg"
  )
);
menu.append(
  createMenu(
    "Raspberry Radha doughnut full of the sweetest kind of love.",
    "radha-donut.jpg"
  )
);
menu.append(
  createMenu(
    "Glittering Gauranga doughnut will make your heart shine like gold.",
    "gold-donut.jpg"
  )
);

const home = new Home(
  root,
  createContent(
    "Welcome to Damodara's Doughnuts. Home page \
of the most delicious and purifying doughnuts in existence."
  )
);
const menuPage = new Menu(root, menu);
const about = new About(
  root,
  createMenu(
    "Damodara's Doughnuts is dedicated to making the most pure, hearty, tasty, and healthy doughnuts that has ever existed.",
    "delicious-donuts.jpg"
  )
);

const creditPageBody = document.createElement("div");
creditPageBody.classList = "credit-page";
creditPageBody.append(
  createCreditContent(
    "Donut page background by macrovector.",
    "https://www.freepik.com/vectors/food"
  )
);

creditPageBody.append(
  createCreditContent(
    "Doughnut stack in About page by Racool_studio.",
    "https://www.freepik.com/photos/food"
  )
);

creditPageBody.append(
  createCreditContent(
    "Food vector created by macrovector - www.freepik.com",
    "https://www.freepik.com/vectors/food"
  )
);

creditPageBody.append(
  createCreditContent(
    "Other photos found by doing Google searches.",
    "https://www.google.com"
  )
);

const creditPage = new Credit(root, creditPageBody);

home.createHomePage();

const disclaimer = document.createElement("div");
disclaimer.classList = "disclaimer";
disclaimer.textContent = `All Rights Reserved by Gauranga\n I don't own anything and just using this for educational and/or demonstration purposes.`;
root.append(disclaimer);
