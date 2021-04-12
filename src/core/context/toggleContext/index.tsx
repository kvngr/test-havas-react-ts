import { createContext, FC, useCallback, useContext, useMemo, useState } from 'react';

type State = {
    show: boolean[],
    toggle: (id: number) => void;
};

const initialState: State = {
    show: [],
    toggle: () => { },
};

const ToggleContext = createContext<State>(initialState);

export const ToggleContextProvider: FC<{}> = ({ children }) => {

    const [state, setState] = useState(initialState);

    const toggle = useCallback((id: number) => {
        setState((prevState) => {
            const show = [...prevState.show];
            show[id] = !show[id];
            return {
                ...prevState,
                show
            }
        });
    }, []);

    const show = useMemo(() => state.show, [state.show])

    return (
        <ToggleContext.Provider value={{ show, toggle }}>
            {children}
        </ToggleContext.Provider>
    )
};

export const useToggleContext = () => useContext(ToggleContext);