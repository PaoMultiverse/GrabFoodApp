import CateDetail from "./CateDetail";


function Category(){

    const cateData = [
        {
            id: 1,
            imageUrl:"" ,
            name:"Hủ tiếu",
        },
        {
            id: 2,
            imageUrl:"" ,
            name:"Pizza",
        },
        {
            id: 3,
            imageUrl:"" ,
            name:"Cháo",
        },
        {
            id: 4,
            imageUrl:"" ,
            name:"Rau trộn",
        },
        {
            id: 5,
            imageUrl:"" ,
            name:"Trà sữa",
        },
        {
            id: 6,
            imageUrl:"" ,
            name:"Hiso Party",
        },
        {
            id: 7,
            imageUrl:"" ,
            name:"Mì Ý",
        },
        {
            id: 8,
            imageUrl:"" ,
            name:"Weekend Treats",
        },
        {
            id: 9,
            imageUrl:"" ,
            name:"Bánh mì",
        },
        {
            id: 10,
            imageUrl:"" ,
            name:"Cơm",
        },
        {
            id: 11,
            imageUrl:"" ,
            name:"Gà rán - Burger",
        },
        {
            id: 12,
            imageUrl:"" ,
            name:"Thịt",
        },
        {
            id: 13,
            imageUrl:"" ,
            name:"Gà Rán",
        },
        {
            id: 14,
            imageUrl:"" ,
            name:"Đồ uống lạnh",
        },
        {
            id: 15,
            imageUrl:"" ,
            name:"Ăn vặt",
        },
        {
            id: 16,
            imageUrl:"" ,
            name:"Gà",
        },
        {
            id: 17,
            imageUrl:"" ,
            name:"Cơm tấm",
        },
    ]

    const cate = cateData.map(
        (item) => <CateDetail
            name={item.name}
            url={item.imageUrl}
    />)
    return(
        <>
            <div className="container">
                <h2>There's something for everyone!</h2>
                <div className="container-cate">
                    {cate}
                </div>
            </div>
        </>
    )
}
export default Category;