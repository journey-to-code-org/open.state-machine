export function createStateMachine(config) {
  if (config===null || typeof config!=="object" || Array.isArray(config)) throw new TypeError("Expected config to be an object");
  const { initial, transitions, context = {}, onTransition }=config;
  if(typeof initial!=="string" || !initial)throw new TypeError("Expected initial to be a non-empty string");
  if(transitions===null || typeof transitions!=="object" || Array.isArray(transitions))throw new TypeError("Expected transitions to be an object");
  if(onTransition!==undefined && typeof onTransition!=="function")throw new TypeError("Expected onTransition to be a function");
  let state=initial;
  const ctx=context;
  return {
    get state(){return state;},
    get context(){return ctx;},
    can(event,payload){return resolveTransition(transitions,state,event,ctx,payload)!==null;},
    transition(event,payload){
      const next=resolveTransition(transitions,state,event,ctx,payload);
      if(!next) return false;
      const from=state; state=next.target;
      next.action?.(ctx,payload,{from,to:state,event});
      onTransition?.({from,to:state,event,payload,context:ctx});
      return true;
    }
  };
}
function resolveTransition(transitions,state,event,context,payload){
  const spec=transitions[state]?.[event];
  if(!spec)return null;
  const normalized=typeof spec==="string"?{target:spec}:spec;
  if(!normalized || typeof normalized.target!=="string")throw new TypeError(`Invalid transition for ${state}.${event}`);
  if(normalized.guard && !normalized.guard(context,payload))return null;
  return normalized;
}
