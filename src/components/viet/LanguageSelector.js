import "../../styles/LanguageSelector.css"

function LanguageSelector(props) {
    return(
        <div class={`languageSelector ${props.showLanguageSelector ? "showLanguageSelector" : ""}`}>
            <div class="language selectedLanguage">Tiếng Việt</div>
            <div class="language" onClick={props.changeLanguage}>English</div>
        </div>
    )
}

export default LanguageSelector