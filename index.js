let prices = Array.of(5000);
console.log(prices.length);


let prices2 = [500, 700, 1000];
let taxed = Array.from(prices2, (price) => price * 1.05);
console.log(taxed);

let prices3 = [500, 700, 1000];
let totalprice = Array.from(
  prices3,
  function (price) {
    return price + this.listingfee;
  },
  { listingfee: 5 }
);

console.log(totalprice);