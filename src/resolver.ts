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
    horses: (parent: { id: any }, __: any, { dataSources }: any) => {
      return dataSources.horses
        .list()
        .filter((horse: { race: any }) => horse.race === parent.id);
    },
  },
  Horse: {
    race: (parent: { race: any }, _: any, { dataSources }: any) => {
      return dataSources.races.get(parent.race);
    },
  },
};
