type AppBarProps = {
  className?: string;
  color?: "Primary";
  position?: "Fixed";
};

function AppBar({ className, color = "Primary", position = "Fixed" }: AppBarProps) {
  return (
    <div className={className || "bg-[var(--primary\/main,#1976d2)] content-stretch flex flex-col items-start px-[16px] py-[8px] relative shadow-[0px_2px_4px_-1px_rgba(0,0,0,0.2),0px_4px_5px_0px_rgba(0,0,0,0.14),0px_1px_10px_0px_rgba(0,0,0,0.12)] w-[393px]"} data-node-id="6572:50224">
      <div className="content-stretch flex items-center min-h-[56px] relative shrink-0 w-full" data-node-id="I6572:50224;6583:46346" data-name="<Toolbar>">
        <div className="flex-[1_0_0] min-w-px" data-node-id="I6572:50224;6583:46347" data-name="Main" />
      </div>
    </div>
  );
}

export default AppBar;
