function createBenefitElement(benefit) {
  const itemElement = document.createElement("li")
  itemElement.className = "benefit d-flex align-items-center gap-3 mb-2"
  itemElement.innerHTML = `
  <input class="form-check-input rounded-circle" type="checkbox" value="1" id="flexCheckDefault" checked="checked" onclick="return false;"/><label class="form-check-label" for="flexCheckDefault">${benefit}</label>
  `

  return itemElement
}

function createBenefitCustomElement(benefit) {
  const itemElement = document.createElement("li")
  itemElement.className = "benefit d-flex align-items-center gap-3 mb-2"
  itemElement.innerHTML = `
  <input class="form-check-input rounded-circle" type="checkbox" value="" id="flexCheckDefault"/><label class="form-check-label" for="flexCheckDefault">${benefit}</label>
  `

  return itemElement
}

function createHoursPlanElement(name, days, subtitle, benefits) {
  if (name.toLowerCase() == "personalizado") {
    const itemElement = document.createElement("div")
    itemElement.className = "card border border-light text-bg-dark px-4 py-3"
    itemElement.style = "width: 22rem; min-height: 80%"
    itemElement.innerHTML = `
    <div class="card-body d-flex flex-column justify-content-between"><div class="card-info"><p class="plan-type fs-5">${name}</p><h5 class="card-title fs-1 mb-4 text-muted"><input type="text" class="hours-input" placeholder="00" aria-label="00" pattern="\d*" maxlength="99"/> h<span class="text-secondary fs-6"> / dias </span></h5><h6 class="card-subtitle mb-2">${subtitle}</h6><ul class="benefits-custom mt-4"><li class="benefit additional d-flex align-items-center gap-3"><svg width="20" height="20" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.6062 0.943589C4.1878 0.945013 0.607356 4.52777 0.60878 8.94617C0.610204 13.3646 4.19296 16.945 8.61136 16.9436C13.0298 16.9422 16.6102 13.3594 16.6088 8.94101C16.6074 4.52261 13.0246 0.942164 8.6062 0.943589ZM12.609 9.7423L9.40904 9.74333L9.41007 12.9433L7.81007 12.9438L7.80904 9.74385L4.60904 9.74488L4.60852 8.14488L7.80852 8.14385L7.80749 4.94385L9.40749 4.94333L9.40852 8.14333L12.6085 8.1423L12.609 9.7423Z" fill="#FFFFFF"/></svg><span class="fst-italic">Adicionais</span></li></ul></div><button type="button" class="btn btn-light p-2 fs-5 mt-4 w-100">Escolher Plano</button></div>
    `

    benefits.forEach((benefit) => {
      const benefitElement = createBenefitCustomElement(benefit)
      const additionalElement = itemElement.querySelector(".additional")

      itemElement
        .querySelector(".benefits-custom")
        .insertBefore(benefitElement, additionalElement)
    })

    return itemElement
  } else {
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
    itemElement.innerHTML = `
    <div class="card-body"><div class="card-info"><p class="plan-type fw-normal fs-5">${name}</p><h5 class="card-title fs-1 mb-4">${hours} h<span class="text-secondary fs-6"> / ${days} ${dayOrDays} </span></h5><h6 class="card-subtitle mb-2 text-muted">${subtitle}</h6></div><form name="benefits-form" id="benefitis-form" action="" method="post" class="mt-4 d-flex flex-column justify-content-between"><ul class="benefits"><li class="benefit additional d-flex align-items-center gap-3"><img src="../public/plus.svg" alt="Plus Icon" /><span class="fst-italic">Adicionais</span></li></ul><button type="submit" class="btn btn-dark p-2 fs-5 mt-3 w-100">Escolher Plano</button></form></div>
    `

    benefits.forEach((benefit) => {
      const benefitElement = createBenefitElement(benefit)
      const additionalElement = itemElement.querySelector(".additional")

      itemElement
        .querySelector(".benefits")
        .insertBefore(benefitElement, additionalElement)
    })

    return itemElement
  }
}

export { createHoursPlanElement }
