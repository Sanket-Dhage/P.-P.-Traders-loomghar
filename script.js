/* =====================================================
   WHATSAPP NUMBER
===================================================== */

/*
   तुमचा WhatsApp नंबर इथे टाका.

   Example:
   919876543210

   +91, spaces किंवा - वापरू नका.
*/

const WHATSAPP_NUMBER = "919405403455";



/* =====================================================
   PRODUCTS
===================================================== */

const products = [

    /* =================================================
       PRODUCT 1
    ================================================= */

    {
        id: 1,

        name: "Floral Premium Bedsheet",

        category: "bedsheet",

        categoryName: "Bedsheet",

        image: "img/floral-bedsheet.png",

        description:
            "Premium floral printed bedsheet for a beautiful and comfortable bedroom.",

        price: "₹1,499",

        oldPrice: "₹1,999",

        badge: "New"
    },


    /* =================================================
       PRODUCT 2
    ================================================= */

    {
        id: 2,

        name: "Luxury Designer Curtain",

        category: "curtain",

        categoryName: "Curtains",

        image: "img/curtain2.jpg",

        description:
            "Beautiful designer curtain with premium fabric and modern look.",

        price: "₹1,899",

        oldPrice: "₹2,399",

        badge: "NEW"
    },


    /* =================================================
       PRODUCT 3
    ================================================= */

    {
        id: 3,

        name: "Elegant Curtain Set",

        category: "curtain",

        categoryName: "Curtains",

        image: "img/curtain3.jpg",

        description:
            "Elegant curtain set suitable for living room and bedroom interiors.",

        price: "₹2,199",

        oldPrice: "₹2,799",

        badge: "POPULAR"
    },


    /* =================================================
       PRODUCT 4
    ================================================= */

    {
        id: 4,

        name: "Premium Cotton Bedsheet",

        category: "bedsheet",

        categoryName: "Bedsheets",

        image: "img/bedsheet1.jpg",

        description:
            "Soft and comfortable premium cotton bedsheet with beautiful design.",

        price: "₹999",

        oldPrice: "₹1,299",

        badge: "BEST SELLER"
    },


    /* =================================================
       PRODUCT 5
    ================================================= */

    {
        id: 5,

        name: "Designer Bedsheet",

        category: "bedsheet",

        categoryName: "Bedsheets",

        image: "img/bedsheet2.jpg",

        description:
            "Stylish designer bedsheet perfect for modern bedrooms.",

        price: "₹1,299",

        oldPrice: "₹1,599",

        badge: "NEW"
    },


    /* =================================================
       PRODUCT 6
    ================================================= */

    {
        id: 6,

        name: "Floral Bedsheet",

        category: "bedsheet",

        categoryName: "Bedsheets",

        image: "img/bedsheet3.jpg",

        description:
            "Beautiful floral printed bedsheet with soft and comfortable fabric.",

        price: "₹1,099",

        oldPrice: "₹1,399",

        badge: "POPULAR"
    },


    /* =================================================
       PRODUCT 7
    ================================================= */

    {
        id: 7,

        name: "Premium Sofa Cushion",

        category: "cushion",

        categoryName: "Cushions",

        image: "img/cushion1.jpg",

        description:
            "Premium decorative cushion designed for sofa and living room.",

        price: "₹399",

        oldPrice: "₹499",

        badge: "NEW"
    },


    /* =================================================
       PRODUCT 8
    ================================================= */

    {
        id: 8,

        name: "Designer Cushion Set",

        category: "cushion",

        categoryName: "Cushions",

        image: "img/cushion2.jpg",

        description:
            "Beautiful cushion set to enhance your home interior.",

        price: "₹799",

        oldPrice: "₹999",

        badge: "POPULAR"
    },


    /* =================================================
       PRODUCT 9
    ================================================= */

    {
        id: 9,

        name: "Luxury Velvet Cushion",

        category: "cushion",

        categoryName: "Cushions",

        image: "img/cushion3.jpg",

        description:
            "Luxury velvet cushion with premium finish for elegant interiors.",

        price: "₹499",

        oldPrice: "₹699",

        badge: "PREMIUM"
    },


    /* =================================================
       PRODUCT 10
    ================================================= */

    {
        id: 10,

        name: "Modern Window Blind",

        category: "blind",

        categoryName: "Blinds",

        image: "img/blind1.jpg",

        description:
            "Modern window blind suitable for home and office interiors.",

        price: "₹1,299",

        oldPrice: "₹1,699",

        badge: "POPULAR"
    },


    /* =================================================
       PRODUCT 11
    ================================================= */

    {
        id: 11,

        name: "Premium Roller Blind",

        category: "blind",

        categoryName: "Blinds",

        image: "img/blind2.jpg",

        description:
            "Elegant roller blind with modern design and premium finish.",

        price: "₹1,599",

        oldPrice: "₹1,999",

        badge: "NEW"
    },


    /* =================================================
       PRODUCT 12
    ================================================= */

    {
        id: 12,

        name: "Zebra Window Blind",

        category: "blind",

        categoryName: "Blinds",

        image: "img/blind3.jpg",

        description:
            "Stylish zebra blind designed for modern windows.",

        price: "₹1,899",

        oldPrice: "₹2,299",

        badge: "BEST SELLER"
    }

];



