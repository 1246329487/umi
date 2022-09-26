export const sendAction = () => {
    return {
        type: 'SEND_ACTION',
        value: "第一次发送了一个action"
    }
}
export const movieAction = (value) => {
    return {
        type: 'MOVIE_ACTION',
        value: value
    }
}