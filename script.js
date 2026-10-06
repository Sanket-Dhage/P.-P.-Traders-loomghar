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

        name: "Palash King Size Bedsheet",

        category: "bedsheet",

        categoryName: "Bedsheet",

        image: "img/floral-bedsheet.png",

        description:
            "1 BEDSHEET : 275cms x 270cms\n2 PILLOW COVERS : 43CMS x 69cms",

        price: "₹1,800",
        oldPrice: "₹2,200",

        

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

        image: "img/curtain1.png",

        description:
           "Beautiful designer curtain with premium fabric and modern look.",
//"5 FEET CURTAIN : 200 to 700\n7 FEET CURTAIN : 250 to 900\n9 FEET CURTAIN : 600 to 800\nDohar : 450 to 2100",
        price: "Customisation Available",

        oldPrice: "",

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

        image: "img/curtain2.png",

        description:
            "Elegant curtain set suitable for living room and bedroom interiors.",
//"5 FEET CURTAIN : 200 to 700\n7 FEET CURTAIN : 250 to 900\n9 FEET CURTAIN : 600 to 800\nDohar : 450 to 2100",
        price: "Customisation Available",

        oldPrice: "",

        badge: "POPULAR"
    },


    /* =================================================
       PRODUCT 4
    ================================================= */

    {
    id: 4,
    name: "Floral Premium Bedsheet",
    category: "bedsheet",
    image: "img/bedshit2.png",

    description: "1 BEDSHEET : 275cms x 270cms\n2, PILLOW COVERS : 43CMS x 69cms",

    price:  "₹1,450",
    oldPrice: "₹1,800",
    badge: "NEW"
},

    /* =================================================
       PRODUCT 5
    ================================================= */

    {
        id: 5,

        name: "Empress King Size Bedsheet",

        category: "bedsheet",

        categoryName: "Bedsheets",

        image: "img/bedsheets4.png",

        description:
            "Stylish designer bedsheet perfect for modern bedrooms.",

        price: "₹1,400",

        oldPrice:"₹1,800",

        badge: "NEW"
    },


    /* =================================================
       PRODUCT 6
    ================================================= */

    {
        id: 6,

        name: "Kalakriti king size Bedsheet",

        category: "bedsheet",

        categoryName: "Bedsheets",

        image: "img/bedseet3.png",

        description:
             "1 BEDSHEET : 275cms x 270cms\n2 ,PILLOW COVERS : 43CMS x 69cms",
        price: "₹1,200",

        oldPrice: "₹1,500",

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

        image: "img/cushion1.jpeg",

        description:
            "Premium decorative cushion designed for sofa and living room.",

        price: 
        "Available",

        oldPrice: "",

        badge: "NEW"
    },


    /* =================================================
       PRODUCT 8
    ================================================= */

   {
        id: 8,

        name: "Elegant Curtain Set",

        category: "curtain",

        categoryName: "Curtains",

        image: "img/curtain3.png",

        description:
            "Elegant curtain set suitable for living room and bedroom interiors.",
               //"5 FEET CURTAIN : 200 to 700\n7 FEET CURTAIN : 250 to 900\n9 FEET CURTAIN : 600 to 800\nDohar : 450 to 2100",
        price: "Customisation Available",

        oldPrice: "",

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

        image: "img/cushion3.jpeg",

        description:
            "Luxury velvet cushion with premium finish for elegant interiors.",

        price: 
        "Available",

        oldPrice: "",

        badge: "PREMIUM"
    },


    /* =================================================
       PRODUCT 10
    ================================================= */

    {
        id: 10,

        name: "Modern Window Blind And Wallpaper",

        category: "blind",

        categoryName: "Blind/Wallpaperr",

        image: "img/blinds1.png",

        description:
            " suitable for home and office interiors.",

        price: "Customisation Available",

        oldPrice: "",

        badge: "POPULAR"
    },


    /* =================================================
       PRODUCT 11
    ================================================= */

    {
        id: 11,

        name: "Premium Blind And Wallpaper",

        category: "blind",

        categoryName: "Blind/Wallpaper",

        image: "img/blinds3.png",

        description:
            "Elegant Wallpaper & blind with modern design and premium finish.",

        price: "Customisation Available",

        oldPrice: "",

        badge: "NEW"
    },


    /* =================================================
       PRODUCT 12
    ================================================= */

    {
        id: 12,

        name: " Window Blind And Wallpaper",

        category: "blind",

        categoryName: "Blind/Wallpaper",

        image: "img/blinds2.png",

        description:
            "Stylish Wallpaper &blind designed for modern Home.",

        price: "Customisation Available",

        oldPrice: "",

        badge: "BEST SELLER"
    },

    /* =================================================
       PRODUCT 13
    ================================================= */

    {
        id: 13,

        name: "Premium Doormats & Mats",

        category: "doormat",

        categoryName: "Doormats",

        image: "img/doormats1.png",

        description:
            "Stylish Doormats designed for modern .",

        price: " ₹50 - ₹500",

        oldPrice: "",

        badge: "BEST SELLER"
    },

    /* =================================================
       PRODUCT 14
    ================================================= */

    {
        id: 14,

        name: "Premium Towels",

        category: "towel",

        categoryName: "Towels",

        image: "img/towels1.jpeg",

        description:
            "pack - 1 pis\nsize - 5 x 150",

        price: "₹500",

        oldPrice: "₹800",

        badge: "BEST SELLER"
    },

    /* =================================================
       PRODUCT 15
    ================================================= */

    {
        id: 15,

        name: "Modern Towels",

        category: "towel",

        categoryName: "Towels",

        image: "img/towels2.jpeg",

        description:
            "pack - 2 pis\nsize - 0.40 x 0.60",

        price: "₹240",

        oldPrice: "₹370",

        badge: "BEST SELLER"
    },

    /* =================================================
       PRODUCT 16
    ================================================= */

    {
        id: 16,

        name: "Premium Towels",

        category: "towel",

        categoryName: "Towels",

        image: "img/towels3.jpeg",

        description:
            "pack - 3 pis\nsize - 0.30 x 0.30",

        price: "₹150",

        oldPrice: "₹300",

        badge: "BEST SELLER"
    }

    ,
    
    /* =================================================
       PRODUCT 17
    ================================================= */

    {
        id: 17,

        name: "Premium SB Blankets",

        category: "blanket",

        categoryName: "Blankets",

        image: "img/blankets1.jpeg",

        description:
            "Stylish Blankets designed for singal bed .",

        price: "₹670 - ₹1100 ",

        oldPrice: "",

        badge: "BEST SELLER"
    }


