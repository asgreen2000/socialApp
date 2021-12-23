import UserBar from "./UserBar";


const Sidebar = props => {

    const arr = [...Array(10).keys()];

    return <div className="px-3 py-2">

        {
            arr.map(() => {

                return <div className=""><UserBar /></div>
            })
        }
    </div>
}

export default Sidebar;