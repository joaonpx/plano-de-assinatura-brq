const items = [
  { img: "todos.svg", label: "Todos" },
  { img: "economico.svg", label: "Economico" },
  { img: "inter.svg", label: "Intermediário" },
  { img: "familia.svg", label: "Familia" },
  { img: "suv.svg", label: "Suv" },
  { img: "executivo.svg", label: "Executivo" },
  { img: "utilitario.svg", label: "Utilitarios" },
];

function CreateImageLabelComponent(item) {
  const componentContainer = document.createElement("li");
  const imageElement = document.createElement("img");
  const labelElement = document.createElement("label");

  imageElement.src = `../../public/carFilters/${item.img}`;
  labelElement.textContent = item.label;

  labelElement.className =
    "content-center flex justify-center bg-white h-auto w-full h-full";

  imageElement.className =
    "content-center flex justify-center bg-black p-0 h-auto w-full";

  componentContainer.className =
    "content-center flex flex-col bg-yellow-200 w-full h-full";

  componentContainer.appendChild(imageElement);
  componentContainer.appendChild(labelElement);

  return componentContainer;
}

const containerDiv = document.getElementById("component-container");

if (!containerDiv) {
  console.error(
    'A div com id "component-container" não foi encontrada no documento.'
  );
} else {
  items.forEach((item) => {
    const component = CreateImageLabelComponent(item);
    containerDiv.appendChild(component);
  });
}

const cars = [
  { category: "basic", img: "ônix.svg", name: "ônix", cost: "R$ ?" },
  { category: "basic", img: "ônix.svg", name: "ônix", cost: "R$ ?" },
  { category: "basic", img: "ônix.svg", name: "ônix", cost: "R$ ?" },
  { category: "basic", img: "ônix.svg", name: "ônix", cost: "R$ ?" },
  { category: "basic", img: "ônix.svg", name: "ônix", cost: "R$ ?" },
  { category: "basic", img: "ônix.svg", name: "ônix", cost: "R$ ?" },
  { category: "basic", img: "ônix.svg", name: "ônix", cost: "R$ ?" },
  { category: "basic", img: "ônix.svg", name: "ônix", cost: "R$ ?" },
  { category: "basic", img: "ônix.svg", name: "ônix", cost: "R$ ?" },
  { category: "basic", img: "ônix.svg", name: "ônix", cost: "R$ ?" },
  { category: "basic", img: "ônix.svg", name: "ônix", cost: "R$ ?" },
  { category: "basic", img: "ônix.svg", name: "ônix", cost: "R$ ?" },
  { category: "basic", img: "ônix.svg", name: "ônix", cost: "R$ ?" },
  { category: "basic", img: "ônix.svg", name: "ônix", cost: "R$ ?" },
  { category: "basic", img: "ônix.svg", name: "ônix", cost: "R$ ?" },
  { category: "basic", img: "ônix.svg", name: "ônix", cost: "R$ ?" },
  { category: "basic", img: "ônix.svg", name: "ônix", cost: "R$ ?" },
  { category: "basic", img: "ônix.svg", name: "ônix", cost: "R$ ?" },
  { category: "basic", img: "ônix.svg", name: "ônix", cost: "R$ ?" },
  { category: "basic", img: "ônix.svg", name: "ônix", cost: "R$ ?" },
  { category: "basic", img: "ônix.svg", name: "ônix", cost: "R$ ?" },
  { category: "basic", img: "ônix.svg", name: "ônix", cost: "R$ ?" },
  { category: "basic", img: "ônix.svg", name: "ônix", cost: "R$ ?" },
  { category: "basic", img: "ônix.svg", name: "ônix", cost: "R$ ?" },
];

function CreateCarsCards(cars) {
  const category = document.createElement("p");
  const img = document.createElement("img");
  const name = document.createElement("p");
  const cost = document.createElement("p")

  category.textContent = cars.category
  img.src = `../../public/carsImages/${cars.img}`
  name.textContent = cars.name
  cost.textContent = cars.cost + "/hora"

}
