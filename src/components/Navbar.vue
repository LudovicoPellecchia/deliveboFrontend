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
        <div class="imgbg">
            <img class="table-img" src="../assets/tableProva5.png" alt="">
        </div>
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
            <div class="my-nav-links ">
                <div class="my-nav-link">
                    <a href=""><i class="fa-solid fa-cart-shopping cart-icon"></i></a>
                </div>
                <div class="my-nav-link d-none d-md-block d-lg-none">
                    <a href=""><i class="fa-regular fa-user"></i></a>
                </div>
                <div class="my-nav-link d-none d-lg-block">
                    <a href="">Registrati</a>
                </div>
                <div class="my-nav-link d-none d-lg-block">
                    <a href="">Login</a>
                </div>
                <div class="hamburger-menu d-block d-md-none ">
                <HamburgerMenu></HamburgerMenu>
            </div>
            </div>

        </div>

    </header>
</template>

<style lang="scss" scoped>
.imgbg{
    object-fit: contain;
    max-width: 100%;
    width: 50%;
    min-width: 405px;
    position: absolute;
    right: 0;
    z-index: -2;
    filter: drop-shadow(0 0 0.3rem rgb(0, 0, 0));

}

.my-nav {
    padding: 20px;
    display: flex;
    align-items: center;
/*     gap: 100px;
 */    font-size: 20px;

    .hamburger-menu {
        margin-left: auto;
        padding-right: 20px;
        flex-grow: 0;
    }


    .logo {
        display: flex;
        align-items: center;
        flex-grow: 0;
        margin-right: 15px;


        img {
            width: 85px;
        }

        .logo-title {
            display: none;
            font-size: 36px;
            font-weight: 100;
            font-family: 'Borel', cursive;
            transform: translateY(30%);

        }
    }

    .pages-links{
        flex-grow: 1;
        text-align: center;

    }

    .pages-links * {
        text-align: center;
        vertical-align: -webkit-baseline-middle;
        padding-right: 30px;
        font-weight: 500;
        color: var(--clr-bg-body);
        text-decoration: none;

    }



    .my-nav-links {
        align-items: end;
        display: flex;
        flex-grow: 0;
        margin-left: auto;
/*         padding-right: 50px;
 */
        .my-nav-link {

            vertical-align: -webkit-baseline-middle;
            display: inline-block;
            font-weight: 200;

            .cart-icon{
                color: var(--clr-bg-body);

            }

            a {
                margin-right: 20px;
                color: var(--clr-bg-body);
                text-decoration: none;
                vertical-align: -webkit-baseline-middle;
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




@media screen and (min-width: 576px) {
    .my-nav .logo .logo-title{
        display: block;
    }

}
@media screen and (min-width: 768px) {

    .my-nav .pages-links a{
        margin-right: 10px
    }

    .pages-links a:nth-child(1) {
        color: black;
    }

}

@media screen and (min-width: 992px) {
    .my-nav .pages-links a{
        margin-right: 20px
    }
    .imgbg{
        width: 56%;

    }


    .pages-links a:nth-child(1) {
        color: black;
    }

}
@media screen and (min-width: 1200px) {

    .my-nav .pages-links{
        text-align: start;
        padding-left: 30px;

        *{
            color: black;
        }
        a:nth-child(3){
            color: white;
        }

    }

    .imgbg{
        max-width: 1010px;
        width: 56%;

    }

    .pages-links a:nth-child(1) {
        color: black;
    }

}

@media screen and (min-width: 1300px) {
    .imgbg{
        max-width: 1010px;
        width: 50%;
    }

    .my-nav .pages-links a:nth-child(3) {
        color: black;
    }
}
</style>
