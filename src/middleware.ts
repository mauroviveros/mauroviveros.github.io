import { defineMiddleware } from "astro:middleware";
import { locales } from "@i18n";

export const onRequest = defineMiddleware((ctx, next) => {
    let language =
        // ctx.request.headers.get('accept-language')?.split(',')[0].split('-')[0] ||
        // navigator.language.split('-')[0] ||
        locales[0]

    if(!locales.includes(language)) language = locales[0];
    return next(`/${language}`);
});