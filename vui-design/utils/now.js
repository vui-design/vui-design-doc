/**
* 用于获取当前时刻的时间戳
*/
export default Date.now || () => new Date().getTime();