,
/* =================================================
       PRODUCT 18
    ================================================= */

{
        id: 18,

        name: " Sleepwell Matteresses",

        category: "Matteresses",

        categoryName: "Matteresses",

        image: "img/matresses2.jpg",

        description:
            "Stylish Matteresses designed for modern home .",

        price: " Available",

        oldPrice: "",

        badge: "BEST SELLER"
    },

/* =================================================
       PRODUCT 19
    ================================================= */



{
        id: 19,

        name: "Memory Pillow",

        category: "cushion",

        categoryName: "Cushions",

        image: "img/memory.webp",
 
        description:
            "Orthopedic Contour Memory Foam Pillow for Neck & Spine Support",

        price: 
        "₹900",

        oldPrice: "",

        badge: "PREMIUM"
    },

/* =================================================
       PRODUCT 20
    ================================================= */

    {
        id: 20,

        name: "Cervical Pillow",

        category: "cushion",

        categoryName: "Cushions",

        image: "img/pillow cervical.jpg",

        description:
            "The MEDEMOVE Cervical Pillow PU Foam is expertly designed to provide optimal neck and spinal support.",

        price: 
        "₹750",

        oldPrice: "",

        badge: "PREMIUM"
    },


/* =================================================
       PRODUCT 21
    ================================================= */

    {
        id: 21,

        
        name: "Premium Curtain",

        category: "curtain",

        categoryName: "curtains",

        image: "img/Textured Geometric Curtains in a Cozy Interior.png",

        description:
           // "The MEDEMOVE Cervical Pillow PU Foam is expertly designed to provide optimal neck and spinal support.",
               "9 FEET CURTAIN ",
        price: 
        "₹600 - ₹850",

        oldPrice: "",

        badge: "PREMIUM"
    },



    /* =================================================
       PRODUCT 22
    ================================================= */

    {
        id: 22,

        name: "Designer Curtain",

        category: "curtain",

        categoryName: "Curtains",

        image: "img/Elegant Damask Curtains with Fabric Detail.png",

        description:
           // "The MEDEMOVE Cervical Pillow PU Foam is expertly designed to provide optimal neck and spinal support.",
               "5 FEET CURTAIN ",
        price: 
        "₹200 - ₹700  ",

        oldPrice: "₹300 - ₹900",

        badge: "PREMIUM"
    },


    /* =================================================
       PRODUCT 23
    ================================================= */

    {
        id: 23,

        name: "premium curtain",

        category: "curtain",

        categoryName: "Curtains",

        image: "img/Elegant Damask Curtain Living Room.png",

        description:
           // "The MEDEMOVE Cervical Pillow PU Foam is expertly designed to provide optimal neck and spinal support.",
           "7 FEET CURTAIN ",
        price: 
        "₹250 - ₹900",

        oldPrice: "₹300 - ₹1000",

        badge: "PREMIUM"
    },
 /* =================================================
       PRODUCT 24
    ================================================= */


    {
        id: 24,

        name: "Folding Mattress",

        category: "Matteresses",

        categoryName: "Matteresses",

        image: "img/folding.jpeg",

        description:
            " 3*6\n5*6.5",

        price: "₹1,200 - ₹1,800",

        oldPrice: "",

        badge: "BEST SELLER"
    },


    {
        id: 25,

        name: "Premium DB Blankets",

        category: "blanket",

        categoryName: "Blankets",

        image: "img/blankets1.jpeg",

        description:
            "Stylish Blankets designed for Duble Bed.",

        price: "₹1100 - ₹1500 ",

        oldPrice: "",

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

        card.setAttribute("data-product-id", product.id);

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
                    ${product.categoryName || ""}
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
                            ${product.oldPrice || ""}
                        </span>
                    </div>

                    <button
                        type="button"
                        class="open-btn"
                    >
                        Open
                    </button>

                </div>

            </div>
        `;

        /* PRODUCT CARD CLICK */

        card.addEventListener("click", function () {

            openProductPage(product.id);

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

    button.addEventListener("click", function(event) {

        event.preventDefault();
        event.stopPropagation();

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
            products.filter(product =>
                product.category === category
            );

        displayProducts(filteredProducts);

    });

});



/* =====================================================
   INITIAL LOAD
===================================================== */

if (productContainer) {
    displayProducts(products);
}


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


function openProductPage(productId) {

    window.location.href =
        "product.html?id=" + productId;

}