const allBtn = document.getElementsByClassName("add-btn");

for (const btn of allBtn) {
   btn.addEventListener("click", function (event) {
      const name = event.target.parentNode.parentNode.childNodes[1].innerText;
      const price = event.target.parentNode.parentNode.childNodes[3].childNodes[1].innerText;
      const category = event.target.parentNode.parentNode.childNodes[5].childNodes[1].innerText;

      const selectedContainer = document.getElementById("selected-players-container");
      const div = document.createElement("div");
      div.classList.add("flex", "text-center", "w-full", "justify-around")

      const p1 = document.createElement("p");
      p1.classList.add("text-xl", "font-semibold", "w-1/3");
      const p2 = document.createElement("p");
      p2.classList.add("text-xl", "font-semibold", "w-1/3");
      const p3 = document.createElement("p");
      p3.classList.add("text-xl", "font-semibold", "w-1/3");

      p1.innerText = name;
      p2.innerText = price;
      p3.innerText = category;

      div.appendChild(p1);
      div.appendChild(p2);
      div.appendChild(p3);

      selectedContainer.appendChild(div);

      updateTotalCost(price);
      updateGrandTotal();

   })
}

function updateGrandTotal(status) {
   if (status) {
      console.log('true');
   }
   else {
      const totalCost = getConvertedValue("total-cost");
      document.getElementById("grand-total").innerText = totalCost;
   }
}


function updateTotalCost(value) {
   const totalCost = getConvertedValue("total-cost");
   console.log(totalCost)
   const sum = totalCost + parseInt(value);
   document.getElementById("total-cost").innerText = sum;
}



function getConvertedValue(id) {
   const price = document.getElementById(id).innerText;
   const convertedPrice = parseInt(price);
   return convertedPrice;
}
