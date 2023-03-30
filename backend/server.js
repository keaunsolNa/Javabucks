// //필요한 모듈들을 가져오기 
const express = require("express");
const bodyParser = require('body-parser');

const db = require('./db');

// //Express 서버를 생성
const app = express();

// // json 형대토 오는 요청의 본문을 해석해줄수있게 등록
app.use(bodyParser.json());

app.get('/menu', function (req, res) {
    //데이테베이스에서 음료 정보 가져오기
    db.pool.query('SELECT * FROM DRINK;',
        (err, results, fileds) => {
            if (err)  
                return res.status(500).send(err)
            else 
                return res.json(results)
        })
})

app.get(`/menu/:menuId`, function (req, res) {
    console.log('server 도착')
    console.log(req.params.menuId)

    const menuId = req.params.menuId;
    //데이테베이스에서 음료 정보 가져오기
    db.pool.query(`SELECT * FROM DRINK WHERE DRINK_ID = ${menuId};`,
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


app.listen(5000, () => {
    console.log('애플리케이션이 5000번 포트에서 시작되었습니다.')
})


