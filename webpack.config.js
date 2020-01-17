const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');

const BundleAnalyzerPlugin = require('webpack-bundle-analyzer')
    .BundleAnalyzerPlugin;
const mode = process.env.NODE_ENV || 'development';
const prod = mode === 'production';

const sveltePreprocess = require('svelte-preprocess');
const options = {
    /**
     * Define which tag should `svelte-preprocess` look for markup content.
     *
     * This is only used if you desire to define your markup between this tag
     * or to import it from a external file.
     *
     * The example below means your markup can be defined inside a `<markup>` tag.
     **/
    markupTagName: 'markup',
    /**
     * Extend the default language alias dictionary.
     * Each entry must follow: ['alias', 'languageName']
     */
    aliases: [
        /**
         * Means
         * <... src="./file.cst"> or
         * <... lang="cst"> or
         * <... type="text/customLanguage">
         * <... type="application/customLanguage">
         * will be treated as the language 'customLanguage'
         */
        ['cst', 'customLanguage'],
    ],

    preserve: [
        /**
         * Using the same matching algorithm as above, don't parse,
         * modify, or remove from the markup, tags which match the
         * language / types listed below.
         * **/
        'ld+json',
    ],

    /** Disable a language by setting it to 'false' */
    scss: true,

    /**  Pass options to the default preprocessor method */
    stylus: {
        paths: ['node_modules'],
    },

    /**
     * Post process css with PostCSS by defining 'transformers.postcss' property,
     * either pass 'true' to activate PostCSS transforms and use the `postcss.config.js`
     */
    postcss: true,

    /** or pass an object with postcss plugins and their options directly. */
    postcss: {
        plugins: [/* require('autoprefixer')({
            "overrideBrowserslist": [
                "> 1%",
                "last 2 versions"
            ]
        }), */
        require('postcss-px-to-viewport')({
            viewportWidth: 750, // 设计稿宽度
            viewportHeight: 1334, // 设计稿高度，可以不指定
            unitPrecision: 3, // px to vw无法整除时，保留几位小数
            viewportUnit: 'vw', // 转换成vw单位
            selectorBlackList: ['.ignore', '.hairlines'], // 不转换的类名
            minPixelValue: 1, // 小于1px不转换
            mediaQuery: false, // 允许媒体查询中转换
            unitToConvert: 'px',
           
            propList: ['*'],
           
            fontViewportUnit: 'vw',
          
           
           
            replace: true,
            exclude: [],
            landscape: false,
            landscapeUnit: 'vw',
            landscapeWidth: 750
        }),
        require('cssnano')({
            preset: "advanced",
           /*  autoprefixer: false, */ // 和cssnext同样具有autoprefixer，保留一个
            "postcss-zindex": false
        }),
        require('postcss-viewport-units')({}),
        /* require('postcss-import')({}), */
        require('postcss-cssnext')({}),
        require('postcss-write-svg')({
            uft8: false
        }),

        ],
    },

    /*  typescript: { */
    /**
     * Optionally specify the directory to load the tsconfig from
     */
    /*  tsconfigDirectory: './configs', */

    /**
     * Optionally specify the full path to the tsconfig
     */
    /*  tsconfigFile: './tsconfig.app.json', */

    /**
     * Optionally specify compiler options.
     * These will be merged with options from the tsconfig if found.
     */
    /*    compilerOptions: {
         module: 'es2015',
       }, */

    /**
     * Type checking can be skipped by setting 'transpileOnly: true'.
     * This speeds up your build process.
     */
    /* transpileOnly: true, */
    /* }, */

    /** Use a custom preprocess method by passing a function. */
    /*  pug({ content, filename }) {
       const code = pug.render(content);
       return { code, map: null };
     }, */

    /** Add a custom language preprocessor */
    /* customLanguage({ content, filename }) {
      const { code, map } = require('custom-language-compiler')(content);
      return { code, map };
    }, */
};
module.exports = {
    entry: {
        bundle: ['./src/main.js']
    },
    resolve: {
        alias: {
            svelte: path.resolve('node_modules', 'svelte')
        },
        extensions: ['.mjs', '.js', '.svelte'],
        mainFields: ['svelte', 'browser', 'module', 'main']
    },
    output: {
        path: __dirname + '/public',
        filename: '[name].js',
        chunkFilename: '[name].[id].js'
    },
    module: {
        rules: [
            {
                test: /\.svelte$/,
                use: {
                    loader: 'svelte-loader',
                    options: {
                        emitCss: true,
                        hotReload: true,
                        preprocess: sveltePreprocess(options),
                    }
                }
            },
            {
                test: /\.css$/,
                use: [
					/**
					 * MiniCssExtractPlugin doesn't support HMR.
					 * For developing, use 'style-loader' instead.
					 * */
                    prod ? MiniCssExtractPlugin.loader : 'style-loader',
                    'css-loader'
                ]
            },
        ]
    },
    mode,
    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name].css'
        }),
        /*  new BundleAnalyzerPlugin({
             analyzerMode: 'static',
             openAnalyzer: true,
           }), */
    ],
    devtool: prod ? false : 'source-map'
};
