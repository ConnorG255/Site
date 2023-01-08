import { Head } from "$fresh/runtime.ts";
import Counter from "../islands/Counter.tsx";
import Navbar from "../components/Navbar.tsx";

export default function Home() {
  return (
    <div class='w-full h-screen bg-[#0a011a] flex text-[#fefff7] '>
      <Head>
        <title>Fresh App</title>
      </Head>
      <Navbar title="" active="/" />
      <div class="p-4 mx-auto max-w-screen-lg">

        <p class="my-6">
          Welcome to `fresh`. Try updating this message in the ./routes/index.tsx
          file, and refresh.
        </p>
        <Counter start={3} />
      </div>
    </div>
  );
}
