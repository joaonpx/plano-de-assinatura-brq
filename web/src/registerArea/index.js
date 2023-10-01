;(function () {
  "use strict"

  var forms = document.querySelectorAll(".needs-validation")

  Array.prototype.slice.call(forms).forEach(function (form) {
    form.addEventListener(
      "submit",
      function (event) {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }

        form.classList.add("was-validated")
      },
      false
    )
  })
})()

function updateForms() {
  const fisicInput = document.getElementById("fisicPerson")
  const selectInputs = document.querySelectorAll(
    ".form-check .form-check-input"
  )

  if (fisicInput.checked) {
    document.getElementById("formPhysical").classList.remove("disabled")
  }

  selectInputs.forEach((input) => {
    input.addEventListener("change", () => {
      if (input != fisicInput) {
        document.getElementById("formPhysical").classList.add("disabled")
        document.getElementById("formJuridic").classList.remove("disabled")
      } else if (input == fisicInput) {
        document.getElementById("formJuridic").classList.add("disabled")
        document.getElementById("formPhysical").classList.remove("disabled")
      }
    })
  })
}

updateForms()
