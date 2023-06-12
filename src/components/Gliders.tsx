import { useQuery, useMutation, useQueryClient, QueryClient, MutationKey } from "@tanstack/react-query"
import { getGliders, useGlidersQuery } from "../services/productService"
import OneProduct from "./OneProduct"

const Gliders = () => {
    const {
        isLoading,
        isError,
        data
    } = useGlidersQuery()

    if (isLoading) {
        return (
            <div className="tw-text-7xl tw-mt-52 xl:tw-ml-[800px]">
                <img src="https://media.tenor.com/BxFxrSLDKCAAAAAi/gif.gif" alt="" />
            </div>
        )
    }

    return (
        <div className="tw-px-3">
            <div className="tw-max-w-7xl tw-m-auto tw-mt-20 tw-bg-slate-300 tw-grid-cols-1 sm:tw-grid sm:tw-grid-cols-2 md:tw-grid md:tw-grid-cols-3 lg:tw-grid lg:tw-grid-cols-4 tw-gap-3"> {/* grid colons */}
                {data?.data.map((glider) => {
                    return (
                        <OneProduct key={glider.id} {...glider} />
                    )
                })}
            </div>
        </div>
    )
}

export default Gliders
