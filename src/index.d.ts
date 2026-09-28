export interface TransitionSpec<C=any,P=any>{target:string;guard?:(context:C,payload:P)=>boolean;action?:(context:C,payload:P,meta:{from:string;to:string;event:string})=>void;}
export interface MachineConfig<C=any>{initial:string;context?:C;transitions:Record<string,Record<string,string|TransitionSpec<C,any>>>;onTransition?:(event:{from:string;to:string;event:string;payload:unknown;context:C})=>void;}
export interface StateMachine<C=any>{readonly state:string;readonly context:C;can(event:string,payload?:unknown):boolean;transition(event:string,payload?:unknown):boolean;}
export function createStateMachine<C=Record<string,unknown>>(config:MachineConfig<C>):StateMachine<C>;
