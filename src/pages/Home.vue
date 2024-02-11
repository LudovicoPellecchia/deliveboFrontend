<script>
import HeroSection from '../components/HeroSection.vue';
import Categories from '../components/Categories.vue';
import Offers from '../components/Offers.vue';
import CTA from '../components/CTA.vue';
import Footer from '../components/Footer.vue';

export default {
    components: {
        HeroSection,
        Categories,
        Offers,
        CTA,
        Footer
    },
    data() {
        return {}
    },
    methods: {

    },
}
</script>

<template>
<HeroSection></HeroSection>
<Categories></Categories>
<Offers></Offers>
<CTA></CTA>
<Footer></Footer>
</template>

<style lang="scss" scoped>


</style>
