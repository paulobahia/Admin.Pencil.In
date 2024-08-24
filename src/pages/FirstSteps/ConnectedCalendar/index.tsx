import { Card, CardContent } from "@/components/ui/card"
import { GoogleCalendarSVG, AppleCalendar, OutlookCalendar } from '@/assets/svg'
import { NotionCalendar } from "@/assets/png"
import { Button } from "@/components/ui/button"
import { useNavigate } from "react-router-dom"

export const ConnectedCalendar = () => {
  const navigate = useNavigate();

  return (
    <main className="flex items-center justify-center min-h-screen antialiased bg-background">
      <div className="w-full max-w-xl mx-auto space-y-10 text-center">
        <div className="flex flex-col items-start px-12">
          <h1 className="mb-2 text-3xl font-bold">
            Sincronizar calendário
          </h1>
          <p className="mb-6 text-sm text-left text-muted-foreground">Sincronize seu calendário para verificar automaticamente horários ocupados e novos agendamentos em tempo real.</p>
          <div className="w-full max-w-md">
            <p className="mb-3 text-xs font-medium text-left text-muted-foreground">Step 1 de 3</p>
            <div className="flex justify-between gap-3">
              {[1, 2, 3].map((step) => (
                <div
                  key={step}
                  className={`h-1 w-1/3 ${step == 1 ? 'bg-foreground' : 'bg-muted'}`}
                />
              ))}
            </div>
          </div>
        </div>
        <Card className="pt-6 mx-5 rounded-md sm:mx-auto">
          <CardContent>
            <Card className="flex flex-row items-center justify-between p-4 rounded-md rounded-b-none">
              <div className="flex flex-row items-center space-x-3">
                <img className="size-7" src={GoogleCalendarSVG} alt="Google Calendar" />
                <span className="text-sm font-bold">Google Calendar</span>
              </div>
              <Button size={"sm"} variant={"outline"}>
                Conectar
              </Button>
            </Card>
            <Card className="flex flex-row items-center justify-between p-4 border-t-0 border-b-0 rounded-md rounded-t-none rounded-b-none">
              <div className="flex flex-row items-center space-x-3">
                <img className="size-7" src={OutlookCalendar} alt="Outlook Calendar" />
                <span className="text-sm font-bold">Outlook Calendar</span>
              </div>
              <Button size={"sm"} variant={"outline"}>
                Conectar
              </Button>
            </Card>
            <Card className="flex flex-row items-center justify-between p-4 rounded-md rounded-t-none">
              <div className="flex flex-row items-center space-x-3">
                <img className="size-7" src={AppleCalendar} alt="Apple Calendar" />
                <span className="text-sm font-bold">Apple Calendar</span>
              </div>
              <Button size={"sm"} variant={"outline"}>
                Conectar
              </Button>
            </Card>
            <Card className="flex flex-row items-center justify-between p-4 rounded-md rounded-t-none">
              <div className="flex flex-row items-center space-x-3">
                <img className="size-7" src={NotionCalendar} alt="Notion Calendar" />
                <span className="text-sm font-bold">Notion Calendar</span>
              </div>
              <Button size={"sm"} variant={"outline"}>
                Conectar
              </Button>
            </Card>
            <Button onClick={() => navigate('/first-steps/setup-availability')} size={"sm"} className="w-full mt-6">
              Próximo Passo
            </Button>
          </CardContent>
        </Card>
      </div>
    </main>
  )
}