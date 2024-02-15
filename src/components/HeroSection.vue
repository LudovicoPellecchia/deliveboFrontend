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
    <div class="container hero-section">
        <div class="row">
            <div class="col-12 col-lg-6">
                <div class="col-12 col-md-8 col-lg-12 ">
                    <h1 class="heading-style">Discover a <span>world</span> of <span>delicious</span> food options! </h1>
                </div>
                <div class="col-12 col-lg-6 d-flex justify-content-center">
                    <div class="hero-img d-sm-none">
                        <img class="ramen-img" src="../assets/ramenPlate.png" alt="">
                    </div>
                </div>
                <div class="row align-items-end pt-4 hero-paragraphs">
                    <div class="col-10 col-sm-7">
                        <div class="p-style">Search in our catalogs of restaurants the one that matches your taste. <br>
                            Start
                            now!</div>
                    </div>
                    <div class="col-7 col-sm-5">
                        <div class="my-btn">Order</div>
                    </div>
                </div>

            </div>
            <div class="col-12 col-lg-6 d-flex justify-content-center">
                <div class="hero-img d-none d-lg-block">
                    <img class="ramen-img" src="../assets/ramenPlate.png" alt="">
                </div>
            </div>
        </div>
    </div>
</template>


<style lang="scss" scoped>
.hero-section {
    margin-top: 60px;
}

.heading-style {

    font-size: clamp(40px, 7vw, var(--f-heading-size));
    font-weight: 500;

    span {
        color: #E98E01;

    }
}


.p-style {
    line-height: 28px;
    font-size: 20px;
}


.my-btn {
    color: #E98E01;
    border: 3px solid #E98E01;



    &:hover {
        transition: all 0.5;
        background-color: #E98E01;
        color: white;
    }
}

.hero-img {
    max-width: 503px;
    width: 100%;

    img {
        width: 100%;
        filter: drop-shadow(0 0 0.3rem rgb(0, 0, 0));
        margin-top: -103px;
    }

    .cipollotto-img {
        position: absolute;
        max-width: 140px;
        right: 0;
    }
}

@media screen and (max-width: 576px) {

    .hero-img {
        margin-top: 20px;

        max-width: 150px;

        img {
            margin-top: 0;
            filter: drop-shadow(0 4px 0.3rem rgba(0, 0, 0, 0.5));

        }
    }

    .hero-section {
        padding: 0 40px;
        margin-top: 30px;
        text-align: center;
    }

    .hero-paragraphs {
        justify-content: center;
        gap: 1.7rem;

    }



}

@media screen and (min-width: 768px) {

    .hero-img{
        max-width: 430px;
    }


}
@media screen and (min-width: 992px) {


}
@media screen and (min-width: 1200px) {

    .hero-section {
        margin-top: 90px;
    }

}
</style>
