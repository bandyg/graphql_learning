import { Resolvers } from './resolvers-types';

export const resolvers: Resolvers = {
  Query: {
    races: (_: any, __: any, { dataSources }: any) => {
      return dataSources.races.list();
    },
    horses: (_: any, __: any, { dataSources }: any) => {
      return dataSources.horses.list();
    },
  },
  Race: {
    horses: (_: { id: any }, __: any, { dataSources }: any) => {
      return dataSources.horses
        .list()
        .filter((horse: { race: any }) => horse.race === _.id);
    },
  },
  Horse: {
    race: (_: any, __: any, { dataSources }: any) => {
      return dataSources.races.get(_.race);
    },
  },
  Mutation: {
    updateHorseName: async (
      _: any,
      { id, name }: any,
      { dataSources }: any
    ) => {
      const horse = dataSources.horses.get(id);
      dataSources.horses.update({ ...horse, name: name });
      return horse;
    },
    updateRace: async (_: any, { id, raceNo }: any, { dataSources }: any) => {
      const race = dataSources.races.get(id);
      dataSources.races.update({ ...race, no: raceNo });
      return race;
    },
  },
};
