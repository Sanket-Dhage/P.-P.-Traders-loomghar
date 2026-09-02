/* =========================================
   PRODUCT DETAILS PAGE
========================================= */


/* URL मधून ID घेणे */

const urlParams =
    new URLSearchParams(window.location.search);


const productId =
    Number(urlParams.get("id"));



/* Product शोधणे */

const selectedProduct =
    products.find(
        product => product.id === productId
    );



/* Product container */

const productDetails =
    document.getElementById("productDetails");



/* =========================================
   PRODUCT NOT FOUND
========================================= */

if (!selectedProduct) {

    productDetails.innerHTML = `

        <div class="product-not-found">

            <h2>Product Not Found</h2>

            <p>
                Sorry, this product is not available.
            </p>

            <a href="index.html#products">

                Back to Products

            </a>

        </div>

    `;

}



/* =========================================
   SHOW PRODUCT
========================================= */

else {

    productDetails.innerHTML = `

        <!-- IMAGE -->

        <div class="product-details-image">


            <span class="details-badge">

                ${selectedProduct.badge}

            </span>


            <img
                src="${selectedProduct.image}"
                alt="${selectedProduct.name}"
            >

        </div>



        <!-- INFORMATION -->

        <div class="product-details-info">


            <p class="details-category">

                ${selectedProduct.categoryName}

            </p>


            <h1>

                ${selectedProduct.name}

            </h1>


            <p class="details-description">

                ${selectedProduct.description}

            </p>


            <!-- PRICE -->

            <div class="details-price">

                <span class="details-current-price">

                    ${selectedProduct.price}

                </span>


                <span class="details-old-price">

                    ${selectedProduct.oldPrice}

                </span>

            </div>



            <!-- FEATURES -->

            <div class="product-note">

                <i class="fa-solid fa-circle-check"></i>

                Premium Quality Product

            </div>


            <div class="product-note">

                <i class="fa-solid fa-house"></i>

                Perfect for your home interiors

            </div>


            <div class="product-note">

                <i class="fa-solid fa-truck"></i>

                Contact us for availability

            </div>



            <!-- BUY NOW -->

            <button
                class="details-buy-btn"
                onclick="buyProductFromDetails()"
            >

                <i class="fa-brands fa-whatsapp"></i>

                Buy Now on WhatsApp

            </button>


        </div>

    `;

}



/* =========================================
   BUY PRODUCT
========================================= */

function buyProductFromDetails() {


    if (!selectedProduct) {

        return;

    }


    /*
       IMPORTANT:
       Product page ची direct link
    */

    const productLink =
        window.location.href;



    /* WhatsApp message */

    const message = `Hello,

I am interested in this product.

Product: ${selectedProduct.name}

Category: ${selectedProduct.categoryName}

Price: ${selectedProduct.price}

Description: ${selectedProduct.description}

Product Link:
${productLink}

Please share more details.

Thank you.`;



    /* WhatsApp URL */

    const whatsappURL =
        `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;



    window.open(
        whatsappURL,
        "_blank"
    );

}