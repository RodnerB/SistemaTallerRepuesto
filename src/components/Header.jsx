export default function Header({title, principalBtn , secundaryBtn}) {
    const { icon: PrincipalIcon, text: principalText, action: principalAction } = principalBtn || {};
    const { icon: SecundaryIcon, text: secundaryText, action: secundaryAction } = secundaryBtn || {};
    return (
        <header className='header'>
            <h1>{title}</h1>
            <div className="btn-container">
                {principalBtn && 
                    <button className='btn btn-principal' onClick={principalAction}>
                    {PrincipalIcon && <PrincipalIcon/>}
                    {principalText}
                    </button>}
                {secundaryBtn && 
                    <button className='btn btn-secundario' onClick={secundaryAction}>
                    {SecundaryIcon && <SecundaryIcon/>}
                    {secundaryText}
                </button>}
                </div>
        </header>
    )
}