import request from '../Common/Request';

export async function loadUserInfo () {

    const result = await request({
        url: 'http://49.235.98.65:3000/user/userinfo',
        method: 'get',
        data: {
            id: '5f85685c7cac8518b1099c1d'
        }
    });

    return result;
}

export async function loadExchangeList (){
    const result = await request({
        url:'http://49.235.98.65:3000/shop/exchangedRecord',
        method: 'get',
        data: {
            id: '5f85685c7cac8518b1099c1d'
        }
    });

    return result;
}

export async function loadShopList (){
    const result = await request({
        url:'http://49.235.98.65:3000/shop/shopList',
        method: 'get'
    });

    return result;
}

export async function exchange (id){
    const result = await request({
        url:'http://49.235.98.65:3000/shop/exchange',
        method: 'put',
        data:{
            id: id
        }
    });

    return result;
}