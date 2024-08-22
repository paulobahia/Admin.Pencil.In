import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export const LoginForm = () => {
  return (
    <div className="w-full max-w-md mx-auto">
      <div className="px-4 py-10 mx-2 sm:px-10">
        <div className="space-y-5">
          <div className="flex flex-col gap-2">
            <Label htmlFor="email">Email</Label>
            <Input type="email" id="email" placeholder="john.doe@example.com" className="text-xs border" />
          </div>
          <div className="flex flex-col gap-2">
            <Label htmlFor="password">Senha</Label>
            <Input type="password" id="password" placeholder="•••••••••••••" className="text-xs" />
            <div className='flex justify-start w-full'>
              <p className='text-xs font-semibold text-white cursor-pointer text-end hover:underline-offset-1'>
                <div className="cursor-pointer">
                  Esqueceu a senha?
                </div>
              </p>
            </div>
          </div>
          <div>
            <Button size={'sm'} className="bg-[#6D28D9] hover:bg-[#6D28D9]/50 text-white w-full">
              Iniciar sessão
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}