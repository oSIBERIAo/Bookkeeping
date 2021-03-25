const CracoLessPlugin = require("craco-less")
const cracoPluginSvgSprite = require("craco-plugin-svg-sprite")

module.exports = {
    plugins: [
        {
            plugin: CracoLessPlugin,
            options: {
                lessLoaderOptions: {
                    lessOptions: {
                        modifyVars: { "@primary-color": "#1DA57A" },
                        javascriptEnabled: true,
                    },
                },
            },
        },
        {
            plugin: cracoPluginSvgSprite,
            options: {
                include: "src/icons", // required
                compress: true, // option
                svgoConfig: {
                    // option
                },
                spriteLoaderConfig: {
                    // option
                },
                // svgPrefixName: "icon", // option
            },
        },
    ],
}
