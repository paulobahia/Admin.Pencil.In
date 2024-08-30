interface StepIndicatorProps {
  currentStep: number;
}

export const StepIndicator: React.FC<StepIndicatorProps> = ({ currentStep }) => (
  <div className="flex justify-between gap-3">
    {[1, 2, 3].map((step) => (
      <div
        key={step}
        className={`h-1 w-1/3 ${step === currentStep ? 'bg-foreground' : 'bg-muted'}`}
      />
    ))}
  </div>
);