"use strict";

// 1.) messager-icon-container |=======>
var messageContainerContentBox = document.querySelector('.message-container-content-box');
var messagerIconContainer = document.querySelector('.messager-icon-container');
messageContainerContentBox.style.display = 'none';
messagerIconContainer.addEventListener('click', function () {
  messagerIconContainer.querySelector('img').src = '../imgs/message-img-2.jpg';
  messageContainerContentBox.style.display = 'block';
});
messageContainerContentBox.addEventListener('mouseleave', function () {
  messagerIconContainer.querySelector('img').src = '../imgs/message-img.jpg';
  messageContainerContentBox.style.display = 'none';
}); // 2.) main-top-navbar |======>

var mainTopNavbar = document.querySelector('.main-top-navbar');

var topNavSystemManuver = function topNavSystemManuver() {
  window.scrollY > 50 ? mainTopNavbar.classList.add('main-top-navbar-class-list') : mainTopNavbar.classList.remove('main-top-navbar-class-list');
};

setInterval(function () {
  topNavSystemManuver();
}, 100); // 3.) side-navbar-link-container |======>

var sideNavbarLinkContainer = document.querySelectorAll('.side-navbar-link-container');
var imageGalleryBox = document.querySelectorAll('.image-gallery-box');
var sideBarCheckBox = document.querySelectorAll('.side-bar-check-box');
var cmccTag = document.querySelector('.cmcc-tag-container p');
var imgCanvasImg = document.querySelectorAll('.img-canvas img');
var imgCanvas = document.querySelectorAll('.img-canvas');
var imageGalleryBoxSection1 = {
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
};
var boxCategory1 = imageGalleryBoxSection1.boxCategory1,
    boxCategory2 = imageGalleryBoxSection1.boxCategory2,
    boxCategory3 = imageGalleryBoxSection1.boxCategory3,
    boxCategory4 = imageGalleryBoxSection1.boxCategory4,
    boxCategory5 = imageGalleryBoxSection1.boxCategory5,
    boxCategory6 = imageGalleryBoxSection1.boxCategory6,
    boxCategory7 = imageGalleryBoxSection1.boxCategory7,
    boxCategory8 = imageGalleryBoxSection1.boxCategory8,
    boxCategory9 = imageGalleryBoxSection1.boxCategory9,
    boxCategory10 = imageGalleryBoxSection1.boxCategory10,
    boxCategory11 = imageGalleryBoxSection1.boxCategory11,
    boxCategory12 = imageGalleryBoxSection1.boxCategory12,
    boxCategory13 = imageGalleryBoxSection1.boxCategory13,
    boxCategory14 = imageGalleryBoxSection1.boxCategory14;
var allImgBoxCategories = [boxCategory1, boxCategory2, boxCategory3, boxCategory4, boxCategory5, boxCategory6, boxCategory7, boxCategory8, boxCategory9, boxCategory10, boxCategory11, boxCategory12, boxCategory13, boxCategory14]; // MAKE CHANGE HERE ==========>

var selectTag = document.querySelector('.search-bar');
var selectTagOptions = selectTag.querySelectorAll('option');
var categoryNames = ['Art & Design', 'Business', 'Community & Non-Profit', 'Education', 'Events', 'Fashion & Beauty', 'Food & Drink', 'Health & Fitness', 'Lifestyle', 'Online Store', 'Services', 'Simple', 'Technology', 'All'];

var boxCategorySortationSystem1 = function boxCategorySortationSystem1() {
  sideNavbarLinkContainer[0].addEventListener('click', function () {
    selectTagOptions[0].innerHTML = "Chosen: ".concat(categoryNames[0]);

    for (var i = 0; i < boxCategory1.length; i++) {
      var element = boxCategory1[i];

      if (element.classList.contains('art-design')) {
        element.classList.add('image-gallery-box-class-list');
      }

      if (sideBarCheckBox[0].classList.contains('span-class-list') == true) {
        sideBarCheckBox[0].classList.remove('span-class-list');
      }
    }

    for (var _i = 0; _i < boxCategory2.length; _i++) {
      var _element = boxCategory2[_i];

      if (_element.classList.contains('art-design') == false) {
        _element.classList.remove('image-gallery-box-class-list');
      }
    }

    for (var _i2 = 0; _i2 < boxCategory3.length; _i2++) {
      var _element2 = boxCategory3[_i2];

      if (_element2.classList.contains('art-design') == false) {
        _element2.classList.remove('image-gallery-box-class-list');
      }
    }

    for (var _i3 = 0; _i3 < boxCategory4.length; _i3++) {
      var _element3 = boxCategory4[_i3];

      if (_element3.classList.contains('art-design') == false) {
        _element3.classList.remove('image-gallery-box-class-list');
      }
    }

    for (var _i4 = 0; _i4 < boxCategory13.length; _i4++) {
      var _element4 = boxCategory13[_i4];

      if (_element4.classList.contains('art-design') == false) {
        _element4.classList.remove('image-gallery-box-class-list');
      }
    }

    for (var _i5 = 0; _i5 < boxCategory12.length; _i5++) {
      var _element5 = boxCategory12[_i5];

      if (_element5.classList.contains('art-design') == false) {
        _element5.classList.remove('image-gallery-box-class-list');
      }
    }

    for (var _i6 = 0; _i6 < boxCategory11.length; _i6++) {
      var _element6 = boxCategory11[_i6];

      if (_element6.classList.contains('art-design') == false) {
        _element6.classList.remove('image-gallery-box-class-list');
      }
    }

    for (var _i7 = 0; _i7 < boxCategory10.length; _i7++) {
      var _element7 = boxCategory10[_i7];

      if (_element7.classList.contains('art-design') == false) {
        _element7.classList.remove('image-gallery-box-class-list');
      }
    }

    for (var _i8 = 0; _i8 < boxCategory9.length; _i8++) {
      var _element8 = boxCategory9[_i8];

      if (_element8.classList.contains('art-design') == false) {
        _element8.classList.remove('image-gallery-box-class-list');
      }
    }

    for (var _i9 = 0; _i9 < boxCategory8.length; _i9++) {
      var _element9 = boxCategory8[_i9];

      if (_element9.classList.contains('art-design') == false) {
        _element9.classList.remove('image-gallery-box-class-list');
      }
    }

    for (var _i10 = 0; _i10 < boxCategory7.length; _i10++) {
      var _element10 = boxCategory7[_i10];

      if (_element10.classList.contains('art-design') == false) {
        _element10.classList.remove('image-gallery-box-class-list');
      }
    }

    for (var _i11 = 0; _i11 < boxCategory6.length; _i11++) {
      var _element11 = boxCategory6[_i11];

      if (_element11.classList.contains('art-design') == false) {
        _element11.classList.remove('image-gallery-box-class-list');
      }
    }

    for (var _i12 = 0; _i12 < boxCategory5.length; _i12++) {
      var _element12 = boxCategory5[_i12];

      if (_element12.classList.contains('art-design') == false) {
        _element12.classList.remove('image-gallery-box-class-list');
      }
    }
  });
};

var boxCategorySortationSystem2 = function boxCategorySortationSystem2() {
  sideNavbarLinkContainer[1].addEventListener('click', function () {
    selectTagOptions[0].innerHTML = "Chosen: ".concat(categoryNames[1]);

    for (var i = 0; i < boxCategory13.length; i++) {
      var element = boxCategory13[i];

      if (element.classList.contains('business') == false) {
        element.classList.remove('image-gallery-box-class-list');
      }
    }

    for (var _i13 = 0; _i13 < boxCategory12.length; _i13++) {
      var _element13 = boxCategory12[_i13];

      if (_element13.classList.contains('business') == false) {
        _element13.classList.remove('image-gallery-box-class-list');
      }
    }

    for (var _i14 = 0; _i14 < boxCategory11.length; _i14++) {
      var _element14 = boxCategory11[_i14];

      if (_element14.classList.contains('business') == false) {
        _element14.classList.remove('image-gallery-box-class-list');
      }
    }

    for (var _i15 = 0; _i15 < boxCategory10.length; _i15++) {
      var _element15 = boxCategory10[_i15];

      if (_element15.classList.contains('business') == false) {
        _element15.classList.remove('image-gallery-box-class-list');
      }
    }

    for (var _i16 = 0; _i16 < boxCategory9.length; _i16++) {
      var _element16 = boxCategory9[_i16];

      if (_element16.classList.contains('business') == false) {
        _element16.classList.remove('image-gallery-box-class-list');
      }
    }

    for (var _i17 = 0; _i17 < boxCategory8.length; _i17++) {
      var _element17 = boxCategory8[_i17];

      if (_element17.classList.contains('business') == false) {
        _element17.classList.remove('image-gallery-box-class-list');
      }
    }

    for (var _i18 = 0; _i18 < boxCategory7.length; _i18++) {
      var _element18 = boxCategory7[_i18];

      if (_element18.classList.contains('business') == false) {
        _element18.classList.remove('image-gallery-box-class-list');
      }
    }

    for (var _i19 = 0; _i19 < boxCategory6.length; _i19++) {
      var _element19 = boxCategory6[_i19];

      if (_element19.classList.contains('business') == false) {
        _element19.classList.remove('image-gallery-box-class-list');
      }
    }

    for (var _i20 = 0; _i20 < boxCategory5.length; _i20++) {
      var _element20 = boxCategory5[_i20];

      if (_element20.classList.contains('business') == false) {
        _element20.classList.remove('image-gallery-box-class-list');
      }
    }

    for (var _i21 = 0; _i21 < boxCategory4.length; _i21++) {
      var _element21 = boxCategory4[_i21];

      if (_element21.classList.contains('business') == false) {
        _element21.classList.remove('image-gallery-box-class-list');
      }
    }

    for (var _i22 = 0; _i22 < boxCategory3.length; _i22++) {
      var _element22 = boxCategory3[_i22];

      if (_element22.classList.contains('business') == false) {
        _element22.classList.remove('image-gallery-box-class-list');
      }
    }

    for (var _i23 = 0; _i23 < boxCategory2.length; _i23++) {
      var _element23 = boxCategory2[_i23];

      if (_element23.classList.contains('business')) {
        _element23.classList.add('image-gallery-box-class-list');
      }
    }

    for (var _i24 = 0; _i24 < boxCategory1.length; _i24++) {
      var _element24 = boxCategory1[_i24];

      if (_element24.classList.contains('business') == false) {
        _element24.classList.remove('image-gallery-box-class-list');
      }
    }
  });
};

var boxCategorySortationSystem3 = function boxCategorySortationSystem3() {
  sideNavbarLinkContainer[2].addEventListener('click', function () {
    selectTagOptions[0].innerHTML = "Chosen: ".concat(categoryNames[2]);

    for (var i = 0; i < boxCategory13.length; i++) {
      var element = boxCategory13[i];

      if (element.classList.contains('community-non-profit') == false) {
        element.classList.remove('image-gallery-box-class-list');
      }
    }

    for (var _i25 = 0; _i25 < boxCategory12.length; _i25++) {
      var _element25 = boxCategory12[_i25];

      if (_element25.classList.contains('community-non-profit') == false) {
        _element25.classList.remove('image-gallery-box-class-list');
      }
    }

    for (var _i26 = 0; _i26 < boxCategory11.length; _i26++) {
      var _element26 = boxCategory11[_i26];

      if (_element26.classList.contains('community-non-profit') == false) {
        _element26.classList.remove('image-gallery-box-class-list');
      }
    }

    for (var _i27 = 0; _i27 < boxCategory10.length; _i27++) {
      var _element27 = boxCategory10[_i27];

      if (_element27.classList.contains('community-non-profit') == false) {
        _element27.classList.remove('image-gallery-box-class-list');
      }
    }

    for (var _i28 = 0; _i28 < boxCategory9.length; _i28++) {
      var _element28 = boxCategory9[_i28];

      if (_element28.classList.contains('community-non-profit') == false) {
        _element28.classList.remove('image-gallery-box-class-list');
      }
    }

    for (var _i29 = 0; _i29 < boxCategory8.length; _i29++) {
      var _element29 = boxCategory8[_i29];

      if (_element29.classList.contains('community-non-profit') == false) {
        _element29.classList.remove('image-gallery-box-class-list');
      }
    }

    for (var _i30 = 0; _i30 < boxCategory7.length; _i30++) {
      var _element30 = boxCategory7[_i30];

      if (_element30.classList.contains('community-non-profit') == false) {
        _element30.classList.remove('image-gallery-box-class-list');
      }
    }

    for (var _i31 = 0; _i31 < boxCategory6.length; _i31++) {
      var _element31 = boxCategory6[_i31];

      if (_element31.classList.contains('community-non-profit') == false) {
        _element31.classList.remove('image-gallery-box-class-list');
      }
    }

    for (var _i32 = 0; _i32 < boxCategory5.length; _i32++) {
      var _element32 = boxCategory5[_i32];

      if (_element32.classList.contains('community-non-profit') == false) {
        _element32.classList.remove('image-gallery-box-class-list');
      }
    }

    for (var _i33 = 0; _i33 < boxCategory4.length; _i33++) {
      var _element33 = boxCategory4[_i33];

      if (_element33.classList.contains('community-non-profit') == false) {
        _element33.classList.remove('image-gallery-box-class-list');
      }
    }

    for (var _i34 = 0; _i34 < boxCategory3.length; _i34++) {
      var _element34 = boxCategory3[_i34];

      if (_element34.classList.contains('community-non-profit')) {
        _element34.classList.add('image-gallery-box-class-list');
      }
    }

    for (var _i35 = 0; _i35 < boxCategory2.length; _i35++) {
      var _element35 = boxCategory2[_i35];

      if (_element35.classList.contains('community-non-profit') == false) {
        _element35.classList.remove('image-gallery-box-class-list');
      }
    }

    for (var _i36 = 0; _i36 < boxCategory1.length; _i36++) {
      var _element36 = boxCategory1[_i36];

      if (_element36.classList.contains('community-non-profit') == false) {
        _element36.classList.remove('image-gallery-box-class-list');
      }
    }
  });
};

