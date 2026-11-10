export default function CollectionForm({ onClose }) {
    const handleSubmit = (e) => {
        e.preventDefault() // evita recarregar a página
        const dados = Object.fromEntries(new FormData(e.target))
        console.log(dados) // { nome, cpf, cargo }
        onClose()
    }

    return (
        <>
            <div className="fixed inset-0 bg-black/50 flex items-center justify-center px-6">
                <form onSubmit={handleSubmit} className="w-full max-w-md bg-white border-2 p-4 flex flex-col gap-2">
                    <h2 className="font-semibold text-xl">Nova Coleta</h2>

                    <input name="nome" type="text" placeholder="Nome do colaborador" className="border p-1" required />
                    <input name="cpf" type="text" placeholder="CPF do colaborador" className="border p-1" required />
                    <select name="cargo" className="border p-1">
                        <option value="adm">Administrador</option>
                        <option value="employee">Colaborador</option>
                    </select>

                    <div className="flex gap-2 mt-2">
                        <button type="button" onClick={onClose} className="flex-1 p-1 border cursor-pointer hover:bg-red-50">Cancelar</button>
                        <button type="submit" className="flex-1 p-1 border font-semibold cursor-pointer hover:bg-emerald-50">Salvar</button>
                    </div>
                </form>
            </div>
        </>
    )
}