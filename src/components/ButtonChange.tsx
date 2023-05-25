interface ButtonProps {
    content: JSX.Element | string;
    action: () => void;
    disabled?: boolean;
    style?: string;
}

export const ButtonChange = ({ content, action, disabled, style }: ButtonProps) => {
    return (
        <button className={style} disabled={disabled} onClick={action}>{content}</button>
    )
}