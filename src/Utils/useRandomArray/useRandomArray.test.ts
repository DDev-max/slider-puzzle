import { renderHook } from "@testing-library/react"
import { useRandomArray } from "./useRandomArray"

it("should return a random array",()=>{
    const sortedArray = [1,2,3,4]

    const {result} = renderHook(useRandomArray, {initialProps: {size: 2}})

    expect(result.current.toString()).not.toBe(sortedArray.toString())
})