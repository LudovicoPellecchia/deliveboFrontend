<script>
import HamburgerMenu from './micro-component/HamburgerMenu.vue';

export default {
    components: {
        HamburgerMenu,
    },
    data() {
        return {
            isOpen: false
        }
    },
    methods: {

        toggleMenu() {
            this.isOpen = !this.isOpen
        }
    },
}
</script>

<template>
    <HamburgerMenu :toggleMenu="toggleMenu" :isOpen="isOpen"></HamburgerMenu>
    <div class="drop-down-menu" :class="{ 'open-menu': isOpen }">
        <div class="dropdown-links">
            <router-link to="/">Home</router-link>
            <router-link to="restaurants">Restaurants</router-link>
            <router-link to="contacts">Contacts</router-link>
            <a href="http://127.0.0.1:8000/register">Register</a>
            <router-link to="/">Login</router-link>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.drop-down-menu {
    height: 100%;
    width: 0;
    background-color: #333333;
    position: fixed;
    right: 0;
    top: 0;
    z-index: 11;
    opacity: 0;
    transition: width 0.5s cubic-bezier(0.77, 0.2, 0.05, 1.0), opacity 0.3s ease;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.open-menu {
    width: 60vw;
    opacity: 1;
    transform: none;
}

/* Rimuovi la transizione quando il menu non è visibile */
.drop-down-menu:not(.open-menu) {
    transition: width 0.5s cubic-bezier(0.77, 0.2, 0.05, 1.0), opacity 1s ease;
}


.dropdown-links{
    margin-top: 100px;
    gap: 30px;
    display: flex;
    flex-direction: column;

    a{
        text-decoration: none;
        color: var(--clr-bg-body);

    }
}
</style>
