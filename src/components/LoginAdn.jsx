import LogoAdn from "../assets/logo_adonai_ambiental.png"

export default function LoginAdn() {
    return (
        <>
            <section className="w-full h-screen flex flex-col items-center justify-evenly">

                <img src={LogoAdn} alt="Logo Adonai Ambiental"
                className="border-2 border-gray-200 w-50 rounded-full"
                />

                <form action="" className="flex flex-col gap-2 border p-10">
                    <input type="text" placeholder='CPF' className="border p-2"/>
                    <input type="password" placeholder='Senha' className="border p-2" />
                    <button className="border py-2 cursor-pointer hover:bg-slate-50">Acessar</button>
                </form>
            </section>
        </>
    )
}