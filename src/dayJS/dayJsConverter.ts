import dayjs from 'dayjs'
import { format, parseISO } from 'date-fns'
import relativeTime from 'dayjs/plugin/relativeTime'
dayjs.extend(relativeTime)

export const dayJsConverter = (data: any) => {
  dayjs.locale('en')
  const createdAt = dayjs(data.created_at)
  const now = dayjs()
  const diffInDays = now.diff(createdAt, 'day')

  let formattedDate: string
  if (diffInDays < 1) {
    formattedDate = createdAt.fromNow()
  } else {
    formattedDate = createdAt.format('YYYY/MM/DD - HH:mm')
  }

  const formattedCreateDate = data.created_at
    ? format(parseISO(data.created_at), 'yyyy/MM/dd - HH:mm')
    : 'date not set'

  return { formattedCreateDate, formattedDate }
}
