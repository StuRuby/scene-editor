import webpack from 'webpack';
import config from '../build/webpack.prod.config';

webpack(config).run(
    (err: Error, stats) => {
        if(err) console.log(err);
        if(stats && stats.hasErrors()) {
            console.log(stats.toJson().errors);
        }
    }
);