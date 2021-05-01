import React from "react";
import "./preloader.scss"

export default function Preloader() {
    return (<div>
        <div className="main-container">
            <div class="preloader-1">
                <span className="line line-1"></span>
                <span className="line line-2"></span>
                <span className="line line-3"></span>
                <span className="line line-4"></span>
                <span className="line line-5"></span>
                <span className="line line-6"></span>
                <span className="line line-7"></span>
                <span className="line line-8"></span>
                <span className="line line-9"></span>
            </div>
            <div className="image">
                <img src="https://assets.coingecko.com/coins/images/7670/large/DogeCoin-Private-logo.png?1549240189" alt="elon-musk" className="imagin"></img>
            </div>


            <div className="preloader-2">
                <span className="line line-1"></span>
                <span className="line line-2"></span>
                <span className="line line-3"></span>
                <span className="line line-4"></span>
                <span className="line line-5"></span>
                <span className="line line-6"></span>
                <span className="line line-7"></span>
                <span className="line line-8"></span>
                <span className="line line-9"></span>

            </div>


        </div>


    </div>
    );
}