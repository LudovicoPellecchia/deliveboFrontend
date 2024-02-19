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
    <div class="call-to-action-section">
        <div class="container">
            <div class="row justify-content-center">

                <div class="col-12 col-sm-10 col-lg-6">
                    <div class="cta-card">
                        <div class="card-wrapper">
                            <img src="../../assets/man-chef-cooking-asian-chicken-cafe-kitchen.jpg" alt="">
                        </div>
                    </div>
                </div>
                <div class="col-12 col-lg-4">
                    <div class="cta-paragraph">
                        <span>Are you a restaurateur? Collaborate with us and expand your customer base!</span>

                        <span>In our catalog, we
                            have <span style="font-weight: bold;">100+</span> restaurants that collaborate. </span>
                        <span style="font-weight: bold;">You take care of the food, we take care of delivering
                            it!</span>
                    </div>
                    <div class="btn-wrapper">
                        <div class="my-btn">Collabora con noi!</div>

                    </div>
                </div>
            </div>

        </div>
    </div>
</template>

<style lang="scss" scoped>
.call-to-action-section {
    padding-top: var(--section-spacing);
    background-color: var(--clr-bg-body);
}

.cta-card {
    height: 100%;

    .card-wrapper {
        height: 100%;
    }

    img {
        height: 100%;
        object-fit: cover;
        width: 100%;
        -webkit-transform: scaleX(-1);
        transform: scaleX(-1);
        border-radius: 35px;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    }
}



.cta-paragraph {
    font-size: 1.1rem;
    gap: 20px;
    flex-direction: column;
    display: flex;
    justify-content: center;
    padding: 50px;
    align-items: center
}

.btn-wrapper {
    text-align: center;
}

.my-btn {
    padding: 15px 30px;
    font-weight: 400;
    display: inline-block;
    border: 2px solid #333333;

    &:hover{
        background-color: #333333;
        color: white;
    }
}
</style>
