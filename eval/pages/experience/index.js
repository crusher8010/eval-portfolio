import Navbar from "../navbar";

function Experience() {
    return (
        <div>
            <Navbar />
            <div style={{display:"flex", backgroundColor:"lightgray", width:"80%", margin:"auto", marginTop:"30px", borderRadius:"30px", padding:"15px"}}>
                <div style={{color:"#333"}}>
                <div style={{ marginTop: "20px", marginLeft: "20px" }}>
                    <h2>Masai School</h2>
                    <p>May-2022</p>
                </div>
                <div style={{ marginTop: "20px", marginLeft: "20px" }}>
                    <h2>NIT Durgapur</h2>
                    <p>2016-2020</p>
                </div>
                <div style={{ marginTop: "20px", marginLeft: "20px" }}>
                    <h2>Narayana Junior College</h2>
                    <p>2014-2026</p>
                </div>
                <div style={{ marginTop: "20px", marginLeft: "20px" }}>
                    <h2>C.Rly English Medium School</h2>
                    <p>2007-2014</p>
                </div>
                </div>
            </div>
        </div>
    )
}

export default Experience;