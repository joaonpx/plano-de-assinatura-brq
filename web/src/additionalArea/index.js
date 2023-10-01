const menuItems = document.querySelectorAll(".menu-item")
const produtos = document.querySelectorAll(".produto")

menuItems.forEach((item) => {
  item.addEventListener("click", () => {
    const category = item.getAttribute("data-category")
    const isActive = item.classList.contains("active")

    produtos.forEach((produto) => {
      const produtoCategory = produto.getAttribute("data-category")

      if (isActive || category === "todos") {
        produto.style.display = "block"
      } else {
        if (category === produtoCategory) {
          produto.style.display = "block"
        } else {
          produto.style.display = "none"
        }
      }
    })

    menuItems.forEach((menuItem) => {
      menuItem.classList.remove("active")
    })

    if (!isActive) {
      item.classList.add("active")
    }
  })
})
