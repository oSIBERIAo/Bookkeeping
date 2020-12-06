import React from "react"

//批量引入 icons 内的全部 svg，requireContext 类型 IDE 自动补全
const importAll = (requireContext: __WebpackModuleApi.RequireContext) =>
    requireContext.keys().forEach(requireContext)
try {
    importAll(require.context("icons", true, /\.svg$/))
} catch (error) {
    console.log(error)
}

type Props = {
    name?: string
}

const Icon = (props: Props) => {
    return (
        <svg className="icon">
            {props.name && <use xlinkHref={"#" + props.name} />}
        </svg>
    )
}
export { Icon }
