import { SidebarComponent, ListContainer, SelectorTab, SidebarWrapper } from "./style"
import { IoLink } from "react-icons/io5";
import { MdAttachEmail } from "react-icons/md";
const Sidebar = () => {
    return (
        <SidebarComponent>
            <SidebarWrapper>
                <SelectorTab>
                    <div className="headerContainer">
                        <h1>Orbit <IoLink style={{ transform: "rotate(-45deg)" }} /> Linker</h1>
                    </div>
                </SelectorTab>
                <ListContainer>
                    <a className="listHandler listHandlerActive" href="/">
                        <MdAttachEmail />
                        <li>send Email</li>
                    </a>
                </ListContainer>
            </SidebarWrapper>
        </SidebarComponent>
    )
}

export default Sidebar
