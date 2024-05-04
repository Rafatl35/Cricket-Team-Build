const allBtn = document.getElementsByClassName("add-btn");

for (const btn of allBtn) {
   btn.addEventListener("click", function (event) {
      const name = event.target.parentNode.parentNode.childNodes[1].innerText;
      const price = event.target.parentNode.parentNode.childNodes[3].childNodes[1].innerText;
      const category = event.target.parentNode.parentNode.childNodes[5].childNodes[1].innerText;

      const selectedContainer = document.getElementById("selected-players-container");

      //update budget
      const budget = getConvertedValue("budget");
      document.getElementById("budget").innerText = budget - parseInt(price);

      const cartCount = getConvertedValue("cart");
      document.getElementById("cart").innerText = cartCount + 1;

      const playerLeft = getConvertedValue("left");
      document.getElementById("left").innerText = playerLeft - 1;






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
   const totalCost = getConvertedValue("total-cost");
   if (status == undefined) {
      document.getElementById("grand-total").innerText = totalCost;
   }
   else {
      const couponCode = document.getElementById("coupon-code").value;
      if(couponCode == "newTeam120"){
         const discountedPrice = totalCost * .2;
         document.getElementById("grand-total").innerText= totalCost - discountedPrice;
      }
      else{
         alert("Please enter valid coupon code")
      }
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
