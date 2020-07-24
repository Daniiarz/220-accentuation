/*!
    * Start Bootstrap - Grayscale v6.0.2 (https://startbootstrap.com/themes/grayscale)
    * Copyright 2013-2020 Start Bootstrap
    * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-grayscale/blob/master/LICENSE)
    */
(function ($) {
    "use strict"; // Start of use strict

    // Smooth scrolling using jQuery easing
    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
        if (
            location.pathname.replace(/^\//, "") ==
            this.pathname.replace(/^\//, "") &&
            location.hostname == this.hostname
        ) {
            var target = $(this.hash);
            target = target.length
                ? target
                : $("[name=" + this.hash.slice(1) + "]");
            if (target.length) {
                $("html, body").animate(
                    {
                        scrollTop: target.offset().top - 70,
                    },
                    1000,
                    "easeInOutExpo"
                );
                return false;
            }
        }
    });

    // Closes responsive menu when a scroll trigger link is clicked
    $(".js-scroll-trigger").click(function () {
        $(".navbar-collapse").collapse("hide");
    });

    // Activate scrollspy to add active class to navbar items on scroll
    $("body").scrollspy({
        target: "#mainNav",
        offset: 100,
    });

    // Collapse Navbar
    var navbarCollapse = function () {
        if ($("#mainNav").offset().top > 100) {
            $("#mainNav").addClass("navbar-shrink");
        } else {
            $("#mainNav").removeClass("navbar-shrink");
        }
    };
    // Collapse now if page is not at top
    navbarCollapse();
    // Collapse the navbar when page is scrolled
    $(window).scroll(navbarCollapse);
})(jQuery); // End of use strict

const aboutImage1 = document.querySelector(".aboutImage1");
const aboutImage2 = document.querySelector(".aboutImage2");
const aboutImage3 = document.querySelector(".aboutImage3");
const uploader1 = document.querySelector(".uploader1");
const uploader2 = document.querySelector(".uploader2");
const uploader3 = document.querySelector(".uploader3");
const masthead = document.querySelector(".masthead");
const modalCont = document.getElementById("modalCont")
const brandText = document.getElementById("brandText");
const homeText = document.getElementById("homeText");
const homeDesc = document.getElementById("homeDesc");
const aboutText1 = document.getElementById("aboutText1");
const aboutDesc1 = document.getElementById("aboutDesc1");
const aboutText2 = document.getElementById("aboutText2");
const aboutDesc2 = document.getElementById("aboutDesc2");
const aboutText3 = document.getElementById("aboutText3");
const aboutDesc3 = document.getElementById("aboutDesc3");
const address = document.getElementById("address");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const mastheadInputFile = document.getElementById("mastheadInputFile");
const aboutImg1 = document.getElementById("aboutInputFile1");
const aboutImg2 = document.getElementById("aboutInputFile2");
const aboutImg3 = document.getElementById("aboutInputFile3");
const modalWinText = document.getElementById("modalWinText");

console.log(document.cookie)

const inputList = [
    brandText,
    homeText,
    homeDesc,
    aboutText1,
    aboutDesc1,
    aboutText2,
    aboutDesc2,
    aboutText3,
    aboutDesc3,
    address,
    email,
    phone,
    mastheadInputFile,
    aboutImg1,
    aboutImg2,
    aboutImg3,
];

const checkFills = () => {
    const emptyString = inputList.find(e => {
        if (e.value === "") {
            e.focus()
            e.scrollIntoView({
                behavior: "smooth",
                block: "center"
            });
        }
        return e.value === ""
    })
    if (emptyString) {
        modalWinText.textContent = "Fill in all the fields"
        modalWin.style.left = "0";
        return false
    } else {
        return true
    }
};

const sendObj = {
    brandText: ``,
    homeText: ``,
    homeDesc: ``,
    aboutText1: ``,
    aboutDesc1: ``,
    aboutText2: ``,
    aboutDesc2: ``,
    aboutText3: ``,
    aboutDesc3: ``,
    address: ``,
    email: ``,
    phone: ``,
    mastheadImg: {},
    mastheadColor: `#B3B3B3`,
    aboutImg1: {},
    aboutImg2: {},
    aboutImg3: {},
};

