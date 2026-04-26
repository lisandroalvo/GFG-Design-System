type CircularProgressProps = {
  className?: string;
  color?: "Primary";
  disableShrink?: "False";
  size?: "40";
  thickness?: "3.6";
  value?: "75";
  variant?: "Indeterminate";
};

function CircularProgress({ className, color = "Primary", disableShrink = "False", size = "40", thickness = "3.6", value = "75", variant = "Indeterminate" }: CircularProgressProps) {
  return (
    <div className={className || "relative size-[40px]"} data-node-id="11436:165300">
      <svg className="absolute inset-0 size-full" viewBox="22 22 44 44" data-node-id="11436:165301">
        <circle className="stroke-[var(--primary\/main,#1976d2)] stroke-[3.6px]" cx="44" cy="44" r="20.2" fill="none" strokeDasharray="80px, 200px" data-node-id="11436:165302" />
      </svg>
    </div>
  );
}

export default CircularProgress;
