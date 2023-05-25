import { useEffect, useRef } from "react"

export const ModalInfo = ({ openModal, setOpenModal, infoExplanation}: any) => {
    const ref = useRef<HTMLDialogElement>(null)


    useEffect(() => {
        if(openModal) {
            ref.current?.removeAttribute('open')
            ref.current?.showModal()
        } else {
            ref.current?.close()
        }
    })

    
    return (
        <dialog className="w-[30rem] backdrop:backdrop-blur p-10 rounded-md" ref={ref}>
            <p className="text-lg pb-6">{ infoExplanation }</p>
            <button className="bg-red-200 px-4 py-2 rounded-lg" onClick={() => setOpenModal(false)}>Close</button>
        </dialog>
    )
}