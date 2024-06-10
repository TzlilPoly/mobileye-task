import {describe, expect, it, jest} from '@jest/globals';
import JobList from "./JobList.jsx";
import {fireEvent, render, screen} from '@testing-library/react';
import "@testing-library/jest-dom";
import {timeConverter} from "../../helpers/Time.js";


const mockJob = {
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
const mockJobList = [{...mockJob}, {...mockJob, id: 2}];

const jobDetails = [
    {title: "status", value: mockJobList[0].status, row: 1},
    {title: "user", value: mockJobList[0].metadata.user, row: 1},
    {title: "group", value: mockJobList[0].metadata.group, row: 1},
    {title: "submitted date", value: timeConverter(mockJobList[0].metadata.submitted_date), row: 1},
    {title: "completed date", value: timeConverter(mockJobList[0].metadata.completed_date), row: 1},
    {title: "cli command", value: mockJobList[0].cli_command, row: 2},
    {title: "logs", value: mockJobList[0].metadata.logs.join(', '), row: 3},
]

jest.mock('../../hooks/useJobsData.jsx', () => ({
    __esModule: true,
    default: () => ({
        data: mockJobList,
        loading: false,
        error: null,
    }),
}));

describe('<JobList/> Component Testing', () => {

    it('should render jobs names', () => {
        render(<JobList/>)
        const element = screen.getAllByTestId('name');
        expect(element.length).toBe(2);
        element.forEach((el, index) => expect(el).toHaveTextContent(mockJobList[index].name))
    });


    it('should display all job details upon click on the name', () => {
        render(<JobList/>)
        const element = screen.getByTestId(`container--${mockJobList[0].id}`);
        fireEvent.click(element);
        jobDetails.forEach(async ({title}) => {
            expect(screen.getByTestId(title)).toBeInTheDocument();
        })
    });

});