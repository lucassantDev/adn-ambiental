import LogoAdn from "../assets/logo_adonai_ambiental.png"
import { formatarCpf, limparCpf } from "../utils/cpf"
import { useState } from "react";

export default function LoginAdn() {
    const [cpf, setCpf] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        const dados = Object.fromEntries(new FormData(e.target))
        console.log(dados) // { cpf, senha }
    }

    return (
        <section className="w-full min-h-screen bg-neutral flex flex-col items-center justify-evenly px-6">

            <img
                src={LogoAdn}
                alt="Logo Adonai Ambiental"
                className="w-[clamp(10rem,30vw,20rem)] rounded-full bg-white border-4 border-primary/30 shadow-md"
            />

            <form
                onSubmit={handleSubmit}
                className="w-full max-w-sm flex flex-col gap-3 bg-white shadow-lg p-10 rounded-lg border-t-4 border-primary"
            >
                <h1 className="text-2xl font-bold text-secondary text-center mb-2">Login</h1>

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
                    className="border border-secondary/30 rounded p-2 text-accent placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <input
                    name="senha"
                    type="password"
                    placeholder="Senha"
                    required
                    className="border border-secondary/30 rounded p-2 text-accent placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary"
                />

                <button
                    type="submit"
                    className="py-2 rounded bg-secondary text-white font-semibold cursor-pointer hover:bg-primary transition-colors"
                >
                    Acessar
                </button>
            </form>
        </section>
    )
}