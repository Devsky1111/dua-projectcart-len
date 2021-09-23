import * as types from './../constant/actiontype'
var initialState
var databandau = [{
    product: {
        id: 1,
        name: "Iphone 7 Plus",
        image: "https://cdn.tgdd.vn/Products/Images/42/207641/samsung-galaxy-a50s-den-200x200.jpg",
        description: "Sản phẩm do Apple sản xuất",
        price: 500,
        inventory: 10,
        rating: 4
    },
    quatity: 5
},
// {
//     product: {
//         id: 2,
//         name: "Iphone 7 Plus",
//         image: "https://cdn.tgdd.vn/Products/Images/42/207641/samsung-galaxy-a50s-den-200x200.jpg",
//         description: "Sản phẩm do Apple sản xuất",
//         price: 300,
//         inventory: 10,
//         rating: 4
//     },
//     quatity: 2
// }
]
if (localStorage.getItem("Cart") == null) {
    initialState = databandau
}
else { initialState = JSON.parse(localStorage.getItem("Cart")) }
const cart_reducer = (state = initialState, action) => {
    switch (action.type) {
        case types.ADD_TO_CART:
            console.log(action)
            var product = action.product
            var quatity = action.quatity
            console.log(quatity)
            var objnew = { product, quatity }
            // tim vi tri phan tu
            var indexfind = state.findIndex((ele) => { return ele.product.name === product.name })
            console.log(indexfind)
            if (indexfind === -1) {
                state.push(objnew)
            }
            else {
                state[indexfind].quatity += 1
            }
            localStorage.setItem("Cart", JSON.stringify(state))
            return [...state]
        case types.CHANGE_QUATITY:
            console.log(action)
            var state1 = [...state]
            // neu so luong lon hon 1 hoac so luong =1 nhung bam nut tang thi quatity = quatity + para
            if (((state1[action.indexitem].quatity > 1) || state1[action.indexitem].quatity === 1) && action.para > 0) {
                state1[action.indexitem].quatity = state1[action.indexitem].quatity + action.para
                return state1
            }

            else {
                return [...state]
            }
        case types.REMOVE_ITEMS:
        
            console.log(action);
            var indexfind1 = state.findIndex((ele) => { return ele.product.name === action.itemsneedremove.product.name })
            alert(indexfind1)
            state.splice(indexfind1,1)
            return [...state]
        
        default:
            return [...state]
    }



}

export default cart_reducer