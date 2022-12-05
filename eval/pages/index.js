import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Navbar from './navbar'

export default function Home(props) {
  const {data1, data2} = props
  let skills = ["React", "React-Redux", "Javascript", "HTML-CSS", "NodeJS", "MongoDB"];

  const {avatar_url, login, bio} = data1;
  const {items} = data2;
  
  return (
    <div >
      <Navbar />
      <div style={{display:"flex", gap:"20px"}}>
        <div style={{display:"flex", width:"25%", flexDirection:"column"}}>
          <div style={{width:"100%",margin:"auto", textAlign:"center"}}>
            <img style={{width:"150px", borderRadius:"50%"}} src={avatar_url} title={login} />
            <h4>{login}</h4>
            <p>{bio}</p>
            <div style={{width:"50%", display:"flex", justifyContent:"space-around", margin:"auto"}}>
              <button>Resume</button>
              <button>Follow</button>
            </div>
          </div>
          <div style={{display:"grid", gridTemplateColumns:"repeat(3,1fr)",  marginTop:"15px", listStyle:"none", gap:"20px"}}>
            {skills.map((item) => {
              return (
                <div key={item} style={{backgroundColor:"teal", borderRadius:"20px", textAlign:"center"}}>{item}</div>
              )
            })}
          </div>
          <div>
            <div style={{marginTop:"20px", marginLeft:"20px"}}>
              <h2>Masai School</h2>
              <p>May-2022</p>
            </div>
            <div style={{marginTop:"20px", marginLeft:"20px"}}>
              <h2>NIT Durgapur</h2>
              <p>2016-2020</p>
            </div>
            <div style={{marginTop:"20px", marginLeft:"20px"}}>
              <h2>Narayana Junior College</h2>
              <p>2014-2026</p>
            </div>
            <div style={{marginTop:"20px", marginLeft:"20px"}}>
              <h2>C.Rly English Medium School</h2>
              <p>2007-2014</p>
            </div>
          </div>
        </div>
        <div style={{width:"72%", display:"grid", gridTemplateColumns: "repeat(2, 1fr)", gap:"25px", marginTop:"20px"}}>
          {items.map((item) => {
            return (
              <div key={item.id} style={{backgroundColor:"#333", borderRadius:"20px", padding:"15px"}}>
                <h1>Project: {item.name}</h1>
                <div style={{display:"flex", gap:"20px", flexWrap:"wrap"}}>
                {item.topics.map((temp) => <p key={temp} style={{borderRadius:"10px", backgroundColor:"lightSalmon", padding:"3px"}}>{temp}</p>)}
                </div>
                <p style={{marginTop:"10px"}}>Forks Count: {item.forks_count}</p>
                <p style={{marginTop:"10px"}}>Stars Count: {item.stargazers_count}</p>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export async function getServerSideProps(){
  let res1 = await fetch('https://api.github.com/users/crusher8010');
  let data1 = await res1.json();
  

  let res2 = await fetch('https://api.github.com/search/repositories?q=user:crusher8010+fork:true&sort=updated&per_page=10&type=Repositories')
  let data2 = await res2.json();

  
  return {
    props:{
      data1: data1,
      data2: data2,
    }
  }
}