const items = [
  { img: "todos.svg", label: "Todos" },
  { img: "economico.svg", label: "Econômico" },
  { img: "inter.svg", label: "Intermediário" },
  { img: "familia.svg", label: "Familia" },
  { img: "suv.svg", label: "SUV" },
  { img: "executivo.svg", label: "Executivo" },
  { img: "utilitario.svg", label: "Utilitario" },
];

function CreateImageLabelComponent(item) {
  const componentContainer = document.createElement("li");
  const imageElement = document.createElement("img");
  const labelElement = document.createElement("label");

  imageElement.src = `../../public/carFilters/${item.img}`;
  labelElement.textContent = item.label;

  labelElement.className =
    "content-center flex justify-center text-white h-auto w-full h-full";

  imageElement.className =
    "content-center flex justify-center p-0 h-auto w-full";

  componentContainer.className =
    "place-content-end flex pointer flex-col w-full h-full";

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
    component.setAttribute("data-category", item.label);
    component.addEventListener("click", () => filterCarsByCategory(item.label));
    containerDiv.appendChild(component);
  });
}

const cars = [
  {
    category: "Econômico",
    img: "onix.webp",
    name: "Ônix",
    cost: "R$10",
  },
  {
    category: "Econômico",
    img: "gol.webp",
    name: "Gol",
    cost: "R$10",
  },
  {
    category: "Executivo",
    img: "audia8.webp",
    name: "Audi A8",
    cost: "R$120",
  },
  {
    category: "Executivo",
    img: "bmwlux.webp",
    name: "BMW 530e",
    cost: "R$102",
  },
  {
    category: "Intermediário",
    img: "civic.webp",
    name: "Civic",
    cost: "R$30",
  },
  {
    category: "Utilitario",
    img: "dodgeram.webp",
    name: "Dodge Ram",
    cost: "R$80",
  },
  {
    category: "Econômico",
    img: "fiatuno.webp",
    name: "Fiat Uno",
    cost: "R$5",
  },
  { category: "SUV", img: "havaal.webp", name: "Havaal H6", cost: "R$50" },
  {
    category: "Familia",
    img: "mercedesjeep.webp",
    name: "AMG G63 ",
    cost: "R$80",
  },
  {
    category: "Intermediário",
    img: "prisma.webp",
    name: "Prisma",
    cost: "R$20",
  },
  {
    category: "Intermediário",
    img: "prius.webp",
    name: "Prius",
    cost: "R$25",
  },
  { category: "Familia", img: "renegade.webp", name: "Renegade", cost: "R$35" },
  {
    category: "Executivo",
    img: "rollsroyce.webp",
    name: "Rolls Royce",
    cost: "R$1000",
  },
  { category: "SUV", img: "tiggo7.webp", name: "Tiggo 7", cost: "R$100" },
  {
    category: "Utilitario",
    img: "mercedessprinter.webp",
    name: "Mercedes Sprinter",
    cost: "R$45",
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
  cost.textContent = "total equivalente à: " + costText + "/hora";
  return cost;
}

function CreateCarComponent(car) {
  const componentContainer = document.createElement("div");
  const categoryElement = createCategory(car.category);
  const imageElement = createImage(car.img);
  const nameElement = createName(car.name);
  const costElement = createCost(car.cost);

  componentContainer.id = "car-component";

  componentContainer.className = "p-6 border border-white rounded";

  categoryElement.className = " font-medium text-white";

  imageElement.className = "rounded-lg h-50 w-100";

  nameElement.className = "font-bold text-xl text-white ";

  costElement.className = "text-white text-xl flex justify-center";

  componentContainer.appendChild(categoryElement);
  componentContainer.appendChild(imageElement);
  componentContainer.appendChild(nameElement);
  componentContainer.appendChild(costElement);

  const chooseButton = document.createElement("button");
  chooseButton.textContent = "Escolher Veículo";
  chooseButton.className =
    "text-black p-2 flex w-full justify-center bg-white py-8 rounded";

  chooseButton.addEventListener("click", function () {
    window.location.href = "../additionalArea/index.html";
  });

  componentContainer.appendChild(chooseButton);

  return componentContainer;
}

document
  .querySelectorAll("#category-dropdown .dropdown-item")
  .forEach((item) => {
    item.addEventListener("click", () => {
      const selectedCategory = item.textContent;
      filterCarsByCategory(selectedCategory);
    });
  });

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

  filterCarsByCategory("Todos");
});

function filterCarsByCategory(category) {
  const carComponents = document.querySelectorAll("#car-component");

  carComponents.forEach((carComponent) => {
    const carCategory = carComponent.querySelector(".font-medium").textContent;

    if (category === "Todos" || carCategory === category) {
      carComponent.style.display = "block";
    } else {
      carComponent.style.display = "none";
    }
  });
}

const searchForm = document.getElementById("search-form");

if (!searchForm) {
  console.error(
    'O formulário com id "search-form" não foi encontrado no documento.'
  );
} else {
  const searchInput = document.getElementById("search-input");

  searchInput.addEventListener("input", function (event) {
    const searchTerm = event.target.value.toLowerCase();
    filterCarsByName(searchTerm);
  });

  // Chame a função para garantir que todos os carros sejam exibidos inicialmente
  filterCarsByName("");
}

function filterCarsByName(searchTerm) {
  const carComponents = document.querySelectorAll("#car-component");

  carComponents.forEach((carComponent) => {
    const carNameElement = carComponent.querySelector(".font-bold");
    const carName = carNameElement.textContent.toLowerCase();

    if (carName.includes(searchTerm) || searchTerm === "") {
      carComponent.style.display = "block";
    } else {
      carComponent.style.display = "none";
    }
  });
}
