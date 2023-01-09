import { JSX } from "preact";


export default function NavigationBar(
    props: { active: string; class?: string; },
  ) {
    const items = [
      {
        name: "Home",
        href: "/",
      },
      {
        name: "2",
        href: "/asdf",
      }
    ];

    return (
      <nav class='h-full bg-[#07031f] w-1/8'>
        <ul class=" mt-6 p-6 text-[#fffeeb] flex items-center gap-12 flex-col">
          {items.map((item) => (

            <li>
              <a
                href={item.href}
                class={`p-2 hover:underline text-[#fffdd9]
                text-2xl
                ${ props.active == item.href ? "font-bold" : ""}
                  `}
              >
                {item.name}
              </a>
            </li>
          )
          )}
        </ul>
      </nav>
    );
  }