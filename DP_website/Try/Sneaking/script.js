const checkoutBtn = document.getElementById('checkout-btn');
const deleteplan = document.getElementById('delete-plan');
const deleteproduct = document.getElementById('delete-product');
const productItem = document.getElementById('product-item');
const planItem = document.getElementById('plan-item');
i=0;

checkoutBtn.addEventListener('click', function() {
    if(i === 1){
        //showTooltip_notify("tooltip-confer",10, -400);
        continue_next();
    }
    else{
        showTooltip_notify("tooltip-confer-1",10, -400);       
    }
    
});

deleteplan.addEventListener('click', function() {
    planItem.style.display = 'none';
    if(productItem.style.display === 'none'){
        updateSubtotal(0);
    }else{
        updateSubtotal(50);
    }
    i=1;
});

deleteproduct.addEventListener('click', function() {
    productItem.style.display = 'none';
    if(planItem.style.display === 'none'){
        updateSubtotal(0);
    }else{
        updateSubtotal(9.99);
    }
});

function updateSubtotal(subtotalValue) {
    var subtotalElement = document.getElementById("subtotal");
    subtotalElement.textContent = "$" + subtotalValue;
}






