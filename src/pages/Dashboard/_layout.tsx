import { Button } from "@/components/ui/button"
import { Calendar, Clock, Search, Settings, Users, Zap, LucideLineChart, ClipboardPen, MoreHorizontal } from "lucide-react"
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
          <div>
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
      <div className="w-full p-4 pb-16 md:pb-0 lg:p-6">
        <Outlet />
      </div>
      <nav className="fixed bottom-0 left-0 z-30 flex justify-around w-full px-1 border-t shadow bg-muted border-subtle bg-opacity-40 backdrop-blur-md md:hidden">
        <Link to="/my-studio" className={`${location.pathname === '/my-studio' && 'text-white'} hover:text-default text-muted-foreground items-center flex flex-col relative my-2 min-w-0  overflow-hidden rounded-md !bg-transparent p-1 text-center text-xs font-medium focus:z-10 sm:text-sm`}>
          <ClipboardPen size={18} />
          <span className="block truncate">
            Estúdio
          </span>
        </Link>
        <Link to="/bookings" className={`${location.pathname === '/bookings' && 'text-white'} hover:text-default text-muted-foreground items-center flex flex-col relative my-2 min-w-0  overflow-hidden rounded-md !bg-transparent p-1 text-center text-xs font-medium focus:z-10 sm:text-sm`}>
          <Calendar size={18} />
          <span className="block truncate">
            Agendamento
          </span>
        </Link>
        <Link to="/availability" className={`${location.pathname === '/availability' && 'text-white'} hover:text-default text-muted-foreground items-center flex flex-col relative my-2 min-w-0  overflow-hidden rounded-md !bg-transparent p-1 text-center text-xs font-medium focus:z-10 sm:text-sm`}>
          <Clock size={18} />
          <span className="block truncate">
            Disponibilidade
          </span>
        </Link>
        <Link to="/team" className={`${location.pathname === '/team' && 'text-white'} hover:text-default text-muted-foreground items-center flex flex-col relative my-2 min-w-0  overflow-hidden rounded-md !bg-transparent p-1 text-center text-xs font-medium focus:z-10 sm:text-sm`}>
          <Users size={18} />
          <span className="block truncate">
            Equipe
          </span>
        </Link>
        <Link to="/more" className={`${location.pathname === '/more' && 'text-white'} hover:text-default text-muted-foreground items-center flex flex-col relative my-2 min-w-0  overflow-hidden rounded-md !bg-transparent p-1 text-center text-xs font-medium focus:z-10 sm:text-sm`}>
          <MoreHorizontal size={18} />
          <span className="block truncate">
            Mais
          </span>
        </Link>
      </nav>
    </main>
  )
}