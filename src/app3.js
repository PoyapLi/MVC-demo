import $ from  'jquery'
import './app3.css'

const $square = $('#app3 .square')

$square.on('click',()=>{
    // .toggleClass() 方法，点击后没有就加 active ，有就删掉
    $square.toggleClass('active')
})