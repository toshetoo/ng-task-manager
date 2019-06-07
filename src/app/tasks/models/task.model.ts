import AssigneeInterface from './assignee.model';

export default interface TaskInterface {
    id?: string;
    title: string;
    description?: string;
    creationDate: string;
    assignees?: AssigneeInterface[];
}