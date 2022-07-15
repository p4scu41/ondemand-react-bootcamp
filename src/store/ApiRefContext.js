import { createContext, useContext, useMemo } from "react";
import { useLatestAPI } from "../utils/hooks/useLatestAPI";

const ApiRefContext = createContext();
ApiRefContext.displayName = 'ApiRefContext';

function ApiRefProvider(props) {
  const { ref: apiRef, isLoading: isApiRefLoading } = useLatestAPI();
  const value = useMemo(() => { return { apiRef, isApiRefLoading }; }, [apiRef, isApiRefLoading]);

  return <ApiRefContext.Provider value={ value } {...props}/>
}

function useApiRef() {
  const value = useContext(ApiRefContext);

  if (value === undefined) {
    throw new Error('useApiRef must be used within a ApiRefProvider');
  }

  return value;
}

export {ApiRefProvider, useApiRef};
