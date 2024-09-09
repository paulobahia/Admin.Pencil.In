import { Booking } from "@/pages/Dashboard/Bookings/types";
import { ColumnDef } from "@tanstack/react-table";

export const columns: ColumnDef<Booking>[] = [
  {
    accessorKey: "schedulingTime",
    header: "Data"
  },
  {
    accessorKey: "employee",
    header: "Funcionário",
  },
  {
    accessorKey: "user",
    header: "Cliente",
  },
  {
    accessorKey: "status",
    header: "Status",
  },
  {
    accessorKey: "services",
    header: "Procedimento",
  },
  {
    accessorKey: "x",
    header: "",
  },
]