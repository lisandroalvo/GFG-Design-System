type LinearProgressProps = {
  className?: string;
  color?: "Primary";
  value?: "Number";
  valueBuffer?: "Number";
  variant?: "Indeterminate";
};

function LinearProgress({ className, color = "Primary", value = "Number", valueBuffer = "Number", variant = "Indeterminate" }: LinearProgressProps) {
  return (
    <div className={className || "bg-[var(--primary\/_states\/filled,rgba(25,118,210,0.12))] content-stretch flex flex-col items-start overflow-clip relative rounded-[var(--borderradius,4px)] w-[200px]"} data-node-id="11436:165303">
      <div className="bg-[var(--primary\/main,#1976d2)] h-[4px] relative w-[calc(50%-2px)]" data-node-id="11436:165304" data-name="Bar1" />
    </div>
  );
}

export default LinearProgress;
