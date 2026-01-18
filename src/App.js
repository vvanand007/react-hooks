import './App.css';
import SignUpForm from './useActionStateDemo/SignUpForm';
import WithoutUseCallback from './useCallback/WithoutUseCallback';
import WithUseCallback from './useCallback/WithUseCallback';
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
      {/* <WithUseMemoDemo/> */}
      {/* <WithoutUseCallback/> */}
      <WithUseCallback/>
    </div>
  );
}


export default App;
