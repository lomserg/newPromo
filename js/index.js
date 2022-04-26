

const tabItems = document.querySelectorAll('.tab-item')
const tabContentItems = document.querySelectorAll('.tab-content-item')

function selectItem(e) {
    removeBorder()
    removeShow()
    this.classList.add('tab-border')
    console.log(this.id)
    // grab item from the DOM
    const tabContentItem = document.querySelector(`#${this.id}-content`);

    tabContentItem.classList.add('show');
}

function removeBorder() {
    tabItems.forEach(item => item.classList.remove('tab-border'))
}

function removeShow() {
    tabContentItems.forEach(item => item.classList.remove('show'))
}




tabItems.forEach(item => item.addEventListener('click', selectItem))

// кнопка дополнительно в тарифах

const tarifSettingBtn = document.querySelector(".more-btn3")
const tarifSettingBtn2 = document.querySelector(".more-btn2")
const moreTxt = document.querySelector(".more-txt")

console.log(tarifSettingBtn)
console.log(tarifSettingBtn2)
console.log(moreTxt)


/*
tarifSettingBtn.addEventListener("click", () => {
    moreTxt.classList.add('more-txt-show')
    tarifSettingBtn.classList.add('more-btn-none')
})

tarifSettingBtn2.addEventListener("click", () => {
    moreTxt.classList.remove('more-txt-show')
    tarifSettingBtn.classList.remove('more-btn-none')
})


tarifSettingBtn2.addEventListener("mouseout", () => {
    moreTxt.classList.remove('more-txt-show')
    tarifSettingBtn.classList.remove('more-btn-none')
})

moreTxt.addEventListener("mouseout", setTimeout(() => {
    moreTxt.classList.remove('more-txt-show')
    tarifSettingBtn.classList.remove('more-btn-none')
}, 7000
))
moreTxt.addEventListener("mouseleave", () => {
    moreTxt.classList.remove('more-txt-show')
    tarifSettingBtn.classList.remove('more-btn-none')
})
*/
const accordionItemHeaders = document.querySelectorAll(".accordion-item-header");
console.log(accordionItemHeaders)

accordionItemHeaders.forEach(accordionItemHeader => {
    accordionItemHeader.addEventListener("click", event => {

        // Uncomment in case you only want to allow for the display of only one collapsed item at a time!

        // const currentlyActiveAccordionItemHeader = document.querySelector(".accordion-item-header.active");
        // if(currentlyActiveAccordionItemHeader && currentlyActiveAccordionItemHeader!==accordionItemHeader) {
        //   currentlyActiveAccordionItemHeader.classList.toggle("active");
        //   currentlyActiveAccordionItemHeader.nextElementSibling.style.maxHeight = 0;
        // }

        accordionItemHeader.classList.toggle("active");
        const accordionItemBody = accordionItemHeader.nextElementSibling;
        if (accordionItemHeader.classList.contains("active")) {
            accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + "px";
        }
        else {
            accordionItemBody.style.maxHeight = 0;
        }

    });
});


let buttons = document.querySelectorAll('.btn-tarif');
let modalBg = document.querySelector(".modal-bg")
let modal = document.querySelector(".modal")
const closeX = document.getElementById('close');

// const modal_container = document.getElementById('modal-container');
// const modal = document.querySelector('#modal')
const overlay = document.querySelector('#overlay')

// TODO: 3. Create a click event listener for the open-modal-btn that adds the class "open" to the modal

buttons.forEach(e => e.addEventListener("click", activeBg, false));

function activeBg(event) {
    modalBg.classList.add('bg-active')
}


closeX.addEventListener('click', e => {
    modalBg.classList.remove('bg-active')

})

document.addEventListener('click', e => {
    console.log(e)
})




// function noScroll() {
//     window.scrollTo(0, 0)
// }

// function openForm() {
//     window.scrollTo(0, 0)
//     modal_container.classList.add('show');
//     modal.classList.add('open')
//     overlay.classList.add('open')


// }
// closeX.addEventListener('click', e => {
//     modal.classList.remove('open')
//     overlay.classList.remove('open')
// })
// overlay.addEventListener('click', e => {
//     modal.classList.remove('open')
//     overlay.classList.remove('open')
//     modal_container.classList.remove('show');
// });

// function sayHello() {
//     console.log("Darth Vader");
// }



// buttons.forEach(e => e.addEventListener("click", openForm, false));


// BONUS: Also add the class "open" to the overlay - ok

// TODO: 4. Create a click event listener for the close-modal-btn that removes the class "open" from the modal

// BONUS: Also remove the class "open" from the overlay - ok


// BONUS: Add a click event listener to the overlay that removes the class "open" from the modal and the overlay
let phone = document.querySelector(".phone")
let contentY = '<a class="phoneid" href="tel: +74995055627">+7 499 505-56-27</a>';
let contentG = '<a class="phoneid" href="tel: +74995055612">+7 499 505-56-12</a>';


console.log(phone);

// closeX.addEventListener('click', () => {
//     modal_container.classList.remove('show');
// })

const queryString = window.location.search;

console.log(queryString);

let paramString = queryString.split('&')[1];
// let paramSource = paramString.split('=')[1];

console.log(typeof (paramString))
console.log(typeof (queryString))




let ourSubstring = "yandex";
let ourSubstring2 = "google";

if (queryString.includes(ourSubstring)) {
    phone.innerHTML = contentY
} else if (queryString.includes(ourSubstring2)) {
    phone.innerHTML = contentG
} else {
    console.log("asdasd.")
}

tippy('#tooltip1', {
    content: 'Видеосервис AMEDIATEKA, START, IVI, PREMIER или «Лучшее от more.tv» на выбор: горячие новинки и классика',
    arrow: true,
});

tippy('#tooltip2', {
    content: 'Онлайн-кинотеатр START, IVI или PREMIER на выбор: эксклюзивные премьеры, кино и сериалы',

});


var swiper = new Swiper(".tarif-slider", {
    loop: true,
    grabCursor: true,
    spaceBetween: 20,
    breakpoints: {
        0: {
            slidesPerView: 0,
        },
        768: {
            slidesPerView: 3,
        },
        991: {
            slidesPerView: 3,
        },
    }
})

console.log(swiper)

