import { TdHTMLAttributes } from "react"

export const TableData = ({ 
    children, 
    ...props 
}: { children: React.ReactNode } & TdHTMLAttributes<HTMLTableCellElement>) => {
    return (
        <td {...props} className={`pl-1 pr-4 first:pl-0 text-grey1 py-1 font-[450] break-all max-w-[320px] ${props.className}`}>
            {children}
        </td>
    )
}