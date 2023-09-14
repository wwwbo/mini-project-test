export interface Activities {
    data: Activity[];
}

export interface Activity {
    id: number;
    author: string;
    action: string;
    description: string;
    time: number;
}