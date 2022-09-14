// 1.) messager-icon-container |=======>
// const messageContainerContentBox = document.querySelector('.message-container-content-box');
// const messagerIconContainer = document.querySelector('.messager-icon-container');

// messageContainerContentBox.style.display = 'none';
// messagerIconContainer.addEventListener('click', ()=> {
//     messagerIconContainer.querySelector('img').src = '../imgs/message-img-2.jpg';
//     messageContainerContentBox.style.display = 'block';
// });

// messageContainerContentBox.addEventListener('mouseleave', ()=> {
//     messagerIconContainer.querySelector('img').src = '../imgs/message-img.jpg';
//     messageContainerContentBox.style.display = 'none';
// });

// 2.) main-top-navbar |======>
const mainTopNavbar = document.querySelector('.main-top-navbar');

const topNavSystemManuver = ()=> {
    window.scrollY > 50 ? mainTopNavbar.classList.add('main-top-navbar-class-list') : mainTopNavbar.classList.remove('main-top-navbar-class-list');
};
setInterval(() => {
    topNavSystemManuver();
}, 100);

// 3.) side-navbar-link-container |======>
const sideNavbarLinkContainer = document.querySelectorAll('.side-navbar-link-container');
const imageGalleryBox = document.querySelectorAll('.image-gallery-box');
const sideBarCheckBox = document.querySelectorAll('.side-bar-check-box');
const cmccTag = document.querySelector('.cmcc-tag-container p');
const imgCanvasImg = document.querySelectorAll('.img-canvas img');
const imgCanvas = document.querySelectorAll('.img-canvas');
const imageGalleryBoxSection1 = {
    boxCategory1: document.querySelectorAll('.art-design'),
    boxCategory2: document.querySelectorAll('.business'),
    boxCategory3: document.querySelectorAll('.community-non-profit'),
    boxCategory4: document.querySelectorAll('.education'),
    boxCategory5: document.querySelectorAll('.events'),
    boxCategory6: document.querySelectorAll('.fashion-beauty'),
    boxCategory7: document.querySelectorAll('.food-drink'),
    boxCategory8: document.querySelectorAll('.health-fitness'),
    boxCategory9: document.querySelectorAll('.lifestyle'),
    boxCategory10: document.querySelectorAll('.online-store'),
    boxCategory11: document.querySelectorAll('.services'),
    boxCategory12: document.querySelectorAll('.simple'),
    boxCategory13: document.querySelectorAll('.technology'),
    boxCategory14: document.querySelectorAll('.all')
}
const {
    boxCategory1, boxCategory2, boxCategory3, 
    boxCategory4, boxCategory5, boxCategory6, 
    boxCategory7, boxCategory8, boxCategory9,
    boxCategory10, boxCategory11, boxCategory12, 
    boxCategory13, boxCategory14
} = imageGalleryBoxSection1;
const allImgBoxCategories = [
    boxCategory1, boxCategory2, boxCategory3, 
    boxCategory4, boxCategory5, boxCategory6, 
    boxCategory7, boxCategory8, boxCategory9,
    boxCategory10, boxCategory11, boxCategory12, 
    boxCategory13, boxCategory14
];
// MAKE CHANGE HERE ==========>
const selectTag = document.querySelector('.search-bar');
const selectTagOptions = selectTag.querySelectorAll('option');
const categoryNames = [
    'Art & Design', 'Business', 'Community & Non-Profit', 'Education',
    'Events', 'Fashion & Beauty', 'Food & Drink', 
    'Health & Fitness', 'Lifestyle', 'Online Store', 
    'Services', 'Simple', 'Technology', 
    'All'
];

