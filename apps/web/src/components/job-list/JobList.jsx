import './JobList.css';
import {useState} from "react";
import JobListItem from "../job-list-item/JobListItem.jsx";
import useJobsData from "../../hooks/useJobsData.jsx";

function JobList() {

    const [openJobKey, setOpenJobKey] = useState('');

    const {data, loading} = useJobsData()

    return <div className='container'>
        <div className='job-list'>
            <div className='job-list-header'>
                <div>Job List:</div>
            </div>
            <div className='job-list-body'>
                {!loading&&data.map(item => <JobListItem key={item.id} showDetails={item.id === openJobKey}
                                                         setOpenJobKey={setOpenJobKey} job={item}/>)}
            </div>
        </div>
    </div>
}

export default JobList;
