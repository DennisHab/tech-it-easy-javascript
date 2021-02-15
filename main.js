// VOORRAAD ARRAY MET TV'S
const inventory = [
  {
    type: '43PUS6504/12',
    name: '4K TV',
    brand: 'Philips',
    price: 379,
    availableSizes: [43, 50, 58, 65],
    refreshRate: 50,
    screenType: 'LED',
    screenQuality: 'Ultra HD/4K',
    smartTv: true,
    options: {
      wifi: true,
      speech: false,
      hdr: true,
      bluetooth: false,
      ambiLight: false,
    },
    originalStock: 23,
    sold: 2,
  },
  {
    type: 'NH3216SMART',
    name: 'HD smart TV',
    brand: 'Nikkei',
    price: 159,
    availableSizes: [32],
    refreshRate: 100,
    screenType: 'LED',
    screenQuality: 'HD ready',
    smartTv: true,
    options: {
      wifi: true,
      speech: false,
      hdr: false,
      bluetooth: false,
      ambiLight: false,
    },
    originalStock: 4,
    sold: 4,
  },
  {
    type: 'QE55Q60T',
    name: '4K QLED TV',
    brand: 'Samsung',
    price: 709,
    availableSizes: [43, 50, 55, 58, 65],
    refreshRate: 60,
    screenType: 'QLED',
    screenQuality: 'Ultra HD/4K',
    smartTv: true,
    options: {
      wifi: true,
      speech: true,
      hdr: true,
      bluetooth: true,
      ambiLight: false,
    },
    originalStock: 7,
    sold: 0,
  },
  {
    type: '43HAK6152',
    name: 'Ultra HD SMART TV',
    brand: 'Hitachi',
    price: 349,
    availableSizes: [43, 50, 55, 58],
    refreshRate: 60,
    screenType: 'LCD',
    screenQuality: 'Ultra HD/4K',
    smartTv: true,
    options: {
      wifi: true,
      speech: true,
      hdr: true,
      bluetooth: true,
      ambiLight: false,
    },
    originalStock: 5,
    sold: 5,
  },
  {
    type: '50PUS7304/12',
    name: 'The One 4K TV',
    brand: 'Philips',
    price: 479,
    availableSizes: [43, 50, 55, 58, 65, 70],
    refreshRate: 50,
    screenType: 'LED',
    screenQuality: 'Ultra HD/4K',
    smartTv: true,
    options: {
      wifi: true,
      speech: true,
      hdr: true,
      bluetooth: true,
      ambiLight: true,
    },
    originalStock: 8,
    sold: 3,
  },
  {
    type: '55PUS7805',
    name: '4K LED TV',
    brand: 'Philips',
    price: 689,
    availableSizes: [55],
    refreshRate: 100,
    screenType: 'LED',
    screenQuality: 'Ultra HD/4K',
    smartTv: true,
    options: {
      wifi: true,
      speech: false,
      hdr: true,
      bluetooth: false,
      ambiLight: true,
    },
    originalStock: 6,
    sold: 3,
  },
  {
    type: 'B2450HD',
    name: 'LED TV',
    brand: 'Brandt',
    price: 109,
    availableSizes: [24],
    refreshRate: 60,
    screenType: 'LED',
    screenQuality: 'Full HD',
    smartTv: false,
    options: {
      wifi: false,
      speech: false,
      hdr: false,
      bluetooth: false,
      ambiLight: false,
    },
    originalStock: 10,
    sold: 8,
  },
  {
    type: '32WL1A63DG',
    name: 'HD TV',
    brand: 'Toshiba',
    price: 161,
    availableSizes: [32],
    refreshRate: 50,
    screenType: 'LED',
    screenQuality: 'Full HD',
    smartTv: false,
    options: {
      wifi: false,
      speech: false,
      hdr: true,
      bluetooth: false,
      ambiLight: false,
    },
    originalStock: 10,
    sold: 8,
  },
];
// Calculate TV's still to be sold
const tvToBeSold = (televisions) => televisions.reduce((total, television) => (total += television.originalStock - television.sold), 0);