const boxCategorySortationSystem1 = ()=> {

    sideNavbarLinkContainer[0].addEventListener('click', ()=> {
        
        selectTagOptions[0].innerHTML = `Chosen: ${categoryNames[0]}`;

        for (let i = 0; i < boxCategory1.length; i++) {
            const element = boxCategory1[i];
            if (element.classList.contains('art-design')) {
                element.classList.add('image-gallery-box-class-list')
            }
            if (sideBarCheckBox[0].classList.contains('span-class-list') == true) {
                sideBarCheckBox[0].classList.remove('span-class-list')
            }
        }

        for (let i = 0; i < boxCategory2.length; i++) {
            const element = boxCategory2[i];
            if (element.classList.contains('art-design') == false) {
                element.classList.remove('image-gallery-box-class-list');
            }
        } 

        for (let i = 0; i < boxCategory3.length; i++) {
            const element = boxCategory3[i];
            if (element.classList.contains('art-design') == false) {
                element.classList.remove('image-gallery-box-class-list')
            }
        }

        for (let i = 0; i < boxCategory4.length; i++) {
            const element = boxCategory4[i];
            if (element.classList.contains('art-design') == false) {
                element.classList.remove('image-gallery-box-class-list')
            }
        }

        for (let i = 0; i < boxCategory13.length; i++) {
            const element = boxCategory13[i];
            if (element.classList.contains('art-design') == false) {
                element.classList.remove('image-gallery-box-class-list')
            }
        }
        
        for (let i = 0; i < boxCategory12.length; i++) {
            const element = boxCategory12[i];
            if (element.classList.contains('art-design') == false) {
                element.classList.remove('image-gallery-box-class-list')
            }
        }

        for (let i = 0; i < boxCategory11.length; i++) {
            const element = boxCategory11[i];
            if (element.classList.contains('art-design') == false) {
                element.classList.remove('image-gallery-box-class-list')
            }
        }
        
        for (let i = 0; i < boxCategory10.length; i++) {
            const element = boxCategory10[i];
            if (element.classList.contains('art-design') == false) {
                element.classList.remove('image-gallery-box-class-list')
            }
        }
        
        for (let i = 0; i < boxCategory9.length; i++) {
            const element = boxCategory9[i];
            if (element.classList.contains('art-design') == false) {
                element.classList.remove('image-gallery-box-class-list')
            }
        }
        
        for (let i = 0; i < boxCategory8.length; i++) {
            const element = boxCategory8[i];
            if (element.classList.contains('art-design') == false) {
                element.classList.remove('image-gallery-box-class-list')
            }
        }
        
        for (let i = 0; i < boxCategory7.length; i++) {
            const element = boxCategory7[i];
            if (element.classList.contains('art-design') == false) {
                element.classList.remove('image-gallery-box-class-list')
            }
        }
        
        for (let i = 0; i < boxCategory6.length; i++) {
            const element = boxCategory6[i];
            if (element.classList.contains('art-design') == false) {
                element.classList.remove('image-gallery-box-class-list')
            }
        }
        
        for (let i = 0; i < boxCategory5.length; i++) {
            const element = boxCategory5[i];
            if (element.classList.contains('art-design') == false) {
                element.classList.remove('image-gallery-box-class-list')
            }
        }
    });
};
const boxCategorySortationSystem2 = ()=> {
    
    sideNavbarLinkContainer[1].addEventListener('click', ()=> {

        selectTagOptions[0].innerHTML = `Chosen: ${categoryNames[1]}`;

        for (let i = 0; i < boxCategory13.length; i++) {
            const element = boxCategory13[i];
            if (element.classList.contains('business') == false) {
                element.classList.remove('image-gallery-box-class-list')
            }
        }
        
        for (let i = 0; i < boxCategory12.length; i++) {
            const element = boxCategory12[i];
            if (element.classList.contains('business') == false) {
                element.classList.remove('image-gallery-box-class-list')
            }
        }

        for (let i = 0; i < boxCategory11.length; i++) {
            const element = boxCategory11[i];
            if (element.classList.contains('business') == false) {
                element.classList.remove('image-gallery-box-class-list')
            }
        }
        
        for (let i = 0; i < boxCategory10.length; i++) {
            const element = boxCategory10[i];
            if (element.classList.contains('business') == false) {
                element.classList.remove('image-gallery-box-class-list')
            }
        }
        
        for (let i = 0; i < boxCategory9.length; i++) {
            const element = boxCategory9[i];
            if (element.classList.contains('business') == false) {
                element.classList.remove('image-gallery-box-class-list')
            }
        }
        
        for (let i = 0; i < boxCategory8.length; i++) {
            const element = boxCategory8[i];
            if (element.classList.contains('business') == false) {
                element.classList.remove('image-gallery-box-class-list')
            }
        }
        
        for (let i = 0; i < boxCategory7.length; i++) {
            const element = boxCategory7[i];
            if (element.classList.contains('business') == false) {
                element.classList.remove('image-gallery-box-class-list')
            }
        }
        
        for (let i = 0; i < boxCategory6.length; i++) {
            const element = boxCategory6[i];
            if (element.classList.contains('business') == false) {
                element.classList.remove('image-gallery-box-class-list')
            }
        }
        
        for (let i = 0; i < boxCategory5.length; i++) {
            const element = boxCategory5[i];
            if (element.classList.contains('business') == false) {
                element.classList.remove('image-gallery-box-class-list')
            }
        }
        
        for (let i = 0; i < boxCategory4.length; i++) {
            const element = boxCategory4[i];
            if (element.classList.contains('business') == false) {
                element.classList.remove('image-gallery-box-class-list')
            }
        }
        
        for (let i = 0; i < boxCategory3.length; i++) {
            const element = boxCategory3[i];
            if (element.classList.contains('business') == false) {
                element.classList.remove('image-gallery-box-class-list')
            }
        }
        
        for (let i = 0; i < boxCategory2.length; i++) {
            const element = boxCategory2[i];
            if (element.classList.contains('business')) {
                element.classList.add('image-gallery-box-class-list')
            }
        }

        for (let i = 0; i < boxCategory1.length; i++) {
            const element = boxCategory1[i];
            if (element.classList.contains('business') == false) {
                element.classList.remove('image-gallery-box-class-list');
            }
        } 
    });
};
const boxCategorySortationSystem3 = ()=> {
    
    sideNavbarLinkContainer[2].addEventListener('click', ()=> {

        selectTagOptions[0].innerHTML = `Chosen: ${categoryNames[2]}`;

        for (let i = 0; i < boxCategory13.length; i++) {
            const element = boxCategory13[i];
            if (element.classList.contains('community-non-profit') == false) {
                element.classList.remove('image-gallery-box-class-list')
            }
        }
        
        for (let i = 0; i < boxCategory12.length; i++) {
            const element = boxCategory12[i];
            if (element.classList.contains('community-non-profit') == false) {
                element.classList.remove('image-gallery-box-class-list')
            }
        }

        for (let i = 0; i < boxCategory11.length; i++) {
            const element = boxCategory11[i];
            if (element.classList.contains('community-non-profit') == false) {
                element.classList.remove('image-gallery-box-class-list')
            }
        }
        
        for (let i = 0; i < boxCategory10.length; i++) {
            const element = boxCategory10[i];
            if (element.classList.contains('community-non-profit') == false) {
                element.classList.remove('image-gallery-box-class-list')
            }
        }
        
        for (let i = 0; i < boxCategory9.length; i++) {
            const element = boxCategory9[i];
            if (element.classList.contains('community-non-profit') == false) {
                element.classList.remove('image-gallery-box-class-list')
            }
        }
        
        for (let i = 0; i < boxCategory8.length; i++) {
            const element = boxCategory8[i];
            if (element.classList.contains('community-non-profit') == false) {
                element.classList.remove('image-gallery-box-class-list')
            }
        }
        
        for (let i = 0; i < boxCategory7.length; i++) {
            const element = boxCategory7[i];
            if (element.classList.contains('community-non-profit') == false) {
                element.classList.remove('image-gallery-box-class-list')
            }
        }
        
        for (let i = 0; i < boxCategory6.length; i++) {
            const element = boxCategory6[i];
            if (element.classList.contains('community-non-profit') == false) {
                element.classList.remove('image-gallery-box-class-list')
            }
        }
        
        for (let i = 0; i < boxCategory5.length; i++) {
            const element = boxCategory5[i];
            if (element.classList.contains('community-non-profit') == false) {
                element.classList.remove('image-gallery-box-class-list')
            }
        }
       
        for (let i = 0; i < boxCategory4.length; i++) {
            const element = boxCategory4[i];
            if (element.classList.contains('community-non-profit') == false) {
                element.classList.remove('image-gallery-box-class-list')
            }
        }
        
        for (let i = 0; i < boxCategory3.length; i++) {
            const element = boxCategory3[i];
            if (element.classList.contains('community-non-profit')) {
                element.classList.add('image-gallery-box-class-list')
            }
        }
        
        for (let i = 0; i < boxCategory2.length; i++) {
            const element = boxCategory2[i];
            if (element.classList.contains('community-non-profit') == false) {
                element.classList.remove('image-gallery-box-class-list')
            }
        }

        for (let i = 0; i < boxCategory1.length; i++) {
            const element = boxCategory1[i];
            if (element.classList.contains('community-non-profit') == false) {
                element.classList.remove('image-gallery-box-class-list');
            }
        }
    });
};
const boxCategorySortationSystem4 = ()=> {
    
    sideNavbarLinkContainer[3].addEventListener('click', ()=> {

        selectTagOptions[0].innerHTML = `Chosen: ${categoryNames[3]}`;

        for (let i = 0; i < boxCategory13.length; i++) {
            const element = boxCategory13[i];
            if (element.classList.contains('education') == false) {
                element.classList.remove('image-gallery-box-class-list')
            }
        }
        
        for (let i = 0; i < boxCategory12.length; i++) {
            const element = boxCategory12[i];
            if (element.classList.contains('education') == false) {
                element.classList.remove('image-gallery-box-class-list')
            }
        }

        for (let i = 0; i < boxCategory11.length; i++) {
            const element = boxCategory11[i];
            if (element.classList.contains('education') == false) {
                element.classList.remove('image-gallery-box-class-list')
            }
        }
        
        for (let i = 0; i < boxCategory10.length; i++) {
            const element = boxCategory10[i];
            if (element.classList.contains('education') == false) {
                element.classList.remove('image-gallery-box-class-list')
            }
        }
        
        for (let i = 0; i < boxCategory9.length; i++) {
            const element = boxCategory9[i];
            if (element.classList.contains('education') == false) {
                element.classList.remove('image-gallery-box-class-list')
            }
        }
        
        for (let i = 0; i < boxCategory8.length; i++) {
            const element = boxCategory8[i];
            if (element.classList.contains('education') == false) {
                element.classList.remove('image-gallery-box-class-list')
            }
        }
        
        for (let i = 0; i < boxCategory7.length; i++) {
            const element = boxCategory7[i];
            if (element.classList.contains('education') == false) {
                element.classList.remove('image-gallery-box-class-list')
            }
        }
        
        for (let i = 0; i < boxCategory6.length; i++) {
            const element = boxCategory6[i];
            if (element.classList.contains('education') == false) {
                element.classList.remove('image-gallery-box-class-list')
            }
        }
        
        for (let i = 0; i < boxCategory5.length; i++) {
            const element = boxCategory5[i];
            if (element.classList.contains('education') == false) {
                element.classList.remove('image-gallery-box-class-list')
            }
        }
        
        for (let i = 0; i < boxCategory4.length; i++) {
            const element = boxCategory4[i];
            if (element.classList.contains('education')) {
                element.classList.add('image-gallery-box-class-list')
            }
        }
        
        for (let i = 0; i < boxCategory3.length; i++) {
            const element = boxCategory3[i];
            if (element.classList.contains('education') == false) {
                element.classList.remove('image-gallery-box-class-list')
            }
        }
        
        for (let i = 0; i < boxCategory2.length; i++) {
            const element = boxCategory2[i];
            if (element.classList.contains('education') == false) {
                element.classList.remove('image-gallery-box-class-list')
            }
        }

        for (let i = 0; i < boxCategory1.length; i++) {
            const element = boxCategory1[i];
            if (element.classList.contains('education') == false) {
                element.classList.remove('image-gallery-box-class-list');
            }
        } 
    });
};
const boxCategorySortationSystem5 = ()=> {
    
    sideNavbarLinkContainer[4].addEventListener('click', ()=> {

        selectTagOptions[0].innerHTML = `Chosen: ${categoryNames[4]}`;

        for (let i = 0; i < boxCategory13.length; i++) {
            const element = boxCategory13[i];
            if (element.classList.contains('events') == false) {
                element.classList.remove('image-gallery-box-class-list')
            }
        }
        
        for (let i = 0; i < boxCategory12.length; i++) {
            const element = boxCategory12[i];
            if (element.classList.contains('events') == false) {
                element.classList.remove('image-gallery-box-class-list')
            }
        }

        for (let i = 0; i < boxCategory11.length; i++) {
            const element = boxCategory11[i];
            if (element.classList.contains('events') == false) {
                element.classList.remove('image-gallery-box-class-list')
            }
        }
        
        for (let i = 0; i < boxCategory10.length; i++) {
            const element = boxCategory10[i];
            if (element.classList.contains('events') == false) {
                element.classList.remove('image-gallery-box-class-list')
            }
        }
        
        for (let i = 0; i < boxCategory9.length; i++) {
            const element = boxCategory9[i];
            if (element.classList.contains('events') == false) {
                element.classList.remove('image-gallery-box-class-list')
            }
        }
        
        for (let i = 0; i < boxCategory8.length; i++) {
            const element = boxCategory8[i];
            if (element.classList.contains('events') == false) {
                element.classList.remove('image-gallery-box-class-list')
            }
        }
        
        for (let i = 0; i < boxCategory7.length; i++) {
            const element = boxCategory7[i];
            if (element.classList.contains('events') == false) {
                element.classList.remove('image-gallery-box-class-list')
            }
        }
        
        for (let i = 0; i < boxCategory6.length; i++) {
            const element = boxCategory6[i];
            if (element.classList.contains('events') == false) {
                element.classList.remove('image-gallery-box-class-list')
            }
        }
        
        for (let i = 0; i < boxCategory5.length; i++) {
            const element = boxCategory5[i];
            if (element.classList.contains('events')) {
                element.classList.add('image-gallery-box-class-list')
            }
        }
        
        for (let i = 0; i < boxCategory4.length; i++) {
            const element = boxCategory4[i];
            if (element.classList.contains('events') == false) {
                element.classList.remove('image-gallery-box-class-list')
            }
        }
        
        for (let i = 0; i < boxCategory3.length; i++) {
            const element = boxCategory3[i];
            if (element.classList.contains('events') == false) {
                element.classList.remove('image-gallery-box-class-list')
            }
        }
        
        for (let i = 0; i < boxCategory2.length; i++) {
            const element = boxCategory2[i];
            if (element.classList.contains('events') == false) {
                element.classList.remove('image-gallery-box-class-list')
            }
        }

        for (let i = 0; i < boxCategory1.length; i++) {
            const element = boxCategory1[i];
            if (element.classList.contains('events') == false) {
                element.classList.remove('image-gallery-box-class-list');
            }
        } 
    });
};
const boxCategorySortationSystem6 = ()=> {
    
    sideNavbarLinkContainer[5].addEventListener('click', ()=> {

        selectTagOptions[0].innerHTML = `Chosen: ${categoryNames[5]}`;

        for (let i = 0; i < boxCategory13.length; i++) {
            const element = boxCategory13[i];
            if (element.classList.contains('fashion-beauty') == false) {
                element.classList.remove('image-gallery-box-class-list')
            }
        }
        
        for (let i = 0; i < boxCategory12.length; i++) {
            const element = boxCategory12[i];
            if (element.classList.contains('fashion-beauty') == false) {
                element.classList.remove('image-gallery-box-class-list')
            }
        }

        for (let i = 0; i < boxCategory11.length; i++) {
            const element = boxCategory11[i];
            if (element.classList.contains('fashion-beauty') == false) {
                element.classList.remove('image-gallery-box-class-list')
            }
        }
        
        for (let i = 0; i < boxCategory10.length; i++) {
            const element = boxCategory10[i];
            if (element.classList.contains('fashion-beauty') == false) {
                element.classList.remove('image-gallery-box-class-list')
            }
        }
        
        for (let i = 0; i < boxCategory9.length; i++) {
            const element = boxCategory9[i];
            if (element.classList.contains('fashion-beauty') == false) {
                element.classList.remove('image-gallery-box-class-list')
            }
        }
        
        for (let i = 0; i < boxCategory8.length; i++) {
            const element = boxCategory8[i];
            if (element.classList.contains('fashion-beauty') == false) {
                element.classList.remove('image-gallery-box-class-list')
            }
        }
        
        for (let i = 0; i < boxCategory7.length; i++) {
            const element = boxCategory7[i];
            if (element.classList.contains('fashion-beauty') == false) {
                element.classList.remove('image-gallery-box-class-list')
            }
        }
        
        for (let i = 0; i < boxCategory6.length; i++) {
            const element = boxCategory6[i];
            if (element.classList.contains('fashion-beauty')) {
                element.classList.add('image-gallery-box-class-list')
            }
        }
        
        for (let i = 0; i < boxCategory5.length; i++) {
            const element = boxCategory5[i];
            if (element.classList.contains('fashion-beauty') == false) {
                element.classList.remove('image-gallery-box-class-list')
            }
        }
        
        for (let i = 0; i < boxCategory4.length; i++) {
            const element = boxCategory4[i];
            if (element.classList.contains('fashion-beauty') == false) {
                element.classList.remove('image-gallery-box-class-list')
            }
        }
        
        for (let i = 0; i < boxCategory3.length; i++) {
            const element = boxCategory3[i];
            if (element.classList.contains('fashion-beauty') == false) {
                element.classList.remove('image-gallery-box-class-list')
            }
        }
        
        for (let i = 0; i < boxCategory2.length; i++) {
            const element = boxCategory2[i];
            if (element.classList.contains('fashion-beauty') == false) {
                element.classList.remove('image-gallery-box-class-list')
            }
        }

        for (let i = 0; i < boxCategory1.length; i++) {
            const element = boxCategory1[i];
            if (element.classList.contains('fashion-beauty') == false) {
                element.classList.remove('image-gallery-box-class-list');
            }
        } 
    });
};
const boxCategorySortationSystem7 = ()=> {
    
    sideNavbarLinkContainer[6].addEventListener('click', ()=> {

        selectTagOptions[0].innerHTML = `Chosen: ${categoryNames[6]}`;

        for (let i = 0; i < boxCategory13.length; i++) {
            const element = boxCategory13[i];
            if (element.classList.contains('food-drink') == false) {
                element.classList.remove('image-gallery-box-class-list')
            }
        }
        
        for (let i = 0; i < boxCategory12.length; i++) {
            const element = boxCategory12[i];
            if (element.classList.contains('food-drink') == false) {
                element.classList.remove('image-gallery-box-class-list')
            }
        }

        for (let i = 0; i < boxCategory11.length; i++) {
            const element = boxCategory11[i];
            if (element.classList.contains('food-drink') == false) {
                element.classList.remove('image-gallery-box-class-list')
            }
        }
        
        for (let i = 0; i < boxCategory10.length; i++) {
            const element = boxCategory10[i];
            if (element.classList.contains('food-drink')== false) {
                element.classList.remove('image-gallery-box-class-list')
            }
        }
        
        for (let i = 0; i < boxCategory9.length; i++) {
            const element = boxCategory9[i];
            if (element.classList.contains('food-drink') == false) {
                element.classList.remove('image-gallery-box-class-list')
            }
        }
        
        for (let i = 0; i < boxCategory8.length; i++) {
            const element = boxCategory8[i];
            if (element.classList.contains('food-drink') == false) {
                element.classList.remove('image-gallery-box-class-list')
            }
        }
        
        for (let i = 0; i < boxCategory7.length; i++) {
            const element = boxCategory7[i];
            if (element.classList.contains('food-drink')) {
                element.classList.add('image-gallery-box-class-list')
            }
        }
        
        for (let i = 0; i < boxCategory6.length; i++) {
            const element = boxCategory6[i];
            if (element.classList.contains('food-drink') == false) {
                element.classList.remove('image-gallery-box-class-list')
            }
        }
        
        for (let i = 0; i < boxCategory5.length; i++) {
            const element = boxCategory5[i];
            if (element.classList.contains('food-drink') == false) {
                element.classList.remove('image-gallery-box-class-list')
            }
        }
        
        for (let i = 0; i < boxCategory4.length; i++) {
            const element = boxCategory4[i];
            if (element.classList.contains('food-drink') == false) {
                element.classList.remove('image-gallery-box-class-list')
            }
        }
        
        for (let i = 0; i < boxCategory3.length; i++) {
            const element = boxCategory3[i];
            if (element.classList.contains('food-drink') == false) {
                element.classList.remove('image-gallery-box-class-list')
            }
        }
        
        for (let i = 0; i < boxCategory2.length; i++) {
            const element = boxCategory2[i];
            if (element.classList.contains('food-drink') == false) {
                element.classList.remove('image-gallery-box-class-list')
            }
        }

        for (let i = 0; i < boxCategory1.length; i++) {
            const element = boxCategory1[i];
            if (element.classList.contains('food-drink') == false) {
                element.classList.remove('image-gallery-box-class-list');
            }
        } 
    });
};
const boxCategorySortationSystem8 = ()=> {
    
    sideNavbarLinkContainer[7].addEventListener('click', ()=> {

        selectTagOptions[0].innerHTML = `Chosen: ${categoryNames[7]}`;

        for (let i = 0; i < boxCategory13.length; i++) {
            const element = boxCategory13[i];
            if (element.classList.contains('health-fitness') == false) {
                element.classList.remove('image-gallery-box-class-list')
            }
        }
        
        for (let i = 0; i < boxCategory12.length; i++) {
            const element = boxCategory12[i];
            if (element.classList.contains('health-fitness') == false) {
                element.classList.remove('image-gallery-box-class-list')
            }
        }

        for (let i = 0; i < boxCategory11.length; i++) {
            const element = boxCategory11[i];
            if (element.classList.contains('health-fitness') == false) {
                element.classList.remove('image-gallery-box-class-list')
            }
        }
        
        for (let i = 0; i < boxCategory10.length; i++) {
            const element = boxCategory10[i];
            if (element.classList.contains('health-fitness') == false) {
                element.classList.remove('image-gallery-box-class-list')
            }
        }
        
        for (let i = 0; i < boxCategory9.length; i++) {
            const element = boxCategory9[i];
            if (element.classList.contains('health-fitness') == false) {
                element.classList.remove('image-gallery-box-class-list')
            }
        }
        
        for (let i = 0; i < boxCategory8.length; i++) {
            const element = boxCategory8[i];
            if (element.classList.contains('health-fitness')) {
                element.classList.add('image-gallery-box-class-list')
            }
        }
        
        for (let i = 0; i < boxCategory7.length; i++) {
            const element = boxCategory7[i];
            if (element.classList.contains('health-fitness') == false) {
                element.classList.remove('image-gallery-box-class-list')
            }
        }
        
        for (let i = 0; i < boxCategory6.length; i++) {
            const element = boxCategory6[i];
            if (element.classList.contains('health-fitness') == false) {
                element.classList.remove('image-gallery-box-class-list')
            }
        }
        
        for (let i = 0; i < boxCategory5.length; i++) {
            const element = boxCategory5[i];
            if (element.classList.contains('health-fitness') == false) {
                element.classList.remove('image-gallery-box-class-list')
            }
        }
        
        for (let i = 0; i < boxCategory4.length; i++) {
            const element = boxCategory4[i];
            if (element.classList.contains('health-fitness') == false) {
                element.classList.remove('image-gallery-box-class-list')
            }
        }
        
        for (let i = 0; i < boxCategory3.length; i++) {
            const element = boxCategory3[i];
            if (element.classList.contains('health-fitness') == false) {
                element.classList.remove('image-gallery-box-class-list')
            }
        }
        
        for (let i = 0; i < boxCategory2.length; i++) {
            const element = boxCategory2[i];
            if (element.classList.contains('health-fitness') == false) {
                element.classList.remove('image-gallery-box-class-list')
            }
        }

        for (let i = 0; i < boxCategory1.length; i++) {
            const element = boxCategory1[i];
            if (element.classList.contains('health-fitness') == false) {
                element.classList.remove('image-gallery-box-class-list');
            }
        } 
    });
};
const boxCategorySortationSystem9 = ()=> {
    
    sideNavbarLinkContainer[8].addEventListener('click', ()=> {

        selectTagOptions[0].innerHTML = `Chosen: ${categoryNames[8]}`;

        for (let i = 0; i < boxCategory13.length; i++) {
            const element = boxCategory13[i];
            if (element.classList.contains('lifestyle') == false) {
                element.classList.remove('image-gallery-box-class-list')
            }
        }
        
        for (let i = 0; i < boxCategory12.length; i++) {
            const element = boxCategory12[i];
            if (element.classList.contains('lifestyle') == false) {
                element.classList.remove('image-gallery-box-class-list')
            }
        }

        for (let i = 0; i < boxCategory11.length; i++) {
            const element = boxCategory11[i];
            if (element.classList.contains('lifestyle') == false) {
                element.classList.remove('image-gallery-box-class-list')
            }
        }
        
        for (let i = 0; i < boxCategory10.length; i++) {
            const element = boxCategory10[i];
            if (element.classList.contains('lifestyle') == false) {
                element.classList.remove('image-gallery-box-class-list')
            }
        }
        
        for (let i = 0; i < boxCategory9.length; i++) {
            const element = boxCategory9[i];
            if (element.classList.contains('lifestyle')) {
                element.classList.add('image-gallery-box-class-list')
            }
        }
        
        for (let i = 0; i < boxCategory8.length; i++) {
            const element = boxCategory8[i];
            if (element.classList.contains('lifestyle') == false) {
                element.classList.remove('image-gallery-box-class-list')
            }
        }
        
        for (let i = 0; i < boxCategory7.length; i++) {
            const element = boxCategory7[i];
            if (element.classList.contains('lifestyle') == false) {
                element.classList.remove('image-gallery-box-class-list')
            }
        }
        
        for (let i = 0; i < boxCategory6.length; i++) {
            const element = boxCategory6[i];
            if (element.classList.contains('lifestyle') == false) {
                element.classList.remove('image-gallery-box-class-list')
            }
        }
        
        for (let i = 0; i < boxCategory5.length; i++) {
            const element = boxCategory5[i];
            if (element.classList.contains('lifestyle') == false) {
                element.classList.remove('image-gallery-box-class-list')
            }
        }
        
        for (let i = 0; i < boxCategory4.length; i++) {
            const element = boxCategory4[i];
            if (element.classList.contains('lifestyle') == false) {
                element.classList.remove('image-gallery-box-class-list')
            }
        }
        
        for (let i = 0; i < boxCategory3.length; i++) {
            const element = boxCategory3[i];
            if (element.classList.contains('lifestyle') == false) {
                element.classList.remove('image-gallery-box-class-list')
            }
        }
        
        for (let i = 0; i < boxCategory2.length; i++) {
            const element = boxCategory2[i];
            if (element.classList.contains('lifestyle') == false) {
                element.classList.remove('image-gallery-box-class-list')
            }
        }

        for (let i = 0; i < boxCategory1.length; i++) {
            const element = boxCategory1[i];
            if (element.classList.contains('lifestyle') == false) {
                element.classList.remove('image-gallery-box-class-list');
            }
        } 
    });
};
const boxCategorySortationSystem10 = ()=> {
    
    sideNavbarLinkContainer[9].addEventListener('click', ()=> {

        selectTagOptions[0].innerHTML = `Chosen: ${categoryNames[9]}`;

        for (let i = 0; i < boxCategory13.length; i++) {
            const element = boxCategory13[i];
            if (element.classList.contains('online-store') == false) {
                element.classList.remove('image-gallery-box-class-list')
            }
        }
        
        for (let i = 0; i < boxCategory12.length; i++) {
            const element = boxCategory12[i];
            if (element.classList.contains('online-store') == false) {
                element.classList.remove('image-gallery-box-class-list')
            }
        }

        for (let i = 0; i < boxCategory11.length; i++) {
            const element = boxCategory11[i];
            if (element.classList.contains('online-store') == false) {
                element.classList.remove('image-gallery-box-class-list')
            }
        }
        
        for (let i = 0; i < boxCategory10.length; i++) {
            const element = boxCategory10[i];
            if (element.classList.contains('online-store')) {
                element.classList.add('image-gallery-box-class-list')
            }
        }
        
        for (let i = 0; i < boxCategory9.length; i++) {
            const element = boxCategory9[i];
            if (element.classList.contains('online-store') == false) {
                element.classList.remove('image-gallery-box-class-list')
            }
        }
        
        for (let i = 0; i < boxCategory8.length; i++) {
            const element = boxCategory8[i];
            if (element.classList.contains('online-store') == false) {
                element.classList.remove('image-gallery-box-class-list')
            }
        }
        
        for (let i = 0; i < boxCategory7.length; i++) {
            const element = boxCategory7[i];
            if (element.classList.contains('online-store') == false) {
                element.classList.remove('image-gallery-box-class-list')
            }
        }
        
        for (let i = 0; i < boxCategory6.length; i++) {
            const element = boxCategory6[i];
            if (element.classList.contains('online-store') == false) {
                element.classList.remove('image-gallery-box-class-list')
            }
        }
        
        for (let i = 0; i < boxCategory5.length; i++) {
            const element = boxCategory5[i];
            if (element.classList.contains('online-store') == false) {
                element.classList.remove('image-gallery-box-class-list')
            }
        }
        
        for (let i = 0; i < boxCategory4.length; i++) {
            const element = boxCategory4[i];
            if (element.classList.contains('online-store') == false) {
                element.classList.remove('image-gallery-box-class-list')
            }
        }
        
        for (let i = 0; i < boxCategory3.length; i++) {
            const element = boxCategory3[i];
            if (element.classList.contains('online-store') == false) {
                element.classList.remove('image-gallery-box-class-list')
            }
        }
        
        for (let i = 0; i < boxCategory2.length; i++) {
            const element = boxCategory2[i];
            if (element.classList.contains('online-store') == false) {
                element.classList.remove('image-gallery-box-class-list')
            }
        }

        for (let i = 0; i < boxCategory1.length; i++) {
            const element = boxCategory1[i];
            if (element.classList.contains('online-store') == false) {
                element.classList.remove('image-gallery-box-class-list');
            }
        } 
    });
};
const boxCategorySortationSystem11 = ()=> {
    
    sideNavbarLinkContainer[10].addEventListener('click', ()=> {

        selectTagOptions[0].innerHTML = `Chosen: ${categoryNames[10]}`;

        for (let i = 0; i < boxCategory13.length; i++) {
            const element = boxCategory13[i];
            if (element.classList.contains('services') == false) {
                element.classList.remove('image-gallery-box-class-list')
            }
        }
        
        for (let i = 0; i < boxCategory12.length; i++) {
            const element = boxCategory12[i];
            if (element.classList.contains('services') == false) {
                element.classList.remove('image-gallery-box-class-list')
            }
        }

        for (let i = 0; i < boxCategory11.length; i++) {
            const element = boxCategory11[i];
            if (element.classList.contains('services')) {
                element.classList.add('image-gallery-box-class-list')
            }
        }
        
        for (let i = 0; i < boxCategory10.length; i++) {
            const element = boxCategory10[i];
            if (element.classList.contains('services') == false) {
                element.classList.remove('image-gallery-box-class-list')
            }
        }
        
        for (let i = 0; i < boxCategory9.length; i++) {
            const element = boxCategory9[i];
            if (element.classList.contains('services') == false) {
                element.classList.remove('image-gallery-box-class-list')
            }
        }
        
        for (let i = 0; i < boxCategory8.length; i++) {
            const element = boxCategory8[i];
            if (element.classList.contains('services') == false) {
                element.classList.remove('image-gallery-box-class-list')
            }
        }
        
        for (let i = 0; i < boxCategory7.length; i++) {
            const element = boxCategory7[i];
            if (element.classList.contains('services') == false) {
                element.classList.remove('image-gallery-box-class-list')
            }
        }
        
        for (let i = 0; i < boxCategory6.length; i++) {
            const element = boxCategory6[i];
            if (element.classList.contains('services') == false) {
                element.classList.remove('image-gallery-box-class-list')
            }
        }
        
        for (let i = 0; i < boxCategory5.length; i++) {
            const element = boxCategory5[i];
            if (element.classList.contains('services') == false) {
                element.classList.remove('image-gallery-box-class-list')
            }
        }
        
        for (let i = 0; i < boxCategory4.length; i++) {
            const element = boxCategory4[i];
            if (element.classList.contains('services') == false) {
                element.classList.remove('image-gallery-box-class-list')
            }
        }
        
        for (let i = 0; i < boxCategory3.length; i++) {
            const element = boxCategory3[i];
            if (element.classList.contains('services') == false) {
                element.classList.remove('image-gallery-box-class-list')
            }
        }
        
        for (let i = 0; i < boxCategory2.length; i++) {
            const element = boxCategory2[i];
            if (element.classList.contains('services') == false) {
                element.classList.remove('image-gallery-box-class-list')
            }
        }

        for (let i = 0; i < boxCategory1.length; i++) {
            const element = boxCategory1[i];
            if (element.classList.contains('services') == false) {
                element.classList.remove('image-gallery-box-class-list');
            }
        }
    });
};
const boxCategorySortationSystem12 = ()=> {
    
    sideNavbarLinkContainer[11].addEventListener('click', ()=> {

        selectTagOptions[0].innerHTML = `Chosen: ${categoryNames[11]}`;

        for (let i = 0; i < boxCategory13.length; i++) {
            const element = boxCategory13[i];
            if (element.classList.contains('simple') == false) {
                element.classList.remove('image-gallery-box-class-list')
            }
        }
        
        for (let i = 0; i < boxCategory12.length; i++) {
            const element = boxCategory12[i];
            if (element.classList.contains('simple')) {
                element.classList.add('image-gallery-box-class-list')
            }
        }

        for (let i = 0; i < boxCategory11.length; i++) {
            const element = boxCategory11[i];
            if (element.classList.contains('simple') == false) {
                element.classList.remove('image-gallery-box-class-list')
            }
        }
        
        for (let i = 0; i < boxCategory10.length; i++) {
            const element = boxCategory10[i];
            if (element.classList.contains('simple') == false) {
                element.classList.remove('image-gallery-box-class-list')
            }
        }
        
        for (let i = 0; i < boxCategory9.length; i++) {
            const element = boxCategory9[i];
            if (element.classList.contains('simple') == false) {
                element.classList.remove('image-gallery-box-class-list')
            }
        }
        
        for (let i = 0; i < boxCategory8.length; i++) {
            const element = boxCategory8[i];
            if (element.classList.contains('simple') == false) {
                element.classList.remove('image-gallery-box-class-list')
            }
        }
        
        for (let i = 0; i < boxCategory7.length; i++) {
            const element = boxCategory7[i];
            if (element.classList.contains('simple') == false) {
                element.classList.remove('image-gallery-box-class-list')
            }
        }
        
        for (let i = 0; i < boxCategory6.length; i++) {
            const element = boxCategory6[i];
            if (element.classList.contains('simple') == false) {
                element.classList.remove('image-gallery-box-class-list')
            }
        }
        
        for (let i = 0; i < boxCategory5.length; i++) {
            const element = boxCategory5[i];
            if (element.classList.contains('simple') == false) {
                element.classList.remove('image-gallery-box-class-list')
            }
        }
        
        for (let i = 0; i < boxCategory4.length; i++) {
            const element = boxCategory4[i];
            if (element.classList.contains('simple') == false) {
                element.classList.remove('image-gallery-box-class-list')
            }
        }
        
        for (let i = 0; i < boxCategory3.length; i++) {
            const element = boxCategory3[i];
            if (element.classList.contains('simple') == false) {
                element.classList.remove('image-gallery-box-class-list')
            }
        }
        
        for (let i = 0; i < boxCategory2.length; i++) {
            const element = boxCategory2[i];
            if (element.classList.contains('simple') == false) {
                element.classList.remove('image-gallery-box-class-list')
            }
        }

        for (let i = 0; i < boxCategory1.length; i++) {
            const element = boxCategory1[i];
            if (element.classList.contains('simple') == false) {
                element.classList.remove('image-gallery-box-class-list');
            }
        }
    });
};
const boxCategorySortationSystem13 = ()=> {
    
    sideNavbarLinkContainer[12].addEventListener('click', ()=> {

        selectTagOptions[0].innerHTML = `Chosen: ${categoryNames[12]}`;

        for (let i = 0; i < boxCategory13.length; i++) {
            const element = boxCategory13[i];
            if (element.classList.contains('technology')) {
                element.classList.add('image-gallery-box-class-list')
            }
        }
        
        for (let i = 0; i < boxCategory12.length; i++) {
            const element = boxCategory12[i];
            if (element.classList.contains('technology') == false) {
                element.classList.remove('image-gallery-box-class-list')
            }
        }

        for (let i = 0; i < boxCategory11.length; i++) {
            const element = boxCategory11[i];
            if (element.classList.contains('technology') == false) {
                element.classList.remove('image-gallery-box-class-list')
            }
        }
        
        for (let i = 0; i < boxCategory10.length; i++) {
            const element = boxCategory10[i];
            if (element.classList.contains('technology') == false) {
                element.classList.remove('image-gallery-box-class-list')
            }
        }
        
        for (let i = 0; i < boxCategory9.length; i++) {
            const element = boxCategory9[i];
            if (element.classList.contains('technology') == false) {
                element.classList.remove('image-gallery-box-class-list')
            }
        }
        
        for (let i = 0; i < boxCategory8.length; i++) {
            const element = boxCategory8[i];
            if (element.classList.contains('technology') == false) {
                element.classList.remove('image-gallery-box-class-list')
            }
        }
        
        for (let i = 0; i < boxCategory7.length; i++) {
            const element = boxCategory7[i];
            if (element.classList.contains('technology') == false) {
                element.classList.remove('image-gallery-box-class-list')
            }
        }
        
        for (let i = 0; i < boxCategory6.length; i++) {
            const element = boxCategory6[i];
            if (element.classList.contains('technology') == false) {
                element.classList.remove('image-gallery-box-class-list')
            }
        }
        
        for (let i = 0; i < boxCategory5.length; i++) {
            const element = boxCategory5[i];
            if (element.classList.contains('technology') == false) {
                element.classList.remove('image-gallery-box-class-list')
            }
        }
        
        for (let i = 0; i < boxCategory4.length; i++) {
            const element = boxCategory4[i];
            if (element.classList.contains('technology') == false) {
                element.classList.remove('image-gallery-box-class-list')
            }
        }
        
        for (let i = 0; i < boxCategory3.length; i++) {
            const element = boxCategory3[i];
            if (element.classList.contains('technology') == false) {
                element.classList.remove('image-gallery-box-class-list')
            }
        }
        
        for (let i = 0; i < boxCategory2.length; i++) {
            const element = boxCategory2[i];
            if (element.classList.contains('technology') == false) {
                element.classList.remove('image-gallery-box-class-list')
            }
        }

        for (let i = 0; i < boxCategory1.length; i++) {
            const element = boxCategory1[i];
            if (element.classList.contains('technology') == false) {
                element.classList.remove('image-gallery-box-class-list');
            }
        }
    });
};
const boxCategorySortationSystem14 = ()=> {
    
    sideNavbarLinkContainer[13].addEventListener('click', ()=> {      
        
        selectTagOptions[0].innerHTML = `Chosen: ${categoryNames[13]}`;
        
        for (let i = 0; i < boxCategory1.length; i++) {
            const element = boxCategory1[i];
            element.classList.add('image-gallery-box-class-list');
        }
        for (let i = 0; i < boxCategory2.length; i++) {
            const element = boxCategory2[i];
            element.classList.add('image-gallery-box-class-list');
        }
        for (let i = 0; i < boxCategory3.length; i++) {
            const element = boxCategory3[i];
            element.classList.add('image-gallery-box-class-list');
        }
        for (let i = 0; i < boxCategory4.length; i++) {
            const element = boxCategory4[i];
            element.classList.add('image-gallery-box-class-list');
        }
        for (let i = 0; i < boxCategory5.length; i++) {
            const element = boxCategory5[i];
            element.classList.add('image-gallery-box-class-list');
        }
        for (let i = 0; i < boxCategory6.length; i++) {
            const element = boxCategory6[i];
            element.classList.add('image-gallery-box-class-list');
        }
        for (let i = 0; i < boxCategory7.length; i++) {
            const element = boxCategory7[i];
            element.classList.add('image-gallery-box-class-list');
        }
        for (let i = 0; i < boxCategory8.length; i++) {
            const element = boxCategory8[i];
            element.classList.add('image-gallery-box-class-list');
        }
        for (let i = 0; i < boxCategory9.length; i++) {
            const element = boxCategory9[i];
            element.classList.add('image-gallery-box-class-list');
        }
        for (let i = 0; i < boxCategory10.length; i++) {
            const element = boxCategory10[i];
            element.classList.add('image-gallery-box-class-list');
        }
        for (let i = 0; i < boxCategory11.length; i++) {
            const element = boxCategory11[i];
            element.classList.add('image-gallery-box-class-list');
        }
        for (let i = 0; i < boxCategory12.length; i++) {
            const element = boxCategory12[i];
            element.classList.add('image-gallery-box-class-list');
        }
        for (let i = 0; i < boxCategory13.length; i++) {
            const element = boxCategory13[i];
            element.classList.add('image-gallery-box-class-list');
        }
    });
};
// MAKE CHANGE HERE ==========>
const boxCategorySortationSystems = ()=> {
    boxCategorySortationSystem1();
    boxCategorySortationSystem2();
    boxCategorySortationSystem3();
    boxCategorySortationSystem4();
    boxCategorySortationSystem5();
    boxCategorySortationSystem6();
    boxCategorySortationSystem7();
    boxCategorySortationSystem8();
    boxCategorySortationSystem9();
    boxCategorySortationSystem10();
    boxCategorySortationSystem11();
    boxCategorySortationSystem12();
    boxCategorySortationSystem13();
    boxCategorySortationSystem14();
}
boxCategorySortationSystems();
// MAKE CHANGE HERE ==========>

