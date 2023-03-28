const express = require("express");
const redis = require("redis");

//레디스 클라이언트 생성 
const client = redis.createClient({
    host: "redis-server",
    port: 6379
})

const app = express();

app.get('/', (req, res) => {
    res.send("숫자가 1씩 올라갑니다. 숫자: ")
})


app.listen(8080);


