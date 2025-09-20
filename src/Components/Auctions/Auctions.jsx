import { useEffect, useState } from "react";
import Auction from "../Auction/Auction";

const Auctions = ({ showProductsHandle, }) => {
    const [auctions, setAuctions] = useState([])
    useEffect(() => {
        fetch('../../../public/data.json')
            .then(res => res.json())
            .then(data => setAuctions(data))
    }, [])
    return (
        <div>
            <h1 className="text-[32px] text-[#715A5A]">
                Active Auctions
            </h1>
            <p className="text-[20px] text-[#715A5A]">
                Discover and bid on extraordinary items
            </p>
            <div className="bg-[#D3DAD9] shadow-xl ">
                <div className="flex items-center ">
                    <p className="font-semibold text-[#37353E] ml-10">Items</p>
                    <p className="font-semibold text-[#37353E] ml-[550px]">Current Bid</p>
                    <p className="font-semibold text-[#37353E] ml-16">Time</p>
                    <p className="font-semibold text-[#37353E] ml-16">Bid Now</p>
                </div>
                {
                    auctions.map(auction => <Auction key={auction.id}
                        auction={auction} showProductsHandle={showProductsHandle}
                    ></Auction>)
                }
            </div>
        </div>
    );
};

export default Auctions;