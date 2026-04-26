type ContainerProps = {
  className?: string;
  disableGutters?: "True";
  maxWidth?: "Extra Small";
};

function Container({ className, disableGutters = "True", maxWidth = "Extra Small" }: ContainerProps) {
  return (
    <div className={className || "bg-[var(--background\\/default,white)] content-stretch flex flex-col h-[800px] items-start max-w-[444px] min-w-[444px] relative w-[var(--xs,444px)]"} data-node-id="899:99329">
      <div className="flex-[1_0_0] min-h-px w-full" data-node-id="899:99330" data-name="Main" />
    </div>
  );
}

export default Container;
