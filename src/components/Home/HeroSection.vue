<script>

export default {
    components: {

    },
    data() {
        return {
            observer: null,
            isVisible: null
        }
    },
    methods: {
        onIntersect(entries) {
            // per ogni elemento osservato
            entries.forEach((entry) => {
                // se è intersecato
                if (entry.isIntersecting) {
                    // imposta isVisible a true
                    this.isVisible = true;
                } else {
                    // altrimenti imposta isVisible a false
                    this.isVisible = false;
                }
            });
        },
    },

    mounted() {
        this.observer = new IntersectionObserver(this.onIntersect, {
            root: null, // il viewport
            threshold: 0.5, // percentuale di visibilità richiesta
            rootMargin: "20px", // margine aggiuntivo dal bordo del viewport
        });
/*         this.observer.observe(this.$refs.titleRef);
        this.observer.observe(this.$refs.heroBtn); */
        this.observer.observe(this.$refs.heroPar); // osserva il titolo
    },
    beforeDestroy() {
        this.observer.disconnect(); // disconnetti l'observer
    },
}
</script>

<template>
    <div class="container hero-section ">
        <div class="row">
            <div class="col-12 col-lg-6">
                <div class="col-12 col-md-8 col-lg-12 ">
                    <h1 ref="titleRef" :class="{ 'fade-in-heading': isVisible }" class="heading-style">
                        Discover a <span>world</span> of <span>delicious</span> food options!
                    </h1>
                </div>
                <div class="col-12 col-lg-6 d-flex justify-content-center">
                    <div class="hero-img d-sm-none">
                        <img class="ramen-img" src="../../assets/ramenPlate.png" alt="">
                    </div>
                </div>
                <div class="row align-items-end pt-4 hero-paragraphs">
                    <div class="col-10 col-sm-7">
                        <div ref="heroPar" :class="{ 'fade-in-p': isVisible }" class="p-style">Search in our catalogs of
                            restaurants the one that matches your taste. <br>
                            Start
                            now!</div>
                    </div>
                    <div class="col-7 col-sm-5">
                        <div :class="{ 'fade-in-btn': isVisible }" ref="heroBtn" class="my-btn">Order</div>
                    </div>
                </div>

            </div>
            <div class="col-12 col-lg-6 d-flex justify-content-center">
                <div class="hero-img d-none d-lg-block">
                    <img class="ramen-img" src="../../assets/ramenPlate.png" alt="">
                </div>
            </div>
        </div>
    </div>
</template>


<style lang="scss" scoped>
.hero-section {
    margin-top: 60px;
}

//ANIMAZIONI TESTI HERO
.heading-style.fade-in-heading {
    filter: blur(0px);
    transform: translateY(0);
    opacity: 1;
    transition: opacity 0.6s ease 0.2s, transform 0.6s ease 0.2s, filter 1s ease 0.2s;
}

.p-style.fade-in-p {
    filter: blur(0px);
    transform: translateX(0);
    opacity: 1;
    transition: opacity 0.6s ease 0.2s, transform 1s ease 0.2s, filter 1s ease 0.2s;
}

.my-btn.fade-in-btn {
    filter: blur(0);
    transform: translateX(0);
    opacity: 1;
    transition: background-color 0.2s, color 0.2s, opacity 0.6s ease, transform 1s ease, filter 1s ease 0.2s;
}

//STILI TESTI HERO
.heading-style {
    filter: blur(1px);
    opacity: 0;
    transform: translateY(-20px);
    transition: opacity 0.5s, transform 0.5s;
    font-size: clamp(40px, 7vw, var(--f-heading-size));
    font-weight: 500;

    span {
        color: #E98E01;
    }
}

.p-style {
    filter: blur(1px);
    /* Aggiungi sfocatura quando l'elemento diventa visibile */
    transform: translateX(-20px);
    opacity: 0;
    transition: opacity 0.5s 0.1s, transform 0.5s 0.1s;
    line-height: 28px;
    font-size: 20px;
}

.my-btn {
    filter: blur(1px);
    /* Aggiungi sfocatura quando l'elemento diventa visibile */
    transform: translateY(20px);
    opacity: 0;
    transition: opacity 0.5s, transform 0.5s;
    color: #E98E01;
    border: 3px solid #E98E01;

    &:hover {
        background-color: #E98E01;
        color: white;
    }
}


//HERO IMG
.hero-img {
    max-width: 503px;
    width: 100%;

    img {
        width: 100%;
        filter: drop-shadow(0 0 0.3rem rgb(0, 0, 0));
        margin-top: -103px;
    }
}


//MEDIA QUERIES
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
    .hero-img {
        max-width: 430px;
    }
}


@media screen and (min-width: 1200px) {
    .hero-section {
        margin-top: 90px;
    }
}</style>
