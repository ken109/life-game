import React, { useGlobal } from 'reactn';
import style from '../style/SetPattern.module.scss'
import PatternGroups from "../pattern";

const SetPattern: React.FC = () => {
    const [isSetting, setIsSetting] = useGlobal('isSetting')
    const setSettingPattern = useGlobal('settingPattern')[1]

    return (
        <div className={style.wrapper}>
            <div className={`${style.body} ui`}>
                <input onChange={() => setIsSetting(!isSetting)} type="checkbox" id="menu-btn-check"
                       className={style.menuBtnCheck}/>
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
                                        <input onChange={() => setSettingPattern(pattern)} type="radio"
                                               id={`pattern-${index}`} name="pattern"/>
                                        <label htmlFor={`pattern-${index}`}>{pattern.name}</label>
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
