import logo from './logo.svg';
import './App.css';
import StudentInfo from "./component/StudentInfo";
let students = [
  {
    id: 1,
    name: 'Nguyễn Văn A',
    age: 18,
    address: 'Hà Nội'
  },
  {
    id: 2,
    name: 'Nguyễn Văn B',
    age: 29,
    address: 'Đà Nẵng'
  },
  {
    id: 1,
    name: 'Nguyễn Văn C',
    age: 48,
    address: 'Hà Lội'
  }
]
function App() {
  return (
      <StudentInfo students={students}/>
  );
}

export default App;
