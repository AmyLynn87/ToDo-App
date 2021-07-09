import React from "react";

export default function Item(props) {
const {item} = props;

    return (
        <div className="Item">
            <input type="checkbox" />
            {item}
        </div>
        );
}