const boxCategoryScrollSystem1DownFunctions = ()=> {
    let endPoint = 200;
    for (let i = 0; i < imgCanvasImg.length; i++) {
        const element = imgCanvasImg[i];
        element.addEventListener('mouseover', ()=> {
            let imgCanvasScrollHeight = element.scrollHeight;
            element.style.transform = `translateY(-${imgCanvasScrollHeight-endPoint}px)`;
        });
    }
};
boxCategoryScrollSystem1DownFunctions();

const boxCategoryScrollSystemUp = ()=> {
    for (let i = 0; i < imgCanvasImg.length; i++) {
        const element = imgCanvasImg[i];
        element.style.transform = `translateY(${0}px)`;
    }
};
const imgCanvasScrollSystem = ()=> {
    for (let i = 0; i < imgCanvasImg.length; i++) {
        const element = imgCanvasImg[i];
        element.addEventListener('mouseleave', ()=> {
            boxCategoryScrollSystemUp();
        });
    }
};
imgCanvasScrollSystem();


const sideBarClickSystemSystem = ()=> {
    sideNavbarLinkContainer[0].addEventListener('click', ()=> {
        for (let i = 0; i < sideBarCheckBox.length; i++) {
            const element = sideBarCheckBox[i];
            element.classList.remove('span-class-list');
    
            sideBarCheckBox[0].classList.add('span-class-list');
        }  
    });
};
const sideBarClickSystemSystem2 = ()=> {
    sideNavbarLinkContainer[1].addEventListener('click', ()=> {
        for (let i = 0; i < sideBarCheckBox.length; i++) {
            const element = sideBarCheckBox[i];
            element.classList.remove('span-class-list');
    
            sideBarCheckBox[1].classList.add('span-class-list');
        }  
    });
};
const sideBarClickSystemSystem3 = ()=> {
    sideNavbarLinkContainer[2].addEventListener('click', ()=> {
        for (let i = 0; i < sideBarCheckBox.length; i++) {
            const element = sideBarCheckBox[i];
            element.classList.remove('span-class-list');
    
            sideBarCheckBox[2].classList.add('span-class-list');
        }  
    });
};
const sideBarClickSystemSystem4 = ()=> {
    sideNavbarLinkContainer[3].addEventListener('click', ()=> {
        for (let i = 0; i < sideBarCheckBox.length; i++) {
            const element = sideBarCheckBox[i];
            element.classList.remove('span-class-list');
    
            sideBarCheckBox[3].classList.add('span-class-list');
        }  
    });
};
const sideBarClickSystemSystem5 = ()=> {
    sideNavbarLinkContainer[4].addEventListener('click', ()=> {
        for (let i = 0; i < sideBarCheckBox.length; i++) {
            const element = sideBarCheckBox[i];
            element.classList.remove('span-class-list');
    
            sideBarCheckBox[4].classList.add('span-class-list');
        }  
    });
};
const sideBarClickSystemSystem6 = ()=> {
    sideNavbarLinkContainer[5].addEventListener('click', ()=> {
        for (let i = 0; i < sideBarCheckBox.length; i++) {
            const element = sideBarCheckBox[i];
            element.classList.remove('span-class-list');
    
            sideBarCheckBox[5].classList.add('span-class-list');
        }  
    });
};
const sideBarClickSystemSystem7 = ()=> {
    sideNavbarLinkContainer[6].addEventListener('click', ()=> {
        for (let i = 0; i < sideBarCheckBox.length; i++) {
            const element = sideBarCheckBox[i];
            element.classList.remove('span-class-list');
    
            sideBarCheckBox[6].classList.add('span-class-list');
        }  
    });
};
const sideBarClickSystemSystem8 = ()=> {
    sideNavbarLinkContainer[7].addEventListener('click', ()=> {
        for (let i = 0; i < sideBarCheckBox.length; i++) {
            const element = sideBarCheckBox[i];
            element.classList.remove('span-class-list');
    
            sideBarCheckBox[7].classList.add('span-class-list');
        }  
    });
};
const sideBarClickSystemSystem9 = ()=> {
    sideNavbarLinkContainer[8].addEventListener('click', ()=> {
        for (let i = 0; i < sideBarCheckBox.length; i++) {
            const element = sideBarCheckBox[i];
            element.classList.remove('span-class-list');
    
            sideBarCheckBox[8].classList.add('span-class-list');
        }  
    });
};
const sideBarClickSystemSystem10 = ()=> {
    sideNavbarLinkContainer[9].addEventListener('click', ()=> {
        for (let i = 0; i < sideBarCheckBox.length; i++) {
            const element = sideBarCheckBox[i];
            element.classList.remove('span-class-list');
    
            sideBarCheckBox[9].classList.add('span-class-list');
        }  
    });
};
const sideBarClickSystemSystem11 = ()=> {
    sideNavbarLinkContainer[10].addEventListener('click', ()=> {
        for (let i = 0; i < sideBarCheckBox.length; i++) {
            const element = sideBarCheckBox[i];
            element.classList.remove('span-class-list');
    
            sideBarCheckBox[10].classList.add('span-class-list');
        }  
    });
};
const sideBarClickSystemSystem12 = ()=> {
    sideNavbarLinkContainer[11].addEventListener('click', ()=> {
        for (let i = 0; i < sideBarCheckBox.length; i++) {
            const element = sideBarCheckBox[i];
            element.classList.remove('span-class-list');
    
            sideBarCheckBox[11].classList.add('span-class-list');
        }  
    });
};
const sideBarClickSystemSystem13 = ()=> {
    sideNavbarLinkContainer[12].addEventListener('click', ()=> {
        for (let i = 0; i < sideBarCheckBox.length; i++) {
            const element = sideBarCheckBox[i];
            element.classList.remove('span-class-list');
    
            sideBarCheckBox[12].classList.add('span-class-list');
        }  
    });
};
const sideBarClickSystemSystem14 = ()=> {
    sideNavbarLinkContainer[13].addEventListener('click', ()=> {
        for (let i = 0; i < sideBarCheckBox.length; i++) {
            const element = sideBarCheckBox[i];
            element.classList.remove('span-class-list');
    
            sideBarCheckBox[13].classList.add('span-class-list');
        }  
    });
};
// MAKE CHANGE HERE ==========>
const sideBarClickSystem = ()=> {
    for (let i = 0; i < imageGalleryBox.length; i++) {
        const element = imageGalleryBox[i];
        element.classList.add('image-gallery-box-class-list');
    }
    
    sideBarClickSystemSystem();
    sideBarClickSystemSystem2();
    sideBarClickSystemSystem3();
    sideBarClickSystemSystem4();
    sideBarClickSystemSystem5();
    sideBarClickSystemSystem6();
    sideBarClickSystemSystem7();
    sideBarClickSystemSystem8();
    sideBarClickSystemSystem9();
    sideBarClickSystemSystem10();
    sideBarClickSystemSystem11();
    sideBarClickSystemSystem12();
    sideBarClickSystemSystem13();
    sideBarClickSystemSystem14();
};
sideBarClickSystem();
// MAKE CHANGE HERE ==========>

