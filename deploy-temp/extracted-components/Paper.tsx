type PaperProps = {
  className?: string;
  elevation?: "0";
  square?: "False";
  variant?: "Elevation";
};

function Paper({ className, elevation = "0", square = "False", variant = "Elevation" }: PaperProps) {
  return (
    <div className={className || "bg-[var(--_components\\/paper\\/elevation-0,white)] content-stretch flex flex-col h-[128px] items-start relative rounded-[var(--borderradius,4px)] w-[128px]"} data-node-id="899:94814">
      <div className="flex-[1_0_0] min-h-px w-full" data-node-id="899:94815" data-name="Main" />
    </div>
  );
}

export default Paper;
