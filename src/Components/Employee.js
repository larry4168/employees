import EditEmployee from "./EditEmployee";

const Employee = (props) => {
    return(
        <div className="min-w-[300] max-w-[300px] py-3 px-2 m-2 bg-white rounded-xl shadow-lg space-y-2 sm:py-3 sm:flex sm:items-center sm:space-y-0 sm:space-x-2">
            <img className="object-cover rounded-full h-[100px] w-[100px] block mx-auto sm:mx-0 sm:shrink-0" 
                src={props.img} 
                alt="" />
            <div className="text-center space-y-2 sm:text-left">
                <div className="space-y-0.5">
                    <p className="text-lg text-black font-semibold">
                        {props.name}
                    </p>
                    <p className="text-slate-500 font-medium">
                        {props.role}
                    </p>
                </div>

                <div className="flex flex-row space-x-2">
                    <EditEmployee 
                        id={props.id}
                        name={props.name} 
                        role={props.role} 
                        updateEmployee={props.updateEmployee}/>

                    <button onClick={() => {
                        alert("Are you sure you want to delete this?")
                        props.delHandler(props.id);
                    }} className="px-3 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">
                        Delete
                    </button>
                </div>

            </div>
        </div>
    )
};

export default Employee;