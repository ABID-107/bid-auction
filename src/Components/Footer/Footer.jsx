const Footer = () => {
    return (
        <div>
            <div className="w-auto bg-white h-[444px] grid justify-center items-center">
                <div className="mt-10 grid justify-center items-center">
                    <div>
                        <h1 className="text-center text-[#003EA4] text-3xl font-bold">
                            Auction <span className="text-[#faca1f]">Gallery</span>
                        </h1>
                    </div>
                    <div className="flex justify-center mt-10 gap-7 font-semibold">
                        <h1 className="text-black">Bid.</h1>
                        <h1 className="text-black">Win.</h1>
                        <h1 className="text-black">Won.</h1>
                    </div>
                    <div className="flex gap-10 mt-10">
                        <a className=" text-black">Home</a>
                        <a className=" text-black">Auctions</a>
                        <a className=" text-black">Categories</a>
                        <a className=" text-black">How to work</a>
                    </div>
                    <div className="mt-10">
                        <p className="text-center text-black">
                            © 2025 AuctionHub. All rights reserved.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;