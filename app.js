function toggleForm() {
  document.getElementById("postForm").classList.toggle("hidden");
}

function addItem() {
  const name = document.getElementById("name").value;
  const price = Number(document.getElementById("price").value);
  const contact = document.getElementById("contact").value;
  const onlinePay = document.getElementById("onlinePay").checked;

  if (!name || !price || !contact) {
    alert("Fill all fields");
    return;
  }

  // Listing fee
  alert("Payment simulation: Rs 15 listing fee received ✅");

  let commissionText = "Cash only – no commission";
  let sellerGets = price;

  if (onlinePay) {
    const commission = Math.ceil(price * 0.03);
    sellerGets = price - commission;
    commissionText = `Online pay enabled | Commission: Rs ${commission}`;
  }

  const div = document.createElement("div");
  div.className = "card";

  div.innerHTML = `
    <h3>📖 ${name}</h3>
    <p>Price: Rs ${price}</p>
    <p>${commissionText}</p>
    <p>Seller gets: Rs ${sellerGets}</p>
    <p>Contact: ${contact}</p>
    <button>${onlinePay ? "Pay Online" : "Contact Seller"}</button>
  `;

  document.getElementById("listings").prepend(div);
  document.getElementById("postForm").classList.add("hidden");
}


