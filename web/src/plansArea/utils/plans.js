import { createHoursPlanElement } from "./createElement.js"

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

  monthly: [
    {
      type: "Bronze",
      date: {
        time: "Mensal",
      },
      description: "Perfeito para ocasiões especiais",
      benefits: ["Delivery", "Condutor adicional"],
    },
    {
      type: "Prata",
      date: {
        time: "Trimestral",
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
        time: "Semestral",
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
        time: 0,
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
}

function updatePlans() {
  const hoursCheckbox = document.querySelector(".hours")
  const monthlyCheckbox = document.querySelector(".monthly")

  const checkInputs = document.querySelectorAll(".form-check .form-check-input")

  if (hoursCheckbox.checked) {
    plans.hours.forEach((plan) => {
      const planElement = createHoursPlanElement(
        plan.type,
        plan.date.days,
        plan.description,
        plan.benefits
      )

      document.querySelector(".plans").appendChild(planElement)
    })
  }

  checkInputs.forEach((input) => {
    input.addEventListener("change", () => {
      if (input == hoursCheckbox) {
        let cards = document.querySelectorAll(".card")

        cards.forEach((plan) => {
          let planType = plan.querySelector(".plan-type")

          if (planType.innerText.toLowerCase() == "bronze") {
            const cardTitle = plan.querySelector(".card-title")

            cardTitle.innerHTML = `
            <h5 class="card-title fs-1 mb-4">24 h<span class="text-secondary fs-6"> / 1 dia </span></h5>
            `
          } else if (planType.innerText.toLowerCase() == "prata") {
            const cardTitle = plan.querySelector(".card-title")

            cardTitle.innerHTML = `
            <h5 class="card-title fs-1 mb-4">72 h<span class="text-secondary fs-6"> / 3 dias </span></h5>
            `
          } else if (planType.innerText.toLowerCase() == "ouro") {
            const cardTitle = plan.querySelector(".card-title")

            cardTitle.innerHTML = `
            <h5 class="card-title fs-1 mb-4">120 h<span class="text-secondary fs-6"> / 5 dias </span></h5>
            `
          } else if (planType.innerText.toLowerCase() == "personalizado") {
            const cardTitle = plan.querySelector(".card-title")

            cardTitle.innerHTML = `
            <h5 class="card-title fs-1 mb-4 text-muted"><input type="text" class="hours-input" placeholder="00" aria-label="00" pattern="d*" maxlength="99" wfd-id="id14"> h<span class="text-secondary fs-6"> / dias </span></h5>
            `
          }
        })
      } else if (input == monthlyCheckbox) {
        let cards = document.querySelectorAll(".card")

        cards.forEach((plan) => {
          let planType = plan.querySelector(".plan-type")

          if (planType.innerText.toLowerCase() == "bronze") {
            const cardTitle = plan.querySelector(".card-title")

            cardTitle.innerHTML = "Mensal"
          } else if (planType.innerText.toLowerCase() == "prata") {
            const cardTitle = plan.querySelector(".card-title")

            cardTitle.innerHTML = "Trimestral"
          } else if (planType.innerText.toLowerCase() == "ouro") {
            const cardTitle = plan.querySelector(".card-title")

            cardTitle.innerHTML = "Semestral"
          } else if (planType.innerText.toLowerCase() == "personalizado") {
            const cardTitle = plan.querySelector(".card-title")

            cardTitle.innerHTML = `
            <h5 class="card-title fs-1 mb-4 text-muted"><input type="text" class="months-input" placeholder="00" aria-label="00" pattern="d*" maxlength="99" wfd-id="id14"><span class="text-secondary fs-6"> / meses </span></h5>
            `
          }
        })
      }
    })
  })
}

export { updatePlans }
