<template>
    <section class="ipsum">
        <div class="title">
            <h1>LOREM IPSUM DOLOR<span>sit</span>AMET</h1>
        </div>
        <div class="ipsum-slider">
            <swiper
                :slidesPerView="slidesPerVue"
                :spaceBetween="40"
                :loop="true"
                :navigation="true"
                :centeredSlides= "true"
                :modules="[Thumbs]" 
                :freeMode="true"
                :thumbs="{ swiper: thumbsSwiper }"
                @swiper="onSwiper"
                class="mySwiper"
                >
                <swiper-slide 
                    class="swiper-slide"      
                    v-for="item in images"
                    :key="item.id"
                    v-slot="{ isActive }"
                    @click="modal = true">
                    <div class="swiper-slide-block" :style="{ backgroundImage: 'url(' + require('@/assets/images/img/'+item.img) + ')' }">
                        <div v-show="isActive" class="swiper-slide-bottomBlock">
                            <p>{{ item.textBottom }}</p>
                        </div>
                        <div v-show="false" class="swiper-slide-rightBlock">
                            <p>Lorem ipsum dolor sit amet</p>
                        </div>
                    </div>
                </swiper-slide>
            </swiper>
            <div class="slider-navigation">
                <div class="slider-navigation-block">
                    <button @click="swiper.slidePrev()">
                        <svg @click="activeSlider(isActive)" width="13" height="24" viewBox="0 0 13 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12.348 0.666002C12.5224 0.844598 12.6201 1.08435 12.6201 1.334C12.6201 1.58366 12.5224 1.82341 12.348 2.002L2.602 12L12.348 21.996C12.5224 22.1746 12.6201 22.4143 12.6201 22.664C12.6201 22.9136 12.5224 23.1534 12.348 23.332C12.2632 23.4191 12.1618 23.4883 12.0498 23.5356C11.9379 23.5828 11.8175 23.6072 11.696 23.6072C11.5744 23.6072 11.4541 23.5828 11.3421 23.5356C11.2302 23.4883 11.1288 23.4191 11.044 23.332L0.679996 12.698C0.497969 12.5112 0.396093 12.2608 0.396093 12C0.396093 11.7392 0.497969 11.4887 0.679996 11.302L11.044 0.668002C11.1288 0.580916 11.2302 0.511698 11.3421 0.464435C11.4541 0.417172 11.5744 0.392822 11.696 0.392822C11.8175 0.392822 11.9379 0.417172 12.0498 0.464435C12.1618 0.511698 12.2632 0.580916 12.348 0.668002V0.666002Z" fill="black"/>
                        </svg>
                    </button>
                    <button @click="swiper.slideNext()">
                        <svg @click="activeSlider(isActive)" xmlns="http://www.w3.org/2000/svg" width="13" height="24" viewBox="0 0 13 24" fill="none">
                            <path d="M0.651989 0.666002C0.477544 0.844598 0.379883 1.08435 0.379883 1.334C0.379883 1.58366 0.477544 1.82341 0.651989 2.002L10.398 12L0.651989 21.996C0.477544 22.1746 0.379883 22.4143 0.379883 22.664C0.379883 22.9136 0.477544 23.1534 0.651989 23.332C0.736781 23.4191 0.83816 23.4883 0.950143 23.5356C1.06213 23.5828 1.18244 23.6072 1.30399 23.6072C1.42554 23.6072 1.54585 23.5828 1.65784 23.5356C1.76982 23.4883 1.8712 23.4191 1.95599 23.332L12.32 12.698C12.502 12.5112 12.6039 12.2608 12.6039 12C12.6039 11.7392 12.502 11.4887 12.32 11.302L1.95599 0.668002C1.8712 0.580916 1.76982 0.511698 1.65784 0.464435C1.54585 0.417172 1.42554 0.392822 1.30399 0.392822C1.18244 0.392822 1.06213 0.417172 0.950143 0.464435C0.83816 0.511698 0.736781 0.580916 0.651989 0.668002V0.666002Z" fill="black"/>
                        </svg>
                    </button>
                </div>
            </div>
        </div>
        <div v-show="modal" class="slider-big">
            <div @click="modal = false" class="swiper-big-close">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="19" viewBox="0 0 18 19" fill="none">
                    <path d="M17 1.2959L1 17.2959M17 17.2959L1 1.2959L17 17.2959Z" stroke="white" stroke-width="2" stroke-linecap="round"/>
                </svg>
            </div>
            <div class="slider-big-container">
                <swiper
                    :slidesPerView="1"
                    :spaceBetween="40"
                    :loop="true"
                    :navigation="true"
                    :modules="[Thumbs]"
                    watch-slides-progress
                    @swiper="setThumbsSwiper"
                    class="mySwiper-big"
                    >
                    <swiper-slide 
                        class="swiper-slide-big"      
                        v-for="item in images"
                        :key="item.id"
                        v-slot="{ isActive }">
                        <div class="swiper-slide-block-big">
                            <img :src="require('@/assets/images/img/'+item.img)" alt="">
                        </div>
                        <div v-show="isActive" class="swiper-slide-bottomBlock-big">
                            <p class="swiper-big-text">
                                {{ item.bigText }}
                            </p>
                        </div>
                    </swiper-slide>
                </swiper>
                <div class="slider-navigation-big">
                    <div class="slider-navigation-block-big">
                        <button  @click="swiper.slidePrev()">
                            <svg @click="activeSlider" width="13" height="24" viewBox="0 0 13 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12.348 0.666002C12.5224 0.844598 12.6201 1.08435 12.6201 1.334C12.6201 1.58366 12.5224 1.82341 12.348 2.002L2.602 12L12.348 21.996C12.5224 22.1746 12.6201 22.4143 12.6201 22.664C12.6201 22.9136 12.5224 23.1534 12.348 23.332C12.2632 23.4191 12.1618 23.4883 12.0498 23.5356C11.9379 23.5828 11.8175 23.6072 11.696 23.6072C11.5744 23.6072 11.4541 23.5828 11.3421 23.5356C11.2302 23.4883 11.1288 23.4191 11.044 23.332L0.679996 12.698C0.497969 12.5112 0.396093 12.2608 0.396093 12C0.396093 11.7392 0.497969 11.4887 0.679996 11.302L11.044 0.668002C11.1288 0.580916 11.2302 0.511698 11.3421 0.464435C11.4541 0.417172 11.5744 0.392822 11.696 0.392822C11.8175 0.392822 11.9379 0.417172 12.0498 0.464435C12.1618 0.511698 12.2632 0.580916 12.348 0.668002V0.666002Z" fill="#FFFFFF"/>
                            </svg>
                        </button>
                        <button @click="swiper.slideNext()">
                            <svg @click="activeSlider" xmlns="http://www.w3.org/2000/svg" width="13" height="24" viewBox="0 0 13 24" fill="none">
                                <path d="M0.651989 0.666002C0.477544 0.844598 0.379883 1.08435 0.379883 1.334C0.379883 1.58366 0.477544 1.82341 0.651989 2.002L10.398 12L0.651989 21.996C0.477544 22.1746 0.379883 22.4143 0.379883 22.664C0.379883 22.9136 0.477544 23.1534 0.651989 23.332C0.736781 23.4191 0.83816 23.4883 0.950143 23.5356C1.06213 23.5828 1.18244 23.6072 1.30399 23.6072C1.42554 23.6072 1.54585 23.5828 1.65784 23.5356C1.76982 23.4883 1.8712 23.4191 1.95599 23.332L12.32 12.698C12.502 12.5112 12.6039 12.2608 12.6039 12C12.6039 11.7392 12.502 11.4887 12.32 11.302L1.95599 0.668002C1.8712 0.580916 1.76982 0.511698 1.65784 0.464435C1.54585 0.417172 1.42554 0.392822 1.30399 0.392822C1.18244 0.392822 1.06213 0.417172 0.950143 0.464435C0.83816 0.511698 0.736781 0.580916 0.651989 0.668002V0.666002Z" fill="#FFFFFF"/>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import { Swiper, SwiperSlide  } from "swiper/vue";

