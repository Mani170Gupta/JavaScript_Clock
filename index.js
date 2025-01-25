let hour,minute,second
hour = document.getElementById('hour')
minute = document.getElementById('minute')
second = document.getElementById('second')

setInterval(()=>{
let date = new Date()
let h=date.getHours()%12
let m= date.getMinutes()
let s = date.getSeconds()
console.log(h,m,s)
let i=6*s
let j=6*m+(s*0.1)
let k=30*h+(m*0.5)
second.style.transform=`rotate(${i}deg)`
minute.style.transform=`rotate(${j}deg)`
hour.style.transform=`rotate(${k}deg)`

document.getElementById('digital').innerHTML=`${h}:${m}:${s}` 

},1000)