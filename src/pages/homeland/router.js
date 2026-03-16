import { isMiniProgram, isApp } from "@jx3box/jx3box-common/js/utils";

const Flower = () => import("@/views/homeland/Flower.vue");
const Maps = () => import("@/views/homeland/Maps.vue");
const Tutorial = () => import("@/views/homeland/Tutorial.vue");
const Index = () => import("@/views/homeland/Index.vue");
const IndexMobile = () => import("@/views/homeland/mobile/Index.vue");
const TutorialMobile = () => import("@/views/homeland/mobile/Tutorial.vue");
const MobileMaps = () => import("@/views/homeland/mobile/Map.vue");

const routes = [
    {
        name: "index",
        path: "/",
        component: isMiniProgram() || isApp() ? IndexMobile : Index,
        meta: {
            i18n: {
                title: "pages.homeland.title",
                keywords: "pages.homeland.keywords",
                description: "pages.homeland.description",
            },
        },
    },
    {
        name: "tutorial",
        path: "/tutorial",
        component: isMiniProgram() || isApp() ? TutorialMobile : Tutorial,
        meta: {
            i18n: {
                title: "pages.homeland.tutorial.title",
                keywords: "pages.homeland.tutorial.keywords",
                description: "pages.homeland.tutorial.description",
            },
        },
    },
    {
        name: "maps",
        path: "/maps",
        component: isMiniProgram() || isApp() ? MobileMaps : Maps,
        meta: {
            i18n: {
                title: "pages.homeland.maps.title",
                keywords: "pages.homeland.maps.keywords",
                description: "pages.homeland.maps.description",
            },
        },
    },
    {
        name: "flower",
        path: "/flower",
        component: Flower,
        meta: {
            i18n: {
                title: "pages.homeland.flower.title",
                keywords: "pages.homeland.flower.keywords",
                description: "pages.homeland.flower.description",
            },
        },
    },
];

export default createPageRouter("/homeland", routes);
