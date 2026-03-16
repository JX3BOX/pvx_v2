import { createPageRouter } from "@/bootstrap/router";
import { isMiniProgram, isApp } from "@jx3box/jx3box-common/js/utils";

const List = () => import("@/views/pet/PetList.vue");
const Single = () => import("@/views/pet/PetSingle.vue");
const ListMobile = () => import("@/views/pet/mobile/PetList.vue");
const SingleMobile = () => import("@/views/pet/mobile/PetSingle.vue");
const Search = () => import("@/views/pet/mobile/PetSearch.vue");

const routes = [
    {
        name: "list",
        path: "/",
        component: isMiniProgram() || isApp() ? ListMobile : List,
        meta: {
            i18n: {
                title: "pages.pet.title",
                keywords: "pages.pet.keywords",
                description: "pages.pet.description",
            },
        },
    },
    {
        name: "single",
        path: "/:id(\\d+)",
        component: isMiniProgram() || isApp() ? SingleMobile : Single,
        meta: {
            i18n: {
                title: "pages.pet.single.title",
                keywords: "pages.pet.single.keywords",
                description: "pages.pet.single.description",
            },
        },
    },
    {
        name: "search",
        path: "/search",
        component: Search,
        meta: {
            i18n: {
                title: "pages.pet.search.title",
                keywords: "pages.pet.search.keywords",
                description: "pages.pet.search.description",
            },
        },
    },
];

export default createPageRouter("/pet", routes);
