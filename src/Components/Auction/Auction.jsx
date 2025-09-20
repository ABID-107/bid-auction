import { useState } from "react";

const Auction = ({ auction, showProductsHandle }) => {
    const { title, description, image, currentBidPrice, timeLeft } = auction
    const [fillColor, setFillColor] = useState('white')
    const handelFillColor = () => {
        setFillColor(fillColor === 'white' ? 'red' : 'white')
    }
    return (
        <div>

            <div>
                <div className="card card-side shadow-sm flex justify-between m-5 w-[918px] gap-10 items-center p-2 bg-[#e7e9e9] shadow-bg">
                    <div>
                        <img className="w-[100px] rounded-lg" src={image} alt="Movie" />
                    </div>
                    <div className="w-auto">
                        <h2 className="card-title text-[#44444E]">{title}</h2>
                        <p className="text-[#44444E] w-[350px]">{description}</p>
                    </div>
                    <div>
                        <p className="text-[#44444E] font-extrabold">
                            ${currentBidPrice}
                        </p>
                    </div>
                    <div className="w-auto">
                        <p className="text-[#44444E]">
                            {timeLeft}
                        </p>
                    </div>
                    <div className="card-actions">
                        <button onClick={() => {
                            showProductsHandle(auction)
                        }
                        }>
                            <svg xmlns="http://www.w3.org/2000/svg" fill={fillColor} onClick={handelFillColor} viewBox="0 0 24 24" strokeWidth="1.5" stroke="black" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                            </svg>
                        </button>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Auction;