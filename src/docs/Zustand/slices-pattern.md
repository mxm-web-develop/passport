Slices Pattern
==============

[

Slicing the store into smaller stores
-------------------------------------

](#slicing-the-store-into-smaller-stores)

Your store can become bigger and bigger and tougher to maintain as you add more features.

You can divide your main store into smaller individual stores to achieve modularity. This is simple to accomplish in Zustand!

The first individual store:

    export const createFishSlice = (set) => ({
      fishes: 0,
      addFish: () => set((state) => ({ fishes: state.fishes + 1 })),
    })
    

Another individual store:

    export const createBearSlice = (set) => ({
      bears: 0,
      addBear: () => set((state) => ({ bears: state.bears + 1 })),
      eatFish: () => set((state) => ({ fishes: state.fishes - 1 })),
    })
    

You can now combine both the stores into **one bounded store**:

    import { create } from 'zustand'
    import { createBearSlice } from './bearSlice'
    import { createFishSlice } from './fishSlice'
    
    export const useBoundStore = create((...a) => ({
      ...createBearSlice(...a),
      ...createFishSlice(...a),
    }))
    

[

### Usage in a React component

](#usage-in-a-react-component)

    import { useBoundStore } from './stores/useBoundStore'
    
    function App() {
      const bears = useBoundStore((state) => state.bears)
      const fishes = useBoundStore((state) => state.fishes)
      const addBear = useBoundStore((state) => state.addBear)
      return (
        <div>
          <h2>Number of bears: {bears}</h2>
          <h2>Number of fishes: {fishes}</h2>
          <button onClick={() => addBear()}>Add a bear</button>
        </div>
      )
    }
    
    export default App
    

[

### Updating multiple stores

](#updating-multiple-stores)

You can update multiple stores, at the same time, in a single function.

    export const createBearFishSlice = (set, get) => ({
      addBearAndFish: () => {
        get().addBear()
        get().addFish()
      },
    })
    

Combining all the stores together is the same as before.

    import { create } from 'zustand'
    import { createBearSlice } from './bearSlice'
    import { createFishSlice } from './fishSlice'
    import { createBearFishSlice } from './createBearFishSlice'
    
    export const useBoundStore = create((...a) => ({
      ...createBearSlice(...a),
      ...createFishSlice(...a),
      ...createBearFishSlice(...a),
    }))
    

[

Adding middlewares
------------------

](#adding-middlewares)

Adding middlewares to a combined store is the same as with other normal stores.

Adding `persist` middleware to our `useBoundStore`:

    import { create } from 'zustand'
    import { createBearSlice } from './bearSlice'
    import { createFishSlice } from './fishSlice'
    import { persist } from 'zustand/middleware'
    
    export const useBoundStore = create(
      persist(
        (...a) => ({
          ...createBearSlice(...a),
          ...createFishSlice(...a),
        }),
        { name: 'bound-store' },
      ),
    )
    

Please keep in mind you should only apply middlewares in the combined store. Applying them inside individual slices can lead to unexpected issues.

[

Usage with TypeScript
---------------------

](#usage-with-typescript)

A detailed guide on how to use the slice pattern in Zustand with TypeScript can be found [here](./typescript#slices-pattern).

[Edit this page](https://github.com/pmndrs/zustand/edit/main/docs/guides/slices-pattern.md)

Previous

[Initialize state with props](/guides/initialize-state-with-props)

Next

[Prevent rerenders with useShallow](/guides/prevent-rerenders-with-use-shallow)