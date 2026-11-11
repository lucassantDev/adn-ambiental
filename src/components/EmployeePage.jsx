import { useState } from "react"
import CollectionForm from "./forms/CollectionForm"

export default function EmployeePage() {

    const [modalCadastroColeta, setModalCadastroColeta] = useState(false)

    const exibirModalCadastroColeta = () => setModalCadastroColeta(true)
    const fecharModalCadastroColeta = () => setModalCadastroColeta(false)

    return (
        <>
            <section className="w-full h-screen border-2 px-6 flex flex-col">
                <div className="flex py-4 items-center">
                    <div className="w-16 h-16 border-2 rounded-full">
                        {/* img */}
                    </div>
                    <div className="flex flex-col">
                        <p className="font-semibold ml-4">User</p>
                        <p className="text-gray-400 ml-4">Colaborador</p>
                    </div>

                    <div>
                    {/* futuro menu */}
                    </div>
                </div>

                <div className="w-full h-fit py-2 gap-2 flex flex-col ">
                        <button className="cursor-pointer hover:slate-50 p-1 border font-semibold" onClick={() => exibirModalCadastroColeta()}>Cadastrar Coleta</button>
                        {modalCadastroColeta && <CollectionForm onClose={fecharModalCadastroColeta} />}
                </div>

                <div className="w-full border flex flex-col mt-4">
                    <h2 className="font-semibold text-2xl mt-4">Coletas recentes</h2>
                    <div>
                        {/* coletas recentes do colaborador */}
                    </div>
                </div>
            </section>
        </>
    )
}