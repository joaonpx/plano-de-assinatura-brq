// (function () {
//   'use strict'

//   var forms = document.querySelectorAll('.needs-validation')

//   Array.prototype.slice.call(forms)
//     .forEach(function (form) {
//       form.addEventListener('submit', function (event) {
//         if (!form.checkValidity()) {
//           event.preventDefault()
//           event.stopPropagation()
//         }

//         form.classList.add('was-validated')
//       }, false)
//     })
// })()

// function showHideDiv()
// {
//   const fisicInput = document.getElementById('fisicPerson')
//   const juridicInput = document.getElementById('juridicPerson')
//   const selectInputs = document.querySelectorAll('.form-check .form-check-input')
//   if (fisicInput.checked){
//     document.getElementById('formPhysical').classList.remove('disabled')
//   }
//   selectInputs.forEach((input) => {
//     input.addEventListener('change', () => {
//       if (input != fisicInput){
//         document.getElementById('formPhysical').classList.add('disabled')
//         document.getElementById('formJuridic').classList.remove('disabled')
//       }
//     })
//   })
// }

// showHideDiv()