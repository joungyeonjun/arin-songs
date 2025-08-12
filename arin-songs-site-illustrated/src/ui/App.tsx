
import React from 'react'
import { IconSleep, IconRattle, IconBear, IconChat, IconMic, IconNotes } from '../icons'

export default function App(){
  return <div style={{padding:20}}>
    <h1>아린이 동요집 — 일러스트 카드 버전</h1>
    <div style={{display:'flex',gap:10,flexWrap:'wrap'}}>
      <StageCard icon={<IconSleep/>} label="0–6개월" color="#fda4af" />
      <StageCard icon={<IconRattle/>} label="6–12개월" color="#fde68a" />
      <StageCard icon={<IconBear/>} label="12–24개월" color="#86efac" />
      <StageCard icon={<IconChat/>} label="24–36개월" color="#93c5fd" />
      <StageCard icon={<IconMic/>} label="3–4세" color="#c4b5fd" />
      <StageCard icon={<IconNotes/>} label="4–5세+" color="#f9a8d4" />
    </div>
  </div>
}

function StageCard({icon,label,color}:{icon:React.ReactNode,label:string,color:string}){
  return <div style={{flex:'0 0 140px',border:'1px solid #ccc',borderRadius:10,padding:10,background:'#fff'}}>
    <div style={{fontSize:30,background:color,borderRadius:8,padding:10}}>{icon}</div>
    <div style={{marginTop:5,fontWeight:'bold'}}>{label}</div>
  </div>
}