// 4.) main-conclusion-container |=======>
const mainConclusionContainer = document.querySelector('.main-conclusion-container');
const subConclusionContainer = document.querySelector('.sub-conclusion-container');
const mccBgPopUp = document.querySelector('.mcc-bg-pop-up');
const animationLine1 = document.querySelector('.animation-line-1');
const animationLine2 = document.querySelector('.animation-line-2');

const mainConclusionContainerSystem = ()=> {

    setInterval(() => {
        if (animationLine1.getBoundingClientRect().y <= 0) {
            subConclusionContainer.classList.add('sub-conclusion-container-class-list');
            mccBgPopUp.classList.add('mcc-bg-pop-up-class-list');
        } if (animationLine1.getBoundingClientRect().y > 0) {
            subConclusionContainer.classList.remove('sub-conclusion-container-class-list');
            mccBgPopUp.classList.remove('mcc-bg-pop-up-class-list');
        }
        
        if (animationLine2.getBoundingClientRect().y <= 0) {
            subConclusionContainer.classList.remove('sub-conclusion-container-class-list');
            mccBgPopUp.classList.remove('mcc-bg-pop-up-class-list');
        }
    }, 100);
};
mainConclusionContainerSystem();

// ---- cmcc-sub-container-2 ===>
const cmccSubContainer = document.querySelector('.cmcc-sub-container');
const cmccSubContainer2 = document.querySelector('.cmcc-sub-container-2');
const exitToMainPage = document.querySelector('.exit-to-main-page');
const s1Img = document.querySelector('.s1-img');
const gsImgContainer = document.querySelectorAll('.gs-img-container');
const gsImgs = document.querySelectorAll('.gs-img');

