<script>

export default {
    components: {

    },
    data() {
        return {}
    },
    methods: {

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
                        <div class="card-list">
                            <h5>Start your search! What do you feel like today?</h5>

                            <div class="row row-cols-2 row-cols-md-3 gy-3">
                                <div class="col">
                                    <div class="my-card">
                                        <img src="../assets/categories/iStock-1171008705.jpg" alt="">
                                        <div class="card-title">Pizza</div>
                                    </div>
                                </div>
                                <div class="col">
                                    <div class="my-card">
                                        <img src="../assets/categories/iStock-1302436326.jpg" alt="">
                                        <div class="card-title">Hamburger</div>
                                    </div>
                                </div>
                                <div class="col">
                                    <div class="my-card">
                                        <img src="../assets/categories/iStock-1616721452.jpg" alt="">
                                        <div class="card-title">Giapponese</div>
                                    </div>
                                </div>
                                <div class="col">
                                    <div class="my-card">
                                        <img src="../assets/categories/iStock-162244500.jpg" alt="">
                                        <div class="card-title">Indiano</div>
                                    </div>
                                </div>
                                <div class="col">
                                    <div class="my-card">
                                        <img src="../assets/categories/iStock-542331706.jpg" alt="">
                                        <div class="card-title">Messicano</div>
                                    </div>
                                </div>
                                <div class="col">
                                    <div class="my-card">
                                        <img src="../assets/categories/iStock-1171008705.jpg" alt="">
                                        <div class="card-title">Cinese</div>
                                    </div>
                                </div>
                            </div>

                            <div class="arrows">
                                <i class="fa-solid fa-chevron-left"></i>
                                <i class="fa-solid fa-chevron-right"></i>
                            </div>
                        </div>
                    </div>
                </div>






            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
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
    }

    .card-list {
        position: relative;

        /*         margin: 0 100px;
 */
        h5 {
            margin-bottom: 2rem;
        }

        .my-card {
            position: relative;
            cursor: pointer;
            transition: transform 0.4s;

            &:hover {
                transform: scale(1.02);
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

    .arrows i {
        position: absolute;
        font-size: clamp(1rem, 2vw, 1.6rem);
        color: var(--clr-primary);
    }

    .arrows i:nth-child(1) {
        left: -15px;
        top: 50%;
        transform: translate(-50%, 50%);

    }

    .arrows i:nth-child(2) {
        right: -15px;
        top: 50%;
        transform: translate(50%, 50%);
    }
}

@media screen and (min-width: 1050px) {

    .arrows i:nth-child(1) {
        left: -30px;
    }

    .arrows i:nth-child(2) {
        right: -30px;

    }
}</style>
