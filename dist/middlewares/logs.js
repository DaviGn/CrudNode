"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
async function logMiddleware(request, response, next) {
    const { method, url } = request;
    const requestLabel = `${method} ${url}`;
    console.info(requestLabel);
    console.time();
    await next();
    console.timeEnd();
}
exports.default = logMiddleware;
