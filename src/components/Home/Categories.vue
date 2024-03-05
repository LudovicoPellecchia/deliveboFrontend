<script>
import Swiper from 'swiper';
import { Grid, Navigation, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/grid';

export default {

    components: {

    },
    data() {
        return {
            cards: [
                {
                    id: 0,
                    src: '../src/assets/categories/hamb.jpg',
                    name: 'Hamburger'
                },
                {
                    id: 1,
                    src: '../src/assets/categories/mex.jpg',
                    name: 'Mexican'
                },
                {
                    id: 2,
                    src: '../src/assets/categories/pizza.jpg',
                    name: 'Pizza'
                },
                {
                    id: 3,
                    src: '../src/assets/categories/jap.jpg',
                    name: 'Japanese'
                },
                {
                    id: 4,
                    src: '../src/assets/categories/indiano.jpg',
                    name: 'Indian'
                },
                {
                    id: 5,
                    src: '../src/assets/categories/cinese.jpg',
                    name: 'Chinese'
                },
                {
                    id: 6,
                    src: '../src/assets/categories/mediter.jpg',
                    name: 'Mediterranean'
                },
                {
                    id: 7,
                    src: '../src/assets/categories/vegan.jpg',
                    name: 'Vegan'
                },
                {
                    id: 8,
                    src: '../src/assets/categories/bakery.png',
                    name: 'Bakery'
                },
                {
                    id: 9,
                    src: '../src/assets/categories/italian.jpg',
                    name: 'Italian'
                },
                {
                    id: 10,
                    src: '../src/assets/categories/fried.jpg',
                    name: 'Fried'
                },
                {
                    id: 11,
                    src: '../src/assets/categories/thai.jpg',
                    name: 'Thai'
                },
            ]
        }
    },
    methods: {

    },
    mounted() {
        // Inizializza Swiper qui e passa le funzioni console.log come callback
        new Swiper('.swiper', {
            slidesPerView: 2,
            spaceBetween: 20,
            modules: [Navigation, Pagination, Grid],
            grid: {
                fill: 'row',
                rows: 2
            },

            direction: 'horizontal',
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            breakpoints: {
                768: {
                    slidesPerView: 3,
                    grid: {
                        fill: 'row',
                        rows: 2
                    },
                    direction: 'horizontal',
                },
                0: {
                    slidesPerView: 2,
                    direction: 'horizontal',
                    grid: {
                        fill: 'row',
                        rows: 3
                    },
                },


            },

            on: {
                init: (swiper) => console.log(swiper),
                slideChange: () => console.log('slide change')
            }
        });
    },
}
</script>

<template>
    <section class="categories-section">
        <div class="bg-circle">
            <img src="../assets/orangecircle.svg" alt="">
        </div>
        <div class="categories-wrapper">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-12 col-xl-10">
                        <h5>Start your search! What do you feel like today?</h5>
                        <div class="slider">
                            <div class="swiper card-list">
                                <div class="swiper-wrapper">
                                    <div class="swiper-slide " v-for="card in cards" :key="card.id">
                                        <div class="my-card">
                                            <img :src="card.src" :alt="card.id">
                                            <div class="card-title">{{ card.name }}</div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div class="swiper-button-prev"></div>
                            <div class="swiper-button-next"></div>
                        </div>



                    </div>
                </div>
            </div>






        </div>
    </section>
</template>

<style lang="scss" scoped>
.slider {
    position: relative;
}

.categories-section {
    position: relative;

    .bg-circle {


        img {
            transform: translateY(-50px);
            position: absolute;
            z-index: -2;
            max-width: 440px;
            width: 100%
        }
    }
}

.categories-wrapper {
    padding-top: var(--section-spacing);

    h5 {
        font-weight: 500;
        margin-bottom: 2rem;

    }

    .card-list {
        position: relative;

        .my-card {
            aspect-ratio: 16/9;
            position: relative;
            cursor: pointer;
            transition: transform 0.4s;

            &:hover {
                transform: scale(1.02);
            }

            img {
                width: 100%;
                height: 100%;
                object-fit: cover;
            }

            &::after {
                content: '';
                width: 100%;
                height: 100%;
                position: absolute;
                background-color: rgba(0, 0, 0, 0.45);
                top: 0;
                z-index: 0;
                transition: background-color 0.4s;
            }

            &:hover::after {
                background-color: rgba(0, 0, 0, 0.08);
            }

            .card-title {
                z-index: 1;
                font-size: clamp(1.1rem, 2vw, 1.6rem);
                color: white;
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
            }
        }
    }


    .swiper-button-next,
    .swiper-button-prev {
        &::after {
            font-size: clamp(1rem, 4vw, 1.6rem);
            color: #E98E01;

        }
    }

    .swiper-button-prev {
        left: auto;
        right: 100%;

    }

    .swiper-button-next {
        left: 100%;
    }


}


@media screen and (max-width:576px) {
    .swiper-button-next, .swiper-button-prev{
        display: none;
    }
}
</style>
