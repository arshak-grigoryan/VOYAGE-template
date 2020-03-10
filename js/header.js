function showSearchInput(){
    let prenavbar = document.querySelector('.prenavbar'),
        input = document.querySelector('#form-search > input'),
        formSearch = document.querySelector('.form-wrap')
    if(prenavbar.style.display !== 'none'){
        prenavbar.style.display = 'none'
        formSearch.style.width = '100%'
        input.style.display = 'inline-block'
        setTimeout(()=>{
            input.focus()
            input.style.width = 'calc(100% - 42px - 42px )'
        })
    } else{
        // let ulMenuMain = document.querySelector('#ulMenuMain')
        // if(window.innerWidth > 1366){
        //     ulMenuMain.style.display = 'flex'
        //     // ulMenuMain.style.height = 'auto'
            
        // } else{
        //     ulMenuMain.style.display = 'none'
        //     // ulMenuMain.style.height = '0px'
        // }
        prenavbar.style.display = 'flex'
        formSearch.style.width = '42px'
        input.style.display = 'none' 
        input.style.width = '0'
    }
}

function showHiddenMenu(){
    let hiddenMenu = document.querySelector('#ulMenuMain')
    if(hiddenMenu.style.display !== 'flex'){
        hiddenMenu.style.display = 'flex'
        hiddenMenu.style.height = 'auto'
    } else{
        hiddenMenu.style.height = '0'
        hiddenMenu.style.display = 'none'
    }
}

function toggleMenuItem(event){
    let ul = event.target.parentElement.children[1]
    if(window.innerWidth <= 1366){
        if(ul.style.display !== 'block'){
            ul.style.display = 'block'
        } else  {
            ul.style.display = 'none'
        }
    }
}

export { showSearchInput, showHiddenMenu, toggleMenuItem }