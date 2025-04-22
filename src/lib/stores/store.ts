import { createContext } from 'react';
import { ActivityStore } from './activityStore';
import CounterStore from './counterStore';
import { UiStore } from './uiStore';

interface Store {
  counterStore: CounterStore;
  uiStore: UiStore;
  activityStore: ActivityStore;
}

export const store: Store = {
  counterStore: new CounterStore(),
  uiStore: new UiStore(),
  activityStore: new ActivityStore(),
};

export const StoreContext = createContext(store);
