const path = require(`path`);
// Переход по ссылке работает неправильно,
// добавление нескольких вещей в конфигурацию вашего webpack-а решить проблему.
// В частности, output.publicPath = '/' и devServer.historyApiFallback = true.
// Вот пример конфигурации веб-пакета ниже,
// который использует оба, и исправляет проблему обновления.
// Если вам интересно "почему": https://webpack.js.org/configuration/dev-server/

module.exports = {
    entry: `./src/index.js`,
    output: {
        filename: `bundle.js`,
        // eslint-disable-next-line no-undef
        path: path.join(__dirname, `public`)
    },
    devServer: {
        // eslint-disable-next-line no-undef
        contentBase: path.join(__dirname, `public`),
        open: false,
        port: 3000,
        historyApiFallback: true,
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: `babel-loader`,
                },
            }
        ],
    },
    devtool: `source-map`,
};
