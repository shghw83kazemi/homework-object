let order = {
    customer: "Sara",
    totalPrice: 780000,
    isMember: true
};
let Cost;
if (order.totalPrice > 1000000 || order.isMember == true) {
    Cost = 0;
} else {
    Cost = 50000;
}

console.log("Shipping Cost: " + Cost);