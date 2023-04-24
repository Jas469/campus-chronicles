import {BiLogIn} from 'react-icons/bi'
import Navbar from '../components/navbar'
import { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import cookie from 'js-cookie'
// import './toast.css';
import 'react-toastify/dist/ReactToastify.css';
export default function Login(){
    const [user, setuser] = useState()
    const [password, setpassword] = useState()
    const [profession, setprofession] = useState('')
    const authenticate=async(e)=>{
        e.preventDefault();
const data={user,password,profession}
console.log(profession,user,password);
const res=await fetch('http://localhost:3000/api/login', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                },
                body:JSON.stringify(data),
              })
              let response=await res.json();
if(response.error){
    toast.warning('Invaild email address or password', {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        
        });
    // console.log("error");
}
else{
    toast.success('Login successfully', {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        
        });
        // setspinner('w-full flex justify-center mt-3');
    //   setTimeout(() => {
    //     let cok=cookie.get('oldpath');
    //     Router.push(cok);
    //     setspinner('hidden')
    //   }, 3000);
      cookie.set('token',response.token);
}
    //    setuser('')
    //    setpassword('')
    //    setprofession('')
    }
    return(<>
    <div className='bg-slate-500  w-full h-screen'>
        <Navbar/>
        <ToastContainer
    position="top-right"
    autoClose={1000}
    hideProgressBar={false}
    newestOnTop={false}
    closeOnClick
    rtl={false}
    pauseOnFocusLoss
    draggable
    pauseOnHover
    />
    <div className="  h-[60%] w-[50%] mx-auto   bg-white rounded-lg shadow-xl shadow-blue-300 my-20">
        <div className='flex justify-around  h-full'>
            <div className='w-[50%]  flex justify-center items-center'>
                <img src="/login_side.jpg" alt="" />
            </div>
                <div className="flex-col w-[50%] text-white bg-blue-500 rounded-tr-lg rounded-br-lg h-[100%] py-2 px-3  text-xs space-y-1">
                <div className="font-mono  font-semibold text-2xl tracking-wide text-center">Login</div>

                <form action="" method="post">
                <div className='text-base  font-semibold '>User Id</div>
                <input type="text" value={user} onChange={(e)=>{setuser(e.target.value)}} className='outline  outline-1 px-2 rounded-sm py-[6px] w-full text-base text-blue-400 outline-gray-300' placeholder="Enter User Id" />
                <div className='mt-2   font-semibold text-base'>Password</div>
                <input type="text" value={password} onChange={(e)=>{setpassword(e.target.value)}} className='outline outline-1 rounded-sm py-[6px] px-2 w-full text-base text-blue-400 outline-gray-300' placeholder="Enter Password" />
                
                <div className='mt-2   font-semibold text-base'>Login As</div>
                <select value={profession}  onChange={(e)=>(setprofession(e.target.value))} name="profession"   className=" outline cursor-pointer outline-1 px-2 rounded-sm py-[6px] w-full text-base text-gray-400 outline-gray-300">
  <option className="" value="">--SELECT--</option >
  <option className="" value="Student">Student</option >
  <option className="" value="Faculty">Faculty</option >
  <option className="" value="Librarian">Librarian</option >
  <option className="" value="Club Admin">Club Admin</option >
</select>
                <button onClick={authenticate} className='flex bg-yellow-400 text-blue-500 font-semibold w-full justify-center py-[6px] rounded-md mt-4 space-x-1 items-center'><BiLogIn className=' text-lg mt-[2px] text-blue-500' /> <div className='flex text-base'> Login</div>
                </button>
                </form>
                </div>
                </div>
    </div>
    </div>
    </>)
}

// mongodb+srv://davindergiri:davinder@cluster0.ohricxd.mongodb.net/test