var boxCategorySortationSystem4 = function boxCategorySortationSystem4() {
  sideNavbarLinkContainer[3].addEventListener('click', function () {
    selectTagOptions[0].innerHTML = "Chosen: ".concat(categoryNames[3]);

    for (var i = 0; i < boxCategory13.length; i++) {
      var element = boxCategory13[i];

      if (element.classList.contains('education') == false) {
        element.classList.remove('image-gallery-box-class-list');
      }
    }

    for (var _i37 = 0; _i37 < boxCategory12.length; _i37++) {
      var _element37 = boxCategory12[_i37];

      if (_element37.classList.contains('education') == false) {
        _element37.classList.remove('image-gallery-box-class-list');
      }
    }

    for (var _i38 = 0; _i38 < boxCategory11.length; _i38++) {
      var _element38 = boxCategory11[_i38];

      if (_element38.classList.contains('education') == false) {
        _element38.classList.remove('image-gallery-box-class-list');
      }
    }

    for (var _i39 = 0; _i39 < boxCategory10.length; _i39++) {
      var _element39 = boxCategory10[_i39];

      if (_element39.classList.contains('education') == false) {
        _element39.classList.remove('image-gallery-box-class-list');
      }
    }

    for (var _i40 = 0; _i40 < boxCategory9.length; _i40++) {
      var _element40 = boxCategory9[_i40];

      if (_element40.classList.contains('education') == false) {
        _element40.classList.remove('image-gallery-box-class-list');
      }
    }

    for (var _i41 = 0; _i41 < boxCategory8.length; _i41++) {
      var _element41 = boxCategory8[_i41];

      if (_element41.classList.contains('education') == false) {
        _element41.classList.remove('image-gallery-box-class-list');
      }
    }

    for (var _i42 = 0; _i42 < boxCategory7.length; _i42++) {
      var _element42 = boxCategory7[_i42];

      if (_element42.classList.contains('education') == false) {
        _element42.classList.remove('image-gallery-box-class-list');
      }
    }

    for (var _i43 = 0; _i43 < boxCategory6.length; _i43++) {
      var _element43 = boxCategory6[_i43];

      if (_element43.classList.contains('education') == false) {
        _element43.classList.remove('image-gallery-box-class-list');
      }
    }

    for (var _i44 = 0; _i44 < boxCategory5.length; _i44++) {
      var _element44 = boxCategory5[_i44];

      if (_element44.classList.contains('education') == false) {
        _element44.classList.remove('image-gallery-box-class-list');
      }
    }

    for (var _i45 = 0; _i45 < boxCategory4.length; _i45++) {
      var _element45 = boxCategory4[_i45];

      if (_element45.classList.contains('education')) {
        _element45.classList.add('image-gallery-box-class-list');
      }
    }

    for (var _i46 = 0; _i46 < boxCategory3.length; _i46++) {
      var _element46 = boxCategory3[_i46];

      if (_element46.classList.contains('education') == false) {
        _element46.classList.remove('image-gallery-box-class-list');
      }
    }

    for (var _i47 = 0; _i47 < boxCategory2.length; _i47++) {
      var _element47 = boxCategory2[_i47];

      if (_element47.classList.contains('education') == false) {
        _element47.classList.remove('image-gallery-box-class-list');
      }
    }

    for (var _i48 = 0; _i48 < boxCategory1.length; _i48++) {
      var _element48 = boxCategory1[_i48];

      if (_element48.classList.contains('education') == false) {
        _element48.classList.remove('image-gallery-box-class-list');
      }
    }
  });
};

var boxCategorySortationSystem5 = function boxCategorySortationSystem5() {
  sideNavbarLinkContainer[4].addEventListener('click', function () {
    selectTagOptions[0].innerHTML = "Chosen: ".concat(categoryNames[4]);

    for (var i = 0; i < boxCategory13.length; i++) {
      var element = boxCategory13[i];

      if (element.classList.contains('events') == false) {
        element.classList.remove('image-gallery-box-class-list');
      }
    }

    for (var _i49 = 0; _i49 < boxCategory12.length; _i49++) {
      var _element49 = boxCategory12[_i49];

      if (_element49.classList.contains('events') == false) {
        _element49.classList.remove('image-gallery-box-class-list');
      }
    }

    for (var _i50 = 0; _i50 < boxCategory11.length; _i50++) {
      var _element50 = boxCategory11[_i50];

      if (_element50.classList.contains('events') == false) {
        _element50.classList.remove('image-gallery-box-class-list');
      }
    }

    for (var _i51 = 0; _i51 < boxCategory10.length; _i51++) {
      var _element51 = boxCategory10[_i51];

      if (_element51.classList.contains('events') == false) {
        _element51.classList.remove('image-gallery-box-class-list');
      }
    }

    for (var _i52 = 0; _i52 < boxCategory9.length; _i52++) {
      var _element52 = boxCategory9[_i52];

      if (_element52.classList.contains('events') == false) {
        _element52.classList.remove('image-gallery-box-class-list');
      }
    }

    for (var _i53 = 0; _i53 < boxCategory8.length; _i53++) {
      var _element53 = boxCategory8[_i53];

      if (_element53.classList.contains('events') == false) {
        _element53.classList.remove('image-gallery-box-class-list');
      }
    }

    for (var _i54 = 0; _i54 < boxCategory7.length; _i54++) {
      var _element54 = boxCategory7[_i54];

      if (_element54.classList.contains('events') == false) {
        _element54.classList.remove('image-gallery-box-class-list');
      }
    }

    for (var _i55 = 0; _i55 < boxCategory6.length; _i55++) {
      var _element55 = boxCategory6[_i55];

      if (_element55.classList.contains('events') == false) {
        _element55.classList.remove('image-gallery-box-class-list');
      }
    }

    for (var _i56 = 0; _i56 < boxCategory5.length; _i56++) {
      var _element56 = boxCategory5[_i56];

      if (_element56.classList.contains('events')) {
        _element56.classList.add('image-gallery-box-class-list');
      }
    }

    for (var _i57 = 0; _i57 < boxCategory4.length; _i57++) {
      var _element57 = boxCategory4[_i57];

      if (_element57.classList.contains('events') == false) {
        _element57.classList.remove('image-gallery-box-class-list');
      }
    }

    for (var _i58 = 0; _i58 < boxCategory3.length; _i58++) {
      var _element58 = boxCategory3[_i58];

      if (_element58.classList.contains('events') == false) {
        _element58.classList.remove('image-gallery-box-class-list');
      }
    }

    for (var _i59 = 0; _i59 < boxCategory2.length; _i59++) {
      var _element59 = boxCategory2[_i59];

      if (_element59.classList.contains('events') == false) {
        _element59.classList.remove('image-gallery-box-class-list');
      }
    }

    for (var _i60 = 0; _i60 < boxCategory1.length; _i60++) {
      var _element60 = boxCategory1[_i60];

      if (_element60.classList.contains('events') == false) {
        _element60.classList.remove('image-gallery-box-class-list');
      }
    }
  });
};

var boxCategorySortationSystem6 = function boxCategorySortationSystem6() {
  sideNavbarLinkContainer[5].addEventListener('click', function () {
    selectTagOptions[0].innerHTML = "Chosen: ".concat(categoryNames[5]);

    for (var i = 0; i < boxCategory13.length; i++) {
      var element = boxCategory13[i];

      if (element.classList.contains('fashion-beauty') == false) {
        element.classList.remove('image-gallery-box-class-list');
      }
    }

    for (var _i61 = 0; _i61 < boxCategory12.length; _i61++) {
      var _element61 = boxCategory12[_i61];

      if (_element61.classList.contains('fashion-beauty') == false) {
        _element61.classList.remove('image-gallery-box-class-list');
      }
    }

    for (var _i62 = 0; _i62 < boxCategory11.length; _i62++) {
      var _element62 = boxCategory11[_i62];

      if (_element62.classList.contains('fashion-beauty') == false) {
        _element62.classList.remove('image-gallery-box-class-list');
      }
    }

    for (var _i63 = 0; _i63 < boxCategory10.length; _i63++) {
      var _element63 = boxCategory10[_i63];

      if (_element63.classList.contains('fashion-beauty') == false) {
        _element63.classList.remove('image-gallery-box-class-list');
      }
    }

    for (var _i64 = 0; _i64 < boxCategory9.length; _i64++) {
      var _element64 = boxCategory9[_i64];

      if (_element64.classList.contains('fashion-beauty') == false) {
        _element64.classList.remove('image-gallery-box-class-list');
      }
    }

    for (var _i65 = 0; _i65 < boxCategory8.length; _i65++) {
      var _element65 = boxCategory8[_i65];

      if (_element65.classList.contains('fashion-beauty') == false) {
        _element65.classList.remove('image-gallery-box-class-list');
      }
    }

    for (var _i66 = 0; _i66 < boxCategory7.length; _i66++) {
      var _element66 = boxCategory7[_i66];

      if (_element66.classList.contains('fashion-beauty') == false) {
        _element66.classList.remove('image-gallery-box-class-list');
      }
    }

    for (var _i67 = 0; _i67 < boxCategory6.length; _i67++) {
      var _element67 = boxCategory6[_i67];

      if (_element67.classList.contains('fashion-beauty')) {
        _element67.classList.add('image-gallery-box-class-list');
      }
    }

    for (var _i68 = 0; _i68 < boxCategory5.length; _i68++) {
      var _element68 = boxCategory5[_i68];

      if (_element68.classList.contains('fashion-beauty') == false) {
        _element68.classList.remove('image-gallery-box-class-list');
      }
    }

    for (var _i69 = 0; _i69 < boxCategory4.length; _i69++) {
      var _element69 = boxCategory4[_i69];

      if (_element69.classList.contains('fashion-beauty') == false) {
        _element69.classList.remove('image-gallery-box-class-list');
      }
    }

    for (var _i70 = 0; _i70 < boxCategory3.length; _i70++) {
      var _element70 = boxCategory3[_i70];

      if (_element70.classList.contains('fashion-beauty') == false) {
        _element70.classList.remove('image-gallery-box-class-list');
      }
    }

    for (var _i71 = 0; _i71 < boxCategory2.length; _i71++) {
      var _element71 = boxCategory2[_i71];

      if (_element71.classList.contains('fashion-beauty') == false) {
        _element71.classList.remove('image-gallery-box-class-list');
      }
    }

    for (var _i72 = 0; _i72 < boxCategory1.length; _i72++) {
      var _element72 = boxCategory1[_i72];

      if (_element72.classList.contains('fashion-beauty') == false) {
        _element72.classList.remove('image-gallery-box-class-list');
      }
    }
  });
};

var boxCategorySortationSystem7 = function boxCategorySortationSystem7() {
  sideNavbarLinkContainer[6].addEventListener('click', function () {
    selectTagOptions[0].innerHTML = "Chosen: ".concat(categoryNames[6]);

    for (var i = 0; i < boxCategory13.length; i++) {
      var element = boxCategory13[i];

      if (element.classList.contains('food-drink') == false) {
        element.classList.remove('image-gallery-box-class-list');
      }
    }

    for (var _i73 = 0; _i73 < boxCategory12.length; _i73++) {
      var _element73 = boxCategory12[_i73];

      if (_element73.classList.contains('food-drink') == false) {
        _element73.classList.remove('image-gallery-box-class-list');
      }
    }

    for (var _i74 = 0; _i74 < boxCategory11.length; _i74++) {
      var _element74 = boxCategory11[_i74];

      if (_element74.classList.contains('food-drink') == false) {
        _element74.classList.remove('image-gallery-box-class-list');
      }
    }

    for (var _i75 = 0; _i75 < boxCategory10.length; _i75++) {
      var _element75 = boxCategory10[_i75];

      if (_element75.classList.contains('food-drink') == false) {
        _element75.classList.remove('image-gallery-box-class-list');
      }
    }

    for (var _i76 = 0; _i76 < boxCategory9.length; _i76++) {
      var _element76 = boxCategory9[_i76];

      if (_element76.classList.contains('food-drink') == false) {
        _element76.classList.remove('image-gallery-box-class-list');
      }
    }

    for (var _i77 = 0; _i77 < boxCategory8.length; _i77++) {
      var _element77 = boxCategory8[_i77];

      if (_element77.classList.contains('food-drink') == false) {
        _element77.classList.remove('image-gallery-box-class-list');
      }
    }

    for (var _i78 = 0; _i78 < boxCategory7.length; _i78++) {
      var _element78 = boxCategory7[_i78];

      if (_element78.classList.contains('food-drink')) {
        _element78.classList.add('image-gallery-box-class-list');
      }
    }

    for (var _i79 = 0; _i79 < boxCategory6.length; _i79++) {
      var _element79 = boxCategory6[_i79];

      if (_element79.classList.contains('food-drink') == false) {
        _element79.classList.remove('image-gallery-box-class-list');
      }
    }

    for (var _i80 = 0; _i80 < boxCategory5.length; _i80++) {
      var _element80 = boxCategory5[_i80];

      if (_element80.classList.contains('food-drink') == false) {
        _element80.classList.remove('image-gallery-box-class-list');
      }
    }

    for (var _i81 = 0; _i81 < boxCategory4.length; _i81++) {
      var _element81 = boxCategory4[_i81];

      if (_element81.classList.contains('food-drink') == false) {
        _element81.classList.remove('image-gallery-box-class-list');
      }
    }

    for (var _i82 = 0; _i82 < boxCategory3.length; _i82++) {
      var _element82 = boxCategory3[_i82];

      if (_element82.classList.contains('food-drink') == false) {
        _element82.classList.remove('image-gallery-box-class-list');
      }
    }

    for (var _i83 = 0; _i83 < boxCategory2.length; _i83++) {
      var _element83 = boxCategory2[_i83];

      if (_element83.classList.contains('food-drink') == false) {
        _element83.classList.remove('image-gallery-box-class-list');
      }
    }

    for (var _i84 = 0; _i84 < boxCategory1.length; _i84++) {
      var _element84 = boxCategory1[_i84];

      if (_element84.classList.contains('food-drink') == false) {
        _element84.classList.remove('image-gallery-box-class-list');
      }
    }
  });
};

