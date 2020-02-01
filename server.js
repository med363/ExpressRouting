const express =require('express')
const app=express()
// app.use(date=(req,res,next)=>{
//     let requistAt=new Date()
//     console.log(requistAt)
//     next()
// })

app.get('/',(req,res)=>{
    const currentDate = new Date();
    const hour = currentDate.getHours();
    console.log('currentDate: ', currentDate)
    console.log('hour: ', hour)
    if (hour>=8 && hour<=17)
    return(res.sendFile(__dirname+'/public/home.html'))
    else
    return(res.sendFile(__dirname+'/public/not-open.html'))
})
app.get('/contact',(req,res)=>{
    const currentDate = new Date();
    const hour = currentDate.getHours();
    console.log('currentDate: ', currentDate)
    console.log('hour: ', hour)
    if (hour>=8 && hour<=17)
    return(res.sendFile(__dirname+'/public/contact.html'))
    else
    return(res.sendFile(__dirname+'/public/not-open.html'))
})
app.get('/ourservices',(req,res)=>{
    const currentDate = new Date();
    const hour = currentDate.getHours();
    console.log('currentDate: ', currentDate)
    console.log('hour: ', hour)
    if (hour>=8 && hour<=17)
    return(res.sendFile(__dirname+'/public/ourservices.html'))
    else
    return(res.sendFile(__dirname+'/public/not-open.html'))
})

app.listen(3000,(error)=>{
    if (error ) console.log("server not running on 3000")
    else console.log("server running on 3000")
})