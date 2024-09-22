import { Editor } from "@/components"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { MultiSelect } from "@/components/ui/multi-select"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import { ArrowDownCircle, ArrowLeft, Edit2, Trash } from "lucide-react"
import { useState } from "react"
import { Link } from "react-router-dom"

const modelList = [
  { value: "1", label: "Modelo Padrão" },
  { value: "2", label: "Modelo de Teste" },
];

export const CreatedAutomation = () => {
  const [selectedFrameworks, setSelectedFrameworks] = useState<string[]>();
  const [trigger, setTrigger] = useState('')
  const [action, setAction] = useState('')

  return (
    <main className="flex flex-col flex-1 px-2 pt-4 antialiased bg-background lg:p-6">
      <div className="flex flex-row items-center gap-x-2">
        <Link to={'/automations'}>
          <Button variant={'ghost'} size={'icon'}>
            <ArrowLeft size={14} />
          </Button>
        </Link>
        <div>
          <p className="text-xl font-semibold">
            Adicionar nova automação
          </p>
          <span className="text-sm font-normal text-muted-foreground">
            Adicione uma nova automação para ser associada a seu modelo no estúdio.
          </span>
        </div>
      </div>
      <div className="grid items-start flex-1 gap-4 p-2 mt-6 md:p-4 sm:px-6 sm:py-0 md:gap-8 lg:grid-cols-3 xl:grid-cols-3">
        <Card>
          <CardHeader className="flex flex-row items-start bg-muted/50">
            <div className="grid gap-0.5">
              <CardTitle className="flex items-center gap-2 text-lg group">
                Automação Padrão
                <Button
                  size="icon"
                  variant="outline"
                  className="w-6 h-6 transition-opacity opacity-0 group-hover:opacity-100"
                >
                  <Edit2 className="w-3 h-3" />
                  <span className="sr-only">Editar Automação</span>
                </Button>
              </CardTitle>
              <CardDescription>Date: November 23, 2023</CardDescription>
            </div>
          </CardHeader>
          <CardContent className="p-6 space-y-3 text-sm">
            <div className="flex flex-col gap-y-3">
              <Label>
                Associar modelos a essa automação
              </Label>
              <MultiSelect
                options={modelList}
                onValueChange={setSelectedFrameworks}
                defaultValue={selectedFrameworks}
                placeholder="Selecione..."
                variant="inverted"
              />
            </div>
            <Button className="w-full" variant={'default'}>
              Salvar
            </Button>
            <Button className="flex flex-row items-center justify-center w-full text-destructive-foreground hover:bg-destructive/90 gap-x-2" variant={'outline'}>
              <Trash size={15} />
              Excluir automação
            </Button>
          </CardContent>
        </Card>
        <Card className="grid items-start p-5 gap-y-3 auto-rows-max lg:col-span-2">
          <Card className="p-6">
            <CardHeader className="p-0">
              <div className="flex flex-col items-start gap-y-2">
                <span className="text-lg font-bold leading-none tracking-tight">
                  Gatilho
                </span>
                <span className="text-sm font-normal leading-none tracking-tight text-muted-foreground">
                  Ato que provoca o disparo de todas as ações
                </span>
              </div>
            </CardHeader>
            <Separator className="my-6" />
            <div className="flex flex-col gap-y-3">
              <Label>
                Quando
              </Label>
              <Select value={trigger} onValueChange={setTrigger}>
                <SelectTrigger
                  className="rounded-sm sm:ml-auto"
                  aria-label="Selecione um gatilho"
                >
                  <SelectValue placeholder="Selecione um  gatilho" />
                </SelectTrigger>
                <SelectContent className="rounded-xl">
                  <SelectItem value="1" className="rounded-sm">
                    Ao criar um novo agendamento
                  </SelectItem>
                  <SelectItem value="2" className="rounded-sm">
                    Ao ser cancelado o agendamento
                  </SelectItem>
                  <SelectItem value="3" className="rounded-sm">
                    Antes do início do agendamento
                  </SelectItem>
                  <SelectItem value="4" className="rounded-sm">
                    Após o término do agendamento
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>
            {
              (trigger == '3' || trigger == '4') &&
              <div className="flex flex-col mt-3 gap-y-3">
                <Label>
                  Quanto tempo após o do agendamento?
                </Label>
                <div className="flex flex-row items-center">
                  <Input className="border-r-0 rounded-r-none" type="number" />
                  <Select>
                    <SelectTrigger
                      className="rounded-sm rounded-l-none w-min bg-muted/50 sm:ml-auto">
                      <SelectValue placeholder="horas" />
                    </SelectTrigger>
                    <SelectContent className="rounded-xl">
                      <SelectItem value="1" className="rounded-sm">
                        dias
                      </SelectItem>
                      <SelectItem value="3" className="rounded-sm">
                        horas
                      </SelectItem>
                      <SelectItem value="2" className="rounded-sm">
                        minutos
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            }
          </Card>
          <ArrowDownCircle size={18} className="w-full text-center text-muted-foreground" />
          <Card className="p-6">
            <CardHeader className="p-0">
              <div className="flex flex-col items-start gap-y-2">
                <span className="text-lg font-bold leading-none tracking-tight">
                  Ação
                </span>
                <span className="text-sm font-normal leading-none tracking-tight text-muted-foreground">
                  Defina a ação a ser realizada após o disparo do gatilho
                </span>
              </div>
            </CardHeader>
            <Separator className="my-6" />
            <div className="flex flex-col gap-y-3">
              <Label>
                Ação a ser realizada
              </Label>
              <Select value={action} onValueChange={setAction}>
                <SelectTrigger
                  className="rounded-sm sm:ml-auto"
                >
                  <SelectValue placeholder='Selecione um ação' />
                </SelectTrigger>
                <SelectContent className="w-full rounded-xl">
                  <SelectItem value="1" className="rounded-sm">
                    Enviar e-mail para o cliente
                  </SelectItem>
                  <SelectItem value="2" className="rounded-sm">
                    Enviar e-mail para o fúncionario
                  </SelectItem>
                  <SelectItem value="3" className="rounded-sm">
                    Enviar e-mail para um endereço específico
                  </SelectItem>
                  <SelectItem disabled value="4" className="rounded-sm">
                    Enviar SMS para o cliente
                  </SelectItem>
                  <SelectItem disabled value="5" className="rounded-sm">
                    Enviar SMS para um número específico
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>
            {
              action != '' &&
              <Card className="flex flex-col items-start p-4 mt-6 gap-y-3 md:px-6 md:py-4 bg-muted/50">
                <div className="flex flex-col w-full gap-y-3">
                  <Label>
                    Assunto
                  </Label>
                  <Input className="border-r-0 rounded-r-none" type="text" />
                </div>
                <div className="flex flex-col w-full gap-y-3">
                  <Label>
                    Corpo do e-mail
                  </Label>
                  <Editor value="" onChange={() => console.log()} />
                </div>
              </Card>
            }
          </Card>
          <ArrowDownCircle size={18} className="w-full text-center text-muted-foreground" />
          <div className="flex items-center justify-center w-full">
            <Button variant={'outline'}>
              Nova ação
            </Button>
          </div>
        </Card>
      </div>
    </main >
  )
}