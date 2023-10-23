import "../../styles/SidebarLanguageSelector.css"

function SidebarLanguageSelector(props) {
    return(
        <div className={`languageContainer ${props.showSidebarLanguageSelector && props.sidebar ? "showSidebarLanguageSelector" : ""}`}>
            <div onClick={props.isEnglish ? props.changeLanguage : null} className={`sidebarLanguage ${props.isEnglish ? "" : "selectedSidebarLanguage"}`}>Tiếng Việt</div>
            <div onClick={!props.isEnglish ? props.changeLanguage : null} className={`sidebarLanguage ${props.isEnglish ? "selectedSidebarLanguage" : ""}`}>English</div>
        </div>
    )
}

export default SidebarLanguageSelector