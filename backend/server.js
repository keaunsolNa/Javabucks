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
    console.log('menulist 호출...')
    db.pool.query('SELECT * FROM DRINK;',
        (err, results, fileds) => {
            if (err)  {
                console.log("ERROR : " + err)
                return res.status(500).send(err)
            }
            else {
                console.log("result : " + results)
                return res.json(results)
            }
        })
})

app.get(`/menu/:menuId`, function (req, res) {

    const menuId = req.params.menuId;
    //데이테베이스에서 음료 상세 정보 가져오기
    db.pool.query(`SELECT * FROM DRINK WHERE DRINK_ID = ${menuId};`,
        (err, results, fileds) => {
            if (err)  
                return res.status(500).send(err)
            else 
                return res.json(results)
        })
})

// 클라이언트에서 입력한 값을 데이터베이스 lists 테이블에 넣어주기
app.post('/menu', function (req, res, next) {

    const drinkNameKor = req.body.drinkNameKor;
    const drinkNameEng = req.body.drinkNameEng;
    const drinkType = req.body.drinkType;
    const drinkSize = req.body.drinkSize;
    const drinkHotIce = req.body.drinkHotIce;
    const allergyTriggers = req.body.allergyTriggers;
    const image = req.body.image;
    const drinkPrice = req.body.drinkPrice;
    const drinkInfo = req.body.drinkInfo;

    // 데이터베이스에 값 넣어주기
    db.pool.query(
                    `INSERT INTO DRINK 
                        (DRINK_TYPE, DRINK_HOT_ICE, ALLERGY_TRIGGERS, DRINK_SIZE, DRINK_NAME_KOR, DRINK_NAME_ENG, DRINK_PRICE, DRINK_INFO, DRINK_IMAGE) 
                    VALUES 
                        ("${drinkType}", "${drinkHotIce}", "${allergyTriggers}", "${drinkSize}", "${drinkNameKor}", "${drinkNameEng}","${drinkPrice}", "${drinkInfo}", "${image}")`,
                    
        (err, results, fileds) => {
            if (err){
                console.log(err)
                return res.status(500).send(err)
            }
            else{
                return res.json({ success: true, value: req.body.value })
            }
        })
})


app.listen(5000, () => {
    console.log('애플리케이션이 5000번 포트에서 시작되었습니다.')
})