const pTagColorChangeSubContainerSystem = ()=> {
    let gsImgContainerPTagArr = [
        gsImgContainer[0].querySelector('p'),
        gsImgContainer[1].querySelector('p'),
        gsImgContainer[2].querySelector('p'),
        gsImgContainer[3].querySelector('p'),
        gsImgContainer[4].querySelector('p'),
        gsImgContainer[5].querySelector('p'),
        gsImgContainer[6].querySelector('p'),
        gsImgContainer[7].querySelector('p'),
        gsImgContainer[8].querySelector('p')
    ]
    
    let darkColor = '#3e474d';
    let lightColor = '#71818c7c';
    gsImgs[0].addEventListener('click', ()=> {
        for (let i = 0; i < gsImgContainerPTagArr.length; i++) {
            const element = gsImgContainerPTagArr[i];
            element.style.color = lightColor;
            gsImgContainer[0].querySelector('p').style.color = darkColor;
        }
    });
    gsImgs[1].addEventListener('click', ()=> {
        for (let i = 0; i < gsImgContainerPTagArr.length; i++) {
            const element = gsImgContainerPTagArr[i];
            element.style.color = lightColor;
            gsImgContainer[1].querySelector('p').style.color = darkColor;
        }
    });
    gsImgs[2].addEventListener('click', ()=> {
        for (let i = 0; i < gsImgContainerPTagArr.length; i++) {
            const element = gsImgContainerPTagArr[i];
            element.style.color = lightColor;
            gsImgContainer[2].querySelector('p').style.color = darkColor;
        }
    });
    gsImgs[3].addEventListener('click', ()=> {
        for (let i = 0; i < gsImgContainerPTagArr.length; i++) {
            const element = gsImgContainerPTagArr[i];
            element.style.color = lightColor;
            gsImgContainer[3].querySelector('p').style.color = darkColor;
        }
    });
    gsImgs[4].addEventListener('click', ()=> {
        for (let i = 0; i < gsImgContainerPTagArr.length; i++) {
            const element = gsImgContainerPTagArr[i];
            element.style.color = lightColor;
            gsImgContainer[4].querySelector('p').style.color = darkColor;
        }
    });
    gsImgs[5].addEventListener('click', ()=> {
        for (let i = 0; i < gsImgContainerPTagArr.length; i++) {
            const element = gsImgContainerPTagArr[i];
            element.style.color = lightColor;
            gsImgContainer[5].querySelector('p').style.color = darkColor;
        }
    });
    gsImgs[6].addEventListener('click', ()=> {
        for (let i = 0; i < gsImgContainerPTagArr.length; i++) {
            const element = gsImgContainerPTagArr[i];
            element.style.color = lightColor;
            gsImgContainer[6].querySelector('p').style.color = darkColor;
        }
    });
    gsImgs[7].addEventListener('click', ()=> {
        for (let i = 0; i < gsImgContainerPTagArr.length; i++) {
            const element = gsImgContainerPTagArr[i];
            element.style.color = lightColor;
            gsImgContainer[7].querySelector('p').style.color = darkColor;
        }
    });
    gsImgs[8].addEventListener('click', ()=> {
        for (let i = 0; i < gsImgContainerPTagArr.length; i++) {
            const element = gsImgContainerPTagArr[i];
            element.style.color = lightColor;
            gsImgContainer[8].querySelector('p').style.color = darkColor;
        }
    });
};
pTagColorChangeSubContainerSystem();

const cmccGallerySectionNumber = document.querySelector('.cmcc-gallery-section-number');
const boxCategory1CMCCSubContainer2System01 = ()=> {
    cmccTag.textContent = 'Art & Design';
    cmccGallerySectionNumber.textContent = `(${9})`;

    s1Img.src = 'https://www.elegantthemes.com/layouts/wp-content/uploads/2018/02/design-agency-about-2-533x1721.jpg';
    
    let s1ImgsArr01 = [
        'https://www.elegantthemes.com/layouts/wp-content/uploads/2018/02/design-agency-about-2-533x1721.jpg',
        'https://www.elegantthemes.com/layouts/wp-content/uploads/2018/02/design-agency-blog-2-533x915.jpg',
        'https://www.elegantthemes.com/layouts/wp-content/uploads/2018/02/design-agency-case-study-2-533x2878.jpg',
        'https://www.elegantthemes.com/layouts/wp-content/uploads/2017/12/design-agency-contact-533x620.png',
        'https://www.elegantthemes.com/layouts/wp-content/uploads/2018/02/design-agency-home-2-533x999.jpg',
        'https://www.elegantthemes.com/layouts/wp-content/uploads/2018/02/design-agency-landing-2-533x2937.jpg',
        'https://www.elegantthemes.com/layouts/wp-content/uploads/2018/02/design-agency-portfolio-2-533x1107.jpg',
        'https://www.elegantthemes.com/layouts/wp-content/uploads/2018/02/design-agency-project-1-2-533x846.jpg',
        'https://www.elegantthemes.com/layouts/wp-content/uploads/2018/02/design-agency-project-2-2-533x1250.jpg'
    ];
    
    let gsImgsArr01 = [
        'https://www.elegantthemes.com/layouts/wp-content/uploads/2018/02/design-agency-about-2-116x87.jpg',
        'https://www.elegantthemes.com/layouts/wp-content/uploads/2018/02/design-agency-blog-2-116x87.jpg',
        'https://www.elegantthemes.com/layouts/wp-content/uploads/2018/02/design-agency-case-study-2-116x87.jpg',
        'https://www.elegantthemes.com/layouts/wp-content/uploads/2017/12/design-agency-contact-116x87.png',
        'https://www.elegantthemes.com/layouts/wp-content/uploads/2018/02/design-agency-home-2-116x87.jpg',
        'https://www.elegantthemes.com/layouts/wp-content/uploads/2018/02/design-agency-landing-2-116x87.jpg',
        'https://www.elegantthemes.com/layouts/wp-content/uploads/2018/02/design-agency-portfolio-2-116x87.jpg',
        'https://www.elegantthemes.com/layouts/wp-content/uploads/2018/02/design-agency-project-1-2-116x87.jpg',
        'https://www.elegantthemes.com/layouts/wp-content/uploads/2018/02/design-agency-project-2-2-116x87.jpg'
    ];

    let imgsTextArr01 = [
        'About',
        'Blog',
        'Case Study',
        'Contact',
        'Home',
        'Landing',
        'Portfolio',
        'Project 1',
        'Project 2'
    ];

    for (let i = 0; i < gsImgsArr01.length; i++) {
        const element = gsImgsArr01[i];
        gsImgs[i].src = `${element}`;
        gsImgContainer[i].querySelector('p').textContent = `${imgsTextArr01[i]}`;

        gsImgs[i].addEventListener('click', ()=> {
            s1Img.src = `${s1ImgsArr01[i]}`;
        });
    }
    
    let n = 0;
    let n2 = 0;

    s1ImgsArr01.forEach(element => {
        if (element) {
            n++;
            gsImgContainer[n];
            gsImgContainer[n].style.display = 'flex';
            // console.log(n)
        }
    });
    s1ImgsArr01.forEach(element => {
        if (element === null) {
            n2++;
            gsImgContainer[n2+n-1].style.display = 'none';
        }
    });

    for (let i = 0; i < gsImgsArr01.length; i++) {
        const element = gsImgsArr01[i];
        gsImgs[i].src = `${element}`;
        gsImgContainer[i].querySelector('p').textContent = `${imgsTextArr01[i]}`;

        gsImgs[i].addEventListener('click', ()=> {
            s1Img.src = `${s1ImgsArr01[i]}`;
        });
    }
};

const boxCategory1CMCCSubContainer2System02 = ()=> {
    cmccTag.textContent = 'Business';
    cmccGallerySectionNumber.textContent = `(${7})`;

    s1Img.src = 'https://www.elegantthemes.com/layouts/wp-content/uploads/2018/01/photo-marketplace_about-533x1428.jpg';
    
    let s1ImgsArr01 = [
        'https://www.elegantthemes.com/layouts/wp-content/uploads/2018/01/photo-marketplace_about-533x1428.jpg',
        'https://www.elegantthemes.com/layouts/wp-content/uploads/2018/01/photo-marketplace_categories-533x1268.jpg',
        'https://www.elegantthemes.com/layouts/wp-content/uploads/2017/12/photo-marketplace_contact-533x1018.jpg',
        'https://www.elegantthemes.com/layouts/wp-content/uploads/2018/01/photo-marketplace_home-533x1310.jpg',
        'https://www.elegantthemes.com/layouts/wp-content/uploads/2018/01/photo-marketplace_landing-533x3175.jpg',
        'https://www.elegantthemes.com/layouts/wp-content/uploads/2018/01/photo-marketplace_pricing-533x878.jpg',
        'https://www.elegantthemes.com/layouts/wp-content/uploads/2017/12/photo-marketplace_contribute-533x1049.jpg',
        null,
        null
    ];
    
    let gsImgsArr01 = [
        'https://www.elegantthemes.com/layouts/wp-content/uploads/2018/01/photo-marketplace_about-116x87.jpg',
        'https://www.elegantthemes.com/layouts/wp-content/uploads/2018/01/photo-marketplace_categories-116x87.jpg',
        'https://www.elegantthemes.com/layouts/wp-content/uploads/2017/12/photo-marketplace_contact-116x87.jpg',
        'https://www.elegantthemes.com/layouts/wp-content/uploads/2018/01/photo-marketplace_home-116x87.jpg',
        'https://www.elegantthemes.com/layouts/wp-content/uploads/2018/01/photo-marketplace_landing-116x87.jpg',
        'https://www.elegantthemes.com/layouts/wp-content/uploads/2018/01/photo-marketplace_pricing-116x87.jpg',
        'https://www.elegantthemes.com/layouts/wp-content/uploads/2017/12/photo-marketplace_contribute-116x87.jpg',
        null,
        null
    ];

    let imgsTextArr01 = [
        'About',
        'Categories',
        'Contact',
        'Home',
        'Landing',
        'Pricing',
        'Seller',
        null,
        null
    ];


    let n = 0;
    let n2 = 0;

    s1ImgsArr01.forEach(element => {
        if (element) {
            n++;
            gsImgContainer[n];
            gsImgContainer[n].style.display = 'flex';
            // console.log(n)
        }
    });
    s1ImgsArr01.forEach(element => {
        if (element === null) {
            n2++;
            gsImgContainer[n2+n-1].style.display = 'none';
        }
    });

    for (let i = 0; i < gsImgsArr01.length; i++) {
        const element = gsImgsArr01[i];
        gsImgs[i].src = `${element}`;
        gsImgContainer[i].querySelector('p').textContent = `${imgsTextArr01[i]}`;

        gsImgs[i].addEventListener('click', ()=> {
            s1Img.src = `${s1ImgsArr01[i]}`;
        });
    }
};

const boxCategory1CMCCSubContainer2System03 = ()=> {
    cmccTag.textContent = 'Community & Non-Profit';
    cmccGallerySectionNumber.textContent = `(${8})`;

    s1Img.src = 'https://www.elegantthemes.com/layouts/wp-content/uploads/2017/12/farmers-market-about-533x1191.jpg';
    
    let s1ImgsArr01 = [
        'https://www.elegantthemes.com/layouts/wp-content/uploads/2017/12/farmers-market-about-533x1191.jpg',
        'https://www.elegantthemes.com/layouts/wp-content/uploads/2017/12/farmers-market-blog-533x948.jpg',
        'https://www.elegantthemes.com/layouts/wp-content/uploads/2017/12/farmers-market-contact-533x929.jpg',
        'https://www.elegantthemes.com/layouts/wp-content/uploads/2017/12/farmers-market-donate-533x1531.jpg',
        'https://www.elegantthemes.com/layouts/wp-content/uploads/2017/12/farmers-market-events-533x961.jpg',
        'https://www.elegantthemes.com/layouts/wp-content/uploads/2017/12/farmers-market-home-533x948.jpg',
        'https://www.elegantthemes.com/layouts/wp-content/uploads/2017/12/farmers-market-landing-533x2594.jpg',
        'https://www.elegantthemes.com/layouts/wp-content/uploads/2017/12/farmers-market-market-533x1724.jpg',
        null
    ];
    
    let gsImgsArr01 = [
        'https://www.elegantthemes.com/layouts/wp-content/uploads/2017/12/farmers-market-about-116x87.jpg',
        'https://www.elegantthemes.com/layouts/wp-content/uploads/2017/12/farmers-market-blog-116x87.jpg',
        'https://www.elegantthemes.com/layouts/wp-content/uploads/2017/12/farmers-market-contact-116x87.jpg',
        'https://www.elegantthemes.com/layouts/wp-content/uploads/2017/12/farmers-market-donate-116x87.jpg',
        'https://www.elegantthemes.com/layouts/wp-content/uploads/2017/12/farmers-market-events-116x87.jpg',
        'https://www.elegantthemes.com/layouts/wp-content/uploads/2017/12/farmers-market-home-116x87.jpg',
        'https://www.elegantthemes.com/layouts/wp-content/uploads/2017/12/farmers-market-landing-116x87.jpg',
        'https://www.elegantthemes.com/layouts/wp-content/uploads/2017/12/farmers-market-market-116x87.jpg',
        null
    ];

    let imgsTextArr01 = [
        'About',
        'Blog',
        'Contact',
        'Donate',
        'Events',
        'Home',
        'Landing',
        'Market',
        null
    ];


    let n = 0;
    let n2 = 0;

    s1ImgsArr01.forEach(element => {
        if (element) {
            n++;
            gsImgContainer[n];
            gsImgContainer[n].style.display = 'flex';
            // console.log(n)
        }
    });
    s1ImgsArr01.forEach(element => {
        if (element === null) {
            n2++;
            gsImgContainer[n2+n-1].style.display = 'none';
        }
    });

    for (let i = 0; i < gsImgsArr01.length; i++) {
        const element = gsImgsArr01[i];
        gsImgs[i].src = `${element}`;
        gsImgContainer[i].querySelector('p').textContent = `${imgsTextArr01[i]}`;

        gsImgs[i].addEventListener('click', ()=> {
            s1Img.src = `${s1ImgsArr01[i]}`;
        });
    }
};

