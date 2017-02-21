var app = angular.module("myApp",["ui.router"]);
// 自定义swiper服务
app.directive("mySwiper",function () {
    return{
        restrict: "A",
        link:function (scope,ele,attr) {
            var sweper = new Swiper(ele,{
                loop:true,
                autoplay:2000,
                autoplayDisableOnInteraction:false,
                paginationClickable: true,
                pagination: '.swiper-pagination'
            });
        }
    }
});
app.directive("swiperAddress",function () {
    return{
        restrict: "A",
        link:function (scope,ele,attr) {
            var sweper = new Swiper(ele,{
                paginationClickable: true,
                slidesPerView: 5,
                centeredSlides: true,
                direction:"vertical",
                onSlideChangeEnd:function(swiper){
                    swiper.slides.eq(swiper.activeIndex).removeClass().addClass("swiper-slide this");
                    swiper.slides.eq(swiper.activeIndex+1).removeClass().addClass("swiper-slide last2");
                    swiper.slides.eq(swiper.activeIndex+2).removeClass().addClass("swiper-slide last");
                    swiper.slides.eq(swiper.activeIndex-1).removeClass().addClass("swiper-slide last2");
                    swiper.slides.eq(swiper.activeIndex-2).removeClass().addClass("swiper-slide first");
                }
            });
        }
    }
});