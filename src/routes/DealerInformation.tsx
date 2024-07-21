import { useEffect, useRef, useState } from "react"
import { CardForm } from "../components/cardForm/CardForm"
import { CircleAnimation } from "../components/circleAnimation/CircleAnimation"
import { Table } from "../components/table/Table"
import { TableRow } from "../components/table/TableRow"
import { IDealer } from "../types/dealer"
import { TableData } from "../components/table/TableData"
import { createDealer, deleteDealer, editDealer, getDealerData } from "../services/dealer.service"
import editIcon from '@/assets/Icon_editar1.svg'
import deleteIcon from '@/assets/Icon_eliminar1.svg'
import editIconDisabled from '@/assets/Icon_editar.svg'
import deleteIconDisabled from '@/assets/Icon_eliminar.svg'
import { SubmitHandler } from "react-hook-form"

export const DealerInformation = ({ ...props }: React.HTMLAttributes<HTMLElement>) => {
    const sectionScroll = useRef<HTMLElement>(null)
    const [isAnimationActive, setIsAnimationActive] = useState(false)
    const [dealerData, setDealerData] = useState<Array<IDealer>>([])
    const [areEditButtonsActive, setAreEditButtonsActive] = useState(false)
    const [dealerEditActive, setDealerEditActive] = useState<number | null>(null)
    const [currentDealer, setCurrentDealer] = useState<IDealer | null>(null)
    const [blockActions, setBlockActions] = useState(false)

    const handleActiveEditButtons = () => {
        setAreEditButtonsActive(!areEditButtonsActive)
    }

    const handleEditActive = (idx: number, dealer: IDealer) => {
        setAreEditButtonsActive(!areEditButtonsActive)
        setDealerEditActive(idx)
        setCurrentDealer(dealer)
    }

    const checkIntersection = () => {
        if (sectionScroll.current) {
            const rect = sectionScroll.current.getBoundingClientRect()
            const sectionVisible = rect.bottom - 500 < window.innerHeight

            setIsAnimationActive(sectionVisible)
        }
    };

    const refreshData = () => {
        getDealerData().then(data => setDealerData(data))
    }

    const handleAddSubmit: SubmitHandler<IDealer> = async (dealer) => {
        console.log("From add: ", dealer)
        await createDealer(dealer)
        refreshData()
    }

    const handleEditSubmit: SubmitHandler<IDealer> = async (dealer) => {
        if (handleActiveEditButtons)
            handleActiveEditButtons()
        console.log("From edit: ", dealer)
        await editDealer(currentDealer!.id!, dealer)
        refreshData()
    }

    const handleDelete = async (id: number) => {
        setBlockActions(true)
        await deleteDealer(id)
        refreshData()
        setBlockActions(false)
    }

    useEffect(() => {
        refreshData()
        window.addEventListener('scroll', checkIntersection)
        return () => {
            window.removeEventListener('scroll', checkIntersection)
        }
    }, [])

    return (
        <>
            <div className="relative">
                <CircleAnimation animationActive={isAnimationActive} />
            </div>
            <section
                {...props}
                className={`flex flex-wrap justify-around relative z-30 min-h-[70vh] h-[100%] py-12 mx-auto mb-[150px] gap-6 ${props.className}`}
                ref={sectionScroll}
                style={{
                    opacity: isAnimationActive ? 1 : 0,
                    transform: isAnimationActive ? "translatex(0)" : "translatex(100vw)",
                    transition: "1.5s",
                    transitionBehavior: "-moz-initial",
                }}
            >
                <CardForm
                    areEditButtonsActive={areEditButtonsActive}
                    handleActiveEditButtons={handleActiveEditButtons}
                    handleAdd={handleAddSubmit}
                    handleEdit={handleEditSubmit}
                    currentRecord={currentDealer!}
                />
                <Table headers={["Marca", "Sucursal", "Aspirante"]}>
                    <tbody className="pt-8">
                        {dealerData.map((dealer, idx) => (
                            <TableRow key={idx}>
                                <TableData>{dealer.brand}</TableData>
                                <TableData className="text-center">{dealer.branch}</TableData>
                                <TableData className="flex justify-between items-center h-full max-w-[500px] gap-8">
                                    {dealer.applicant}
                                    <div className="flex items-center gap-4">
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
                                        <button onClick={async() => await handleDelete(dealer.id!)} disabled={blockActions}>
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
            </section>
        </>
    )
}
