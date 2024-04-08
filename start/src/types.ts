import type { Buffer } from "buffer";

export interface NavigationLink{
    name : string;
    url : string;
}
export interface Character{
    id : string;
    name : string;
    img : File | null | string | Blob| Buffer;
    description : string;
    ability : string;
    host : string;
    show : boolean;
}