
// @ts-ignore
// Interface of reacived Object from API
interface ITile {
    adress: {adress_formatted: string, street_address: string, postal_code: string, adress_locality: string, adress_region: string, adress_country: string},
    description: string,
    district: string,
    id: string,
    image: {url: string},
    name: string,
    properties: property[]
}
//interface for objects properties
interface property {
    id: string,
    description: string,
    value: string | number,
    updated_at: string,
    url: string
}

//props for Tile component
interface ITileProps {
    info: ITile;
}

interface IModalDetail {
    isOpen: boolean;
    ModalId: string;
}
// localize parameters
interface  Ilanguages  {
    [index: string]: IlanguageSet
}
interface  IlanguageSet {
    [index: string]: string
}


