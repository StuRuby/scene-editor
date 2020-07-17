import webpack from 'webpack';
import config from '../build/webpack.prod.config';
import SpeedMeasurePlugin from "speed-measure-webpack-plugin"

const smp = new SpeedMeasurePlugin()
// 打包时间分析
// const compiler = webpack(smp.wrap(config));
const compiler = webpack(config);

compiler.run(
    (err: Error, stats) => {
        if(err) console.log(err);
        if(stats && stats.hasErrors()) {
            console.log(stats.toJson().errors);
        }
    }
);