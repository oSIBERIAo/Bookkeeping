import React from "react"
import cs from "classnames"

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
} & React.SVGAttributes<SVGSVGElement>

const Icon = (props: Props) => {
    const { name, children, className, ...rest } = props
    return (
        <svg className={cs("icon", className)} {...rest}>
            {props.name && <use xlinkHref={"#" + props.name} />}
        </svg>
    )
}
export { Icon }
