"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.resolvers = void 0;
exports.resolvers = {
    Query: {
        races: (_, __, { dataSources }) => {
            return dataSources.races.list();
        },
        horses: (_, __, { dataSources }) => {
            return dataSources.horses.list();
        },
    },
    Race: {
        horses: (parent, __, { dataSources }) => {
            return dataSources.horses
                .list()
                .filter((horse) => horse.race === parent.id);
        },
    },
    Horse: {
        race: (parent, _, { dataSources }) => {
            return dataSources.races.get(parent.race);
        },
    },
};
