export const offices = [
 {id:'warragul-drouin',name:'Warragul–Drouin',short:'WD',written:482000,unconditional:368000,sales:31,listings:42,pum:846,gains:19,losses:7,target:550000,colour:'#6d91ff'},
 {id:'berwick',name:'Berwick',short:'BE',written:615000,unconditional:491000,sales:38,listings:51,pum:1124,gains:26,losses:9,target:650000,colour:'#35d8b3'},
 {id:'pakenham',name:'Pakenham',short:'PA',written:387000,unconditional:294000,sales:26,listings:35,pum:682,gains:17,losses:8,target:450000,colour:'#b2a2ff'}
] as const;
export type Office = typeof offices[number];
export const periods = ['November 2026','October 2026','September 2026'] as const;
export const factors = [1,0.91,0.84];
export function summarise(rows: readonly Office[], factor=1) { const sum=(key:'written'|'unconditional'|'sales'|'listings'|'pum'|'gains'|'losses'|'target')=>rows.reduce((a,o)=>a+o[key],0); return {written:Math.round(sum('written')*factor),unconditional:Math.round(sum('unconditional')*factor),sales:Math.round(sum('sales')*factor),listings:Math.round(sum('listings')*factor),pum:sum('pum')-Math.round((1-factor)*200),gains:Math.round(sum('gains')*factor),losses:Math.round(sum('losses')*factor),net:Math.round(sum('gains')*factor)-Math.round(sum('losses')*factor),target:sum('target')}; }
export function forecast(written:number,scenario='base') { return Math.round(written*(scenario==='conservative'?1.06:scenario==='upside'?1.25:1.15)); }
export const money=(v:number)=>new Intl.NumberFormat('en-AU',{style:'currency',currency:'AUD',maximumFractionDigits:0}).format(v);
export const compact=(v:number)=>v>=1000000?`$${(v/1000000).toFixed(2)}m`:`$${Math.round(v/1000)}k`;
export const agents=[{name:'Alex Morgan',office:'berwick',gci:184000,listings:14},{name:'Sam Taylor',office:'warragul-drouin',gci:162000,listings:12},{name:'Jordan Lee',office:'pakenham',gci:148000,listings:11},{name:'Casey Williams',office:'berwick',gci:137000,listings:10}];
export const salesSlides=['Sales overview','Office performance','Sales leaderboard','Activity & appraisals','Buyer & listing activity','Sales forecast'];
export const pmSlides=['Rent roll overview','Rent roll target','Business development','Leasing','Retention & service','PM recognition'];
export type Playlist = { duration:number; slides:number[] };
export const defaultPlaylist:Playlist={duration:20,slides:[0,1,2,3,4,5]};
export function parsePlaylist(raw:string|null):Playlist { try { const p=JSON.parse(raw||'null'); if(p && Number.isInteger(p.duration) && p.duration>=5 && p.duration<=120 && Array.isArray(p.slides) && p.slides.length && p.slides.every((n:unknown)=>Number.isInteger(n)&&Number(n)>=0&&Number(n)<6) && new Set(p.slides).size===p.slides.length) return p; } catch {} return {...defaultPlaylist,slides:[...defaultPlaylist.slides]}; }
