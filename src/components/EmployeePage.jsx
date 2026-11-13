import { useState } from "react"
import { SquarePen, Truck } from "lucide-react"
import CollectionForm from "./forms/CollectionForm"

export default function EmployeePage() {
    const [modalCadastroColeta, setModalCadastroColeta] = useState(false)

    const exibirModalCadastroColeta = () => setModalCadastroColeta(true)
    const fecharModalCadastroColeta = () => setModalCadastroColeta(false)

    return (
        <>
            <section className="w-full min-h-screen bg-neutral px-6 pb-6 flex flex-col">
                {/* cabeçalho */}
                <header className="flex items-center py-4">
                    <div className="w-16 h-16 rounded-full bg-white border-4 border-primary/30 shadow-sm flex items-center justify-center text-secondary font-bold text-xl">
                        {/* img */}
                        U
                    </div>
                    <div className="flex flex-col ml-4">
                        <p className="font-semibold text-accent">User</p>
                        <p className="text-sm text-secondary">Colaborador</p>
                    </div>
                    <div className="ml-auto">
                        {/* futuro menu */}
                    </div>
                </header>

                {/* ação principal */}
                <div className="py-2">
                    <button
                        onClick={exibirModalCadastroColeta}
                        className="w-full flex items-center gap-3 px-4 py-3 rounded-lg bg-secondary text-white text-lg font-semibold cursor-pointer hover:bg-primary transition-colors active:bg-primary active:scale-95 shadow-md"
                    >
                        <SquarePen size={20} /> Cadastrar Coleta
                    </button>
                </div>

                {/* coletas recentes */}
                <div className="mt-6 bg-white rounded-lg shadow-md border-t-4 border-primary p-4">
                    <h2 className="font-bold text-2xl text-secondary">Coletas recentes</h2>

                    <div className="mt-4">
                        {/* coletas recentes do colaborador */}
                        <div className="flex flex-col items-center text-center py-8 text-gray-400">
                            <Truck size={40} className="text-primary/50 mb-2" />
                            <p>Você ainda não registrou nenhuma coleta.</p>
                        </div>
                    </div>
                </div>
            </section>

            {modalCadastroColeta && <CollectionForm onClose={fecharModalCadastroColeta} />}
        </>
    )
}