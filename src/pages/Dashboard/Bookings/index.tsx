import { BookingTable } from "./components/BookingTable"

export const Bookings = () => {
  return (
    <main className="flex flex-col flex-1 antialiased bg-background">
      <div>
        <p className="text-xl font-semibold">
          Agendamentos
        </p>
        <span className="text-sm font-normal text-foreground">
          Gerencie os agendamentos do seu estabelecimento de forma fácil e eficiente
        </span>
      </div>
      <BookingTable />
    </main>
  )
}