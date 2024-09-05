import { Button } from "@/components/ui/button"
import { ArrowLeft, CreditCard, Plus, Shield, UserRound, UsersRound } from "lucide-react"
import { Link, Outlet, useLocation } from "react-router-dom"
import { NavSettingsItem } from "./types"

const navProfileItems: NavSettingsItem[] = [
  {
    label: 'Perfil',
    icon: <UserRound size={'16'} />,
    subNavItem: [
      {
        label: 'Dados',
        path: '/settings/my-account/profile'
      },
      {
        label: 'Calendaríos',
        path: '/settings/my-account/calendars'
      },
      {
        label: 'Aparência',
        path: '/settings/my-account/appearance'
      },
      {
        label: 'Ausente',
        path: '/settings/my-account/out-of-office'
      }
    ]
  },
  {
    label: 'Segurança',
    icon: <Shield size={'16'} />,
    subNavItem: [
      {
        label: 'Senha',
        path: '/settings/security/password'
      },
      {
        label: 'Autenticação 2FA',
        path: '/settings/security/two-factor'
      }
    ]
  },
  {
    label: 'Faturamento',
    icon: <CreditCard size={'16'} />,
    subNavItem: [
      {
        label: 'Gerenciar faturamento',
        path: '/settings/billing'
      }
    ]
  }
]

export const SettingsLayout = () => {
  const location = useLocation();
  console.log(location)
  return (
    <main className="flex min-h-screen antialiased bg-background">
      <div className="relative">
        <div className="fixed left-0 flex-col hidden h-full max-h-screen overflow-x-hidden overflow-y-auto border border-r w-14 lg:sticky lg:flex lg:w-56 lg:px-3">
          <div className="flex flex-col justify-between h-full py-3 lg:pt-4">
            <Link to='/availability'>
              <Button size={'sm'} variant={'ghost'} className="flex flex-row items-center justify-start w-full gap-3">
                <ArrowLeft size={'16'} />
                <p className="font-semibold tracking-tight">
                  Voltar
                </p>
              </Button>
            </Link>
            <nav className="flex-1 mt-2 md:px-2 lg:mt-4 lg:px-0">
              {
                navProfileItems.map((item) => (
                  <>
                    <div key={item.label} className="flex flex-row items-center w-full px-2 text-sm font-medium leading-none rounded-md gap-x-2 text-default h-7 text-muted-foreground">
                      {item.icon}
                      <p className="text-sm font-medium leading-5 truncate text-subtle">
                        {item.label}
                      </p>
                    </div>
                    <div className="my-3 space-y-px ml-7">
                      {
                        item.subNavItem.map((sub) => (
                          <Link key={sub.path} to={sub.path}>
                            <Button size={'sm'} variant={location.pathname === sub.path ? 'secondary' : 'ghost'} className="justify-start w-full h-8 px-2 my-0.5">
                              <p className="text-sm font-medium">
                                {sub.label}
                              </p>
                            </Button>
                          </Link>
                        ))
                      }
                    </div>
                  </>
                ))
              }
              <div className="flex flex-row items-center w-full px-2 text-sm font-medium leading-none rounded-md gap-x-2 text-default h-7 text-muted-foreground">
                <UsersRound size={'16'} />
                <p className="text-sm font-medium leading-5 truncate text-subtle">
                  Equipe
                </p>
              </div>
              <div className="my-3 space-y-px">
                <Button size={'sm'} variant={'ghost'} className="flex items-center justify-start w-full h-8 gap-2 px-2">
                  <Plus size={'16'} />
                  <p className="text-sm font-medium">
                    Criar uma equipe
                  </p>
                </Button>
              </div>
            </nav>
          </div>
        </div>
      </div>
      <div className="max-w-full p-4 lg:p-6">
        <Outlet />
      </div>
    </main>
  )
}