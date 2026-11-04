export default function CreateUser() {
    return (
        <>
           <section className="w-full h-screen">
                <input type="text" placeholder='nome'/>
                <input type="text" placeholder='sobrenome'/>
                <input type="email" placeholder='e-mail' />
                <input type="password" placeholder='senha'/>
            </section>
        </>
    )
}