export default function AmazonClone() {
    return (
        <>
            <div className="navbar flex">
                <div className="navLogo border mt-1" >
                    <div className="logo">
                    </div>
                </div>
                <div className="border flex p-1 mx-4 mt-1 " style={{ height: "50px" }} >
                    <div className="mapIcon mt-3 " >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" style={{ height: "20px", }}>
                            <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                            <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                        </svg>
                    </div>
                    <div className=" ">
                        <h1 className="text-gray-400 font-serif text-xs">Deliver to</h1>
                        <h1 className="text-xs">United Kingdom</h1>
                    </div>
                </div>
                <div className="searchBar m-2.5 flex justify-between">
                    <div className="flex ">
                        <div className="flex text-black bg-gray-300  w-16 h-10 rounded-tl-sm rounded-bl-sm"
                            style={{ alignContent: "center", justifyContent: "center", alignItems: "center" }}>
                            <h2 className="">all</h2>
                            <img src="/amazon/btn.png" style={{ height: "6px", width: "10px" }} className="ml-2"></img>
                        </div>
                        <div>
                            <input type="search" placeholder="Search Amazon" className="text-gray-800 flex pl-2 justify-center h-10 w-full"
                                style={{ alignContent: "center", alignItems: "center", justifyContent: "center", justifyItems: "center" }}></input>
                        </div>
                    </div>
                    <div className="searchIcon items-center justify-center content-center  rounded-tr-sm rounded-br-sm pl-2 h-10 w-10 bg-orange-300 "
                        style={{ alignContent: "center", alignItems: "center" }} >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor"
                            className="size-6 text-black">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196
                             5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                        </svg>
                    </div>
                </div>
                <div className="flex mt-6 ml-4 ">
                    <img src="/amazon/usa.png" alt="" className="h-6" />
                    <h2 className="pl-1">EN</h2>
                    <img src="/amazon/btn2.svg" alt="" className="h-2 mt-2 pl-1 text-red-400" />
                </div>
                <div className="ml-4 mt-3 ">
                    <div>
                        <p className="text-xs text-gray-400">Hello, Sign in</p>
                    </div>
                    <div className="flex">
                        <h2 className="pl-1 font-bold">Account & List</h2>
                        <img src="/amazon/btn2.svg" alt="" className="h-2 mt-2 pl-1 text-red-400" />
                    </div>
                </div>
                <div className="ml-6 mt-3">
                    <div>
                        <p className=" text-gray-200" style={{ fontSize: "10px" }}>Returns</p>
                    </div>
                    <div className="flex  mt-1 text-sm">
                        <h2 className="font-bold">& Orders</h2>
                    </div>
                </div>
                <div className="flex text-white p-4">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor"
                        className="size-8">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                    </svg>

                    <h2 className="pl-1 pt-3 font-bold">Cart</h2>
                </div>
            </div>
            <div className="bg-gray-800 h-11 flex items-center  ">
                <div className=" ml-4 ">
                    <div className="flex text-white   ">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        </svg>
                        <h2 className=" ml-2  font-bold  text-lg text-white">
                            All
                        </h2>
                    </div>
                </div>
                <div className="flex">
                    <h1 className="font-bold text-white text-sm pl-4">Today Deal </h1>
                    <h1 className="font-bold text-white text-sm pl-4">Customer Service </h1>
                    <h1 className="font-bold text-white text-sm pl-4">Registry</h1>
                    <h1 className="font-bold text-white text-sm pl-4">Gift Card</h1>
                    <h1 className="font-bold text-white text-sm pl-4">Sell</h1>
                </div>
            </div>
            <div className="" style={{ backgroundColor: "", height: "490px", width: "" }}>
                <img src="/amazon/hero.jpg" style={{ width: "100%", height: "100%" }} alt="" />
                <div className="bg-white h-10   mx-10 justify-center flex items-center" style={{ marginTop: "-80px" }}>
                    <p className=" flex bg-white h-10 items-center text-black">You are on amazon.com. You can also shop on Amazon UK for millions of products with fast local delivery. </p>
                    <a href="#a " className="  bg-white h-10 justify-center items-center flex text-blue-900 p-2">Click here to go to amazon.co.uk</a>
                </div>
            </div>
            <a href="/" target="_blank"> 
                <h2 className="fixed bottom-24  right-5 border-4 border-red-600 bg-black text-white rounded-full p-2">back to my Website
                </h2>
            </a>
        </>
    );
}
