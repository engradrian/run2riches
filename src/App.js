import React from 'react'
import CâuHỏiThườngGặp from './components/viet/CâuHỏiThườngGặp';
import GiớiThiệuSảnPhẩm from './components/viet/GiớiThiệuSảnPhẩm';
import HủyTàiKhoản from './components/viet/HủyTàiKhoản';
import LiênHệChúngTôi from './components/viet/LiênHệChúngTôi';
import Navbar from './components/viet/Navbar';
import Sidebar from './components/viet/Sidebar';
import TảiỨngDụng from './components/viet/TảiỨngDụng';

import AccountCancellation from './components/english/AccountCancellation';
import ContactUs from './components/english/ContactUs';
import Download from './components/english/Download';
import FAQ from './components/english/FAQ';
import Home from './components/english/Home';
import NavbarE from './components/english/NavbarE';
import NavbarSelector from './components/viet/NavbarSelector';

import './App.css';
// import CryptoTable from './components/english/CryptoTable';

function App() {
  const [giớiThiệuSảnPhẩm, setGiớiThiệuSảnPhẩm] = React.useState(true)
  const [câuHỏiThườngGặp, setCâuHỏiThườngGặp] = React.useState(false)
  const [tảiỨngDụng, setTảiỨngDụng] = React.useState(false)
  const [liênHệChúngTôi, setLiênHệChúngTôi] = React.useState(false)
  const [hủyTàiKhoản, setHủyTàiKhoản] = React.useState(false)
  const [sidebar, setShowSidebar] = React.useState(false)

  const [showLanguageSelector, setShowLanguageSelector] = React.useState(false)

  function showLanguageSelectorClick() {
      setShowLanguageSelector(prevState => !prevState)
  }

  const [showSidebarLanguageSelector, setShowSidebarSelector] = React.useState(false)

  function showSidebarLanguageSelectorClick() {
      setShowSidebarSelector(prevState => !prevState)
  }

  const [isEnglish, setIsEnglish] = React.useState(false)

  function changeLanguage() {
    setIsEnglish(prevState => !prevState)
    setShowLanguageSelector(false)
    setShowSidebar(false)
    setShowSidebarSelector(false)
  }

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  function showSidebar() {
    setShowSidebar(true)
    console.log("Show Sidebar")
  }
  function hideSidebar(){
    setShowSidebar(false)
    setShowSidebarSelector(false)
  }
  function giớiThiệuSảnPhẩmClick() {
    setGiớiThiệuSảnPhẩm(true)
    setCâuHỏiThườngGặp(false)
    setTảiỨngDụng(false)
    setLiênHệChúngTôi(false)
    setHủyTàiKhoản(false)
    setShowSidebar(false)
    setShowSidebarSelector(false)
    setShowLanguageSelector(false)
    scrollToTop()
  }
  function câuHỏiThườngGặpClick() {
    setGiớiThiệuSảnPhẩm(false)
    setCâuHỏiThườngGặp(true)
    setTảiỨngDụng(false)
    setLiênHệChúngTôi(false)
    setHủyTàiKhoản(false)
    setShowSidebar(false)
    setShowSidebarSelector(false)
    setShowLanguageSelector(false)
    scrollToTop()
  }
  function tảiỨngDụngClick() {
    setGiớiThiệuSảnPhẩm(false)
    setCâuHỏiThườngGặp(false)
    setTảiỨngDụng(true)
    setLiênHệChúngTôi(false)
    setHủyTàiKhoản(false)
    setShowSidebar(false)
    setShowSidebarSelector(false)
    setShowLanguageSelector(false)
    scrollToTop()
  }
  function liênHệChúngTôiClick() {
    setGiớiThiệuSảnPhẩm(false)
    setCâuHỏiThườngGặp(false)
    setTảiỨngDụng(false)
    setLiênHệChúngTôi(true)
    setHủyTàiKhoản(false)
    setShowSidebar(false)
    setShowSidebarSelector(false)
    setShowLanguageSelector(false)
    scrollToTop()
  }
  function hủyTàiKhoảnClick() {
    setGiớiThiệuSảnPhẩm(false)
    setCâuHỏiThườngGặp(false)
    setTảiỨngDụng(false)
    setLiênHệChúngTôi(false)
    setHủyTàiKhoản(true)
    setShowSidebar(false)
    setShowSidebarSelector(false)
    setShowLanguageSelector(false)
    scrollToTop()
  }

  return (
    <div className="App">
      {isEnglish ? 
        <NavbarE 
        GiớiThiệuSảnPhẩmClick={giớiThiệuSảnPhẩmClick} 
        CâuHỏiThườngGặpClick={câuHỏiThườngGặpClick}
        TảiỨngDụngClick={tảiỨngDụngClick}
        LiênHệChúngTôiClick={liênHệChúngTôiClick}
        HủyTàiKhoảnClick={hủyTàiKhoảnClick}
        showSidebar={showSidebar}
        showLanguageSelector={showLanguageSelector}
        showLanguageSelectorClick={showLanguageSelectorClick}
        changeLanguage={changeLanguage}
        /> :
        <Navbar 
        GiớiThiệuSảnPhẩmClick={giớiThiệuSảnPhẩmClick} 
        CâuHỏiThườngGặpClick={câuHỏiThườngGặpClick}
        TảiỨngDụngClick={tảiỨngDụngClick}
        LiênHệChúngTôiClick={liênHệChúngTôiClick}
        HủyTàiKhoảnClick={hủyTàiKhoảnClick}
        showSidebar={showSidebar}
        showLanguageSelector={showLanguageSelector}
        showLanguageSelectorClick={showLanguageSelectorClick}
        changeLanguage={changeLanguage}
        />
      }
      <NavbarSelector 
        giớiThiệuSảnPhẩm={giớiThiệuSảnPhẩm}
        câuHỏiThườngGặp={câuHỏiThườngGặp}
        tảiỨngDụng={tảiỨngDụng}
        liênHệChúngTôi={liênHệChúngTôi}
        hủyTàiKhoản={hủyTàiKhoản}
        isEnglish={isEnglish}
      />
      <Sidebar 
        GiớiThiệuSảnPhẩmClick={giớiThiệuSảnPhẩmClick} 
        CâuHỏiThườngGặpClick={câuHỏiThườngGặpClick}
        TảiỨngDụngClick={tảiỨngDụngClick}
        LiênHệChúngTôiClick={liênHệChúngTôiClick}
        HủyTàiKhoảnClick={hủyTàiKhoảnClick}
        giớiThiệuSảnPhẩm={giớiThiệuSảnPhẩm}
        câuHỏiThườngGặp={câuHỏiThườngGặp}
        tảiỨngDụng={tảiỨngDụng}
        liênHệChúngTôi={liênHệChúngTôi}
        hủyTàiKhoản={hủyTàiKhoản}
        hideSidebar={hideSidebar}
        showSidebarLanguageSelectorClick={showSidebarLanguageSelectorClick}
        showSidebarLanguageSelector={showSidebarLanguageSelector}
        sidebar={sidebar}
        changeLanguage={changeLanguage}
        isEnglish={isEnglish}
      />

      {giớiThiệuSảnPhẩm && isEnglish ? <Home /> : giớiThiệuSảnPhẩm && <GiớiThiệuSảnPhẩm />}
      {câuHỏiThườngGặp && isEnglish ? <FAQ /> : câuHỏiThườngGặp && <CâuHỏiThườngGặp />}
      {tảiỨngDụng && isEnglish ? <Download /> : tảiỨngDụng && <TảiỨngDụng />}
      {liênHệChúngTôi && isEnglish ? <ContactUs /> : liênHệChúngTôi && <LiênHệChúngTôi />}
      {hủyTàiKhoản && isEnglish ? <AccountCancellation /> : hủyTàiKhoản && <HủyTàiKhoản />}

      {/* <CryptoTable /> */}
    </div>
  );
}

export default App;
