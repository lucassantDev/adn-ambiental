import { useState } from "react"
import { formatarCpf, limparCpf } from "../utils/cpf"

export default function EmployeeForm({ onClose }) {
    const [cpf, setCpf] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault() // evita recarregar a página
        const dados = Object.fromEntries(new FormData(e.target))
        dados.cpf = dados.cpf.replace(/\D/g, "") // envia só os números
        dados.cpf = limparCpf(dados.cpf) // envia só os números
        console.log(dados) // { nome, cpf, cargo }
        onClose()
    }

    const inputBase =
        "w-full border border-secondary/30 rounded p-2 text-accent placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary"
    const labelBase = "text-sm font-semibold text-secondary"
    const btnBase =
        "flex-1 py-2 rounded-lg font-semibold cursor-pointer transition active:scale-95"

    return (
        <div
            onClick={onClose}
            className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center px-6"
        >
            <form
                onSubmit={handleSubmit}
                onClick={(e) => e.stopPropagation()}
                className="w-full max-w-md max-h-[90vh] overflow-y-auto bg-white rounded-lg shadow-lg border-t-4 border-primary p-6 flex flex-col gap-3"
            >

                <label className="flex flex-col gap-1">
                    <span className={labelBase}>Nome</span>
                    <input name="nome" type="text" placeholder="Nome completo" autoComplete="off" required className={inputBase} />
                </label>

                <label className="flex flex-col gap-1">
                    <span className={labelBase}>CPF</span>
                    <input
                        name="cpf"
                        type="text"
                        inputMode="numeric"
                        placeholder="000.000.000-00"
                        value={cpf}
                        onChange={(e) => setCpf(formatarCpf(e.target.value))}
                        minLength={14}
                        maxLength={14}
                        required
                        className={inputBase}
                    />
                </label>

                <label className="flex flex-col gap-1">
                    <span className={labelBase}>Cargo</span>
                    <select name="cargo" defaultValue="employee" className={inputBase}>
                        <option value="employee">Colaborador</option>
                        <option value="adm">Administrador</option>
                    </select>
                </label>

                <div className="flex gap-3 mt-2">
                    <button
                        type="button"
                        onClick={onClose}
                        className={`${btnBase} bg-white text-secondary border border-secondary/30 hover:bg-red-50 hover:text-red-600 hover:border-red-200 active:bg-red-100`}
                    >
                        Cancelar
                    </button>
                    <button
                        type="submit"
                        className={`${btnBase} bg-secondary text-white hover:bg-primary active:bg-primary`}
                    >
                        Salvar
                    </button>
                </div>
            </form>
        </div>
    )
}