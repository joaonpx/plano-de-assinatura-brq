import { createPlanElement } from "./createElement.js"

const plans = [
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
  // {
  //   type: "Personalizado",
  //   date: {
  //     days: 0,
  //   },
  //   description: "Personalize sua assinatura conforme sua necessidade:",
  //   benefits: [
  //     "Delivery",
  //     "Condutor adicional",
  //     "Programa de pontuação",
  //     "Notificações personalizadas",
  //     "Troca de veículo flexivel",
  //     "Motorista particular",
  //   ],
  // },
]

function updatePlans() {
  plans.forEach((plan) => {
    const planElement = createPlanElement(
      plan.type,
      plan.date.days,
      plan.description,
      plan.benefits
    )

    document.querySelector(".plans").appendChild(planElement)
  })
}

export { updatePlans }
