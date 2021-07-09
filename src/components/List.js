import React from "react";
import Item from "./Item";

export default function List(props) {
    const {itemList} = props;


    return (
        <div className="List">
            {itemList.map((item, index) => (
                <div key={index}>
                    <Item item={item} />
                </div>)
            )}
        </div>
    );
}