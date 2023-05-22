interface ButtonProps {
    content: JSX.Element;
    action: () => void;
    disabled: boolean;
}

export const ButtonChange = ({ content, action, disabled }: ButtonProps) => {
    return (
        <button disabled={disabled} onClick={action}>{content}</button>
    )
}