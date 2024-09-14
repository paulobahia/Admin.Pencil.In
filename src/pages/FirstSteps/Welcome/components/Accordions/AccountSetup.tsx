import { SelectTimeZone } from "@/components"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { AccountSetupFormSchema } from "@/schemas/accountSetupFormSchema"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

export const AccountSetupAccordion = () => {

  const form = useForm<z.infer<typeof AccountSetupFormSchema>>({
    resolver: zodResolver(AccountSetupFormSchema),
    defaultValues: {
      name: '',
      userName: '',
      timeZone: ''
    },
  })

  function onSubmit({ }: z.infer<typeof AccountSetupFormSchema>) { }

  return (
    <Accordion type="single" collapsible className="w-full border rounded-lg">
      <AccordionItem value="account-setup">
        <AccordionTrigger className="px-5">
          <div className="flex items-center justify-between w-full">
            <div>
              <h2 className="font-semibold text-left">Informações da Conta</h2>
              <p className="text-sm text-left text-muted-foreground">Usaremos essas informações para disponibilizar o acesso para seus clientes e configura sua agenda.</p>
            </div>
          </div>
        </AccordionTrigger>
        <AccordionContent className="flex flex-col px-6 pt-3 gap-y-3">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
              <FormField
                control={form.control}
                name="userName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      Email
                    </FormLabel>
                    <FormControl>
                      <div className="flex">
                        <Input className="hidden pr-0 rounded-r-none w-fit sm:block" disabled placeholder="Pencil.In.com.br/" />
                        <Input className="rounded-l-none" type="text" placeholder="my-barber-shop" {...field} />
                      </div>
                    </FormControl>
                    <FormMessage className="text-xs font-semibold" />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      Nome Completo
                    </FormLabel>
                    <FormControl>
                      <Input type="text" placeholder="Paulo Henrique Bahia Silva" {...field} />
                    </FormControl>
                    <FormMessage className="text-xs font-semibold" />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="timeZone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      Fuso Hórario
                    </FormLabel>
                    <SelectTimeZone field={field} />
                    <FormMessage className="text-xs font-semibold" />
                  </FormItem>
                )}
              />
              <Button type="submit" className="w-full mt-2 text-white ">Salvar</Button>
            </form>
          </Form>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}