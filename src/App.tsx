import { useState } from 'react';

import InputImage from '~components/InputImage/InputImage';
import Testinho from '~components/Testinho/Testinho';

import scss from './App.module.scss';

import './styles/base.scss';

interface ITest {
  sim: string;
}

function App(role: ITest) {
  const [sim, setSim] = useState('');

  const ali = (opa: string) => {
    setSim(opa);
  };

  return (
    <div>
      <div className={scss.teste} id="asdasdas" onClick={() => ali('oi')}>
        <p>Hello World! SIM?</p> {role.sim} {sim}
        <Testinho />
      </div>
      <div>
        <InputImage />
      </div>
    </div>
  );
}

export default App;
