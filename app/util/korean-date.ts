import dayjs from 'dayjs'

export const toKoreanDate = (date: string) => {
    return dayjs(date).format('YYYY년 MM월 DD일')
}