var boxCategorySortationSystem8 = function boxCategorySortationSystem8() {
  sideNavbarLinkContainer[7].addEventListener('click', function () {
    selectTagOptions[0].innerHTML = "Chosen: ".concat(categoryNames[7]);

    for (var i = 0; i < boxCategory13.length; i++) {
      var element = boxCategory13[i];

      if (element.classList.contains('health-fitness') == false) {
        element.classList.remove('image-gallery-box-class-list');
      }
    }

    for (var _i85 = 0; _i85 < boxCategory12.length; _i85++) {
      var _element85 = boxCategory12[_i85];

      if (_element85.classList.contains('health-fitness') == false) {
        _element85.classList.remove('image-gallery-box-class-list');
      }
    }

    for (var _i86 = 0; _i86 < boxCategory11.length; _i86++) {
      var _element86 = boxCategory11[_i86];

      if (_element86.classList.contains('health-fitness') == false) {
        _element86.classList.remove('image-gallery-box-class-list');
      }
    }

    for (var _i87 = 0; _i87 < boxCategory10.length; _i87++) {
      var _element87 = boxCategory10[_i87];

      if (_element87.classList.contains('health-fitness') == false) {
        _element87.classList.remove('image-gallery-box-class-list');
      }
    }

    for (var _i88 = 0; _i88 < boxCategory9.length; _i88++) {
      var _element88 = boxCategory9[_i88];

      if (_element88.classList.contains('health-fitness') == false) {
        _element88.classList.remove('image-gallery-box-class-list');
      }
    }

    for (var _i89 = 0; _i89 < boxCategory8.length; _i89++) {
      var _element89 = boxCategory8[_i89];

      if (_element89.classList.contains('health-fitness')) {
        _element89.classList.add('image-gallery-box-class-list');
      }
    }

    for (var _i90 = 0; _i90 < boxCategory7.length; _i90++) {
      var _element90 = boxCategory7[_i90];

      if (_element90.classList.contains('health-fitness') == false) {
        _element90.classList.remove('image-gallery-box-class-list');
      }
    }

    for (var _i91 = 0; _i91 < boxCategory6.length; _i91++) {
      var _element91 = boxCategory6[_i91];

      if (_element91.classList.contains('health-fitness') == false) {
        _element91.classList.remove('image-gallery-box-class-list');
      }
    }

    for (var _i92 = 0; _i92 < boxCategory5.length; _i92++) {
      var _element92 = boxCategory5[_i92];

      if (_element92.classList.contains('health-fitness') == false) {
        _element92.classList.remove('image-gallery-box-class-list');
      }
    }

    for (var _i93 = 0; _i93 < boxCategory4.length; _i93++) {
      var _element93 = boxCategory4[_i93];

      if (_element93.classList.contains('health-fitness') == false) {
        _element93.classList.remove('image-gallery-box-class-list');
      }
    }

    for (var _i94 = 0; _i94 < boxCategory3.length; _i94++) {
      var _element94 = boxCategory3[_i94];

      if (_element94.classList.contains('health-fitness') == false) {
        _element94.classList.remove('image-gallery-box-class-list');
      }
    }

    for (var _i95 = 0; _i95 < boxCategory2.length; _i95++) {
      var _element95 = boxCategory2[_i95];

      if (_element95.classList.contains('health-fitness') == false) {
        _element95.classList.remove('image-gallery-box-class-list');
      }
    }

    for (var _i96 = 0; _i96 < boxCategory1.length; _i96++) {
      var _element96 = boxCategory1[_i96];

      if (_element96.classList.contains('health-fitness') == false) {
        _element96.classList.remove('image-gallery-box-class-list');
      }
    }
  });
};

var boxCategorySortationSystem9 = function boxCategorySortationSystem9() {
  sideNavbarLinkContainer[8].addEventListener('click', function () {
    selectTagOptions[0].innerHTML = "Chosen: ".concat(categoryNames[8]);

    for (var i = 0; i < boxCategory13.length; i++) {
      var element = boxCategory13[i];

      if (element.classList.contains('lifestyle') == false) {
        element.classList.remove('image-gallery-box-class-list');
      }
    }

    for (var _i97 = 0; _i97 < boxCategory12.length; _i97++) {
      var _element97 = boxCategory12[_i97];

      if (_element97.classList.contains('lifestyle') == false) {
        _element97.classList.remove('image-gallery-box-class-list');
      }
    }

    for (var _i98 = 0; _i98 < boxCategory11.length; _i98++) {
      var _element98 = boxCategory11[_i98];

      if (_element98.classList.contains('lifestyle') == false) {
        _element98.classList.remove('image-gallery-box-class-list');
      }
    }

    for (var _i99 = 0; _i99 < boxCategory10.length; _i99++) {
      var _element99 = boxCategory10[_i99];

      if (_element99.classList.contains('lifestyle') == false) {
        _element99.classList.remove('image-gallery-box-class-list');
      }
    }

    for (var _i100 = 0; _i100 < boxCategory9.length; _i100++) {
      var _element100 = boxCategory9[_i100];

      if (_element100.classList.contains('lifestyle')) {
        _element100.classList.add('image-gallery-box-class-list');
      }
    }

    for (var _i101 = 0; _i101 < boxCategory8.length; _i101++) {
      var _element101 = boxCategory8[_i101];

      if (_element101.classList.contains('lifestyle') == false) {
        _element101.classList.remove('image-gallery-box-class-list');
      }
    }

    for (var _i102 = 0; _i102 < boxCategory7.length; _i102++) {
      var _element102 = boxCategory7[_i102];

      if (_element102.classList.contains('lifestyle') == false) {
        _element102.classList.remove('image-gallery-box-class-list');
      }
    }

    for (var _i103 = 0; _i103 < boxCategory6.length; _i103++) {
      var _element103 = boxCategory6[_i103];

      if (_element103.classList.contains('lifestyle') == false) {
        _element103.classList.remove('image-gallery-box-class-list');
      }
    }

    for (var _i104 = 0; _i104 < boxCategory5.length; _i104++) {
      var _element104 = boxCategory5[_i104];

      if (_element104.classList.contains('lifestyle') == false) {
        _element104.classList.remove('image-gallery-box-class-list');
      }
    }

    for (var _i105 = 0; _i105 < boxCategory4.length; _i105++) {
      var _element105 = boxCategory4[_i105];

      if (_element105.classList.contains('lifestyle') == false) {
        _element105.classList.remove('image-gallery-box-class-list');
      }
    }

    for (var _i106 = 0; _i106 < boxCategory3.length; _i106++) {
      var _element106 = boxCategory3[_i106];

      if (_element106.classList.contains('lifestyle') == false) {
        _element106.classList.remove('image-gallery-box-class-list');
      }
    }

    for (var _i107 = 0; _i107 < boxCategory2.length; _i107++) {
      var _element107 = boxCategory2[_i107];

      if (_element107.classList.contains('lifestyle') == false) {
        _element107.classList.remove('image-gallery-box-class-list');
      }
    }

    for (var _i108 = 0; _i108 < boxCategory1.length; _i108++) {
      var _element108 = boxCategory1[_i108];

      if (_element108.classList.contains('lifestyle') == false) {
        _element108.classList.remove('image-gallery-box-class-list');
      }
    }
  });
};

var boxCategorySortationSystem10 = function boxCategorySortationSystem10() {
  sideNavbarLinkContainer[9].addEventListener('click', function () {
    selectTagOptions[0].innerHTML = "Chosen: ".concat(categoryNames[9]);

    for (var i = 0; i < boxCategory13.length; i++) {
      var element = boxCategory13[i];

      if (element.classList.contains('online-store') == false) {
        element.classList.remove('image-gallery-box-class-list');
      }
    }

    for (var _i109 = 0; _i109 < boxCategory12.length; _i109++) {
      var _element109 = boxCategory12[_i109];

      if (_element109.classList.contains('online-store') == false) {
        _element109.classList.remove('image-gallery-box-class-list');
      }
    }

    for (var _i110 = 0; _i110 < boxCategory11.length; _i110++) {
      var _element110 = boxCategory11[_i110];

      if (_element110.classList.contains('online-store') == false) {
        _element110.classList.remove('image-gallery-box-class-list');
      }
    }

    for (var _i111 = 0; _i111 < boxCategory10.length; _i111++) {
      var _element111 = boxCategory10[_i111];

      if (_element111.classList.contains('online-store')) {
        _element111.classList.add('image-gallery-box-class-list');
      }
    }

    for (var _i112 = 0; _i112 < boxCategory9.length; _i112++) {
      var _element112 = boxCategory9[_i112];

      if (_element112.classList.contains('online-store') == false) {
        _element112.classList.remove('image-gallery-box-class-list');
      }
    }

    for (var _i113 = 0; _i113 < boxCategory8.length; _i113++) {
      var _element113 = boxCategory8[_i113];

      if (_element113.classList.contains('online-store') == false) {
        _element113.classList.remove('image-gallery-box-class-list');
      }
    }

    for (var _i114 = 0; _i114 < boxCategory7.length; _i114++) {
      var _element114 = boxCategory7[_i114];

      if (_element114.classList.contains('online-store') == false) {
        _element114.classList.remove('image-gallery-box-class-list');
      }
    }

    for (var _i115 = 0; _i115 < boxCategory6.length; _i115++) {
      var _element115 = boxCategory6[_i115];

      if (_element115.classList.contains('online-store') == false) {
        _element115.classList.remove('image-gallery-box-class-list');
      }
    }

    for (var _i116 = 0; _i116 < boxCategory5.length; _i116++) {
      var _element116 = boxCategory5[_i116];

      if (_element116.classList.contains('online-store') == false) {
        _element116.classList.remove('image-gallery-box-class-list');
      }
    }

    for (var _i117 = 0; _i117 < boxCategory4.length; _i117++) {
      var _element117 = boxCategory4[_i117];

      if (_element117.classList.contains('online-store') == false) {
        _element117.classList.remove('image-gallery-box-class-list');
      }
    }

    for (var _i118 = 0; _i118 < boxCategory3.length; _i118++) {
      var _element118 = boxCategory3[_i118];

      if (_element118.classList.contains('online-store') == false) {
        _element118.classList.remove('image-gallery-box-class-list');
      }
    }

    for (var _i119 = 0; _i119 < boxCategory2.length; _i119++) {
      var _element119 = boxCategory2[_i119];

      if (_element119.classList.contains('online-store') == false) {
        _element119.classList.remove('image-gallery-box-class-list');
      }
    }

    for (var _i120 = 0; _i120 < boxCategory1.length; _i120++) {
      var _element120 = boxCategory1[_i120];

      if (_element120.classList.contains('online-store') == false) {
        _element120.classList.remove('image-gallery-box-class-list');
      }
    }
  });
};

var boxCategorySortationSystem11 = function boxCategorySortationSystem11() {
  sideNavbarLinkContainer[10].addEventListener('click', function () {
    selectTagOptions[0].innerHTML = "Chosen: ".concat(categoryNames[10]);

    for (var i = 0; i < boxCategory13.length; i++) {
      var element = boxCategory13[i];

      if (element.classList.contains('services') == false) {
        element.classList.remove('image-gallery-box-class-list');
      }
    }

    for (var _i121 = 0; _i121 < boxCategory12.length; _i121++) {
      var _element121 = boxCategory12[_i121];

      if (_element121.classList.contains('services') == false) {
        _element121.classList.remove('image-gallery-box-class-list');
      }
    }

    for (var _i122 = 0; _i122 < boxCategory11.length; _i122++) {
      var _element122 = boxCategory11[_i122];

      if (_element122.classList.contains('services')) {
        _element122.classList.add('image-gallery-box-class-list');
      }
    }

    for (var _i123 = 0; _i123 < boxCategory10.length; _i123++) {
      var _element123 = boxCategory10[_i123];

      if (_element123.classList.contains('services') == false) {
        _element123.classList.remove('image-gallery-box-class-list');
      }
    }

    for (var _i124 = 0; _i124 < boxCategory9.length; _i124++) {
      var _element124 = boxCategory9[_i124];

      if (_element124.classList.contains('services') == false) {
        _element124.classList.remove('image-gallery-box-class-list');
      }
    }

    for (var _i125 = 0; _i125 < boxCategory8.length; _i125++) {
      var _element125 = boxCategory8[_i125];

      if (_element125.classList.contains('services') == false) {
        _element125.classList.remove('image-gallery-box-class-list');
      }
    }

    for (var _i126 = 0; _i126 < boxCategory7.length; _i126++) {
      var _element126 = boxCategory7[_i126];

      if (_element126.classList.contains('services') == false) {
        _element126.classList.remove('image-gallery-box-class-list');
      }
    }

    for (var _i127 = 0; _i127 < boxCategory6.length; _i127++) {
      var _element127 = boxCategory6[_i127];

      if (_element127.classList.contains('services') == false) {
        _element127.classList.remove('image-gallery-box-class-list');
      }
    }

    for (var _i128 = 0; _i128 < boxCategory5.length; _i128++) {
      var _element128 = boxCategory5[_i128];

      if (_element128.classList.contains('services') == false) {
        _element128.classList.remove('image-gallery-box-class-list');
      }
    }

    for (var _i129 = 0; _i129 < boxCategory4.length; _i129++) {
      var _element129 = boxCategory4[_i129];

      if (_element129.classList.contains('services') == false) {
        _element129.classList.remove('image-gallery-box-class-list');
      }
    }

    for (var _i130 = 0; _i130 < boxCategory3.length; _i130++) {
      var _element130 = boxCategory3[_i130];

      if (_element130.classList.contains('services') == false) {
        _element130.classList.remove('image-gallery-box-class-list');
      }
    }

    for (var _i131 = 0; _i131 < boxCategory2.length; _i131++) {
      var _element131 = boxCategory2[_i131];

      if (_element131.classList.contains('services') == false) {
        _element131.classList.remove('image-gallery-box-class-list');
      }
    }

    for (var _i132 = 0; _i132 < boxCategory1.length; _i132++) {
      var _element132 = boxCategory1[_i132];

      if (_element132.classList.contains('services') == false) {
        _element132.classList.remove('image-gallery-box-class-list');
      }
    }
  });
};

