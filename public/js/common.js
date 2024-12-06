"use strict";

// import Swiper from '../libs/swiper/swiper-bundle.min.mjs';
// import JSCCommon from "./JSCCommon.js";

function eventHandler() {
	// const $ = jQuery;
	JSCCommon.init();

	function whenResize() {
		JSCCommon.setFixedNav();
    setSidebar()
	}

	window.addEventListener(
		"scroll",
		() => {
			JSCCommon.setFixedNav();
		},
		{passive: true}
	);
	window.addEventListener("resize", whenResize, {passive: true});

	whenResize();

	new Swiper(".sSlider__slider", {
		slidesPerView: "auto",
		freeMode: true,
		watchOverflow: true,
	});

	const swiper4 = new Swiper(".sNews__slider--js", {
		slidesPerView: 1,
    breakpoints: {
      768: {
        slidesPerView: 2,
      }
    },
		navigation: {
			nextEl: ".swiper-button-next",
			prevEl: ".swiper-button-prev",
    }
	});

  function setSidebar() {
    let sidebar = document.querySelector(".sidebar-sticky");
    if (!sidebar) return

    if (window.innerWidth < 768) {
      if (!sidebar.hcStickyInstance) {
        sidebar.hcStickyInstance = new hcSticky(sidebar, {
          stickTo: ".sticky-wrap",
          top: 0,
          bottomEnd: 0,
        });
      }
    } else {
      if (sidebar.hcStickyInstance) {
        sidebar.hcStickyInstance.destroy();
        sidebar.hcStickyInstance = null;
      }
    }
  }

  setSidebar()

}

if (document.readyState !== "loading") {
	eventHandler();
} else {
	document.addEventListener("DOMContentLoaded", eventHandler);
}

// window.onload = function () {
// 	document.body.classList.add('loaded_hiding');
// 	window.setTimeout(function () {
// 		document.body.classList.add('loaded');
// 		document.body.classList.remove('loaded_hiding');
// 	}, 500);
// }
