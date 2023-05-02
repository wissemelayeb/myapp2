import './App.css';
import ProfilePhoto from './Component/Profile/PhotoProfile';
import FullName from './Component/Profile/FullName';
import Address from './Component/Profile/Address';
import './Component/Profile/PhotoProfile.css';
import './Component/Profile/FullName.css';
import './Component/Profile/Address.css';
function App () {
return (
<div className="App"> 
<ProfilePhoto/>
<FullName/>
<Address/>
</div>
);
}


export default App;

