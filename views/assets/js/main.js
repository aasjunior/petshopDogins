const productsWrapperP1 = [...document.querySelectorAll('.productsWrapper')];
const productsWrapperP2 = [...document.querySelectorAll('.secondProductsWrapper')];
const brandsWrapper = [...document.querySelectorAll('.brandsHolder')];

let purchaseFrequently = document.getElementById('purchaseFrequently');
let purchaseFrequentlyContainer = document.querySelectorAll('.purchaseFrequentlyInfo')[0];

productsWrapperP1.forEach((item, i) => {
  const previousButton = [...document.querySelectorAll('.btnPrevFirstProducts')];
  const nextButton = [...document.querySelectorAll('.btnNextFirstProducts')];
  // TODO: Maybe change the size of the scroll
  let wrapperDimensions = item.getBoundingClientRect();
  let wrapperWidth = wrapperDimensions.width;

  previousButton[i].addEventListener('click', () => {
    item.scrollLeft -= wrapperWidth;
  });

  nextButton[i].addEventListener('click', () => {
    item.scrollLeft += wrapperWidth;
  });
});

productsWrapperP2.forEach((item, i) => {
  const previousButton = [...document.querySelectorAll('.btnPrevSecondProducts')];
  const nextButton = [...document.querySelectorAll('.btnNextSecondProducts')];
  // TODO: Maybe change the size of the scroll
  let wrapperDimensions = item.getBoundingClientRect();
  let wrapperWidth = wrapperDimensions.width;

  previousButton[i].addEventListener('click', () => {
    item.scrollLeft -= wrapperWidth;
  });

  nextButton[i].addEventListener('click', () => {
    item.scrollLeft += wrapperWidth;
  });
});

brandsWrapper.forEach((item, i) => {
  const previousButton = [...document.querySelectorAll('.btnPrevPartnerBrands')];
  const nextButton = [...document.querySelectorAll('.btnNextPartnerBrands')];
  let brandWrapperDimension = item.getBoundingClientRect();
  let brandsWrapperWidth = brandWrapperDimension.width;

  previousButton[i].addEventListener('click', () => {
    item.scrollLeft -= brandsWrapperWidth;
  });

  nextButton[i].addEventListener('click', () => {
    item.scrollLeft += brandsWrapperWidth;
  });
});

purchaseFrequently ? purchaseFrequently.addEventListener('click', () => {
  !purchaseFrequently.checked ? purchaseFrequentlyContainer.style.background = "#FF0000" : purchaseFrequentlyContainer.style.background = "#49A971";
}) : null;