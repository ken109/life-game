import React from 'reactn';
import style from '../style/SetPattern.module.scss'
import PatternGroups from "../pattern";

const SetPattern: React.FC = () => {
    return (
        <div className={style.wrapper}>
            <div className={`${style.body} ui`}>
                <input type="checkbox" id="menu-btn-check" className={style.menuBtnCheck}/>
                <label className={style.menuBtn} htmlFor="menu-btn-check">
                    <span/>
                </label>
                <div className={style.menu}>
                    {PatternGroups.map(patternGroup => (
                        <div key={patternGroup.name} className={style.patternGroup}>
                            <h4>{patternGroup.name}</h4>
                            <div>
                                {patternGroup.patterns.map((pattern, index) => (
                                    <div key={pattern.name} className={style.pattern}>
                                        <input type="radio" id={`pattern-${index}`} name="pattern"/>
                                        <label htmlFor={`pattern-${index}`} >{pattern.name}</label>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default SetPattern;
