import { isUndefined } from "util";
import axios from "axios";
import Cookies from "universal-cookie/es6";
import app from "../../app.json";


const { host } = app;

const cookies = new Cookies();

export function CalcularExpirarSesion() {
    const now = new Date().getTime();
    const newDate = now + 60 * 30 * 1000;
    return new Date(newDate);
}

export function getSession() {

    return isUndefined(cookies.get('_s')) ? false : cookies.get('_s')
}

function renovarSesion() {
    const sesion = getSession();
    if (!sesion) window.location.href = "/login";

    cookies.set("_s", sesion, {
        path: "/",
        expires: CalcularExpirarSesion(),
    });
    return sesion;
}

export const request = {

    get: function (services) {
        let token = renovarSesion();
        return axios.get(`${host}${services}`, {
            headers: { Authorization: `Bearer ${token}` },
        });
    },


    post: function (services,  data) {
        let token = renovarSesion();
        return axios.post(`${host}${services}`, data, {
            headers: { Authorization: `Bearer ${token}` },
        });
    },
};