const modalBody = createElement("div", "class", "modalBody", null, null);
const closeBodyContBtnCont = createElement("button", "class", "closeBodyContBtnCont", null, null);
const svgImg = createElement("img", "class", "closeBodyContBtn", "src", "./assets/img/close.svg");
const brandTextOfModalBody = createElement("h2", "class", "brandTextOfModalBody", null, null);
const modalRewriteCont = createElement("div", "class", "modalRewriteCont");
const modalRewriteInput = createElement("input", "class", "modalRewriteInput", "maxlength", "20");
const modalRewriteCheckBtn = createElement("button", "class", "modalRewriteCheckBtn", null, null, "check")
const modalRewriteErrorMessage = createElement("p", "class", "modalRewriteErrorMessage", null, null, "this name is already taken");
modalRewriteCont.appendChild(modalRewriteInput);
modalRewriteCont.appendChild((modalRewriteCheckBtn));
modalRewriteCont.appendChild(modalRewriteErrorMessage);
const modalBodyLink = createElement("p", "class", "modalBodyLink");
const modalCreateBtn = createElement("button", "class", "modalCreateBtn", null, null, "create web page");

inputList.forEach((input) => {
    input.addEventListener("input", (i) => {
        if (i.originalTarget.id === "aboutInputFile1") {
            const reader1 = new FileReader();
            reader1.readAsDataURL(i.target.files[0]);
            if (i.target.files[0].size > 256000) {
                modalWinText.textContent = "File is too big!"
                modalWin.style.left = "0";
                i.target.files = ""
            }
            sendObj.aboutImg1 = i.target.files[0];
            reader1.onload = () => {
                aboutImage1.setAttribute("src", `${reader1.result}`);
                uploader1.style.color = "#fd7e14";
            }
        }
        if (i.originalTarget.id === "aboutInputFile2") {
            const reader2 = new FileReader();
            reader2.readAsDataURL(i.target.files[0]);
            if (i.target.files[0].size > 256000) {
                modalWinText.textContent = "File is too big!"
                modalWin.style.left = "0";
                i.target.files = ""
            }
            sendObj.aboutImg2 = i.target.files[0];
            reader2.onload = () => {
                aboutImage2.setAttribute("src", `${reader2.result}`)
                uploader2.style.color = "#fd7e14";
            }
        }
        if (i.originalTarget.id === "aboutInputFile3") {
            const reader3 = new FileReader();
            if (i.target.files[0].size > 256000) {
                modalWinText.textContent = "File is too big!"
                modalWin.style.left = "0";
                i.target.files = ""
            }
            sendObj.aboutImg3 = i.target.files[0];
            reader3.readAsDataURL(i.target.files[0]);
            reader3.onload = () => {
                aboutImage3.setAttribute("src", `${reader3.result}`)
                uploader3.style.color = "#fd7e14";
            }
        }
        if (i.originalTarget.id === "mastheadInputFile") {
            const reader4 = new FileReader();
            if (i.target.files[0].size > 256000) {
                modalWinText.textContent = "File is too big!"
                modalWin.style.left = "0";
                i.target.files = ""
            }
            sendObj.mastheadImg = i.target.files[0];
            reader4.readAsDataURL(i.target.files[0]);
            reader4.onload = () => {
                masthead.style.backgroundImage = `url("${reader4.result}")`;
            }
        }
        if (i.originalTarget.id === "brandText") {
            brandTextOfModalBody.textContent = i.target.value;
            modalRewriteInput.value = i.target.value;
            const value = i.target.value;
            let link = ``;
            for (let i = 0; i < value.length; i++) {
                value[i] === " "
                    ? link = link + "-"
                    : link = link + value[i];
            }
            modalBodyLink.textContent = `${link.toLowerCase()}.220-accentuation.co`
        }
        sendObj[input.id] = `${i.target.value}`;
    })
});

modalRewriteInput.addEventListener("input", (i) => {
    const string = i.target.value;
    brandTextOfModalBody.textContent = i.target.value;
    let link = ``;
    for (let i = 0; i < string.length; i++) {
        string[i] === " "
            ? link = link + "-"
            : link = link + string[i];
    }
    modalBodyLink.textContent = `${link.toLowerCase()}.220-accentuation.co`;
    brandText.value = i.target.value
})

const modalWin = document.getElementById("modalWin");
const sendBtn = document.getElementById("send-btn");
const modalWinBtn = document.getElementById("modalWinBtn");

closeBodyContBtnCont.appendChild(svgImg);
brandTextOfModalBody.textContent = sendObj.title;

