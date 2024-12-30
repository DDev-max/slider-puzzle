export interface VictoryState{
    victory: boolean
    setVictory: Dispatch<SetStateAction<boolean>>
}

export interface StopWatchState{
    stopWatch: number
    setStopWatch: Dispatch<SetStateAction<number>>
}

export interface MovementsState{
    movements: number[]
    setMovements: Dispatch<SetStateAction<number[]>>
}

export interface PuzzleCntxtValues extends MovementsState, VictoryState {}

export interface UseHasWinProps {
    movements: number[]
    setVictory: Dispatch<SetStateAction<boolean>>
}

export interface UseChangeStopWatchProps {
    setStopWatch: Dispatch<SetStateAction<number>>
    victory: boolean
}

export interface RestartGameProps {
    setStopWatch: Dispatch<SetStateAction<number>>
    setRefresh: Dispatch<SetStateAction<number>>
    setMovements: Dispatch<SetStateAction<number[]>>
    randomArray: number[]
    setVictory: Dispatch<SetStateAction<boolean>>
}


export interface ResetBtnProps{
    setStopWatch: Dispatch<SetStateAction<number>>
}

export interface SelectPieceProps{
    idx: number
    e: DragEvent<HTMLDivElement>
    setGrabIdx: Dispatch<SetStateAction<number>>
    isGrabbingEmptyPiece: MutableRefObject<boolean>
}


export interface ExchangePiecesProps extends MovementsState{
    oldPieceIdx: number
    newPieceIdx: number
}


export interface DependentAttributesProps extends MovementsState{
    idx: number
    emptyPiece: number
    elmnt: number
    isGrabbingEmptyPiece: MutableRefObject<boolean>
    size: number
    grabIdx: number
    allPiecesRef: MutableRefObject<HTMLDivElement[]>
}
