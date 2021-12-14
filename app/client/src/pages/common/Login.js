import {useState} from 'react';
import axios from 'axios';

const Login = props => {

    const [data, setData] = useState({

      username: "",
      password: ""
    });

    const handleOnChange = (event) => {

      data[event.target.name] = event.target.value;
      console.log(data);
      setData({...data});
    }

    const handleOnSubmit = async () => {

      axios.post('http://localhost:3333/login', JSON.stringify(data),
      {withCredentials: true}
      )
     
    }


    return (
        <section className="vh-100" style={{backgroundColor: "#7CD1B8"}}>
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
                            <button className="btn btn-outline-dark btn-lg btn-block" type="button"
                            onClick={handleOnSubmit}
                            >Gửi</button>
                          </div>

                          <a className="small text-muted" href="#!">Quên mật khẩu?</a>
                          <p className="mb-5 pb-lg-2" style={{color: "#393f81"}}>Bạn chưa có tài khoản? <a href="#!" style={{color: "#393f81"}}>Đăng ký thôi nào</a></p>
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