document.getElementById("searchButton").addEventListener("click", (event) => {
  event.preventDefault();
  getProduct();

  async function getProduct() {
    const productTitle = document.getElementById("title");
    const brandName = document.getElementById("brand");
    const productDescription = document.getElementById("description");
    const productPrice = document.getElementById("price");
    const productId = document.getElementById("id");
    // const productCategory = document.getElementById("category");
    // const productImage = document.getElementById("image");
    const inputField = document
      .getElementById("searchInput")
      .value.toLowerCase();
    const productStock = document.getElementById("reviewStock");
    const productRating = document.getElementById("reviewRating");
    const pDiscountPercentage = document.getElementById("reviewDiscount");
    const api = `https://dummyjson.com/products/`;
    const apiProduct = await fetch(`${api}${inputField}`);
    const data = await apiProduct.json();
    // console.log(data);

    productTitle.innerHTML = data.title;
    brandName.innerHTML = data.brand;
    productDescription.innerHTML = data.description;
    productPrice.innerHTML = data.price;
    productId.innerHTML = data.id;
    // productCategory.innerHTML = data.category;
    // image.src = data.images + ".jpg";
    productStock.innerHTML = data.stock;
    productRating.innerHTML = data.rating;
    pDiscountPercentage.innerHTML = data.discountPercentage;

    //     let arr = [
    //       productId,
    //       productTitle,
    //       brandName,
    //       productDescription,
    //       productPrice,
    //       productStock,
    //       productRating,
    //       pDiscountPercentage,
    //       //   productCategory,
    //       //   image,
    //     ];

    //     arr.forEach((item) => {
    //       item.innerHTML = data + item.id;
    //     });
  }
});
