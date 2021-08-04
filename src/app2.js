import './app2.css'
import $ from 'jquery'

const $tabBar = $('#app2 .tab-bar')
const $tabContent = $('#app2 .tab-content')

$tabBar.on('click', 'li', (e) => {
    //用jquery把dom封装，e.currentTarget为监听元素
    const $li = $(e.currentTarget)
    //点击的元素添加 class="selected",同时兄弟元素删除 selected
    $li.addClass('selected')
        .siblings().removeClass('selected')
    //一个jquery元素用 .index() 即得其排第几
    const index = $li.index()
    console.log(index);
    $tabContent.children()
        // .eq() 方法找到被点击的 children 是第几个
        // 永远不要用 .eq(index).show 和 .siblings().hide() 或 .css({}) 来实现
        .eq(index).addClass('active')
        .siblings().removeClass('active')
})
// 给 tabBar 子代第一个元素自动触发 click 事件，即实现默认选择第一个
$tabBar.children().eq(0).trigger('click')