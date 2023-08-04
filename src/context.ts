import { horses, races } from './db';

export const buildContext = async (req: any) => {
  const dataSources = {
    races,
    horses,
  };

  return {
    dataSources,
  };
};
