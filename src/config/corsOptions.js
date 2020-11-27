var corsOptions = {
    origin: "*",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    preflightContinue: false,
    optionsSuccessStatus: 204,
    allowedHeaders: "Content-Type,Authorization"
};

if (process.env.NODE_ENV === 'production' && process.env.HTTP_LIST) {
    const whitelist = process.env.HTTP_LIST.split(',');
    corsOptions.origin = function (origin, callback) {
        console.log(origin);
        if (whitelist.indexOf(origin) !== -1) {
            callback(null, true);
        } else {
            callback('Not allowed by CORS', false);
        }
    };

}

exports.corsOptions = corsOptions;
