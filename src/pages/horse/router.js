import { isMiniProgram, isApp } from "@jx3box/jx3box-common/js/utils";

const Index = () => import("@/views/horse/Index.vue");
const Single = () => import("@/views/horse/HorseSingle.vue");
const IndexMobile = () => import("@/views/horse/mobile/Index.vue");
const SingleMobile = () => import("@/views/horse/mobile/HorseSingle.vue");

const routes = [
    {
        name: "index",
        path: "/",
        component: isMiniProgram() || isApp() ? IndexMobile : Index,
        meta: {
            i18n: {
                title: "pages.horse.title",
                keywords: "pages.horse.keywords",
                description: "pages.horse.description",
            },
        },
    },
    {
        name: "single",
        path: "/:id([0-9]_\\d+)",
        component: isMiniProgram() || isApp() ? SingleMobile : Single,
        meta: {
            i18n: {
                title: "pages.horse.single.title",
                keywords: "pages.horse.single.keywords",
                description: "pages.horse.single.description",
            },
        },
    },
];

export default createPageRouter("/horse", routes);
