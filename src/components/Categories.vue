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
                <div class="card-list">
                    <h5>Start your search! What do you feel like today?</h5>

                    <div class="row row-cols-3 gy-3">
                        <div class="col">
                            <div class="my-card">
                                <img src="../assets/categories/iStock-1171008705.jpg" alt="">
                            </div>
                        </div>
                        <div class="col">
                            <div class="my-card">
                                <img src="../assets/categories/iStock-1302436326.jpg" alt="">
                            </div>
                        </div>
                        <div class="col">
                            <div class="my-card">
                                <img src="../assets/categories/iStock-1616721452.jpg" alt="">
                            </div>
                        </div>
                        <div class="col">
                            <div class="my-card">
                                <img src="../assets/categories/iStock-162244500.jpg" alt="">
                            </div>
                        </div>
                        <div class="col">
                            <div class="my-card">
                                <img src="../assets/categories/iStock-542331706.jpg" alt="">
                            </div>
                        </div>
                        <div class="col">
                            <div class="my-card">
                                <img src="../assets/categories/iStock-1171008705.jpg" alt="">
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
    padding-top: 70px;

    h5 {
        font-weight: 500;
    }

    .card-list {
        position: relative;
        margin: 0 100px;

        h5{
            margin-bottom: 2rem;
        }
    }

    .arrows i{
        position: absolute;
        font-size: 1.6rem;
        color: var(--clr-primary);
    }

    .arrows i:nth-child(1) {
        left: -30px;
        top: 50%;
        transform: translate(-50%, -50%);

    }

    .arrows i:nth-child(2) {
        right: -30px;
        top: 50%;
        transform: translate(50%, -50%);


    }
}
</style>
