import React, { useCallback, useEffect, useGlobal } from 'reactn';
import style from '../style/SetPattern.module.scss'
import PatternGroups from "../pattern";
import { logic } from "./LifeGame";

const SetPattern: React.FC = () => {
    const [isSetting, setIsSetting] = useGlobal('isSetting')
    const [settingPattern, setSettingPattern] = useGlobal('settingPattern')

    const handleEscape = useCallback(() => {
        setIsSetting(false).then()
        setSettingPattern(undefined).then()
    }, [setIsSetting, setSettingPattern])

    const handleKeyDown = useCallback(({key}) => {
        if (key === 'Escape') handleEscape()
    }, [handleEscape])

    useEffect(() => {
        window.addEventListener('keydown', handleKeyDown)
        return () => window.removeEventListener('keydown', handleKeyDown)
    }, [handleKeyDown])

    useEffect(() => {
        logic.finishSetting = handleEscape
    }, [handleEscape])

    return (
        <div className={style.wrapper}>
            <div className={`${style.body} ui`}>
                <input onChange={() => setIsSetting(!isSetting)} type="checkbox" id="menu-btn-check"
                       className={style.menuBtnCheck} checked={isSetting}/>
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
                                               id={`pattern-${index}`} name="pattern"
                                               checked={settingPattern === pattern}/>
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