/* =====================================================
   PRODUCT CONTAINER
===================================================== */

const productContainer =
    document.getElementById("productContainer");



/* =====================================================
   DISPLAY PRODUCTS
===================================================== */

function displayProducts(productList) {

    productContainer.innerHTML = "";

    if (productList.length === 0) {

        productContainer.innerHTML = `
            <div class="no-product">
                <h3>No Products Found</h3>
                <p>Please check another category.</p>
            </div>
        `;

        return;
    }


    productList.forEach(product => {

        const card = document.createElement("div");

        card.classList.add("product-card");


        card.innerHTML = `

            <div class="product-image">

                <img
                    src="${product.image}"
                    alt="${product.name}"
                    loading="lazy"
                >

                <span class="product-badge">
                    ${product.badge}
                </span>

            </div>


            <div class="product-info">

                <p class="product-category">
                    ${product.categoryName}
                </p>


                <h3>
                    ${product.name}
                </h3>


                <p class="product-description">
                    ${product.description}
                </p>


                <div class="product-bottom">

                    <div class="price">

                        ${product.price}

                        <span class="old-price">
                            ${product.oldPrice}
                        </span>

                    </div>


                    <button
                        class="open-btn"
                        onclick="openProduct(${product.id})"
                    >
                        Open
                    </button>

                </div>

            </div>

        `;


        /* पूर्ण card वर click केल्यावर पण product open होईल */

        card.addEventListener("click", function(event) {

            if (!event.target.closest(".open-btn")) {

                openProduct(product.id);

            }

        });


        productContainer.appendChild(card);

    });

}

function openProduct(productId) {

    const product =
        products.find(item => item.id === productId);


    if (!product) {
        return;
    }


    const modal =
        document.getElementById("productModal");


    document.getElementById("modalProductImage").src =
        product.image;


    document.getElementById("modalProductImage").alt =
        product.name;


    document.getElementById("modalCategory").innerText =
        product.categoryName;


    document.getElementById("modalProductName").innerText =
        product.name;


    document.getElementById("modalDescription").innerText =
        product.description;


    document.getElementById("modalPrice").innerText =
        product.price;


    document.getElementById("modalOldPrice").innerText =
        product.oldPrice;


    document.getElementById("modalBadge").innerText =
        product.badge;


    document.getElementById("modalBuyButton")
        .setAttribute(
            "onclick",
            `buyProduct(${product.id})`
        );


    modal.style.display = "flex";


    document.body.style.overflow = "hidden";

}


function closeProduct() {

    const modal =
        document.getElementById("productModal");


    modal.style.display = "none";


    document.body.style.overflow = "auto";

}

window.addEventListener("click", function(event) {

    const modal =
        document.getElementById("productModal");


    if (event.target === modal) {

        closeProduct();

    }

});


/* =====================================================
   BUY PRODUCT - WHATSAPP
===================================================== */
function buyProduct(productId) {

    const product = products.find(
        item => item.id === productId
    );

    if (!product) {
        return;
    }


    /* Product ची website link तयार करणे */

    const productLink =
        window.location.origin +
        window.location.pathname +
        "?product=" +
        product.id;


    /* WhatsApp Message */

    const message = `Hello,

I am interested in this product.

Product: ${product.name}

Category: ${product.categoryName}

Price: ${product.price}

Description: ${product.description}

Product Link:
${productLink}

Please share more details.

Thank you.`;


    /* WhatsApp Open */

    const whatsappURL =
        `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;


    window.open(
        whatsappURL,
        "_blank"
    );

}



/* =====================================================
   CATEGORY FILTER
===================================================== */

const filterButtons =
    document.querySelectorAll(".filter-btn");


filterButtons.forEach(button => {

    button.addEventListener("click", function () {


        filterButtons.forEach(btn => {

            btn.classList.remove("active");

        });


        this.classList.add("active");


        const category =
            this.getAttribute("data-category");


        if (category === "all") {

            displayProducts(products);

            return;

        }


        const filteredProducts =
            products.filter(
                product =>
                    product.category === category
            );


        displayProducts(filteredProducts);

    });

});



/* =====================================================
   INITIAL LOAD
===================================================== */

displayProducts(products);



/* =========================================
   MOBILE HAMBURGER MENU
========================================= */

const hamburger =
    document.getElementById("hamburger");

const mobileMenu =
    document.getElementById("menu");


hamburger.addEventListener("click", function() {

    mobileMenu.classList.toggle("active");

});