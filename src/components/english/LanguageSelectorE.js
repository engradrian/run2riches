import "../../styles/english/LanguageSelectorE.css"

function LanguageSelectorE(props) {
    return(
        <div class={`languageSelectorE ${props.showLanguageSelector ? "showLanguageSelectorE" : ""}`}>
            <div onClick={props.changeLanguage} class="language">Tiếng Việt</div>
            <div class="language selectedLanguage">English</div>
        </div>
    )
}

export default LanguageSelectorE