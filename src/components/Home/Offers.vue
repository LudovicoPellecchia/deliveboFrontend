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
    <div class="offers-section">
        <div class="bg-imgs-wrapper">
            <img class="basil-bg" src="../assets/basil-img.png" alt="">
            <img class="parsley-bg" src="../assets/parsley-img.png" alt="">
        </div>
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-8">
                    <div class="offers-wrapper">
                        <h4>Try our discounts!</h4>
                        <div><span>20%</span> discount for your first 5 orders </div>
                        <div>Free deliveries, coupons, discounts! Join us to get access to new discounts every week. </div>
                        <div class="my-btn">View More</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.offers-section {
    position: relative;
    padding: 40px;
    margin-top: var(--section-spacing);
    background-color: #F1B14E;
    background-image: url('../assets/vectorbgleaf.png');

    .bg-imgs-wrapper {
        .basil-bg {
            width: 100%;
            max-width: 200px;
            position: absolute;
            right: 0;
            bottom: 0;
            transform: translateY(50%);
        }

        .parsley-bg {
            filter: drop-shadow(0 0 0.2rem rgba(0, 0, 0, 0.4));
            width: 100%;
            max-width: 200px;
            position: absolute;
            left: 0;
            top: 0;
            -moz-transform: scaleY(-1);
            -o-transform: scaleY(-1);
            -webkit-transform: scaleY(-1);
            transform: scaleY(-1);
            filter: FlipV;
            -ms-filter: "FlipV";
        }
    }

    .offers-wrapper {
        text-align: center;
        display: flex;
        gap: 20px;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        :nth-child(2){
            font-size: 1.4rem;
        }

        :nth-child(3){
            font-size: 1.1rem;
        }

        h4 {
            font-size: 40px;
        }

        span {
            font-weight: bold;
        }



        .my-btn {
            padding: 15px 60px;
            margin: 40px 0;
            color: black;
            border: 3px solid #333333;

            &:hover {
                background-color: #333333;
                color: var(--clr-bg-body);
            }

        }

    }
}
</style>
