document.addEventListener('DOMContentLoaded', function() {
    
    //theme color
    if(localStorage.getItem('varColorTheme')){
        document.documentElement.style.setProperty('--color-theme', localStorage.getItem('varColorTheme'));
    }

    let inputThemeColor = document.getElementById("theme-color");
    if(inputThemeColor){
        inputThemeColor.value = localStorage.getItem('varColorTheme');
        inputThemeColor.addEventListener('change', function(){
            document.documentElement.style.setProperty('--color-theme', this.value);
            localStorage.setItem('varColorTheme', this.value);
        });
    }


    // theme
    function lightTheme(){
        document.documentElement.style.setProperty('--color-1', '#1E1D20');
        document.documentElement.style.setProperty('--color-2', '#ffffff');
        document.documentElement.style.setProperty('--color-2_80', '#d2d2d2');
        document.documentElement.style.setProperty('--color-2_60', '#ABABA6');
        document.getElementById("dd_logo").src = 'images/logo_dark.png';
    }
    function darkTheme(){
        document.documentElement.style.setProperty('--color-1', '#ABABA6');
        document.documentElement.style.setProperty('--color-2', '#1E1D20');
        document.documentElement.style.setProperty('--color-2_80', '#302F32');
        document.documentElement.style.setProperty('--color-2_60', '#4c4c4c');
        document.getElementById("dd_logo").src = 'images/logo_light.png';
    }
    function changeTheme(theme){
        if(theme=="light"){
            lightTheme();
        } 
        if(theme=="dark") {
            darkTheme();
        }
    }

    if(localStorage.getItem('varTheme')){
        changeTheme(localStorage.getItem('varTheme'))
    }

    let themeInputs = document.querySelectorAll('.theme-input');
    if(themeInputs.length){
        themeInputs.forEach(input => {
            input.addEventListener('change', function(){
                let selectButtonText = this.closest('.select').querySelector('.select-button__text');
                selectButtonText.innerText = this.nextElementSibling.innerText;

                changeTheme(this.value);
                localStorage.setItem('varTheme', this.value);
            })
        });
    }
    
    // menu-toggle
    let menuToggle = document.querySelector('.menu-toggle');
    let aside = document.querySelector('.aside');
    menuToggle.addEventListener('click', function() {
        this.classList.toggle('active');
        aside.classList.toggle('active');
    })
    
});