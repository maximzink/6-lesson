
const submitButton = document.getElementById('submitButton');
const outBlock = document.querySelector('.out');


submitButton.addEventListener('click', function(event) {
    event.preventDefault();

    const inputFields = document.querySelectorAll('.arr');
    
    const formData = {};

    inputFields.forEach(function(input) {
        formData[input.dataset.form] = input.value;
    });

    displayFormData(formData);
});

function displayFormData(formData) {
    const outputHTML = `
        <p>ПІБ: ${formData['ПІБ']}</p>
        <p>Номер телефону: ${formData['Номер телефону']}</p>
        <p>Дата народження: ${formData['Дата народження']}</p>
        <p>Електронна пошта: ${formData['Електронна пошта']}</p>
    `;
    
    outBlock.innerHTML = outputHTML;
}