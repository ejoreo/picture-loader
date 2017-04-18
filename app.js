const redis = require('redis');
const redisClient = redis.createClient({host : 'localhost', port : 6379});

redisClient.on('ready', () => {
 console.log("Redis is connected");
});

redisClient.on('error', () => {
 console.log("Error in Redis");
});

// auth example
redisClient.auth('password', (err,reply) => {
 console.log(reply);
});


// setting the 'language' key with the value 'nodejs'
redisClient.set("language","nodejs");

// getting data from the redis client
redisClient.get("language", (err,reply) => {
 console.log(err);
 console.log(reply);
})