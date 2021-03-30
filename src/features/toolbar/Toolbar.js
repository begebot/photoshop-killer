import React from 'react';
import classnames from 'classnames';
import { useSelector, useDispatch } from 'react-redux';

import {
    selectedToolId,
    select as selectTool
} from './toolbarSlice';
import styles from './Toolbar.module.css';

export default function Toolbar({ sections }) {
    const activeTool = useSelector(selectedToolId);
    const dispatch = useDispatch();
    return (
        <div className={styles.toolbar}>
            {sections.map((section, key) => (
                <div key={key} className={styles.section}>
                    {section.map(id => (
                        <div key={id} className={classnames({
                            [styles.button]: true,
                            [styles.activeButton]: id === activeTool
                        })}
                            onClick={() => dispatch(selectTool(id))}
                        >
                            {id}
                        </div>
                    ))}
                </div>
            ))}
        </div>
     );
}
