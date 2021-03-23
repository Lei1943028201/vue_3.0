export default function reduceNum(){
    return this.num.reduce((total, currentValue)=>{
        let index = total.length - 1
        total[index].length < 2 ? total[index].push(currentValue) : total.push([currentValue])
        return total
    },[[]])
}
