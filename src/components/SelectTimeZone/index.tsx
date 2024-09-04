import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { FormControl } from "../ui/form"
import { ControllerRenderProps } from "react-hook-form";

interface SelectTimeZoneProps {
  field: ControllerRenderProps<{
    userName: string;
    name: string;
    timeZone: string;
  }, "timeZone">
}

export const SelectTimeZone: React.FC<SelectTimeZoneProps> = ({ field }) => {
  return (
    <Select onValueChange={field.onChange} defaultValue={field.value}>
      <FormControl>
        <SelectTrigger >
          <SelectValue placeholder="Selecionar Fuso Hórario" />
        </SelectTrigger>
      </FormControl>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>América do Norte</SelectLabel>
          <SelectItem value="est">Fuso Hórario do Leste (EST)</SelectItem>
          <SelectItem value="cst">Fuso Hórario Central (CST)</SelectItem>
          <SelectItem value="mst">Fuso Hórario das Montanhas (MST)</SelectItem>
          <SelectItem value="pst">Fuso Hórario do Pacífico (PST)</SelectItem>
          <SelectItem value="akst">Fuso Hórario do Alasca (AKST)</SelectItem>
          <SelectItem value="hst">Fuso Hórario do Havai (HST)</SelectItem>
        </SelectGroup>
        <SelectGroup>
          <SelectLabel>Europa & África</SelectLabel>
          <SelectItem value="gmt">Fuso Hórario de Greenwich (GMT)</SelectItem>
          <SelectItem value="cet">Fuso Hórario da Europa Central (CET)</SelectItem>
          <SelectItem value="eet">Fuso Hórario da Europa Oriental (EET)</SelectItem>
          <SelectItem value="west">Fuso Hórario de Verão da Europa Ocidental (WEST)</SelectItem>
          <SelectItem value="cat">Fuso Hórario da África Central (CAT)</SelectItem>
          <SelectItem value="eat">Fuso Hórario da África Oriental (EAT)</SelectItem>
        </SelectGroup>
        <SelectGroup>
          <SelectLabel>Ásia</SelectLabel>
          <SelectItem value="msk">Fuso Hórario de Moscovo (MSK)</SelectItem>
          <SelectItem value="ist">Fuso Hórario da Índia (IST)</SelectItem>
          <SelectItem value="cst_china">Fuso Hórario da China (CST)</SelectItem>
          <SelectItem value="jst">Fuso Hórario do Japão (JST)</SelectItem>
          <SelectItem value="kst">Fuso Hórario da Coreia (KST)</SelectItem>
          <SelectItem value="ist_indonesia">Fuso Hórario Central da Indonésia (WITA)</SelectItem>
        </SelectGroup>
        <SelectGroup>
          <SelectLabel>Austrália & Pacífico</SelectLabel>
          <SelectItem value="awst">Fuso Hórario da Austrália Ocidental (AWST)</SelectItem>
          <SelectItem value="acst">Fuso Hórario da Austrália Central (ACST)</SelectItem>
          <SelectItem value="aest">Fuso Hórario da Austrália Oriental (AEST)</SelectItem>
          <SelectItem value="nzst">Fuso Hórario da Nova Zelândia (NZST)</SelectItem>
          <SelectItem value="fjt">Fuso Hórario das Fiji (FJT)</SelectItem>
        </SelectGroup>
        <SelectGroup>
          <SelectLabel>América do Sul</SelectLabel>
          <SelectItem value="art">Fuso Hórario da Argentina (ART)</SelectItem>
          <SelectItem value="bot">Fuso Hórario da Bolívia (BOT)</SelectItem>
          <SelectItem value="brt">Fuso Hórario de Brasília (BRT)</SelectItem>
          <SelectItem value="clt">Fuso Hórario do Chile (CLT)</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}
