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
        plans.hours.forEach((plan) => {
          const planElement = createHoursPlanElement(
            plan.type,
            plan.date.days,
            plan.description,
            plan.benefits
          )

          document.querySelector(".plans").appendChild(planElement)
        })
      } else if (input == monthlyCheckbox) {
        plans.monthly.forEach((plan) => {
          console.log("change to monthly")
        })
      }
    })
  })
}

export { updatePlans }
