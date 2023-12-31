import {IoMdArrowDroprightCircle} from 'react-icons/io'
import {GrView} from 'react-icons/gr'
import {IoMdDownload} from 'react-icons/io'
import Navbarres from '../../components/navbarres'
import { useEffect, useState } from 'react';
import { RxHamburgerMenu } from 'react-icons/rx'

import Link from 'next/link';

export default function Ebooks(){
      const [data, setdata] = useState([])
      const [data1, setdata1] = useState([])
      // const [filters, setfilters] = useState([])
      const [spin, setspin] = useState('')
      const [searchdata, setsearchdata] = useState('')
      const [show, setshow] = useState('hidden')
      const [norecord, setnorecord] = useState('hidden')

const showresult=(e)=>{
e.preventDefault()
// data.map((curr)=>{
  if(e.target.value=="All"){
    setdata(data1)
  }
  else{
    let temp=data1.filter((currelem)=>{
      return currelem.category==e.target.value;
    })
  if(temp.length==0){
    setnorecord('')
  }
  else{
    setnorecord('hidden')
  }
    setdata(temp)
  }


}
const search=(e)=>{
e.preventDefault();
// console.log(searchdata);
let temp=searchdata.toLowerCase()
let reg=new RegExp(`.*${temp}.*`,'g')
let t=data1.filter((val)=>{
  if(searchdata==''){
    return val;
  }
  else if(val.title.toLowerCase().match(reg) ||val.category.toLowerCase().match(reg)){
    return val;
  }
  // else if(val.bookname.toLowerCase().includes(searchdata.toLowerCase()) || val.category.toLowerCase().includes(searchdata.toLowerCase()) || val.authorname.toLowerCase().includes(searchdata.toLowerCase()) || val.isbn.toLowerCase().includes(searchdata.toLowerCase())){
  //   return val;
  // }
})
if(t.length==0){
  console.log('fdafdf');
  setnorecord('')
}
else{
  setnorecord('hidden')
}
setdata(t)
}
const openInNewTab = (url) => {
  const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
  if (newWindow) newWindow.opener = null
}
      useEffect(() => {
          const url = "http://localhost:3000/api/ebooks";
          // const url1 = "http://localhost:3000/api/placementevents";
        
        
          const fetchData = async () => {
            try {
              setspin('')
              let response = await fetch(url);
              let json = await response.json();
              // console.log(json);
              setdata(json)
              setdata1(json)
              
              if(json.length!=0){
                setnorecord('hidden')
             
              }          
              setspin('hidden')
              setshow('')
            } catch (error) {
              setshow('hidden')
              setspin('')
              console.log("error", error);
            }
          };
        
          fetchData();
        }, []);
        const download=(doc,title)=>{
          fetch(doc).then(response => {
            response.blob().then(blob => {
                // Creating new object of PDF file
                const fileURL = window.URL.createObjectURL(blob);
                // Setting various property values
                let abutton = document.createElement('a');
                abutton.href = fileURL;
                abutton.download = title;
                abutton.click();
              
            })
        })
        }
    return(<>

   <div className='h-screen'>
    <Navbarres/>


    <nav className="navbar navbar-expand-lg bg-slate-900 justify-around items-center font-serif text-md font-semibold hidden xsm:flex">
        <div className="container-fluid ">
          <div className=" text-white text-center text-xl">Categories</div>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            {/* <span className="RxHamburgerMenu"></span> */}
            <RxHamburgerMenu className='text-white' />
          </button>
          <div className="collapse navbar-collapse mt-3" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto ">
              <li className="nav-item mb-2"><div><button className="bg-gray-400 text-sky-900 rounded-full px-3 py-2 focus:bg-yellow-200 focus:text-amber-800 w-full text- " onClick={showresult} value="All">All Books</button></div></li>
              <li className="nav-item mb-2"><div><button className="bg-gray-400 text-sky-900 rounded-full px-3 py-2 focus:bg-yellow-200 focus:text-amber-800 w-full text- " onClick={showresult} value="Mathematics">Mathematics</button></div></li>
              <li className="nav-item mb-2"><div><button className="bg-gray-400 text-sky-900 rounded-full px-3 py-2 focus:bg-yellow-200 focus:text-amber-800 w-full text-" onClick={showresult} value="Physics">Physics</button></div></li>
              <li className="nav-item mb-2"><div><button className="bg-gray-400 text-sky-900 rounded-full px-3 py-2 focus:bg-yellow-200 focus:text-amber-800 w-full text-" onClick={showresult} value="Python">Python</button></div></li>
              <li className="nav-item mb-2"><div><button className="bg-gray-400 text-sky-900 rounded-full px-3 py-2 focus:bg-yellow-200 focus:text-amber-800 w-full text-" onClick={showresult} value="Java">Java</button></div></li>
              <li className="nav-item mb-2"><div><button className="bg-gray-400 text-sky-900 rounded-full px-3 py-2 focus:bg-yellow-200 focus:text-amber-800 w-full text-" onClick={showresult} value="C">C</button></div></li>
              <li className="nav-item mb-2"><div><button className="bg-gray-400 text-sky-900 rounded-full px-3 py-2 focus:bg-yellow-200 focus:text-amber-800 w-full text-" onClick={showresult} value="DBMS">DBMS</button></div></li>
              <li className="nav-item mb-2"><div><button className="bg-gray-400 text-sky-900 rounded-full px-3 py-2 focus:bg-yellow-200 focus:text-amber-800 w-full text-" onClick={showresult} value="Operating System">OS</button></div></li>
            </ul>
          </div>
        </div>
      </nav>


     <div className="flex h-[85.3%] overflow-y-hidden bg-gradient-to-r from-amber-800 via-yellow-500 to-amber-800">
  
        <div className="flex-col filter-side w-[15%]  scrollbar-thin scrollbar-track-yellow-700 scrollbar-thumb-yellow-600  bg-slate-900 py-2 px-3 text-white overflow-y-auto overflow-x-hidden  xsm:hidden">
          <div className='text-xl font-semibold '>Categories</div>
           <div className='flex-col space-y-4 ml-2 pt-3'>
               <div><button className="bg-gray-400 text-black rounded-full px-3 py-2 focus:bg-yellow-200 focus:text-red-800 w-36 " onClick={showresult} value="All">All Books</button></div>
              <div><button className="bg-gray-400 text-black rounded-full px-3 py-2 focus:bg-yellow-200 focus:text-red-800 w-36 " onClick={showresult} value="Mathematics">Mathematics</button></div>
              <div><button className="bg-gray-400 text-black rounded-full px-3 py-2 focus:bg-yellow-200 focus:text-red-800 w-36" onClick={showresult} value="Physics">Physics</button></div>
              <div><button className="bg-gray-400 text-black rounded-full px-3 py-2 focus:bg-yellow-200 focus:text-red-800 w-36" onClick={showresult} value="Python">Python</button></div>
              <div><button className="bg-gray-400 text-black rounded-full px-3 py-2 focus:bg-yellow-200 focus:text-red-800 w-36" onClick={showresult} value="Java">Java</button></div>
              <div><button className="bg-gray-400 text-black rounded-full px-3 py-2 focus:bg-yellow-200 focus:text-red-800 w-36" onClick={showresult} value="C">C</button></div>
              <div><button className="bg-gray-400 text-black rounded-full px-3 py-2 focus:bg-yellow-200 focus:text-red-800 w-36" onClick={showresult} value="DBMS">DBMS</button></div>
              <div><button className="bg-gray-400 text-black rounded-full px-3 py-2 focus:bg-yellow-200 focus:text-red-800 w-36" onClick={showresult} value="Operating System">OS</button></div>
              
           </div>
           
        </div>


        <div className='right-side flex-col w-[85%] xsm:w-full'>
        <div className="flex justify-center ">
  <div className="pt-3">
    <div className=" flex w-full flex-wrap items-stretch">
      <input
      value={searchdata}
        type="search"
        className="xsm:w-[70%] relative m-0 -mr-px block w-96 min-w-0 flex-auto rounded-l border border-solid border-neutral-300 bg-yellow-200  px-3 py-1.5 text-base font-normal text-neutral-700 outline-none transition duration-300 ease-in-out focus:border-primary focus:text-neutral-700 focus:shadow-te-primary focus:outline-none dark:text-neutral-200 dark:placeholder:text-sky-900"
        placeholder="Search eBooks"
        aria-label="Search"
        aria-describedby="button-addon1" onChange={(evnt)=>(setsearchdata(evnt.target.value))}/>
      <button
        className="relative z-[2] flex items-center rounded-r bg-yellow-500 px-6 py-2.5 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:bg-yellow-600 hover:shadow-lg focus:bg-yellow-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-yellow-500 active:shadow-lg"
        type="button"
        id="button-addon1"
        data-te-ripple-init
        data-te-ripple-color="light" onClick={(evnt)=>(search(evnt))}>
        
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="h-5 w-5">
          <path
            fillRule="evenodd"
            d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
            clipRule="evenodd" />
        </svg>
      </button>
    </div>
  </div>
</div>


<div className='flex-col mx-2 py-12 h-full res_table xsm:py-3'>
        <div className='text-center text-2xl text-white font-serif'> All Books</div> 
        <div className='flex justify-center'><img className='w-32 ' src="/hr.png" alt="" /></div>
        <div className='h-[85.3%] overflow-y-auto scrollbar-thin scrollbar-track-neutral-400 scrollbar-thumb-neutral-500'>

        <table className="border-collapse border border-neutral-400  w-[90%] mx-auto mt-2 xsm:mb-5">
                      <thead className="">
                        <tr className=" ">
                          <th className="border-2  py-2 border-neutral-300 text-center px-2">Sno.</th>
                          <th className="border-2 py-2 border-neutral-300 px-2 text-center">Title</th>
                          <th className="border-2 py-2 border-neutral-300 px-2 text-center">View</th>
                          <th className="border-2 py-2 border-neutral-300 px-2 text-center">Download</th>
                        </tr>
                      </thead>
                      <tbody className={`${show} `}>

                      <tr className={`${norecord}`}>
                          <td colSpan="4"  className="bg-yellow-400 text-center  h-28  xsm:h-auto">
                          No records found
                          </td>
                          </tr>
                        {data.map((da,index)=>{
                          const {title,doc}=da;
                          return(<>
                        <tr key={index} >      
                <td className="border-2  border-neutral-300 text-center w-24">
                            {index+1}.
                </td>        
                <td className="border-2  border-neutral-300 ml-4">
                            {title}
                </td>        
                <td className="border-2  border-neutral-300 w-16 py-2">
                           {/* <Link href={doc} target="_blank">view</Link> */}
<div className='w-full flex justify-center'><button className=' text-2xl ' onClick={() => openInNewTab(doc)}><GrView/></button>
</div>
                </td>        
                <td className="border-2 w-16 py-2 border-neutral-300 ">
                <div className='w-full flex justify-center'> <button className=' text-2xl ' onClick={() => download(doc,title)}><IoMdDownload/></button>
</div>
                        
                </td>        
            </tr>
                          </>)
                        })}
                      </tbody>
                    </table>
        </div>
        {/* <div className={`${show}  w-full overflow-y-auto scrollbar-thin pb-12  scrollbar-track-transparent scrollbar-thumb-transparent h-full  flex flex-wrap  justify-center pt-2`}>
            <div className={`${norecord} w-full  flex justify-center items-center shadow-2xl shadow-gray-900 mx-5 my-3`}>
                <div className='text-xl text-gray-300 font-serif'>No Record Found</div>
            </div>
            {data.map((da,index)=>{
              const {image,bookname,authorname}=da;
              return(<>
              <div className='flex-col mx-5 my-2 h-64 w-44  shadow-lg shadow-purple-400'>
            <img className='h-48' src={image} alt="" />
            <div className='text-center font-semibold font-serif text-red-600'>{bookname}({authorname})</div>
            </div>
              
              </>)
             })} 
        </div> */}
</div>
        </div>
    </div>  

   </div>
    </>)
}