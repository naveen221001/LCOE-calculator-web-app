document.addEventListener("DOMContentLoaded", function () {
    const costInput = document.getElementById("cost");
    const capacityInput = document.getElementById("capacity");
    const lifetimeInput = document.getElementById("lifetime");
    const outputInput = document.getElementById("output");
    const resultDiv = document.getElementById("result");
    const calculateButton = document.querySelector("button");

    calculateButton.addEventListener("click", function () {
        let cost = parseFloat(costInput.value);
        let capacity = parseFloat(capacityInput.value);
        let lifetime = parseFloat(lifetimeInput.value);
        let output = parseFloat(outputInput.value);

        if (isNaN(cost) || isNaN(capacity) || isNaN(lifetime) || isNaN(output) || output === 0) {
            resultDiv.innerText = "Please enter valid inputs.";
            resultDiv.style.color = "red";
            return;
        }

        let lcoe = (cost / (output * lifetime)).toFixed(4);
        resultDiv.innerText = `LCOE: $${lcoe} per kWh`;
        resultDiv.style.color = "#e76f51";
    });
});
