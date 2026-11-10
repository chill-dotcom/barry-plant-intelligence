import { test } from 'node:test';
import assert from 'node:assert/strict';
import { forecast, offices, parsePlaylist, summarise } from '../lib/demo.ts';
test('office scopes aggregate without mixing written and unconditional GCI',()=>{const d=summarise(offices);assert.equal(d.written,1484000);assert.equal(d.unconditional,1153000);assert.equal(d.pum,2652);assert.equal(d.net,d.gains-d.losses);assert.equal(summarise([offices[1]]).written,615000)});
test('forecast scenarios remain separate from actual revenue',()=>{assert.equal(forecast(100000),115000);assert.equal(forecast(100000,'conservative'),106000);assert.equal(forecast(100000,'upside'),125000);assert.equal(summarise(offices).written,1484000)});
test('invalid or empty playlists fall back to a safe six-slide rotation',()=>{for(const value of ['null','bad','{"duration":0,"slides":[]}','{"duration":20,"slides":[99]}','{"duration":20,"slides":[0,0]}']) assert.deepEqual(parsePlaylist(value),{duration:20,slides:[0,1,2,3,4,5]});assert.deepEqual(parsePlaylist('{"duration":30,"slides":[3,0]}'),{duration:30,slides:[3,0]})});
