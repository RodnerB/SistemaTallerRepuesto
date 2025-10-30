function Module({ name, icon, path }) {
    const moduleStyle = {
        display: 'flex',
        gap: '10px',
        textDecoration: 'none',
        color: '#252525',
        fontSize: '16px',
        padding: '10px',
    }
    return (
        <a className={'module'} href={path} >
            <span>{icon}</span>
            <span>{name}</span>
        </a >
    )
}

export default Module;