import { Head } from "$fresh/runtime.ts";
import Counter from "../islands/Counter.tsx";
import Navbar from "../components/Navbar.tsx";
import Links from "../components/links.tsx";

export default function Home() {
  return (
    <div class='w-full h-screen bg-[#00072D] flex text-[#fffdd9] '>
      <Head>
        <title>Fresh App</title>
      </Head>
      {/*max-w-screen-lg*/}
      <Navbar  />
      <div class="p-4 gap-10 bg-opacity-20 flex flex-wrap mx-auto w-3/4">
    <div class="my-6 h-10 w-5/12 text-4xl">
        <h1 >
          Connor Griffin 
        </h1>
        <Links />
        <h3 class="mt-5 text-lg"> I do the school and the yes</h3> 
        </div>
        <div class='bg-blue-900 w-5/12 h-1/4'> add something like logo idk</div>
       
        
        
      </div>
      
    </div>
  );
}
