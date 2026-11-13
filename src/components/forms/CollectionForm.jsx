
export default function CollectionForm({ onClose }) {
    const handleSubmit = (e) => {
        e.preventDefault() // evita recarregar a página
        const dados = Object.fromEntries(new FormData(e.target))
        console.log(dados) // { local, residuo, peso, data, observacoes }
        onClose()
    }

    const hoje = new Date().toLocaleDateString("en-CA") // formato AAAA-MM-DD

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
                    <span className={labelBase}>Local da coleta</span>
                    <input name="local" type="text" placeholder="Ex.: Rua das Flores, 120" required className={inputBase} />
                </label>

                <label className="flex flex-col gap-1">
                    <span className={labelBase}>Tipo de resíduo</span>
                    <select name="residuo" required defaultValue="" className={inputBase}>
                        <option value="" disabled>Selecione</option>
                        <option value="papel">Papel / Papelão</option>
                        <option value="plastico">Plástico</option>
                        <option value="metal">Metal</option>
                        <option value="vidro">Vidro</option>
                        <option value="organico">Orgânico</option>
                        <option value="outros">Outros</option>
                    </select>
                </label>

                <div className="flex gap-3">
                    <label className="flex flex-col gap-1 flex-1">
                        <span className={labelBase}>Peso (kg)</span>
                        <input name="peso" type="number" step="0.1" min="0" inputMode="decimal" placeholder="0,0" required className={inputBase} />
                    </label>
                    <label className="flex flex-col gap-1 flex-1">
                        <span className={labelBase}>Data</span>
                        <input name="data" type="date" defaultValue={hoje} required className={inputBase} />
                    </label>
                </div>

                <label className="flex flex-col gap-1">
                    <span className={labelBase}>Observações</span>
                    <textarea name="observacoes" rows="3" placeholder="Opcional" className={`${inputBase} resize-none`} />
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