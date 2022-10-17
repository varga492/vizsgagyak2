const beers = {
  id: "beers",
  logo: "Best Beers",
  button: "details",
  cards: [
    {
      title: "Mango Bay",
      sub: "Mad Scientist Beer",
      text: "Pale Ale - American",
    },
    {
      title: "Távoli Galaxis",
      sub: "Rothbeer Brewery",
      text: "IPA - American",
    },
    {
      title: "Flying Rabbit AIPA",
      sub: "MONYO Brewing Co.",
      text: "IPA - American",
    },
    {
      title: "Liquid Cocaine",
      sub: "Mad Scientist Beer",
      text: "IPA - Imperial",
    },
    {
      title: "Organic Chocolate Stout",
      sub: "Samuel Smith Old Brewery",
      text: "Stout - English",
    },
    {
      title: "Bracia",
      sub: "Thornbridge Brewery",
      text: "Strong Ale - English",
    },
    {
      title: "Oatmeal Stout",
      sub: "Samuel Smith Old Brewery",
      text: "Stout - Oatmeal",
    },
    {
      title: "Black Tokyo Horizon",
      sub: "BrewDog",
      text: "Stout - American Imperial",
    },
    {
      title: "Vintage Ale",
      sub: "Fuller's",
      text: "Old Ale",
    },
    {
      title: "All the Leaves are Brown",
      sub: "Tempest Brewing Company",
      text: "Brown Ale - American",
    },
  ],
};
console.log(beers);

const headerComponent = (logo) => {
  return `
   <header>
        <div>
            ${logo}
        </div>
        <div>
        </div>
   </header>
    `;
};

const cardComponent = (id, title, sub, text, button) => {
  return `
        <div class="card">
            <span>${id}</span>
            <p>${title}</p>
            <p>${sub}</p>
            <p>${text}</p>
            <button>${button}</button>
        </div>   
    `;
};

function init() {
  const root = document.getElementById("root");
  root.insertAdjacentHTML("afterbegin", headerComponent(beers.logo));
  root.insertAdjacentHTML(
    "beforeend",
    beers.cards
      .map((element, index) =>
        cardComponent(
          index + 1,
          element.title,
          element.sub,
          element.text,
          beers.button
        )
      )
      .join("")
  );
}

window.addEventListener("load", init());
