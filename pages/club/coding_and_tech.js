export default function Coding() {
    const month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const d = new Date();
    let name = month[d.getMonth()];
    let s = d.getDate() + " " + name + " " + d.getFullYear();
    return (<>

        <div className=" w-full">
            <div className=" h-36 flex justify-around  shadow-md shadow-purple-500 items-center">
            <img className="w-full h-36" src="/coding_tile.png" />

            </div>
            <div className="  text-center font-bold text-3xl mt-2 font-sans p-2 w-[95%] mx-auto">
                About us....
                <div className="mx-3 font-normal text-lg shadow-md shadow-purple-500 rounded-xl p-2 text-justify">
                TechZhut is a group of individuals who share a common an interest in Computer programming and technology. Members collaborate on projects, attend events and workshops and develop their skills in a social and supportive environment. The club provides opportunities to learn, network and stay-up-to date with the latest tech trends. The club provides a social environment where members can meet, connect with other gamers and can share their passion .
                </div>
            </div>
            <div className="flex flex-row justify-around" >

                <div className="w-[40%] text-center font-bold text-3xl font-sans m-3 p-2">
                    Our Handlers
                    <div className="shadow-md shadow-purple-500 text-2xl m-3 p-3 rounded-xl">
                        <div className="bg-purple-300 rounded-xl">Incharge</div>
                        <div className="flex flex-row  justify-around  ">
                            <div className="w-[40%] text-xl h-28">
                                <img className="h-full w-full" src="/teacher.jpg" />
                            </div>
                            <div className="w-[95%] text-xl h-full my-auto items-center m-auto">
                                <div >Mr. Jagpreet Singh</div>
                                <div className="font-normal text-sm">(Assistant Professor)</div>
                            </div>
                        </div>
                    </div>

                    <div className="shadow-md shadow-purple-500 text-2xl m-3 p-3 rounded-xl">
                        <div className="bg-purple-300 rounded-xl">President</div>
                        <div className="flex flex-row  justify-around  ">
                            <div className="w-[40%] text-xl h-28">
                                <img className="h-full w-full" src="/teacher.jpg" />
                            </div>
                            <div className="w-[95%] text-xl h-full my-auto items-center m-auto">
                                <div className="">Jatin Saini</div>
                                <div className="font-normal text-sm">(3<sup>rd</sup> Year )</div>

                            </div>
                        </div>
                    </div>

                    
                </div>
                <div className="flex-col='true' m-3 w-[50%]">

                    
                <div className="shadow-md shadow-purple-500 text-2xl m-3 p-3 rounded-xl space-y-2">
                <div className="w-[40%] text-center font-bold text-3xl font-sans m-3 p-2">
                    Our Handlers</div>
                        <div className="flex flex-row justify-around  mt-3 bg-purple-200 rounded-xl">
                            <div className="w-[20%] text-xl h-[58] p-1 font-semibold">
                                Sno.
                            </div>
                            <div className=" w-[55%] text-xl h-[58] text-left p-1 font-semibold ">
                                Name
                            </div>
                            <div className=" w-[20%] text-xl h-[58] text-left p-1 font-semibold ">
                                Year
                            </div>
                        </div>
                        <div className="flex flex-row justify-around hover:bg-purple-100 mt-2 ">
                            <div className="w-[20%] text-xl h-[58] p-1">
                                1.
                            </div>
                            <div className=" w-[55%] text-xl h-[58] text-left p-1">
                                Shivam Kumar
                                </div>
                            <div className=" w-[20%] text-xl h-[58] text-left p-1">
                                3<sup>rd</sup> Year
                            </div>
                        </div>
                        <div className="flex flex-row justify-around hover:bg-purple-100  ">
                            <div className="w-[20%] text-xl h-[58] p-1">
                                2.
                            </div>
                            <div className=" w-[55%] text-xl h-[58] text-left p-1">
                                Siddhart Parashar
                            </div>
                            <div className=" w-[20%] text-xl h-[58] text-left p-1">
                                3<sup>rd</sup> Year
                            </div>
                        </div>
                        <div className="flex flex-row justify-around hover:bg-purple-100  ">
                            <div className="w-[20%] text-xl h-[58] p-1">
                                3.
                            </div>
                            <div className=" w-[55%] text-xl h-[58] text-left p-1">
                                Aryan
                            </div>
                            <div className=" w-[20%] text-xl h-[58] text-left p-1">
                                2<sup>nd</sup> Year
                            </div>
                        </div>
                        <div className="flex flex-row justify-around hover:bg-purple-100  ">
                            <div className="w-[20%] text-xl h-[58] p-1">
                                4.
                            </div>
                            <div className=" w-[55%] text-xl h-[58] text-left p-1">
                                Aditya
                            </div>
                            <div className=" w-[20%] text-xl h-[58] text-left p-1">
                                2<sup>nd</sup> Year
                            </div>
                        </div>
                        <div className="flex flex-row justify-around hover:bg-purple-100  ">
                            <div className="w-[20%] text-xl h-[58] p-1">
                                5.
                            </div>
                            <div className=" w-[55%] text-xl h-[58] text-left p-1">
                                Gurjot
                            </div>
                            <div className=" w-[20%] text-xl h-[58] text-left p-1">
                                2<sup>nd</sup> Year
                            </div>
                        </div>
                        <div className="flex flex-row justify-around hover:bg-purple-100  ">
                            <div className="w-[20%] text-xl h-[58] p-1">
                                6.
                            </div>
                            <div className=" w-[55%] text-xl h-[58] text-left p-1">
                                Prashant
                            </div>
                            <div className=" w-[20%] text-xl h-[58] text-left p-1">
                                2<sup>nd</sup> Year
                            </div>
                        </div>
                        <div className="flex flex-row justify-around hover:bg-purple-100  ">
                            <div className="w-[20%] text-xl h-[58] p-1">
                                7.
                            </div>
                            <div className=" w-[55%] text-xl h-[58] text-left p-1">
                                Mani
                            </div>
                            <div className=" w-[20%] text-xl h-[58] text-left p-1">
                                2<sup>nd</sup> Year
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex-col mt-1 mb-5 shadow-md shadow-purple-500 w-[95%] mx-auto" id="events" >
            <div className="text-center font-bold text-3xl font-sans ">Our Events....</div>
            <div className="flex justify-center w-full">
            <div className="flex flex-wrap w-full h-auto justify-between mt-4 max-w-[1250px] ">
                <div className="flex-col h-[420px] border-2 w-[350px] shadow-md rounded-lg mb-5  hover:scale-105 transition duration-200 ease-in">
                    <div className=""><img className="rounded-t w-[350px] h-52" src="/e1.jpg" alt="" /></div>
                    <div className="flex justify-between">
                        <div className="bg-red-600 px-1 mt-1 text-xs py-[1px] rounded-tr rounded-br text-white">Teacher's day</div>
                        <div className="bg-blue-900 mt-1 text-xs px-1 py-[1px] rounded-tl rounded-bl text-white">{s}</div>
                    </div>
                    <div className="px-1 mt-3 font-bold">Teacher's day celeberated by all staff and students of our campus</div>
                    <div className="px-1">It is well organized by our students and there were many activities like skit,singing,mimicry,anchoring,dance etc.</div>
                    <div className="w-full mt-3 text-sm rounded-xl py-2 bg-blue-900 text-center text-white hover:bg-blue-700 cursor-pointer"><button>View Details</button></div>
                </div>
                <div className="flex-col h-[420px] border-2 w-[350px] shadow-md rounded-lg mb-5  hover:scale-105 transition duration-200 ease-in ">
                    <div className=""><img className="rounded-t w-[350px] h-52" src="/e1.jpg" alt="" /></div>
                    <div className="flex justify-between">
                        <div className="bg-red-600 px-1 mt-1 text-xs py-[1px] rounded-tr rounded-br text-white">Teacher's day</div>
                        <div className="bg-blue-900 mt-1 text-xs px-1 py-[1px] rounded-tl rounded-bl text-white">{s}</div>
                    </div>
                    <div className="px-1 mt-3 font-bold">Teacher's day celeberated by all staff and students of our campus</div>
                    <div className="px-1">It is well organized by our students and there were many activities like skit,singing,mimicry,anchoring,dance etc.</div>
                    <div className="w-full mt-3 text-sm rounded-xl py-2 bg-blue-900 text-center text-white hover:bg-blue-700 cursor-pointer"><button>View Details</button></div>
                </div>
                <div className="flex-col h-[420px] border-2 w-[350px] shadow-md rounded-lg mb-5  hover:scale-105 transition duration-200 ease-in ">
                    <div className=""><img className="rounded-t w-[350px] h-52" src="/e1.jpg" alt="" /></div>
                    <div className="flex justify-between">
                        <div className="bg-red-600 px-1 mt-1 text-xs py-[1px] rounded-tr rounded-br text-white">Teacher's day</div>
                        <div className="bg-blue-900 mt-1 text-xs px-1 py-[1px] rounded-tl rounded-bl text-white">{s}</div>
                    </div>
                    <div className="px-1 mt-3 font-bold">Teacher's day celeberated by all staff and students of our campus</div>
                    <div className="px-1">It is well organized by our students and there were many activities like skit,singing,mimicry,anchoring,dance etc.</div>
                    <div className="w-full mt-3 text-sm rounded-xl py-2 bg-blue-900 text-center text-white hover:bg-blue-700 cursor-pointer"><button>View Details</button></div>
                </div>
                <div className="flex-col h-[420px] border-2 w-[350px] shadow-md rounded-lg mb-5  hover:scale-105 transition duration-200 ease-in ">
                    <div className=""><img className="rounded-t w-[350px] h-52" src="/e1.jpg" alt="" /></div>
                    <div className="flex justify-between">
                        <div className="bg-red-600 px-1 mt-1 text-xs py-[1px] rounded-tr rounded-br text-white">Teacher's day</div>
                        <div className="bg-blue-900 mt-1 text-xs px-1 py-[1px] rounded-tl rounded-bl text-white">{s}</div>
                    </div>
                    <div className="px-1 mt-3 font-bold">Teacher's day celeberated by all staff and students of our campus</div>
                    <div className="px-1">It is well organized by our students and there were many activities like skit,singing,mimicry,anchoring,dance etc.</div>
                    <div className="w-full mt-3 text-sm rounded-xl py-2 bg-blue-900 text-center text-white hover:bg-blue-700 cursor-pointer"><button>View Details</button></div>
                </div>
                <div className="flex-col h-[420px] border-2 w-[350px] shadow-md rounded-lg mb-5  hover:scale-105 transition duration-200 ease-in ">
                    <div className=""><img className="rounded-t w-[350px] h-52" src="/e1.jpg" alt="" /></div>
                    <div className="flex justify-between">
                        <div className="bg-red-600 px-1 mt-1 text-xs py-[1px] rounded-tr rounded-br text-white">Teacher's day</div>
                        <div className="bg-blue-900 mt-1 text-xs px-1 py-[1px] rounded-tl rounded-bl text-white">{s}</div>
                    </div>
                    <div className="px-1 mt-3 font-bold">Teacher's day celeberated by all staff and students of our campus</div>
                    <div className="px-1">It is well organized by our students and there were many activities like skit,singing,mimicry,anchoring,dance etc.</div>
                    <div className="w-full mt-3 text-sm rounded-xl py-2 bg-blue-900 text-center text-white hover:bg-blue-700 cursor-pointer"><button>View Details</button></div>
                </div>
                <div className="flex-col h-[420px] border-2 w-[350px] shadow-md rounded-lg mb-5  hover:scale-105 transition duration-200 ease-in ">
                    <div className=""><img className="rounded-t w-[350px] h-52" src="/e1.jpg" alt="" /></div>
                    <div className="flex justify-between">
                        <div className="bg-red-600 px-1 mt-1 text-xs py-[1px] rounded-tr rounded-br text-white">Teacher's day</div>
                        <div className="bg-blue-900 mt-1 text-xs px-1 py-[1px] rounded-tl rounded-bl text-white">{s}</div>
                    </div>
                    <div className="px-1 mt-3 font-bold">Teacher's day celeberated by all staff and students of our campus</div>
                    <div className="px-1">It is well organized by our students and there were many activities like skit,singing,mimicry,anchoring,dance etc.</div>
                    <div className="w-full mt-3 text-sm rounded-xl py-2 bg-blue-900 text-center text-white hover:bg-blue-700 cursor-pointer"><button>View Details</button></div>
                </div>
            </div>
            </div>
        </div>
        </div>

    </>)
}

