"use strict";

window.onload = function () {
  const submitBtnEl = document.getElementById("submitBtn");
  submitBtnEl.onclick = onSubmitBtnClicked;
};
//cost of rooms
//king 150
// queen 100
//2 twin beds 110

function onSubmitBtnClicked() {
  const checkInEl = document.getElementById("checkIn");
  const daysStayingEl = document.getElementById("daysStaying").value;
  const bedFormEl = document.getElementById("bedForm");

  let selectedOption = document.querySelector("input[name='bedForm']:checked");
  let bedCost = 0;
  if (selectedOption.value == "Queen") {
    bedCost = 250;
  } else if (selectedOption.value == "King") {
    bedCost = 250;
  } else {
    bedCost = 350;
  }

  //
  let selectedOption2 = document.querySelector(
    "input[name='discount']:checked"
  );
  let discountPer = 0;
  if (selectedOption2.value == "None") {
    discountPer = 0.0;
  } else if (selectedOption2.value == "Senior") {
    discountPer = 0.1;
  } else {
    discountPer = 0.2;
  }

  //
  const roomCost = daysStayingEl * bedCost;
  const disTotal = roomCost * discountPer;
  const taxes = (disTotal + roomCost) * 0.12;
  const total = roomCost + disTotal + taxes;

  const roomTotalEl = document.getElementById("roomTotal");
  roomTotalEl.value = roomCost.toFixed(2);
  const discountTotalEl = document.getElementById("discountTotal");
  discountTotalEl.value = disTotal.toFixed(2);
  const taxTotalEl = document.getElementById("taxTotal");
  taxTotalEl.value = taxes.toFixed(2);
  const totalDueEl = document.getElementById("totalDue");
  totalDueEl.value = total.toFixed(2);
}