const boxCategory1CMCCSubContainer2System04 = ()=> {
    cmccTag.textContent = 'Education';
    cmccGallerySectionNumber.textContent = `(${9})`;

    s1Img.src = 'https://www.elegantthemes.com/layouts/wp-content/uploads/2017/12/coding-school_about-533x2300.jpg';
    let s1ImgsArr01 = [
        'https://www.elegantthemes.com/layouts/wp-content/uploads/2017/12/coding-school_about-533x2300.jpg',
        'https://www.elegantthemes.com/layouts/wp-content/uploads/2017/12/coding-school_blog-533x1679.jpg',
        'https://www.elegantthemes.com/layouts/wp-content/uploads/2017/12/coding-school_contact-533x1240.jpg',
        'https://www.elegantthemes.com/layouts/wp-content/uploads/2017/12/coding-school_course-533x1060.jpg',
        'https://www.elegantthemes.com/layouts/wp-content/uploads/2017/12/coding-school_courses-533x864.jpg',
        'https://www.elegantthemes.com/layouts/wp-content/uploads/2017/12/coding-school_home-533x1029.jpg',
        'https://www.elegantthemes.com/layouts/wp-content/uploads/2017/12/coding-school_landing-533x2406.jpg',
        'https://www.elegantthemes.com/layouts/wp-content/uploads/2017/12/coding-school_marketing-533x1591.jpg',
        'https://www.elegantthemes.com/layouts/wp-content/uploads/2017/12/coding-school_pricing-533x1697.jpg'
    ];
    
    let gsImgsArr01 = [
        'https://www.elegantthemes.com/layouts/wp-content/uploads/2017/12/coding-school_about-116x87.jpg',
        'https://www.elegantthemes.com/layouts/wp-content/uploads/2017/12/coding-school_blog-116x87.jpg',
        'https://www.elegantthemes.com/layouts/wp-content/uploads/2017/12/coding-school_contact-116x87.jpg',
        'https://www.elegantthemes.com/layouts/wp-content/uploads/2017/12/coding-school_course-116x87.jpg',
        'https://www.elegantthemes.com/layouts/wp-content/uploads/2017/12/coding-school_courses-116x87.jpg',
        'https://www.elegantthemes.com/layouts/wp-content/uploads/2017/12/coding-school_home-116x87.jpg',
        'https://www.elegantthemes.com/layouts/wp-content/uploads/2017/12/coding-school_landing-116x87.jpg',
        'https://www.elegantthemes.com/layouts/wp-content/uploads/2017/12/coding-school_marketing-116x87.jpg',
        'https://www.elegantthemes.com/layouts/wp-content/uploads/2017/12/coding-school_pricing-116x87.jpg'
    ];

    let imgsTextArr01 = [
        'About',
        'Blog',
        'Contact',
        'Course',
        'Courses',
        'Home',
        'Landing',
        'Marketing',
        'Pricing'
    ];

    for (let i = 0; i < gsImgsArr01.length; i++) {
        const element = gsImgsArr01[i];
        gsImgs[i].src = `${element}`;
        gsImgContainer[i].querySelector('p').textContent = `${imgsTextArr01[i]}`;

        gsImgs[i].addEventListener('click', ()=> {
            s1Img.src = `${s1ImgsArr01[i]}`;
        });
    }
    
    let n = 0;
    let n2 = 0;

    s1ImgsArr01.forEach(element => {
        if (element) {
            n++;
            gsImgContainer[n];
            gsImgContainer[n].style.display = 'flex';
            // console.log(n)
        }
    });
    s1ImgsArr01.forEach(element => {
        if (element === null) {
            n2++;
            gsImgContainer[n2+n-1].style.display = 'none';
        }
    });

    for (let i = 0; i < gsImgsArr01.length; i++) {
        const element = gsImgsArr01[i];
        gsImgs[i].src = `${element}`;
        gsImgContainer[i].querySelector('p').textContent = `${imgsTextArr01[i]}`;

        gsImgs[i].addEventListener('click', ()=> {
            s1Img.src = `${s1ImgsArr01[i]}`;
        });
    }
};

const boxCategory1CMCCSubContainer2System05 = ()=> {
    cmccTag.textContent = 'Event';
    cmccGallerySectionNumber.textContent = `(${7})`;

    s1Img.src = 'https://www.elegantthemes.com/layouts/wp-content/uploads/2017/11/Wedding_Our-Story-533x1919.jpg';
    
    let s1ImgsArr01 = [
        'https://www.elegantthemes.com/layouts/wp-content/uploads/2017/11/Wedding_Our-Story-533x1919.jpg',
        'https://www.elegantthemes.com/layouts/wp-content/uploads/2017/11/Wedding_Blog-533x598.jpg',
        'https://www.elegantthemes.com/layouts/wp-content/uploads/2017/12/wedding_contact-533x688.jpg',
        'https://www.elegantthemes.com/layouts/wp-content/uploads/2017/12/wedding_details-533x1338.jpg',
        'https://www.elegantthemes.com/layouts/wp-content/uploads/2017/11/Wedding_Gallery-533x846.jpg',
        'https://www.elegantthemes.com/layouts/wp-content/uploads/2017/12/wedding_landing-533x3182.jpg',
        null,
        null,
        null
    ];
    
    let gsImgsArr01 = [
        'https://www.elegantthemes.com/layouts/wp-content/uploads/2017/11/Wedding_Our-Story-116x87.jpg',
        'https://www.elegantthemes.com/layouts/wp-content/uploads/2017/11/Wedding_Blog-116x87.jpg',
        'https://www.elegantthemes.com/layouts/wp-content/uploads/2017/12/wedding_contact-116x87.jpg',
        'https://www.elegantthemes.com/layouts/wp-content/uploads/2017/12/wedding_details-116x87.jpg',
        'https://www.elegantthemes.com/layouts/wp-content/uploads/2017/11/Wedding_Gallery-116x87.jpg',
        'https://www.elegantthemes.com/layouts/wp-content/uploads/2017/12/wedding_landing-116x87.jpg',
        null,
        null,
        null
    ];

    let imgsTextArr01 = [
        'About',
        'Blog',
        'Contact',
        'Details',
        'Gallery',
        'Home',
        null,
        null,
        null
    ];


    let n = 0;
    let n2 = 0;

    s1ImgsArr01.forEach(element => {
        if (element) {
            n++;
            gsImgContainer[n];
            gsImgContainer[n].style.display = 'flex';
            // console.log(n)
        }
    });
    s1ImgsArr01.forEach(element => {
        if (element === null) {
            n2++;
            gsImgContainer[n2+n-1].style.display = 'none';
        }
    });

    for (let i = 0; i < gsImgsArr01.length; i++) {
        const element = gsImgsArr01[i];
        gsImgs[i].src = `${element}`;
        gsImgContainer[i].querySelector('p').textContent = `${imgsTextArr01[i]}`;

        gsImgs[i].addEventListener('click', ()=> {
            s1Img.src = `${s1ImgsArr01[i]}`;
        });
    }
};

const boxCategory1CMCCSubContainer2System06 = ()=> {
    cmccTag.textContent = 'Fashion & Beauty';
    cmccGallerySectionNumber.textContent = `(${8})`;

    s1Img.src = 'https://www.elegantthemes.com/layouts/wp-content/uploads/2017/12/fashion-about-533x1127.jpg';
    
    let s1ImgsArr01 = [
        'https://www.elegantthemes.com/layouts/wp-content/uploads/2017/12/fashion-about-533x1127.jpg',
        'https://www.elegantthemes.com/layouts/wp-content/uploads/2017/12/fashion-blog-533x915.jpg',
        'https://www.elegantthemes.com/layouts/wp-content/uploads/2017/12/fashion-contact-533x719.jpg',
        'https://www.elegantthemes.com/layouts/wp-content/uploads/2017/12/fashion-designer-533x828.jpg',
        'https://www.elegantthemes.com/layouts/wp-content/uploads/2017/12/fashion-gallery-533x894.jpg',
        'https://www.elegantthemes.com/layouts/wp-content/uploads/2017/12/fashion-home-533x753.jpg',
        'https://www.elegantthemes.com/layouts/wp-content/uploads/2017/12/fashion-landing-533x2328.jpg',
        'https://www.elegantthemes.com/layouts/wp-content/uploads/2017/12/fashion-shop-533x1212.jpg',
        null
    ];
    
    let gsImgsArr01 = [
        'https://www.elegantthemes.com/layouts/wp-content/uploads/2017/12/fashion-about-116x87.jpg',
        'https://www.elegantthemes.com/layouts/wp-content/uploads/2017/12/fashion-blog-116x87.jpg',
        'https://www.elegantthemes.com/layouts/wp-content/uploads/2017/12/fashion-contact-116x87.jpg',
        'https://www.elegantthemes.com/layouts/wp-content/uploads/2017/12/fashion-designer-116x87.jpg',
        'https://www.elegantthemes.com/layouts/wp-content/uploads/2017/12/fashion-gallery-116x87.jpg',
        'https://www.elegantthemes.com/layouts/wp-content/uploads/2017/12/fashion-home-116x87.jpg',
        'https://www.elegantthemes.com/layouts/wp-content/uploads/2017/12/fashion-landing-116x87.jpg',
        'https://www.elegantthemes.com/layouts/wp-content/uploads/2017/12/fashion-shop-116x87.jpg',
        null
    ];

    let imgsTextArr01 = [
        'About',
        'Blog',
        'Contact',
        'Designer',
        'Gallery',
        'Home',
        'Landing',
        'Shop',
        null
    ];


    let n = 0;
    let n2 = 0;

    s1ImgsArr01.forEach(element => {
        if (element) {
            n++;
            gsImgContainer[n];
            gsImgContainer[n].style.display = 'flex';
            // console.log(n)
        }
    });
    s1ImgsArr01.forEach(element => {
        if (element === null) {
            n2++;
            gsImgContainer[n2+n-1].style.display = 'none';
        }
    });

    for (let i = 0; i < gsImgsArr01.length; i++) {
        const element = gsImgsArr01[i];
        gsImgs[i].src = `${element}`;
        gsImgContainer[i].querySelector('p').textContent = `${imgsTextArr01[i]}`;

        gsImgs[i].addEventListener('click', ()=> {
            s1Img.src = `${s1ImgsArr01[i]}`;
        });
    }
};

const boxCategory1CMCCSubContainer2System07 = ()=> {
    cmccTag.textContent = 'Food & Drink';
    cmccGallerySectionNumber.textContent = `(${8})`;

    s1Img.src = 'https://www.elegantthemes.com/layouts/wp-content/uploads/2017/12/coffee-shop-about-533x2170.jpg';
    
    let s1ImgsArr01 = [
        'https://www.elegantthemes.com/layouts/wp-content/uploads/2017/12/coffee-shop-about-533x2170.jpg',
        'https://www.elegantthemes.com/layouts/wp-content/uploads/2017/12/coffee-shop-blog-533x858.jpg',
        'https://www.elegantthemes.com/layouts/wp-content/uploads/2017/12/coffee-shop-contact-533x603.jpg',
        'https://www.elegantthemes.com/layouts/wp-content/uploads/2017/12/coffee-shop-brew-guide-533x2025.jpg',
        'https://www.elegantthemes.com/layouts/wp-content/uploads/2017/12/coffee-shop-home-533x1047.jpg',
        'https://www.elegantthemes.com/layouts/wp-content/uploads/2017/12/coffee-shop-landing-533x2367.jpg',
        'https://www.elegantthemes.com/layouts/wp-content/uploads/2017/12/coffee-shop-menu-533x1426.jpg',
        'https://www.elegantthemes.com/layouts/wp-content/uploads/2017/12/coffee-shop-shop-533x1243.jpg',
        null
    ];
    
    let gsImgsArr01 = [
        'https://www.elegantthemes.com/layouts/wp-content/uploads/2017/12/coffee-shop-about-116x87.jpg',
        'https://www.elegantthemes.com/layouts/wp-content/uploads/2017/12/coffee-shop-blog-116x87.jpg',
        'https://www.elegantthemes.com/layouts/wp-content/uploads/2017/12/coffee-shop-contact-116x87.jpg',
        'https://www.elegantthemes.com/layouts/wp-content/uploads/2017/12/coffee-shop-brew-guide-116x87.jpg',
        'https://www.elegantthemes.com/layouts/wp-content/uploads/2017/12/coffee-shop-home-116x87.jpg',
        'https://www.elegantthemes.com/layouts/wp-content/uploads/2017/12/coffee-shop-landing-116x87.jpg',
        'https://www.elegantthemes.com/layouts/wp-content/uploads/2017/12/coffee-shop-menu-116x87.jpg',
        'https://www.elegantthemes.com/layouts/wp-content/uploads/2017/12/coffee-shop-shop-116x87.jpg',
        null
    ];

    let imgsTextArr01 = [
        'About',
        'Blog',
        'Contact',
        'Guide',
        'Home',
        'Landing',
        'Menu',
        'Shop',
        null
    ];


    let n = 0;
    let n2 = 0;

    s1ImgsArr01.forEach(element => {
        if (element) {
            n++;
            gsImgContainer[n];
            gsImgContainer[n].style.display = 'flex';
            // console.log(n)
        }
    });
    s1ImgsArr01.forEach(element => {
        if (element === null) {
            n2++;
            gsImgContainer[n2+n-1].style.display = 'none';
        }
    });

    for (let i = 0; i < gsImgsArr01.length; i++) {
        const element = gsImgsArr01[i];
        gsImgs[i].src = `${element}`;
        gsImgContainer[i].querySelector('p').textContent = `${imgsTextArr01[i]}`;

        gsImgs[i].addEventListener('click', ()=> {
            s1Img.src = `${s1ImgsArr01[i]}`;
        });
    }
};

