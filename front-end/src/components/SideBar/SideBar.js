//import './SideBar.modules.css'

function SideBar() {
    return(
        <>
            <header className="col-1 col-lg-1 d-flex flex-column justify-content-center">
                <img className="logo mb-5" src="../assets/logo.svg" alt=""/>
            <ul className="nav flex-column align-items-center">
                <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                    a
                    <img className="img-fluid" src="../assets/icons/home-active.svg" alt=""/>
                </a>
                </li>
                <li className="nav-item">
                <a className="nav-link" href="#">
                    <img className="img-fluid" src="../assets/icons/project.svg" alt=""/>
                </a>
                </li>
                <li className="nav-item">
                <a className="nav-link" href="#">
                    <img className="img-fluid" src="../assets/icons/team.svg" alt=""/>
                </a>
                </li>
                <li className="nav-item">
                <a className="nav-link">
                    <img className="img-fluid" src="../assets/icons/task.svg" alt=""/>
                </a>
                </li>
            </ul>
            </header>
        </>
    )
}

export default SideBar