const plans = {
  hours: [
    {
      type: "Bronze",
      date: {
        days: 1,
      },
      description: "Perfeito para ocasiões especiais",
      benefits: ["Delivery", "Condutor adicional"],
    },
    {
      type: "Prata",
      date: {
        days: 3,
      },
      description: "Ideal para curtas viagens",
      benefits: [
        "Delivery",
        "Condutor adicional",
        "Programa de pontuação",
        "Notificações personalizadas",
      ],
    },
    {
      type: "Ouro",
      date: {
        days: 5,
      },
      description: "Ideal para curtas viagens",
      benefits: [
        "Delivery",
        "Condutor adicional",
        "Programa de pontuação",
        "Notificações personalizadas",
        "Troca de veículo flexivel",
        "Motorista particular",
      ],
    },
    {
      type: "Personalizado",
      date: {
        days: 0,
      },
      description: "Personalize sua assinatura conforme sua necessidade:",
      benefits: [
        "Delivery",
        "Condutor adicional",
        "Programa de pontuação",
        "Notificações personalizadas",
        "Troca de veículo flexivel",
        "Motorista particular",
      ],
    },
  ],
};

function createBenefitElement(benefit, benefitIndex) {
  const itemElement = document.createElement("li");
  itemElement.className = "benefit d-flex align-items-center gap-3 mb-2";
  itemElement.innerHTML = `
  <input id="benefit-${benefitIndex}" class="form-check-input rounded-circle" type="checkbox" value="1"  checked="checked" onclick="return false;"/><label class="form-check-label" for="benefit-${benefitIndex}">${benefit}</label>
  `;

  return itemElement;
}

function createBenefitCustomElement(benefit, benefitIndex) {
  const itemElement = document.createElement("li");
  itemElement.className = "benefit d-flex align-items-center gap-3 mb-2";
  itemElement.innerHTML = `
  <input id="benefit-custom-${benefitIndex}" class="form-check-input rounded-circle" type="checkbox" value=""/><label class="form-check-label" for="benefit-custom-${benefitIndex}">${benefit}</label>
  `;

  return itemElement;
}

function createPlanElement(name, days, subtitle, benefits) {
  if (name.toLowerCase() == "personalizado") {
    const itemElement = document.createElement("div");
    itemElement.className = "card border border-light text-bg-dark px-4 py-3";
    itemElement.style = "width: 22rem; min-height: 80%";
    itemElement.innerHTML = `
    <div class="card-body d-flex flex-column justify-content-between"><div class="card-info"><p class="plan-type fs-5">${name}</p><h5 class="card-title fs-1 mb-4 text-muted"><input id="hours-input" type="text" class="hours-input" placeholder="00" aria-label="00" pattern="\d*" maxlength="99"/> h<span class="text-secondary fs-6"> / dias </span></h5><h6 class="card-subtitle mb-2">${subtitle}</h6></div><form name="benefits-form" id="benefitis-form" action="" method="post" class="mt-4 d-flex flex-column justify-content-between"><ul class="benefits-custom"><li class="benefit additional d-flex align-items-center gap-3"><svg width="20" height="20" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.6062 0.943589C4.1878 0.945013 0.607356 4.52777 0.60878 8.94617C0.610204 13.3646 4.19296 16.945 8.61136 16.9436C13.0298 16.9422 16.6102 13.3594 16.6088 8.94101C16.6074 4.52261 13.0246 0.942164 8.6062 0.943589ZM12.609 9.7423L9.40904 9.74333L9.41007 12.9433L7.81007 12.9438L7.80904 9.74385L4.60904 9.74488L4.60852 8.14488L7.80852 8.14385L7.80749 4.94385L9.40749 4.94333L9.40852 8.14333L12.6085 8.1423L12.609 9.7423Z" fill="#FFFFFF"/></svg><span class="fst-italic">Adicionais</span></li></ul><button type="button" class="btn btn-light p-2 fs-5 mt-4 w-100"><a href="../registerArea/index.html">Escolher Plano</a></button></form></div>

    `;

    benefits.forEach((benefit, index) => {
      const benefitElement = createBenefitCustomElement(benefit, index);
      const additionalElement = itemElement.querySelector(".additional");

      itemElement
        .querySelector(".benefits-custom")
        .insertBefore(benefitElement, additionalElement);
    });

    return itemElement;
  } else {
    const hours = days * 24;
    let dayOrDays = "";

    if (days == 1) {
      dayOrDays = "dia";
    } else {
      dayOrDays = "dias";
    }

    const itemElement = document.createElement("div");
    itemElement.className = "card text-dark px-4 py-3";
    itemElement.style = "width: 22rem; min-height: 80%";
    itemElement.innerHTML = `
    <div class="card-body d-flex flex-column justify-content-between"><div class="card-info"><p class="plan-type fw-normal fs-5">${name}</p><h5 class="card-title fs-1 mb-4">${hours} h<span class="text-secondary fs-6"> / ${days} ${dayOrDays}</span></h5><h6 class="card-subtitle mb-2 text-muted">${subtitle}</h6></div><form name="benefits-form" id="benefitis-form" action="" method="post" class="mt-4 d-flex flex-column justify-content-between"><ul class="benefits"><li class="benefit additional d-flex align-items-center gap-3"><svg width="20" height="20" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.6062 0.943589C4.1878 0.945013 0.607356 4.52777 0.60878 8.94617C0.610204 13.3646 4.19296 16.945 8.61136 16.9436C13.0298 16.9422 16.6102 13.3594 16.6088 8.94101C16.6074 4.52261 13.0246 0.942164 8.6062 0.943589ZM12.609 9.7423L9.40904 9.74333L9.41007 12.9433L7.81007 12.9438L7.80904 9.74385L4.60904 9.74488L4.60852 8.14488L7.80852 8.14385L7.80749 4.94385L9.40749 4.94333L9.40852 8.14333L12.6085 8.1423L12.609 9.7423Z" fill="#1C1C1E"/></svg><span class="fst-italic">Adicionais</span></li></ul><button type="submit" class="btn btn-dark p-2 fs-5 w-100"><a href="../registerArea/index.html">Escolher Plano</a></button></form></div>
    `;

    benefits.forEach((benefit, index) => {
      const benefitElement = createBenefitElement(benefit, index);
      const additionalElement = itemElement.querySelector(".additional");

      itemElement
        .querySelector(".benefits")
        .insertBefore(benefitElement, additionalElement);
    });

    return itemElement;
  }
}