const boxCategory1CMCCSubContainer2System08 = ()=> {
    cmccTag.textContent = 'Health & Fitness';
    cmccGallerySectionNumber.textContent = `(${7})`;

    s1Img.src = 'https://www.elegantthemes.com/layouts/wp-content/uploads/2018/06/pharmacy-about-page-533x1159.jpg';
    
    let s1ImgsArr01 = [
        'https://www.elegantthemes.com/layouts/wp-content/uploads/2018/06/pharmacy-about-page-533x1159.jpg',
        'https://www.elegantthemes.com/layouts/wp-content/uploads/2018/06/pharmacy-contact-page-533x1067.jpg',
        'https://www.elegantthemes.com/layouts/wp-content/uploads/2018/06/pharmacy-home-page-533x1381.jpg',
        'https://www.elegantthemes.com/layouts/wp-content/uploads/2018/06/pharmacy-landing-page-533x1727.jpg',
        'https://www.elegantthemes.com/layouts/wp-content/uploads/2018/06/pharmacy-services-page-533x1313.jpg',
        'https://www.elegantthemes.com/layouts/wp-content/uploads/2018/06/pharmacy-shop-page-533x1200.jpg',
        null,
        null,
        null
    ];
    
    let gsImgsArr01 = [
        'https://www.elegantthemes.com/layouts/wp-content/uploads/2018/06/pharmacy-about-page-116x87.jpg',
        'https://www.elegantthemes.com/layouts/wp-content/uploads/2018/06/pharmacy-contact-page-116x87.jpg',
        'https://www.elegantthemes.com/layouts/wp-content/uploads/2018/06/pharmacy-home-page-116x87.jpg',
        'https://www.elegantthemes.com/layouts/wp-content/uploads/2018/06/pharmacy-landing-page-116x87.jpg',
        'https://www.elegantthemes.com/layouts/wp-content/uploads/2018/06/pharmacy-services-page-116x87.jpg',
        'https://www.elegantthemes.com/layouts/wp-content/uploads/2018/06/pharmacy-shop-page-116x87.jpg',
        null,
        null,
        null
    ];

    let imgsTextArr01 = [
        'About',
        'Contact',
        'Home',
        'Landing',
        'Services',
        'Shop',
        null,
        null,
        null
    ];


    let n = 0;
    let n2 = 0;

    s1ImgsArr01.forEach(element => {
        if (element) {
            n++;
            gsImgContainer[n];
            gsImgContainer[n].style.display = 'flex';
            // console.log(n)
        }
    });
    s1ImgsArr01.forEach(element => {
        if (element === null) {
            n2++;
            gsImgContainer[n2+n-1].style.display = 'none';
        }
    });

    for (let i = 0; i < gsImgsArr01.length; i++) {
        const element = gsImgsArr01[i];
        gsImgs[i].src = `${element}`;
        gsImgContainer[i].querySelector('p').textContent = `${imgsTextArr01[i]}`;

        gsImgs[i].addEventListener('click', ()=> {
            s1Img.src = `${s1ImgsArr01[i]}`;
        });
    }
};

const boxCategory1CMCCSubContainer2System09 = ()=> {
    cmccTag.textContent = 'Lifestyle';
    cmccGallerySectionNumber.textContent = `(${7})`;

    s1Img.src = 'https://www.elegantthemes.com/layouts/wp-content/uploads/2018/05/travel-blog-about-page-533x1780.jpg';
    
    let s1ImgsArr01 = [
        'https://www.elegantthemes.com/layouts/wp-content/uploads/2018/05/travel-blog-about-page-533x1780.jpg',
        'https://www.elegantthemes.com/layouts/wp-content/uploads/2018/05/travel-blog-blog-page-533x1326.jpg',
        'https://www.elegantthemes.com/layouts/wp-content/uploads/2018/05/travel-blog-contact-page-533x600.jpg',
        'https://www.elegantthemes.com/layouts/wp-content/uploads/2018/05/travel-blog-home-page-533x1163.jpg',
        'https://www.elegantthemes.com/layouts/wp-content/uploads/2018/05/travel-blog-landing-page-533x2942.jpg',
        'https://www.elegantthemes.com/layouts/wp-content/uploads/2018/05/travel-blog-trip-page-533x2804.jpg',
        null,
        null,
        null
    ];
    
    let gsImgsArr01 = [
        'https://www.elegantthemes.com/layouts/wp-content/uploads/2018/05/travel-blog-about-page-116x87.jpg',
        'https://www.elegantthemes.com/layouts/wp-content/uploads/2018/05/travel-blog-blog-page-116x87.jpg',
        'https://www.elegantthemes.com/layouts/wp-content/uploads/2018/05/travel-blog-contact-page-116x87.jpg',
        'https://www.elegantthemes.com/layouts/wp-content/uploads/2018/05/travel-blog-home-page-116x87.jpg',
        'https://www.elegantthemes.com/layouts/wp-content/uploads/2018/05/travel-blog-landing-page-116x87.jpg',
        'https://www.elegantthemes.com/layouts/wp-content/uploads/2018/05/travel-blog-trip-page-116x87.jpg',
        null,
        null,
        null
    ];

    let imgsTextArr01 = [
        'About',
        'Blog',
        'Contact',
        'Home',
        'Landing',
        'Travel Blog ...',
        null,
        null,
        null
    ];


    let n = 0;
    let n2 = 0;

    s1ImgsArr01.forEach(element => {
        if (element) {
            n++;
            gsImgContainer[n];
            gsImgContainer[n].style.display = 'flex';
            // console.log(n)
        }
    });
    s1ImgsArr01.forEach(element => {
        if (element === null) {
            n2++;
            gsImgContainer[n2+n-1].style.display = 'none';
        }
    });

    for (let i = 0; i < gsImgsArr01.length; i++) {
        const element = gsImgsArr01[i];
        gsImgs[i].src = `${element}`;
        gsImgContainer[i].querySelector('p').textContent = `${imgsTextArr01[i]}`;

        gsImgs[i].addEventListener('click', ()=> {
            s1Img.src = `${s1ImgsArr01[i]}`;
        });
    }
};

const boxCategory1CMCCSubContainer2System10 = ()=> {
    cmccTag.textContent = 'Online Store';
    cmccGallerySectionNumber.textContent = `(${7})`;

    s1Img.src = 'https://www.elegantthemes.com/layouts/wp-content/uploads/2018/05/jeweler-about-page-533x1629.jpg';
    
    let s1ImgsArr01 = [
        'https://www.elegantthemes.com/layouts/wp-content/uploads/2018/05/jeweler-about-page-533x1629.jpg',
        'https://www.elegantthemes.com/layouts/wp-content/uploads/2018/05/jeweler-blog-page-533x750.jpg',
        'https://www.elegantthemes.com/layouts/wp-content/uploads/2018/05/jeweler-contact-page-533x684.jpg',
        'https://www.elegantthemes.com/layouts/wp-content/uploads/2018/05/jeweler-education-page-533x1664.jpg',
        'https://www.elegantthemes.com/layouts/wp-content/uploads/2018/05/jeweler-home-page-533x919.jpg',
        'https://www.elegantthemes.com/layouts/wp-content/uploads/2018/05/jeweler-landing-page-533x2572.jpg',
        'https://www.elegantthemes.com/layouts/wp-content/uploads/2018/05/jeweler-shop-page-533x1266.jpg',
        null,
        null
    ];
    
    let gsImgsArr01 = [
        'https://www.elegantthemes.com/layouts/wp-content/uploads/2018/05/jeweler-about-page-116x87.jpg',
        'https://www.elegantthemes.com/layouts/wp-content/uploads/2018/05/jeweler-blog-page-116x87.jpg',
        'https://www.elegantthemes.com/layouts/wp-content/uploads/2018/05/jeweler-contact-page-116x87.jpg',
        'https://www.elegantthemes.com/layouts/wp-content/uploads/2018/05/jeweler-education-page-116x87.jpg',
        'https://www.elegantthemes.com/layouts/wp-content/uploads/2018/05/jeweler-home-page-116x87.jpg',
        'https://www.elegantthemes.com/layouts/wp-content/uploads/2018/05/jeweler-landing-page-116x87.jpg',
        'https://www.elegantthemes.com/layouts/wp-content/uploads/2018/05/jeweler-shop-page-116x87.jpg',
        null,
        null
    ];

    let imgsTextArr01 = [
        'About',
        'Blog',
        'Contact',
        'Jeweler Ed...',
        'Home',
        'Landing',
        'Shop',
        null,
        null
    ];


    let n = 0;
    let n2 = 0;

    s1ImgsArr01.forEach(element => {
        if (element) {
            n++;
            gsImgContainer[n];
            gsImgContainer[n].style.display = 'flex';
            // console.log(n)
        }
    });
    s1ImgsArr01.forEach(element => {
        if (element === null) {
            n2++;
            gsImgContainer[n2+n-1].style.display = 'none';
        }
    });

    for (let i = 0; i < gsImgsArr01.length; i++) {
        const element = gsImgsArr01[i];
        gsImgs[i].src = `${element}`;
        gsImgContainer[i].querySelector('p').textContent = `${imgsTextArr01[i]}`;

        gsImgs[i].addEventListener('click', ()=> {
            s1Img.src = `${s1ImgsArr01[i]}`;
        });
    }
};

const boxCategory1CMCCSubContainer2System11 = ()=> {
    cmccTag.textContent = 'Services';
    cmccGallerySectionNumber.textContent = `(${9})`;

    s1Img.src = 'https://www.elegantthemes.com/layouts/wp-content/uploads/2017/12/copywriter-about-533x1170.jpg';
    
    let s1ImgsArr01 = [
        'https://www.elegantthemes.com/layouts/wp-content/uploads/2017/12/copywriter-about-533x1170.jpg',
        'https://www.elegantthemes.com/layouts/wp-content/uploads/2017/12/copywriter-blog-533x704.jpg',
        'https://www.elegantthemes.com/layouts/wp-content/uploads/2017/12/copywriter-contact-533x767.jpg',
        'https://www.elegantthemes.com/layouts/wp-content/uploads/2017/12/copywriter-faq-533x784.jpg',
        'https://www.elegantthemes.com/layouts/wp-content/uploads/2017/12/copywriter-home-533x859.jpg',
        'https://www.elegantthemes.com/layouts/wp-content/uploads/2017/12/copywriter-landing-533x2155.jpg',
        'https://www.elegantthemes.com/layouts/wp-content/uploads/2017/12/copywriter-portfolio-533x1089.jpg',
        'https://www.elegantthemes.com/layouts/wp-content/uploads/2017/12/copywriter-pricing-533x1104.jpg',
        'https://www.elegantthemes.com/layouts/wp-content/uploads/2017/12/copywriter-services-533x1636.jpg'
    ];
    
    let gsImgsArr01 = [
        'https://www.elegantthemes.com/layouts/wp-content/uploads/2017/12/copywriter-about-116x87.jpg',
        'https://www.elegantthemes.com/layouts/wp-content/uploads/2017/12/copywriter-blog-116x87.jpg',
        'https://www.elegantthemes.com/layouts/wp-content/uploads/2017/12/copywriter-contact-116x87.jpg',
        'https://www.elegantthemes.com/layouts/wp-content/uploads/2017/12/copywriter-faq-116x87.jpg',
        'https://www.elegantthemes.com/layouts/wp-content/uploads/2017/12/copywriter-home-116x87.jpg',
        'https://www.elegantthemes.com/layouts/wp-content/uploads/2017/12/copywriter-landing-116x87.jpg',
        'https://www.elegantthemes.com/layouts/wp-content/uploads/2017/12/copywriter-portfolio-116x87.jpg',
        'https://www.elegantthemes.com/layouts/wp-content/uploads/2017/12/copywriter-pricing-116x87.jpg',
        'https://www.elegantthemes.com/layouts/wp-content/uploads/2017/12/copywriter-services-116x87.jpg'
    ];

    let imgsTextArr01 = [
        'About',
        'Blog',
        'Contact',
        'FAQ',
        'Home',
        'Landing',
        'Portfolio',
        'Pricing',
        'Services'
    ];

    for (let i = 0; i < gsImgsArr01.length; i++) {
        const element = gsImgsArr01[i];
        gsImgs[i].src = `${element}`;
        gsImgContainer[i].querySelector('p').textContent = `${imgsTextArr01[i]}`;

        gsImgs[i].addEventListener('click', ()=> {
            s1Img.src = `${s1ImgsArr01[i]}`;
        });
    }

    let n = 0;
    let n2 = 0;

    s1ImgsArr01.forEach(element => {
        if (element) {
            n++;
            gsImgContainer[n];
            gsImgContainer[n].style.display = 'flex';
            // console.log(n)
        }
    });
    s1ImgsArr01.forEach(element => {
        if (element === null) {
            n2++;
            gsImgContainer[n2+n-1].style.display = 'none';
        }
    });

    for (let i = 0; i < gsImgsArr01.length; i++) {
        const element = gsImgsArr01[i];
        gsImgs[i].src = `${element}`;
        gsImgContainer[i].querySelector('p').textContent = `${imgsTextArr01[i]}`;

        gsImgs[i].addEventListener('click', ()=> {
            s1Img.src = `${s1ImgsArr01[i]}`;
        });
    }
};

