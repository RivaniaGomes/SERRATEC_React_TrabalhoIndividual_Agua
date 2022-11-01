import './styles.css'

function Header(props) {
    return (
        <>
            <nav className='header align-items-center navbar navbar-primary bg-primary shadow-lg p-3 mb-5 rounded bg-gradient-light'>
                <h1 className='text-white text-ligth'>{props.texto}</h1>
            </nav>
        </>
    )
}

export default Header;