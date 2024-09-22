import { Button } from "@/components/ui/button"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { cn } from "@/lib/utils";

interface TooltipButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  description: string;
  variant?: 'default' | 'outline' | 'destructive';
  icon: JSX.Element;
}

export const TooltipButton: React.FC<TooltipButtonProps> = ({ description, variant = 'default', icon, className }) => {
  const variantClasses = {
    default: "text-primary bg-violet-700 hover:bg-violet-700/90",
    destructive: "text-destructive-foreground hover:bg-destructive/90",
    outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
  };

  return (
    <TooltipProvider>
      <Tooltip delayDuration={300}>
        <TooltipTrigger asChild>
          <Button size={'icon'} variant={'outline'} className={cn(className, variantClasses[variant])}>
            {icon}
          </Button>
        </TooltipTrigger>
        <TooltipContent side="top" className="text-black bg-white">
          <p className="text-xs font-semibold">{description}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}