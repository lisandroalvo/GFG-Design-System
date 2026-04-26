type ToolbarProps = {
  className?: string;
  variant?: "Regular";
};

function Toolbar({ className, variant = "Regular" }: ToolbarProps) {
  return (
    <div className={className || "content-stretch flex items-center min-h-[56px] px-[16px] py-[8px] relative w-[600px]"} data-node-id="6583:46346">
      <div className="flex-[1_0_0] min-w-px" data-node-id="6583:46347" data-name="Main" />
    </div>
  );
}

export default Toolbar;
