

type HTMLContentProps = {
    children: JSX.Element | JSX.Element[]
}

export const Layout = ({ children }: HTMLContentProps) => (
    <div>
        {children}
    </div>
);