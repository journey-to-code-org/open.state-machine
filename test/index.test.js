import test from "node:test";
import assert from "node:assert/strict";
import { createStateMachine } from "../src/index.js";
test("transitions states",()=>{const m=createStateMachine({initial:"idle",transitions:{idle:{start:"running"},running:{stop:"idle"}}});assert.equal(m.transition("start"),true);assert.equal(m.state,"running");});
test("guards transitions",()=>{const m=createStateMachine({initial:"locked",context:{ok:false},transitions:{locked:{open:{target:"open",guard:c=>c.ok}}}});assert.equal(m.transition("open"),false);m.context.ok=true;assert.equal(m.transition("open"),true);});
test("runs actions",()=>{const m=createStateMachine({initial:"a",context:{n:0},transitions:{a:{go:{target:"b",action:c=>c.n++}}}});m.transition("go");assert.equal(m.context.n,1);});
