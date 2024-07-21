import { TdHTMLAttributes } from "react"

export const TableData = ({ 
    children, 
    ...props 
}: { children: React.ReactNode } & TdHTMLAttributes<HTMLTableCellElement>) => {
    return (
        <td {...props} className={`pl-1 pr-4 first:pl-0 last:pr-0 text-grey1 py-1 font-[450] text-wrap break-all w-[280px] last:w-[400px] max-w-[35vw] ${props.className}`}>
            {children}
        </td>
    )
}