'use client'

import { usePathname } from 'next/navigation'
import {
  Command,
  CommandItem,
  CommandList,
  CommandGroup,
} from '@/components/ui/command'
import { Home, RiskIcon } from '@/components/Social'
import Link from 'next/link'

export default function Sidebar() {
  const pathname = usePathname()

  const menuList = [
    {
      group: 'General',
      items: [
        {
          link: '/dashboard',
          text: 'Home',
          icon: <Home />,
        },
        {
          link: '/dashboard/risk',
          text: 'Risk',
          icon: <RiskIcon />,
        },
      ],
    },
  ]

  const iconMap = {
    Home: Home,
    RiskIcon: RiskIcon,
  }

  if (pathname === '/' && pathname === '/sign-in' && pathname === '/sign-up') {
    return null
  }

  return (
    <section className="fixed flex flex-col gap-3 w-[250px] min-h-media p-4">
      <div className="grow">
        <Command style={{ overflow: 'visible' }}>
          <CommandList style={{ overflow: 'visible' }}>
            {menuList &&
              menuList.map((menu, index) => (
                <CommandGroup heading={menu.group} key={index}>
                  {/* HOME COMMAND */}
                  {menu.items &&
                    menu.items.map((item, itemKey) => (
                      <Link href={item.link} key={itemKey}>
                        <CommandItem className="py-4 px-5 flex items-center gap-2 cursor-pointer">
                          {item.icon}
                          <span className="text-[16px]">{item.text}</span>
                        </CommandItem>
                      </Link>
                    ))}
                </CommandGroup>
              ))}
          </CommandList>
        </Command>
      </div>
    </section>
  )
}
