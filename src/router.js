import { createRouter, createWebHistory } from "vue-router";

// importazione componenti singole pagine
import Home from "./pages/Home.vue";
import Profile from "./pages/dashboard/Profile.vue";
import Restaurant from "./pages/dashboard/Restaurant.vue";
import Orders from "./pages/dashboard/Orders.vue";
import Stats from "./pages/dashboard/Stats.vue";

// ... import di altri componenti

// definiamo le rotte
const routes = [
    {
        path: "/", // uri da scrivere nel browser
        name: "home", // nome della rotta da usare per creare un link
        component: Home // componente che ritorna l'html della pagina
    },
    {
        path: "/dashboard/profile", // uri da scrivere nel browser
        name: "profile", // nome della rotta da usare per creare un link
        component: Profile // componente che ritorna l'html della pagina
    },
    {
        path: "/dashboard/restaurant", // uri da scrivere nel browser
        name: "restaurant", // nome della rotta da usare per creare un link
        component: Restaurant // componente che ritorna l'html della pagina
    },
    {
        path: "/dashboard/orders", // uri da scrivere nel browser
        name: "orders", // nome della rotta da usare per creare un link
        component: Orders // componente che ritorna l'html della pagina
    },
    {
        path: "/dashboard/stats", // uri da scrivere nel browser
        name: "stats", // nome della rotta da usare per creare un link
        component: Stats // componente che ritorna l'html della pagina
    },
]

// creazione istanza di Router
const router = createRouter({
    // Serve ad indicare come gestire l'url al cambio pagina
    history: createWebHistory(),
    // passiamo l'array delle rotte
    routes
});

// esportiamo l'istanta router per poterla usare dentro main.js
export { router };