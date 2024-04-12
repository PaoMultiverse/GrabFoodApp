import React from "react";

function CateDetail(prop){
    return(
        <>
             <div className="Cate ">
                        <div className="image">
                            <img src={prop.url} alt="" />
                        </div>
                        <h6>{prop.name}</h6>
                    </div>
        </>
    )
}
export default CateDetail;