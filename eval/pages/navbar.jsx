import Link from "next/link";

function Navbar(){
    return (
        <div style={{display:"flex", justifyContent:"space-between", backgroundColor:"#00308F"}}>
            <div style={{display:"flex", justifyContent:"space-around", width:"40%", alignItems:"center", cursor:"pointer"}}>
                <Link href={"/"}><h3>Anirudha Mandal</h3></Link>
                <Link href={"/projects"}><h3>Projects</h3></Link>
                <Link href={"/experience"}><h3>Experience</h3></Link>
            </div>
            <div>
                <img style={{width:"60px", borderRadius:"50%"}} src="https://avatars.githubusercontent.com/u/107460084?v=4" alt="" />
            </div>
        </div>
    )
}

export default Navbar;