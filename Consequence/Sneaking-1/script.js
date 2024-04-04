// Function to toggle cart interface visibility
function openCart() {
    const cartInterface = document.getElementById('cart-interface');
    cartInterface.classList.toggle('hidden');
}

i = 0;

// Function to add protection plan to cart
function addProtectionPlan() {
    const cartItems = document.querySelector('.cart-items');
    const protectionPlanItem = document.createElement('div');
    protectionPlanItem.classList.add('item');
    protectionPlanItem.innerHTML = `
    <div class="protection-plan-content">
        <p>Protection Plan: Included</p>
        <p>Price: $9.99</p>
        <button class="close-btn">Delete</button>
</div>
    `;
    cartItems.appendChild(protectionPlanItem);

  

    // Show the plan indicator
    const planIndicator = document.querySelector('.plan-indicator');
    planIndicator.classList.remove('hidden');

    // 点击事件监听器，删除内容并将变量 i 的值设置为 1
  const closeBtn = protectionPlanItem.querySelector('.close-btn');
  closeBtn.addEventListener('click', function() {
      // 删除内容
      protectionPlanItem.remove();
      // 将变量 i 的值设置为 1
      i = 1;
  });
}




// Simulate automatic addition of protection plan to cart when page loads
addProtectionPlan();

  

const checkoutBtn = document.querySelector('.checkout-btn');

checkoutBtn.addEventListener('click', function() {
    if(i === 0){
        alert('You successfully buy the keyboard and protect plan.');
        updateBadge(3);
        showTooltip_card();
    }
    else{
        alert('You successfully buy the keyboard.');
        alert(' Congratulations! You successfully avoid trap.');
        window.location.href = '../Consequence_home.html';

    }
});







