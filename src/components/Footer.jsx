export default function Footer() {
    const anoAtual = new Date().getFullYear()

    return (
        <>
            <footer className="w-full h-16 flex items-center justify-center bg-neutral">
                <p className='text-secondary font-semibold'>{anoAtual} ©  Todos os direitos reservados</p>
            </footer>
        </>
    )
}