export default function Trainingclub(){
    const month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const d = new Date();
    let name = month[d.getMonth()];
    let s = d.getDate() + " " + name + " " + d.getFullYear();
    return (<>

        <div className=" w-full">
            <div className=" h-36 flex justify-around  shadow-md shadow-gray-500 items-center">
            <img className="w-full h-36" src="/placement_tile.jpeg" />

            </div>

            <div className="w-[95%] mx-auto">

                <div className="  text-center font-bold text-3xl mt-2 font-sans p-2">
                    About us....
                    <div className="mx-3 font-normal text-lg shadow-md shadow-gray-500 rounded-xl p-2 text-justify">
                    TechZhut is a group of individuals who share a common an interest in Computer programming and technology. Members collaborate on projects, attend events and workshops and develop their skills in a social and supportive environment. The club provides opportunities to learn, network and stay-up-to date with the latest tech trends. The club provides a social environment where members can meet, connect with other gamers and can share their passion .
                    </div>
                </div>
            </div>
            <div className="flex justify-around w-full" >

                <div className="w-[40%] text-center font-bold text-3xl font-sans mt-3 p-2">
                    Our Handlers
                    <div className="shadow-md shadow-gray-500 text-2xl m-3 p-3 rounded-xl  ">
                        <div className="bg-gray-300 rounded-xl">Incharge</div>
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

                    <div className="shadow-md shadow-gray-500 text-2xl m-3 p-3 rounded-xl  ">
                        <div className="bg-gray-300 rounded-xl">President</div>
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
                <div className="flex-col='true'  w-[50%] ">

                <div className=" text-center font-bold text-3xl font-sans mt-3 p-2 mx-auto ">

Leading Roles
                <div className="shadow-md shadow-gray-600 text-2xl m-2 p-3 rounded-xl">
                        
                        
                        <div className="flex flex-row justify-around hover:bg-gray-100 mt-1 ">
                            <div className="w-[20%] text-lg h-[58] p-1">
                                1.
                            </div>
                            <div className=" w-[55%] text-lg h-[58] text-left p-1">
                                Harsehraab Singh
                            </div>
                            <div className=" w-[20%] text-lg h-[58] text-left p-1">
                                3<sup>rd</sup> Year
                            </div>
                        </div>
                        <div className="flex flex-row justify-around hover:bg-gray-100  ">
                            <div className="w-[20%] text-lg h-[58] p-1">
                                2.
                            </div>
                            <div className=" w-[55%] text-lg h-[58] text-left p-1">
                                Neha Verma
                            </div>
                            <div className=" w-[20%] text-lg h-[58] text-left p-1">
                                3<sup>rd</sup> Year
                            </div>
                        </div>
                        <div className="flex flex-row justify-around hover:bg-gray-100  ">
                            <div className="w-[20%] text-lg h-[58] p-1">
                                3.
                            </div>
                            <div className=" w-[55%] text-lg h-[58] text-left p-1">
                                Saket Kumar
                            </div>
                            <div className=" w-[20%] text-lg h-[58] text-left p-1">
                                2<sup>nd</sup> Year
                            </div>
                        </div>

                        <div className="flex flex-row justify-around hover:bg-gray-100 mt-1 ">
                            <div className="w-[20%] text-lg h-[58] p-1">
                                4.
                            </div>
                            <div className=" w-[55%] text-lg h-[58] text-left p-1">
                                Jashanjot Kaur
                            </div>
                            <div className=" w-[20%] text-lg h-[58] text-left p-1">
                                3<sup>rd</sup> Year
                            </div>
                        </div>
                        <div className="flex flex-row justify-around hover:bg-gray-100 mt-1 ">
                            <div className="w-[20%] text-lg h-[58] p-1">
                                5.
                            </div>
                            <div className=" w-[55%] text-lg h-[58] text-left p-1">
                                Simranpreet Kaur
                            </div>
                            <div className=" w-[20%] text-lg h-[58] text-left p-1">
                                3<sup>rd</sup> Year
                            </div>
                        </div>
                        
                        <div className="flex flex-row justify-around hover:bg-gray-100 mt-1 ">
                            <div className="w-[20%] text-lg h-[58] p-1">
                                6.
                            </div>
                            <div className=" w-[55%] text-lg h-[58] text-left p-1">
                                Ved Prakash 
                            </div>
                            <div className=" w-[20%] text-lg h-[58] text-left p-1">
                                3<sup>rd</sup> Year
                            </div>
                        </div>
                        <div className="flex flex-row justify-around hover:bg-gray-100  ">
                            <div className="w-[20%] text-lg h-[58] p-1">
                                7.
                            </div>
                            <div className=" w-[55%] text-lg h-[58] text-left p-1">
                                Kushal Rana
                            </div>
                            <div className=" w-[20%] text-lg h-[58] text-left p-1">
                                3<sup>rd</sup> Year
                            </div>
                        </div>

                        <div className="flex flex-row justify-around hover:bg-gray-100 mt-1 ">
                            <div className="w-[20%] text-lg h-[58] p-1">
                                8.
                            </div>
                            <div className=" w-[55%] text-lg h-[58] text-left p-1">
                                Davinder Kumar
                            </div>
                            <div className=" w-[20%] text-lg h-[58] text-left p-1">
                                3<sup>rd</sup> Year
                            </div>
                        </div>
                        <div className="flex flex-row justify-around hover:bg-gray-100  ">
                            <div className="w-[20%] text-lg h-[58] p-1">
                                9.
                            </div>
                            <div className=" w-[55%] text-lg h-[58] text-left p-1">
                                Nirmal Verma
                            </div>
                            <div className=" w-[20%] text-lg h-[58] text-left p-1">
                                2<sup>nd</sup> Year
                            </div>
                        </div>
                        
                    </div>
                    </div>
                </div>
            </div >
            <div className="flex-col mt-1 mb-5 shadow-md shadow-gray-500 w-[95%] mx-auto" id="events" >
                <div className="text-center font-bold text-3xl font-sans ">Our Events....</div>
                <div className="flex justify-center w-full">
                    <div className="flex flex-wrap w-full h-auto justify-between mt-4 max-w-[1250px] ">
                        <div className="flex-col h-[420px] border-2 w-[350px] shadow-md rounded-lg mb-5  hover:scale-105 transition duration-200 ease-in">
                            <div className=""><img className="rounded-t w-[350px] h-52" src="/e1.jpg" alt="" /></div>
                            <div className="flex justify-between">
                                <div className="bg-yellow-400 px-1 mt-1 text-xs py-[1px] rounded-tr rounded-br text-white">Teacher's day</div>
                                <div className="bg-amber-800 mt-1 text-xs px-1 py-[1px] rounded-tl rounded-bl text-white">{s}</div>
                            </div>
                            <div className="px-1 mt-3 font-bold">Teacher's day celeberated by all staff and students of our campus</div>
                            <div className="px-1">It is well organized by our students and there were many activities like skit,singing,mimicry,anchoring,dance etc.</div>
                            <div className="w-full mt-3 text-sm rounded-xl py-2 bg-amber-800 text-center text-white hover:bg-amber-800 cursor-pointer"><button>View Details</button></div>
                        </div>
                        <div className="flex-col h-[420px] border-2 w-[350px] shadow-md rounded-lg mb-5  hover:scale-105 transition duration-200 ease-in ">
                            <div className=""><img className="rounded-t w-[350px] h-52" src="/e1.jpg" alt="" /></div>
                            <div className="flex justify-between">
                                <div className="bg-yellow-400 px-1 mt-1 text-xs py-[1px] rounded-tr rounded-br text-white">Teacher's day</div>
                                <div className="bg-amber-800 mt-1 text-xs px-1 py-[1px] rounded-tl rounded-bl text-white">{s}</div>
                            </div>
                            <div className="px-1 mt-3 font-bold">Teacher's day celeberated by all staff and students of our campus</div>
                            <div className="px-1">It is well organized by our students and there were many activities like skit,singing,mimicry,anchoring,dance etc.</div>
                            <div className="w-full mt-3 text-sm rounded-xl py-2 bg-amber-800 text-center text-white hover:bg-amber-800 cursor-pointer"><button>View Details</button></div>
                        </div>
                        <div className="flex-col h-[420px] border-2 w-[350px] shadow-md rounded-lg mb-5  hover:scale-105 transition duration-200 ease-in ">
                            <div className=""><img className="rounded-t w-[350px] h-52" src="/e1.jpg" alt="" /></div>
                            <div className="flex justify-between">
                                <div className="bg-yellow-400 px-1 mt-1 text-xs py-[1px] rounded-tr rounded-br text-white">Teacher's day</div>
                                <div className="bg-amber-800 mt-1 text-xs px-1 py-[1px] rounded-tl rounded-bl text-white">{s}</div>
                            </div>
                            <div className="px-1 mt-3 font-bold">Teacher's day celeberated by all staff and students of our campus</div>
                            <div className="px-1">It is well organized by our students and there were many activities like skit,singing,mimicry,anchoring,dance etc.</div>
                            <div className="w-full mt-3 text-sm rounded-xl py-2 bg-amber-800 text-center text-white hover:bg-amber-800 cursor-pointer"><button>View Details</button></div>
                        </div>
                        <div className="flex-col h-[420px] border-2 w-[350px] shadow-md rounded-lg mb-5  hover:scale-105 transition duration-200 ease-in ">
                            <div className=""><img className="rounded-t w-[350px] h-52" src="/e1.jpg" alt="" /></div>
                            <div className="flex justify-between">
                                <div className="bg-yellow-400 px-1 mt-1 text-xs py-[1px] rounded-tr rounded-br text-white">Teacher's day</div>
                                <div className="bg-amber-800 mt-1 text-xs px-1 py-[1px] rounded-tl rounded-bl text-white">{s}</div>
                            </div>
                            <div className="px-1 mt-3 font-bold">Teacher's day celeberated by all staff and students of our campus</div>
                            <div className="px-1">It is well organized by our students and there were many activities like skit,singing,mimicry,anchoring,dance etc.</div>
                            <div className="w-full mt-3 text-sm rounded-xl py-2 bg-amber-800 text-center text-white hover:bg-amber-800 cursor-pointer"><button>View Details</button></div>
                        </div>
                        <div className="flex-col h-[420px] border-2 w-[350px] shadow-md rounded-lg mb-5  hover:scale-105 transition duration-200 ease-in ">
                            <div className=""><img className="rounded-t w-[350px] h-52" src="/e1.jpg" alt="" /></div>
                            <div className="flex justify-between">
                                <div className="bg-yellow-400 px-1 mt-1 text-xs py-[1px] rounded-tr rounded-br text-white">Teacher's day</div>
                                <div className="bg-amber-800 mt-1 text-xs px-1 py-[1px] rounded-tl rounded-bl text-white">{s}</div>
                            </div>
                            <div className="px-1 mt-3 font-bold">Teacher's day celeberated by all staff and students of our campus</div>
                            <div className="px-1">It is well organized by our students and there were many activities like skit,singing,mimicry,anchoring,dance etc.</div>
                            <div className="w-full mt-3 text-sm rounded-xl py-2 bg-amber-800 text-center text-white hover:bg-amber-800 cursor-pointer"><button>View Details</button></div>
                        </div>
                        <div className="flex-col h-[420px] border-2 w-[350px] shadow-md rounded-lg mb-5  hover:scale-105 transition duration-200 ease-in ">
                            <div className=""><img className="rounded-t w-[350px] h-52" src="/e1.jpg" alt="" /></div>
                            <div className="flex justify-between">
                                <div className="bg-yellow-400 px-1 mt-1 text-xs py-[1px] rounded-tr rounded-br text-white">Teacher's day</div>
                                <div className="bg-amber-800 mt-1 text-xs px-1 py-[1px] rounded-tl rounded-bl text-white">{s}</div>
                            </div>
                            <div className="px-1 mt-3 font-bold">Teacher's day celeberated by all staff and students of our campus</div>
                            <div className="px-1">It is well organized by our students and there were many activities like skit,singing,mimicry,anchoring,dance etc.</div>
                            <div className="w-full mt-3 text-sm rounded-xl py-2 bg-amber-800 text-center text-white hover:bg-amber-800 cursor-pointer"><button>View Details</button></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </>)
}


