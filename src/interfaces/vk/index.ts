import { IVKObjects } from "./objects";
import { IVKOptions } from "./options";
import { IVKParameters } from "./parameters";
import { IVKResponses } from "./responses";

export namespace IVK {
  export namespace API {
    export import Objects = IVKObjects;
    export import Options = IVKOptions;
    export import Parameters = IVKParameters;
    export import Responses = IVKResponses;
  }
}
