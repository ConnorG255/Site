import { PageProps } from "$fresh/server.ts";
import Navbar from "../components/Navbar.tsx";


export default function Greet(props: PageProps) {
  return (<><div>Hello {props.params.name}</div>

        <p class='font-lg'>havent really done anything here :p</p>
        <Navbar active="/asdf" />
    </>
  )
}