sendBtn.addEventListener("click", () => {

    if (checkFills()) {
        fetch("http://www.220-accentuation.co/api/constructor/checkTitle/", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${document.cookie}`,
            },
            body: JSON.stringify({
                title: sendObj.brandText
            })
        }).then(response => {
            if (!response.ok) throw response
            return response.json()
        }).then(() => {
            modalBody.appendChild(brandTextOfModalBody)
            modalBody.appendChild(closeBodyContBtnCont);
            modalBody.appendChild(modalBodyLink);
            modalBody.appendChild(modalCreateBtn);
        }).catch((err) => {
            if (err === 400) {
                modalBody.appendChild(brandTextOfModalBody)
                modalBody.appendChild(closeBodyContBtnCont);
                modalBody.appendChild(modalRewriteCont);
                modalBody.appendChild(modalBodyLink);
            } else {
                console.log(err.text)
            }
        })
        modalCont.style.zIndex = "99999";
        modalCont.style.background = "rgba(0, 0, 0, 0.79)";
        closeBodyContBtnCont.addEventListener("click", function () {
            modalCont.style.zIndex = "-99999";
            modalCont.style.background = "none)";
        })
        modalCont.appendChild(modalBody);
    }
});
    modalCreateBtn.addEventListener("click", async function () {
    let formData = new FormData();

    formData.append('brandText', sendObj.brandText);
    formData.append('homeText', sendObj.homeText);
    formData.append('homeDesc', sendObj.homeDesc);
    formData.append('aboutText1', sendObj.aboutText1);
    formData.append('aboutText2', sendObj.aboutText2);
    formData.append('aboutText3', sendObj.aboutText3);
    formData.append('aboutDesc1', sendObj.aboutDesc1);
    formData.append('aboutDesc2', sendObj.aboutDesc2);
    formData.append('aboutDesc3', sendObj.aboutDesc3);
    formData.append('address', sendObj.address);
    formData.append('phone', sendObj.phone);
    formData.append('email', sendObj.email);
    formData.append('mastheadColor', sendObj.mastheadColor);
    formData.append('mastheadImg', sendObj.mastheadImg, sendObj.mastheadImg.name);
    formData.append('aboutImg1', sendObj.aboutImg1, sendObj.aboutImg1.name);
    formData.append('aboutImg2', sendObj.aboutImg2, sendObj.aboutImg2.name);
    formData.append('aboutImg3', sendObj.aboutImg3, sendObj.aboutImg3.name);

    fetch("http://www.220-accentuation.co/api/constructor/", {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${document.cookie}`
        },
        body: formData
    }).then(response => {
        if (!response.ok) throw response
        return response.json()
    }).then(() => {
        const loadingWin = document.getElementById("loadingWin");
        const loader = document.getElementById("loader");
        loadingWin.style.display = "flex"
        const pageLink = createElement("a", "class", "pageLink", "href", `http://${modalBodyLink.textContent}`, `${modalBodyLink.textContent}`);
        const loadingWinH3 = document.getElementById("loadingWin_h3");
        pageLink.setAttribute('target', "_blank");
        pageLink.setAttribute('rel', "noopener noreferrer");
        loadingWin.appendChild(pageLink);
        setTimeout(function () {
            modalCont.style.zIndex = "-99999";
            loadingWinH3.style.display = "block"
            modalCont.style.background = "none)";
            loader.style.display = "none";
            pageLink.style.display = "block"
        }, 10000)
    }).catch((err) => {
        if (typeof err.text === 'function') {
            err.text().then(errorMessage => {
                console.log(errorMessage);
            });
        } else {
            console.log(err)
        }
    })
})

modalWinBtn.addEventListener("click", () => {
    modalWin.style.left = "-400px";
})

function createElement(tagName, atr, atrName, atr2, atrName2, text) {
    const el = document.createElement(tagName);
    el.setAttribute(atr, atrName);
    el.setAttribute(atr2, atrName2);
    el.textContent = text;
    return el;
}

// ---------------------------------------------------------------------------------------------------------------------------

const mastheadColor = document.getElementById("mastheadColor");
const colorLabel = document.getElementById("colorLabel");
const colorBox = document.getElementById("colorBox");
mastheadColor.addEventListener("input", (color) => {
    document.querySelector("header").style.color = `${color.target.value}`;
    colorBox.style.backgroundColor = `${color.target.value}`;
    sendObj.mastheadColor = `${color.target.value}`;
});

[brandText, homeText, homeDesc].forEach(e => {
    e.addEventListener("input", i => {
        colorLabel.style.right = "0";
    });
});