// Import Swiper styles
import "swiper/css";

import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Navigation, Thumbs } from "swiper";

import { ref } from 'vue';

export default {
    components: {
        Swiper,
        SwiperSlide
    },

  data() {
    return {
        slidesPerVue : 5,
        modal: false,
        images: [
        {
            "id" : 1,
            "img" : "MaskGroup.png",
            "textBottom": "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
            "bigText" : "Incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
        },
        {
            "id" : 2,
            "img" : "MaskGroup5.png",
            "textBottom": "Lorem ipsum dolor sit amet, consectetur adipiscing elit2",
            "bigText" : "Incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"

        },
        {
            "id" : 3,
            "img" : "MaskGroup2.png",
            "textBottom": "Lorem ipsum dolor sit amet, consectetur adipiscing elit3",
            "bigText" : "Incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"

        },
        {
            "id" : 4,
            "img" : "MaskGroup3.png",
            "textBottom": "Lorem ipsum dolor sit amet, consectetur adipiscing elit4",
            "bigText" : "Incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"

        },
        {
            "id" : 5,
            "img" : "MaskGroup4.png",
            "textBottom": "Lorem ipsum dolor sit amet, consectetur adipiscing elit5",
            "bigText" : "Incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"

        },
        {
            "id" : 6,
            "img" : "MaskGroup4.png",
            "textBottom": "Lorem ipsum dolor sit amet, consectetur adipiscing elit6",
            "bigText" : "Incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"

        },
        ]
    }
  },

  setup() {
    const swiper = ref();
    const thumbsSwiper = ref(null);
    const setThumbsSwiper = (swiper) => {
        thumbsSwiper.value = swiper;
    };
      return {
        modules: [ Navigation],
        swiper,
        Thumbs,
        thumbsSwiper,
        setThumbsSwiper,
        onSwiper: instance => swiper.value = instance,
      };
  },

  methods: {
    activeSlider(n) {
        console.log(n);
    }
  }
}
</script>

