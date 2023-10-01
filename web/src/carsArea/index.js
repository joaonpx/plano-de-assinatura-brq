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
  {
    category: "Econômico",
    img: "onix.webp",
    name: "Ônix",
    cost: "R$ 10,00",
  },
  {
    category: "Econômico",
    img: "gol.webp",
    name: "Gol",
    cost: "R$ 10,00",
  },
  {
    category: "Executivo",
    img: "audia8.webp",
    name: "Audi A8",
    cost: "R$ 120,00",
  },
  {
    category: "Executivo",
    img: "bmwlux.webp",
    name: "BMW 530e",
    cost: "R$ 102,00",
  },
  {
    category: "Intermediário",
    img: "civic.webp",
    name: "Civic",
    cost: "R$ 30,00",
  },
  {
    category: "Utilitário",
    img: "dodgeram.webp",
    name: "Dodge Ram",
    cost: "R$ 80,00",
  },
  {
    category: "Econômico",
    img: "fiatuno.webp",
    name: "Fiat Uno",
    cost: "R$ 5,00",
  },
  { category: "SUV", img: "havaal.webp", name: "Havaal H6", cost: "R$ 50,00" },
  {
    category: "SUV",
    img: "mercedesjeep.webp",
    name: "AM G63 ",
    cost: "R$ 80,00",
  },
  {
    category: "Intermediário",
    img: "prisma.webp",
    name: "Prisma",
    cost: "R$ 20,00",
  },
  {
    category: "Intermediário",
    img: "prius.webp",
    name: "Prius",
    cost: "R$ 25,00",
  },
  { category: "SUV", img: "renegade.webp", name: "Renegade", cost: "R$ 35,00" },
  {
    category: "Excutivo",
    img: "rollsroyce.webp",
    name: "Rolls Royce",
    cost: "R$ 1000,00",
  },
  { category: "SUV", img: "tiggo7.webp", name: "Tiggo 7", cost: "R$ 100,00" },
  {
    category: "Utilitário",
    img: "mercedessprinter.webp",
    name: "Mercedes Sprinter",
    cost: "R$ 45,00",
  },
];

function createCategory(categoryText) {
  const category = document.createElement("p");
  category.textContent = categoryText;
  return category;
}

function createImage(imageSrc) {
  const img = document.createElement("img");
  img.src = `../../public/carsImages/${imageSrc}`;
  return img;
}

function createName(nameText) {
  const name = document.createElement("p");
  name.textContent = nameText;
  return name;
}

function createCost(costText) {
  const cost = document.createElement("p");
  cost.textContent = costText + "/hora";
  return cost;
}

function CreateCarComponent(car) {
  const componentContainer = document.createElement("div");
  const categoryElement = createCategory(car.category);
  const imageElement = createImage(car.img);
  const nameElement = createName(car.name);
  const costElement = createCost(car.cost);

  componentContainer.className = "car-component";

  componentContainer.className = "p-6 border-2 border-white rounded";

  categoryElement.className =
    "content-center flex justify-center bg-white h-auto w-full h-full";

  imageElement.className = "";

  nameElement.className = "";

  costElement.className = "";

  componentContainer.appendChild(categoryElement);
  componentContainer.appendChild(imageElement);
  componentContainer.appendChild(nameElement);
  componentContainer.appendChild(costElement);

  const chooseButton = document.createElement("button");
  chooseButton.textContent = "Escolher Veículo";
  componentContainer.appendChild(chooseButton);

  return componentContainer;
}

document.addEventListener("DOMContentLoaded", function () {
  const carContainer = document.getElementById("car-container");

  if (!carContainer) {
    console.error(
      'A div com id "car-container" não foi encontrada no documento.'
    );
  } else {
    cars.forEach((car) => {
      const carComponent = CreateCarComponent(car);
      carContainer.appendChild(carComponent);
    });
  }
});
