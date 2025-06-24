function addLanguage(language){
        document.createElement('li')
        const li = document.createElement('li')
        li.innerHTML = `${language}`
        document.querySelector('.Language').appendChild(li)
    }
    addLanguage('Python')

    // optimized version
    function addOptiLang(langName){
        const li = document.createElement('li')
        li.appendChild(document.createTextNode(langName))
        document.querySelector('.Language').appendChild(li)
    }
    addOptiLang('Java')
    addOptiLang('C++')