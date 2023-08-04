"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.buildContext = void 0;
const db_1 = require("./db");
const buildContext = async (req) => {
    const dataSources = {
        races: db_1.races,
        horses: db_1.horses,
    };
    return {
        dataSources,
    };
};
exports.buildContext = buildContext;
