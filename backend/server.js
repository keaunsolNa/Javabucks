// //필요한 모듈들을 가져오기 
const express = require("express");
const bodyParser = require('body-parser');

const db = require('./db');

// //Express 서버를 생성
const app = express();

// // json 형대토 오는 요청의 본문을 해석해줄수있게 등록
app.use(bodyParser.json());

// //DB lists 테이블에 있는 모든 데이터를 프론트 서버에 보내주기 
// app.get('/drink', function (req, res) {
//     console.log('drink 호출...drink 호출...drink 호출...drink 호출...drink호출...')
//     //데이테베이스에서 모든 정보 가져오기 
//     db.pool.query('SELECT * FROM lists;',
//         (err, results, fileds) => {
//             if (err)  
//                 return res.status(500).send(err)
//             else 
//                 return res.json(results)
//         })
// })
app.get('/api/drinks', function (req, res) {

    //데이테베이스에서 음료 정보 가져오기
    console.log('select 호출...') 
    db.pool.query('SELECT * FROM DRINK;',
        (err, results, fileds) => {
            if (err)  
                return res.status(500).send(err)
            else 
                return res.json(results)
        })
})

// 클라이언트에서 입력한 값을 데이터베이스 lists 테이블에 넣어주기
app.post('/api/value', function (req, res, next) {
    //데이터베이스에 값 넣어주기
    console.log('insert 호출...')
    db.pool.query(`INSERT INTO PRODUCT_NUTRITION_INFORMATION VALUES ('4', '145kcal', '18g', '15g', '85mg', '6g', '5g', '15mg', '0g', '195mg', '3.2g')`,
        (err, results, fileds) => {
            console.log(err)
            console.log(results)
            if (err)
                return res.status(500).send(err)
            else
                return res.json({ success: true, value: req.body.value })
        })
})
// app.post('/api/value', function (req, res, next) {
//     //데이터베이스에 값 넣어주기
//     db.pool.query(`INSERT INTO lists (value) VALUES("${req.body.value}")`,
//         (err, results, fileds) => {
//             if (err)
//                 return res.status(500).send(err)
//             else
//                 return res.json({ success: true, value: req.body.value })
//         })
// })

app.listen(5000, () => {
    console.log('애플리케이션이 5000번 포트에서 시작되었습니다.')
})


