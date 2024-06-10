import {describe, expect, it, jest} from '@jest/globals';
import JobListItem from "./JobListItem.jsx";
import {render, screen} from '@testing-library/react';
import {timeConverter} from "../../helpers/Time.js";
import "@testing-library/jest-dom";

describe('<JobListItem/> Component Testing', () => {

    const mockedJob = {
        "id": "1",
        "name": "aws_s3_bucket",
        "cli_command": "npm install mysoftware",
        "status": "pending",
        "metadata": {
            "user": "user1",
            "group": "group1",
            "submitted_date": "1717921892",
            "completed_date": "1717921962",
            "logs": [
                "line1",
                "line2"
            ]
        }
    }
    const jobDetails = [
        {title: "status", value: mockedJob.status, row: 1},
        {title: "user", value: mockedJob.metadata.user, row: 1},
        {title: "group", value: mockedJob.metadata.group, row: 1},
        {title: "submitted date", value: timeConverter(mockedJob.metadata.submitted_date), row: 1},
        {title: "completed date", value: timeConverter(mockedJob.metadata.completed_date), row: 1},
        {title: "cli command", value: mockedJob.cli_command, row: 2},
        {title: "logs", value: mockedJob.metadata.logs.join(', '), row: 3},
    ]


    it('should render job name',  () => {
        const mockSetOpenJobKey = jest.fn();
        render(<JobListItem setOpenJobKey={mockSetOpenJobKey} job={mockedJob} showDetails={true}/>)

        const element =  screen.getByTestId('name');
        expect(element).toHaveTextContent(mockedJob.name);
    });

    describe("should render job details",()=>{
    jobDetails.forEach( ({title, value}) => {
        it(`should render title ${title} with correct text`,  () => {
            const mockSetOpenJobKey = jest.fn();
            render(<JobListItem setOpenJobKey={mockSetOpenJobKey} job={mockedJob} showDetails={true}/>)

            const element = screen.getByTestId(title);
            expect(element).toHaveTextContent(value);
        });
    })
    })
});