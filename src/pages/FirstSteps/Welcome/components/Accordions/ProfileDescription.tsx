import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Textarea } from "@/components/ui/textarea"
import { ProfileDescriptionSchema } from "@/schemas/profileDescriptionFormSchema"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

export const ProfileDescriptionAccordion = () => {

  const form = useForm<z.infer<typeof ProfileDescriptionSchema>>({
    resolver: zodResolver(ProfileDescriptionSchema),
    defaultValues: {
      description: ''
    },
  })

  function onSubmit({ }: z.infer<typeof ProfileDescriptionSchema>) { }

  return (
    <Accordion type="single" collapsible className="w-full border rounded-lg">
      <AccordionItem value="profile-description">
        <AccordionTrigger className="px-5">
          <div className="flex items-center justify-between w-full">
            <div>
              <h2 className="font-semibold text-left">Descrição do Perfil</h2>
              <p className="text-sm text-left text-muted-foreground">Uma breve descrição sobre o seu estabelecimento juntamente com uma foto para assim dar forma a seu perfil</p>
            </div>
          </div>
        </AccordionTrigger>
        <AccordionContent className="flex flex-col px-6 pt-3 gap-y-3">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
              <div className="flex flex-col items-center gap-5 py-3 md:flex-row">
                <Avatar className="size-20">
                  <AvatarImage src="https://github.com/paulobahia.png" alt="user-image" />
                  <AvatarFallback>FB</AvatarFallback>
                </Avatar>
                <Button variant={'outline'} className="font-semibold text-white">Adicionar foto de perfil</Button>
              </div>
              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      Sobre
                    </FormLabel>
                    <FormControl>
                      <Textarea placeholder="" {...field} />
                    </FormControl>
                    <FormMessage className="text-xs font-semibold" />
                    <FormDescription>
                      Fale um pouco sobre você e sua equipe. Essa informação ficara disponivel na página princial do seu perfil.
                    </FormDescription>
                  </FormItem>
                )}
              />
              <Button type="submit" className="w-full mt-2 text-white bg-violet-700 hover:bg-violet-600">Salvar</Button>
            </form>
          </Form>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}