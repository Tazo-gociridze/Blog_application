import { NavigateOptions, URLSearchParamsInit } from 'react-router-dom'

export type SetURLSearchParamsType = (
  nextInit: URLSearchParamsInit,
  navigateOptions?: NavigateOptions | undefined,
) => void

export interface BlogSearchFormProps {
  searchParams: URLSearchParams
  setSearchParams: SetURLSearchParamsType
}