const boxCategory1CMCCSubContainer2System12 = ()=> {
    cmccTag.textContent = 'Simple';
    cmccGallerySectionNumber.textContent = `(${9})`;

    s1Img.src = 'https://www.elegantthemes.com/layouts/wp-content/uploads/2018/01/simple-about-me-page-533x292.jpg';
    
    let s1ImgsArr01 = [
        'https://www.elegantthemes.com/layouts/wp-content/uploads/2018/01/simple-about-me-page-533x292.jpg',
        'https://www.elegantthemes.com/layouts/wp-content/uploads/2018/01/simple-about-us-page-533x479.jpg',
        'https://www.elegantthemes.com/layouts/wp-content/uploads/2018/01/simple-blog-page-533x339.jpg',
        'https://www.elegantthemes.com/layouts/wp-content/uploads/2018/01/simple-coming-soon-page-533x208.jpg',
        'https://www.elegantthemes.com/layouts/wp-content/uploads/2018/01/simple-contact-us-page-533x318.jpg',
        'https://www.elegantthemes.com/layouts/wp-content/uploads/2018/01/simple-dual-sidebars-page-533x357.jpg',
        'https://www.elegantthemes.com/layouts/wp-content/uploads/2018/01/simple-fullwidth-page-533x317.jpg',
        'https://www.elegantthemes.com/layouts/wp-content/uploads/2018/01/simple-home-page-533x436.jpg',
        'https://www.elegantthemes.com/layouts/wp-content/uploads/2018/01/simple-sales-page-533x972.jpg'
    ];
    
    let gsImgsArr01 = [
        'https://www.elegantthemes.com/layouts/wp-content/uploads/2018/01/simple-about-me-page-116x87.jpg',
        'https://www.elegantthemes.com/layouts/wp-content/uploads/2018/01/simple-about-us-page-116x87.jpg',
        'https://www.elegantthemes.com/layouts/wp-content/uploads/2018/01/simple-blog-page-116x87.jpg',
        'https://www.elegantthemes.com/layouts/wp-content/uploads/2018/01/simple-coming-soon-page-116x87.jpg',
        'https://www.elegantthemes.com/layouts/wp-content/uploads/2018/01/simple-contact-us-page-116x87.jpg',
        'https://www.elegantthemes.com/layouts/wp-content/uploads/2018/01/simple-dual-sidebars-page-116x87.jpg',
        'https://www.elegantthemes.com/layouts/wp-content/uploads/2018/01/simple-fullwidth-page-116x87.jpg',
        'https://www.elegantthemes.com/layouts/wp-content/uploads/2018/01/simple-home-page-116x87.jpg',
        'https://www.elegantthemes.com/layouts/wp-content/uploads/2018/01/simple-sales-page-116x87.jpg'
    ];

    let imgsTextArr01 = [
        'Simple Abo...',
        'Simple Abo...',
        'Blog',
        'Simple Co...',
        'Simple Con...',
        'Simple Dua...',
        'Simple Full...',
        'Home',
        'Landing'
    ];

    for (let i = 0; i < gsImgsArr01.length; i++) {
        const element = gsImgsArr01[i];
        gsImgs[i].src = `${element}`;
        gsImgContainer[i].querySelector('p').textContent = `${imgsTextArr01[i]}`;

        gsImgs[i].addEventListener('click', ()=> {
            s1Img.src = `${s1ImgsArr01[i]}`;
        });
    }
    
    let n = 0;
    let n2 = 0;

    s1ImgsArr01.forEach(element => {
        if (element) {
            n++;
            gsImgContainer[n];
            gsImgContainer[n].style.display = 'flex';
            // console.log(n)
        }
    });
    s1ImgsArr01.forEach(element => {
        if (element === null) {
            n2++;
            gsImgContainer[n2+n-1].style.display = 'none';
        }
    });

    for (let i = 0; i < gsImgsArr01.length; i++) {
        const element = gsImgsArr01[i];
        gsImgs[i].src = `${element}`;
        gsImgContainer[i].querySelector('p').textContent = `${imgsTextArr01[i]}`;

        gsImgs[i].addEventListener('click', ()=> {
            s1Img.src = `${s1ImgsArr01[i]}`;
        });
    }
};

const boxCategory1CMCCSubContainer2System13 = ()=> {
    cmccTag.textContent = 'Simple';
    cmccGallerySectionNumber.textContent = `(${8})`;

    s1Img.src = 'https://www.elegantthemes.com/layouts/wp-content/uploads/2018/05/digital-marketing-about-page-533x1535.jpg';
    
    let s1ImgsArr01 = [
        'https://www.elegantthemes.com/layouts/wp-content/uploads/2018/05/digital-marketing-about-page-533x1535.jpg',
        'https://www.elegantthemes.com/layouts/wp-content/uploads/2018/05/digital-marketing-blog-page-533x806.jpg',
        'https://www.elegantthemes.com/layouts/wp-content/uploads/2018/05/digital-marketing-careers-page-533x1322.jpg',
        'https://www.elegantthemes.com/layouts/wp-content/uploads/2018/05/digital-marketing-contact-page-533x663.jpg',
        'https://www.elegantthemes.com/layouts/wp-content/uploads/2018/05/digital-marketing-home-page-533x1107.jpg',
        'https://www.elegantthemes.com/layouts/wp-content/uploads/2018/05/digital-marketing-landing-page-533x2167.jpg',
        'https://www.elegantthemes.com/layouts/wp-content/uploads/2018/05/digital-marketing-portfolio-page-533x1044.jpg',
        'https://www.elegantthemes.com/layouts/wp-content/uploads/2018/05/digital-marketing-services-page-533x1196.jpg',
        null
    ];
    
    let gsImgsArr01 = [
        'https://www.elegantthemes.com/layouts/wp-content/uploads/2018/05/digital-marketing-about-page-116x87.jpg',
        'https://www.elegantthemes.com/layouts/wp-content/uploads/2018/05/digital-marketing-blog-page-116x87.jpg',
        'https://www.elegantthemes.com/layouts/wp-content/uploads/2018/05/digital-marketing-careers-page-116x87.jpg',
        'https://www.elegantthemes.com/layouts/wp-content/uploads/2018/05/digital-marketing-contact-page-116x87.jpg',
        'https://www.elegantthemes.com/layouts/wp-content/uploads/2018/05/digital-marketing-home-page-116x87.jpg',
        'https://www.elegantthemes.com/layouts/wp-content/uploads/2018/05/digital-marketing-landing-page-116x87.jpg',
        'https://www.elegantthemes.com/layouts/wp-content/uploads/2018/05/digital-marketing-portfolio-page-116x87.jpg',
        'https://www.elegantthemes.com/layouts/wp-content/uploads/2018/05/digital-marketing-services-page-116x87.jpg',
        null
    ];

    let imgsTextArr01 = [
        'About',
        'Blog',
        'Careers',
        'Contact',
        'Home',
        'Landing',
        'Portfolio',
        'Services',
        null
    ];
    
    for (let i = 0; i < gsImgsArr01.length; i++) {
        const element = gsImgsArr01[i];
        gsImgs[i].src = `${element}`;
        gsImgContainer[i].querySelector('p').textContent = `${imgsTextArr01[i]}`;

        gsImgs[i].addEventListener('click', ()=> {
            s1Img.src = `${s1ImgsArr01[i]}`;
        });
    }
    
    let n = 0;
    let n2 = 0;

    s1ImgsArr01.forEach(element => {
        if (element) {
            n++;
            gsImgContainer[n];
            gsImgContainer[n].style.display = 'flex';
            // console.log(n)
        }
    });
    s1ImgsArr01.forEach(element => {
        if (element === null) {
            n2++;
            gsImgContainer[n2+n-1].style.display = 'none';
        }
    });

    for (let i = 0; i < gsImgsArr01.length; i++) {
        const element = gsImgsArr01[i];
        gsImgs[i].src = `${element}`;
        gsImgContainer[i].querySelector('p').textContent = `${imgsTextArr01[i]}`;

        gsImgs[i].addEventListener('click', ()=> {
            s1Img.src = `${s1ImgsArr01[i]}`;
        });
    }
};

const boxCategorysPopUpSystem = ()=> {
    boxCategory1[0].addEventListener('click', ()=> {
        gsImgContainer[0].querySelector('p').classList.add('p-class-list');
        cmccSubContainer2.classList.add('cmcc-sub-container-class-list-2');
        cmccSubContainer.classList.add('cmcc-sub-container-class-list');
        boxCategory1CMCCSubContainer2System01();
    });

    boxCategory2[0].addEventListener('click', ()=> {
        gsImgContainer[0].querySelector('p').classList.add('p-class-list');
        cmccSubContainer2.classList.add('cmcc-sub-container-class-list-2');
        cmccSubContainer.classList.add('cmcc-sub-container-class-list');
        boxCategory1CMCCSubContainer2System02();
    });

    boxCategory3[0].addEventListener('click', ()=> {
        gsImgContainer[0].querySelector('p').classList.add('p-class-list');
        cmccSubContainer2.classList.add('cmcc-sub-container-class-list-2');
        cmccSubContainer.classList.add('cmcc-sub-container-class-list');
        boxCategory1CMCCSubContainer2System03();
    });

    boxCategory4[0].addEventListener('click', ()=> {
        gsImgContainer[0].querySelector('p').classList.add('p-class-list');
        cmccSubContainer2.classList.add('cmcc-sub-container-class-list-2');
        cmccSubContainer.classList.add('cmcc-sub-container-class-list');
        boxCategory1CMCCSubContainer2System04();
    });

    boxCategory5[0].addEventListener('click', ()=> {
        gsImgContainer[0].querySelector('p').classList.add('p-class-list');
        cmccSubContainer2.classList.add('cmcc-sub-container-class-list-2');
        cmccSubContainer.classList.add('cmcc-sub-container-class-list');
        boxCategory1CMCCSubContainer2System05();
    });

    boxCategory6[0].addEventListener('click', ()=> {
        gsImgContainer[0].querySelector('p').classList.add('p-class-list');
        cmccSubContainer2.classList.add('cmcc-sub-container-class-list-2');
        cmccSubContainer.classList.add('cmcc-sub-container-class-list');
        boxCategory1CMCCSubContainer2System06();
    });

    boxCategory7[0].addEventListener('click', ()=> {
        gsImgContainer[0].querySelector('p').classList.add('p-class-list');
        cmccSubContainer2.classList.add('cmcc-sub-container-class-list-2');
        cmccSubContainer.classList.add('cmcc-sub-container-class-list');
        boxCategory1CMCCSubContainer2System07();
    });

    boxCategory8[0].addEventListener('click', ()=> {
        gsImgContainer[0].querySelector('p').classList.add('p-class-list');
        cmccSubContainer2.classList.add('cmcc-sub-container-class-list-2');
        cmccSubContainer.classList.add('cmcc-sub-container-class-list');
        boxCategory1CMCCSubContainer2System08();
    });

    boxCategory9[0].addEventListener('click', ()=> {
        gsImgContainer[0].querySelector('p').classList.add('p-class-list');
        cmccSubContainer2.classList.add('cmcc-sub-container-class-list-2');
        cmccSubContainer.classList.add('cmcc-sub-container-class-list');
        boxCategory1CMCCSubContainer2System09();
    });

    boxCategory10[0].addEventListener('click', ()=> {
        gsImgContainer[0].querySelector('p').classList.add('p-class-list');
        cmccSubContainer2.classList.add('cmcc-sub-container-class-list-2');
        cmccSubContainer.classList.add('cmcc-sub-container-class-list');
        boxCategory1CMCCSubContainer2System10();
    });

    boxCategory11[0].addEventListener('click', ()=> {
        gsImgContainer[0].querySelector('p').classList.add('p-class-list');
        cmccSubContainer2.classList.add('cmcc-sub-container-class-list-2');
        cmccSubContainer.classList.add('cmcc-sub-container-class-list');
        boxCategory1CMCCSubContainer2System11();
    });

    boxCategory12[0].addEventListener('click', ()=> {
        gsImgContainer[0].querySelector('p').classList.add('p-class-list');
        cmccSubContainer2.classList.add('cmcc-sub-container-class-list-2');
        cmccSubContainer.classList.add('cmcc-sub-container-class-list');
        boxCategory1CMCCSubContainer2System12();
    });

    boxCategory13[0].addEventListener('click', ()=> {
        gsImgContainer[0].querySelector('p').classList.add('p-class-list');
        cmccSubContainer2.classList.add('cmcc-sub-container-class-list-2');
        cmccSubContainer.classList.add('cmcc-sub-container-class-list');
        boxCategory1CMCCSubContainer2System13();
    });
};
boxCategorysPopUpSystem();

const enterExitPagesSystem = ()=> { 
    exitToMainPage.addEventListener('click', ()=> {
        cmccSubContainer.classList.remove('cmcc-sub-container-class-list');
        cmccSubContainer2.classList.remove('cmcc-sub-container-class-list-2');
    });    
};
enterExitPagesSystem();

// 5.) footer-content-container |=======>
const ftParaSpan1 = document.querySelector('.ft-para-span-1');
const ftParaSpan2 = document.querySelector('.ft-para-span-2');

const ftParaSpanSystem1 = ()=> {
    if (window.scrollY >= 1700) {
        ftParaSpan1.classList.add('ft-para-span-class-list');
    }
    if (window.scrollY >= 1900) {
        ftParaSpan2.classList.add('ft-para-span-class-list');
    }

    // ==========
    
    if (window.scrollY <= 1700) {
        ftParaSpan1.classList.remove('ft-para-span-class-list');
    }
    if (window.scrollY <= 1900) {
        ftParaSpan2.classList.remove('ft-para-span-class-list');
    }
}

const ftParaSpanSystem2 = ()=> {
    if (window.innerWidth <= 1145) {
        if (window.scrollY >= 1810) {
            ftParaSpan1.classList.add('ft-para-span-class-list');
        }
        if (window.scrollY >= 2010) {
            ftParaSpan2.classList.add('ft-para-span-class-list');
        }
    
        // ==========
        
        if (window.scrollY <= 1810) {
            ftParaSpan1.classList.remove('ft-para-span-class-list');
        }
        if (window.scrollY <= 2010) {
            ftParaSpan2.classList.remove('ft-para-span-class-list');
        }
    }
}
const ftParaSpanMainSystem = ()=> {
    ftParaSpanSystem1();
    ftParaSpanSystem2(); 
};
setInterval(()=> {
    ftParaSpanMainSystem();
}, 1000);
