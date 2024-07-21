import { Table } from "../../components/table/Table"
import { TableRow } from "../../components/table/TableRow"
import { TableData } from "../../components/table/TableData"
import editIcon from '@/assets/Icon_editar1.svg'
import deleteIcon from '@/assets/Icon_eliminar1.svg'
import editIconDisabled from '@/assets/Icon_editar.svg'
import deleteIconDisabled from '@/assets/Icon_eliminar.svg'
import { useState } from "react"
import { deleteDealer } from "../../services/dealer.service"
import { IDealer } from "../../types/dealer"

interface TableSectionProps {
    refreshData: () => void;
    dealerData: Array<IDealer>;
    handleEditActive: (idx: number, dealer: IDealer) => void;
    dealerEditActive: number | null;
    areEditButtonsActive:  boolean;
}

export const TableSection = ({ 
    refreshData, 
    dealerData, 
    handleEditActive, 
    dealerEditActive, 
    areEditButtonsActive 
}: TableSectionProps) => {
    const [blockActions, setBlockActions] = useState(false)

    const handleDelete = async (id: number) => {
        setBlockActions(true)
        await deleteDealer(id)
        refreshData()
        setBlockActions(false)
    }

    return (
        <Table headers={["Marca", "Sucursal", "Aspirante"]}>
            <tbody className="pt-8">
                {dealerData.map((dealer, idx) => (
                    <TableRow key={idx}>
                        <TableData>{dealer.brand}</TableData>
                        <TableData className="text-center">{dealer.branch}</TableData>
                        <TableData className="flex justify-between items-center h-full gap-2">
                            <div className="w-full">
                                {dealer.applicant}
                            </div>
                            <div className="flex items-center justify-end gap-4 max-w-[100px] w-full flex-wrap">
                                <button onClick={() => handleEditActive(idx, dealer)} disabled={blockActions}>
                                    <img
                                        src={(dealerEditActive !== idx && areEditButtonsActive) || blockActions
                                            ? editIconDisabled
                                            : editIcon
                                        }
                                        alt="Botón de edición"
                                        width="38px"
                                        className="min-w-[38px]"
                                    />
                                </button>
                                <button onClick={async () => await handleDelete(dealer.id!)} disabled={blockActions}>
                                    <img
                                        src={(dealerEditActive !== idx && areEditButtonsActive) || blockActions
                                            ? deleteIconDisabled
                                            : deleteIcon
                                        }
                                        alt="Botón de eliminación"
                                        width="38px"
                                        className="min-w-[38px]"
                                    />
                                </button>
                            </div>
                        </TableData>
                    </TableRow>
                ))}
            </tbody>
        </Table>
    )
}