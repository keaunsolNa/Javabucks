// //필요한 모듈들을 가져오기 
const express = require("express");
const bodyParser = require('body-parser');

const db = require('./db');

// //Express 서버를 생성
const app = express();

// // json 형대토 오는 요청의 본문을 해석해줄수있게 등록
app.use(bodyParser.json());

// 데이터베이스에서 음료 카테고리 가져오기
app.get('/api/categorylist/:drinkTypeKor', function (req, res) {

    const menuCategory = req.params.drinkTypeKor;

    console.log(menuCategory)
    db.pool.query(`SELECT * FROM DRINK WHERE DRINK_TYPE_KOR = ${menuCategory};`,
        (err, results, fileds) => {
            if (err)  {
                console.log("ERROR : " + err)
                return res.status(500).send(err)
            }
            else 
                return res.json(results)
            
        })
})

//데이테베이스에서 음료 정보 가져오기
app.get('/api/menulist', function (req, res) {

    db.pool.query('SELECT * FROM DRINK;',
        (err, results, fileds) => {
            if (err)  {
                console.log("ERROR : " + err)
                return res.status(500).send(err)
            }
            else 
                return res.json(results)
            
        })
})

//데이테베이스에서 음료 상세 정보 가져오기
app.get(`/api/menu/:menuId`, function (req, res) {

    const menuId = req.params.menuId;
    db.pool.query(`SELECT * FROM DRINK WHERE DRINK_ID = ${menuId};`,
        (err, results, fileds) => {
            if (err)  {
                console.log(err)
                return res.status(500).send(err)
            }
            else 
                return res.json(results)
        })
})

// 일치하는 ID 탐색
app.get(`/api/userlogin/:userId`, function(req, res) {

    const userID = req.params.userId;

    db.pool.query(`SELECT * FROM USER WHERE USER_ID = "${userID}";`,
        (err, results, fileds) => {
            if(err) {
                console.log(err)
                return res.status(500).send(err)
            }
            else
                return res.json(results)
        })
})

// 신규 음료 등록
app.post('/api/menu', function (req, res, next) {

    const drinkNameKor = req.body.drinkNameKor;
    const drinkNameEng = req.body.drinkNameEng;
    const drinkTypeKor = req.body.drinkTypeKor;
    const drinkTypeEng = req.body.drinkTypeEng;
    const drinkSize = req.body.drinkSize;
    const drinkHotIce = req.body.drinkHotIce;
    const allergyTriggers = req.body.allergyTriggers;
    const image = req.body.image;
    const drinkPrice = req.body.drinkPrice;
    const drinkInfo = req.body.drinkInfo;

    // 데이터베이스에 값 넣어주기
    db.pool.query(
                    `INSERT INTO DRINK 
                        (DRINK_TYPE_KOR, DRINK_TYPE_ENG, DRINK_HOT_ICE, ALLERGY_TRIGGERS, DRINK_SIZE, DRINK_NAME_KOR, DRINK_NAME_ENG, DRINK_PRICE, DRINK_INFO, DRINK_IMAGE) 
                    VALUES 
                        ("${drinkTypeKor}", "${drinkTypeEng}", "${drinkHotIce}", "${allergyTriggers}", "${drinkSize}", "${drinkNameKor}", "${drinkNameEng}","${drinkPrice}", "${drinkInfo}", "${image}")`,
                    
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
// 기존 음료 수정
app.put('/api/menu/:menuId', function (req, res, next) {

    const drinkId = req.params.menuId;
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
                    `UPDATE DRINK 
                        SET DRINK_TYPE = "${drinkType}"
                          , DRINK_HOT_ICE = "${drinkHotIce}"
                          , ALLERGY_TRIGGERS = "${allergyTriggers}"
                          , DRINK_SIZE =  "${drinkSize}"
                          , DRINK_NAME_KOR = "${drinkNameKor}"
                          , DRINK_NAME_ENG = "${drinkNameEng}"
                          , DRINK_PRICE = "${drinkPrice}"
                          , DRINK_INFO =  "${drinkInfo}"
                          , DRINK_IMAGE = "${image}"
                      WHERE DRINK_ID =  "${drinkId}"    
                    `,
                    
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

// 기존 메뉴 삭제
app.delete('/api/menu/:menuId', function (req, res, next) {
    const drinkId = req.params.menuId;

    db.pool.query(
        `DELETE FROM DRINK WHERE DRINK_ID =  "${drinkId}"`,
        
        (err, results, fileds) => {
            if (err){
                console.log(err)
                return res.status(500).send(err)
            }
            
            else{
                return res.json({ success: true, value: req.body.value })
            }
        }
    )
})


app.listen(5000, () => {
    console.log('애플리케이션이 5000번 포트에서 시작되었습니다.')
})


