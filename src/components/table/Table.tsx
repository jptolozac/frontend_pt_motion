import './Table.css'

interface TableProps { 
    children: React.ReactNode,
    headers: Array<string>
}

export const Table = ({ headers, children }: TableProps) => {
    return (
        <table className="h-fit max-w-full">
            <thead>
                <tr>
                    {headers &&
                        headers.map((header, idx) => (
                            <th key={idx} className="header">{header}</th>
                        ))
                    }
                </tr>
            </thead>
            {children}
        </table>
    )
}