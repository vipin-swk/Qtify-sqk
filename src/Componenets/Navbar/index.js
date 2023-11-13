import SearchBox  from "../SearchBox";
import Button from "../Button";
import './Navbar.css'

export default () => {
    return <div className="navbar">
    <img src="logo.png" height={34} width={67}/>
    <SearchBox/>
    <Button children="Give Feedback"/>
</div>
};