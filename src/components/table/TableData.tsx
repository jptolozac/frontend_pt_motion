import { TdHTMLAttributes } from "react"

export const TableData = ({ 
    children, 
    ...props 
}: { children: React.ReactNode } & TdHTMLAttributes<HTMLTableCellElement>) => {
    return (
        <td {...props} className={`pl-1 pr-4 first:pl-0 text-3xl text-grey1 font-[500] py-2 ${props.className}`}>
            {children}
        </td>
    )
}