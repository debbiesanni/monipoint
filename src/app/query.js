"use client"
const observer = new IntersectionObserver((entry)=>{
    console.log(entry, "entry================")
})
const element = document.getElementById("hero")

new IntersectionObserver((element)=>{
    console.log(element, "entry================")
})
    console.log("entry================")