import { useEffect, useRef, useState } from "react"
import { CardForm } from "../components/cardForm/CardForm"
import { CircleAnimation } from "../components/circleAnimation/CircleAnimation"
import { Table } from "../components/table/Table"
import { TableRow } from "../components/table/TableRow"
import { IDealer } from "../types/dealer"
import { TableData } from "../components/table/TableData"
import { getDealerData } from "../services/dealer.service"
import editIcon from '@/assets/Icon_editar1.svg'
import deleteIcon from '@/assets/Icon_eliminar1.svg'
import editIconDisabled from '@/assets/Icon_editar.svg'
import deleteIconDisabled from '@/assets/Icon_eliminar.svg'

export const DealerInformation = ({ ...props }: React.HTMLAttributes<HTMLElement>) => {
    const sectionScroll = useRef<HTMLElement>(null)
    const [isAnimationActive, setIsAnimationActive] = useState(false)
    const [dealerData, setDealerData] = useState<Array<IDealer>>([])
    const [areEditButtonsActive, setAreEditButtonsActive] = useState(false)
    const [editActive, setEditActive] = useState<number | null>(null)

    const handleActiveEditButtons = () => {
        setAreEditButtonsActive(!areEditButtonsActive)
    }

    const handleEditActive = (id: number) => {
        setAreEditButtonsActive(!areEditButtonsActive)
        setEditActive(id)
    }

    const checkIntersection = () => {
        if (sectionScroll.current) {
            const rect = sectionScroll.current.getBoundingClientRect()
            const sectionVisible = rect.bottom - 500 < window.innerHeight

            setIsAnimationActive(sectionVisible)
        }
    };

    useEffect(() => {
        getDealerData().then(data => setDealerData(data))

        window.addEventListener('scroll', checkIntersection)
        return () => {
            window.removeEventListener('scroll', checkIntersection)
        }
    }, [])

    return (
        <>
            <div className="overflow-x-hidden relative">
                <CircleAnimation animationActive={isAnimationActive} />
            </div>
            <section
                {...props}
                className={`flex flex-wrap justify-around relative z-30 h-[100%] py-12 mx-auto mb-[150px] gap-6 ${props.className}`}
                ref={sectionScroll}
                style={{
                    opacity: isAnimationActive ? 1 : 0,
                    transform: isAnimationActive ? "translatex(0)" : "translatex(100vw)",
                    transition: "1.5s",
                    transitionBehavior: "-moz-initial",
                }}
            >
                <CardForm areEditButtonsActive={areEditButtonsActive} handleActiveEditButtons={handleActiveEditButtons} />
                <Table headers={["Marca", "Sucursal", "Aspirante"]}>
                    <tbody className="pt-8">
                        {dealerData.map((dealer, idx) => (
                            <TableRow key={idx}>
                                <TableData>{dealer.brand}</TableData>
                                <TableData className="text-center">{dealer.branch}</TableData>
                                <TableData className="flex justify-between items-center h-full min-w-[500px] gap-8">
                                    {dealer.applicant}
                                    <div className="flex items-center gap-4">
                                        <button onClick={() => handleEditActive(idx)}>
                                            <img
                                                src={editActive !== idx && areEditButtonsActive ? editIconDisabled : editIcon}
                                                alt="Botón de edición"
                                                width="38px"
                                                className="min-w-[38px]"
                                            />
                                        </button>
                                        <button>
                                            <img
                                                src={editActive !== idx && areEditButtonsActive ? deleteIconDisabled : deleteIcon}
                                                alt="Botón de edición"
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
