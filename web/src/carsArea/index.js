const items = [
  {
    img: "../../public/carFilters/todos.svg",
    label: "Todos",
  },
  {
    img: "../../public/carFilters/economico.svg",
    label: "Economico",
  },
  {
    img: "../../public/carFilters/intermediario.svg",
    label: "Intermediário",
  },
  {
    img: "../../public/carFilters/familia.svg",
    label: "Familia",
  },
  {
    img: "../../public/carFilters/suv.svg",
    label: "Suv",
  },
  {
    img: "../../public/carFilters/executivo.svg",
    label: "Executivo",
  },
  {
    img: "../../public/carFilters/utilitario.svg",
    label: "Utilitarios",
  },
];

function createImageLabelComponent(item) {
  // Cria elementos HTML para a imagem e a label
  const componentContainer = document.createElement("div");
  const imageElement = document.createElement("img");
  const labelElement = document.createElement("label");

  // Define o atributo src da imagem com a URL da imagem do objeto item
  imageElement.src = item.img;

  // Define o texto da label com o texto do objeto item
  labelElement.textContent = item.label;

  // Adiciona a imagem e a label ao container
  componentContainer.appendChild(imageElement);
  componentContainer.appendChild(labelElement);

  // Retorna o container do componente
  return componentContainer;
}

// Itera sobre o array items e cria componentes para cada item
items.forEach((item) => {
  const component = createImageLabelComponent(item);

  // Encontre a div específica onde você deseja inserir o componente
  const containerDiv = document.getElementById("component-container");

  // Adicione o componente à div específica
  if (containerDiv) {
    containerDiv.appendChild(component);
  } else {
    console.error(
      'A div com id "component-container" não foi encontrada no documento.'
    );
  }
});
