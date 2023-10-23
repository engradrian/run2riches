import "../../styles/NavbarSelector.css"

function NavbarSelector(props) {
    return(
        <div className={`
            navbarSelector
            ${props.isEnglish && props.giớiThiệuSảnPhẩm ? "position6" : ""}
            ${props.câuHỏiThườngGặp && props.isEnglish ? "position7" : props.câuHỏiThườngGặp && "position2"}
            ${props.tảiỨngDụng && props.isEnglish ? "position8" : props.tảiỨngDụng && "position3"}
            ${props.liênHệChúngTôi && props.isEnglish ? "position9" : props.liênHệChúngTôi && "position4"}
            ${props.hủyTàiKhoản && props.isEnglish ? "position10" : props.hủyTàiKhoản && "position5"}
            `
        }></div>
    )
}

export default NavbarSelector