import "./Sidebar.css";

const Sidebar = props => {

    const arr = [...Array(10).keys()];

    return <div className="px-3 py-3 height-middle">
        
        <ul class="list-unstyled chat-list mt-2 mb-0">

            {
                arr.map(_ => {

                    return  <li class="clearfix active d-flex mb-3">
                    <img src="https://bootdey.com/img/Content/avatar/avatar2.png" alt="avatar" className='me-2'/>
                    <div class="about">
                        <div class="name">Aiden Chavez</div>
                        <div class="status"> <i class="fa fa-circle online"></i> online </div>
                    </div>
                </li>
                }) 
            }

           
                        
        </ul>
    </div>
}

export default Sidebar;