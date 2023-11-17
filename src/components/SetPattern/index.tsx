"use client"

import {isSettingState, settingPatternState} from "@/states";
import globalStyle from "@/styles/global.module.scss"
import React, {useCallback, useEffect} from 'react';
import {useRecoilState} from "recoil";
import PatternGroups from "../../domain/pattern";
import {logic} from "../LifeGame";
import styles from './index.module.scss'

const SetPattern: React.FC = () => {
    const [isSetting, setIsSetting] = useRecoilState(isSettingState)
    const [settingPattern, setSettingPattern] = useRecoilState(settingPatternState)

    const handleEscape = useCallback(() => {
        setIsSetting(false)
        setSettingPattern(null)
    }, [setIsSetting, setSettingPattern])

    const handleKeyDown = useCallback(({key}: KeyboardEvent) => {
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
        <div className={styles.wrapper}>
            <div className={`${globalStyle.ui} ${styles.body}`}>
                <input onChange={() => setIsSetting(!isSetting)} type="checkbox" id="menu-btn-check"
                       className={styles.menuBtnCheck} checked={isSetting}/>
                <label className={styles.menuBtn} htmlFor="menu-btn-check">
                    <span/>
                </label>
                <div className={styles.menu}>
                    {PatternGroups.map(patternGroup => (
                        <div key={patternGroup.name} className={styles.patternGroup}>
                            <h4>{patternGroup.name}</h4>
                            <div>
                                {patternGroup.patterns.map((pattern, index) => (
                                    <div key={pattern.name} className={styles.pattern}>
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
