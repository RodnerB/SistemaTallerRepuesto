export default function Header({title, principalBtn = null, secundaryBtn = null}) {
    const { icon: PrincipalIcon, text: principalText } = principalBtn || {};
    const { icon: SecundaryIcon, text: secundaryText } = secundaryBtn || {};
    return (
        <header className='header'>
            <h1>{title}</h1>
            <div className="btn-container">
                {principalBtn && <button className='btn btn-principal'>
                    <PrincipalIcon/>
                    {principalText}
                    </button>}
                { secundaryBtn && <button className='btn btn-secundario'>
                    <SecundaryIcon/>
                    {secundaryText}
                </button>}
                </div>
        </header>
    )
}