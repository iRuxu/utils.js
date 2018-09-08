export default function (){
    /**
     * 返回一个16进制编码随机颜色
     * @name randomColor
     * @returns {String} #FF3399
     */
    return '#' + Math.floor(Math.random() * 0xFFFFFF).toString(16).toUpperCase()
}