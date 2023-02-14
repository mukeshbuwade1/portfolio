import React from 'react'
import { ThreeDots } from 'react-loader-spinner'

export default function Loader() {
    return (
        <div className="loader-container">
            <ThreeDots
                height="80"
                width="80"
                radius="9"
                color="#c5905a"
                ariaLabel="three-dots-loading"
                wrapperStyle={{
                    width:"100%",
                    height:"100%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                }}
                wrapperClassName=""
                visible={true}
            />
        </div>
    )
}
