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
    <div class="container">
        <div class="row">
            <div class="col-6">
                <h1 class="heading-style">Discover a <span>world</span> of <span>delicious</span> food options! </h1>
                <div class="row align-items-end pt-4">
                    <div class="col-7">
                        <div class="p-style">Search in our catalogs of restaurants the one that matches your taste. <br>
                            Start
                            now!</div>
                    </div>
                    <div class="col-5">
                        <div class="my-btn">Order</div>
                    </div>
                </div>

            </div>
            <div class="col-6 d-flex justify-content-center">
                <div class="hero-img">
                    <img class="ramen-img" src="../assets/ramenPlate.png" alt="">
                    <!--                     <img class="cipollotto-img" src="../assets/cipollotto1.png" alt="">
 -->
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.container {
    margin-top: 90px;
}

.heading-style {

    font-size: var(--f-heading-size);
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
</style>
