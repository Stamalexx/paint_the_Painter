// import "./assets/css//App.css";
import SectionApp from './components/SectionApp/SectionApp';
import FooterApp from './components/FooterApp/FooterApp';
import AppBar from './components/AppBar/AppBar';
import NavigationApp from './components/NavigationApp/NavigationApp';
import AsideApp from './components/AsideApp/AsideApp';


function App() {
  return (
    <>
      <AppBar />
      <NavigationApp/>
      <SectionApp />
      <AsideApp />
      <FooterApp />
    </>
  );
}

export default App;
