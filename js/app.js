'use strict'


const botones = document.querySelectorAll('.boton')
const textos = document.querySelectorAll('.texto')
const grid = document.querySelectorAll('.grid')
const cardPasta = document.querySelectorAll('.card.pasta')
const cardPizza = document.querySelectorAll('.card.pizza')
const lightbox2 = document.querySelector('.lightbox2')
const img2 = document.querySelectorAll('.lightbox2 .img')
const section2 = document.querySelectorAll('.lightbox2 .section')
const lightbox = document.querySelector('.lightbox')
const img = document.querySelectorAll('.lightbox .img')
const section = document.querySelectorAll('.lightbox .section')
const card = document.querySelectorAll('.card')
const cerrar = document.querySelector('.cerrar')
const cerrado = document.querySelector('.cerrado')
const titular = document.querySelector('.titular')
const info = document.querySelector('.info')

botones.forEach((v,i)=>{
    botones[i].addEventListener('click',()=>{
        botones.forEach((v,j)=>{
            botones[j].classList.remove('activo')
        })
        botones[i].classList.add('activo')
        textos.forEach((v,j)=>{
            textos[j].classList.remove('activo')
        })
        grid.forEach((v,j)=>{
            grid[j].classList.remove('activo')
        })
        textos[i].classList.add('activo')
        grid[i].classList.add('activo')
    })
    
})
img2.forEach((v,i)=>{
    img2[i].addEventListener('click',()=>{
        img2.forEach((v,j)=>{
            img2[j].classList.remove('activo')
            section2[j].classList.remove('activo')
        })
        img2[i].classList.add('activo')
        section2[i].classList.add('activo')
    })
})

cardPasta.forEach((v,i)=>{
    cardPasta[i].addEventListener('click',()=>{
        lightbox2.classList.add('activo')
        img2[i].classList.add('activo')
        section2[i].classList.add('activo')
    })
})
cardPizza.forEach((v,i)=>{
    cardPizza[i].addEventListener('click',()=>{
        lightbox.classList.add('activo')
        img[i].classList.add('activo')
        section[i].classList.add('activo')
    })
})

img.forEach((v,i)=>{
    img[i].addEventListener('click',()=>{
        img.forEach((v,j)=>{
            img[j].classList.remove('activo')
            section[j].classList.remove('activo')
        })
        img[i].classList.add('activo')
        section[i].classList.add('activo')
    })
})

cerrar.addEventListener('click',()=>{
    lightbox.classList.remove('activo')
    img.forEach((v,i)=>{
        img[i].classList.remove('activo')
        section[i].classList.remove('activo')
    })

    
})
cerrado.addEventListener('click',()=>{
    lightbox2.classList.remove('activo')
    img2.forEach((v,i)=>{
        img2[i].classList.remove('activo')
        section2[i].classList.remove('activo')
    })
})

titular.addEventListener('click',()=>{
    info.classList.toggle('activo')
})

