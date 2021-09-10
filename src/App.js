import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import StaffList from './components/StaffListComponent';
import { STAFFS } from './shared/staffs';

function App() {
  return (
    <div className="App">
     <div className="alert alert-primary text-center" role="alert">
       <h1>Ứng Dụng Quản Lý Nhân Sự V1.0</h1>
     </div>
     <StaffList staffs={STAFFS}/>
    </div>
  );
}

export default App;
