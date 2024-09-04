import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { LoginFormSchema } from "@/schemas/loginFormSchema"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Eye, EyeOff } from "lucide-react"
import { useState } from "react"

export const LoginForm = () => {
  const [typePassword, setTypePassword] = useState<string>("password")

  const form = useForm<z.infer<typeof LoginFormSchema>>({
    resolver: zodResolver(LoginFormSchema),
    defaultValues: {
      email: '',
      password: ''
    },
  })

  function togglePasswordVisibility() {
    setTypePassword(prevType => prevType === 'password' ? 'text' : 'password');
  }

  function onSubmit({ email, password }: z.infer<typeof LoginFormSchema>) { }

  return (
    <div className="w-full max-w-md mx-auto">
      <div className="px-4 py-10 mx-2 sm:px-10">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    Email
                  </FormLabel>
                  <FormControl>
                    <Input placeholder="john.doe@example.com" className="text-xs border" {...field} />
                  </FormControl>
                  <FormMessage className="text-xs font-semibold" />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    Senha
                  </FormLabel>
                  <FormControl>
                    <div className="relative">
                      <Input type={typePassword} placeholder="••••••••" className="text-xs border" {...field} />
                      <span onClick={togglePasswordVisibility} className="absolute inset-y-0 flex items-center cursor-pointer right-3">
                        {typePassword == 'password' ? <Eye size={'20'} /> : <EyeOff size={'20'} />}
                      </span>
                    </div>
                  </FormControl>
                  <FormMessage className="text-xs font-semibold" />
                </FormItem>
              )}
            />
            <div className="flex flex-col gap-2">
              <div className='flex justify-start w-full'>
                <p className='text-xs font-semibold text-white cursor-pointer text-end hover:underline-offset-1'>
                  <div className="cursor-pointer">
                    Esqueceu a senha?
                  </div>
                </p>
              </div>
            </div>
            <div>
              <Button type="submit" size={'sm'} className="bg-[#6D28D9] hover:bg-[#6D28D9]/50 text-white w-full">
                Iniciar sessão
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </div >
  )
}