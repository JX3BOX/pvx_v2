
const Index = () => import("@/views/reputation/Index.vue");
const Single = () => import("@/views/reputation/Single.vue");
const Search = () => import("@/views/reputation/Search.vue");

const routes = [
    {
        name: "reputation",
        path: "/",
        component: Index,
        meta: {
            sidebar: false,
            i18n: {
                title: "pages.reputation.title",
                keywords: "pages.reputation.keywords",
                description: "pages.reputation.description",
            },
        },
    },
    {
        name: "single",
        path: "/:id(\\d+)",
        component: Single,
        meta: {
            i18n: {
                title: "pages.reputation.single.title",
                keywords: "pages.reputation.single.keywords",
                description: "pages.reputation.single.description",
            },
        },
    },
    {
        name: "search",
        path: "/search",
        component: Search,
        meta: {
            i18n: {
                title: "pages.reputation.search.title",
                keywords: "pages.reputation.search.keywords",
                description: "pages.reputation.search.description",
            },
        },
    },
];

export default createPageRouter("/reputation", routes);
