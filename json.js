// Javascrip Object Notation
// Json
const shop = {
    name : 'alia store',
    address:'jhawtola',
    profit : 20000,
    products:['laptop','mobile','watch'],
    owner :{
        name:'sokina',
        profession :'kaj kora'
    }
};
const shopStringFeild = JSON.stringify(shop);
console.log(shopStringFeild);

const convert = JSON.parse(shopStringFeild)
console.log(convert.owner);