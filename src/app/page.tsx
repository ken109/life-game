"use client"

import {Controller, Info, SetPattern} from "@/components";
import dynamic from "next/dynamic";
import {RecoilRoot} from "recoil";
import styles from './page.module.scss'

const LifeGame = dynamic(() => import('@/components/LifeGame'), {ssr: false});

export default function Home() {
    return (
        <RecoilRoot>
            <div className={styles.app}>
                <LifeGame/>
                <SetPattern/>
                <Info/>
                <Controller/>
            </div>
        </RecoilRoot>
    )
}
