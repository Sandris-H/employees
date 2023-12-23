import "./app-info.css";

const AppInfo = ({employeesNumber, increasedNumber}) => {
    return (
        <div className="app-info">
            <h1>Accounting of employees in the company</h1>
            <h2>Total number of employees: {employeesNumber}</h2>
            <h2>Number of employees receiving bonuses: {increasedNumber}</h2>
        </div> 
    );
}

export default AppInfo;