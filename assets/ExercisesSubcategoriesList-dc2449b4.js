import{a as t,j as i,e as a}from"./index-e6cb168e.js";const n=()=>{const[x,c]=t.useState([]);return t.useEffect(()=>{(async()=>{try{const r={headers:{Authorization:"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1ZTdmNWMxMzVkMDMzNGExMWJmZDUwZiIsImlhdCI6MTcxMDAxNjI3NywiZXhwIjoxNzEwMDk5MDc3fQ.aI3kmFl8HoTdpl6oJkojjqSxgx-uU4I0B7EMuVQ9a8I"}},e=await a.get("https://project-qwerty2024-back.onrender.com/api/exercises",r),o=[...e.data.bodyPart,...e.data.equipment,...e.data.target];c(o)}catch(s){console.error("Error fetching exercises:",s)}})()},[]),i.jsx("div",{})},p=n;export{p as E};
