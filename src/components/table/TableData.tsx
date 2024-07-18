import { TdHTMLAttributes } from "react"

export const TableData = ({ 
    children, 
    ...props 
}: { children: React.ReactNode } & TdHTMLAttributes<HTMLTableCellElement>) => {
    return (
        <td {...props} className={`pl-1 pr-4 first:pl-0 text-2xl text-grey1 font-[600] ${props.className}`}>
            {children}
        </td>
    )
}