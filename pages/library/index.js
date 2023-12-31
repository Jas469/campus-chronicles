import { ImBooks, ImNewspaper } from 'react-icons/im'
import { FaHome, FaBookMedical } from 'react-icons/fa'
import { AiFillFilePdf } from 'react-icons/ai'
import { MdAccountCircle } from 'react-icons/md'
import { MdMessage } from 'react-icons/md'
import LibraryCarousal from '../../components/Library_carousel'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { RxHamburgerMenu } from 'react-icons/rx'

export default function Library() {
  const [data, setdata] = useState([])
  const [spin, setspin] = useState('hidden')
  const [newbooks, setnewbooks] = useState([])
  let temp = []
  useEffect(() => {
    const url = "http://localhost:3000/api/addbooks";
    //  const url1 = "http://localhost:3000/api/placementevents";


    const fetchData = async () => {
      try {
        //  setspin('')
        let response = await fetch(url);
        let json = await response.json();
        //  console.log(json);
        setdata(json)
        if (json.length > 8) {
          for (let i = 0; i < 8; i++) {
            temp.push(json[i])
          }
          setnewbooks(temp)
        }
        else {
          setnewbooks(json)
        }
        console.log(newbooks);
        setspin('hidden')
        //  setshow('')
      } catch (error) {
        //  setshow('hidden')
        //  setspin('')
        console.log("error", error);
      }
    };

    fetchData();
  }, []);
  return (<>
    <div className="flex-col ">
      {/* <div className='text-center text-4xl h-24 bg-slate-400'><img src='/libj.jpg' className='h-24 w-full'/></div> */}
      
      <div className='text-center text-5xl h-24 flex w-[100%] '>
        <img src='/libj2.gif' className='h-24 ml-12 w-[15%]' />
        <div className=' justify-center items-center flex w-[70%]  font-bold'>Library</div>
      </div>
      
      <nav className="navbar navbar-expand-lg bg-gradient-to-r from-amber-800 via-yellow-500 to-amber-800 justify-around items-center font-serif text-md font-semibold hidden xsm:block">
            <div className="container-fluid ">
                <div className="mb-2 flex"><FaHome className='text-lg mt-[2px] mr-5'/><Link href="/">Home</Link></div>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    {/* <span className="RxHamburgerMenu"></span> */}
                    <RxHamburgerMenu></RxHamburgerMenu>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto ">
                        <li className="nav-item mb-2 flex"><ImBooks className='text-xl mt-[2px] mr-5' /> <Link href='/library/availablebooks'>Available Books</Link></li>
                        {/* <li className="nav-item mb-2 flex"><ImBooks className='text-xl mt-[2px] mr-5' /> <Link href='/library/availablemagazines'>Available Magazines</Link></li> */}
                        <li className="nav-item mb-2 flex"><AiFillFilePdf className='text-lg mt-1 mr-5' /><Link href='/library/ebooks'>eBooks</Link></li>
                        <li className="nav-item mb-2 flex"><FaBookMedical className='text-xl mt-[2px] mr-5' /> <Link href='/library/requestbook'>Request Book</Link></li>
                    </ul>
                </div>
            </div>
        </nav>


      <div className="libnavbar flex justify-center w-full space-x-28 bg-gradient-to-r from-amber-800 via-yellow-500 to-amber-800 py-2 font-semibold font-serif xsm:hidden">
        <div className='flex '><FaHome className='text-lg mt-[2px] mr-1' /> Home</div>
        <div className='flex '><ImBooks className='text-xl mt-[2px] mr-1' /> <Link href='/library/availablebooks'>Available Books</Link></div>
        {/* <div className='flex '><ImBooks className='text-xl mt-[2px] mr-1' /> <Link href='/library/availablemagazines'>Available Magazines</Link></div> */}
        <div className='flex '><AiFillFilePdf className='text-lg mt-1 mr-1' /><Link href='/library/ebooks'>eBooks</Link></div>
        <div className='flex '><FaBookMedical className=' mt-1 mr-1' /><Link href='/library/requestbook'>Request Book</Link></div>
        {/* <div className='flex '><MdAccountCircle className='text-xl mt-[2px] mr-1 '/>Log o</div> */}

      </div>
      <div className="flex  mt-[2px]">

        <div className="flex-col w-full h-3/4 ">
          <LibraryCarousal />
        </div>
        {/* <div className="flex-col w-1/4 mr-1 shadow-xl shadow-purple-300 ">
                <div className='text-xl font-serif text-center bg-purple-300 rounded-sm shadow-lg shadow-purple-500'>Announcement</div>
               <marquee  width="100%" direction="up" height="90%" behaviour="scroll" scrollamount="4" className="space-y-5 px-3">
             <div className='flex space-x-1'><div className='mt-2'><img className='' src="new.gif" alt="" /></div> <div>Proposed datesheet for 6th sem</div></div>
             <div className='flex space-x-1'><div className='mt-2'><img className='' src="new.gif" alt="" /></div> <div>Proposed datesheet for 6th sem</div></div>
             <div className='flex space-x-1'><div className='mt-2'><img className='' src="new.gif" alt="" /></div> <div>Proposed datesheet for 6th sem</div></div>
             
               </marquee>
            
            </div> */}
      </div>
      <div className='flex justify-between mt-5 mb-5 h-96 space-x-5  xsm:block xsm:h-auto' >
        <div className='new_published_book  w-1/2 flex-col shadow-xl shadow-purple-300 xsm:w-[90%] xsm:mx-auto xsm:h-72 xsm:mb-10'>
          <div className='text-2xl text-center pt-2 font-serif '>New Books</div>

          <div className='flex justify-center w-full'><img className='w-40' src="hr.png" alt="" /></div>
          <marquee width="100%" direction="up" height="83%" behaviour="scroll" scrollamount="4" className="">
            <div className='flex flex-wrap justify-evenly pb-5 '>
              {newbooks.map((da, index) => {
                const { image } = da;
                console.log(da);
                return (<>
                  <div className='h-40 mx-2 my-8  w-36 border shadow-xl' >
                    <img className='h-full w-full' src={image} alt="" />
                  </div>
                </>)

              })}
              {/* <div className='h-40 mx-2 my-8  w-36' ><img src="book.jpg" alt="" /></div> */}
              {/* <div className='h-40 mx-2 my-8  w-36' ><img src="book.jpg" alt="" /></div>
                    <div className='h-40 mx-2 my-8  w-36' ><img src="book.jpg" alt="" /></div>
                    <div className='h-40 mx-2 my-8  w-36' ><img src="book.jpg" alt="" /></div>
                    <div className='h-40 mx-2 my-8  w-36' ><img src="book.jpg" alt="" /></div>
                   

                    <div className='h-40 mx-2 my-8  w-36' ><img src="book.jpg" alt="" /></div>
                    <div className='h-40 mx-2 my-8  w-36' ><img src="book.jpg" alt="" /></div>
                    <div className='h-40 mx-2 my-8  w-36' ><img src="book.jpg" alt="" /></div>
                    <div className='h-40 mx-2 my-8  w-36' ><img src="book.jpg" alt="" /></div>
                    <div className='h-40 mx-2 my-8  w-36' ><img src="book.jpg" alt="" /></div>
                    <div className='h-40 mx-2 my-8  w-36' ><img src="book.jpg" alt="" /></div> */}

            </div>
          </marquee>
        </div>

        <div className='new_published_book  w-1/2 flex-col shadow-xl shadow-purple-300  xsm:w-[90%] xsm:mx-auto xsm:h-72'>
          <div className='text-2xl text-center pt-2 font-serif xsm:text-xl'>E-Resources</div>
          <div className='flex justify-center w-full'><img className='w-40' src="hr.png" alt="" /></div>
          <marquee width="100%" direction="up" height="80%" behaviour="scroll" scrollamount="4" className="">
            <div className='flex flex-wrap justify-around  px-3 pb-5 '>
              <div className='mx-2  my-4 w-28 ' ><img className='' src="IEEE.jpg" alt="" /></div>
              <div className='mx-2  my-4 w-28 ' ><img className='' src="CUP.jpg" alt="" /></div>
              <div className='mx-2  my-4 w-28 ' ><img className='' src="IEEE.jpg" alt="" /></div>
              <div className='mx-2  my-4 w-28 ' ><img className='' src="CUP.jpg" alt="" /></div>
              <div className='mx-2  my-4 w-28 ' ><img className='' src="IEEE.jpg" alt="" /></div>
              <div className='mx-2  my-4 w-28 ' ><img className='' src="CUP.jpg" alt="" /></div>

              <div className='mx-2  my-4 w-28 ' ><img className='' src="IEEE.jpg" alt="" /></div>
              <div className='mx-2  my-4 w-28 ' ><img className='' src="CUP.jpg" alt="" /></div>

              <div className='mx-2  my-4 w-28 ' ><img className='' src="IEEE.jpg" alt="" /></div>
              <div className='mx-2  my-4 w-28 ' ><img className='' src="CUP.jpg" alt="" /></div>

              <div className='mx-2  my-4 w-28 ' ><img className='' src="IEEE.jpg" alt="" /></div>
              <div className='mx-2  my-4 w-28 ' ><img className='' src="CUP.jpg" alt="" /></div>
              <div className='mx-2  my-4 w-28 ' ><img className='' src="IEEE.jpg" alt="" /></div>
              <div className='mx-2  my-4 w-28 ' ><img className='' src="CUP.jpg" alt="" /></div>
              <div className='mx-2  my-4 w-28 ' ><img className='' src="IEEE.jpg" alt="" /></div>
              <div className='mx-2  my-4 w-28 ' ><img className='' src="CUP.jpg" alt="" /></div>

            </div>
          </marquee>
        </div>

      </div>
    </div>
  </>)
}