function updatePlans() {
  const hoursCheckbox = document.querySelector(".hours");
  const monthlyCheckbox = document.querySelector(".monthly");

  const checkInputs = document.querySelectorAll(
    ".form-check .form-check-input"
  );

  if (hoursCheckbox.checked) {
    plans.hours.forEach((plan) => {
      const planElement = createPlanElement(
        plan.type,
        plan.date.days,
        plan.description,
        plan.benefits
      );

      document.querySelector(".plans").appendChild(planElement);
    });
  }

  checkInputs.forEach((input) => {
    input.addEventListener("change", () => {
      if (input == hoursCheckbox) {
        const cards = document.querySelectorAll(".card");

        cards.forEach((plan) => {
          const planType = plan.querySelector(".plan-type");

          if (planType.innerText.toLowerCase() == "bronze") {
            const cardTitle = plan.querySelector(".card-title");

            cardTitle.innerHTML = `
            <h5 class="card-title fs-1 mb-4">24 h<span class="text-secondary fs-6"> / 1 dia </span></h5>
            `;
          } else if (planType.innerText.toLowerCase() == "prata") {
            const cardTitle = plan.querySelector(".card-title");

            cardTitle.innerHTML = `
            <h5 class="card-title fs-1 mb-4">72 h<span class="text-secondary fs-6"> / 3 dias </span></h5>
            `;
          } else if (planType.innerText.toLowerCase() == "ouro") {
            const cardTitle = plan.querySelector(".card-title");

            cardTitle.innerHTML = `
            <h5 class="card-title fs-1 mb-4">120 h<span class="text-secondary fs-6"> / 5 dias </span></h5>
            `;
          } else if (planType.innerText.toLowerCase() == "personalizado") {
            const cardTitle = plan.querySelector(".card-title");

            cardTitle.innerHTML = `
            <h5 class="card-title fs-1 mb-4 text-muted"><input id="hours-input" type="text" class="hours-input" placeholder="00" aria-label="00" pattern="d*" maxlength="99" wfd-id="id14"> h<span class="text-secondary fs-6"> / dias </span></h5>
            `;
          }
        });
      } else if (input == monthlyCheckbox) {
        const cards = document.querySelectorAll(".card");

        cards.forEach((plan) => {
          const planType = plan.querySelector(".plan-type");

          if (planType.innerText.toLowerCase() == "bronze") {
            const cardTitle = plan.querySelector(".card-title");

            cardTitle.innerHTML = "Mensal";
          } else if (planType.innerText.toLowerCase() == "prata") {
            const cardTitle = plan.querySelector(".card-title");

            cardTitle.innerHTML = "Trimestral";
          } else if (planType.innerText.toLowerCase() == "ouro") {
            const cardTitle = plan.querySelector(".card-title");

            cardTitle.innerHTML = "Semestral";
          } else if (planType.innerText.toLowerCase() == "personalizado") {
            const cardTitle = plan.querySelector(".card-title");

            cardTitle.innerHTML = `
            <h5 class="card-title fs-1 mb-4 text-muted"><input id="months-input" type="text" class="months-input" placeholder="00" aria-label="00" pattern="d*" maxlength="99" wfd-id="id14"><span class="text-secondary fs-6"> / meses </span></h5>
            `;
          }
        });
      }
    });
  });
}

updatePlans();
