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

export interface PuzzleProps extends MovementsState{
    size?: number
}


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
    setMovements: Dispatch<SetStateAction<number[]>>
    setVictory: Dispatch<SetStateAction<boolean>>

}

export interface SelectPieceProps{
    idx: number
    e: DragEvent<HTMLDivElement>
    setGrabIdx: Dispatch<SetStateAction<number>>
    isGrabbingEmptyPiece: MutableRefObject<boolean>
}


export interface SwapPiecesProps extends MovementsState{
    oldPieceIdx: number
    newPieceIdx: number
}


export interface DependentAttributesProps extends MovementsState{
    idx: number
    emptyPiece: number
    elmnt: number
    isGrabbingEmptyPiece: MutableRefObject<boolean>
    grabIdx: number
    allPiecesRef: MutableRefObject<HTMLDivElement[]>
    size?: number
}



export interface StopWatchProps extends StopWatchState{
    victory: boolean
}

export interface VictoryProps extends VictoryState, StopWatchState, MovementsState{}

export interface HeaderProps extends MovementsState, VictoryState{}


export interface NearEmptyPieceAndAnotherRowProps{
    emptyPieceIdx: number
    elmnt :  number
    movements: number[]
    size? : number
}


export interface HandleDragOverProps{
    e:  DragEvent<HTMLDivElement>
    isGrabbingEmptyPiece :MutableRefObject<boolean>
    canBeGrabbed: boolean
    isEmptyPiece: boolean
}


export interface HandleKeyDownProps extends MovementsState{
    e: KeyboardEvent<HTMLDivElement>
    idx: number
    emptyPieceIdx: number
    leftPiece: number
    rightPiece: number
    bottomPiece: number
    topPiece: number
    canBeGrabbed: boolean
    allPiecesRef: MutableRefObject<HTMLDivElement[]>

}


export interface UseRandomArrayProps{
    refresh?: number
    size?: number
}