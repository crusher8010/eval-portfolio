import Navbar from "../navbar";

function Projects(props) {
    const { projects } = props;

    const { items } = projects;

    return (
        <div>
            <Navbar />
            <div style={{ width: "72%", display: "grid", gridTemplateColumns: "repeat(2, 1fr)", margin:"auto", gap:"20px" }}>
                {items.map((item) => {
                    return (
                        <div key={item.id} style={{marginTop:"20px", backgroundColor:"teal", padding:"12px", borderRadius:"20px"}}>
                            <h1>Project: {item.name}</h1>
                            <div style={{ display: "flex", gap: "20px", flexWrap: "wrap", marginTop:"10px" }}>
                                {item.topics.map((temp) => <div key={temp} style={{backgroundColor:"orange", padding:"5px", borderRadius:"20px"}}>{temp}</div>)}
                            </div>
                            <p style={{ marginTop: "10px" }}>Forks Count: {item.forks_count}</p>
                            <p style={{ marginTop: "10px" }}>Stars Count: {item.stargazers_count}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export async function getServerSideProps() {
    let res2 = await fetch('https://api.github.com/search/repositories?q=user:crusher8010+fork:true&sort=updated&per_page=10&type=Repositories')
    let data2 = await res2.json();


    return {
        props: {
            projects: data2
        }
    }
}

export default Projects;