function createBenefitElement(benefit) {
  const itemElement = document.createElement("li")
  itemElement.className = "benefit d-flex align-items-center gap-3 mb-2"
  itemElement.innerHTML = `<input class="form-check-input rounded-circle" type="checkbox" value="1" id="flexCheckDefault" checked="checked" onclick="return false;"/><label class="form-check-label" for="flexCheckDefault">${benefit}</label>`

  return itemElement
}

function createPlanElement(name, days, subtitle, benefits) {
  const hours = days * 24
  let dayOrDays = ""

  if (days == 1) {
    dayOrDays = "dia"
  } else {
    dayOrDays = "dias"
  }

  const itemElement = document.createElement("div")
  itemElement.className = "card text-dark px-4 py-3"
  itemElement.style = "width: 22rem; min-height: 80%"
  itemElement.innerHTML = `<div class="card-body">
  <div class="card-info">
    <p class="plan-type fw-normal fs-5">${name}</p>
    <h5 class="card-title fs-1 mb-4">
      ${hours} h<span class="text-secondary fs-6"> / ${days} ${dayOrDays} </span>
    </h5>
    <h6 class="card-subtitle mb-2 text-muted">
      ${subtitle}
    </h6>
  </div>

  <form
    name="benefits-form"
    id="benefitis-form"
    action=""
    method="post"
    class="mt-4 d-flex flex-column justify-content-between"
  >
    <ul class="benefits">
      <li class="benefit additional d-flex align-items-center gap-3">
        <img src="../public/plus.svg" alt="Plus Icon" />
        <span class="fst-italic">Adicionais</span>
      </li>
    </ul>

    <button type="submit" class="btn btn-dark p-2 fs-5 mt-3 w-100">
      Escolher Plano
    </button>
  </form>
</div>`

  benefits.forEach((benefit) => {
    const benefitElement = createBenefitElement(benefit)
    const additionalElement = itemElement.querySelector(".additional")

    itemElement
      .querySelector(".benefits")
      .insertBefore(benefitElement, additionalElement)
  })

  return itemElement
}

export { createPlanElement }
