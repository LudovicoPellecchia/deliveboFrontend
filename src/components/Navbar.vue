<script>
import HamburgerMenu from './micro-component/HamburgerMenu.vue';
import Cart from './Home/Cart.vue';
import DropDownMenu from './DropDownMenu.vue'


export default {
    components: {
        HamburgerMenu,
        Cart,
        DropDownMenu

    },
    data() {
        return {
            cartVisible: null,
            cartItems: []
        }
    },
    methods: {
        toggleCart() {
            this.cartVisible = !this.cartVisible
        },
        closeMenu(e) {
            if (!this.$refs.cartRef.contains(e.target)) {

                this.cartVisible = false
            }
        },


    },
    mounted() {
        document.addEventListener('click', this.closeMenu)

    }
}
</script>

<template>
    <header>
        <div class="imgbg">
            <img class="table-img" src="../assets/tableProva5.png" alt="">
        </div>
        <div class="my-nav container-fluid">
            <div class="logo">
                <router-link to="/"><img src="../assets/logo.png " alt=""></router-link>
                <div class="logo-title">Delichoose</div>
            </div>
            <div class="pages-links d-none d-lg-block">
                <router-link to="/">Home</router-link>
                <router-link to="restaurants">Restaurants</router-link>
                <router-link to="contacts">Contacts</router-link>
            </div>
            <div class="my-nav-links ">
                <div class="my-nav-link">
                    <div class="cart" ref="cartRef">
                        <i :style="{ color: cartVisible ? 'var(--clr-primary)' : 'var(--clr-bg-body)' }"
                            @click="toggleCart()" class="fa-solid fa-cart-shopping cart-icon"></i>
                        <Cart :openMenu="cartVisible" :items="cartItems"></Cart>
                    </div>

                </div>
                <div class="my-nav-link d-none d-lg-block">
                    <a href="http://127.0.0.1:8000/register">Registrati</a>
                </div>
                <div class="my-nav-link d-none d-lg-block">
                    <a href="">Login</a>
                </div>
                <div class="hamburger-menu d-block d-lg-none ">
                    <DropDownMenu></DropDownMenu>
                </div>
            </div>

        </div>

    </header>

</template>

<style lang="scss" scoped>
.imgbg {
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
    padding: 10px;
    display: flex;
    align-items: center;
    font-size: 20px;

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

        .active-link {
            border: none;
        }

        img {
            width: 85px;
        }

        .logo-title {
            display: none;
            font-size: clamp(20px, 4vw, 36px);
            font-weight: 100;
            font-family: 'Borel', cursive;
            transform: translateY(30%);
        }
    }

    .pages-links {
        flex-grow: 1;
        text-align: center;
    }

    .pages-links * {
        padding-bottom: 4px;
        text-align: center;
        vertical-align: -webkit-baseline-middle;
        font-weight: 500;
        color: var(--clr-bg-body);
        text-decoration: none;
    }

    .active-link {
        border-bottom: 2px solid black;
    }



    .my-nav-links {
        align-items: end;
        display: flex;
        flex-grow: 0;
        margin-left: auto;

        .my-nav-link {

            vertical-align: -webkit-baseline-middle;
            display: inline-block;
            font-weight: 200;

            .cart-icon {
                color: var(--clr-bg-body);
            }

            a {
                vertical-align: -webkit-baseline-middle;
            }

            a,
            i {
                margin-right: 20px;
                color: var(--clr-bg-body);
                text-decoration: none;
            }

            i {
                cursor: pointer;
            }

        }
    }
}

.cart {
    position: relative;
}





@media screen and (max-width: 768px) {


    .my-nav .logo .logo-title {
        display: block;
    }

    .imgbg {
        min-width: 10%;
        max-width: 117px;
        filter: drop-shadow(0 0 0.2rem rgba(0, 0, 0, 0.8));


        img {
            object-fit: none;
            border-bottom-left-radius: 40px;

        }
    }

}


@media screen and (min-width: 576px) {
    .my-nav .logo .logo-title {
        display: block;
    }

}

@media screen and (min-width: 768px) {



    .my-nav .pages-links a {
        margin-right: 40px
    }

    .pages-links a:nth-child(1) {
        color: black;
    }

}

@media screen and (min-width: 992px) {
    .my-nav .pages-links a {
        margin-right: 50px
    }

    .imgbg {
        width: 56%;

    }


    .pages-links a:nth-child(1) {
        color: black;
    }

}

@media screen and (min-width: 1200px) {

    .my-nav .pages-links {
        text-align: start;
        padding-left: 30px;

        * {
            color: black;
        }

        a:nth-child(3) {
            color: white;
        }

    }

    .imgbg {
        max-width: 1010px;
        width: 57.2%;
    }

    .pages-links a:nth-child(1) {
        color: black;
    }

}

@media screen and (min-width: 1300px) {
    .imgbg {
        max-width: 1010px;
        width: 50%;
    }

    .my-nav .pages-links a:nth-child(3) {
        color: black;
    }
}
</style>
