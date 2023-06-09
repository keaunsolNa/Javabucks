import { request } from "./Api"; 
import { getMenulist, getMenu, registMenu, modifyMenu, deleteMenu } from "../modules/MenuModule";

// 메뉴 리스트 호출
export function callGetMenuListAPI() {
    
    /* redux-thunk(미들 웨어)를 이용한 비동기 처리 */
    return async (dispatch, getState) => {
        /* Api의 axios 처리 참조  */
        const result = await request('GET', `/api/menulist`);
        /* action 생성 함수에 결과 전달하며 dispatch 호출 */
        dispatch(getMenulist(result));
    }
}

// 상세 메뉴 호출
export function callGetMenuAPI(id) {
    
    return async (dispatch, getState) => {
    
        const result = await request('GET', `/api/menu/${id}`);
    
        dispatch(getMenu(result));
    }
}

// 카테고리별 메뉴 조회
export function callGetMenuCategoryAPI(categoryName) {
    
    return async (dispatch, getState) => {
        console.log("category : " + categoryName)

        if(categoryName === "전체"){
            const result = await request('GET', `/api/menulist`);
            dispatch(getMenulist(result));
        }
        else {
            const result = await request('GET', `/api/categorylist/"${categoryName}"`);
            dispatch(getMenulist(result));
        } 
    
    }
}

// 메뉴 등록
export function callRegistMenuAPI(menu) {
    
    return async (dispatch, getState) => {
        
        const result = await request('POST', '/api/menu/', menu);

        console.log('메뉴 등록 result : ')
        console.log(result)
        dispatch(registMenu(result));
    }
}

// 영양성분 등록
export function callRegistNIMenuAPI(NIInfo) {
    
    return async (dispatch, getState) => {
        
        console.log('영양성분 등록 parameter : ' + NIInfo);
        const result = await request('POST', '/api/menu/', NIInfo);
    

        dispatch(registMenu(result));
    }
}

// 메뉴 수정
export function callModifyMenuAPI(menu) {
    
    return async (dispatch, getState) => {
    
        const result = await request('PUT', `/api/menu/${menu.id}`, menu);
    
        dispatch(modifyMenu(result));
    }
}

// 메뉴 삭제
export function callDeleteMenuAPI(id) {
    
    return async (dispatch, getState) => {
    
        const result = await request('DELETE', `/api/menu/${id}`);
    
        dispatch(deleteMenu(result));
    }
}
