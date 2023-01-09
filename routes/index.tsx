import { Head } from "$fresh/runtime.ts";
import Counter from "../islands/Counter.tsx";
import Navbar from "../components/Navbar.tsx";

export default function Home() {
  return (
    <div class='w-full h-screen bg-[#00072D] flex text-[#fffdd9] '>
      <Head>
        <title>Fresh App</title>
      </Head>
      {/*max-w-screen-lg*/}
      <Navbar  />
      <div class="p-4 bg-red-200 bg-opacity-20 flex flex-wrap mx-auto w-3/4">
    <div class="my-6 h-10 w-1/2 text-4xl">
        <h1 >
          Some sort of title
        </h1>
        <h3 class="mt-5 text-lg"> description asdfasadfasdfasdfasdfasdfasdf 
        asdfasdfsadf asdfasdf asdfasd fasdf asdfsadf asdfasdfasdfasdf asdf
        sdfasdfasdfasdfasdfasdfasdfasdfasdfasdf</h3> 
        </div>
        <div class='bg-blue-900 w-1/2 h-1/4'> add something like logo idk</div>
       
        
        
      </div>
      
    </div>
  );
}
