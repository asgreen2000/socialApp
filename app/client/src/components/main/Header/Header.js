import {Link} from "react-router-dom";
import './Header.css';

const Header = props => {
    
    
    return (
    <nav className="mb-1 navbar navbar-expand-md navbar-dark px-1 h-100">
      <Link className="navbar-brand" to="facebook.com">TickTick</Link>
      <button className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent-3" aria-controls="navbarSupportedContent-3" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon text-body"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent-3">
            <div className="mx-auto d-md-flex">
            <Link className="nav-link text-white" to="facebook.com">Trang chủ
            </Link>
            <Link className="nav-link text-white" to="facebook.com">Tìm kiếm
            </Link>
            </div>
        <div className="navbar-nav nav-flex-icons">
          
            <Link className="text-white nav-link" to='/messenger'>
                <i className="fab fa-facebook-messenger d-none d-md-inline"></i>
                <span className="text-white d-md-none">Trò chuyện</span>
                <span className="position-absolute translate-middle badge rounded-pill bg-danger">
                99+
              </span>
            </Link>
            <Link className="nav-link d-md-none" to="facebook.com">Tài khoản</Link>
            <Link className="nav-link d-md-none" to="facebook.com">Bạn bè</Link>
            <Link className="nav-link d-md-none" to="facebook.com">Đăng xuất</Link>
        
            <button className="btn text-white dropdown-toggle dropdown-toggle-split d-none d-md-block" id="navbarDropdownMenuLink" data-bs-toggle="dropdown">
              <i className="fas fa-user"></i>

            </button>
            <div className="dropdown-menu">
              <Link className="dropdown-item" to="facebook.com">Tài khoản</Link>
              <Link className="dropdown-item" to="facebook.com">Bạn bè</Link>
              <Link className="dropdown-item" to="facebook.com">Đăng xuất</Link>
            </div>
        </div>
      </div>
    </nav>
    )
}

export default Header;