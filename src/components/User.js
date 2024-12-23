import { useState } from "react"

const User=(props)=>{
    const {name,location}=props
    const [count1] =useState(1);
    const [count2] =useState(2);
    // console.log(props)
    return(<div className="userCard">
    <h2>Name:{name}</h2>
    <h3>Location:{location}</h3>
    <h3>Gmail:simran@gmail.com</h3>
    <h1>count1={count1}</h1>
    <h1>count2={count2}</h1>
    
</div>)
}
export default User