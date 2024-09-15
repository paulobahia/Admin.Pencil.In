import { Button } from "@/components/ui/button"
import { Calendar, Clock, Search, Settings, Users, Zap, LucideLineChart, ClipboardPen } from "lucide-react"
import { Link, Outlet, useLocation } from "react-router-dom"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { NavDasboardItem } from "./types"

const navItems: NavDasboardItem[] = [
  {
    label: 'Meu estúdio',
    path: '/my-studio',
    icon: <ClipboardPen size={16} />
  },
  {
    label: 'Agendamentos',
    path: '/bookings',
    icon: <Calendar size={16} />
  },
  {
    label: 'Disponibilidades',
    path: '/availability',
    icon: <Clock size={16} />
  },
  {
    label: 'Equipe',
    path: '/team',
    icon: <Users size={16} />
  },
  {
    label: 'Automações',
    path: '/automations',
    icon: <Zap size={16} />
  },
  {
    label: 'Análise',
    path: '/insights',
    icon: <LucideLineChart size={16} />
  }
]

export const DashboardLayout = () => {
  const location = useLocation();

  return (
    <main className="flex min-h-screen antialiased bg-background">
      <div className="relative">
        <div className="fixed left-0 flex-col hidden h-full max-h-screen overflow-x-hidden overflow-y-auto border border-r w-14 md:sticky md:flex lg:w-56 lg:px-3">
          <div className="flex flex-col justify-between h-full py-3 lg:pt-4">
            <header className="flex flex-row items-center justify-between md:hidden lg:flex">
              <h2 className="text-lg font-semibold tracking-tight">
                Pencil.In
              </h2>
              <TooltipProvider>
                <Tooltip delayDuration={300}>
                  <TooltipTrigger asChild>
                    <Button variant={'ghost'} size={'icon'}>
                      <Search size={'16'} />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent side="right" className="text-black bg-white">
                    <p className="text-xs font-semibold">CTRL + K</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </header>
            <nav className="flex-1 mt-2 md:px-2 lg:mt-4 lg:px-0">
              {navItems.map((item) => (
                <Link key={item.path} to={item.path}>
                  <Button
                    size={'sm'}
                    variant={location.pathname === item.path ? 'secondary' : 'ghost'}
                    className="flex flex-row justify-start w-full my-1 text-xs gap-x-2">
                    {item.icon}
                    <span className="hidden text-[13px] lg:flex">
                      {item.label}
                    </span>
                  </Button>
                </Link>
              ))}
            </nav>
          </div>
          <div >
            <Link to="/settings/my-account/profile">
              <Button size={'sm'} variant={location.pathname === '/settings' ? 'secondary' : 'ghost'} className="flex flex-row justify-center w-full text-xs lg:justify-start gap-x-2">
                <Settings size={'16'} />
                <span className="hidden text-[13px] lg:flex ">
                  Configurações
                </span>
              </Button>
            </Link>
            <small className="text-default mx-3 mb-2 mt-1 hidden text-[0.5rem] opacity-50 lg:block">
              © 2024 Pencil.In, Inc. v.1.0.0
            </small>
          </div>
        </div>
      </div>
      <div className="w-full p-4 lg:p-6">
        <Outlet />
      </div>
    </main>
  )
}