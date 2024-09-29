const toggle = document.querySelectorAll(".toggle-btn");
for (const navToggle of toggle) {
  navToggle.addEventListener("click", function (event) {
    if (event.target.innerText === "History") {
      document.querySelector(".history").classList.remove("hidden");
      document.querySelectorAll(".donation1").forEach((donation) => {
        donation.classList.add("hidden");
      });
    } else {
      document.querySelector(".history").classList.add("hidden");
      document.querySelectorAll(".donation1").forEach((donation) => {
        donation.classList.remove("hidden");
      });
    }
  });
}

let donateButtons = document.querySelectorAll(".donate-btn");

donateButtons.forEach((button, index) => {
  button.addEventListener("click", function () {
    let initialAmount = document.querySelector(".initial-amount");
    let donateAmount = document.querySelectorAll(".donate-amount")[index];
    let amountInput = document.querySelectorAll(".amount-input")[index];

    let amountValue = amountInput.value;
    let donateAmountValue = donateAmount.innerText;
    let initialAmountValue = initialAmount.innerText;

    if (!amountValue.match(/^\d+$/)) {
      alert("Please enter a valid number");
    } else {
      let donateValue = parseInt(donateAmountValue);
      let donationInputValue = parseInt(amountValue);
      let initialValue = parseInt(initialAmountValue);
      let totalAmount = donateValue + donationInputValue;

      if (initialValue >= donationInputValue) {
        let decreaseAmount = initialValue - donationInputValue;
        initialAmount.innerText = decreaseAmount;
        donateAmount.innerText = totalAmount;

        alert(`Thank you for your donation of ${donationInputValue} BDT!`);
        let historySection = document.querySelector(".history");
        let donationMessage = "";

        if (index === 0) {
          donationMessage = `${donationInputValue} BDT Donated for Flood at Noakhali, Bangladesh`;
        } else if (index === 1) {
          donationMessage = `${donationInputValue} BDT Donated for Flood at Feni, Bangladesh`;
        } else {
          donationMessage = `${donationInputValue} BDT Donated for Aid for Injured in the Quota Movement, Bangladesh`;
        }

        let historyItem = document.createElement("div");
        historyItem.innerHTML = `
          <h3 class="font-bold text-xl text-black">${donationMessage}</h3>
          <p>Date: ${new Date()}</p>
        `;
        historySection.appendChild(historyItem);
      } else {
        alert("Not enough balance");
      }
    }
  });
});
