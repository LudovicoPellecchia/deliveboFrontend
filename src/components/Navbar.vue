<script>
import HamburgerMenu from './micro-component/HamburgerMenu.vue';

export default {
    components: {
        HamburgerMenu

    },
    data() {
        return {}
    },
    methods: {

    },
}
</script>

<template>
    <header>
        <div class="my-nav container-fluid">
            <div class="logo">
                <img src="../assets/logo.png " alt="">
                <div class="logo-title">Delichoose</div>
            </div>
            <div class="pages-links d-none d-md-block">
                <router-link to="/">Home</router-link>
                <router-link to="/">Ristoranti</router-link>
                <router-link to="/">Contatti</router-link>
            </div>
            <div class="my-nav-links d-none d-lg-block">
                <div class="my-nav-link">
                    <a href=""><i class="fa-solid fa-cart-shopping"></i></a>
                </div>
                <div class="my-nav-link">
                    <a href="">Registrati</a>
                </div>
                <div class="my-nav-link">
                    <a href="">Login</a>
                </div>
            </div>
            <div class="hamburger-menu d-block d-lg-none ">
                <HamburgerMenu></HamburgerMenu>
            </div>
        </div>

    </header>
</template>

<style lang="scss" scoped>
.my-nav {
    padding: 20px;
    display: flex;
    align-items: center;
    gap: 100px;
    font-size: 20px;

    .hamburger-menu{
        margin-left: auto;
        padding-right: 40px;
    }


    .logo {
        display: flex;
        align-items: center;


        img {
            width: 85px;
        }

        .logo-title {
            font-size: 36px;
            font-weight: 100;
            font-family: 'Borel', cursive;
            transform: translateY(30%);

        }
    }

    .pages-links * {
        vertical-align: -webkit-baseline-middle;
        padding-right: 30px;
        font-weight: 500;
        color: black;
        text-decoration: none;
        margin-right: 20px;

    }



    .my-nav-links {
        margin-left: auto;
        padding-right: 50px;

        .my-nav-link {
            vertical-align: -webkit-baseline-middle;
            display: inline-block;
            font-weight: 200;

            a {
                margin-right: 20px;
                color: white;
                text-decoration: none;
            }

        }
    }
}

/* @media screen and (max-width: 1526px) {
    .pages-links a:nth-child(3){
        color: white;
    }
}
@media screen and (max-width: 1195px) {
    .pages-links a:nth-child(2){
        color: white;
    }
}
@media screen and (max-width: 1060px) {
    .pages-links a:nth-child(1){
        color: white;
    }
} */


@media screen and (min-width: 970px) {

    
}
</style>
