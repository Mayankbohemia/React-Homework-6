import './NavBar.css'
function NavBar() {

    return (
        <header className='header'>
            <div className='container'>
                <div>
                    <h1 className='logo'>logo</h1>
                </div>
                <div className='nav__links'>
                    <h2 className='home'>Home</h2>
                    <h2>About</h2>
                    <h2>Contact</h2>
                </div>
                <div>
                    <img className='icon' src="https://cdn-icons-png.flaticon.com/128/59/59439.png" alt="" />
                    <img className='icon' src="https://cdn-icons-png.flaticon.com/128/733/733635.png" alt="" />
                    <img className='icon' src="https://cdn-icons-png.flaticon.com/128/1384/1384015.png" alt="" />
                </div>

            </div>
        </header>

    )

}
export default NavBar