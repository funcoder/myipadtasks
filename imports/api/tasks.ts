import { Mongo } from 'meteor/mongo';

export interface Task {
    _id?: string;
    title: string;
}

export const TasksCollection = new Mongo.Collection<Task>('tasks');