var boxCategorySortationSystem12 = function boxCategorySortationSystem12() {
  sideNavbarLinkContainer[11].addEventListener('click', function () {
    selectTagOptions[0].innerHTML = "Chosen: ".concat(categoryNames[11]);

    for (var i = 0; i < boxCategory13.length; i++) {
      var element = boxCategory13[i];

      if (element.classList.contains('simple') == false) {
        element.classList.remove('image-gallery-box-class-list');
      }
    }

    for (var _i133 = 0; _i133 < boxCategory12.length; _i133++) {
      var _element133 = boxCategory12[_i133];

      if (_element133.classList.contains('simple')) {
        _element133.classList.add('image-gallery-box-class-list');
      }
    }

    for (var _i134 = 0; _i134 < boxCategory11.length; _i134++) {
      var _element134 = boxCategory11[_i134];

      if (_element134.classList.contains('simple') == false) {
        _element134.classList.remove('image-gallery-box-class-list');
      }
    }

    for (var _i135 = 0; _i135 < boxCategory10.length; _i135++) {
      var _element135 = boxCategory10[_i135];

      if (_element135.classList.contains('simple') == false) {
        _element135.classList.remove('image-gallery-box-class-list');
      }
    }

    for (var _i136 = 0; _i136 < boxCategory9.length; _i136++) {
      var _element136 = boxCategory9[_i136];

      if (_element136.classList.contains('simple') == false) {
        _element136.classList.remove('image-gallery-box-class-list');
      }
    }

    for (var _i137 = 0; _i137 < boxCategory8.length; _i137++) {
      var _element137 = boxCategory8[_i137];

      if (_element137.classList.contains('simple') == false) {
        _element137.classList.remove('image-gallery-box-class-list');
      }
    }

    for (var _i138 = 0; _i138 < boxCategory7.length; _i138++) {
      var _element138 = boxCategory7[_i138];

      if (_element138.classList.contains('simple') == false) {
        _element138.classList.remove('image-gallery-box-class-list');
      }
    }

    for (var _i139 = 0; _i139 < boxCategory6.length; _i139++) {
      var _element139 = boxCategory6[_i139];

      if (_element139.classList.contains('simple') == false) {
        _element139.classList.remove('image-gallery-box-class-list');
      }
    }

    for (var _i140 = 0; _i140 < boxCategory5.length; _i140++) {
      var _element140 = boxCategory5[_i140];

      if (_element140.classList.contains('simple') == false) {
        _element140.classList.remove('image-gallery-box-class-list');
      }
    }

    for (var _i141 = 0; _i141 < boxCategory4.length; _i141++) {
      var _element141 = boxCategory4[_i141];

      if (_element141.classList.contains('simple') == false) {
        _element141.classList.remove('image-gallery-box-class-list');
      }
    }

    for (var _i142 = 0; _i142 < boxCategory3.length; _i142++) {
      var _element142 = boxCategory3[_i142];

      if (_element142.classList.contains('simple') == false) {
        _element142.classList.remove('image-gallery-box-class-list');
      }
    }

    for (var _i143 = 0; _i143 < boxCategory2.length; _i143++) {
      var _element143 = boxCategory2[_i143];

      if (_element143.classList.contains('simple') == false) {
        _element143.classList.remove('image-gallery-box-class-list');
      }
    }

    for (var _i144 = 0; _i144 < boxCategory1.length; _i144++) {
      var _element144 = boxCategory1[_i144];

      if (_element144.classList.contains('simple') == false) {
        _element144.classList.remove('image-gallery-box-class-list');
      }
    }
  });
};

var boxCategorySortationSystem13 = function boxCategorySortationSystem13() {
  sideNavbarLinkContainer[12].addEventListener('click', function () {
    selectTagOptions[0].innerHTML = "Chosen: ".concat(categoryNames[12]);

    for (var i = 0; i < boxCategory13.length; i++) {
      var element = boxCategory13[i];

      if (element.classList.contains('technology')) {
        element.classList.add('image-gallery-box-class-list');
      }
    }

    for (var _i145 = 0; _i145 < boxCategory12.length; _i145++) {
      var _element145 = boxCategory12[_i145];

      if (_element145.classList.contains('technology') == false) {
        _element145.classList.remove('image-gallery-box-class-list');
      }
    }

    for (var _i146 = 0; _i146 < boxCategory11.length; _i146++) {
      var _element146 = boxCategory11[_i146];

      if (_element146.classList.contains('technology') == false) {
        _element146.classList.remove('image-gallery-box-class-list');
      }
    }

    for (var _i147 = 0; _i147 < boxCategory10.length; _i147++) {
      var _element147 = boxCategory10[_i147];

      if (_element147.classList.contains('technology') == false) {
        _element147.classList.remove('image-gallery-box-class-list');
      }
    }

    for (var _i148 = 0; _i148 < boxCategory9.length; _i148++) {
      var _element148 = boxCategory9[_i148];

      if (_element148.classList.contains('technology') == false) {
        _element148.classList.remove('image-gallery-box-class-list');
      }
    }

    for (var _i149 = 0; _i149 < boxCategory8.length; _i149++) {
      var _element149 = boxCategory8[_i149];

      if (_element149.classList.contains('technology') == false) {
        _element149.classList.remove('image-gallery-box-class-list');
      }
    }

    for (var _i150 = 0; _i150 < boxCategory7.length; _i150++) {
      var _element150 = boxCategory7[_i150];

      if (_element150.classList.contains('technology') == false) {
        _element150.classList.remove('image-gallery-box-class-list');
      }
    }

    for (var _i151 = 0; _i151 < boxCategory6.length; _i151++) {
      var _element151 = boxCategory6[_i151];

      if (_element151.classList.contains('technology') == false) {
        _element151.classList.remove('image-gallery-box-class-list');
      }
    }

    for (var _i152 = 0; _i152 < boxCategory5.length; _i152++) {
      var _element152 = boxCategory5[_i152];

      if (_element152.classList.contains('technology') == false) {
        _element152.classList.remove('image-gallery-box-class-list');
      }
    }

    for (var _i153 = 0; _i153 < boxCategory4.length; _i153++) {
      var _element153 = boxCategory4[_i153];

      if (_element153.classList.contains('technology') == false) {
        _element153.classList.remove('image-gallery-box-class-list');
      }
    }

    for (var _i154 = 0; _i154 < boxCategory3.length; _i154++) {
      var _element154 = boxCategory3[_i154];

      if (_element154.classList.contains('technology') == false) {
        _element154.classList.remove('image-gallery-box-class-list');
      }
    }

    for (var _i155 = 0; _i155 < boxCategory2.length; _i155++) {
      var _element155 = boxCategory2[_i155];

      if (_element155.classList.contains('technology') == false) {
        _element155.classList.remove('image-gallery-box-class-list');
      }
    }

    for (var _i156 = 0; _i156 < boxCategory1.length; _i156++) {
      var _element156 = boxCategory1[_i156];

      if (_element156.classList.contains('technology') == false) {
        _element156.classList.remove('image-gallery-box-class-list');
      }
    }
  });
};

var boxCategorySortationSystem14 = function boxCategorySortationSystem14() {
  sideNavbarLinkContainer[13].addEventListener('click', function () {
    selectTagOptions[0].innerHTML = "Chosen: ".concat(categoryNames[13]);

    for (var i = 0; i < boxCategory1.length; i++) {
      var element = boxCategory1[i];
      element.classList.add('image-gallery-box-class-list');
    }

    for (var _i157 = 0; _i157 < boxCategory2.length; _i157++) {
      var _element157 = boxCategory2[_i157];

      _element157.classList.add('image-gallery-box-class-list');
    }

    for (var _i158 = 0; _i158 < boxCategory3.length; _i158++) {
      var _element158 = boxCategory3[_i158];

      _element158.classList.add('image-gallery-box-class-list');
    }

    for (var _i159 = 0; _i159 < boxCategory4.length; _i159++) {
      var _element159 = boxCategory4[_i159];

      _element159.classList.add('image-gallery-box-class-list');
    }

    for (var _i160 = 0; _i160 < boxCategory5.length; _i160++) {
      var _element160 = boxCategory5[_i160];

      _element160.classList.add('image-gallery-box-class-list');
    }

    for (var _i161 = 0; _i161 < boxCategory6.length; _i161++) {
      var _element161 = boxCategory6[_i161];

      _element161.classList.add('image-gallery-box-class-list');
    }

    for (var _i162 = 0; _i162 < boxCategory7.length; _i162++) {
      var _element162 = boxCategory7[_i162];

      _element162.classList.add('image-gallery-box-class-list');
    }

    for (var _i163 = 0; _i163 < boxCategory8.length; _i163++) {
      var _element163 = boxCategory8[_i163];

      _element163.classList.add('image-gallery-box-class-list');
    }

    for (var _i164 = 0; _i164 < boxCategory9.length; _i164++) {
      var _element164 = boxCategory9[_i164];

      _element164.classList.add('image-gallery-box-class-list');
    }

    for (var _i165 = 0; _i165 < boxCategory10.length; _i165++) {
      var _element165 = boxCategory10[_i165];

      _element165.classList.add('image-gallery-box-class-list');
    }

    for (var _i166 = 0; _i166 < boxCategory11.length; _i166++) {
      var _element166 = boxCategory11[_i166];

      _element166.classList.add('image-gallery-box-class-list');
    }

    for (var _i167 = 0; _i167 < boxCategory12.length; _i167++) {
      var _element167 = boxCategory12[_i167];

      _element167.classList.add('image-gallery-box-class-list');
    }

    for (var _i168 = 0; _i168 < boxCategory13.length; _i168++) {
      var _element168 = boxCategory13[_i168];

      _element168.classList.add('image-gallery-box-class-list');
    }
  });
}; // MAKE CHANGE HERE ==========>


var boxCategorySortationSystems = function boxCategorySortationSystems() {
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
};

boxCategorySortationSystems(); // MAKE CHANGE HERE ==========>

var boxCategoryScrollSystem1DownFunctions = function boxCategoryScrollSystem1DownFunctions() {
  var endPoint = 200;

  var _loop = function _loop(i) {
    var element = imgCanvasImg[i];
    element.addEventListener('mouseover', function () {
      var imgCanvasScrollHeight = element.scrollHeight;
      element.style.transform = "translateY(-".concat(imgCanvasScrollHeight - endPoint, "px)");
    });
  };

  for (var i = 0; i < imgCanvasImg.length; i++) {
    _loop(i);
  }
};

boxCategoryScrollSystem1DownFunctions();

var boxCategoryScrollSystemUp = function boxCategoryScrollSystemUp() {
  for (var i = 0; i < imgCanvasImg.length; i++) {
    var element = imgCanvasImg[i];
    element.style.transform = "translateY(".concat(0, "px)");
  }
};

var imgCanvasScrollSystem = function imgCanvasScrollSystem() {
  for (var i = 0; i < imgCanvasImg.length; i++) {
    var element = imgCanvasImg[i];
    element.addEventListener('mouseleave', function () {
      boxCategoryScrollSystemUp();
    });
  }
};

imgCanvasScrollSystem();

var sideBarClickSystemSystem = function sideBarClickSystemSystem() {
  sideNavbarLinkContainer[0].addEventListener('click', function () {
    for (var i = 0; i < sideBarCheckBox.length; i++) {
      var element = sideBarCheckBox[i];
      element.classList.remove('span-class-list');
      sideBarCheckBox[0].classList.add('span-class-list');
    }
  });
};

var sideBarClickSystemSystem2 = function sideBarClickSystemSystem2() {
  sideNavbarLinkContainer[1].addEventListener('click', function () {
    for (var i = 0; i < sideBarCheckBox.length; i++) {
      var element = sideBarCheckBox[i];
      element.classList.remove('span-class-list');
      sideBarCheckBox[1].classList.add('span-class-list');
    }
  });
};

var sideBarClickSystemSystem3 = function sideBarClickSystemSystem3() {
  sideNavbarLinkContainer[2].addEventListener('click', function () {
    for (var i = 0; i < sideBarCheckBox.length; i++) {
      var element = sideBarCheckBox[i];
      element.classList.remove('span-class-list');
      sideBarCheckBox[2].classList.add('span-class-list');
    }
  });
};

var sideBarClickSystemSystem4 = function sideBarClickSystemSystem4() {
  sideNavbarLinkContainer[3].addEventListener('click', function () {
    for (var i = 0; i < sideBarCheckBox.length; i++) {
      var element = sideBarCheckBox[i];
      element.classList.remove('span-class-list');
      sideBarCheckBox[3].classList.add('span-class-list');
    }
  });
};

var sideBarClickSystemSystem5 = function sideBarClickSystemSystem5() {
  sideNavbarLinkContainer[4].addEventListener('click', function () {
    for (var i = 0; i < sideBarCheckBox.length; i++) {
      var element = sideBarCheckBox[i];
      element.classList.remove('span-class-list');
      sideBarCheckBox[4].classList.add('span-class-list');
    }
  });
};

var sideBarClickSystemSystem6 = function sideBarClickSystemSystem6() {
  sideNavbarLinkContainer[5].addEventListener('click', function () {
    for (var i = 0; i < sideBarCheckBox.length; i++) {
      var element = sideBarCheckBox[i];
      element.classList.remove('span-class-list');
      sideBarCheckBox[5].classList.add('span-class-list');
    }
  });
};

var sideBarClickSystemSystem7 = function sideBarClickSystemSystem7() {
  sideNavbarLinkContainer[6].addEventListener('click', function () {
    for (var i = 0; i < sideBarCheckBox.length; i++) {
      var element = sideBarCheckBox[i];
      element.classList.remove('span-class-list');
      sideBarCheckBox[6].classList.add('span-class-list');
    }
  });
};

var sideBarClickSystemSystem8 = function sideBarClickSystemSystem8() {
  sideNavbarLinkContainer[7].addEventListener('click', function () {
    for (var i = 0; i < sideBarCheckBox.length; i++) {
      var element = sideBarCheckBox[i];
      element.classList.remove('span-class-list');
      sideBarCheckBox[7].classList.add('span-class-list');
    }
  });
};

var sideBarClickSystemSystem9 = function sideBarClickSystemSystem9() {
  sideNavbarLinkContainer[8].addEventListener('click', function () {
    for (var i = 0; i < sideBarCheckBox.length; i++) {
      var element = sideBarCheckBox[i];
      element.classList.remove('span-class-list');
      sideBarCheckBox[8].classList.add('span-class-list');
    }
  });
};

var sideBarClickSystemSystem10 = function sideBarClickSystemSystem10() {
  sideNavbarLinkContainer[9].addEventListener('click', function () {
    for (var i = 0; i < sideBarCheckBox.length; i++) {
      var element = sideBarCheckBox[i];
      element.classList.remove('span-class-list');
      sideBarCheckBox[9].classList.add('span-class-list');
    }
  });
};

var sideBarClickSystemSystem11 = function sideBarClickSystemSystem11() {
  sideNavbarLinkContainer[10].addEventListener('click', function () {
    for (var i = 0; i < sideBarCheckBox.length; i++) {
      var element = sideBarCheckBox[i];
      element.classList.remove('span-class-list');
      sideBarCheckBox[10].classList.add('span-class-list');
    }
  });
};

var sideBarClickSystemSystem12 = function sideBarClickSystemSystem12() {
  sideNavbarLinkContainer[11].addEventListener('click', function () {
    for (var i = 0; i < sideBarCheckBox.length; i++) {
      var element = sideBarCheckBox[i];
      element.classList.remove('span-class-list');
      sideBarCheckBox[11].classList.add('span-class-list');
    }
  });
};

var sideBarClickSystemSystem13 = function sideBarClickSystemSystem13() {
  sideNavbarLinkContainer[12].addEventListener('click', function () {
    for (var i = 0; i < sideBarCheckBox.length; i++) {
      var element = sideBarCheckBox[i];
      element.classList.remove('span-class-list');
      sideBarCheckBox[12].classList.add('span-class-list');
    }
  });
};

var sideBarClickSystemSystem14 = function sideBarClickSystemSystem14() {
  sideNavbarLinkContainer[13].addEventListener('click', function () {
    for (var i = 0; i < sideBarCheckBox.length; i++) {
      var element = sideBarCheckBox[i];
      element.classList.remove('span-class-list');
      sideBarCheckBox[13].classList.add('span-class-list');
    }
  });
}; // MAKE CHANGE HERE ==========>


