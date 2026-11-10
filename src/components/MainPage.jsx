import { useState } from "react"
import EmployeeForm from "./forms/EmployeeForm"
import CollectionForm from "./forms/CollectionForm"

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

    const cadastroColeta = () => {
        alert("teste de cadastro de coleta")
    }

    return (
        <>
            <section className='w-full h-screen border-2 px-6'>
                <div className="flex py-4 items-center">
                    <div className="w-16 h-16 border-2 rounded-full">
                        {/* img */}
                    </div>
                    <div className="flex flex-col">
                        <p className="font-semibold ml-4">User</p>
                        <p className="text-gray-400 ml-4">Administrador</p>
                    </div>
                    <div>
                    {/* futuro menu */}
                    </div>
                </div>

                <div className="w-full h-fit py-2 gap-2 flex flex-col ">
                    <button className="cursor-pointer hover:slate-50 p-1 border font-semibold" onClick={() => exibirModalColaborador()}>+ Novo Colaborador</button>
                    {modalColaborador && <EmployeeForm onClose={fecharModalColaborador} />}
                    <button className="cursor-pointer hover:slate-50 p-1 border font-semibold" onClick={() => edicaoColaboradores()}>Edição Colaboradores</button>
                    <button className="cursor-pointer hover:slate-50 p-1 border font-semibold" onClick={() => exibirModalCadastroColeta()}>Cadastrar Coleta</button>
                    {modalCadastroColeta && <CollectionForm onClose={fecharModalCadastroColeta} />}
                </div>

                {/* coletas de hoje */}
                <div className="w-full border flex flex-col mt-4">
                    <h2 className="font-semibold text-2xl mt-4">Coletas de hoje</h2>
                    <div>
                        {/* coletas recentes */}
                    </div>
                </div>
            </section>
        </>
    )
}