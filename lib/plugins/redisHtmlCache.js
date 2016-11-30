var redis = require("redis");

module.exports = {
    init: function() {
        this.cache = redis.createClient({
          host: process.env.CACHE_MAXSIZE || '127.0.0.1',
          port: process.env.CACHE_MAXSIZE || 6379
        });
    },

    beforePhantomRequest: function(req, res, next) {
        this.cache.get(req.prerender.url, function (err, result) {
            if (!err && result) {
                console.log(result.toString());
                res.send(200, result.toString());
            } else {
                next();
            }
        });
    },

    afterPhantomRequest: function(req, res, next) {
        this.cache.set(req.prerender.url, req.prerender.documentHTML);
        next();
    }
}
