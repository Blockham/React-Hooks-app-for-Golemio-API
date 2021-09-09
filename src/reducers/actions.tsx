type Action =
    | {type: 'OPEN_MODAL'}
    | {type: 'CLOSE_MODAL'}
    | {type: 'FETCH_MODAL', payload: ITile}
    | {type: 'FETCH_TILES'}
    | {type: 'FETCH_TILES_COMPLETE', payload: ITile[]}
    | {type: 'FETCH_TILES_FAILED', payload: string}
    | {type: 'CHANGE_API_KEY', payload: string}
    | {type: 'CHANGE_LANG_CODE', payload: string};
