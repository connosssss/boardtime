import { useState } from "preact/hooks";


export default function Lobby() {

    const [userName, setUserName] = useState("");
    const [code, setCode] = useState("00000000")



    const handleJoin = () =>{
        console.log("something")
    }



  return (
    <div class="w-full h-screen bg-red-300 flex justify-center">

        <div class="w-3/4 h-full bg-red-500 rounded-xl
        flex flex-col items-center gap-12 mt-14 ">
           
            <h1 class="text-4xl mt-8 font-semibold"> Title</h1>

            <div class="w-10/12 bg-slate-200 flex flex-col gap-6 text-center">
                <h2  class="text-3xl ">Username</h2>

                <input type="text" 
                    value={userName}  
                    onInput={(e) => setUserName(e.currentTarget.value)}    
                    class="h-[3rem] rounded-2xl p-5 text-center"      
                />


            </div>  
            <div class="w-10/12 bg-slate-200 flex flex-col gap-6 text-center">
                <h2  class="text-3xl ">Lobby Code</h2>

                <input type="text" 
                    value={code}  
                    onInput={(e) => setCode(e.currentTarget.value)}    
                    class="h-[3rem] rounded-2xl p-5 text-center"      
                />

                <button
                class="w-full h-[3rem] bg-emerald-300 rounded-2xl font-semibold
                "
                onClick={handleJoin}> Join Lobby</button>


            </div>



        </div>

    </div>
  );
}
