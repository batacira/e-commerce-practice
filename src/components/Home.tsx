import { useQuery, useMutation, useQueryClient, QueryClient, MutationKey } from "@tanstack/react-query"
import { getProducts } from "../services/productService"
import OneProduct from "./OneProduct"



const Home = () => {
    const {
        isLoading,
        isError,
        data
    } = useQuery(['products'], getProducts)

    return (
        <div >
            <div className="tw-max-w-7xl tw-m-auto tw-bg-slate-300 grid-cols-1 sm:tw-grid-cols-2 md:tw-grid-cols-3 lg:tw-grid lg:tw-grid-cols-4 tw-gap-3 ">
                {data?.data.map((product) => {
                    return (
                        <OneProduct key={product.id} {...product} />
                    )
                })}
            </div>
        </div>
    )
}

export default Home