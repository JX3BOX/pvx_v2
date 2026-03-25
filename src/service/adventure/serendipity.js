import { $cms, $next, axios } from "@jx3box/jx3box-common/js/api";

function getUserInfo() {
    return $cms().get("/api/cms/user/my/info");
}

function getSerendipity(params) {
    return axios.get("https://pull-gplugin.jx3box.com/api/serendipity", {
        params,
    });
}

export { getUserInfo, getSerendipity };
