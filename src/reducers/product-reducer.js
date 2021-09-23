// xử lý reducer của sản phẩm
var initialState = [{
    id: 1,
    name: "Iphone 7 Plus",
    image: "https://cdn.tgdd.vn/Products/Images/42/207641/samsung-galaxy-a50s-den-200x200.jpg",
    description: "Sản phẩm do Apple sản xuất",
    price: 500,
    inventory: 10,
    rating: 4

},
{
    id: 2,
    name: "Iphone 11 Plus",
    image: "https://cdn.nguyenkimmall.com/images/detailed/604/10042579-dien-thoai-oppo-f11-pro-128bg-xam-1.jpg",
    description: "Sản phẩm do Apple sản xuất ra mắt năm 2016",
    price: 400,
    inventory: 15,
    rating:5

},
{
    id: 3,
    name: "Iphone 9 Plus",
    image: "https://cdn.tgdd.vn/Products/Images/42/161554/sieu-pham-galaxy-s-black-600x600.jpg",
    description: "Sản phẩm từng ghi dấu ấn một thời",
    price: 300,
    inventory: 30,
    rating: 3

}
]

const product_reducer = (state = initialState, action) => {
    switch(action.type) {
        default: 
        return [...state]
    }
}
export default product_reducer