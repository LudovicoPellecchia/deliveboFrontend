<script>
import HeroSection from '../components/HeroSection.vue';
import Categories from '../components/Categories.vue';
import Offers from '../components/Offers.vue';
import CTA from '../components/CTA.vue'

export default {
    components: {
        HeroSection,
        Categories,
        Offers,
        CTA
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
</template>

<style lang="scss" scoped>


</style>
