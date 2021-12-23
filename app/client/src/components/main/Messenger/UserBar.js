import './UserBar.css';

const UserBar = ({user}) => {


    return <div className="userbar d-flex">
        <div className='p-1 col-3 text-center'>
        <img src="https://bootdey.com/img/Content/avatar/avatar1.png" className="img-fluid avatar"/>
        </div>
        <div className='p-1 col-9'>
            <h4 className='text-capitalize'>bui huu tien dat</h4>
        </div>
    </div>


}


export default UserBar;