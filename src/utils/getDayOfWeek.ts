import { format } from "date-fns";
import { ptBR } from 'date-fns/locale';

export function getDayOfWeekInEnglish(date: Date) {
  const daysOfWeek = [
    'Dom',
    'Seg',
    'Ter',
    'Qua',
    'Qui',
    'Sex',
    'Sáb'
  ]

  const dayOfWeek = format(date, 'i', { locale: ptBR });
  return daysOfWeek[parseInt(dayOfWeek, 10)];
}