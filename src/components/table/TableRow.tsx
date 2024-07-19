export const TableRow = ({ children }: { children: React.ReactNode}) => {
    return (
        <tr className="border-b-2 border-b-red2 first:h-16">
            {children}
        </tr>
    )
}