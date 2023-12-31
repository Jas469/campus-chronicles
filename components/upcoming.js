import { FaRegCalendarAlt } from 'react-icons/fa'
export default function Upcomingevents() {
    return (<>
        <div className="flex-col p-3 xsm:w-[100%] xsm:mt-3 ">
            <div className="flex">
                <div className='text-xl xsm:text-2xl font-bold w-[70%]'>Upcoming Events</div>
                <div className='flex justify-between w-[30%]'>
                <FaRegCalendarAlt className=' mt-1 text-2xl' />
                <button className='ml-1 text-xs bg-black text-white rounded-sm px-1 py-[1px] mt-1 flex right-0'>VIEW ALL</button>
            </div>
            </div>
            <div className='text-sm xsm:text-xs'>PROGRAMS ON PLATTER</div>
            <div><img className='w-36 ml-1 mb-3' src="hr.png" alt="" /></div>
            <div className='flex-col  divide-y-4 space-y-3 xsm:space-y-4 xsm:divide-y-2'>
                <div className='flex-col'>
                    <div className='text-base mt-2 font-semibold xsm:text-sm'>Cognizant Regional Council - Tech Talk on 7th july, 2023 , 5 - 6:30 pm</div>
                    <div className='flex text-sm  xsm:text-xs'><FaRegCalendarAlt className='mt-[3px] mr-1' /> June 20, 2023</div>
                </div>
                <div className='flex-col'>
                    <div className='text-base mt-2 font-semibold xsm:text-sm'>Talk on career Opportunities on 10th July, 2023 , 10 - 11:30 am</div>
                    <div className='flex text-sm  xsm:text-xs'><FaRegCalendarAlt className='mt-[3px] mr-1' /> June 22, 2023</div>
                </div>
                <div className='flex-col'>
                    <div className='text-base mt-2 font-semibold xsm:text-sm'>Independence Day event on 14th August 2023 , 10 - 2:00 pm</div>
                    <div className='flex text-sm  xsm:text-xs'><FaRegCalendarAlt className='mt-[3px] mr-1' /> July 2, 2023</div>
                </div>

            </div>
        </div>
    </>)
}