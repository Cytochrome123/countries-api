const Header = ({toggleMode, darkMode}) => {


    return (
        <div className={`header ${darkMode ? 'darkMode' : ''}`}>
            <h2>Where in the world?</h2>
            <p onClick={toggleMode}>Mode</p>
        </div>
    )
}

export default Header;