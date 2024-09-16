import { Button } from "@/components/ui/button"
import { DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export const DialogAddAvailability = () => {
  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Adicionar nova disponibilidade</DialogTitle>
        <DialogDescription>
          O nome informado servirá para identificar o grupo de horários em que você estará disponível.
        </DialogDescription>
      </DialogHeader>
      <div className="flex flex-col gap-3 mt-3">
        <Label htmlFor="name" className="text-left">
          Nome
        </Label>
        <Input
          id="name"
          placeholder="Hórarios de agendamento"
          className="col-span-3"
        />
      </div>
      <DialogFooter className="flex items-center w-full gap-2 sm:justify-between">
        <Button className="w-full sm:w-fit" variant={'outline'}>Cancelar</Button>
        <Button className="w-full sm:w-fit">Continuar</Button>
      </DialogFooter>
    </DialogContent>
  )
}