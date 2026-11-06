export default function MainPage() {
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

                {/* coletas de hoje */}
                <div className="w-full border flex flex-col">
                    <h2 className="font-semibold text-2xl mt-4">Coletas de hoje</h2>
                    <div>
                        {/* coletas recentes */}
                    </div>
                </div>
            </section>
        </>
    )
}