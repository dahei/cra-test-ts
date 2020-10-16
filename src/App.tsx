import React from 'react';
import {Button, Panel, sum} from "mytslib";
import styles from './appStyles.module.scss';

function App() {
    return (
        <div>
            <Button label={'I stand alone'}/>
            <Panel title={'Panel title here'}>
                <Button label={'I am in the panel'}/>
                <Button label={'I have a custom className'} className={styles.customButton}/>
                {`40 + 2 = ${sum(40,2)}`}
            </Panel>
        </div>
    );
}

export default App;
