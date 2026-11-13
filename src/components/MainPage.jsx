import { useState } from "react"
import { Plus, Pencil, SquarePen, Truck } from "lucide-react"
import EmployeeForm from "./forms/EmployeeForm"
import CollectionForm from "./forms/CollectionForm"
import Footer from "./Footer"

export default function MainPage() {
    const [modalColaborador, setModalColaborador] = useState(false)
    const [modalCadastroColeta, setModalCadastroColeta] = useState(false)

    const exibirModalColaborador = () => setModalColaborador(true)
    const fecharModalColaborador = () => setModalColaborador(false)

    const exibirModalCadastroColeta = () => setModalCadastroColeta(true)
    const fecharModalCadastroColeta = () => setModalCadastroColeta(false)

    const edicaoColaboradores = () => {
        alert("teste de caminho para edição de colaboradores")
    }

    const btnBase =
        "w-full flex items-center gap-3 px-4 py-3 rounded-lg font-semibold cursor-pointer transition-colors"
    // active:bg-primary active:scale-95
    return (
        <>
            <section className="w-full min-h-screen bg-neutral px-6 pb-6">
                {/* cabeçalho */}
                <header className="flex items-center py-4">
                    <div className="w-16 h-16 rounded-full bg-white border-4 border-primary/30 shadow-sm flex items-center justify-center text-secondary font-bold text-xl">
                        {/* img */}
                        U
                    </div>
                    <div className="flex flex-col ml-4">
                        <p className="font-semibold text-accent">User</p>
                        <p className="text-sm text-secondary">Administrador</p>
                    </div>
                    <div className="ml-auto">
                        {/* futuro menu */}
                    </div>
                </header>

                {/* ações */}
                <div className="flex flex-col gap-3 py-2">
                    <button
                        onClick={exibirModalColaborador}
                        className={`${btnBase} bg-secondary text-white hover:bg-primary`}
                    >
                        <Plus size={20} /> Novo Colaborador
                    </button>

                    <button
                        onClick={edicaoColaboradores}
                        className={`${btnBase} bg-white text-secondary border border-secondary/30 hover:bg-primary/10`}
                    >
                        <Pencil size={20} /> Edição Colaboradores
                    </button>

                    <button
                        onClick={exibirModalCadastroColeta}
                        className={`${btnBase} bg-white text-secondary border border-secondary/30 hover:bg-primary/10`}
                    >
                        <SquarePen size={20} /> Cadastrar Coleta
                    </button>
                </div>

                {/* coletas de hoje */}
                <div className="mt-6 bg-white rounded-lg shadow-md border-t-4 border-primary p-4">
                    <h2 className="font-bold text-2xl text-secondary">Coletas de hoje</h2>

                    <div className="mt-4">
                        {/* coletas recentes */}
                        <div className="flex flex-col items-center text-center py-8 text-gray-400">
                            <Truck size={40} className="text-primary/50 mb-2" />
                            <p>Nenhuma coleta registrada hoje.</p>
                        </div>
                    </div>
                </div>
            </section>

            {modalColaborador && <EmployeeForm onClose={fecharModalColaborador} />}
            {modalCadastroColeta && <CollectionForm onClose={fecharModalCadastroColeta} />}

            <Footer></Footer>
        </>

        
    )
}