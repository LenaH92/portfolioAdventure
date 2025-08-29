import LanguageSwitch from "./LanguageSwitch";

const Navbar = () => {
    return (<>
        <LanguageSwitch />
        <div>
            <p>MAP</p>
            {/* will pobably need to make a component just fo the map button so language chages (?)
            !! Need also to ceate the map language inputs in jsons :D */}
        </div>
    </>);
}

export default Navbar;