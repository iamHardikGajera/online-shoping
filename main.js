(function ($) {
    "use strict";
    
    // Dropdown on mouse hover
    $(document).ready(function () {
        function toggleNavbarMethod() {
            if ($(window).width() > 992) {
                $('.navbar .dropdown').on('mouseover', function () {
                    $('.dropdown-toggle', this).trigger('click');
                }).on('mouseout', function () {
                    $('.dropdown-toggle', this).trigger('click').blur();
                });
            } else {
                $('.navbar .dropdown').off('mouseover').off('mouseout');
            }
        }
        toggleNavbarMethod();
        $(window).resize(toggleNavbarMethod);
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Vendor carousel
    $('.vendor-carousel').owlCarousel({
        loop: true,
        margin: 29,
        nav: false,
        autoplay: true,
        smartSpeed: 1000,
        responsive: {
            0:{
                items:2
            },
            576:{
                items:3
            },
            768:{
                items:4
            },
            992:{
                items:5
            },
            1200:{
                items:6
            }
        }
    });


    // Related carousel
    $('.related-carousel').owlCarousel({
        loop: true,
        margin: 29,
        nav: false,
        autoplay: true,
        smartSpeed: 1000,
        responsive: {
            0:{
                items:1
            },
            576:{
                items:2
            },
            768:{
                items:3
            },
            992:{
                items:4
            }
        }
    });


    // Product Quantity
    $('.quantity button').on('click', function () {
        var button = $(this);
        var oldValue = button.parent().parent().find('input').val();
        if (button.hasClass('btn-plus')) {
            var newVal = parseFloat(oldValue) + 1;
        } else {
            if (oldValue > 0) {
                var newVal = parseFloat(oldValue) - 1;
            } else {
                newVal = 0;
            }
        }
        button.parent().parent().find('input').val(newVal);
    });
    
})(jQuery);




// ------------------newopen product

let Products = [];
function addProduct() {
    // let product1 = document.getElementById("product1").value;
    // let Ptitle = document.getElementById("PTitle").value;
    // let Pname = document.getElementById("PName").value;
    // let Pimage = document.getElementById("PImage").value;
    // let Pprice = document.getElementById("PPrice").value;
    // let Pdesc = document.getElementById("PDesc").value;

    let product1 = document.getElementById("product1").value;

    let product = {
        // name: Pname,
        // description: Pdesc,
        // image: Pimage,
        // price: Pprice,

        // Pname: Pname,
        // Pdesc: Pdesc,
        // Pimage: Pimage,
        // Pprice: Pprice,
        product11: product1,
    }
    Products.push(product);
    console.log(Products)
    getProduct();
}



function getProduct() {
    let productArea = document.getElementById("product");
    productArea.innerHTML = '';
    Products.map(function (product, i) {
        productArea.innerHTML += `
        <div style="padding:20px; background-color:#FFFB7D; display:flex; align-items: center; justify-content:center; flex-direction:column;">
        <h1 style="color:tomato">Title: ${product.title} </h1>
        <p style="color:tomato">Description: ${product.description} </p>
        

        <button onclick="editProduct(${i})">Edit12</button>
        <button onclick="deleteProduct(${i})">Delete</button>
        </div>
        `
    })
}
// function deleteProduct(i) {
//     Products.splice(i, 1);
//     getProduct();
// }
// function editProduct(i) {
//     document.getElementById("editPTitle").value = Products[i].title;
//     document.getElementById("editPDesc").value = Products[i].description;

//     let updateArea = document.getElementById("update_button");

//     updateArea.innerHTML = '';
//     updateArea.innerHTML += `<div> <button onclick="updateProduct(${i})">Update Product</button></div>`
// }
// function updateProduct(i) {
//     let ptitle = document.getElementById("editPTitle").value;
//     let pDesc = document.getElementById("editPDesc").value;

//     Products[i].title = ptitle;
//     Products[i].description = pDesc;
//     getProduct();
// }