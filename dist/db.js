import { DataStore } from 'notarealdb';
const store = new DataStore('./dist/data');
const races = store.collection('races');
const horses = store.collection('horses');
export { store, races, horses };
