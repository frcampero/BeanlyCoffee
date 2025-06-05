"use client"
import { useLovedProducts } from "@/hooks/use-loved-product"
import LovedItem from "./components/loved-item"

export default function Page () {
    const {lovedItems} = useLovedProducts()
    return (
        <div className="max-w-4xl py-4 mx-auto sm:py-32 px-4 sm:px-24">
            <h1 className="sm:text-2xl">
                Products you like
            </h1>
            <div className="">
                <div className="">
                    {lovedItems.length == 0 && (
                        <p className="text-gray-500 text-sm">There are no products in the Like section.</p>
                    )}
                    <ul>
                        {lovedItems.map((item)=> (
                            <LovedItem key={item.id} product={item}/>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}