const CracoLessPlugin = require("craco-less")
const cracoPluginSvgSprite = require("craco-plugin-svg-sprite")

module.exports = {
    plugins: [
        {
            plugin: CracoLessPlugin,
            options: {
                lessLoaderOptions: {
                    lessOptions: {
                        modifyVars: {
                            "@primary-color": "#472fc8",
                            "border-radius-base": "20px",
                        },
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
