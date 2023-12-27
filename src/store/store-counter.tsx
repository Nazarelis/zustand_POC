import { create } from 'zustand'

interface counterStoreTypes {
    count:number
    increment: () => void;
    decrement: () => void;
}


export const useCounterStore = create<counterStoreTypes>((set)=> ({
    count:10,
    increment: () => set((state) => ({ count: state.count + 1 })),
    decrement: () => set((state) => ({ count: state.count - 1 })),
}))