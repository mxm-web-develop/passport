Prevent rerenders with useShallow
=================================

When you need to subscribe to a computed state from a store, the recommended way is to use a selector.

The computed selector will cause a rerender if the output has changed according to [Object.is](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is?retiredLocale=it).

In this case you might want to use `useShallow` to avoid a rerender if the computed value is always shallow equal the previous one.

[

Example
-------

](#example)

We have a store that associates to each bear a meal and we want to render their names.

    import { create } from 'zustand'
    
    const useMeals = create(() => ({
      papaBear: 'large porridge-pot',
      mamaBear: 'middle-size porridge pot',
      littleBear: 'A little, small, wee pot',
    }))
    
    export const BearNames = () => {
      const names = useMeals((state) => Object.keys(state))
    
      return <div>{names.join(', ')}</div>
    }
    

Now papa bear wants a pizza instead:

    useMeals.setState({
      papaBear: 'a large pizza',
    })
    

This change causes `BearNames` rerenders even though the actual output of `names` has not changed according to shallow equal.

We can fix that using `useShallow`!

    import { create } from 'zustand'
    import { useShallow } from 'zustand/react/shallow'
    
    const useMeals = create(() => ({
      papaBear: 'large porridge-pot',
      mamaBear: 'middle-size porridge pot',
      littleBear: 'A little, small, wee pot',
    }))
    
    export const BearNames = () => {
      const names = useMeals(useShallow((state) => Object.keys(state)))
    
      return <div>{names.join(', ')}</div>
    }
    

Now they can all order other meals without causing unnecessary rerenders of our `BearNames` component.

[Edit this page](https://github.com/pmndrs/zustand/edit/main/docs/guides/prevent-rerenders-with-use-shallow.md)

Previous

[Slices Pattern](/guides/slices-pattern)

Next

[SSR and Hydration](/guides/ssr-and-hydration)