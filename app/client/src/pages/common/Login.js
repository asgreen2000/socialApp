import {useContext, useEffect, useState} from 'react';

import { login } from '../../api/services';
import pathName from '../../pathname';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/Authentication';

const Login = props => {
    
    const {authData, refreshAuthData} = useContext(AuthContext);
    const NEW = 1;
    const PROCESSING = 2;
    
    const [status, changeStatus] = useState(NEW);
    const [data, setData] = useState({

      username: "",
      password: ""
    });

    const navigate = useNavigate();

    const handleOnChange = (event) => {

      data[event.target.name] = event.target.value;
      
      setData({...data});
    }

    const handleOnSubmit = (event) => {

        event.preventDefault();

        changeStatus(PROCESSING);

        login(data).then(() => {
          
          refreshAuthData();
          navigate('/messenger');
        })
        .catch(_ => {

          changeStatus(NEW);
        });
        ;
     
    }

    useEffect(() => {

      changeStatus(NEW);
      
    }, []);

    useEffect(() => {

      if (authData && authData.isLogged)
        navigate('/messenger');
    }, [authData]);

    return (
        <section className="vh-100">
          <div className="container py-5 h-100">
            <div className="row d-flex justify-content-center align-items-center h-100">
              <div className="col col-xl-10">
                <div className="card" style={{borderRadius: "1rem"}}>
                  <div className="row g-0">
                    <div className="col-md-6 col-lg-5 d-none d-md-block">
                      <img
                        src="https://mdbootstrap.com/img/Photos/new-templates/bootstrap-login-form/img1.jpg"
                        alt="login form"
                        className="img-fluid" style={{borderRadius: "1rem 0 0 1rem"}}
                      />
                    </div>
                    <div className="col-md-6 col-lg-7 d-flex align-items-center">
                      <div className="card-body p-4 p-lg-5 text-black">

                        <form>

                          <div className="d-flex align-items-center mb-3 pb-1">
                            <i className="fas fa-circle fa-2x me-3" style={{color: "#ff6219"}}></i>
                            <span className="h1 fw-bold mb-0 text-capitalize">Tick Tick</span>
                          </div>

                          <h5 className="fw-normal mb-3 pb-3 text-uppercase" style={{letterSpacing: "1px"}}>Đăng nhập</h5>

                          <div className="form-outline mb-4">
                            <label className="form-label" for="form2Example17">Tài khoản</label>
                            <input type="text" id="form2Example17" className="form-control form-control-lg" 
                              name='username' onChange={handleOnChange}
                            />
                          </div>

                          <div className="form-outline mb-4">
                            <label className="form-label" for="form2Example27">Mật khẩu</label>
                            <input type="password" id="form2Example27" className="form-control form-control-lg" 
                              name='password' onChange={handleOnChange}

                            />
                          </div>

                          <div className="pt-1 mb-4">
                            <button className="btn btn-outline-dark btn-lg btn-block" type="submit"
                            onClick={handleOnSubmit}
                            onKeyPress={handleOnSubmit}
                            >
                            {
                              status === NEW ? "Gửi" : <div class="spinner-border text-sm" role="status">
                              <span class="sr-only">Loading...</span>
                          </div>
                            }
                          </button>
                            
                          </div>
                          
                          
                          <a className="small text-muted" href="#!">Quên mật khẩu?</a>
                          <p className="mb-5 pb-lg-2" style={{color: "#393f81"}}>Bạn chưa có tài khoản? 
                          <Link to={pathName.REGISTER} style={{color: "#393f81"}}>Đăng ký thôi nào</Link></p>
                        </form>

                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
  
        </section>

    )
}

export default Login;