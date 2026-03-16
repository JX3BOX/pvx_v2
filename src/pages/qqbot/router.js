import { createPageRouter } from "@/bootstrap/router";

const qqbot = () => import("@/views/qqbot/Detail.vue");

const routes = [
    {
        name: "qqbot-pvx-detail",
        path: "/pvx",
        component: qqbot,
        meta: {
            i18n: {
                title: "pages.qqbot.pvx.title",
                keywords: "pages.qqbot.pvx.keywords",
                description: "pages.qqbot.pvx.description",
            },
        },
    },
];

export default createPageRouter("/qqbot", routes);