var sideBarClickSystem = function sideBarClickSystem() {
  for (var i = 0; i < imageGalleryBox.length; i++) {
    var element = imageGalleryBox[i];
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

sideBarClickSystem(); // MAKE CHANGE HERE ==========>
// 4.) main-conclusion-container |=======>

var mainConclusionContainer = document.querySelector('.main-conclusion-container');
var subConclusionContainer = document.querySelector('.sub-conclusion-container');
var mccBgPopUp = document.querySelector('.mcc-bg-pop-up');
var animationLine1 = document.querySelector('.animation-line-1');
var animationLine2 = document.querySelector('.animation-line-2');

var mainConclusionContainerSystem = function mainConclusionContainerSystem() {
  setInterval(function () {
    if (animationLine1.getBoundingClientRect().y <= 0) {
      subConclusionContainer.classList.add('sub-conclusion-container-class-list');
      mccBgPopUp.classList.add('mcc-bg-pop-up-class-list');
    }

    if (animationLine1.getBoundingClientRect().y > 0) {
      subConclusionContainer.classList.remove('sub-conclusion-container-class-list');
      mccBgPopUp.classList.remove('mcc-bg-pop-up-class-list');
    }

    if (animationLine2.getBoundingClientRect().y <= 0) {
      subConclusionContainer.classList.remove('sub-conclusion-container-class-list');
      mccBgPopUp.classList.remove('mcc-bg-pop-up-class-list');
    }
  }, 100);
};

mainConclusionContainerSystem(); // ---- cmcc-sub-container-2 ===>

var cmccSubContainer = document.querySelector('.cmcc-sub-container');
var cmccSubContainer2 = document.querySelector('.cmcc-sub-container-2');
var exitToMainPage = document.querySelector('.exit-to-main-page');
var s1Img = document.querySelector('.s1-img');
var gsImgContainer = document.querySelectorAll('.gs-img-container');
var gsImgs = document.querySelectorAll('.gs-img');

var pTagColorChangeSubContainerSystem = function pTagColorChangeSubContainerSystem() {
  var gsImgContainerPTagArr = [gsImgContainer[0].querySelector('p'), gsImgContainer[1].querySelector('p'), gsImgContainer[2].querySelector('p'), gsImgContainer[3].querySelector('p'), gsImgContainer[4].querySelector('p'), gsImgContainer[5].querySelector('p'), gsImgContainer[6].querySelector('p'), gsImgContainer[7].querySelector('p'), gsImgContainer[8].querySelector('p')];
  var darkColor = '#3e474d';
  var lightColor = '#71818c7c';
  gsImgs[0].addEventListener('click', function () {
    for (var i = 0; i < gsImgContainerPTagArr.length; i++) {
      var element = gsImgContainerPTagArr[i];
      element.style.color = lightColor;
      gsImgContainer[0].querySelector('p').style.color = darkColor;
    }
  });
  gsImgs[1].addEventListener('click', function () {
    for (var i = 0; i < gsImgContainerPTagArr.length; i++) {
      var element = gsImgContainerPTagArr[i];
      element.style.color = lightColor;
      gsImgContainer[1].querySelector('p').style.color = darkColor;
    }
  });
  gsImgs[2].addEventListener('click', function () {
    for (var i = 0; i < gsImgContainerPTagArr.length; i++) {
      var element = gsImgContainerPTagArr[i];
      element.style.color = lightColor;
      gsImgContainer[2].querySelector('p').style.color = darkColor;
    }
  });
  gsImgs[3].addEventListener('click', function () {
    for (var i = 0; i < gsImgContainerPTagArr.length; i++) {
      var element = gsImgContainerPTagArr[i];
      element.style.color = lightColor;
      gsImgContainer[3].querySelector('p').style.color = darkColor;
    }
  });
  gsImgs[4].addEventListener('click', function () {
    for (var i = 0; i < gsImgContainerPTagArr.length; i++) {
      var element = gsImgContainerPTagArr[i];
      element.style.color = lightColor;
      gsImgContainer[4].querySelector('p').style.color = darkColor;
    }
  });
  gsImgs[5].addEventListener('click', function () {
    for (var i = 0; i < gsImgContainerPTagArr.length; i++) {
      var element = gsImgContainerPTagArr[i];
      element.style.color = lightColor;
      gsImgContainer[5].querySelector('p').style.color = darkColor;
    }
  });
  gsImgs[6].addEventListener('click', function () {
    for (var i = 0; i < gsImgContainerPTagArr.length; i++) {
      var element = gsImgContainerPTagArr[i];
      element.style.color = lightColor;
      gsImgContainer[6].querySelector('p').style.color = darkColor;
    }
  });
  gsImgs[7].addEventListener('click', function () {
    for (var i = 0; i < gsImgContainerPTagArr.length; i++) {
      var element = gsImgContainerPTagArr[i];
      element.style.color = lightColor;
      gsImgContainer[7].querySelector('p').style.color = darkColor;
    }
  });
  gsImgs[8].addEventListener('click', function () {
    for (var i = 0; i < gsImgContainerPTagArr.length; i++) {
      var element = gsImgContainerPTagArr[i];
      element.style.color = lightColor;
      gsImgContainer[8].querySelector('p').style.color = darkColor;
    }
  });
};

pTagColorChangeSubContainerSystem();
var cmccGallerySectionNumber = document.querySelector('.cmcc-gallery-section-number');

var boxCategory1CMCCSubContainer2System01 = function boxCategory1CMCCSubContainer2System01() {
  cmccTag.textContent = 'Art & Design';
  cmccGallerySectionNumber.textContent = "(".concat(9, ")");
  s1Img.src = 'https://www.elegantthemes.com/layouts/wp-content/uploads/2018/02/design-agency-about-2-533x1721.jpg';
  var s1ImgsArr01 = ['https://www.elegantthemes.com/layouts/wp-content/uploads/2018/02/design-agency-about-2-533x1721.jpg', 'https://www.elegantthemes.com/layouts/wp-content/uploads/2018/02/design-agency-blog-2-533x915.jpg', 'https://www.elegantthemes.com/layouts/wp-content/uploads/2018/02/design-agency-case-study-2-533x2878.jpg', 'https://www.elegantthemes.com/layouts/wp-content/uploads/2017/12/design-agency-contact-533x620.png', 'https://www.elegantthemes.com/layouts/wp-content/uploads/2018/02/design-agency-home-2-533x999.jpg', 'https://www.elegantthemes.com/layouts/wp-content/uploads/2018/02/design-agency-landing-2-533x2937.jpg', 'https://www.elegantthemes.com/layouts/wp-content/uploads/2018/02/design-agency-portfolio-2-533x1107.jpg', 'https://www.elegantthemes.com/layouts/wp-content/uploads/2018/02/design-agency-project-1-2-533x846.jpg', 'https://www.elegantthemes.com/layouts/wp-content/uploads/2018/02/design-agency-project-2-2-533x1250.jpg'];
  var gsImgsArr01 = ['https://www.elegantthemes.com/layouts/wp-content/uploads/2018/02/design-agency-about-2-116x87.jpg', 'https://www.elegantthemes.com/layouts/wp-content/uploads/2018/02/design-agency-blog-2-116x87.jpg', 'https://www.elegantthemes.com/layouts/wp-content/uploads/2018/02/design-agency-case-study-2-116x87.jpg', 'https://www.elegantthemes.com/layouts/wp-content/uploads/2017/12/design-agency-contact-116x87.png', 'https://www.elegantthemes.com/layouts/wp-content/uploads/2018/02/design-agency-home-2-116x87.jpg', 'https://www.elegantthemes.com/layouts/wp-content/uploads/2018/02/design-agency-landing-2-116x87.jpg', 'https://www.elegantthemes.com/layouts/wp-content/uploads/2018/02/design-agency-portfolio-2-116x87.jpg', 'https://www.elegantthemes.com/layouts/wp-content/uploads/2018/02/design-agency-project-1-2-116x87.jpg', 'https://www.elegantthemes.com/layouts/wp-content/uploads/2018/02/design-agency-project-2-2-116x87.jpg'];
  var imgsTextArr01 = ['About', 'Blog', 'Case Study', 'Contact', 'Home', 'Landing', 'Portfolio', 'Project 1', 'Project 2'];

  var _loop2 = function _loop2(i) {
    var element = gsImgsArr01[i];
    gsImgs[i].src = "".concat(element);
    gsImgContainer[i].querySelector('p').textContent = "".concat(imgsTextArr01[i]);
    gsImgs[i].addEventListener('click', function () {
      s1Img.src = "".concat(s1ImgsArr01[i]);
    });
  };

  for (var i = 0; i < gsImgsArr01.length; i++) {
    _loop2(i);
  }

  var n = 0;
  var n2 = 0;
  s1ImgsArr01.forEach(function (element) {
    if (element) {
      n++;
      gsImgContainer[n];
      gsImgContainer[n].style.display = 'flex'; // console.log(n)
    }
  });
  s1ImgsArr01.forEach(function (element) {
    if (element === null) {
      n2++;
      gsImgContainer[n2 + n - 1].style.display = 'none';
    }
  });

  var _loop3 = function _loop3(_i169) {
    var element = gsImgsArr01[_i169];
    gsImgs[_i169].src = "".concat(element);
    gsImgContainer[_i169].querySelector('p').textContent = "".concat(imgsTextArr01[_i169]);

    gsImgs[_i169].addEventListener('click', function () {
      s1Img.src = "".concat(s1ImgsArr01[_i169]);
    });
  };

  for (var _i169 = 0; _i169 < gsImgsArr01.length; _i169++) {
    _loop3(_i169);
  }
};

var boxCategory1CMCCSubContainer2System02 = function boxCategory1CMCCSubContainer2System02() {
  cmccTag.textContent = 'Business';
  cmccGallerySectionNumber.textContent = "(".concat(7, ")");
  s1Img.src = 'https://www.elegantthemes.com/layouts/wp-content/uploads/2018/01/photo-marketplace_about-533x1428.jpg';
  var s1ImgsArr01 = ['https://www.elegantthemes.com/layouts/wp-content/uploads/2018/01/photo-marketplace_about-533x1428.jpg', 'https://www.elegantthemes.com/layouts/wp-content/uploads/2018/01/photo-marketplace_categories-533x1268.jpg', 'https://www.elegantthemes.com/layouts/wp-content/uploads/2017/12/photo-marketplace_contact-533x1018.jpg', 'https://www.elegantthemes.com/layouts/wp-content/uploads/2018/01/photo-marketplace_home-533x1310.jpg', 'https://www.elegantthemes.com/layouts/wp-content/uploads/2018/01/photo-marketplace_landing-533x3175.jpg', 'https://www.elegantthemes.com/layouts/wp-content/uploads/2018/01/photo-marketplace_pricing-533x878.jpg', 'https://www.elegantthemes.com/layouts/wp-content/uploads/2017/12/photo-marketplace_contribute-533x1049.jpg', null, null];
  var gsImgsArr01 = ['https://www.elegantthemes.com/layouts/wp-content/uploads/2018/01/photo-marketplace_about-116x87.jpg', 'https://www.elegantthemes.com/layouts/wp-content/uploads/2018/01/photo-marketplace_categories-116x87.jpg', 'https://www.elegantthemes.com/layouts/wp-content/uploads/2017/12/photo-marketplace_contact-116x87.jpg', 'https://www.elegantthemes.com/layouts/wp-content/uploads/2018/01/photo-marketplace_home-116x87.jpg', 'https://www.elegantthemes.com/layouts/wp-content/uploads/2018/01/photo-marketplace_landing-116x87.jpg', 'https://www.elegantthemes.com/layouts/wp-content/uploads/2018/01/photo-marketplace_pricing-116x87.jpg', 'https://www.elegantthemes.com/layouts/wp-content/uploads/2017/12/photo-marketplace_contribute-116x87.jpg', null, null];
  var imgsTextArr01 = ['About', 'Categories', 'Contact', 'Home', 'Landing', 'Pricing', 'Seller', null, null];
  var n = 0;
  var n2 = 0;
  s1ImgsArr01.forEach(function (element) {
    if (element) {
      n++;
      gsImgContainer[n];
      gsImgContainer[n].style.display = 'flex'; // console.log(n)
    }
  });
  s1ImgsArr01.forEach(function (element) {
    if (element === null) {
      n2++;
      gsImgContainer[n2 + n - 1].style.display = 'none';
    }
  });

  var _loop4 = function _loop4(i) {
    var element = gsImgsArr01[i];
    gsImgs[i].src = "".concat(element);
    gsImgContainer[i].querySelector('p').textContent = "".concat(imgsTextArr01[i]);
    gsImgs[i].addEventListener('click', function () {
      s1Img.src = "".concat(s1ImgsArr01[i]);
    });
  };

  for (var i = 0; i < gsImgsArr01.length; i++) {
    _loop4(i);
  }
};

var boxCategory1CMCCSubContainer2System03 = function boxCategory1CMCCSubContainer2System03() {
  cmccTag.textContent = 'Community & Non-Profit';
  cmccGallerySectionNumber.textContent = "(".concat(8, ")");
  s1Img.src = 'https://www.elegantthemes.com/layouts/wp-content/uploads/2017/12/farmers-market-about-533x1191.jpg';
  var s1ImgsArr01 = ['https://www.elegantthemes.com/layouts/wp-content/uploads/2017/12/farmers-market-about-533x1191.jpg', 'https://www.elegantthemes.com/layouts/wp-content/uploads/2017/12/farmers-market-blog-533x948.jpg', 'https://www.elegantthemes.com/layouts/wp-content/uploads/2017/12/farmers-market-contact-533x929.jpg', 'https://www.elegantthemes.com/layouts/wp-content/uploads/2017/12/farmers-market-donate-533x1531.jpg', 'https://www.elegantthemes.com/layouts/wp-content/uploads/2017/12/farmers-market-events-533x961.jpg', 'https://www.elegantthemes.com/layouts/wp-content/uploads/2017/12/farmers-market-home-533x948.jpg', 'https://www.elegantthemes.com/layouts/wp-content/uploads/2017/12/farmers-market-landing-533x2594.jpg', 'https://www.elegantthemes.com/layouts/wp-content/uploads/2017/12/farmers-market-market-533x1724.jpg', null];
  var gsImgsArr01 = ['https://www.elegantthemes.com/layouts/wp-content/uploads/2017/12/farmers-market-about-116x87.jpg', 'https://www.elegantthemes.com/layouts/wp-content/uploads/2017/12/farmers-market-blog-116x87.jpg', 'https://www.elegantthemes.com/layouts/wp-content/uploads/2017/12/farmers-market-contact-116x87.jpg', 'https://www.elegantthemes.com/layouts/wp-content/uploads/2017/12/farmers-market-donate-116x87.jpg', 'https://www.elegantthemes.com/layouts/wp-content/uploads/2017/12/farmers-market-events-116x87.jpg', 'https://www.elegantthemes.com/layouts/wp-content/uploads/2017/12/farmers-market-home-116x87.jpg', 'https://www.elegantthemes.com/layouts/wp-content/uploads/2017/12/farmers-market-landing-116x87.jpg', 'https://www.elegantthemes.com/layouts/wp-content/uploads/2017/12/farmers-market-market-116x87.jpg', null];
  var imgsTextArr01 = ['About', 'Blog', 'Contact', 'Donate', 'Events', 'Home', 'Landing', 'Market', null];
  var n = 0;
  var n2 = 0;
  s1ImgsArr01.forEach(function (element) {
    if (element) {
      n++;
      gsImgContainer[n];
      gsImgContainer[n].style.display = 'flex'; // console.log(n)
    }
  });
  s1ImgsArr01.forEach(function (element) {
    if (element === null) {
      n2++;
      gsImgContainer[n2 + n - 1].style.display = 'none';
    }
  });

  var _loop5 = function _loop5(i) {
    var element = gsImgsArr01[i];
    gsImgs[i].src = "".concat(element);
    gsImgContainer[i].querySelector('p').textContent = "".concat(imgsTextArr01[i]);
    gsImgs[i].addEventListener('click', function () {
      s1Img.src = "".concat(s1ImgsArr01[i]);
    });
  };

  for (var i = 0; i < gsImgsArr01.length; i++) {
    _loop5(i);
  }
};

var boxCategory1CMCCSubContainer2System04 = function boxCategory1CMCCSubContainer2System04() {
  cmccTag.textContent = 'Education';
  cmccGallerySectionNumber.textContent = "(".concat(9, ")");
  s1Img.src = 'https://www.elegantthemes.com/layouts/wp-content/uploads/2017/12/coding-school_about-533x2300.jpg';
  var s1ImgsArr01 = ['https://www.elegantthemes.com/layouts/wp-content/uploads/2017/12/coding-school_about-533x2300.jpg', 'https://www.elegantthemes.com/layouts/wp-content/uploads/2017/12/coding-school_blog-533x1679.jpg', 'https://www.elegantthemes.com/layouts/wp-content/uploads/2017/12/coding-school_contact-533x1240.jpg', 'https://www.elegantthemes.com/layouts/wp-content/uploads/2017/12/coding-school_course-533x1060.jpg', 'https://www.elegantthemes.com/layouts/wp-content/uploads/2017/12/coding-school_courses-533x864.jpg', 'https://www.elegantthemes.com/layouts/wp-content/uploads/2017/12/coding-school_home-533x1029.jpg', 'https://www.elegantthemes.com/layouts/wp-content/uploads/2017/12/coding-school_landing-533x2406.jpg', 'https://www.elegantthemes.com/layouts/wp-content/uploads/2017/12/coding-school_marketing-533x1591.jpg', 'https://www.elegantthemes.com/layouts/wp-content/uploads/2017/12/coding-school_pricing-533x1697.jpg'];
  var gsImgsArr01 = ['https://www.elegantthemes.com/layouts/wp-content/uploads/2017/12/coding-school_about-116x87.jpg', 'https://www.elegantthemes.com/layouts/wp-content/uploads/2017/12/coding-school_blog-116x87.jpg', 'https://www.elegantthemes.com/layouts/wp-content/uploads/2017/12/coding-school_contact-116x87.jpg', 'https://www.elegantthemes.com/layouts/wp-content/uploads/2017/12/coding-school_course-116x87.jpg', 'https://www.elegantthemes.com/layouts/wp-content/uploads/2017/12/coding-school_courses-116x87.jpg', 'https://www.elegantthemes.com/layouts/wp-content/uploads/2017/12/coding-school_home-116x87.jpg', 'https://www.elegantthemes.com/layouts/wp-content/uploads/2017/12/coding-school_landing-116x87.jpg', 'https://www.elegantthemes.com/layouts/wp-content/uploads/2017/12/coding-school_marketing-116x87.jpg', 'https://www.elegantthemes.com/layouts/wp-content/uploads/2017/12/coding-school_pricing-116x87.jpg'];
  var imgsTextArr01 = ['About', 'Blog', 'Contact', 'Course', 'Courses', 'Home', 'Landing', 'Marketing', 'Pricing'];

  var _loop6 = function _loop6(i) {
    var element = gsImgsArr01[i];
    gsImgs[i].src = "".concat(element);
    gsImgContainer[i].querySelector('p').textContent = "".concat(imgsTextArr01[i]);
    gsImgs[i].addEventListener('click', function () {
      s1Img.src = "".concat(s1ImgsArr01[i]);
    });
  };

  for (var i = 0; i < gsImgsArr01.length; i++) {
    _loop6(i);
  }

  var n = 0;
  var n2 = 0;
  s1ImgsArr01.forEach(function (element) {
    if (element) {
      n++;
      gsImgContainer[n];
      gsImgContainer[n].style.display = 'flex'; // console.log(n)
    }
  });
  s1ImgsArr01.forEach(function (element) {
    if (element === null) {
      n2++;
      gsImgContainer[n2 + n - 1].style.display = 'none';
    }
  });

  var _loop7 = function _loop7(_i170) {
    var element = gsImgsArr01[_i170];
    gsImgs[_i170].src = "".concat(element);
    gsImgContainer[_i170].querySelector('p').textContent = "".concat(imgsTextArr01[_i170]);

    gsImgs[_i170].addEventListener('click', function () {
      s1Img.src = "".concat(s1ImgsArr01[_i170]);
    });
  };

  for (var _i170 = 0; _i170 < gsImgsArr01.length; _i170++) {
    _loop7(_i170);
  }
};

var boxCategory1CMCCSubContainer2System05 = function boxCategory1CMCCSubContainer2System05() {
  cmccTag.textContent = 'Event';
  cmccGallerySectionNumber.textContent = "(".concat(7, ")");
  s1Img.src = 'https://www.elegantthemes.com/layouts/wp-content/uploads/2017/11/Wedding_Our-Story-533x1919.jpg';
  var s1ImgsArr01 = ['https://www.elegantthemes.com/layouts/wp-content/uploads/2017/11/Wedding_Our-Story-533x1919.jpg', 'https://www.elegantthemes.com/layouts/wp-content/uploads/2017/11/Wedding_Blog-533x598.jpg', 'https://www.elegantthemes.com/layouts/wp-content/uploads/2017/12/wedding_contact-533x688.jpg', 'https://www.elegantthemes.com/layouts/wp-content/uploads/2017/12/wedding_details-533x1338.jpg', 'https://www.elegantthemes.com/layouts/wp-content/uploads/2017/11/Wedding_Gallery-533x846.jpg', 'https://www.elegantthemes.com/layouts/wp-content/uploads/2017/12/wedding_landing-533x3182.jpg', null, null, null];
  var gsImgsArr01 = ['https://www.elegantthemes.com/layouts/wp-content/uploads/2017/11/Wedding_Our-Story-116x87.jpg', 'https://www.elegantthemes.com/layouts/wp-content/uploads/2017/11/Wedding_Blog-116x87.jpg', 'https://www.elegantthemes.com/layouts/wp-content/uploads/2017/12/wedding_contact-116x87.jpg', 'https://www.elegantthemes.com/layouts/wp-content/uploads/2017/12/wedding_details-116x87.jpg', 'https://www.elegantthemes.com/layouts/wp-content/uploads/2017/11/Wedding_Gallery-116x87.jpg', 'https://www.elegantthemes.com/layouts/wp-content/uploads/2017/12/wedding_landing-116x87.jpg', null, null, null];
  var imgsTextArr01 = ['About', 'Blog', 'Contact', 'Details', 'Gallery', 'Home', null, null, null];
  var n = 0;
  var n2 = 0;
  s1ImgsArr01.forEach(function (element) {
    if (element) {
      n++;
      gsImgContainer[n];
      gsImgContainer[n].style.display = 'flex'; // console.log(n)
    }
  });
  s1ImgsArr01.forEach(function (element) {
    if (element === null) {
      n2++;
      gsImgContainer[n2 + n - 1].style.display = 'none';
    }
  });

  var _loop8 = function _loop8(i) {
    var element = gsImgsArr01[i];
    gsImgs[i].src = "".concat(element);
    gsImgContainer[i].querySelector('p').textContent = "".concat(imgsTextArr01[i]);
    gsImgs[i].addEventListener('click', function () {
      s1Img.src = "".concat(s1ImgsArr01[i]);
    });
  };

  for (var i = 0; i < gsImgsArr01.length; i++) {
    _loop8(i);
  }
};

var boxCategory1CMCCSubContainer2System06 = function boxCategory1CMCCSubContainer2System06() {
  cmccTag.textContent = 'Fashion & Beauty';
  cmccGallerySectionNumber.textContent = "(".concat(8, ")");
  s1Img.src = 'https://www.elegantthemes.com/layouts/wp-content/uploads/2017/12/fashion-about-533x1127.jpg';
  var s1ImgsArr01 = ['https://www.elegantthemes.com/layouts/wp-content/uploads/2017/12/fashion-about-533x1127.jpg', 'https://www.elegantthemes.com/layouts/wp-content/uploads/2017/12/fashion-blog-533x915.jpg', 'https://www.elegantthemes.com/layouts/wp-content/uploads/2017/12/fashion-contact-533x719.jpg', 'https://www.elegantthemes.com/layouts/wp-content/uploads/2017/12/fashion-designer-533x828.jpg', 'https://www.elegantthemes.com/layouts/wp-content/uploads/2017/12/fashion-gallery-533x894.jpg', 'https://www.elegantthemes.com/layouts/wp-content/uploads/2017/12/fashion-home-533x753.jpg', 'https://www.elegantthemes.com/layouts/wp-content/uploads/2017/12/fashion-landing-533x2328.jpg', 'https://www.elegantthemes.com/layouts/wp-content/uploads/2017/12/fashion-shop-533x1212.jpg', null];
  var gsImgsArr01 = ['https://www.elegantthemes.com/layouts/wp-content/uploads/2017/12/fashion-about-116x87.jpg', 'https://www.elegantthemes.com/layouts/wp-content/uploads/2017/12/fashion-blog-116x87.jpg', 'https://www.elegantthemes.com/layouts/wp-content/uploads/2017/12/fashion-contact-116x87.jpg', 'https://www.elegantthemes.com/layouts/wp-content/uploads/2017/12/fashion-designer-116x87.jpg', 'https://www.elegantthemes.com/layouts/wp-content/uploads/2017/12/fashion-gallery-116x87.jpg', 'https://www.elegantthemes.com/layouts/wp-content/uploads/2017/12/fashion-home-116x87.jpg', 'https://www.elegantthemes.com/layouts/wp-content/uploads/2017/12/fashion-landing-116x87.jpg', 'https://www.elegantthemes.com/layouts/wp-content/uploads/2017/12/fashion-shop-116x87.jpg', null];
  var imgsTextArr01 = ['About', 'Blog', 'Contact', 'Designer', 'Gallery', 'Home', 'Landing', 'Shop', null];
  var n = 0;
  var n2 = 0;
  s1ImgsArr01.forEach(function (element) {
    if (element) {
      n++;
      gsImgContainer[n];
      gsImgContainer[n].style.display = 'flex'; // console.log(n)
    }
  });
  s1ImgsArr01.forEach(function (element) {
    if (element === null) {
      n2++;
      gsImgContainer[n2 + n - 1].style.display = 'none';
    }
  });

  var _loop9 = function _loop9(i) {
    var element = gsImgsArr01[i];
    gsImgs[i].src = "".concat(element);
    gsImgContainer[i].querySelector('p').textContent = "".concat(imgsTextArr01[i]);
    gsImgs[i].addEventListener('click', function () {
      s1Img.src = "".concat(s1ImgsArr01[i]);
    });
  };

  for (var i = 0; i < gsImgsArr01.length; i++) {
    _loop9(i);
  }
};

var boxCategory1CMCCSubContainer2System07 = function boxCategory1CMCCSubContainer2System07() {
  cmccTag.textContent = 'Food & Drink';
  cmccGallerySectionNumber.textContent = "(".concat(8, ")");
  s1Img.src = 'https://www.elegantthemes.com/layouts/wp-content/uploads/2017/12/coffee-shop-about-533x2170.jpg';
  var s1ImgsArr01 = ['https://www.elegantthemes.com/layouts/wp-content/uploads/2017/12/coffee-shop-about-533x2170.jpg', 'https://www.elegantthemes.com/layouts/wp-content/uploads/2017/12/coffee-shop-blog-533x858.jpg', 'https://www.elegantthemes.com/layouts/wp-content/uploads/2017/12/coffee-shop-contact-533x603.jpg', 'https://www.elegantthemes.com/layouts/wp-content/uploads/2017/12/coffee-shop-brew-guide-533x2025.jpg', 'https://www.elegantthemes.com/layouts/wp-content/uploads/2017/12/coffee-shop-home-533x1047.jpg', 'https://www.elegantthemes.com/layouts/wp-content/uploads/2017/12/coffee-shop-landing-533x2367.jpg', 'https://www.elegantthemes.com/layouts/wp-content/uploads/2017/12/coffee-shop-menu-533x1426.jpg', 'https://www.elegantthemes.com/layouts/wp-content/uploads/2017/12/coffee-shop-shop-533x1243.jpg', null];
  var gsImgsArr01 = ['https://www.elegantthemes.com/layouts/wp-content/uploads/2017/12/coffee-shop-about-116x87.jpg', 'https://www.elegantthemes.com/layouts/wp-content/uploads/2017/12/coffee-shop-blog-116x87.jpg', 'https://www.elegantthemes.com/layouts/wp-content/uploads/2017/12/coffee-shop-contact-116x87.jpg', 'https://www.elegantthemes.com/layouts/wp-content/uploads/2017/12/coffee-shop-brew-guide-116x87.jpg', 'https://www.elegantthemes.com/layouts/wp-content/uploads/2017/12/coffee-shop-home-116x87.jpg', 'https://www.elegantthemes.com/layouts/wp-content/uploads/2017/12/coffee-shop-landing-116x87.jpg', 'https://www.elegantthemes.com/layouts/wp-content/uploads/2017/12/coffee-shop-menu-116x87.jpg', 'https://www.elegantthemes.com/layouts/wp-content/uploads/2017/12/coffee-shop-shop-116x87.jpg', null];
  var imgsTextArr01 = ['About', 'Blog', 'Contact', 'Guide', 'Home', 'Landing', 'Menu', 'Shop', null];
  var n = 0;
  var n2 = 0;
  s1ImgsArr01.forEach(function (element) {
    if (element) {
      n++;
      gsImgContainer[n];
      gsImgContainer[n].style.display = 'flex'; // console.log(n)
    }
  });
  s1ImgsArr01.forEach(function (element) {
    if (element === null) {
      n2++;
      gsImgContainer[n2 + n - 1].style.display = 'none';
    }
  });

  var _loop10 = function _loop10(i) {
    var element = gsImgsArr01[i];
    gsImgs[i].src = "".concat(element);
    gsImgContainer[i].querySelector('p').textContent = "".concat(imgsTextArr01[i]);
    gsImgs[i].addEventListener('click', function () {
      s1Img.src = "".concat(s1ImgsArr01[i]);
    });
  };

  for (var i = 0; i < gsImgsArr01.length; i++) {
    _loop10(i);
  }
};

var boxCategory1CMCCSubContainer2System08 = function boxCategory1CMCCSubContainer2System08() {
  cmccTag.textContent = 'Health & Fitness';
  cmccGallerySectionNumber.textContent = "(".concat(7, ")");
  s1Img.src = 'https://www.elegantthemes.com/layouts/wp-content/uploads/2018/06/pharmacy-about-page-533x1159.jpg';
  var s1ImgsArr01 = ['https://www.elegantthemes.com/layouts/wp-content/uploads/2018/06/pharmacy-about-page-533x1159.jpg', 'https://www.elegantthemes.com/layouts/wp-content/uploads/2018/06/pharmacy-contact-page-533x1067.jpg', 'https://www.elegantthemes.com/layouts/wp-content/uploads/2018/06/pharmacy-home-page-533x1381.jpg', 'https://www.elegantthemes.com/layouts/wp-content/uploads/2018/06/pharmacy-landing-page-533x1727.jpg', 'https://www.elegantthemes.com/layouts/wp-content/uploads/2018/06/pharmacy-services-page-533x1313.jpg', 'https://www.elegantthemes.com/layouts/wp-content/uploads/2018/06/pharmacy-shop-page-533x1200.jpg', null, null, null];
  var gsImgsArr01 = ['https://www.elegantthemes.com/layouts/wp-content/uploads/2018/06/pharmacy-about-page-116x87.jpg', 'https://www.elegantthemes.com/layouts/wp-content/uploads/2018/06/pharmacy-contact-page-116x87.jpg', 'https://www.elegantthemes.com/layouts/wp-content/uploads/2018/06/pharmacy-home-page-116x87.jpg', 'https://www.elegantthemes.com/layouts/wp-content/uploads/2018/06/pharmacy-landing-page-116x87.jpg', 'https://www.elegantthemes.com/layouts/wp-content/uploads/2018/06/pharmacy-services-page-116x87.jpg', 'https://www.elegantthemes.com/layouts/wp-content/uploads/2018/06/pharmacy-shop-page-116x87.jpg', null, null, null];
  var imgsTextArr01 = ['About', 'Contact', 'Home', 'Landing', 'Services', 'Shop', null, null, null];
  var n = 0;
  var n2 = 0;
  s1ImgsArr01.forEach(function (element) {
    if (element) {
      n++;
      gsImgContainer[n];
      gsImgContainer[n].style.display = 'flex'; // console.log(n)
    }
  });
  s1ImgsArr01.forEach(function (element) {
    if (element === null) {
      n2++;
      gsImgContainer[n2 + n - 1].style.display = 'none';
    }
  });

  var _loop11 = function _loop11(i) {
    var element = gsImgsArr01[i];
    gsImgs[i].src = "".concat(element);
    gsImgContainer[i].querySelector('p').textContent = "".concat(imgsTextArr01[i]);
    gsImgs[i].addEventListener('click', function () {
      s1Img.src = "".concat(s1ImgsArr01[i]);
    });
  };

  for (var i = 0; i < gsImgsArr01.length; i++) {
    _loop11(i);
  }
};

var boxCategory1CMCCSubContainer2System09 = function boxCategory1CMCCSubContainer2System09() {
  cmccTag.textContent = 'Lifestyle';
  cmccGallerySectionNumber.textContent = "(".concat(7, ")");
  s1Img.src = 'https://www.elegantthemes.com/layouts/wp-content/uploads/2018/05/travel-blog-about-page-533x1780.jpg';
  var s1ImgsArr01 = ['https://www.elegantthemes.com/layouts/wp-content/uploads/2018/05/travel-blog-about-page-533x1780.jpg', 'https://www.elegantthemes.com/layouts/wp-content/uploads/2018/05/travel-blog-blog-page-533x1326.jpg', 'https://www.elegantthemes.com/layouts/wp-content/uploads/2018/05/travel-blog-contact-page-533x600.jpg', 'https://www.elegantthemes.com/layouts/wp-content/uploads/2018/05/travel-blog-home-page-533x1163.jpg', 'https://www.elegantthemes.com/layouts/wp-content/uploads/2018/05/travel-blog-landing-page-533x2942.jpg', 'https://www.elegantthemes.com/layouts/wp-content/uploads/2018/05/travel-blog-trip-page-533x2804.jpg', null, null, null];
  var gsImgsArr01 = ['https://www.elegantthemes.com/layouts/wp-content/uploads/2018/05/travel-blog-about-page-116x87.jpg', 'https://www.elegantthemes.com/layouts/wp-content/uploads/2018/05/travel-blog-blog-page-116x87.jpg', 'https://www.elegantthemes.com/layouts/wp-content/uploads/2018/05/travel-blog-contact-page-116x87.jpg', 'https://www.elegantthemes.com/layouts/wp-content/uploads/2018/05/travel-blog-home-page-116x87.jpg', 'https://www.elegantthemes.com/layouts/wp-content/uploads/2018/05/travel-blog-landing-page-116x87.jpg', 'https://www.elegantthemes.com/layouts/wp-content/uploads/2018/05/travel-blog-trip-page-116x87.jpg', null, null, null];
  var imgsTextArr01 = ['About', 'Blog', 'Contact', 'Home', 'Landing', 'Travel Blog ...', null, null, null];
  var n = 0;
  var n2 = 0;
  s1ImgsArr01.forEach(function (element) {
    if (element) {
      n++;
      gsImgContainer[n];
      gsImgContainer[n].style.display = 'flex'; // console.log(n)
    }
  });
  s1ImgsArr01.forEach(function (element) {
    if (element === null) {
      n2++;
      gsImgContainer[n2 + n - 1].style.display = 'none';
    }
  });

  var _loop12 = function _loop12(i) {
    var element = gsImgsArr01[i];
    gsImgs[i].src = "".concat(element);
    gsImgContainer[i].querySelector('p').textContent = "".concat(imgsTextArr01[i]);
    gsImgs[i].addEventListener('click', function () {
      s1Img.src = "".concat(s1ImgsArr01[i]);
    });
  };

  for (var i = 0; i < gsImgsArr01.length; i++) {
    _loop12(i);
  }
};

var boxCategory1CMCCSubContainer2System10 = function boxCategory1CMCCSubContainer2System10() {
  cmccTag.textContent = 'Online Store';
  cmccGallerySectionNumber.textContent = "(".concat(7, ")");
  s1Img.src = 'https://www.elegantthemes.com/layouts/wp-content/uploads/2018/05/jeweler-about-page-533x1629.jpg';
  var s1ImgsArr01 = ['https://www.elegantthemes.com/layouts/wp-content/uploads/2018/05/jeweler-about-page-533x1629.jpg', 'https://www.elegantthemes.com/layouts/wp-content/uploads/2018/05/jeweler-blog-page-533x750.jpg', 'https://www.elegantthemes.com/layouts/wp-content/uploads/2018/05/jeweler-contact-page-533x684.jpg', 'https://www.elegantthemes.com/layouts/wp-content/uploads/2018/05/jeweler-education-page-533x1664.jpg', 'https://www.elegantthemes.com/layouts/wp-content/uploads/2018/05/jeweler-home-page-533x919.jpg', 'https://www.elegantthemes.com/layouts/wp-content/uploads/2018/05/jeweler-landing-page-533x2572.jpg', 'https://www.elegantthemes.com/layouts/wp-content/uploads/2018/05/jeweler-shop-page-533x1266.jpg', null, null];
  var gsImgsArr01 = ['https://www.elegantthemes.com/layouts/wp-content/uploads/2018/05/jeweler-about-page-116x87.jpg', 'https://www.elegantthemes.com/layouts/wp-content/uploads/2018/05/jeweler-blog-page-116x87.jpg', 'https://www.elegantthemes.com/layouts/wp-content/uploads/2018/05/jeweler-contact-page-116x87.jpg', 'https://www.elegantthemes.com/layouts/wp-content/uploads/2018/05/jeweler-education-page-116x87.jpg', 'https://www.elegantthemes.com/layouts/wp-content/uploads/2018/05/jeweler-home-page-116x87.jpg', 'https://www.elegantthemes.com/layouts/wp-content/uploads/2018/05/jeweler-landing-page-116x87.jpg', 'https://www.elegantthemes.com/layouts/wp-content/uploads/2018/05/jeweler-shop-page-116x87.jpg', null, null];
  var imgsTextArr01 = ['About', 'Blog', 'Contact', 'Jeweler Ed...', 'Home', 'Landing', 'Shop', null, null];
  var n = 0;
  var n2 = 0;
  s1ImgsArr01.forEach(function (element) {
    if (element) {
      n++;
      gsImgContainer[n];
      gsImgContainer[n].style.display = 'flex'; // console.log(n)
    }
  });
  s1ImgsArr01.forEach(function (element) {
    if (element === null) {
      n2++;
      gsImgContainer[n2 + n - 1].style.display = 'none';
    }
  });

  var _loop13 = function _loop13(i) {
    var element = gsImgsArr01[i];
    gsImgs[i].src = "".concat(element);
    gsImgContainer[i].querySelector('p').textContent = "".concat(imgsTextArr01[i]);
    gsImgs[i].addEventListener('click', function () {
      s1Img.src = "".concat(s1ImgsArr01[i]);
    });
  };

  for (var i = 0; i < gsImgsArr01.length; i++) {
    _loop13(i);
  }
};

var boxCategory1CMCCSubContainer2System11 = function boxCategory1CMCCSubContainer2System11() {
  cmccTag.textContent = 'Services';
  cmccGallerySectionNumber.textContent = "(".concat(9, ")");
  s1Img.src = 'https://www.elegantthemes.com/layouts/wp-content/uploads/2017/12/copywriter-about-533x1170.jpg';
  var s1ImgsArr01 = ['https://www.elegantthemes.com/layouts/wp-content/uploads/2017/12/copywriter-about-533x1170.jpg', 'https://www.elegantthemes.com/layouts/wp-content/uploads/2017/12/copywriter-blog-533x704.jpg', 'https://www.elegantthemes.com/layouts/wp-content/uploads/2017/12/copywriter-contact-533x767.jpg', 'https://www.elegantthemes.com/layouts/wp-content/uploads/2017/12/copywriter-faq-533x784.jpg', 'https://www.elegantthemes.com/layouts/wp-content/uploads/2017/12/copywriter-home-533x859.jpg', 'https://www.elegantthemes.com/layouts/wp-content/uploads/2017/12/copywriter-landing-533x2155.jpg', 'https://www.elegantthemes.com/layouts/wp-content/uploads/2017/12/copywriter-portfolio-533x1089.jpg', 'https://www.elegantthemes.com/layouts/wp-content/uploads/2017/12/copywriter-pricing-533x1104.jpg', 'https://www.elegantthemes.com/layouts/wp-content/uploads/2017/12/copywriter-services-533x1636.jpg'];
  var gsImgsArr01 = ['https://www.elegantthemes.com/layouts/wp-content/uploads/2017/12/copywriter-about-116x87.jpg', 'https://www.elegantthemes.com/layouts/wp-content/uploads/2017/12/copywriter-blog-116x87.jpg', 'https://www.elegantthemes.com/layouts/wp-content/uploads/2017/12/copywriter-contact-116x87.jpg', 'https://www.elegantthemes.com/layouts/wp-content/uploads/2017/12/copywriter-faq-116x87.jpg', 'https://www.elegantthemes.com/layouts/wp-content/uploads/2017/12/copywriter-home-116x87.jpg', 'https://www.elegantthemes.com/layouts/wp-content/uploads/2017/12/copywriter-landing-116x87.jpg', 'https://www.elegantthemes.com/layouts/wp-content/uploads/2017/12/copywriter-portfolio-116x87.jpg', 'https://www.elegantthemes.com/layouts/wp-content/uploads/2017/12/copywriter-pricing-116x87.jpg', 'https://www.elegantthemes.com/layouts/wp-content/uploads/2017/12/copywriter-services-116x87.jpg'];
  var imgsTextArr01 = ['About', 'Blog', 'Contact', 'FAQ', 'Home', 'Landing', 'Portfolio', 'Pricing', 'Services'];

  var _loop14 = function _loop14(i) {
    var element = gsImgsArr01[i];
    gsImgs[i].src = "".concat(element);
    gsImgContainer[i].querySelector('p').textContent = "".concat(imgsTextArr01[i]);
    gsImgs[i].addEventListener('click', function () {
      s1Img.src = "".concat(s1ImgsArr01[i]);
    });
  };

  for (var i = 0; i < gsImgsArr01.length; i++) {
    _loop14(i);
  }

  var n = 0;
  var n2 = 0;
  s1ImgsArr01.forEach(function (element) {
    if (element) {
      n++;
      gsImgContainer[n];
      gsImgContainer[n].style.display = 'flex'; // console.log(n)
    }
  });
  s1ImgsArr01.forEach(function (element) {
    if (element === null) {
      n2++;
      gsImgContainer[n2 + n - 1].style.display = 'none';
    }
  });

  var _loop15 = function _loop15(_i171) {
    var element = gsImgsArr01[_i171];
    gsImgs[_i171].src = "".concat(element);
    gsImgContainer[_i171].querySelector('p').textContent = "".concat(imgsTextArr01[_i171]);

    gsImgs[_i171].addEventListener('click', function () {
      s1Img.src = "".concat(s1ImgsArr01[_i171]);
    });
  };

  for (var _i171 = 0; _i171 < gsImgsArr01.length; _i171++) {
    _loop15(_i171);
  }
};

var boxCategory1CMCCSubContainer2System12 = function boxCategory1CMCCSubContainer2System12() {
  cmccTag.textContent = 'Simple';
  cmccGallerySectionNumber.textContent = "(".concat(9, ")");
  s1Img.src = 'https://www.elegantthemes.com/layouts/wp-content/uploads/2018/01/simple-about-me-page-533x292.jpg';
  var s1ImgsArr01 = ['https://www.elegantthemes.com/layouts/wp-content/uploads/2018/01/simple-about-me-page-533x292.jpg', 'https://www.elegantthemes.com/layouts/wp-content/uploads/2018/01/simple-about-us-page-533x479.jpg', 'https://www.elegantthemes.com/layouts/wp-content/uploads/2018/01/simple-blog-page-533x339.jpg', 'https://www.elegantthemes.com/layouts/wp-content/uploads/2018/01/simple-coming-soon-page-533x208.jpg', 'https://www.elegantthemes.com/layouts/wp-content/uploads/2018/01/simple-contact-us-page-533x318.jpg', 'https://www.elegantthemes.com/layouts/wp-content/uploads/2018/01/simple-dual-sidebars-page-533x357.jpg', 'https://www.elegantthemes.com/layouts/wp-content/uploads/2018/01/simple-fullwidth-page-533x317.jpg', 'https://www.elegantthemes.com/layouts/wp-content/uploads/2018/01/simple-home-page-533x436.jpg', 'https://www.elegantthemes.com/layouts/wp-content/uploads/2018/01/simple-sales-page-533x972.jpg'];
  var gsImgsArr01 = ['https://www.elegantthemes.com/layouts/wp-content/uploads/2018/01/simple-about-me-page-116x87.jpg', 'https://www.elegantthemes.com/layouts/wp-content/uploads/2018/01/simple-about-us-page-116x87.jpg', 'https://www.elegantthemes.com/layouts/wp-content/uploads/2018/01/simple-blog-page-116x87.jpg', 'https://www.elegantthemes.com/layouts/wp-content/uploads/2018/01/simple-coming-soon-page-116x87.jpg', 'https://www.elegantthemes.com/layouts/wp-content/uploads/2018/01/simple-contact-us-page-116x87.jpg', 'https://www.elegantthemes.com/layouts/wp-content/uploads/2018/01/simple-dual-sidebars-page-116x87.jpg', 'https://www.elegantthemes.com/layouts/wp-content/uploads/2018/01/simple-fullwidth-page-116x87.jpg', 'https://www.elegantthemes.com/layouts/wp-content/uploads/2018/01/simple-home-page-116x87.jpg', 'https://www.elegantthemes.com/layouts/wp-content/uploads/2018/01/simple-sales-page-116x87.jpg'];
  var imgsTextArr01 = ['Simple Abo...', 'Simple Abo...', 'Blog', 'Simple Co...', 'Simple Con...', 'Simple Dua...', 'Simple Full...', 'Home', 'Landing'];

  var _loop16 = function _loop16(i) {
    var element = gsImgsArr01[i];
    gsImgs[i].src = "".concat(element);
    gsImgContainer[i].querySelector('p').textContent = "".concat(imgsTextArr01[i]);
    gsImgs[i].addEventListener('click', function () {
      s1Img.src = "".concat(s1ImgsArr01[i]);
    });
  };

  for (var i = 0; i < gsImgsArr01.length; i++) {
    _loop16(i);
  }

  var n = 0;
  var n2 = 0;
  s1ImgsArr01.forEach(function (element) {
    if (element) {
      n++;
      gsImgContainer[n];
      gsImgContainer[n].style.display = 'flex'; // console.log(n)
    }
  });
  s1ImgsArr01.forEach(function (element) {
    if (element === null) {
      n2++;
      gsImgContainer[n2 + n - 1].style.display = 'none';
    }
  });

  var _loop17 = function _loop17(_i172) {
    var element = gsImgsArr01[_i172];
    gsImgs[_i172].src = "".concat(element);
    gsImgContainer[_i172].querySelector('p').textContent = "".concat(imgsTextArr01[_i172]);

    gsImgs[_i172].addEventListener('click', function () {
      s1Img.src = "".concat(s1ImgsArr01[_i172]);
    });
  };

  for (var _i172 = 0; _i172 < gsImgsArr01.length; _i172++) {
    _loop17(_i172);
  }
};

var boxCategory1CMCCSubContainer2System13 = function boxCategory1CMCCSubContainer2System13() {
  cmccTag.textContent = 'Simple';
  cmccGallerySectionNumber.textContent = "(".concat(8, ")");
  s1Img.src = 'https://www.elegantthemes.com/layouts/wp-content/uploads/2018/05/digital-marketing-about-page-533x1535.jpg';
  var s1ImgsArr01 = ['https://www.elegantthemes.com/layouts/wp-content/uploads/2018/05/digital-marketing-about-page-533x1535.jpg', 'https://www.elegantthemes.com/layouts/wp-content/uploads/2018/05/digital-marketing-blog-page-533x806.jpg', 'https://www.elegantthemes.com/layouts/wp-content/uploads/2018/05/digital-marketing-careers-page-533x1322.jpg', 'https://www.elegantthemes.com/layouts/wp-content/uploads/2018/05/digital-marketing-contact-page-533x663.jpg', 'https://www.elegantthemes.com/layouts/wp-content/uploads/2018/05/digital-marketing-home-page-533x1107.jpg', 'https://www.elegantthemes.com/layouts/wp-content/uploads/2018/05/digital-marketing-landing-page-533x2167.jpg', 'https://www.elegantthemes.com/layouts/wp-content/uploads/2018/05/digital-marketing-portfolio-page-533x1044.jpg', 'https://www.elegantthemes.com/layouts/wp-content/uploads/2018/05/digital-marketing-services-page-533x1196.jpg', null];
  var gsImgsArr01 = ['https://www.elegantthemes.com/layouts/wp-content/uploads/2018/05/digital-marketing-about-page-116x87.jpg', 'https://www.elegantthemes.com/layouts/wp-content/uploads/2018/05/digital-marketing-blog-page-116x87.jpg', 'https://www.elegantthemes.com/layouts/wp-content/uploads/2018/05/digital-marketing-careers-page-116x87.jpg', 'https://www.elegantthemes.com/layouts/wp-content/uploads/2018/05/digital-marketing-contact-page-116x87.jpg', 'https://www.elegantthemes.com/layouts/wp-content/uploads/2018/05/digital-marketing-home-page-116x87.jpg', 'https://www.elegantthemes.com/layouts/wp-content/uploads/2018/05/digital-marketing-landing-page-116x87.jpg', 'https://www.elegantthemes.com/layouts/wp-content/uploads/2018/05/digital-marketing-portfolio-page-116x87.jpg', 'https://www.elegantthemes.com/layouts/wp-content/uploads/2018/05/digital-marketing-services-page-116x87.jpg', null];
  var imgsTextArr01 = ['About', 'Blog', 'Careers', 'Contact', 'Home', 'Landing', 'Portfolio', 'Services', null];

  var _loop18 = function _loop18(i) {
    var element = gsImgsArr01[i];
    gsImgs[i].src = "".concat(element);
    gsImgContainer[i].querySelector('p').textContent = "".concat(imgsTextArr01[i]);
    gsImgs[i].addEventListener('click', function () {
      s1Img.src = "".concat(s1ImgsArr01[i]);
    });
  };

  for (var i = 0; i < gsImgsArr01.length; i++) {
    _loop18(i);
  }

  var n = 0;
  var n2 = 0;
  s1ImgsArr01.forEach(function (element) {
    if (element) {
      n++;
      gsImgContainer[n];
      gsImgContainer[n].style.display = 'flex'; // console.log(n)
    }
  });
  s1ImgsArr01.forEach(function (element) {
    if (element === null) {
      n2++;
      gsImgContainer[n2 + n - 1].style.display = 'none';
    }
  });

  var _loop19 = function _loop19(_i173) {
    var element = gsImgsArr01[_i173];
    gsImgs[_i173].src = "".concat(element);
    gsImgContainer[_i173].querySelector('p').textContent = "".concat(imgsTextArr01[_i173]);

    gsImgs[_i173].addEventListener('click', function () {
      s1Img.src = "".concat(s1ImgsArr01[_i173]);
    });
  };

  for (var _i173 = 0; _i173 < gsImgsArr01.length; _i173++) {
    _loop19(_i173);
  }
};

var boxCategorysPopUpSystem = function boxCategorysPopUpSystem() {
  boxCategory1[0].addEventListener('click', function () {
    gsImgContainer[0].querySelector('p').classList.add('p-class-list');
    cmccSubContainer2.classList.add('cmcc-sub-container-class-list-2');
    cmccSubContainer.classList.add('cmcc-sub-container-class-list');
    boxCategory1CMCCSubContainer2System01();
  });
  boxCategory2[0].addEventListener('click', function () {
    gsImgContainer[0].querySelector('p').classList.add('p-class-list');
    cmccSubContainer2.classList.add('cmcc-sub-container-class-list-2');
    cmccSubContainer.classList.add('cmcc-sub-container-class-list');
    boxCategory1CMCCSubContainer2System02();
  });
  boxCategory3[0].addEventListener('click', function () {
    gsImgContainer[0].querySelector('p').classList.add('p-class-list');
    cmccSubContainer2.classList.add('cmcc-sub-container-class-list-2');
    cmccSubContainer.classList.add('cmcc-sub-container-class-list');
    boxCategory1CMCCSubContainer2System03();
  });
  boxCategory4[0].addEventListener('click', function () {
    gsImgContainer[0].querySelector('p').classList.add('p-class-list');
    cmccSubContainer2.classList.add('cmcc-sub-container-class-list-2');
    cmccSubContainer.classList.add('cmcc-sub-container-class-list');
    boxCategory1CMCCSubContainer2System04();
  });
  boxCategory5[0].addEventListener('click', function () {
    gsImgContainer[0].querySelector('p').classList.add('p-class-list');
    cmccSubContainer2.classList.add('cmcc-sub-container-class-list-2');
    cmccSubContainer.classList.add('cmcc-sub-container-class-list');
    boxCategory1CMCCSubContainer2System05();
  });
  boxCategory6[0].addEventListener('click', function () {
    gsImgContainer[0].querySelector('p').classList.add('p-class-list');
    cmccSubContainer2.classList.add('cmcc-sub-container-class-list-2');
    cmccSubContainer.classList.add('cmcc-sub-container-class-list');
    boxCategory1CMCCSubContainer2System06();
  });
  boxCategory7[0].addEventListener('click', function () {
    gsImgContainer[0].querySelector('p').classList.add('p-class-list');
    cmccSubContainer2.classList.add('cmcc-sub-container-class-list-2');
    cmccSubContainer.classList.add('cmcc-sub-container-class-list');
    boxCategory1CMCCSubContainer2System07();
  });
  boxCategory8[0].addEventListener('click', function () {
    gsImgContainer[0].querySelector('p').classList.add('p-class-list');
    cmccSubContainer2.classList.add('cmcc-sub-container-class-list-2');
    cmccSubContainer.classList.add('cmcc-sub-container-class-list');
    boxCategory1CMCCSubContainer2System08();
  });
  boxCategory9[0].addEventListener('click', function () {
    gsImgContainer[0].querySelector('p').classList.add('p-class-list');
    cmccSubContainer2.classList.add('cmcc-sub-container-class-list-2');
    cmccSubContainer.classList.add('cmcc-sub-container-class-list');
    boxCategory1CMCCSubContainer2System09();
  });
  boxCategory10[0].addEventListener('click', function () {
    gsImgContainer[0].querySelector('p').classList.add('p-class-list');
    cmccSubContainer2.classList.add('cmcc-sub-container-class-list-2');
    cmccSubContainer.classList.add('cmcc-sub-container-class-list');
    boxCategory1CMCCSubContainer2System10();
  });
  boxCategory11[0].addEventListener('click', function () {
    gsImgContainer[0].querySelector('p').classList.add('p-class-list');
    cmccSubContainer2.classList.add('cmcc-sub-container-class-list-2');
    cmccSubContainer.classList.add('cmcc-sub-container-class-list');
    boxCategory1CMCCSubContainer2System11();
  });
  boxCategory12[0].addEventListener('click', function () {
    gsImgContainer[0].querySelector('p').classList.add('p-class-list');
    cmccSubContainer2.classList.add('cmcc-sub-container-class-list-2');
    cmccSubContainer.classList.add('cmcc-sub-container-class-list');
    boxCategory1CMCCSubContainer2System12();
  });
  boxCategory13[0].addEventListener('click', function () {
    gsImgContainer[0].querySelector('p').classList.add('p-class-list');
    cmccSubContainer2.classList.add('cmcc-sub-container-class-list-2');
    cmccSubContainer.classList.add('cmcc-sub-container-class-list');
    boxCategory1CMCCSubContainer2System13();
  });
};

boxCategorysPopUpSystem();

var enterExitPagesSystem = function enterExitPagesSystem() {
  exitToMainPage.addEventListener('click', function () {
    cmccSubContainer.classList.remove('cmcc-sub-container-class-list');
    cmccSubContainer2.classList.remove('cmcc-sub-container-class-list-2');
  });
};

enterExitPagesSystem(); // 5.) footer-content-container |=======>

var ftParaSpan1 = document.querySelector('.ft-para-span-1');
var ftParaSpan2 = document.querySelector('.ft-para-span-2');

var ftParaSpanSystem1 = function ftParaSpanSystem1() {
  if (window.scrollY >= 1700) {
    ftParaSpan1.classList.add('ft-para-span-class-list');
  }

  if (window.scrollY >= 1900) {
    ftParaSpan2.classList.add('ft-para-span-class-list');
  } // ==========


  if (window.scrollY <= 1700) {
    ftParaSpan1.classList.remove('ft-para-span-class-list');
  }

  if (window.scrollY <= 1900) {
    ftParaSpan2.classList.remove('ft-para-span-class-list');
  }
};

var ftParaSpanSystem2 = function ftParaSpanSystem2() {
  if (window.innerWidth <= 1145) {
    if (window.scrollY >= 1810) {
      ftParaSpan1.classList.add('ft-para-span-class-list');
    }

    if (window.scrollY >= 2010) {
      ftParaSpan2.classList.add('ft-para-span-class-list');
    } // ==========


    if (window.scrollY <= 1810) {
      ftParaSpan1.classList.remove('ft-para-span-class-list');
    }

    if (window.scrollY <= 2010) {
      ftParaSpan2.classList.remove('ft-para-span-class-list');
    }
  }
};

var ftParaSpanMainSystem = function ftParaSpanMainSystem() {
  ftParaSpanSystem1();
  ftParaSpanSystem2();
};

setInterval(function () {
  ftParaSpanMainSystem();
}, 1000);