import './App.css';
import SignUpForm from './useActionStateDemo/SignUpForm';
import UseContextDemo from './useContextDemo/UseContextDemo';
import WithoutUseMemoDemo from './useMemo/WithoutUseMemoDemo';
import WithUseMemoDemo from './useMemo/WithUseMemoDemo';
import AutoFocus from './useRefDemo/AutoFocus';
import PrevState from './useRefDemo/PrevState';

function App() {
  return (
    <div>
      {/* <UseContextDemo /> */}
      {/* <AutoFocus/> */}
      {/* <PrevState/> */}
      {/* <SignUpForm/> */}
      {/* <WithoutUseMemoDemo/> */}
      <WithUseMemoDemo/>
    </div>
  );
}


export default App;
