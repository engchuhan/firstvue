export default{
    state:{
        isCollapse:false//控制菜单的展开还是收起状态
    },
    mutations:{
        //修改菜单展开收起的方法
        collapseMenu(state){
            state.isCollapse=!state.isCollapse
        }
    }
}