<style lang="scss">
.ipsum {
    .title{
        margin-left: 10%;

        & h1 {
            font-family: 'Orchidea Pro';
            font-style: normal;
            font-weight: 500;
            font-size: 64px;
            line-height: 110%;
            display: flex;
            align-items: center;
            text-transform: uppercase;
            color: #141414;
        }
        & span {
            font-family: 'Orchidea Pro Medium Italic';
            text-transform: none;
            margin-left: 10px;
            margin-right: 10px;
        }
    }
    .ipsum-slider {
        margin-top: 70px;
        .mySwiper {
            .swiper-slide {
                cursor: pointer;
                .swiper-slide-block {
                    min-height: 500px;
                    background-repeat: no-repeat;
                    position: relative;
                    .swiper-slide-bottomBlock {
                        width: 100%;
                        padding: 35px 30px;
                        position: absolute;
                        bottom: 0;
                        background: #141414;
                        opacity: 0.5;
                        p { 
                            font-family: 'Orchidea Pro';
                            font-style: normal;
                            font-weight: 500;
                            font-size: 24px;
                            line-height: 110%;
                            display: flex;
                            align-items: center;
                            color: #FFFFFF;
                        }
                    }
                }
            }
            .swiper-button-prev,
            .swiper-button-next{
                top: 0;
                height: 110%;
                width: 18%;
            }
            .swiper-button-prev {
                left: 0;
                background: linear-gradient(270deg, #FFFFFF 0%, rgba(255, 255, 255, 0.05) 100%);
                transform: matrix(-1, 0, 0, 1, 0, 0);
            }
            .swiper-button-next {
                right: 0;
                background: linear-gradient(270deg, #FFFFFF 0%, rgba(255, 255, 255, 0.05) 100%);
            }
            .swiper-button-prev::after,
            .swiper-button-next::after{
                content: "";
            }
        }
        .slider-navigation {
            width: 100%;
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            margin-top: 70px;
            .slider-navigation-block {
                width: 12%;
                display: flex;
                flex-direction: row;
                justify-content: space-between;
                align-items: center;
            }
        }
    }
    .slider-big {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: #141414;
        z-index: 100;
        .swiper-big-close {
            position: absolute;
            right: 50px;
            top: 50px;
            cursor: pointer;
        }
        .slider-big-container {
            width: 50%;
            margin: 0 auto;
            margin-top: 10%;
            position: relative;
            .slider-navigation-big {
                position: absolute;
                top: 0;
                right: 0;
                height: 83%;
                width: 20%;
                display: flex;
                align-items: flex-end;
                justify-content: flex-end;
                z-index: 1000;
                .slider-navigation-block-big {
                    width: 60%;
                    display: flex;
                    justify-content: space-between;
                    background: #141414;
                    padding: 10px;
                }
            }
            .mySwiper-big {
                .swiper-button-prev,
                .swiper-button-next {
                    display: none;
                }
                    .swiper-slide-big {
                        .swiper-slide-bottomBlock-big {
                            margin-top: 20px;
                            .swiper-big-text{
                                font-family: 'Manrope';
                                font-style: normal;
                                font-weight: 500;
                                font-size: 18px;
                                line-height: 130%;
                                color: #FFFFFF;
                            }
                        }
                        .swiper-slide-block-big {

                        }
                }
            }
        }
    }
}
</style>