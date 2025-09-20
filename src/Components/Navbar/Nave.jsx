import { LuBellRing } from "react-icons/lu";
const Nave = () => {
    return (
        <div>
            <div className="navbar shadow-sm flex justify-between bg-[#D3DAD9]">
                <div className="">
                    <a className="btn btn-ghost text-xl text-[#ccb45c]"><span className="text-[#003EA4]">Auction</span>Gallery </a>
                </div>
                <div className="flex gap-10">
                    <a className="bg-[#715A5A] text-[#D3DAD9] rounded-lg p-2">Home</a>
                    <a className="bg-[#715A5A] text-[#D3DAD9] rounded-lg p-2">Auctions</a>
                    <a className="bg-[#715A5A] text-[#D3DAD9] rounded-lg p-2">Categories</a>
                    <a className="bg-[#715A5A] text-[#D3DAD9] rounded-lg p-2">How to work</a>
                </div>
                <div className="flex items-center ">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="black" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0M3.124 7.5A8.969 8.969 0 0 1 5.292 3m13.416 0a8.969 8.969 0 0 1 2.168 4.5" />
                    </svg>

                    <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img
                                    alt="Tailwind CSS Navbar component"
                                    src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Nave;