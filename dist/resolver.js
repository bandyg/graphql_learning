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
        horses: (_, __, { dataSources }) => {
            return dataSources.horses
                .list()
                .filter((horse) => horse.race === _.id);
        },
    },
    Horse: {
        race: (_, __, { dataSources }) => {
            return dataSources.races.get(_.race);
        },
    },
    Mutation: {
        updateHorseName: async (_, { id, name }, { dataSources }) => {
            const horse = dataSources.horses.get(id);
            dataSources.horses.update({ id: id, name: name });
            return horse;
        },
    },
};