//Set variable for TV's still to be sold
const tvCount = tvToBeSold(inventory);
//Get element on HTML and add TV's to be sold to counter
const tvCountSite = document.getElementById('toBeSold');
tvCountSite.textContent = tvCount.toString();
//Array method for finding all TV names
const allTvNames = inventory.map(television => television.name);
//Array method for finding all sold out TV's
const soldOutTv = inventory.filter((television) => {
  if (television.sold === television.originalStock)
    return true;
})
//Array method for finding all ambilight TV's
const ambiLightTV = inventory.filter((television) => {
  return television.options.ambiLight === true;
})
//Array method to sort prices of TV's from high to low
const pricesHighToLow = inventory.sort((a, b) => {
  return b.price - a.price;
})
//Function to calculate revenue goal
function calculateRevenueGoal(televisions) {
  let count = 0
  for (let i = 0; i < televisions.length; i++) {
    const revenueGoal = televisions[i].price * televisions[i].originalStock
    count = count + revenueGoal
  }
  return count
}
//Implementation of above function on website
const revenueCount = calculateRevenueGoal(inventory)
const revenueCountSite = document.getElementById('optimalRevenue')
revenueCountSite.textContent = "€ " + revenueCount.toString()
//Function to calculate revenue until now
function calculateActualRevenue(televisions) {
  let count = 0
  for (let i = 0; i < televisions.length; i++) {
    const actualRevenue = televisions[i].price * televisions[i].sold
    count = count + actualRevenue
  }
  return count
}
//Implementation of above function on website
const actualRevenueCount = calculateActualRevenue(inventory)
const actualRevenueCountSite = document.getElementById('actualRevenue')
actualRevenueCountSite.textContent = "€ " + actualRevenueCount.toString()
//Function to return TV name & type in string
function generateStringTvName(television) {
  return television.brand + " " + television.type + ' - ' + television.name
}
//Function to return price with euro sign
function generateTVprice(television) {
  return '€'+television.price+',-'
}
//Function to display screen sizes in inch & cm
function getScreenSizes(television) {
  const tvSizes = television.availableSizes.map(size => {
    const sizeRoundedCm = Math.round(size * 2.54);
    return size + " inch (" + sizeRoundedCm + " cm)";
  })
  return tvSizes.join(" | ");
}
//Function to display one television out of array
function displayOneTelevision(television) {
  return generateStringTvName(television) + '\n' + generateTVprice(television) + '\n' + getScreenSizes(television)
}
//Function to display complete array of televisions
function displayAllTelevisions(televisions) {
  let printThis = "";
  for (let i = 0; i < televisions.length; i++) {
    printThis += '<b>' + generateStringTvName(televisions[i]) + '</b>' + '<br>' + generateTVprice(televisions[i]) + '<br>' + getScreenSizes(televisions[i]) + '<br><br>'
  }
  return printThis
}
//Implementation of above function on website
const parent = document.getElementById('showTV')
parent.innerHTML = (displayAllTelevisions(inventory))
//Function to display TV's sorted by price low to high
function displayAllTelevisionsSorted(televisions) {
  const sortTvByPrice = televisions.sort((a, b) => {
    return a.price - b.price });
  return displayAllTelevisions(televisions);
}
//Implementation of above function on website
const sortTvParent = document.getElementById('sortByPrice')
sortTvParent.addEventListener('click',() => {
  parent.innerHTML =displayAllTelevisionsSorted(inventory)
})
//Implementation of sort by Ambilight
const sortByAmbilight = document.getElementById('sortByAmbilight')
sortByAmbilight.addEventListener('click', () => {
  parent.innerHTML = displayAllTelevisions(ambiLightTV)
})
//Implementation of showing only sold out TV's
const sortBySoldOut = document.getElementById('soldOut')
sortBySoldOut.addEventListener('click', ()=> {
  parent.innerHTML = displayAllTelevisions(soldOutTv)
})












