import { JSX } from "preact";


export default function NavigationBar(
    props: { active: string; class?: string },
  ) {
    const items = [
      {
        name: "Random",
        href: "/asdf",
      },
      {
        name: "2",
        href: "/",
      }
    ];

    return (
      <nav class='h-full bg-red-900 w-1/8'>
        <ul class=" mt-20 text-white flex items-center gap-4 flex-col">
          {items.map((item) => (

            <li>
              <a
                href={item.href}
                class={`p-2 hover:underline text-[#fbffc9]
                text-lg
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