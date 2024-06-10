import './JobListItem.css';
import {useMemo} from "react";
import {timeConverter} from "../../helpers/Time.js";



function JobListItem(props) {

    const {job, setOpenJobKey, showDetails} = props;

    const jobDetails = useMemo(() => [
        {title: "status", value: job.status, row:1},
        {title: "user", value: job.metadata.user, row:1},
        {title: "group", value: job.metadata.group, row:1},
        {title: "submitted date", value: timeConverter(job.metadata.submitted_date), row:1},
        {title: "completed date", value: timeConverter(job.metadata.completed_date), row:1},
        {title: "cli command", value: job.cli_command, row: 2},
        {title: "logs", value: job.metadata.logs.join(', '), row:3},

    ], [job]);

    return <div className={`job-container ${showDetails ? 'open' : ''}`} data-testid={`container--${job.id}`} onClick={() => setOpenJobKey(job.id)}>
        <div className='job-list-row'>
            <div className={`job-list-row-item ${showDetails ? 'open' : ''}`} data-testid="name">
                {job.name}
            </div>
        </div>
        {showDetails && (
            <div className="job-list-row details">
                {jobDetails.map(detail => <div className={`job-list-row-item details row-${detail.row}`} key={detail.title}  data-testid={detail.title}>
                    <h3 className="job-list-row-title">{detail.title}:</h3>
                    {detail.value}
                </div>)}
            </div>
        )}

    </div>

}

export default JobListItem;
