interface ButtonProps {
  text: string;
  variant?: 'text' | 'contained';
  size?: 'small' | 'medium' | 'large';
  className?: string;
  disabled?: boolean;
  onClick?: () => void;
}

export default function Button({
  className = '',
  text,
  variant = 'contained',
  size = 'medium',
  disabled = false,
  onClick,
}: ButtonProps) {
  return (
    <>
      <button
        className={`button ${variant} ${size} ${className}`}
        onClick={onClick}
        disabled={disabled}
      >
        {text}
      </button>
    </>
  );
}
