import './App.css';
import CapsuleItem from './components/CapsuleItem/CapsuleItem';
import PostItem from './components/PostItem/PostItem';


const App = () => {
 
  return (
    <div className='wrapper'>
      <h1 className='header'>Capsules</h1>
      <CapsuleItem />
      <h1 className='header'>Post List</h1>
      <PostItem />
    </div>
  );
}

export default App;

