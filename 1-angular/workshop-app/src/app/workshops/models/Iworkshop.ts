interface ILocation {
    address : string;
    city: string;
    state: string;
}

interface IModes {
    inPerson: boolean;
    online: boolean;
}

interface IWorkshop {
    name: string;
    category: string;
    id: number;
    description: string;
    startDate: string;
    endDate: string;
    time: string;
    location: ILocation;
    modes:IModes;
    imageUrl:string;

}

export type {
    ILocation,
    IModes,
    IWorkshop as default
}