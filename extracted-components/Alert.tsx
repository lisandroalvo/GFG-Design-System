type Severity = "success" | "error" | "warning" | "info";
type Variant = "standard" | "filled" | "outlined";

type AlertProps = {
  className?: string;
  severity?: Severity;
  variant?: Variant;
  children?: React.ReactNode;
  onClose?: () => void;
};

const icons: Record<Severity, JSX.Element> = {
  success: (
    <svg className="size-[22px] shrink-0" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5l-4-4 1.41-1.41L10 13.67l6.59-6.59L18 8.5l-8 8z" />
    </svg>
  ),
  error: (
    <svg className="size-[22px] shrink-0" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z" />
    </svg>
  ),
  warning: (
    <svg className="size-[22px] shrink-0" viewBox="0 0 24 24" fill="currentColor">
      <path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z" />
    </svg>
  ),
  info: (
    <svg className="size-[22px] shrink-0" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" />
    </svg>
  ),
};

const styles: Record<Severity, Record<Variant, { root: string; icon: string; text: string }>> = {
  success: {
    standard: {
      root: "bg-[rgb(237,247,237)] border-0",
      icon: "text-[rgb(46,125,50)]",
      text: "text-[rgb(30,70,32)]",
    },
    filled: {
      root: "bg-[rgb(46,125,50)] border-0",
      icon: "text-white",
      text: "text-white",
    },
    outlined: {
      root: "bg-transparent border border-[rgb(46,125,50)]",
      icon: "text-[rgb(46,125,50)]",
      text: "text-[rgb(30,70,32)]",
    },
  },
  error: {
    standard: {
      root: "bg-[rgb(253,237,237)] border-0",
      icon: "text-[rgb(211,47,47)]",
      text: "text-[rgb(95,33,32)]",
    },
    filled: {
      root: "bg-[rgb(211,47,47)] border-0",
      icon: "text-white",
      text: "text-white",
    },
    outlined: {
      root: "bg-transparent border border-[rgb(211,47,47)]",
      icon: "text-[rgb(211,47,47)]",
      text: "text-[rgb(95,33,32)]",
    },
  },
  warning: {
    standard: {
      root: "bg-[rgb(255,244,229)] border-0",
      icon: "text-[rgb(237,108,2)]",
      text: "text-[rgb(102,60,0)]",
    },
    filled: {
      root: "bg-[rgb(237,108,2)] border-0",
      icon: "text-white",
      text: "text-white",
    },
    outlined: {
      root: "bg-transparent border border-[rgb(237,108,2)]",
      icon: "text-[rgb(237,108,2)]",
      text: "text-[rgb(102,60,0)]",
    },
  },
  info: {
    standard: {
      root: "bg-[rgb(229,246,253)] border-0",
      icon: "text-[rgb(2,136,209)]",
      text: "text-[rgb(1,67,97)]",
    },
    filled: {
      root: "bg-[rgb(2,136,209)] border-0",
      icon: "text-white",
      text: "text-white",
    },
    outlined: {
      root: "bg-transparent border border-[rgb(2,136,209)]",
      icon: "text-[rgb(2,136,209)]",
      text: "text-[rgb(1,67,97)]",
    },
  },
};

function Alert({
  className,
  severity = "success",
  variant = "standard",
  children = "This is an alert.",
  onClose,
}: AlertProps) {
  const s = styles[severity][variant];

  return (
    <div
      className={className || `${s.root} flex items-start gap-[12px] p-[6px_16px] rounded-[4px] w-[600px]`}
      data-node-id="6562:38669"
      role="alert"
    >
      <span className={`${s.icon} pt-[7px] shrink-0`}>{icons[severity]}</span>
      <div className="flex flex-col flex-1 py-[8px] min-w-0">
        <p className={`${s.text} text-[14px] leading-[1.43] tracking-[0.17px]`}>{children}</p>
      </div>
      {onClose && (
        <button
          onClick={onClose}
          className={`${s.icon} pt-[6px] shrink-0 hover:opacity-70 transition-opacity`}
          aria-label="Close"
        >
          <svg className="size-[20px]" viewBox="0 0 24 24" fill="currentColor">
            <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
          </svg>
        </button>
      )}
    </div>
  );
}

export default Alert;
