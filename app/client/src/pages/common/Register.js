import { useEffect, useState } from "react";
import {Link} from 'react-router-dom';
import pathName from '../../pathname';
import { register } from "../../api/services";

const Register = props => {
    
    const [warningTexts, setWarningTexts] = useState([]);
    const WARNING_ON_REPASS = "Mật khẩu không khớp";
    const WARNING_ON_EMAIL = "Email phải có định dạng a@b.com";
    const WARNING_ON_USERNAME = "Tài khoản phải có độ dài từ 3 đến 20 ký tự";

    const [data, setData] = useState({

        username: '',
        password: '',
        email: '',
        rePassword: ''
    });

    useEffect(() => {

        let newWarningTexts = [];

        if (data.password !== data.rePassword)
            newWarningTexts = ([...newWarningTexts, WARNING_ON_REPASS]);
        if (!validateEmail())
            newWarningTexts = ([...newWarningTexts, WARNING_ON_EMAIL]);
        console.log(data.username.length);
        if (data.username.length < 3 || data.username.length > 20)
            newWarningTexts= [...newWarningTexts, WARNING_ON_USERNAME];
        setWarningTexts([...newWarningTexts]);

    }, [data]);

    const handleOnChange = (event) => {

        data[event.target.name] = event.target.value;
        
        setData({...data});
        console.log(warningTexts);
    }

    const validateEmail = () => {

        
        if (/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(data.email))
        {
            return (true)
        }
        return (false)
    }

    const handleOnSubmit = (event) => {

        event.preventDefault();

        register(data);
    }


    return (
        <section>
            <div className="mask d-flex h-100 gradient-custom-3">
                <div className="container h-50 p-2">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-12 col-md-9 col-lg-7 col-xl-6">
                    <div className="card" style={{borderRadius: "15px"}}>
                        <div className="card-body p-5">
                        <h2 className="text-uppercase text-center mb-5">Tạo tài khoản mới</h2>

                        <form>

                            <div className="form-outline mb-4">
                            <input type="text" id="form3Example1cg" className="form-control form-control-lg" 
                                name="username" onChange={handleOnChange}
                            />
                            <label className="form-label" for="form3Example1cg">Tài khoản</label>
                            </div>

                            <div className="form-outline mb-4">
                            <input type="email" id="form3Example3cg" className="form-control form-control-lg" 
                                name="email" onChange={handleOnChange}
                            />
                            <label className="form-label" for="form3Example3cg">Địa chỉ email</label>
                            </div>

                            <div className="form-outline mb-4">
                            <input type="password" id="form3Example4cg" className="form-control form-control-lg" 
                                name="password" onChange={handleOnChange}
                            />
                            <label className="form-label" for="form3Example4cg">Mật khẩu</label>
                            </div>

                            <div className="form-outline mb-4">
                            <input type="password" id="form3Example4cdg" className="form-control form-control-lg"
                                name="rePassword" onChange={handleOnChange}
                            />
                            <label className="form-label" for="form3Example4cdg">Nhập lại mật khẩu</label>
                            </div>

                    
                            <div className="d-flex justify-content-center mb-2">
                                <button type="button" className="btn btn-outline-dark" onClick={handleOnSubmit}>Register</button>
                            </div>
                            
                            {
                                warningTexts.map((text, index) => 
                                
                                    <h5 className="mt-1 text-danger" style={{borderRadius: "3px"}} key={index}>{text}</h5>
                                   
                                )
                            }

                            <p className="text-center text-muted mt-5 mb-0">Bạn đã có tài khoản? 
                            <Link to={pathName.LOGIN} className="fw-bold text-body"><u>Đi tới trang đăng nhập</u></Link></p>

                        </form>

                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
</section>
    );
}


export default Register;