import{a as s,j as c,e as a}from"./index-c264c5b0.js";const o=()=>{const[i,t]=s.useState([]);return s.useEffect(()=>{(async()=>{try{const e=await a.get("/exercises"),r=[...e.data.bodyPart,...e.data.equipment,...e.data.target];t(r)}catch(e){console.error("Error fetching exercises:",e)}})()},[]),c.jsx("div",{})},E=o;export{E};
