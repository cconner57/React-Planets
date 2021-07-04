const Navbar = ({setPlanet}:any) => {
    return (
        <nav>
            <h1 onClick={() => setPlanet('Mercury')}>The Planets</h1>
            <div className="nav-items">
                <h2 onClick={() => setPlanet('Mercury')}>Mercury</h2>
                <h2 onClick={() => setPlanet('Venus')}>Venus</h2>
                <h2 onClick={() => setPlanet('Earth')}>Earth</h2>
                <h2 onClick={() => setPlanet('Mars')}>Mars</h2>
                <h2 onClick={() => setPlanet('Jupiter')}>Jupiter</h2>
                <h2 onClick={() => setPlanet('Saturn')}>Saturn</h2>
                <h2 onClick={() => setPlanet('Uranus')}>Uranus</h2>
                <h2 onClick={() => setPlanet('Neptune')}>Neptune</h2>
            </div>
        </nav>
    )
}

export default Navbar
